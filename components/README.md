# components
- 用途：保存站点通用展示组件，避免每个路由重复写布局。
- 关键入口：`SiteChrome.tsx`、`GuidePage.tsx`
- 边界/依赖：组件只消费 `lib/site-data.ts` 和传入页面数据，不直接抓外部网络。
> 一旦本目录内容变化，请更新本文件

## Files
- README.md：本目录说明
- AdBanner.tsx: 封装好的广告展示组件，支持异步加载和 SEO 优化
- SmallBanner.tsx: 468x60 小型横幅广告组件，滚动或超时后延迟加载
- SmartLink.tsx: 智能链接按钮组件，用于高转化率的 CTA
- BrandIdentity.tsx：展示品牌资产与版权归属声明的组件
- RelatedGrid.tsx：展示相关攻略或页面的网格组件
- CalculatorEstimator.tsx：`/calculator/` 页面使用的 reported value estimator 客户端组件
- JsonLd.tsx：安全输出 schema.org JSON-LD
- LazyAdLoader.tsx：生产环境广告脚本延迟加载器，滚动或超时后再注入第三方广告资源
- SiteChrome.tsx：站点头部、分组 footer 和导航
- GuidePage.tsx：支持 H2/H3、多段落、列表、tool/unit/P2 hub、证据表和来源模块的攻略页通用模板
- SocialBarAd.tsx: 社交条形广告脚本旧入口，当前社交广告条由 LazyAdLoader 延迟注入
- templates/：首页、codes 和通用 strategy 页面模板
