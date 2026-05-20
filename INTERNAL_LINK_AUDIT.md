# Build A Ring Farm 内链审计

> 用途：检查核心 SEO 页面是否形成可抓取、可理解、可维护的主题集群。  
> 项目：`tnagjei/roblox-build-a-ring-farm`  
> 状态时间：2026-05-20

---

## 1. 审计结论

当前站点已经形成第一轮主题集群：

```text
首页 Wiki Hub
Header Guides 下拉
Footer Guides 全量入口
页面正文 related guides
public/data relatedPages
sitemap.xml
llms.txt
llms-full.txt
```

主要问题不再是“没有内链”，而是：

```text
首页入口较多，需要避免可读性下降
public/data relatedPages 很密，需要后续防止无差别互链
新增页面应先进入 public/data，否则首页自动入口不会补全
Discord / Trello / crop-values / rarities 暂不应进入主集群
```

---

## 2. 核心入口层级

### 首页入口

首页当前通过 `components/templates/HomePageTemplate.tsx` 从 `siteData.pages` 自动补全：

```text
Sprays
Mutations
Fertilizer
Offline Income
Farm Layout
Tier List
```

同时首页原有内容仍承接：

```text
Codes
Seeds
Crops
Gear Shop
Advanced Crops
Weather Events
Upgrades
Money Farming
Beginner Guide
Updates
```

判断：通过。

风险：入口过多，后续新增页面不要全部进入首页；只允许主题核心页进入首页。

---

### Header Guides 下拉

当前应包含：

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

判断：通过。

风险：Header 下拉已经接近承载上限。后续 `/crop-values/`、`/rarities/` 这类页面不应默认加入 Header，下放 Footer 或页面正文即可。

---

### Footer Guides

Footer 使用 `completedCoreSlugs` 和 `siteData.pages` 生成，覆盖范围比 Header 更完整。

判断：通过。

风险：如果 `game-config.ts` 有 slug，但 `public/data` 没有对应 page，会导致 Footer 缺 label 或入口异常。

---

## 3. 页面级内链检查

| Page | Inbound from home | Header | Footer | Related links | Cluster role | Status |
|---|---:|---:|---:|---:|---|---|
| `/` | N/A | Brand | N/A | Many | Wiki hub | Pass |
| `/codes/` | Yes | Yes | Yes | Yes | Code status | Pass |
| `/beginners-guide/` | Yes | Yes | Yes | Yes | Starter guide | Pass |
| `/seeds/` | Yes | Yes | Yes | Yes | Seed cluster | Pass |
| `/crops/` | Yes | Yes | Yes | Yes | Crop cluster | Pass |
| `/upgrades/` | Yes | Yes | Yes | Yes | Progression cluster | Pass |
| `/gear-shop/` | Yes | Yes | Yes | Yes | Gear cluster | Pass |
| `/sprays/` | Yes | Yes | Yes | Yes | Rare effect support | Pass |
| `/mutations/` | Yes | Yes | Yes | Yes | Rare effect cluster | Pass |
| `/fertilizer/` | Yes | Yes | Yes | Yes | Growth / item cluster | Pass |
| `/offline-income/` | Yes | Yes | Yes | Yes | AFK / money cluster | Pass |
| `/farm-layout/` | Yes | Yes | Yes | Yes | Layout / route cluster | Pass |
| `/tier-list/` | Yes | Yes | Yes | Yes | Effect priority cluster | Pass |
| `/advanced-crops/` | Yes | Yes | Yes | Yes | Rare crop cluster | Pass |
| `/weather-events/` | Yes | Yes | Yes | Yes | Event cluster | Pass |
| `/money-farming/` | Yes | Yes | Yes | Yes | Cash route cluster | Pass |
| `/updates/` | Yes | Yes | Yes | Yes | Freshness cluster | Pass |
| `/scripts/` | Limited | Header English-only | Footer English-only | Limited | Safety / anti-risk | Pass |

---

## 4. Topic clusters

### Core gameplay cluster

```text
/crops/
/seeds/
/upgrades/
/money-farming/
/farm-layout/
/offline-income/
```

Role：解决玩家基础玩法、赚钱、布局、离线收益。

状态：通过。

建议：这些页面互链要保持稳定，不要被 rare effect 内容盖过。

---

### Rare effect cluster

```text
/sprays/
/mutations/
/tier-list/
/advanced-crops/
/weather-events/
/gear-shop/
```

Role：解决高级搜索意图，包括 sprays、mutations、weather effects、tier list。

状态：通过。

风险：该集群包含最多未验证数据，必须强制使用：

```text
Community reported
Needs verification
```

---

### Trust / freshness cluster

```text
/codes/
/updates/
/scripts/
/llms.txt
/llms-full.txt
/sitemap.xml
/robots.txt
```

Role：解决可信度、收录、AI crawler、代码安全。

状态：通过。

风险：`/codes/` 不能因为竞品有假码就写 active codes。

---

## 5. 内链规则

新增页面必须满足：

```text
1. 至少 4 个 related guide 链接
2. 至少 1 个上游父级页面链接
3. 至少 1 个相邻主题页面链接
4. 至少 1 个可信度/验证边界说明
5. 同步 public/data relatedPages
6. 同步 game-config completedCoreSlugs
7. 检查 sitemap 是否生成
8. 判断是否应该进 Header，不要默认进 Header
9. 判断是否应该进首页，不要默认进首页
```

---

## 6. 不建议进入 Header 的后续页

以下页面即使未来做，也不建议进入 Header Guides：

```text
/crop-values/
/rarities/
/wiki-trello-discord/
/discord/
/trello/
/controller-settings/
/ps5-controls/
```

原因：

```text
搜索意图更窄
证据风险更高
Header 已接近拥挤
应通过正文 related guides 或 Footer 承接
```

---

## 7. 首页入口控制规则

可以进入首页的页面：

```text
核心玩法
核心赚钱
核心稀有效果
核心验证页
```

不应进入首页的页面：

```text
过窄页面
证据不足页面
平台控制页
Discord / Trello 核验页
重复变体页
```

当前首页入口已经足够多。后续扩页优先放在：

```text
Footer
正文 related guides
sitemap
llms-full.txt
```

不要默认塞进首页。

---

## 8. 需要人工本地确认

仓库静态审计不能替代本地渲染检查。必须执行：

```bash
git pull origin main
rm -rf .next
npm run build
npm run dev
```

重点看：

```text
首页是否过长但仍可读
Guides 下拉是否溢出屏幕
Footer Guides 是否正常
/llms.txt 是否列出完整核心页
/sitemap.xml 是否包含全部 completedCoreSlugs
```

---

## 9. 最终判断

Verifiable:

```text
核心页面已通过首页、Header、Footer、正文 related guides、sitemap、llms.txt 建立基础内链。
```

Judgment:

```text
当前内链密度已经足够进入收录阶段，下一步不应继续无差别增加入口，而应控制首页与 Header 的信息密度。
```

Confidence ≠ Correctness:

```text
没有本地渲染和 build 输出前，不能断言 Header 下拉和首页卡片在视觉上完全合格。
```
