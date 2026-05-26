// input: public assets, metadata helpers, page sources, and redirect config
// output: regression checks for static image/icon paths replacing dynamic routes
// pos: static asset migration tests（更新规则：文件变更需同步本注释与所属目录 README）

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const staticIconPath = "/icon.png";
const staticHeroPath = "/images/official-hero-image.webp";
const staticManifestPath = "/manifest.webmanifest";
const legacyPaths = ["/icon", "/icon/", "/official-hero-image", "/official-hero-image/", "/opengraph-image"];

function read(filePath) {
  return fs.readFileSync(path.join(root, filePath), "utf8");
}

function walk(dir, predicate, files = []) {
  for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    const relativePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(relativePath, predicate, files);
      continue;
    }

    if (predicate(relativePath)) {
      files.push(relativePath);
    }
  }

  return files;
}

test("required static asset files exist", () => {
  for (const filePath of [
    "public/favicon.ico",
    "public/icon.png",
    "public/apple-touch-icon.png",
    "public/images/official-hero-image.webp",
    "public/manifest.webmanifest"
  ]) {
    assert.ok(fs.existsSync(path.join(root, filePath)), `Missing static asset: ${filePath}`);
  }
});

test("site data points icon and hero assets at static files", () => {
  const data = JSON.parse(read("public/data/build-a-ring-farm.json"));

  assert.equal(data.assets.icon, staticIconPath);
  assert.equal(data.assets.hero, staticHeroPath);
});

test("page, manifest, and metadata sources do not actively reference legacy asset routes", () => {
  const activeSourceFiles = [
    "app/layout.tsx",
    ...walk("app", (filePath) => filePath.endsWith("/page.tsx")),
    ...walk("components", (filePath) => filePath.endsWith(".tsx")),
    ...walk("lib", (filePath) => filePath.endsWith(".ts")),
    ...walk("public", (filePath) => /\.(json|webmanifest)$/.test(filePath))
  ];

  for (const filePath of activeSourceFiles) {
    const source = read(filePath);

    for (const legacyPath of legacyPaths) {
      assert.equal(
        source.includes(`"${legacyPath}"`) || source.includes(`'${legacyPath}'`),
        false,
        `${filePath} still actively references ${legacyPath}`
      );
    }
  }
});

test("Next redirects preserve old asset URLs while pointing to static assets", () => {
  const source = read("next.config.mjs");
  const layoutSource = read("app/layout.tsx");

  assert.ok(source.includes("async redirects()"), "Missing Next redirects compatibility layer");
  assert.ok(source.includes(staticIconPath), "Missing static icon redirect destination");
  assert.ok(source.includes(staticHeroPath), "Missing static hero redirect destination");
  assert.ok(layoutSource.includes(staticManifestPath), "Root metadata must point to the static manifest path");
});
