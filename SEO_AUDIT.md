# Build A Ring Farm 全站 SEO 质量审计

> 审计对象：`tnagjei/roblox-build-a-ring-farm`  
> 初始审计时间：2026-05-20  
> 状态更新时间：2026-05-20  
> 审计目标：确认当前页面集群是否具备收录基础，并跟踪 P0 / P1 / P2 修复状态。

---

## 1. 当前结论

当前项目已经具备基础收录条件，并已完成两项关键修复：

```text
llms.txt 已从旧版摘要升级为完整主题集群摘要
首页入口已从硬编码兜底改为基于 siteData.pages 补全
```

仍不建议继续大规模扩页。

当前剩余重点是：

```text
本地 npm run build 验证
public/data FAQ 完整度
数据验证台账 DATA_VERIFICATION.md
批量新页模板感降低
```

---

## 2. P0 状态

### P0-1：本地 build 验证

状态：未在本轮工具侧验证，必须本地执行。

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

价值：AI crawler 现在能更完整理解当前主题集群，不再只看到 codes / beginner / updates / scripts。

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

注意：这不是把入口写回 `template-pages.ts`，而是把入口来源统一到 `public/data/build-a-ring-farm.json`。

新约束：

```text
以后新增页面如果想自动进入首页，必须先同步 public/data/build-a-ring-farm.json
```

---

### P1-2：`public/data` 首页 description 过长且重复

状态：未处理。

问题：首页 description 仍可能存在关键词堆叠或 offline income 重复。

建议目标文案：

```text
Build A Ring Farm wiki covering codes, crops, gear shop, sprays, mutations, fertilizer, offline income, layouts, tier list, weather events, and money farming.
```

优先级：P1。

---

### P1-3：`public/data` 多数新页面 FAQ 不够完整

状态：未完全处理。

因为首页 FAQ 现在会从 `siteData.pages` 读取新页面 FAQ 第一条，所以 public/data 的 FAQ 完整度变得更重要。

建议优先同步 4 条左右 FAQ：

```text
sprays
mutations
fertilizer
offline-income
farm-layout
tier-list
gear-shop
advanced-crops
weather-events
money-farming
```

优先级：P1。

---

### P1-4：批量新页面模板感偏强

状态：未处理。

需要增强具体玩家场景：

```text
/mutations/：增加 stacking test checklist
/fertilizer/：增加 use before / after upgrade decision tree
/offline-income/：增加 logout checklist 表格
/farm-layout/：增加 beginner / mid-game / late-game layout checklist
```

优先级：P1。

---

## 4. P2 状态

### P2-1：数据验证体系未落地

状态：未处理。

建议新增：

```text
DATA_VERIFICATION.md
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

首批记录：

```text
Rainbow 5x
Radioactive 3x
Void 2.25x
Frozen 1.75x
Wet 1.5x
Rain 8%
Blizzard 4%
Black Hole 3%
Nuclear 2%
Galaxy 1%
Wet Spray
Frozen Spray
Void Spray
Radioactive Spray
Rainbow Spray
Acid Spray
Strong Fertilizer
Mutation stacking
Spray stacking
Offline mutations
Offline weather events
Offline sprays
Farm layout profit claims
```

优先级：P2，但对长期可信度很重要。

---

### P2-2：结构化内链审计未做

状态：未处理。

后续可新增：

```text
INTERNAL_LINK_AUDIT.md
```

检查：

```text
每页是否至少链接 4 个相关页面
是否存在只进不出的页面
是否存在首页入口过多导致可读性下降
是否存在 sitemap 有但导航/首页没有的页面
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

## 6. 推荐修复顺序

### 第一优先级

```text
1. 本地 npm run build
2. 压缩 public/data 首页 description
3. 同步 public/data 新页面 FAQ 完整度
```

### 第二优先级

```text
4. 给四个批量新页增加 checklist / decision tree
5. 新建 DATA_VERIFICATION.md
```

### 第三优先级

```text
6. 做 INTERNAL_LINK_AUDIT.md
7. 再考虑 crop-values / rarities / wiki-trello-discord
```

---

## 7. 最终判断

Verifiable:

```text
llms.txt 已更新为完整主题集群摘要。
首页入口已改为从 siteData.pages 补全。
Guides 下拉已覆盖核心新增页。
sitemap 和 robots 机制使用统一 page-registry。
```

Judgment:

```text
当前站点最该做的是构建验证、public/data 完整度、数据验证台账和批量页增强，而不是继续扩页。
```

Confidence ≠ Correctness:

```text
没有本地 build 输出前，不能断言构建完全通过。
```
