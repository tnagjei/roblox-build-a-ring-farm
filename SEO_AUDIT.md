# Build A Ring Farm 全站 SEO 质量审计

> 审计对象：`tnagjei/roblox-build-a-ring-farm`
> 审计时间：2026-05-20
> 审计目标：确认当前页面集群是否具备收录基础，并找出下一步应该修复的 P0 / P1 / P2 问题。

---

## 1. 结论

当前项目已经具备基础收录条件：

```text
核心页面已注册到 game-config
sitemap 使用 page-registry 自动生成
robots 指向 sitemap
Guides 下拉覆盖主要页面
首页通过 HomePageTemplate 兜底补入新增长尾页入口
public/data 已覆盖大部分页面 TDK 与 relatedPages
```

但还没有到“继续大规模扩页”的阶段。

当前最大问题不是缺页面，而是：

```text
首页内容源不够干净
llms.txt 过旧，只覆盖 codes / beginner / updates / scripts
public/data 部分 description 过长或重复
新增长尾页是批量生产，存在模板感和薄内容风险
数据验证体系还没有落地
```

---

## 2. P0 问题

### P0-1：必须本地跑 build

这批新增长尾页较多，必须本地验证：

```bash
git pull origin main
rm -rf .next
npm run build
npm run dev
```

重点检查：

```text
/mutations/
/fertilizer/
/offline-income/
/farm-layout/
/sprays/
/tier-list/
/sitemap.xml
/robots.txt
/llms.txt
/llms-full.txt
```

原因：当前审计只能基于仓库静态文件，不能替代本地 `next build`。

---

### P0-2：`llms.txt` 内容明显滞后

当前 `llms.txt` 只列出：

```text
Codes
Beginner Guide
Updates
Scripts Safety
Roblox Game
```

它没有覆盖：

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
upgrades
crops
seeds
```

风险：AI crawler 只读 `llms.txt` 时，对站点主题理解会偏旧。

建议：更新 `app/llms.txt/route.ts`，至少补入 8 个核心商业页：

```text
Gear Shop
Sprays
Mutations
Fertilizer
Offline Income
Farm Layout
Tier List
Money Farming
```

---

## 3. P1 问题

### P1-1：首页入口依赖模板兜底，内容源不干净

当前 `HomePageTemplate.tsx` 会兜底注入：

```text
Sprays
Mutations
Fertilizer
Offline Income
Farm Layout
Tier List
```

优点：避免孤岛页。

问题：这些入口没有正式写回 `lib/content/template-pages.ts`，导致首页真实内容源与渲染层不一致。

风险：

```text
后续维护者只看 template-pages.ts，会误判首页缺入口
内容逻辑散落在 template 和 content factory 两处
首页 popular searches / directory / FAQ 的来源不统一
```

建议：把这些入口正式迁入 `lib/content/template-pages.ts`，然后删除 `HomePageTemplate.tsx` 中的兜底注入逻辑。

---

### P1-2：`public/data` 的首页 description 过长且重复

当前首页 description 包含两次 offline income：

```text
... offline income, farm layout, tier list ... updates, and offline income tips.
```

建议改成更短版本：

```text
Build A Ring Farm wiki covering codes, crops, gear shop, sprays, mutations, fertilizer, offline income, layouts, tier list, weather events, and money farming.
```

目标：控制在 140–160 字符左右，避免堆关键词过重。

---

### P1-3：`public/data` 多数新页面 FAQ 只有 1 条

当前 `public/data/build-a-ring-farm.json` 中很多页面 `faq` 只保留 1 条。

风险：

```text
llms-full.txt 读取 public/data 时，FAQ 信息偏薄
后续如果组件直接读取 siteData.pages，FAQ 丰富度不足
```

建议：把实际页面中的 4 条 FAQ 同步回 public/data，优先：

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

---

### P1-4：批量新页面模板感偏强

以下页面是批量新增：

```text
/mutations/
/fertilizer/
/offline-income/
/farm-layout/
```

它们结构合格，但语义相似度较高：

```text
Evidence note
Community table
What still needs verification
Related guides
FAQ
```

这不是错误，但后续应补“更具体的玩家场景”：

```text
/mutations/：增加 stacking test checklist
/fertilizer/：增加 use before / after upgrade decision tree
/offline-income/：增加 logout checklist 表格
/farm-layout/：增加 beginner / mid-game / late-game layout checklist
```

---

## 4. P2 问题

### P2-1：数据验证体系还没落地

当前站点大量使用：

```text
Community reported
Needs verification
```

这是正确的，但需要一个统一验证台账。

建议新增：

```text
DATA_VERIFICATION.md
```

记录：

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

字段建议：

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

### P2-2：可以做结构化内链审计

当前 relatedPages 比较密，但还没检查：

```text
每页是否至少链接 4 个相关页面
是否存在只进不出的页面
是否存在入口过多导致首页卡片太长
```

建议后续做一个 `INTERNAL_LINK_AUDIT.md`。

---

### P2-3：暂不建议继续扩页面

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

### 5.1 sitemap 机制通过

`sitemap.ts` 使用 `sitemapRoutes` 自动生成 URL，`sitemapRoutes` 来自 `page-registry.ts`。

只要页面进入 `completedCoreSlugs`，理论上会进入 sitemap。

---

### 5.2 robots 机制通过

`robots.ts` 指向 `/sitemap.xml`，并给普通 crawler 开放 `/`。

AI crawler 规则使用 `robotsAllowedRoutes`，与 sitemap 路由同源。

---

### 5.3 canonical 机制基本通过

首页使用 `buildLocalizedMetadata` 生成 canonical。

手写页面使用 `metadata.alternates.canonical`。

需要注意：后续新增页面建议统一改用 `absoluteUrl()`，减少硬编码域名。

---

### 5.4 导航覆盖通过

Guides 下拉已覆盖：

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

---

## 6. 推荐修复顺序

### 第一优先级

```text
1. 本地 npm run build
2. 更新 llms.txt
3. 清理首页内容源，把兜底入口正式写进 template-pages.ts
```

### 第二优先级

```text
4. 同步 public/data FAQ 到 4 条左右
5. 压缩 public/data 首页 description
6. 给四个批量新页增加更具体的 checklist / decision tree
```

### 第三优先级

```text
7. 新建 DATA_VERIFICATION.md
8. 做 INTERNAL_LINK_AUDIT.md
9. 再考虑 crop-values / rarities / wiki-trello-discord
```

---

## 7. 最终判断

Verifiable:

```text
当前页面集群已经注册到 game-config。
sitemap 和 robots 使用统一 page-registry。
首页通过模板兜底注入新增长尾页入口。
Guides 下拉已包含核心新增页。
public/data 已覆盖新增长尾页基础 TDK。
```

Judgment:

```text
当前站点不是缺页面，而是需要降低模板感、补齐 AI crawler 摘要、统一首页内容源和建立数据验证台账。
```

Confidence ≠ Correctness:

```text
没有本地 build 输出前，不能断言构建完全通过。必须以 npm run build 结果为准。
```
