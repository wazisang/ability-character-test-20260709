# 种族征兵流程 Gemini 生成结果接入前审查报告

审查对象：

- `种族征兵流程_龙裔样板_Gemini生成结果.json`
- `种族征兵流程_人类样板_Gemini生成结果.json`
- `种族征兵流程_提夫林样板_Gemini生成结果.json`
- `种族征兵流程_亡灵样板_Gemini生成结果.json`
- `种族征兵流程_战俑样板_Gemini生成结果.json`
- `种族征兵流程_矮人样板_Gemini生成结果.json`
- `种族征兵流程_半身人样板_Gemini生成结果.json`
- `种族征兵流程_半兽人样板_Gemini生成结果.json`
- `种族征兵流程_地精样板_Gemini生成结果.json`
- `种族征兵流程_精灵样板_Gemini生成结果.json`
- `种族征兵流程_巨魔样板_Gemini生成结果.json`

## 总结结论

当前不建议直接接入。

原因不是单纯文风问题，而是多数 JSON 与当前项目读取结构不兼容。项目正式征召流程需要完整结构：

- `meta`
- `raceCard`
- `recruitTargets`
- `physiqueChecks`
- `trialSets`
- `endingTemplates`
- `mbtiFilters`

并且需要：

- 4 个征召目标
- 5 道体格鉴定
- 4 条 `trialSets`，每条 7 道职业试炼题
- 20 条结局模板
- 4 组 `mbtiFilters`: `NT / NF / SJ / SP`

目前只有巨魔样板已经在项目中有可用版本。新提交的文件里，精灵接近完整，人类内容量接近完整但结构放错；其他多个文件是旧格式或片段稿。

## 文件级审查结果

| 文件 | 当前 raceId | 结构结论 | 是否可接入 |
| --- | --- | --- | --- |
| `种族征兵流程_巨魔样板_Gemini生成结果.json` | `troll` | 完整结构；项目里已有整理后的 `data/race-recruitment-troll.js` | 暂不重复接入 |
| `种族征兵流程_精灵样板_Gemini生成结果.json` | `elf` | 题量完整，但有字段兼容问题 | 返修后可接 |
| `种族征兵流程_人类样板_Gemini生成结果.json` | `human` | 内容量接近完整，但缺 `trialSets`，33 道题全塞进 `physiqueChecks` | 必须返修 |
| `种族征兵流程_矮人样板_Gemini生成结果.json` | `dwarf` | 旧格式；缺 `meta/raceCard`，结局只有 7 条，MBTI 格式不兼容 | 必须返修 |
| `种族征兵流程_龙裔样板_Gemini生成结果.json` | `dragonborn` | 旧格式片段；3 体格题、4 试炼题、3 结局 | 必须重生成 |
| `种族征兵流程_提夫林样板_Gemini生成结果.json` | `tiefling` | 旧格式片段；3 体格题、4 试炼题、3 结局 | 必须重生成 |
| `种族征兵流程_半身人样板_Gemini生成结果.json` | `halfling` | 旧格式片段；4 体格题、4 试炼题、3 结局 | 必须重生成 |
| `种族征兵流程_半兽人样板_Gemini生成结果.json` | `orc` | raceId 不匹配项目，应为 `half_orc`；旧格式片段 | 必须重生成 |
| `种族征兵流程_亡灵样板_Gemini生成结果.json` | `undead` | 当前项目未支持该 raceId；旧格式片段 | 暂不接入 |
| `种族征兵流程_战俑样板_Gemini生成结果.json` | `construct` | 当前项目未支持该 raceId；旧格式片段 | 暂不接入 |
| `种族征兵流程_地精样板_Gemini生成结果.json` | `goblin` | 当前项目未支持该 raceId；旧格式片段 | 暂不接入 |

## 主要阻塞问题

### 1. 多数文件仍是旧格式

旧格式示例字段：

- `raceId`
- `raceName`
- `description`
- `recruitTargets[*].id`
- `mbtiFilters[*].axis`
- `mbtiFilters[*].condition`

当前项目需要的是：

- `meta.raceId`
- `raceCard.raceId`
- `raceCard.raceNameZh`
- `recruitTargets[*].targetId`
- `mbtiFilters[*].groupId`
- `${targetId}Flavor`

旧格式不能直接接入页面。

### 2. 题量不足

以下文件明显不是完整稿：

- 龙裔：3 体格题、4 试炼题、3 结局
- 提夫林：3 体格题、4 试炼题、3 结局
- 半身人：4 体格题、4 试炼题、3 结局
- 半兽人：5 体格题、2 试炼题、3 结局
- 亡灵：3 体格题、4 试炼题、3 结局
- 战俑：3 体格题、4 试炼题、3 结局
- 地精：3 体格题、2 试炼题、3 结局

这些必须按完整规格重生成。

### 3. 人类文件结构放错

人类文件有 33 道题，但没有 `trialSets`。

当前结构：

- `physiqueChecks`: 33 道
- `trialSets`: 缺失

应改为：

- `physiqueChecks`: 只保留前 5 道体格鉴定
- `trialSets.guild_fighter`: 7 道
- `trialSets.guild_bard`: 7 道
- `trialSets.guild_artificer`: 7 道
- `trialSets.guild_paladin`: 7 道

人类这份可以让 Gemini 按现有题目重排结构，不必全量重写。

### 4. 精灵文件接近可用，但需要修字段

精灵文件题量完整：

- 4 个目标
- 5 道体格鉴定
- 4 条职业路线，每条 7 道
- 20 条结局
- 4 组 MBTI 滤镜

但有这些问题：

- `trialSets` 内每道职业试炼题缺 `targetId`，需要补成与父级 key 一致。
- 多处 `alignmentDelta` 使用了非法键 `evil`，项目不识别。请改成 `self`、`risk`、`chaotic` 等允许键。
- 多处数值超范围，例如 `int: 4`、`affinityDelta: 4/-4`、`alignmentDelta: 3`。建议范围：
  - `scoreDelta`: -2 到 +3
  - `affinityDelta`: -2 到 +3
  - `mbtiDelta`: -2 到 +2
  - `alignmentDelta`: -2 到 +2
- 部分 `affinityDelta` 和结局 `recommendedClass` 指向本种族 4 条路线以外的职业。如果要保留转岗到外部公会，项目代码也要同步支持这些 `guild_*`；否则请限制在本种族 4 条路线内。

### 5. raceId 与当前项目不一致

当前项目已经有种族卡和页面入口的 raceId：

- `human`
- `elf`
- `drow`
- `dwarf`
- `halfling`
- `gnome`
- `half_orc`
- `tiefling`
- `dragonborn`
- `goliath`
- `troll`
- `ogre_giant`

本批文件中：

- 半兽人写成 `orc`，应改为 `half_orc`
- 战俑写成 `construct`，当前项目没有这个种族
- 亡灵 `undead`，当前项目没有这个种族
- 地精 `goblin`，当前项目没有这个种族

如果要新增亡灵、战俑、地精，需要额外补：

- `FANTASY_ANCESTRIES`
- 种族卡图片
- 首页随机池
- 目标路线表
- 接入映射

否则这三份先不要接入。

### 6. 当前还缺的项目内种族

按现有项目 12 个种族来看，这批文件仍缺：

- `drow` 暗精灵
- `gnome` 侏儒
- `goliath` 哥利亚
- `ogre_giant` 食人魔 / 巨人

这四个需要继续生成完整 JSON。

## Gemini 返修要求

请让 Gemini 对每个要接入项目的种族输出严格 JSON，不要输出旧格式，不要输出说明文字。

### 必须使用的顶层结构

```json
{
  "meta": {},
  "raceCard": {},
  "recruitTargets": [],
  "physiqueChecks": [],
  "trialSets": {},
  "endingTemplates": [],
  "mbtiFilters": []
}
```

### 必须满足的数量

- `recruitTargets`: 4 个
- `physiqueChecks`: 5 道
- `trialSets`: 4 个 key，每个 key 7 道题
- `endingTemplates`: 20 条
- `mbtiFilters`: 4 组，且 `groupId` 必须是 `NT / NF / SJ / SP`

### 必须使用的字段名

- `recruitTargets[*].targetId`，不要用 `id`
- `endingTemplates[*].endingId`
- `endingTemplates[*].endingType`
- `trialSets[targetId][*].targetId`
- `mbtiFilters[*].groupId`
- `mbtiFilters[*].${targetId}Flavor`

### 允许的数值键

`scoreDelta` 只允许：

- `str`
- `dex`
- `con`
- `int`
- `wis`
- `cha`

`mbtiDelta` 只允许：

- `E`
- `I`
- `S`
- `N`
- `T`
- `F`
- `J`
- `P`

`alignmentDelta` 只允许：

- `lawful`
- `chaotic`
- `good`
- `self`
- `action`
- `empathy`
- `order`
- `risk`
- `expression`
- `control`

不要使用 `evil`。邪恶倾向可以用 `self`、`risk`、`chaotic`、`control` 表达。

### outcomeTone 只允许

- `合格`
- `偏离`
- `危险`
- `荒诞`

不要把 `outcomeTone` 写成 `转岗`。转岗倾向可以写在 `branchHint` 里。

## 建议返修顺序

1. 先修人类：把 33 道题拆回 `physiqueChecks + trialSets`。
2. 再修精灵：补 `targetId`，替换 `evil`，修超界数值。
3. 重新生成龙裔、提夫林、半身人、半兽人、矮人。
4. 继续生成缺失的暗精灵、侏儒、哥利亚、食人魔 / 巨人。
5. 亡灵、战俑、地精先不接入，除非确认要新增这些种族入口和图片。

