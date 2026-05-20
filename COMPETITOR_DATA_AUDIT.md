# Build A Ring Farm 对标站数据审计

> 用途：记录对标站和 Google 交叉来源出现过的内容、数据和页面机会，但不把非官方数据直接当成官方事实。  
> 审计时间：2026-05-20  
> 审计对象：
>
> ```text
> https://www.buildaringfarm.online/
> https://www.buildaringfarm.wiki/
> https://buildaringfarm.net/  抓取失败，未纳入有效证据
> Google cross-source checks: PCGamesN, Game.Guide, Beebom, Pro Game Guides
> ```

---

## 1. 总结

对标站和 Google 搜索结果交叉确认：这个游戏确实存在一批被多站反复引用的数据方向：

```text
Active code claims
Spray item names
Spray prices
Mutation multipliers
Weather event chances
Strong Fertilizer
Offline income
Farm layout
Controller / PS4 / PS5 controls
Wiki / Trello / Discord guide
Crop values / rarities / plants
```

但这些来源仍然不是官方 Roblox 页面或开发者公告。因此当前站点可以把它们从“单一对标站线索”升级为：

```text
Cross-source community reported
```

不能直接升级为：

```text
Verified official
Verified in-game
```

---

## 2. Google 交叉来源结果

### 2.1 Codes 交叉结果

多个第三方站确认过以下 code claims：

```text
100KVISITS
2KLIKES
UPDATE1
UPDATE2
THANKYOU
BARF:3
```

交叉情况：

```text
PCGamesN: 100KVISITS / UPDATE1 / 2KLIKES
Pro Game Guides: 100KVISITS / UPDATE1 / 2KLIKES
Beebom: UPDATE2 / THANKYOU / BARF:3 / 100KVISITS / 2KLIKES
Game.Guide: UPDATE2 / THANKYOU / BARF:3 / 100KVISITS / 2KLIKES / UPDATE1
buildaringfarm.wiki: 100KVISITS / 2KLIKES / UPDATE1
```

判断：

```text
这些 codes 已经不是单站孤证，可以作为 Cross-source community reported。
但仍需实机 redeem UI 测试后才能改成 Verified in-game。
```

---

### 2.2 Mutations / sprays 交叉结果

Pro Game Guides 明确列出 mutations、multipliers、event chances 和 spray shop prices。对标站也出现同组数据。

交叉数据：

```text
Wet → 1.5x → Rain 8% → Wet Spray $10M
Frozen → 1.75x → Blizzard 4% → Frozen Spray $750M
Void → 2.25x → Black Hole 3% → Void Spray $1B
Radioactive → 3x → Nuclear 2% → Radioactive Spray $10B
Rainbow → 5x → Galaxy 1% → Rainbow Spray $1T
```

判断：

```text
mutation multiplier + spray price + event odds 可以作为 Cross-source community reported。
仍不能写成 official，因为没有官方来源或实机截图。
```

---

### 2.3 Fertilizer 交叉结果

交叉出现：

```text
UPDATE1 → 3 Strong Fertilizers
Strong Fertilizer / Strong Fertilizers as reward or boost item
```

判断：

```text
Strong Fertilizer 存在概率较高，但仍应保持 Cross-source community reported，直到实机验证。
```

---

### 2.4 Offline income 交叉结果

多个页面都提到 offline earnings / offline income，但具体 rate、offline mutation、offline event、offline spray behavior 没有强交叉证据。

判断：

```text
offline earnings 作为方向可以保留 Verified direction。
exact offline rate 和 rare effect offline behavior 仍 Needs verification。
```

---

## 3. 可用于验证台账的数据

### 3.1 Code claims

```text
UPDATE2 → 1 Tropical Seed Pack
THANKYOU → 1 Autumn Spray
BARF:3 → 1 Acid Spray
100KVISITS → 5-minute Time Skip 或 cash / $1,072 存在来源差异
2KLIKES → 1 Tropical Seed Pack
UPDATE1 → 3 Strong Fertilizers
```

注意：

```text
100KVISITS reward 存在来源冲突：部分来源写 5-minute Time Skip，PCGamesN 写 $1,072。
```

处理方式：

```text
可以作为 Cross-source community reported
不能写成 verified active codes
需要实机 code redeem UI 验证
```

---

### 3.2 Spray claims

```text
Acid Spray → $1M → removes current mutation → no direct multiplier
Wet Spray → $10M → applies Wet mutation → 1.5x
Frozen Spray → $750M → applies Frozen mutation → 1.75x
Void Spray → $1B → applies Void mutation → 2.25x
Radioactive Spray → $10B → applies Radioactive mutation → 3x
Rainbow Spray → $1T → applies Rainbow mutation → 5x
```

处理方式：

```text
可以作为 Cross-source community reported
不能写成官方 gear shop price
不能写成 verified in-game multiplier
需要 gear shop UI 截图 + 使用前后作物值截图
```

---

### 3.3 Mutation / rare effect claims

```text
S Tier → Rainbow → 5x
A Tier → Radioactive → 3x
B Tier → Void → 2.25x
C Tier → Frozen → 1.75x
D Tier → Wet → 1.5x
```

处理方式：

```text
当前站点可以继续写 community reported tier
如果页面正文需要更强表达，建议写 cross-source community reported，不写 official
```

---

### 3.4 Weather event claims

```text
Rain Event → Wet → 8% → 1.5x
Blizzard Event → Frozen → 4% → 1.75x
Black Hole Event → Void → 3% → 2.25x
Nuclear Event → Radioactive → 2% → 3x
Galaxy Event → Rainbow → 1% → 5x
Offline Farming → no event mutation gain while offline
```

处理方式：

```text
event names 可继续作为 community reported
chance / odds 可标 Cross-source community reported，但不能写 official probability
offline event behavior 仍需实机验证
```

---

## 4. 页面机会判断

### 可以后续考虑，但不应马上做

```text
/crop-values/
/rarities/
/plants/
```

原因：对标站大量覆盖 plants、rarities、crop values，但没有官方可核验数据时，容易变成假表格页。

安全做法：

```text
Community reported crop values and rarity guide
不要写官方完整 crop value table
不要写未验证 exact price
```

---

### 不建议单独做，除非写成核验页

```text
/discord/
/trello/
```

原因：对标站写了 Wiki Trello and Discord Guide，并声称 Discord invite 是 gamecreates，但 Trello / official wiki 未列出。

安全做法：

```text
/wiki-trello-discord/
```

定位为：

```text
official link verification page
```

而不是：

```text
Official Trello page
```

---

### 低优先级长尾

```text
/controller-settings/
/controls/
/ps5-controls/
/ps4-controls/
```

原因：对标站覆盖，但和当前站点主题集群关系弱。可做但不应进入 Header 或首页。

---

## 5. 对当前站点的建议

### 可以调整的表达

把部分页面中的：

```text
Community reported
```

在更具体的数据表旁升级为：

```text
Cross-source community reported
```

但不能写：

```text
Official
Verified
Confirmed by developer
```

### 仍不建议直接改成事实的原因

```text
1. 这些站不是官方来源
2. Roblox 小游戏数据更新快
3. 100KVISITS reward 已出现来源冲突
4. 多站重复可能来自互相引用或同一个社区来源
```

### 下一步验证优先级

```text
1. Code redeem UI 是否存在
2. UPDATE1 / UPDATE2 / THANKYOU / BARF:3 / 100KVISITS / 2KLIKES 是否有效
3. 100KVISITS reward 到底是 5-minute Time Skip 还是 $1,072
4. Gear Shop 是否有 Acid / Wet / Frozen / Void / Radioactive / Rainbow Spray
5. Gear Shop prices 是否与交叉来源一致
6. Spray 使用前后作物 value 是否对应 1.5x / 1.75x / 2.25x / 3x / 5x
7. Weather events 是否存在以及是否对应 mutation
8. Offline 是否不会触发 event mutation
```

---

## 6. 最终判断

Verifiable:

```text
Google 交叉结果找到 PCGamesN、Game.Guide、Beebom、Pro Game Guides 等独立页面。
Codes、sprays、mutations、weather events、fertilizer 不是单一对标站孤证。
100KVISITS reward 存在来源冲突。
```

Judgment:

```text
这些数据可以从普通 Community reported 升级为 Cross-source community reported，但仍不能升级为 official 或 verified in-game。
```

Confidence ≠ Correctness:

```text
多站一致提高可信度，但不等于事实。来源冲突说明仍必须保留验证边界。
```
