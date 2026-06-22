# content
- 用途：保存可复用页面内容类型和模板内容工厂。
- 关键入口：`page-types.ts`、`template-pages.ts`
- 边界/依赖：只输出 typed content，不直接访问网络，不把 reported 或 pending 数据升级为 verified。
> 一旦本目录内容变化，请更新本文件

## Files
- README.md：本目录说明
- page-types.ts：共享页面内容类型，包含可选 source table 与 video guide 结构
- template-pages.ts：通用策略页内容工厂，包含 crops crop value source differences 矩阵、Witherfang/Silver Artichoke/Uranium Reed watchlist 和视频参考
