// input: keyword opportunity route files, public data, and site config
// output: Node test assertions for P0/P1 SEO opportunity coverage and evidence labels
// pos: keyword opportunity regression test（更新规则：机会页变化需同步本注释与 tests/README）

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();

function read(filePath) {
  return fs.readFileSync(path.join(root, filePath), "utf8");
}

function extractArray(source, key) {
  const match = source.match(new RegExp(`${key}:\\s*\\[([^\\]]*)\\]`, "m"));
  assert.ok(match, `Missing array config: ${key}`);
  return Array.from(match[1].matchAll(/["']([^"']*)["']/g)).map((item) => item[1]);
}

function metadataValue(source, name) {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)"`));
  assert.ok(match, `Missing ${name}`);
  return match[1];
}

test("P0 calculator, rings, and Update 3 status routes are configured and implemented", () => {
  const config = read("lib/game-config.ts");
  const coreSlugs = extractArray(config, "coreSlugs");
  const completedCoreSlugs = extractArray(config, "completedCoreSlugs");

  for (const slug of ["calculator", "rings", "update-3-status"]) {
    assert.ok(coreSlugs.includes(slug), `${slug} must be declared as a core slug`);
    assert.ok(completedCoreSlugs.includes(slug), `${slug} must be completed`);
    assert.ok(fs.existsSync(path.join(root, "app", slug, "page.tsx")), `Missing app/${slug}/page.tsx`);
    assert.ok(fs.existsSync(path.join(root, "app", slug, "README.md")), `Missing app/${slug}/README.md`);
  }
});

test("P0 pages follow SEO title and description constraints", () => {
  for (const slug of ["calculator", "rings", "update-3-status"]) {
    const source = read(`app/${slug}/page.tsx`);
    const pageTitle = metadataValue(source, "pageTitle");
    const pageDescription = metadataValue(source, "pageDescription");

    assert.ok(pageTitle.includes("Build A Ring Farm"), `${slug} title must include the core keyword`);
    assert.ok(pageTitle.length >= 50 && pageTitle.length <= 60, `${slug} title length should be 50-60 characters`);
    assert.ok(pageDescription.includes("Build A Ring Farm"), `${slug} description must include the core keyword`);
    assert.ok(
      pageDescription.length >= 140 && pageDescription.length <= 160,
      `${slug} description length should be 140-160 characters`
    );
  }
});

test("Update 3 status stays reported or pending, not verified", () => {
  const codes = read("content/i18n/en/codes.ts");
  const updates = read("content/i18n/en/updates.ts");
  const update3Page = read("app/update-3-status/page.tsx");
  const combined = `${codes}\n${updates}\n${update3Page}`;

  assert.match(combined, /Update 3/i, "codes or updates content must include an Update 3 status block");
  assert.match(combined, /reported|pending/i, "Update 3 content must use reported or pending status language");
  assert.doesNotMatch(combined, /Update 3[^"]*verified active/i, "Update 3 codes must not be called verified active");
});

test("P1 pages include new reported or pending opportunity terms", () => {
  const p1Expectations = [
    ["app/mutations/page.tsx", /Honeycomb|Alien|Farm mutation/i],
    ["app/weather-events/page.tsx", /Queen Bee|Honeycomb/i],
    ["app/tier-list/page.tsx", /Honeycomb|Alien|Farm mutation/i],
    ["app/gear-shop/page.tsx", /Acid Spray|Rainbow Spray/i],
    ["app/sprays/page.tsx", /Acid Spray|Rainbow Spray/i]
  ];

  for (const [filePath, pattern] of p1Expectations) {
    const source = read(filePath);
    assert.match(source, pattern, `${filePath} should cover the P1 report term`);
    assert.match(source, /reported|pending|needs verification/i, `${filePath} must label unverified data conservatively`);
  }
});

test("GSC expansion routes are configured, implemented, and ledgered", () => {
  const config = read("lib/game-config.ts");
  const coreSlugs = extractArray(config, "coreSlugs");
  const completedCoreSlugs = extractArray(config, "completedCoreSlugs");
  const data = JSON.parse(read("public/data/build-a-ring-farm.json"));
  const ledger = read("SEO_INDEX_LEDGER.md");

  for (const slug of ["rainbow-mutation", "rainbow-spray", "strong-fertilizer"]) {
    assert.ok(coreSlugs.includes(slug), `${slug} must be declared as a core slug`);
    assert.ok(completedCoreSlugs.includes(slug), `${slug} must be completed`);
    assert.ok(fs.existsSync(path.join(root, "app", slug, "page.tsx")), `Missing app/${slug}/page.tsx`);
    assert.ok(fs.existsSync(path.join(root, "app", slug, "README.md")), `Missing app/${slug}/README.md`);

    const source = read(`app/${slug}/page.tsx`);
    assert.doesNotMatch(source, /verified/i, `${slug} must not use verified language without evidence`);
    assert.match(source, /reported|pending|source status/i, `${slug} must label source status`);

    const page = data.pages.find((item) => item.key === slug);
    assert.ok(page, `${slug} must exist in public data`);
    assert.ok(page.targetQuery, `${slug} must record targetQuery`);
    assert.equal(page.indexTracking.launchDate, "2026-05-26");
    assert.equal(page.indexTracking.day7Review, "2026-06-02");
    assert.equal(page.indexTracking.day14Review, "2026-06-09");
    assert.match(ledger, new RegExp(`/${slug}/`), `${slug} must be recorded in SEO_INDEX_LEDGER`);
  }
});

test("seeds table records sourceStatus for every field", () => {
  const source = read("app/seeds/page.tsx");
  const data = JSON.parse(read("public/data/build-a-ring-farm.json"));
  const seeds = data.pages.find((item) => item.key === "seeds");

  assert.match(source, /sourceStatus/, "seeds page must render field-level sourceStatus data");
  assert.ok(Array.isArray(seeds.sourceStatusTable), "seeds public data must include sourceStatusTable");

  for (const row of seeds.sourceStatusTable) {
    for (const field of row.fields) {
      assert.ok(field.sourceStatus, `${row.rowKey}.${field.label} must have sourceStatus`);
    }
  }
});

test("June 2026 code claims remain reported or pending with source-specific PLANTRUSH rewards", () => {
  const codes = read("content/i18n/en/codes.ts");
  const data = JSON.parse(read("public/data/build-a-ring-farm.json"));

  assert.match(codes, /June 2026/i, "codes content must cover June 2026 search intent");
  assert.match(codes, /active vs verified/i, "codes content must explain active vs verified");
  assert.match(codes, /PLANTRUSH/i, "codes content must mention PLANTRUSH");
  assert.match(codes, /Plant Rush Box/i, "codes content must include Dexerto Plant Rush Box claim");
  assert.match(codes, /Plant Rush Boss Box/i, "codes content must include PCGamesN or buildaringfarm.net Plant Rush Boss Box claim");
  assert.doesNotMatch(codes, /PLANTRUSH[^"]*verified active/i, "PLANTRUSH must not be called verified active");

  const plantrush = data.codes.communityReportedCodes.find((item) => item.code === "PLANTRUSH");
  assert.ok(plantrush, "public data must include PLANTRUSH as a community reported lead");
  assert.equal(plantrush.status.toLowerCase(), "community reported");
  assert.match(plantrush.reportedReward, /Plant Rush Box|Plant Rush Boss Box/);
  assert.ok(Array.isArray(plantrush.sourceClaims), "PLANTRUSH must preserve source-specific reward claims");
});

test("broader update status covers Update 4 as pending without patch-note certainty", () => {
  const config = read("lib/game-config.ts");
  const coreSlugs = extractArray(config, "coreSlugs");
  const completedCoreSlugs = extractArray(config, "completedCoreSlugs");
  const updateStatusPath = path.join(root, "app", "update-status", "page.tsx");

  assert.ok(coreSlugs.includes("update-status"), "update-status must be declared as a core slug");
  assert.ok(completedCoreSlugs.includes("update-status"), "update-status must be completed");
  assert.ok(fs.existsSync(updateStatusPath), "Missing app/update-status/page.tsx");

  const source = read("app/update-status/page.tsx");
  assert.match(source, /Update 4/i, "update status page must cover Update 4 intent");
  assert.match(source, /pending|reported/i, "Update 4 must be reported or pending");
  assert.doesNotMatch(source, /official patch notes|verified patch notes/i, "Update 4 patch notes must not be presented as verified");
});

test("June 2026 pets hub route is configured and source-labeled", () => {
  const config = read("lib/game-config.ts");
  const coreSlugs = extractArray(config, "coreSlugs");
  const completedCoreSlugs = extractArray(config, "completedCoreSlugs");
  const petsPage = read("app/pets/page.tsx");
  const data = JSON.parse(read("public/data/build-a-ring-farm.json"));

  assert.ok(coreSlugs.includes("pets"), "pets must be declared as a core slug");
  assert.ok(completedCoreSlugs.includes("pets"), "pets must be completed");
  assert.ok(fs.existsSync(path.join(root, "app", "pets", "README.md")), "Missing app/pets/README.md");

  for (const term of ["T-Rex", "Kitsune", "Hydra", "Velociraptor", "Crocodile", "Golden Retriever", "Capybara"]) {
    assert.match(petsPage, new RegExp(term, "i"), `pets page must include ${term}`);
  }

  assert.match(petsPage, /pet bonuses/i, "pets page must cover pet bonuses");
  assert.match(petsPage, /Community reported|Pending in-game check/i, "pets page must keep source labels");
  assert.doesNotMatch(petsPage, /verified (pet|tier|multiplier|cooldown|bonus)/i, "pets page must not verify pet claims");

  const page = data.pages.find((item) => item.key === "pets");
  assert.ok(page, "pets must exist in public data");
  assert.ok(page.relatedPages.includes("tier-list"), "pets public data must link to tier-list");
});

test("new June mutation claims are pending in mutations and calculator presets", () => {
  const mutations = read("app/mutations/page.tsx");
  const calculator = read("app/calculator/page.tsx");

  for (const term of ["Cosmic", "Bubblegum", "Fire", "Starfall", "Admin"]) {
    assert.match(mutations, new RegExp(term, "i"), `mutations page must include ${term}`);
    assert.match(calculator, new RegExp(term, "i"), `calculator page must include ${term} preset`);
  }

  assert.match(mutations, /pending in-game verification/i, "new mutation claims must stay pending");
  assert.match(calculator, /pending preset|pending in-game verification/i, "calculator presets must stay pending");
  assert.doesNotMatch(mutations, /Starfall[^"]*verified stacking/i, "Starfall stacking must not be called verified");
});

test("official Discord source policy stays pending until source is confirmed", () => {
  const codes = read("content/i18n/en/codes.ts");
  const data = JSON.parse(read("public/data/build-a-ring-farm.json"));

  assert.match(codes, /official Discord/i, "codes content must cover official Discord source policy");
  assert.match(codes, /pending/i, "Discord source policy must remain pending");

  const discordSource = data.game.officialLinks.find((item) => /Discord/i.test(item.label));
  assert.ok(discordSource, "public data must include an official Discord source row");
  assert.equal(discordSource.status, "pending");
});

test("June 2026 crop value blueprint is merged into existing pages without thin crop routes", () => {
  const crops = read("lib/content/template-pages.ts");
  const strategyTemplate = read("components/templates/StrategyPageTemplate.tsx");
  const seeds = read("app/seeds/page.tsx");
  const calculator = read("app/calculator/page.tsx");
  const advancedCrops = read("app/advanced-crops/page.tsx");
  const data = JSON.parse(read("public/data/build-a-ring-farm.json"));
  const combined = `${crops}\n${seeds}\n${calculator}\n${advancedCrops}`;

  for (const slug of ["void-fruit", "garden-devourer", "dragonfruit", "passion-fruit", "elder-dragonroot"]) {
    assert.equal(fs.existsSync(path.join(root, "app", "crops", slug)), false, `Do not create thin /crops/${slug}/ route`);
  }

  for (const term of ["Void Fruit", "Garden Devourer", "Dragonfruit", "Passion Fruit", "Elder Dragonroot"]) {
    assert.match(crops, new RegExp(term, "i"), `/crops/ content must include ${term}`);
    assert.match(seeds, new RegExp(term, "i"), `/seeds/ content must include ${term}`);
    assert.match(calculator, new RegExp(term, "i"), `/calculator/ content must include ${term}`);
    assert.match(advancedCrops, new RegExp(term, "i"), `/advanced-crops/ content must include ${term}`);
  }

  for (const required of [
    "Reported high-value crop leads",
    "Crop value watchlist",
    "Seed leads that need crop checks",
    "High-value crops use manual inputs only",
    "High-value crop leads are not rare-effect proof"
  ]) {
    assert.match(combined, new RegExp(required, "i"), `Missing required blueprint block: ${required}`);
  }

  for (const videoId of ["r8EATLyhrlw", "v1YgAOjuQRs", "9w9nu1RNefs", "Cqp6N-1Azzk", "gJrbZmzh3l8"]) {
    assert.match(combined, new RegExp(videoId), `Missing YouTube embed id ${videoId}`);
  }

  assert.match(strategyTemplate, /youtube-nocookie\.com\/embed/, "Strategy template must use privacy-safe YouTube embeds");
  assert.match(strategyTemplate, /loading="lazy"/, "Strategy template iframes must lazy load");
  assert.match(strategyTemplate, /allowFullScreen/, "Strategy template iframes must allow fullscreen");
  assert.match(strategyTemplate, /fallbackLabel/, "Strategy template must render fallback links");
  assert.match(advancedCrops, /youtube-nocookie\.com\/embed/, "advanced-crops must use privacy-safe YouTube embeds");

  assert.match(combined, /reported|pending|estimated/i, "Blueprint content must preserve source labels");
  assert.match(calculator, /manual high-value crop inputs/i, "calculator must explain manual high-value crop input");
  assert.doesNotMatch(calculator, /href="\/events\/"/, "calculator must not link to missing /events/ route");
  assert.doesNotMatch(calculator, /Void Fruit[^"]*preset/i, "calculator must not create a Void Fruit preset");
  assert.doesNotMatch(combined, /verified best crop|guaranteed best crop|official crop value|working crop value/i, "crop blueprint must not make unsupported value claims");

  const cropsPage = data.pages.find((item) => item.key === "crops");
  const calculatorPage = data.pages.find((item) => item.key === "calculator");
  const advancedPage = data.pages.find((item) => item.key === "advanced-crops");
  assert.match(cropsPage.primaryKeyword, /high value crops|crop value list/i, "public data crops keyword must target the crop value intent");
  assert.ok(cropsPage.relatedPages.includes("calculator"), "crops public data must link to calculator");
  assert.ok(calculatorPage.relatedPages.includes("crops"), "calculator public data must link to crops");
  assert.ok(advancedPage.relatedPages.includes("seeds"), "advanced-crops public data must link to seeds");
});

test("June 15 SERP keyword blueprint refreshes inner pages without unsupported claims", () => {
  const codes = read("app/codes/page.tsx");
  const events = read("app/events/page.tsx");
  const updateStatus = read("app/update-status/page.tsx");
  const crops = read("lib/content/template-pages.ts");
  const seeds = read("app/seeds/page.tsx");
  const data = JSON.parse(read("public/data/build-a-ring-farm.json"));
  const ledger = read("SEO_INDEX_LEDGER.md");

  for (const route of [
    "carnival-code",
    "carnival-pass-tickets",
    "update6",
    "void-fruit-value",
    "garden-devourer-value",
    "dragonfruit-value",
    "seeds-tier-list"
  ]) {
    assert.equal(fs.existsSync(path.join(root, "app", route)), false, `Do not create thin /${route}/ route`);
  }

  for (const term of ["CARNIVAL", "100 Carnival Pass Tickets", "UPDATE5", "250KUSERS", "PLANTRUSH"]) {
    assert.match(codes, new RegExp(term, "i"), `/codes/ must include ${term}`);
  }
  for (const source of ["Beebom", "Pro Game Guides", "PCGamesN"]) {
    assert.match(codes, new RegExp(source, "i"), `/codes/ must preserve ${source} source claim`);
  }
  assert.match(codes, /Build A Ring Farm Codes June 2026 \| CARNIVAL Reported/, "codes title must target CARNIVAL");
  assert.match(codes, /syp2pjKl8uE/, "codes page must include CARNIVAL video reference");
  assert.doesNotMatch(codes, /CARNIVAL works|CARNIVAL is verified|all codes confirmed/i, "CARNIVAL must stay reported or pending");

  assert.match(events, /Carnival Pass Tickets/i, "events page must cover Carnival Pass Tickets");
  assert.match(events, /Third-party reported, mechanics pending/i, "events page must keep Carnival mechanics pending");
  assert.match(events, /K5KAcsH1Zcw/, "events page must include Carnival video reference");
  assert.doesNotMatch(events, /event mechanics are verified|ticket shop verified|verified ticket odds/i, "events page must not confirm Carnival mechanics");

  assert.match(updateStatus, /Update 6/i, "update-status must cover Update 6");
  assert.match(updateStatus, /UPDATE6/i, "update-status must track UPDATE6");
  assert.match(updateStatus, /Not verified as a code/i, "UPDATE6 must stay pending");
  assert.match(updateStatus, /szp3NOtMOQ8/, "update-status must include Update 6 video reference");
  assert.doesNotMatch(updateStatus, /UPDATE6 works|UPDATE6 active|Update 6 patch notes confirmed/i, "UPDATE6 must not be promoted");

  for (const term of ["Reported crop value source differences", "Void Fruit", "180K", "360K", "Garden Devourer", "350K", "Dragonfruit", "disputed", "Cqp6N-1Azzk"]) {
    assert.match(crops, new RegExp(term, "i"), `/crops/ template must include ${term}`);
  }
  assert.doesNotMatch(crops, /verified strongest crop|calculator preset value/i, "crops page must not create unsupported presets or strongest-crop claims");

  assert.match(seeds, /Seed-to-crop value boundary/i, "seeds page must add seed-to-crop value boundary");
  assert.match(seeds, /source-difference matrix|reported source-difference matrix/i, "seeds page must point value differences to crops");

  const carnivalCode = data.codes.communityReportedCodes.find((item) => item.code === "CARNIVAL");
  assert.ok(carnivalCode, "public data must include CARNIVAL as community reported code");
  assert.equal(carnivalCode.status, "third-party reported");
  assert.match(carnivalCode.reportedReward, /Carnival Pass Tickets/i);

  const pagesByKey = Object.fromEntries(data.pages.map((page) => [page.key, page]));
  assert.ok(pagesByKey.codes.relatedPages.includes("events"), "codes data must link to events");
  assert.equal(pagesByKey.events.primaryKeyword, "Build A Ring Farm Carnival Pass Tickets");
  assert.equal(pagesByKey["update-status"].primaryKeyword, "Build A Ring Farm Update 6 codes");
  assert.equal(pagesByKey.crops.primaryKeyword, "Build A Ring Farm crop value list");
  assert.match(ledger, /2026-06-15 SERP keyword blueprint/i, "ledger must record June 15 execution");
});
