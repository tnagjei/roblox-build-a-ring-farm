// input: locale, slug, and shared site config
// output: source-aware content objects for game pages
// pos: reusable content factory（更新规则：文件变更需同步本注释与所属目录 README）

import type { CodesPageContent, HomePageContent, StrategyPageContent } from "@/lib/content/page-types";
import { gameConfig } from "@/lib/game-config";

type StrategySlug = StrategyPageContent["slug"];

const localeLabels: Record<string, { suffix: string; readNext: string; related: string }> = {
  en: { suffix: "", readNext: "What to read next", related: "Related guides" },
  "zh-tw": { suffix: "繁體中文", readNext: "下一步可以看什麼", related: "相關攻略" },
  th: { suffix: "ภาษาไทย", readNext: "อ่านอะไรต่อ", related: "คู่มือที่เกี่ยวข้อง" }
};

function withLocale(text: string, locale: string) {
  const suffix = localeLabels[locale]?.suffix;
  return suffix ? `${text} | ${suffix}` : text;
}

function titleCase(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function pageTitle(slug: string) {
  if (slug === "") return "Guide";
  if (slug === "beginners-guide") return "Beginner Guide";
  return titleCase(slug);
}

function localizedHref(locale: string, slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  if (locale === gameConfig.defaultLocale) return cleanSlug ? `/${cleanSlug}/` : "/";
  return cleanSlug ? `/${locale}/${cleanSlug}/` : `/${locale}/`;
}

function homeLocalizedCopy(locale: string) {
  if (locale === "zh-tw") {
    return {
      popularEyebrow: "熱門搜尋",
      popularTitle: "玩家正在搜尋什麼",
      popularAria: "熱門搜尋",
      faqEyebrow: "FAQ",
      videoLede: "可選影片模組。只有在 gameConfig.homeVideoIds 填入已審核 YouTube ID 後才會顯示。",
      videoNote: "安全規則：不要信任影片描述或留言中要求 Roblox 密碼、cookie、恢復碼、外掛或下載的連結。",
      videoRelated: "先閱讀文字版新手指南"
    };
  }

  if (locale === "th") {
    return {
      popularEyebrow: "การค้นหายอดนิยม",
      popularTitle: "ผู้เล่นกำลังค้นหาอะไร",
      popularAria: "การค้นหายอดนิยม",
      faqEyebrow: "FAQ",
      videoLede: "โมดูลวิดีโอแบบเลือกเปิด จะแสดงก็ต่อเมื่อใส่ YouTube IDs ที่ตรวจแล้วใน gameConfig.homeVideoIds",
      videoNote: "กฎความปลอดภัย: หลีกเลี่ยงลิงก์ใน description หรือ comments ที่ขอ Roblox password, cookie, recovery code, extension หรือ download",
      videoRelated: "อ่าน beginner guide แบบข้อความก่อน"
    };
  }

  return {
    popularEyebrow: "Popular searches",
    popularTitle: "What players are looking for",
    popularAria: "Popular searches",
    faqEyebrow: "FAQ",
    videoLede: "Optional video module. It appears only after reviewed YouTube IDs are added to gameConfig.homeVideoIds.",
    videoNote: "Safety rule: ignore links in video descriptions or comments that ask for Roblox passwords, cookies, recovery codes, extensions, scripts, or downloads.",
    videoRelated: "Read the written beginner guide first"
  };
}

export function createTemplateHomePage(locale = "en"): HomePageContent {
  const homeCopy = homeLocalizedCopy(locale);

  return {
    meta: {
      title: withLocale(`${gameConfig.gameName} Wiki | Codes, Crops & Guide`, locale),
      description: `${gameConfig.gameName} wiki for Roblox players: check codes status, learn crops, upgrades, beginner routes, update notes, safe links, and offline income tips.`
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
    directory: {
      eyebrow: "Build A Ring Farm navigation",
      title: "Build A Ring Farm wiki sections",
      cards: [
        { href: localizedHref(locale, "crops"), title: "Crops", description: "Learn crop flow, harvest timing, selling logic, and upgrade priorities." },
        { href: localizedHref(locale, "upgrades"), title: "Upgrades", description: "Plan gear shop choices, ROI checks, and farm progression upgrades." },
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
        { title: "Crops and upgrades", description: "Explain the verified grow, harvest, upgrade, expand, sell, and offline earning loop." },
        { title: "Codes status", description: "Separate verified codes from pending community claims instead of publishing unsupported strings." },
        { title: "Updates and sources", description: "Use Roblox, developer-linked channels, and in-game checks before changing game facts." }
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
      lede: homeCopy.videoLede,
      note: homeCopy.videoNote,
      relatedLabel: homeCopy.videoRelated
    },
    popularSearchesMeta: {
      eyebrow: homeCopy.popularEyebrow,
      title: homeCopy.popularTitle,
      ariaLabel: homeCopy.popularAria
    },
    popularSearches: [
      { href: "/codes/", title: `${gameConfig.gameName} Codes`, description: "Check whether any official or in-game code proof exists.", coversLabel: "Covers", covers: "Codes · Status · Safety" },
      { href: "/crops/", title: `${gameConfig.gameName} Crops`, description: "Understand crop flow, harvest timing, selling, upgrades, and reinvestment.", coversLabel: "Covers", covers: "Crops · Farming · Cash" },
      { href: "/upgrades/", title: `${gameConfig.gameName} Upgrades`, description: "Plan gear shop choices, ROI checks, mutation value, and upgrade timing.", coversLabel: "Covers", covers: "Upgrades · Gear · ROI" },
      { href: "/beginners-guide/", title: `${gameConfig.gameName} Beginner Guide`, description: "Start with crops, upgrades, selling, expansion, and offline earnings.", coversLabel: "Covers", covers: "Crops · Upgrade · Sell" },
      { href: "/updates/", title: `${gameConfig.gameName} Updates`, description: "Follow update checks and recheck points for codes, rewards, and farm systems.", coversLabel: "Covers", covers: "Updates · Sources · Changes" }
    ],
    faqMeta: {
      eyebrow: homeCopy.faqEyebrow,
      title: `${gameConfig.gameName} Wiki FAQ`
    },
    faq: [
      { q: "What is Build A Ring Farm Wiki?", a: "Build A Ring Farm Wiki is an independent fan guide for the Roblox farming simulator Build A Ring Farm." },
      { q: "What does this Build A Ring Farm guide cover?", a: "It covers codes status, beginner farming routes, crops, upgrades, update checks, safety notes, and offline income basics." },
      { q: "Does Build A Ring Farm have verified active codes?", a: "No verified official codes have been confirmed yet." },
      { q: "Is this an official Build A Ring Farm website?", a: "No. This is an independent fan guide. The official game page is on Roblox." }
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
      title: withLocale(`${gameConfig.gameName} Crops Guide | Farming & Harvest Tips`, locale),
      description: `${gameConfig.gameName} crops guide for Roblox players. Learn crop flow, harvest timing, selling logic, upgrade priorities, offline income, and safe source checks.`
    },
    slug: "crops",
    hero: {
      eyebrow: "Crops and farming guide",
      h1: withLocale(`${gameConfig.gameName} Crops Guide`, locale),
      lede: "Use this Build A Ring Farm crops guide to understand the farming loop: plant crops, wait for growth, harvest, sell for cash, upgrade production, and reinvest into a larger farm.",
      primaryAction: { label: "Read beginner guide", href: localizedHref(locale, "beginners-guide") },
      secondaryAction: { label: "Check codes", href: localizedHref(locale, "codes") }
    },
    summaryCards: [
      { title: "Crop loop", description: "Plant, wait, harvest, sell, upgrade, and repeat without wasting early cash." },
      { title: "Upgrade timing", description: "Prioritize upgrades that reduce waiting, increase output, or help expand production." },
      { title: "No fake values", description: "This page avoids unverified crop prices, mutation rates, and reward numbers." }
    ],
    sections: [
      {
        heading: "How crops work in Build A Ring Farm",
        body: [
          "Build A Ring Farm is built around a simple farming loop. You grow crops, harvest them, sell the harvest for cash, and use that cash to expand or upgrade the farm.",
          "For SEO and accuracy, this guide separates confirmed gameplay behavior from unverified tables. Until a crop value is checked in-game or from an official source, it should not be presented as a fixed number."
        ],
        list: ["Grow crops on available plots.", "Harvest when the crop is ready.", "Sell harvests for cash.", "Use cash for upgrades, expansion, or faster progression."]
      },
      {
        heading: "Best early crop strategy",
        body: [
          "The safest early strategy is not to chase a single crop name. Focus on keeping plots active, avoiding idle time, and reinvesting cash into systems that increase the next harvest cycle.",
          "If two crop choices are available, compare time to grow, expected selling value, and whether the crop supports your next upgrade. Do not judge only by the final sale number."
        ],
        list: ["Keep every available plot working.", "Reinvest early cash instead of holding it too long.", "Favor consistent harvest cycles before risky long waits.", "Check whether an upgrade improves every later crop cycle."]
      },
      {
        heading: "Crops, upgrades, and offline income",
        body: [
          "Crops matter because they feed the rest of the economy. A better farming cycle gives more cash, and more cash gives more upgrade options.",
          "Offline income should be treated as a progress booster, not a replacement for checking the farm. Revisit after upgrades, major updates, or new crop mechanics because balance can change."
        ],
        list: ["Use active play to unlock and improve farm systems.", "Use offline income to keep momentum between sessions.", "Recheck crop advice after major game updates."]
      },
      {
        heading: "Why this page does not list fake crop prices",
        body: [
          "Some competing pages publish crop tables before proving the source. That can attract clicks, but it creates a trust problem when prices, mutations, or upgrade effects are wrong.",
          "This site should add crop names, values, and mutation data only after a recorded source check. That makes the page slower to fill, but safer for long-term SEO."
        ],
        list: ["Do not invent crop prices.", "Do not invent mutation rates.", "Do not copy unsupported community tables.", "Add a source note when real crop data is verified."]
      }
    ],
    relatedLinks: [
      { href: localizedHref(locale, "beginners-guide"), title: "Beginner Guide", description: "Learn the full early-game farming route." },
      { href: localizedHref(locale, "codes"), title: "Codes", description: "Check whether verified codes exist before using code lists." },
      { href: localizedHref(locale, "upgrades"), title: "Upgrades", description: "Plan upgrade timing after the crop loop is stable." },
      { href: localizedHref(locale, "updates"), title: "Updates", description: "Review update triggers that may change crops or upgrades." }
    ],
    faq: [
      { q: "What are crops in Build A Ring Farm?", a: "Crops are the core farming items players grow, harvest, and sell for cash in Build A Ring Farm." },
      { q: "What is the best crop in Build A Ring Farm?", a: "A single best crop has not been verified here yet. Compare growth time, sale value, and upgrade goals before choosing." },
      { q: "Does this page list all crop prices?", a: "No. This guide does not publish fixed crop prices until they are verified from official or in-game evidence." },
      { q: "How should beginners use crops?", a: "Beginners should keep plots active, harvest consistently, sell for cash, and reinvest into upgrades or expansion." }
    ]
  };
}

function createUpgradesPage(locale: string): StrategyPageContent {
  return {
    meta: {
      title: withLocale(`${gameConfig.gameName} Upgrades Guide | Gear Shop & ROI`, locale),
      description: `${gameConfig.gameName} upgrades guide for Roblox players. Learn gear shop planning, ROI checks, mutation value, crop efficiency, and safe upgrade timing.`
    },
    slug: "upgrades",
    hero: {
      eyebrow: "Upgrades and gear guide",
      h1: withLocale(`${gameConfig.gameName} Upgrades Guide`, locale),
      lede: "Use this Build A Ring Farm upgrades guide to decide when to buy gear, when to expand, and how to compare upgrade value without relying on unverified prices or fake multipliers.",
      primaryAction: { label: "Read crops guide", href: localizedHref(locale, "crops") },
      secondaryAction: { label: "Open beginner guide", href: localizedHref(locale, "beginners-guide") }
    },
    summaryCards: [
      { title: "Upgrade goal", description: "Buy upgrades that improve repeated crop cycles, not only one harvest." },
      { title: "Gear shop logic", description: "Judge gear by farming speed, output value, mutation support, and cash recovery time." },
      { title: "No fake multipliers", description: "This page avoids unverified gear prices, mutation odds, and exact ROI numbers." }
    ],
    sections: [
      {
        heading: "How upgrades work in Build A Ring Farm",
        body: [
          "Upgrades matter because they change how efficiently your farm turns time into cash. A good upgrade should make future crop cycles easier, faster, or more valuable.",
          "For early players, the core question is not whether an item sounds powerful. The core question is whether that upgrade helps the next several farming cycles pay back its cost."
        ],
        list: ["Improve crop output or harvest speed.", "Reduce idle time between harvests.", "Support expansion into more plots or stronger farming cycles.", "Avoid upgrades that delay basic progression without clear benefit."]
      },
      {
        heading: "Gear shop upgrade strategy",
        body: [
          "Competing guides often highlight gear shop items because they are useful search targets. The safer way to cover this topic is to explain how to evaluate gear before publishing exact numbers.",
          "Before buying gear, check whether it helps with farming speed, selling value, mutation value, or long-term expansion. If the gear only helps rarely, it may be worse than a basic farm upgrade."
        ],
        list: ["Ask what farming problem the gear solves.", "Compare the price with your normal cash-per-cycle.", "Prefer upgrades that help every crop cycle.", "Treat mutation-related claims as pending until verified in-game."]
      },
      {
        heading: "ROI checklist for upgrades",
        body: [
          "ROI means return on investment. In Chinese, ROI 可以理解为“投入回报比”：你花出去的金币，要多久能靠更高产出赚回来。",
          "A simple upgrade rule is this: if an upgrade makes every future harvest better, it is usually safer than an upgrade that only helps in rare cases. But exact ROI requires verified in-game numbers."
        ],
        list: ["How much does the upgrade cost?", "How much faster or stronger is each harvest after buying it?", "How many crop cycles are needed to earn the cost back?", "Will a new update change the upgrade value?"]
      },
      {
        heading: "When to delay upgrades",
        body: [
          "Not every upgrade should be purchased immediately. If buying it empties your cash and leaves plots idle, the upgrade can slow progress instead of speeding it up.",
          "Delay an upgrade when its benefit is unclear, when your crop loop is unstable, or when the item depends on a mechanic that has not been verified yet."
        ],
        list: ["Delay unclear gear purchases.", "Do not buy based only on community hype.", "Keep enough cash to continue planting and selling.", "Recheck upgrade advice after major updates."]
      }
    ],
    relatedLinks: [
      { href: localizedHref(locale, "crops"), title: "Crops", description: "Understand crop cycles before judging upgrade ROI." },
      { href: localizedHref(locale, "beginners-guide"), title: "Beginner Guide", description: "Learn the full first-session progression route." },
      { href: localizedHref(locale, "updates"), title: "Updates", description: "Track changes that may affect gear and upgrades." },
      { href: localizedHref(locale, "codes"), title: "Codes", description: "Check whether verified codes can support upgrade progression." }
    ],
    faq: [
      { q: "What are upgrades in Build A Ring Farm?", a: "Upgrades are purchases or systems that can improve farming speed, crop output, selling efficiency, expansion, or long-term progression." },
      { q: "What should I upgrade first in Build A Ring Farm?", a: "A single best first upgrade has not been verified here yet. Beginners should favor upgrades that improve repeated crop cycles and prevent idle plots." },
      { q: "Does this page list gear shop prices?", a: "No. This guide does not publish exact gear prices or mutation multipliers until they are verified from official or in-game evidence." },
      { q: "What does ROI mean for upgrades?", a: "ROI means return on investment. For upgrades, it asks how many crop cycles are needed before the upgrade earns back its cost." }
    ]
  };
}

export function createTemplateStrategyPage(slug: StrategySlug, locale = "en"): StrategyPageContent {
  if (slug === "crops") {
    return createCropsPage(locale);
  }

  if (slug === "upgrades") {
    return createUpgradesPage(locale);
  }

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
      secondaryAction: { label: "Back home", href: localizedHref(locale, "") }
    },
    summaryCards: [
      { title: "Evidence first", description: "Use official, in-game, or clearly labeled community evidence." },
      { title: "No invented values", description: "Do not invent stats, unit values, rewards, scripts, or Discord links." },
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
      },
      {
        heading: "Source boundaries",
        body: ["This page avoids invented stats, rewards, and official claims. Recheck after major Roblox updates."]
      }
    ],
    relatedLinks: [
      { href: localizedHref(locale, "codes"), title: "Codes", description: "Verify active and pending codes." },
      { href: localizedHref(locale, "updates"), title: "Updates", description: "Track official Roblox update signals." },
      { href: localizedHref(locale, "beginners-guide"), title: "Beginner Guide", description: "Start with the verified farming loop." }
    ],
    faq: [
      { q: `Is this ${label.toLowerCase()} page final?`, a: "It should be rechecked after major updates or new official sources." },
      { q: "What should be checked first?", a: "Official sources, in-game evidence, and whether the page should be localized or kept English-only." }
    ]
  };
}
