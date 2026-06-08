// input: `/about/` route request
// output: independent site identity and verification policy page
// pos: about route

import type { Metadata } from "next";
import { BrandIdentity } from "@/components/BrandIdentity";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: `About ${siteData.site.name}`,
  description: `About ${siteData.site.name}, an independent Build A Ring Farm fan guide with clear sourcing, safety boundaries, and contact details.`,
  alternates: {
    canonical: absoluteUrl("/about/")
  }
};

export default function AboutPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">About this guide</p>
          <h1>About {siteData.site.name}</h1>
          <p className="lede">
            This page explains who runs this independent Build A Ring Farm guide, what sources we trust, and how we keep Roblox players away from unsafe claims.
          </p>
        </div>
        <img className="hero-image" src={siteData.assets.hero} alt={`${siteData.game.name} Roblox thumbnail`} />
      </section>

      <section className="content-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <h2>Independent fan guide</h2>
          <p>
            {siteData.site.name} is a small independent fan guide for players who search for Build A Ring Farm codes, crop routes, rings, upgrades, weather events, sprays, mutations, and money farming tips. The site is maintained as a guide project, not as an official Roblox or developer property. Its role is to organize player-facing information into readable pages, mark uncertain claims clearly, and avoid pushing visitors toward account-risky shortcuts.
          </p>
          <p>
            The project uses public game pages, visible in-game checks, developer-linked sources when available, and dated editorial reviews. If a claim cannot be verified, it should stay labeled as pending, reported, community-reported, or research-only. This matters most for codes, Discord links, rewards, pet stats, value lists, script searches, and any page that could affect account safety.
          </p>
          <p>
            The site does not ask for Roblox credentials, browser cookies, recovery codes, payments, or downloads. Corrections and privacy questions can be sent to {siteData.site.contactEmail}. When pages change, the goal is to improve usefulness for players while keeping the boundary between verified fact and editorial judgment visible.
          </p>
        </article>
        <article className="guide-card">
          <span className="card-rule" />
          <h2>Verification first</h2>
          <p>
            Codes, rewards, unit stats, value lists, Discord links, and official claims should stay pending until supported by official or in-game evidence.
          </p>
        </article>
        <article className="guide-card">
          <span className="card-rule" />
          <h2>Source boundary</h2>
          <p>
            Game facts should come from the official Roblox page, developer-linked sources, or clearly recorded in-game checks.
          </p>
        </article>
      </section>

      <BrandIdentity />
    </main>
  );
}
