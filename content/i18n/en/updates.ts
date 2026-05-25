// input: English updates page requirements
// output: typed English updates content object
// pos: English updates SEO content（更新规则：文件变更需同步本注释与所属目录 README）

import type { StrategyPageContent } from "@/lib/content/page-types";

export const enUpdatesPage: StrategyPageContent = {
  meta: {
    title: "Build A Ring Farm Updates | Update 3 Status & Codes",
    description: "Follow Build A Ring Farm updates, Update 3 reported code leads, pending mutation and event checks, Roblox source notes, and safe recheck steps."
  },
  slug: "updates",
  hero: {
    eyebrow: "Update tracker",
    h1: "Build A Ring Farm Updates",
    lede: "Track Build A Ring Farm updates with Update 3 reported code leads, pending mutation checks, Roblox source notes, and safe recheck steps.",
    primaryAction: { label: "Check Update 3 status", href: "/update-3-status/" },
    secondaryAction: { label: "Check codes", href: "/codes/" }
  },
  summaryCards: [
    { title: "Update 3 status", description: "Update 3 code and reward claims stay reported or pending until official or in-game proof exists." },
    { title: "Mutation recheck", description: "Honeycomb, Alien, and Farm mutation leads need screenshots or repeatable in-game checks before stronger wording." },
    { title: "Event recheck", description: "Queen Bee and related event claims stay pending until source quality improves." }
  ],
  sections: [
    {
      heading: "Build A Ring Farm Update 3 recheck entry",
      subheading: "2026-05-24 signal, pending proof",
      body: [
        "The keyword report says public search results already show Update 3 signals around 2026-05-24. That is a freshness warning, not proof that a specific code, multiplier, price, event, or mutation is verified.",
        "This update tracker should therefore send players to a status page and keep every weak claim labeled as reported or pending. The goal is to be faster without copying code-site certainty."
      ],
      list: ["Update 3 code claims: reported or pending.", "Official or in-game proof: still required.", "Freshness action: recheck codes, mutations, events, and gear prices.", "Do not turn community reported claims into verified claims."]
    },
    {
      heading: "Update 3 codes and latest codes",
      subheading: "Status before reward details",
      body: [
        "Latest-code intent is high after an update, but the page must still protect players from fake active strings. A reported code lead can be listed only if the label makes clear that it is not accepted as active here.",
        "Before changing any code status, check the Roblox game page, developer-linked sources if verified, and the real in-game code UI. Record the result date and reward text before promoting any claim."
      ],
      list: ["Keep verified codes separate from reported leads.", "Keep unsupported rewards pending.", "Reject external verification pages and downloads.", "Use the Update 3 status page for the current verdict."]
    },
    {
      heading: "Update 3 mutation and event rechecks",
      subheading: "Honeycomb, Alien, Farm, and Queen Bee",
      body: [
        "P1 recommendations mention Honeycomb mutation, Queen Bee event, Alien mutation, and Farm mutation. These are good content targets, but they are not official facts by default.",
        "Update pages should point readers to mutations, weather events, and tier list pages where the terms are labeled as reported or pending. Do not publish exact multipliers, odds, or prices unless stronger evidence exists."
      ],
      list: ["Honeycomb mutation: reported, pending verification.", "Alien mutation: reported, pending verification.", "Farm mutation: reported, pending verification.", "Queen Bee event: reported, pending verification."]
    },
    {
      heading: "Update 3 gear shop and sprays rechecks",
      subheading: "Prices remain source-sensitive",
      body: [
        "The report also flags gear shop prices, spray prices, Acid Spray, and Rainbow Spray as P1 topics. These should improve the gear shop and sprays pages, but only with conservative labels.",
        "If an exact price is not confirmed, use pending language. If a spray effect appears across community sources, use reported language. Avoid writing official price, guaranteed effect, or verified reward unless proof exists."
      ],
      list: ["Gear shop prices: pending unless checked.", "Acid Spray: reported lead.", "Rainbow Spray: reported lead.", "Spray prices: pending unless checked."]
    }
  ],
  relatedLinks: [
    { href: "/update-3-status/", title: "Update 3 Status", description: "Review the reported and pending status for Update 3 codes and new leads." },
    { href: "/codes/", title: "Codes", description: "Check verified active code count and reported code leads." },
    { href: "/mutations/", title: "Mutations", description: "Review Honeycomb, Alien, Farm, and stacking questions conservatively." },
    { href: "/weather-events/", title: "Weather Events", description: "Track Queen Bee and event-related leads as pending until verified." },
    { href: "/gear-shop/", title: "Gear Shop", description: "Recheck reported gear shop prices, Acid Spray, and Rainbow Spray." },
    { href: "/calculator/", title: "Calculator", description: "Use Update 3 values only as reported or pending calculator inputs." }
  ],
  faq: [
    { q: "Is Build A Ring Farm Update 3 verified here?", a: "The update signal is a recheck topic. Specific codes, values, prices, and event claims still need official or in-game proof." },
    { q: "Are Update 3 codes active?", a: "This site has accepted 0 active Update 3 codes. Current claims stay reported or pending." },
    { q: "Why mention Honeycomb and Queen Bee if they are not verified?", a: "They are P1 search opportunities and recheck leads, but this site labels them reported or pending until stronger evidence exists." },
    { q: "What should change after a real in-game check?", a: "Record the source, date, server state, result, and screenshot before changing any claim from pending to a stronger status." }
  ]
};
