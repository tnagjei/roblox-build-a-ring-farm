// input: `/privacy/` route request
// output: Build A Ring Farm Guide privacy policy page
// pos: privacy route

import type { Metadata } from "next";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteData.site.name}`,
  description: `Privacy policy for ${siteData.site.name}, an independent Roblox fan guide with no account system.`,
  alternates: {
    canonical: absoluteUrl("/privacy/")
  }
};

export default function PrivacyPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Privacy</p>
          <h1>Privacy Policy</h1>
          <p className="lede">
            This site is an independent fan guide and does not require visitors to create an account.
          </p>
        </div>
      </section>

      <section className="content-grid">
        <article className="guide-card">
          <span className="card-rule" />
          <h2>Data collection</h2>
          <p>
            This site does not collect Roblox passwords, cookies, recovery codes, or account credentials. If analytics or ads are enabled, they should be disclosed here.
          </p>
        </article>
        <article className="guide-card">
          <span className="card-rule" />
          <h2>Third-party services</h2>
          <p>
            This site may link to Roblox and may use standard analytics, ads, or embedded media only when configured for the project.
          </p>
        </article>
        <article className="guide-card">
          <span className="card-rule" />
          <h2>Contact</h2>
          <p>
            For privacy questions, contact {siteData.site.contactEmail}.
          </p>
        </article>
      </section>
    </main>
  );
}
