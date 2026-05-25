# lib
- 用途：集中站点数据、路由和 SEO 结构化数据生成逻辑。
- 关键入口：`game-config.ts`、`page-registry.ts`、`site-data.ts`、`seo.ts`
- 边界/依赖：只读 `public/data/build-a-ring-farm.json`，不在组件里散落硬编码数据。
> 一旦本目录内容变化，请更新本文件

## Files
- README.md：本目录说明
- game-config.ts：站点身份、路由分组和集成配置
- page-registry.ts：生成 sitemap、robots 和完成路由清单
- site-data.ts：导出公开 JSON 数据和页面查询 helper
- seo.ts：生成 metadata、canonical、社交分享图引用和 JSON-LD
