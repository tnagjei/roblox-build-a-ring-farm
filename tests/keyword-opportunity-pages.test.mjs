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
