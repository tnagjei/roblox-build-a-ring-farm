import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Farm Ring Bonuses | Update 4 Status";
const pageDescription = "Build A Ring Farm Farm Ring Bonuses page for the Update 4 reported ring bonus mechanic, pending source status, calculator limits, and ring route checks.";
const heroImage = "/images/official-hero-image.webp";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/farm-ring-bonuses/") },
  openGraph: { title: pageTitle, description: pageDescription, url: absoluteUrl("/farm-ring-bonuses/"), type: "article", images: [{ url: absoluteUrl(heroImage), width: 1200, height: 630, alt: "Build A Ring Farm Farm Ring Bonuses" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl(heroImage)] }
};

const rows = [
  { item: "Farm Ring Bonuses", status: "Third-party reported", note: "Update 4 mechanic lead, not verified here." },
  { item: "Multiplier impact", status: "Pending", note: "Do not combine with ring multiplier table until tested." },
  { item: "Best ring claim", status: "Pending", note: "No verified best-ring ranking from this claim." },
  { item: "Calculator preset", status: "Pending", note: "Use only player-entered values for now." }
];

const links = [
  { href: "/rings/", title: "Rings", description: "Reported ring multipliers and upgrade timing." },
  { href: "/calculator/", title: "Calculator", description: "Use pending values as manual inputs only." },
  { href: "/update-status/", title: "Update Status", description: "Full Update 4 pending watchlist." },
  { href: "/farm-layout/", title: "Farm Layout", description: "Check layout before chasing bonus claims." }
];

function Badge({ value }: { value: string }) { return <span className="source-badge">{value}</span>; }

export default function FarmRingBonusesPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero"><div className="hero-copy"><p className="eyebrow">Update 4 ring lead</p><h1>Build A Ring Farm Farm Ring Bonuses</h1><p className="lede">Track Farm Ring Bonuses as a reported Update 4 mechanic without turning the claim into verified ring multiplier data.</p><div className="hero-actions"><Link prefetch={false} className="primary-link" href="/rings/">Read rings</Link><Link prefetch={false} className="secondary-link" href="/calculator/">Open calculator</Link></div></div><img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" /></section>
      <section className="guide-card evidence-note-card"><span className="card-rule" /><p className="eyebrow">Current verdict</p><h2>Farm Ring Bonuses are pending</h2><p>This page exists to capture the Update 4 search intent while keeping exact bonus values and best-ring advice unverified.</p></section>
      <section className="content-grid single-column-grid"><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Watchlist</p><h2>Farm Ring Bonuses status table</h2><div className="data-list">{rows.map((row) => <div className="data-row three-field-row" key={row.item}><div><span>Item</span><strong>{row.item}</strong></div><div><span>Status</span><Badge value={row.status} /></div><div><span>Note</span><strong>{row.note}</strong></div></div>)}</div></article></section>
      <section className="content-grid"><article className="guide-card"><span className="card-rule" /><h2>How to test this bonus</h2><p>Change only one ring-related variable at a time. Record the farm state, ring state, crop value, and sell result before promoting any value.</p><ul><li>Keep mutation state unchanged.</li><li>Keep fertilizer state unchanged.</li><li>Repeat the result before changing page data.</li></ul></article><article className="guide-card"><span className="card-rule" /><h2>Why not add fixed numbers yet</h2><p>A fixed ring bonus can distort calculator output. Until proof exists, use manual inputs and keep this page in pending status.</p><ul><li>No fixed bonus table.</li><li>No verified ranking.</li><li>No official patch-note label.</li></ul></article></section>
      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Ring bonus links</h2></section><section className="route-grid">{links.map((link) => <Link prefetch={false} className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}</section>
      <section className="faq-section"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Farm Ring Bonuses FAQ</h2></div><div className="faq-list"><details><summary>Are Farm Ring Bonuses verified?</summary><p>No. They are third-party reported and pending verification here.</p></details><details><summary>Can I use Farm Ring Bonuses in the calculator?</summary><p>Only as manual player-entered values, not verified presets.</p></details></div></section>
    </main>
  );
}
