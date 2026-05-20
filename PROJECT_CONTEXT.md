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

已完成页面：

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
SEO_AUDIT.md 状态是否需要更新
llms.txt 是否需要同步
DATA_VERIFICATION.md 是否有新增待验证 claim
INTERNAL_LINK_AUDIT.md 是否需要更新入口规则
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

---

## 4. 关键文件职责

### `lib/game-config.ts`

单一站点配置源。新增页面必须同步：

```text
coreSlugs
completedCoreSlugs
```

当前包含：

```text
gear-shop
sprays
mutations
fertilizer
offline-income
farm-layout
tier-list
advanced-crops
weather-events
money-farming
```

### `public/data/build-a-ring-farm.json`

公开数据源。当前首页入口已经依赖 `siteData.pages` 自动补全，因此新增页面必须先同步这里。

每次改页面 TDK 后必须同步：

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

当前已完成：

```text
首页 description 压缩
核心页 FAQ 第一轮补齐
```

### `components/SiteChrome.tsx`

全站 Header / Footer / Guides 下拉。

当前主导航：

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

首页模板。已完成清理：

```text
删除硬编码首页兜底入口列表
改为从 siteData.pages 自动补全 Sprays / Mutations / Fertilizer / Offline Income / Farm Layout / Tier List
Directory card / Popular search / FAQ 都从 public/data 来源补充
```

注意：后续新增页面若希望自动出现在首页，必须先写入 `public/data/build-a-ring-farm.json`。

### `app/llms.txt/route.ts`

AI crawler 摘要入口。已从旧版 codes / beginner / updates / scripts 扩展为完整主题集群。

当前覆盖：

```text
Codes
Beginner Guide
Crops
Seeds
Gear Shop
Sprays
Mutations
Fertilizer
Offline Income
Farm Layout
Tier List
Advanced Crops
Weather Events
Upgrades
Money Farming
Updates
Scripts Safety
Roblox Game
```

### `DATA_VERIFICATION.md`

数据验证台账。用于集中管理：

```text
Community reported
Needs verification
Pending
Rejected
Verified official
Verified in-game
```

当前覆盖：

```text
Rare effect / mutation claims
Spray claims
Weather event claims
Fertilizer claims
Offline income claims
Farm layout claims
Codes claims
```

新增任何涉及价格、倍率、概率、堆叠、离线行为、code reward 的内容，都必须同步这里。

### `INTERNAL_LINK_AUDIT.md`

内链审计文件。用于控制：

```text
首页入口
Header Guides 下拉
Footer Guides
页面级 related links
Topic clusters
后续页面是否允许进入 Header / 首页
```

当前判断：核心页内链已够，后续不要无差别把新页面塞进首页和 Header。

### `app/llms-full.txt/route.ts`

AI crawler 完整摘要入口。依赖 `siteData.pages`。因此 `public/data/build-a-ring-farm.json` 的完整度会直接影响 AI crawler 理解。

### `app/nav-fixes.css`

修复 Guides / Language 下拉浮层。不要删除。

### `components/AdBanner.tsx` 与 `components/SmallBanner.tsx`

当前广告组件临时禁用，直接 `return null`。未来恢复广告应做生产环境广告位组件，不要在本地开发环境硬加载广告脚本。

---

## 5. 已完成工程

```text
首页加厚工程
导航压缩工程
Gear Shop 页面工程
Sprays 页面工程
Mutations 页面工程
Fertilizer 页面工程
Offline Income 页面工程
Farm Layout 页面工程
Tier List 页面工程
内页 SEO 合规扫尾
llms.txt 主题集群同步
首页入口来源清理
P1 public/data 和批量页增强
DATA_VERIFICATION.md 数据验证台账
INTERNAL_LINK_AUDIT.md 内链审计
SEO_AUDIT.md 状态更新
```

---

## 6. 单页定位与边界

```text
/seeds/           Seed packs, crop unlocks, reported rewards。不得写未验证掉落率。
/crops/           Crop cycles, harvest timing, selling。不得写未验证 crop price。
/upgrades/        Upgrade ROI, gear timing。不得写精确 ROI 表。
/gear-shop/       Gear shop, sprays, fertilizer, ROI。不得写官方价格和官方效果。
/sprays/          Spray effects, rare routes, event comparison。不得写官方价格、stacking、offline 行为。
/mutations/       Mutation effects, tier logic, stacking checks。不得写官方倍率、官方堆叠规则。
/fertilizer/      Strong Fertilizer, crop timing, ROI。不得写官方价格、成长倍率、冷却。
/offline-income/  Offline earnings, AFK checks。不得写未验证离线事件、离线 mutation、精确收益率。
/farm-layout/     Layout checklist, expansion timing。不得写未验证最优布局图或收益倍率。
/tier-list/       Community reported effect tiers。不得写官方榜单。
/advanced-crops/  Rare effects, sprays, event odds。不得把倍率写成官方确认。
/weather-events/  Rain, Blizzard, Black Hole, Nuclear, Galaxy。概率和倍率全部 Community reported。
/money-farming/   Cash routes, upgrades, offline income。不得写 $/s 假收益。
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

### 首页入口来源不一致

已改为从 `siteData.pages` 补全。后续不要再在 `HomePageTemplate.tsx` 写硬编码页面列表，除非有明确理由。

---

## 8. SEO 策略原则

优先级：

```text
构建通过
页面可访问
内链一致
导航清晰
public/data 同步
AI crawler 摘要同步
事实标注清楚
数据验证台账同步
再扩展长尾页
```

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
/llms.txt
/llms-full.txt
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

### P1：上线收录准备

```text
Google Search Console 提交 sitemap
Bing Webmaster Tools 提交 sitemap
Yandex Webmaster 提交 sitemap
```

sitemap：

```text
https://www.buildaringfarm.org/sitemap.xml
```

### P2：根据 DATA_VERIFICATION.md 做实机验证

优先验证：

```text
Spray 是否存在
Mutation stacking 是否存在
Weather event 概率是否可信
Strong Fertilizer 是否存在
Offline rare effect 是否存在
```

---

## 11. 新会话工作规则

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
10. 新增页面后检查首页入口、Guides 下拉、Footer、sitemap、PROJECT_CONTEXT.md、SEO_AUDIT.md、llms.txt、DATA_VERIFICATION.md、INTERNAL_LINK_AUDIT.md
```

---

## 12. 当前判断

Verifiable:

```text
核心主题页面已经完成第一轮搭建。
首页入口已从硬编码兜底改为基于 siteData.pages 补全。
llms.txt 已覆盖当前主题集群。
Guides 下拉已覆盖核心新增页。
public/data 已压缩首页 description 并补齐核心 FAQ。
DATA_VERIFICATION.md 已建立。
INTERNAL_LINK_AUDIT.md 已建立。
SEO_AUDIT.md 已记录 P1/P2 第一轮完成状态。
```

Judgment:

```text
当前项目已经进入“本地构建验证 + 上线收录准备 + 数据实证验证”阶段，而不是继续扩页阶段。
```

Confidence ≠ Correctness:

```text
没有本地 npm run build 输出前，不能断言所有新增和重构完全通过。
```
