// input: `/codes/` route request
// output: codes CTR experiment page with reported code cards, third-party claim watchlist, safe redeem notes, FAQ, and related links
// pos: codes route（更新规则：文件变更需同步 SEO_INDEX_LEDGER.md）

import type { Metadata } from "next";
import Link from "next/link";
import CopyCodeButton from "@/components/CopyCodeButton";
import { JsonLd } from "@/components/JsonLd";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";
import "./codes-page.css";

const pageLastChecked = "2026-06-11";

const reportedCodes = [
  // UPDATE5：Beebom 2026-06-09 新声称代码，奖励为 Super Pet Treat，待游戏内验证
  { code: "UPDATE5", reward: "Beebom reported: Super Pet Treat (pet treat item). Third-party reported only — not verified active here.", status: "Third-party reported", sourceStatus: "Pending in-game verification", lastChecked: "June 2026" },
  { code: "250KUSERS", reward: "Third-party reported 3 Minute Time Skip", status: "Third-party reported", sourceStatus: "Pending in-game verification", lastChecked: "June 2026" },
  { code: "PLANTRUSH", reward: "Dexerto reported Plant Rush Box; PCGamesN/buildaringfarm.net reported Plant Rush Boss Box", status: "Community reported", sourceStatus: "Pending in-game verification", lastChecked: "June 2026" },
  { code: "UPDATE2", reward: "Pending reward", status: "Community reported", sourceStatus: "Needs testing", lastChecked: "June 2026" },
  { code: "THANKYOU", reward: "Pending reward", status: "Community reported", sourceStatus: "Needs testing", lastChecked: "June 2026" },
  { code: "BARF:3", reward: "Pending reward", status: "Community reported", sourceStatus: "Needs testing", lastChecked: "June 2026" },
  { code: "100KVISITS", reward: "Pending reward", status: "Community reported", sourceStatus: "Needs testing", lastChecked: "June 2026" },
  { code: "2KLIKES", reward: "Pending reward", status: "Community reported", sourceStatus: "Needs testing", lastChecked: "June 2026" },
  { code: "UPDATE1", reward: "Pending reward", status: "Community reported", sourceStatus: "Needs testing", lastChecked: "June 2026" }
];

const competitorClaimRows = [
  // UPDATE5：Beebom 2026-06-09 声称新代码，奖励连接 pet treat 系统
  { code: "UPDATE5", claimedReward: "Super Pet Treat (Beebom, June 2026)", competitorStatus: "Beebom listed as new active code — claimed reward connects pet treat system", ourStatus: "Third-party reported, not verified active here. Super Pet Treat effect also pending.", nextAction: "Test inside real game UI; if accepted, record reward text and check /pets/ treat section" },
  { code: "250KUSERS", claimedReward: "3 Minute Time Skip (RadioTimes, Beebom, Dexerto — multiple sources June 2026)", competitorStatus: "Claimed active by multiple third-party sites", ourStatus: "Third-party reported, not verified active here", nextAction: "Test only inside the real game UI" },
  { code: "PLANTRUSH", claimedReward: "Dexerto: Plant Rush Box; PCGamesN/buildaringfarm.net: Plant Rush Boss Box", competitorStatus: "Claimed active by third-party sites", ourStatus: "Community reported, not verified active here", nextAction: "Test only inside the real game UI" },
  { code: "BARF:3", claimedReward: "Pending reward", competitorStatus: "Claimed active by third-party sites", ourStatus: "Community reported, needs testing", nextAction: "Record reward text if accepted" },
  { code: "THANKYOU", claimedReward: "Pending reward", competitorStatus: "Claimed active by third-party sites", ourStatus: "Community reported, needs testing", nextAction: "Test and record server date" },
  { code: "UPDATE2", claimedReward: "Pending reward", competitorStatus: "Claimed active by third-party sites", ourStatus: "Community reported, needs testing", nextAction: "Check code box and reward text" },
  { code: "UPDATE1", claimedReward: "Pending reward", competitorStatus: "Claimed active by third-party sites", ourStatus: "Community reported, needs testing", nextAction: "Confirm whether reward still works" },
  { code: "2KLIKES", claimedReward: "Pending reward", competitorStatus: "Claimed active by third-party sites", ourStatus: "Community reported, needs testing", nextAction: "Confirm in-game response" },
  { code: "100KVISITS", claimedReward: "Pending reward", competitorStatus: "Claimed active by third-party sites", ourStatus: "Community reported, needs testing", nextAction: "Confirm in-game response" }
];

const relatedGuides = [
  { href: "/250kusers-code/", title: "250KUSERS Code", description: "Newest third-party reported code claim and safe test notes" },
  // P0 互链：Super Pet Treat 是 UPDATE5 claimed reward，连接 pets 系统
  { href: "/pets/", title: "Pets Guide", description: "See Super Pet Treat reported connection and pet treat section" },
  { href: "/tier-list/", title: "Pets Tier List", description: "Check Super Pet Treat pending note and support pet tiers" },
  { href: "/official-discord/", title: "Official Discord", description: "Server discovered, announcement proof still pending" },
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
  // P0 新增：UPDATE5 相关问题
  { q: "Is UPDATE5 active in Build A Ring Farm?", a: "UPDATE5 is a third-party reported code claim listed by Beebom in June 2026. This site does not mark it as verified active. The reported reward is Super Pet Treat, but that effect is also pending in-game verification. Test it only inside the real Roblox game UI." },
  { q: "What does UPDATE5 give in Build A Ring Farm?", a: "Beebom reported that UPDATE5 gives a Super Pet Treat. This site tracks that as a third-party reported claim only. The Super Pet Treat effect on pets is also not yet verified here. See the pets guide for more context on pet treats." },
  { q: "What is Super Pet Treat in Build A Ring Farm?", a: "Super Pet Treat is a pet item reportedly obtainable from the UPDATE5 code, according to Beebom. The exact in-game effect is pending verification. This site connects the UPDATE5 code claim with the pets guide and tier list, but does not confirm any multiplier or pet boost from Super Pet Treat." },
  { q: "Is 250KUSERS active in Build A Ring Farm?", a: "This site does not mark 250KUSERS as verified active. It is a third-party reported code claim covered by RadioTimes, Beebom, and Dexerto in June 2026, pending in-game verification." },
  { q: "Is PLANTRUSH verified here?", a: "No. PLANTRUSH is listed only as a competitor reported claim and remains pending until in-game proof confirms the code and reward." },
  { q: "Can I test community reported Build A Ring Farm codes?", a: "Yes, but only inside the real Roblox game UI. Treat reward claims as pending until a working result is recorded." },
  { q: "Where do I paste Build A Ring Farm codes?", a: "Use only a real code, gift, reward, or settings button inside the game UI. If no redeem box appears, keep the claim pending." },
  { q: "Why do other sites show different codes?", a: "Some sites publish community strings before verifying them. This page keeps third-party claims, community reported leads, and verified active codes separate." },
  { q: "Is the official Discord source verified?", a: "A public directory currently shows a Build A Ring Farm server, so the server is listed as discovered here. Specific code announcement proof is still pending." },
  { q: "Can code rewards help money farming?", a: "Yes, if a code truly gives cash, seed packs, sprays, fertilizer, or time skips. Until verified, use the reward as a lead, not a fact." },
  { q: "What should I avoid on code pages?", a: "Avoid outside verification pages, browser add-ons, downloads, or tools that claim they are required for code redemption." }
];

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "en",
  slug: "codes",
  // TDH：加入 UPDATE5 和 Super Pet Treat，核心词靠前，Title 约 58 字符
  title: "Build A Ring Farm Codes June 2026 | UPDATE5 & Reported Rewards",
  description: "Build A Ring Farm codes June 2026: UPDATE5 reported Super Pet Treat, 250KUSERS, PLANTRUSH source claims, active vs verified status, safe redeem steps."
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
    description: "June 2026 community reported Build A Ring Farm codes, 250KUSERS, source-specific reward claims, source status, and safe redeem steps.",
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
            <Link prefetch={false} className="secondary-link" href="/250kusers-code/">250KUSERS status</Link>
          </div>
        </div>
        <img className="hero-image" src={siteData.assets.hero} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="codes-card-section" aria-labelledby="reported-code-cards-heading">
        <div className="section-heading"><p className="eyebrow">Community reported codes</p><h2 id="reported-code-cards-heading">June 2026 reported Build A Ring Farm code leads</h2></div>
        <p className="pending-codes-disclaimer">These code strings are useful testing leads, not verified active codes. Use them only inside the real Roblox game UI and treat reward text as reported or pending until tested.</p>
        <div className="code-card-grid">{reportedCodes.map((item) => (<article className="code-card" key={item.code}><div className="code-card-topline"><code>{item.code}</code><span className="status-tag needs-verification">{item.status}</span></div><dl className="code-card-facts"><div><dt>Reward</dt><dd>{item.reward}</dd></div><div><dt>Last checked</dt><dd>{item.lastChecked}</dd></div><div><dt>Source status</dt><dd>{item.sourceStatus}</dd></div></dl><CopyCodeButton code={item.code} label="Copy code" /></article>))}</div>
        <p className="codes-source-note">Code status is community reported and may change with game updates. Tell us if a code stops working.</p>
      </section>

      <section className="content-grid single-column-grid" aria-labelledby="competitor-claims-heading"><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Third-party watchlist</p><h2 id="competitor-claims-heading">Third-party reported code claims</h2><p>These are claims players may see on other sites. They are not verified active codes here until a repeatable in-game test confirms the code and reward.</p><div className="data-list">{competitorClaimRows.map((row) => (<div className="data-row four-field-row" key={row.code}><div><span>Code</span><strong>{row.code}</strong></div><div><span>Claimed reward</span><strong>{row.claimedReward}</strong></div><div><span>Our status</span><strong>{row.ourStatus}</strong></div><div><span>Next action</span><strong>{row.nextAction}</strong></div></div>))}</div></article></section>

      <section className="status-band" aria-labelledby="verified-codes-heading"><div><p className="eyebrow">Verified active codes</p><h2 id="verified-codes-heading">Verified active Build A Ring Farm codes</h2><p>No Build A Ring Farm code is marked verified active here until official or repeatable in-game proof exists.</p></div><div className="status-table" role="table" aria-label="Verified active Build A Ring Farm codes"><div role="row" className="status-row status-head"><span role="columnheader">Code</span><span role="columnheader">Reward</span><span role="columnheader">Source</span></div><div role="row" className="status-row empty-row"><span role="cell">No verified code yet</span><span role="cell">No verified reward yet</span><span role="cell">No verified source yet</span></div></div></section>

      <section className="redeem-guide-section" aria-labelledby="redeem-guide-heading"><div className="section-heading"><p className="eyebrow">Redeem guide</p><h2 id="redeem-guide-heading">How to redeem Build A Ring Farm codes safely</h2></div><ol className="redeem-steps"><li>Open Build A Ring Farm from the official Roblox game page.</li><li>Look for a real in-game codes, rewards, gift, or settings button.</li><li>Copy a reported code only if you understand that the status may still be pending.</li><li>Paste the code inside the game UI and record whether it worked.</li><li>Do not use outside verification pages or tools for code redemption.</li></ol><p className="redeem-note">If the game does not show a real code input UI, keep the claim pending instead of calling it active.</p></section>

      <section className="content-grid"><article className="guide-card"><span className="card-rule" /><h2>Build A Ring Farm codes June 2026 status</h2><p>The current verified active-code count on this site is still zero. UPDATE5, 250KUSERS, and PLANTRUSH are all third-party or community reported claims, not verified active codes here.</p><ul><li>Verified active codes: 0</li><li>UPDATE5 — Beebom reported, reward: Super Pet Treat (pending)</li><li>Third-party reported leads stay separate</li><li>Reward claims remain pending until tested</li></ul></article><article className="guide-card"><span className="card-rule" /><h2>UPDATE5 and Super Pet Treat evidence boundary</h2><p>UPDATE5 is a new code reported by Beebom in June 2026. The claimed reward is Super Pet Treat, a pet item that connects to the <a href="/pets/">pets guide</a> and <a href="/tier-list/">pets tier list</a>. Neither the code nor the Super Pet Treat effect is verified here.</p><ul><li>UPDATE5 status: Beebom third-party reported, pending in-game verification</li><li>Super Pet Treat effect: pending — do not use as a calculator preset</li><li>See <a href="/pets/">pets guide</a> for pet treat context</li></ul></article><article className="guide-card"><span className="card-rule" /><h2>Active vs verified code labels</h2><p>A third-party page may call a code active, but this site does not treat that as verified. Active is an outside claim; verified requires official or repeatable in-game proof.</p><ul><li>External active: reported claim only.</li><li>Verified active: official or repeatable proof.</li><li>Official Discord server: discovered, announcement proof pending.</li></ul></article><article className="guide-card"><span className="card-rule" /><h2>How codes connect to farming progress</h2><p>If a verified code gives seed packs, sprays, fertilizer, time skips, or cash, it can speed up early progression. Until verified, treat every reward as a testing lead.</p><ul><li>UPDATE5 reported reward: Super Pet Treat — connect to <a href="/pets/">pets guide</a> for context.</li><li>Seed pack rewards can support early crops.</li><li>Sprays may connect to mutations and advanced crops.</li></ul></article></section>

      <section className="related-grid-section" aria-labelledby="codes-related-heading"><div className="section-heading"><p className="eyebrow">Related guides</p><h2 id="codes-related-heading">Build A Ring Farm code routes</h2></div><div className="related-grid">{relatedGuides.map((page) => (<Link prefetch={false} className="related-link" href={page.href} key={page.href}><span><strong>{page.title}</strong><small>{page.description}</small></span><span className="link-arrow">→</span></Link>))}</div></section>

      <section className="faq-section"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Build A Ring Farm Codes FAQ</h2></div><div className="faq-list">{faq.map((item) => (<details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>))}</div></section>
    </main>
  );
}
