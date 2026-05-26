// input: `/offline-income/` route request
// output: English offline income guide with verified and pending boundaries
// pos: offline-income route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Build A Ring Farm Offline Income Guide | AFK Cash";
const pageDescription = "Build A Ring Farm offline income guide covering offline earnings, logout checks, crops, upgrades, weather events, mutations, and source status.";
const heroImage = "/images/official-hero-image.webp";

export const metadata: Metadata = { title: pageTitle, description: pageDescription, alternates: { canonical: "https://www.buildaringfarm.org/offline-income/" } };

const rows = [
  { item: "Offline earnings", status: "Verified direction", note: "Official Roblox page says the farm earns while offline." },
  { item: "Offline weather events", status: "Needs verification", note: "No confirmed evidence here that events trigger offline." },
  { item: "Offline mutations", status: "Needs verification", note: "Mutation behavior while offline is not confirmed." },
  { item: "Offline sprays", status: "Needs verification", note: "Spray persistence and offline interaction need tests." }
];

const logoutRows = [
  { check: "Plots are active", why: "Offline progress is weaker when the farm is stalled before logout.", status: "Strategy" },
  { check: "Cash is not stuck", why: "Spend on repeatable upgrades if they improve future cycles.", status: "Strategy" },
  { check: "No unverified event plan", why: "Do not rely on offline weather events until tested.", status: "Needs verification" },
  { check: "No unverified mutation plan", why: "Do not assume mutations trigger or stack offline.", status: "Needs verification" },
  { check: "Return result recorded", why: "Compare before-login and after-login state to improve evidence.", status: "Test action" }
];

const sections = [
  { h2: "What offline income means", h3: "Verified direction", body: ["Build A Ring Farm promotes the idea that your farm can keep earning while offline. That makes offline income an important progression topic for players who cannot stay in-game all day.", "This page separates the broad offline earning claim from unverified rare-effect behavior. Offline cash progress is one thing; offline mutations, event triggers, and spray interactions are separate claims."], list: ["Offline earnings are part of the game promise.", "Exact offline cash rates are not verified here.", "Rare-effect offline behavior still needs testing."] },
  { h2: "Best logout checklist", h3: "Before leaving the game", body: ["The safest offline-income strategy is to leave the farm in a clean state: active crop cycles, no avoidable idle plots, and upgrades that help repeated production.", "Do not depend on a random event or unverified mutation to carry offline progress. Build your offline routine around repeatable systems first."], list: ["Keep plots active before logging out.", "Spend cash on reliable upgrades when sensible.", "Avoid leaving your farm in a stalled state.", "Check results after returning." ] },
  { h2: "Offline income vs weather and mutations", h3: "Separate the claims", body: ["Weather events and mutations may improve crop outcomes during active play, but offline triggering is not confirmed here. Treat any competitor claim about offline rare effects as a research lead, not proof.", "Future tests should record the crop state before logout, offline duration, event state, and after-login result."], list: ["Do not write guaranteed offline events.", "Do not write guaranteed offline mutations.", "Record screenshots for evidence." ] },
  { h2: "How to improve offline income safely", h3: "Stable systems first", body: ["Better offline progress usually starts with stronger normal farming: crops, upgrades, and cash flow. Rare effects can help only if they are actually triggered and verified.", "Use the money farming and upgrade pages to plan stable progress before relying on uncertain offline mechanics."], list: ["Improve crop route stability.", "Buy repeatable-value upgrades.", "Treat sprays and fertilizer as pending until tested offline."] }
];

const relatedLinks = [
  { href: "/money-farming/", title: "Money Farming", description: "Build a cash route that works before and after offline time." },
  { href: "/upgrades/", title: "Upgrades", description: "Use upgrades to improve repeatable farming value." },
  { href: "/crops/", title: "Crops", description: "Understand crop cycles before optimizing offline income." },
  { href: "/mutations/", title: "Mutations", description: "Check why offline mutation behavior still needs verification." },
  { href: "/weather-events/", title: "Weather Events", description: "Separate active event claims from offline claims." }
];

const faq = [
  { q: "Does Build A Ring Farm have offline income?", a: "The official Roblox page supports the broad idea of earning while offline, but exact rates are not verified here." },
  { q: "Can mutations trigger offline?", a: "Mutation behavior while offline has not been verified here and should remain needs verification." },
  { q: "Can weather events happen offline?", a: "Offline weather event triggering has not been verified here." },
  { q: "What should I do before logging out?", a: "Keep plots active, avoid stalled cycles, and prioritize upgrades that improve repeatable farming value." }
];

function Badge({ value }: { value: string }) { return <span className="source-badge">{value}</span>; }

export default function OfflineIncomePage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero"><div className="hero-copy"><p className="eyebrow">Offline progress guide</p><h1>Build A Ring Farm Offline Income Guide</h1><p className="lede">Use this Build A Ring Farm offline income guide to separate offline earnings from unverified offline weather events, mutations, sprays, and rare-effect claims.</p><div className="hero-actions"><Link className="primary-link" href="/money-farming/">Read money farming</Link><Link className="secondary-link" href="/upgrades/">Read upgrades</Link></div></div><img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" /></section>
      <section className="guide-card evidence-note-card"><span className="card-rule" /><p className="eyebrow">Evidence note</p><h2>Offline earnings are different from offline rare effects</h2><p>Offline earning is supported as a game direction, but offline mutations, weather events, sprays, and exact rates still need separate verification.</p></section>
      <section className="content-grid single-column-grid"><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Source status</p><h2>Offline claim status</h2><div className="data-list">{rows.map((row) => <div className="data-row three-field-row" key={row.item}><div><span>Claim</span><strong>{row.item}</strong></div><div><span>Note</span><strong>{row.note}</strong></div><div><span>Status</span><Badge value={row.status} /></div></div>)}</div></article><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Logout checklist</p><h2>Before you leave the game</h2><div className="data-list">{logoutRows.map((row) => <div className="data-row three-field-row" key={row.check}><div><span>Check</span><strong>{row.check}</strong></div><div><span>Why it matters</span><strong>{row.why}</strong></div><div><span>Status</span><Badge value={row.status} /></div></div>)}</div></article></section>
      <section className="content-grid">{sections.map((section) => <article className="guide-card" key={section.h2}><span className="card-rule" /><h2>{section.h2}</h2><h3>{section.h3}</h3>{section.body.map((p) => <p key={p}>{p}</p>)}<ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</section>
      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>What to read next</h2></section><section className="route-grid">{relatedLinks.map((link) => <Link className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}</section>
      <section className="faq-section"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Build A Ring Farm Offline Income Guide FAQ</h2></div><div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    </main>
  );
}
