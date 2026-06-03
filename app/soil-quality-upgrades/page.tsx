import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Soil Quality Upgrades | Update 4 Status";
const pageDescription = "Build A Ring Farm Soil Quality Upgrades page for the Update 4 reported upgrade mechanic, pending source status, ROI checks, and route planning.";
const heroImage = "/images/official-hero-image.webp";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/soil-quality-upgrades/") },
  openGraph: { title: pageTitle, description: pageDescription, url: absoluteUrl("/soil-quality-upgrades/"), type: "article", images: [{ url: absoluteUrl(heroImage), width: 1200, height: 630, alt: "Build A Ring Farm Soil Quality Upgrades" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl(heroImage)] }
};

const rows = [
  { item: "Soil Quality Upgrades", status: "Third-party reported", note: "Update 4 upgrade mechanic lead, not verified here." },
  { item: "Growth impact", status: "Pending", note: "Exact growth, yield, or value effect is unknown." },
  { item: "ROI", status: "Pending", note: "No fixed payback table until price and result are tested." },
  { item: "Upgrade priority", status: "Strategy only", note: "Compare against stable crop and normal upgrade routes first." }
];

const links = [
  { href: "/upgrades/", title: "Upgrades", description: "General upgrade timing and ROI logic." },
  { href: "/fertilizer/", title: "Fertilizer", description: "Compare soil claims with growth support leads." },
  { href: "/money-farming/", title: "Money Farming", description: "Do not change cash route until effects are tested." },
  { href: "/update-status/", title: "Update Status", description: "Full Update 4 pending watchlist." }
];

function Badge({ value }: { value: string }) { return <span className="source-badge">{value}</span>; }

export default function SoilQualityUpgradesPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero"><div className="hero-copy"><p className="eyebrow">Update 4 upgrade lead</p><h1>Build A Ring Farm Soil Quality Upgrades</h1><p className="lede">Track Soil Quality Upgrades as a reported Update 4 upgrade mechanic without treating prices, growth effects, or ROI as verified.</p><div className="hero-actions"><Link prefetch={false} className="primary-link" href="/upgrades/">Read upgrades</Link><Link prefetch={false} className="secondary-link" href="/fertilizer/">Fertilizer guide</Link></div></div><img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" /></section>
      <section className="guide-card evidence-note-card"><span className="card-rule" /><p className="eyebrow">Current verdict</p><h2>Soil Quality Upgrades are pending</h2><p>This page captures the search intent while keeping exact effects and prices out of verified status.</p></section>
      <section className="content-grid single-column-grid"><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Watchlist</p><h2>Soil Quality Upgrades status table</h2><div className="data-list">{rows.map((row) => <div className="data-row three-field-row" key={row.item}><div><span>Item</span><strong>{row.item}</strong></div><div><span>Status</span><Badge value={row.status} /></div><div><span>Note</span><strong>{row.note}</strong></div></div>)}</div></article></section>
      <section className="content-grid"><article className="guide-card"><span className="card-rule" /><h2>How to verify soil upgrades</h2><p>Test one upgrade level at a time and record crop value, growth timing, harvest result, and cost before changing any guide table.</p><ul><li>Record before and after timing.</li><li>Record purchase cost.</li><li>Repeat the test before calling it reliable.</li></ul></article><article className="guide-card"><span className="card-rule" /><h2>Where soil upgrades fit</h2><p>Soil Quality Upgrades may matter after crops and base upgrades are stable. Beginners should avoid chasing unverified mechanics before their normal loop works.</p><ul><li>Stable crops first.</li><li>Known upgrades second.</li><li>Soil tests after that.</li></ul></article></section>
      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Soil upgrade links</h2></section><section className="route-grid">{links.map((link) => <Link prefetch={false} className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}</section>
      <section className="faq-section"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Soil Quality Upgrades FAQ</h2></div><div className="faq-list"><details><summary>Are Soil Quality Upgrades verified?</summary><p>No. They are listed as a third-party reported Update 4 mechanic pending verification.</p></details><details><summary>Should beginners buy soil upgrades first?</summary><p>Not based on current evidence. Stable crops and normal upgrades come first.</p></details></div></section>
    </main>
  );
}
