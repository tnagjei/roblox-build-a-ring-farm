// input: `/rings/` route request
// output: English rings guide with reported multiplier and upgrade planning labels
// pos: rings route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Rings Guide | Multipliers & Upgrades";
const pageDescription = "Build A Ring Farm rings guide covering reported ring multipliers, upgrade timing, best rings, calculator links, pending values, and safe source status.";
const heroImage = "/images/official-hero-image.webp";
const reportedStatus = "Reported, pending verification";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/rings/") },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/rings/"),
    type: "article",
    images: [{ url: absoluteUrl("/images/official-hero-image.webp"), width: 1200, height: 630, alt: "Build A Ring Farm rings guide" }]
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl("/images/official-hero-image.webp")] }
};

const ringRows = [
  { topic: "Ring multipliers", purpose: "Estimate output changes after ring upgrades.", status: reportedStatus },
  { topic: "Best rings", purpose: "Compare upgrade timing without pretending there is an official ranking.", status: "Pending" },
  { topic: "Ring guide", purpose: "Explain how ring choices affect farm layout, money farming, and calculator estimates.", status: "Strategy" },
  { topic: "Ring multiplier calculator", purpose: "Send numeric estimates to the calculator page for source-aware planning.", status: reportedStatus }
];

const reportedMultiplierRows = [
  { ring: "Base Ring", multiplier: "7x", source: "Competitor reported claim", status: "Pending in-game verification", calculatorUse: "Use only as a reported preset" },
  { ring: "Middle Ring", multiplier: "13x", source: "Competitor reported claim", status: "Pending in-game verification", calculatorUse: "Use only as a reported preset" },
  { ring: "Outer Ring", multiplier: "19x", source: "Competitor reported claim", status: "Pending in-game verification", calculatorUse: "Use only as a reported preset" }
];

const verificationRows = [
  { step: "1", check: "Record ring state", evidence: "Screenshot the visible ring level or ring name before testing." },
  { step: "2", check: "Sell one comparable crop route", evidence: "Record plant count, crop name, mutation state, and sell result." },
  { step: "3", check: "Change only the ring variable", evidence: "Do not add a new mutation, spray, or fertilizer in the same first test." },
  { step: "4", check: "Repeat on another server", evidence: "One result is a lead. Repeatable results can upgrade confidence." }
];

const priorityRows = [
  { stage: "Early", action: "Stabilize crops before chasing ring multipliers.", status: "Strategy" },
  { stage: "Mid", action: "Compare ring upgrades against crop and gear shop ROI.", status: "Strategy" },
  { stage: "Late", action: "Test reported ring multipliers with mutation and event routes one variable at a time.", status: reportedStatus }
];

const sections = [
  {
    heading: "What rings do in Build A Ring Farm",
    subheading: "Ring system intent",
    body: [
      "Many players search for rings, ring multipliers, best rings, and ring guides because the game name itself includes Ring. A separate rings page helps players understand how ring choices may affect farming routes.",
      "This Build A Ring Farm Rings Guide treats ring multipliers as reported or pending until stronger proof exists. It can explain upgrade timing, layout impact, and calculator use without inventing exact multiplier values."
    ],
    list: ["Explain the ring system clearly.", "Keep exact multipliers pending unless verified.", "Link ring estimates to the calculator.", "Connect rings with upgrades and money farming."]
  },
  {
    heading: "Ring multipliers and calculator use",
    subheading: "Do not hard-code weak numbers",
    body: [
      "A ring multiplier is useful only if the base value is clear. If the crop value, mutation value, or ring value is unverified, the final estimate should stay an estimate. That is why this page links to the calculator instead of publishing a fake final profit table.",
      "When you test ring multipliers, change one variable at a time. Record the crop route, current upgrades, ring state, mutation state, and final sell result. One screenshot is a lead. Repeatable proof is what can move a value closer to verified."
    ],
    list: ["Use one ring state per test.", "Do not combine a new mutation and new ring in the same first test.", "Record before and after values.", "Keep unverified multipliers reported or pending."]
  },
  {
    heading: "Best rings without fake certainty",
    subheading: "Upgrade timing first",
    body: [
      "The safest best-rings advice is stage-based rather than absolute. Early players should not spend everything chasing ring multipliers if normal plots are idle. Mid-game players can compare ring upgrades with crop and gear shop ROI. Late-game players can test ring routes with reported mutations.",
      "This is less exciting than saying one ring is always best, but it is more useful. A fixed best-ring claim can become wrong after an update, a gear shop change, or a mutation value change."
    ],
    list: ["Early game: stable crop loop first.", "Mid game: compare ring upgrades with gear shop ROI.", "Late game: test rings with reported mutation routes.", "After updates: recheck before changing rankings."]
  },
  {
    heading: "How rings affect farm layout",
    subheading: "Layout and route planning",
    body: [
      "Rings should be connected to farm layout because layout determines how many active plots can benefit from a route. A strong multiplier on a weak or idle setup can be worse than a simple layout improvement.",
      "Use the farm layout guide for plot planning, the upgrades guide for ROI, the money farming guide for route logic, and this rings page for multiplier questions. This keeps each page focused while still helping players move between decisions."
    ],
    list: ["Do not expand faster than you can keep plots active.", "Use ring routes after stable production.", "Compare rings with upgrades and layout improvements.", "Use calculator estimates for planning only."]
  }
];

const relatedLinks = [
  { href: "/calculator/", title: "Calculator", description: "Estimate reported ring multipliers without treating pending values as official." },
  { href: "/upgrades/", title: "Upgrades", description: "Compare ring upgrades with repeatable ROI decisions." },
  { href: "/farm-layout/", title: "Farm Layout", description: "Plan active plots before assuming a ring route is better." },
  { href: "/money-farming/", title: "Money Farming", description: "Use ring choices inside a broader cash route." },
  { href: "/mutations/", title: "Mutations", description: "Compare reported mutation and ring interactions carefully." }
];

const faq = [
  { q: "Are Build A Ring Farm ring multipliers verified here?", a: "No. Ring multiplier values stay reported or pending until official or repeatable in-game proof exists." },
  { q: "What are the reported ring multipliers?", a: "Some competitor pages report Base Ring 7x, Middle Ring 13x, and Outer Ring 19x. This site keeps those as reported claims, not verified facts." },
  { q: "What are the best rings in Build A Ring Farm?", a: "This page does not publish a verified best-ring ranking. Use stage-based upgrade timing until values are confirmed." },
  { q: "Can rings be used in the calculator?", a: "Yes. Use reported ring multipliers as estimates in the calculator, not as verified values." },
  { q: "Should beginners chase ring upgrades first?", a: "Usually no. Beginners should stabilize crops, selling, and basic upgrades before spending around ring routes." }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

export default function RingsPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Ring multipliers and upgrade route</p>
          <h1>Build A Ring Farm Rings Guide</h1>
          <p className="lede">Use this Build A Ring Farm rings guide to compare reported ring multipliers, upgrade timing, best-ring questions, and calculator links without treating pending values as verified.</p>
          <div className="hero-actions">
            <Link prefetch={false} className="primary-link" href="/calculator/">Open calculator</Link>
            <Link prefetch={false} className="secondary-link" href="/upgrades/">Read upgrades</Link>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="guide-card evidence-note-card">
        <span className="card-rule" />
        <p className="eyebrow">Verification status</p>
        <h2>Ring values are reported or pending</h2>
        <p>Do not treat ring multipliers, best-ring rankings, or upgrade values as verified unless official or repeatable in-game evidence exists.</p>
      </section>

      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Reported watchlist</p>
          <h2>Reported ring multiplier watchlist</h2>
          <p>These values are included because players may see them on competitor pages. They are not marked verified here.</p>
          <div className="data-list">
            {reportedMultiplierRows.map((row) => (
              <div className="data-row four-field-row" key={row.ring}>
                <div><span>Ring</span><strong>{row.ring}</strong></div>
                <div><span>Reported multiplier</span><strong>{row.multiplier}</strong></div>
                <div><span>Source</span><strong>{row.source}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Ring topics</p>
          <h2>Reported ring guide coverage</h2>
          <div className="data-list">
            {ringRows.map((row) => (
              <div className="data-row three-field-row" key={row.topic}>
                <div><span>Topic</span><strong>{row.topic}</strong></div>
                <div><span>Purpose</span><strong>{row.purpose}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Verification log</p>
          <h2>Ring multiplier verification checklist</h2>
          <div className="data-list">
            {verificationRows.map((row) => (
              <div className="data-row three-field-row" key={row.step}>
                <div><span>Step</span><strong>{row.step}</strong></div>
                <div><span>Check</span><strong>{row.check}</strong></div>
                <div><span>Evidence</span><strong>{row.evidence}</strong></div>
              </div>
            ))}
          </div>
        </article>
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Upgrade timing</p>
          <h2>Ring upgrade priority</h2>
          <div className="data-list">
            {priorityRows.map((row) => (
              <div className="data-row three-field-row" key={row.stage}>
                <div><span>Stage</span><strong>{row.stage}</strong></div>
                <div><span>Action</span><strong>{row.action}</strong></div>
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

      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Ring route links</h2></section>
      <section className="route-grid" aria-label="Ring route links">
        {relatedLinks.map((link) => <Link prefetch={false} className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}
      </section>

      <section className="faq-section">
        <div className="section-heading"><p className="eyebrow">FAQ</p><h2>Build A Ring Farm Rings Guide FAQ</h2></div>
        <div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
      </section>
    </main>
  );
}
