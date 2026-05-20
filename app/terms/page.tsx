// input: `/terms/` route request
// output: Build A Ring Farm Guide terms of use page
// pos: terms route

import type { Metadata } from "next";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Terms of Use | ${siteData.site.name}`,
  description: `Terms of use for ${siteData.site.name}, an independent Roblox fan guide.`,
  alternates: {
    canonical: absoluteUrl("/terms/")
  }
};

export default function TermsPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Terms</p>
          <h1>Terms of Use</h1>
          <p className="lede">
            Use this independent guide as a player reference, not as an official statement from Roblox or the game creator.
          </p>
        </div>
      </section>

      <section className="content-grid">
        <article className="guide-card">
          <span className="card-rule" />
          <h2>Independent guide</h2>
          <p>
            This site is intended for independent Roblox guide content. It does not claim official affiliation unless authorization is verified.
          </p>
        </article>
        <article className="guide-card">
          <span className="card-rule" />
          <h2>Information accuracy</h2>
          <p>
            Production pages should separate verified facts from pending claims, community reports, and editorial judgment.
          </p>
        </article>
        <article className="guide-card">
          <span className="card-rule" />
          <h2>Safety boundary</h2>
          <p>
            Do not ask users for Roblox credentials, cookies, recovery codes, payment information, or external downloads.
          </p>
        </article>
      </section>
    </main>
  );
}
