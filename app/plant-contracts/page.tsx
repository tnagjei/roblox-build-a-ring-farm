import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Plant Contracts | Update 4 Status";
const pageDescription = "Build A Ring Farm Plant Contracts page for the Update 4 reported mechanic, pending verification, route impact, and safe evidence checks.";
const heroImage = "/images/official-hero-image.webp";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/plant-contracts/") },
  openGraph: { title: pageTitle, description: pageDescription, url: absoluteUrl("/plant-contracts/"), type: "article", images: [{ url: absoluteUrl(heroImage), width: 1200, height: 630, alt: "Build A Ring Farm Plant Contracts" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl(heroImage)] }
};

const rows = [
  { item: "Plant Contracts", status: "Third-party reported", note: "Update 4 mechanic claim, not verified patch-note data here." },
  { item: "Rewards", status: "Pending", note: "No fixed reward table until official or repeatable in-game proof exists." },
  { item: "Route impact", status: "Pending", note: "May affect seeds, crops, and money routes, but exact value is unknown." },
  { item: "Calculator use", status: "Pending", note: "Do not add contract rewards into calculator presets yet." }
];

const links = [
  { href: "/update-status/", title: "Update Status", description: "Full Update 4 pending watchlist." },
  { href: "/seeds/", title: "Seeds", description: "Seed and crop route context." },
  { href: "/money-farming/", title: "Money Farming", description: "Use reported rewards only as leads." }
];

function Badge({ value }: { value: string }) { return <span className="source-badge">{value}</span>; }

export default function PlantContractsPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero"><div className="hero-copy"><p className="eyebrow">Update 4 mechanic</p><h1>Build A Ring Farm Plant Contracts</h1><p className="lede">Track Plant Contracts as a reported Update 4 mechanic without treating rewards, requirements, or route value as verified data.</p><div className="hero-actions"><Link prefetch={false} className="primary-link" href="/update-status/">Update status</Link><Link prefetch={false} className="secondary-link" href="/money-farming/">Money routes</Link></div></div><img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" /></section>
      <section className="guide-card evidence-note-card"><span className="card-rule" /><p className="eyebrow">Current verdict</p><h2>Plant Contracts are pending</h2><p>This page covers the search intent while keeping all rewards, requirements, cooldowns, and route value marked as pending.</p></section>
      <section className="content-grid single-column-grid"><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Watchlist</p><h2>Plant Contracts status table</h2><div className="data-list">{rows.map((row) => <div className="data-row three-field-row" key={row.item}><div><span>Item</span><strong>{row.item}</strong></div><div><span>Status</span><Badge value={row.status} /></div><div><span>Note</span><strong>{row.note}</strong></div></div>)}</div></article></section>
      <section className="content-grid"><article className="guide-card"><span className="card-rule" /><h2>What to verify first</h2><p>A useful contract claim needs the contract UI, requirements, reward text, cooldown, and repeatable result.</p><ul><li>Record the contract screen.</li><li>Record the plant requirement.</li><li>Record reward text and result.</li></ul></article><article className="guide-card"><span className="card-rule" /><h2>Why this page stays conservative</h2><p>Plant Contracts could become important, but premature exact rewards would create fake data.</p><ul><li>No fixed reward table yet.</li><li>No calculator preset yet.</li><li>No official patch-note label yet.</li></ul></article></section>
      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Plant Contracts links</h2></section><section className="route-grid">{links.map((link) => <Link prefetch={false} className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}</section>
      <section className="faq-section"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Plant Contracts FAQ</h2></div><div className="faq-list"><details><summary>Are Plant Contracts verified?</summary><p>No. They are listed as a third-party reported Update 4 mechanic pending verification.</p></details><details><summary>Should Plant Contracts change my route?</summary><p>Not yet. Wait for official or repeatable in-game proof before changing routes.</p></details></div></section>
    </main>
  );
}
