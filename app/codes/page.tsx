// input: `/codes/` route request
// output: codes CTR experiment page with reported code cards, competitor claim watchlist, safe redeem notes, FAQ, and related links
// pos: codes route（更新规则：文件变更需同步 SEO_INDEX_LEDGER.md）

import type { Metadata } from "next";
import Link from "next/link";
import CopyCodeButton from "@/components/CopyCodeButton";
import { JsonLd } from "@/components/JsonLd";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";
import "./codes-page.css";

const pageLastChecked = "2026-06-02";

const reportedCodes = [
  { code: "PLANTRUSH", reward: "Dexerto reported Plant Rush Box; PCGamesN/buildaringfarm.net reported Plant Rush Boss Box", status: "Community reported", sourceStatus: "Pending in-game verification", lastChecked: "June 2026" },
  { code: "UPDATE2", reward: "Pending reward", status: "Community reported", sourceStatus: "Needs testing", lastChecked: "June 2026" },
  { code: "THANKYOU", reward: "Pending reward", status: "Community reported", sourceStatus: "Needs testing", lastChecked: "June 2026" },
  { code: "BARF:3", reward: "Pending reward", status: "Community reported", sourceStatus: "Needs testing", lastChecked: "June 2026" },
  { code: "100KVISITS", reward: "Pending reward", status: "Community reported", sourceStatus: "Needs testing", lastChecked: "June 2026" },
  { code: "2KLIKES", reward: "Pending reward", status: "Community reported", sourceStatus: "Needs testing", lastChecked: "June 2026" },
  { code: "UPDATE1", reward: "Pending reward", status: "Community reported", sourceStatus: "Needs testing", lastChecked: "June 2026" }
];

const competitorClaimRows = [
  { code: "PLANTRUSH", claimedReward: "Dexerto: Plant Rush Box; PCGamesN/buildaringfarm.net: Plant Rush Boss Box", competitorStatus: "Claimed active by third-party sites", ourStatus: "Community reported, not verified active here", nextAction: "Test only inside the real game UI" },
  { code: "BARF:3", claimedReward: "Pending reward", competitorStatus: "Claimed active by third-party sites", ourStatus: "Community reported, needs testing", nextAction: "Record reward text if accepted" },
  { code: "THANKYOU", claimedReward: "Pending reward", competitorStatus: "Claimed active by third-party sites", ourStatus: "Community reported, needs testing", nextAction: "Test and record server date" },
  { code: "UPDATE2", claimedReward: "Pending reward", competitorStatus: "Claimed active by third-party sites", ourStatus: "Community reported, needs testing", nextAction: "Check code box and reward text" },
  { code: "UPDATE1", claimedReward: "Pending reward", competitorStatus: "Claimed active by third-party sites", ourStatus: "Community reported, needs testing", nextAction: "Confirm whether reward still works" },
  { code: "2KLIKES", claimedReward: "Pending reward", competitorStatus: "Claimed active by third-party sites", ourStatus: "Community reported, needs testing", nextAction: "Confirm in-game response" },
  { code: "100KVISITS", claimedReward: "Pending reward", competitorStatus: "Claimed active by third-party sites", ourStatus: "Community reported, needs testing", nextAction: "Confirm in-game response" }
];

const relatedGuides = [
  { href: "/update-status/", title: "Update Status", description: "Reported Update 3 and pending Update 4 checks" },
  { href: "/update-3-status/", title: "Update 3 Status", description: "Reported Update 3 code and event checks" },
  { href: "/money-farming/", title: "Money Farming", description: "Use rewards as bonus progress, not a plan" },
  { href: "/seeds/", title: "Seeds Guide", description: "Seed packs and crop route context" },
  { href: "/sprays/", title: "Sprays Guide", description: "Spray rewards and source status" },
  { href: "/fertilizer/", title: "Fertilizer Guide", description: "Fertilizer timing and source status" },
  { href: "/calculator/", title: "Calculator", description: "Reported value estimator and route checks" }
];

const faq = [
  { q: "Are there verified Build A Ring Farm codes today?", a: "No. This site currently lists 0 verified active codes because no official or repeatable in-game proof has been accepted yet." },
  { q: "Is PLANTRUSH verified here?", a: "No. PLANTRUSH is listed only as a competitor reported claim and remains pending until in-game proof confirms the code and reward." },
  { q: "Can I test community reported Build A Ring Farm codes?", a: "Yes, but only inside the real Roblox game UI. Treat reward claims as pending until a working result is recorded." },
  { q: "Where do I paste Build A Ring Farm codes?", a: "Use only a real code, gift, reward, or settings button inside the game UI. If no redeem box appears, keep the claim pending." },
  { q: "Why do other sites show different codes?", a: "Some sites publish community strings before verifying them. This page keeps third-party claims, community reported leads, and verified active codes separate." },
  { q: "Is the official Discord source verified?", a: "No. The official Discord link is pending here until a developer-linked source confirms it." },
  { q: "Can code rewards help money farming?", a: "Yes, if a code truly gives cash, seed packs, sprays, fertilizer, or time skips. Until verified, use the reward as a lead, not a fact." },
  { q: "What should I avoid on code pages?", a: "Avoid outside verification pages, browser add-ons, downloads, or tools that claim they are required for code redemption." }
];

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "en",
  slug: "codes",
  title: "Build A Ring Farm Codes 2026 | June Reported Rewards",
  description: "Check Build A Ring Farm codes 2026 with June reported rewards, active vs verified status, PLANTRUSH source claims, and safe redeem rules today."
});

export default function CodesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Build A Ring Farm Codes",
    description: "June 2026 community reported Build A Ring Farm codes, source-specific reward claims, source status, and safe redeem steps.",
    dateModified: pageLastChecked,
    mainEntityOfPage: absoluteUrl("/codes/")
  };

  return (
    <main className="page-main codes-page-main">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />

      <section className="page-hero compact-hero codes-hero">
        <div className="hero-copy">
          <p className="eyebrow">Codes status</p>
          <h1>Build A Ring Farm Codes</h1>
          <p className="lede">Check June 2026 community reported Build A Ring Farm codes, source-specific reward claims, last checked status, and safe redeem notes. Reported codes are testing leads, not verified active codes.</p>
          <div className="hero-actions">
            <a className="primary-link" href={siteData.game.robloxUrl} target="_blank" rel="noopener noreferrer">Open Roblox page</a>
            <Link prefetch={false} className="secondary-link" href="/money-farming/">Read money farming</Link>
          </div>
        </div>
        <img className="hero-image" src={siteData.assets.hero} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="codes-card-section" aria-labelledby="reported-code-cards-heading">
        <div className="section-heading">
          <p className="eyebrow">Community reported codes</p>
          <h2 id="reported-code-cards-heading">June 2026 reported Build A Ring Farm code leads</h2>
        </div>
        <p className="pending-codes-disclaimer">These code strings are useful testing leads, not verified active codes. Use them only inside the real Roblox game UI and treat reward text as reported or pending until tested.</p>
        <div className="code-card-grid">
          {reportedCodes.map((item) => (
            <article className="code-card" key={item.code}>
              <div className="code-card-topline">
                <code>{item.code}</code>
                <span className="status-tag needs-verification">{item.status}</span>
              </div>
              <dl className="code-card-facts">
                <div><dt>Reward</dt><dd>{item.reward}</dd></div>
                <div><dt>Last checked</dt><dd>{item.lastChecked}</dd></div>
                <div><dt>Source status</dt><dd>{item.sourceStatus}</dd></div>
              </dl>
              <CopyCodeButton code={item.code} label="Copy code" />
            </article>
          ))}
        </div>
        <p className="codes-source-note">Code status is community reported and may change with game updates. Tell us if a code stops working.</p>
      </section>

      <section className="content-grid single-column-grid" aria-labelledby="competitor-claims-heading">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Third-party watchlist</p>
          <h2 id="competitor-claims-heading">Third-party reported code claims</h2>
          <p>These are claims players may see on other sites. They are not verified active codes here until a repeatable in-game test confirms the code and reward.</p>
          <div className="data-list">
            {competitorClaimRows.map((row) => (
              <div className="data-row four-field-row" key={row.code}>
                <div><span>Code</span><strong>{row.code}</strong></div>
                <div><span>Claimed reward</span><strong>{row.claimedReward}</strong></div>
                <div><span>Our status</span><strong>{row.ourStatus}</strong></div>
                <div><span>Next action</span><strong>{row.nextAction}</strong></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="status-band" aria-labelledby="verified-codes-heading">
        <div>
          <p className="eyebrow">Verified active codes</p>
          <h2 id="verified-codes-heading">Verified active Build A Ring Farm codes</h2>
          <p>No Build A Ring Farm code is marked verified active here until official or repeatable in-game proof exists.</p>
        </div>
        <div className="status-table" role="table" aria-label="Verified active Build A Ring Farm codes">
          <div role="row" className="status-row status-head"><span role="columnheader">Code</span><span role="columnheader">Reward</span><span role="columnheader">Source</span></div>
          <div role="row" className="status-row empty-row"><span role="cell">No verified code yet</span><span role="cell">No verified reward yet</span><span role="cell">No verified source yet</span></div>
        </div>
      </section>

      <section className="redeem-guide-section" aria-labelledby="redeem-guide-heading">
        <div className="section-heading"><p className="eyebrow">Redeem guide</p><h2 id="redeem-guide-heading">How to redeem Build A Ring Farm codes safely</h2></div>
        <ol className="redeem-steps">
          <li>Open Build A Ring Farm from the official Roblox game page.</li>
          <li>Look for a real in-game codes, rewards, gift, or settings button.</li>
          <li>Copy a reported code only if you understand that the status may still be pending.</li>
          <li>Paste the code inside the game UI and record whether it worked.</li>
          <li>Do not use outside verification pages or tools for code redemption.</li>
        </ol>
        <p className="redeem-note">If the game does not show a real code input UI, keep the claim pending instead of calling it active.</p>
      </section>

      <section className="content-grid">
        <article className="guide-card"><span className="card-rule" /><h2>Build A Ring Farm codes June 2026 status</h2><p>The current verified active-code count on this site is still zero. PLANTRUSH has source-specific reward claims: Dexerto reports Plant Rush Box, while PCGamesN and buildaringfarm.net report Plant Rush Boss Box. Both remain reported or pending.</p><ul><li>Verified active codes: 0</li><li>Community reported leads stay separate</li><li>Reward claims remain pending until tested</li></ul></article>
        <article className="guide-card"><span className="card-rule" /><h2>Active vs verified code labels</h2><p>A third-party page may call a code active, but this site does not treat that as verified. Active is an outside claim; verified requires official or repeatable in-game proof.</p><ul><li>External active: reported claim only.</li><li>Verified active: official or repeatable proof.</li><li>Official Discord source: pending.</li></ul></article>
        <article className="guide-card"><span className="card-rule" /><h2>Why reported codes can fail</h2><p>A reported code may fail because the game has no confirmed redeem system, the string expired, the reward changed, or the claim was copied from another site.</p><ul><li>The reward may be different from the report.</li><li>The game UI may not expose a redeem box yet.</li><li>The source may be copying an unverified list.</li></ul></article>
        <article className="guide-card"><span className="card-rule" /><h2>How codes connect to farming progress</h2><p>If a verified code gives seed packs, sprays, fertilizer, time skips, or cash, it can speed up early progression. Until verified, treat every reward as a testing lead.</p><ul><li>Seed pack rewards can support early crops.</li><li>Sprays may connect to mutations and advanced crops.</li><li>Cash rewards should be reinvested into useful upgrades.</li></ul></article>
      </section>

      <section className="related-grid-section" aria-labelledby="codes-related-heading">
        <div className="section-heading"><p className="eyebrow">Related guides</p><h2 id="codes-related-heading">Build A Ring Farm code routes</h2></div>
        <div className="related-grid">
          {relatedGuides.map((page) => (
            <Link prefetch={false} className="related-link" href={page.href} key={page.href}><span><strong>{page.title}</strong><small>{page.description}</small></span><span className="link-arrow">→</span></Link>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="section-heading"><p className="eyebrow">FAQ</p><h2>Build A Ring Farm Codes FAQ</h2></div>
        <div className="faq-list">
          {faq.map((item) => (<details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>))}
        </div>
      </section>
    </main>
  );
}
