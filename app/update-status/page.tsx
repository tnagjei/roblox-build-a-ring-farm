// input: `/update-status/` route request
// output: English update status page covering reported Update 3 and pending Update 4 leads
// pos: update-status route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Update Status | Codes & Patch Notes";
const pageDescription = "Track Build A Ring Farm update status, Update 3 and Update 4 reported leads, pending patch notes, code claims, and safe verification steps now.";
const heroImage = "/images/official-hero-image.webp";
const lastChecked = "2026-06-02";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/update-status/") },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/update-status/"),
    type: "article",
    images: [{ url: absoluteUrl(heroImage), width: 1200, height: 630, alt: "Build A Ring Farm update status" }]
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl(heroImage)] }
};

const updateRows = [
  { update: "Update 3", signal: "Reported code and mutation leads", status: "Reported, pending verification", note: "Keep PLANTRUSH, Honeycomb, Alien, Farm, Queen Bee, and reward claims out of verified status until in-game proof exists." },
  { update: "Update 4", signal: "Search result and third-party lead", status: "Pending", note: "Patch notes are not verified here. Do not write official Update 4 rewards, prices, or multipliers without source proof." },
  { update: "Current code table", signal: "June 2026 third-party code pages", status: "Community reported", note: "External active labels are not verified active labels on this site." },
  { update: "Official Discord source", signal: "Potential official-channel research path", status: "Pending", note: "Only promote after a developer-linked Discord URL is confirmed from an official source." }
];

const watchRows = [
  { item: "PLANTRUSH", currentLabel: "Community reported", nextCheck: "Confirm whether the reward is Plant Rush Box, Plant Rush Boss Box, or neither." },
  { item: "Cosmic 8x", currentLabel: "Pending preset", nextCheck: "Needs repeatable in-game multiplier evidence before calculator promotion." },
  { item: "Bubblegum 9x", currentLabel: "Pending preset", nextCheck: "Needs repeatable in-game multiplier evidence before calculator promotion." },
  { item: "Fire 10x", currentLabel: "Pending preset", nextCheck: "Needs repeatable in-game multiplier evidence before calculator promotion." },
  { item: "Starfall stacking", currentLabel: "Pending", nextCheck: "Do not write verified stacking unless a repeatable test proves it." },
  { item: "Admin mutation", currentLabel: "Pending preset", nextCheck: "Confirm trigger, multiplier, and availability before any stronger claim." }
];

const sections = [
  {
    heading: "Build A Ring Farm Update 4 status",
    subheading: "Pending until patch notes are verified",
    body: [
      "Update 4 is a useful freshness target because players are now searching beyond Update 3. That does not mean Update 4 patch notes, rewards, prices, or mutation values are verified.",
      "This page treats Update 4 as a pending research lead. The site can answer the search intent while keeping every unverified claim clearly labeled as reported or pending."
    ],
    list: ["Update 4 patch notes: pending.", "Update 4 codes: not verified active here.", "Update 4 prices: pending.", "Update 4 multipliers: pending."]
  },
  {
    heading: "Why reported does not mean verified",
    subheading: "Evidence boundary",
    body: [
      "Third-party code sites can surface useful leads, but they are not enough to verify a Roblox code, reward, multiplier, price, event, or patch note. A copied active label remains a reported claim here.",
      "Promotion requires official notes, a developer-linked channel, or repeatable in-game proof with date, result, and enough context to reproduce the check."
    ],
    list: ["Community reported stays community reported.", "Pending values stay pending.", "Do not call copied claims official.", "Do not turn reported multipliers into verified numbers."]
  },
  {
    heading: "Freshness workflow for future updates",
    subheading: "What to recheck first",
    body: [
      "When a new update signal appears, recheck the code box, official links, mutation names, mutation multipliers, gear prices, spray prices, and calculator presets in that order.",
      "The fastest safe edit is usually a status update, not a verified data table. That keeps the page fresh without inventing proof."
    ],
    list: ["Recheck official Roblox page timestamp.", "Recheck developer-linked channels only.", "Recheck in-game UI before promoting codes.", "Keep exact numbers pending until repeatable."]
  }
];

const faq = [
  { q: "Is Build A Ring Farm Update 4 verified here?", a: "No. Update 4 is a reported or pending lead until official notes or repeatable in-game proof exist." },
  { q: "Are Update 4 patch notes official on this site?", a: "No. Patch notes are pending here unless they come from a verified official source." },
  { q: "Can Update 4 code claims be tested?", a: "Yes, but only inside the real game UI. They remain reported or pending until accepted proof exists." },
  { q: "Should calculator presets use Update 4 values?", a: "Only as pending presets. Cosmic 8x, Bubblegum 9x, Fire 10x, Starfall, and Admin need in-game verification before stronger labels." }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

export default function UpdateStatusPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Update status</p>
          <h1>Build A Ring Farm Update Status</h1>
          <p className="lede">Track Build A Ring Farm update status across Update 3 and Update 4 leads without calling reported codes, patch notes, mutation multipliers, or reward claims verified.</p>
          <div className="hero-actions">
            <Link prefetch={false} className="primary-link" href="/codes/">Check codes</Link>
            <Link prefetch={false} className="secondary-link" href="/mutations/">Check mutations</Link>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="guide-card evidence-note-card">
        <span className="card-rule" />
        <p className="eyebrow">Current verdict</p>
        <h2>Update 4 is pending, not verified patch-note data</h2>
        <p>All unverified codes, rewards, multipliers, prices, patch notes, and event claims remain reported or pending until stronger evidence exists.</p>
        <p><strong>Last checked:</strong> {lastChecked}</p>
      </section>

      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Update table</p>
          <h2>Reported and pending update status</h2>
          <div className="data-list">
            {updateRows.map((row) => (
              <div className="data-row four-field-row" key={row.update}>
                <div><span>Update</span><strong>{row.update}</strong></div>
                <div><span>Signal</span><strong>{row.signal}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
                <div><span>Note</span><strong>{row.note}</strong></div>
              </div>
            ))}
          </div>
        </article>

        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Watchlist</p>
          <h2>Update 4 pending watchlist</h2>
          <div className="data-list">
            {watchRows.map((row) => (
              <div className="data-row three-field-row" key={row.item}>
                <div><span>Item</span><strong>{row.item}</strong></div>
                <div><span>Current label</span><StatusBadge status={row.currentLabel} /></div>
                <div><span>Next check</span><strong>{row.nextCheck}</strong></div>
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

      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Update status route links</h2></section>
      <section className="route-grid" aria-label="Update status route links">
        <Link prefetch={false} className="route-card" href="/update-3-status/"><span className="card-rule" /><h2>Update 3 Status</h2><p>Keep older Update 3 claims available without freezing the whole site in Update 3.</p></Link>
        <Link prefetch={false} className="route-card" href="/codes/"><span className="card-rule" /><h2>Codes</h2><p>Review June 2026 reported code leads and active vs verified labels.</p></Link>
        <Link prefetch={false} className="route-card" href="/calculator/"><span className="card-rule" /><h2>Calculator</h2><p>Use pending mutation presets only as planning inputs.</p></Link>
        <Link prefetch={false} className="route-card" href="/mutations/"><span className="card-rule" /><h2>Mutations</h2><p>Check Cosmic, Bubblegum, Fire, Starfall, and Admin as pending leads.</p></Link>
      </section>

      <section className="faq-section">
        <div className="section-heading"><p className="eyebrow">FAQ</p><h2>Build A Ring Farm Update Status FAQ</h2></div>
        <div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
      </section>
    </main>
  );
}
