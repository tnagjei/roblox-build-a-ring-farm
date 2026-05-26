// input: `/farm-layout/` route request
// output: English farm layout guide with stage checklists and source boundaries
// pos: farm-layout route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Build A Ring Farm Farm Layout Guide | Profit Routes";
const pageDescription = "Build A Ring Farm farm layout guide covering early layouts, ring expansion, active plots, crop routes, upgrade timing, offline income, and source status.";
const heroImage = "/images/official-hero-image.webp";

export const metadata: Metadata = { title: pageTitle, description: pageDescription, alternates: { canonical: "https://www.buildaringfarm.org/farm-layout/" } };

const rows = [
  { stage: "Early layout", focus: "Keep plots active", action: "Avoid empty crop cycles and reinvest into basic upgrades.", status: "Strategy" },
  { stage: "Mid layout", focus: "Expand with purpose", action: "Grow only when the new area can stay productive.", status: "Strategy" },
  { stage: "Rare route layout", focus: "Test effects carefully", action: "Use sprays, mutations, and events only after the base loop works.", status: "Community reported" },
  { stage: "Offline layout", focus: "Leave farm stable", action: "Log out with active cycles and no obvious stalled production.", status: "Strategy" }
];

const checklistRows = [
  { stage: "Beginner", layoutCheck: "Every plot should have a job", avoid: "Expanding into empty space you cannot maintain" },
  { stage: "Beginner", layoutCheck: "Selling route should stay simple", avoid: "Holding cash while plots sit idle" },
  { stage: "Mid-game", layoutCheck: "Expansion should pay back through repeated harvests", avoid: "Buying space before seeds and upgrades can support it" },
  { stage: "Mid-game", layoutCheck: "Upgrades should help multiple future cycles", avoid: "One-off purchases with unclear return" },
  { stage: "Late-game", layoutCheck: "Rare-effect tests should use stable crop routes", avoid: "Building the whole layout around unverified mutations" },
  { stage: "Offline", layoutCheck: "Logout state should be active and easy to compare", avoid: "Assuming offline events, sprays, or mutations work without proof" }
];

const sections = [
  { h2: "What a good farm layout means", h3: "Layout goal", body: ["A Build A Ring Farm layout should keep production active, reduce wasted space, and make upgrades easier to justify. This page does not publish an official best layout image because no verified optimal layout has been confirmed here.", "Use layout advice as a checklist. The goal is stable farming first, then rare-effect testing after cash flow improves."], list: ["Keep active crop cycles.", "Avoid expanding faster than you can use new plots.", "Use upgrades to improve repeatable value."] },
  { h2: "Early layout checklist", h3: "First farm shape", body: ["Early players should focus on simple, repeatable production. A small farm that is always active is usually better than a larger farm with idle spaces.", "Before spending on uncertain items, make sure your crop loop, selling routine, and first upgrades are stable."], list: ["Do not leave open plots idle.", "Reinvest cash into basic progression.", "Avoid rare-effect chasing too early." ] },
  { h2: "Layout for sprays, mutations, and events", h3: "Rare route planning", body: ["Once the farm is stable, layout can support rare-effect testing. Sprays, mutations, and weather events should be tested on routes that already have enough crop value to justify the risk.", "Do not build a layout around an unverified event or mutation claim. Start with repeatable crop value, then add rare-effect layers."], list: ["Use sprays only after cash flow is stable.", "Treat mutation behavior as community reported.", "Do not assume offline events happen." ] },
  { h2: "Offline layout checklist", h3: "Before logging out", body: ["Offline income works best when the farm is left in a stable state. The broad offline earning direction is supported, but exact rates and rare-effect behavior need verification.", "A safe logout checklist is better than fake profit numbers: active crops, no stalled cash path, and upgrades that help future cycles."], list: ["Keep plots active.", "Avoid stalled cycles.", "Check results after returning.", "Do not rely on unverified offline rare effects."] }
];

const relatedLinks = [
  { href: "/crops/", title: "Crops", description: "Understand crop cycles before changing layout." },
  { href: "/upgrades/", title: "Upgrades", description: "Use upgrades to improve repeatable layout value." },
  { href: "/offline-income/", title: "Offline Income", description: "Prepare a stable farm before logging out." },
  { href: "/money-farming/", title: "Money Farming", description: "Connect layout decisions with cash routes." },
  { href: "/sprays/", title: "Sprays", description: "Use spray testing only after layout stability." }
];

const faq = [
  { q: "Is there an official best Build A Ring Farm layout?", a: "No verified official best layout has been confirmed here. This page gives stage-based checklist guidance instead." },
  { q: "What should beginners focus on first?", a: "Keep plots active, sell consistently, and buy upgrades that improve repeated crop cycles." },
  { q: "Should I design around mutations?", a: "Not first. Mutation behavior is community reported and should be tested only after the base farm loop is stable." },
  { q: "Does layout affect offline income?", a: "A stable layout can support offline progress, but exact offline income rates are not verified here." }
];

function Badge({ value }: { value: string }) { return <span className="source-badge">{value}</span>; }

export default function FarmLayoutPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero"><div className="hero-copy"><p className="eyebrow">Farm layout and route guide</p><h1>Build A Ring Farm Farm Layout Guide</h1><p className="lede">Use this Build A Ring Farm farm layout guide to plan active plots, ring expansion, crop routes, upgrades, offline income, and rare-effect testing without relying on fake best-layout claims.</p><div className="hero-actions"><Link className="primary-link" href="/crops/">Read crops</Link><Link className="secondary-link" href="/offline-income/">Read offline income</Link></div></div><img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" /></section>
      <section className="guide-card evidence-note-card"><span className="card-rule" /><p className="eyebrow">Evidence note</p><h2>No official best layout has been confirmed</h2><p>This page uses checklist logic instead of pretending there is a verified maximum-profit layout.</p></section>
      <section className="content-grid single-column-grid"><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Layout stages</p><h2>Farm layout route by stage</h2><div className="data-list">{rows.map((row) => <div className="data-row four-field-row" key={row.stage}><div><span>Stage</span><strong>{row.stage}</strong></div><div><span>Focus</span><strong>{row.focus}</strong></div><div><span>Action</span><strong>{row.action}</strong></div><div><span>Status</span><Badge value={row.status} /></div></div>)}</div></article><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Checklist</p><h2>Beginner, mid-game, late-game layout checks</h2><div className="data-list">{checklistRows.map((row) => <div className="data-row three-field-row" key={`${row.stage}-${row.layoutCheck}`}><div><span>Stage</span><strong>{row.stage}</strong></div><div><span>Layout check</span><strong>{row.layoutCheck}</strong></div><div><span>Avoid</span><strong>{row.avoid}</strong></div></div>)}</div></article></section>
      <section className="content-grid">{sections.map((section) => <article className="guide-card" key={section.h2}><span className="card-rule" /><h2>{section.h2}</h2><h3>{section.h3}</h3>{section.body.map((p) => <p key={p}>{p}</p>)}<ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</section>
      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>What to read next</h2></section><section className="route-grid">{relatedLinks.map((link) => <Link className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}</section>
      <section className="faq-section"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Build A Ring Farm Farm Layout Guide FAQ</h2></div><div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    </main>
  );
}
