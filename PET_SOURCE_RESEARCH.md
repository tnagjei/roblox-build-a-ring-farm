# Build A Ring Farm Pets Tier List Source Research

研究日期：2026-06-03

目标页面：https://www.buildaringfarm.org/tier-list/

研究对象：Pets Tier List，宠物排行表。Pet 指宠物，Tier List 指排行表，SEO 指搜索引擎优化，GSC 指 Google Search Console，谷歌搜索控制台。

Counter: 当前不应该上线“真实 S / A / B / C 宠物榜单”。可验证证据不足，且公开攻略站之间已经出现数值冲突。

🚨 证据压力测试：

1. Roblox 官方游戏页和 Roblox API 只确认游戏、开发者、基础玩法、更新时间、玩家量，没有公开宠物名称、稀有度、技能、倍率、价格。
2. Pro Game Guides、Sportskeeda 截图、AllThings.How 的宠物分组高度相似，能支持“社区反馈榜单”，但不能当成官方或实机核验源。
3. BO3 把 Starfall Griffin 放进宠物表，但和 Pro Game Guides、AllThings.How 对 Hydra、Crocodile、Mammoth、Velociraptor 等倍率存在冲突。
4. buildaringfarm.wiki 页面把一个 Roblox group 链接写成 Gamecreates，但 Roblox API 查询显示该 group id 33167294 不是官方 Gamecreates；这说明竞品站的“官方链接”也可能错。
5. YouTube 标题和攻略页可以证明搜索热度和线索存在，但不能证明宠物技能数值正确。

声明分类：

Verifiable，可验证：Roblox 游戏 universeId、rootPlaceId、开发者 Gamecreates、官方游戏更新时间、官方媒体图不包含宠物 UI、公开页面 URL、攻略站原文主张。

Judgment，主观判断：能否安全上线、可信度分级、页面应采用“证据状态型 Pets Tier List”。

Confidence ≠ Correctness，盲目自信风险：攻略站写“best”“strongest”“official”“verified”并不等于官方或实机已验证。

## Research Method

1. 检查 Roblox 官方游戏 API、开发者 group API、游戏媒体 API、投票 API。
2. 检查官方游戏页、候选 Discord、PGG 官方链接说明、Destructoid 官方 Discord 说明。
3. 检查 YouTube oEmbed，确认公开视频标题和作者，但未获得可核验画面帧。
4. 检查 Reddit 结果，发现相关帖子只是外链转发且无有效评论证据。
5. 检查 TikTok / Shorts 搜索结果，未找到可访问且可核验的宠物数据。
6. 检查对标站 sitemap 和页面结构。
7. 汇总攻略站中反复出现的宠物名，但不把它们标成 official 或 verified。
8. 追加核验用户提供的 Sportskeeda 截图。截图可确认页面结构和分组，但小字倍率无法全部精确读取。

## Competitor Structure Data

| URL | Title | H1 | Pets Page Found | Page Modules | Table Fields | FAQ | Internal Links | Unverified Data | Can Learn | Cannot Learn |
|---|---|---|---|---|---|---|---|---|---|---|
| https://buildaring.online/ | Build A Ring Farm guide hub | Build A Ring Farm | No dedicated pets page found in sitemap | Home, Seeds, Mutations, Events, Rings, Calculator, Codes, Progression, FAQ, Farm Guide, Tier List | General tier-list framework, no pets table found | Yes, tier-list page has FAQ about unofficial ranking | Seeds, calculator, rings, mutations, progression, FAQ, wiki index | Mentions Big Lion loop on guide page without direct official proof | Learn cautious wording: framework by role, not stale rank chart | Do not copy pet claims without screenshot or official source |
| https://buildaring.online/build-a-ring-tier-list | Build A Ring Tier List by Seeds/Rarity | Build A Ring Farm Tier List Framework | No | What you can do, rarity bands, personal ranking method, FAQ, related tools | No pet table. Uses rarity and role framework | Yes | Seeds Database, Profit Calculator, Farm Efficiency, Rings, Mutations, Progression | Crop and tier claims still need checking | Good model for a “framework” page instead of fake exact ranking | Do not use it as pet data source |
| https://buildaringfarm.net/ | Build A Ring Farm Wiki and Tools | Home/wiki hub | Yes, Update 3 pet guide in sitemap | Seeds, Mutations, Events, Rings, Codes, Progression, Calculator, Guides, Update pages | Update 3 pet guide lists pet names and broad effects, not a full source-backed database | Limited | Related guide links and Roblox play link | Calls Update 3 official but source is fan site. Exact pet claims lack in-game proof | Learn update-focused page angle and pet-system overview | Do not copy “officially introduced” wording as fact |
| https://buildaringfarm.net/update/build-a-ring-farm-update-3-pet-guide/ | NEW PET UPDATE IN BUILD A RING FARM!! Roblox | NEW PET UPDATE IN BUILD A RING FARM!! Roblox | Yes | Pet system, Egg Merchant, pet slots, active limits, best pets, leveling, Plant Rush, Cosmic Spray | Names, bonus type, utility role, no full stat table | No dedicated FAQ found | Home, Guides, Events, Roblox play link | Capybara, Golden Retriever, Gorilla, Crocodile claims are community reported | Learn structure: update context before pet names | Do not treat listed abilities as verified |
| https://www.buildaringfarm.wiki/ | Build A Ring Farm Wiki, Codes, Crops and Mutations | Build A Ring Farm Wiki | No dedicated pets page found in sitemap | Codes, Guide, Farming, Seeds, Mutations, Upgrades, Controls, FAQ | No pets table found | Yes | Codes, guide, farming, seeds, mutations, upgrades, controls, Roblox play | Several values and “official links” need checking; group id mismatch found | Learn navigation breadth and FAQ placement | Do not reuse official-link claims without Roblox API check |
| https://buildaringfarm.io/pets/ | Build A Ring Farm Pets Guide, Bonuses, Value and Routes | Build A Ring Farm Pets Guide | Yes | Cash multiplier pets, growth speed pets, token route pets, event or rare pets, pet value test | No exact pet names or exact stats; categories only | No | Calculator, plant tokens | Keeps exact values pending | Learn safe evidence-state wording and test method | Do not expect it to fill missing pet names |
| https://buildaringfarm.io/starfall-griffin/ | Build A Ring Farm Starfall Griffin Guide | Build A Ring Farm Starfall Griffin Guide | Starfall entity page | Verification status, if it is a pet, if event target, if token change | Entity status only | No | Update tracker, pets guide, calculator | Starfall Griffin exact values pending | Learn how to capture entity search demand without overclaiming | Do not turn entity into confirmed pet without proof |
| https://buildaringfarm.app/pets/best-pets/ | Best Build A Ring Farm Pets | Best Build A Ring Farm Pets | Yes | Direct answer, data status, reported S-Tier, reported A-Tier, video module, ranking standard, related pages | Does not expose exact stat table in extracted content; emphasizes source labels | No visible FAQ in extracted content | Seeds, plants, pets, tier list, best seeds, mutations, rings, guides, codes, updates | Uses third-party reported values and says not official or site-tested | Learn UI structure: direct answer, source note, video module, related internal links | Do not copy its vague ranking without own evidence table |
| https://www.sportskeeda.com/roblox-news/build-ring-farm-pet-tier-list | Build a Ring Farm Pet Tier List (June 2026) | Build a Ring Farm Pet Tier List (June 2026) | Yes, confirmed by user screenshot | Top video embed, intro, ranking all pets, S/A/B/C/D sections, screenshots, pet tables, FAQ | Pet, rarity, boost/effect style fields visible; exact small text not fully readable from screenshot | Yes, visible FAQ section | Related Roblox/news blocks and ads | Screenshot supports structure and repeated community ranking, not exact values | Learn page richness: video at top, section screenshots, FAQ | Do not cite exact stat values from screenshot unless readable or backed by PGG |

## 表 1：宠物证据表

Confidence 说明：high = 高可信，medium = 中可信，low = 低可信。Status 说明：official = 官方，in-game checked = 实机核验，community reported = 社区反馈，pending = 待确认，needs verification = 需要验证。

| Pet / Claim | Source URL | Source Type | Evidence | Confidence | Status | Can Use On Page | Notes |
|---|---|---|---|---|---|---|---|
| Official game identity only | https://games.roblox.com/v1/games?universeIds=10039338037 | Roblox API, 官方接口 | Confirms universeId 10039338037, rootPlaceId 107646426076756, developer Gamecreates, updated 2026-06-02. No pet names or stats returned. | high | official | Yes | Can state official game identity, not pet data. |
| Official developer group | https://groups.roblox.com/v1/groups/989438225 | Roblox API, 官方接口 | Confirms Gamecreates group id 989438225 with verified badge. No pet data returned. | high | official | Yes | Use only to identify developer. |
| Official media screenshots | https://games.roblox.com/v2/games/10039338037/media | Roblox API, 官方接口 | Three official media images returned. Visual inspection showed farm/crops only, no pets UI or pet table. | high | official | Yes | Useful as negative evidence: official media did not verify pets. |
| Social links unavailable without auth | https://games.roblox.com/v1/games/10039338037/social-links/list | Roblox API, 官方接口 | API returned authentication-token error, so official Discord link could not be confirmed through this endpoint. | high | pending | Yes | Explain that Discord identity needs manual official-link check. |
| Official wiki / Discord claim | https://progameguides.com/roblox/build-a-ring-farm-wiki-trello-and-discord/ | Guide site | PGG says devs shared an official wiki and Discord. This is a secondary claim, not direct Roblox proof. | medium | community reported | Use carefully | Can use as a source-discovery lead only. |
| No official pets page on buildaring.xyz | https://buildaring.xyz/sitemap-index.xml | Candidate official/wiki sitemap | Sitemap lists home, seeds, mutations, events, rings, codes, progression, FAQ, calculator. No pets page found. | medium | pending | Yes | Good reason to avoid official pet claims. |
| Pets system exists, Update 3 report | https://buildaringfarm.net/update/build-a-ring-farm-update-3-pet-guide/ | Fan guide | Reports Update 3 pet system, Egg Merchant, Common/Rare/Epic eggs, pet slots, active limits, pet leveling, Plant Rush rewards. | medium | community reported | Yes with label | Does not prove exact pet stats. |
| Egg Shop and basic Common Egg price | https://progameguides.com/roblox/build-a-ring-farm-pets-tier-list-roblox/ | Guide with screenshots | Reports Eggs shop on right side of map and basic Common Egg around $25M. | low | needs verification | Only with pending label | Needs in-game screenshot or video frame before exact price is used. |
| Sportskeeda pet tier list structure | https://www.sportskeeda.com/roblox-news/build-ring-farm-pet-tier-list | Guide site, user-provided screenshot | Screenshot confirms article title, video embed, S/A/B/C/D sections, pet tables, screenshots, and FAQ. | medium | community reported | Yes with label | Direct crawl blocked by AWS WAF, but screenshot is enough to confirm structure and broad ranking page pattern. |
| Sportskeeda repeated top group | https://www.sportskeeda.com/roblox-news/build-ring-farm-pet-tier-list | Guide site, user-provided screenshot | Screenshot visibly shows S-tier section and table. It appears to follow the same top group pattern as PGG: T-Rex, Kitsune, Hydra, Velociraptor. | medium | community reported | Yes with label | Use for group support only; do not extract unreadable small stat text. |
| T-Rex | https://progameguides.com/roblox/build-a-ring-farm-pets-tier-list-roblox/ | Guide site | Reports Secret rarity, 12x to 15.5x earnings boost, mutation upgrade every 300s. | medium | community reported | Yes, name only with label | Exact value pending because no official or in-game proof. |
| T-Rex cross-source | https://allthings.how/best-pets-in-build-a-ring-farm-ranked-roblox/ | Guide site | Repeats T-Rex as strongest, 12x to 15.5x, guaranteed mutation upgrade every 300s. | low | community reported | Support only | Similar structure to PGG, may not be independent. |
| T-Rex conflicting value | https://bo3.gg/games/articles/build-a-ring-farm-pet-tier-list | Guide site | Reports T-Rex x12 and mutation enhancement every 300s. | low | pending | Use as conflict evidence | Conflicts with PGG range. |
| Kitsune | https://progameguides.com/roblox/build-a-ring-farm-pets-tier-list-roblox/ | Guide site | Reports Prismatic rarity, 6x earnings boost, 15% mutation upgrade chance every 5m. | medium | community reported | Yes with label | Exact chance pending. |
| Kitsune conflicting chance | https://bo3.gg/games/articles/build-a-ring-farm-pet-tier-list | Guide site | Reports Kitsune x6 and 16% mutation improvement chance every five minutes. | low | pending | Use as conflict evidence | Conflicts with PGG 15%. |
| Hydra | https://progameguides.com/roblox/build-a-ring-farm-pets-tier-list-roblox/ | Guide site | Reports Secret rarity, 5x earnings boost, 15% mutation upgrade chance every 10m. | medium | community reported | Yes with label | Exact value pending. |
| Hydra conflicting value | https://bo3.gg/games/articles/build-a-ring-farm-pet-tier-list | Guide site | Reports Hydra x8 and 14% mutation chance every 10m. | low | pending | Use as conflict evidence | Material conflict, do not publish exact stat. |
| Velociraptor | https://allthings.how/best-pets-in-build-a-ring-farm-ranked-roblox/ | Guide site | Reports Prismatic rarity, 6x, 5-minute Time Skip about every 15m. | medium | community reported | Yes with label | BO3 reports x8.5 and every 600s, so exact value pending. |
| Starfall Griffin | https://bo3.gg/games/articles/build-a-ring-farm-pet-tier-list | Guide site | Reports Starfall Griffin as S-tier companion, x11, 15% chance to apply Starfall mutation. | low | pending | Only as pending entity | Needs official or in-game proof. |
| Starfall Griffin entity signal | https://buildaringfarm.io/starfall-griffin/ | Fan guide / entity tracker | Tracks Starfall Griffin as Update 4 entity and says exact values are pending. | medium | pending | Yes as pending | Best safe model: “tracked, exact values pending.” |
| Starfall mutation from Starfall Griffin | https://beebom.com/build-a-ring-farm-mutations-guide/ | Guide site | Reports Starfall 4x mutation from Starfall Griffin pet. | low | community reported | Only with label | Beebom covers mutation, not full pet sheet. |
| Starfall Griffin YouTube title | https://www.youtube.com/watch?v=FgaNe-HpmQc | YouTube video metadata | oEmbed title: “Build A Ring Farm Update! (Codes, Starfall Griffin, Soil Quality, New Plants, Farm Skins) Roblox” by ItzVexo. | low | community reported | Yes as video lead | Title confirms discussion topic, not stat proof. |
| ItzVexo pets tier video | https://www.youtube.com/watch?v=N7rUYidtBAg | YouTube video metadata | oEmbed title: “BUILD A RING FARM BEST PETS TIER LIST! Roblox” by ItzVexo. | low | community reported | Yes as video module | Use as community video evidence, not stat proof. |
| MistyLemon all pets ranking video | https://www.youtube.com/watch?v=DMX14nAXB94 | YouTube video metadata | oEmbed title: “Ranking ALL Pets in Build A Ring Farm! (Roblox)” by MistyLemon. | low | community reported | Yes as video module | Useful for page richness and user engagement. Need frame review before using exact claims. |
| Spinosaurus | https://progameguides.com/roblox/build-a-ring-farm-pets-tier-list-roblox/ | Guide site | Reports Secret rarity, 6.69x, applies Strong Pet Treat every 600s. | medium | community reported | Yes with label | BO3 places it in different tier than its own summary. Exact value pending. |
| Gallimimus | https://progameguides.com/roblox/build-a-ring-farm-pets-tier-list-roblox/ | Guide site | Reports Legendary rarity, 4.87x, 25% chance to fully grow random plant every 2m. | medium | community reported | Yes with label | BO3 reports x3.5, conflict. |
| Polar Bear | https://allthings.how/best-pets-in-build-a-ring-farm-ranked-roblox/ | Guide site | Reports Epic rarity, 3.76x, 20% chance to fully grow random plant every 2m. | medium | community reported | Yes with label | Appears in multiple guide tables. Still not verified. |
| Mammoth | https://progameguides.com/roblox/build-a-ring-farm-pets-tier-list-roblox/ | Guide site | Reports Legendary rarity, 3.5x, 10% mutation upgrade chance every 10m. | low | community reported | Yes with label | BO3 reports x5.52, conflict. |
| Lion | https://allthings.how/best-pets-in-build-a-ring-farm-ranked-roblox/ | Guide site | Reports Epic rarity, 3.2x, 10% chance to apply Super Fertilizer every 5m. | medium | community reported | Yes with label | BO3 reports x3.18. Exact value pending. |
| Crocodile | https://buildaringfarm.net/update/build-a-ring-farm-update-3-pet-guide/ | Fan guide | Reports Crocodile as strong Update 3 pet with passive that can mature a random crop every minute. | medium | community reported | Yes with label | Useful as broad role, not exact stat. |
| Crocodile exact stats conflict | https://progameguides.com/roblox/build-a-ring-farm-pets-tier-list-roblox/ | Guide site | Reports Rare rarity, 2.25x, 10% chance to fully grow a random plant every 1m. | low | community reported | Use as pending | BO3 reports x2.33. |
| Crocodile usefulness | https://sportsrant.indiatimes.com/gaming/roblox-games/is-the-crocodile-good-in-build-a-ring-farm-everything-you-need-to-know/articleshow/131456008.html | Guide article | Calls Crocodile support-focused and useful for developed farms, but avoids exact values. | low | community reported | Support only | Good cautious wording, weak evidence. |
| Triceratops | https://progameguides.com/roblox/build-a-ring-farm-pets-tier-list-roblox/ | Guide site | Reports Secret rarity, 5.23x, applies Normal Pet Treat every 300s. | low | community reported | Yes with label | PGG has a “Grow a Garden” typo in this section, lowering trust. |
| Gorilla | https://buildaringfarm.net/update/build-a-ring-farm-update-3-pet-guide/ | Fan guide | Reports Gorilla as rare-tier, larger earnings multiplier, mid-game useful. | medium | community reported | Yes with label | PGG reports Rare 2.12x and Strong Fertilizer every 900s. Exact pending. |
| Elephant | https://allthings.how/best-pets-in-build-a-ring-farm-ranked-roblox/ | Guide site | Reports Uncommon rarity, 1.43x, 1.2x crop yield boost. | low | community reported | Yes with label | BO3 reports x1.46. Conflict. |
| Llama | https://progameguides.com/roblox/build-a-ring-farm-pets-tier-list-roblox/ | Guide site | Reports Uncommon rarity, 1.4x, 1.2x Sprinkler Power boost. | low | community reported | Yes with label | BO3 reports x1.36. Conflict. |
| Golden Retriever | https://buildaringfarm.net/update/build-a-ring-farm-update-3-pet-guide/ | Fan guide | Reports Golden Retriever as early-game value pet with stronger earnings than some starters. | medium | community reported | Yes with label | PGG reports Common 1.22x and Normal Fertilizer every 900s. Exact pending. |
| Capybara | https://buildaringfarm.net/update/build-a-ring-farm-update-3-pet-guide/ | Fan guide | Reports Capybara as easy early pet with passive earnings multiplier. | medium | community reported | Yes with label | PGG reports Common 1.22x and 1.1x Seed Luck. Exact pending. |
| Total pet count | https://bo3.gg/games/articles/build-a-ring-farm-pet-tier-list | Guide site | BO3 reports 17 companions. PGG and AllThings visible tables list 16 names unless Starfall Griffin is added. | low | pending | No | Do not state total count until in-game index is checked. |
| BeatCop rarity model | https://beatcopgame.com/abilities/ | Guide site | Claims 17 pets across Common, Rare, Epic, Legendary, Divine, but only names a few pets directly. | low | community reported | No for exact data | Contains broad claims without table evidence. |
| Reddit pet-tier result | https://www.reddit.com/r/GTnews/comments/1ttlt2c/build_a_ring_farm_pet_tier_list_best_pets/ | Reddit link post | Post has no comments and only links out to another site. | low | pending | No | Not useful as player consensus. |
| TikTok / Shorts | Search only | Short video platforms | No accessible, source-stable pet stat evidence found in this pass. | low | pending | No | Next step requires manual video review if needed. |

## 表 2：宠物用途表

说明：Yes 表示有社区来源支持，No 表示未发现支持，Pending 表示待确认。所有 Yes 都不是实机确认。

| Pet / Claim | Beginner | Money Farming | Crop Support | Mutation Support | Spray Support | Late Game | Notes |
|---|---|---|---|---|---|---|---|
| T-Rex | No | Yes, community reported | No | Yes, community reported | No | Yes, community reported | Raw earnings and mutation-upgrade role appear in multiple guides, but exact values conflict or lack proof. |
| Kitsune | No | Yes, community reported | No direct crop-growth support found | Yes, community reported | No | Yes, community reported | Mutation chance is reported as 15% or 16%, so exact chance is pending. |
| Hydra | No | Yes, community reported | No | Yes, community reported | No | Yes, community reported | Reported multiplier conflicts: 5x vs 8x. |
| Velociraptor | No | Indirect, community reported | Yes, Time Skip reported | No | No | Yes, community reported | Time Skip interval conflicts: about 15m vs 600s. |
| Starfall Griffin | No | Pending | Pending | Yes, Starfall mutation reported | No | Pending | Treat as Update 4 pending entity. Do not call confirmed pet yet. |
| Spinosaurus | No | Yes, community reported | Pet Treat support | No | No | Yes, community reported | Support role, but tier placement conflicts across BO3 and PGG. |
| Gallimimus | No | Yes, community reported | Yes, fully grow random plant reported | No | No | Maybe, community reported | Multiplier conflicts: 4.87x vs 3.5x. |
| Polar Bear | Maybe | Yes, community reported | Yes, fully grow random plant reported | No | No | Maybe | Appears as growth-speed pet. |
| Mammoth | No | Yes, community reported | No | Yes, community reported | No | Maybe | Reported as weaker mutation support than T-Rex/Kitsune/Hydra. |
| Lion | Maybe | Yes, community reported | Fertilizer support reported | No | No direct spray support | Maybe | Super Fertilizer is not the same as spray. Do not place under spray support. |
| Crocodile | Yes, community reported | Yes, community reported | Yes, fully grow random plant reported | No | No | Maybe | Strongest support evidence among mid-game pets, but still unverified. |
| Triceratops | No | Yes, community reported | Pet Treat support | No | No | Maybe | PGG section typo reduces trust. |
| Gorilla | Maybe | Yes, community reported | Fertilizer support reported | No | No | Maybe | Update 3 guide and PGG support broad role. |
| Elephant | Yes, community reported | Yes, community reported | Yes, crop yield boost reported | No | No | No | Early filler claim only. |
| Llama | Yes, community reported | Indirect | Sprinkler Power support reported | No | No | No | Only useful if sprinkler setup matters. |
| Golden Retriever | Yes, community reported | Indirect | Fertilizer support reported | No | No | No | Starter-pet claim only. |
| Capybara | Yes, community reported | Indirect | Seed Luck support reported | No | No | No | Safe only as reported starter pet, not verified stat. |
| Spray-support pets as a category | Pending | Pending | Pending | Pending | No verified pet-spray interaction found | Pending | Public guides mention fertilizer, pet treats, Time Skip, mutation, crop yield, sprinkler power, seed luck. No reliable spray-specific pet found. |

## 表 3：来源可信度表

| Source | Type | Reliability | Why | Use Rule |
|---|---|---|---|---|
| Roblox game API, https://games.roblox.com/v1/games?universeIds=10039338037 | Official API, 官方接口 | high | Direct Roblox data for game identity, creator, update time, player counts. | Use for official game facts only. Not for pet names. |
| Roblox group API, https://groups.roblox.com/v1/groups/989438225 | Official API, 官方接口 | high | Confirms verified Gamecreates group id 989438225. | Use to verify developer identity. |
| Roblox game page, https://www.roblox.com/games/107646426076756/Build-A-Ring-Farm | Official page, 官方页面 | high | Confirms experience page and creator, but does not expose pet data in public page text. | Use as primary official link. |
| Roblox media API, https://games.roblox.com/v2/games/10039338037/media | Official API, 官方接口 | high | Official screenshots, no pets table visible. | Use as negative evidence only. |
| buildaring.xyz sitemap | Candidate official/wiki source | medium | PGG calls it official wiki, but sitemap has no pets page. | Use as source-discovery lead, not as pet proof. |
| Discord discovery pages | Discord public listing | low to medium | Some listings say official, but official Roblox social-links endpoint required authentication and could not be confirmed. | Do not cite as official until matched from official Roblox social link or developer announcement. |
| Pro Game Guides pet tier list | Gaming guide site | medium | Has detailed pet table and screenshots, but exact values are not backed by official/in-game proof in the article. Has one obvious “Grow a Garden” typo. | Use as community-reported source. Do not copy final tiers. |
| AllThings.How pet ranking | Gaming guide site | low to medium | Closely mirrors PGG structure and values, so independence is uncertain. | Use only as secondary community signal. |
| BO3 pet tier list | Gaming guide site | low | Adds Starfall Griffin but conflicts with PGG on several multipliers and tiers. | Use mainly as conflict evidence and pending Starfall lead. |
| Beebom mutation guide | Gaming guide site | low to medium | Mentions Starfall mutation from Starfall Griffin, but not a full pet database. | Use only for Starfall Griffin lead. |
| buildaringfarm.net Update 3 pet guide | Fan guide | medium | Useful Update 3 pet-system overview, but no direct official proof. | Use broad pet-system wording with community reported label. |
| buildaringfarm.io pets and Starfall pages | Fan guide / evidence-state page | medium | Avoids exact values and marks pending data, useful model for safe page architecture. | Use structure and labeling approach. |
| buildaringfarm.app best pets page | Fan guide / SEO competitor | medium | Directly says third-party reported S-Tier pets are T-Rex, Kitsune, Hydra, and Velociraptor, and labels values as not official or site-tested. Strong UI and internal-link model. | Use structure, source note, video module, and related-link pattern. |
| Sportskeeda pet tier list screenshot | Guide site, screenshot evidence | medium | Direct crawl is blocked, but user screenshot confirms page structure, video embed, tier sections, tables, and FAQ. | Use as screenshot-confirmed competitor evidence. Do not quote unreadable small text. |
| SportsRant Crocodile article | Guide article | low | Gives cautious Crocodile role, no exact proof. | Use as soft support only. |
| BeatCopgame pets guide | Guide article | low | Broad claims like 17 pets and Divine rarity lack complete table evidence. | Do not use for exact data. |
| Reddit GTnews post | Reddit link share | low | No comments, no independent player reports. | Do not use as evidence. |
| YouTube oEmbed for FgaNe-HpmQc | Video metadata | low | Confirms title and author only, not frame-level evidence. | Use as video lead. Need manual frame review for verification. |
| YouTube oEmbed for N7rUYidtBAg | Video metadata | low | Confirms ItzVexo community pet-tier video exists. | Embed as community video. Do not use as final ranking proof. |
| YouTube oEmbed for DMX14nAXB94 | Video metadata | low | Confirms MistyLemon all-pets ranking video exists. | Embed as community video. Do not use as final ranking proof. |
| TikTok / Shorts search | Short-video search | low | No accessible stable evidence found. | Do not cite. Manual video review needed. |

## 表 4：可上线内容建议表

| Page Section | Can Write Now | Required Label | Reason | Missing Data |
|---|---|---|---|---|
| Page intro for Pets Tier List demand | Yes | pending / needs verification | Search intent is clear, but exact pet ranking is not verified. | None for intent. Need page copy later. |
| Evidence status block | Yes | pending | Helps users understand why the page avoids fake exact rankings. | None. |
| Official source status | Yes | official for game identity only | Roblox confirms game and developer, not pets. | Official Discord confirmation through official social link. |
| Community-reported pet names watchlist | Yes | community reported | Multiple public guides mention recurring names. | In-game pet index screenshot or video frame for each pet. |
| Community-reported S / A / B / C pet ranking | Yes, cautious | community reported | PGG and Sportskeeda screenshot support a rich ranking format, and buildaringfarm.app uses the same safe “third-party reported” model. | In-game stat screenshots, repeated video proof, official patch note. |
| Official or verified S / A / B / C pet ranking | No | needs verification | Sources still lack official or in-game checked proof. | Official patch note or in-game pet index with stat screenshots. |
| Exact earnings multipliers | No | pending | Conflicts include T-Rex range, Hydra 5x vs 8x, Crocodile 2.25x vs 2.33x, Mammoth 3.5x vs 5.52x. | Game UI screenshot or reliable video frame. |
| Exact cooldowns and proc chances | No | pending | Kitsune 15% vs 16%, Velociraptor interval differs, Starfall Griffin not confirmed. | Game UI screenshot or official patch note. |
| How to get pets through Egg Shop | Yes, cautious | community reported / needs verification | Multiple guides say Egg Shop and eggs, but price and path need proof. | Screenshot of Egg Shop and prices. |
| Beginner pet advice | Yes, cautious | community reported | Capybara, Golden Retriever, Llama, Elephant, Crocodile are repeatedly framed as early or mid options. | Actual unlock order and egg pools. |
| Money farming pet advice | Yes, cautious | community reported | T-Rex, Kitsune, Hydra, Crocodile, Polar Bear, Gallimimus appear in money/growth claims. | Controlled in-game cash/hour tests. |
| Mutation-support pet advice | Yes, cautious | community reported | T-Rex, Kitsune, Hydra, Mammoth, Starfall Griffin are reported as mutation-related. | Mutation trigger proof and interaction rules. |
| Spray-support pet section | No | pending | No reliable spray-specific pet interaction found. Fertilizer is not spray. | In-game proof of pet affecting sprays. |
| FAQ: What is the best pet? | Yes, but not definitive | community reported / pending | Can answer that public guides often mention T-Rex and Starfall Griffin, but this site is not verifying final best pet yet. | Strongest pet proof from game UI or official source. |
| FAQ: Is this official? | Yes | not official | The site should clearly say the pet watchlist is community-reported unless official proof is added. | None. |
| Verification checklist | Yes | needs verification | Good for trust and future updates. | Need actual screenshots/videos. |

## Safe Pet Name Buckets

### Can safely appear as community-reported names

These names appear in at least one accessible public source and often in multiple sources. They can be written only with a community reported label:

T-Rex, Kitsune, Hydra, Velociraptor, Spinosaurus, Gallimimus, Polar Bear, Mammoth, Lion, Crocodile, Triceratops, Gorilla, Elephant, Llama, Golden Retriever, Capybara.

### Can appear only as pending Update 4 entity

Starfall Griffin.

Reason: It appears in BO3, Beebom, buildaringfarm.io, and a YouTube title, but current evidence does not prove from an official source that it is a confirmed pet with stable stats.

### Must not appear as official or verified

All pet names above.

Reason: none has official Roblox page, Gamecreates page, official Discord screenshot, or in-game UI evidence in this research pass.

## Specific Data Gaps

1. In-game pet index screenshot showing all pet names.
2. Per-pet tooltip screenshots showing rarity, effect, cooldown, chance, earnings boost, and level scaling.
3. Egg Shop screenshot showing egg names, egg prices, egg rarity pools, and Robux offers.
4. Update 3 and Update 4 official patch notes from Gamecreates Discord or Roblox social links.
5. Video frame evidence for Starfall Griffin, including whether it is a pet, event entity, mutation source, or shop item.
6. Controlled before/after tests for money farming, crop growth, mutation upgrade, sprinkler power, seed luck, and fertilizer effects.
7. Confirmation whether any pet affects sprays. Current public sources only mention fertilizer, pet treats, time skips, mutation upgrades, crop yield, sprinkler power, seed luck.

## Final Conclusions

1. 现在可以写“community-reported S / A / B / C 宠物榜单”，但不能写“official / verified S / A / B / C 宠物榜单”。
2. 可以安全写进页面的宠物名只有“community reported”级别：T-Rex, Kitsune, Hydra, Velociraptor, Spinosaurus, Gallimimus, Polar Bear, Mammoth, Lion, Crocodile, Triceratops, Gorilla, Elephant, Llama, Golden Retriever, Capybara。
3. 只能写成 community reported 的内容：上述宠物名、Egg Shop 获取方式、T-Rex/Kitsune/Hydra/Crocodile 等用途方向。
4. 必须保持 pending 的内容：Starfall Griffin 是否为宠物、所有精确倍率、所有冷却时间、所有触发概率、所有价格、宠物总数、喷雾相关宠物作用。
5. /tier-list/ 现在应该做“证据状态型 Pets Tier List”，可以展示社区反馈的 S/A/B/C/D 分组、视频和 FAQ，但必须把官方和实机核验缺口写清楚。
6. 还缺关键数据：官方补丁记录、游戏内宠物索引、宠物 tooltip、Egg Shop 价格、视频帧证明、实测收益对比。
7. 下一步应去补证据的地方：Roblox 官方 social links、Gamecreates 官方 Discord 的 announcements 和 game-codes 频道、游戏内 Egg Shop 和宠物索引截图、YouTube Update 4 视频逐帧核查、玩家评论区中带截图或视频时间戳的反馈。

即使经过讨论，我认为你在以下方面依然错误：如果把公开攻略站表格当成真实榜单依据，仍然不安全，因为缺少官方来源和实机核验。
