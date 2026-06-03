// input: `/official-discord/` route request
// output: English source-policy page for Build A Ring Farm official Discord discovery and proof boundary
// pos: official-discord route（更新规则：文件变更需同步 SEO_INDEX_LEDGER.md）

import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Official Discord | Source Status";
const pageDescription = "Build A Ring Farm official Discord source status, server discovery note, announcement proof boundary, code verification policy, and safe link rules.";
const heroImage = "/images/official-hero-image.webp";
const lastChecked = "2026-06-03";
const discordInvite = "discord.gg/buildanringfarm";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/official-discord/") },
  openGraph: { title: pageTitle, description: pageDescription, url: absoluteUrl("/official-discord/"), type: "article", images: [{ url: absoluteUrl(heroImage), width: 1200, height: 630, alt: "Build A Ring Farm official Discord source status" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl(heroImage)] }
};

const sourceRows = [
  { item: "Discord server", status: "Server discovered", note: `Public directory lists ${discordInvite}.` },
  { item: "Official announcement proof", status: "Pending", note: "A visible server listing is not the same as a verified code announcement." },
  { item: "Code verification", status: "Pending", note: "A code needs official announcement proof or repeatable in-game proof before it becomes verified here." },
  { item: "Unsafe links", status: "Blocked", note: "Do not use verification bots, downloads, browser add-ons, or executor links." }
];

const relatedLinks = [
  { href: "/codes/", title: "Codes", description: "Separate Discord code claims from verified active codes." },
  { href: "/250kusers-code/", title: "250KUSERS", description: "Track the newest reported code claim safely." },
  { href: "/update-status/", title: "Update Status", description: "Keep Update 4 and Discord claims in pending status until proof exists." },
  { href: "/scripts/", title: "Scripts Safety", description: "Avoid unsafe executors and download claims." }
];

const faq = [
  { q: "Is the Build A Ring Farm Discord official?", a: "A public directory currently shows a Build A Ring Farm server and invite. This site labels the server as discovered, while specific announcement proof remains pending." },
  { q: "Does a Discord server prove a code is active?", a: "No. Server existence does not verify a specific code. A code still needs an official announcement or repeatable in-game proof." },
  { q: "Should I join outside verification servers?", a: "No. Avoid servers or tools asking for passwords, browser add-ons, executors, or downloads." }
];

function Badge({ value }: { value: string }) { return <span className="source-badge">{value}</span>; }

export default function OfficialDiscordPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Source policy</p>
          <h1>Build A Ring Farm Official Discord</h1>
          <p className="lede">Use this page to separate the discovered Discord server signal from verified code announcements. A server listing is useful, but it does not make any code automatically active.</p>
          <div className="hero-actions"><Link prefetch={false} className="primary-link" href="/codes/">Check codes</Link><Link prefetch={false} className="secondary-link" href="/update-status/">Update status</Link></div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="guide-card evidence-note-card"><span className="card-rule" /><p className="eyebrow">Current verdict</p><h2>Official server discovered, announcement proof pending</h2><p>Last checked: {lastChecked}. This site does not treat Discord server existence as proof that any specific code, reward, patch note, or multiplier is verified.</p></section>

      <section className="content-grid single-column-grid"><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Source status</p><h2>Discord verification policy</h2><div className="data-list">{sourceRows.map((row) => <div className="data-row three-field-row" key={row.item}><div><span>Item</span><strong>{row.item}</strong></div><div><span>Status</span><Badge value={row.status} /></div><div><span>Note</span><strong>{row.note}</strong></div></div>)}</div></article></section>

      <section className="content-grid"><article className="guide-card"><span className="card-rule" /><h2>How this affects code pages</h2><p>If a code appears in Discord, it should still remain reported or pending until the announcement source is visible and the reward can be confirmed inside the game UI.</p><ul><li>Server discovered does not mean code verified.</li><li>Announcement proof must be linked or captured.</li><li>In-game reward proof can upgrade confidence.</li></ul></article><article className="guide-card"><span className="card-rule" /><h2>Safe Discord rule</h2><p>Use Discord as a source lead only. Do not ask players to complete external verification, install files, run scripts, or share Roblox credentials.</p><ul><li>No credential collection.</li><li>No executors.</li><li>No verification downloads.</li></ul></article></section>

      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Source policy links</h2></section><section className="route-grid">{relatedLinks.map((link) => <Link prefetch={false} className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}</section>

      <section className="faq-section"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Official Discord FAQ</h2></div><div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    </main>
  );
}
