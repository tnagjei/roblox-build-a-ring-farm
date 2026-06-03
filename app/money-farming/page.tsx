// input: `/money-farming/` route request
// output: English money farming guide page with safe progression routes
// pos: money-farming route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Money Farming Guide | Cash Routes";
const pageDescription = "Build A Ring Farm money farming guide covering cash routes, seeds, crop cycles, upgrades, offline income, code rewards, and safe progression.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: absoluteUrl("/money-farming/")
  }
};

const summaryCards = [
  { title: "Keep cash moving", description: "Money farming starts with active crop cycles, not idle plots or unspent seeds." },
  { title: "Upgrade by ROI", description: "Buy upgrades that improve repeated harvest cycles and recover their cost faster." },
  { title: "Use offline income carefully", description: "Offline earnings help momentum, but rare effects and exact values still need verification." }
];

const routeRows = [
  {
    stage: "First 10 Minutes",
    goal: "Start a repeatable cash loop before chasing rare outcomes.",
    whatToDo: "Keep every available plot active, harvest on time, sell quickly, and reinvest only into basic upgrades that help the next cycle.",
    avoid: "Do not wait for a perfect rare crop, spend around unverified code rewards, or buy unclear spray routes before the base loop works.",
    upgrade: "Upgrade when the purchase improves repeated harvests instead of one lucky run.",
    calculator: "Use the calculator only with values you can see in game; otherwise keep the multiplier at 1.",
    evidenceStatus: "Strategy, exact crop prices and grow times need verification"
  },
  {
    stage: "First 1 Hour",
    goal: "Turn early cash into a stable route with fewer idle plots.",
    whatToDo: "Compare seed choices, crop cycle comfort, basic upgrades, and selling rhythm before testing community reported bonuses.",
    avoid: "Do not build the plan around third-party code rewards, fixed best-crop claims, or exact income numbers that are not verified here.",
    upgrade: "Upgrade when the farm can stay active after the purchase and the next cycles feel faster or easier to repeat.",
    calculator: "Use the calculator to compare your observed base value against simple 1x and reported multiplier scenarios.",
    evidenceStatus: "Strategy with Community reported reward leads"
  },
  {
    stage: "Mid Game Upgrade Route",
    goal: "Improve crop cycle value while keeping cash flow predictable.",
    whatToDo: "Review crops, upgrades, fertilizer, and gear shop choices as route inputs, then test one change at a time.",
    avoid: "Do not combine a new spray, mutation, ring, and fertilizer in one test because the result cannot be traced cleanly.",
    upgrade: "Upgrade when the same purchase helps multiple harvest cycles or reduces repeated bottlenecks.",
    calculator: "Use the calculator before expensive upgrades to compare player-entered base values with pending multipliers.",
    evidenceStatus: "Needs verification for prices, multipliers, and upgrade costs"
  },
  {
    stage: "Late Game Rare Crop Route",
    goal: "Test rare crop and mutation routes without turning reported claims into facts.",
    whatToDo: "Use advanced crops, sprays, and mutation guides to plan controlled tests around reported rare effects.",
    avoid: "Do not call any rare crop the fixed best crop unless price, grow time, and multiplier evidence all support it.",
    upgrade: "Upgrade only after the normal farming route is strong enough that rare-effect testing does not stall progress.",
    calculator: "Use the calculator to compare reported rare-effect presets as planning estimates, not verified profit results.",
    evidenceStatus: "Community reported and Pending until in-game evidence exists"
  },
  {
    stage: "Offline Income Route",
    goal: "Protect momentum while offline without inventing exact rates.",
    whatToDo: "Before leaving, keep plots active, avoid stalled cycles, and favor upgrades that still support the next login.",
    avoid: "Do not assume rare effects, weather events, sprays, or mutations trigger offline without a repeatable test.",
    upgrade: "Upgrade before logging off only when the farm remains stable and the purchase supports normal crop cycles.",
    calculator: "Use the calculator after logging back in to compare observed results against your expected route.",
    evidenceStatus: "Official direction supports offline earnings, exact rates need verification"
  },
  {
    stage: "When to Use Calculator",
    goal: "Use estimates to choose between routes without fake precision.",
    whatToDo: "Enter plant count, observed base value, and only the multipliers you can label as player-entered, reported, or pending.",
    avoid: "Do not add fixed crop prices, grow time, upgrade cost, or income per minute unless you have real evidence.",
    upgrade: "Use the estimate before a major spend, then recheck the result in game after the next harvest cycle.",
    calculator: "Open the Build A Ring Farm calculator when two routes look close and you need a controlled comparison.",
    evidenceStatus: "Estimator only; final profit optimization needs verified data"
  }
];

const mistakeRows = [
  { mistake: "Chasing rare effects too early", whyItHurts: "It can delay basic crop loops and upgrades before you have enough cash flow." },
  { mistake: "Buying gear without ROI logic", whyItHurts: "A high price item can slow progress if it does not improve repeated crop cycles." },
  { mistake: "Trusting every code list", whyItHurts: "Third-party rewards can change or expire, so they should be rechecked before planning around them." },
  { mistake: "Leaving plots idle", whyItHurts: "Idle plots usually mean lost cash cycles, especially in the early game." }
];

const sections = [
  {
    heading: "How money farming works in Build A Ring Farm",
    subheading: "Cash loop basics",
    body: [
      "Money farming in Build A Ring Farm is the process of turning seeds into crops, crops into cash, and cash into upgrades that improve the next cycle.",
      "The official game page confirms the core loop of growing plants, harvesting, upgrading, expanding, selling plants for cash, and earning while offline. Exact per-second earnings and best-crop values are not published on the official page, so this guide avoids fake income numbers."
    ],
    list: ["Plant seeds or crops.", "Harvest when ready.", "Sell plants for cash.", "Reinvest cash into better crop cycles and upgrades.", "Use offline income as a progress booster."]
  },
  {
    heading: "Why this route avoids fixed best-crop claims",
    subheading: "No fake precision",
    body: [
      "A fixed best-crop answer is not reliable unless crop sell value, grow time, upgrade state, multiplier behavior, and availability are all verified. This page keeps the advice stage-based until that evidence exists.",
      "Use the calculator and route checks to compare what you observe in game. Treat community reported values as planning leads, not final income proof."
    ],
    list: ["No fixed best-crop claim without evidence.", "No cash-per-second claim without verified timing.", "No verified multiplier label without official or repeatable proof.", "Community reported values stay clearly labeled."]
  },
  {
    heading: "When codes can help money farming",
    subheading: "Rewards as bonus progress",
    body: [
      "Some third-party code pages report rewards such as cash, fertilizer, sprays, time skips, or seed packs. These rewards can support money farming, but the exact active-code status should be checked before relying on them.",
      "Use codes as a bonus source of progress, not as the foundation of your money route. Codes can expire, rewards can change, and community lists can disagree."
    ],
    list: ["Check the codes page before planning around rewards.", "Treat third-party code rewards as community reported until rechecked.", "Use seed packs and sprays as progression boosts, not guaranteed long-term income."]
  },
  {
    heading: "Advanced money route: crops, gear, and rare effects",
    subheading: "Late route checks",
    body: [
      "Once your basic crop cycle is stable, the next step is to compare crop value, gear shop choices, and reported rare crop effects. This is where ROI matters most.",
      "A reported high-value effect is not automatically the best choice. You still need to consider trigger difficulty, event timing, spray cost, and whether the same cash could improve normal farming more reliably."
    ],
    list: ["Use the crops guide for base farming decisions.", "Use the gear shop guide for sprays and item timing.", "Use advanced crops for community reported rare values.", "Recheck everything after major updates."]
  }
];

const relatedLinks = [
  { href: "/calculator/", title: "Calculator", description: "Compare player-entered values and reported multipliers before changing route." },
  { href: "/seeds/", title: "Seeds", description: "Choose seed packs and seed routes that support cash flow." },
  { href: "/crops/", title: "Crops", description: "Understand the crop loop behind every money route." },
  { href: "/gear-shop/", title: "Gear Shop", description: "Compare sprays, fertilizer, and item ROI before spending cash." },
  { href: "/sprays/", title: "Sprays", description: "Treat spray effects as reported until stronger source evidence exists." },
  { href: "/strong-fertilizer/", title: "Strong Fertilizer", description: "Keep fertilizer effects source-labeled before using them in cash routes." },
  { href: "/rainbow-mutation/", title: "Rainbow Mutation", description: "Treat rare-effect routes as reported until stronger evidence exists." },
  { href: "/upgrades/", title: "Upgrades", description: "Compare upgrade cost against repeated cycle value." },
  { href: "/advanced-crops/", title: "Advanced Crops", description: "Review community reported rare effects and value boosts." },
  { href: "/offline-income/", title: "Offline Income", description: "Keep offline earning rates broad until repeatable tests exist." },
  { href: "/codes/", title: "Codes", description: "Check code rewards that may support progression." }
];

const faq = [
  { q: "What is the best way to make money in Build A Ring Farm?", a: "The safest general route is to keep plots active, harvest consistently, sell crops, and reinvest into upgrades that improve repeated crop cycles." },
  { q: "Can codes help money farming?", a: "Yes, if active codes provide cash, seed packs, sprays, fertilizer, or time skips. But code rewards should be rechecked before relying on them." },
  { q: "Should beginners chase rare crop effects?", a: "Usually not first. Beginners should stabilize the basic crop loop before spending heavily on rare-effect strategies." },
  { q: "Does this guide list exact cash-per-second values?", a: "No. Exact income values are not official-source verified here, so this guide focuses on route logic instead of fake numbers." }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

export default function MoneyFarmingPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Cash and progression guide</p>
          <h1>Build A Ring Farm Money Farming Guide</h1>
          <p className="lede">
            Use this Build A Ring Farm money farming guide to plan cash routes through seeds, crops, upgrades, rare crop effects, code rewards, and offline income without relying on fake per-second numbers.
          </p>
          <div className="hero-actions">
            <Link prefetch={false} className="primary-link" href="/upgrades/">Read upgrades guide</Link>
            <Link prefetch={false} className="secondary-link" href="/calculator/">Open calculator</Link>
          </div>
        </div>
        <img className="hero-image" src={siteData.assets.hero} alt={`${siteData.game.name} Roblox thumbnail`} />
      </section>

      <section className="research-grid" aria-label="Money farming summary">
        {summaryCards.map((card) => (
          <article className="research-card" key={card.title}>
            <span className="card-rule" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="section-heading">
        <p className="eyebrow">Route map</p>
        <h2>Money farming route by player stage</h2>
      </section>
      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Stage checklist</p>
          <h2>First 10 minutes to late-game route</h2>
          <div className="data-list">
            {routeRows.map((row) => (
              <div className="data-row three-field-row" key={row.stage}>
                <div><span>Stage</span><strong>{row.stage}</strong></div>
                <div><span>Goal</span><strong>{row.goal}</strong></div>
                <div><span>Evidence status</span><StatusBadge status={row.evidenceStatus} /></div>
                <div><span>What to do</span><strong>{row.whatToDo}</strong></div>
                <div><span>What to avoid</span><strong>{row.avoid}</strong></div>
                <div><span>When to upgrade</span><strong>{row.upgrade}</strong></div>
                <div><span>When to use calculator</span><strong>{row.calculator}</strong></div>
              </div>
            ))}
          </div>
          <p className="source-note">Use the <Link prefetch={false} href="/calculator/">Build A Ring Farm calculator</Link> only with player-entered, Community reported, Pending, or Needs verification inputs. Do not turn an estimate into a verified income claim without proof.</p>
        </article>

        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Avoid</p>
          <h2>Money farming mistakes</h2>
          <div className="data-list">
            {mistakeRows.map((row) => (
              <div className="data-row three-field-row" key={row.mistake}>
                <div><span>Mistake</span><strong>{row.mistake}</strong></div>
                <div><span>Why it hurts</span><strong>{row.whyItHurts}</strong></div>
                <div><span>Fix</span><strong>Use route logic before chasing hype.</strong></div>
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

      <section className="section-heading">
        <p className="eyebrow">Related guides</p>
        <h2>What to read next</h2>
      </section>
      <section className="route-grid" aria-label="Related guides">
        {relatedLinks.map((link) => (
          <Link prefetch={false} className="route-card" href={link.href} key={link.href}>
            <span className="card-rule" />
            <h2>{link.title}</h2>
            <p>{link.description}</p>
          </Link>
        ))}
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Build A Ring Farm Money Farming Guide FAQ</h2>
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
