// input: `/advanced-crops/` route request
// output: English advanced crops guide page with safe source boundaries
// pos: advanced-crops route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Advanced Crops Guide | Rare Effects";
const pageDescription = "Build A Ring Farm advanced crops guide for Roblox players. Learn rare crop effects, value boosts, event timing, sprays, offline limits, and safe source checks.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: absoluteUrl("/advanced-crops/")
  }
};

const summaryCards = [
  { title: "Rare crop effects", description: "Track visual or value-changing crop states without inventing exact odds." },
  { title: "Event timing", description: "Separate normal farming from limited events, weather, boosts, or timed systems." },
  { title: "Spray checks", description: "Record what sprays or gear do only after in-game evidence is available." }
];

const sections = [
  {
    heading: "How advanced crops should be judged",
    body: [
      "Advanced crops are useful only when they change expected value, farming speed, or progression decisions. A rare effect that looks good but does not improve cash flow may not be worth chasing early.",
      "The safest approach is to treat every rare effect as pending until the site records source evidence. That evidence can be an official note, a repeatable in-game test, or a clearly documented screenshot set."
    ],
    list: ["Does the crop sell for more?", "Does the effect appear only during an event?", "Does gear or spray improve the result?", "Can the result happen while offline?"]
  },
  {
    heading: "Tier list logic without fake numbers",
    body: [
      "Competitor pages often use a tier list because it is easy for players to scan. This page can use the same structure later, but the current safe version explains the ranking logic instead of inventing exact tiers.",
      "A useful tier list should compare repeatability, value boost, trigger difficulty, gear cost, and whether the effect helps normal farming or only rare situations."
    ],
    list: ["High tier: repeatable value boost with clear farming use.", "Medium tier: useful but dependent on timing, gear, or event state.", "Low tier: visually interesting but weak for cash recovery.", "Pending tier: not enough verified data yet."]
  },
  {
    heading: "Gear shop sprays and rare crop value",
    body: [
      "Some guides discuss spray-like items or gear shop tools as ways to improve special crop outcomes. That is a useful topic, but exact item effects must be verified before being written as facts.",
      "Until item behavior is recorded, describe the decision rule: buy only if the tool improves repeated crop cycles, improves expected value, or helps recover its cost faster than basic upgrades."
    ],
    list: ["Check whether the item affects one crop or many cycles.", "Check whether the result is event-only.", "Check whether offline progress changes the outcome.", "Do not publish copied odds without source notes."]
  },
  {
    heading: "Offline limits and event effects",
    body: [
      "Players care whether rare crop effects can happen while offline. This is a high-value question, but it needs direct testing because Roblox simulator systems often handle offline progress differently from active play.",
      "For now, offline claims should stay pending. When tested, record the date, version state, starting crop, offline duration, and final result before updating the page."
    ],
    list: ["Record before and after screenshots.", "Test active play separately from offline progress.", "Repeat after major updates.", "Keep uncertain claims clearly labeled as pending."]
  }
];

const relatedLinks = [
  { href: "/crops/", title: "Crops", description: "Start with the normal crop loop before chasing rare effects." },
  { href: "/upgrades/", title: "Upgrades", description: "Compare gear and spray value against basic upgrade ROI." },
  { href: "/updates/", title: "Updates", description: "Check update notes that may change rare crop behavior." },
  { href: "/codes/", title: "Codes", description: "Review verified code status before using code claims for progression." }
];

const faq = [
  { q: "What are advanced crops in Build A Ring Farm?", a: "Advanced crops are crops with rare effects, higher value behavior, event interactions, or gear-related outcomes that need verification before exact values are published." },
  { q: "Is there a verified advanced crop tier list?", a: "Not yet. This page explains ranking logic but does not publish a fixed tier list until values and triggers are verified." },
  { q: "Can sprays improve crop value?", a: "Spray and gear effects should be tested in-game before being treated as facts. This page keeps unverified item effects pending." },
  { q: "Can rare crop effects happen offline?", a: "Offline behavior is not verified here yet. It should be tested separately from active play before publishing a claim." }
];

export default function AdvancedCropsPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Advanced crop effects guide</p>
          <h1>Build A Ring Farm Advanced Crops Guide</h1>
          <p className="lede">
            Use this Build A Ring Farm advanced crops guide to understand rare crop effects, event-based value boosts, sprays, and why exact multipliers should be verified before publishing.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="/upgrades/">Read upgrades guide</Link>
            <Link className="secondary-link" href="/crops/">Read crops guide</Link>
          </div>
        </div>
        <img className="hero-image" src={siteData.assets.hero} alt={`${siteData.game.name} Roblox thumbnail`} />
      </section>

      <section className="research-grid" aria-label="Advanced crop effects summary">
        {summaryCards.map((card) => (
          <article className="research-card" key={card.title}>
            <span className="card-rule" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="content-grid">
        {sections.map((section) => (
          <article className="guide-card" key={section.heading}>
            <span className="card-rule" />
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </section>

      <section className="section-heading">
        <p className="eyebrow">Related guides</p>
        <h2>What to read next</h2>
      </section>
      <section className="route-grid" aria-label="Related guides">
        {relatedLinks.map((link) => (
          <Link className="route-card" href={link.href} key={link.href}>
            <span className="card-rule" />
            <h2>{link.title}</h2>
            <p>{link.description}</p>
          </Link>
        ))}
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Build A Ring Farm Advanced Crops Guide FAQ</h2>
        </div>
        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
