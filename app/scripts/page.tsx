// input: `/scripts/` route request
// output: English script safety page rendered from typed i18n content
// pos: scripts route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { enScriptsPage } from "@/content/i18n/en/scripts";
import { buildEnglishOnlyMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildEnglishOnlyMetadata({
  slug: enScriptsPage.slug,
  title: enScriptsPage.meta.title,
  description: enScriptsPage.meta.description
});

export default function ScriptsPage() {
  return <StrategyPageTemplate content={enScriptsPage} locale="en" />;
}
