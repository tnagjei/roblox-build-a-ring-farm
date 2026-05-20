import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();

function read(filePath) {
  return fs.readFileSync(path.join(root, filePath), "utf8");
}

test("home video module is configured from site config and uses no-cookie embeds", () => {
  const config = read("lib/game-config.ts");
  const component = read("components/HomeVideoGuides.tsx");

  assert.match(config, /homeVideoIds:\s*\[\]/, "homeVideoIds should default to an empty array");
  assert.ok(component.includes("gameConfig.homeVideoIds"), "HomeVideoGuides must read video IDs from config by default");
  assert.ok(component.includes("youtube-nocookie.com/embed"), "HomeVideoGuides must use privacy-enhanced YouTube embeds");
});

test("home video module does not include copied child-site video IDs", () => {
  const component = read("components/HomeVideoGuides.tsx");
  const forbiddenVideoIds = ["GYWXYT40GMc", "9Tl38UScWMo", "a9WfOg8Zjiw", "vKn7q_niJeA", "-Hf_fcuIlFI"];

  for (const id of forbiddenVideoIds) {
    assert.equal(component.includes(id), false, `Copied child-site video ID must not appear: ${id}`);
  }
});

test("official hero image route reads universe ID from data and has no child-site constants", () => {
  const route = read("app/official-hero-image/route.ts");
  const childSiteUniverseId = "100061" + "04044";
  const childSiteDomain = "wizardalchemy" + ".online";

  assert.ok(route.includes("siteData.game.universeId"), "official hero route must use site data universeId");
  assert.ok(route.includes("siteData.site.defaultBaseUrl"), "official hero route must use configured base URL for fallback");
  assert.equal(route.includes(childSiteUniverseId), false, "child-site universeId must not be hardcoded");
  assert.equal(route.includes(childSiteDomain), false, "child-site domain must not be hardcoded");
});

test("homepage template delegates video rendering to reusable module", () => {
  const template = read("components/templates/HomePageTemplate.tsx");

  assert.ok(template.includes("HomeVideoGuides"), "HomePageTemplate must use reusable HomeVideoGuides");
  assert.equal(template.includes("formatDuration"), false, "HomePageTemplate should not keep old inline video formatting helper");
});
