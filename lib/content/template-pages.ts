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
      title: withLocale(`${gameConfig.gameName} Wiki & Guide | Codes, Crops, Upgrades`, locale),
      description: `${gameConfig.gameName} wiki for Roblox players: check codes status, seeds, crops, gear shop, advanced crops, weather events, upgrades, money farming, updates, and offline income tips.`
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
          "This homepage works as a Build A Ring Farm wiki hub. It connects codes, seeds, crops, gear shop items, advanced crop effects, weather events, upgrades, money farming, updates, and source checks in one place."
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
        heading: "Seeds, crops, gear shop, and weather events",
        body: [
          "Seeds are inputs, crops are outputs, and crop value is the cash engine behind the game. Gear shop items and weather events are extra layers that may affect rare crop effects and value boosts.",
          "Exact seed pack contents, spray costs, event odds, crop prices, and rare crop values should be verified before being published as fixed facts. This site labels unverified data as community reported."
        ],
        list: ["Seeds decide what you can grow.", "Crops decide cash flow.", "Gear shop items can support effect testing.", "Weather events can affect rare outcomes."]
      },
      {
        heading: "Money farming and upgrades",
        body: [
          "Money farming is not just about one best crop. It is about keeping cash moving through seeds, crops, selling, upgrades, gear shop decisions, weather event bonuses, and offline income. Strong upgrades are the ones that improve multiple future harvests.",
          "Use ROI thinking before buying gear: ask how many crop cycles are needed to earn back the cost, and whether that item improves normal farming or only rare situations."
        ],
        list: ["Keep cash cycling.", "Buy upgrades that repeat value.", "Delay unclear gear purchases.", "Recheck advice after updates."]
      },
      {
        heading: "Sources and verification policy",
        body: [
          "The official Roblox page confirms the game name, creator, basic farming loop, upgrades, selling plants for cash, and offline earnings. It does not confirm every code reward, spray cost, rare crop value, gear shop price, or weather event chance.",
          "For that reason, this Build A Ring Farm guide separates official facts from community reported claims. Community data can be useful, but it should be rechecked after updates."
        ],
        list: ["Official source: Roblox game page.", "Community data: code lists, rare effect tables, spray costs, event odds.", "Pending data: exact in-game values without screenshots."]
      },
      {
        heading: "What to read after the homepage",
        body: [
          "Use this homepage as the starting point, then move into the specific guide that matches your question. Codes help with rewards, seeds and crops explain the farming loop, gear shop explains sprays and ROI, weather events explain reported event effects, upgrades explain ROI, and advanced crops cover community reported rare effects.",
          "If your goal is faster cash, read the money farming page after you understand seeds, crops, gear shop items, upgrades, and event effects."
        ],
        list: ["Codes for reported rewards.", "Seeds for crop inputs.", "Gear shop for sprays and fertilizer.", "Money farming for progression routes."]
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
        eyebrow: "Gear shop snapshot",
        title: "Reported gear shop items",
        rows: [
          { label: "Wet Spray", value: "Wet effect", detail: "Reported spray item", status: "Community reported" },
          { label: "Rainbow Spray", value: "Rainbow effect", detail: "Reported high-value spray", status: "Community reported" },
          { label: "Strong Fertilizer", value: "Growth boost", detail: "Reported farming item", status: "Community reported" }
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
        { href: localizedHref(locale, "gear-shop"), title: "Gear Shop", description: "Compare sprays, fertilizer, upgrade timing, and ROI before spending cash." },
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
        { title: "Gear and rare effects", description: "Separate spray decisions, weather event leads, rare crop values, and pending source checks." },
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
      { href: "/gear-shop/", title: `${gameConfig.gameName} Gear Shop`, description: "Compare sprays, fertilizer, rare effect items, and ROI before spending cash.", coversLabel: "Covers", covers: "Sprays · Gear · ROI" },
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
      { q: "What does this Build A Ring Farm guide cover?", a: "It covers codes status, seeds, crops, gear shop, beginner routes, upgrades, advanced crops, weather events, money farming, update checks, safety notes, and offline income basics." },
      { q: "Is this an official Build A Ring Farm website?", a: "No. This is an independent fan guide. The official game page is on Roblox." },
      { q: "Does Build A Ring Farm have verified active codes?", a: "No verified official codes have been confirmed here yet. Some rewards are listed as community reported until rechecked." },
      { q: "What are seeds used for in Build A Ring Farm?", a: "Seeds are farming inputs that lead into crops, harvests, selling, cash flow, and upgrades." },
      { q: "What is the gear shop in Build A Ring Farm?", a: "The gear shop is a community reported item area for sprays, fertilizer, and progression tools. Prices and effects still need verification." },
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

function createCropsPage(locale: string): StrategyPageContent {
  return {
    meta: {
      title: withLocale(`${gameConfig.gameName} Crop Value List | Source Differences`, locale),
      description: `${gameConfig.gameName} crop value list with reported source differences for Void Fruit, Garden Devourer, Dragonfruit, calculator-safe labels, and pending checks.`
    },
    slug: "crops",
    hero: {
      eyebrow: "Crops and farming guide",
      h1: withLocale(`${gameConfig.gameName} Crops Guide`, locale),
      lede: "Use this Build A Ring Farm crop value list to follow the crop loop, reported source differences, high-value crop watchlist, seed-to-crop handoff, and calculator boundaries without treating weak data as final values.",
      primaryAction: { label: "Read seeds guide", href: localizedHref(locale, "seeds") },
      secondaryAction: { label: "Open calculator", href: localizedHref(locale, "calculator") }
    },
    summaryCards: [
      { title: "High-value leads", description: "Void Fruit, Garden Devourer, Dragonfruit, Passion Fruit, and Elder Dragonroot stay reported or pending here." },
      { title: "Value watchlist", description: "Crop value, growth time, source, calculator use, and verification status are separated before any estimate." },
      { title: "No fake prices", description: "This page does not publish official sell values, exact growth times, or strongest-crop claims without proof." }
    ],
    sections: [
      {
        heading: "Why Build A Ring Farm crop values differ",
        subheading: "Source pages mix seeds, crops, packs, and video claims",
        body: [
          "Void Fruit, Garden Devourer, and Dragonfruit now appear across several third-party result types, but the sources do not always agree on value, acquisition, or whether they are describing a seed, a crop, or a pack route.",
          "The safer page pattern is to show the disagreement first, then keep calculator use manual. A disputed value can answer search intent, but it should not become a default number or route recommendation."
        ],
        list: ["Source snippets can repeat the same number without proving it.", "Different sites may mix crop value and seed acquisition.", "Video titles are discovery signals, not value proof.", "Use disputed when major sources conflict."]
      },
      {
        heading: "How to use crop values safely",
        subheading: "Manual input before route decisions",
        body: [
          "Use the matrix below as a source-difference table, not a preset list. If you grow one of these crops, record your observed sale value, server date, and any mutation or ring state before entering it in the calculator.",
          "This protects the crop route from two common SEO errors: copying a third-party number as final data, or treating a high-value crop name as proof of the best money route."
        ],
        list: ["Record the observed base value before calculator use.", "Separate seed source from grown crop value.", "Keep mutation, ring, pet, event, and fertilizer effects separate.", "Retest after updates before changing route advice."]
      },
      {
        heading: "Source status before crop values",
        subheading: "What not to treat as verified",
        body: [
          "A high-value crop lead is a search and third-party report signal, not proof of a fixed crop value. Beebom, Pro Game Guides, Fandom, YouTube, and other external pages can help discover terms players search for, but they do not make a sell value official on this site.",
          "For this Build A Ring Farm crops guide, crop names can appear as reported leads. Growth time and sell value stay pending until official notes or repeatable in-game evidence confirms them. Calculator results stay estimated because they depend on player-entered values."
        ],
        list: ["Use reported for third-party lead names.", "Use pending for growth time and sell value.", "Use estimated for calculator output.", "Do not call any crop the strongest choice without stronger proof."]
      },
      {
        heading: "Seeds vs crops: inputs and outputs",
        subheading: "Why the seeds watchlist matters",
        body: [
          "Seeds are inputs and crops are outputs. A seed page can tell you which seed names are being discussed, while a crops page should explain what the grown crop means for harvest planning, value checks, and calculator use.",
          "The current seed watchlist already tracks Void Fruit, Garden Devourer, Dragonfruit, Passion Fruit, and Elder Dragonroot as Beebom reported leads. This crops page mirrors those names so players can move from seed research to crop value planning without a broken path."
        ],
        list: ["Start on the seeds page when you need source status for seed names.", "Use this crops page when you need value and growth-time boundaries.", "Use the calculator only after you have an observed base value.", "Move to advanced crops when rare effects or sprays enter the route."]
      },
      {
        heading: "How to use high-value crops in the calculator",
        subheading: "Manual observed base value only",
        body: [
          "The calculator should not ship default presets for Void Fruit, Garden Devourer, Dragonfruit, Passion Fruit, or Elder Dragonroot. If you see one of these crops in game, record the observed base value first, then enter it manually.",
          "This keeps the estimate useful without pretending the site owns a source-checked crop value table. If another guide gives a number, treat it as a reported input until you can repeat the result inside the game."
        ],
        list: ["Do not use a default high-value crop preset.", "Enter plant count and observed base value yourself.", "Add reported mutation, ring, fertilizer, pet, or event modifiers only as pending inputs.", "Compare the estimate against the next actual sale before changing your farm route."]
      },
      {
        heading: "Evidence status and update checks",
        subheading: "Void Fruit status, Garden Devourer status, Dragonfruit status, Passion Fruit and Elder Dragonroot status",
        body: [
          "Each crop lead below needs the same upgrade path before it can become stronger content: source name, date, in-game screenshot or repeatable test, growth-time note, sell-value note, and calculator result. Until then, the row remains a watchlist item.",
          "If Google Search Console later shows sustained impressions for one crop name and at least two accessible non-video sources provide independent structure, that crop can be considered for a separate page. Until then, this hub table is the safer SEO path."
        ],
        list: ["Void Fruit status: reported lead, pending in-game value check.", "Garden Devourer status: reported lead, pending growth-time and sell-value check.", "Dragonfruit status: reported lead, pending value and advanced-crop interaction check.", "Passion Fruit and Elder Dragonroot status: reported leads, pending stronger source and in-game checks."]
      }
    ],
    dataTables: [
      {
        eyebrow: "Source differences",
        title: "Reported crop value source differences",
        description: "This matrix keeps crop value claims source-specific. It preserves disputed, reported, pending, and estimated labels instead of turning third-party numbers into calculator defaults.",
        rows: [
          {
            key: "source-diff-void-fruit",
            fields: [
              { label: "Crop", value: "Void Fruit" },
              { label: "Beebom", value: "360K reported value" },
              { label: "PGG", value: "180K reported value" },
              { label: "Sportskeeda", value: "180K snippet signal" },
              { label: "Bo3", value: "360K reported value" },
              { label: "Fandom", value: "No stable value captured in this matrix" },
              { label: "Target status", value: "Value conflict between 180K and 360K", status: "disputed" },
              { label: "Verification status", value: "Pending in-game value check", status: "pending" }
            ]
          },
          {
            key: "source-diff-garden-devourer",
            fields: [
              { label: "Crop", value: "Garden Devourer" },
              { label: "Beebom", value: "350K reported value" },
              { label: "PGG", value: "350K reported value" },
              { label: "Sportskeeda", value: "Snippet pending" },
              { label: "Bo3", value: "350K reported value" },
              { label: "Fandom", value: "350K reported value" },
              { label: "Target status", value: "Reported consensus around 350K" },
              { label: "Verification status", value: "Reported consensus, not in-game verified here", status: "reported" }
            ]
          },
          {
            key: "source-diff-dragonfruit",
            fields: [
              { label: "Crop", value: "Dragonfruit" },
              { label: "Beebom", value: "350K reported value" },
              { label: "PGG", value: "350K reported value" },
              { label: "Sportskeeda", value: "Source not used for stable value in this matrix" },
              { label: "Bo3", value: "350K reported value" },
              { label: "Fandom", value: "Placeholder / Tropical Seed Pack acquisition signal" },
              { label: "Target status", value: "Value reported, acquisition differences remain" },
              { label: "Verification status", value: "Reported value with disputed acquisition context", status: "disputed" }
            ]
          },
          {
            key: "source-diff-passion-fruit",
            fields: [
              { label: "Crop", value: "Passion Fruit" },
              { label: "Beebom", value: "Seed-tier lead" },
              { label: "PGG", value: "Pending source check" },
              { label: "Sportskeeda", value: "Pending source check" },
              { label: "Bo3", value: "Pending source check" },
              { label: "Fandom", value: "Pending source check" },
              { label: "Target status", value: "Keep existing watchlist row" },
              { label: "Verification status", value: "Pending stronger source depth", status: "pending" }
            ]
          },
          {
            key: "source-diff-elder-dragonroot",
            fields: [
              { label: "Crop", value: "Elder Dragonroot" },
              { label: "Beebom", value: "Seed-tier lead" },
              { label: "PGG", value: "Pending source check" },
              { label: "Sportskeeda", value: "Pending source check" },
              { label: "Bo3", value: "Pending source check" },
              { label: "Fandom", value: "Pending source check" },
              { label: "Target status", value: "Keep existing watchlist row" },
              { label: "Verification status", value: "Pending stronger source depth", status: "pending" }
            ]
          },
          // 2026-06-18 SERP 蓝图 P1：Witherfang 数值在 Beebom 与 TechWiser 一致(280K)，标 reported
          {
            key: "source-diff-witherfang",
            fields: [
              { label: "Crop", value: "Witherfang" },
              { label: "Beebom", value: "280K reported base income, Corrupted Seed Pack acquisition" },
              { label: "PGG", value: "Pending source check" },
              { label: "Sportskeeda", value: "280K snippet signal" },
              { label: "Bo3", value: "Pending source check" },
              { label: "TechWiser", value: "280K reported base income, Corrupted Seed Pack acquisition" },
              { label: "Fandom", value: "280K style Plants row and Witherfang placeholder / Corrupted Seed Pack lead" },
              { label: "Target status", value: "Keep as reported lead, do not enter calculator default" },
              { label: "Verification status", value: "Reported value, pending in-game growth and sell-value check", status: "reported" }
            ]
          },
          // 2026-06-22 SERP 蓝图 P0：Silver Artichoke 继续 disputed，冲突点保留在 Fandom 字段不完整/不一致
          {
            key: "source-diff-silver-artichoke",
            fields: [
              { label: "Crop", value: "Silver Artichoke" },
              { label: "Beebom", value: "280K reported base income, 60T seed cost" },
              { label: "PGG", value: "Pending source check" },
              { label: "Sportskeeda", value: "Pending source check" },
              { label: "Bo3", value: "Pending source check" },
              { label: "TechWiser", value: "280K reported base income with 60T / Roll-style details" },
              { label: "Fandom", value: "Stub and Plants fields do not settle the value or cost conflict" },
              { label: "Roll odds", value: "TechWiser reports 1/2,133,189,359 roll odds; pending in-game check" },
              { label: "Target status", value: "Keep as disputed lead, must not enter calculator default" },
              { label: "Verification status", value: "Disputed value across sources, pending in-game resolution", status: "disputed" }
            ]
          },
          // 2026-06-20 SERP 蓝图 P1：Uranium Reed 180K 一致但获取方式 TBA，标 pending
          {
            key: "source-diff-uranium-reed",
            fields: [
              { label: "Crop", value: "Uranium Reed" },
              { label: "Beebom", value: "180K reported value, acquisition TBA" },
              { label: "PGG", value: "Generic seeds guide, not precise Uranium Reed proof" },
              { label: "Sportskeeda", value: "Pending source check" },
              { label: "Bo3", value: "Generic tier-list signal, not precise enough" },
              { label: "TechWiser", value: "180K reported value, acquisition TBA" },
              { label: "Fandom", value: "Plants row incomplete or placeholder" },
              { label: "Target status", value: "Keep as pending watchlist lead, do not enter calculator default" },
              { label: "Verification status", value: "Reported 180K, acquisition pending", status: "pending" }
            ]
          }
        ]
      },
      {
        eyebrow: "Reported leads",
        title: "Reported high-value crop leads",
        description: "These rows satisfy the high-value crop search intent while keeping every weak fact labeled. They are not source-checked game values.",
        rows: [
          {
            key: "void-fruit",
            fields: [
              { label: "Crop", value: "Void Fruit" },
              { label: "Reported source", value: "Beebom June 2026 seeds tier list" },
              { label: "Why players search it", value: "High-value crop and Void Fruit value intent" },
              { label: "Growth time status", value: "Pending in-game check" },
              { label: "Sell value status", value: "Pending in-game check" },
              { label: "Calculator use", value: "Manual observed base value only", status: "estimated" },
              { label: "Verification status", value: "Beebom reported, pending in-game verification", status: "reported" }
            ]
          },
          {
            key: "garden-devourer",
            fields: [
              { label: "Crop", value: "Garden Devourer" },
              { label: "Reported source", value: "Beebom June 2026 seeds tier list" },
              { label: "Why players search it", value: "Single-crop value and route questions" },
              { label: "Growth time status", value: "Pending in-game check" },
              { label: "Sell value status", value: "Pending in-game check" },
              { label: "Calculator use", value: "Manual observed base value only", status: "estimated" },
              { label: "Verification status", value: "Beebom reported, pending in-game verification", status: "reported" }
            ]
          },
          {
            key: "dragonfruit",
            fields: [
              { label: "Crop", value: "Dragonfruit" },
              { label: "Reported source", value: "Beebom June 2026 seeds tier list and YouTube visual demand" },
              { label: "Why players search it", value: "Crop value, seed relationship, and advanced-crop checks" },
              { label: "Growth time status", value: "Pending in-game check" },
              { label: "Sell value status", value: "Pending in-game check" },
              { label: "Calculator use", value: "Manual observed base value only", status: "estimated" },
              { label: "Verification status", value: "Reported, not value-verified here", status: "reported" }
            ]
          },
          {
            key: "passion-fruit",
            fields: [
              { label: "Crop", value: "Passion Fruit" },
              { label: "Reported source", value: "Beebom June 2026 seeds tier list" },
              { label: "Why players search it", value: "Seed-to-crop and value comparison intent" },
              { label: "Growth time status", value: "Pending in-game check" },
              { label: "Sell value status", value: "Pending in-game check" },
              { label: "Calculator use", value: "Manual observed base value only", status: "estimated" },
              { label: "Verification status", value: "Beebom reported, pending in-game verification", status: "reported" }
            ]
          },
          {
            key: "elder-dragonroot",
            fields: [
              { label: "Crop", value: "Elder Dragonroot" },
              { label: "Reported source", value: "Beebom June 2026 seeds tier list" },
              { label: "Why players search it", value: "Long-tail crop name, value, and obtain-intent searches" },
              { label: "Growth time status", value: "Pending in-game check" },
              { label: "Sell value status", value: "Pending in-game check" },
              { label: "Calculator use", value: "Manual observed base value only", status: "estimated" },
              { label: "Verification status", value: "Beebom reported, pending in-game verification", status: "reported" }
            ]
          },
          // 2026-06-18 SERP 蓝图 P1：Witherfang reported lead
          {
            key: "witherfang",
            fields: [
              { label: "Crop", value: "Witherfang" },
              { label: "Reported source", value: "Beebom June 2026 seeds tier list; TechWiser also reports 280K" },
              { label: "Why players search it", value: "Exotic crop value, Corrupted Seed Pack acquisition, and seed-to-crop checks" },
              { label: "Growth time status", value: "Pending in-game check" },
              { label: "Sell value status", value: "Pending in-game check" },
              { label: "Calculator use", value: "Manual observed base value only", status: "estimated" },
              { label: "Verification status", value: "Reported 280K base income, pending in-game verification", status: "reported" }
            ]
          },
          // 2026-06-18 SERP 蓝图 P1：Silver Artichoke disputed lead
          {
            key: "silver-artichoke",
            fields: [
              { label: "Crop", value: "Silver Artichoke" },
              { label: "Reported source", value: "Beebom and TechWiser around 280K with 60T / Roll details; Fandom fields conflict" },
              { label: "Why players search it", value: "Exotic crop value, seed cost, and rare-roll chance checks" },
              { label: "Growth time status", value: "Pending in-game check" },
              { label: "Sell value status", value: "Disputed, pending in-game resolution" },
              { label: "Calculator use", value: "Manual observed base value only", status: "estimated" },
              { label: "Verification status", value: "Disputed value across sources, pending in-game resolution", status: "disputed" }
            ]
          },
          // 2026-06-20 SERP 蓝图 P1：Uranium Reed pending value handoff
          {
            key: "uranium-reed",
            fields: [
              { label: "Crop", value: "Uranium Reed" },
              { label: "Reported source", value: "Beebom and TechWiser report 180K, acquisition TBA" },
              { label: "Why players search it", value: "New seed or crop value lead with pending acquisition" },
              { label: "Growth time status", value: "Pending in-game check" },
              { label: "Sell value status", value: "Reported 180K, not verified here" },
              { label: "Calculator use", value: "Manual observed base value only", status: "estimated" },
              { label: "Verification status", value: "Pending acquisition and in-game value check", status: "pending" }
            ]
          }
        ]
      },
      {
        eyebrow: "Crop value table intent",
        title: "Crop value watchlist",
        description: "This watchlist replaces unsupported exact values with source, growth-time, sell-value, calculator, and verification status.",
        rows: [
          {
            key: "watch-void-fruit",
            fields: [
              { label: "Crop", value: "Void Fruit" },
              { label: "Reported tier", value: "High-value lead" },
              { label: "Source", value: "Beebom reported" },
              { label: "Growth time status", value: "Pending" },
              { label: "Sell value status", value: "Pending" },
              { label: "Calculator use", value: "Estimated only after player input" },
              { label: "Verification status", value: "Reported, pending in-game check", status: "pending" }
            ]
          },
          {
            key: "watch-garden-devourer",
            fields: [
              { label: "Crop", value: "Garden Devourer" },
              { label: "Reported tier", value: "High-value lead" },
              { label: "Source", value: "Beebom reported" },
              { label: "Growth time status", value: "Pending" },
              { label: "Sell value status", value: "Pending" },
              { label: "Calculator use", value: "Estimated only after player input" },
              { label: "Verification status", value: "Reported, pending in-game check", status: "pending" }
            ]
          },
          {
            key: "watch-dragonfruit",
            fields: [
              { label: "Crop", value: "Dragonfruit" },
              { label: "Reported tier", value: "High-value lead" },
              { label: "Source", value: "Beebom reported; YouTube visual demand" },
              { label: "Growth time status", value: "Pending" },
              { label: "Sell value status", value: "Pending" },
              { label: "Calculator use", value: "Estimated only after player input" },
              { label: "Verification status", value: "Reported, pending in-game check", status: "pending" }
            ]
          },
          {
            key: "watch-passion-fruit",
            fields: [
              { label: "Crop", value: "Passion Fruit" },
              { label: "Reported tier", value: "Mid-high lead" },
              { label: "Source", value: "Beebom reported" },
              { label: "Growth time status", value: "Pending" },
              { label: "Sell value status", value: "Pending" },
              { label: "Calculator use", value: "Estimated only after player input" },
              { label: "Verification status", value: "Reported, pending in-game check", status: "pending" }
            ]
          },
          {
            key: "watch-elder-dragonroot",
            fields: [
              { label: "Crop", value: "Elder Dragonroot" },
              { label: "Reported tier", value: "Mid-high lead" },
              { label: "Source", value: "Beebom reported" },
              { label: "Growth time status", value: "Pending" },
              { label: "Sell value status", value: "Pending" },
              { label: "Calculator use", value: "Estimated only after player input" },
              { label: "Verification status", value: "Reported, pending in-game check", status: "pending" }
            ]
          },
          {
            key: "watch-witherfang",
            fields: [
              { label: "Crop", value: "Witherfang" },
              { label: "Reported tier", value: "Exotic lead" },
              { label: "Source", value: "Beebom / TechWiser / Fandom / Sportskeeda reported 280K signals" },
              { label: "Growth time status", value: "Pending" },
              { label: "Sell value status", value: "Reported 280K" },
              { label: "Calculator use", value: "Estimated only after player input" },
              { label: "Verification status", value: "Reported, pending in-game check", status: "reported" }
            ]
          },
          {
            key: "watch-silver-artichoke",
            fields: [
              { label: "Crop", value: "Silver Artichoke" },
              { label: "Reported tier", value: "Exotic disputed lead" },
              { label: "Source", value: "Beebom / TechWiser 280K signals; Fandom value fields conflict" },
              { label: "Growth time status", value: "Pending" },
              { label: "Sell value status", value: "Disputed" },
              { label: "Calculator use", value: "Estimated only after player input" },
              { label: "Verification status", value: "Disputed, pending in-game check", status: "disputed" }
            ]
          },
          {
            key: "watch-uranium-reed",
            fields: [
              { label: "Crop", value: "Uranium Reed" },
              { label: "Reported tier", value: "A-tier pending lead" },
              { label: "Source", value: "Beebom and TechWiser report 180K, acquisition TBA" },
              { label: "Growth time status", value: "Pending" },
              { label: "Sell value status", value: "Reported 180K" },
              { label: "Calculator use", value: "Estimated only after player input" },
              { label: "Verification status", value: "Pending acquisition and in-game check", status: "pending" }
            ]
          }
        ]
      },
      {
        eyebrow: "Seeds to crops alignment",
        title: "Seed leads that need crop checks",
        description: "Use this table to move from seed research to crop planning without making unsupported value claims.",
        rows: [
          { key: "seed-crop-void-fruit", fields: [{ label: "Lead", value: "Void Fruit" }, { label: "Seed page status", value: "Beebom reported" }, { label: "Crop page status", value: "Pending growth and sell-value check" }, { label: "Calculator status", value: "Manual input only", status: "estimated" }] },
          { key: "seed-crop-garden-devourer", fields: [{ label: "Lead", value: "Garden Devourer" }, { label: "Seed page status", value: "Beebom reported" }, { label: "Crop page status", value: "Pending growth and sell-value check" }, { label: "Calculator status", value: "Manual input only", status: "estimated" }] },
          { key: "seed-crop-dragonfruit", fields: [{ label: "Lead", value: "Dragonfruit" }, { label: "Seed page status", value: "Beebom reported" }, { label: "Crop page status", value: "Pending value and rare-effect boundary check" }, { label: "Calculator status", value: "Manual input only", status: "estimated" }] },
          { key: "seed-crop-passion-fruit", fields: [{ label: "Lead", value: "Passion Fruit" }, { label: "Seed page status", value: "Beebom reported" }, { label: "Crop page status", value: "Pending stronger source and in-game check" }, { label: "Calculator status", value: "Manual input only", status: "estimated" }] },
          { key: "seed-crop-elder-dragonroot", fields: [{ label: "Lead", value: "Elder Dragonroot" }, { label: "Seed page status", value: "Beebom reported" }, { label: "Crop page status", value: "Pending stronger source and in-game check" }, { label: "Calculator status", value: "Manual input only", status: "estimated" }] },
          { key: "seed-crop-witherfang", fields: [{ label: "Lead", value: "Witherfang" }, { label: "Seed page status", value: "Reported 280K, Corrupted Seed Pack lead" }, { label: "Crop page status", value: "Reported, pending in-game value check" }, { label: "Calculator status", value: "Manual input only", status: "estimated" }] },
          { key: "seed-crop-silver-artichoke", fields: [{ label: "Lead", value: "Silver Artichoke" }, { label: "Seed page status", value: "Disputed, Roll lead and source conflict" }, { label: "Crop page status", value: "Disputed value conflict" }, { label: "Calculator status", value: "Manual input only", status: "estimated" }] },
          { key: "seed-crop-uranium-reed", fields: [{ label: "Lead", value: "Uranium Reed" }, { label: "Seed page status", value: "Pending, reported 180K and TBA acquisition" }, { label: "Crop page status", value: "Pending acquisition and in-game check" }, { label: "Calculator status", value: "Manual input only", status: "estimated" }] }
        ]
      }
    ],
    videoSections: [
      {
        eyebrow: "Visual reference",
        title: "Video guides for crop route context",
        description: "These YouTube embeds satisfy video-style search demand only. They do not verify crop value, growth time, best crop, codes, rewards, or route numbers.",
        videos: [
          {
            id: "Cqp6N-1Azzk",
            title: "Build A Ring Farm crop value video reference",
            description: "SERP video reference for crop value demand. It does not settle Void Fruit, Garden Devourer, or Dragonfruit value conflicts.",
            fallbackLabel: "Watch the crop value video on YouTube"
          },
          {
            id: "r8EATLyhrlw",
            title: "Build A Ring Farm crop route video guide",
            description: "Visual route context from YouTube SERP. Use it as gameplay context, not as crop value evidence.",
            fallbackLabel: "Watch the crop route video on YouTube"
          },
          {
            id: "v1YgAOjuQRs",
            title: "Build A Ring Farm best crops video guide",
            description: "Best-crops video demand exists, but this page keeps best crop claims reported or pending.",
            fallbackLabel: "Watch the best crops video on YouTube"
          },
          {
            id: "9w9nu1RNefs",
            title: "Build A Ring Farm all seeds and crops visual guide",
            description: "Seeds and crops video demand exists, but this embed does not prove a complete crop list.",
            fallbackLabel: "Watch the seeds and crops video on YouTube"
          }
        ]
      }
    ],
    relatedLinks: [
      { href: localizedHref(locale, "seeds"), title: "Seeds", description: "Start with reported seed leads before checking crop value status." },
      { href: localizedHref(locale, "calculator"), title: "Calculator", description: "Use manual observed crop values and estimated outputs only." },
      { href: localizedHref(locale, "advanced-crops"), title: "Advanced Crops", description: "Separate high-value crop names from rare-effect and spray proof." },
      { href: localizedHref(locale, "money-farming"), title: "Money Farming", description: "Turn stable crop checks into safer cash routes." },
      { href: localizedHref(locale, "gear-shop"), title: "Gear Shop", description: "Compare sprays, fertilizer, and ROI after crop value checks." },
      { href: localizedHref(locale, "weather-events"), title: "Weather Events", description: "Review reported event effects that may affect rare crop outcomes." }
    ],
    faq: [
      { q: "What are high-value crop leads in Build A Ring Farm?", a: "High-value crop leads are reported search and third-party signals for crops such as Void Fruit, Garden Devourer, Dragonfruit, Passion Fruit, and Elder Dragonroot. They are not source-checked game values here." },
      { q: "Why do Void Fruit values differ?", a: "The current matrix preserves both 180K and 360K third-party claims for Void Fruit. That conflict is marked disputed until an in-game value check or stronger source resolves it." },
      { q: "Is Garden Devourer 350K verified?", a: "No. Several sources report Garden Devourer around 350K, but this page treats that as reported consensus rather than in-game verification." },
      { q: "Is Dragonfruit value verified?", a: "No. Dragonfruit has multiple 350K third-party claims, but acquisition context differs by source, so this page keeps the value reported and the acquisition boundary disputed." },
      { q: "Is Void Fruit the best crop in Build A Ring Farm?", a: "Void Fruit is tracked here as a Beebom reported lead with pending in-game verification. This page does not confirm it as the best crop." },
      // 2026-06-18 SERP 蓝图 P1：Witherfang 与 Silver Artichoke 来源边界问答
      { q: "Is Witherfang verified in Build A Ring Farm?", a: "No. Witherfang is reported as an Exotic crop by Beebom and TechWiser, with a reported base income of 280K and acquisition from a Corrupted Seed Pack. The two sources agree on the 280K figure, but this site keeps Witherfang as a reported lead only. Growth time, sell value, and exact pack odds are pending in-game verification." },
      { q: "Why do sources disagree on Silver Artichoke?", a: "Beebom and TechWiser report Silver Artichoke around 280K with 60T and Roll-style details, while Fandom Plants and stub fields do not settle the value or cost conflict. This site labels Silver Artichoke as disputed and keeps it out of calculator defaults until an in-game check or stronger source resolves the conflict." },
      { q: "Why is Uranium Reed marked pending?", a: "Beebom and TechWiser both report Uranium Reed around 180K, but acquisition is TBA or incomplete in this review. This page keeps Uranium Reed pending and out of calculator defaults until a stronger source or in-game check confirms acquisition and value." },
      { q: "Does this page list exact crop values?", a: "No. Growth time and sell value remain pending until official or repeatable in-game evidence exists." },
      { q: "Can I use reported crop values in the calculator?", a: "Yes, only as manual inputs. Keep the output estimated and do not treat a reported number as a default preset." },
      { q: "Can I use these crops in the calculator?", a: "Yes, but only with manual observed base values. The calculator output is estimated and should not be treated as official." },
      { q: "Why not create pages for each crop now?", a: "Individual crop pages would be thin without stronger source depth. These names stay in the hub watchlist until search demand and accessible evidence improve." }
    ]
  };
}

function createUpgradesPage(locale: string): StrategyPageContent {
  return {
    meta: {
      title: withLocale(`${gameConfig.gameName} Upgrades Guide | Gear ROI`, locale),
      description: `${gameConfig.gameName} upgrades guide covering gear shop timing, ROI checks, crop value, sprays, rare effects, and safe upgrade decisions.`
    },
    slug: "upgrades",
    hero: {
      eyebrow: "Upgrades and gear guide",
      h1: withLocale(`${gameConfig.gameName} Upgrades Guide`, locale),
      lede: "Use this Build A Ring Farm upgrades guide to decide when to buy gear, when to expand, and how to compare upgrade value without relying on unverified prices or fake multipliers.",
      primaryAction: { label: "Read gear shop", href: localizedHref(locale, "gear-shop") },
      secondaryAction: { label: "Read crops guide", href: localizedHref(locale, "crops") }
    },
    summaryCards: [
      { title: "Upgrade goal", description: "Buy upgrades that improve repeated crop cycles, not only one harvest." },
      { title: "Gear shop logic", description: "Judge gear by farming speed, output value, rare crop support, and cash recovery time." },
      { title: "No fake multipliers", description: "This page avoids unverified gear prices, rare effect odds, and exact ROI numbers." }
    ],
    sections: [
      {
        heading: "How upgrades work in Build A Ring Farm",
        subheading: "Upgrade loop basics",
        body: [
          "Upgrades matter because they change how efficiently your farm turns time into cash. A good upgrade should make future crop cycles easier, faster, or more valuable.",
          "For early players, the core question is not whether an item sounds powerful. The core question is whether that upgrade helps the next several farming cycles pay back its cost."
        ],
        list: ["Improve crop output or harvest speed.", "Reduce idle time between harvests.", "Support expansion into more plots or stronger farming cycles.", "Avoid upgrades that delay basic progression without clear benefit."]
      },
      {
        heading: "Gear shop upgrade strategy",
        subheading: "Gear timing and spray checks",
        body: [
          "Competing guides often highlight gear shop items because they are useful search targets. The safer way to cover this topic is to explain how to evaluate gear before publishing exact numbers.",
          "Before buying gear, check whether it helps with farming speed, selling value, rare crop value, or long-term expansion. If the gear only helps rarely, it may be worse than a basic farm upgrade."
        ],
        list: ["Ask what farming problem the gear solves.", "Compare the price with your normal cash-per-cycle.", "Prefer upgrades that help every crop cycle.", "Treat rare-effect claims as pending until verified in-game."]
      },
      {
        heading: "ROI checklist for upgrades",
        subheading: "投入回报比",
        body: [
          "ROI means return on investment. In Chinese, ROI 可以理解为“投入回报比”：你花出去的金币，要多久能靠更高产出赚回来。",
          "A simple upgrade rule is this: if an upgrade makes every future harvest better, it is usually safer than an upgrade that only helps in rare cases. But exact ROI requires verified in-game numbers."
        ],
        list: ["How much does the upgrade cost?", "How much faster or stronger is each harvest after buying it?", "How many crop cycles are needed to earn the cost back?", "Will a new update change the upgrade value?"]
      },
      {
        heading: "When to delay upgrades",
        subheading: "Avoid bad timing",
        body: [
          "Not every upgrade should be purchased immediately. If buying it empties your cash and leaves plots idle, the upgrade can slow progress instead of speeding it up.",
          "Delay an upgrade when its benefit is unclear, when your crop loop is unstable, or when the item depends on a mechanic that has not been verified yet."
        ],
        list: ["Delay unclear gear purchases.", "Do not buy based only on community hype.", "Keep enough cash to continue planting and selling.", "Recheck upgrade advice after major updates."]
      }
    ],
    relatedLinks: [
      { href: localizedHref(locale, "gear-shop"), title: "Gear Shop", description: "Review sprays, fertilizer, gear timing, and source status." },
      { href: localizedHref(locale, "crops"), title: "Crops", description: "Understand crop cycles before judging upgrade ROI." },
      { href: localizedHref(locale, "advanced-crops"), title: "Advanced Crops", description: "Check reported rare effects before planning gear use." },
      { href: localizedHref(locale, "weather-events"), title: "Weather Events", description: "Check reported event effects that may affect crop value." },
      { href: localizedHref(locale, "codes"), title: "Codes", description: "Check whether verified codes can support upgrade progression." }
    ],
    faq: [
      { q: "What are upgrades in Build A Ring Farm?", a: "Upgrades are purchases or systems that can improve farming speed, crop output, selling efficiency, expansion, or long-term progression." },
      { q: "What should I upgrade first in Build A Ring Farm?", a: "A single best first upgrade has not been verified here yet. Beginners should favor upgrades that improve repeated crop cycles and prevent idle plots." },
      { q: "How is the gear shop related to upgrades?", a: "Gear shop items can affect crop value or rare effect testing, but prices and effects should stay community reported until verified." },
      { q: "Does this page list exact upgrade ROI?", a: "No. Exact ROI needs verified in-game prices and values, so this guide focuses on decision logic." }
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
        subheading: "Source-first rule",
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
  if (slug === "crops") return createCropsPage(locale);
  if (slug === "upgrades") return createUpgradesPage(locale);
  return createBasicStrategyPage(slug, locale);
}
