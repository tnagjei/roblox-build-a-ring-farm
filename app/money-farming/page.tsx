// input: `/money-farming/` route request
// output: English money farming guide page with safe progression routes
// pos: money-farming route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Money Farming Guide | Cash Routes";
const pageDescription = "Build A Ring Farm money farming guide covering cash routes, seeds, crop cycles, upgrades, offline income, code rewards, and safe progression.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: absoluteUrl("/money-farming/")
  }
};

const summaryCards = [
  { title: "Keep cash moving", description: "Money farming starts with active crop cycles, not idle plots or unspent seeds." },
  { title: "Upgrade by ROI", description: "Buy upgrades that improve repeated harvest cycles and recover their cost faster." },
  { title: "Use offline income carefully", description: "Offline earnings help momentum, but rare effects and exact values still need verification." }
];

const routeRows = [
  { stage: "Early game", focus: "Keep all plots active", action: "Use steady seeds, harvest often, sell crops, and reinvest into basic upgrades.", status: "Strategy" },
  { stage: "Mid game", focus: "Improve crop cycle value", action: "Compare seeds, crop value, upgrade timing, and reported code rewards.", status: "Strategy" },
  { stage: "Late game", focus: "Scale high-value crops", action: "Use stronger upgrades and community reported rare crop effects only after source checks.", status: "Strategy" },
  { stage: "Offline", focus: "Protect momentum", action: "Use offline earnings as a booster, not as proof of rare effect behavior.", status: "Pending data" }
];

const mistakeRows = [
  { mistake: "Chasing rare effects too early", whyItHurts: "It can delay basic crop loops and upgrades before you have enough cash flow." },
  { mistake: "Buying gear without ROI logic", whyItHurts: "A high price item can slow progress if it does not improve repeated crop cycles." },
  { mistake: "Trusting every code list", whyItHurts: "Third-party rewards can change or expire, so they should be rechecked before planning around them." },
  { mistake: "Leaving plots idle", whyItHurts: "Idle plots usually mean lost cash cycles, especially in the early game." }
];

const sections = [
  {
    heading: "How money farming works in Build A Ring Farm",
    subheading: "Cash loop basics",
    body: [
      "Money farming in Build A Ring Farm is the process of turning seeds into crops, crops into cash, and cash into upgrades that improve the next cycle.",
      "The official game page confirms the core loop of growing plants, harvesting, upgrading, expanding, selling plants for cash, and earning while offline. Exact per-second earnings and best-crop values are not published on the official page, so this guide avoids fake income numbers."
    ],
    list: ["Plant seeds or crops.", "Harvest when ready.", "Sell plants for cash.", "Reinvest cash into better crop cycles and upgrades.", "Use offline income as a progress booster."]
  },
  {
    heading: "Best early money farming route",
    subheading: "Early cash route",
    body: [
      "The safest early money route is simple: keep every plot active, sell consistently, and buy upgrades that help every future harvest. Do not hold too much cash if a useful upgrade can improve repeated cycles.",
      "Early players should avoid over-focusing on rare crop effects. If your base crop cycle is weak, rare-effect chasing can slow you down instead of helping."
    ],
    list: ["Keep plots active before optimizing rare outcomes.", "Choose seeds that support steady cash flow.", "Sell and reinvest instead of waiting for perfect crops.", "Buy upgrades that improve repeated cycles."]
  },
  {
    heading: "When codes can help money farming",
    subheading: "Rewards as bonus progress",
    body: [
      "Some third-party code pages report rewards such as cash, fertilizer, sprays, time skips, or seed packs. These rewards can support money farming, but the exact active-code status should be checked before relying on them.",
      "Use codes as a bonus source of progress, not as the foundation of your money route. Codes can expire, rewards can change, and community lists can disagree."
    ],
    list: ["Check the codes page before planning around rewards.", "Treat third-party code rewards as community reported until rechecked.", "Use seed packs and sprays as progression boosts, not guaranteed long-term income."]
  },
  {
    heading: "Advanced money route: crops, gear, and rare effects",
    subheading: "Late route checks",
    body: [
      "Once your basic crop cycle is stable, the next step is to compare crop value, gear shop choices, and reported rare crop effects. This is where ROI matters most.",
      "A reported high-value effect is not automatically the best choice. You still need to consider trigger difficulty, event timing, spray cost, and whether the same cash could improve normal farming more reliably."
    ],
    list: ["Use the crops guide for base farming decisions.", "Use the gear shop guide for sprays and item timing.", "Use advanced crops for community reported rare values.", "Recheck everything after major updates."]
  }
];

const relatedLinks = [
  { href: "/seeds/", title: "Seeds", description: "Choose seed packs and seed routes that support cash flow." },
  { href: "/crops/", title: "Crops", description: "Understand the crop loop behind every money route." },
  { href: "/gear-shop/", title: "Gear Shop", description: "Compare sprays, fertilizer, and item ROI before spending cash." },
  { href: "/upgrades/", title: "Upgrades", description: "Compare upgrade cost against repeated cycle value." },
  { href: "/advanced-crops/", title: "Advanced Crops", description: "Review community reported rare effects and value boosts." },
  { href: "/codes/", title: "Codes", description: "Check code rewards that may support progression." }
];

const faq = [
  { q: "What is the best way to make money in Build A Ring Farm?", a: "The safest general route is to keep plots active, harvest consistently, sell crops, and reinvest into upgrades that improve repeated crop cycles." },
  { q: "Can codes help money farming?", a: "Yes, if active codes provide cash, seed packs, sprays, fertilizer, or time skips. But code rewards should be rechecked before relying on them." },
  { q: "Should beginners chase rare crop effects?", a: "Usually not first. Beginners should stabilize the basic crop loop before spending heavily on rare-effect strategies." },
  { q: "Does this guide list exact cash-per-second values?", a: "No. Exact income values are not official-source verified here, so this guide focuses on route logic instead of fake numbers." }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

export default function MoneyFarmingPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Cash and progression guide</p>
          <h1>Build A Ring Farm Money Farming Guide</h1>
          <p className="lede">
            Use this Build A Ring Farm money farming guide to plan cash routes through seeds, crops, upgrades, rare crop effects, code rewards, and offline income without relying on fake per-second numbers.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="/upgrades/">Read upgrades guide</Link>
            <Link className="secondary-link" href="/seeds/">Read seeds guide</Link>
          </div>
        </div>
        <img className="hero-image" src={siteData.assets.hero} alt={`${siteData.game.name} Roblox thumbnail`} />
      </section>

      <section className="research-grid" aria-label="Money farming summary">
        {summaryCards.map((card) => (
          <article className="research-card" key={card.title}>
            <span className="card-rule" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="section-heading">
        <p className="eyebrow">Route map</p>
        <h2>Money farming route by stage</h2>
      </section>
      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Strategy table</p>
          <h2>Recommended cash route</h2>
          <div className="data-list">
            {routeRows.map((row) => (
              <div className="data-row four-field-row" key={row.stage}>
                <div><span>Stage</span><strong>{row.stage}</strong></div>
                <div><span>Focus</span><strong>{row.focus}</strong></div>
                <div><span>Action</span><strong>{row.action}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>

        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Avoid</p>
          <h2>Money farming mistakes</h2>
          <div className="data-list">
            {mistakeRows.map((row) => (
              <div className="data-row three-field-row" key={row.mistake}>
                <div><span>Mistake</span><strong>{row.mistake}</strong></div>
                <div><span>Why it hurts</span><strong>{row.whyItHurts}</strong></div>
                <div><span>Fix</span><strong>Use route logic before chasing hype.</strong></div>
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
          <h2>Build A Ring Farm Money Farming Guide FAQ</h2>
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
