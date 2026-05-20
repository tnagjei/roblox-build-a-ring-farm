// input: `/mutations/` route request
// output: English mutations guide with community reported effect logic and source boundaries
// pos: mutations route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Build A Ring Farm Mutations Guide | Effects & Tiers";
const pageDescription = "Build A Ring Farm mutations guide covering community reported mutation effects, sprays, weather events, tier logic, stacking checks, and source status.";
const heroImage = "/official-hero-image";

export const metadata: Metadata = { title: pageTitle, description: pageDescription, alternates: { canonical: "https://www.buildaringfarm.org/mutations/" } };

const mutationRows = [
  { mutation: "Rainbow", tier: "S", route: "Galaxy event or Rainbow Spray lead", status: "Community reported" },
  { mutation: "Radioactive", tier: "A", route: "Nuclear event or Radioactive Spray lead", status: "Community reported" },
  { mutation: "Void", tier: "B", route: "Black Hole event or Void Spray lead", status: "Community reported" },
  { mutation: "Frozen", tier: "C", route: "Blizzard event or Frozen Spray lead", status: "Community reported" },
  { mutation: "Wet", tier: "D", route: "Rain event or Wet Spray lead", status: "Community reported" }
];

const stackingChecks = [
  { step: "1", check: "Record the crop before testing", evidence: "Screenshot crop name, visible effect, and starting value." },
  { step: "2", check: "Record the trigger", evidence: "Note whether the mutation came from a spray, weather event, or unknown source." },
  { step: "3", check: "Test one variable only", evidence: "Do not combine a new spray, weather event, and upgrade in the same test." },
  { step: "4", check: "Compare before and after", evidence: "Record crop value after the mutation and after selling." },
  { step: "5", check: "Repeat on another server", evidence: "One screenshot is a lead, not proof." }
];

const sections = [
  { h2: "What are mutations in Build A Ring Farm?", h3: "Mutation meaning", body: ["Mutations are community reported rare crop effects that may change crop value or route priority. This page treats mutation names as research leads, not official Roblox data.", "The safest way to understand Build A Ring Farm mutations is to connect them with sprays, weather events, advanced crops, and tier-list logic without pretending the exact numbers are confirmed."], list: ["Use mutations as rare-effect leads.", "Do not treat multipliers as official unless verified.", "Compare mutations with spray cost and event timing."] },
  { h2: "Can mutations stack?", h3: "Stacking is unverified", body: ["Stacking behavior is one of the highest-risk claims. Unless repeatable in-game tests prove it, mutation stacking should stay marked as needs verification.", "A useful test should record the crop, active event, spray used, before value, after value, and whether the result persists offline."], list: ["Do not write guaranteed stacking.", "Do not copy stacking claims from competitors.", "Record screenshots before promoting a claim."] },
  { h2: "Mutations vs sprays and weather events", h3: "Two trigger paths", body: ["Community reports connect mutations to both sprays and weather events. Sprays may directly test an effect, while events may trigger similar effects through timing or chance.", "This creates a clear internal-link cluster: sprays explain item use, weather events explain event routes, advanced crops explain value context, and this page explains mutation intent."], list: ["Wet connects to Rain and Wet Spray.", "Frozen connects to Blizzard and Frozen Spray.", "Rainbow connects to Galaxy and Rainbow Spray."] },
  { h2: "What still needs verification", h3: "Pending evidence", body: ["A strong mutation page needs exact effect behavior, confirmed values, stacking rules, offline behavior, and update history. Until then, this page should remain source-aware and conservative.", "If future tests confirm a mutation, record the source, date, test method, and result before changing its status."], list: ["Exact mutation values.", "Stacking rules.", "Offline behavior.", "Event and spray interactions."] }
];

const relatedLinks = [
  { href: "/sprays/", title: "Sprays", description: "Compare spray effects with mutation routes." },
  { href: "/advanced-crops/", title: "Advanced Crops", description: "Review community reported rare effect values." },
  { href: "/weather-events/", title: "Weather Events", description: "Compare mutation effects with event routes." },
  { href: "/tier-list/", title: "Tier List", description: "Use community reported tiers as a planning layer." },
  { href: "/gear-shop/", title: "Gear Shop", description: "Judge whether sprays and gear are worth buying." },
  { href: "/money-farming/", title: "Money Farming", description: "Check whether rare-effect chasing fits the cash route." }
];

const faq = [
  { q: "Are Build A Ring Farm mutations official on this site?", a: "No. Mutation effects are treated as community reported until official notes or in-game evidence confirms them." },
  { q: "What is the strongest reported mutation?", a: "Community reports usually place Rainbow highest, but this site does not treat that as official data." },
  { q: "Can mutations stack?", a: "Stacking behavior has not been verified here. Treat stacking claims as needs verification." },
  { q: "Should beginners chase mutations?", a: "No. Beginners should stabilize crops, selling, and upgrades before chasing rare effects." }
];

function Badge({ value }: { value: string }) { return <span className="source-badge">{value}</span>; }

export default function MutationsPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero"><div className="hero-copy"><p className="eyebrow">Mutation effects guide</p><h1>Build A Ring Farm Mutations Guide</h1><p className="lede">Compare community reported Build A Ring Farm mutations, effect tiers, spray routes, weather event links, stacking questions, and source status without treating any mutation claim as official.</p><div className="hero-actions"><Link className="primary-link" href="/sprays/">Read sprays</Link><Link className="secondary-link" href="/tier-list/">Read tier list</Link></div></div><img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" /></section>
      <section className="guide-card evidence-note-card"><span className="card-rule" /><p className="eyebrow">Evidence note</p><h2>Mutation data is community reported</h2><p>No official mutation table has been confirmed here. Use this page as a planning and verification guide.</p></section>
      <section className="content-grid single-column-grid"><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Community table</p><h2>Reported mutation tiers</h2><div className="data-list">{mutationRows.map((row) => <div className="data-row four-field-row" key={row.mutation}><div><span>Mutation</span><strong>{row.mutation}</strong></div><div><span>Tier lead</span><strong>{row.tier}</strong></div><div><span>Route</span><strong>{row.route}</strong></div><div><span>Status</span><Badge value={row.status} /></div></div>)}</div></article><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Test checklist</p><h2>Mutation stacking test checklist</h2><div className="data-list">{stackingChecks.map((row) => <div className="data-row three-field-row" key={row.step}><div><span>Step</span><strong>{row.step}</strong></div><div><span>Check</span><strong>{row.check}</strong></div><div><span>Evidence</span><strong>{row.evidence}</strong></div></div>)}</div></article></section>
      <section className="content-grid">{sections.map((section) => <article className="guide-card" key={section.h2}><span className="card-rule" /><h2>{section.h2}</h2><h3>{section.h3}</h3>{section.body.map((p) => <p key={p}>{p}</p>)}<ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</section>
      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>What to read next</h2></section><section className="route-grid">{relatedLinks.map((link) => <Link className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}</section>
      <section className="faq-section"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Build A Ring Farm Mutations Guide FAQ</h2></div><div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    </main>
  );
}
