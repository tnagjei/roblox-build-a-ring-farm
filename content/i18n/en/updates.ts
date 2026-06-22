// input: English updates page requirements
// output: typed English updates content object
// pos: English updates SEO content（更新规则：文件变更需同步本注释与所属目录 README）

import type { StrategyPageContent } from "@/lib/content/page-types";

// 2026-06-20 SERP 蓝图 P0：把 updates hub 从 Update 3/4 语境刷新为 June 2026 / Update 6 / CARNIVAL / UPDATE6 当前裁决。
// 设计意图：站内其他页面已进入 CARNIVAL、Update 6、UPDATE6 语境，updates hub 仍旧会让用户/搜索引擎看到过期状态。
// 旧 Update 3/4 内容下移为 historical recheck，不做主叙事。所有声明保持 reported / pending，不升级为 verified。
export const enUpdatesPage: StrategyPageContent = {
  meta: {
    title: "Build A Ring Farm Updates June 2026 | Update 6 Status",
    description: "Track Build A Ring Farm updates, CARNIVAL code signals, Update 6 status, and source-backed notes without treating unverified reports as official patch notes."
  },
  slug: "updates",
  hero: {
    eyebrow: "Update tracker",
    h1: "Build A Ring Farm Updates and Update 6 Status",
    lede: "Track Build A Ring Farm updates with the June 20, 2026 review: Update 6 code signals, CARNIVAL reported status, UPDATE6 pending checks, and clear reported vs verified boundaries.",
    primaryAction: { label: "Check update status", href: "/update-status/" },
    secondaryAction: { label: "Check codes", href: "/codes/" }
  },
  summaryCards: [
    { title: "Update 6 signals", description: "Update 6 code and reward claims stay reported or pending until official or in-game proof exists." },
    { title: "CARNIVAL reported", description: "CARNIVAL is a third-party reported June 2026 code claim for 100 Carnival Pass Tickets, pending in-game verification." },
    { title: "UPDATE6 pending", description: "UPDATE6 is tracked as a pending Update 6 search signal, not a verified code. It does not enter the active code table." },
    { title: "Patch notes boundary", description: "Update 6 patch notes, prices, multipliers, and confirmed rewards remain pending without official or repeatable evidence." }
  ],
  dataTables: [
    {
      eyebrow: "Current verdict",
      title: "Build A Ring Farm update status table",
      description: "This table routes each Update 6 search question to its current label, best page, and what is not verified yet. Every row keeps reported or pending status. Reviewed on June 20, 2026.",
      rows: [
        { key: "verdict-update-6", fields: [{ label: "Topic", value: "Update 6" }, { label: "Current label", value: "Reported, pending verification", status: "reported" }, { label: "Best page", value: "/update-status/" }, { label: "Not verified yet", value: "Patch notes, prices, multipliers, confirmed rewards", status: "pending" }] },
        { key: "verdict-carnival", fields: [{ label: "Topic", value: "CARNIVAL code" }, { label: "Current label", value: "Third-party reported code claim", status: "reported" }, { label: "Best page", value: "/codes/" }, { label: "Not verified yet", value: "Whether CARNIVAL is accepted and gives 100 Carnival Pass Tickets", status: "pending" }] },
        { key: "verdict-update6", fields: [{ label: "Topic", value: "UPDATE6" }, { label: "Current label", value: "Not verified as a code", status: "pending" }, { label: "Best page", value: "/update-status/" }, { label: "Not verified yet", value: "Whether UPDATE6 is a redeemable code at all", status: "pending" }] },
        { key: "verdict-carnival-tickets", fields: [{ label: "Topic", value: "Carnival Pass Tickets" }, { label: "Current label", value: "Reported reward lead, mechanics pending", status: "reported" }, { label: "Best page", value: "/events/" }, { label: "Not verified yet", value: "Ticket shop, event rules, drop rates, redemption mechanics", status: "pending" }] },
        { key: "verdict-source-boundary", fields: [{ label: "Topic", value: "Third-party source labels" }, { label: "Current label", value: "Reported only, including Dexerto's own verified claim", status: "reported" }, { label: "Best page", value: "/codes/" }, { label: "Not verified yet", value: "In-game code response and reward text", status: "pending" }] }
      ]
    },
    {
      eyebrow: "Evidence matrix",
      title: "June 2026 update evidence layers",
      description: "Use this evidence matrix before promoting any update, code, seed, crop, or event claim. Video and third-party source signals are useful discovery inputs, not official patch-note proof.",
      rows: [
        { key: "official-missing", fields: [{ label: "Layer", value: "Official patch notes" }, { label: "Current status", value: "No official Update 6 patch notes confirmed in this review", status: "pending" }, { label: "Use", value: "Do not write prices, rewards, multipliers, or release claims as confirmed" }] },
        { key: "third-party-codes", fields: [{ label: "Layer", value: "Third-party codes" }, { label: "Current status", value: "CARNIVAL reported by multiple code lists", status: "reported" }, { label: "Use", value: "Route exact source claims to /codes/ and keep 0 verified active codes" }] },
        { key: "youtube-reference", fields: [{ label: "Layer", value: "YouTube reference" }, { label: "Current status", value: "Update 6 videos exist, including YD6lrTRqpH0", status: "pending" }, { label: "Use", value: "Visual reference only, not verification proof" }] },
        { key: "community-wiki", fields: [{ label: "Layer", value: "Community wiki and tier lists" }, { label: "Current status", value: "Witherfang, Silver Artichoke, Uranium Reed, and Admin Starroot remain reported or pending", status: "pending" }, { label: "Use", value: "Route seed names to /seeds/ and crop value conflicts to /crops/" }] }
      ]
    }
  ],
  videoSections: [
    {
      eyebrow: "Video reference",
      title: "Build A Ring Farm Update 6 codes video reference",
      description: "This embed covers Update 6 search demand only. It does not confirm official patch notes, UPDATE6 as a real code, CARNIVAL version ownership, prices, rewards, or multipliers.",
      videos: [
        {
          id: "YD6lrTRqpH0",
          title: "Build A Ring Farm Update 6 codes video reference",
          description: "Use this as a visual reference only. Check /codes/ for source claims and /update-status/ for the short pending verdict.",
          fallbackLabel: "Watch the Build A Ring Farm Update 6 codes video on YouTube"
        }
      ]
    }
  ],
  sections: [
    {
      heading: "Current update verdict",
      subheading: "Update 6, CARNIVAL, and UPDATE6 right now",
      body: [
        "This updates hub now leads with the current Build A Ring Farm verdict instead of older Update 3 or Update 4 context. The current signals are Update 6 code demand, the CARNIVAL reported code claim, and the UPDATE6 pending signal.",
        "CARNIVAL is the only new code string with a specific third-party reward claim: 100 Carnival ticket style rewards reported by Pocket Tactics, RadioTimes, GamesRadar, PCGamesN, Beebom, Dexerto, and Pro Game Guides. UPDATE6 is a search and code-title signal, not a verified code. Update 6 patch notes, prices, multipliers, and confirmed rewards are all pending."
      ],
      list: ["Update 6 signal: reported by third-party titles and code-page demand.", "CARNIVAL: third-party reported, pending in-game verification.", "UPDATE6: not verified as a code, stays a pending signal.", "Patch notes, prices, multipliers: pending until official or repeatable evidence."]
    },
    {
      heading: "Build A Ring Farm Update 6 code signals",
      subheading: "What Update 6 search demand means",
      body: [
        "Update 6 has enough SERP and video-title demand to track on this hub, but that demand does not make UPDATE6 a real code. Players searching Update 6 codes should go to /codes/ for the reported CARNIVAL claim and to /update-status/ for the UPDATE6 pending signal.",
        "The safer pattern is to answer Update 6 search intent with boundaries: what is reported, what is still pending, where to test codes, and which claims should stay out of calculator defaults. Do not copy external active labels into verified status."
      ],
      list: ["Update 6 code search demand: reported by third-party titles.", "UPDATE6 label: not verified as a code.", "CARNIVAL label: third-party reported, pending in-game verification.", "Patch-note data: pending until official or repeatable evidence exists."]
    },
    {
      heading: "Reported vs verified update claims",
      subheading: "Why multiple sources do not equal verification",
      body: [
        "Several third-party code pages now list CARNIVAL with 100 Carnival Pass Tickets. That convergence is useful as a reported lead, but it is not verification. Dexerto even labels codes as verified on its own page, and this site treats that as a third-party claim, not accepted proof.",
        "Promotion to verified requires official notes, a developer-linked channel, or repeatable in-game proof with date, server state, result, and reward text. Until then, CARNIVAL stays reported and UPDATE6 stays pending."
      ],
      list: ["Community reported stays community reported.", "Pending values stay pending.", "Do not call copied claims official.", "Dexerto's own verified wording is treated as a reported claim here."]
    },
    {
      heading: "Where to check codes, events, and seeds",
      subheading: "Routing each update question",
      body: [
        "Use /codes/ for the CARNIVAL code status and source freshness table. Use /events/ for the Carnival Pass Tickets reported reward lead and mechanics boundary. Use /update-status/ for the Update 6 code signals and UPDATE6 pending checks.",
        "Seed and crop value leads belong on /seeds/ and /crops/. New entries such as Witherfang, Silver Artichoke, Uranium Reed, and Admin Starroot stay reported, disputed, or pending there, never as calculator defaults."
      ],
      list: ["Codes: /codes/ for CARNIVAL and source freshness.", "Events: /events/ for Carnival Pass Tickets pending mechanics.", "Update status: /update-status/ for UPDATE6 and patch-note boundaries.", "Seeds and crops: /seeds/ and /crops/ for reported, disputed, and pending value leads."]
    },
    {
      heading: "Historical Update 3 and Update 4 recheck entries",
      subheading: "Kept as recheck context, not the current narrative",
      body: [
        "Update 3 and Update 4 led earlier in this tracker. They are kept here as recheck context so older references still resolve, but they are no longer the current verdict. Update 6, CARNIVAL, and UPDATE6 now lead the page.",
        "Update 4 is a freshness signal, not proof that specific patch notes, rewards, multipliers, prices, or code strings are verified. Keep Cosmic, Bubblegum, Fire, Starfall, and Admin mutation claims labeled reported or pending until stronger evidence exists."
      ],
      list: ["Update 4 patch notes: pending.", "Update 4 codes: reported or pending.", "Update 3 code and mutation claims: reported or pending.", "Mutation presets: pending in-game verification."]
    },
    {
      heading: "Update 3 mutation, event, and gear rechecks",
      subheading: "Honeycomb, Alien, Farm, Queen Bee, sprays",
      body: [
        "Earlier P1 recommendations mentioned Honeycomb mutation, Queen Bee event, Alien mutation, and Farm mutation. These are still good content targets, but they are not official facts by default.",
        "Update pages should point readers to mutations, weather events, and gear shop pages where the terms are labeled as reported or pending. Do not publish exact multipliers, odds, prices, or rewards unless stronger evidence exists."
      ],
      list: ["Honeycomb mutation: reported, pending verification.", "Alien mutation: reported, pending verification.", "Queen Bee event: reported, pending verification.", "Acid Spray and Rainbow Spray: reported leads, pending price checks."]
    }
  ],
  relatedLinks: [
    { href: "/update-status/", title: "Update Status", description: "Update 6 code signals, CARNIVAL reports, and UPDATE6 pending checks." },
    { href: "/codes/", title: "Codes", description: "CARNIVAL code status, source freshness table, and 0 verified active codes." },
    { href: "/events/", title: "Events Guide", description: "Carnival Pass Tickets reported reward lead and pending mechanics boundary." },
    { href: "/seeds/", title: "Seeds Guide", description: "Expanded June 2026 seed watchlist including Witherfang, Silver Artichoke, Uranium Reed, and Admin Starroot." },
    { href: "/crops/", title: "Crops Guide", description: "Reported crop value source differences, including Witherfang, Silver Artichoke, and Uranium Reed." },
    { href: "/update-3-status/", title: "Update 3 Status", description: "Older Update 3 reported and pending leads, kept as recheck context." },
    { href: "/mutations/", title: "Mutations", description: "Honeycomb, Alien, Farm, and stacking questions, conservatively labeled." },
    { href: "/calculator/", title: "Calculator", description: "Use reported values only as manual inputs, never as default presets." }
  ],
  faq: [
    { q: "Is UPDATE6 a real Build A Ring Farm code?", a: "UPDATE6 is not verified as a code here. It is tracked as a pending Update 6 search and code-title signal only. Do not add it to the active code table unless the real game UI accepts it and the result is recorded." },
    { q: "Why no Update 6 patch notes on this page?", a: "Update 6 patch notes, prices, multipliers, and confirmed rewards are pending. This site does not write them as official without verified official or repeatable in-game evidence." },
    { q: "Where should I check CARNIVAL?", a: "Use /codes/ for the CARNIVAL code status and source freshness table. CARNIVAL is a third-party reported June 2026 code claim for 100 Carnival Pass Tickets, pending in-game verification." },
    { q: "Why does this page still mention Update 3?", a: "Update 3 and Update 4 entries are kept as historical recheck context so older references resolve. They are no longer the current narrative; Update 6, CARNIVAL, and UPDATE6 now lead this updates hub." },
    { q: "Is CARNIVAL related to Update 6?", a: "CARNIVAL is tracked as a third-party reported June 2026 code claim. Its relation to Update 6 is a source signal, not confirmed patch-note data." },
    { q: "Does the Update 6 video prove the update details?", a: "No. The Update 6 video embed is a YouTube reference only. It does not confirm official patch notes, UPDATE6 as a real code, or any specific reward, price, multiplier, seed, or crop value." },
    { q: "Are Build A Ring Farm updates verified here?", a: "No. Update signals are recheck topics. Specific codes, values, prices, patch notes, and event claims still need official or in-game proof before stronger wording." },
    { q: "What should change after a real in-game check?", a: "Record the source, date, server state, result, and reward text before changing any claim from pending to a stronger status." },
    { q: "Should calculator presets use Update 6 values?", a: "No. CARNIVAL, UPDATE6, and any new seed or crop values stay reported or pending. The calculator only accepts manually entered observed values, never default presets from reported leads." }
  ]
};
