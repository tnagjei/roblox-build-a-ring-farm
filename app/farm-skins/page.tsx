import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Farm Skins | Update 4 Status";
const pageDescription = "Build A Ring Farm Farm Skins page for the Update 4 reported cosmetic mechanic, pending source status, gameplay limits, and safe verification checks.";
const heroImage = "/images/official-hero-image.webp";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/farm-skins/") },
  openGraph: { title: pageTitle, description: pageDescription, url: absoluteUrl("/farm-skins/"), type: "article", images: [{ url: absoluteUrl(heroImage), width: 1200, height: 630, alt: "Build A Ring Farm Farm Skins" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl(heroImage)] }
};

const rows = [
  { item: "Farm Skins", status: "Third-party reported", note: "Update 4 cosmetic mechanic lead, not official here." },
  { item: "Gameplay effect", status: "Pending", note: "Do not assume skins improve income, crop value, or multipliers." },
  { item: "Price", status: "Pending", note: "No fixed price until in-game proof exists." },
  { item: "Route value", status: "Cosmetic until verified", note: "Treat as visual unless proof shows gameplay value." }
];

const links = [
  { href: "/update-status/", title: "Update Status", description: "Full Update 4 pending watchlist." },
  { href: "/farm-layout/", title: "Farm Layout", description: "Layout planning before cosmetic assumptions." },
  { href: "/money-farming/", title: "Money Farming", description: "Do not treat skins as income until verified." },
  { href: "/beginners-guide/", title: "Beginner Guide", description: "Prioritize core progression first." }
];

function Badge({ value }: { value: string }) { return <span className="source-badge">{value}</span>; }

export default function FarmSkinsPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero"><div className="hero-copy"><p className="eyebrow">Update 4 cosmetic lead</p><h1>Build A Ring Farm Farm Skins</h1><p className="lede">Track Farm Skins as a reported Update 4 mechanic without claiming gameplay effects, prices, or income value as verified.</p><div className="hero-actions"><Link prefetch={false} className="primary-link" href="/update-status/">Update status</Link><Link prefetch={false} className="secondary-link" href="/farm-layout/">Farm layout</Link></div></div><img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" /></section>
      <section className="guide-card evidence-note-card"><span className="card-rule" /><p className="eyebrow">Current verdict</p><h2>Farm Skins are pending cosmetic leads</h2><p>This page treats skins as cosmetic until repeatable proof shows a gameplay effect.</p></section>
      <section className="content-grid single-column-grid"><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Watchlist</p><h2>Farm Skins status table</h2><div className="data-list">{rows.map((row) => <div className="data-row three-field-row" key={row.item}><div><span>Item</span><strong>{row.item}</strong></div><div><span>Status</span><Badge value={row.status} /></div><div><span>Note</span><strong>{row.note}</strong></div></div>)}</div></article></section>
      <section className="content-grid"><article className="guide-card"><span className="card-rule" /><h2>How to verify a skin effect</h2><p>A skin claim needs before and after screenshots, price, visible effect, and repeated gameplay result before it can move beyond pending.</p><ul><li>Record the skin name.</li><li>Record price and unlock method.</li><li>Record whether gameplay values change.</li></ul></article><article className="guide-card"><span className="card-rule" /><h2>Why cosmetic claims are risky</h2><p>Many cosmetic systems do not improve progression. This page avoids telling players to spend on skins before gameplay value is proven.</p><ul><li>No income claim yet.</li><li>No multiplier claim yet.</li><li>No price table yet.</li></ul></article></section>
      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Farm Skins links</h2></section><section className="route-grid">{links.map((link) => <Link prefetch={false} className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}</section>
      <section className="faq-section"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Farm Skins FAQ</h2></div><div className="faq-list"><details><summary>Are Farm Skins verified?</summary><p>No. They are listed as a third-party reported Update 4 mechanic pending verification.</p></details><details><summary>Do Farm Skins improve income?</summary><p>Not verified here. Treat skins as cosmetic unless proof shows gameplay value.</p></details></div></section>
    </main>
  );
}
