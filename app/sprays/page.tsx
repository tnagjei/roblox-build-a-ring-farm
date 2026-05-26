// input: `/sprays/` route request
// output: English sprays guide page with cross-source community reported spray data and safe source boundaries
// pos: sprays route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Build A Ring Farm Sprays Guide | Effects & ROI";
const pageDescription = "Build A Ring Farm sprays guide covering cross-source community reported spray effects, gear shop use, rare crop value, weather events, ROI, and source status.";
const heroImage = "/images/official-hero-image.webp";
const crossSourceStatus = "Cross-source community reported";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://www.buildaringfarm.org/sprays/"
  }
};

const summaryCards = [
  { title: "Cross-source community reported", description: "Spray names, prices, and effects appear across multiple community guide sources, but still need official or in-game proof." },
  { title: "Effect testing", description: "Sprays may help test rare effects directly, but they should not replace stable crop and cash routes." },
  { title: "ROI first", description: "Compare spray cost against crop value and repeated farming cycles before spending heavily." }
];

const sprayRows = [
  { item: "Wet Spray", reportedEffect: "Wet", reportedUse: "Price pending, entry-level effect testing and Rain route comparison.", status: crossSourceStatus },
  { item: "Frozen Spray", reportedEffect: "Frozen", reportedUse: "Price pending, mid-tier effect testing and Blizzard route comparison.", status: crossSourceStatus },
  { item: "Void Spray", reportedEffect: "Void", reportedUse: "Price pending, higher-value effect testing and Black Hole route comparison.", status: crossSourceStatus },
  { item: "Radioactive Spray", reportedEffect: "Radioactive", reportedUse: "Price pending, late progression effect testing and Nuclear route comparison.", status: crossSourceStatus },
  { item: "Rainbow Spray", reportedEffect: "Rainbow", reportedUse: "Price pending, highest reported effect testing and Galaxy route comparison.", status: crossSourceStatus },
  { item: "Acid Spray", reportedEffect: "Acid / effect reset lead", reportedUse: "Price pending, special effect testing after source checks.", status: crossSourceStatus }
];

const effectRows = [
  { effect: "Rainbow", tier: "S", valueLead: "Highest reported value boost lead", status: crossSourceStatus },
  { effect: "Radioactive", tier: "A", valueLead: "Strong reported rare effect lead", status: crossSourceStatus },
  { effect: "Void", tier: "B", valueLead: "Higher-value reported effect lead", status: crossSourceStatus },
  { effect: "Frozen", tier: "C", valueLead: "Mid-tier reported effect lead", status: crossSourceStatus },
  { effect: "Wet", tier: "D", valueLead: "Entry-level reported effect lead", status: crossSourceStatus }
];

const sections = [
  {
    heading: "What are sprays in Build A Ring Farm?",
    subheading: "Spray role in progression",
    body: [
      "Sprays are cross-source community reported gear shop items that may connect to rare crop effects such as Wet, Frozen, Void, Radioactive, and Rainbow. They matter because players use them to test or support rare-effect routes instead of waiting only for weather events.",
      "The official Roblox page confirms the broad farming loop, upgrades, selling plants for cash, and offline earnings. It does not confirm every spray price, spray effect, stacking rule, or best spray route. Treat every spray table as a cross-source research lead until in-game proof exists."
    ],
    list: ["Use sprays after the base crop loop is stable.", "Treat spray data as cross-source community reported.", "Do not assume every spray is profitable.", "Recheck spray behavior after updates."]
  },
  {
    heading: "Sprays vs weather events",
    subheading: "Two paths to rare effects",
    body: [
      "Weather events and sprays can point to similar effect names, but they are not the same decision. Multiple community sources connect Rain with Wet, Blizzard with Frozen, Black Hole with Void, Nuclear with Radioactive, and Galaxy with Rainbow.",
      "A spray may be more direct than waiting for an event, but it can also cost more cash. A weather event may be free, but it can depend on timing, chance, and whether the player is online. This is why sprays should be compared with event routes instead of ranked alone."
    ],
    list: ["Wet Spray compares with Rain Event.", "Frozen Spray compares with Blizzard Event.", "Void Spray compares with Black Hole Event.", "Radioactive Spray compares with Nuclear Event.", "Rainbow Spray compares with Galaxy Event."]
  },
  {
    heading: "Best spray logic without fake certainty",
    subheading: "How to judge sprays",
    body: [
      "The best spray is not automatically the strongest reported effect. A high-tier spray can be a bad purchase if it empties your cash, hits a weak crop, or fails to recover its cost through later harvests.",
      "Use ROI logic first. ROI means return on investment. In Chinese, ROI 可以理解为“投入回报比”：买 spray 后，要多久能靠更高 crop value 赚回来。If the answer is unclear, delay the purchase and keep normal farming active."
    ],
    list: ["Check your cash before buying.", "Use stronger sprays on stronger crop routes.", "Compare spray value with upgrades.", "Avoid buying sprays only because a tier list looks exciting."]
  },
  {
    heading: "Spray prices after Update 3",
    subheading: "Acid Spray and Rainbow Spray stay pending",
    body: [
      "The keyword report flags spray prices, Acid Spray, and Rainbow Spray as P1 work. This page now covers those terms, but it keeps exact costs pending because the current evidence is not strong enough to publish verified prices.",
      "Use the gear shop page for buying logic and this sprays page for effect intent. If a future in-game check confirms a price, record the date, screenshot, and item context before changing the status."
    ],
    list: ["Acid Spray price: pending.", "Rainbow Spray price: pending.", "Spray prices: pending until checked.", "Effects: cross-source community reported."]
  },
  {
    heading: "Sprays, gear shop, and tier list pages",
    subheading: "How this page fits the wiki",
    body: [
      "This sprays page should not replace the gear shop page. The gear shop page explains item decision-making and ROI. The advanced crops page explains reported rare value boosts. The tier list page organizes effects and routes by cross-source community reported priority.",
      "This page focuses on spray-specific intent: which spray names players search for, how sprays connect to rare effects, and what still needs verification before publishing stronger claims."
    ],
    list: ["Use Gear Shop for item buying logic.", "Use Advanced Crops for rare value context.", "Use Tier List for effect priority logic.", "Use Weather Events for event-based alternatives."]
  },
  {
    heading: "What still needs verification",
    subheading: "Pending source checks",
    body: [
      "A complete Build A Ring Farm sprays guide needs exact in-game prices, screenshots of spray behavior, stacking tests with weather events, before-and-after crop value checks, and update history. Without that evidence, this site should not publish official-sounding claims.",
      "Future updates should record the test date, game version or update state, starting crop, spray used, result, and whether any event was active during the test."
    ],
    list: ["Exact spray prices.", "Whether sprays stack with events.", "Whether sprays work offline.", "Whether spray effects changed after updates.", "Whether any spray has a cooldown or limit."]
  }
];

const relatedLinks = [
  { href: "/gear-shop/", title: "Gear Shop", description: "Compare sprays with other gear shop decisions and ROI timing." },
  { href: "/rainbow-spray/", title: "Rainbow Spray", description: "Check Rainbow Spray source status before using it in a route." },
  { href: "/rainbow-mutation/", title: "Rainbow Mutation", description: "Compare the related effect lead separately from the item." },
  { href: "/advanced-crops/", title: "Advanced Crops", description: "Review cross-source community reported rare effect values and source status." },
  { href: "/tier-list/", title: "Tier List", description: "Compare reported effects and routes without treating tiers as official." },
  { href: "/weather-events/", title: "Weather Events", description: "Compare spray effects with reported weather event effects." },
  { href: "/money-farming/", title: "Money Farming", description: "Check whether spray spending fits your cash route." },
  { href: "/upgrades/", title: "Upgrades", description: "Compare spray purchases against repeatable upgrade value." }
];

const faq = [
  { q: "Are Build A Ring Farm sprays official on this site?", a: "No. Spray names and effects are cross-source community reported until official notes or in-game evidence confirms them." },
  { q: "What is the best reported spray?", a: "Multiple community sources point to Rainbow Spray as the strongest effect lead, but this site does not treat that as official data." },
  { q: "Should beginners buy sprays first?", a: "Usually no. Beginners should stabilize seeds, crops, selling, and upgrades before spending heavily on spray testing." },
  { q: "Can sprays stack with weather events?", a: "Stacking behavior has not been verified here yet. Treat spray and event interaction claims as needs verification." }
  ,{ q: "Are Acid Spray and Rainbow Spray prices verified?", a: "No. Acid Spray and Rainbow Spray prices stay pending until in-game proof confirms them." }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

export default function SpraysPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Sprays and rare effects guide</p>
          <h1>Build A Ring Farm Sprays Guide</h1>
          <p className="lede">
            Use this Build A Ring Farm sprays guide to compare cross-source community reported spray effects, gear shop use, rare crop value, weather events, ROI, and source status without treating any spray claim as official data.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="/gear-shop/">Read gear shop</Link>
            <Link className="secondary-link" href="/advanced-crops/">Read advanced crops</Link>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="guide-card evidence-note-card">
        <span className="card-rule" />
        <p className="eyebrow">Evidence note</p>
        <h2>Spray data is cross-source community reported</h2>
        <p>
          This page does not claim official spray prices, official effects, or official best spray routes. Use the tables as cross-source research leads until screenshots, developer notes, or repeatable in-game tests confirm them.
        </p>
      </section>

      <section className="research-grid" aria-label="Sprays summary">
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
        <h2>Reported Build A Ring Farm sprays</h2>
      </section>
      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Cross-source community reported</p>
          <h2>Spray effects and use cases</h2>
          <div className="data-list">
            {sprayRows.map((row) => (
              <div className="data-row four-field-row" key={row.item}>
                <div><span>Spray</span><strong>{row.item}</strong></div>
                <div><span>Reported effect</span><strong>{row.reportedEffect}</strong></div>
                <div><span>Use case</span><strong>{row.reportedUse}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>

        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Effect context</p>
          <h2>Reported spray effect priority</h2>
          <div className="data-list">
            {effectRows.map((row) => (
              <div className="data-row four-field-row" key={row.effect}>
                <div><span>Effect</span><strong>{row.effect}</strong></div>
                <div><span>Tier lead</span><strong>{row.tier}</strong></div>
                <div><span>Value lead</span><strong>{row.valueLead}</strong></div>
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
          <h2>Build A Ring Farm Sprays Guide FAQ</h2>
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
