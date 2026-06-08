// input: `/privacy/` route request
// output: Build A Ring Farm Guide privacy policy page
// pos: privacy route

import type { Metadata } from "next";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteData.site.name}`,
  description: `Privacy policy for ${siteData.site.name}, including contact email use, analytics, ads, external links, and Roblox account safety.`,
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
            This site does not require an account and does not collect Roblox passwords, cookies, recovery codes, payment details, or account credentials.
          </p>
          <p>
            If you email the site, your message and email address are used only to review the request, reply when needed, and keep a basic correction trail.
          </p>
        </article>
        <article className="guide-card">
          <span className="card-rule" />
          <h2>Analytics and ads</h2>
          <p>
            This site may use Google Analytics, Google AdSense, Microsoft Clarity, and privacy-enhanced embedded media when those services are configured for production.
          </p>
          <p>
            These services may process standard browser, device, cookie, performance, and interaction signals under their own policies.
          </p>
        </article>
        <article className="guide-card">
          <span className="card-rule" />
          <h2>External links</h2>
          <p>
            This site may link to Roblox, official game pages, and source references. External websites have separate privacy and safety practices.
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
