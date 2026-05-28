# Build A Ring Farm SEO Index 台账

> 站点：`https://www.buildaringfarm.org`  
> 建立日期：2026-05-26  
> 当前阶段：第 0 周到第 14 天观察期 + 低风险长尾首批实验 + 竞品 reported evidence 强化  
> 目标指标：Index 覆盖页面数  
> 规则：首页 TDH 不动；不新增普通内页；所有未验证数据必须保持 Community reported / Pending / Needs verification。

---

## 1. 当前总判断

| 项目 | 当前状态 | 判断 |
|---|---|---|
| Google 发现情况 | 5.19–5.25 已有 3,080 Click、22,982 Impression、CTR 13.40%、平均 Position 6.31 | Google 已经明显发现并分发站点 |
| 页面点击情况 | 已有 19 个页面获得点击 | 页面集群不是孤岛 |
| Index 覆盖 | 5.22 显示 18 已索引、12 未索引 | 有索引基础，但页面级 Index 仍需补齐 |
| Sitemap | 已确认前 20 条全是 `https://www.buildaringfarm.org/...`，2026-05-28 已改为构建日期 lastModified | www 统一通过，freshness 已修 |
| Canonical | 首页和 `/money-farming/` 均为 www canonical | Canonical 样本通过 |
| www / 非 www | 非 www 正确 301 到 www | 技术风险基本排除 |
| Robots | 全站允许核心页面，`/admin/`、`/private/`、`/user-content/` 禁止 | 核心页面抓取允许 |
| 当前阶段 | 第 0 周到第 14 天观察期 | 不动首页，不大规模扩页，只做证据层增强 |

### 1.1 2026-05-26 新增长尾实验记录

| 页面 | 目标 Query | 上线日期 | 证据等级 | 第 7 天复查 | 第 14 天复查 | 实验边界 |
|---|---|---|---|---|---|---|
| `/rainbow-mutation/` | `build a ring farm rainbow mutation` | 2026-05-26 | Community reported, pending in-game check | 2026-06-02 | 2026-06-09 | 只做 source status 页面，不写固定数值 |
| `/rainbow-spray/` | `build a ring farm rainbow spray` | 2026-05-26 | Community reported, pending in-game check | 2026-06-02 | 2026-06-09 | 只做 item source status 页面，不写固定价格 |
| `/strong-fertilizer/` | `build a ring farm strong fertilizer` | 2026-05-26 | Community reported, pending in-game check | 2026-06-02 | 2026-06-09 | 只做 item source status 页面，不写固定效果 |

### 1.2 2026-05-28 竞品 reported evidence 强化记录

| 页面 | 动作类型 | 新增证据层 | 证据等级 | 第 7 天复查 | 第 14 天复查 | 实验边界 |
|---|---|---|---|---|---|---|
| `/rings/` | Existing page strengthening | Reported ring multiplier watchlist：Base 7x、Middle 13x、Outer 19x | Competitor reported, pending in-game verification | 2026-06-04 | 2026-06-11 | 不写 verified / official / confirmed |
| `/mutations/` | Existing page strengthening | Reported mutation multiplier matrix：Honeycomb 6.5x、Rainbow 5x、Farm 4x、Alien 3.25x 等 | Competitor reported 或 cross-source community reported | 2026-06-04 | 2026-06-11 | 不把倍率写成官方数值 |
| `/codes/` | Existing page strengthening | Competitor reported code claims watchlist：PLANTRUSH、BARF:3、THANKYOU、UPDATE2 等 | Competitor reported / Community reported, needs testing | 2026-06-04 | 2026-06-11 | Verified active codes 仍为 0 |
| `/update-3-status/` | Existing page strengthening | PLANTRUSH watchlist + Honeycomb / Queen Bee / Alien / Farm pending cluster | Pending verification | 2026-06-04 | 2026-06-11 | 只做状态汇总，不造 active codes |
| `/calculator/` | Earlier strengthened, retained | Reported value estimator with plant count、base value、mutation、ring、fertilizer、run count | Player-entered or reported inputs | 2026-06-04 | 2026-06-11 | 输出仍是 reported estimate |

---

## 2. 2026-05-26 手动检查结论

用户截图确认：以下页面当前 **Google 或 Bing 未索引**，并已部分提交请求。其他页面按用户反馈记录为已索引。

### 2.1 Google 未索引

| 页面 | Google 状态 | 发现时间 | 是否已请求索引 | 当前判断 | 下一个动作 |
|---|---|---|---|---|---|
| `/advanced-crops/` | 未索引 | 已发现，截图显示 URL 尚未收录到 Google | 请求失败，GSC 显示“出了点问题” | 技术可发现，但尚未进入索引 | 3 天后重试请求索引，不改内容 |
| `/upgrades/` | 未索引 | 已发现，截图显示 URL 尚未收录到 Google | 请求失败，GSC 显示“出了点问题” | 技术可发现，但尚未进入索引 | 3 天后重试请求索引，不改内容 |

### 2.2 Bing 未索引

| 页面 | Bing 状态 | 发现时间 | 是否已请求索引 | 当前判断 | 下一个动作 |
|---|---|---|---|---|---|
| `/codes/` | 未索引或无法知晓见解 | 待 Bing 更新 | 已请求编制索引 | 只记录，不因 Bing 改内容 | 3 天后复查 |
| `/money-farming/` | 未索引或无法知晓见解 | 待 Bing 更新 | 已请求编制索引 | Google 已有表现，Bing 不作为内容修改理由 | 3 天后复查 |
| `/fertilizer/` | 已发现但未收录 | 2026-05-21 | 已请求编制索引 | Bing 提示“已发现但未网”，不改内容 | 3 天后复查 |
| `/offline-income/` | 已发现但未收录 | 2026-05-21 | 已请求编制索引 | Bing 未索引，不改内容 | 3 天后复查 |
| `/farm-layout/` | 已发现但未收录 | 2026-05-21 | 请求时出现服务端意外错误 | Bing 临时错误，先记录 | 3 天后重试提交 |
| `/weather-events/` | 已发现但未收录 | 2026-05-21 | 已请求编制索引 | Bing 未索引，不改内容 | 3 天后复查 |
| `/rings/` | 已发现但未收录 | 2026-05-25 | 已请求编制索引 | 已做 reported multiplier watchlist，需观察是否改善发现与点击 | 2026-06-04 复查 |

---

## 3. Index 台账主表

| 页面 | 页面组 | Google Index / GSC 状态 | Bing Index 状态 | Sitemap 状态 | Canonical 状态 | Robots 状态 | GSC Impression | GSC Click | CTR | Position | 当前判断 | 下一个动作 |
|---|---|---|---|---|---|---|---:|---:|---:|---:|---|---|
| `/` | 首页 / Wiki Hub | 已索引，已有 GSC 表现 | 已索引 | 已确认 | 已确认 www | 允许 | 14817 | 2528 | 17.06% | 5.97 | 当前最强入口，不动 | 继续观察，不改 Title / Description |
| `/tier-list/` | 强信号页 | 已索引，已有 GSC 表现 | 已索引 | 已确认 | 待抽查 | 允许 | 1274 | 178 | 13.97% | 6.63 | 第 14 天加码候选 | 第 14 天后判断是否加内容厚度 |
| `/sprays/` | 强信号页 | 已索引，已有 GSC 表现 | 已索引 | 已确认 | 待抽查 | 允许 | 914 | 127 | 13.89% | 5.39 | 第 14 天加码候选 | 第 14 天后判断是否加内容厚度 |
| `/mutations/` | CTR 候选页 + evidence strengthening | 已索引，已有 GSC 表现 | 已索引 | 已确认 | 待抽查 | 允许 | 2997 | 35 | 1.17% | 7.70 | 已加 reported mutation multiplier matrix，观察是否改善 CTR 与 query 覆盖 | 2026-06-04 复查 |
| `/scripts/` | 安全说明页 | 已索引，已有 GSC 表现 | 已索引 | 已确认 | 待抽查 | 允许 | 1491 | 29 | 1.95% | 8.06 | 有需求但风险词，不优先 | 只记录，不诱导下载 |
| `/money-farming/` | 商业长尾页 | 已索引，已有 GSC 表现 | 未索引，已请求编制索引 | 已确认 | 已确认 www | 允许 | 434 | 15 | 3.46% | 6.28 | Google 已发现，Bing 不作为内容修改理由 | 3 天后复查 Bing |
| `/codes/` | CTR 候选页 + code claim watchlist | 已索引，已有 GSC 表现 | 未索引，已请求编制索引 | 已确认 | 待抽查 | 允许 | 392 | 2 | 0.51% | 9.93 | 已加 competitor claim watchlist，但 verified active codes 仍为 0 | 2026-06-04 复查 |
| `/gear-shop/` | 观察页 | 已索引，已有 GSC 表现 | 已索引 | 已确认 | 待抽查 | 允许 | 165 | 14 | 8.48% | 5.94 | 小样本正常 | 继续观察 |
| `/offline-income/` | 观察页 | 已索引，已有 GSC 表现 | 未索引，已请求编制索引 | 已确认 | 待抽查 | 允许 | 156 | 14 | 8.97% | 4.92 | Google 已有表现，Bing 未索引 | 3 天后复查 Bing |
| `/crops/` | 核心攻略页 | 已索引 | 已索引 | 已确认 | 待抽查 | 允许 | 待上传 | 待上传 | 待上传 | 待上传 | 核心页，需补 GSC 页面级数据 | 下次 GSC 导出补齐 |
| `/seeds/` | 核心攻略页 | 已索引 | 已索引 | 已确认 | 待抽查 | 允许 | 待上传 | 待上传 | 待上传 | 待上传 | 核心页，需补 GSC 页面级数据 | 下次 GSC 导出补齐 |
| `/fertilizer/` | 观察页 | 已索引 | 未索引，已请求编制索引 | 已确认 | 待抽查 | 允许 | 待上传 | 待上传 | 待上传 | 待上传 | Bing 未索引，Google 已索引 | 3 天后复查 Bing |
| `/strong-fertilizer/` | 新增长尾页 | 待提交 / 待发现 | 待提交 / 待发现 | 已同步 | 待抽查 | 允许 | 0 | 0 | 待上传 | 待上传 | 首批长尾实验，证据等级为 community reported / pending | 2026-06-02 复查 GSC 与 Bing |
| `/farm-layout/` | 观察页 | 已索引 | 未索引，请求时服务端错误 | 已确认 | 待抽查 | 允许 | 待上传 | 待上传 | 待上传 | 待上传 | Bing 未索引且提交异常 | 3 天后重试 Bing |
| `/advanced-crops/` | 观察页 | 未索引，GSC 请求失败 | 已索引 | 已确认 | 待抽查 | 允许 | 待上传 | 待上传 | 待上传 | 待上传 | Google 未索引，需复查 | 3 天后重试 GSC 索引请求 |
| `/weather-events/` | 观察页 | 已索引 | 未索引，已请求编制索引 | 已确认 | 待抽查 | 允许 | 待上传 | 待上传 | 待上传 | 待上传 | Bing 未索引，Google 已索引 | 3 天后复查 Bing |
| `/upgrades/` | 核心攻略页 | 未索引，GSC 请求失败 | 已索引 | 已确认 | 待抽查 | 允许 | 待上传 | 待上传 | 待上传 | 待上传 | Google 未索引，需复查 | 3 天后重试 GSC 索引请求 |
| `/calculator/` | 新增观察页 + estimator | 已索引 | 已索引 | 已确认出现 | 待抽查 | 允许 | 待上传 | 待上传 | 待上传 | 待上传 | 已是 reported value estimator，观察 query 扩展 | 2026-06-04 复查 |
| `/rings/` | 新增观察页 + reported multiplier watchlist | 已索引 | 未索引，已请求编制索引 | 已确认出现 | 待抽查 | 允许 | 待上传 | 待上传 | 待上传 | 待上传 | 已加 reported multiplier watchlist，Bing 待复查 | 2026-06-04 复查 |
| `/update-3-status/` | 新增观察页 + status watchlist | 已索引 | 已索引 | 已确认出现 | 待抽查 | 允许 | 待上传 | 待上传 | 待上传 | 待上传 | 已同步 PLANTRUSH 和 mutation pending cluster | 2026-06-04 复查 |
| `/updates/` | 更新页 | 已索引 | 已索引 | 已确认 | 待抽查 | 允许 | 待上传 | 待上传 | 待上传 | 待上传 | 补数据 | 下次 GSC 导出补齐 |
| `/beginners-guide/` | 新手页 | 已索引 | 已索引 | 已确认 | 待抽查 | 允许 | 待上传 | 待上传 | 待上传 | 待上传 | 补数据 | 下次 GSC 导出补齐 |
| `/rainbow-mutation/` | 新增长尾页 | 待提交 / 待发现 | 待提交 / 待发现 | 已同步 | 待抽查 | 允许 | 0 | 0 | 待上传 | 待上传 | 首批长尾实验，证据等级为 community reported / pending | 2026-06-02 复查 GSC 与 Bing |
| `/rainbow-spray/` | 新增长尾页 | 待提交 / 待发现 | 待提交 / 待发现 | 已同步 | 待抽查 | 允许 | 0 | 0 | 待上传 | 待上传 | 首批长尾实验，证据等级为 community reported / pending | 2026-06-02 复查 GSC 与 Bing |

---

## 4. 未索引页面复查清单

### 4.1 Google 复查清单

| 优先级 | 页面 | 当前状态 | 复查时间 | 动作 |
|---|---|---|---|---|
| P1 | `/advanced-crops/` | 未索引，请求失败 | 2026-05-29 | 重试请求索引 |
| P1 | `/upgrades/` | 未索引，请求失败 | 2026-05-29 | 重试请求索引 |

### 4.2 Bing 复查清单

| 优先级 | 页面 | 当前状态 | 复查时间 | 动作 |
|---|---|---|---|---|
| P0 | `/codes/` | 未索引，已请求 | 2026-06-04 | 复查 |
| P1 | `/money-farming/` | 未索引，已请求 | 2026-05-29 | 复查 |
| P1 | `/fertilizer/` | 未索引，已请求 | 2026-05-29 | 复查 |
| P1 | `/offline-income/` | 未索引，已请求 | 2026-05-29 | 复查 |
| P1 | `/farm-layout/` | 未索引，请求服务端错误 | 2026-05-29 | 重试请求 |
| P1 | `/weather-events/` | 未索引，已请求 | 2026-05-29 | 复查 |
| P2 | `/rings/` | 未索引，已请求 | 2026-06-04 | 复查 |

---

## 5. 当前禁止事项

| 禁止事项 | 原因 |
|---|---|
| 不改首页 Title | 首页是最大流量入口 |
| 不改首页 Description | 会污染当前最强页面判断 |
| 不继续扩普通新页面 | 本轮只强化已有页面证据层 |
| 不把 reported multiplier 写成 verified | 竞品数值未做游戏内验证 |
| 不把 PLANTRUSH 写成 active | 尚无官方或游戏内验证 |
| 不因为 Bing 未索引就改页面 | Google 已经有分发表现，Bing 只是辅助搜索源 |
| 不因为 GSC 请求失败就改内容 | 请求失败是工具状态，不等于页面质量问题 |
| 不强化广告干扰 | 移动端 CTR 低于桌面端，广告可能影响用户行为 |

---

## 6. 第 14 天候选动作池

| 候选动作 | 触发条件 | 允许动作 | 禁止动作 |
|---|---|---|---|
| 加码 `/tier-list/` | 第 14 天 CTR 仍高、排名仍在前 10 附近 | 加内容厚度、加强相关内链 | 不改首页，不批量扩页 |
| 加码 `/sprays/` | 第 14 天 CTR 仍高、排名仍在前 10 附近 | 加内容厚度、加强相关内链 | 不改首页，不批量扩页 |
| CTR 实验 `/mutations/` | 第 14 天仍高曝光低点击 | 只改 Title 或 Description 二选一 | 不同时大改导航或广告 |
| CTR 实验 `/codes/` | 第 14 天仍低 CTR | 优化“0 verified codes”表达和 reported claims 展示 | 不造 active codes |
| 技术排查 | 核心页仍大量未索引 | 查 sitemap、robots、canonical、内链 | 不先改内容 |

---

## 7. 下次需要补充的数据

| 数据 | 用途 |
|---|---|
| 2026-06-04 evidence strengthening 页面复查结果 | 判断 reported tables 是否被发现、索引、展示 |
| 5.26–6.1 GSC 页面数据 | 做第 14 天判断 |
| 5.26–6.1 GSC Query 数据 | 判断搜索意图变化 |
| 5.26–6.1 GSC 国家数据 | 判断国家 / 语言信号 |
| 5.26–6.1 Coverage 数据 | 判断 Index 覆盖变化 |
| Bing 页面索引状态截图或导出 | 补 Bing Index 字段 |
| 广告展示 / 点击 / 收入 | 判断广告是否污染 SEO 行为数据 |
