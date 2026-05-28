// input: site route registry and site URL
// output: Next.js sitemap.xml metadata route limited to completed pages with fresh build date
// pos: App Router SEO route

import type { MetadataRoute } from "next";
import { sitemapRoutes } from "@/lib/page-registry";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  return sitemapRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: buildDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
