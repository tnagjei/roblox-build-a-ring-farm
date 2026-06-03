// input: public Build A Ring Farm JSON data plus supplemental route data
// output: typed-ish data accessors for pages and components
// pos: shared data boundary

import rawData from "@/public/data/build-a-ring-farm.json";

const supplementalPages = [
  { key: "250kusers-code", path: "/250kusers-code/", title: "Build A Ring Farm 250KUSERS Code | Reported Status", description: "Track the Build A Ring Farm 250KUSERS code claim, reported reward, source status, and safe testing steps.", h1: "Build A Ring Farm 250KUSERS Code", lede: "Track 250KUSERS as a third-party reported code claim, not a verified active code.", focus: "250KUSERS Code", relatedPages: ["codes", "official-discord", "update-status", "money-farming"], primaryKeyword: "Build A Ring Farm 250KUSERS code" },
  { key: "official-discord", path: "/official-discord/", title: "Build A Ring Farm Official Discord | Source Status", description: "Build A Ring Farm official Discord source status, server discovery note, announcement proof boundary, and code verification policy.", h1: "Build A Ring Farm Official Discord", lede: "Separate discovered Discord server signals from verified code announcements.", focus: "Official Discord", relatedPages: ["codes", "250kusers-code", "update-status", "scripts"], primaryKeyword: "Build A Ring Farm official Discord" },
  { key: "plant-contracts", path: "/plant-contracts/", title: "Build A Ring Farm Plant Contracts | Update 4 Status", description: "Build A Ring Farm Plant Contracts page for the Update 4 reported mechanic, pending verification, and route impact.", h1: "Build A Ring Farm Plant Contracts", lede: "Track Plant Contracts as a reported Update 4 mechanic pending proof.", focus: "Plant Contracts", relatedPages: ["update-status", "seeds", "crops", "money-farming"], primaryKeyword: "Build A Ring Farm Plant Contracts" },
  { key: "farm-ring-bonuses", path: "/farm-ring-bonuses/", title: "Build A Ring Farm Farm Ring Bonuses | Update 4 Status", description: "Build A Ring Farm Farm Ring Bonuses page for the Update 4 reported ring bonus mechanic and pending source status.", h1: "Build A Ring Farm Farm Ring Bonuses", lede: "Track Farm Ring Bonuses as a reported Update 4 ring mechanic pending proof.", focus: "Farm Ring Bonuses", relatedPages: ["rings", "calculator", "update-status", "farm-layout"], primaryKeyword: "Build A Ring Farm Farm Ring Bonuses" },
  { key: "soil-quality-upgrades", path: "/soil-quality-upgrades/", title: "Build A Ring Farm Soil Quality Upgrades | Update 4 Status", description: "Build A Ring Farm Soil Quality Upgrades page for the Update 4 reported upgrade mechanic, pending source status, and ROI checks.", h1: "Build A Ring Farm Soil Quality Upgrades", lede: "Track Soil Quality Upgrades as a reported Update 4 upgrade mechanic pending proof.", focus: "Soil Quality Upgrades", relatedPages: ["upgrades", "fertilizer", "money-farming", "update-status"], primaryKeyword: "Build A Ring Farm Soil Quality Upgrades" },
  { key: "farm-skins", path: "/farm-skins/", title: "Build A Ring Farm Farm Skins | Update 4 Status", description: "Build A Ring Farm Farm Skins page for the Update 4 reported cosmetic mechanic, pending source status, and gameplay limits.", h1: "Build A Ring Farm Farm Skins", lede: "Track Farm Skins as a reported Update 4 cosmetic mechanic pending proof.", focus: "Farm Skins", relatedPages: ["update-status", "farm-layout", "money-farming", "beginners-guide"], primaryKeyword: "Build A Ring Farm Farm Skins" }
];

export const siteData = {
  ...rawData,
  pages: [...rawData.pages, ...supplementalPages]
};

export type SitePage = (typeof siteData.pages)[number];
export type PageKey = SitePage["key"];

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
