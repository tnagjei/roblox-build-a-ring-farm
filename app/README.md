# app
- 用途：Next.js App Router 页面、全局样式和 SEO metadata routes。
- 关键入口：`page.tsx`、`layout.tsx`、`sitemap.ts`、`robots.ts`
- 边界/依赖：页面只读 `lib` 和 `components`，不直接写外部数据。
> 一旦本目录内容变化，请更新本文件

## Files
- README.md：本目录说明
- globals.css：全站视觉样式
- layout.tsx：根布局和全局 metadata
- page.tsx：首页
- sitemap.ts：sitemap.xml 生成
- robots.ts：robots.txt 生成
- about/：站点身份与验证原则页面
- faq/：FAQ 总入口页面
- glossary/：术语解释页面
- help/：站点使用帮助页面
- privacy/：隐私政策页面
- terms/：使用条款页面
- codes/：codes 页面
- beginners-guide/：新手指南页面
- crops/：crops 长尾 SEO 页面
- seeds/：seeds 长尾 SEO 页面
- advanced-crops/：advanced crops 长尾 SEO 页面
- upgrades/：upgrades 长尾 SEO 页面
- updates/：更新日志页面
- update-log/：更新日志别名跳转页面
- scripts/：脚本安全页面
- sources/：公开来源与素材来源说明页面
- site-updates/：站点更新记录页面
- llms.txt/：AI crawler 摘要文本路由
- llms-full.txt/：AI crawler 完整摘要文本路由
