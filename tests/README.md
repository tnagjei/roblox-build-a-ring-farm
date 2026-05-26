# tests
- 用途：用 Node 内置测试校验公开数据与 SEO 基础约束。
- 关键入口：`*.test.mjs`
- 边界/依赖：不依赖浏览器，只读取项目文件。
> 一旦本目录内容变化，请更新本文件

## Files
- template-config.test.mjs：检查站点配置、保守代码状态和域名
- template-home-modules.test.mjs：首页模块、视频配置和旧 hero 路由静态跳转回归
- template-routes.test.mjs：检查已完成路由数量和文件存在
- keyword-opportunity-pages.test.mjs：检查 P0/P1 关键词机会页面和 reported/pending 口径
- static-assets.test.mjs：检查静态 icon、hero、manifest 迁移与旧资源路径兼容配置
