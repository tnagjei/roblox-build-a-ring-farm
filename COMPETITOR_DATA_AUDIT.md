# Build A Ring Farm 对标站数据审计

> 用途：记录对标站出现过的内容、数据和页面机会，但不把对标站数据当成官方事实。  
> 审计时间：2026-05-20  
> 审计对象：
>
> ```text
> https://www.buildaringfarm.online/
> https://www.buildaringfarm.wiki/
> https://buildaringfarm.net/  抓取失败，未纳入有效证据
> ```

---

## 1. 总结

对标站确实覆盖了以下数据和内容方向：

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

但这些仍不能当成官方事实。当前站点应继续保持：

```text
Community reported
Needs verification
```

除非拿到官方页面、开发者公告、Discord 官方公告截图或可复现实机截图。

---

## 2. 可用于验证台账的数据

### 2.1 Code claims

对标站出现的 code claims：

```text
UPDATE2 → 1 Tropical Seed Pack
THANKYOU → 1 Autumn Spray
BARF:3 → 1 Acid Spray
100KVISITS → 5-minute Time Skip
2KLIKES → 1 Tropical Seed Pack
UPDATE1 → 3 Strong Fertilizers
```

处理方式：

```text
不能写成 verified active codes
只能进入 DATA_VERIFICATION.md 的 competitor/community claim
需要实机 code redeem UI 验证
```

---

### 2.2 Spray claims

对标站出现的 spray 数据：

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
可以作为 competitor/community claim 记录
不能写成官方 gear shop price
不能写成 verified in-game multiplier
需要 gear shop UI 截图 + 使用前后作物值截图
```

---

### 2.3 Mutation / rare effect claims

对标站出现的 mutation tier：

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
不能写 official tier list
不能写 verified multiplier
```

---

### 2.4 Weather event claims

对标站出现的 event odds / effect claims：

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
chance / odds 必须保持 Needs verification
offline event behavior 仍需实机验证
```

---

### 2.5 Fertilizer claims

对标站出现的 fertilizer 数据：

```text
Strong Fertilizer
UPDATE1 → 3 Strong Fertilizers
Used as crop boost / growth booster
Best used on higher-value crops
No direct mutation multiplier
```

处理方式：

```text
可以作为 community reported
不能写官方价格、官方 growth multiplier、官方 cooldown
需要实机截图或 code redeem proof
```

---

### 2.6 Offline income claims

对标站共同强调：

```text
offline income / offline earnings exists
active mutation timing requires online play
offline earnings are support income
```

处理方式：

```text
offline earnings 方向可保持 Verified direction
exact offline rate 仍 Needs verification
offline mutation / event / spray 行为仍 Needs verification
```

---

## 3. 页面机会判断

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

## 4. 对当前站点的建议

### 不改页面正文的原因

当前对标站数据仍然只是 competitor/community claim。直接写进页面正文会提高假数据风险。

### 应改的是台账

这些数据应进入：

```text
DATA_VERIFICATION.md
```

作为待验证目标，而不是进入页面正文作为事实。

### 下一步验证优先级

```text
1. Code redeem UI 是否存在
2. UPDATE1 / UPDATE2 / THANKYOU / BARF:3 / 100KVISITS / 2KLIKES 是否有效
3. Gear Shop 是否有 Acid / Wet / Frozen / Void / Radioactive / Rainbow Spray
4. Gear Shop prices 是否与对标站一致
5. Spray 使用前后作物值是否对应 1.5x / 1.75x / 2.25x / 3x / 5x
6. Weather events 是否存在以及是否对应 mutation
7. Offline 是否不会触发 event mutation
```

---

## 5. 最终判断

Verifiable:

```text
两个可抓取对标站都覆盖了 codes、sprays、mutations、fertilizer、offline income、farm layout 等主题。
对标站中出现了具体 spray prices、mutation multipliers、weather event chances、code rewards。
```

Judgment:

```text
这些数据对站点有参考价值，但目前只能作为待验证线索，不应升级为官方事实。
```

Confidence ≠ Correctness:

```text
对标站互相重复不等于真实。只有官方来源或实机可复现测试，才能把页面状态从 Community reported / Needs verification 升级为 Verified。
```
