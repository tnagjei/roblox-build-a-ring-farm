// input: `/tier-list/` route request
// output: English cross-source community reported tier list guide page with source boundaries
// pos: tier-list route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Build A Ring Farm Tier List Guide | Effects & Crops";
const pageDescription = "Build A Ring Farm tier list guide covering cross-source community reported crop effects, sprays, event boosts, farming routes, and source status.";
const heroImage = "/images/official-hero-image.webp";
const crossSourceStatus = "Cross-source community reported";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://www.buildaringfarm.org/tier-list/"
  }
};

const summaryCards = [
  { title: "Not official", description: "No official Build A Ring Farm tier list has been confirmed. This page organizes cross-source community reported effects only." },
  { title: "Effect-first ranking", description: "The current safe tier list ranks reported rare effects, not unverified crop prices." },
  { title: "Use as a route filter", description: "A tier list should help decide what to test next, not replace seeds, crops, upgrades, and ROI logic." }
];

const effectTierRows = [
  { tier: "S lead", item: "Honeycomb", reason: "Update 3 reported mutation lead that needs in-game value proof.", source: "Reported, pending verification" },
  { tier: "A lead", item: "Alien", reason: "Update 3 reported mutation lead with no verified value here.", source: "Reported, pending verification" },
  { tier: "A lead", item: "Farm mutation", reason: "Update 3 reported route lead that should be tested before ranking.", source: "Reported, pending verification" },
  { tier: "S", item: "Rainbow", reason: "Highest reported value boost and strongest rare effect lead.", source: crossSourceStatus },
  { tier: "A", item: "Radioactive", reason: "Strong reported value boost, usually treated as late progression.", source: crossSourceStatus },
  { tier: "B", item: "Void", reason: "Reported as a higher-value effect but below Radioactive and Rainbow.", source: crossSourceStatus },
  { tier: "C", item: "Frozen", reason: "Useful reported mid-tier effect connected to Blizzard-style routes.", source: crossSourceStatus },
  { tier: "D", item: "Wet", reason: "Entry-level reported effect, useful for understanding event and spray systems.", source: crossSourceStatus }
];

const routeTierRows = [
  { route: "Stable crop loop", tier: "S for beginners", useCase: "Seeds, crops, harvests, selling, and basic upgrades before rare-effect chasing.", status: "Strategy" },
  { route: "Gear shop testing", tier: "A after cash flow", useCase: "Sprays and fertilizer once normal crop cycles are stable.", status: "Strategy" },
  { route: "Weather event chasing", tier: "B until verified", useCase: "Reported effects such as Rain, Blizzard, Black Hole, Nuclear, and Galaxy.", status: crossSourceStatus },
  { route: "Code reward planning", tier: "Bonus only", useCase: "Use code rewards as extra progress, not as the foundation of a route.", status: "Pending" }
];

const sections = [
  {
    heading: "What this Build A Ring Farm tier list means",
    subheading: "Cross-source community reported ranking",
    body: [
      "This Build A Ring Farm tier list is not an official Roblox ranking. It is a practical guide that organizes cross-source community reported rare effects, route value, sprays, and event leads into a safer decision structure.",
      "The page does not claim that any crop price, drop rate, or rare effect value is official. Use it to decide what to research next, then confirm details through the gear shop, advanced crops, weather events, and money farming pages."
    ],
    list: ["No official tier list has been confirmed.", "Effects are ranked as cross-source community reported leads.", "Exact crop prices and rare rates remain pending.", "Use this as a planning layer, not a final truth table."]
  },
  {
    heading: "Best reported effects for farming value",
    subheading: "Effect tier logic",
    body: [
      "The safest tier list structure is effect-first. Effects such as Rainbow, Radioactive, Void, Frozen, and Wet are easier to compare than unverified crop names because the current available data is mostly about value boosts and event links.",
      "Rainbow is placed highest because multiple community sources report it as the strongest value boost. That does not make it official. It only means Rainbow deserves the highest priority for future verification."
    ],
    list: ["S tier means strongest reported value lead.", "A and B tiers may still be useful depending on cost and trigger difficulty.", "Lower tiers can still matter for beginners or testing.", "Any tier can change after updates."]
  },
  {
    heading: "Best gear shop support for tier routes",
    subheading: "Sprays and ROI",
    body: [
      "The gear shop matters because sprays may let players test specific rare effects directly instead of waiting for random event timing. That makes sprays useful for tier-list planning, but only after the normal cash loop is stable.",
      "ROI means return on investment. In Chinese, ROI 可以理解为“投入回报比”：买一个 spray 或 fertilizer 后，要多久能靠更高产出赚回来。如果 an item empties your cash and leaves plots idle, it can be bad even when the reported tier looks high."
    ],
    list: ["Use gear shop items after basic crop flow is stable.", "Compare spray cost against the crop value being improved.", "Do not buy gear only because it supports a high-tier effect.", "Check the gear shop page before trusting item claims."]
  },
  {
    heading: "Best event-based effects",
    subheading: "Weather event tiers",
    body: [
      "Weather events are a second route into rare effects. Multiple community sources connect Rain with Wet, Blizzard with Frozen, Black Hole with Void, Nuclear with Radioactive, and Galaxy with Rainbow.",
      "Event-based effects are harder to rank because they depend on timing, chance, online behavior, and whether event effects stack with gear shop sprays. For now, event tiers should stay cross-source community reported until repeatable evidence exists."
    ],
    list: ["Galaxy is the strongest reported event lead because it connects to Rainbow.", "Nuclear is a strong reported lead because it connects to Radioactive.", "Rain is useful for entry-level testing but not necessarily best value.", "Offline event behavior still needs verification."]
  },
  {
    heading: "Update 3 tier leads",
    subheading: "New terms are not verified rankings",
    body: [
      "The report names Honeycomb mutation, Alien mutation, Farm mutation, and Queen Bee event as P1 opportunities. They should appear in the tier list because players are searching them, but they should not outrank older entries as verified facts.",
      "Use lead labels until better evidence exists. A reported lead means the term deserves testing, not that the value, odds, or best route has been confirmed."
    ],
    list: ["Honeycomb: reported, pending verification.", "Alien: reported, pending verification.", "Farm mutation: reported, pending verification.", "Queen Bee: reported, pending verification."]
  },
  {
    heading: "What still needs verification",
    subheading: "Pending evidence",
    body: [
      "A stronger tier list needs verified crop names, exact crop prices, gear shop prices, spray behavior, event odds, stacking rules, and offline behavior. Without that evidence, the page should not pretend to be a final ranking.",
      "The long-term plan is to keep the tier list useful but honest: show the current cross-source community reported order, explain why each tier exists, and clearly mark the claims that still need testing."
    ],
    list: ["Exact crop prices.", "Exact rare effect values after updates.", "Whether sprays stack with events.", "Whether rare effects can trigger while offline.", "Whether a new update changes tier order."]
  }
];

const relatedLinks = [
  { href: "/rainbow-mutation/", title: "Rainbow Mutation", description: "Check Rainbow source status before treating it as a top effect." },
  { href: "/advanced-crops/", title: "Advanced Crops", description: "Check reported rare effect values before trusting a tier order." },
  { href: "/gear-shop/", title: "Gear Shop", description: "Compare sprays, fertilizer, and ROI for high-tier effect testing." },
  { href: "/weather-events/", title: "Weather Events", description: "Review event effects that may connect to rare crop tiers." },
  { href: "/money-farming/", title: "Money Farming", description: "Turn tier-list ideas into a safer cash route." },
  { href: "/crops/", title: "Crops", description: "Understand the base crop loop before chasing high tiers." },
  { href: "/upgrades/", title: "Upgrades", description: "Use upgrade ROI before spending on rare effect routes." }
];

const faq = [
  { q: "Is there an official Build A Ring Farm tier list?", a: "No verified official tier list has been confirmed here. This page organizes cross-source community reported effects and route logic only." },
  { q: "What is the best reported effect in Build A Ring Farm?", a: "Multiple community sources report Rainbow as the strongest value boost lead, but this site does not treat it as official data." },
  { q: "Should beginners follow the tier list first?", a: "No. Beginners should stabilize seeds, crops, selling, and upgrades before chasing rare effects." },
  { q: "Can the tier list change after updates?", a: "Yes. Any tier based on community data should be rechecked after updates, new gear shop values, or new event behavior." }
  ,{ q: "Are Honeycomb, Alien, and Farm mutation tiers verified?", a: "No. They are reported Update 3 leads and stay pending until official or repeatable in-game evidence exists." }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

export default function TierListPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Cross-source community reported tier list</p>
          <h1>Build A Ring Farm Tier List Guide</h1>
          <p className="lede">
            Use this Build A Ring Farm tier list guide to compare cross-source community reported effects, sprays, weather event boosts, and farming routes without treating any tier as official Roblox data.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="/advanced-crops/">Read advanced crops</Link>
            <Link className="secondary-link" href="/gear-shop/">Read gear shop</Link>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="guide-card evidence-note-card">
        <span className="card-rule" />
        <p className="eyebrow">Evidence note</p>
        <h2>No official tier list has been confirmed</h2>
        <p>
          This page is a cross-source community reported Build A Ring Farm tier list. It should help players organize research, but it should not be used as proof of official crop prices, official effect values, or official best routes.
        </p>
      </section>

      <section className="research-grid" aria-label="Tier list summary">
        {summaryCards.map((card) => (
          <article className="research-card" key={card.title}>
            <span className="card-rule" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="section-heading">
        <p className="eyebrow">Cross-source table</p>
        <h2>Reported rare effect tier list</h2>
      </section>
      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Cross-source community reported</p>
          <h2>Effect tiers</h2>
          <div className="data-list">
            {effectTierRows.map((row) => (
              <div className="data-row four-field-row" key={row.item}>
                <div><span>Tier</span><strong>{row.tier}</strong></div>
                <div><span>Effect</span><strong>{row.item}</strong></div>
                <div><span>Why it ranks here</span><strong>{row.reason}</strong></div>
                <div><span>Status</span><StatusBadge status={row.source} /></div>
              </div>
            ))}
          </div>
        </article>

        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Strategy table</p>
          <h2>Route tiers</h2>
          <div className="data-list">
            {routeTierRows.map((row) => (
              <div className="data-row four-field-row" key={row.route}>
                <div><span>Route</span><strong>{row.route}</strong></div>
                <div><span>Tier</span><strong>{row.tier}</strong></div>
                <div><span>Use case</span><strong>{row.useCase}</strong></div>
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
            <h3>{section.subheading}</h3>
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
          <h2>Build A Ring Farm Tier List Guide FAQ</h2>
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
