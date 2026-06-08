// input: `/contact/` route request
// output: visible contact page with verifiable owner email and correction paths
// pos: contact route（更新规则：联系方式或审核入口变化需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Contact | ${siteData.site.name}`,
  description: `Contact ${siteData.site.name} for Build A Ring Farm guide corrections, privacy questions, source review, and safety reports.`,
  alternates: {
    canonical: absoluteUrl("/contact/")
  }
};

export default function ContactPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Contact</p>
          <h1>Contact {siteData.site.name}</h1>
          <p className="lede">
            Send corrections, source notes, privacy questions, or safety reports for the Build A Ring Farm guide.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href={`mailto:${siteData.site.contactEmail}`}>{siteData.site.contactEmail}</a>
            <Link className="secondary-link" href="/privacy/">Privacy Policy</Link>
          </div>
        </div>
      </section>

      <section className="content-grid">
        <article className="guide-card">
          <span className="card-rule" />
          <h2>Best contact path</h2>
          <p>
            Email {siteData.site.contactEmail} for page corrections, verified source updates, privacy questions, or removal requests.
          </p>
          <p>
            Include the page URL, the claim that needs review, and the evidence date so the change can be checked without guessing.
          </p>
        </article>
        <article className="guide-card">
          <span className="card-rule" />
          <h2>What we can review</h2>
          <ul>
            <li>Incorrect code status, reward wording, or expired-code notes.</li>
            <li>Missing source labels for reported or pending claims.</li>
            <li>Privacy, copyright, or safety concerns on guide pages.</li>
          </ul>
        </article>
        <article className="guide-card">
          <span className="card-rule" />
          <h2>What not to send</h2>
          <p>
            Do not send Roblox passwords, cookies, recovery codes, private payment details, or files that require a download to inspect.
          </p>
          <p>
            This site is an independent fan guide and cannot provide official Roblox account support.
          </p>
        </article>
      </section>
    </main>
  );
}
