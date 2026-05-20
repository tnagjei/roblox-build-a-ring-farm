// input: site identity and route data
// output: Next.js PWA manifest metadata route
// pos: App Router manifest route

import type { MetadataRoute } from "next";
import { siteData } from "@/lib/site-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteData.site.name,
    short_name: siteData.site.shortName,
    description: siteData.site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f7ef",
    theme_color: "#17241f",
    categories: ["games", "entertainment", "reference"],
    icons: [
      {
        src: siteData.assets.icon,
        sizes: "512x512",
        type: "image/png"
      }
    ],
    shortcuts: [
      { name: "Codes", url: "/codes/" },
      { name: "Beginner Guide", url: "/beginners-guide/" },
      { name: "Updates", url: "/updates/" }
    ]
  };
}
