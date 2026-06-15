// input: `/events/` route request
// output: English events hub with weather events, Carnival Pass Tickets reported reward lead, video reference, FAQ, and related links
// pos: events route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Events Guide | Carnival Tickets Pending";
const pageDescription = "Build A Ring Farm events guide with Carnival Pass Tickets reported reward, weather events, update leads, and pending mechanics verification steps.";
const heroImage = "/images/official-hero-image.webp";
const lastChecked = "2026-06-15";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/events/") },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/events/"),
    type: "article",
    images: [{ url: absoluteUrl(heroImage), width: 1200, height: 630, alt: "Build A Ring Farm events guide" }]
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl(heroImage)] }
};

const eventRows = [
  { event: "Carnival Pass Tickets", type: "Reported reward / event ticket lead", reportedEffect: "CARNIVAL code sources report 100 Carnival Pass Tickets; event mechanics pending", status: "Third-party reported, mechanics pending", related: "/codes/" },
  { event: "Rain Event", type: "Weather event", reportedEffect: "Wet mutation lead", status: "Community reported", related: "/weather-events/" },
  { event: "Blizzard Event", type: "Weather event", reportedEffect: "Frozen mutation lead", status: "Community reported", related: "/weather-events/" },
  { event: "Galaxy Event", type: "Weather event", reportedEffect: "Rainbow mutation lead", status: "Community reported", related: "/weather-events/" },
  { event: "Starfall", type: "Gameplay / update event lead", reportedEffect: "Starfall stacking and Starfall Griffin pet claims", status: "High-risk pending", related: "/pets/" },
  { event: "Queen Bee", type: "Gameplay / update event lead", reportedEffect: "Event or mutation cluster claim", status: "Pending", related: "/update-status/" },
  { event: "Plant Contracts", type: "Update 4 mechanic", reportedEffect: "Contract route and reward claims", status: "Third-party reported", related: "/plant-contracts/" }
];

const splitRows = [
  { group: "Weather events", purpose: "Explain weather-triggered mutation leads such as Wet, Frozen, Void, Radioactive, and Rainbow.", bestPage: "/weather-events/" },
  { group: "Gameplay events", purpose: "Track broader event systems, update mechanics, pets, and event rewards.", bestPage: "/events/" },
  { group: "Carnival ticket reward lead", purpose: "Track Carnival Pass Tickets only as the reported CARNIVAL code reward until event mechanics are confirmed.", bestPage: "/codes/" },
  { group: "Update mechanics", purpose: "Track Plant Contracts, Farm Ring Bonuses, Soil Quality Upgrades, and Farm Skins.", bestPage: "/update-status/" },
  { group: "Event mutations", purpose: "Connect events to mutation claims without treating values as official.", bestPage: "/mutations/" },
  { group: "Event pets", purpose: "Track Starfall Griffin and other pet leads only as pending until proof exists.", bestPage: "/pets/" }
];

const relatedLinks = [
  { href: "/codes/", title: "Codes", description: "CARNIVAL is tracked as a reported 100 Carnival Pass Tickets reward lead." },
  { href: "/weather-events/", title: "Weather Events", description: "Rain, Blizzard, Galaxy, and weather mutation leads." },
  { href: "/mutations/", title: "Mutations", description: "Event mutations and pending multiplier labels." },
  { href: "/pets/", title: "Pets", description: "Starfall Griffin and reported pet tier list leads." },
  { href: "/update-status/", title: "Update Status", description: "Update 4 mechanics and pending events." },
  { href: "/plant-contracts/", title: "Plant Contracts", description: "Update 4 contract mechanic lead." },
  { href: "/calculator/", title: "Calculator", description: "Do not add event boosts into estimates until verified." }
];

const faq = [
  { q: "Are Build A Ring Farm events verified here?", a: "Weather event leads are community reported and broader gameplay events remain pending unless official or repeatable in-game proof exists." },
  { q: "What are Carnival Pass Tickets in Build A Ring Farm?", a: "Carnival Pass Tickets are tracked here as a reported reward tied to the CARNIVAL code claim. This page does not confirm event mechanics, ticket shop rules, drop rates, or redemption rules." },
  { q: "Are Carnival Pass Tickets verified?", a: "No. The 100 Carnival Pass Tickets reward is a third-party reported CARNIVAL code claim and remains pending until an in-game code result confirms it." },
  { q: "Where should I check CARNIVAL code status?", a: "Use the codes page for the CARNIVAL code status and this events page for the Carnival Pass Tickets boundary. The update status page tracks broader Update 6 and code-signal watch items." },
  { q: "Do Carnival ticket claims affect the calculator?", a: "No. Carnival Pass Tickets should not change calculator presets because the event mechanics and reward effect are pending." },
  { q: "What is the difference between weather events and gameplay events?", a: "Weather events describe conditions like Rain or Blizzard. Gameplay events include broader update systems, event pets, rewards, or contract mechanics." },
  { q: "Is Starfall verified?", a: "No. Starfall stacking and Starfall Griffin claims are high-risk pending leads." },
  { q: "Can event boosts be used in the calculator?", a: "Only as manual pending inputs. Do not treat event rewards, odds, or multipliers as verified calculator data." }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

function youtubeEmbedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}

function youtubeWatchUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

export default function EventsPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Events hub</p>
          <h1>Build A Ring Farm Events Guide</h1>
          <p className="lede">Use this Build A Ring Farm events guide to separate weather events, gameplay events, Carnival Pass Tickets, event mutations, event pets, Update mechanics, and pending reward claims.</p>
          <div className="hero-actions">
            <Link prefetch={false} className="primary-link" href="/weather-events/">Weather events</Link>
            <Link prefetch={false} className="secondary-link" href="/codes/">CARNIVAL code</Link>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="guide-card evidence-note-card">
        <span className="card-rule" />
        <p className="eyebrow">Current verdict</p>
        <h2>Carnival Pass Tickets are reported reward leads, not confirmed event mechanics</h2>
        <p>Last checked: {lastChecked}. The current verdict is narrow: CARNIVAL code sources report 100 Carnival Pass Tickets, but this page does not confirm ticket shops, event rules, reward odds, mutations, pet effects, or multipliers.</p>
      </section>

      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Event watchlist</p>
          <h2>Reported Build A Ring Farm events</h2>
          <div className="data-list">
            {eventRows.map((row) => (
              <div className="data-row four-field-row" key={row.event}>
                <div><span>Event</span><strong>{row.event}</strong></div>
                <div><span>Type</span><strong>{row.type}</strong></div>
                <div><span>Reported effect</span><strong>{row.reportedEffect}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>

        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Routing</p>
          <h2>Where each event question belongs</h2>
          <div className="data-list">
            {splitRows.map((row) => (
              <div className="data-row three-field-row" key={row.group}>
                <div><span>Group</span><strong>{row.group}</strong></div>
                <div><span>Purpose</span><strong>{row.purpose}</strong></div>
                <div><span>Best page</span><strong>{row.bestPage}</strong></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="guide-card"><span className="card-rule" /><h2>Carnival Pass Tickets pending reward</h2><p>Carnival Pass Tickets belong on this events page only as a reported reward lead from the CARNIVAL code claim. The code status belongs on <a href="/codes/">/codes/</a>, and broader update/code signals belong on <a href="/update-status/">/update-status/</a>.</p><ul><li>Reward source: third-party CARNIVAL code claim.</li><li>Reported reward: 100 Carnival Pass Tickets.</li><li>Event mechanics: pending.</li><li>Calculator use: no default effect.</li></ul></article>
        <article className="guide-card"><span className="card-rule" /><h2>How events connect to mutations</h2><p>Events may create mutation leads, but the value still needs proof. Keep Wet, Frozen, Rainbow, Starfall, Honeycomb, and other event mutation values reported or pending until in-game checks are repeatable.</p><ul><li>Weather mutation leads belong in weather and mutations pages.</li><li>Gameplay event claims belong in this events hub.</li><li>Pending multipliers should not be treated as official.</li></ul></article>
        <article className="guide-card"><span className="card-rule" /><h2>How events connect to pets</h2><p>Event pet claims such as Starfall Griffin need stronger proof before they can affect pet tier list, calculator, or money farming recommendations.</p><ul><li>Pet names need source evidence.</li><li>Pet effects need visible UI or repeatable results.</li><li>Event pet bonuses stay out of calculator presets.</li></ul></article>
      </section>

      <section>
        <div className="section-heading">
          <p className="eyebrow">Video reference</p>
          <h2>Carnival Pass Tickets video reference</h2>
          <p>This embed supports Carnival Pass Tickets search coverage only. It does not verify the CARNIVAL code, ticket amount, ticket shop mechanics, or event rules.</p>
        </div>
        <div className="video-grid">
          <article className="video-card">
            <div className="video-frame">
              <iframe
                src={youtubeEmbedUrl("K5KAcsH1Zcw")}
                title="Carnival Pass Tickets video reference"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="video-meta">
              <h3>Carnival Pass Tickets video reference</h3>
              <p>Use this as a visual reference. Treat ticket claims as reported or pending until the real game UI confirms them.</p>
              <a href={youtubeWatchUrl("K5KAcsH1Zcw")} target="_blank" rel="noopener noreferrer">Watch the Carnival Pass Tickets video on YouTube</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Events route links</h2></section>
      <section className="route-grid">{relatedLinks.map((link) => <Link prefetch={false} className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}</section>

      <section className="faq-section"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Build A Ring Farm Events FAQ</h2></div><div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    </main>
  );
}
