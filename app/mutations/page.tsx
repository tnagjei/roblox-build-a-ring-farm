// input: `/mutations/` route request
// output: English mutations guide with cross-source community reported effect logic and source boundaries
// pos: mutations route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Mutations List | Effects & Sprays";
const pageDescription = "Build A Ring Farm mutations list covering reported Rainbow, Honeycomb, Wet, Frozen, spray routes, weather event leads, stacking checks, and source status.";
const heroImage = "/images/official-hero-image.webp";
const crossSourceStatus = "Cross-source community reported";
const competitorReportedStatus = "Competitor reported, pending verification";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/mutations/") },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/mutations/"),
    type: "article",
    images: [{ url: absoluteUrl("/images/official-hero-image.webp"), width: 1200, height: 630, alt: "Build A Ring Farm mutations guide" }]
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl("/images/official-hero-image.webp")] }
};

const mutationRows = [
  { mutation: "Honeycomb", tier: "S lead", route: "Update 3 and Queen Bee event lead", status: "Reported, pending verification" },
  { mutation: "Alien", tier: "A lead", route: "Update 3 mutation lead", status: "Reported, pending verification" },
  { mutation: "Farm mutation", tier: "A lead", route: "Update 3 farming route lead", status: "Reported, pending verification" },
  { mutation: "Rainbow", tier: "S", route: "Galaxy event or Rainbow Spray lead", status: crossSourceStatus },
  { mutation: "Radioactive", tier: "A", route: "Nuclear event or Radioactive Spray lead", status: crossSourceStatus },
  { mutation: "Void", tier: "B", route: "Black Hole event or Void Spray lead", status: crossSourceStatus },
  { mutation: "Frozen", tier: "C", route: "Blizzard event or Frozen Spray lead", status: crossSourceStatus },
  { mutation: "Wet", tier: "D", route: "Rain event or Wet Spray lead", status: crossSourceStatus }
];

const multiplierRows = [
  { mutation: "Honeycomb", multiplier: "6.5x", trigger: "Queen Bee or Update 3 lead", chance: "Pending", status: competitorReportedStatus },
  { mutation: "Rainbow", multiplier: "5x", trigger: "Galaxy event or Rainbow Spray lead", chance: "Pending", status: crossSourceStatus },
  { mutation: "Farm", multiplier: "4x", trigger: "Update 3 farming route lead", chance: "Pending", status: competitorReportedStatus },
  { mutation: "Alien", multiplier: "3.25x", trigger: "Update 3 mutation lead", chance: "Pending", status: competitorReportedStatus },
  { mutation: "Radioactive", multiplier: "3x", trigger: "Nuclear event or Radioactive Spray lead", chance: "Pending", status: crossSourceStatus },
  { mutation: "Void", multiplier: "2.25x", trigger: "Black Hole event or Void Spray lead", chance: "Pending", status: crossSourceStatus },
  { mutation: "Autumn", multiplier: "2x", trigger: "Autumn Spray or seasonal lead", chance: "Pending", status: competitorReportedStatus },
  { mutation: "Frozen", multiplier: "1.75x", trigger: "Blizzard event or Frozen Spray lead", chance: "Pending", status: crossSourceStatus },
  { mutation: "Wet", multiplier: "1.5x", trigger: "Rain event or Wet Spray lead", chance: "Pending", status: crossSourceStatus }
];

const stackingChecks = [
  { step: "1", check: "Record the crop before testing", evidence: "Screenshot crop name, visible effect, and starting value." },
  { step: "2", check: "Record the trigger", evidence: "Note whether the mutation came from a spray, weather event, or unknown source." },
  { step: "3", check: "Test one variable only", evidence: "Do not combine a new spray, weather event, and upgrade in the same test." },
  { step: "4", check: "Compare before and after", evidence: "Record crop value after the mutation and after selling." },
  { step: "5", check: "Repeat on another server", evidence: "One screenshot is a lead, not proof." }
];

const verificationLogRows = [
  { lead: "Honeycomb", nextCheck: "Confirm Queen Bee trigger and multiplier", requiredEvidence: "Video or screenshots showing crop, trigger, before value, after value, and server date." },
  { lead: "Alien", nextCheck: "Confirm trigger source and multiplier", requiredEvidence: "Repeatable in-game test with one changed variable." },
  { lead: "Farm", nextCheck: "Separate Farm mutation from the game name", requiredEvidence: "Clear UI evidence that Farm is a mutation label, not generic wording." },
  { lead: "Queen Bee event", nextCheck: "Confirm event existence and mutation relation", requiredEvidence: "Event screenshot, mutation output, and sell result." }
];

const sections = [
  { h2: "What are mutations in Build A Ring Farm?", h3: "Mutation meaning", body: ["Mutations are cross-source community reported rare crop effects that may change crop value or route priority. This page treats mutation names as research leads, not official Roblox data.", "The safest way to understand Build A Ring Farm mutations is to connect them with sprays, weather events, advanced crops, and tier-list logic without pretending the exact numbers are confirmed."], list: ["Use mutations as rare-effect leads.", "Do not treat multipliers as official unless verified.", "Compare mutations with spray cost and event timing."] },
  { h2: "Build A Ring Farm mutation route by player stage", h3: "Beginner, mid-game, late-game", body: ["Beginners should not chase mutations first. The better route is to stabilize seeds, crops, selling, and upgrades before spending time on rare-effect testing.", "Mid-game players can start comparing Wet, Frozen, and Void routes if their base cash loop is stable. Late-game players can compare Radioactive and Rainbow leads only after checking spray cost, event timing, and crop value."], list: ["Beginner: crops, selling, upgrades.", "Mid-game: test lower-risk effect routes.", "Late-game: compare high-value mutation leads.", "Always recheck after updates."] },
  { h2: "Can mutations stack?", h3: "Stacking is unverified", body: ["Stacking behavior is one of the highest-risk claims. Unless repeatable in-game tests prove it, mutation stacking should stay marked as needs verification.", "A useful test should record the crop, active event, spray used, before value, after value, and whether the result persists offline."], list: ["Do not write guaranteed stacking.", "Do not copy stacking claims from competitors.", "Record screenshots before promoting a claim."] },
  { h2: "Update 3 mutation leads", h3: "Honeycomb, Alien, and Farm are pending", body: ["Honeycomb mutation, Alien mutation, and Farm mutation are useful recheck leads because players may see these terms on other guide pages. They should not be treated as official mutation data without stronger evidence.", "Use these names as recheck leads. If future in-game tests confirm behavior, record the date, crop, trigger, before value, after value, and source before changing the status."], list: ["Honeycomb mutation: reported, pending verification.", "Alien mutation: reported, pending verification.", "Farm mutation: reported, pending verification."] },
  { h2: "Mutations vs sprays and weather events", h3: "Two trigger paths", body: ["Multiple community sources connect mutations to both sprays and weather events. Sprays may directly test an effect, while events may trigger similar effects through timing or chance.", "This creates a clear internal-link cluster: sprays explain item use, weather events explain event routes, advanced crops explain value context, and this page explains mutation intent."], list: ["Wet connects to Rain and Wet Spray.", "Frozen connects to Blizzard and Frozen Spray.", "Rainbow connects to Galaxy and Rainbow Spray."] },
  { h2: "What still needs verification", h3: "Pending evidence", body: ["A strong mutation page needs exact effect behavior, confirmed values, stacking rules, offline behavior, and update history. Until then, this page should remain source-aware and conservative.", "If future tests confirm a mutation, record the source, date, test method, and result before changing its status."], list: ["Exact mutation values.", "Stacking rules.", "Offline behavior.", "Event and spray interactions."] }
];

const relatedLinks = [
  { href: "/sprays/", title: "Sprays", description: "Compare spray effects with mutation routes." },
  { href: "/rainbow-mutation/", title: "Rainbow Mutation", description: "Review the Rainbow effect as a specific reported lead." },
  { href: "/advanced-crops/", title: "Advanced Crops", description: "Review cross-source community reported rare effect values." },
  { href: "/weather-events/", title: "Weather Events", description: "Compare mutation effects with event routes." },
  { href: "/tier-list/", title: "Tier List", description: "Use cross-source community reported tiers as a planning layer." },
  { href: "/gear-shop/", title: "Gear Shop", description: "Judge whether sprays and gear are worth buying." },
  { href: "/money-farming/", title: "Money Farming", description: "Check whether rare-effect chasing fits the cash route." }
];

const faq = [
  { q: "Are Build A Ring Farm mutations official on this site?", a: "No. Mutation effects are cross-source community reported until official notes or in-game evidence confirms them." },
  { q: "What is the strongest reported mutation?", a: "Some competitor pages report Honeycomb or Rainbow as high-value leads. This site treats those as reported claims until tested." },
  { q: "Is Honeycomb 6.5x verified here?", a: "No. Honeycomb 6.5x is listed only as a competitor reported claim and remains pending until repeatable in-game proof exists." },
  { q: "Can mutations stack?", a: "Stacking behavior has not been verified here. Treat stacking claims as needs verification." },
  { q: "Are Honeycomb, Alien, and Farm mutations verified?", a: "No. They are reported Update 3 leads here and remain pending until official or repeatable in-game proof exists." },
  { q: "Should beginners chase mutations?", a: "No. Beginners should stabilize crops, selling, and upgrades before chasing rare effects." }
];

function Badge({ value }: { value: string }) { return <span className="source-badge">{value}</span>; }

export default function MutationsPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero"><div className="hero-copy"><p className="eyebrow">Mutation effects guide</p><h1>Build A Ring Farm Mutations Guide</h1><p className="lede">Compare cross-source community reported Build A Ring Farm mutations, effect tiers, spray routes, weather event links, stacking questions, and source status without treating any mutation claim as official.</p><div className="hero-actions"><Link prefetch={false} className="primary-link" href="/sprays/">Read sprays</Link><Link prefetch={false} className="secondary-link" href="/tier-list/">Read tier list</Link></div></div><img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" /></section>
      <section className="guide-card evidence-note-card"><span className="card-rule" /><p className="eyebrow">Evidence note</p><h2>Mutation data is cross-source community reported</h2><p>No official mutation table has been confirmed here. Use this page as a planning and verification guide.</p></section>
      <section className="content-grid single-column-grid">
        <article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Reported multiplier matrix</p><h2>Reported mutation multiplier matrix</h2><p>These multiplier values are tracking leads. Do not treat them as official until repeatable in-game evidence exists.</p><div className="data-list">{multiplierRows.map((row) => <div className="data-row four-field-row" key={row.mutation}><div><span>Mutation</span><strong>{row.mutation}</strong></div><div><span>Reported multiplier</span><strong>{row.multiplier}</strong></div><div><span>Trigger</span><strong>{row.trigger}</strong></div><div><span>Status</span><Badge value={row.status} /></div></div>)}</div></article>
        <article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Cross-source table</p><h2>Reported mutation tiers</h2><div className="data-list">{mutationRows.map((row) => <div className="data-row four-field-row" key={row.mutation}><div><span>Mutation</span><strong>{row.mutation}</strong></div><div><span>Tier lead</span><strong>{row.tier}</strong></div><div><span>Route</span><strong>{row.route}</strong></div><div><span>Status</span><Badge value={row.status} /></div></div>)}</div></article>
        <article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Verification log</p><h2>Mutation verification log</h2><div className="data-list">{verificationLogRows.map((row) => <div className="data-row three-field-row" key={row.lead}><div><span>Lead</span><strong>{row.lead}</strong></div><div><span>Next check</span><strong>{row.nextCheck}</strong></div><div><span>Required evidence</span><strong>{row.requiredEvidence}</strong></div></div>)}</div></article>
        <article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Test checklist</p><h2>Mutation stacking test checklist</h2><div className="data-list">{stackingChecks.map((row) => <div className="data-row three-field-row" key={row.step}><div><span>Step</span><strong>{row.step}</strong></div><div><span>Check</span><strong>{row.check}</strong></div><div><span>Evidence</span><strong>{row.evidence}</strong></div></div>)}</div></article>
      </section>
      <section className="content-grid">{sections.map((section) => <article className="guide-card" key={section.h2}><span className="card-rule" /><h2>{section.h2}</h2><h3>{section.h3}</h3>{section.body.map((p) => <p key={p}>{p}</p>)}<ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</section>
      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>What to read next</h2></section><section className="route-grid">{relatedLinks.map((link) => <Link prefetch={false} className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}</section>
      <section className="faq-section"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Build A Ring Farm Mutations Guide FAQ</h2></div><div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    </main>
  );
}
