// input: `/codes/` route request
// output: English codes page rendered from typed i18n content
// pos: codes route（更新规则：文件变更需同步本注释与所属目录 README）

import type { Metadata } from "next";
import { CodesPageTemplate } from "@/components/templates/CodesPageTemplate";
import { enCodesPage } from "@/content/i18n/en/codes";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "en",
  slug: enCodesPage.slug,
  title: enCodesPage.meta.title,
  description: enCodesPage.meta.description
});

export default function CodesPage() {
  return <CodesPageTemplate content={enCodesPage} locale="en" />;
}
