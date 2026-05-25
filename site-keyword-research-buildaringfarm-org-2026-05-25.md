# buildaringfarm.org 关键词研究测试报告 - 2026-05-25

## Counter

🚨 反方结论：这个测试不能被当成完整的 100 词递归关键词报告。原因是 `site-keyword-research` 文档要求用浏览器直接抓 Google SERP 里的 PASF、Related Searches 和 People Also Ask 区块，但本次环境没有暴露该文档里的 `browser(action=...)` 接口。本报告只做一次可复现测试，数据源严格拆分为：

- Verifiable：站点首页、robots.txt、llms.txt、sitemap.xml、Google Suggest API、当前搜索结果快照。
- Judgment：关键词分层、竞争度估算、Top 3 内容方向。
- Confidence != Correctness：未抓到的 PASF/RS/PAA 不伪装成已抓到，竞争度不是 Ahrefs 或 SEMrush 数据。

## 一、站点定位分析

| 字段 | 内容 |
|------|------|
| 输入 URL | `https://buildaringfarm.org` |
| 最终 canonical | `https://www.buildaringfarm.org/` |
| 站点类型 | Roblox 游戏攻略内容站 |
| 核心主题 | Build A Ring Farm wiki、codes、seeds、mutations、gear shop、weather events、money farming |
| 目标用户 | 搜索 Roblox Build A Ring Farm 代码、种子、突变、赚钱路线的新玩家和中后期玩家 |
| 页面规模 | sitemap 当前列出 18 个 URL |

### 首页 SEO 信号

- Title：`Build A Ring Farm Wiki & Guide | Codes, Crops, Upgrades`
- Meta description：`Build A Ring Farm wiki for Roblox players: check codes status, seeds, crops, gear shop, advanced crops, weather events, upgrades, money farming, updates, and offline income tips.`
- Canonical：`https://www.buildaringfarm.org/`
- 301：`https://buildaringfarm.org/` 跳转到 `https://www.buildaringfarm.org/`

## 二、递归关键词扩展记录

### 种子词

| # | 种子词 | 来源 |
|---|--------|------|
| 1 | build a ring farm | 首页主题 |
| 2 | build a ring farm codes | 首页与搜索结果 |
| 3 | build a ring farm wiki | 首页与搜索结果 |
| 4 | build a ring farm mutations | 首页与竞品结果 |
| 5 | build a ring farm seeds | 首页与竞品结果 |

### Google Suggest 测试结果

> 说明：Google Suggest 是 Google 自动补全接口，不等同于 PASF 或 Related Searches，所以标注为 `[GS]`。

| 扩展源 | 抓到的关键词 |
|--------|--------------|
| build a ring farm | build a ring farm codes, build a ring farm wiki, build a ring farm, build a ring farm discord, build a ring farm mutations, build a ring farm roblox codes, build a ring farm seeds, build a ring farm roblox wiki, build a ring farm codes new, build a ring farm pets |
| build a ring farm codes | build a ring farm codes, build a ring farm codes new, build a ring farm codes roblox, build a ring farm codes 2026 |
| build a ring farm wiki | build a ring farm wiki |
| build a ring farm mutations | build a ring farm mutations |
| build a ring farm seeds | build a ring farm seeds |
| build a ring farm gear shop | 未返回自动补全词 |
| build a ring farm money farming | 未返回自动补全词 |
| build a ring farm weather events | 未返回自动补全词 |
| build a ring farm tier list | build a ring farm tier list |

## 三、候选词库

| # | 关键词 | 来源 | 深度 | 说明 |
|---|--------|------|------|------|
| 1 | build a ring farm | [GS] | depth=1 | 核心品牌词 |
| 2 | build a ring farm codes | [GS] | depth=1 | 最强需求词 |
| 3 | build a ring farm wiki | [GS] | depth=1 | 主站定位词 |
| 4 | build a ring farm discord | [GS] | depth=1 | 官方入口和社区意图 |
| 5 | build a ring farm mutations | [GS] | depth=1 | 中后期玩法意图 |
| 6 | build a ring farm roblox codes | [GS] | depth=1 | codes 变体 |
| 7 | build a ring farm seeds | [GS] | depth=1 | 资料库意图 |
| 8 | build a ring farm roblox wiki | [GS] | depth=1 | wiki 变体 |
| 9 | build a ring farm codes new | [GS] | depth=1 | 新代码时效意图 |
| 10 | build a ring farm pets | [GS] | depth=1 | 需核实是否游戏内真实系统 |
| 11 | build a ring farm codes roblox | [GS] | depth=2 | codes 变体 |
| 12 | build a ring farm codes 2026 | [GS] | depth=2 | 年份词 |
| 13 | build a ring farm gear shop | [AI-主题] | depth=1 | 站内已有页面，Suggest 未返回 |
| 14 | build a ring farm sprays | [AI-主题] | depth=1 | 站内已有页面 |
| 15 | build a ring farm fertilizer | [AI-主题] | depth=1 | 站内已有页面 |
| 16 | build a ring farm offline income | [AI-主题] | depth=1 | 首页与 llms.txt 主题 |
| 17 | build a ring farm farm layout | [AI-主题] | depth=1 | 站内已有页面 |
| 18 | build a ring farm tier list | [GS] | depth=1 | Suggest 返回 |
| 19 | build a ring farm weather events | [AI-主题] | depth=1 | 站内已有页面 |
| 20 | build a ring farm money farming | [AI-主题] | depth=1 | 站内已有页面 |
| 21 | build a ring farm beginner guide | [AI-主题] | depth=1 | 站内已有页面 |
| 22 | build a ring farm crops | [AI-主题] | depth=1 | 站内已有页面 |
| 23 | build a ring farm advanced crops | [AI-主题] | depth=1 | 站内已有页面 |
| 24 | build a ring farm updates | [AI-主题] | depth=1 | 时效页 |
| 25 | build a ring farm scripts | [AI-主题] | depth=1 | 安全搜索意图 |
| 26 | build a ring farm calculator | [竞品] | depth=1 | 竞品 buildaring.online 主打 calculator |
| 27 | build a ring farm best seeds | [竞品] | depth=1 | 竞品 online 与 net 覆盖 |
| 28 | build a ring farm seed index | [竞品] | depth=1 | AllThingsHow 结果出现 |
| 29 | build a ring farm plants | [竞品] | depth=1 | buildaringfarm.online 覆盖 |
| 30 | build a ring farm infinite farm | [竞品] | depth=1 | Roonby 结果出现 |

## 四、关键词分层矩阵

| 层级 | 关键词 |
|------|--------|
| 核心词 | build a ring farm, build a ring farm wiki |
| 中尾词 | build a ring farm codes, build a ring farm mutations, build a ring farm seeds, build a ring farm tier list, build a ring farm gear shop |
| 长尾词 | build a ring farm roblox codes, build a ring farm codes new, build a ring farm codes 2026, build a ring farm best seeds, build a ring farm seed index, build a ring farm weather events, build a ring farm offline income, build a ring farm money farming |
| 问题词 | how to redeem build a ring farm codes, what are build a ring farm mutations, what is the best seed in build a ring farm, how to make money in build a ring farm |

## 五、10 词 SERP 详细分析

| 关键词 | 搜索结果观察 | 竞争度估算 | 风险 |
|--------|--------------|------------|------|
| build a ring farm codes | Dexerto、Beebom、RoCodes、Pro Game Guides 等代码站集中出现 | 🔴 高 | 大站更新频率高，本站坚持验证口径会牺牲点击刺激 |
| build a ring farm wiki | 自站、buildaringfarm.wiki、Fandom、buildaringfarm.net 等 wiki 站出现 | 🟡 中 | 同名站多，差异化必须靠准确性和结构 |
| build a ring farm mutations | Reddit、wiki 站和竞品页出现 | 🟡 中 | 玩家需求强，但数据很容易未验证 |
| build a ring farm seeds | buildaringfarm.net、AllThingsHow、MrGuider 等深页出现 | 🔴 高 | 竞品开始做数据库和表格 |
| build a ring farm gear shop | buildaringfarm.wiki 已有专页 | 🟡 中 | 可以用 ROI 与来源状态切入 |
| build a ring farm weather events | 竞品 wiki 页面已有事件倍率内容 | 🟡 中 | 未验证 odds 容易造成假事实风险 |
| build a ring farm tier list | Suggest 有返回，相关搜索混入其他游戏 ring tier list | 🟢 低到中 | 需要标题明确带完整游戏名 |
| build a ring farm calculator | 竞品 buildaring.online 主打 calculator | 🟡 中 | 本站没有计算器，内容型页面不占优势 |
| build a ring farm seed index | AllThingsHow 与 buildaringfarm.net 覆盖 | 🔴 高 | 数据表深度要求高 |
| build a ring farm scripts | 结果可能混入 exploit 和脚本站 | 🟢 低 | 安全页可以截获高风险搜索，但转化不一定高 |

## 六、综合机会矩阵

| 关键词 | 来源 | 层级 | 竞争度 | 内容机会 | 推荐 |
|--------|------|------|--------|----------|------|
| build a ring farm scripts | [AI-主题] | 长尾词 | 🟢 低 | 用安全提醒截获脚本搜索，避免玩家下载风险内容 | 🥇 |
| build a ring farm tier list | [GS] | 中尾词 | 🟢 低到中 | Suggest 有信号，竞争页不稳定 | 🥈 |
| build a ring farm gear shop | [AI-主题] | 中尾词 | 🟡 中 | 竞品已有内容，但 ROI 角度可差异化 | 🥉 |
| build a ring farm mutations | [GS] | 中尾词 | 🟡 中 | 玩家需求强，需坚持 community reported 标签 | 优先维护 |
| build a ring farm codes | [GS] | 中尾词 | 🔴 高 | 代码站强，需更新频率和证据策略 | 防守 |

## 七、Top 3 关键词定方向

### Top 1：build a ring farm scripts

- 分层：长尾词
- 竞争度：低
- 机会描述：脚本类搜索通常混入 exploit、账号风险和下载风险。本站已有 `/scripts/` 页面，可以用安全替代路线承接这类搜索。
- 推荐动作：
  - 第一：把 `/scripts/` 标题改成更直接的搜索意图，如 `Build A Ring Farm Scripts Safety Guide`。
  - 第二：加入安全替代方案模块，例如 codes、money farming、upgrades、offline income。
  - 第三：增加 FAQ，覆盖 `Is Build A Ring Farm script safe?`、`Are Roblox scripts allowed?`。

### Top 2：build a ring farm tier list

- 分层：中尾词
- 竞争度：低到中
- 机会描述：Google Suggest 明确返回该词，但搜索结果容易混入其他游戏的 ring tier list。完整游戏名和结构化表格能提高匹配度。
- 推荐动作：
  - 第一：维护 `/tier-list/` 的 H1、Title、Description，确保完整关键词靠前。
  - 第二：把 tier list 拆成 effect tier、crop stage、source status 三个表。
  - 第三：用内部链接连接 mutations、weather events、sprays。

### Top 3：build a ring farm gear shop

- 分层：中尾词
- 竞争度：中
- 机会描述：竞品已经写 gear shop，但多数会直接给倍率或收益断言。本站可以用 ROI、用途、验证状态做更可信页面。
- 推荐动作：
  - 第一：强化 `/gear-shop/` 的 ROI 表，说明什么时候买、什么时候不买。
  - 第二：每个道具加 `Official / Community reported / Pending` 状态。
  - 第三：链接到 sprays、fertilizer、mutations、money farming。

## 八、外链策略建议

| Top 词 | 外链策略 | 具体动作 |
|--------|----------|----------|
| build a ring farm scripts | 安全资源外链 | 找 Roblox safety、parent guide、gaming safety 页面投稿或换链 |
| build a ring farm tier list | 游戏攻略目录 | 提交到 Roblox guide directory 或游戏 wiki 聚合页 |
| build a ring farm gear shop | 数据表引用 | 做可引用的 gear shop ROI 表，方便小站引用 |

## 九、数据说明与后续建议

### 本次已验证

- `https://buildaringfarm.org/` 301 到 `https://www.buildaringfarm.org/`
- `https://www.buildaringfarm.org/` 返回 200
- `https://www.buildaringfarm.org/sitemap.xml` 返回 200，含 18 个 URL
- `robots.txt` 与 `llms.txt` 可访问
- Google Suggest 返回 codes、wiki、discord、mutations、roblox codes、seeds、roblox wiki、codes new、pets、tier list 等词
- 搜索快照显示 codes 词竞争最强，出现 Dexerto、Beebom、RoCodes、Pro Game Guides 等站

### 下一步

1. 用真正浏览器环境复跑 PASF、Related Searches、People Also Ask，补足 skill 要求的来源标签。
2. 优先复查 `/scripts/`、`/tier-list/`、`/gear-shop/` 三个页面的 TDH 与内部链接。
3. 不建议直接追 `build a ring farm codes` 的激进标题，除非能做到每日验证，否则容易被大站压制。

## 最终裁决

即使经过讨论，我认为当前站点在以下方面依然错误：

- 过度依赖内容覆盖数量，低估了 codes 类 SERP 的更新速度和大站竞争。
- 已经有 `/scripts/` 安全页，但没有把它当成低竞争风险搜索入口来重点优化。
- `https://buildaringfarm.org` 与 `https://www.buildaringfarm.org` 虽然跳转正常，但项目文档里同时出现两种写法，后续自动化报告必须统一用最终 canonical 域名。
