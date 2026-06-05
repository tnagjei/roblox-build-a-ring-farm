// input: `/calculator/` route request
// output: English calculator page with reported-only estimate controls, formula explanation, and source boundaries
// pos: calculator route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";
import CalculatorEstimator from "@/components/CalculatorEstimator";

const pageTitle = "Build A Ring Farm Calculator | Formula & Pending Presets";
const pageDescription = "Build A Ring Farm calculator with formula explanation, pending mutation presets, player-entered values, reported multipliers, ring inputs, and safe estimate rules.";
const heroImage = "/images/official-hero-image.webp";
const reportedStatus = "Reported, pending verification";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/calculator/") },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/calculator/"),
    type: "article",
    images: [{ url: absoluteUrl("/images/official-hero-image.webp"), width: 1200, height: 630, alt: "Build A Ring Farm calculator" }]
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl("/images/official-hero-image.webp")] }
};

const estimateRows = [
  { input: "Plant count", use: "Count the crops you plan to sell.", status: "Player-entered" },
  { input: "Observed base value", use: "Enter the crop value you actually see in game.", status: "Player-entered" },
  { input: "Mutation", use: "Compare Wet, Frozen, Void, Radioactive, Rainbow, Honeycomb, Cosmic, Bubblegum, Fire, Starfall, Admin, Alien, or Farm leads.", status: reportedStatus },
  { input: "Ring multiplier", use: "Apply a ring multiplier only after checking the rings page.", status: reportedStatus },
  { input: "Fertilizer", use: "Add only a player-entered or reported fertilizer value.", status: reportedStatus },
  { input: "Run count", use: "Compare repeated harvests without hard-coded cash-per-second claims.", status: "Player-entered" },
  { input: "Pet bonus", use: "Leave blank unless a pet effect is verified or manually entered as pending.", status: "Pending" },
  { input: "Event boost", use: "Use only as a manual pending input until the event effect is proven.", status: "Pending" }
];

const formulaRows = [
  { step: "1", formulaPart: "Plant count × observed base value", meaning: "Start with what you can see in game.", status: "Player-entered" },
  { step: "2", formulaPart: "× mutation multiplier", meaning: "Add only reported or verified mutation values.", status: reportedStatus },
  { step: "3", formulaPart: "× ring multiplier", meaning: "Use reported ring values as planning inputs, not official facts.", status: reportedStatus },
  { step: "4", formulaPart: "× fertilizer or route modifier", meaning: "Use only player-entered or pending values.", status: reportedStatus },
  { step: "5", formulaPart: "× run count", meaning: "Estimate repeated harvests without claiming income per minute.", status: "Player-entered" }
];

const plannerRows = [
  { topic: "Calculator", use: "Explain source-safe estimates using player inputs and reported values.", risk: "Can look less exact than a planner, but safer." },
  { topic: "Planner", use: "May help compare routes if formulas and data are proven.", risk: "Can create fake precision if inputs are weak." },
  { topic: "Formula", use: "Useful when the formula is shown with labels and source status.", risk: "Unsafe if hidden values are treated as verified." }
];

const scenarioRows = [
  { route: "Early crop loop", estimate: "Use base value only", note: "Best for players still unlocking stable crops.", status: "Pending values" },
  { route: "Mutation test", estimate: "Base value plus reported mutation lead", note: "Do not treat Honeycomb, Alien, or Farm values as official.", status: reportedStatus },
  { route: "Update 4 preset test", estimate: "Use pending preset only", note: "Cosmic 8x, Bubblegum 9x, Fire 10x, Starfall 4x, and Admin 5x stay pending in-game verification.", status: "Pending preset" },
  { route: "Ring route", estimate: "Base value plus reported ring multiplier", note: "Use the rings guide before assuming a multiplier.", status: reportedStatus },
  { route: "Pets or events route", estimate: "Manual pending input only", note: "Pet bonuses and event boosts must stay out of presets until verified.", status: "Pending" }
];

const pendingPresetRows = [
  { mutation: "Cosmic", preset: "8x", status: "Pending preset", note: "Needs in-game verification before stronger calculator use." },
  { mutation: "Bubblegum", preset: "9x", status: "Pending preset", note: "Needs in-game verification before stronger calculator use." },
  { mutation: "Fire", preset: "10x", status: "Pending preset", note: "Needs in-game verification before stronger calculator use." },
  { mutation: "Starfall", preset: "4x", status: "Pending preset", note: "Stacking is pending, not verified." },
  { mutation: "Admin", preset: "5x", status: "Pending preset", note: "Needs source, trigger, and availability proof." }
];

const sections = [
  { heading: "How to use the Build A Ring Farm calculator", subheading: "Estimate, then verify", body: ["This Build A Ring Farm calculator is a conservative planning tool, not an official value engine. Use it to compare plant count, your observed base value, reported mutations, reported ring multipliers, and pending route modifiers before spending cash or changing your farm route.", "The safest way to use a calculator page is to treat every unverified number as pending. If a crop value, mutation boost, ring multiplier, spray price, event boost, pet bonus, or code reward has not been checked in-game or posted by an official source, it should remain reported or pending."], list: ["Start with plant count.", "Enter your observed base value.", "Add only reported mutation leads.", "Use ring multipliers as pending estimates.", "Check results against real in-game selling."] },
  { heading: "Calculator formula explanation", subheading: "Source-aware formula, not fake precision", body: ["The practical formula is simple: player-entered base value first, then reported or pending multipliers. The page should explain the formula so players understand what is estimated and what is actually observed.", "This is how the page competes with external planner tools without pretending to know hidden official formulas. The formula is useful only when every weak input is visibly labeled."], list: ["Observed value is safer than copied value.", "Reported multipliers stay reported.", "Pet and event boosts stay pending.", "No income-per-minute claim without grow time proof."] },
  { heading: "Why this calculator stays conservative", subheading: "Useful estimates without fake certainty", body: ["Many players want a profit calculator, seed calculator, ring multiplier calculator, and planner because they are trying to decide what to do next. This page gives them a simple estimate workflow without pretending weak data is official.", "Seeds, money farming, mutations, rings, pets, events, and update status pages can all point here when players need to estimate a route without trusting fake exact numbers."], list: ["Seed calculator intent belongs here.", "Profit calculator intent belongs here.", "Ring multiplier calculator intent belongs here.", "Reported and pending labels protect trust."] },
  { heading: "What the calculator should not claim", subheading: "No fake precision", body: ["Do not publish a final cash-per-second number unless the input values and grow times are verified. A precise-looking formula can be more harmful than a plain pending label if the source data is weak.", "The current estimator uses player inputs and source labels instead of a hard-coded final value table. That keeps the page useful while avoiding invented prices, invented multipliers, and invented active code rewards."], list: ["No official crop prices without proof.", "No verified mutation multiplier unless tested.", "No verified ring multiplier unless tested.", "No verified pet bonus unless tested."] }
];

const relatedLinks = [
  { href: "/money-farming/", title: "Money Farming", description: "Turn calculator estimates into safer cash routes." },
  { href: "/rings/", title: "Rings", description: "Check reported ring multipliers before using them in an estimate." },
  { href: "/pets/", title: "Pets", description: "Keep pet bonuses pending until source proof exists." },
  { href: "/events/", title: "Events", description: "Keep event boosts and Starfall leads pending before calculation." },
  { href: "/mutations/", title: "Mutations", description: "Compare reported Honeycomb, Alien, Farm, Rainbow, and other mutation leads." },
  { href: "/rainbow-mutation/", title: "Rainbow Mutation", description: "Use source status before adding Rainbow into an estimate." },
  { href: "/strong-fertilizer/", title: "Strong Fertilizer", description: "Keep fertilizer inputs reported or player-entered." },
  { href: "/update-status/", title: "Update Status", description: "Check Update 4 pending presets before using reported numbers." }
];

const faq = [
  { q: "Is this Build A Ring Farm calculator official?", a: "No. It is an independent planning tool. Inputs that are not verified stay reported or pending." },
  { q: "What is the Build A Ring Farm calculator formula?", a: "The source-safe formula starts with plant count and observed base value, then applies only player-entered, reported, or pending multipliers. It is an estimate, not an official formula." },
  { q: "Can I use pet bonuses in the calculator?", a: "Only as manual pending inputs. Pet effects should not become verified presets until real in-game proof exists." },
  { q: "Can I use event boosts in the calculator?", a: "Only as manual pending inputs. Starfall, weather, and update event claims need proof before stronger use." },
  { q: "Why are some values missing?", a: "Missing values are safer than fake precision. Exact prices, multipliers, and rewards need source checks first." }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

export default function CalculatorPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero"><div className="hero-copy"><p className="eyebrow">Reported value estimator</p><h1>Build A Ring Farm Calculator</h1><p className="lede">Use this Build A Ring Farm calculator as a reported value estimator for plant count, observed crop value, pending mutation presets, rings, fertilizer, pet or event notes, and repeated harvest planning without fixed official numbers.</p><div className="hero-actions"><Link prefetch={false} className="primary-link" href="/money-farming/">Plan money route</Link><Link prefetch={false} className="secondary-link" href="/events/">Check events</Link></div></div><img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" /></section>
      <section className="guide-card evidence-note-card"><span className="card-rule" /><p className="eyebrow">Status rule</p><h2>Calculator inputs are player-entered, reported, or pending</h2><p>Code rewards, mutation boosts, ring multipliers, crop prices, fertilizer effects, gear prices, pet bonuses, and event boosts must stay reported or pending until official or repeatable in-game evidence exists.</p></section>
      <CalculatorEstimator />
      <section className="content-grid single-column-grid"><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Formula</p><h2>Source-safe calculator formula</h2><div className="data-list">{formulaRows.map((row) => <div className="data-row four-field-row" key={row.step}><div><span>Step</span><strong>{row.step}</strong></div><div><span>Formula part</span><strong>{row.formulaPart}</strong></div><div><span>Meaning</span><strong>{row.meaning}</strong></div><div><span>Status</span><StatusBadge status={row.status} /></div></div>)}</div></article><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Inputs</p><h2>Calculator input checklist</h2><div className="data-list">{estimateRows.map((row) => <div className="data-row three-field-row" key={row.input}><div><span>Input</span><strong>{row.input}</strong></div><div><span>Use</span><strong>{row.use}</strong></div><div><span>Status</span><StatusBadge status={row.status} /></div></div>)}</div></article><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Planner comparison</p><h2>Calculator vs planner intent</h2><div className="data-list">{plannerRows.map((row) => <div className="data-row three-field-row" key={row.topic}><div><span>Topic</span><strong>{row.topic}</strong></div><div><span>Use</span><strong>{row.use}</strong></div><div><span>Risk</span><strong>{row.risk}</strong></div></div>)}</div></article><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Scenarios</p><h2>Reported calculator scenarios</h2><div className="data-list">{scenarioRows.map((row) => <div className="data-row four-field-row" key={row.route}><div><span>Route</span><strong>{row.route}</strong></div><div><span>Estimate</span><strong>{row.estimate}</strong></div><div><span>Note</span><strong>{row.note}</strong></div><div><span>Status</span><StatusBadge status={row.status} /></div></div>)}</div></article><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Pending presets</p><h2>Update 4 pending mutation presets</h2><p>These are planning presets only. Do not treat any multiplier as verified until repeatable in-game evidence exists.</p><div className="data-list">{pendingPresetRows.map((row) => <div className="data-row four-field-row" key={row.mutation}><div><span>Mutation</span><strong>{row.mutation}</strong></div><div><span>Preset</span><strong>{row.preset}</strong></div><div><span>Status</span><StatusBadge status={row.status} /></div><div><span>Note</span><strong>{row.note}</strong></div></div>)}</div></article></section>
      <section className="content-grid">{sections.map((section) => <article className="guide-card" key={section.heading}><span className="card-rule" /><h2>{section.heading}</h2><h3>{section.subheading}</h3>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</section>
      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Calculator route links</h2></section><section className="route-grid" aria-label="Calculator route links">{relatedLinks.map((link) => <Link prefetch={false} className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}</section>
      <section className="faq-section"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Build A Ring Farm Calculator FAQ</h2></div><div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    </main>
  );
}
