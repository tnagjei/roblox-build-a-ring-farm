// input: `/update-status/` route request
// output: English update status page covering reported Update 3, pending Update 4, Update 6 code signals, video reference, and source boundaries
// pos: update-status route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Update Status | Update 6 Code Signals";
const pageDescription = "Track Build A Ring Farm Update 6 code signals, CARNIVAL reports, UPDATE6 pending status, patch note boundaries, and safe verification steps.";
const heroImage = "/images/official-hero-image.webp";
const lastChecked = "2026-06-20";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/update-status/") },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/update-status/"),
    type: "article",
    images: [{ url: absoluteUrl(heroImage), width: 1200, height: 630, alt: "Build A Ring Farm update status" }]
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl(heroImage)] }
};

const updateRows = [
  { update: "Update 6", signal: "Third-party title and code-page signal", status: "Reported, pending verification", note: "Track Update 6 and UPDATE6 search demand without adding UPDATE6 to the active code table or writing patch notes as confirmed." },
  { update: "Update 3", signal: "Reported code and mutation leads", status: "Reported, pending verification", note: "Keep PLANTRUSH, Honeycomb, Alien, Farm, Queen Bee, and reward claims out of verified status until in-game proof exists." },
  { update: "Update 4", signal: "Search result and third-party lead", status: "Pending", note: "Patch notes are not verified here. Do not write official Update 4 rewards, prices, or multipliers without source proof." },
  { update: "Current code table", signal: "June 2026 third-party code pages", status: "Community reported", note: "External active labels are not verified active labels on this site." },
  { update: "Official Discord source", signal: "Public server directory lead", status: "Server discovered, announcement proof pending", note: "Server existence does not verify any specific code, reward, or patch note." }
];

const watchRows = [
  { item: "CARNIVAL", currentLabel: "Third-party reported code claim", nextCheck: "Confirm whether it gives 100 Carnival Pass Tickets inside the real game UI before any stronger label." },
  { item: "UPDATE6", currentLabel: "Not verified as a code", nextCheck: "Search and test only as a pending Update 6 signal; do not add it to the active code table." },
  { item: "250KUSERS", currentLabel: "Third-party reported", nextCheck: "Confirm the claimed 3 Minute Time Skip reward inside the real game UI." },
  { item: "PLANTRUSH", currentLabel: "Community reported", nextCheck: "Confirm whether the reward is Plant Rush Box, Plant Rush Boss Box, or neither." },
  { item: "Plant Contracts", currentLabel: "Third-party reported mechanic", nextCheck: "Confirm UI, requirements, rewards, and cooldown before route use." },
  { item: "Farm Ring Bonuses", currentLabel: "Third-party reported mechanic", nextCheck: "Confirm whether bonuses affect ring multipliers before calculator promotion." },
  { item: "Soil Quality Upgrades", currentLabel: "Third-party reported mechanic", nextCheck: "Confirm price, growth effect, and ROI before upgrade advice." },
  { item: "Farm Skins", currentLabel: "Third-party reported mechanic", nextCheck: "Confirm whether skins are cosmetic only or affect gameplay." },
  { item: "Cosmic 8x", currentLabel: "Pending preset", nextCheck: "Needs repeatable in-game multiplier evidence before calculator promotion." },
  { item: "Bubblegum 9x", currentLabel: "Pending preset", nextCheck: "Needs repeatable in-game multiplier evidence before calculator promotion." },
  { item: "Fire 10x", currentLabel: "Pending preset", nextCheck: "Needs repeatable in-game multiplier evidence before calculator promotion." },
  { item: "Starfall stacking", currentLabel: "Pending", nextCheck: "Do not write verified stacking unless a repeatable test proves it." },
  { item: "Admin mutation", currentLabel: "Pending preset", nextCheck: "Confirm trigger, multiplier, and availability before any stronger claim." }
];

const mechanicLinks = [
  { href: "/plant-contracts/", title: "Plant Contracts", description: "Update 4 reported contract mechanic and reward proof boundary." },
  { href: "/farm-ring-bonuses/", title: "Farm Ring Bonuses", description: "Update 4 reported ring bonus lead and calculator limits." },
  { href: "/soil-quality-upgrades/", title: "Soil Quality Upgrades", description: "Update 4 reported soil upgrade lead and ROI checks." },
  { href: "/farm-skins/", title: "Farm Skins", description: "Update 4 reported cosmetic lead and gameplay-effect boundary." }
];

const sections = [
  {
    heading: "Build A Ring Farm Update 6 code signals",
    subheading: "UPDATE6 is a pending search signal",
    body: [
      "Update 6 now has enough SERP and video-title demand to track on the update hub, but that does not make UPDATE6 a real code. CARNIVAL is the only new code string in this blueprint with a specific third-party reward claim.",
      "Keep Update 6 content focused on boundaries: what is reported, what is still pending, where to test codes, and which claims should stay out of calculator defaults."
    ],
    list: ["Update 6 signal: reported by third-party titles and code-page demand.", "UPDATE6 label: not verified as a code.", "CARNIVAL label: third-party reported, pending in-game verification.", "Patch-note data: pending until official or repeatable evidence exists."]
  },
  {
    heading: "Build A Ring Farm Update 4 status",
    subheading: "Pending until patch notes are verified",
    body: [
      "Update 4 is a useful freshness target because players are now searching beyond Update 3. That does not mean Update 4 patch notes, rewards, prices, or mutation values are verified.",
      "This page treats Update 4 as a pending research lead. The site can answer the search intent while keeping every unverified claim clearly labeled as reported or pending."
    ],
    list: ["Update 4 patch notes: pending.", "Update 4 codes: not verified active here.", "Update 4 mechanics: third-party reported.", "Update 4 prices and multipliers: pending."]
  },
  {
    heading: "Why reported does not mean verified",
    subheading: "Evidence boundary",
    body: [
      "Third-party code sites can surface useful leads, but they are not enough to verify a Roblox code, reward, multiplier, price, event, mechanic, or patch note. A copied active label remains a reported claim here.",
      "Promotion requires official notes, a developer-linked channel, or repeatable in-game proof with date, result, and enough context to reproduce the check."
    ],
    list: ["Community reported stays community reported.", "Pending values stay pending.", "Do not call copied claims official.", "Do not turn reported mechanics into verified systems."]
  },
  {
    heading: "Freshness workflow for future updates",
    subheading: "What to recheck first",
    body: [
      "When a new update signal appears, recheck the code box, official links, mutation names, mutation multipliers, gear prices, spray prices, mechanics, and calculator presets in that order.",
      "The fastest safe edit is usually a status update, not a verified data table. That keeps the page fresh without inventing proof."
    ],
    list: ["Recheck official Roblox page timestamp.", "Recheck developer-linked channels only.", "Recheck in-game UI before promoting codes.", "Keep exact numbers pending until repeatable."]
  }
];

const faq = [
  { q: "Is UPDATE6 a real Build A Ring Farm code?", a: "UPDATE6 is not verified as a code here. It is tracked as a pending Update 6 search and code-title signal only. Do not use it as an active-code entry unless the real game UI accepts it and the result is recorded." },
  { q: "Is CARNIVAL related to Update 6?", a: "CARNIVAL is tracked as a third-party reported June 2026 code claim with a reported 100 Carnival Pass Tickets reward. The relation to Update 6 remains a source signal, not confirmed patch-note data." },
  { q: "Is Build A Ring Farm Update 4 verified here?", a: "No. Update 4 is a reported or pending lead until official notes or repeatable in-game proof exist." },
  { q: "Are Update 4 patch notes official on this site?", a: "No. Patch notes are pending here unless they come from a verified official source." },
  { q: "Are Plant Contracts verified?", a: "No. Plant Contracts are listed as a third-party reported mechanic pending proof." },
  { q: "Are Farm Ring Bonuses verified?", a: "No. Farm Ring Bonuses are listed as a reported lead and should not be used as a verified multiplier." },
  { q: "Can Update 4 code claims be tested?", a: "Yes, but only inside the real game UI. They remain reported or pending until accepted proof exists." },
  { q: "Should calculator presets use Update 4 values?", a: "Only as pending presets. Cosmic 8x, Bubblegum 9x, Fire 10x, Starfall, Admin, and ring bonus claims need in-game verification before stronger labels." }
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

export default function UpdateStatusPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Update status</p>
          <h1>Build A Ring Farm Update Status</h1>
          <p className="lede">Track Build A Ring Farm update status across Update 3, Update 4, Update 6, CARNIVAL, and UPDATE6 leads without calling reported codes, mechanics, patch notes, mutation multipliers, or reward claims verified.</p>
          <div className="hero-actions">
            <Link prefetch={false} className="primary-link" href="/codes/">Check codes</Link>
            <Link prefetch={false} className="secondary-link" href="/events/">Carnival tickets</Link>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="guide-card evidence-note-card">
        <span className="card-rule" />
        <p className="eyebrow">Current verdict</p>
        <h2>Update 6 and UPDATE6 are pending signals, not code proof</h2>
        <p>All unverified codes, rewards, mechanics, multipliers, prices, patch notes, and event claims remain reported or pending until stronger evidence exists. CARNIVAL stays a reported code claim, and UPDATE6 stays a pending signal.</p>
        <p><strong>Last checked:</strong> {lastChecked}</p>
      </section>

      <section className="content-grid single-column-grid">
        <article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Update table</p><h2>Reported and pending update status</h2><div className="data-list">{updateRows.map((row) => (<div className="data-row four-field-row" key={row.update}><div><span>Update</span><strong>{row.update}</strong></div><div><span>Signal</span><strong>{row.signal}</strong></div><div><span>Status</span><StatusBadge status={row.status} /></div><div><span>Note</span><strong>{row.note}</strong></div></div>))}</div></article>
        <article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Watchlist</p><h2>Update pending watchlist</h2><div className="data-list">{watchRows.map((row) => (<div className="data-row three-field-row" key={row.item}><div><span>Item</span><strong>{row.item}</strong></div><div><span>Current label</span><StatusBadge status={row.currentLabel} /></div><div><span>Next check</span><strong>{row.nextCheck}</strong></div></div>))}</div></article>
      </section>

      <section>
        <div className="section-heading">
          <p className="eyebrow">Video reference</p>
          <h2>Build A Ring Farm Update 6 code video reference</h2>
          <p>This video reference supports Update 6 and UPDATE6 search intent. It is not patch-note proof and does not make UPDATE6 an accepted code.</p>
        </div>
        <div className="video-grid">
          <article className="video-card">
            <div className="video-frame">
              <iframe
                src={youtubeEmbedUrl("szp3NOtMOQ8")}
                title="Build A Ring Farm Update 6 code video reference"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="video-meta">
              <h3>Update 6 code video reference</h3>
              <p>Use this only as a discovery lead. Update 6 code claims still need official or repeatable in-game evidence before promotion.</p>
              <a href={youtubeWatchUrl("szp3NOtMOQ8")} target="_blank" rel="noopener noreferrer">Watch the Update 6 code video on YouTube</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section-heading"><p className="eyebrow">Mechanics</p><h2>Update 4 mechanics watchlist</h2></section><section className="route-grid">{mechanicLinks.map((link) => <Link prefetch={false} className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}</section>

      <section className="content-grid">{sections.map((section) => (<article className="guide-card" key={section.heading}><span className="card-rule" /><h2>{section.heading}</h2><h3>{section.subheading}</h3>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul></article>))}</section>

      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Update status route links</h2></section><section className="route-grid" aria-label="Update status route links"><Link prefetch={false} className="route-card" href="/250kusers-code/"><span className="card-rule" /><h2>250KUSERS Code</h2><p>Track the newest reported code claim without marking it verified active.</p></Link><Link prefetch={false} className="route-card" href="/events/"><span className="card-rule" /><h2>Events</h2><p>Keep Carnival Pass Tickets as a reported reward lead until event mechanics are confirmed.</p></Link><Link prefetch={false} className="route-card" href="/official-discord/"><span className="card-rule" /><h2>Official Discord</h2><p>Server discovered, but code announcement proof remains pending.</p></Link><Link prefetch={false} className="route-card" href="/update-3-status/"><span className="card-rule" /><h2>Update 3 Status</h2><p>Keep older Update 3 claims available without freezing the whole site in Update 3.</p></Link><Link prefetch={false} className="route-card" href="/codes/"><span className="card-rule" /><h2>Codes</h2><p>Review June 2026 reported code leads, CARNIVAL, and active vs verified labels.</p></Link><Link prefetch={false} className="route-card" href="/calculator/"><span className="card-rule" /><h2>Calculator</h2><p>Use pending mutation presets only as planning inputs.</p></Link><Link prefetch={false} className="route-card" href="/mutations/"><span className="card-rule" /><h2>Mutations</h2><p>Check Cosmic, Bubblegum, Fire, Starfall, and Admin as pending leads.</p></Link></section>

      <section className="faq-section"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Build A Ring Farm Update Status FAQ</h2></div><div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    </main>
  );
}
