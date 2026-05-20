// input: locale, slug, and shared site config
// output: source-aware content objects for game pages
// pos: reusable content factory（更新规则：文件变更需同步本注释与所属目录 README）

import type { CodesPageContent, HomePageContent, StrategyPageContent } from "@/lib/content/page-types";
import { gameConfig } from "@/lib/game-config";

type StrategySlug = StrategyPageContent["slug"];

const localeLabels: Record<string, { suffix: string }> = {
  en: { suffix: "" },
  "zh-tw": { suffix: "繁體中文" },
  th: { suffix: "ภาษาไทย" }
};

function withLocale(text: string, locale: string) {
  const suffix = localeLabels[locale]?.suffix;
  return suffix ? `${text} | ${suffix}` : text;
}

function localizedHref(locale: string, slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  if (locale === gameConfig.defaultLocale) return cleanSlug ? `/${cleanSlug}/` : "/";
  return cleanSlug ? `/${locale}/${cleanSlug}/` : `/${locale}/`;
}

function titleCase(slug: string) {
  return slug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function pageTitle(slug: string) {
  if (slug === "beginners-guide") return "Beginner Guide";
  return titleCase(slug);
}

export function createTemplateHomePage(locale = "en"): HomePageContent {
  return {
    meta: {
      title: withLocale(`${gameConfig.gameName} Wiki | Codes, Crops & Guide`, locale),
      description: `${gameConfig.gameName} wiki for Roblox players: check codes status, seeds, crops, advanced crops, weather events, upgrades, money farming, updates, and offline income tips.`
    },
    slug: "",
    hero: {
      eyebrow: "Roblox farming simulator wiki",
      h1: withLocale(`${gameConfig.gameName} Wiki`, locale),
      lede: "Build A Ring Farm is a Roblox farming simulator about growing crops, upgrading your ring-shaped farm, selling harvests for cash, and using offline income to keep progress moving.",
      primaryAction: { label: "Start beginner guide", href: localizedHref(locale, "beginners-guide") },
      secondaryAction: { label: "Open Roblox page", href: "roblox", external: true }
    },
    stats: [
      { valueKey: "playing", label: "Playing now", detail: "Roblox API snapshot" },
      { valueKey: "visits", label: "Visits", detail: "Roblox API snapshot" },
      { valueKey: "favorites", label: "Favorites", detail: "Roblox API snapshot" },
      { valueKey: "approval", label: "Approval", detail: "Roblox API snapshot" }
    ],
    overviewSections: [
      {
        heading: "What is Build A Ring Farm?",
        body: [
          "Build A Ring Farm is a Roblox farming simulator built around a simple loop: grow plants, harvest crops, sell them for cash, upgrade your farm, expand the ring-shaped layout, and collect offline income between sessions.",
          "This homepage works as a Build A Ring Farm wiki hub. It connects codes, seeds, crops, advanced crop effects, weather events, upgrades, money farming, updates, and source checks in one place."
        ],
        list: ["Grow and harvest plants.", "Sell crops for cash.", "Upgrade and expand the farm.", "Use offline income as support progress."]
      },
      {
        heading: "Build A Ring Farm quick start route",
        body: [
          "New players should focus on stable farming before chasing rare outcomes. Keep plots active, harvest often, sell regularly, and reinvest cash into upgrades that improve repeated crop cycles.",
          "If you receive seed packs, sprays, fertilizer, or time skips from codes, treat them as progression boosts rather than the entire plan. Rewards can change or expire."
        ],
        list: ["Start with seeds and normal crops.", "Avoid idle plots.", "Reinvest cash into upgrades.", "Check codes only as bonus progress."]
      },
      {
        heading: "Seeds, crops, and weather events",
        body: [
          "Seeds are inputs, crops are outputs, and crop value is the cash engine behind the game. Weather events are a separate layer that may affect rare crop effects and value boosts.",
          "Exact seed pack contents, event odds, crop prices, and rare crop values should be verified before being published as fixed facts. This site labels unverified data as community reported."
        ],
        list: ["Seeds decide what you can grow.", "Crops decide cash flow.", "Weather events can affect rare outcomes.", "Rare effects should be source checked."]
      },
      {
        heading: "Money farming and upgrades",
        body: [
          "Money farming is not just about one best crop. It is about keeping cash moving through seeds, crops, selling, upgrades, weather event bonuses, and offline income. Strong upgrades are the ones that improve multiple future harvests.",
          "Use ROI thinking before buying gear: ask how many crop cycles are needed to earn back the cost, and whether that item improves normal farming or only rare situations."
        ],
        list: ["Keep cash cycling.", "Buy upgrades that repeat value.", "Delay unclear gear purchases.", "Recheck advice after updates."]
      },
      {
        heading: "Sources and verification policy",
        body: [
          "The official Roblox page confirms the game name, creator, basic farming loop, upgrades, selling plants for cash, and offline earnings. It does not confirm every code reward, spray cost, rare crop value, or weather event chance.",
          "For that reason, this Build A Ring Farm guide separates official facts from community reported claims. Community data can be useful, but it should be rechecked after updates."
        ],
        list: ["Official source: Roblox game page.", "Community data: code lists, rare effect tables, spray costs, event odds.", "Pending data: exact in-game values without screenshots."]
      },
      {
        heading: "What to read after the homepage",
        body: [
          "Use this homepage as the starting point, then move into the specific guide that matches your question. Codes help with rewards, seeds and crops explain the farming loop, weather events explain reported event effects, upgrades explain ROI, and advanced crops cover community reported rare effects.",
          "If your goal is faster cash, read the money farming page after you understand seeds, crops, upgrades, and event effects."
        ],
        list: ["Codes for reported rewards.", "Seeds for crop inputs.", "Weather events for reported event effects.", "Money farming for progression routes."]
      }
    ],
    snapshotTables: [
      {
        eyebrow: "Codes snapshot",
        title: "Reported Build A Ring Farm code rewards",
        rows: [
          { label: "UPDATE2", value: "Tropical Seed Pack", detail: "Reported by third-party code pages", status: "Community reported" },
          { label: "THANKYOU", value: "Autumn Spray", detail: "Reported by third-party code pages", status: "Community reported" },
          { label: "BARF:3", value: "Acid Spray", detail: "Reported by third-party code pages", status: "Community reported" }
        ]
      },
      {
        eyebrow: "Advanced crops snapshot",
        title: "Reported rare crop values",
        rows: [
          { label: "Rainbow", value: "5x", detail: "Highest reported value boost", status: "Community reported" },
          { label: "Radioactive", value: "3x", detail: "Reported rare crop effect", status: "Community reported" },
          { label: "Void", value: "2.25x", detail: "Reported rare crop effect", status: "Community reported" }
        ]
      },
      {
        eyebrow: "Weather events snapshot",
        title: "Reported weather event chances",
        rows: [
          { label: "Rain Event", value: "Wet 8%", detail: "Reported event effect", status: "Community reported" },
          { label: "Blizzard Event", value: "Frozen 4%", detail: "Reported event effect", status: "Community reported" },
          { label: "Galaxy Event", value: "Rainbow 1%", detail: "Reported event effect", status: "Community reported" }
        ]
      }
    ],
    directory: {
      eyebrow: "Build A Ring Farm navigation",
      title: "Build A Ring Farm wiki sections",
      cards: [
        { href: localizedHref(locale, "seeds"), title: "Seeds", description: "Use seed packs, crop unlocks, and reported rewards as farming inputs." },
        { href: localizedHref(locale, "crops"), title: "Crops", description: "Learn crop flow, harvest timing, selling logic, and upgrade priorities." },
        { href: localizedHref(locale, "advanced-crops"), title: "Advanced Crops", description: "Review rare crop effects, value boosts, event timing, and spray checks." },
        { href: localizedHref(locale, "weather-events"), title: "Weather Events", description: "Review reported Rain, Blizzard, Black Hole, Nuclear, and Galaxy event effects." },
        { href: localizedHref(locale, "upgrades"), title: "Upgrades", description: "Plan gear shop choices, ROI checks, and farm progression upgrades." },
        { href: localizedHref(locale, "money-farming"), title: "Money Farming", description: "Connect seeds, crops, upgrades, codes, and offline income into a cash route." },
        { href: localizedHref(locale, "beginners-guide"), title: "Farming Guide", description: "Learn the crop, harvest, upgrade, expand, sell, and offline income loop." },
        { href: localizedHref(locale, "codes"), title: "Codes", description: "Check verified Build A Ring Farm codes status, pending claims, and safe redemption notes." },
        { href: localizedHref(locale, "updates"), title: "Updates", description: "Track official Roblox changes, update signals, and recheck points." },
        { href: "/scripts/", title: "Scripts Safety", description: "Avoid unsafe downloads, credential requests, copied exploit links, and fake tools." }
      ]
    },
    research: {
      eyebrow: "Build A Ring Farm coverage",
      title: "What this wiki covers",
      cards: [
        { title: "Seeds and crops", description: "Explain how seed packs, crop cycles, harvesting, selling, and reinvestment connect." },
        { title: "Events and rare effects", description: "Separate weather event leads, rare crop values, sprays, and pending source checks." },
        { title: "Upgrades and money routes", description: "Use ROI thinking to connect gear, sprays, rare effects, offline income, and cash flow." }
      ]
    },
    verification: {
      eyebrow: "Source status",
      title: "Source confidence",
      labels: { verified: "Verified", pending: "Pending", "needs verification": "Needs verification", "research-only": "Research only" }
    },
    freshness: {
      eyebrow: "Maintenance",
      title: "Freshness fields",
      stats: [
        { valueKey: "lastFullCheck", label: "Last full check", detail: "Site review date" },
        { valueKey: "codesLastChecked", label: "Codes checked", detail: "Code evidence review" },
        { valueKey: "statsSnapshot", label: "Stats snapshot", detail: "Roblox API data" },
        { valueKey: "pageCount", label: "Guide pages", detail: "Indexed page scope" }
      ]
    },
    videos: {
      eyebrow: "Media",
      title: "Videos",
      openLabel: "Open",
      viewsLabel: "views",
      lede: "Optional video module. It appears only after reviewed YouTube IDs are added to gameConfig.homeVideoIds.",
      note: "Safety rule: ignore links in video descriptions or comments that ask for Roblox passwords, cookies, recovery codes, extensions, scripts, or downloads.",
      relatedLabel: "Read the written beginner guide first"
    },
    popularSearchesMeta: {
      eyebrow: "Popular searches",
      title: "What players are looking for",
      ariaLabel: "Popular searches"
    },
    popularSearches: [
      { href: "/codes/", title: `${gameConfig.gameName} Codes`, description: "Check whether any official or in-game code proof exists.", coversLabel: "Covers", covers: "Codes · Rewards · Status" },
      { href: "/seeds/", title: `${gameConfig.gameName} Seeds`, description: "Review seed packs, crop unlocks, code rewards, and progression inputs.", coversLabel: "Covers", covers: "Seeds · Packs · Rewards" },
      { href: "/crops/", title: `${gameConfig.gameName} Crops`, description: "Understand crop flow, harvest timing, selling, upgrades, and reinvestment.", coversLabel: "Covers", covers: "Crops · Farming · Cash" },
      { href: "/advanced-crops/", title: `${gameConfig.gameName} Advanced Crops`, description: "Review rare crop effects, value boosts, sprays, and event timing.", coversLabel: "Covers", covers: "Rare · Boosts · Events" },
      { href: "/weather-events/", title: `${gameConfig.gameName} Weather Events`, description: "Review reported Rain, Blizzard, Black Hole, Nuclear, and Galaxy effects.", coversLabel: "Covers", covers: "Rain · Blizzard · Galaxy" },
      { href: "/upgrades/", title: `${gameConfig.gameName} Upgrades`, description: "Plan gear shop choices, ROI checks, crop value, and upgrade timing.", coversLabel: "Covers", covers: "Upgrades · Gear · ROI" },
      { href: "/money-farming/", title: `${gameConfig.gameName} Money Farming`, description: "Plan cash routes through seeds, crops, upgrades, offline income, and rewards.", coversLabel: "Covers", covers: "Cash · Route · Offline" },
      { href: "/beginners-guide/", title: `${gameConfig.gameName} Beginner Guide`, description: "Start with crops, upgrades, selling, expansion, and offline earnings.", coversLabel: "Covers", covers: "Crops · Upgrade · Sell" },
      { href: "/updates/", title: `${gameConfig.gameName} Updates`, description: "Follow update checks and recheck points for codes, rewards, and farm systems.", coversLabel: "Covers", covers: "Updates · Sources · Changes" }
    ],
    faqMeta: {
      eyebrow: "FAQ",
      title: `${gameConfig.gameName} Wiki FAQ`
    },
    faq: [
      { q: "What is Build A Ring Farm Wiki?", a: "Build A Ring Farm Wiki is an independent fan guide for the Roblox farming simulator Build A Ring Farm." },
      { q: "What does this Build A Ring Farm guide cover?", a: "It covers codes status, seeds, crops, beginner routes, upgrades, advanced crops, weather events, money farming, update checks, safety notes, and offline income basics." },
      { q: "Is this an official Build A Ring Farm website?", a: "No. This is an independent fan guide. The official game page is on Roblox." },
      { q: "Does Build A Ring Farm have verified active codes?", a: "No verified official codes have been confirmed here yet. Some rewards are listed as community reported until rechecked." },
      { q: "What are seeds used for in Build A Ring Farm?", a: "Seeds are farming inputs that lead into crops, harvests, selling, cash flow, and upgrades." },
      { q: "What are weather events in Build A Ring Farm?", a: "Weather events are community reported event systems such as Rain, Blizzard, Black Hole, Nuclear, and Galaxy that may affect rare crop outcomes." },
      { q: "What is the best way to make money in Build A Ring Farm?", a: "The safest route is to keep plots active, harvest and sell consistently, then reinvest into upgrades that improve repeated crop cycles." },
      { q: "Does offline income work in Build A Ring Farm?", a: "The official Roblox page says the farm earns while offline, but exact offline rare-effect and weather-event behavior is still pending verification." }
    ]
  };
}

export function createTemplateCodesPage(locale = "en"): CodesPageContent {
  return {
    meta: {
      title: withLocale(`${gameConfig.gameName} Codes | Verification-Aware Guide`, locale),
      description: `Codes status page for ${gameConfig.gameName}. Separate verified active codes from pending or community-reported claims.`
    },
    slug: "codes",
    hero: {
      eyebrow: "Codes verification",
      h1: withLocale(`${gameConfig.gameName} Codes`, locale),
      lede: "Use this page to record verified codes, pending claims, expired codes, and safe redemption notes. Do not invent rewards or promote untested strings as active.",
      primaryAction: { label: "Open Roblox page", href: "roblox", external: true },
      secondaryAction: { label: "Back home", href: localizedHref(locale, "") }
    },
    verifiedCodes: {
      eyebrow: "Verified active codes",
      title: "Verified active codes",
      description: "Keep this table empty until official or in-game evidence exists.",
      emptyCode: "No verified code yet",
      emptyReward: "No verified reward yet",
      emptySource: "No verified source yet"
    },
    communityCodes: {
      eyebrow: "Community reports",
      title: "Community-reported codes",
      description: "Use this section only for clearly labeled unverified leads.",
      actionLabel: "Test only inside the game UI",
      statusLabels: { "community reported": "Community reported", "not verified": "Not verified", pending: "Pending", verified: "Verified" }
    },
    pendingCodes: {
      eyebrow: "Pending claims",
      title: "Pending code claims",
      description: "Candidates stay pending until evidence improves.",
      reasonLabel: "Reason",
      defaultReason: "Official or in-game proof is missing.",
      statusLabels: { pending: "Pending", verified: "Verified", "not verified": "Not verified" }
    },
    conflictMatrix: {
      eyebrow: "Conflict check",
      title: "Source conflict matrix",
      description: "Use this only when sources disagree.",
      siteStatusLabel: "Site status",
      externalClaimsLabel: "External claims",
      reasonLabel: "Reason",
      notVerifiedLabel: "Not verified",
      defaultReason: "Needs stronger evidence."
    },
    verificationWorkflow: {
      eyebrow: "Workflow",
      title: "How to verify codes",
      cards: [
        { title: "Official source", list: ["Check the Roblox game page.", "Check developer-linked channels only after source verification."] },
        { title: "In-game test", list: ["Redeem only in the game UI.", "Record date, server state, and result."] },
        { title: "Publish rule", list: ["Do not promote community claims to active without proof."] }
      ]
    },
    redeemGuide: {
      eyebrow: "Redeem guide",
      title: "Redemption steps",
      steps: ["Verify the game has a code system.", "Open the game on Roblox.", "Find the in-game code input only after checking the UI.", "Record the result before updating this page."],
      note: "Use these steps only after confirming the real in-game redemption UI."
    },
    sections: [
      { heading: "Template safety rule", body: ["Never ask users for Roblox passwords, recovery codes, cookies, or external downloads."] }
    ],
    faq: [
      { q: "Why are active codes empty?", a: "Because this site does not invent codes. Add only verified codes." },
      { q: "Can third-party lists be used?", a: "Only as leads to test, not as proof." }
    ]
  };
}

function createBasicStrategyPage(slug: StrategySlug, locale: string): StrategyPageContent {
  const label = pageTitle(slug);
  return {
    meta: {
      title: withLocale(`${gameConfig.gameName} ${label} Guide`, locale),
      description: `${label} page for ${gameConfig.gameName} with source boundaries and practical player guidance.`
    },
    slug,
    hero: {
      eyebrow: `${label} guide`,
      h1: withLocale(`${gameConfig.gameName} ${label}`, locale),
      lede: "Use verified game-specific guidance. Keep unknown claims labeled as pending, inference, or research-only.",
      primaryAction: { label: "Check codes", href: localizedHref(locale, "codes") },
      secondaryAction: { label: "Read weather events", href: localizedHref(locale, "weather-events") }
    },
    summaryCards: [
      { title: "Evidence first", description: "Use official, in-game, or clearly labeled community evidence." },
      { title: "No invented values", description: "Do not invent stats, values, rewards, or unsafe links." },
      { title: "Update risk", description: "Mark content for recheck after major updates or source changes." }
    ],
    sections: [
      {
        heading: `How to use this ${label} page`,
        body: [
          "Start from the official Roblox page and any developer-linked sources.",
          "Add gameplay-specific recommendations only after source checks or in-game review."
        ],
        list: ["Keep unknown claims pending.", "Separate facts from recommendations.", "Avoid copying unsupported community tables."]
      }
    ],
    relatedLinks: [
      { href: localizedHref(locale, "codes"), title: "Codes", description: "Verify active and pending codes." },
      { href: localizedHref(locale, "weather-events"), title: "Weather Events", description: "Review reported event effects." },
      { href: localizedHref(locale, "updates"), title: "Updates", description: "Track official Roblox update signals." },
      { href: localizedHref(locale, "beginners-guide"), title: "Beginner Guide", description: "Start with the verified farming loop." }
    ],
    faq: [
      { q: `Is this ${label.toLowerCase()} page final?`, a: "It should be rechecked after major updates or new official sources." },
      { q: "What should be checked first?", a: "Official sources, in-game evidence, and whether the page should be localized or kept English-only." }
    ]
  };
}

export function createTemplateStrategyPage(slug: StrategySlug, locale = "en"): StrategyPageContent {
  return createBasicStrategyPage(slug, locale);
}
