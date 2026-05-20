// input: English upgrades guide page requirements
// output: typed English upgrades guide content object
// pos: English upgrades SEO content（更新规则：文件变更需同步本注释与所属目录 README）

import { createTemplateStrategyPage } from "@/lib/content/template-pages";

export const enUpgradesPage = createTemplateStrategyPage("upgrades", "en");
