// input: public Build A Ring Farm JSON data
// output: typed-ish data accessors for pages and components
// pos: shared data boundary

import rawData from "@/public/data/build-a-ring-farm.json";

export type SitePage = (typeof rawData.pages)[number];
export type PageKey = SitePage["key"];

export const siteData = rawData;

export const requiredRoutes = siteData.pages.map((page) => page.path);

export function getPageByKey(key: PageKey): SitePage {
  const page = siteData.pages.find((item) => item.key === key);

  if (!page) {
    throw new Error(`Missing page data for key: ${key}`);
  }

  return page;
}

export function getPageByPath(path: string): SitePage {
  const page = siteData.pages.find((item) => item.path === path);

  if (!page) {
    throw new Error(`Missing page data for path: ${path}`);
  }

  return page;
}
