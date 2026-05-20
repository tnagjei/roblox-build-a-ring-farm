// input: site route registry, sitemap route, and site URL
// output: Next.js robots.txt metadata route aligned with completed sitemap scope
// pos: App Router crawler policy

import type { MetadataRoute } from "next";
import { robotsAllowedRoutes } from "@/lib/page-registry";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/", "/user-content/"]
      },
      {
        userAgent: [
          "GPTBot",
          "Claude-Web",
          "Anthropic-AI",
          "PerplexityBot",
          "GoogleOther",
          "DuckAssistBot"
        ],
        allow: robotsAllowedRoutes,
        disallow: ["/user-content/"]
      }
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl
  };
}
