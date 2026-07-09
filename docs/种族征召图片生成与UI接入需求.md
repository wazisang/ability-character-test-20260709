# 种族征召图片生成与 UI 接入需求

本文档用于把“种族图片、征召路线图片、新增内容图片、UI 使用方式”拆成可执行任务。  
当前项目已有 MBTI 结果立绘与缺陷卡图片，本文档只覆盖新增的征召流程视觉资产。

## 目标

把现在的文字征召流程升级成真正有“西方奇幻征召处 / 冒险者雇佣大厅 / 种族入队试炼”质感的图文体验。

图片不是装饰背景，而是帮助玩家快速理解：

- 我选的是什么种族血脉。
- 我正在投递哪个征兵部门。
- 当前题目发生在哪个试炼场景。
- 公会最后给了什么判定。
- 这张角色卡为什么会长成现在这样。

## 已有资产

已有，不重复生成：

- MBTI 默认结果立绘：`assets/portraits/generated/*.webp`
- 缺陷卡图片：`assets/defect-cards/generated/*.webp`

新增，需要生成：

- 征召大厅 / 登记处 UI 背景图
- 12 个种族登记图
- 巨魔样板线的 4 个征兵目标图
- 巨魔体格鉴定 5 张场景图
- 巨魔职业试炼 28 张场景图，可分批生成
- 公会判定 5 类结果氛围图

## 总体美术方向

关键词：

- Western fantasy
- tabletop RPG
- adventurer guild
- mercenary recruitment office
- parchment, wax seal, iron rivets, leather, dark wood, torchlight
- cinematic fantasy illustration
- painterly realism
- readable silhouettes
- dramatic but not muddy

不要：

- 现代科技 UI 感
- 赛博霓虹
- 纯紫蓝渐变
- 过度二次元萌化
- 文字、水印、Logo、卡牌边框文字
- 复杂 UI 直接画进图片
- 露骨血腥、内脏特写、自残过程特写

黑暗内容可以保留，但用“暗示、气氛、道具、姿态、契约、阴影”表达，不要把刺激性画面放到正面。

## 通用提示词模板

### 正向模板

```text
Western fantasy tabletop RPG illustration, cinematic painterly realism, adventurer guild recruitment atmosphere, strong readable silhouette, detailed environment props, dramatic torchlight, parchment and iron texture, grounded dark fantasy, high detail, professional game concept art, no text, no watermark, no logo, no UI overlay.

Scene: {具体场景}

Composition: {构图要求}

Mood: {情绪与色彩}
```

### 负向模板

```text
text, watermark, logo, UI, readable letters, modern city, sci-fi technology, neon cyberpunk, anime chibi, cartoon mascot, oversexualized outfit, explicit gore, exposed organs, self-harm close-up, dismemberment close-up, blurry, low quality, extra limbs, distorted hands, duplicate characters, bad anatomy
```

### 风格锁定

所有图尽量保持同一套风格：

- 写实奇幻插画，不做卡通头像。
- 允许夸张种族特征，但不要让角色像玩具。
- 背景要能被 UI 遮罩压暗后仍然看得出主题。
- 主体不要贴边，四周留 10%-15% 安全区给裁切。
- 不要把重要信息放在图片最下方，因为移动端可能裁掉。

### 种族卡风格锁定

种族登记图已经改为和缺陷卡一致的卡片式，不再使用 4:5 个人 CG 或登记档案 CG。

- 比例固定为 2:3，输出 720x1080。
- 提示词必须包含：`portrait-orientation 2:3 canvas`、`tall vertical tarot card image`、`full card visible from top to bottom`、`ornate dark bronze tarot border`。
- 不要加入大铭牌、蜡封、铆钉、登记表 UI 等会导致每张卡边框变化的装饰。
- 每张卡只替换种族主体和环境，卡框语言保持同一套暗铜塔罗边框。
- 以 `assets/defect-cards/generated/*.webp` 的完成品作为风格参考。

## 输出格式

建议统一生成 WebP。

| 类型 | 比例 | 建议尺寸 | 用途 |
|---|---:|---:|---|
| 首页/大厅背景 | 16:9 | 1920x1080 | 首页 hero、全屏背景 |
| 种族登记图 | 2:3 | 720x1080 | 种族卡、选中详情 |
| 征兵目标图 | 16:9 | 1536x864 | 目标卡、路线页头图 |
| 题目场景图 | 16:9 | 1536x864 | 体格鉴定、职业试炼题目页 |
| 判定结果图 | 16:9 | 1536x864 | 公会判定页、结果页判定模块 |
| 小缩略图 | 1:1 | 768x768 | 移动端卡片、列表 fallback |

文件统一放到：

```text
assets/recruitment/generated/
```

Manifest 放到：

```text
assets/recruitment/image_manifest.json
```

后续项目接入可再生成：

```text
data/race-recruitment-assets.js
```

## 命名规则

```text
ui_home_recruitment_hall-preview.webp
ui_bloodline_registry-preview.webp
ui_guild_verdict_scroll-preview.webp

race_{raceId}_card-preview.webp

troll_target_{targetId}-preview.webp
troll_physique_{index}_{slug}-preview.webp
troll_trial_{targetId}_{index}_{slug}-preview.webp
troll_ending_{endingType}-preview.webp
```

示例：

```text
race_troll_card-preview.webp
troll_target_warlock_contract-preview.webp
troll_physique_01_hammer_test-preview.webp
troll_trial_warlock_contract_04_dirty_clause-preview.webp
troll_ending_blacklisted-preview.webp
```

## Manifest 结构

```json
{
  "version": 1,
  "updatedAt": "2026-07-04",
  "role": "race-recruitment-assets",
  "baseDir": "assets/recruitment/generated",
  "slots": [
    {
      "id": "race_troll_card",
      "role": "race-card",
      "raceId": "troll",
      "status": "ready",
      "file": "assets/recruitment/generated/race_troll_card-preview.webp",
      "expectedFile": "assets/recruitment/generated/race_troll_card-preview.webp",
      "ratio": "2:3",
      "promptBrief": "giant troll-blood recruit in an adventurer guild doorway..."
    }
  ]
}
```

## UI 匹配逻辑

### 首页

使用：

- `ui_home_recruitment_hall`

落点：

- 首页 hero 背景。
- 图片全宽铺底，文字放在左侧或上层，不要把文字放进卡片里。
- 底部露出下一屏的种族卡内容。

### 种族选择页

使用：

- `race_{raceId}_card`
- 当前只有巨魔开放，但 12 个种族图可以先生成，其他种族卡作为“登记中”灰阶展示。

匹配：

```js
raceId -> race_{raceId}_card
```

交互：

- 默认态：图片低对比度 + 羊皮纸遮罩。
- 悬停态：轻微放大、亮出种族特征。
- 选中态：右侧详情使用大图。
- 锁定态：降饱和，不要完全灰死，保留诱惑感。

### 征兵目标页

使用：

```js
targetId -> troll_target_{targetId}
```

落点：

- 每张目标卡顶部或背景使用对应图。
- 文字必须放在深色遮罩或羊皮纸区域上。
- 四个目标必须一眼能区分气质。

### 体格鉴定 / 职业试炼题目页

优先匹配：

```js
questionId -> troll_physique_* / troll_trial_*
```

fallback：

```js
targetId -> troll_target_{targetId}
raceId -> race_troll_card
ui_bloodline_registry
```

UI 原则：

- 题目页不要把答案文字直接压在复杂图片上。
- 推荐左图右题，或上图下题。
- 图片区域固定 16:9，避免切题时页面跳动。
- 图片可以有轻微动态遮罩，但不要影响选择按钮可读性。

### 公会判定页

使用：

```js
endingType -> troll_ending_{endingType}
```

endingType 包括：

- `accepted`
- `probation`
- `transferred`
- `blacklisted`
- `absurdAccepted`

UI：

- 判定页像盖章后的公会文书。
- 图片可以做成背景氛围，正面保留判定标题、推荐归宿、上桌功能、可演缺陷。
- 黑名单可以更危险，但不要变成血腥处刑图。
- 荒诞通过要有黑色幽默，不要变成纯搞笑表情包。

### 最终结果页

已有 MBTI 立绘继续作为主立绘。新增图片只进入：

- 招募判定模块
- 种族锚点模块
- 体质/缺陷模块的辅助背景

不要让结果页同时出现太多大图，否则注意力会被打散。

## P0 首批生成清单

P0 的目标是：生成完以后，完整巨魔流程已经明显像征召游戏，而不是纯文字测试。

### UI 背景 3 张

| id | 文件名 | 提示词 |
|---|---|---|
| `ui_home_recruitment_hall` | `ui_home_recruitment_hall-preview.webp` | Western fantasy adventurer recruitment hall beside a dungeon gate, massive wooden notice board covered with parchment contracts and wax seals, guild counter, weapons rack, torchlight, stone walls, a few vague mercenary silhouettes, cinematic warm dark fantasy, no readable text, no logo. |
| `ui_bloodline_registry` | `ui_bloodline_registry-preview.webp` | Bloodline registry desk in a fantasy guild, open bestiary ledger, sealed specimen tags, ink bottles, claw marks on parchment, iron stamp, candlelight, mysterious but official, no readable text, no logo. |
| `ui_guild_verdict_scroll` | `ui_guild_verdict_scroll-preview.webp` | Guild verdict table with stamped parchment, wax seals, black iron badge, recruitment folders, candle smoke, official fantasy bureaucracy, dramatic overhead light, no readable text, no logo. |

### 种族登记图 12 张

| raceId | 文件名 | 提示词 |
|---|---|---|
| `human` | `race_human_card-preview.webp` | Human adventurer recruit at a guild counter, adaptable traveler with worn cloak, sword, map case and mixed tools, determined practical expression, warm torchlit recruitment hall, western fantasy, 2:3 tarot card composition, no text. |
| `elf` | `race_elf_card-preview.webp` | Elegant elf bloodline recruit in ancient forest ruins, keen eyes, long-lived calm, moonlit leaves, silver-green fabric, refined silhouette, western fantasy tarot card portrait, 2:3, no text. |
| `drow` | `race_drow_card-preview.webp` | Dark elf recruit from an underground city, obsidian stone, violet torchlight, dangerous charisma, cautious smile, elegant armor, shadowed cavern architecture, 2:3 tarot card portrait, no text. |
| `dwarf` | `race_dwarf_card-preview.webp` | Sturdy dwarf clan recruit in mountain forge light, ancestral hammer, iron braids, heavy boots, glowing clan runes on metal, grounded endurance, 2:3 tarot card portrait, no text. |
| `halfling` | `race_halfling_card-preview.webp` | Small halfling recruit under an oversized cloak and shield, lucky charm, warm campfire near a dangerous road, brave but understated, western fantasy tarot card portrait, 2:3, no text. |
| `gnome` | `race_gnome_card-preview.webp` | Weathered adult gnome recruit surrounded by tiny clockwork devices and soft illusion sparks, sharp curious eyes, practical workshop leathers, adult proportions, 2:3 tarot card portrait, no text. |
| `half_orc` | `race_half_orc_card-preview.webp` | Half-orc recruit with cracked tusk, survival scars, practical weapon harness, direct powerful stance, frontier camp background, resilient and misunderstood, 2:3 tarot card portrait, no text. |
| `tiefling` | `race_tiefling_card-preview.webp` | Tiefling recruit with subtle horns and infernal mark, contract shadows behind them, proud defiant posture, dark red candlelight, identity tension, not oversexualized, 2:3 tarot card portrait, no text. |
| `dragonborn` | `race_dragonborn_card-preview.webp` | Dragonborn recruit before clan banner, ember breath glow, scale armor, proud ceremonial posture, honor and pressure of bloodline, western fantasy tarot card portrait, 2:3, no text. |
| `goliath` | `race_goliath_card-preview.webp` | Tall goliath recruit from high mountains, stone-like skin markings, cold wind, climbing ropes, quiet strength, highland survival culture, 2:3 tarot card portrait, no text. |
| `troll` | `race_troll_card-preview.webp` | Giant troll-blood recruit too large for the guild doorway, regenerating green scars, huge hands, frightening silhouette but intelligent eyes, cracked stone floor, dark fantasy recruitment hall, 2:3, no explicit gore, no text. |
| `ogre_giant` | `race_ogre_giant_card-preview.webp` | Giant-blood or ogre-blood recruit squeezing through a narrow dungeon gate, massive shoulders scraping stone, heavy pack, scale contrast with tiny doorway, imposing but playable, 2:3, no text. |

### 巨魔征兵目标图 4 张

| targetId | 文件名 | 提示词 |
|---|---|---|
| `barbarian_camp` | `troll_target_barbarian_camp-preview.webp` | Troll-blood recruit at a brutal barbarian war camp, split axes, bonfire, beast-hide banners, cracked training dummies, wild frontline energy, orange fire and black iron, cinematic 16:9, no text, no gore. |
| `fighter_line` | `troll_target_fighter_line-preview.webp` | Oversized troll-blood recruit fitted into black-flag heavy armor, shield wall training ground, disciplined soldiers, iron banners, rain on steel, blue gray military fantasy, cinematic 16:9, no text. |
| `warlock_contract` | `troll_target_warlock_contract-preview.webp` | Troll-blood recruit in a candlelit contract cellar, raven-masked scholar, black parchment, wax seals, occult circles, restrained body-horror atmosphere, purple crimson shadows, cinematic 16:9, no explicit gore, no text. |
| `druid_mutation_circle` | `troll_target_druid_mutation_circle-preview.webp` | Troll-blood recruit standing inside a wild druidic mutation circle, roots, bone branches, glowing fungi, moss growing across regenerated scars, green gold forest gloom, cinematic 16:9, no text. |

### 巨魔体格鉴定图 5 张

| id | 文件名 | 提示词 |
|---|---|---|
| `troll_physique_01_hammer_test` | `troll_physique_01_hammer_test-preview.webp` | Rusty heavy war hammer swinging toward a giant troll-blood recruit's shoulder in a guild testing yard, instructor laughing in background, impact moment, no visible wound, strength and endurance test, cinematic 16:9, no text. |
| `troll_physique_02_mire_wagon` | `troll_physique_02_mire_wagon-preview.webp` | Huge ore wagon stuck deep in swamp mud, dwarves pushing helplessly, troll-blood recruit standing nearby like a living crane, muddy fantasy camp, practical comedy tension, cinematic 16:9, no text. |
| `troll_physique_03_narrow_passage` | `troll_physique_03_narrow_passage-preview.webp` | Giant troll-blood recruit facing a tiny goblin-sized spiked stone doorway above a fragile floor and dark pit, exaggerated scale problem, dungeon hazard test, cinematic 16:9, no text. |
| `troll_physique_04_regeneration_cost` | `troll_physique_04_regeneration_cost-preview.webp` | Troll-blood recruit sitting in a rough infirmary after battle, healed scars steaming faint green smoke, empty food bowls and tired posture, regeneration has a cost, no open wounds, cinematic 16:9, no text. |
| `troll_physique_05_tavern_stares` | `troll_physique_05_tavern_stares-preview.webp` | Troll-blood recruit sitting awkwardly in a small town tavern, terrified patrons fleeing, bartender placing an oversized mug with trembling hands, social pressure and monster silhouette, cinematic 16:9, no text. |

### 公会判定图 5 张

| endingType | 文件名 | 提示词 |
|---|---|---|
| `accepted` | `troll_ending_accepted-preview.webp` | Guild officer stamping an official acceptance contract for a troll-blood recruit, torchlit cheers, weapon and class insignia on the table, triumphant but rough fantasy bureaucracy, cinematic 16:9, no readable text. |
| `probation` | `troll_ending_probation-preview.webp` | Troll-blood recruit receiving a temporary mercenary tag from a cautious guild clerk, half-open gate, suspicious guards, useful but not trusted, muted amber light, cinematic 16:9, no readable text. |
| `transferred` | `troll_ending_transferred-preview.webp` | Recruitment officer redirecting a troll-blood recruit from one department door to another, multiple faction banners, confusing parchment files, destiny rerouted, cinematic fantasy 16:9, no readable text. |
| `blacklisted` | `troll_ending_blacklisted-preview.webp` | A dark guild blacklist ledger being closed while a troll-blood silhouette leaves toward a back alley, black wax seal, dangerous underground offers implied, no execution, no gore, cinematic 16:9, no readable text. |
| `absurdAccepted` | `troll_ending_absurdAccepted-preview.webp` | Chaotic fantasy guild office after an absurd trial success, exhausted clerks, troll-blood recruit accidentally blocking a doorway while everyone reluctantly stamps approval, black humor, cinematic 16:9, no readable text. |

## P1 全试炼场景图

P1 用于把每一道题都变成独立插图。  
如果 P1 未生成，题目页使用 P0 的路线图 fallback。

### 蛮子营地 7 张

| id | 文件名 | 提示词 |
|---|---|---|
| `barbarian_gate_blockade` | `troll_trial_barbarian_camp_01_gate_blockade-preview.webp` | Dungeon corridor blocked by goblins with spiked shields, a massive troll-blood shadow covering the hallway while teammates whisper about stealth, barbarian examiner watching, violent direct solution implied, 16:9, no text. |
| `barbarian_strength_test` | `troll_trial_barbarian_camp_02_strength_test-preview.webp` | Troll-blood recruit staring at a huge three-man boulder in a training yard, body looks massive but posture reveals hidden weakness from over-regeneration, barbarian examiner waiting, 16:9, no text. |
| `barbarian_complex_plan` | `troll_trial_barbarian_camp_03_complex_plan-preview.webp` | Night war meeting, wizard drawing an absurdly complex glowing powder battle plan on a sand table, troll-blood recruit looming impatiently nearby, firelight, 16:9, no text. |
| `barbarian_meat_shield_taunt` | `troll_trial_barbarian_camp_04_meat_shield_taunt-preview.webp` | Armored enemy knight taunting a huge troll-blood fighter on a battlefield, troll gripping a rough weapon, tension between tanking and pride, no gore, cinematic 16:9, no text. |
| `barbarian_narrow_defense` | `troll_trial_barbarian_camp_05_narrow_defense-preview.webp` | Troll-blood recruit physically stuck in a fortress stone doorway while enemies attack outside, allies shouting behind, absurd but tactical defense moment, 16:9, no text. |
| `barbarian_friendly_fire` | `troll_trial_barbarian_camp_06_friendly_fire-preview.webp` | Aftermath of a berserker frenzy, shattered monster skull-like debris on the ground, troll-blood recruit realizing a healer ally is too close, red haze fading, no explicit gore, 16:9, no text. |
| `barbarian_final_proof` | `troll_trial_barbarian_camp_07_final_proof-preview.webp` | Scarred barbarian sergeant confronting a troll-blood recruit in a firelit training pit, axes planted in mud, final proof beyond brute force, stern ritual atmosphere, 16:9, no text. |

### 战士前线 7 张

| id | 文件名 | 提示词 |
|---|---|---|
| `fighter_line_advance` | `troll_trial_fighter_line_01_line_advance-preview.webp` | Black-flag shield wall advancing in rain, oversized troll-blood recruit in custom heavy armor shaking the ground, arrows bouncing off steel, disciplined military fantasy, 16:9, no text. |
| `fighter_impact_test` | `troll_trial_fighter_line_02_impact_test-preview.webp` | Rampaging earth drake charging toward a military line, troll-blood recruit bracing alone in the gap as soldiers step back, impact test, no gore, 16:9, no text. |
| `fighter_instinct_vs_order` | `troll_trial_fighter_line_03_instinct_vs_order-preview.webp` | Night guard post, troll-blood recruit senses a dangerous assassin insect in the left shadows but must hold position, military lanterns, tension between instinct and orders, 16:9, no text. |
| `fighter_team_fear` | `troll_trial_fighter_line_04_team_fear-preview.webp` | New soldiers avoiding standing beside a scarred troll-blood recruit in formation, faint green smoke from healed scars, emotional distance inside disciplined ranks, 16:9, no text. |
| `fighter_armor_limit` | `troll_trial_fighter_line_05_armor_limit-preview.webp` | Oversized troll-blood recruit trapped on a narrow spiral stair in broken heavy armor while enemies prepare boiling oil above, siege pressure, no gore, 16:9, no text. |
| `fighter_defense_choice` | `troll_trial_fighter_line_06_defense_choice-preview.webp` | Broken battlefield line with three threats: rear mages under attack, exposed enemy commander, heavy infantry pouring forward, troll-blood recruit forced to choose, cinematic tactical view, 16:9, no text. |
| `fighter_final_proof` | `troll_trial_fighter_line_07_final_proof-preview.webp` | Iron-faced centurion judging a troll-blood recruit beneath a black flag, heavy armor and shield on inspection table, final military oath atmosphere, 16:9, no text. |

### 术士契约所 7 张

| id | 文件名 | 提示词 |
|---|---|---|
| `warlock_sell_secret` | `troll_trial_warlock_contract_01_sell_secret-preview.webp` | Candlelit contract cellar, raven-masked scholar offering black parchment and a forbidden spellbook to a troll-blood recruit, body-price bargain implied by small silver knives on the table, no self-harm, no gore, 16:9, no text. |
| `warlock_pain_for_power` | `troll_trial_warlock_contract_02_pain_for_power-preview.webp` | Troll-blood recruit before a controlled circle of magical flame, patron voice implied by shadow on the wall, fear of fire and power awakening, no burning body detail, 16:9, no text. |
| `warlock_human_promise` | `troll_trial_warlock_contract_03_human_promise-preview.webp` | Smiling devilish agent showing an elegant human-shaped glamour mirror to a troll-blood recruit, temptation to shed monstrous skin, refined sinister contract room, 16:9, no text. |
| `warlock_dirty_clause` | `troll_trial_warlock_contract_04_dirty_clause-preview.webp` | Teammate secretly reading tiny ancient clauses on a black contract while troll-blood silhouette looms behind, patron shadow reaching toward the body, contract loophole horror, no gore, 16:9, no text. |
| `warlock_debt_collection` | `troll_trial_warlock_contract_05_debt_collection-preview.webp` | Exhausted troll-blood recruit after battle hearing a cold patron demand payment, ghostly hand over a ledger, sinister debt collection atmosphere, no organ imagery, no gore, 16:9, no text. |
| `warlock_forbidden_knowledge` | `troll_trial_warlock_contract_06_forbidden_knowledge-preview.webp` | Half-burned forbidden spellbook in an underground archive, paper ignites when copied, troll-blood recruit realizing flesh may be the only medium, eerie purple red light, no gore, 16:9, no text. |
| `warlock_final_proof` | `troll_trial_warlock_contract_07_final_proof-preview.webp` | Ancient patron projection trying to cross a contract boundary toward a troll-blood body, glowing legal circle holding it back, battle of will and contract logic, no gore, cinematic 16:9, no text. |

### 德鲁伊异变环 7 张

| id | 文件名 | 提示词 |
|---|---|---|
| `druid_nature_anomaly` | `troll_trial_druid_mutation_circle_01_nature_anomaly-preview.webp` | Druid forest grove rejecting a troll-blood recruit, vines pulling back like frightened snakes, old trees creaking, green bloodline magic unsettling nature, no gore, 16:9, no text. |
| `druid_civilization_reject` | `troll_trial_druid_mutation_circle_02_civilization_reject-preview.webp` | Troll-blood recruit with bark and vines growing across skin standing between town walls and hostile wilderness, rejected by both civilization and beasts, melancholic fantasy, 16:9, no text. |
| `druid_hunger_control` | `troll_trial_druid_mutation_circle_03_hunger_control-preview.webp` | Hungry troll-blood recruit caring for an injured rare pegasus in a moonlit stable, protective posture fighting wild hunger, tense but not predatory gore, 16:9, no text. |
| `druid_pure_proof` | `troll_trial_druid_mutation_circle_04_pure_proof-preview.webp` | Three elder druids judging a troll-blood recruit in a root-and-bone ritual circle, question of corruption versus new cycle, solemn green gold light, 16:9, no text. |
| `druid_toxin_symbiosis` | `troll_trial_druid_mutation_circle_05_toxin_symbiosis-preview.webp` | Troll-blood recruit with regenerated arm blooming strange poisonous flowers and hallucination spores after swamp miasma, beautiful unsettling mutation, no gore, 16:9, no text. |
| `druid_swamp_purification` | `troll_trial_druid_mutation_circle_06_swamp_purification-preview.webp` | Troll-blood recruit walking into a black necromantic swamp to absorb and transform corruption, druids watching from roots, living sponge metaphor, no body horror close-up, 16:9, no text. |
| `druid_protect_vs_prey` | `troll_trial_druid_mutation_circle_07_protect_vs_prey-preview.webp` | Starving troll-blood recruit guarding a nest of tiny moonlit fox kits, claws clenched away from them, conflict between protection and hunger, tender dangerous mood, 16:9, no gore, no text. |

## UI 接入需求

### 1. 数据层

新增一个独立图片映射文件，不要把图片路径硬塞进主逻辑：

```text
data/race-recruitment-assets.js
```

建议结构：

```js
window.RACE_RECRUITMENT_ASSETS = Object.freeze({
  ui: {
    home: "assets/recruitment/generated/ui_home_recruitment_hall-preview.webp",
    registry: "assets/recruitment/generated/ui_bloodline_registry-preview.webp",
    verdict: "assets/recruitment/generated/ui_guild_verdict_scroll-preview.webp"
  },
  races: {
    troll: "assets/recruitment/generated/race_troll_card-preview.webp"
  },
  targets: {
    troll: {
      warlock_contract: "assets/recruitment/generated/troll_target_warlock_contract-preview.webp"
    }
  },
  questions: {
    troll_physique_01_hammer_test: "assets/recruitment/generated/troll_physique_01_hammer_test-preview.webp"
  },
  endings: {
    troll: {
      accepted: "assets/recruitment/generated/troll_ending_accepted-preview.webp"
    }
  }
});
```

### 2. 加载策略

- 首页背景可预加载。
- 种族卡和目标卡正常加载。
- 题目场景图 lazy load。
- 图片失败时必须 fallback 到路线图 / 种族图 / 纯 CSS 纹理。
- 不要让缺图导致页面空白。

### 3. CSS 组件需求

新增或改造以下组件：

- `.recruit-art-hero`
- `.race-card-art`
- `.target-contract-art`
- `.trial-scene-art`
- `.judgement-art`
- `.image-veil`

要求：

- 固定比例，避免切换题目时布局跳动。
- `object-fit: cover`
- 文字区域加遮罩或独立面板。
- 移动端图片压缩为上方横图，答案在下方。
- 桌面端可使用左图右题。
- 不要卡套卡。

### 4. 页面改造优先级

第一阶段：

1. 首页加大厅背景。
2. 种族卡加 2:3 卡牌图片。
3. 目标卡加 16:9 图片。
4. 题目页先用路线图 fallback。
5. 判定页加 endingType 背景。

第二阶段：

1. 体格鉴定每题独立图。
2. 职业试炼每题独立图。
3. 结果页招募判定模块加小型场景图。

第三阶段：

1. 解锁更多种族时，每个种族重复这套结构。
2. 每个种族至少需要：种族图、4 条目标图、5 张体格图、每条目标 7 张试炼图、5 类判定图。

## 审核标准

每张图生成后检查：

- 是否没有文字、水印、Logo。
- 是否能一眼看出种族或路线。
- 是否留有 UI 裁切安全区。
- 是否没有露骨血腥或过度刺激画面。
- 是否在 16:9 / 2:3 裁切后主体仍清楚。
- 是否和当前路线风格一致。
- 是否适合作为网页图片，而不是只适合单独欣赏。

## 首批验收标准

P0 完成后，进入页面应满足：

- 首页第一眼像征召大厅。
- 种族选择页不再只是文字卡。
- 巨魔卡有明确怪物血脉感。
- 四个征兵目标视觉气质明显不同。
- 公会判定页的录取 / 见习 / 转岗 / 黑名单 / 荒诞通过有不同氛围。
- 缺图 fallback 不报错，浏览器 console 无 error / warning。
