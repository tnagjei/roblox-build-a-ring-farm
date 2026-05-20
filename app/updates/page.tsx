// input: `/updates/` route request
// output: English updates page rendered from typed i18n content
// pos: updates route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { StrategyPageTemplate } from "@/components/templates/StrategyPageTemplate";
import { enUpdatesPage } from "@/content/i18n/en/updates";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "en",
  slug: enUpdatesPage.slug,
  title: enUpdatesPage.meta.title,
  description: enUpdatesPage.meta.description
});

export default function UpdatesPage() {
  return <StrategyPageTemplate content={enUpdatesPage} locale="en" />;
}
