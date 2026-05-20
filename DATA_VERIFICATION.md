# Build A Ring Farm 数据验证台账

> 用途：把站内所有 `Community reported`、`Needs verification`、`Pending` 数据集中管理。  
> 项目：`tnagjei/roblox-build-a-ring-farm`  
> 状态时间：2026-05-20

---

## 1. 使用规则

任何未被官方 Roblox 页面、开发者公告、可复现实机测试、带日期截图验证的数据，都不能写成官方事实。

统一状态：

```text
Verified official      官方页面或开发者来源确认
Verified in-game      可复现实机测试确认
Community reported    玩家、对标站、社区口径，尚未复核
Needs verification    需要截图或实机测试
Rejected              已证伪或不应发布
```

统一字段：

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

## 2. Rare effect / mutation claims

| Claim | Used on pages | Current status | Source type | Need screenshot | Need in-game test | Last checked | Next action |
|---|---|---:|---|---:|---:|---|---|
| Rainbow is the strongest reported effect | `/tier-list/`, `/advanced-crops/`, `/sprays/`, `/mutations/` | Community reported | Competitor/community pattern | Yes | Yes | 2026-05-20 | Capture in-game before/after value test |
| Rainbow 5x value boost | `/advanced-crops/`, `/tier-list/` | Needs verification | Competitor/community claim | Yes | Yes | 2026-05-20 | Do not publish as official until tested |
| Radioactive 3x value boost | `/advanced-crops/`, `/tier-list/` | Needs verification | Competitor/community claim | Yes | Yes | 2026-05-20 | Do not publish as official until tested |
| Void 2.25x value boost | `/advanced-crops/`, `/tier-list/` | Needs verification | Competitor/community claim | Yes | Yes | 2026-05-20 | Do not publish as official until tested |
| Frozen 1.75x value boost | `/advanced-crops/`, `/tier-list/` | Needs verification | Competitor/community claim | Yes | Yes | 2026-05-20 | Do not publish as official until tested |
| Wet 1.5x value boost | `/advanced-crops/`, `/tier-list/` | Needs verification | Competitor/community claim | Yes | Yes | 2026-05-20 | Do not publish as official until tested |
| Mutation stacking works | `/mutations/`, `/advanced-crops/`, `/tier-list/` | Needs verification | Community claim risk | Yes | Yes | 2026-05-20 | Test one variable at a time |
| Mutations work offline | `/mutations/`, `/offline-income/`, `/advanced-crops/` | Needs verification | Unknown | Yes | Yes | 2026-05-20 | Compare before logout and after login |

---

## 3. Spray claims

| Claim | Used on pages | Current status | Source type | Need screenshot | Need in-game test | Last checked | Next action |
|---|---|---:|---|---:|---:|---|---|
| Wet Spray exists | `/sprays/`, `/gear-shop/`, `/tier-list/` | Community reported | Competitor/community pattern | Yes | Yes | 2026-05-20 | Verify in gear shop UI |
| Frozen Spray exists | `/sprays/`, `/gear-shop/`, `/tier-list/` | Community reported | Competitor/community pattern | Yes | Yes | 2026-05-20 | Verify in gear shop UI |
| Void Spray exists | `/sprays/`, `/gear-shop/`, `/tier-list/` | Community reported | Competitor/community pattern | Yes | Yes | 2026-05-20 | Verify in gear shop UI |
| Radioactive Spray exists | `/sprays/`, `/gear-shop/`, `/tier-list/` | Community reported | Competitor/community pattern | Yes | Yes | 2026-05-20 | Verify in gear shop UI |
| Rainbow Spray exists | `/sprays/`, `/gear-shop/`, `/tier-list/` | Community reported | Competitor/community pattern | Yes | Yes | 2026-05-20 | Verify in gear shop UI |
| Acid Spray exists | `/sprays/`, `/gear-shop/` | Community reported | Competitor/community pattern | Yes | Yes | 2026-05-20 | Verify in gear shop UI |
| Spray prices | `/sprays/`, `/gear-shop/` | Needs verification | Unknown | Yes | Yes | 2026-05-20 | Do not publish exact prices yet |
| Spray effects stack with weather events | `/sprays/`, `/weather-events/`, `/mutations/` | Needs verification | Community claim risk | Yes | Yes | 2026-05-20 | Test event + spray separately |
| Sprays work offline | `/sprays/`, `/offline-income/` | Needs verification | Unknown | Yes | Yes | 2026-05-20 | Test logout state after spray use |

---

## 4. Weather event claims

| Claim | Used on pages | Current status | Source type | Need screenshot | Need in-game test | Last checked | Next action |
|---|---|---:|---|---:|---:|---|---|
| Rain Event exists | `/weather-events/`, `/sprays/`, `/mutations/` | Community reported | Competitor/community pattern | Yes | Yes | 2026-05-20 | Capture event UI or in-game effect |
| Blizzard Event exists | `/weather-events/`, `/sprays/`, `/mutations/` | Community reported | Competitor/community pattern | Yes | Yes | 2026-05-20 | Capture event UI or in-game effect |
| Black Hole Event exists | `/weather-events/`, `/sprays/`, `/mutations/` | Community reported | Competitor/community pattern | Yes | Yes | 2026-05-20 | Capture event UI or in-game effect |
| Nuclear Event exists | `/weather-events/`, `/sprays/`, `/mutations/` | Community reported | Competitor/community pattern | Yes | Yes | 2026-05-20 | Capture event UI or in-game effect |
| Galaxy Event exists | `/weather-events/`, `/sprays/`, `/mutations/` | Community reported | Competitor/community pattern | Yes | Yes | 2026-05-20 | Capture event UI or in-game effect |
| Rain 8% chance | `/weather-events/` | Needs verification | Competitor/community claim | Yes | Yes | 2026-05-20 | Do not publish as official probability |
| Blizzard 4% chance | `/weather-events/` | Needs verification | Competitor/community claim | Yes | Yes | 2026-05-20 | Do not publish as official probability |
| Black Hole 3% chance | `/weather-events/` | Needs verification | Competitor/community claim | Yes | Yes | 2026-05-20 | Do not publish as official probability |
| Nuclear 2% chance | `/weather-events/` | Needs verification | Competitor/community claim | Yes | Yes | 2026-05-20 | Do not publish as official probability |
| Galaxy 1% chance | `/weather-events/` | Needs verification | Competitor/community claim | Yes | Yes | 2026-05-20 | Do not publish as official probability |
| Weather events happen offline | `/weather-events/`, `/offline-income/` | Needs verification | Unknown | Yes | Yes | 2026-05-20 | Test logout / login state |

---

## 5. Fertilizer claims

| Claim | Used on pages | Current status | Source type | Need screenshot | Need in-game test | Last checked | Next action |
|---|---|---:|---|---:|---:|---|---|
| Strong Fertilizer exists | `/fertilizer/`, `/gear-shop/`, `/money-farming/` | Community reported | Competitor/community pattern | Yes | Yes | 2026-05-20 | Verify item in-game |
| Strong Fertilizer price | `/fertilizer/`, `/gear-shop/` | Needs verification | Unknown | Yes | Yes | 2026-05-20 | Do not publish exact price |
| Strong Fertilizer growth effect | `/fertilizer/`, `/crops/` | Needs verification | Unknown | Yes | Yes | 2026-05-20 | Time before/after crop growth |
| Fertilizer cooldown | `/fertilizer/` | Needs verification | Unknown | Yes | Yes | 2026-05-20 | Test repeated use |
| Fertilizer works offline | `/fertilizer/`, `/offline-income/` | Needs verification | Unknown | Yes | Yes | 2026-05-20 | Test logout state after use |
| Code reward fertilizer | `/fertilizer/`, `/codes/` | Community reported | Competitor/community pattern | Yes | Yes | 2026-05-20 | Do not add as active code reward until code verified |

---

## 6. Offline income claims

| Claim | Used on pages | Current status | Source type | Need screenshot | Need in-game test | Last checked | Next action |
|---|---|---:|---|---:|---:|---|---|
| Game supports offline earnings | `/offline-income/`, `/money-farming/`, `/farm-layout/` | Verified direction | Official Roblox page direction | No | Yes | 2026-05-20 | Keep wording broad; avoid exact rates |
| Exact offline cash rate | `/offline-income/`, `/money-farming/` | Needs verification | Unknown | Yes | Yes | 2026-05-20 | Do not publish cash-per-second or exact formulas |
| Offline rare effects trigger | `/offline-income/`, `/mutations/`, `/advanced-crops/` | Needs verification | Unknown | Yes | Yes | 2026-05-20 | Test before and after login |
| Offline sprays persist | `/offline-income/`, `/sprays/` | Needs verification | Unknown | Yes | Yes | 2026-05-20 | Test spray state before logout |

---

## 7. Farm layout claims

| Claim | Used on pages | Current status | Source type | Need screenshot | Need in-game test | Last checked | Next action |
|---|---|---:|---|---:|---:|---|---|
| Official best layout exists | `/farm-layout/` | Rejected | No verified source | No | No | 2026-05-20 | Do not claim official best layout |
| Maximum profit layout | `/farm-layout/`, `/money-farming/` | Needs verification | Competitor/community claim risk | Yes | Yes | 2026-05-20 | Do not publish without screenshots and repeatable result |
| Layout affects offline income rate | `/farm-layout/`, `/offline-income/` | Needs verification | Reasonable but unverified | Yes | Yes | 2026-05-20 | Test before/after with stable farm state |
| Early / mid / late layout checklist | `/farm-layout/` | Strategy | Editorial decision | No | Optional | 2026-05-20 | Keep as checklist, not official formula |

---

## 8. Codes claims

| Claim | Used on pages | Current status | Source type | Need screenshot | Need in-game test | Last checked | Next action |
|---|---|---:|---|---:|---:|---|---|
| 0 verified official codes | `/codes/`, `/` | Current site status | Site verification state | No | Yes | 2026-05-20 | Recheck official sources and in-game UI |
| Active code strings from competitor sites | `/codes/` | Rejected until verified | Competitor/community claim | Yes | Yes | 2026-05-20 | Do not publish as active without proof |
| Redeem system exists | `/codes/` | Unknown | Unknown | Yes | Yes | 2026-05-20 | Confirm in-game UI before writing redemption steps |

---

## 9. Update workflow

When any claim is verified:

```text
1. Save source URL or screenshot reference
2. Record test date
3. Record game update state if visible
4. Update Current status
5. Update affected page text
6. Update public/data/build-a-ring-farm.json if TDK / FAQ / summary changes
7. Update PROJECT_CONTEXT.md if the claim changes site policy or page boundary
```

When any claim is rejected:

```text
1. Mark status as Rejected
2. Remove or rewrite affected page language
3. Do not leave outdated community claims in FAQ
4. Add note explaining why it was rejected
```
