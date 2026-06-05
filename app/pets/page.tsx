import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Pets Guide | Reported Pet Tier List";
const pageDescription = "Build A Ring Farm pets guide with reported pet tier list leads, Starfall Griffin pending status, pet effects, source labels, and verification rules.";
const heroImage = "/images/official-hero-image.webp";
const lastChecked = "2026-06-05";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/pets/") },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/pets/"),
    type: "article",
    images: [{ url: absoluteUrl(heroImage), width: 1200, height: 630, alt: "Build A Ring Farm pets guide" }]
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl(heroImage)] }
};

const petRows = [
  { pet: "Starfall Griffin", reportedEffect: "Possible Starfall-related pet or stacking lead", sourceType: "Third-party / community signal", status: "High-risk pending", related: "Starfall mutation and events" },
  { pet: "Unknown event pet", reportedEffect: "Event-linked pet claim needs a real name and screenshot", sourceType: "Community reported lead", status: "Pending", related: "Events" },
  { pet: "Unknown farming pet", reportedEffect: "Possible money farming support, not verified", sourceType: "Community reported lead", status: "Needs verification", related: "Money farming" },
  { pet: "Unknown mutation pet", reportedEffect: "Possible mutation support, not verified", sourceType: "Community reported lead", status: "Needs verification", related: "Mutations" }
];

const tierRows = [
  { tier: "S", rule: "Reserved for pets with official or repeatable in-game proof", currentStatus: "No verified S-tier pet yet" },
  { tier: "A", rule: "Strong community lead plus visible gameplay evidence", currentStatus: "Pending" },
  { tier: "B", rule: "Useful reported effect but weak proof", currentStatus: "Pending" },
  { tier: "C", rule: "Name or effect mentioned, but not enough proof for advice", currentStatus: "Pending" }
];

const evidenceRows = [
  { source: "Roblox game UI", use: "Pet names, prices, effects, unlock method", reliability: "High if visible and repeatable" },
  { source: "Official developer channel", use: "Patch note or pet announcement", reliability: "High only if identity is confirmed" },
  { source: "YouTube gameplay", use: "Visible pet UI and effect clues", reliability: "Medium; video opinion stays community reported" },
  { source: "Reddit or Discord discussion", use: "Search demand and player leads", reliability: "Low to medium; keep pending" },
  { source: "Competitor guide", use: "Structure and field ideas", reliability: "Low for facts unless independently checked" }
];

const relatedLinks = [
  { href: "/tier-list/", title: "Tier List", description: "Pet tier list intent and source-safe ranking rules." },
  { href: "/events/", title: "Events", description: "Event leads that may connect to pets and mutations." },
  { href: "/mutations/", title: "Mutations", description: "Check Starfall, Honeycomb, Alien, Farm, and pending mutation leads." },
  { href: "/calculator/", title: "Calculator", description: "Do not add pet bonuses into estimates until verified." },
  { href: "/money-farming/", title: "Money Farming", description: "Treat pet effects as pending before changing routes." },
  { href: "/farm-layout/", title: "Farm Layout", description: "Plan farm routes before assuming pet effects." }
];

const faq = [
  { q: "Is there a verified Build A Ring Farm pet tier list?", a: "No. This page keeps pet rankings as reported or pending until official or repeatable in-game evidence exists." },
  { q: "Is Starfall Griffin verified?", a: "No. Starfall Griffin is a high-risk pending pet lead and should not be treated as a verified best pet." },
  { q: "Can pet bonuses be used in the calculator?", a: "Only as manual pending notes. Do not add pet bonuses as verified calculator presets until the effect is proven." },
  { q: "Why are some pet names unknown?", a: "Unknown placeholders are safer than invented names. A pet name should only be promoted when a reliable source or in-game UI confirms it." }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

export default function PetsPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Pets and pending tier list</p>
          <h1>Build A Ring Farm Pets Guide</h1>
          <p className="lede">Track Build A Ring Farm pets, reported pet tier list leads, Starfall Griffin claims, pet effects, and source status without inventing verified best pets.</p>
          <div className="hero-actions">
            <Link prefetch={false} className="primary-link" href="/tier-list/">Open tier list</Link>
            <Link prefetch={false} className="secondary-link" href="/events/">Check events</Link>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="guide-card evidence-note-card">
        <span className="card-rule" />
        <p className="eyebrow">Current verdict</p>
        <h2>Pets are reported or pending, not verified rankings</h2>
        <p>Last checked: {lastChecked}. This page fixes the pets search gap while keeping every pet effect, tier, bonus, and Starfall Griffin claim in reported or pending status.</p>
      </section>

      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Pet leads</p>
          <h2>Reported Build A Ring Farm pet leads</h2>
          <div className="data-list">
            {petRows.map((row) => (
              <div className="data-row four-field-row" key={row.pet}>
                <div><span>Pet / lead</span><strong>{row.pet}</strong></div>
                <div><span>Reported effect</span><strong>{row.reportedEffect}</strong></div>
                <div><span>Source type</span><strong>{row.sourceType}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>

        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Tier rules</p>
          <h2>Reported pet tier list rules</h2>
          <p>The table below defines how this site will rank pets later. It is not a verified S / A / B / C ranking yet.</p>
          <div className="data-list">
            {tierRows.map((row) => (
              <div className="data-row three-field-row" key={row.tier}>
                <div><span>Tier</span><strong>{row.tier}</strong></div>
                <div><span>Use rule</span><strong>{row.rule}</strong></div>
                <div><span>Current status</span><StatusBadge status={row.currentStatus} /></div>
              </div>
            ))}
          </div>
        </article>

        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Sources</p>
          <h2>Pet evidence checklist</h2>
          <div className="data-list">
            {evidenceRows.map((row) => (
              <div className="data-row three-field-row" key={row.source}>
                <div><span>Source</span><strong>{row.source}</strong></div>
                <div><span>Use</span><strong>{row.use}</strong></div>
                <div><span>Reliability</span><strong>{row.reliability}</strong></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="guide-card"><span className="card-rule" /><h2>How pets may affect farming</h2><p>Pet effects should be separated by use case: money farming, mutation support, crop support, spray support, layout support, and event support. None of these effects are verified here yet.</p><ul><li>Money farming bonuses stay pending.</li><li>Mutation support stays pending.</li><li>Event-linked pets need screenshots or video proof.</li></ul></article>
        <article className="guide-card"><span className="card-rule" /><h2>Why this is not a fake best-pet list</h2><p>Players want the best pet, but a fake list would be worse than no list. This page records the evidence boundary first, then upgrades claims only when proof improves.</p><ul><li>No invented pet names.</li><li>No verified tier without proof.</li><li>No calculator bonus without source evidence.</li></ul></article>
      </section>

      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Pets route links</h2></section>
      <section className="route-grid">{relatedLinks.map((link) => <Link prefetch={false} className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}</section>

      <section className="faq-section"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Build A Ring Farm Pets FAQ</h2></div><div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    </main>
  );
}
