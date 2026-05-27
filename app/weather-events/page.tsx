// input: `/weather-events/` route request
// output: English weather events guide page with cross-source community reported event data
// pos: weather-events route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Build A Ring Farm Weather Events Guide | Event Effects";
const pageDescription = "Build A Ring Farm weather events guide covering Rain, Blizzard, Galaxy, cross-source reported effects, chances, rare crop value, sprays, and source checks.";
const heroImage = "/images/official-hero-image.webp";
const crossSourceStatus = "Cross-source community reported";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://www.buildaringfarm.org/weather-events/"
  }
};

const summaryCards = [
  { title: "Cross-source community reported odds", description: "Event chances below appear across multiple community sources but should not be treated as official Roblox values." },
  { title: "Rare crop effects", description: "Weather and event effects can connect to rare crop value, sprays, and advanced crop routes." },
  { title: "Offline limit checks", description: "Offline earnings are official, but offline event triggering needs separate verification." }
];

const eventRows = [
  { eventName: "Queen Bee Event", reportedEffect: "Honeycomb", reportedChance: "Pending", reportedValue: "Pending", status: "Reported, pending verification" },
  { eventName: "Rain Event", reportedEffect: "Wet", reportedChance: "8%", reportedValue: "1.5x", status: crossSourceStatus },
  { eventName: "Blizzard Event", reportedEffect: "Frozen", reportedChance: "4%", reportedValue: "1.75x", status: crossSourceStatus },
  { eventName: "Black Hole Event", reportedEffect: "Void", reportedChance: "3%", reportedValue: "2.25x", status: crossSourceStatus },
  { eventName: "Nuclear Event", reportedEffect: "Radioactive", reportedChance: "2%", reportedValue: "3x", status: crossSourceStatus },
  { eventName: "Galaxy Event", reportedEffect: "Rainbow", reportedChance: "1%", reportedValue: "5x", status: crossSourceStatus }
];

const sections = [
  {
    heading: "How weather events fit into Build A Ring Farm",
    subheading: "Event role in farming",
    body: [
      "Weather events are useful because they may change crop outcomes, rare crop effects, and farming value. Multiple community sources report that events such as Rain, Blizzard, Black Hole, Nuclear, and Galaxy can connect to specific rare crop effects.",
      "The official Roblox page confirms the broad farming loop and offline earnings, but it does not publish event odds or rare effect values. Treat the event table as cross-source community reported until official notes, developer posts, or in-game screenshots confirm it."
    ],
    list: ["Events can affect rare crop outcomes.", "Reported odds are not official confirmation.", "Event data should be rechecked after updates.", "Offline event behavior needs separate testing."]
  },
  {
    heading: "Best way to use event information",
    subheading: "Event planning rule",
    body: [
      "Do not plan your entire money route around a low-chance event. Use event information as a bonus layer on top of normal farming, seeds, crops, upgrades, and money farming routes.",
      "If a reported event effect appears, compare it with spray costs and crop value before spending more. A strong event effect on a weak crop may still be worse than a steady upgrade path."
    ],
    list: ["Keep normal crop cycles active.", "Use events as value boosts, not as the core route.", "Compare event effects with spray and upgrade costs.", "Prioritize repeatable cash flow before rare outcomes."]
  },
  {
    heading: "Events, sprays, and advanced crops",
    subheading: "How effects overlap",
    body: [
      "Weather events overlap with advanced crops because both can affect rare crop value. Sprays may apply specific effects directly, while events may trigger effects through timing or chance.",
      "That makes the event page part of the same SEO cluster as advanced crops, upgrades, gear shop, and money farming. The safest content strategy is to show the reported data, label its status, and link to the deeper pages."
    ],
    list: ["Use advanced crops for reported value boosts.", "Use gear shop for spray decisions.", "Use upgrades for ROI decisions.", "Use this page for event timing and chance leads."]
  },
  {
    heading: "Update 3 event leads",
    subheading: "Queen Bee and Honeycomb are pending",
    body: [
      "The keyword report calls out Queen Bee event and Honeycomb mutation as P1 freshness opportunities. They belong on this page as reported leads, not as confirmed event odds or official values.",
      "If a Queen Bee event appears in future in-game checks, record the server date, crop state, event text, visible effect, and sell result before changing any wording from pending."
    ],
    list: ["Queen Bee event: reported, pending verification.", "Honeycomb effect: reported, pending verification.", "Event odds: pending.", "Event value: pending."]
  },
  {
    heading: "What still needs verification",
    subheading: "Pending evidence",
    body: [
      "The most important missing evidence is whether the reported event odds are still current after updates, whether event effects can trigger while offline, and whether event effects stack with sprays or other systems.",
      "Until that evidence exists, avoid writing confirmed language such as official odds, guaranteed effects, or best event route. Use cross-source community reported, pending, or needs verification instead."
    ],
    list: ["Exact event odds.", "Whether effects trigger offline.", "Whether effects stack with sprays.", "Whether values changed after the latest update."]
  }
];

const relatedLinks = [
  { href: "/advanced-crops/", title: "Advanced Crops", description: "Review rare crop values, sprays, and cross-source community reported effects." },
  { href: "/gear-shop/", title: "Gear Shop", description: "Compare sprays and gear shop choices with event effects." },
  { href: "/upgrades/", title: "Upgrades", description: "Compare upgrades and ROI with event effects." },
  { href: "/money-farming/", title: "Money Farming", description: "Build a cash route that does not depend only on random events." },
  { href: "/crops/", title: "Crops", description: "Understand the normal crop cycle before optimizing event effects." },
  { href: "/updates/", title: "Updates", description: "Recheck events after Roblox or developer updates." }
];

const faq = [
  { q: "Are Build A Ring Farm weather event odds official?", a: "No. The odds on this page are cross-source community reported and should be rechecked after updates." },
  { q: "Which weather event has the strongest reported effect?", a: "Multiple community sources report Galaxy Event as connected to Rainbow, with a reported 5x value effect, but this is not official-source verified here." },
  { q: "Can weather events happen while offline?", a: "Offline event behavior is not verified here yet. The official page confirms offline earnings, but not offline rare event triggering." },
  { q: "Is the Queen Bee event verified?", a: "No. Queen Bee is treated as a reported Update 3 event lead and remains pending until stronger evidence exists." },
  { q: "Should beginners focus on weather events?", a: "No. Beginners should stabilize seeds, crops, selling, and upgrades before planning around rare event outcomes." }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

export default function WeatherEventsPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Weather and event guide</p>
          <h1>Build A Ring Farm Weather Events Guide</h1>
          <p className="lede">
            Use this Build A Ring Farm weather events guide to review cross-source community reported Rain, Blizzard, Black Hole, Nuclear, and Galaxy event effects without treating unverified odds as official facts.
          </p>
          <div className="hero-actions">
            <Link prefetch={false} className="primary-link" href="/advanced-crops/">Read advanced crops</Link>
            <Link prefetch={false} className="secondary-link" href="/money-farming/">Read money farming</Link>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="research-grid" aria-label="Weather events summary">
        {summaryCards.map((card) => (
          <article className="research-card" key={card.title}>
            <span className="card-rule" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="section-heading">
        <p className="eyebrow">Cross-source table</p>
        <h2>Reported weather event effects</h2>
      </section>
      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Cross-source community reported</p>
          <h2>Event odds and value effects</h2>
          <div className="data-list">
            {eventRows.map((row) => (
              <div className="data-row four-field-row" key={row.eventName}>
                <div><span>Event</span><strong>{row.eventName}</strong></div>
                <div><span>Effect</span><strong>{row.reportedEffect}</strong></div>
                <div><span>Chance / value</span><strong>{row.reportedChance} · {row.reportedValue}</strong></div>
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
          <h2>Build A Ring Farm Weather Events Guide FAQ</h2>
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
