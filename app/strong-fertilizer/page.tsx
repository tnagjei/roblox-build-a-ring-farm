// input: `/strong-fertilizer/` route request
// output: English Strong Fertilizer source-status guide with related internal links
// pos: strong fertilizer route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Strong Fertilizer Source Status Guide";
const pageDescription = "Build A Ring Farm Strong Fertilizer guide covering reported growth use, crop timing, code reward leads, ROI checks, source status, and recheck steps.";
const heroImage = "/images/official-hero-image.webp";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/strong-fertilizer/") },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/strong-fertilizer/"),
    type: "article",
    images: [{ url: absoluteUrl("/images/official-hero-image.webp"), width: 1200, height: 630, alt: "Build A Ring Farm Strong Fertilizer guide" }]
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl("/images/official-hero-image.webp")] }
};

const sourceRows = [
  { field: "Item name", value: "Strong Fertilizer", sourceStatus: "Community reported" },
  { field: "Reported role", value: "Growth or timing support lead", sourceStatus: "Community reported" },
  { field: "Code reward link", value: "Some third-party pages connect it with UPDATE1", sourceStatus: "Community reported" },
  { field: "Exact effect", value: "Do not publish fixed timing or value yet", sourceStatus: "Pending in-game check" }
];

const decisionRows = [
  { situation: "Plots are idle", action: "Fix planting rhythm first", sourceStatus: "Strategy judgment" },
  { situation: "Cash is low", action: "Compare with repeatable upgrades", sourceStatus: "Strategy judgment" },
  { situation: "Crop route is stable", action: "Use as a test lead only", sourceStatus: "Pending in-game check" }
];

const sections = [
  {
    h2: "What Strong Fertilizer means here",
    h3: "Reported item lead",
    body: [
      "Strong Fertilizer is a search term worth isolating because players may look for its effect, reward source, and best timing.",
      "This page does not publish fixed growth values. It records the item as a reported lead and points players toward safer route logic."
    ],
    list: ["Keep exact effect pending.", "Separate item status from code status.", "Record source status beside every field."]
  },
  {
    h2: "Strong Fertilizer and code reward claims",
    h3: "Do not merge weak claims",
    body: [
      "Some third-party pages connect Strong Fertilizer with a code reward lead. That does not make the reward active or the item behavior final.",
      "If a player tests a claim, record the code string, server date, reward result, and whether the in-game UI accepted it before changing page data."
    ],
    list: ["Do not call code rewards active without stronger evidence.", "Do not hide failed tests.", "Keep code claims separate from fertilizer mechanics."]
  },
  {
    h2: "When Strong Fertilizer may be useful",
    h3: "ROI before hype",
    body: [
      "Fertilizer is only useful if it improves a route that already produces value. If a player wastes it on weak or idle cycles, the reported boost may not matter.",
      "Use the calculator with player-entered values if you want to compare a fertilizer route with a normal upgrade route."
    ],
    list: ["Use after crops are stable.", "Compare with upgrades.", "Treat item behavior as pending until tested."]
  }
];

const relatedLinks = [
  { href: "/fertilizer/", title: "Fertilizer", description: "Compare Strong Fertilizer with broader fertilizer route logic." },
  { href: "/gear-shop/", title: "Gear Shop", description: "Review item timing and ROI before spending." },
  { href: "/seeds/", title: "Seeds", description: "Check field-level source status for code reward leads." },
  { href: "/codes/", title: "Codes", description: "Keep code strings separate from confirmed rewards." },
  { href: "/calculator/", title: "Calculator", description: "Estimate with player-entered or reported values." }
];

const faq = [
  { q: "Is Strong Fertilizer source-checked here?", a: "No. It remains community reported until stronger evidence exists." },
  { q: "Can Strong Fertilizer come from a code?", a: "Some third-party pages report that lead, but this site keeps the code reward status pending." },
  { q: "Should beginners use Strong Fertilizer first?", a: "Usually no. Beginners should stabilize planting, harvest, selling, and upgrades first." }
];

function Badge({ value }: { value: string }) {
  return <span className="source-badge">{value}</span>;
}

export default function StrongFertilizerPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Strong Fertilizer source status</p>
          <h1>Build A Ring Farm Strong Fertilizer</h1>
          <p className="lede">Track Strong Fertilizer as a reported growth and code reward lead with source status, ROI checks, and recheck steps.</p>
          <div className="hero-actions">
            <Link className="primary-link" href="/fertilizer/">Read fertilizer guide</Link>
            <Link className="secondary-link" href="/seeds/">Check seed reward leads</Link>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="guide-card evidence-note-card">
        <span className="card-rule" />
        <p className="eyebrow">Evidence note</p>
        <h2>Strong Fertilizer remains community reported</h2>
        <p>Exact growth effect, reward source, cooldown, and offline behavior stay pending until stronger evidence exists.</p>
      </section>

      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Source table</p>
          <h2>Strong Fertilizer source status</h2>
          <div className="data-list">
            {sourceRows.map((row) => (
              <div className="data-row three-field-row" key={row.field}>
                <div><span>Field</span><strong>{row.field}</strong></div>
                <div><span>Value</span><strong>{row.value}</strong></div>
                <div><span>Source status</span><Badge value={row.sourceStatus} /></div>
              </div>
            ))}
          </div>
        </article>
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Decision table</p>
          <h2>Use Strong Fertilizer only with context</h2>
          <div className="data-list">
            {decisionRows.map((row) => (
              <div className="data-row three-field-row" key={row.situation}>
                <div><span>Situation</span><strong>{row.situation}</strong></div>
                <div><span>Action</span><strong>{row.action}</strong></div>
                <div><span>Source status</span><Badge value={row.sourceStatus} /></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        {sections.map((section) => (
          <article className="guide-card" key={section.h2}>
            <span className="card-rule" />
            <h2>{section.h2}</h2>
            <h3>{section.h3}</h3>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </section>

      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Strong Fertilizer route links</h2></section>
      <section className="route-grid">
        {relatedLinks.map((link) => <Link className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}
      </section>

      <section className="faq-section">
        <div className="section-heading"><p className="eyebrow">FAQ</p><h2>Strong Fertilizer FAQ</h2></div>
        <div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
      </section>
    </main>
  );
}
