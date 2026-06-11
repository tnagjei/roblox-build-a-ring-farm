// input: `/pets/` route request
// output: English pets hub with community-reported pet roles, tier-list alignment, and source labels
// pos: pets hub route content（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = "Build A Ring Farm Pets Guide | Best Pets & Bonuses";
const pageDescription =
  "Build A Ring Farm pets guide covering community-reported best pets, pet bonuses, tier-list links, beginner picks, and source status labels today.";
const heroImage = "/images/official-hero-image.webp";
const communityStatus = "Community reported";
const pendingStatus = "Pending in-game check";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/pets/") },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/pets/"),
    type: "article",
    images: [{ url: absoluteUrl("/images/official-hero-image.webp"), width: 1200, height: 630, alt: "Build A Ring Farm pets guide" }]
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl("/images/official-hero-image.webp")] }
};

const topPetRows = [
  { pet: "T-Rex", tier: "S", role: "Late-game money and mutation support", note: "Reported earnings boost plus mutation upgrade support.", status: communityStatus },
  { pet: "Kitsune", tier: "S", role: "Mutation support and passive income scaling", note: "Reported as a strong high-rarity pet by public guides.", status: communityStatus },
  { pet: "Hydra", tier: "S", role: "High-value crop mutation support", note: "Reported as a top pet, but exact cooldowns still need checking.", status: communityStatus },
  { pet: "Velociraptor", tier: "S", role: "Growth speed support", note: "Reported time-skip style support for faster farming routes.", status: communityStatus },
  { pet: "Crocodile", tier: "B", role: "Beginner to mid-game crop support", note: "Reported fully-grown plant support with lower access pressure.", status: communityStatus },
  { pet: "Golden Retriever", tier: "D", role: "Starter filler pet", note: "Reported early filler value before stronger pets are available.", status: communityStatus },
  { pet: "Capybara", tier: "D", role: "Starter seed luck support", note: "Reported seed luck support, not a late-game best pet claim.", status: communityStatus }
];

const useCaseRows = [
  { useCase: "Best reported overall", pets: "T-Rex, Kitsune, Hydra, Velociraptor", rule: "Use the tier list before spending major cash or Robux.", status: communityStatus },
  { useCase: "Money farming", pets: "T-Rex, Kitsune, Hydra, Spinosaurus, Gallimimus", rule: "Treat earnings boosts as planning inputs, not confirmed calculator presets.", status: communityStatus },
  { useCase: "Crop growth", pets: "Velociraptor, Polar Bear, Gallimimus, Crocodile, Elephant", rule: "Check growth support against observed harvest timing.", status: communityStatus },
  { useCase: "Mutation support", pets: "T-Rex, Kitsune, Hydra, Mammoth", rule: "Keep chance and cooldown claims reported until tested in game.", status: communityStatus },
  { useCase: "Fertilizer or treat support", pets: "Spinosaurus, Triceratops, Gorilla, Golden Retriever", rule: "Do not mix pet treat claims with gear-shop fertilizer proof.", status: communityStatus },
  { useCase: "Beginner pets", pets: "Crocodile, Elephant, Llama, Golden Retriever, Capybara", rule: "Use them as starter support while building a stable crop loop.", status: communityStatus }
];

const bonusRows = [
  { bonus: "Earnings boost", examples: "T-Rex, Kitsune, Hydra", use: "Money farming and route comparison", status: communityStatus },
  { bonus: "Growth support", examples: "Velociraptor, Polar Bear, Gallimimus, Crocodile", use: "Faster crop cycles and fewer idle plots", status: communityStatus },
  { bonus: "Mutation support", examples: "T-Rex, Kitsune, Hydra, Mammoth", use: "Rare crop and advanced route testing", status: communityStatus },
  // P0: Super Pet Treat 是 UPDATE5 claimed reward，效果 pending。Strong Pet Treat 由 Spinosaurus 申请
  { bonus: "Strong Pet Treat (reported by Spinosaurus)", examples: "Spinosaurus (every 600s)", use: "Pet progression support; treat effect on pets is pending in-game verification", status: communityStatus },
  { bonus: "Super Pet Treat (reported as UPDATE5 reward)", examples: "UPDATE5 — Beebom reported, pending", use: "Claimed reward from UPDATE5 code; higher treat effect than Strong Pet Treat is claimed but not verified. Do not use as a calculator preset.", status: pendingStatus },
  { bonus: "Normal Pet Treat (reported by Triceratops)", examples: "Triceratops (every 300s), Golden Retriever (fertilizer context)", use: "Pet progression support; treat effect pending", status: communityStatus },
  { bonus: "Seed luck support", examples: "Capybara", use: "Starter seed testing only", status: communityStatus },
  { bonus: "Spray support", examples: "No reliable pet example yet", use: "Keep spray-specific pet support outside presets", status: pendingStatus }
];

const boundaryRows = [
  { topic: "Starfall Griffin", rule: "Keep it as a high-risk pending lead until stronger source proof exists.", status: pendingStatus },
  { topic: "Exact multipliers", rule: "Do not promote values from public guides into verified game data.", status: communityStatus },
  { topic: "Super Pet Treat effect", rule: "UPDATE5 is a Beebom-reported code with claimed reward Super Pet Treat. The treat effect on pets is pending in-game verification. Do not use as a calculator preset or verified boost.", status: pendingStatus },
  { topic: "Calculator presets", rule: "Pet bonuses should remain manual inputs, not default confirmed presets.", status: pendingStatus },
  { topic: "Single pet pages", rule: "Wait for stronger search demand before creating T-Rex, Kitsune, or Hydra pages.", status: "Deferred" }
];

const relatedLinks = [
  { href: "/tier-list/", title: "Pets Tier List", description: "Compare the full community-reported S to D pet list." },
  // P0 互链：UPDATE5 claimed reward 连接 codes 页
  { href: "/codes/", title: "Codes", description: "Check UPDATE5 code claim with reported Super Pet Treat reward." },
  { href: "/money-farming/", title: "Money Farming", description: "Use pet roles inside safer cash routes." },
  { href: "/calculator/", title: "Calculator", description: "Enter pet bonuses manually as pending inputs." },
  { href: "/mutations/", title: "Mutations", description: "Separate mutation support from verified mutation values." },
  { href: "/crops/", title: "Crops", description: "Check the base crop loop before chasing rare pets." },
  { href: "/updates/", title: "Updates", description: "Recheck pets after game updates." }
];

const faq = [
  {
    q: "What are the best pets in Build A Ring Farm?",
    a: "The strongest community-reported pets are T-Rex, Kitsune, Hydra, and Velociraptor. This is not official developer data, so recheck the tier list and the game before spending major resources."
  },
  {
    q: "Is this Build A Ring Farm pets guide official?",
    a: "No. This is an independent fan guide. Pet names, tiers, effects, cooldowns, and boosts stay community reported or pending unless stronger proof is added."
  },
  {
    q: "Do pet bonuses work in the calculator?",
    a: "Use pet bonuses as manual pending inputs only. This site does not turn reported pet bonuses into verified calculator presets."
  },
  {
    q: "Is Starfall Griffin a best pet?",
    a: "Not here. Starfall Griffin remains a high-risk pending lead until better evidence confirms its role, source, and value."
  },
  // P0 新增：Super Pet Treat 和 UPDATE5 问题
  {
    q: "What is Super Pet Treat in Build A Ring Farm?",
    a: "Super Pet Treat is a pet item reportedly obtainable from the UPDATE5 code, according to Beebom (June 2026). The exact in-game effect on pet progression is pending in-game verification. This page does not use Super Pet Treat as a verified calculator preset or confirmed boost."
  },
  {
    q: "Is UPDATE5 a real Build A Ring Farm code?",
    a: "UPDATE5 is a third-party reported code listed by Beebom in June 2026. This site does not mark it as verified active. The reported reward is Super Pet Treat. Test it only inside the real Roblox game UI and record whether it was accepted."
  }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

export default function PetsPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Community-reported pets hub</p>
          <h1>Build A Ring Farm Pets Guide</h1>
          <p className="lede">
            Use this Build A Ring Farm pets guide to connect the pets hub, pets tier list, pet bonuses, beginner choices, money farming roles, mutation support, and calculator boundaries without treating community data as official.
          </p>
          <div className="hero-actions">
            <Link prefetch={false} className="primary-link" href="/tier-list/">Open pets tier list</Link>
            <a className="secondary-link" href="#pet-bonuses">Compare pet bonuses</a>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm Roblox thumbnail" />
      </section>

      <section className="guide-card evidence-note-card">
        <span className="card-rule" />
        <p className="eyebrow">Evidence status</p>
        <h2>Pet data stays community reported</h2>
        <p>
          This pets hub aligns with the pets tier list, but it does not upgrade pet effects into verified facts. Treat pet tiers, boosts, cooldowns, rarity, and Egg Shop details as community reported until official or repeatable in-game proof is recorded.
        </p>
      </section>

      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Top reported pets</p>
          <h2>Build A Ring Farm pets summary</h2>
          <p>
            The pets page now gives concrete names instead of empty placeholders. For the complete S to D ranking, use the dedicated pets tier list.
          </p>
          <div className="data-list">
            {topPetRows.map((row) => (
              <div className="data-row four-field-row" key={row.pet}>
                <div><span>Pet</span><strong>{row.pet}</strong></div>
                <div><span>Reported tier</span><strong>{row.tier}</strong></div>
                <div><span>Role</span><strong>{row.role}</strong></div>
                <div><span>Source status</span><strong>{row.note}</strong><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Use-case table</p>
          <h2>Best pets by player goal</h2>
          <div className="data-list">
            {useCaseRows.map((row) => (
              <div className="data-row four-field-row" key={row.useCase}>
                <div><span>Use case</span><strong>{row.useCase}</strong></div>
                <div><span>Pets</span><strong>{row.pets}</strong></div>
                <div><span>Rule</span><strong>{row.rule}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid single-column-grid" id="pet-bonuses">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Pet bonuses</p>
          <h2>Pet bonus evidence table</h2>
          <p>
            Pet bonuses help players decide what to test next, but the calculator should keep them as manual pending inputs until stronger evidence exists.
          </p>
          <div className="data-list">
            {bonusRows.map((row) => (
              <div className="data-row four-field-row" key={row.bonus}>
                <div><span>Bonus</span><strong>{row.bonus}</strong></div>
                <div><span>Reported examples</span><strong>{row.examples}</strong></div>
                <div><span>Use</span><strong>{row.use}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="guide-card">
          <span className="card-rule" />
          <h2>How this pets hub connects to the tier list</h2>
          <h3>Hub first, full ranking second</h3>
          <p>
            This page answers broad Build A Ring Farm pets searches. The tier-list page answers ranking searches with a fuller S to D table, source notes, videos, and role comparisons.
          </p>
          <p>
            Keeping both pages aligned matters because a player who enters through the pets hub should see the same pet names and caution labels that appear on the ranking page.
          </p>
        </article>

        <article className="guide-card">
          <span className="card-rule" />
          <h2>How to use pets for money farming</h2>
          <h3>Stable route before rare pets</h3>
          <p>
            Pets can support money farming, crop growth, mutation routes, or starter progression. They should not replace the basic loop of active plots, selling, upgrades, and controlled route testing.
          </p>
          <p>
            If a reported pet bonus looks strong, test one route at a time before using it as a calculator input or buying a higher-rarity egg.
          </p>
        </article>

        <article className="guide-card">
          <span className="card-rule" />
          <h2>What this page will not claim</h2>
          <h3>No fake official pet data</h3>
          <p>
            This page does not claim official pet tiers, confirmed multipliers, confirmed cooldowns, or exact egg odds. It also does not turn Starfall Griffin into a best-pet recommendation.
          </p>
          <p>
            The next safe expansion is stronger evidence capture, not a set of thin single-pet pages.
          </p>
        </article>
      </section>

      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Boundary rules</p>
          <h2>Pending and deferred pet topics</h2>
          <div className="data-list">
            {boundaryRows.map((row) => (
              <div className="data-row three-field-row" key={row.topic}>
                <div><span>Topic</span><strong>{row.topic}</strong></div>
                <div><span>Rule</span><strong>{row.rule}</strong></div>
                <div><span>Status</span><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section-heading">
        <p className="eyebrow">Related guides</p>
        <h2>Pet route links</h2>
      </section>
      <section className="route-grid" aria-label="Pet route links">
        {relatedLinks.map((link) => (
          <Link prefetch={false} className="route-card" href={link.href} key={link.href}>
            <span className="card-rule" />
            <h2>{link.title}</h2>
            <p>{link.description}</p>
          </Link>
        ))}
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Build A Ring Farm Pets FAQ</h2>
        </div>
        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
