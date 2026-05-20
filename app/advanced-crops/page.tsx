// input: `/advanced-crops/` route request
// output: English advanced crops guide page with safe source boundaries
// pos: advanced-crops route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Advanced Crops Guide | Rare Effects, Sprays & Event Odds";
const pageDescription = "Build A Ring Farm advanced crops guide with community reported rare effects, spray costs, event odds, value boosts, offline limits, and safe source checks.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: absoluteUrl("/advanced-crops/")
  }
};

const summaryCards = [
  { title: "Community reported", description: "Useful leads from community sources, not official Roblox-confirmed numbers." },
  { title: "Event timing", description: "Separate normal farming from limited events, boosts, and online-only systems." },
  { title: "Spray checks", description: "Treat spray costs and effects as source-status items until in-game proof exists." }
];

const effectRows = [
  { effect: "Rainbow", value: "5x", status: "Community reported" },
  { effect: "Radioactive", value: "3x", status: "Community reported" },
  { effect: "Void", value: "2.25x", status: "Community reported" },
  { effect: "Frozen", value: "1.75x", status: "Community reported" },
  { effect: "Wet", value: "1.5x", status: "Community reported" }
];

const sprayRows = [
  { item: "Acid Spray", reportedCost: "$1,000,000", reportedUse: "Clears existing rare effect", status: "Community reported" },
  { item: "Wet Spray", reportedCost: "$10,000,000", reportedUse: "Applies Wet", status: "Community reported" },
  { item: "Frozen Spray", reportedCost: "$750,000,000", reportedUse: "Applies Frozen", status: "Community reported" },
  { item: "Void Spray", reportedCost: "$1,000,000,000", reportedUse: "Applies Void", status: "Community reported" },
  { item: "Radioactive Spray", reportedCost: "$10,000,000,000", reportedUse: "Applies Radioactive", status: "Community reported" },
  { item: "Rainbow Spray", reportedCost: "$1,000,000,000,000", reportedUse: "Applies Rainbow", status: "Community reported" }
];

const eventRows = [
  { eventName: "Rain Event", reportedEffect: "Wet", reportedChance: "8%", status: "Community reported" },
  { eventName: "Blizzard Event", reportedEffect: "Frozen", reportedChance: "4%", status: "Community reported" },
  { eventName: "Black Hole Event", reportedEffect: "Void", reportedChance: "3%", status: "Community reported" },
  { eventName: "Nuclear Event", reportedEffect: "Radioactive", reportedChance: "2%", status: "Community reported" },
  { eventName: "Galaxy Event", reportedEffect: "Rainbow", reportedChance: "1%", status: "Community reported" }
];

const sections = [
  {
    heading: "Source status: official vs community reported",
    body: [
      "The official Roblox page confirms the broad game loop: grow plants, harvest, upgrade the farm, sell plants for cash, and earn while offline. It does not publish exact rare effect values, spray prices, event odds, or ranking tables.",
      "The rows above should be treated as community reported leads. They are useful for player research, but they should be rechecked after updates before being described as official facts."
    ],
    list: ["Official: game name, creator, basic farming loop, upgrades, selling, offline earnings.", "Community reported: rare effect values, spray costs, event odds, and tier ordering.", "Pending: offline rare effect behavior and exact item behavior after future updates."]
  },
  {
    heading: "Tier list logic without fake certainty",
    body: [
      "Competitor pages often use a tier list because it is easy for players to scan. This page can use the same structure, but the current safe version labels values by source status instead of pretending that every number is official.",
      "A useful tier list should compare repeatability, value boost, trigger difficulty, gear cost, and whether the effect helps normal farming or only rare situations."
    ],
    list: ["High tier: repeatable value boost with clear farming use.", "Medium tier: useful but dependent on timing, gear, or event state.", "Low tier: visually interesting but weak for cash recovery.", "Pending tier: not enough verified data yet."]
  },
  {
    heading: "Gear shop sprays and rare crop value",
    body: [
      "Community sources report that sprays can apply specific rare crop effects directly. This is useful because event-based effects may be random, slow, or online-dependent.",
      "The practical rule is to compare spray cost against the crop value you are improving. A high-price spray is usually more logical on your strongest crops than on low-value early crops."
    ],
    list: ["Check whether the item affects one crop or many cycles.", "Check whether the result is event-only.", "Check whether offline progress changes the outcome.", "Do not publish copied odds without source notes."]
  },
  {
    heading: "Offline limits and event effects",
    body: [
      "Players care whether rare crop effects can happen while offline. Community pages suggest active play matters for event-based effects, while the official page only confirms that the farm can earn offline.",
      "For now, offline rare effect claims should stay pending. When tested, record the date, version state, starting crop, offline duration, and final result before updating the page."
    ],
    list: ["Record before and after screenshots.", "Test active play separately from offline progress.", "Repeat after major updates.", "Keep uncertain claims clearly labeled as pending."]
  }
];

const relatedLinks = [
  { href: "/crops/", title: "Crops", description: "Start with the normal crop loop before chasing rare effects." },
  { href: "/upgrades/", title: "Upgrades", description: "Compare gear and spray value against basic upgrade ROI." },
  { href: "/updates/", title: "Updates", description: "Check update notes that may change rare crop behavior." },
  { href: "/codes/", title: "Codes", description: "Review verified code status before using code claims for progression." }
];

const faq = [
  { q: "Are these rare crop values official?", a: "No. The exact values on this page are community reported and should be rechecked after updates." },
  { q: "What is the strongest reported rare crop effect?", a: "Community sources report Rainbow as the highest listed value boost at 5x, but this is not official-source verified on this site yet." },
  { q: "Can sprays improve crop value?", a: "Community sources report spray items for Wet, Frozen, Void, Radioactive, and Rainbow effects. Exact item behavior should still be tested in-game." },
  { q: "Can rare crop effects happen offline?", a: "Offline behavior is not verified here yet. The official page confirms offline earnings, but not rare effect triggering while offline." }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

export default function AdvancedCropsPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Advanced crop effects guide</p>
          <h1>Build A Ring Farm Advanced Crops Guide</h1>
          <p className="lede">
            Use this Build A Ring Farm advanced crops guide to review community reported rare effects, event-based value boosts, sprays, and offline limits without treating unverified numbers as official facts.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="/upgrades/">Read upgrades guide</Link>
            <Link className="secondary-link" href="/crops/">Read crops guide</Link>
          </div>
        </div>
        <img className="hero-image" src={siteData.assets.hero} alt={`${siteData.game.name} Roblox thumbnail`} />
      </section>

      <section className="guide-card evidence-note-card">
        <span className="card-rule" />
        <p className="eyebrow">Evidence note</p>
        <h2>Community reported values, not official Roblox data</h2>
        <p>
          The official Roblox page confirms the basic Build A Ring Farm gameplay loop, but not the exact values below. Treat these rows as research leads until official notes, developer posts, or in-game screenshots confirm them.
        </p>
      </section>

      <section className="research-grid" aria-label="Advanced crop effects summary">
        {summaryCards.map((card) => (
          <article className="research-card" key={card.title}>
            <span className="card-rule" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="section-heading">
        <p className="eyebrow">Community tables</p>
        <h2>Reported values players search for</h2>
      </section>

      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Community table</p>
          <h2>Reported rare crop values</h2>
          <div className="data-list">
            {effectRows.map((row) => (
              <div className="data-row three-field-row" key={row.effect}>
                <div><span>Effect</span><strong>{row.effect}</strong></div>
                <div><span>Reported value</span><strong>{row.value}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>

        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Community table</p>
          <h2>Reported gear shop sprays</h2>
          <div className="data-list">
            {sprayRows.map((row) => (
              <div className="data-row four-field-row" key={row.item}>
                <div><span>Item</span><strong>{row.item}</strong></div>
                <div><span>Reported cost</span><strong>{row.reportedCost}</strong></div>
                <div><span>Reported use</span><strong>{row.reportedUse}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>

        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Community table</p>
          <h2>Reported event odds</h2>
          <div className="data-list">
            {eventRows.map((row) => (
              <div className="data-row four-field-row" key={row.eventName}>
                <div><span>Event</span><strong>{row.eventName}</strong></div>
                <div><span>Reported effect</span><strong>{row.reportedEffect}</strong></div>
                <div><span>Reported chance</span><strong>{row.reportedChance}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        {sections.map((section) => (
          <article className="guide-card" key={section.heading}>
            <span className="card-rule" />
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </section>

      <section className="section-heading">
        <p className="eyebrow">Related guides</p>
        <h2>What to read next</h2>
      </section>
      <section className="route-grid" aria-label="Related guides">
        {relatedLinks.map((link) => (
          <Link className="route-card" href={link.href} key={link.href}>
            <span className="card-rule" />
            <h2>{link.title}</h2>
            <p>{link.description}</p>
          </Link>
        ))}
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Build A Ring Farm Advanced Crops Guide FAQ</h2>
        </div>
        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
