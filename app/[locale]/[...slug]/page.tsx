// input: legacy locale and catch-all slug route parameters
// output: 404 for unfinished localized catch-all fallbacks
// pos: disabled legacy localized catch-all route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [];
}

export function generateMetadata(): Metadata {
  return {
    robots: {
      index: false,
      follow: false
    }
  };
}

export default function LegacyLocalizedCatchAllPage() {
  notFound();
}
