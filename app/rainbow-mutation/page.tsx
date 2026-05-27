// input: `/rainbow-mutation/` route request
// output: English Rainbow Mutation source-status guide with related internal links
// pos: rainbow mutation route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Rainbow Mutation Reported Guide";
const pageDescription = "Build A Ring Farm Rainbow Mutation guide covering reported effect routes, Rainbow Spray links, Galaxy event leads, source status, and recheck steps.";
const heroImage = "/images/official-hero-image.webp";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/rainbow-mutation/") },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/rainbow-mutation/"),
    type: "article",
    images: [{ url: absoluteUrl("/images/official-hero-image.webp"), width: 1200, height: 630, alt: "Build A Ring Farm Rainbow Mutation guide" }]
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl("/images/official-hero-image.webp")] }
};

const sourceRows = [
  { field: "Mutation name", value: "Rainbow Mutation", sourceStatus: "Community reported" },
  { field: "Likely route", value: "Rainbow Spray or Galaxy event lead", sourceStatus: "Community reported" },
  { field: "Value claim", value: "Treat as strongest effect lead only", sourceStatus: "Pending in-game check" },
  { field: "Stacking", value: "Do not assume spray plus event stacking", sourceStatus: "Pending in-game check" }
];

const recheckRows = [
  { step: "Record trigger", action: "Capture whether Rainbow came from a spray, event, or unknown route." },
  { step: "Record crop", action: "Capture crop name, visible effect, and before value." },
  { step: "Record result", action: "Capture after value and sell result before changing source status." }
];

const sections = [
  {
    h2: "What Rainbow Mutation means here",
    h3: "Reported effect lead",
    body: [
      "Rainbow Mutation is treated as a high-interest Build A Ring Farm research lead, not as a finished value table.",
      "The useful player question is whether a Rainbow route changes the next farming decision. That requires trigger notes, crop value notes, and source status before stronger claims are published."
    ],
    list: ["Keep Rainbow as reported until stronger evidence exists.", "Separate Rainbow Spray from Galaxy event leads.", "Do not publish exact value claims without a test trail."]
  },
  {
    h2: "Rainbow Mutation vs Rainbow Spray",
    h3: "Mutation and item are not the same claim",
    body: [
      "Rainbow Spray may be a direct item route, while Rainbow Mutation describes the effect players are trying to reach.",
      "A player can search both terms with different intent. This page explains the mutation lead, and the Rainbow Spray page explains the item lead."
    ],
    list: ["Use this page for mutation intent.", "Use Rainbow Spray for gear-shop item intent.", "Use calculator only for player-entered estimates."]
  },
  {
    h2: "When to use this in a route",
    h3: "Late-route research",
    body: [
      "Beginners should not chase Rainbow first. Stable crops, selling, upgrades, and repeatable cash routes come before rare-effect testing.",
      "Rainbow research is more useful after the normal farming loop is stable enough to compare before and after values."
    ],
    list: ["Stabilize crops first.", "Compare with sprays and weather events.", "Record source status before changing recommendations."]
  }
];

const relatedLinks = [
  { href: "/mutations/", title: "Mutations", description: "Compare Rainbow with Wet, Frozen, Void, Radioactive, Honeycomb, Alien, and Farm leads." },
  { href: "/rainbow-spray/", title: "Rainbow Spray", description: "Check the related item lead and gear-shop context." },
  { href: "/weather-events/", title: "Weather Events", description: "Review Galaxy and other event leads." },
  { href: "/tier-list/", title: "Tier List", description: "Use reported tiers as a planning layer, not as final data." },
  { href: "/calculator/", title: "Calculator", description: "Estimate only with player-entered or reported inputs." }
];

const faq = [
  { q: "Is Rainbow Mutation confirmed here?", a: "No. This page treats Rainbow Mutation as community reported until stronger evidence exists." },
  { q: "Is Rainbow Spray the same as Rainbow Mutation?", a: "No. Rainbow Spray is an item lead, while Rainbow Mutation is the effect lead players are trying to compare." },
  { q: "Should beginners chase Rainbow first?", a: "Usually no. Beginners should stabilize crops, selling, and upgrades before rare-effect testing." }
];

function Badge({ value }: { value: string }) {
  return <span className="source-badge">{value}</span>;
}

export default function RainbowMutationPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Rainbow mutation source status</p>
          <h1>Build A Ring Farm Rainbow Mutation</h1>
          <p className="lede">Track the reported Rainbow Mutation route, Rainbow Spray link, Galaxy event lead, and source status without treating any value claim as final data.</p>
          <div className="hero-actions">
            <Link prefetch={false} className="primary-link" href="/rainbow-spray/">Read Rainbow Spray</Link>
            <Link prefetch={false} className="secondary-link" href="/mutations/">Compare mutations</Link>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="guide-card evidence-note-card">
        <span className="card-rule" />
        <p className="eyebrow">Evidence note</p>
        <h2>Rainbow remains community reported</h2>
        <p>Use this page as a recheck guide. Exact values, stacking behavior, trigger odds, and offline behavior stay pending until stronger evidence exists.</p>
      </section>

      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Source table</p>
          <h2>Rainbow Mutation source status</h2>
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
          <p className="eyebrow">Recheck steps</p>
          <h2>Before changing status</h2>
          <div className="data-list">
            {recheckRows.map((row) => (
              <div className="data-row three-field-row" key={row.step}>
                <div><span>Step</span><strong>{row.step}</strong></div>
                <div><span>Action</span><strong>{row.action}</strong></div>
                <div><span>Status</span><Badge value="Pending evidence" /></div>
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

      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Rainbow route links</h2></section>
      <section className="route-grid">
        {relatedLinks.map((link) => <Link prefetch={false} className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}
      </section>

      <section className="faq-section">
        <div className="section-heading"><p className="eyebrow">FAQ</p><h2>Rainbow Mutation FAQ</h2></div>
        <div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
      </section>
    </main>
  );
}
