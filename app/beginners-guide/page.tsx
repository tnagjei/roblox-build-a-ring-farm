// input: `/beginners-guide/` route request
// output: English beginner guide page rendered from typed i18n content
// pos: beginners-guide route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { enBeginnersGuidePage } from "@/content/i18n/en/beginners-guide";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "en",
  slug: enBeginnersGuidePage.slug,
  title: enBeginnersGuidePage.meta.title,
  description: enBeginnersGuidePage.meta.description
});

export default function BeginnersGuidePage() {
  return <StrategyPageTemplate content={enBeginnersGuidePage} locale="en" />;
}
