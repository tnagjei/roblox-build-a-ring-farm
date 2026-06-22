# templates
- 用途：保存首页、codes 和通用 strategy 页面模板。
- 关键入口：`HomePageTemplate.tsx`、`CodesPageTemplate.tsx`、`StrategyPageTemplate.tsx`
- 边界/依赖：模板只消费 typed content、`siteData` 和共享 SEO helper；视频 iframe 只渲染已写入内容的数据，不直接抓外部网络。
> 一旦本目录内容变化，请更新本文件

## Files
- README.md：本目录说明
- HomePageTemplate.tsx：首页模板，并自动补充已配置的高意图入口
- CodesPageTemplate.tsx：codes 页面模板
- StrategyPageTemplate.tsx：通用攻略页模板，支持可选 source table 和 YouTube no-cookie / lazy visual reference 模块
