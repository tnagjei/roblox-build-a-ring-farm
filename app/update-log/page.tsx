// input: `/update-log/` route request
// output: redirect to the canonical updates timeline page
// pos: update-log alias route（更新规则：文件变更需同步本注释与所属目录 README）

import { redirect } from "next/navigation";

export default function UpdateLogRedirectPage() {
  redirect("/updates/");
}
