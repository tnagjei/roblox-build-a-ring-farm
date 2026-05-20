// input: `/upgrades/` route request
// output: English upgrades guide page rendered from typed i18n content
// pos: upgrades route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { enUpgradesPage } from "@/content/i18n/en/upgrades";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "en",
  slug: enUpgradesPage.slug,
  title: enUpgradesPage.meta.title,
  description: enUpgradesPage.meta.description
});

export default function UpgradesPage() {
  return <StrategyPageTemplate content={enUpgradesPage} locale="en" />;
}
