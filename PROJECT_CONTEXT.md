# Build A Ring Farm 项目上下文交接文档

> 用途：给新会话、新 Agent 或后续开发者快速理解当前项目状态。  
> 项目仓库：`tnagjei/roblox-build-a-ring-farm`  
> 当前核心目标：把一个 Roblox 游戏攻略站做成可扩展的 SEO Wiki Hub，而不是单页导航站。

---

## 1. 项目定位

这是一个围绕 Roblox 游戏 **Build A Ring Farm** 搭建的英文攻略站。目标关键词是：

```text
Build A Ring Farm
Build A Ring Farm Wiki
Build A Ring Farm codes
Build A Ring Farm crops
Build A Ring Farm seeds
Build A Ring Farm upgrades
Build A Ring Farm advanced crops
Build A Ring Farm money farming
Build A Ring Farm weather events
```

站点不是官方站，而是独立 fan guide。所有未验证数据必须明确标注为：

```text
Community reported
Pending
Needs verification
```

禁止把社区数据、第三方站数据、猜测数据写成官方确认。

---

## 2. 当前已完成页面矩阵

当前核心页面已经完成并通过 `next build`：

```text
/
/codes/
/updates/
/beginners-guide/
/crops/
/seeds/
/upgrades/
/advanced-crops/
/money-farming/
/weather-events/
/scripts/
```

构建输出中已确认：

```text
/weather-events
/money-farming
/seeds
/advanced-crops
```

都能被 Next.js 识别为静态路由。

---

## 3. 当前技术栈与运行方式

项目使用：

```text
Next.js 16.2.5
App Router
Turbopack
TypeScript
静态页面为主
```

本地运行命令：

```bash
git pull origin main
rm -rf .next
npm run build
npm run dev
```

如果 `.next` 删除失败，通常是旧的 `next dev` 进程占用。处理方式：

```bash
pkill -f "next dev"
rm -rf .next
npm run dev
```

如果 3000 被占用，Next 会自动使用 3001、3002 等端口。必须以终端显示的端口为准。

---

## 4. 重要文件职责

### `lib/game-config.ts`

站点配置核心文件。管理：

```text
siteName
gameName
primaryKeyword
siteDomain
coreSlugs
completedCoreSlugs
englishOnlySlugs
analytics
safetyPolicy
```

新增页面时必须同步：

```ts
coreSlugs
completedCoreSlugs
```

否则 sitemap、路由体系、导航过滤可能不同步。

---

### `public/data/build-a-ring-farm.json`

站点公开数据源。管理：

```text
site 信息
game 信息
assets
codes
pages 页面矩阵
sourceConfidence
youtubeVideos
```

新页面上线后必须同步 `pages`，否则会影响：

```text
顶部导航
页脚 Guides
结构化数据
内部推荐
站点数据一致性
```

当前已同步页面 key：

```text
home
codes
seeds
crops
advanced-crops
weather-events
upgrades
money-farming
updates
beginners-guide
```

---

### `components/SiteChrome.tsx`

全站 Header、Footer、导航组件。

当前顶部导航已经压缩，不再把所有页面平铺出来。

顶部主导航：

```text
Codes
Beginner Guide
Crops
Money Farming
Guides
Language
Open Game
```

`Guides` 下拉包括：

```text
Seeds
Upgrades
Advanced Crops
Weather Events
Updates
Scripts
```

页脚仍保留完整 Guides 列表，方便 SEO 内链。

---

### `app/nav-fixes.css`

专门修复顶部导航下拉菜单的 CSS 文件。

为什么存在这个文件：

之前 `Guides` 下拉菜单缺少浮层定位，导致菜单项被挤进 Header，整个导航栏被撑高、变丑。这个文件用于把 `Guides` 和 `Language` 下拉变成真正的 overlay dropdown。

该文件负责：

```text
.guide-dropdown
.guide-dropdown-trigger
.guide-dropdown-menu
.language-dropdown-menu
移动端下拉对齐
```

不要随便删除。

---

### `components/AdBanner.tsx` 与 `components/SmallBanner.tsx`

当前广告组件已临时禁用，直接 `return null`。

原因：

页面底部曾出现裸露英文：

```text
Sponsored
Advertisement
```

视觉很廉价。为了先保证站点质感，已隐藏广告占位。

后续如果恢复广告，建议不要硬编码广告脚本，而是做：

```text
ProductionAdSlot
```

并用环境变量控制广告供应商脚本，只在 production 加载。

---

### `app/layout.tsx`

全局布局文件。

当前包含：

```ts
import "./globals.css";
import "./language.css";
import "./nav-fixes.css";
```

第三方脚本只在 production 环境读取：

```text
AdSense
Google Analytics
Microsoft Clarity
thirdPartyAdScripts
```

这是为了避免本地开发环境 Turbopack 出现 `require is not defined` 一类运行时问题。

---

## 5. 已完成的重要工程

### 5.1 首页加厚工程

首页从普通入口页升级为 Wiki Hub。

新增内容模块：

```text
What is Build A Ring Farm?
Build A Ring Farm quick start route
Seeds, crops, and crop value
Money farming and upgrades
Sources and verification policy
What to read after the homepage
```

新增首页数据快照：

```text
Reported Build A Ring Farm code rewards
Reported rare crop values
Reported weather event chances
```

所有数据统一标记：

```text
Community reported
```

首页内容已正式入库到：

```text
lib/content/template-pages.ts
```

模板 fallback 已清理，`HomePageTemplate.tsx` 只负责渲染内容层传入的数据。

---

### 5.2 数据源同步工程

已同步：

```text
public/data/build-a-ring-farm.json
```

新增页面已加入 `pages`：

```text
seeds
advanced-crops
money-farming
weather-events
```

页面之间的 relatedPages 已补齐，形成内链关系：

```text
seeds → crops / advanced-crops / upgrades / money-farming / codes
crops → seeds / advanced-crops / weather-events / upgrades / money-farming
advanced-crops → weather-events / upgrades / money-farming / crops / updates
weather-events → advanced-crops / upgrades / money-farming / crops / updates
upgrades → crops / advanced-crops / weather-events / money-farming / codes / updates
money-farming → seeds / crops / upgrades / advanced-crops / weather-events / codes
updates → codes / seeds / crops / advanced-crops / weather-events / upgrades / money-farming
```

---

### 5.3 导航压缩优化

顶部导航已从全页面平铺改成主导航 + Guides 下拉。

原因：

页面矩阵扩大后，顶部按钮过多，视觉拥挤，移动端更差。

当前策略：

```text
Header：只放核心入口
Guides dropdown：放次级攻略页
Footer：保留完整内链
Homepage wiki sections：承接全部页面入口
```

---

### 5.4 广告裸文本隐藏

已处理页面底部裸露的：

```text
Sponsored
Advertisement
```

当前广告组件临时禁用。未来恢复广告前，必须先做干净的广告位组件和生产环境控制。

---

## 6. 单页详情总结

### `/seeds/`

定位：种子与 seed packs 页面。

TDK：

```text
Build A Ring Farm Seeds Guide | Seed Packs, Crop Value & Progression
```

内容方向：

```text
seed packs
crop unlocks
beginner seed strategy
code rewards related to seeds
seeds vs crops vs upgrades
```

数据边界：不写未验证 seed pack 掉落率或概率。

---

### `/money-farming/`

定位：赚钱路线页。

TDK：

```text
Build A Ring Farm Money Farming Guide | Cash, Crops & Upgrades
```

内容方向：

```text
cash route
seed choices
crop cycles
upgrades
offline income
code rewards
money farming mistakes
```

数据边界：不写具体 `$ / s` 每秒收益，不写 fake income table。

---

### `/advanced-crops/`

定位：高级作物、稀有效果、喷雾、事件效果页面。

内容方向：

```text
rare crop values
sprays
event odds
offline limits
community reported value boosts
```

注意：之前表格横向挤压导致页面很丑，已改成纵向 data card 展示。

---

### `/weather-events/`

定位：天气事件页面。

TDK：

```text
Build A Ring Farm Weather Events Guide | Rain, Blizzard & Galaxy
```

表格内容：

```text
Rain Event → Wet → 8% → 1.5x
Blizzard Event → Frozen → 4% → 1.75x
Black Hole Event → Void → 3% → 2.25x
Nuclear Event → Radioactive → 2% → 3x
Galaxy Event → Rainbow → 1% → 5x
```

全部标记：

```text
Community reported
```

注意：该页面最初 404，是因为本地没有拉到远程文件，不是页面代码问题。

---

## 7. 已踩过的坑

### 7.1 本地 404 不一定是代码没写

出现过：

```text
/weather-events/ 404
```

最终原因：

```text
本地分支落后 origin/main 7 个 commit
本地有 app/README.md 改动阻止 git pull
app/weather-events/ 目录没有拉下来
```

处理方式：

```bash
git status
git stash -u
git pull origin main
ls app/weather-events
```

---

### 7.2 `require is not defined`

曾在本地出现过 `require is not defined`。

处理过的方向：

```text
移除 weather-events 页面对 siteData 和 absoluteUrl 的依赖
生产环境才加载三方脚本
本地禁用三方广告统计脚本
```

现在页面已经能正常渲染。

---

### 7.3 `.next` 删除失败

出现过：

```text
rm: .next/dev: Directory not empty
rm: .next: Directory not empty
```

原因通常是旧 `next dev` 进程仍在运行。

处理：

```bash
pkill -f "next dev"
rm -rf .next
npm run dev
```

---

### 7.4 下拉菜单撑开 Header

出现过：

```text
Guides 下拉菜单被挤进 header
导航栏高度变大
视觉很丑
```

已通过 `app/nav-fixes.css` 修复。

---

## 8. SEO 策略原则

### 8.1 不要只堆页面

当前站点已经有核心页面矩阵。继续盲目新建页面不是最优先。优先级应该是：

```text
内链一致性
导航清晰
页面数据源同步
页面可读性
事实标注
再扩展长尾页
```

### 8.2 首页必须是 Wiki Hub

首页不是普通导航页。它承担：

```text
主关键词 Build A Ring Farm
全站主题分发
核心页面入口
数据快照
source confidence
FAQ
```

### 8.3 社区数据必须标注

所有来自对标站、第三方站、Discord、玩家口径、社区截图的数据，都不能写成 official。

统一写：

```text
Community reported
```

或：

```text
Needs verification
```

### 8.4 不写假数据

禁止生成：

```text
未验证作物价格
未验证 seed pack 概率
未验证 gear shop 价格
未验证每秒收益
未验证 code active 状态
未验证 Discord / Trello 官方链接
```

---

## 9. 对标站吸收策略

参考过的对标站：

```text
https://buildaringfarm.net/
https://www.buildaringfarm.online/
https://www.buildaringfarm.wiki/
```

吸收的优点：

```text
Wiki Hub 首页结构
Codes 模块
Beginner Guide 模块
Seeds and Crops Guide
Advanced Crops / Mutations 类内容
Gear Shop Guide 意图
Money Farming Guide
Weather Events Guide
FAQ
Play / Official CTA
```

但不能直接复制对标站的具体数据。对标站中的倍率、事件概率、喷雾价格等，必须作为 community reported，不得写成官方事实。

---

## 10. 下一步建议

当前建议顺序：

### P0：确认导航修复后视觉是否正常

检查：

```text
Guides 是否为浮层下拉
Header 是否不再被撑高
移动端是否可用
```

### P1：做 `/gear-shop/`

这是下一个高价值 SEO 页面。

建议 TDK：

```text
Title:
Build A Ring Farm Gear Shop Guide | Sprays, Upgrades & ROI

Description:
Build A Ring Farm gear shop guide for Roblox players. Learn reported sprays, upgrade timing, rare crop value, ROI checks, and safe source status.

H1:
Build A Ring Farm Gear Shop Guide
```

内容模块建议：

```text
What is the gear shop?
Reported sprays and gear items
Sprays vs weather events
Gear shop ROI checklist
When to buy gear
What still needs verification
FAQ
```

### P2：考虑 `/tier-list/`

只做 community reported tier list，不写官方榜单。

### P3：再拆长尾页

候选：

```text
/fertilizer/
/sprays/
/offline-income/
/wiki/
/discord/
/trello/
```

其中 Discord / Trello 必须谨慎：如果没有官方链接，页面应写：

```text
No verified official Discord / Trello has been confirmed yet.
```

---

## 11. 新会话工作规则

新会话接手时，应先做：

```text
1. 阅读 PROJECT_CONTEXT.md
2. 检查 git status
3. 检查 npm run build
4. 不要假设本地已同步 origin/main
5. 新增页面时同步 game-config.ts 和 public/data/build-a-ring-farm.json
6. 页面内容必须区分 official / community reported / pending
7. 修改 UI 时优先小范围 CSS patch，不要盲目重写 globals.css
```

---

## 12. 当前判断

Verifiable:

```text
项目已完成核心页面矩阵。
Next build 已通过。
/weather-events 已能正常渲染。
顶部导航已压缩为主导航 + Guides 下拉。
广告裸文本已隐藏。
```

Judgment:

```text
当前项目已经从“页面生产阶段”进入“结构优化 + 高价值长尾扩展阶段”。
```

Confidence ≠ Correctness:

```text
后续是否继续做 gear-shop 或 tier-list，需要看实际搜索量和页面质量，不应只因为对标站有就盲目复制。
```
