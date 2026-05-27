// input: `/rainbow-spray/` route request
// output: English Rainbow Spray source-status guide with related internal links
// pos: rainbow spray route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Rainbow Spray Source Status Guide";
const pageDescription = "Build A Ring Farm Rainbow Spray guide covering reported rare-effect use, Rainbow Mutation links, gear shop context, source status, and recheck steps.";
const heroImage = "/images/official-hero-image.webp";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/rainbow-spray/") },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/rainbow-spray/"),
    type: "article",
    images: [{ url: absoluteUrl("/images/official-hero-image.webp"), width: 1200, height: 630, alt: "Build A Ring Farm Rainbow Spray guide" }]
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl("/images/official-hero-image.webp")] }
};

const sourceRows = [
  { field: "Item name", value: "Rainbow Spray", sourceStatus: "Community reported" },
  { field: "Related effect", value: "Rainbow Mutation lead", sourceStatus: "Community reported" },
  { field: "Price", value: "Do not publish a fixed price yet", sourceStatus: "Pending in-game check" },
  { field: "Best use", value: "Late-route rare-effect testing lead", sourceStatus: "Judgment from reported route logic" }
];

const sections = [
  {
    h2: "What Rainbow Spray is for",
    h3: "Item intent",
    body: [
      "Rainbow Spray is a high-interest item lead because players connect it with rare-effect testing and Rainbow Mutation searches.",
      "This page keeps Rainbow Spray separate from the broader sprays page so searchers can find the item status quickly without turning a reported claim into final data."
    ],
    list: ["Use it as a reported item lead.", "Keep price and effect values pending.", "Compare with Rainbow Mutation before route decisions."]
  },
  {
    h2: "Rainbow Spray source rules",
    h3: "No fixed price without stronger evidence",
    body: [
      "A fixed item price can mislead players if it comes from copied community tables. Keep exact Rainbow Spray price, cooldown, and stacking behavior pending until the evidence trail improves.",
      "If a future check records the item in game, store the date, visible price, item context, and screenshot or video reference before strengthening the claim."
    ],
    list: ["Do not copy prices from competitors.", "Do not assume stacking.", "Record source status beside every item field."]
  },
  {
    h2: "When Rainbow Spray may matter",
    h3: "After the normal farm loop",
    body: [
      "Rainbow Spray should not be the first beginner purchase. A player needs a stable crop route before rare-effect testing makes sense.",
      "Use the calculator only with player-entered values or clearly reported inputs, then compare the result with normal upgrade and money-farming routes."
    ],
    list: ["Stabilize crops first.", "Compare against upgrades.", "Use player-entered calculator values only."]
  }
];

const relatedLinks = [
  { href: "/sprays/", title: "Sprays", description: "Compare Rainbow Spray with other reported spray leads." },
  { href: "/rainbow-mutation/", title: "Rainbow Mutation", description: "Check the related effect lead and source status." },
  { href: "/gear-shop/", title: "Gear Shop", description: "Use gear-shop logic before treating an item as worth buying." },
  { href: "/calculator/", title: "Calculator", description: "Estimate with player-entered or reported values." },
  { href: "/money-farming/", title: "Money Farming", description: "Check whether rare-effect testing fits the cash route." }
];

const faq = [
  { q: "Is Rainbow Spray source-checked here?", a: "No. It remains a community reported item lead until stronger evidence exists." },
  { q: "Is Rainbow Spray the same as Rainbow Mutation?", a: "No. Rainbow Spray is the item lead, while Rainbow Mutation is the effect lead." },
  { q: "Should beginners buy Rainbow Spray first?", a: "Usually no. Beginners should stabilize crops, selling, and upgrades before rare-effect testing." }
];

function Badge({ value }: { value: string }) {
  return <span className="source-badge">{value}</span>;
}

export default function RainbowSprayPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Rainbow Spray source status</p>
          <h1>Build A Ring Farm Rainbow Spray</h1>
          <p className="lede">Track Rainbow Spray as a reported item lead connected to Rainbow Mutation, gear shop decisions, source status, and recheck steps.</p>
          <div className="hero-actions">
            <Link className="primary-link" href="/rainbow-mutation/">Read Rainbow Mutation</Link>
            <Link className="secondary-link" href="/sprays/">Compare sprays</Link>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="guide-card evidence-note-card">
        <span className="card-rule" />
        <p className="eyebrow">Evidence note</p>
        <h2>Rainbow Spray remains community reported</h2>
        <p>Price, effect strength, cooldown, stacking, and offline behavior stay pending until stronger evidence exists.</p>
      </section>

      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Source table</p>
          <h2>Rainbow Spray source status</h2>
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

      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Rainbow Spray route links</h2></section>
      <section className="route-grid">
        {relatedLinks.map((link) => <Link className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}
      </section>

      <section className="faq-section">
        <div className="section-heading"><p className="eyebrow">FAQ</p><h2>Rainbow Spray FAQ</h2></div>
        <div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
      </section>
    </main>
  );
}
