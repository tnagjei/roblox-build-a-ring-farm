// input: locale, slug, and shared site config
// output: source-aware content objects for game pages
// pos: reusable content factory

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
      title: withLocale(`${gameConfig.siteName} | Codes, Tier List, Units, Updates`, locale),
      description: `${gameConfig.siteName} with source-aware Roblox codes status, beginner tips, update notes, and safe player guidance.`
    },
    slug: "",
    hero: {
      eyebrow: "Source-aware Roblox guide",
      h1: withLocale(`${gameConfig.gameName} Guide`, locale),
      lede: "Use official Roblox data and in-game checks to follow farming progress, updates, code status, and safety notes without treating rumors as facts.",
      primaryAction: { label: "Check codes", href: localizedHref(locale, "codes") },
      secondaryAction: { label: "Open Roblox page", href: "roblox", external: true }
    },
    stats: [
      { valueKey: "playing", label: "Playing now", detail: "Roblox API snapshot" },
      { valueKey: "visits", label: "Visits", detail: "Roblox API snapshot" },
      { valueKey: "favorites", label: "Favorites", detail: "Roblox API snapshot" },
      { valueKey: "approval", label: "Approval", detail: "Roblox API snapshot" }
    ],
    directory: {
      eyebrow: "Guide structure",
      title: "Build A Ring Farm guides",
      cards: [
        { href: localizedHref(locale, "codes"), title: "Codes", description: "Track verified active codes, pending claims, and safe redemption notes." },
        { href: localizedHref(locale, "beginners-guide"), title: "Beginner Guide", description: "Learn the basic grow, harvest, upgrade, and sell loop." },
        { href: localizedHref(locale, "updates"), title: "Updates", description: "Track official Roblox changes and recheck triggers." },
        { href: "/scripts/", title: "Scripts Safety", description: "Avoid unsafe downloads, credential requests, and copied exploit links." }
      ]
    },
    research: {
      eyebrow: "Verification policy",
      title: "No fake data",
      cards: [
        { title: "Codes", description: "Keep active codes empty until official or in-game evidence exists." },
        { title: "Rewards", description: "Do not publish reward claims without traceable source notes." },
        { title: "Official status", description: "Do not claim official affiliation unless it is proven." }
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
      { href: "/beginners-guide/", title: `${gameConfig.gameName} Beginner Guide`, description: "Start with crops, upgrades, selling, and offline earnings.", coversLabel: "Covers", covers: "Farm · Upgrade · Sell" }
    ],
    faqMeta: {
      eyebrow: homeCopy.faqEyebrow,
      title: `${gameConfig.gameName} Guide FAQ`
    },
    faq: [
      { q: "Is this an official website?", a: "No. This is an independent fan guide unless official ownership is verified." },
      { q: "Can I publish active codes immediately?", a: "No. Active codes require official or in-game proof." }
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

export function createTemplateStrategyPage(slug: StrategySlug, locale = "en"): StrategyPageContent {
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
