# Build A Ring Farm Guide

- 用途：Build A Ring Farm Roblox 攻略站，覆盖 codes 状态、新手指南、更新追踪和安全提醒。
- 关键入口：`lib/game-config.ts`、`public/data/build-a-ring-farm.json`、`content/i18n/en/`、`app/`。
- 边界原则：不编造 codes、奖励、数值、官方身份、Discord 链接或脚本下载。
> 一旦根目录结构、运行方式或核心配置变化，请更新本文件

## Files

- `app/`：App Router 页面、SEO 路由和全局样式
- `components/`：站点 chrome、广告位、JSON-LD 和页面模板
- `content/`：页面内容接线
- `lib/game-config.ts`：站点和游戏参数配置
- `lib/page-registry.ts`：完成页面、sitemap、robots、footer 页面注册表
- `lib/content/template-pages.ts`：可复用页面内容生成器
- `lib/i18n/`：语言、路由和 metadata helper
- `public/data/build-a-ring-farm.json`：Build A Ring Farm 公开站点数据源
- `tests/`：站点配置、路由和首页模块回归测试

## Run

```bash
npm install
npm run test
npm run build
npm run dev
```

## Site Facts

- Game: Build A Ring Farm
- Roblox URL: https://www.roblox.com/games/107646426076756/Build-A-Ring-Farm
- Domain: https://buildaringfarm.org
- GitHub repo target: `roblox-build-a-ring-farm`
- Contact: tangjei414@gmail.com

## Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=https://buildaringfarm.org
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_ADSENSE_CLIENT=
NEXT_PUBLIC_CLARITY_ID=
NEXT_PUBLIC_YANDEX_VERIFICATION=
```
