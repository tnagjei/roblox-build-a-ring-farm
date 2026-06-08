// input: App Router trust pages, sitemap registry, and global footer source
// output: AdSense trust-signal route and navigation regression checks
// pos: AdSense readiness tests（更新规则：文件变更需同步本注释与所属目录 README）

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const trustSlugs = ["about", "contact", "privacy", "terms"];

function read(filePath) {
  return fs.readFileSync(path.join(root, filePath), "utf8");
}

test("AdSense trust pages exist as real routes with folder docs", () => {
  for (const slug of trustSlugs) {
    assert.ok(fs.existsSync(path.join(root, "app", slug, "page.tsx")), `Missing trust page route: /${slug}/`);
    assert.ok(fs.existsSync(path.join(root, "app", slug, "README.md")), `Missing trust page README: app/${slug}/README.md`);
  }
});

test("footer exposes every trust page as an internal crawl path", () => {
  const source = read("components/SiteChrome.tsx");

  for (const slug of trustSlugs) {
    assert.ok(source.includes(`href: "/${slug}/"`), `Footer trust navigation must include /${slug}/`);
  }
});

test("sitemap registry includes every trust page", () => {
  const source = read("lib/page-registry.ts");

  for (const slug of trustSlugs) {
    assert.ok(source.includes(`path: "/${slug}/"`), `Sitemap registry must include /${slug}/`);
  }
});

test("privacy policy does not expose template placeholders", () => {
  const source = read("app/privacy/page.tsx");
  const forbiddenPlaceholders = ["[Your Company Name]", "[Your Website URL]", "Your Company", "example.com"];

  for (const placeholder of forbiddenPlaceholders) {
    assert.equal(source.includes(placeholder), false, `Privacy page still contains placeholder: ${placeholder}`);
  }
});
