// input: home module source files and legacy image route source
// output: regression checks for video embedding and static hero route migration
// pos: homepage module tests（更新规则：文件变更需同步本注释与所属目录 README）

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

test("legacy official hero image route is replaced by static redirect config", () => {
  const config = read("next.config.mjs");
  const routePath = path.join(root, "app/official-hero-image/route.ts");
  const childSiteUniverseId = "100061" + "04044";
  const childSiteDomain = "wizardalchemy" + ".online";

  assert.equal(fs.existsSync(routePath), false, "legacy dynamic hero route should be removed after static redirects pass");
  assert.ok(config.includes("/official-hero-image"), "next config must keep the old hero URL redirect");
  assert.ok(config.includes("/images/official-hero-image.webp"), "old hero URL must redirect to the static hero asset");
  assert.equal(config.includes("thumbnails.roblox.com"), false, "redirect config must not call the Roblox thumbnail API at request time");
  assert.equal(config.includes(childSiteUniverseId), false, "child-site universeId must not be hardcoded");
  assert.equal(config.includes(childSiteDomain), false, "child-site domain must not be hardcoded");
});

test("homepage template delegates video rendering to reusable module", () => {
  const template = read("components/templates/HomePageTemplate.tsx");

  assert.ok(template.includes("HomeVideoGuides"), "HomePageTemplate must use reusable HomeVideoGuides");
  assert.equal(template.includes("formatDuration"), false, "HomePageTemplate should not keep old inline video formatting helper");
});
