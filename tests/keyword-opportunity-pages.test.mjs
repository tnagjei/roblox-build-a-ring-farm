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
