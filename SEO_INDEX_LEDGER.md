# Build A Ring Farm SEO Index 台账

> 站点：`https://www.buildaringfarm.org`  
> 建立日期：2026-05-26  
> 当前阶段：第 0 周到第 14 天观察期 + 低风险长尾实验 + 2026-06-03 keyword expansion  
> 目标指标：Index 覆盖页面数、GSC Query 覆盖、页面级 Impression 变化  
> 规则：首页 TDH 不动；所有未验证数据必须保持 Community reported / Third-party reported / Pending / Needs verification。

---

## 1. 当前总判断

| 项目 | 当前状态 | 判断 |
|---|---|---|
| Google 发现情况 | 5.19–5.25 已有 3,080 Click、22,982 Impression、CTR 13.40%、平均 Position 6.31 | Google 已经明显发现并分发站点 |
| 首页状态 | `/` 是当前最大入口 | 不改首页 Title / Description |
| Sitemap | www 统一，lastModified 已改为构建日期 | 技术基础通过 |
| Canonical | 首页和样本页已确认 www canonical | 基本通过 |
| 事实边界 | 不写假 active codes、假倍率、假 patch notes | 必须继续保持 |

---

## 2. 2026-05-26 新增长尾实验记录

| 页面 | 目标 Query | 上线日期 | 证据等级 | 第 7 天复查 | 第 14 天复查 | 实验边界 |
|---|---|---|---|---|---|---|
| `/rainbow-mutation/` | `build a ring farm rainbow mutation` | 2026-05-26 | Community reported, pending in-game check | 2026-06-02 | 2026-06-09 | 只做 source status 页面，不写固定数值 |
| `/rainbow-spray/` | `build a ring farm rainbow spray` | 2026-05-26 | Community reported, pending in-game check | 2026-06-02 | 2026-06-09 | 只做 item source status 页面，不写固定价格 |
| `/strong-fertilizer/` | `build a ring farm strong fertilizer` | 2026-05-26 | Community reported, pending in-game check | 2026-06-02 | 2026-06-09 | 只做 item source status 页面，不写固定效果 |

---

## 3. 2026-05-28 竞品 reported evidence 强化记录

| 页面 | 动作类型 | 新增证据层 | 证据等级 | 第 7 天复查 | 第 14 天复查 | 实验边界 |
|---|---|---|---|---|---|---|
| `/rings/` | Existing page strengthening | Reported ring multiplier watchlist：Base 7x、Middle 13x、Outer 19x | Competitor reported, pending in-game verification | 2026-06-04 | 2026-06-11 | 不写 verified / official / confirmed |
| `/mutations/` | Existing page strengthening | Reported mutation multiplier matrix | Competitor reported 或 cross-source community reported | 2026-06-04 | 2026-06-11 | 不把倍率写成官方数值 |
| `/codes/` | Existing page strengthening | Competitor reported code claims watchlist | Competitor reported / Community reported, needs testing | 2026-06-04 | 2026-06-11 | Verified active codes 仍为 0 |
| `/update-3-status/` | Existing page strengthening | PLANTRUSH watchlist + mutation pending cluster | Pending verification | 2026-06-04 | 2026-06-11 | 只做状态汇总，不造 active codes |
| `/calculator/` | Earlier strengthened, retained | Reported value estimator | Player-entered or reported inputs | 2026-06-04 | 2026-06-11 | 输出仍是 reported estimate |

---

## 4. 2026-06-03 关键词文件执行记录

来源文件：`buildaringfarm.org-keyword-research-2026-06-03.md`

| 页面 | 目标 Query | 页面动作 | 证据等级 | 第 7 天复查 | 第 14 天复查 | 实验边界 |
|---|---|---|---|---|---|---|
| `/250kusers-code/` | `Build A Ring Farm 250KUSERS code` | 新增独立长尾页 + `/codes/` 入口 | Third-party reported, pending in-game verification | 2026-06-10 | 2026-06-17 | 不放入 verified active table |
| `/official-discord/` | `Build A Ring Farm official Discord codes` | 新增来源策略页 + `/codes/` 入口 | Server discovered, announcement proof pending | 2026-06-10 | 2026-06-17 | 服务器存在不等于 code verified |
| `/plant-contracts/` | `Build A Ring Farm Plant Contracts` | 新增 Update 4 mechanics 页 + `/update-status/` 入口 | Third-party reported, pending verification | 2026-06-10 | 2026-06-17 | 不写固定奖励、冷却、收益 |
| `/farm-ring-bonuses/` | `Build A Ring Farm Farm Ring Bonuses` | 新增 ring bonus 页 + `/rings/` 入口 | Third-party reported, pending verification | 2026-06-10 | 2026-06-17 | 不写固定 bonus、best ring、verified multiplier |
| `/soil-quality-upgrades/` | `Build A Ring Farm Soil Quality Upgrades` | 新增 upgrade mechanics 页 + Guides 入口 | Third-party reported, pending verification | 2026-06-10 | 2026-06-17 | 不写固定价格、ROI、growth effect |
| `/farm-skins/` | `Build A Ring Farm Farm Skins` | 新增 cosmetic mechanics 页 + Guides 入口 | Third-party reported, pending verification | 2026-06-10 | 2026-06-17 | 不把 cosmetic 写成 gameplay boost |
| `/tier-list/` | `Build A Ring Farm pets tier list` 和 `best pets` | 页面内容全面加码重构为宠物梯度方向 | Community reported, pending verification | 2026-06-10 | 2026-06-17 | 不写官方排行，不写 verified，保持 source 标示 |

---

## 5. Index 台账主表

| 页面 | 页面组 | Google Index / GSC 状态 | Bing Index 状态 | Sitemap 状态 | 当前判断 | 下一个动作 |
|---|---|---|---|---|---|---|
| `/` | 首页 / Wiki Hub | 已索引，已有 GSC 表现 | 已索引 | 已确认 | 当前最强入口，不动 | 继续观察，不改 Title / Description |
| `/codes/` | CTR 候选页 + code claim watchlist | 已索引，已有 GSC 表现 | 待复查 | 已确认 | 已加入 250KUSERS 和 source policy | 2026-06-10 复查 query |
| `/update-status/` | Update status hub | 已上线 | 待复查 | 已确认 | 已承接 Update 4 mechanics watchlist | 2026-06-10 复查 |
| `/rings/` | Rings + Farm Ring Bonuses | 已索引 | 待复查 | 已确认 | 已链接 Farm Ring Bonuses | 2026-06-10 复查 |
| `/250kusers-code/` | 新增长尾页 | 待发现 | 待提交 / 待发现 | 已同步 | 新鲜 code 长尾实验 | 提交索引后 7 / 14 天复查 |
| `/official-discord/` | 新增长尾页 | 待发现 | 待提交 / 待发现 | 已同步 | 来源信任页实验 | 提交索引后 7 / 14 天复查 |
| `/plant-contracts/` | 新增长尾页 | 待发现 | 待提交 / 待发现 | 已同步 | Update 4 mechanics 实验 | 提交索引后 7 / 14 天复查 |
| `/farm-ring-bonuses/` | 新增长尾页 | 待发现 | 待提交 / 待发现 | 已同步 | Update 4 rings 实验 | 提交索引后 7 / 14 天复查 |
| `/soil-quality-upgrades/` | 新增长尾页 | 待发现 | 待提交 / 待发现 | 已同步 | Update 4 upgrades 实验 | 提交索引后 7 / 14 天复查 |
| `/farm-skins/` | 新增长尾页 | 待发现 | 待提交 / 待发现 | 已同步 | Update 4 cosmetic 实验 | 提交索引后 7 / 14 天复查 |
| `/tier-list/` | 强信号页加码 | 已索引，已有 GSC 表现 | 已索引 | 已确认 | 页面已重构为宠物梯度厚度，强化 5 处内链 | 2026-06-10 复查 query 流量 |

---

## 6. 当前禁止事项

| 禁止事项 | 原因 |
|---|---|
| 不改首页 Title | 首页是最大流量入口 |
| 不改首页 Description | 会污染当前最强页面判断 |
| 不把 `250KUSERS` 写成 verified active | 只有第三方 reported claim，未做游戏内验证 |
| 不把 Discord server existence 写成 code proof | 服务器可见不等于具体 code 官方确认 |
| 不把 Update 4 mechanics 写成 official patch notes | MrGuider 等第三方 summary 不是官方 patch notes |
| 不写固定 Plant Contracts rewards | 无官方或游戏内证据 |
| 不写固定 Farm Ring Bonuses multiplier | 无官方或游戏内证据 |
| 不写固定 Soil Quality ROI | 无官方或游戏内证据 |
| 不说 Farm Skins 提升收入 | 默认 cosmetic，除非有证明 |

---

## 7. 下次需要补充的数据

| 数据 | 用途 |
|---|---|
| 2026-06-10 新增 6 页索引状态 | 判断是否被发现 / 是否进入 GSC |
| 2026-06-17 新增 6 页第 14 天数据 | 判断保留、加码、合并或停止 |
| GSC Query 数据 | 看 `250KUSERS`、`official Discord`、`Plant Contracts` 是否出现 impression |
| Bing 页面索引状态 | 补 Bing Index 字段 |
| 游戏内验证结果 | 决定是否能把 reported / pending 升级 |
