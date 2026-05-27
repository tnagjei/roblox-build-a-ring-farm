// input: `/calculator/` route request
// output: English calculator page with reported-only estimate controls and source boundaries
// pos: calculator route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";
import CalculatorEstimator from "@/components/CalculatorEstimator";

const pageTitle = "Build A Ring Farm Calculator | Reported Value Tool";
const pageDescription = "Build A Ring Farm reported value estimator for crop value, plant count, mutation, ring, fertilizer, and run-count planning without fixed official numbers.";
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
  { input: "Mutation", use: "Compare Wet, Frozen, Void, Radioactive, Rainbow, Honeycomb, Alien, or Farm leads.", status: reportedStatus },
  { input: "Ring multiplier", use: "Apply a ring multiplier only after checking the rings page.", status: reportedStatus },
  { input: "Fertilizer", use: "Add only a player-entered or reported fertilizer value.", status: reportedStatus },
  { input: "Run count", use: "Compare repeated harvests without hard-coded cash-per-second claims.", status: "Player-entered" }
];

const scenarioRows = [
  { route: "Early crop loop", estimate: "Use base value only", note: "Best for players still unlocking stable crops.", status: "Pending values" },
  { route: "Mutation test", estimate: "Base value plus reported mutation lead", note: "Do not treat Honeycomb, Alien, or Farm values as official.", status: reportedStatus },
  { route: "Ring route", estimate: "Base value plus reported ring multiplier", note: "Use the rings guide before assuming a multiplier.", status: reportedStatus },
  { route: "Update 3 check", estimate: "No verified code reward added", note: "Use Update 3 code claims only as reported leads.", status: "Pending" }
];

const sections = [
  {
    heading: "How to use the Build A Ring Farm calculator",
    subheading: "Estimate, then verify",
    body: [
      "This Build A Ring Farm calculator is a conservative planning tool, not an official value engine. Use it to compare plant count, your observed base value, reported mutations, and reported ring multipliers before spending cash or changing your farm route.",
      "The safest way to use a calculator page is to treat every unverified number as pending. If a crop value, mutation boost, ring multiplier, spray price, or Update 3 reward has not been checked in-game or posted by an official source, it should remain reported or pending."
    ],
    list: ["Start with plant count.", "Enter your observed base value.", "Add only reported mutation leads.", "Use ring multipliers as pending estimates.", "Check results against real in-game selling."]
  },
  {
    heading: "Why this calculator stays conservative",
    subheading: "Useful estimates without fake certainty",
    body: [
      "Many players want a profit calculator, seed calculator, and ring multiplier calculator because they are trying to decide what to do next. This page gives them a simple estimate workflow without pretending weak data is official.",
      "Seeds, money farming, mutations, rings, and Update 3 status pages can all point here when players need to estimate a route without trusting fake exact numbers."
    ],
    list: ["Seed calculator intent belongs here.", "Profit calculator intent belongs here.", "Ring multiplier calculator intent belongs here.", "Reported and pending labels protect trust."]
  },
  {
    heading: "What the calculator should not claim",
    subheading: "No fake precision",
    body: [
      "Do not publish a final cash-per-second number unless the input values are verified. A precise-looking formula can be more harmful than a plain pending label if the source data is weak.",
      "The current estimator uses player inputs and source labels instead of a hard-coded final value table. That keeps the page useful while avoiding invented prices, invented multipliers, and invented active code rewards."
    ],
    list: ["No official crop prices without proof.", "No verified mutation multiplier unless tested.", "No verified ring multiplier unless tested.", "No active Update 3 code unless verified."]
  },
  {
    heading: "Calculator route checklist",
    subheading: "Before trusting a result",
    body: [
      "A useful calculation starts with a repeatable route. Record the plant count, crop route, current upgrade state, any spray or mutation used, ring state, and the final sell result. If one variable changes, run the route again before comparing it.",
      "This approach is slower than copying a competitor table, but it is safer. It gives you a way to turn reported leads into verified site data later without confusing players today."
    ],
    list: ["Record one route at a time.", "Avoid combining a new spray, event, mutation, and ring in one test.", "Keep screenshots if a value is later promoted.", "Leave weak claims as pending."]
  }
];

const relatedLinks = [
  { href: "/rings/", title: "Rings", description: "Check reported ring multipliers before using them in an estimate." },
  { href: "/money-farming/", title: "Money Farming", description: "Turn calculator estimates into safer cash routes." },
  { href: "/mutations/", title: "Mutations", description: "Compare reported Honeycomb, Alien, Farm, Rainbow, and other mutation leads." },
  { href: "/rainbow-mutation/", title: "Rainbow Mutation", description: "Use source status before adding Rainbow into an estimate." },
  { href: "/strong-fertilizer/", title: "Strong Fertilizer", description: "Keep fertilizer inputs reported or player-entered." },
  { href: "/seeds/", title: "Seeds", description: "Use seed routes as calculator inputs, not verified reward promises." },
  { href: "/update-3-status/", title: "Update 3 Status", description: "Check reported Update 3 code and system claims before using rewards." }
];

const faq = [
  { q: "Is this Build A Ring Farm calculator official?", a: "No. It is an independent planning tool. Inputs that are not verified stay reported or pending." },
  { q: "Can I use reported mutation multipliers?", a: "Yes, but only as estimates. Do not treat reported mutation values as verified unless in-game proof is recorded." },
  { q: "Does the calculator verify Update 3 codes?", a: "No. Update 3 code claims stay pending until official or repeatable in-game proof exists." },
  { q: "Why are some values missing?", a: "Missing values are safer than fake precision. Exact prices, multipliers, and rewards need source checks first." }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

export default function CalculatorPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Reported value estimator</p>
          <h1>Build A Ring Farm Calculator</h1>
          <p className="lede">Use this Build A Ring Farm calculator as a reported value estimator for plant count, observed crop value, mutation, ring, fertilizer, and repeated harvest planning without fixed official numbers.</p>
          <div className="hero-actions">
            <Link prefetch={false} className="primary-link" href="/rings/">Compare rings</Link>
            <Link prefetch={false} className="secondary-link" href="/money-farming/">Plan money route</Link>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="guide-card evidence-note-card">
        <span className="card-rule" />
        <p className="eyebrow">Status rule</p>
        <h2>Calculator inputs are player-entered, reported, or pending</h2>
        <p>Code rewards, mutation boosts, ring multipliers, crop prices, fertilizer effects, and gear prices must stay reported or pending until official or repeatable in-game evidence exists.</p>
      </section>

      <CalculatorEstimator />

      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Inputs</p>
          <h2>Calculator input checklist</h2>
          <div className="data-list">
            {estimateRows.map((row) => (
              <div className="data-row three-field-row" key={row.input}>
                <div><span>Input</span><strong>{row.input}</strong></div>
                <div><span>Use</span><strong>{row.use}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Scenarios</p>
          <h2>Reported calculator scenarios</h2>
          <div className="data-list">
            {scenarioRows.map((row) => (
              <div className="data-row four-field-row" key={row.route}>
                <div><span>Route</span><strong>{row.route}</strong></div>
                <div><span>Estimate</span><strong>{row.estimate}</strong></div>
                <div><span>Note</span><strong>{row.note}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        {sections.map((section) => (
          <article className="guide-card" key={section.heading}>
            <span className="card-rule" />
            <h2>{section.heading}</h2>
            <h3>{section.subheading}</h3>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </section>

      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Calculator route links</h2></section>
      <section className="route-grid" aria-label="Calculator route links">
        {relatedLinks.map((link) => <Link prefetch={false} className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}
      </section>

      <section className="faq-section">
        <div className="section-heading"><p className="eyebrow">FAQ</p><h2>Build A Ring Farm Calculator FAQ</h2></div>
        <div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
      </section>
    </main>
  );
}
