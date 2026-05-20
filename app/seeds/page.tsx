// input: `/seeds/` route request
// output: English seeds guide page with source-aware seed pack guidance
// pos: seeds route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Seeds Guide | Packs & Progression";
const pageDescription = "Build A Ring Farm seeds guide covering seed packs, crop unlocks, planting choices, code rewards, progression routes, and source checks.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: absoluteUrl("/seeds/")
  }
};

const summaryCards = [
  { title: "Seed packs", description: "Use seed packs as crop unlock leads, not as guaranteed value tables unless sources confirm them." },
  { title: "Crop progression", description: "Choose seeds by farming stage, crop loop stability, and upgrade goals." },
  { title: "Code rewards", description: "Some community code lists mention seed pack rewards, but reward status still needs rechecking." }
];

const seedPackRows = [
  { name: "Tropical Seed Pack", source: "Community code lists", status: "Community reported", note: "Reported as a reward from some Build A Ring Farm code pages." },
  { name: "General seed packs", source: "Gameplay category", status: "Pending", note: "Exact pack contents and odds should be verified before publishing tables." },
  { name: "Event seed packs", source: "Update-dependent", status: "Pending", note: "Only add after an official update note or repeatable in-game evidence." }
];

const codeRewardRows = [
  { code: "UPDATE1", reportedReward: "Strong Fertilizer / seed-related rewards reported by third-party pages", status: "Community reported" },
  { code: "UPDATE2", reportedReward: "Tropical Seed Pack reported by third-party pages", status: "Community reported" },
  { code: "THANKYOU", reportedReward: "Autumn Spray reported by third-party pages", status: "Community reported" },
  { code: "BARF:3", reportedReward: "Acid Spray reported by third-party pages", status: "Community reported" }
];

const sections = [
  {
    heading: "What are seeds in Build A Ring Farm?",
    subheading: "Seed role in the farm loop",
    body: [
      "Seeds are the starting point of the farming loop. A seed leads to a crop, the crop leads to harvest value, and that value funds upgrades, expansion, and stronger farming cycles.",
      "Because seed packs can affect what players grow next, seeds deserve a separate Build A Ring Farm guide instead of being hidden inside a general crops page."
    ],
    list: ["Seeds start the crop cycle.", "Seed packs may unlock or supply crop options.", "Better seed choices should support your next upgrade goal.", "Exact pack contents should stay pending until verified."]
  },
  {
    heading: "Beginner seed strategy",
    subheading: "How to choose early seeds",
    body: [
      "Early players should not chase the rarest-sounding seed first. The safer strategy is to keep plots active, avoid idle time, and use seeds that maintain a steady crop loop.",
      "If a seed pack gives multiple options, compare how each crop supports your next goal: cash recovery, expansion, upgrade timing, or rare crop testing."
    ],
    list: ["Use seeds that keep every available plot working.", "Avoid holding seeds too long if your plots are idle.", "Prefer steady crops before risky long-cycle choices.", "Recheck seed advice after updates or balance changes."]
  },
  {
    heading: "Seeds vs crops vs upgrades",
    subheading: "How seeds connect to ROI",
    body: [
      "Seeds are inputs, crops are outputs, and upgrades are efficiency tools. The best seed choice depends on where you are in that chain.",
      "A seed that looks weak can still be useful if it helps you keep cash moving. A high-value crop can be worse if it delays your next upgrade for too long."
    ],
    list: ["Seeds decide what you can grow.", "Crops decide how cash enters your farm economy.", "Upgrades decide how quickly the next cycles improve.", "Advanced crop effects should be treated as value boosters, not guaranteed outcomes."]
  },
  {
    heading: "How to treat seed pack data from other sites",
    subheading: "Source status and verification",
    body: [
      "Third-party pages are useful for discovering seed pack names and code reward leads, but they should not be treated as official evidence by default.",
      "If several sites repeat the same seed pack claim, mark it as community reported. Upgrade it to verified only after official notes, developer posts, or in-game screenshots confirm it."
    ],
    list: ["Use third-party sites as leads.", "Label unverified rewards as community reported.", "Do not publish drop odds without proof.", "Add source notes when seed pack contents are confirmed."]
  }
];

const relatedLinks = [
  { href: "/crops/", title: "Crops", description: "Turn seed choices into crop cycles, harvests, and selling decisions." },
  { href: "/gear-shop/", title: "Gear Shop", description: "Compare sprays, fertilizer, and ROI after the seed route is stable." },
  { href: "/advanced-crops/", title: "Advanced Crops", description: "Review rare crop effects and community reported value boosts." },
  { href: "/upgrades/", title: "Upgrades", description: "Use crop income to plan better upgrade timing." },
  { href: "/codes/", title: "Codes", description: "Check reported code rewards before relying on seed pack claims." }
];

const faq = [
  { q: "What are seeds used for in Build A Ring Farm?", a: "Seeds start the farming loop by giving players crops to grow, harvest, sell, and reinvest into upgrades." },
  { q: "Are seed pack contents verified?", a: "Not fully on this site yet. Seed pack contents and odds should be verified with official notes or in-game evidence before being published as facts." },
  { q: "Which seed should beginners use first?", a: "Beginners should favor seeds that keep plots active and support steady crop income instead of chasing unverified rare outcomes." },
  { q: "Can codes give seed packs?", a: "Some third-party code pages report seed pack rewards. These should be treated as community reported until rechecked." }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

export default function SeedsPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Seeds and seed packs guide</p>
          <h1>Build A Ring Farm Seeds Guide</h1>
          <p className="lede">
            Use this Build A Ring Farm seeds guide to understand seed packs, crop unlocks, planting choices, reported code rewards, and how seeds fit into crop value and progression.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="/crops/">Read crops guide</Link>
            <Link className="secondary-link" href="/codes/">Check codes</Link>
          </div>
        </div>
        <img className="hero-image" src={siteData.assets.hero} alt={`${siteData.game.name} Roblox thumbnail`} />
      </section>

      <section className="research-grid" aria-label="Seeds guide summary">
        {summaryCards.map((card) => (
          <article className="research-card" key={card.title}>
            <span className="card-rule" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="section-heading">
        <p className="eyebrow">Community data</p>
        <h2>Seed pack and reward leads</h2>
      </section>

      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Community table</p>
          <h2>Reported seed pack information</h2>
          <div className="data-list">
            {seedPackRows.map((row) => (
              <div className="data-row four-field-row" key={row.name}>
                <div><span>Name</span><strong>{row.name}</strong></div>
                <div><span>Source</span><strong>{row.source}</strong></div>
                <div><span>Note</span><strong>{row.note}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>

        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Community table</p>
          <h2>Reported code rewards related to seeds</h2>
          <div className="data-list">
            {codeRewardRows.map((row) => (
              <div className="data-row three-field-row" key={row.code}>
                <div><span>Code</span><strong>{row.code}</strong></div>
                <div><span>Reported reward</span><strong>{row.reportedReward}</strong></div>
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
          <h2>Build A Ring Farm Seeds Guide FAQ</h2>
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
