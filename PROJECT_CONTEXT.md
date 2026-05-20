# Build A Ring Farm 项目上下文交接文档

> 用途：给新会话、新 Agent 或后续开发者快速理解当前项目状态。  
> 项目仓库：`tnagjei/roblox-build-a-ring-farm`  
> 当前目标：把 Roblox 游戏 **Build A Ring Farm** 攻略站做成可扩展的英文 SEO Wiki Hub。

---

## 1. 项目定位

这是一个围绕 Roblox 游戏 **Build A Ring Farm** 的独立 fan guide，不是官方站。

核心关键词：

```text
Build A Ring Farm
Build A Ring Farm Wiki
Build A Ring Farm codes
Build A Ring Farm seeds
Build A Ring Farm crops
Build A Ring Farm gear shop
Build A Ring Farm sprays
Build A Ring Farm mutations
Build A Ring Farm fertilizer
Build A Ring Farm offline income
Build A Ring Farm farm layout
Build A Ring Farm tier list
Build A Ring Farm advanced crops
Build A Ring Farm weather events
Build A Ring Farm upgrades
Build A Ring Farm money farming
```

所有未验证数据必须标注：

```text
Community reported
Pending
Needs verification
Strategy
Verified direction
```

禁止把社区数据、对标站数据、Discord 玩家口径、截图猜测写成官方确认。

---

## 2. 当前页面矩阵

已完成核心页面：

```text
/
/codes/
/updates/
/beginners-guide/
/crops/
/seeds/
/upgrades/
/gear-shop/
/sprays/
/mutations/
/fertilizer/
/offline-income/
/farm-layout/
/tier-list/
/advanced-crops/
/money-farming/
/weather-events/
/scripts/
```

新增页面后必须检查：

```text
页面可访问
sitemap.xml 包含该路径
Guides 下拉是否有入口
Footer Guides 是否有入口
首页是否有入口
public/data/build-a-ring-farm.json 是否同步
PROJECT_CONTEXT.md 是否同步
```

---

## 3. 技术栈与本地命令

```text
Next.js 16.2.5
App Router
Turbopack
TypeScript
静态页面为主
```

本地同步与验证：

```bash
git pull origin main
rm -rf .next
npm run build
npm run dev
```

如果 `.next` 删除失败：

```bash
pkill -f "next dev"
rm -rf .next
npm run dev
```

如果 3000 被占用，以终端显示的新端口为准。

---

## 4. 关键文件职责

### `lib/game-config.ts`

单一站点配置源。新增页面必须同步：

```text
coreSlugs
completedCoreSlugs
```

当前已经包含：

```text
gear-shop
sprays
mutations
fertilizer
offline-income
farm-layout
tier-list
```

### `public/data/build-a-ring-farm.json`

公开数据源。新增页面或修改 TDK 后必须同步：

```text
title
description
h1
lede
focus
relatedPages
faq
primaryKeyword
```

当前已包含页面 key：

```text
home
codes
seeds
crops
gear-shop
sprays
mutations
fertilizer
offline-income
farm-layout
tier-list
advanced-crops
weather-events
upgrades
money-farming
updates
beginners-guide
```

### `components/SiteChrome.tsx`

全站 Header / Footer / Guides 下拉。当前主导航：

```text
Codes
Beginner Guide
Crops
Money Farming
Guides
Language
Open Game
```

当前 Guides 下拉：

```text
Seeds
Upgrades
Gear Shop
Sprays
Mutations
Fertilizer
Offline Income
Farm Layout
Advanced Crops
Weather Events
Tier List
Updates
Scripts
```

### `components/templates/HomePageTemplate.tsx`

首页模板。当前已做兜底入口注入：

```text
Sprays
Mutations
Fertilizer
Offline Income
Farm Layout
Tier List
```

兜底注入范围：

```text
Directory card
Popular search card
FAQ 边界问题
```

目的：避免新增页面成为孤岛页。

### `components/templates/StrategyPageTemplate.tsx`

策略页模板。已支持：

```tsx
<h2>{section.heading}</h2>
{section.subheading ? <h3>{section.subheading}</h3> : null}
```

### `lib/content/page-types.ts`

已支持：

```ts
subheading?: string
```

### `app/nav-fixes.css`

修复 Guides / Language 下拉浮层。不要删除。

### `components/AdBanner.tsx` 与 `components/SmallBanner.tsx`

当前广告组件临时禁用，直接 `return null`。原因是之前底部出现裸露：

```text
Sponsored
Advertisement
```

未来恢复广告应做 `ProductionAdSlot`，并用环境变量控制，仅 production 加载。

---

## 5. 已完成工程

### 5.1 首页加厚工程

首页从入口页升级为 Wiki Hub。包含：

```text
What is Build A Ring Farm?
Build A Ring Farm quick start route
Seeds, crops, gear shop, and weather events
Money farming and upgrades
Sources and verification policy
What to read after the homepage
Reported code rewards
Reported gear shop items
Reported rare crop values
Reported weather event chances
```

所有快照数据统一标注 `Community reported`。

### 5.2 导航压缩工程

顶部导航从全量平铺改成主导航 + Guides 下拉，页脚保留完整 Guides 内链。

### 5.3 Gear Shop 页面工程

路径：

```text
/gear-shop/
```

TDK：

```text
Title: Build A Ring Farm Gear Shop Guide | Sprays & ROI
Description: Build A Ring Farm gear shop guide for sprays, upgrades, rare crop value, ROI checks, source status, and safe Roblox farming progression.
H1: Build A Ring Farm Gear Shop Guide
```

边界：Gear Shop、sprays、fertilizer、价格、效果均为 `Community reported`，不得写官方确认。

### 5.4 Tier List 页面工程

路径：

```text
/tier-list/
```

TDK：

```text
Title: Build A Ring Farm Tier List Guide | Effects & Crops
Description: Build A Ring Farm tier list guide covering community reported crop effects, sprays, event boosts, farming routes, and source status.
H1: Build A Ring Farm Tier List Guide
```

核心边界：

```text
No official Build A Ring Farm tier list has been confirmed.
This page organizes community reported effects and route logic only.
```

当前 effect tiers：

```text
S → Rainbow
A → Radioactive
B → Void
C → Frozen
D → Wet
```

全部标注 `Community reported`。

### 5.5 Sprays 页面工程

路径：

```text
/sprays/
```

TDK：

```text
Title: Build A Ring Farm Sprays Guide | Effects & ROI
Description: Build A Ring Farm sprays guide covering community reported spray effects, gear shop use, rare crop value, weather events, ROI, and source status.
H1: Build A Ring Farm Sprays Guide
```

页面内容：

```text
What are sprays in Build A Ring Farm?
Sprays vs weather events
Best spray logic without fake certainty
Sprays, gear shop, and tier list pages
What still needs verification
FAQ
```

当前 sprays 表：

```text
Wet Spray
Frozen Spray
Void Spray
Radioactive Spray
Rainbow Spray
Acid Spray
```

当前 effect priority 表：

```text
Rainbow → S
Radioactive → A
Void → B
Frozen → C
Wet → D
```

全部标注 `Community reported`。不得写官方确认价格、官方确认效果、stacking 规则、offline 行为。

### 5.6 Mutations 页面工程

路径：

```text
/mutations/
```

TDK：

```text
Title: Build A Ring Farm Mutations Guide | Effects & Tiers
Description: Build A Ring Farm mutations guide covering community reported mutation effects, sprays, weather events, tier logic, stacking checks, and source status.
H1: Build A Ring Farm Mutations Guide
```

边界：mutation 倍率、堆叠规则、离线触发规则全部不得写成官方确认。当前统一标注 `Community reported / Needs verification`。

### 5.7 Fertilizer 页面工程

路径：

```text
/fertilizer/
```

TDK：

```text
Title: Build A Ring Farm Fertilizer Guide | Growth & ROI
Description: Build A Ring Farm fertilizer guide covering community reported Strong Fertilizer use, crop timing, sprays, upgrades, ROI, and source status.
H1: Build A Ring Farm Fertilizer Guide
```

边界：Strong Fertilizer 价格、成长倍率、冷却、离线行为全部不得写成官方确认。

### 5.8 Offline Income 页面工程

路径：

```text
/offline-income/
```

TDK：

```text
Title: Build A Ring Farm Offline Income Guide | AFK Cash
Description: Build A Ring Farm offline income guide covering offline earnings, logout checks, crops, upgrades, weather events, mutations, and source status.
H1: Build A Ring Farm Offline Income Guide
```

边界：官方方向可写“offline earnings”，但 exact rates、offline weather events、offline mutations、offline sprays 全部 `Needs verification`。

### 5.9 Farm Layout 页面工程

路径：

```text
/farm-layout/
```

TDK：

```text
Title: Build A Ring Farm Farm Layout Guide | Profit Routes
Description: Build A Ring Farm farm layout guide covering early layouts, ring expansion, active plots, crop routes, upgrade timing, offline income, and source status.
H1: Build A Ring Farm Farm Layout Guide
```

边界：不写未验证最优布局图、具体覆盖范围或收益倍率。layout 建议只做 checklist 和阶段策略。

### 5.10 内页 SEO 合规扫尾

已重点优化：

```text
/seeds/
/crops/
/upgrades/
/gear-shop/
/sprays/
/mutations/
/fertilizer/
/offline-income/
/farm-layout/
/tier-list/
/advanced-crops/
/weather-events/
/money-farming/
```

统一要求：

```text
Title 尽量 50–60 字符
Description 尽量 140–160 字符
1 个 H1
多个 H2
多个 H3
canonical
FAQ
Community reported / Pending / Needs verification 标注
内链互相承接
```

---

## 6. 单页定位与边界

```text
/seeds/           Seed packs, crop unlocks, reported rewards. 不写未验证掉落率。
/crops/           Crop cycles, harvest timing, selling. 不写未验证 crop price。
/upgrades/        Upgrade ROI, gear timing. 不写精确 ROI 表。
/gear-shop/       Gear shop, sprays, fertilizer, ROI. 不写官方价格和官方效果。
/sprays/          Spray effects, rare routes, event comparison. 不写官方价格、stacking、offline 行为。
/mutations/       Mutation effects, tier logic, stacking checks. 不写官方倍率、官方堆叠规则。
/fertilizer/      Strong Fertilizer, crop timing, ROI. 不写官方价格、成长倍率、冷却。
/offline-income/  Offline earnings, AFK checks. 不写未验证离线事件、离线 mutation、精确收益率。
/farm-layout/     Layout checklist, expansion timing. 不写未验证最优布局图或收益倍率。
/tier-list/       Community reported effect tiers. 不写官方榜单。
/advanced-crops/  Rare effects, sprays, event odds. 不把倍率写成官方确认。
/weather-events/  Rain, Blizzard, Black Hole, Nuclear, Galaxy. 概率和倍率全部 Community reported。
/money-farming/   Cash routes, upgrades, offline income. 不写 $/s 假收益。
```

---

## 7. 已踩过的坑

### 本地 404 不一定是代码没写

可能是本地落后远程或本地改动阻止 pull。

```bash
git status
git stash -u
git pull origin main
```

### `require is not defined`

处理方向：生产环境才加载第三方脚本，本地禁用广告统计脚本。

### `.next` 删除失败

```bash
pkill -f "next dev"
rm -rf .next
npm run dev
```

### Guides 下拉撑开 Header

已通过 `app/nav-fixes.css` 修复。

### 页面 metadata 与 public data 不一致

每次改页面 TDK 后，同步 `public/data/build-a-ring-farm.json`。

---

## 8. SEO 策略原则

### 不要只堆页面

优先级：

```text
内链一致性
导航清晰
页面数据源同步
页面可读性
事实标注
再扩展长尾页
```

### 首页必须是 Wiki Hub

首页承担：

```text
主关键词 Build A Ring Farm
全站主题分发
核心页面入口
数据快照
source confidence
FAQ
```

### 社区数据必须标注

统一写：

```text
Community reported
Needs verification
Pending
Strategy
Verified direction
```

### 禁止写假数据

禁止生成：

```text
未验证作物价格
未验证 seed pack 概率
未验证 gear shop 价格
未验证 spray 官方效果
未验证 mutation 官方倍率
未验证 fertilizer 成长倍率
未验证 offline rare effect 行为
未验证 farm layout 最大收益图
未验证 tier list 官方排名
未验证每秒收益
未验证 code active 状态
未验证 Discord / Trello 官方链接
```

---

## 9. 对标站吸收策略

参考过：

```text
https://buildaringfarm.net/
https://www.buildaringfarm.online/
https://www.buildaringfarm.wiki/
```

可吸收结构，不可复制未验证具体数据。倍率、事件概率、喷雾价格、tier ranking、mutation stacking、fertilizer claims 等必须标注 `Community reported` 或 `Needs verification`。

---

## 10. 下一步建议

### P0：本地构建验证

```bash
git pull origin main
rm -rf .next
npm run build
npm run dev
```

重点看：

```text
/
/mutations/
/fertilizer/
/offline-income/
/farm-layout/
/sprays/
/tier-list/
/sitemap.xml
Guides 下拉
Footer Guides
首页入口
```

### P1：不要马上做 Discord / Trello

暂不优先：

```text
/discord/
/trello/
```

除非明确写成官方链接核验页：

```text
No verified official Discord / Trello has been confirmed yet.
```

### P2：后续可考虑页面

```text
/crop-values/
/rarities/
/codes-update-log/
/wiki-trello-discord/
```

但前提是先确认本地构建通过，并检查新增页面没有重复、空壳或假数据问题。

---

## 11. 新会话工作规则

新会话接手时先做：

```text
1. 阅读 PROJECT_CONTEXT.md
2. 检查 git status
3. 检查 npm run build
4. 不要假设本地已同步 origin/main
5. 新增页面同步 game-config.ts 和 public/data/build-a-ring-farm.json
6. 页面内容必须区分 official / community reported / pending
7. 修改 UI 优先小范围 CSS patch，不要盲目重写 globals.css
8. 修改 TDK 后同步 public/data/build-a-ring-farm.json
9. 模板型页面若需要 H3，使用 section.subheading
10. 新增页面后检查首页入口、Guides 下拉、Footer、sitemap、PROJECT_CONTEXT.md
```

---

## 12. 当前判断

Verifiable:

```text
/gear-shop 已新增并接入导航、数据源、首页内链。
/sprays 已新增并接入 game-config、data source、Guides 下拉、首页入口。
/mutations 已新增并接入 game-config、data source、Guides 下拉、首页入口。
/fertilizer 已新增并接入 game-config、data source、Guides 下拉、首页入口。
/offline-income 已新增并接入 game-config、data source、Guides 下拉、首页入口。
/farm-layout 已新增并接入 game-config、data source、Guides 下拉、首页入口。
/tier-list 已新增并接入导航、数据源、首页入口。
/crops 与 /upgrades 已从通用模板升级为专用 SEO 内容。
顶部导航已压缩为主导航 + Guides 下拉。
广告裸文本已隐藏。
public/data/build-a-ring-farm.json 已完成多轮 TDK 同步。
```

Judgment:

```text
当前项目已经完成第一轮主题集群搭建，下一步应以构建验证、页面质量审计、内链密度和事实边界检查为主，而不是继续无脑扩页。
```

Confidence ≠ Correctness:

```text
后续是否继续做 crop-values、rarities、wiki-trello-discord，需要看搜索意图和证据可得性，不应只因为对标站有就盲目复制。
```
