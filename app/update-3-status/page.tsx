// input: `/update-3-status/` route request
// output: English Update 3 codes status page with reported and pending labels
// pos: update-3-status route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Update 3 Codes | Reported Status";
const pageDescription = "Build A Ring Farm Update 3 codes status with reported leads, pending verification, recheck steps, Roblox source notes, and safe code testing rules.";
const heroImage = "/images/official-hero-image.webp";
const lastChecked = "2026-05-25";
const nextRecheck = "After the next Roblox game update or new in-game code-box proof";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/update-3-status/") },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/update-3-status/"),
    type: "article",
    images: [{ url: absoluteUrl("/images/official-hero-image.webp"), width: 1200, height: 630, alt: "Build A Ring Farm Update 3 status" }]
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl("/images/official-hero-image.webp")] }
};

const statusRows = [
  { item: "Update 3 codes", status: "Reported only", note: "0 confirmed active Update 3 codes have been accepted here." },
  { item: "Latest codes May 2026", status: "Pending", note: "External claims need official or in-game proof before promotion." },
  { item: "Honeycomb mutation", status: "Reported, pending verification", note: "Treat as a new mutation lead, not an official multiplier." },
  { item: "Queen Bee event", status: "Reported, pending verification", note: "Treat as a recheck topic for weather and mutation pages." }
];

const recheckSteps = [
  "Check the official Roblox game page and update timestamp.",
  "Check only developer-linked channels if their source is confirmed.",
  "Open the real game UI and look for a code box before testing any claim.",
  "Record the result date, server state, and reward text if a code works.",
  "Keep failed or unsupported strings reported or pending, not verified."
];

const sections = [
  {
    heading: "Build A Ring Farm Update 3 codes status",
    subheading: "Reported only until proof exists",
    body: [
      "Many players search for Build A Ring Farm Update 3 codes as soon as a new update appears. The risk is speed: code sites can publish fast, but this site should not label an Update 3 claim as active unless official or repeatable in-game proof exists.",
      "For now, Update 3 code claims stay reported only or pending. This page exists so players can find the status quickly without the site pretending that unverified rewards are confirmed active codes."
    ],
    list: ["Confirmed active Update 3 codes: 0.", "Reported claims are testing leads only.", "Pending claims need stronger proof.", "No external downloads or verification pages are needed."]
  },
  {
    heading: "What needs to be checked after Update 3",
    subheading: "Freshness checklist",
    body: [
      "A fresh update signal does not prove a specific code, mutation, event, price, or multiplier. It only proves that the site needs a visible recheck workflow and clear status labels.",
      "The safest update page should show what needs checking: code box availability, code reward claims, Honeycomb mutation, Queen Bee event, Alien mutation, Farm mutation, gear shop prices, and spray prices."
    ],
    list: ["Recheck codes first.", "Recheck mutation leads next.", "Recheck gear shop and spray prices.", "Recheck calculator inputs only after values are stronger."]
  },
  {
    heading: "Why Update 3 claims stay pending",
    subheading: "Evidence boundary",
    body: [
      "A copied code list is not proof. A Reddit comment is not proof. A competitor calculator is not proof. These sources can be useful leads, but they cannot upgrade a code or multiplier into verified status by themselves.",
      "Promotion requires a better evidence chain: official note, developer-linked source, or repeatable in-game test with date and result. Until then, reported and pending are the correct labels."
    ],
    list: ["Do not call copied strings active.", "Do not invent rewards.", "Do not publish exact multipliers from weak sources.", "Do not turn community reported data into verified data."]
  }
];

const relatedLinks = [
  { href: "/codes/", title: "Codes", description: "Check verified active code count and reported code leads." },
  { href: "/updates/", title: "Updates", description: "Track recheck entries and gameplay change notes." },
  { href: "/mutations/", title: "Mutations", description: "Review Honeycomb, Alien, Farm, and stacking questions as reported leads." },
  { href: "/weather-events/", title: "Weather Events", description: "Check Queen Bee and event-related claims as pending leads." },
  { href: "/calculator/", title: "Calculator", description: "Use Update 3 values only after they are reported or pending with labels." }
];

const faq = [
  { q: "Are Build A Ring Farm Update 3 codes verified?", a: "No. This site currently has 0 confirmed active Update 3 codes." },
  { q: "Can reported Update 3 codes be tested?", a: "Yes, but only inside the real game UI, and they should stay reported or pending until proof exists." },
  { q: "Does Update 3 prove Honeycomb or Queen Bee values?", a: "No. Honeycomb and Queen Bee are reported leads here, not verified official values." },
  { q: "When can an Update 3 code become verified?", a: "Only after official or repeatable in-game proof records the code, reward, date, and result." }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

export default function Update3StatusPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Update 3 code status</p>
          <h1>Build A Ring Farm Update 3 Codes</h1>
          <p className="lede">Track Build A Ring Farm Update 3 codes, reported reward leads, pending mutation and event claims, and safe recheck steps without calling unverified strings active.</p>
          <div className="hero-actions">
            <Link prefetch={false} className="primary-link" href="/codes/">Check codes</Link>
            <Link prefetch={false} className="secondary-link" href="/updates/">Read updates</Link>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="guide-card evidence-note-card">
        <span className="card-rule" />
        <p className="eyebrow">Current verdict</p>
        <h2>0 confirmed active Update 3 codes here</h2>
        <p>All unverified Update 3 codes, rewards, multipliers, prices, and event claims must remain reported or pending until stronger evidence exists.</p>
        <p><strong>Last checked:</strong> {lastChecked}</p>
        <p><strong>Next recheck:</strong> {nextRecheck}</p>
      </section>

      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Status table</p>
          <h2>Update 3 reported and pending leads</h2>
          <div className="data-list">
            {statusRows.map((row) => (
              <div className="data-row three-field-row" key={row.item}>
                <div><span>Lead</span><strong>{row.item}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
                <div><span>Note</span><strong>{row.note}</strong></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="redeem-guide-section">
        <div className="section-heading"><p className="eyebrow">Recheck steps</p><h2>How to verify Update 3 claims safely</h2></div>
        <ol className="redeem-steps">{recheckSteps.map((step) => <li key={step}>{step}</li>)}</ol>
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

      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Update 3 recheck links</h2></section>
      <section className="route-grid" aria-label="Update 3 recheck links">
        {relatedLinks.map((link) => <Link prefetch={false} className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}
      </section>

      <section className="faq-section">
        <div className="section-heading"><p className="eyebrow">FAQ</p><h2>Build A Ring Farm Update 3 Codes FAQ</h2></div>
        <div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
      </section>
    </main>
  );
}
