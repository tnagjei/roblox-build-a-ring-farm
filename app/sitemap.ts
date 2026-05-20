// input: site route registry, site data, and site URL
// output: Next.js sitemap.xml metadata route limited to completed pages
// pos: App Router SEO route

import type { MetadataRoute } from "next";
import { sitemapRoutes } from "@/lib/page-registry";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: siteData.site.lastFullCheck,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
