# 其他种族征召题目文案 Gemini 生成需求

## 当前验证结论

已检查 `data`、`docs` 和 `app.js` 的征召相关接入点。

当前正式征召题库只有一套完整数据：

- 文件：`data/race-recruitment-troll.js`
- 种族：`troll / 巨魔`
- 征召目标：4 个
- 体格鉴定：5 题
- 职业试炼：4 条路线，每条 7 题
- 结局模板：20 条
- MBTI 演法滤镜：4 组

当前多种族已经有图片卡和首页预览，但没有对应的正式题目文案。也就是说，非巨魔种族进入正式征召时，如果不做拦截或补数据，会继续读巨魔样板题库，导致“人类出现巨魔式再生/怪物身体选项”这类问题。

## 需要补齐的种族

巨魔 `troll` 已有完整样板，本轮不要重复生成。需要补齐以下 11 个种族：

| raceId | 中文名 | 当前项目关键词 |
| --- | --- | --- |
| `human` | 人类 | 适应力、野心、短寿种 |
| `elf` | 精灵 | 长寿感、敏锐感官、优雅 |
| `drow` | 暗精灵 | 幽暗地域、潜行、危险魅力 |
| `dwarf` | 矮人 | 耐受、工艺、氏族 |
| `halfling` | 半身人 | 小型、幸运、低存在感 |
| `gnome` | 侏儒 | 机关、幻术、好奇心 |
| `half_orc` | 半兽人 | 压迫感、反扑、蛮力 |
| `tiefling` | 提夫林 | 异界烙印、禁忌气质、身份张力 |
| `dragonborn` | 龙裔 | 威仪、吐息、荣耀 |
| `goliath` | 哥利亚 | 山岳、强壮、竞赛文化 |
| `ogre_giant` | 食人魔 / 巨人 | 巨体、承重、空间限制 |

## 建议一轮只生成一个种族

为了避免上下文超限和风格漂移，请一次只让 Gemini 生成一个种族。建议顺序：

1. `human`
2. `elf`
3. `drow`
4. `dwarf`
5. `halfling`
6. `gnome`
7. `half_orc`
8. `tiefling`
9. `dragonborn`
10. `goliath`
11. `ogre_giant`

## 非巨魔征召目标 ID

非巨魔建议统一使用 `guild_*` 目标 ID，避免混用巨魔样板里的 `barbarian_camp / fighter_line / warlock_contract / druid_mutation_circle`。

| 职业 | targetId |
| --- | --- |
| 法师 | `guild_wizard` |
| 战士 | `guild_fighter` |
| 游荡者 | `guild_rogue` |
| 游侠 | `guild_ranger` |
| 牧师 | `guild_cleric` |
| 德鲁伊 | `guild_druid` |
| 圣武士 | `guild_paladin` |
| 吟游诗人 | `guild_bard` |
| 术士 | `guild_warlock` |
| 武僧 | `guild_monk` |
| 野蛮人 | `guild_barbarian` |
| 工匠 | `guild_artificer` |

## 每个种族推荐的 4 条路线

这些路线来自当前首页“今日可投”的联动设定，生成题库时请保持一致。

| raceId | 4 条征召路线 |
| --- | --- |
| `human` | `guild_fighter`, `guild_bard`, `guild_artificer`, `guild_paladin` |
| `elf` | `guild_ranger`, `guild_wizard`, `guild_druid`, `guild_rogue` |
| `drow` | `guild_rogue`, `guild_warlock`, `guild_bard`, `guild_ranger` |
| `dwarf` | `guild_fighter`, `guild_cleric`, `guild_artificer`, `guild_paladin` |
| `halfling` | `guild_rogue`, `guild_bard`, `guild_ranger`, `guild_cleric` |
| `gnome` | `guild_artificer`, `guild_wizard`, `guild_rogue`, `guild_bard` |
| `half_orc` | `guild_barbarian`, `guild_fighter`, `guild_paladin`, `guild_ranger` |
| `tiefling` | `guild_warlock`, `guild_bard`, `guild_wizard`, `guild_rogue` |
| `dragonborn` | `guild_paladin`, `guild_fighter`, `guild_warlock`, `guild_cleric` |
| `goliath` | `guild_barbarian`, `guild_fighter`, `guild_monk`, `guild_ranger` |
| `ogre_giant` | `guild_barbarian`, `guild_fighter`, `guild_druid`, `guild_warlock` |

## 单个种族需要生成的内容

每个种族都要生成一个完整 JSON 对象，结构对齐 `data/race-recruitment-troll.js`，但不要带 `window.RACE_RECRUITMENT_DATA = Object.freeze(...)` 包裹。

每个种族必须包含：

- `meta`
- `raceCard`
- `recruitTargets`：4 个目标
- `physiqueChecks`：5 道种族体格 / 血脉鉴定题
- `trialSets`：4 条路线，每条 7 道职业试炼题
- `endingTemplates`：20 条结局模板
- `mbtiFilters`：NT / NF / SJ / SP 共 4 组

每道题必须有 4 个选项，选项 ID 用 `A/B/C/D`。

## 字段结构

```json
{
  "meta": {
    "version": 1,
    "raceId": "human",
    "raceNameZh": "人类",
    "scope": "race_recruitment_full"
  },
  "raceCard": {
    "raceId": "human",
    "raceNameZh": "人类",
    "raceNameEn": "Human",
    "title": "",
    "oneLine": "",
    "bodyText": "",
    "tags": [],
    "warningText": "",
    "recruiterQuote": ""
  },
  "recruitTargets": [
    {
      "targetId": "guild_fighter",
      "classNameZh": "战士训练厅",
      "classNameEn": "Fighter Guild",
      "title": "",
      "oneLine": "",
      "recruiter": "",
      "recruitPitch": "",
      "acceptedStyle": "",
      "likelyFailure": "",
      "hiddenRoute": "",
      "recommendedStats": ["str", "con"],
      "riskTags": []
    }
  ],
  "physiqueChecks": [],
  "trialSets": {
    "guild_fighter": []
  },
  "endingTemplates": [],
  "mbtiFilters": []
}
```

### 问题字段

```json
{
  "id": "human_physique_1",
  "targetId": "guild_fighter",
  "title": "",
  "scene": "",
  "prompt": "",
  "options": [
    {
      "id": "A",
      "text": "",
      "npcReply": "",
      "scoreDelta": { "str": 1, "con": 1 },
      "mbtiDelta": { "S": 1, "J": 1 },
      "affinityDelta": { "guild_fighter": 2 },
      "alignmentDelta": { "lawful": 1, "order": 1 },
      "triggerTags": [],
      "outcomeTone": "合格",
      "branchHint": ""
    }
  ]
}
```

可用 `scoreDelta` 键：`str`, `dex`, `con`, `int`, `wis`, `cha`。

可用 `mbtiDelta` 键：`E`, `I`, `S`, `N`, `T`, `F`, `J`, `P`。

可用 `alignmentDelta` 键：`lawful`, `chaotic`, `good`, `self`, `action`, `empathy`, `order`, `risk`, `expression`, `control`。

`affinityDelta` 必须使用本种族 4 条路线的 `targetId`，允许少量指向其他路线来制造“转岗推荐”。

`outcomeTone` 建议只用：`合格`, `偏离`, `危险`, `荒诞`。

## 结局模板要求

每个种族 20 条：

- `accepted`：4 条，每条对应一条正向录取路线
- `probation`：4 条，见习 / 编外 / 试用
- `transferred`：4 条，转岗推荐，必须包含 `rejectedClass`
- `blacklisted`：4 条，黑名单 / 拒录，但仍能形成可演角色
- `absurdAccepted`：4 条，荒诞通过，不是烂梗，要能上桌

每条结局字段：

```json
{
  "endingId": "human_accepted_fighter",
  "endingType": "accepted",
  "title": "",
  "verdictLine": "",
  "explanation": "",
  "tableFunction": "",
  "playableFlaw": "",
  "nextHook": "",
  "recommendedClass": ["guild_fighter"],
  "rejectedClass": "guild_bard",
  "tags": []
}
```

`rejectedClass` 只在 `transferred` 结局中必填，其他类型可以省略。

## MBTI 滤镜要求

每个种族 4 组：`NT`, `NF`, `SJ`, `SP`。

字段：

```json
{
  "groupId": "NT",
  "title": "",
  "oneLine": "",
  "evaluationStyle": "",
  "guild_fighterFlavor": "",
  "guild_bardFlavor": "",
  "guild_artificerFlavor": "",
  "guild_paladinFlavor": "",
  "riskText": ""
}
```

注意：Flavor 字段名要对应本种族的 4 个 `targetId`，格式为 `${targetId}Flavor`。

## 风格要求

- 维持巨魔样板的暗黑奇幻卡牌感、征兵处、公会档案、跑团可演角色风格。
- 可以有黑色幽默和 NPC 吐槽，但不要变成网络烂梗堆砌。
- 失败也要成为“可演角色归宿”，不要羞辱玩家本人。
- 每个种族都要有自己的血脉问题，不要只是把巨魔换名。
- 人类应该偏“适应力、野心、公会与职业选择”，不要出现巨魔再生、断肢、吃人、怪物外壳之类选项。
- 精灵偏长寿、感官、审美、疏离感。
- 暗精灵偏幽暗地域、潜行、社交博弈、危险魅力，但避免扁平邪恶。
- 矮人偏耐受、工艺、氏族、重心和承诺。
- 半身人偏小型、幸运、低存在感和险境生存。
- 侏儒偏机关、幻术、好奇心和灵活解法。
- 半兽人偏压迫感、伤后反扑、直接行动和自证。
- 提夫林偏异界烙印、禁忌气质、交易感和身份张力。
- 龙裔偏威仪、吐息、荣耀和血脉压力。
- 哥利亚偏山岳体格、竞赛文化、沉默承压。
- 食人魔 / 巨人偏巨体、承重、空间限制和文明适配困难；可以笨拙但不能写成现实智力羞辱。

## 禁止事项

- 不要生成图片提示词。
- 不要生成页面代码。
- 不要输出 Markdown 解释，最终只输出 JSON。
- 不要把巨魔专属元素套给其他种族：再生、断肢重长、啃桌子、吃队友、畸形肉体、野性饥饿等。
- 不要写现实身体羞辱、现实疾病羞辱、智力羞辱。
- 不要让所有选项都导向同一个职业，必须能区分正向、偏离、危险和荒诞路线。

## 可直接复制给 Gemini 的总控提示

```text
你是一个 DND 跑团风格游戏文案设计师。请基于“冒险者公会征召测试”的结构，生成一个种族的完整征召题库 JSON。

重要：一次只生成我指定的一个 raceId，不要生成其他种族。不要生成图片提示词，不要生成代码，不要输出 Markdown 解释，只输出严格 JSON。

整体风格：暗黑奇幻卡牌感、征兵处、公会档案、跑团可演角色、带一点黑色幽默和 NPC 吐槽。失败也要成为有趣的角色归宿，不要羞辱玩家本人。

请对齐以下结构：
- meta
- raceCard
- recruitTargets：4 个目标
- physiqueChecks：5 道种族体格/血脉鉴定题
- trialSets：4 条路线，每条 7 道职业试炼题
- endingTemplates：20 条结局模板
- mbtiFilters：NT / NF / SJ / SP 共 4 组

每道题必须有 4 个选项 A/B/C/D。每个选项必须包含：
- text
- npcReply
- scoreDelta，键只能用 str/dex/con/int/wis/cha
- mbtiDelta，键只能用 E/I/S/N/T/F/J/P
- affinityDelta，键必须使用本种族 4 条路线的 targetId
- alignmentDelta，键只能用 lawful/chaotic/good/self/action/empathy/order/risk/expression/control
- triggerTags
- outcomeTone，只用 合格/偏离/危险/荒诞
- branchHint

结局模板 20 条：
- accepted 4 条
- probation 4 条
- transferred 4 条，必须有 rejectedClass
- blacklisted 4 条
- absurdAccepted 4 条

请不要把巨魔专属元素套给其他种族：再生、断肢重长、吃人、怪物外壳、野性饥饿、畸形肉体等都不能乱用。每个种族必须有自己的血脉与社会处境问题。

下面是本次要生成的种族：
raceId: <填入 raceId>
raceNameZh: <填入中文名>
raceNameEn: <填入英文名>
种族关键词: <填入关键词>
4 条征召路线 targetId: <填入 4 个 guild_* targetId>

请直接输出完整 JSON。
```

