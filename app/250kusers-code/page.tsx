// input: `/250kusers-code/` route request
// output: English long-tail code status page for the 250KUSERS reported claim
// pos: 250kusers-code route（更新规则：文件变更需同步 SEO_INDEX_LEDGER.md）

import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm 250KUSERS Code | Reported Status";
const pageDescription = "Track the Build A Ring Farm 250KUSERS code claim, reported 3 Minute Time Skip reward, source status, safe testing steps, and verification boundary.";
const heroImage = "/images/official-hero-image.webp";
const lastChecked = "2026-06-03";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/250kusers-code/") },
  openGraph: { title: pageTitle, description: pageDescription, url: absoluteUrl("/250kusers-code/"), type: "article", images: [{ url: absoluteUrl(heroImage), width: 1200, height: 630, alt: "Build A Ring Farm 250KUSERS code status" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl(heroImage)] }
};

const statusRows = [
  { label: "Code", value: "250KUSERS", status: "Third-party reported" },
  { label: "Claimed reward", value: "3 Minute Time Skip", status: "Reported, pending in-game verification" },
  { label: "Verified active here", value: "No", status: "Not verified" },
  { label: "Safe test location", value: "Real Roblox game UI only", status: "Safety rule" }
];

const testSteps = [
  "Open Build A Ring Farm from the official Roblox game page.",
  "Look for an in-game code, gift, reward, or settings input.",
  "Test 250KUSERS only inside the game UI.",
  "Record the server date, accepted or rejected result, and exact reward text.",
  "Do not use outside verification pages, browser add-ons, downloads, or executors."
];

const relatedLinks = [
  { href: "/codes/", title: "Codes", description: "Compare all reported June 2026 code leads." },
  { href: "/update-status/", title: "Update Status", description: "Track Update 4 and June status without fake verification." },
  { href: "/official-discord/", title: "Official Discord", description: "Check source policy before trusting code claims." },
  { href: "/money-farming/", title: "Money Farming", description: "Treat reported rewards as bonus leads only." }
];

const faq = [
  { q: "Is 250KUSERS active in Build A Ring Farm?", a: "This site does not mark 250KUSERS as verified active. It is a third-party reported code claim pending in-game verification." },
  { q: "What is the reported 250KUSERS reward?", a: "The current third-party claim says 3 Minute Time Skip, but the reward is not verified here." },
  { q: "Can I test 250KUSERS?", a: "Yes, but only inside the real Roblox game UI. Do not use outside verification tools or downloads." }
];

function Badge({ value }: { value: string }) { return <span className="source-badge">{value}</span>; }

export default function Code250KUsersPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Reported code claim</p>
          <h1>Build A Ring Farm 250KUSERS Code</h1>
          <p className="lede">Track the 250KUSERS code claim without calling it verified active. The reported reward is useful for testing, but it still needs real in-game proof.</p>
          <div className="hero-actions"><Link prefetch={false} className="primary-link" href="/codes/">Back to codes</Link><Link prefetch={false} className="secondary-link" href="/update-status/">Update status</Link></div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="guide-card evidence-note-card"><span className="card-rule" /><p className="eyebrow">Current verdict</p><h2>250KUSERS is reported, not verified active here</h2><p>Last checked: {lastChecked}. Keep this code out of the verified active table until official or repeatable in-game proof exists.</p></section>

      <section className="content-grid single-column-grid"><article className="guide-card data-card"><span className="card-rule" /><p className="eyebrow">Watchlist</p><h2>250KUSERS source status</h2><div className="data-list">{statusRows.map((row) => <div className="data-row three-field-row" key={row.label}><div><span>Field</span><strong>{row.label}</strong></div><div><span>Value</span><strong>{row.value}</strong></div><div><span>Status</span><Badge value={row.status} /></div></div>)}</div></article></section>

      <section className="redeem-guide-section"><div className="section-heading"><p className="eyebrow">Safe test</p><h2>How to test the claim safely</h2></div><ol className="redeem-steps">{testSteps.map((step) => <li key={step}>{step}</li>)}</ol></section>

      <section className="section-heading"><p className="eyebrow">Related guides</p><h2>Code source links</h2></section><section className="route-grid">{relatedLinks.map((link) => <Link prefetch={false} className="route-card" href={link.href} key={link.href}><span className="card-rule" /><h2>{link.title}</h2><p>{link.description}</p></Link>)}</section>

      <section className="faq-section"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>250KUSERS Code FAQ</h2></div><div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    </main>
  );
}
