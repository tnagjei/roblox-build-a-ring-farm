# updates
- 用途：Build A Ring Farm 更新枢纽 SEO 页面，承接 Update 6 / CARNIVAL / UPDATE6 搜索意图与当前裁决。
- 关键入口：`page.tsx`（渲染入口，仅做 SEO meta 与主题包装）；内容数据在 `content/i18n/en/updates.ts`。
- 边界/依赖：Discord-only 更新需要登录验证后才能写成事实；所有声明保持 reported / pending，不升级为 verified；旧 Update 3/4 内容下移为历史复查，不做主叙事。
> 一旦本目录内容变化，请更新本文件

## Files
- README.md：本目录说明
- page.tsx：`/updates/` 渲染入口，调用 `StrategyPageTemplate` 渲染 `content/i18n/en/updates.ts` 的内容
- （内容源）content/i18n/en/updates.ts：updates hub 的实际内容数据，2026-06-20 SERP 蓝图刷新为 June 2026 / Update 6 / CARNIVAL / UPDATE6 当前裁决，并加入 evidence matrix 与 `YD6lrTRqpH0` 视频参考
