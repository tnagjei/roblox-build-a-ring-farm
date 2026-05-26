// input: `/fertilizer/` route request
// output: English fertilizer guide with ROI logic and source boundaries
// pos: fertilizer route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Build A Ring Farm Fertilizer Guide | Growth & ROI";
const pageDescription = "Build A Ring Farm fertilizer guide covering community reported Strong Fertilizer use, crop timing, sprays, upgrades, ROI, and source status.";
const heroImage = "/images/official-hero-image.webp";

export const metadata: Metadata = { title: pageTitle, description: pageDescription, alternates: { canonical: "https://www.buildaringfarm.org/fertilizer/" } };

const rows = [
  { item: "Strong Fertilizer", role: "Growth or farming boost lead", use: "Use after crop route is stable", status: "Community reported" },
  { item: "Code reward fertilizer", role: "Bonus progression lead", use: "Treat as extra help, not route foundation", status: "Community reported" },
  { item: "Event timing support", role: "Possible timing tool", use: "Needs in-game test before stronger claims", status: "Needs verification" }
];

const decisionRows = [
  { situation: "Plots are idle", action: "Do not use fertilizer yet", reason: "Fix planting and harvest rhythm before spending items." },
  { situation: "Cash is low", action: "Compare with basic upgrades", reason: "A repeatable upgrade may beat one fertilizer use." },
  { situation: "Crop route is stable", action: "Consider fertilizer testing", reason: "Timing tools are safer after normal cash flow works." },
  { situation: "Event or mutation is active", action: "Record evidence first", reason: "Do not mix unverified fertilizer, event, and mutation claims." },
  { situation: "After a major update", action: "Retest before publishing", reason: "Growth behavior or rewards may have changed." }
];

const sections = [
  { h2: "What is fertilizer in Build A Ring Farm?", h3: "Fertilizer role", body: ["Fertilizer is a community reported progression item connected to crop timing, harvest flow, and farming efficiency. This page does not confirm official prices or exact growth values.", "The safest use is to treat fertilizer as a timing tool that may support repeated crop cycles after the basic farm loop is already stable."], list: ["Do not treat fertilizer as official unless verified.", "Use it after seeds and crops are stable.", "Compare it with upgrades and sprays."] },
  { h2: "When to use fertilizer", h3: "Timing logic", body: ["The best fertilizer timing depends on whether the item improves a valuable crop route or merely saves time on a weak crop. A boost is more useful when it supports repeated farming value.", "If using fertilizer empties your cash or interrupts planting, it can slow progress instead of helping."], list: ["Use on higher-value crop routes.", "Avoid wasting it on idle or weak cycles.", "Check whether an upgrade would help more." ] },
  { h2: "Fertilizer vs sprays", h3: "Different jobs", body: ["Fertilizer and sprays should not be judged as the same item type. Fertilizer is usually a growth or timing lead, while sprays are rare-effect testing leads.", "If your goal is faster normal farming, fertilizer may fit better. If your goal is rare effect testing, the sprays page is more relevant."], list: ["Fertilizer supports crop timing.", "Sprays support rare-effect testing.", "Both need source labels." ] },
  { h2: "What still needs verification", h3: "Pending evidence", body: ["Exact fertilizer prices, growth behavior, code reward status, cooldown rules, and interaction with offline income are not confirmed here.", "Future updates should record screenshots, test date, crop used, and before-after timing before moving any claim beyond community reported."], list: ["Exact price.", "Exact growth effect.", "Code reward status.", "Offline behavior."] }
];

const relatedLinks = [
  { href: "/gear-shop/", title: "Gear Shop", description: "Compare fertilizer with other gear shop decisions." },
  { href: "/sprays/", title: "Sprays", description: "Compare fertilizer with spray-based rare effect testing." },
  { href: "/money-farming/", title: "Money Farming", description: "Check whether fertilizer fits your cash route." },
  { href: "/upgrades/", title: "Upgrades", description: "Compare fertilizer with repeatable upgrade value." },
  { href: "/crops/", title: "Crops", description: "Use fertilizer only after understanding crop cycles." }
];

const faq = [
  { q: "Is Strong Fertilizer official on this site?", a: "No. Strong Fertilizer is treated as community reported until official notes or in-game evidence confirms details." },
  { q: "Should beginners use fertilizer first?", a: "Usually no. Beginners should stabilize seeds, crops, selling, and basic upgrades first." },
  { q: "Is fertilizer better than sprays?", a: "They serve different jobs. Fertilizer is a timing lead, while sprays are rare-effect testing leads." },
  { q: "Does fertilizer work offline?", a: "Offline fertilizer behavior has not been verified here and should remain needs verification." }
];

function Badge({ value }: { value: string }) { return <span className="source-badge">{value}</span>; }

export default function FertilizerPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero"><div className="hero-copy"><p className="eyebrow">Fertilizer and growth guide</p><h1>Build A Ring Farm Fertilizer Guide</h1><p className="lede">Use this Build A Ring Farm fertilizer guide to compare community reported Strong Fertilizer, crop timing, sprays, upgrades, ROI, and source status without treating any fertilizer claim as official.</p><div className="hero-actions"><Link className="primary-link" href="/gear-shop/">Read gear shop</Link><Link className="secondary-link" href="/money-farming/">Read money farming</Link></div></div><img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" /></section>
      <section className="guide-card evidence-note-card"><span className="card-rule" /><p className="eyebrow">Evidence note</p><h2>Fertilizer data is community reported</h2><p>This page does not claim official fertilizer prices, exact growth boosts, cooldowns, or offline behavior.</p></section>
      <section className="content-grid single-column-grid"><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Community table</p><h2>Reported fertilizer uses</h2><div className="data-list">{rows.map((row) => <div className="data-row four-field-row" key={row.item}><div><span>Item</span><strong>{row.item}</strong></div><div><span>Role</span><strong>{row.role}</strong></div><div><span>Use</span><strong>{row.use}</strong></div><div><span>Status</span><Badge value={row.status} /></div></div>)}</div></article><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Decision table</p><h2>Use before or after upgrades?</h2><div className="data-list">{decisionRows.map((row) => <div className="data-row three-field-row" key={row.situation}><div><span>Situation</span><strong>{row.situation}</strong></div><div><span>Action</span><strong>{row.action}</strong></div><div><span>Reason</span><strong>{row.reason}</strong></div></div>)}</div></article></section>
      <section className="content-grid">{sections.map((section) => <article className="guide-card" key={section.h2}><span className="card-rule" /><h2>{section.h2}</h2><h3>{section.h3}</h3>{section.body.map((p) => <p key={p}>{p}</p>)}<ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</section>
      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>What to read next</h2></section><section className="route-grid">{relatedLinks.map((link) => <Link className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}</section>
      <section className="faq-section"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Build A Ring Farm Fertilizer Guide FAQ</h2></div><div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    </main>
  );
}
