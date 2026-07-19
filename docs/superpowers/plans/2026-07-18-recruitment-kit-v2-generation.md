# 世界征召令 UI Kit v2 分层生成计划

> **面向 AI 代理的工作者：** 按任务顺序执行；每完成一层素材后再替换进页面并目视确认。步骤用复选框跟踪。

**目标：** 按已确认的整页设计图 `assets/ui/design-mocks/world-recruitment-redesign-v1.png`，从底板开始逐层生成可替换 UI 素材，接入 `world-recruitment-prototype.html`，使首屏气质对齐设计图与 `docs/征兵式UI界面大改需求.md`。

**架构：** 新建独立素材包 `assets/ui/recruitment-kit-v2/`（不直接覆盖旧 kit，便于回退）。页面通过路径替换引用 v2。素材分「可平铺底板 / 可复用面板 / 徽章图标 / 前景装饰 / 控件底板」五类；文字尽量由 HTML 叠加，生图优先留白底板。设计稿中可辨识的地图碎片、叠纸、固定件、种族/职业徽章、信息区城堡素描与两组功能图标均须有明确实现来源，不得在执行阶段临时省略。

**技术栈：** 内置生图（代理 `GROUP_DISABLED` 恢复前不用代理）→ 必要时白底抠图（Pillow）→ 静态页 `world-recruitment-prototype.html` + `server.js:4174`

**设计基准：**
- 方向 A：羊皮纸公会风升级，少套框、像一张完整征召海报
- 文档禁止：问卷首页、落地页、紫蓝科技风、首屏信息抢注意力
- 现有种族立绘继续用 `assets/recruitment/generated/*`，本计划不重生四种族人物

---

## 文件结构

| 路径 | 职责 |
|---|---|
| `assets/ui/design-mocks/world-recruitment-redesign-v1.png` | 已确认整页基准图（只读） |
| `assets/ui/recruitment-kit-v2/` | 新素材输出目录 |
| `assets/ui/recruitment-kit-v2/manifest.json` | 素材清单、角色、尺寸约定 |
| `assets/ui/recruitment-kit-v2/_prompts/` | 各层英文提示词存档 |
| `world-recruitment-prototype.html` | 替换 `recruitment-kit/` → `recruitment-kit-v2/` 并微调 CSS |
| `docs/superpowers/plans/2026-07-18-recruitment-kit-v2-generation.md` | 本计划 |

旧包 `assets/ui/recruitment-kit/` 保留不动，直到 v2 验收通过。

---

## 分层总览（生成顺序 = 替换顺序）

```
L0  场景底板          wood_table.png
L1  主羊皮纸海报      parchment_poster.png
L2  纸面做旧纹理      grunge_texture.png
L3  背景叠纸与地图    paper_scraps.png / document_stack.png / map_fragment.png
L4  标题区底板        title_plaque.png
L5  侧挂会旗          guild_banner.png
L6  双菱形纹章        crest_sword.png / crest_lion.png
L7  固定件            brass_tack.png / iron_nail.png
L8  种族卡外框        race_frame.png (+ race_frame_selected.png)
L9  种族专属徽章×4   race_crest_human.png / race_crest_elf.png / race_crest_half_orc.png / race_crest_tiefling.png
L10 职业卡底板        career_card.png
L11 职业徽章组        career_crest_*.png（12 个职业）
L12 页签底板          panel_tab.png (+ panel_tab_active.png)
L13 页签图标组        tab_icon_*.png（5 枚）
L14 信息面板纸        info_panel.png / guild_city_sketch.png
L15 征召目的图标组    mission_icon_*.png（5 枚）
L16 接受征召条        accept_bar.png / accept_emblem.png
L17 印章与前景道具    wax_seal.png / today_recruit_stamp.png / candle.png / inkwell_quill.png / compass_coin.png
L18 选中环（可选）    ornate_ring.png
```

**原则：**
1. 先 L0–L3 铺底，页面已能换肤再往上加；叠纸与地图必须位于交互内容之下。
2. 带透明需求的（旗、纹章、图标、固定件、蜡封、道具、选中环）白底或纯色底生成，再抠透明。
3. 带文字的底板尽量不烧字进图；标题「世界征召令」由 HTML 叠字，保证可改文案。
4. 每层：生成 → 落盘 → 改一处 CSS 引用 → 浏览器刷新确认 → 再下一层。
5. 同族/同职业图标必须共用一套线宽、金属材质、明暗方向与外轮廓规则；优先生成统一 source sheet 后切分，避免风格漂移。
6. `today_recruit_stamp.png` 只生成红色油墨边框与磨损纹理，「今日征召」仍由 HTML 叠字；会旗及所有卡片同理不烧中文。

**建议尺寸：**

| 素材 | 建议尺寸 | 透明 |
|---|---|---|
| wood_table | 1920×1080 | 否 |
| parchment_poster | 1536×2048 或 1024×1536 | 边缘可透 |
| grunge_texture | 1024×1024 可平铺 | 半透明优先 |
| paper_scraps / document_stack | 1024×1024 | 是 |
| map_fragment | 768×768 | 是 |
| title_plaque | 1536×512 | 边缘可透 |
| guild_banner | 512×1536 | 是 |
| crest_* | 512×512 | 是 |
| brass_tack / iron_nail | 256×256 | 是 |
| race_frame* | 768×1152 | 是（中空） |
| race_crest_* | 384×384 | 是 |
| career_card | 768×1152 | 边缘可透 |
| career_crest_* | 256×256 | 是 |
| panel_tab* | 768×256 | 边缘可透 |
| tab_icon_* / mission_icon_* | 256×256 | 是 |
| info_panel | 1536×768 | 边缘可透 |
| guild_city_sketch | 768×512 | 是或 multiply 友好浅底 |
| accept_bar | 1536×384 | 边缘可透 |
| accept_emblem | 384×384 | 是 |
| wax_seal / today_recruit_stamp / props / ring | 512–768 方图 | 是 |

---

### 任务 0：目录与清单骨架

**文件：**
- 创建：`assets/ui/recruitment-kit-v2/manifest.json`
- 创建：`assets/ui/recruitment-kit-v2/_prompts/`

- [x] **步骤 1：** 确认设计图存在且为当前确认版
- [x] **步骤 2：** 写入 `manifest.json`（列出上表全部 id，file 先占位，status=`pending`）
- [x] **步骤 3：** 向用户确认本计划分层清单无增删后，再开始任务 1

---

### 任务 1：L0 木桌场景底板

**文件：**
- 创建：`assets/ui/recruitment-kit-v2/wood_table.png`
- 创建：`assets/ui/recruitment-kit-v2/_prompts/wood_table.txt`
- 修改：`world-recruitment-prototype.html`（`body` 背景改为木桌图）

- [x] **步骤 1：** 按设计图提示词生成深色纵纹木桌（无 UI 控件、无文字）
- [x] **步骤 2：** 落盘并在 manifest 标 `ready`
- [x] **步骤 3：** CSS：`body` 使用 `wood_table` cover；暂时保留旧羊皮纸内容区
- [x] **步骤 4：** 浏览器打开 `/world-recruitment-prototype.html` 确认木桌铺满且不抢内容对比度

---

### 任务 2：L1–L3 主羊皮纸海报 + 做旧纹理 + 背景叠纸/地图

**文件：**
- 创建：`parchment_poster.png`、`grunge_texture.png`、`paper_scraps.png`、`document_stack.png`、`map_fragment.png` + prompts
- 修改：prototype 中 `.app` / `.paper-grain` / 主内容区背景

- [x] **步骤 1：** 生成空白主海报：老化羊皮、毛边/微焦边、图钉感，**中央大面积留白**供叠 UI
- [x] **步骤 2：** 生成可平铺 grunge（网点/纤维，低对比，适合 multiply）
- [x] **步骤 3：** 生成主海报后方的零散旧纸、右侧卷宗叠层及右上角卷边地图碎片；三者透明底、无文字、不可遮挡内容
- [x] **步骤 4：** 替换旧 `parchment.png` / `grunge_texture.png` 引用为 v2，并把叠纸/地图放在主交互层下方
- [x] **步骤 5：** 浏览器确认：整体像「多份公会卷宗铺在木桌上，主征召令钉在最上层」，而非一张孤立矩形背景

---

### 任务 3：L4–L7 标题区与固定件（牌 + 会旗 + 双纹章 + 图钉铁钉）

**文件：**
- 创建：`title_plaque.png`、`guild_banner.png`、`crest_sword.png`、`crest_lion.png`、`brass_tack.png`、`iron_nail.png`
- 修改：`header` 结构与 CSS（可用伪元素或 `<img>` 挂旗/纹章）

- [ ] **步骤 1：** 标题牌——横幅装饰底板，**无大字**（或极淡水印），左右预留纹章位
- [ ] **步骤 2：** 竖挂会旗——透明底，生成金色工会罗盘徽记与边饰，但不生成中文；「世界冒险者工会」由 HTML 叠字
- [ ] **步骤 3：** 双菱形纹章（剑盾 / 狮首），透明底，对称
- [ ] **步骤 4：** 生成可重复使用的黄铜圆图钉与黑铁钉，透明底，尺寸和光向统一
- [ ] **步骤 5：** 接入 header：HTML 仍渲染「世界征召令」标题字；图钉固定标题牌，铁钉用于海报边缘/职业卷宗
- [ ] **步骤 6：** 浏览器确认标题区接近设计图，不压住种族卡，固定件不拦截点击（`pointer-events:none`）

---

### 任务 4：L8–L9 种族卡外框与四族徽章

**文件：**
- 创建：`race_frame.png`、`race_frame_selected.png`
- 创建：`race_crest_human.png`、`race_crest_elf.png`、`race_crest_half_orc.png`、`race_crest_tiefling.png`
- 修改：`.character-figure` / `.character-art` 边框改为 frame 素材；立绘仍用现有 webp

- [ ] **步骤 1：** 默认框——深色锻铁/暗金边，**中空透明**，竖向 2:3
- [ ] **步骤 2：** 选中框——同构图加金边辉光，仍中空
- [ ] **步骤 3：** 在同一 source sheet 生成四族徽章：人类罗盘/星芒、精灵叶纹、半兽人骷髅/獠牙、提夫林火焰/角；切成四张透明 PNG
- [ ] **步骤 4：** CSS：`mask`/`border-image` 或绝对定位 frame 叠在立绘上；同一族徽章同时用于卡片底部圆章与下方种族说明盾牌
- [ ] **步骤 5：** 选人类验证金框；未选保持暗框；确认四卡、四徽章风格统一且对齐

---

### 任务 5：L10–L11 职业卡底板与职业徽章

**文件：**
- 创建：`career_card.png`
- 创建：`career_crest_fighter.png`、`career_crest_bard.png`、`career_crest_artificer.png`、`career_crest_paladin.png`、`career_crest_ranger.png`、`career_crest_wizard.png`、`career_crest_druid.png`、`career_crest_rogue.png`、`career_crest_barbarian.png`、`career_crest_cleric.png`、`career_crest_warlock.png`、`career_crest_sorcerer.png`
- 修改：`.career-card` 背景

- [ ] **步骤 1：** 生成拍立得/羊皮职业卡空白底板（上图下文留白，无具体职业名）
- [ ] **步骤 2：** 在统一 source sheet 生成 12 枚职业盾徽，统一盾形轮廓、旧金属线宽与底色规则，再切分透明 PNG
- [ ] **步骤 3：** 替换 `.career-card` / back 堆叠背景；复用 `career_card.png` 构成右侧后方卡叠层，职业名和英文名仍由 HTML 渲染
- [ ] **步骤 4：** 浏览器选种族后确认叠卡、职业徽章与现有职业插画匹配，后方卡仍能辨识为不同职业

---

### 任务 6：L12–L15 页签、图标、信息面板与城堡素描

**文件：**
- 创建：`panel_tab.png`、`panel_tab_active.png`、`info_panel.png`、`guild_city_sketch.png`
- 创建：`tab_icon_guild.png`、`tab_icon_races.png`、`tab_icon_purpose.png`、`tab_icon_notice.png`、`tab_icon_benefits.png`
- 创建：`mission_icon_guard.png`、`mission_icon_explore.png`、`mission_icon_hunt.png`、`mission_icon_resources.png`、`mission_icon_knowledge.png`
- 修改：`.panel-tab`、`.panel-content`

- [ ] **步骤 1：** 默认页签（浅色纸签）与激活页签（深褐+金边）各一张，无字或弱字
- [ ] **步骤 2：** 生成五枚页签图标：罗盘/公会、人物/种族、靶心/目的、卷轴/须知、月桂/权益；统一深褐线稿透明底
- [ ] **步骤 3：** 生成信息区浅色纸面板与公会城市/城堡钢笔素描；素描独立透明层，便于 mobile 隐藏
- [ ] **步骤 4：** 生成五枚征召目的图标：盾牌、探索罗盘、骷髅、麦穗/资源、书本；统一外框和线宽
- [ ] **步骤 5：** 接入后确认五页签切换可读、激活态明显；信息区图标和城堡素描不抢正文

---

### 任务 7：L16 接受征召条与按钮徽记

**文件：**
- 创建：`accept_bar.png`、`accept_emblem.png`
- 修改：`.accept-btn`

- [ ] **步骤 1：** 宽横条深褐金边底板，中央偏左预留纹章位，**无按钮文案**
- [ ] **步骤 2：** 生成扁平金色罗盘/公会徽记 `accept_emblem.png`；不可直接拿左下角实体 `compass_coin.png` 代替
- [ ] **步骤 3：** 替换虚线旧按钮皮；文案仍由 JS 写入
- [ ] **步骤 4：** 未选/已选两态对比确认

---

### 任务 8：L17–L18 印章、前景道具与选中环

**文件：**
- 创建：`wax_seal.png`、`today_recruit_stamp.png`、`candle.png`、`inkwell_quill.png`、`compass_coin.png`、`ornate_ring.png`（可选）
- 修改：角标装饰位、`.wax-seal`、`.selection-ring`

- [ ] **步骤 1：** 蜡封印（红蜡，透明底）
- [ ] **步骤 2：** 纸面红色油墨印章边框（透明底、无中文），由 HTML 在中央叠加「今日征召」；不可与立体蜡封混用
- [ ] **步骤 3：** 蜡烛、墨水瓶羽笔、实体罗盘币——透明底小道具
- [ ] **步骤 4：** 选中环（若 L8 选中框已够用可跳过）
- [ ] **步骤 5：** 定位到桌面四角/盖章位，mobile 可降级隐藏地图、叠纸、城堡素描及前景道具以免挤爆

---

### 任务 9：全页替换验收

**文件：**
- 修改：`manifest.json` 全部 `ready`
- 修改：prototype 中不再引用 `recruitment-kit/`（v1）

- [ ] **步骤 1：** 全文搜索确认无残留旧路径（除注释/文档）
- [ ] **步骤 2：** 桌面宽度验收：对照设计图 9 条清单（见下）
- [ ] **步骤 3：** 窄屏（≤520px）验收：道具可藏、主流程可点
- [ ] **步骤 4：** 走通：选种族 → 选职业 → 接受征召 → 跳转体魄鉴定

**对照验收清单：**
1. 第一眼是征召海报钉在木桌上，不是问卷
2. 主海报后方能看到旧纸/卷宗层次，右上角有卷边地图碎片
3. 标题区有牌/会旗/双纹章气质，字仍清晰，图钉与铁钉的光向统一
4. 四人种卡框统一，选中金框可读；四族专属徽章与当前种族正确对应
5. 职业叠卡像实体纸片，12 个职业徽章与职业名称正确对应
6. 五个主页签像纸签/木签，图标语义正确，激活态清楚
7. 信息面板左侧有公会城市/城堡素描，五个征召目的各有对应图标
8. 「今日征召」呈红色纸面油墨章，不与立体蜡封混淆
9. 接受条像公会条令横幅，并使用扁平罗盘徽记而非实体罗盘币
10. 蜡烛、墨水瓶羽笔、罗盘币、蜡封与地图等装饰位置接近设计稿
11. 无紫蓝科技风、无现代 stock 感
12. 首屏信息不互相抢（叠纸/固定件/道具 `pointer-events:none`，不挡点击）
13. 旧 kit 仍可回退

### 设计图元素覆盖矩阵

| 设计图可见元素 | 计划素材或实现方式 | 所属任务 |
|---|---|---|
| 深色木桌 | `wood_table.png` | 任务 1 |
| 主羊皮纸及纸面颗粒 | `parchment_poster.png` + `grunge_texture.png` | 任务 2 |
| 海报后方零散旧纸、右侧卷宗 | `paper_scraps.png` + `document_stack.png` | 任务 2 |
| 右上角卷边地图 | `map_fragment.png` | 任务 2 |
| 顶部标题横幅 | `title_plaque.png` + HTML 标题 | 任务 3 |
| 左侧工会会旗及金色标志 | `guild_banner.png` + HTML 文字 | 任务 3 |
| 剑盾/狮首双菱形纹章 | `crest_sword.png` + `crest_lion.png` | 任务 3 |
| 标题、海报与卡片固定件 | `brass_tack.png` + `iron_nail.png` | 任务 3 |
| 四张种族卡、选中金框 | `race_frame.png` + `race_frame_selected.png` + 既有四族立绘 | 任务 4 |
| 四族卡底圆章及说明区盾徽 | `race_crest_*.png`，同族复用 | 任务 4 |
| 主职业卡与右侧叠卡 | `career_card.png` + 既有职业场景插画 | 任务 5 |
| 主卡/叠卡职业盾徽 | `career_crest_*.png`（12 枚） | 任务 5 |
| 五个主页签及其图标 | `panel_tab*.png` + `tab_icon_*.png` + HTML 文字 | 任务 6 |
| 信息区羊皮纸与城堡素描 | `info_panel.png` + `guild_city_sketch.png` | 任务 6 |
| 五项征召目的图标 | `mission_icon_*.png` + HTML 文字 | 任务 6 |
| 底部接受征召横条 | `accept_bar.png` + `accept_emblem.png` + JS 文案 | 任务 7 |
| 红色立体蜡封 | `wax_seal.png` | 任务 8 |
| 「今日征召」纸面油墨章 | `today_recruit_stamp.png` + HTML 中文 | 任务 8 |
| 左下蜡烛与实体罗盘币 | `candle.png` + `compass_coin.png` | 任务 8 |
| 右下墨水瓶与羽笔 | `inkwell_quill.png` | 任务 8 |
| 可选圆形选中装饰 | `ornate_ring.png` | 任务 8 |

执行任务 9 前，逐行检查本矩阵；除标注“可选”的选中环外，每行必须有实际文件或已接入的 HTML/CSS 实现。

---

## 生图通道约定

1. **优先：** Cursor 内置 `GenerateImage`（当前可用）
2. **代理：** `proxy-imagegen-cutout` 仅在 `models` 不再返回 `GROUP_DISABLED` 后启用；启用后透明件走绿幕+`cutout`
3. **每张图：** prompt 存 `_prompts/<id>.txt`；输出文件名与 manifest 一致
4. **失败重试：** 同层最多 2 次；仍不行则该层改用 CSS 近似，不阻塞下一层

---

## 明确不做（本计划范围外）

- 不重做四种族立绘与职业场景插画（已有 `assets/recruitment/generated/`）
- 不把设计图一次性当整页背景糊上去冒充完成
- 不改主站检验题流程（仅征召令页换肤 + 已有跳转保持）
- 不在未逐层确认前批量生成全部道具

---

## 执行节奏建议

| 批次 | 任务 | 预计 |
|---|---|---|
| 第 1 批 | 任务 0–2（底板可见） | 先出「桌+主纸+叠纸+地图」 |
| 第 2 批 | 任务 3–4（标题/固定件+种族框/族徽） | 主视觉成型 |
| 第 3 批 | 任务 5–7（职业卡/两组图标/信息区/接受条） | 可完整交互换肤 |
| 第 4 批 | 任务 8–9（印章/道具+覆盖矩阵验收） | 收尾 |

每批结束后停一下，等你点头再进入下一批。

---

## 下一步

请确认本计划分层清单是否 OK。确认后从 **任务 0 + 任务 1（木桌底板）** 开始执行。
