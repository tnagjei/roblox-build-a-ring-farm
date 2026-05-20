// input: Build A Ring Farm site and game settings
// output: single source of truth for site identity, locales, route groups, and optional integrations
// pos: site configuration boundary

export const gameConfig = {
  siteName: "Build A Ring Farm Guide",
  shortName: "Build A Ring Farm",
  gameName: "Build A Ring Farm",
  gameSlug: "build-a-ring-farm",
  primaryKeyword: "Build A Ring Farm",
  siteDomain: "https://www.buildaringfarm.org",
  contactEmail: "tangjei414@gmail.com",
  copyrightOwner: "tangjei414@gmail.com",

  defaultLocale: "en",
  completedLocales: ["en"],

  coreSlugs: ["", "codes", "updates", "beginners-guide", "crops", "seeds", "upgrades", "gear-shop", "advanced-crops", "money-farming", "weather-events", "tier-list"],
  completedCoreSlugs: ["", "codes", "updates", "beginners-guide", "crops", "seeds", "upgrades", "gear-shop", "advanced-crops", "money-farming", "weather-events", "tier-list"],
  englishOnlySlugs: ["scripts"],
  completedEnglishOnlySlugs: ["scripts"],

  homeVideoIds: [] as string[],

  robloxUrl: "https://www.roblox.com/games/107646426076756/Build-A-Ring-Farm",
  robloxGroupUrl: "",
  creatorName: "Gamecreates",
  creatorType: "Group",

  analytics: {
    googleAnalyticsId: "G-PPB0397NMC",
    yandexVerification: "79f0a3dab5c9e637",
    clarityId: "wty71lzhdp",
    adsenseClient: "ca-pub-3083296102953963",
    thirdPartyAdScripts: [] as string[]
  },

  safetyPolicy: {
    noFakeCodes: true,
    noInventedRewards: true,
    noInventedUnitStats: true,
    noOfficialClaimWithoutSource: true,
    noScriptDownloads: true,
    noCredentialCollection: true
  }
} as const;

export type TemplateLocale = (typeof gameConfig.completedLocales)[number];
export type CoreSlug = (typeof gameConfig.coreSlugs)[number];
export type EnglishOnlySlug = (typeof gameConfig.englishOnlySlugs)[number];
