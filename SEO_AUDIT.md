# Build A Ring Farm 全站 SEO 质量审计

> 审计对象：`tnagjei/roblox-build-a-ring-farm`  
> 初始审计时间：2026-05-20  
> 状态更新时间：2026-05-20  
> 审计目标：确认当前页面集群是否具备收录基础，并跟踪 P0 / P1 / P2 修复状态。

---

## 1. 当前结论

当前项目已经具备基础收录条件，并已完成主要 SEO 扫尾：

```text
llms.txt 已从旧版摘要升级为完整主题集群摘要
首页入口已从硬编码兜底改为基于 siteData.pages 补全
public/data 首页 description 已压缩
public/data 核心页面 FAQ 已补齐到约 4 条
四个批量新页已增加 checklist / decision table 降低模板感
DATA_VERIFICATION.md 已建立
INTERNAL_LINK_AUDIT.md 已建立
```

仍不能跳过本地构建验证。

---

## 2. P0 状态

### P0-1：本地 build 验证

状态：未在工具侧验证，必须本地执行。

```bash
git pull origin main
rm -rf .next
npm run build
npm run dev
```

重点检查：

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
/robots.txt
```

原因：仓库静态审计不能替代 Next.js 本地构建。

---

### P0-2：`llms.txt` 内容滞后

状态：已处理。

已更新：

```text
app/llms.txt/route.ts
```

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

---

## 3. P1 状态

### P1-1：首页入口依赖硬编码兜底

状态：已处理。

已更新：

```text
components/templates/HomePageTemplate.tsx
```

当前逻辑：

```text
不再硬编码 Sprays / Mutations / Fertilizer / Offline Income / Farm Layout / Tier List 的完整文案列表
改为从 siteData.pages 自动补全首页 Directory card、Popular search、FAQ
```

约束：以后新增页面如果想自动进入首页，必须先同步 `public/data/build-a-ring-farm.json`。

---

### P1-2：`public/data` 首页 description 过长且重复

状态：已处理。

当前压缩为：

```text
Build A Ring Farm wiki covering codes, crops, gear shop, sprays, mutations, fertilizer, offline income, layouts, tier list, weather events, and money farming.
```

---

### P1-3：`public/data` 多数新页面 FAQ 不够完整

状态：已处理第一轮。

已补齐约 4 条 FAQ 的页面：

```text
home
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

---

### P1-4：批量新页面模板感偏强

状态：已处理第一轮。

已增强：

```text
/mutations/：增加 Mutation stacking test checklist
/fertilizer/：增加 Use before or after upgrades 决策表
/offline-income/：增加 Before you leave the game logout checklist
/farm-layout/：增加 Beginner, mid-game, late-game layout checks
```

---

## 4. P2 状态

### P2-1：数据验证体系未落地

状态：已处理。

已新增：

```text
DATA_VERIFICATION.md
```

覆盖：

```text
Rare effect / mutation claims
Spray claims
Weather event claims
Fertilizer claims
Offline income claims
Farm layout claims
Codes claims
```

字段：

```text
Claim
Used on pages
Current status
Source type
Need screenshot
Need in-game test
Last checked
Next action
```

---

### P2-2：结构化内链审计未做

状态：已处理。

已新增：

```text
INTERNAL_LINK_AUDIT.md
```

覆盖：

```text
首页入口
Header Guides 下拉
Footer Guides
页面级内链
Topic clusters
后续页面进入 Header / 首页的控制规则
```

---

### P2-3：暂缓继续扩页

状态：维持。

暂缓：

```text
/discord/
/trello/
/crop-values/
/rarities/
```

除非有明确策略：

```text
Discord / Trello 只能做官方链接核验页
Crop Values / Rarities 只能做 community reported 页面，不能写假表格
```

---

## 5. 通过项

### sitemap 机制通过

`sitemap.ts` 使用 `sitemapRoutes` 自动生成 URL，`sitemapRoutes` 来自 `page-registry.ts`。

只要页面进入 `completedCoreSlugs`，理论上会进入 sitemap。

### robots 机制通过

`robots.ts` 指向 `/sitemap.xml`，并给普通 crawler 开放 `/`。

AI crawler 规则使用 `robotsAllowedRoutes`，与 sitemap 路由同源。

### canonical 机制基本通过

首页使用 `buildLocalizedMetadata` 生成 canonical。

手写页面使用 `metadata.alternates.canonical`。

后续新增页面建议统一改用 `absoluteUrl()`，减少硬编码域名。

### 导航覆盖通过

Guides 下拉已覆盖核心新增页：

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
```

### 首页入口覆盖通过

首页现在通过 `siteData.pages` 自动补全：

```text
Sprays
Mutations
Fertilizer
Offline Income
Farm Layout
Tier List
```

---

## 6. 当前剩余任务

### 必做

```text
本地 npm run build
本地 npm run dev 后肉眼检查核心页面
```

### 可做

```text
根据 DATA_VERIFICATION.md 去收集截图和实机证据
根据 INTERNAL_LINK_AUDIT.md 控制后续新页面进入首页/Header
上线后提交 sitemap 到 Google Search Console / Bing / Yandex
```

### 暂缓

```text
继续大规模扩页
Discord / Trello 单独页
Crop Values / Rarities 假数据页
```

---

## 7. 最终判断

Verifiable:

```text
P0-2 已完成。
P1 已完成第一轮扫尾。
P2 已完成第一轮文档化。
DATA_VERIFICATION.md 与 INTERNAL_LINK_AUDIT.md 已新增。
llms.txt 已更新为完整主题集群摘要。
首页入口已改为从 siteData.pages 补全。
Guides 下拉已覆盖核心新增页。
sitemap 和 robots 机制使用统一 page-registry。
```

Judgment:

```text
当前站点已经可以进入本地构建验证和上线收录准备阶段，而不是继续扩页阶段。
```

Confidence ≠ Correctness:

```text
没有本地 build 输出前，不能断言构建完全通过。
```
