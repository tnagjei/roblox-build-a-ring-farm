// input: `/tier-list/` route request
// output: English community-reported Build A Ring Farm pets tier list with videos and source labels
// pos: pets tier-list route content（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Build A Ring Farm Pets Tier List | Best Pets & Ranking Guide";
const pageDescription =
  "Build A Ring Farm pets tier list with community-reported S to D pets, best pet roles, Egg Shop notes, videos, and source status for safer planning.";
const heroImage = "/images/official-hero-image.webp";
const communityStatus = "Community reported";
const needsVerification = "Needs verification";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://www.buildaringfarm.org/tier-list/"
  }
};

const summaryCards = [
  {
    title: "Pets first",
    description:
      "This page focuses on Build A Ring Farm pets tier list searches, not a broad crop or mutation tier list."
  },
  {
    title: "Community reported",
    description:
      "Pet names, tiers, boosts, cooldowns, and abilities come from public guide pages and community videos, not official developer data."
  },
  {
    title: "Use with caution",
    description:
      "Use the list to plan what to chase or test next. Recheck the game before spending cash, Robux, or rare items."
  }
];

const petTierRows = [
  {
    tier: "S",
    pet: "T-Rex",
    rarity: "Secret",
    reportedEffect: "12x to 15.5x earnings boost, mutation upgrade every 300s",
    role: "Best reported late-game money and mutation pet",
    status: communityStatus
  },
  {
    tier: "S",
    pet: "Kitsune",
    rarity: "Prismatic",
    reportedEffect: "6x earnings boost, 15% mutation upgrade chance every 5m",
    role: "Mutation support and passive income scaling",
    status: communityStatus
  },
  {
    tier: "S",
    pet: "Hydra",
    rarity: "Secret",
    reportedEffect: "5x earnings boost, 15% mutation upgrade chance every 10m",
    role: "High-value crop mutation support",
    status: communityStatus
  },
  {
    tier: "S",
    pet: "Velociraptor",
    rarity: "Prismatic",
    reportedEffect: "6x earnings boost, 5-minute Time Skip about every 15m",
    role: "Farm-wide growth speed support",
    status: communityStatus
  },
  {
    tier: "A",
    pet: "Polar Bear",
    rarity: "Epic",
    reportedEffect: "3.76x earnings boost, 20% chance to fully grow a random plant every 2m",
    role: "Crop growth acceleration",
    status: communityStatus
  },
  {
    tier: "A",
    pet: "Gallimimus",
    rarity: "Legendary",
    reportedEffect: "4.87x earnings boost, 25% chance to fully grow a random plant every 2m",
    role: "High uptime growth support",
    status: communityStatus
  },
  {
    tier: "A",
    pet: "Spinosaurus",
    rarity: "Secret",
    // Strong Pet Treat 和 Super Pet Treat 都属于 pet treat 系统；Super Pet Treat 是 UPDATE5 claimed reward
    reportedEffect: "6.69x earnings boost, applies Strong Pet Treat every 600s (note: Super Pet Treat is a separate item reportedly from UPDATE5 code — Beebom reported, pending)",
    role: "Support pet with strong reported boost; connects to pet treat system",
    status: communityStatus
  },
  {
    tier: "B",
    pet: "Lion",
    rarity: "Epic",
    reportedEffect: "3.2x earnings boost, 10% chance to apply Super Fertilizer every 5m",
    role: "Fertilizer support for mid-game farms",
    status: communityStatus
  },
  {
    tier: "B",
    pet: "Crocodile",
    rarity: "Rare",
    reportedEffect: "2.25x earnings boost, 10% chance to fully grow a random plant every 1m",
    role: "Beginner to mid-game crop growth support",
    status: communityStatus
  },
  {
    tier: "B",
    pet: "Mammoth",
    rarity: "Legendary",
    reportedEffect: "3.5x earnings boost, 10% mutation upgrade chance every 10m",
    role: "Mutation support when S-tier pets are missing",
    status: communityStatus
  },
  {
    tier: "C",
    pet: "Triceratops",
    rarity: "Secret",
    reportedEffect: "5.23x earnings boost, applies Normal Pet Treat every 300s",
    role: "Pet progression support, weaker than Strong Pet Treat routes",
    status: communityStatus
  },
  {
    tier: "C",
    pet: "Gorilla",
    rarity: "Rare",
    reportedEffect: "2.12x earnings boost, applies Strong Fertilizer every 900s",
    role: "Guaranteed fertilizer support with long cooldown",
    status: communityStatus
  },
  {
    tier: "C",
    pet: "Elephant",
    rarity: "Uncommon",
    reportedEffect: "1.43x earnings boost, 1.2x crop yield boost",
    role: "Early passive crop yield support",
    status: communityStatus
  },
  {
    tier: "D",
    pet: "Llama",
    rarity: "Uncommon",
    reportedEffect: "1.4x earnings boost, 1.2x Sprinkler Power boost",
    role: "Starter support for sprinkler setups",
    status: communityStatus
  },
  {
    tier: "D",
    pet: "Golden Retriever",
    rarity: "Common",
    reportedEffect: "1.22x earnings boost, applies Normal Fertilizer every 900s",
    role: "Starter filler pet",
    status: communityStatus
  },
  {
    tier: "D",
    pet: "Capybara",
    rarity: "Common",
    reportedEffect: "1.22x earnings boost, 1.1x Seed Luck boost",
    role: "Starter pet for seed luck attempts",
    status: communityStatus
  }
];

const roleRows = [
  { role: "Best reported overall", pets: "T-Rex, Kitsune, Hydra, Velociraptor", why: "They are repeatedly placed in S tier by public guide pages and community ranking videos." },
  { role: "Best for beginners", pets: "Crocodile, Elephant, Llama, Golden Retriever, Capybara", why: "These are easier early targets or lower-rarity support pets, but their exact value still needs in-game checking." },
  { role: "Best for money farming", pets: "T-Rex, Kitsune, Hydra, Spinosaurus, Gallimimus", why: "They combine reported earnings boosts with mutation, growth, or treat support." },
  { role: "Best for crop support", pets: "Velociraptor, Polar Bear, Gallimimus, Crocodile, Elephant", why: "They are reported to speed growth, fully grow plants, or improve crop yield." },
  { role: "Best for mutation support", pets: "T-Rex, Kitsune, Hydra, Mammoth", why: "They are reported to upgrade plant mutations directly or by chance." },
  // P0 补充：Super Pet Treat 是 UPDATE5 claimed reward，连接 pet treat 系统
  { role: "Pet treat support", pets: "Spinosaurus (Strong Pet Treat, reported), Triceratops (Normal Pet Treat, reported)", why: "These pets apply pet treats on cooldown. Super Pet Treat is a separate item claimed as the UPDATE5 code reward by Beebom — treat effects remain pending in-game verification." },
  { role: "Spray support", pets: "Pending", why: "The current checked sources mention fertilizer, treats, growth, seed luck, and mutation effects, but no reliable spray-specific pet effect." }
];

const pendingNonPetLeads = [
  {
    lead: "Honeycomb",
    type: "Reported mutation or effect lead",
    rule: "Keep it outside the pets ranking until a direct pet interaction is proven."
  },
  {
    lead: "Alien",
    type: "Reported mutation or effect lead",
    rule: "Mention it only as a pending tier-list research term, not as a pet."
  },
  {
    lead: "Farm mutation",
    type: "Reported mutation lead",
    rule: "Use the mutations page for details. Do not mix it into pet tiers."
  }
];

const sourceRows = [
  {
    source: "Pro Game Guides",
    type: "Guide page",
    use: "Primary community-reported pet table",
    caution: "Detailed values are useful but not official or in-game checked here."
  },
  {
    source: "Sportskeeda screenshot",
    type: "Guide page screenshot",
    use: "Confirms top competitor structure, tier sections, video embed, tables, screenshots, and FAQ",
    caution: "Exact small text should not be copied from screenshot unless readable."
  },
  {
    source: "buildaringfarm.app",
    type: "Fan-made competitor page",
    use: "Good model for source labels, direct answer, reported tier groups, video, and internal links",
    caution: "It also labels pet data as third-party reported, not official."
  },
  {
    source: "YouTube videos",
    type: "Community video evidence",
    use: "Good supporting media for players who want to inspect ranking logic visually",
    caution: "Video opinions do not verify exact stats unless a clear game UI frame is checked."
  },
  {
    source: "Roblox official game page",
    type: "Official source",
    use: "Confirms game identity and developer context",
    caution: "It does not provide pet names, pet rarity, pet boosts, or tier order."
  }
];

const videos = [
  {
    id: "N7rUYidtBAg",
    title: "BUILD A RING FARM BEST PETS TIER LIST! Roblox",
    channel: "ItzVexo",
    description: "Community pet tier video. Use it as a visual reference, not as verified stat proof."
  },
  {
    id: "DMX14nAXB94",
    title: "Ranking ALL Pets in Build A Ring Farm! (Roblox)",
    channel: "MistyLemon",
    description: "Community all-pets ranking video. Pair it with the table and recheck any exact claim in game."
  }
];

const relatedLinks = [
  { href: "/money-farming/", title: "Money Farming", description: "Turn pet tiers into a safer cash route." },
  { href: "/crops/", title: "Crops", description: "Check the base crop loop before chasing rare pets." },
  { href: "/mutations/", title: "Mutations", description: "Compare reported mutation pets with mutation rules." },
  { href: "/sprays/", title: "Sprays", description: "Check why spray-specific pet support is still pending." },
  { href: "/gear-shop/", title: "Gear Shop", description: "Compare fertilizer, sprays, and item support routes." },
  { href: "/updates/", title: "Updates", description: "Recheck pet data after new updates." },
  { href: "/calculator/", title: "Calculator", description: "Estimate your farming growth and multiplier inputs." },
  // P0 互链：UPDATE5 / Super Pet Treat 连接 codes 页
  { href: "/codes/", title: "Codes", description: "Check UPDATE5 reported Super Pet Treat reward and other June 2026 code claims." },
  { href: "/pets/", title: "Pets Guide", description: "Pet treat types, Super Pet Treat pending boundary, and pet use cases." }
];

const faq = [
  {
    q: "What is the best pet in Build A Ring Farm?",
    a: "The strongest community-reported pets are T-Rex, Kitsune, Hydra, and Velociraptor. This is not official developer data, so recheck before spending major resources."
  },
  {
    q: "Is this Build A Ring Farm pets tier list official?",
    a: "No. The list is community reported. Roblox and the developer page do not provide an official public pet tier list here."
  },
  {
    q: "What does S tier mean in this guide?",
    a: "S tier ranks community-reported pets such as T-Rex, Kitsune, and Hydra because of their high earnings boosts and mutation support. It is a research direction, not an official ranking."
  },
  {
    q: "Should beginners chase S tier pets first?",
    a: "No. Beginners should build a stable base crop loop, buy basic upgrades, and check the [codes](/codes/) page for starter rewards before spending millions on high-tier eggs."
  },
  {
    q: "Do pets help with money farming?",
    a: "Yes. Pets like T-Rex and Kitsune are reported to give major cash boosts. You can use the [calculator](/calculator/) to plan your yield or read the [money farming](/money-farming/) guide to optimize your cash routes."
  },
  {
    q: "Does this tier list change after updates?",
    a: "Yes. Any new update can change pet abilities or prices. We recommend checking the updates page regularly to see if tiers need changes."
  },
  // P0 新增：Super Pet Treat 和 UPDATE5 问题
  {
    q: "What is Super Pet Treat in Build A Ring Farm?",
    a: "Super Pet Treat is a pet item reported as the reward for the UPDATE5 code, according to Beebom (June 2026). It is different from Strong Pet Treat (applied by Spinosaurus) and Normal Pet Treat (applied by Triceratops). The Super Pet Treat effect on pet progression is pending in-game verification. Do not treat it as a confirmed boost in the calculator."
  },
  {
    q: "How does UPDATE5 connect to the pets tier list?",
    a: "UPDATE5 is a third-party reported code with a claimed reward of Super Pet Treat. Because Super Pet Treat is a pet system item, this tier list notes the connection without confirming the effect. Check the codes page for the full UPDATE5 watchlist and the pets guide for the pet treat evidence boundary."
  }
];

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

function videoEmbedUrl(id: string) {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}

function videoWatchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

export default function TierListPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Community-reported pets tier list</p>
          <h1>Build A Ring Farm Pets Tier List</h1>
          <p className="lede">
            Compare the best Build A Ring Farm pets by community-reported S to D tiers, reported effects, beginner value, money farming value, crop support, mutation support, and source status.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#pets-tier-table">View pet tiers</a>
            <a className="secondary-link" href="#pet-videos">Watch videos</a>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Build A Ring Farm farm with crops and ring layout" />
      </section>

      <section className="guide-card evidence-note-card">
        <span className="card-rule" />
        <p className="eyebrow">Evidence status</p>
        <h2>This is not an official pet ranking</h2>
        <p>
          The pets tier list below follows public guide pages, a Sportskeeda screenshot, buildaringfarm.app source-label patterns, and two community videos. Treat every pet effect, cooldown, chance, and boost as community reported until an official source or clear in-game screenshot confirms it.
        </p>
      </section>

      <section className="research-grid" aria-label="Pets tier list summary">
        {summaryCards.map((card) => (
          <article className="research-card" key={card.title}>
            <span className="card-rule" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="section-heading" id="pets-tier-table">
        <p className="eyebrow">Reported S to D list</p>
        <h2>Build A Ring Farm pets tier table</h2>
      </section>
      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Community reported</p>
          <h2>Best pets by reported tier</h2>
          <p>
            This table is useful for SEO searchers who want a clear answer, but it stays source-labeled. Do not read a reported multiplier as verified game data.
          </p>
          <div className="data-list">
            {petTierRows.map((row) => (
              <div className="data-row four-field-row" key={`${row.tier}-${row.pet}`}>
                <div><span>Tier</span><strong>{row.tier}</strong></div>
                <div><span>Pet</span><strong>{row.pet} <small>({row.rarity})</small></strong></div>
                <div><span>Reported effect</span><strong>{row.reportedEffect}</strong></div>
                <div><span>Role and status</span><strong>{row.role}</strong><StatusBadge status={row.status} /></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section-heading">
        <p className="eyebrow">Best pet roles</p>
        <h2>Which pets are best for each use?</h2>
      </section>
      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Use-case view</p>
          <h2>Beginner, money farming, crop, mutation, and spray support</h2>
          <div className="data-list">
            {roleRows.map((row) => (
              <div className="data-row three-field-row" key={row.role}>
                <div><span>Use case</span><strong>{row.role}</strong></div>
                <div><span>Pets</span><strong>{row.pets}</strong></div>
                <div><span>Why</span><strong>{row.why}</strong></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="guide-card">
          <span className="card-rule" />
          <h2>How to get pets</h2>
          <h3>Egg Shop and Robux offers</h3>
          <p>
            Public guides report that pets are obtained from the Eggs shop on the right side of the map. A basic Common Egg is reported around 25 million cash, with higher-rarity eggs costing more.
          </p>
          <p>
            Robux egg offers are also reported. Exact prices, egg pools, and pet odds should stay pending until checked inside the game.
          </p>
          <ul>
            <li>Use the Egg Shop as the main reported path.</li>
            <li>Check price and rarity before buying.</li>
            <li>Do not spend Robux from a guide claim alone.</li>
          </ul>
        </article>

        <article className="guide-card">
          <span className="card-rule" />
          <h2>Why S tier pets rank highest</h2>
          <h3>Money plus mutation or growth support</h3>
          <p>
            T-Rex, Kitsune, Hydra, and Velociraptor rank highest in the current community-reported list because they combine stronger reported earnings with mutation or time-skip support.
          </p>
          <p>
            That does not make them official best pets. It means they are the safest names to show as community-reported S tier while the page waits for in-game screenshots.
          </p>
        </article>

        <article className="guide-card">
          <span className="card-rule" />
          <h2>What still needs verification</h2>
          <h3>Exact values and update changes</h3>
          <p>
            The biggest missing evidence is a clear pet index, pet tooltip screenshots, egg prices, egg pools, cooldown proof, proc chance proof, and controlled money farming tests.
          </p>
          <p>
            If a future update changes pets, this list should be refreshed before any tier or value is strengthened.
          </p>
        </article>
      </section>

      <section className="section-heading">
        <p className="eyebrow">Pending non-pet leads</p>
        <h2>Honeycomb, Alien, and Farm mutation are not pets</h2>
      </section>
      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">{needsVerification}</p>
          <h2>Keep mutation terms separate from pet tiers</h2>
          <p>
            Some Build A Ring Farm tier-list searches also surface Honeycomb, Alien, and Farm mutation terms. They are useful search leads, but they should not be inserted into the pets tier list unless a clear pet interaction is verified.
          </p>
          <div className="data-list">
            {pendingNonPetLeads.map((row) => (
              <div className="data-row three-field-row" key={row.lead}>
                <div><span>Lead</span><strong>{row.lead}</strong></div>
                <div><span>Type</span><strong>{row.type}</strong></div>
                <div><span>Use rule</span><strong>{row.rule}</strong></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section-heading" id="pet-videos">
        <p className="eyebrow">Community video evidence</p>
        <h2>Build A Ring Farm pets ranking videos</h2>
      </section>
      <section className="video-grid" aria-label="Build A Ring Farm pets videos">
        {videos.map((video) => (
          <article className="video-card" key={video.id}>
            <div className="video-frame">
              <iframe
                src={videoEmbedUrl(video.id)}
                title={video.title}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="video-meta">
              <h3>{video.title}</h3>
              <p>{video.channel}. {video.description}</p>
              <a href={videoWatchUrl(video.id)} target="_blank" rel="noopener noreferrer">Open on YouTube</a>
            </div>
          </article>
        ))}
      </section>

      <section className="section-heading">
        <p className="eyebrow">Source quality</p>
        <h2>Why the list stays labeled</h2>
      </section>
      <section className="content-grid single-column-grid">
        <article className="guide-card data-card">
          <span className="card-rule" />
          <p className="eyebrow">Source rules</p>
          <h2>What each source can prove</h2>
          <div className="data-list">
            {sourceRows.map((row) => (
              <div className="data-row four-field-row" key={row.source}>
                <div><span>Source</span><strong>{row.source}</strong></div>
                <div><span>Type</span><strong>{row.type}</strong></div>
                <div><span>Use</span><strong>{row.use}</strong></div>
                <div><span>Caution</span><strong>{row.caution}</strong></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section-heading">
        <p className="eyebrow">Related guides</p>
        <h2>Plan your next route</h2>
      </section>
      <section className="route-grid" aria-label="Related guides">
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
          <h2>Build A Ring Farm Pets Tier List FAQ</h2>
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
