// input: `/gear-shop/` route request
// output: English gear shop guide page with community reported sprays and ROI checks
// pos: gear-shop route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Build A Ring Farm Gear Shop Guide | Sprays & ROI";
const pageDescription = "Build A Ring Farm gear shop guide for sprays, upgrades, rare crop value, ROI checks, source status, and safe Roblox farming progression.";
const heroImage = "/images/official-hero-image.webp";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://www.buildaringfarm.org/gear-shop/"
  }
};

const summaryCards = [
  { title: "Sprays and gear", description: "Use gear shop items as progression tools, not guaranteed shortcuts, unless in-game evidence confirms the result." },
  { title: "ROI first", description: "ROI means return on investment: how many crop cycles are needed before an item earns back its cost." },
  { title: "Source labels", description: "Prices and effects below are community reported and should be rechecked after updates." }
];

const gearRows = [
  { item: "Wet Spray", role: "Applies Wet effect", useCase: "Price pending, low-risk rare effect testing", status: "Community reported" },
  { item: "Frozen Spray", role: "Applies Frozen effect", useCase: "Price pending, mid-tier crop value testing", status: "Community reported" },
  { item: "Void Spray", role: "Applies Void effect", useCase: "Price pending, higher-value rare effect attempts", status: "Community reported" },
  { item: "Radioactive Spray", role: "Applies Radioactive effect", useCase: "Price pending, late progression value testing", status: "Community reported" },
  { item: "Rainbow Spray", role: "Applies Rainbow effect", useCase: "Price pending, highest reported rare value testing", status: "Community reported" },
  { item: "Acid Spray", role: "Applies Acid effect or reset lead", useCase: "Price pending, special effect testing after source checks", status: "Community reported" },
  { item: "Strong Fertilizer", role: "Growth or farming boost", useCase: "Price pending, speeding up repeat crop cycles", status: "Community reported" }
];

const sections = [
  {
    heading: "What is the Build A Ring Farm gear shop?",
    subheading: "Gear shop basics",
    body: [
      "The Build A Ring Farm gear shop is the part of the farming route where players compare sprays, fertilizer, and upgrade-style items against normal crop progress. The official Roblox page confirms the broad farm loop: grow plants, harvest, upgrade, expand, sell for cash, and keep earning while offline. It does not confirm every gear shop price, spray cost, or rare crop value.",
      "That means this Build A Ring Farm Gear Shop Guide should be used as a decision guide, not as an official price sheet. The safest way to read gear shop advice is to ask what the item improves: crop value, harvest speed, rare effect testing, event timing, or cash recovery."
    ],
    list: ["Treat gear shop data as source-sensitive.", "Prefer items that improve repeated crop cycles.", "Avoid buying expensive gear only because a community table looks exciting."]
  },
  {
    heading: "Sprays vs weather events",
    subheading: "How effects connect",
    body: [
      "Sprays and weather events overlap because both may connect to rare crop effects. A spray may apply or test a specific effect directly, while a weather event may trigger an effect through timing or chance. Community reports often connect Wet with Rain, Frozen with Blizzard, Void with Black Hole, Radioactive with Nuclear, and Rainbow with Galaxy.",
      "The important SEO and gameplay point is separation: weather event odds belong on the weather events page, rare value boosts belong on advanced crops, and gear shop decisions belong here. This keeps each page focused while still giving players a clear route between them."
    ],
    list: ["Use weather events for event timing leads.", "Use advanced crops for reported value boosts.", "Use gear shop logic to judge whether a spray is worth buying."]
  },
  {
    heading: "Gear shop ROI checklist",
    subheading: "Before spending cash",
    body: [
      "ROI stands for return on investment. In Chinese, ROI 可以理解为“投入回报比”：你花出去的金币，要多久能靠更高产出赚回来。For Build A Ring Farm, the simplest ROI check is whether a gear item helps many future harvests or only one rare attempt.",
      "A strong gear shop purchase should either improve repeat farming, help unlock a better route, or support a rare effect test at the right time. If buying a spray empties your cash and leaves plots idle, it can slow the farm down even if the reported effect is valuable."
    ],
    list: ["How much cash will the item consume?", "Will it improve every cycle or only one crop?", "Can the same cash buy a more reliable upgrade?", "Does the item depend on unverified event behavior?"]
  },
  {
    heading: "Gear shop prices and spray prices",
    subheading: "Prices stay pending",
    body: [
      "The P1 keyword report calls out gear shop prices, spray prices, Acid Spray, and Rainbow Spray. These are worth covering because players search them before buying items, but exact prices should stay pending until in-game proof exists.",
      "A useful gear shop table can show item names, reported roles, and ROI questions without publishing unsupported price numbers. If a price is later verified, record the source and date before changing the label."
    ],
    list: ["Acid Spray: community reported, price pending.", "Rainbow Spray: community reported, price pending.", "Spray prices: pending until checked.", "Gear shop prices: pending until checked."]
  },
  {
    heading: "When to buy gear shop items",
    subheading: "Progression timing",
    body: [
      "Early players should usually stabilize seeds, crops, harvests, and basic upgrades before chasing gear shop effects. Once the normal crop loop is stable, gear can become more useful because you can afford to test sprays without stopping production.",
      "Mid and late progression players can compare gear against money farming goals. A spray that looks expensive may be reasonable if your farm already has strong cash flow. The same spray may be a mistake if your plots are still idle or your upgrade route is weak."
    ],
    list: ["Early game: keep plots active first.", "Mid game: compare gear with upgrade ROI.", "Late game: test high-value effects only after source checks."]
  },
  {
    heading: "What still needs verification",
    subheading: "Source status",
    body: [
      "The most important missing evidence is exact gear shop prices, whether item effects changed after updates, whether sprays stack with weather events, and whether effects can matter while offline. Without screenshots, official notes, or repeatable in-game checks, those claims stay community reported.",
      "This page intentionally avoids writing a final best gear list. A fixed ranking would look useful, but it could mislead players if values change. The better approach is to keep the Build A Ring Farm gear shop page focused on status labels and buying logic."
    ],
    list: ["Exact gear shop prices.", "Spray stacking rules.", "Offline effect behavior.", "Update changes to rare crop values."]
  }
];

const relatedLinks = [
  { href: "/upgrades/", title: "Upgrades", description: "Compare gear shop choices with general upgrade timing and ROI logic." },
  { href: "/advanced-crops/", title: "Advanced Crops", description: "Review community reported rare crop values and spray-linked effects." },
  { href: "/weather-events/", title: "Weather Events", description: "Check reported event effects before planning spray use around events." },
  { href: "/money-farming/", title: "Money Farming", description: "Build a cash route before spending heavily on gear shop items." },
  { href: "/crops/", title: "Crops", description: "Understand crop cycles before testing expensive sprays." }
];

const faq = [
  { q: "Is the Build A Ring Farm gear shop official on this site?", a: "No. This is an independent fan guide. Gear shop prices and spray effects are community reported until stronger evidence is available." },
  { q: "What are the most important gear shop items?", a: "Community reports focus on sprays such as Wet, Frozen, Void, Radioactive, Rainbow, Acid, and farming boosts such as Strong Fertilizer." },
  { q: "Should beginners buy sprays first?", a: "Usually no. Beginners should keep plots active, sell crops, and buy reliable upgrades before spending heavily on rare effect testing." },
  { q: "Can sprays stack with weather events?", a: "This site has not verified stacking behavior yet. Treat spray and weather event interactions as needs verification." }
  ,{ q: "Are gear shop prices verified?", a: "No. Gear shop prices, spray prices, Acid Spray cost, and Rainbow Spray cost stay pending until in-game proof exists." }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

export default function GearShopPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Gear shop and spray guide</p>
          <h1>Build A Ring Farm Gear Shop Guide</h1>
          <p className="lede">
            Use this Build A Ring Farm gear shop guide to compare sprays, fertilizer, rare crop value, upgrade timing, and ROI checks without treating unverified gear data as official facts.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="/upgrades/">Read upgrades guide</Link>
            <Link className="secondary-link" href="/advanced-crops/">Read advanced crops</Link>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="research-grid" aria-label="Gear shop summary">
        {summaryCards.map((card) => (
          <article className="research-card" key={card.title}>
            <span className="card-rule" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="section-heading">
        <p className="eyebrow">Community table</p>
        <h2>Reported gear shop items</h2>
      </section>
      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Community reported</p>
          <h2>Sprays, fertilizer, and use cases</h2>
          <div className="data-list">
            {gearRows.map((row) => (
              <div className="data-row four-field-row" key={row.item}>
                <div><span>Item</span><strong>{row.item}</strong></div>
                <div><span>Reported role</span><strong>{row.role}</strong></div>
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
          <h2>Build A Ring Farm Gear Shop Guide FAQ</h2>
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
