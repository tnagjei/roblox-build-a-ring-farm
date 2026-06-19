# crops
- 用途：Build A Ring Farm crops 长尾 SEO 页面，承接高价值作物来源差异与报告线索。
- 关键入口：`page.tsx`（渲染入口，调用 `createTemplateStrategyPage`）；内容数据在 `lib/content/template-pages.ts` 的 `createCropsPage`。
- 边界/依赖：复用 `StrategyPageTemplate`，不发布未验证 crop prices 或 mutation rates；2026-06-18 新增的 Witherfang(reported) 与 Silver Artichoke(disputed) 不进 calculator default。
> 一旦本目录内容变化，请更新本文件

## Files
- README.md：本目录说明
- page.tsx：`/crops/` 渲染入口
- （内容源）lib/content/template-pages.ts：createCropsPage 函数，含 source-diff 矩阵与 reported leads 表，覆盖 Void Fruit / Garden Devourer / Dragonfruit / Passion Fruit / Elder Dragonroot 及 2026-06-18 新增 Witherfang / Silver Artichoke
