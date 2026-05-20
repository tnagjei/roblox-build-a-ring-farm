// input: `/crops/` route request
// output: English crops guide page rendered from typed i18n content
// pos: crops route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { enCropsPage } from "@/content/i18n/en/crops";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "en",
  slug: enCropsPage.slug,
  title: enCropsPage.meta.title,
  description: enCropsPage.meta.description
});

export default function CropsPage() {
  return <StrategyPageTemplate content={enCropsPage} locale="en" />;
}
