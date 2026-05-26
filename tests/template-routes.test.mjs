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

function routePath(locale, slug) {
  const cleanSlug = slug.replace(/^\/+/, "").replace(/\/+$/, "");
  if (locale === "en") return cleanSlug ? `/${cleanSlug}/` : "/";
  return cleanSlug ? `/${locale}/${cleanSlug}/` : `/${locale}/`;
}

test("sitemap route count matches completed pages", () => {
  const config = read("lib/game-config.ts");
  const completedLocales = extractArray(config, "completedLocales");
  const completedCoreSlugs = extractArray(config, "completedCoreSlugs");
  const completedEnglishOnlySlugs = extractArray(config, "completedEnglishOnlySlugs");

  const expectedCount = completedLocales.length * completedCoreSlugs.length + completedEnglishOnlySlugs.length;
  assert.equal(expectedCount, 24);
});

test("localized core routes exist for completed core slugs", () => {
  const config = read("lib/game-config.ts");
  const completedLocales = extractArray(config, "completedLocales");
  const completedCoreSlugs = extractArray(config, "completedCoreSlugs");

  for (const locale of completedLocales) {
    for (const slug of completedCoreSlugs) {
      if (locale === "en") continue;
      const target = slug ? path.join(root, "app", locale, slug, "page.tsx") : path.join(root, "app", locale, "page.tsx");
      assert.ok(fs.existsSync(target), `Missing localized route file for ${routePath(locale, slug)}`);
    }
  }
});

test("completed English-only route files exist only at root English paths", () => {
  const config = read("lib/game-config.ts");
  const completedEnglishOnlySlugs = extractArray(config, "completedEnglishOnlySlugs");

  for (const slug of completedEnglishOnlySlugs) {
    assert.ok(fs.existsSync(path.join(root, "app", slug, "page.tsx")), `Missing app/${slug}/page.tsx`);
  }
});
