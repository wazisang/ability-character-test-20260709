const ATTRIBUTES = [
  {
    id: "str",
    abbr: "Str",
    name: "力量",
    theme: "破障试炼",
    color: "#d85d4a",
    intro: "一轮破障检定，看你能不能在短时间内把障碍砸开、连击接住，并控制误触。线上版不做危险体能动作。",
    stages: [
      { id: "str_burst", title: "破障检定", type: "clickWaves", difficulty: "低 / 中 / 高", weight: 1 },
    ],
  },
  {
    id: "dex",
    abbr: "Dex",
    name: "敏捷",
    theme: "影步训练场",
    color: "#72c891",
    intro: "影步、闪避、精细操作和临场回避。敏捷检定更像盗贼过陷阱、游侠穿箭雨。",
    stages: [
      { id: "dex_reaction", title: "影步反应", type: "reactionLadder", difficulty: "低 / 中 / 高", weight: 0.28 },
      { id: "dex_trace", title: "符线临摹", type: "traceLine", difficulty: "中", weight: 0.34 },
      { id: "dex_dodge", title: "弹幕闪避", type: "dodge", difficulty: "低 / 中 / 高", weight: 0.38 },
    ],
  },
  {
    id: "con",
    abbr: "Con",
    name: "体质",
    theme: "耐受核心舱",
    color: "#e4bf62",
    intro: "耐受、恢复、续航和压力下不掉线。体质会结合现实锚点，也会看你能不能把节奏撑到后半场。",
    stages: [
      { id: "con_profile", title: "现实锚点", type: "bodyPanel", difficulty: "锚点校准", weight: 0.36 },
      { id: "con_rhythm", title: "营火节奏", type: "rhythm", difficulty: "低 / 中 / 高", weight: 0.34 },
      { id: "con_focus", title: "耐受稳定条", type: "stability", difficulty: "中 / 高", weight: 0.3 },
    ],
  },
  {
    id: "int",
    abbr: "Int",
    name: "智力",
    theme: "谜题档案室",
    color: "#6ea8df",
    intro: "记忆符文、拆谜题、读线索、做长判断。智力检定更像调查钟楼案和翻古籍。",
    stages: [
      { id: "int_memory", title: "符文记忆", type: "memoryLadder", difficulty: "低 / 中 / 高", weight: 0.28 },
      { id: "int_abstract", title: "谜题归纳", type: "abstractQuiz", difficulty: "中", weight: 0.3 },
      { id: "int_reason", title: "钟楼推理案", type: "reasoningQuiz", difficulty: "高", weight: 0.42 },
    ],
  },
  {
    id: "wis",
    abbr: "Wis",
    name: "感知",
    theme: "观测塔",
    color: "#b08ae0",
    intro: "侦察、察觉、追踪和专注。感知检定看你能不能发现异色、追住目标、按顺序扫完整片场地。",
    stages: [
      { id: "wis_color", title: "异色侦测", type: "colorLadder", difficulty: "低 / 中 / 高", weight: 0.26 },
      { id: "wis_dual", title: "双星追踪", type: "dualBall", difficulty: "低 / 中 / 高", weight: 0.36 },
      { id: "wis_schulte", title: "侦察方格", type: "schulte", difficulty: "低 / 中 / 高 / 极限", weight: 0.38 },
    ],
  },
  {
    id: "cha",
    abbr: "Cha",
    name: "魅力",
    theme: "议会厅",
    color: "#dc78a8",
    intro: "议会发言、酒馆谈判、鼓舞队伍和压住局面。魅力会影响扮演口吻、阵营动机和职业气质。",
    stages: [
      { id: "cha_dialogue", title: "议会交涉", type: "charismaQuiz", difficulty: "中 / 高", weight: 0.58 },
      { id: "cha_alignment", title: "阵营抉择", type: "alignmentQuiz", difficulty: "叙事画像", weight: 0.42 },
    ],
  },
];

const STAGE_DND_FLAVOR = {
  str_burst: {
    check: "力量检定 / Athletics",
    dc: "DC 12 -> 16",
    scene: "攻城门、断锁链、击碎符印",
    stakes: "连击越稳，破阵越干净。",
  },
  dex_reaction: {
    check: "敏捷豁免 / Initiative",
    dc: "DC 11 -> 15",
    scene: "刺客先手、陷阱触发、暗巷影步",
    stakes: "先看命中，再看反应窗口。",
  },
  dex_trace: {
    check: "盗贼工具 / Sleight of Hand",
    dc: "DC 14",
    scene: "符线锁、机关齿轮、地城密门",
    stakes: "贴线越稳，开锁越像专业活。",
  },
  dex_dodge: {
    check: "敏捷豁免 / Acrobatics",
    dc: "DC 12 -> 17",
    scene: "箭雨、飞刃、混战站位",
    stakes: "活到最后，再看擦伤次数。",
  },
  con_profile: {
    check: "体质检定 / Endurance",
    dc: "营地校准",
    scene: "长期冒险、负重行军、恢复状态",
    stakes: "不是评价体型，只给角色卡一个现实锚点。",
  },
  con_rhythm: {
    check: "体质豁免 / Concentration",
    dc: "DC 10 -> 15",
    scene: "营火鼓点、疲劳行军、读条续航",
    stakes: "后半段还跟得上，才算真的撑住。",
  },
  con_focus: {
    check: "体质豁免 / Shield Hold",
    dc: "DC 13",
    scene: "盾墙、压迫、持续专注",
    stakes: "把压力控在安全区，别被节奏推走。",
  },
  int_memory: {
    check: "智力检定 / Arcana",
    dc: "DC 10 -> 16",
    scene: "符文卷轴、古籍抄录、短时记忆",
    stakes: "顺序就是咒语的一部分。",
  },
  int_abstract: {
    check: "智力检定 / Investigation",
    dc: "DC 14",
    scene: "地城机关、类比谜题、结构归纳",
    stakes: "别被道具骗了，看背后的规则。",
  },
  int_reason: {
    check: "智力检定 / Deduction",
    dc: "DC 16",
    scene: "钟楼案、证词交叉、嫌疑排除",
    stakes: "越亮的线索，越可能只是诱饵。",
  },
  wis_color: {
    check: "感知检定 / Perception",
    dc: "DC 10 -> 15",
    scene: "伪装符文、异色印记、暗处异常",
    stakes: "眼睛要快，判断要稳。",
  },
  wis_dual: {
    check: "感知检定 / Tracking",
    dc: "DC 15",
    scene: "星群追踪、人群盯梢、目标锁定",
    stakes: "混乱开始后，目标不会再等你确认。",
  },
  wis_schulte: {
    check: "感知检定 / Search",
    dc: "DC 11 -> 16",
    scene: "地形侦察、格点搜索、顺序扫场",
    stakes: "快不等于乱，顺序才是侦察本事。",
  },
  cha_dialogue: {
    check: "魅力检定 / Persuasion",
    dc: "DC 14",
    scene: "议会厅、酒馆谈判、队伍鼓舞",
    stakes: "说服不是台词漂亮，是局面被你推动。",
  },
  cha_alignment: {
    check: "阵营检定 / Motive",
    dc: "角色动机",
    scene: "密道、神器、长期团核心",
    stakes: "阵营不判好坏，只决定这张卡怎么演。",
  },
};

const INITIAL_TRAITS = {
  E: 0,
  I: 0,
  S: 0,
  N: 0,
  T: 0,
  F: 0,
  J: 0,
  P: 0,
  lawful: 0,
  chaotic: 0,
  good: 0,
  self: 0,
  action: 0,
  empathy: 0,
  order: 0,
  risk: 0,
  expression: 0,
  control: 0,
};

const MBTI_TYPES = [
  "未知",
  "INTJ",
  "INTP",
  "ENTJ",
  "ENTP",
  "INFJ",
  "INFP",
  "ENFJ",
  "ENFP",
  "ISTJ",
  "ISFJ",
  "ESTJ",
  "ESFJ",
  "ISTP",
  "ISFP",
  "ESTP",
  "ESFP",
];

const FANTASY_ANCESTRIES = [
  {
    id: "auto",
    name: "不指定",
    size: "自动",
    label: "交给测试结果",
    note: "不预设种族，结果只按体型、职业和扮演滤镜生成。",
    trait: "开放设定",
    scoreMod: 0,
    tags: ["自由设定", "交给骰子"],
  },
  {
    id: "human",
    name: "人类",
    size: "中型",
    label: "普通类人生物",
    note: "人类锚点强调适应、野心和短寿命带来的行动紧迫感。",
    trait: "适应力",
    scoreMod: 0,
    tags: ["适应力", "野心", "短寿种"],
  },
  {
    id: "elf",
    name: "精灵",
    size: "中型",
    label: "精灵血脉",
    note: "精灵锚点适合写成长寿、审美、敏锐感官和与世界保持距离的优雅感。",
    trait: "敏锐感官",
    scoreMod: 0.04,
    tags: ["长寿感", "敏锐感官", "优雅"],
  },
  {
    id: "drow",
    name: "暗精灵",
    size: "中型",
    label: "幽暗地域血脉",
    note: "暗精灵锚点更适合潜行、社交博弈、危险魅力和地下世界背景。",
    trait: "幽暗适应",
    scoreMod: 0.04,
    tags: ["幽暗地域", "潜行", "危险魅力"],
  },
  {
    id: "dwarf",
    name: "矮人",
    size: "中型",
    label: "山脉氏族血脉",
    note: "矮人锚点强调重心、耐受、工艺、氏族承诺和一锤一锤攒出来的硬底子。",
    trait: "坚韧根基",
    scoreMod: 0.12,
    tags: ["耐受", "工艺", "氏族"],
  },
  {
    id: "halfling",
    name: "半身人",
    size: "小型",
    label: "小型幸运血脉",
    note: "半身人锚点适合低存在感、好运气、灵巧绕行和在大麻烦里活下来的本事。",
    trait: "小型幸运",
    scoreMod: 0.03,
    tags: ["小型", "幸运", "低存在感"],
  },
  {
    id: "gnome",
    name: "侏儒",
    size: "小型",
    label: "机关与幻术血脉",
    note: "侏儒锚点适合好奇心、机关直觉、幻术玩心和小体型带来的灵活解法。",
    trait: "机巧脑袋",
    scoreMod: 0.03,
    tags: ["机关", "幻术", "好奇心"],
  },
  {
    id: "half_orc",
    name: "半兽人",
    size: "中型",
    label: "蛮力与求生血脉",
    note: "半兽人锚点强调压迫感、伤后反扑、直接行动和被误解后的自证欲。",
    trait: "伤后反扑",
    scoreMod: 0.1,
    tags: ["压迫感", "反扑", "蛮力"],
  },
  {
    id: "tiefling",
    name: "提夫林",
    size: "中型",
    label: "异界血脉",
    note: "提夫林锚点适合禁忌气质、被凝视的身份、交易感和不愿被出身定义的张力。",
    trait: "异界烙印",
    scoreMod: 0.02,
    tags: ["异界烙印", "禁忌气质", "身份张力"],
  },
  {
    id: "dragonborn",
    name: "龙裔",
    size: "中型",
    label: "龙血氏族",
    note: "龙裔锚点强调威仪、吐息、荣耀感和把血脉压力扛成正面气场。",
    trait: "龙血威仪",
    scoreMod: 0.1,
    tags: ["威仪", "吐息", "荣耀"],
  },
  {
    id: "goliath",
    name: "哥利亚",
    size: "中型+",
    label: "山岳巨人后裔",
    note: "哥利亚锚点适合高海拔生存、竞赛文化、强壮体格和用沉默扛住压力。",
    trait: "山岳体格",
    scoreMod: 0.14,
    tags: ["山岳", "强壮", "竞赛文化"],
  },
  {
    id: "troll",
    name: "巨魔",
    size: "大型",
    label: "再生怪物血脉",
    note: "巨魔锚点适合再生、怪物体魄、吓人的外壳，以及力量与体质不匹配时的反差戏。",
    trait: "再生外壳",
    scoreMod: 0.18,
    tags: ["再生", "怪物感", "体质反差"],
  },
  {
    id: "ogre_giant",
    name: "食人魔 / 巨人",
    size: "大型",
    label: "巨体血脉",
    note: "食人魔或巨人锚点适合高承重、高压迫感、地城适配困难，以及大体型带来的可演代价。",
    trait: "巨体压迫",
    scoreMod: 0.2,
    tags: ["巨体", "承重", "空间限制"],
  },
];

const MBTI_ARCHETYPES = {
  INTJ: { job: "战略法师", face: "冷静、长线布局、星盘与黑金法袍" },
  INTP: { job: "秘仪研究者", face: "散漫学者、符文手稿、实验室蓝光" },
  ENTJ: { job: "远征统帅", face: "军装披风、锐利目光、战术地图" },
  ENTP: { job: "诡辩发明家", face: "机关护目镜、笑意、爆炸后的工坊" },
  INFJ: { job: "预言调停者", face: "银白斗篷、温和目光、教堂彩窗" },
  INFP: { job: "梦境吟游者", face: "柔软披肩、手写诗页、夜色花园" },
  ENFJ: { job: "光誓领袖", face: "金色肩甲、鼓舞姿态、旗帜与晨光" },
  ENFP: { job: "灵感旅法师", face: "亮色披风、开放笑容、漂浮纸鸟" },
  ISTJ: { job: "档案守卫", face: "深色制服、规整徽章、古老档案室" },
  ISFJ: { job: "守护医师", face: "柔和斗篷、药箱、暖色灯火" },
  ESTJ: { job: "秩序军官", face: "坚硬轮廓、指挥手势、钢铁城门" },
  ESFJ: { job: "宫廷协调官", face: "礼服、亲和微笑、宴会厅与信笺" },
  ISTP: { job: "机关游侠", face: "皮甲工具带、冷静侧脸、机械弩" },
  ISFP: { job: "色彩游吟画师", face: "颜料披肩、安静神情、光影树林" },
  ESTP: { job: "破局决斗者", face: "短披风、挑衅笑容、竞技场火光" },
  ESFP: { job: "舞台吟游诗人", face: "华丽外套、聚光灯、观众与乐器" },
  未知: { job: "未定冒险者", face: "半遮面轮廓、未完成角色草图、多色光" },
};

const MBTI_ROLE_FLAVORS = {
  INTJ: {
    entrance: "他不是冲进传说的人，而是提前把传说拆成三步计划的人",
    method: "会把这门职业当成一套可复盘的战术系统",
    function: "擅长预设资源、控制风险、把队友的行动排成更锋利的顺序",
    flaw: "可演的代价是过度掌控，偶尔会把活人也当成棋盘上的变量",
  },
  INTP: {
    entrance: "他像误入战场的秘仪学者，边躲火球边研究火球为什么会拐弯",
    method: "会把这门职业玩成实验台，先理解机制，再发明离谱但有效的用法",
    function: "擅长拆规则、找漏洞、用知识和临场试错开出新路线",
    flaw: "可演的代价是行动慢半拍，灵感太多时容易忘了战斗还在继续",
  },
  ENTJ: {
    entrance: "他一登场就像远征军的号角，连沉默都带着调度命令",
    method: "会把这门职业用成指挥权，把个人能力扩展成全队推进力",
    function: "擅长分配任务、压住局面、把胜利条件从混乱里拽出来",
    flaw: "可演的代价是强势与控制欲，队友可能先被他救下，再被他安排明白",
  },
  ENTP: {
    entrance: "他像带着火星进酒馆的人，下一秒可能救场，也可能让场面更有趣",
    method: "会把这门职业演成一套破局花招，专门拿规则边缘做杠杆",
    function: "擅长诱导、干扰、临场变招和把敌人的计划拧成自己的机会",
    flaw: "可演的代价是手痒和冒险，明明有稳妥答案，也总想试试更漂亮的那种",
  },
  INFJ: {
    entrance: "他像从预言残页里走出来的人，温和地说出很难违抗的话",
    method: "会把这门职业变成使命感，用能力处理事件背后的动机和代价",
    function: "擅长读人心、稳住道德方向、在长线剧情里埋下回响",
    flaw: "可演的代价是背负感太重，容易把每个选择都看成命运审判",
  },
  INFP: {
    entrance: "他像护着一盏小灯穿过战场的人，柔软，但不是能随便踩碎的那种",
    method: "会把这门职业演成个人信念的外化，为了某个价值突然变得不可撼动",
    function: "擅长共情、守护、唤起队友动机和把剧情冲突写进内心誓言",
    flaw: "可演的代价是理想与现实拉扯，越重要的选择越容易刺痛他",
  },
  ENFJ: {
    entrance: "他像把晨光带进围城的人，出现时队伍会下意识重新站成阵型",
    method: "会把这门职业变成号召力，让个人行动成为集体士气的开关",
    function: "擅长鼓舞、协调、公开承诺和把散掉的人重新组织起来",
    flaw: "可演的代价是太习惯承担，容易把别人的崩溃也算进自己的责任",
  },
  ENFP: {
    entrance: "他像从冒险故事边角跳出来的火花，先照亮道路，再顺手点燃气氛",
    method: "会把这门职业演成灵感现场，越未知越能激发奇招",
    function: "擅长带动节奏、打开可能性、把失败局面讲成下一幕的开头",
    flaw: "可演的代价是容易追逐新鲜感，计划刚成形就想给它加一扇窗",
  },
  ISTJ: {
    entrance: "他像守着古老誓约的档案官，剑可以出鞘，账也一定会记清",
    method: "会把这门职业用成可靠流程，一步一步把混乱压回秩序",
    function: "擅长守规则、控风险、执行长期任务和让队伍有稳定底盘",
    flaw: "可演的代价是太信既定路径，突发奇想型队友会不断考验他的耐心",
  },
  ISFJ: {
    entrance: "他像营火旁最后一个不睡的人，安静，但总能在崩盘前补上缺口",
    method: "会把这门职业演成照料与守护，把强度藏在细节里",
    function: "擅长补位、续航、记住风险点和让队伍在长线冒险里不散架",
    flaw: "可演的代价是过度照顾，容易把自己的需求排到队伍清单最后",
  },
  ESTJ: {
    entrance: "他像临时接管战场的军需官，三句话就能让所有人知道该站哪",
    method: "会把这门职业用成执行机器，目标、资源、责任都会被他钉在桌上",
    function: "擅长现场管理、压缩混乱、建立规则和推动团队按时完成目标",
    flaw: "可演的代价是强硬和不耐烦，遇到暧昧剧情时会本能地想立刻定责",
  },
  ESFJ: {
    entrance: "他像宴会厅里最会救场的人，能一边递酒杯，一边把危机悄悄挪走",
    method: "会把这门职业演成关系网络，用人情、照料和场面感推动局势",
    function: "擅长协调队友、安抚 NPC、维持队伍状态和让合作重新发生",
    flaw: "可演的代价是太在意关系温度，必要的冷处理会让他不舒服",
  },
  ISTP: {
    entrance: "他像蹲在机关旁的冷脸专家，别人还在争论，他已经听见齿轮哪里卡住",
    method: "会把这门职业用成工具箱，能动手就少说废话",
    function: "擅长临场拆解、精确行动、处理危险装置和用效率解决麻烦",
    flaw: "可演的代价是情绪表达偏少，队友可能要等事后才知道他其实在意",
  },
  ISFP: {
    entrance: "他像月光下不留脚印的旅人，安静地靠近，然后用很个人的方式改变现场",
    method: "会把这门职业演成感官与直觉的技艺，行动带着独特审美",
    function: "擅长观察氛围、灵巧处理、避开正面冲突和做出漂亮但不张扬的选择",
    flaw: "可演的代价是边界感强，不喜欢被催着解释自己的判断",
  },
  ESTP: {
    entrance: "他像掷出骰子前已经冲上桌的人，胆量、反应和笑声一起到场",
    method: "会把这门职业玩成现场破局，越危险越能抓住一瞬间的机会",
    function: "擅长突入、诱敌、抢节奏和用行动把僵局撞出裂缝",
    flaw: "可演的代价是爱赌窗口期，精彩操作和危险后果常常一起上桌",
  },
  ESFP: {
    entrance: "他像把聚光灯带进地城的人，战斗还没开打，所有人的注意力已经被他拿走",
    method: "会把这门职业演成舞台行动，靠存在感、节奏和互动改变局面",
    function: "擅长吸引注意、带动士气、制造机会和把战斗变成可控的表演",
    flaw: "可演的代价是容易过度显眼，暗处的敌人会很快记住他的名字",
  },
  未知: {
    entrance: "他像还没写完名字的冒险者，身上已经有故事开始发光",
    method: "会把这门职业先演成能力轮廓，再等剧情决定真正的形状",
    function: "擅长作为开放角色胚子，给后续设定保留弹性",
    flaw: "可演的代价是身份尚未落定，需要靠几场冒险把自己写清楚",
  },
};

const RESULT_CONTENT = {
  attributeCombos: {
    "dex-str": {
      name: "物理极限 / 战场疾锋",
      tagline: "把爆发力和机动性同时推到台前，靠速度与冲击力拆开局面。",
      explanation: "你既能正面突破，也能快速改变站位。创作时可以把角色写成行动派的破局者，遇到阻碍时先用身体和节奏寻找出口。",
      direction: "双持武器的突击手、追求极速与力量的游侠、以身体天赋压制现场的竞技型战士。",
      weakness: "谈判、研究和长期布局可能不是第一选择，复杂谜题需要队友或工具补位。",
      candidates: ["战士", "游侠", "野蛮人", "游荡者"],
      titles: ["风暴利刃", "钢铁狂风", "猩红舞者"],
    },
    "con-str": {
      name: "不倒长城 / 攻城先锋",
      tagline: "抗下压力，再把压力原样推回去。",
      explanation: "高体质给你容错和耐久，高力量让你成为稳定推进的前线核心。你不一定最快，但很难被迫停下。",
      direction: "重甲堡垒、阵地战核心、能把伤害和责任都扛在身上的守护者。",
      weakness: "机动与精细操作容易吃亏，面对远程牵制时需要提前准备路线。",
      candidates: ["野蛮人", "战士", "圣武士"],
      titles: ["叹息之壁", "不朽重锤", "山岭守护者"],
    },
    "int-str": {
      name: "战术执行者 / 物理学士",
      tagline: "先算清结构，再用最直接的方式执行。",
      explanation: "你的逻辑能力不是用来远离战斗，而是用来让每一次行动更有效。角色会有一种冷静的压迫感。",
      direction: "战斗学者、外骨骼工匠、用战术拆解敌阵的前线指挥者。",
      weakness: "容易过度计算，面对情绪、直觉和混乱现场时要留出弹性。",
      candidates: ["战士", "工匠", "法师", "圣武士"],
      titles: ["战术执行者", "铁血学者", "几何裁决"],
    },
    "str-wis": {
      name: "狂野本能 / 盲眼剑客",
      tagline: "凭危险嗅觉行动，让身体比语言更早给出答案。",
      explanation: "力量提供执行力，感知提供预判。你适合写成靠经验、本能和肌肉记忆读局的人。",
      direction: "苦修武僧、荒野猎手、靠直觉避开陷阱的近战角色。",
      weakness: "学术推演和复杂制度问题可能不如现场判断顺手。",
      candidates: ["武僧", "游侠", "牧师", "德鲁伊"],
      titles: ["静默狂怒", "本能猎手", "荒野之拳"],
    },
    "cha-str": {
      name: "强势领主 / 战吼先锋",
      tagline: "把力量变成存在感，把进攻变成宣言。",
      explanation: "你的魅力不是柔软说服，而是让别人感到局势正在被你推动。适合写成带头冲锋、稳定军心或施加威慑的角色。",
      direction: "骑士团长、佣兵头子、以战吼和行动带队的近战领袖。",
      weakness: "过于显眼，不适合低调潜行；也容易被对手当作第一目标。",
      candidates: ["圣武士", "吟游诗人", "术士", "野蛮人"],
      titles: ["狮心王", "战吼先锋", "耀眼统领"],
    },
    "con-dex": {
      name: "永动机 / 毒蛇壁垒",
      tagline: "打不中，打中了也很难真正拖垮你。",
      explanation: "敏捷让你规避危险，体质让你承受失误。你在持久战和消耗战里特别可靠。",
      direction: "游走刺客、耐力型追踪者、以伤换位的轻装战士。",
      weakness: "单次爆发可能不够夸张，面对重甲或高防目标需要耐心。",
      candidates: ["武僧", "游侠", "战士", "游荡者"],
      titles: ["不死幻影", "坚韧之风", "毒刺"],
    },
    "dex-int": {
      name: "机关大师 / 诡道刺客",
      tagline: "用复杂设计创造机会，再用快手完成收尾。",
      explanation: "你的优势在于精密头脑和灵巧执行同时在线。陷阱、工具、暗线和操作细节都能成为武器。",
      direction: "机关工匠、战术盗贼、擅长连锁计划的猎人。",
      weakness: "被迫进入纯力量对抗时会不舒服，需要保持距离和方案余量。",
      candidates: ["游荡者", "工匠", "法师", "游侠"],
      titles: ["致命齿轮", "算计之刃", "阴影解构者"],
    },
    "dex-wis": {
      name: "风中残叶 / 幻影猎手",
      tagline: "危险到来前，你已经离开了原地。",
      explanation: "直觉和反应形成闭环。你能从环境细节中提前读出风险，再用身体迅速修正路线。",
      direction: "蒙眼听风的武者、丛林狙击手、踏雪无痕的探路者。",
      weakness: "正面硬碰硬和大型社交压场不是强项，需要选择战场。",
      candidates: ["武僧", "游侠", "德鲁伊", "游荡者"],
      titles: ["风之眼", "静默闪电", "直觉舞者"],
    },
    "cha-dex": {
      name: "华丽怪盗 / 剑舞者",
      tagline: "动作和气场一起出手，让战斗看起来像一场表演。",
      explanation: "你擅长用节奏、假动作和现场存在感影响别人。速度是工具，魅力是放大器。",
      direction: "怪盗、剑舞艺人、情报场和战场都能走位的浪子。",
      weakness: "有时会为了漂亮动作牺牲效率，需要记得目标优先。",
      candidates: ["吟游诗人", "游荡者", "术士", "游侠"],
      titles: ["夜灵幻象", "欺诈舞步", "致命魔术师"],
    },
    "con-int": {
      name: "永恒守望者 / 炼金术士",
      tagline: "在压力里保持清醒，哪怕靠消耗也能算出答案。",
      explanation: "你适合处理危险、漫长、需要耐心的任务。越是高压，越能体现你的理智韧性。",
      direction: "战地学者、以自己做实验的炼金师、前线记录员。",
      weakness: "爆发和机动不足，更适合阵地、防守和中长期计划。",
      candidates: ["法师", "工匠", "战士", "牧师"],
      titles: ["真理堡垒", "压力解析者", "绝对冷静"],
    },
    "con-wis": {
      name: "苦行先知 / 不朽图腾",
      tagline: "像山一样承受，也像风一样读懂环境。",
      explanation: "体质让你能撑住消耗，感知让你不只是在硬扛。你是团队里的稳定锚点。",
      direction: "雪山苦行者、自然守护者、抵御腐化的精神支柱。",
      weakness: "主动侵略性和爆发速度可能不足，需要明确行动时机。",
      candidates: ["德鲁伊", "牧师", "武僧", "野蛮人"],
      titles: ["苍石守卫", "自然坚壁", "寂静之盾"],
    },
    "cha-con": {
      name: "不屈旗帜 / 血誓守望",
      tagline: "只要你还站着，队伍就还没输。",
      explanation: "你的感染力来自承受力。伤痕、坚持和公开承诺会变成一种强烈的号召。",
      direction: "死战不退的英雄、愿意承担代价的誓约术士、悲歌式守护者。",
      weakness: "容易成为集火目标，也容易把责任过度揽到自己身上。",
      candidates: ["圣武士", "术士", "吟游诗人", "战士"],
      titles: ["血誓旗帜", "不灭光辉", "悲歌承受者"],
    },
    "int-wis": {
      name: "全知之眼 / 秘法导师",
      tagline: "既能推演结构，也能看见结构之外的异常。",
      explanation: "这是心智轴的高峰组合。你适合调查、预判、拆解阴谋，也适合成为团队的判断核心。",
      direction: "预言家、侦探、隐世导师、能看破幻象的法术研究者。",
      weakness: "身体轴可能成为明显短板，近身冲突要靠布局避免。",
      candidates: ["法师", "牧师", "德鲁伊", "工匠"],
      titles: ["真理裁决者", "星界观测员", "破妄者"],
    },
    "cha-int": {
      name: "幕后棋手 / 诡辩家",
      tagline: "用清晰逻辑组织局面，再用语言让别人走进你的方案。",
      explanation: "你擅长操盘、谈判和叙事控制。高智力给你结构，高魅力让结构变得可执行。",
      direction: "外交官、幻术顾问、学院派领袖、掌控信息差的策士。",
      weakness: "一旦无法开口或失去信息优势，处境会明显变窄。",
      candidates: ["吟游诗人", "法师", "术士", "游荡者"],
      titles: ["棋手", "幻术谋士", "帝国大脑"],
    },
    "cha-wis": {
      name: "精神导师 / 灵魂低语者",
      tagline: "先读懂人心，再决定是安抚、引导还是施压。",
      explanation: "你能察觉情绪和动机，也能把这种察觉转化为影响力。适合承担团队的精神导航。",
      direction: "调停者、治疗者、宗教领袖、能让群体重新站稳的人。",
      weakness: "遇到纯规则、纯机械或高抽象系统时，需要理性工具补足。",
      candidates: ["牧师", "吟游诗人", "术士", "德鲁伊"],
      titles: ["心灵捕手", "圣灵之音", "情绪编织者"],
    },
  },
  mbtiProfiles: {
    INTJ: {
      style: "冷静的系统规划者",
      result: "你的行动像一台精密仪器：先建模，再出手。你更信任可复盘的计划，而不是现场情绪。",
      axes: { str: "高力量会让这种计划感变成冷静的压制。", dex: "高敏捷会让你像永远留着后手的战术潜行者。", con: "高体质会让你适合长期阵地和耐心消耗。", int: "高智力会把幕后推演推到极致。", wis: "高感知让你的预判几乎像提前看见局势。", cha: "高魅力会形成一种不热烈但很可信的领导力。" },
    },
    INTP: {
      style: "随性的理论拆解师",
      result: "你像一座移动档案馆，比起立刻赢，更想搞清楚规则为什么这样运转。",
      axes: { str: "高力量会把实验精神带进近战。", dex: "高敏捷适合试用各种工具和潜入方案。", con: "高体质让你能承受反复试错。", int: "高智力会变成标准的机制研究者。", wis: "高感知让你从细节里突然顿悟。", cha: "高魅力会让怪理论也变得有说服力。" },
    },
    ENTJ: {
      style: "铁腕的征服者",
      result: "你不是在随波逐流，而是在不断把现场整理成目标、路径和执行顺序。",
      axes: { str: "高力量会变成冲锋型指挥。", dex: "高敏捷让你的执行雷厉风行。", con: "高体质会让队伍把你当成不倒旗帜。", int: "高智力适合宏观战略。", wis: "高感知会让你及时切掉败局。", cha: "高魅力会把统帅气质推到台前。" },
    },
    ENTP: {
      style: "混沌的破局者",
      result: "你是局面的变量制造者。规则不是墙，更像可以借力的边缘。",
      axes: { str: "高力量让破局变得更直接。", dex: "高敏捷会让你用走位和花招制造机会。", con: "高体质让你能承受高风险试探。", int: "高智力会把离谱点子变成可执行方案。", wis: "高感知让你能在荒诞选择里踩中生路。", cha: "高魅力让你能把现场节奏带偏再拉回来。" },
    },
    INFJ: {
      style: "深邃的宿命先知",
      result: "你习惯从动机、代价和长期影响里判断事情，温和外壳下有很硬的信念。",
      axes: { str: "高力量会形成带有使命感的近战路线。", dex: "高敏捷像优雅的制裁者。", con: "高体质让你能承受精神压力。", int: "高智力会让你追问力量背后的伦理。", wis: "高感知会强化先知般的危险嗅觉。", cha: "高魅力让你能触及他人的核心动机。" },
    },
    INFP: {
      style: "理想主义的游吟诗人",
      result: "你会把行动和内心价值绑定。真正重要的东西，会让你爆发出超出预期的力量。",
      axes: { str: "高力量像温柔但不可越线的巨兽。", dex: "高敏捷适合自由穿行的游侠。", con: "高体质让你为了守护目标长期坚持。", int: "高智力适合边缘学派和幻想研究。", wis: "高感知会变成强烈的精神共鸣。", cha: "高魅力让真诚成为影响力。" },
    },
    ENFJ: {
      style: "耀眼的精神领袖",
      result: "你擅长把人重新组织起来。只要你站在现场，松散队伍就更容易找到方向。",
      axes: { str: "高力量会让你成为冲锋型守护者。", dex: "高敏捷适合穿梭救援。", con: "高体质像不枯竭的庇护所。", int: "高智力会让你成为仁慈的战术导师。", wis: "高感知能捕捉团队里的情绪暗流。", cha: "高魅力会把主角感推满。" },
    },
    ENFP: {
      style: "火花四射的灵感发射机",
      result: "你把冒险当作新鲜现场。好奇心和感染力，是你在绝境里给团队留下的出口。",
      axes: { str: "高力量让战斗像一场热烈的舞步。", dex: "高敏捷适合跑酷式探索。", con: "高体质会让你的精力极难耗尽。", int: "高智力让奇思妙想有落地可能。", wis: "高感知让直觉显得不可解释但有用。", cha: "高魅力让你天然适合带动氛围。" },
    },
    ISTJ: {
      style: "如磐石般的守则骑士",
      result: "你重视程序、承诺和能复盘的经验。可靠是你的核心武器。",
      axes: { str: "高力量适合稳步推进的阵地战。", dex: "高敏捷会让执行动作像教科书。", con: "高体质会让你成为真正的盾。", int: "高智力像人形数据库。", wis: "高感知来自老练排查。", cha: "高魅力会形成纪律型领导。" },
    },
    ISFJ: {
      style: "温柔的后勤守护者",
      result: "你擅长照看细节和人的状态。你的强大往往不是显眼，而是让队伍不崩。",
      axes: { str: "高力量让守护变得很有分量。", dex: "高敏捷适合及时补位。", con: "高体质会变成稳定续航核心。", int: "高智力让你记得每个风险点。", wis: "高感知让你提前察觉他人状态。", cha: "高魅力像温柔的避风港。" },
    },
    ESTJ: {
      style: "高效的秩序执行官",
      result: "你会把混乱现场拆成职责、资源和时间表。你的安全感来自可执行。",
      axes: { str: "高力量会变成强势前线管理。", dex: "高敏捷让你执行非常利落。", con: "高体质适合长期压阵。", int: "高智力会让你像铁血军师。", wis: "高感知让你能及时修正部署。", cha: "高魅力形成明确的组织权威。" },
    },
    ESFJ: {
      style: "群体关系的协调官",
      result: "你会自然关注现场关系和集体情绪。把人安顿好，就是你推动局势的方式。",
      axes: { str: "高力量让你能亲自站到前面护场。", dex: "高敏捷适合照顾多个变化点。", con: "高体质让你成为稳定后勤。", int: "高智力能把人情和流程一起整理。", wis: "高感知会强化读空气能力。", cha: "高魅力让你成为团队黏合剂。" },
    },
    ISTP: {
      style: "冷静的现场拆解者",
      result: "你更信任工具、结构和手感。遇到问题时，你会先找能动手拆开的地方。",
      axes: { str: "高力量适合沉默的解决者。", dex: "高敏捷会成为顶尖机关处理者。", con: "高体质让你能在危险现场保持稳定。", int: "高智力强化系统拆解。", wis: "高感知让你识别细微故障。", cha: "高魅力会形成低调但有效的压迫感。" },
    },
    ISFP: {
      style: "安静的感官游侠",
      result: "你通过质感、节奏和环境理解世界。行动不一定大声，但很有个人笔触。",
      axes: { str: "高力量会让柔和外表下藏着锋利边界。", dex: "高敏捷适合随风而动的游侠。", con: "高体质让你能长期守护自己的节奏。", int: "高智力会把审美变成体系。", wis: "高感知让环境像你的第二语言。", cha: "高魅力是低声但难忘的表达。" },
    },
    ESTP: {
      style: "高风险的现场破局者",
      result: "你擅长在压力下抓住机会。越接近现场，越能看出你的胆量和反应。",
      axes: { str: "高力量会变成正面突击。", dex: "高敏捷适合极限走位。", con: "高体质让你能承受冒险代价。", int: "高智力让临场方案更精确。", wis: "高感知会强化战斗嗅觉。", cha: "高魅力让你在混乱里掌控注意力。" },
    },
    ESFP: {
      style: "明亮的舞台行动者",
      result: "你会把现场变成舞台，把互动变成节奏。存在感本身就是你的资源。",
      axes: { str: "高力量让舞台感带上冲击力。", dex: "高敏捷让动作华丽且有效。", con: "高体质支撑高强度表现。", int: "高智力让表演背后有设计。", wis: "高感知让你读懂观众和对手。", cha: "高魅力就是你的主武器。" },
    },
  },
  alignments: {
    守序善良: "重承诺和保护，愿意在规则内尽量减少伤害。适合写成可靠守护者、秩序修复者或温和的骑士型角色。",
    中立善良: "把具体的人放在规则之前，愿意根据现场代价做出弹性选择。适合写成务实的救援者。",
    混乱善良: "重视自由与善意，必要时会打破不合理规则。适合写成义贼、解放者或拒绝冷酷制度的人。",
    守序中立: "重职责、系统和可预测性，倾向先维护结构再处理情绪。适合写成裁判、守门人或专业执行者。",
    绝对中立: "重平衡和现实判断，不轻易被阵营口号带走。适合写成旁观者、调停者或以结果校准行动的人。",
    混乱中立: "重自由和变化，讨厌被单一路线绑定。适合写成流浪者、机会主义冒险者或边界松动的独行者。",
    守序邪恶: "承认规则的力量，但更擅长把规则变成达成目标的工具。适合写成冷静野心家、契约操盘者或秩序型反派。",
    中立邪恶: "以收益、自保和效率为中心，能迅速压低情绪成本。适合写成雇佣者、灰色交易者或现实主义反派。",
    混乱邪恶: "厌恶约束，偏爱用冲突和破坏重置局面。结果页会把它视为高风险角色倾向，而不是现实行为建议。",
  },
};

const DND_CARD_STYLES = {
  法师: { a: "#6ea8df", b: "#b08ae0", sigil: "ARC", rarity: "SSR" },
  圣武士: { a: "#e4bf62", b: "#72c891", sigil: "OATH", rarity: "UR" },
  术士: { a: "#dc78a8", b: "#b08ae0", sigil: "PACT", rarity: "SSR" },
  牧师: { a: "#f3ecd7", b: "#e4bf62", sigil: "BLESS", rarity: "SR" },
  德鲁伊: { a: "#72c891", b: "#70c7c7", sigil: "WILD", rarity: "SR" },
  吟游诗人: { a: "#dc78a8", b: "#e4bf62", sigil: "SONG", rarity: "SSR" },
  战士: { a: "#d85d4a", b: "#e4bf62", sigil: "EDGE", rarity: "SR" },
  游荡者: { a: "#70c7c7", b: "#6ea8df", sigil: "SHADE", rarity: "SSR" },
  游侠: { a: "#72c891", b: "#6ea8df", sigil: "TRAIL", rarity: "SR" },
  武僧: { a: "#e4bf62", b: "#70c7c7", sigil: "FLOW", rarity: "SR" },
  野蛮人: { a: "#d85d4a", b: "#e4bf62", sigil: "RAGE", rarity: "SR" },
  工匠: { a: "#6ea8df", b: "#e4bf62", sigil: "GEAR", rarity: "SSR" },
  冒险者: { a: "#e4bf62", b: "#70c7c7", sigil: "A6", rarity: "R" },
};

const DND_CLASS_POOL = [
  {
    className: "法师",
    classEn: "Wizard",
    axes: { int: 1, wis: 0.45, dex: 0.15 },
    role: "法术控制、谜题拆解、远程规划",
    baseSubclasses: ["占卜学派", "抄写学派", "幻术学派", "战争魔法"],
    why: "当智力和判断链条占优时，角色更适合把战斗、调查和资源管理当成可推演系统。",
    flavor: "法师的气质是把世界当作可拆解的规则书，冷静、好奇，习惯先找机制再出手。",
    specialty: "擅长控场、信息推演、法术资源管理和用知识改变战斗地形。",
  },
  {
    className: "战士",
    classEn: "Fighter",
    axes: { str: 0.72, dex: 0.48, con: 0.58, wis: 0.12 },
    role: "前线推进、武器专精、稳定输出",
    baseSubclasses: ["战斗大师", "冠军", "骑士"],
    why: "力量、敏捷或体质任何一侧足够突出，都可以转译成可靠的武技路线。",
    flavor: "战士的气质是可靠、直接、能把压力扛在明面上，适合写成队伍的战术支点。",
    specialty: "擅长武器压制、阵线推进、保护队友和稳定制造伤害窗口。",
  },
  {
    className: "游荡者",
    classEn: "Rogue",
    axes: { dex: 1, int: 0.34, cha: 0.24, wis: 0.22 },
    role: "潜入侦察、机关处理、机会爆发",
    baseSubclasses: ["盗贼", "诡术师", "刺客"],
    why: "敏捷高且有一定判断或社交读场时，角色更适合在信息缝隙里创造优势。",
    flavor: "游荡者的气质是敏锐、谨慎、会把别人忽略的缝隙变成出手机会。",
    specialty: "擅长潜行、侦察、开锁拆机关、背刺爆发和用位置差制造优势。",
  },
  {
    className: "游侠",
    classEn: "Ranger",
    axes: { dex: 0.65, wis: 0.82, con: 0.22, int: 0.16 },
    role: "追踪侦察、野外生存、远程压制",
    baseSubclasses: ["幽域追踪者", "妖精流浪者", "猎人"],
    why: "敏捷与感知组合突出时，角色会更像用环境、路径和预判作战的猎手。",
    flavor: "游侠的气质是清醒、耐心、熟悉环境，像总能提前半步读到风向的人。",
    specialty: "擅长追踪、伏击、野外生存、远程压制和把战场变成自己的地形。",
  },
  {
    className: "牧师",
    classEn: "Cleric",
    axes: { wis: 0.92, cha: 0.28, con: 0.28 },
    role: "治疗支援、价值锚定、团队续航",
    baseSubclasses: ["生命领域", "知识领域", "秩序领域", "和平领域"],
    why: "感知、共情和稳定性较强时，角色适合承担判断、守护和队伍恢复责任。",
    flavor: "牧师的气质是有信念、有判断，也能在混乱里给队伍一个继续站稳的理由。",
    specialty: "擅长治疗、祝福、驱散、价值判断和把队伍从崩盘边缘拉回来。",
  },
  {
    className: "德鲁伊",
    classEn: "Druid",
    axes: { wis: 0.82, con: 0.38, int: 0.18 },
    role: "自然调和、形态适应、持续控制",
    baseSubclasses: ["星辰结社", "梦境结社", "月亮结社"],
    why: "感知和体质较好时，角色会更像能适应环境、维持节奏并用直觉读局的人。",
    flavor: "德鲁伊的气质是顺势而动、重视循环和代价，常像自然本身一样温和又危险。",
    specialty: "擅长环境控制、形态变化、持续消耗、治疗补位和野外问题处理。",
  },
  {
    className: "圣武士",
    classEn: "Paladin",
    axes: { cha: 0.62, str: 0.58, con: 0.42, wis: 0.16 },
    role: "誓言压阵、前线保护、气场威慑",
    baseSubclasses: ["献身誓言", "王冠誓言", "征服誓言", "救赎誓言"],
    why: "魅力与身体轴同时有支撑时，角色适合把信念、压迫感和保护欲写成行动力。",
    flavor: "圣武士的气质是强烈、公开、带着誓言行动，像把个人信念铸成盔甲的人。",
    specialty: "擅长前线保护、爆发惩击、气场支援、压场谈判和承担道德冲突。",
  },
  {
    className: "吟游诗人",
    classEn: "Bard",
    axes: { cha: 1, dex: 0.28, int: 0.22, wis: 0.16 },
    role: "社交破局、灵感支援、现场节奏",
    baseSubclasses: ["雄辩学院", "逸闻学院", "魅惑学院", "剑舞学院"],
    why: "魅力高时，角色可以通过语言、表演、谈判或情绪调度改变局面。",
    flavor: "吟游诗人的气质是会读空气、会造气氛，也会把故事本身变成武器。",
    specialty: "擅长交涉、鼓舞、控场、情报流转和把失败局面改写成新舞台。",
  },
  {
    className: "术士",
    classEn: "Warlock",
    axes: { cha: 0.84, int: 0.34, wis: 0.2, con: 0.16 },
    role: "契约博弈、奇术干扰、危险交易",
    baseSubclasses: ["妖精宗主", "古老支配者", "邪魔宗主"],
    why: "魅力和抽象判断同时较强时，角色适合走高风险、高风格化的契约路线。",
    flavor: "术士围绕契约、禁忌知识与代价展开，核心气质是诱惑、交换和高风险控制。",
    specialty: "擅长奇术干扰、心智压迫、短促爆发、禁忌知识和用代价换取破局能力。",
  },
  {
    className: "武僧",
    classEn: "Monk",
    axes: { dex: 0.76, wis: 0.58, con: 0.28 },
    role: "机动连击、专注控制、近身游走",
    baseSubclasses: ["散打宗", "影宗", "醉拳宗"],
    why: "敏捷、感知和稳定专注一起出现时，角色更像依靠身体节奏和心流作战。",
    flavor: "武僧的气质是克制、敏捷、把身体训练成判断工具，越混乱越能找到节奏。",
    specialty: "擅长机动连击、控制关键目标、闪避穿插和用专注打断敌方节奏。",
  },
  {
    className: "野蛮人",
    classEn: "Barbarian",
    axes: { str: 0.88, con: 0.74, dex: 0.12 },
    role: "爆发承伤、正面突破、压力释放",
    baseSubclasses: ["狂战士道途", "图腾战士道途", "祖灵守护者"],
    why: "力量和体质双高时，角色适合把冲击力、承伤和原始意志写成核心武器。",
    flavor: "野蛮人的气质是直面压力、情绪强烈、把愤怒和本能转成战场推进力。",
    specialty: "擅长承伤、突破、近战爆发、吸引火力和把僵局撕开缺口。",
  },
  {
    className: "工匠",
    classEn: "Artificer",
    axes: { int: 0.78, dex: 0.34, con: 0.18, wis: 0.12 },
    role: "装置制造、战术道具、系统改造",
    baseSubclasses: ["战斗铁匠", "炼金术士", "炮铳师"],
    why: "智力与精细操作一起突出时，角色适合通过工具、装备和系统理解来解决问题。",
    flavor: "工匠的气质是务实、爱改造、相信问题都有结构，也相信工具能改变命运。",
    specialty: "擅长制造装置、强化装备、炼金支援、战术道具和把场景改成可控系统。",
  },
];

const MBTI_PORTRAIT_RESOURCE_MAP = {
  INTJ: createReadyMbtiPortraitResource("INTJ", "strategic-wizard"),
  INTP: createReadyMbtiPortraitResource("INTP", "arcane-researcher"),
  ENTJ: createReadyMbtiPortraitResource("ENTJ", "expedition-commander"),
  ENTP: createReadyMbtiPortraitResource("ENTP", "trickster-inventor"),
  INFJ: createReadyMbtiPortraitResource("INFJ", "oracle-mediator"),
  INFP: createReadyMbtiPortraitResource("INFP", "dream-bard"),
  ENFJ: createReadyMbtiPortraitResource("ENFJ", "oathbound-leader"),
  ENFP: createReadyMbtiPortraitResource("ENFP", "inspiration-travel-mage"),
  ISTJ: createReadyMbtiPortraitResource("ISTJ", "archive-warden"),
  ISFJ: createReadyMbtiPortraitResource("ISFJ", "guardian-healer"),
  ESTJ: createReadyMbtiPortraitResource("ESTJ", "order-officer"),
  ESFJ: createReadyMbtiPortraitResource("ESFJ", "court-coordinator"),
  ISTP: createReadyMbtiPortraitResource("ISTP", "mechanism-ranger"),
  ISFP: createReadyMbtiPortraitResource("ISFP", "chroma-bard-painter"),
  ESTP: createReadyMbtiPortraitResource("ESTP", "breaker-duelist"),
  ESFP: createReadyMbtiPortraitResource("ESFP", "stage-bard"),
};

function createReadyMbtiPortraitResource(mbti, slug) {
  const id = `default-${mbti.toLowerCase()}-${slug}`;
  return createMbtiPortraitResource(mbti, slug, {
    status: "ready",
    file: `assets/portraits/generated/${id}-preview.webp`,
    reviewStatus: "accepted",
  });
}

function createMbtiPortraitResource(mbti, slug, overrides = {}) {
  const archetype = MBTI_ARCHETYPES[mbti] || MBTI_ARCHETYPES.未知;
  const id = `default-${mbti.toLowerCase()}-${slug}`;
  const expectedFile = `assets/portraits/generated/${id}-preview.webp`;
  const file = overrides.file || "";
  const status = overrides.status || (file ? "ready" : "pending");
  return {
    id,
    manifestId: id,
    role: "default-result-portrait",
    mbti,
    slug,
    status,
    file,
    expectedFile,
    fallback: "canvas",
    archetypeJob: archetype.job,
    visualAnchor: archetype.face,
    prompt: buildDefaultPortraitPrompt(mbti, archetype),
    reviewStatus: overrides.reviewStatus || (status === "ready" ? "accepted" : "not-started"),
  };
}

function buildDefaultPortraitPrompt(mbti, archetype) {
  return `DND fantasy character portrait, vertical 2:3, half body. ${mbti} ${archetype.job}, ${archetype.face}. Clear face, refined outfit, dramatic soft lighting, clean dark background, high quality character illustration, single character, suitable for OC tabletop RPG avatar. No text, no watermark, no logo, no extra people, no gore, no low quality.`;
}

function getMbtiPortraitResource(mbti) {
  return (
    MBTI_PORTRAIT_RESOURCE_MAP[mbti] || {
      id: "default-unknown-adventurer",
      manifestId: "default-unknown-adventurer",
      role: "default-result-portrait",
      mbti: "未知",
      slug: "unknown-adventurer",
      status: "fallback-only",
      file: "",
      expectedFile: "",
      fallback: "canvas",
      archetypeJob: MBTI_ARCHETYPES.未知.job,
      visualAnchor: MBTI_ARCHETYPES.未知.face,
      prompt: buildDefaultPortraitPrompt("UNKNOWN", MBTI_ARCHETYPES.未知),
      reviewStatus: "not-started",
    }
  );
}

function getPortraitAsset(resource) {
  if (!resource || resource.status !== "ready") return "";
  return resource.file || "";
}

const QUIZ_COPY = globalThis.QUIZ_COPY || { modules: {}, mbtiProbe: null };
const CONSTITUTION_COPY = globalThis.CONSTITUTION_COPY || { base: {}, triggers: {} };
const DEFECT_CARD_ASSETS = globalThis.DEFECT_CARD_ASSETS || { byId: {} };
const RACE_RECRUITMENT_DATA = globalThis.RACE_RECRUITMENT_DATA || null;
const RACE_RECRUITMENT_DATASET = {
  ...(globalThis.RACE_RECRUITMENT_DATASET || {}),
};
if (RACE_RECRUITMENT_DATA?.raceCard?.raceId && !RACE_RECRUITMENT_DATASET[RACE_RECRUITMENT_DATA.raceCard.raceId]) {
  RACE_RECRUITMENT_DATASET[RACE_RECRUITMENT_DATA.raceCard.raceId] = RACE_RECRUITMENT_DATA;
}
const RACE_RECRUITMENT_ASSETS = globalThis.RACE_RECRUITMENT_ASSETS || {
  ui: {},
  races: {},
  targets: {},
  questions: {},
  endings: {},
  byId: {},
};
const CONSTITUTION_TIER_LABELS = {
  frail: "残烛体质",
  light: "轻装体质",
  mortal: "凡人体质",
  steady: "稳健体质",
  iron: "钢骨体质",
  monster: "怪物体质",
};

const RECRUITMENT_TARGET_CLASS = {
  barbarian_camp: "野蛮人",
  fighter_line: "战士",
  warlock_contract: "契约术士",
  druid_mutation_circle: "德鲁伊",
  guild_wizard: "法师",
  guild_fighter: "战士",
  guild_rogue: "潜行者",
  guild_ranger: "游侠",
  guild_cleric: "牧师",
  guild_druid: "德鲁伊",
  guild_paladin: "圣武士",
  guild_bard: "吟游诗人",
  guild_warlock: "契约术士",
  guild_sorcerer: "血脉法师",
  guild_monk: "武僧",
  guild_barbarian: "野蛮人",
  guild_artificer: "工匠",
};

const RECRUITMENT_TARGET_CLASS_EN = {
  barbarian_camp: "Barbarian",
  fighter_line: "Fighter",
  warlock_contract: "Warlock",
  druid_mutation_circle: "Druid",
  guild_wizard: "Wizard",
  guild_fighter: "Fighter",
  guild_rogue: "Rogue",
  guild_ranger: "Ranger",
  guild_cleric: "Cleric",
  guild_druid: "Druid",
  guild_paladin: "Paladin",
  guild_bard: "Bard",
  guild_warlock: "Warlock",
  guild_sorcerer: "Sorcerer",
  guild_monk: "Monk",
  guild_barbarian: "Barbarian",
  guild_artificer: "Artificer",
};

const RECRUITMENT_DND_CLASS_ALIASES = {
  潜行者: "游荡者",
  契约术士: "术士",
  血脉法师: "术法师",
};

const RECRUITMENT_TARGET_ALIASES = {
  barbarian: "barbarian_camp",
  fighter: "fighter_line",
  warlock: "warlock_contract",
  druid: "druid_mutation_circle",
};

const RECRUITMENT_CALIBRATION_STAGE_IDS = {
  str: "str_burst",
  dex: "dex_reaction",
  con: "con_focus",
  int: "int_memory",
  wis: "wis_color",
  cha: "cha_dialogue",
};

const RECRUITMENT_STORY_COUNTS = Object.freeze({ physique: 1, trial: 2 });

// Each drill owns two axes. Route-specific stage selection stays isolated here
// so future minigames can be swapped without changing the recruitment flow.
const RECRUITMENT_COMPOSITE_TRIALS = Object.freeze([
  { id: "body", label: "体魄与耐受", axisIds: ["str", "con"] },
  { id: "field", label: "身法与洞察", axisIds: ["dex", "wis"] },
  { id: "mind", label: "谋略与气场", axisIds: ["int", "cha"] },
]);

const RECRUITMENT_THEME = {
  barbarian_camp: {
    name: "蛮子营地",
    className: "trial-barbarian",
    accent: "#d85d4a",
    secondary: "#e4bf62",
    seal: "AXE",
    texture: "兽皮、火堆、黑铁斧痕",
  },
  fighter_line: {
    name: "战士前线",
    className: "trial-fighter",
    accent: "#7f95b7",
    secondary: "#d8b66a",
    seal: "SHIELD",
    texture: "盾墙、军令、钢铁旗帜",
  },
  warlock_contract: {
    name: "术士契约所",
    className: "trial-warlock",
    accent: "#9b6ad6",
    secondary: "#d85d78",
    seal: "PACT",
    texture: "黑纸、蜡封、契约边注",
  },
  druid_mutation_circle: {
    name: "德鲁伊异变环",
    className: "trial-druid",
    accent: "#72c891",
    secondary: "#d8d0a0",
    seal: "ROOT",
    texture: "树根、骨枝、异变法阵",
  },
  guild_barbarian: {
    name: "突破先锋营",
    className: "trial-barbarian",
    accent: "#d85d4a",
    secondary: "#e4bf62",
    seal: "RAGE",
    texture: "破门锤、营火、冲锋旗",
  },
  guild_fighter: {
    name: "战士训练厅",
    className: "trial-fighter",
    accent: "#7f95b7",
    secondary: "#d8b66a",
    seal: "EDGE",
    texture: "兵器架、盾墙、战术沙盘",
  },
  guild_cleric: {
    name: "誓约医疗所",
    className: "trial-cleric",
    accent: "#d8b66a",
    secondary: "#70c7c7",
    seal: "BLESS",
    texture: "圣徽、药箱、值夜名单",
  },
  guild_druid: {
    name: "自然顾问席",
    className: "trial-druid",
    accent: "#72c891",
    secondary: "#d8d0a0",
    seal: "WILD",
    texture: "草药、兽径、季节记录",
  },
  guild_warlock: {
    name: "异常契约审阅处",
    className: "trial-warlock",
    accent: "#9b6ad6",
    secondary: "#d85d78",
    seal: "PACT",
    texture: "封蜡、密约、风险条款",
  },
  guild_wizard: {
    name: "法师塔档案室",
    className: "trial-wizard",
    accent: "#6fb4d8",
    secondary: "#d8b66a",
    seal: "ARC",
    texture: "卷宗、符文、远程演算",
  },
  guild_rogue: {
    name: "斥候与机关处",
    className: "trial-rogue",
    accent: "#8c8f9b",
    secondary: "#d8b66a",
    seal: "SHADE",
    texture: "暗门、锁具、路线图",
  },
  guild_ranger: {
    name: "边境巡林站",
    className: "trial-ranger",
    accent: "#7fb37a",
    secondary: "#d8d0a0",
    seal: "TRAIL",
    texture: "地图、猎踪、远行契约",
  },
  guild_paladin: {
    name: "誓言审议厅",
    className: "trial-paladin",
    accent: "#d8b66a",
    secondary: "#7f95b7",
    seal: "OATH",
    texture: "誓约、盾徽、公开证词",
  },
  guild_bard: {
    name: "联络与士气处",
    className: "trial-bard",
    accent: "#c779a7",
    secondary: "#d8b66a",
    seal: "SONG",
    texture: "传令牌、乐谱、谈判桌",
  },
  guild_artificer: {
    name: "工匠工坊",
    className: "trial-artificer",
    accent: "#c88754",
    secondary: "#70c7c7",
    seal: "GEAR",
    texture: "齿轮、炼金台、装备清单",
  },
  guild_sorcerer: {
    name: "血脉术法厅",
    className: "trial-sorcerer",
    accent: "#d85d78",
    secondary: "#9b6ad6",
    seal: "BLOOD",
    texture: "血脉纹、火星、失控法阵",
  },
  guild_monk: {
    name: "专注训练场",
    className: "trial-monk",
    accent: "#70c7c7",
    secondary: "#d8d0a0",
    seal: "FLOW",
    texture: "木桩、呼吸节拍、静室",
  },
  default: {
    name: "征召试炼",
    className: "trial-default",
    accent: "#e4bf62",
    secondary: "#70c7c7",
    seal: "A6",
    texture: "羊皮纸、烛火、公会档案",
  },
};

const HOME_RACE_TARGET_PRESETS = {
  human: ["战士", "吟游诗人", "工匠", "圣武士"],
  elf: ["游侠", "法师", "德鲁伊", "潜行者"],
  drow: ["潜行者", "契约术士", "吟游诗人", "游侠"],
  dwarf: ["战士", "圣武士", "牧师", "工匠"],
  halfling: ["潜行者", "吟游诗人", "游侠", "契约术士"],
  gnome: ["工匠", "法师", "潜行者", "吟游诗人"],
  half_orc: ["野蛮人", "战士", "潜行者", "牧师"],
  tiefling: ["契约术士", "潜行者", "吟游诗人", "血脉法师"],
  dragonborn: ["圣武士", "战士", "血脉法师", "野蛮人"],
  goliath: ["野蛮人", "战士", "武僧", "游侠"],
  troll: ["野蛮人", "战士", "契约术士", "德鲁伊"],
  ogre_giant: ["野蛮人", "战士", "牧师", "德鲁伊"],
};

const GENERIC_GUILD_TARGET_META = {
  法师: { targetId: "guild_wizard", desk: "法师塔档案室", seal: "ARC", texture: "卷宗、符文、远程演算" },
  战士: { targetId: "guild_fighter", desk: "战士训练厅", seal: "EDGE", texture: "兵器架、盾墙、战术沙盘" },
  潜行者: { targetId: "guild_rogue", desk: "斥候与机关处", seal: "SHADE", texture: "暗门、锁具、路线图" },
  游侠: { targetId: "guild_ranger", desk: "边境巡林站", seal: "TRAIL", texture: "地图、猎踪、远行契约" },
  牧师: { targetId: "guild_cleric", desk: "誓约医疗所", seal: "BLESS", texture: "圣徽、药箱、值夜名单" },
  德鲁伊: { targetId: "guild_druid", desk: "自然顾问席", seal: "WILD", texture: "草药、兽径、季节记录" },
  圣武士: { targetId: "guild_paladin", desk: "誓言审议厅", seal: "OATH", texture: "誓约、盾徽、公开证词" },
  吟游诗人: { targetId: "guild_bard", desk: "联络与士气处", seal: "SONG", texture: "传令牌、乐谱、谈判桌" },
  契约术士: { targetId: "guild_warlock", desk: "异常契约审阅处", seal: "PACT", texture: "封蜡、密约、风险条款" },
  血脉法师: { targetId: "guild_sorcerer", desk: "血脉术法厅", seal: "BLOOD", texture: "血脉纹、火星、失控法阵" },
  圣骑士: { targetId: "guild_paladin", desk: "誓言审议厅", seal: "OATH", texture: "誓约、盾徽、公开证词" },
  奇术师: { targetId: "guild_artificer", desk: "工匠工坊", seal: "GEAR", texture: "齿轮、炼金台、装备清单" },
  武僧: { targetId: "guild_monk", desk: "专注训练场", seal: "FLOW", texture: "木桩、呼吸节拍、静室" },
  野蛮人: { targetId: "guild_barbarian", desk: "突破先锋营", seal: "RAGE", texture: "破门锤、营火、冲锋旗" },
  工匠: { targetId: "guild_artificer", desk: "工匠工坊", seal: "GEAR", texture: "齿轮、炼金台、装备清单" },
};

function getQuizModule(moduleId, fallback) {
  const module = QUIZ_COPY.modules?.[moduleId];
  if (!module) return fallback;
  return {
    ...fallback,
    ...module,
    guide: module.guide || fallback.guide,
    page: module.page || fallback.page,
    questions: module.questions || fallback.questions,
  };
}

function getMbtiProbeConfig() {
  return (
    QUIZ_COPY.mbtiProbe || {
      title: "扮演滤镜检定",
      intro: "这几题只用于推断角色卡的演法滤镜，不代表正式人格测评。",
      questions: [],
      resultNote: "本结果只作为角色演法参考。",
    }
  );
}

const state = {
  screen: "start",
  current: 0,
  stage: 0,
  profile: {},
  scores: {},
  axisStages: {},
  raw: {},
  traits: { ...INITIAL_TRAITS },
  mbtiProbe: null,
  mbtiProbeReturnScreen: null,
  personalityAnswers: 0,
  recruitment: null,
  homePreviewRaceId: "",
  homePreviewRaceIds: [],
  worldRecruitment: null,
  resultTab: "card",
  selectedRaceId: "auto",
  selectedMbti: "未知",
};

let cleanupFns = [];

const app = document.querySelector("#app");
const progressLabel = document.querySelector("#progressLabel");
const progressBar = document.querySelector("#progressBar");

function getDefaultRecruitmentRaceId() {
  return RACE_RECRUITMENT_DATA?.raceCard?.raceId || Object.keys(RACE_RECRUITMENT_DATASET)[0] || "troll";
}

function getDefaultRecruitmentData() {
  const defaultId = getDefaultRecruitmentRaceId();
  return RACE_RECRUITMENT_DATASET[defaultId] || RACE_RECRUITMENT_DATA || null;
}

function getRecruitmentData(raceId = "") {
  const normalized = raceId || state.recruitment?.raceId || state.homePreviewRaceId || getDefaultRecruitmentRaceId();
  return RACE_RECRUITMENT_DATASET[normalized] || null;
}

function hasRecruitmentData(raceId) {
  return Boolean(getRecruitmentData(raceId));
}

function getOpenRecruitmentRaceIds() {
  const ids = Object.keys(RACE_RECRUITMENT_DATASET).filter((raceId) => hasRecruitmentData(raceId));
  return ids.length ? ids : [getDefaultRecruitmentRaceId()].filter(Boolean);
}

function getOpenRecruitmentRaceNames() {
  return getOpenRecruitmentRaceIds()
    .map((raceId) => getRecruitmentData(raceId)?.raceCard?.raceNameZh || getRecruitmentRace(raceId)?.name || raceId)
    .join("、");
}

function saveState() {
  try {
    sessionStorage.setItem("abilityState", JSON.stringify({
      screen: state.screen,
      current: state.current,
      stage: state.stage,
      profile: state.profile,
      scores: state.scores,
      axisStages: state.axisStages,
      raw: state.raw,
      traits: state.traits,
      mbtiProbe: state.mbtiProbe,
      personalityAnswers: state.personalityAnswers,
      recruitment: state.recruitment,
      selectedRaceId: state.selectedRaceId,
      selectedMbti: state.selectedMbti,
      resultTab: state.resultTab,
    }));
  } catch (e) {}
}

function loadState() {
  try {
    const saved = sessionStorage.getItem("abilityState");
    if (!saved) return false;
    const data = JSON.parse(saved);
    if (!data || !data.screen) return false;
    Object.assign(state, data);
    return true;
  } catch (e) {
    return false;
  }
}

function clearSavedState() {
  try { sessionStorage.removeItem("abilityState"); } catch (e) {}
}

function goToRecruitmentHall() {
  clearSavedState();
  state.recruitment = null;
  state.worldRecruitment = null;
  state.mbtiProbeReturnScreen = null;
  state.screen = "start";
  window.location.href = "./world-recruitment-prototype.html";
}

function consumeHallHandoff() {
  const params = new URLSearchParams(window.location.search);
  const raceId = params.get("race") || "";
  const targetId = params.get("target") || "";
  const fromHall = params.get("from") === "hall" || Boolean(raceId);
  if (!fromHall || !raceId) return false;

  clearSavedState();
  beginRecruitment(raceId, {
    skipRaceRegistry: true,
    targetId: targetId && hasRecruitmentData(raceId) ? targetId : "",
    deferRender: true,
  });

  // 清掉交接参数，避免刷新重复开局
  const clean = new URL(window.location.href);
  clean.search = "";
  window.history.replaceState({}, "", clean.pathname);
  return true;
}

document.querySelector("#brandHome").addEventListener("click", () => {
  goToRecruitmentHall();
});

function cleanup() {
  cleanupFns.forEach((fn) => fn());
  cleanupFns = [];
}

function clamp(value, min = 0, max = 10) {
  return Math.max(min, Math.min(max, value));
}

function fmt(value, digits = 1) {
  return Number(value || 0).toFixed(digits);
}

function getCurrentStageFlavor() {
  const axis = ATTRIBUTES[state.current] || {};
  const stage = axis.stages?.[state.stage] || {};
  return {
    check: `${axis.name || "能力"}检定`,
    dc: stage.difficulty || "DC ?",
    scene: axis.theme || "冒险现场",
    stakes: "按桌边表现结算这一轮。",
    ...(STAGE_DND_FLAVOR[stage.id] || {}),
  };
}

function d20Read(score) {
  return Math.round(clamp(score, 0, 10) * 1.9 + 1);
}

function verdictForScore(score) {
  if (score >= 8.5) return "大成功";
  if (score >= 6.5) return "成功";
  if (score >= 4.5) return "擦边成功";
  return "需要队友补位";
}

function setProgress(label, pct) {
  progressLabel.textContent = label;
  progressBar.style.width = `${clamp(pct, 0, 100)}%`;
}

function getHomePreviewRacePool() {
  return FANTASY_ANCESTRIES.filter((item) => item.id !== "auto" && getRaceArt(item.id));
}

function getHomePreviewRaceIds(limit = 6) {
  const pool = getHomePreviewRacePool();
  const maxCount = Math.min(limit, pool.length);
  const validIds = new Set(pool.map((race) => race.id));
  const openIds = getOpenRecruitmentRaceIds().filter((id) => validIds.has(id));
  const existingIds = Array.isArray(state.homePreviewRaceIds)
    ? state.homePreviewRaceIds.filter((id) => validIds.has(id))
    : [];

  const seededIds = [...openIds, ...existingIds].filter((id, index, list) => list.indexOf(id) === index);
  if (seededIds.length >= maxCount) {
    state.homePreviewRaceIds = seededIds.slice(0, maxCount);
    return state.homePreviewRaceIds;
  }

  const shuffledIds = pool
    .map((race) => ({ id: race.id, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((race) => race.id);

  const pickedIds = [...seededIds, ...shuffledIds].filter((id, index, list) => list.indexOf(id) === index);

  state.homePreviewRaceIds = pickedIds.slice(0, maxCount);
  return state.homePreviewRaceIds;
}

function getHomePreviewRaces(limit = 6) {
  const pool = getHomePreviewRacePool();
  const byId = new Map(pool.map((race) => [race.id, race]));
  return getHomePreviewRaceIds(limit)
    .map((id) => byId.get(id))
    .filter(Boolean);
}

function getHomePreviewSelection(previewRaces) {
  const sampleId = getDefaultRecruitmentRaceId();
  const fallbackRace = previewRaces.find((race) => race.id === sampleId) || previewRaces[0] || getRecruitmentRace(sampleId);
  const selectedId = previewRaces.some((race) => race.id === state.homePreviewRaceId)
    ? state.homePreviewRaceId
    : fallbackRace?.id || sampleId;
  state.homePreviewRaceId = selectedId;
  return getRecruitmentRaceCard(selectedId);
}

function getDndClassByName(className) {
  const normalizedName = RECRUITMENT_DND_CLASS_ALIASES[className] || className;
  return DND_CLASS_POOL.find((item) => item.className === normalizedName) || null;
}

function getRecruitmentTargetProfession(targetOrId) {
  const target = typeof targetOrId === "object" && targetOrId ? targetOrId : null;
  const targetId = normalizeRecruitmentTargetId(target?.targetId || targetOrId);
  return RECRUITMENT_TARGET_CLASS[targetId] || target?.professionName || target?.classNameZh || target?.name || "职业";
}

function getRecruitmentTargetClassEn(targetOrId) {
  const target = typeof targetOrId === "object" && targetOrId ? targetOrId : null;
  const targetId = normalizeRecruitmentTargetId(target?.targetId || targetOrId);
  return RECRUITMENT_TARGET_CLASS_EN[targetId] || target?.professionNameEn || target?.classNameEn || "Adventurer";
}

function getRecruitmentTargetTrainingSite(targetOrId) {
  const target = typeof targetOrId === "object" && targetOrId ? targetOrId : null;
  const targetId = normalizeRecruitmentTargetId(target?.targetId || targetOrId);
  const professionName = getRecruitmentTargetProfession(targetOrId);
  const explicitSite = target?.trainingSite || target?.classNameZh;
  if (explicitSite && explicitSite !== professionName) return explicitSite;
  return getRecruitmentTheme(targetId).name;
}

function getRecruitmentTargetSummary(target) {
  if (!target) return "公会将在登记后提供对应的职业说明与检验要求。";
  return target.oneLine || target.description || target.recruitPitch || target.acceptedStyle || target.title || target.name || "公会将在登记后提供对应的职业说明与检验要求。";
}

function getHomeRecruitTargetPreviews(raceId) {
  const recruitmentData = getRecruitmentData(raceId);
  if (recruitmentData?.recruitTargets?.length) {
    return recruitmentData.recruitTargets.map((target) => ({
      id: target.targetId,
      type: "sample",
      label: "完整题库",
      title: getRecruitmentTargetProfession(target),
      subtitle: getRecruitmentTargetTrainingSite(target),
      body: getRecruitmentTargetSummary(target),
      theme: getRecruitmentTheme(target.targetId),
    }));
  }

  const race = getRecruitmentRace(raceId);
  const classNames = HOME_RACE_TARGET_PRESETS[raceId] || HOME_RACE_TARGET_PRESETS.human;
  return classNames.map((className) => {
    const dndClass = getDndClassByName(className);
    const dndClassName = RECRUITMENT_DND_CLASS_ALIASES[className] || className;
    const style = DND_CARD_STYLES[className] || DND_CARD_STYLES[dndClassName] || DND_CARD_STYLES.冒险者;
    const targetMeta = GENERIC_GUILD_TARGET_META[className];
    return {
      id: `${raceId}_${className}`,
      type: "class",
      label: "推荐投递",
      title: className,
      subtitle: targetMeta?.desk || dndClass?.role || `${race?.name || "当前血脉"}可尝试的职业方向`,
      body: dndClass?.specialty || dndClass?.why || "公会会在正式登记后按六维校准结果细化这条路线。",
      theme: {
        accent: style.a || RECRUITMENT_THEME.default.accent,
        secondary: style.b || RECRUITMENT_THEME.default.secondary,
      },
    };
  });
}

function render() {
  cleanup();
  document.body.classList.toggle("world-recruitment-mode", state.screen === "start");
  if (state.screen === "start") renderWorldRecruitmentHome();
  if (state.screen === "raceSelect") renderRaceSelect();
  if (state.screen === "recruitTarget") renderRecruitTargetSelect();
  if (state.screen === "recruitPhysique") renderRecruitmentQuestionScreen("physique");
  if (state.screen === "recruitTrial") renderRecruitmentQuestionScreen("trial");
  if (state.screen === "recruitCalibration") renderRecruitmentCalibration();
  if (state.screen === "recruitJudgement") renderRecruitmentJudgement();
  if (state.screen === "profile") renderProfile();
  if (state.screen === "test") renderTest();
  if (state.screen === "mbtiProbe") renderMbtiProbe();
  if (state.screen === "personality") renderPersonality();
  if (state.screen === "result") renderResult();
  saveState();
}

function renderStart() {
  setProgress("征召大厅开放", 0);
  const defaultRecruitmentData = getDefaultRecruitmentData();
  const raceCard = defaultRecruitmentData?.raceCard;
  const previewRaces = getHomePreviewRaces(24);
  const previewRaceCard = getHomePreviewSelection(previewRaces);
  const previewRaceId = previewRaceCard?.raceId || state.homePreviewRaceId || raceCard?.raceId || "troll";
  const selectedPreviewRace = previewRaces.find((race) => race.id === previewRaceId) || getRecruitmentRace(previewRaceId);
  const homeTargetPreviews = getHomeRecruitTargetPreviews(previewRaceId);
  const homeTargetTheme = homeTargetPreviews[0]?.theme || RECRUITMENT_THEME.default;
  const previewRaceName = selectedPreviewRace?.name || previewRaceCard?.raceNameZh || "当前血脉";
  const canStartRecruitment = hasRecruitmentData(previewRaceId);
  const openRecruitmentRaceNames = getOpenRecruitmentRaceNames() || "巨魔";
  app.innerHTML = `
    <section class="screen recruitment-home">
      <div class="recruit-hero">
        <div class="recruit-hero-copy">
          ${renderRecruitmentArt({ src: getRecruitmentUiArt("home"), alt: "西方奇幻公会征召大厅", className: "recruit-art-hero" })}
          <p class="eyebrow">Adventurer Recruitment Office / 公会征召处</p>
          <h1>今日征召开放</h1>
          <p class="lead">
            在大厅选定血脉，再向一条职业路线投递志愿。三幕问选择，三场看本事，最后由公会把你写进冒险者名册。
          </p>
          <div class="recruit-seals" aria-label="征召流程">
            <span>血脉选择</span>
            <span>志愿投递</span>
            <span>三幕试炼</span>
            <span>三场实战</span>
            <span>扮演滤镜</span>
            <span>档案判定</span>
          </div>
          <div class="actions">
            <button class="button primary recruitment-cta" id="recruitStartBtn" type="button" ${canStartRecruitment ? "" : "disabled"}>${canStartRecruitment ? "开始登记" : "文案待接入"}</button>
            <button class="button ghost" id="demoResultBtn" type="button">随机投递简历</button>
          </div>
          <p class="fineprint">当前开放 ${openRecruitmentRaceNames} 征召线：每种血脉四条志愿路线、三幕叙事、三场双轴实战，以及可自填或四题生成的 MBTI 扮演滤镜。</p>
        </div>
        <div class="recruit-notice-board">
          <span class="board-pin"></span>
          <p class="eyebrow">Open Bloodline / 随机血脉</p>
          <div class="home-race-preview-deck" aria-label="随机开放血脉">
            ${previewRaces
              .map((race) => {
                const active = race.id === previewRaceId;
                return `
                  <button class="home-race-preview-card ${active ? "is-selected" : ""}" data-home-race-preview="${race.id}" type="button" aria-pressed="${active ? "true" : "false"}">
                    ${renderRecruitmentArt({ src: getRaceArt(race.id), alt: `${race.name}血脉卡牌`, className: "home-race-preview-art" })}
                    <span class="home-race-preview-name">${race.name}</span>
                    <small class="home-race-preview-label">${race.label}</small>
                  </button>
                `;
              })
              .join("")}
          </div>
          <div class="home-race-preview-detail">
            ${renderRecruitmentArt({ src: getRaceArt(previewRaceId) || getRecruitmentUiArt("registry"), alt: `${selectedPreviewRace?.name || previewRaceCard?.raceNameZh || "当前"}血脉登记图`, className: "notice-dossier-art" })}
            <p class="eyebrow">Selected Bloodline / 当前预览</p>
            <h2>${previewRaceCard ? previewRaceCard.title : "血脉登记中"}</h2>
            <p>${previewRaceCard ? previewRaceCard.oneLine : selectedPreviewRace?.note || "征召档案正在装订。"}</p>
            <div class="descriptor-tags">
              ${(previewRaceCard?.tags || selectedPreviewRace?.tags || ["征召", "试炼", "成卡"]).map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <blockquote>${previewRaceCard?.recruiterQuote || "书记员正在翻找今天的征召名册。"}</blockquote>
          </div>
        </div>
      </div>

      <div class="recruit-home-grid">
        <article class="recruit-ledger home-target-ledger" style="--trial-accent:${homeTargetTheme.accent}; --trial-secondary:${homeTargetTheme.secondary}">
          <p class="eyebrow">Recruit Targets / 今日可投</p>
          <h2>${previewRaceName}今日可投</h2>
          <p>${homeTargetPreviews[0]?.type === "sample" ? "当前血脉已有完整征兵样板，投递后会进入对应职业试炼。" : `当前血脉先展示推荐方向，正式征兵题库待接入；要进入做题流程，请切换到 ${openRecruitmentRaceNames}。`}</p>
          <div class="recruit-target-strip">
            ${homeTargetPreviews
              .map((target) => {
                const theme = target.theme || RECRUITMENT_THEME.default;
                return `
                  <div class="recruit-mini-target is-linked" style="--trial-accent:${theme.accent}; --trial-secondary:${theme.secondary}">
                    <small>${target.label}</small>
                    <strong>${target.title}</strong>
                    <span>${target.subtitle}</span>
                  </div>
                `;
              })
              .join("")}
          </div>
        </article>

        <article class="recruit-ledger">
          <p class="eyebrow">Linked Preview / 联动状态</p>
          <h2>已跟随${previewRaceName}</h2>
          <p>${canStartRecruitment ? `上方卡牌切换后，这里的可投方向会同步刷新；点击开始登记时，也会默认带入当前预览的 ${previewRaceName} 血脉。` : `上方卡牌切换后，这里的可投方向会同步刷新；${previewRaceName} 目前只开放预览，完整做题流程请切换到 ${openRecruitmentRaceNames}。`}</p>
          <div class="descriptor-tags">
            ${(previewRaceCard?.tags || selectedPreviewRace?.tags || ["血脉预览", "联动投递"]).slice(0, 4).map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      </div>
    </section>
  `;
  document.querySelectorAll("[data-home-race-preview]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.homePreviewRaceId = btn.dataset.homeRacePreview;
      render();
    });
  });
  document.querySelector("#recruitStartBtn").addEventListener("click", () => {
    if (!canStartRecruitment) return;
    beginRecruitment(previewRaceId, { skipRaceRegistry: true });
  });
  document.querySelector("#demoResultBtn").addEventListener("click", () => {
    state.recruitment = null;
    state.mbtiProbeReturnScreen = null;
    fillRandomSheet();
    state.screen = "result";
    render();
  });
}

function getRecruitmentTheme(targetId) {
  const normalized = normalizeRecruitmentTargetId(targetId);
  return RECRUITMENT_THEME[normalized] || RECRUITMENT_THEME.default;
}

function escapeAttribute(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function getRecruitmentAssetRecord(assetId) {
  if (!assetId) return null;
  const record = RACE_RECRUITMENT_ASSETS.byId?.[assetId] || null;
  if (!record) return null;
  return typeof record === "string" ? { status: "ready", file: record } : record;
}

function getRecruitmentAssetPath(assetId) {
  const record = getRecruitmentAssetRecord(assetId);
  if (!record || record.status !== "ready") return "";
  return record.file || "";
}

function getRecruitmentUiArt(key) {
  const value = RACE_RECRUITMENT_ASSETS.ui?.[key];
  if (typeof value === "string") return value;
  return value?.file || getRecruitmentAssetPath(`ui_${key}`);
}

function getRaceArt(raceId = "troll") {
  const value = RACE_RECRUITMENT_ASSETS.races?.[raceId];
  if (typeof value === "string") return value;
  return value?.file || getRecruitmentAssetPath(`race_${raceId}_card`);
}

function getTargetArt(targetId) {
  const normalized = normalizeRecruitmentTargetId(targetId);
  const raceId = state.recruitment?.raceId || state.homePreviewRaceId || getDefaultRecruitmentRaceId();
  const raceTarget = RACE_RECRUITMENT_ASSETS.targets?.[raceId]?.[normalized];
  if (typeof raceTarget === "string") return raceTarget;
  if (raceTarget?.sourceFile || raceTarget?.file) return raceTarget.sourceFile || raceTarget.file;
  const guildTarget = RACE_RECRUITMENT_ASSETS.targets?.guild?.[normalized];
  if (typeof guildTarget === "string") return guildTarget;
  if (guildTarget?.sourceFile || guildTarget?.file) return guildTarget.sourceFile || guildTarget.file;
  if (raceId !== "troll") return "";
  const record = getRecruitmentAssetRecord(`troll_target_${normalized}`);
  if (record?.sourceFile) return record.sourceFile;
  const value = RACE_RECRUITMENT_ASSETS.targets?.troll?.[normalized];
  if (typeof value === "string") return value;
  return value?.sourceFile || value?.file || getRecruitmentAssetPath(`troll_target_${normalized}`);
}

function getQuestionArt(kind, question, targetId) {
  const value = RACE_RECRUITMENT_ASSETS.questions?.[question?.id];
  const directPath = typeof value === "string" ? value : value?.file || getRecruitmentAssetPath(question?.id);
  if (directPath) return directPath;
  const raceId = state.recruitment?.raceId || getDefaultRecruitmentRaceId();
  if (kind === "physique") return getTargetArt(targetId) || getRaceArt(raceId) || getRecruitmentUiArt("registry");
  return getTargetArt(targetId) || getRaceArt(raceId) || getRecruitmentUiArt("registry");
}

function getEndingArt(endingType) {
  const raceId = state.recruitment?.raceId || getDefaultRecruitmentRaceId();
  const raceValue = RACE_RECRUITMENT_ASSETS.endings?.[raceId]?.[endingType];
  if (typeof raceValue === "string") return raceValue;
  if (raceValue?.file) return raceValue.file;
  if (raceId !== "troll") {
    const guildValue = RACE_RECRUITMENT_ASSETS.endings?.guild?.[endingType];
    if (typeof guildValue === "string") return guildValue;
    if (guildValue?.file) return guildValue.file;
    return getRecruitmentUiArt("verdict");
  }
  const value = RACE_RECRUITMENT_ASSETS.endings?.troll?.[endingType];
  if (typeof value === "string") return value;
  return value?.file || getRecruitmentAssetPath(`troll_ending_${endingType}`) || getRecruitmentUiArt("verdict");
}

function renderRecruitmentArt({ src = "", alt = "征召插图", className = "" } = {}) {
  const hasImage = Boolean(src);
  return `
    <figure class="recruit-art-frame ${className} ${hasImage ? "has-image" : "is-fallback"}">
      ${
        hasImage
          ? `<img src="${escapeAttribute(src)}" alt="${escapeAttribute(alt)}" loading="lazy" onerror="this.closest('.recruit-art-frame')?.classList.add('is-fallback'); this.remove();">`
          : ""
      }
      <span class="image-veil" aria-hidden="true"></span>
    </figure>
  `;
}

function normalizeRecruitmentTargetId(targetId) {
  return RECRUITMENT_TARGET_ALIASES[targetId] || targetId || "";
}

function getRecruitmentRace(raceId = state.recruitment?.raceId || getDefaultRecruitmentRaceId()) {
  const normalized = raceId || "troll";
  return FANTASY_ANCESTRIES.find((item) => item.id === normalized) || FANTASY_ANCESTRIES.find((item) => item.id === "troll") || null;
}

function getRecruitmentRaceCard(raceId = state.recruitment?.raceId || getDefaultRecruitmentRaceId()) {
  const recruitmentData = getRecruitmentData(raceId);
  const source = recruitmentData?.raceCard || getDefaultRecruitmentData()?.raceCard || {};
  const race = getRecruitmentRace(raceId);
  if (!race) return source;
  if (race.id === source.raceId) return source;
  return {
    raceId: race.id,
    raceNameZh: race.name,
    raceNameEn: race.label,
    title: `${race.name}血脉登记`,
    oneLine: race.note,
    bodyText: `${race.note} 公会会先按通用征召流程登记你的血脉锚点，再把它写入最终冒险者档案。`,
    warningText: `当前已接入${race.name}种族卡；职业投递与试炼暂用公会通用征召样板，最终档案会记录你选择的血脉。`,
    recruiterQuote: `书记员把${race.name}血脉牌翻到台面上：先登记，再投递，剩下交给骰桌。`,
    tags: race.tags || [],
  };
}

function adaptRecruitmentCopy(value) {
  if (typeof value !== "string") return value ?? "";
  const activeData = getRecruitmentData(state.recruitment?.raceId);
  if (activeData?.raceCard?.raceId === state.recruitment?.raceId) return value;
  const sourceName = RACE_RECRUITMENT_DATA?.raceCard?.raceNameZh;
  const race = getRecruitmentRace();
  if (!sourceName || !race || race.id === RACE_RECRUITMENT_DATA?.raceCard?.raceId) return value;
  return value.split(sourceName).join(race.name);
}

function beginRecruitment(preferredRaceId = state.homePreviewRaceId, options = {}) {
  const raceId = preferredRaceId || state.homePreviewRaceId || getDefaultRecruitmentRaceId();
  state.recruitment = {
    raceId,
    targetId: "",
    phase: "race",
    questionIndex: 0,
    narrativePlan: null,
    answers: [],
    scoreDelta: {},
    mbtiDelta: {},
    affinityDelta: {},
    alignmentDelta: {},
    triggerTags: [],
    toneCounts: {},
    feedback: null,
    calibration: null,
    judgement: null,
  };
  state.profile = options.skipRaceRegistry
    ? {
        ancestry: raceId,
        mbtiSelf: "未知",
        exercise: "unknown",
        sleep: "unknown",
        health: "none",
        audio: "visual",
      }
    : {};
  state.scores = {};
  state.axisStages = {};
  state.raw = {};
  state.traits = { ...INITIAL_TRAITS };
  state.mbtiProbe = null;
  state.mbtiProbeReturnScreen = null;
  state.personalityAnswers = 0;
  const directTargetId = normalizeRecruitmentTargetId(options.targetId || "");
  if (directTargetId) {
    state.recruitment.targetId = directTargetId;
    state.recruitment.narrativePlan = buildRecruitmentNarrativePlan(directTargetId);
    state.recruitment.phase = "physique";
    state.screen = "recruitPhysique";
  } else {
    state.screen = options.skipRaceRegistry ? "recruitTarget" : "raceSelect";
  }
  if (!options.deferRender) render();
}

function renderRaceSelect() {
  setProgress("血脉登记", 8);
  const selectedRaceId = state.recruitment?.raceId || getDefaultRecruitmentRaceId();
  const activeRace = getRecruitmentRaceCard(selectedRaceId);
  const hasActiveData = hasRecruitmentData(selectedRaceId);
  app.innerHTML = `
    <section class="screen recruitment-flow">
      <div class="recruit-step-head">
        <p class="eyebrow">Step 1 / Bloodline Registry</p>
        <h1>选择血脉锚点</h1>
        <p>种族不是装饰。它会改变体格鉴定、职业试炼、缺陷卡触发和最后的公会评价。</p>
      </div>
      <div class="race-registry">
        <div class="race-card-grid">
          ${FANTASY_ANCESTRIES.filter((item) => item.id !== "auto")
            .map((race) => {
              const active = race.id === selectedRaceId;
              const open = hasRecruitmentData(race.id);
              return `
                <button class="race-registry-card ${open ? "is-open" : "is-pending"} ${active ? "is-featured" : ""}" data-race="${race.id}" type="button" aria-pressed="${active ? "true" : "false"}">
                  ${renderRecruitmentArt({ src: getRaceArt(race.id), alt: `${race.name}血脉登记图`, className: "race-card-art" })}
                  <span>${active ? "已选血脉" : open ? "开放征召" : "文案待接入"}</span>
                  <strong>${race.name}</strong>
                  <small>${race.label}</small>
                  <p>${race.note}</p>
                </button>
              `;
            })
            .join("")}
        </div>
        <aside class="race-dossier">
          ${renderRecruitmentArt({ src: getRaceArt(activeRace?.raceId || selectedRaceId) || getRecruitmentUiArt("registry"), alt: `${activeRace?.raceNameZh || "当前"}血脉登记图`, className: "race-dossier-art" })}
          <p class="eyebrow">Selected Bloodline / 当前选择</p>
          <h2>${activeRace?.title || "血脉登记"}</h2>
          <p>${activeRace?.bodyText || "公会书记员正在整理这份血脉档案。"}</p>
          <div class="notice">${hasActiveData ? activeRace?.warningText || "特殊种族会改变体格和试炼口吻。" : `${activeRace?.raceNameZh || "该血脉"}正式征召文案还没接入，先选择巨魔或食人魔/巨人。`}</div>
          <div class="descriptor-tags">
            ${(activeRace?.tags || []).map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="actions">
            <button class="button primary" id="selectRace" type="button" ${hasActiveData ? "" : "disabled"}>登记${activeRace?.raceNameZh || "当前"}血脉</button>
            <button class="button ghost" id="backHome" type="button">返回大厅</button>
          </div>
        </aside>
      </div>
    </section>
  `;
  document.querySelectorAll("[data-race]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.recruitment.raceId = btn.dataset.race;
      renderRaceSelect();
    });
  });
  document.querySelector("#selectRace").addEventListener("click", () => {
    const raceId = state.recruitment?.raceId || selectedRaceId;
    state.recruitment.raceId = raceId;
    state.profile = {
      ancestry: raceId,
      mbtiSelf: "未知",
      exercise: "unknown",
      sleep: "unknown",
      health: "none",
      audio: "visual",
    };
    state.screen = "recruitTarget";
    render();
  });
  document.querySelector("#backHome").addEventListener("click", () => {
    state.screen = "start";
    render();
  });
}

function renderRecruitTargetSelect() {
  setProgress("征兵志愿投递", 18);
  const recruitmentData = getRecruitmentData(state.recruitment?.raceId);
  const targets = recruitmentData?.recruitTargets || [];
  if (!recruitmentData) {
    const raceCard = getRecruitmentRaceCard(state.recruitment?.raceId);
    app.innerHTML = `
      <section class="screen recruitment-flow">
        <div class="recruit-step-head">
          <p class="eyebrow">Recruitment Pending / 文案待接入</p>
          <h1>${raceCard?.raceNameZh || "该血脉"}征召档案未装订</h1>
          <p>这条血脉目前只有卡牌预览，还没有正式体格鉴定和职业试炼题库。</p>
        </div>
        <div class="actions">
          <button class="button ghost" id="backRace" type="button">重选血脉</button>
        </div>
      </section>
    `;
    document.querySelector("#backRace").addEventListener("click", () => {
      state.screen = "raceSelect";
      render();
    });
    return;
  }
  app.innerHTML = `
    <section class="screen recruitment-flow">
      <div class="recruit-step-head">
        <p class="eyebrow">Step 2 / Recruitment Desk</p>
        <h1>选择征兵目标</h1>
        <p>志愿只代表你敲响了哪扇门，不代表那扇门会立刻为你打开。</p>
      </div>
      <div class="target-choice-grid">
        ${targets.map((target) => renderRecruitTargetCard(target)).join("")}
      </div>
      <div class="actions">
        <button class="button ghost" id="backRace" type="button">重选血脉</button>
      </div>
    </section>
  `;
  document.querySelectorAll("[data-target-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.recruitment.targetId = btn.dataset.targetId;
      state.recruitment.narrativePlan = buildRecruitmentNarrativePlan(btn.dataset.targetId);
      state.recruitment.phase = "physique";
      state.recruitment.questionIndex = 0;
      state.recruitment.feedback = null;
      state.screen = "recruitPhysique";
      render();
    });
  });
  document.querySelector("#backRace").addEventListener("click", () => {
    state.screen = "start";
    render();
  });
}

function renderRecruitTargetCard(target) {
  const theme = getRecruitmentTheme(target.targetId);
  const professionName = getRecruitmentTargetProfession(target);
  const professionNameEn = getRecruitmentTargetClassEn(target);
  const trainingSite = getRecruitmentTargetTrainingSite(target);
  const summary = getRecruitmentTargetSummary(target);
  const acceptedStyle = target.acceptedStyle || target.description || `按${professionName}的核心方法完成职业检验。`;
  const likelyFailure = target.likelyFailure || target.riskText || "忽略职业要求，只依赖单一能力强行推进。";
  const hiddenRoute = target.hiddenRoute || "根据检验表现与人格倾向生成进阶方向。";
  return `
    <button class="target-contract ${theme.className}" data-target-id="${target.targetId}" style="--trial-accent:${theme.accent}; --trial-secondary:${theme.secondary}" type="button">
      ${renderRecruitmentArt({ src: getTargetArt(target.targetId) || getRaceArt(state.recruitment?.raceId) || getRecruitmentUiArt("registry"), alt: `${professionName}征兵目标图`, className: "target-contract-art" })}
      <span class="contract-seal">${theme.seal}</span>
      <p class="eyebrow">${professionNameEn}</p>
      <h2>${professionName}</h2>
      <strong>${trainingSite}</strong>
      <p>${adaptRecruitmentCopy(summary)}</p>
      <dl>
        <div>
          <dt>录取打法</dt>
          <dd>${adaptRecruitmentCopy(acceptedStyle)}</dd>
        </div>
        <div>
          <dt>常见失败</dt>
          <dd>${adaptRecruitmentCopy(likelyFailure)}</dd>
        </div>
        <div>
          <dt>隐藏路线</dt>
          <dd>${adaptRecruitmentCopy(hiddenRoute)}</dd>
        </div>
      </dl>
      <div class="descriptor-tags">
        ${(target.riskTags || []).map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    </button>
  `;
}

function getRecruitmentTarget(targetId = state.recruitment?.targetId) {
  const normalized = normalizeRecruitmentTargetId(targetId);
  const recruitmentData = getRecruitmentData(state.recruitment?.raceId);
  return (recruitmentData?.recruitTargets || []).find((item) => item.targetId === normalized) || null;
}

function getRecruitmentQuestions(kind) {
  const recruitmentData = getRecruitmentData(state.recruitment?.raceId);
  if (!recruitmentData) return [];
  const source = kind === "physique" ? recruitmentData.physiqueChecks || [] : recruitmentData.trialSets?.[state.recruitment?.targetId] || [];
  if (!state.recruitment.narrativePlan) {
    state.recruitment.narrativePlan = buildRecruitmentNarrativePlan(state.recruitment?.targetId);
  }
  const plannedIds = state.recruitment.narrativePlan?.[kind] || [];
  const byId = new Map(source.map((question) => [question.id, question]));
  const planned = plannedIds.map((id) => byId.get(id)).filter(Boolean);
  if (planned.length) return planned;
  return source.slice(0, RECRUITMENT_STORY_COUNTS[kind] || source.length);
}

function buildRecruitmentNarrativePlan(targetId) {
  const recruitmentData = getRecruitmentData(state.recruitment?.raceId);
  if (!recruitmentData) return { physique: [], trial: [] };
  const physique = shuffle([...(recruitmentData.physiqueChecks || [])]).slice(0, RECRUITMENT_STORY_COUNTS.physique);
  const trial = shuffle([...(recruitmentData.trialSets?.[targetId] || [])]).slice(0, RECRUITMENT_STORY_COUNTS.trial);
  return {
    physique: physique.map((question) => question.id),
    trial: trial.map((question) => question.id),
  };
}

function renderRecruitmentQuestionScreen(kind) {
  const recruitment = state.recruitment;
  if (!recruitment) {
    state.screen = "start";
    render();
    return;
  }
  const target = getRecruitmentTarget();
  const theme = getRecruitmentTheme(target?.targetId);
  const professionName = getRecruitmentTargetProfession(target);
  const targetSummary = getRecruitmentTargetSummary(target);
  const questions = getRecruitmentQuestions(kind);
  const index = recruitment.questionIndex || 0;
  const actNumber = kind === "physique" ? 1 : index + 2;
  const actTitle = ["体魄代价", "职业方法", "风险底线"][actNumber - 1] || "征召试炼";
  const question = questions[index];
  if (!question) {
    if (kind === "physique") {
      recruitment.phase = "trial";
      recruitment.questionIndex = 0;
      recruitment.feedback = null;
      state.screen = "recruitTrial";
    } else {
      beginRecruitmentCalibration();
    }
    render();
    return;
  }
  const stepLabel = kind === "physique" ? "血脉体格鉴定" : `${professionName}试炼`;
  const progressBase = kind === "physique" ? 24 : 48;
  const progressSpan = kind === "physique" ? 18 : 30;
  setProgress(`${stepLabel} ${index + 1}/${questions.length}`, progressBase + (index / Math.max(questions.length, 1)) * progressSpan);
  const feedback = recruitment.feedback;
  const raceCard = getRecruitmentRaceCard();
  const continueLabel =
    index + 1 >= questions.length ? (kind === "physique" ? "进入职业试炼" : "进入六维实战校准") : "继续试炼";
  const questionArt = getQuestionArt(kind, question, target?.targetId);
  app.innerHTML = `
    <section class="screen recruitment-flow trial-shell ${kind === "physique" ? "trial-physique" : theme.className}" style="--trial-accent:${theme.accent}; --trial-secondary:${theme.secondary}">
      <div class="trial-topline">
        <div>
          <p class="eyebrow">${kind === "physique" ? "Step 3 / Bloodline Physique" : "Step 4 / Field Trial"}</p>
          <div class="trial-act-heading">
            <span class="trial-act-number">ACT ${actNumber}</span>
            <div>
              <small>三幕征召试炼</small>
              <h1>${actTitle}</h1>
            </div>
          </div>
        </div>
        <div class="trial-progress-card">
          <span>${actNumber}</span>
          <small>/ 3</small>
        </div>
      </div>
      <div class="trial-layout">
        <aside class="trial-dossier-card">
          <span class="contract-seal">${kind === "physique" ? "BODY" : theme.seal}</span>
          <h2>${kind === "physique" ? raceCard.title : professionName}</h2>
          <p>${kind === "physique" ? raceCard.warningText : adaptRecruitmentCopy(targetSummary)}</p>
          <dl>
            <div>
              <dt>血脉</dt>
              <dd>${raceCard.raceNameZh}</dd>
            </div>
            <div>
              <dt>志愿</dt>
              <dd>${professionName}</dd>
            </div>
            <div>
              <dt>试炼材质</dt>
              <dd>${kind === "physique" ? "骨架、体型、空间代价" : theme.texture}</dd>
            </div>
          </dl>
          ${renderRecruitmentLeanings()}
        </aside>
        <article class="trial-question-card">
          ${renderRecruitmentArt({ src: questionArt, alt: `${question.title}试炼场景图`, className: "trial-scene-art" })}
          <p class="eyebrow">${question.id}</p>
          <h2>${adaptRecruitmentCopy(question.title)}</h2>
          <p class="trial-scene">${adaptRecruitmentCopy(question.scene)}</p>
          <h3>${adaptRecruitmentCopy(question.prompt)}</h3>
          <div class="trial-option-grid">
            ${question.options
              .map(
                (option, optionIndex) => `
                  <button class="trial-option ${feedback?.optionId === option.id ? "is-selected" : ""}" data-choice="${optionIndex}" ${feedback ? "disabled" : ""} type="button">
                    <span>${option.id}</span>
                    <strong>${adaptRecruitmentCopy(option.text)}</strong>
                  </button>
                `,
              )
              .join("")}
          </div>
          ${
            feedback
              ? `
                <div class="npc-feedback ${feedback.outcomeTone ? `tone-${feedback.outcomeTone}` : ""}">
                  <p class="eyebrow">Recruiter Note / ${feedback.outcomeTone || "批注"}</p>
                  <blockquote>${adaptRecruitmentCopy(feedback.npcReply)}</blockquote>
                  <p>${adaptRecruitmentCopy(feedback.branchHint || "档案已更新，继续试炼。")}</p>
                  <span class="feedback-auto-progress" aria-hidden="true"></span>
                </div>
                <div class="actions">
                  <button class="button primary" id="continueRecruitment" type="button">立即${continueLabel}</button>
                </div>
              `
              : ""
          }
        </article>
      </div>
    </section>
  `;
  if (feedback) {
    let advanced = false;
    const advance = () => {
      if (advanced) return;
      advanced = true;
      advanceRecruitmentQuestion(kind, questions.length);
    };
    document.querySelector("#continueRecruitment").addEventListener("click", advance);
    const autoAdvanceTimer = setTimeout(advance, 3200);
    cleanupFns.push(() => clearTimeout(autoAdvanceTimer));
  } else {
    document.querySelectorAll("[data-choice]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const option = question.options[Number(btn.dataset.choice)];
        chooseRecruitmentOption(kind, question, option);
      });
    });
  }
}

function renderRecruitmentLeanings() {
  const recruitment = state.recruitment || {};
  const topAffinity = Object.entries(getNormalizedRecruitmentAffinity(recruitment.affinityDelta))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2);
  const topScores = Object.entries(recruitment.scoreDelta || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([axis, value]) => `${getAxisName(axis)} ${value >= 0 ? "+" : ""}${value}`);
  return `
    <div class="trial-leanings">
      <strong>档案边注</strong>
      <p>${topAffinity.length ? topAffinity.map(([id, value]) => `${getRecruitmentTheme(id).name} ${value >= 0 ? "+" : ""}${value}`).join(" / ") : "征召官仍在观察。"}</p>
      <p>${topScores.length ? topScores.join(" / ") : "六维暂未改写。"}</p>
    </div>
  `;
}

function getAxisName(axisId) {
  return ATTRIBUTES.find((axis) => axis.id === axisId)?.name || axisId;
}

function chooseRecruitmentOption(kind, question, option) {
  const recruitment = state.recruitment;
  addDeltaMap(recruitment.scoreDelta, option.scoreDelta);
  addDeltaMap(recruitment.mbtiDelta, option.mbtiDelta);
  addRecruitmentAffinityDelta(recruitment.affinityDelta, option.affinityDelta);
  addDeltaMap(recruitment.alignmentDelta, option.alignmentDelta);
  (option.triggerTags || []).forEach((tag) => {
    if (!recruitment.triggerTags.includes(tag)) recruitment.triggerTags.push(tag);
  });
  if (option.outcomeTone) {
    recruitment.toneCounts[option.outcomeTone] = (recruitment.toneCounts[option.outcomeTone] || 0) + 1;
  }
  recruitment.answers.push({
    kind,
    questionId: question.id,
    title: question.title,
    optionId: option.id,
    optionText: option.text,
    npcReply: option.npcReply,
    outcomeTone: option.outcomeTone || "",
    branchHint: option.branchHint || "",
    triggerTags: option.triggerTags || [],
  });
  recruitment.feedback = {
    optionId: option.id,
    npcReply: option.npcReply,
    outcomeTone: option.outcomeTone || "",
    branchHint: option.branchHint || "",
  };
  render();
}

function addDeltaMap(target, delta = {}) {
  Object.entries(delta || {}).forEach(([key, value]) => {
    target[key] = (target[key] || 0) + Number(value || 0);
  });
}

function addRecruitmentAffinityDelta(target, delta = {}) {
  Object.entries(delta || {}).forEach(([key, value]) => {
    const normalized = normalizeRecruitmentTargetId(key);
    target[normalized] = (target[normalized] || 0) + Number(value || 0);
  });
}

function advanceRecruitmentQuestion(kind, total) {
  const recruitment = state.recruitment;
  recruitment.feedback = null;
  if (recruitment.questionIndex + 1 < total) {
    recruitment.questionIndex += 1;
  } else if (kind === "physique") {
    recruitment.phase = "trial";
    recruitment.questionIndex = 0;
    state.screen = "recruitTrial";
  } else {
    beginRecruitmentCalibration();
  }
  render();
}

function finalizeRecruitment() {
  const recruitment = state.recruitment;
  const target = getRecruitmentTarget();
  const calibrationStages = state.axisStages || {};
  const base = 5;
  const storyScores = Object.fromEntries(
    ATTRIBUTES.map((axis) => {
      const delta = recruitment.scoreDelta[axis.id] || 0;
      const targetBoost = (target?.recommendedStats || []).includes(axis.id) ? 0.45 : 0;
      return [axis.id, clamp(base + delta * 0.72 + targetBoost)];
    }),
  );
  const scores = Object.fromEntries(
    ATTRIBUTES.map((axis) => {
      const storyScore = storyScores[axis.id];
      const calibrationScore = getRecruitmentCalibrationAxisScore(axis.id, calibrationStages);
      const hasCalibration = typeof calibrationScore === "number";
      return [axis.id, hasCalibration ? clamp(storyScore * 0.6 + calibrationScore * 0.4) : storyScore];
    }),
  );
  const traits = { ...INITIAL_TRAITS };
  addDeltaMap(traits, recruitment.mbtiDelta);
  addDeltaMap(traits, recruitment.alignmentDelta);
  applyRecruitmentClassBias(traits, recruitment.targetId);

  state.profile = {
    ancestry: recruitment.raceId || getDefaultRecruitmentRaceId(),
    mbtiSelf: "未知",
    exercise: "unknown",
    sleep: recruitment.triggerTags.includes("再生代价") || recruitment.triggerTags.includes("野性饥饿") ? "poor" : "unknown",
    health: recruitment.triggerTags.includes("旧伤") ? "mild" : "none",
    audio: "visual",
  };
  state.scores = scores;
  state.traits = traits;
  state.mbtiProbe = null;
  state.mbtiProbeReturnScreen = null;
  state.axisStages = buildRecruitmentAxisStages(storyScores, target, calibrationStages);
  state.raw = {
    recruitment: {
      raceId: recruitment.raceId,
      targetId: recruitment.targetId,
      answers: recruitment.answers,
      triggerTags: recruitment.triggerTags,
      calibration: summarizeRecruitmentCalibration(calibrationStages),
    },
  };
  recruitment.judgement = buildRecruitmentJudgement();
}

function applyRecruitmentClassBias(traits, targetId) {
  const bias = {
    barbarian_camp: { S: 1, P: 1, chaotic: 1, action: 2, risk: 1 },
    fighter_line: { S: 1, J: 1, lawful: 2, order: 2 },
    warlock_contract: { N: 1, T: 1, self: 1, control: 1 },
    druid_mutation_circle: { N: 1, F: 1, good: 1, empathy: 1 },
    guild_barbarian: { S: 1, P: 1, chaotic: 1, action: 2, risk: 1 },
    guild_fighter: { S: 1, J: 1, lawful: 1, order: 2, control: 1 },
    guild_cleric: { F: 1, J: 1, good: 2, empathy: 1 },
    guild_druid: { N: 1, F: 1, good: 1, empathy: 1 },
    guild_warlock: { N: 1, T: 1, self: 1, control: 1 },
  };
  addDeltaMap(traits, bias[targetId] || {});
}

function getRecruitmentCalibrationAxisScore(axisId, calibrationStages = state.axisStages || {}) {
  const stages = Object.values(calibrationStages[axisId] || {});
  if (!stages.length) return null;
  const totalWeight = stages.reduce((sum, item) => sum + (item.weight || 1), 0) || 1;
  return clamp(stages.reduce((sum, item) => sum + item.score * (item.weight || 1), 0) / totalWeight);
}

function summarizeRecruitmentCalibration(calibrationStages = state.axisStages || {}) {
  return Object.fromEntries(
    ATTRIBUTES.map((axis) => {
      const score = getRecruitmentCalibrationAxisScore(axis.id, calibrationStages);
      return [axis.id, typeof score === "number" ? score : null];
    }),
  );
}

function buildRecruitmentAxisStages(storyScores, target, calibrationStages = {}) {
  return Object.fromEntries(
    ATTRIBUTES.map((axis) => {
      const playedEntries = Object.entries(calibrationStages[axis.id] || {});
      const hasCalibration = playedEntries.length > 0;
      const entries = {
        [`recruit_${axis.id}`]: {
          title: "征召试炼",
          score: storyScores[axis.id],
          weight: hasCalibration ? 0.6 : 1,
          difficulty: "种族流程",
          raw: { recruitment: true },
          note: `${getRecruitmentRaceCard().raceNameZh || "征召血脉"} / ${getRecruitmentTargetProfession(target)} / 文案判断`,
        },
      };
      playedEntries.forEach(([stageId, item]) => {
        entries[`calibration_${stageId}`] = {
          ...item,
          title: `实战校准 · ${item.title}`,
          weight: 0.4,
          raw: { ...(item.raw || {}), calibration: true },
          note: item.note || "六维小游戏实测",
        };
      });
      return [axis.id, entries];
    }),
  );
}

function buildRecruitmentJudgement() {
  const recruitment = state.recruitment;
  const target = getRecruitmentTarget();
  const topTargetId = getTopRecruitmentAffinityTarget();
  const affinity = getNormalizedRecruitmentAffinity(recruitment.affinityDelta);
  const selectedAffinity = affinity[normalizeRecruitmentTargetId(recruitment.targetId)] || 0;
  const topAffinity = affinity[topTargetId] || 0;
  const danger = recruitment.toneCounts["危险"] || 0;
  const absurd = recruitment.toneCounts["荒诞"] || 0;
  const accepted = recruitment.toneCounts["合格"] || 0;
  const answerCount = Math.max(1, recruitment.answers.length);
  const dangerRate = danger / answerCount;
  const absurdRate = absurd / answerCount;
  const acceptedRate = accepted / answerCount;
  const transferMargin = Math.max(1, answerCount * 0.35);
  let endingType = "probation";
  if (dangerRate >= 0.6) endingType = "blacklisted";
  else if (topTargetId && topTargetId !== recruitment.targetId && topAffinity >= selectedAffinity + transferMargin) endingType = "transferred";
  else if (absurdRate >= 0.5 && absurd >= accepted) endingType = "absurdAccepted";
  else if (acceptedRate >= 0.5 && (topTargetId === normalizeRecruitmentTargetId(recruitment.targetId) || selectedAffinity >= 2)) endingType = "accepted";

  const ending = pickRecruitmentEnding(endingType, target?.targetId, topTargetId);
  return {
    endingType,
    ending,
    target,
    topTargetId,
    metrics: { answerCount, dangerRate, absurdRate, acceptedRate, selectedAffinity, topAffinity },
    recommendedClassName: RECRUITMENT_TARGET_CLASS[normalizeRecruitmentTargetId(topTargetId)] || RECRUITMENT_TARGET_CLASS[target?.targetId] || "",
  };
}

function getTopRecruitmentAffinityTarget() {
  const entries = Object.entries(getNormalizedRecruitmentAffinity(state.recruitment?.affinityDelta)).sort((a, b) => b[1] - a[1]);
  return entries[0]?.[0] || state.recruitment?.targetId || "";
}

function getNormalizedRecruitmentAffinity(affinityDelta = {}) {
  const normalized = {};
  Object.entries(affinityDelta || {}).forEach(([key, value]) => {
    const targetId = normalizeRecruitmentTargetId(key);
    normalized[targetId] = (normalized[targetId] || 0) + Number(value || 0);
  });
  return normalized;
}

function pickRecruitmentEnding(endingType, targetId, topTargetId) {
  const recruitmentData = getRecruitmentData(state.recruitment?.raceId);
  const endings = recruitmentData?.endingTemplates || [];
  const sameType = endings.filter((item) => item.endingType === endingType);
  const selectedTargetId = normalizeRecruitmentTargetId(targetId);
  const recommendedTargetId = normalizeRecruitmentTargetId(topTargetId);
  const byTarget =
    endingType === "transferred"
      ? sameType.find((item) => item.rejectedClass === selectedTargetId && (item.recommendedClass || []).includes(recommendedTargetId)) ||
        sameType.find((item) => (item.recommendedClass || []).includes(recommendedTargetId))
      : sameType.find((item) => (item.recommendedClass || []).includes(selectedTargetId)) ||
        sameType.find((item) => (item.recommendedClass || []).includes(recommendedTargetId));
  return byTarget || sameType[0] || endings[0] || null;
}

function renderRecruitmentJudgement() {
  const recruitment = state.recruitment;
  if (!recruitment?.judgement?.ending) {
    finalizeRecruitment();
  }
  const judgement = recruitment.judgement;
  const ending = judgement.ending;
  const target = judgement.target;
  const theme = getRecruitmentTheme(target?.targetId);
  const endingArt = getEndingArt(ending.endingType);
  setProgress("公会判定完成", 86);
  app.innerHTML = `
    <section class="screen recruitment-flow judgement-page ${theme.className}" style="--trial-accent:${theme.accent}; --trial-secondary:${theme.secondary}">
      <div class="judgement-scroll">
        ${renderRecruitmentArt({ src: endingArt, alt: `${verdictLabel(ending.endingType)}公会判定图`, className: "judgement-art" })}
        <p class="eyebrow">Guild Verdict / ${ending.endingType}</p>
        <div class="verdict-stamp">${verdictLabel(ending.endingType)}</div>
        <h1>${adaptRecruitmentCopy(ending.title)}</h1>
        <p class="lead">${adaptRecruitmentCopy(ending.verdictLine)}</p>
        <div class="judgement-grid">
          <div>
            <strong>报名志愿</strong>
            <span>${getRecruitmentTargetProfession(target)} · ${getRecruitmentTargetTrainingSite(target)}</span>
          </div>
          <div>
            <strong>推荐归宿</strong>
            <span>${(ending.recommendedClass || []).map((id) => getRecruitmentTheme(id).name).join(" / ")}</span>
          </div>
          <div>
            <strong>上桌功能</strong>
            <span>${adaptRecruitmentCopy(ending.tableFunction)}</span>
          </div>
          <div>
            <strong>可演缺陷</strong>
            <span>${adaptRecruitmentCopy(ending.playableFlaw)}</span>
          </div>
        </div>
        <p>${adaptRecruitmentCopy(ending.explanation)}</p>
        <blockquote>${adaptRecruitmentCopy(ending.nextHook)}</blockquote>
        <div class="descriptor-tags">
          ${(ending.tags || []).map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="actions">
          <button class="button primary" id="openRecruitResult" type="button">领取冒险者档案</button>
          <button class="button ghost" id="restartRecruitment" type="button">重新登记</button>
        </div>
      </div>
    </section>
  `;
  document.querySelector("#openRecruitResult").addEventListener("click", () => {
    if (shouldRunMbtiProbe()) {
      state.mbtiProbeReturnScreen = "result";
      state.screen = "mbtiProbe";
    } else {
      state.screen = "result";
    }
    render();
  });
  document.querySelector("#restartRecruitment").addEventListener("click", () => {
    beginRecruitment();
  });
}

function verdictLabel(type) {
  const map = {
    accepted: "正式录取",
    probation: "见习保留",
    transferred: "转岗推荐",
    blacklisted: "黑名单人才",
    absurdAccepted: "荒诞通过",
  };
  return map[type] || "征召判定";
}

function getRecruitmentCompositeStageId(trialId, targetId) {
  const normalized = normalizeRecruitmentTargetId(targetId);
  const enduranceRoutes = new Set(["warlock_contract", "druid_mutation_circle", "guild_warlock", "guild_wizard", "guild_artificer", "guild_sorcerer"]);
  const perceptionRoutes = new Set(["druid_mutation_circle", "guild_druid", "guild_ranger", "guild_wizard", "guild_cleric"]);
  const presenceRoutes = new Set(["warlock_contract", "guild_warlock", "guild_bard", "guild_paladin", "guild_cleric", "guild_sorcerer"]);
  if (trialId === "body") return enduranceRoutes.has(normalized) ? "con_focus" : "str_burst";
  if (trialId === "field") return perceptionRoutes.has(normalized) ? "wis_color" : "dex_reaction";
  return presenceRoutes.has(normalized) ? "cha_dialogue" : "int_memory";
}

function findStagePointer(stageId) {
  for (let axisIndex = 0; axisIndex < ATTRIBUTES.length; axisIndex += 1) {
    const stageIndex = ATTRIBUTES[axisIndex].stages.findIndex((stage) => stage.id === stageId);
    if (stageIndex >= 0) return { axisIndex, stageIndex };
  }
  return { axisIndex: 0, stageIndex: 0 };
}

function getRecruitmentCalibrationPlan() {
  const targetId = state.recruitment?.targetId;
  return RECRUITMENT_COMPOSITE_TRIALS.map((trial) => {
    const stageId = getRecruitmentCompositeStageId(trial.id, targetId);
    const pointer = findStagePointer(stageId);
    return {
      ...trial,
      stageId,
      ...pointer,
    };
  });
}

function beginRecruitmentCalibration() {
  const recruitment = state.recruitment;
  if (!recruitment) {
    state.screen = "start";
    render();
    return;
  }
  recruitment.phase = "calibration";
  recruitment.feedback = null;
  recruitment.calibration = {
    index: 0,
    plan: getRecruitmentCalibrationPlan(),
  };
  state.scores = {};
  state.axisStages = {};
  state.raw = {};
  setRecruitmentCalibrationPointer();
  state.screen = "recruitCalibration";
}

function setRecruitmentCalibrationPointer() {
  const plan = state.recruitment?.calibration?.plan || getRecruitmentCalibrationPlan();
  const index = state.recruitment?.calibration?.index || 0;
  const item = plan[index] || plan[0];
  state.current = item.axisIndex;
  state.stage = item.stageIndex;
}

function renderRecruitmentCalibration() {
  const recruitment = state.recruitment;
  if (!recruitment) {
    state.screen = "start";
    render();
    return;
  }
  const plan = recruitment.calibration?.plan || getRecruitmentCalibrationPlan();
  if (!recruitment.calibration) recruitment.calibration = { index: 0, plan };
  setRecruitmentCalibrationPointer();
  const index = recruitment.calibration.index || 0;
  const calibrationItem = plan[index];
  const target = getRecruitmentTarget();
  const theme = getRecruitmentTheme(target?.targetId);
  const axis = ATTRIBUTES[state.current];
  const stage = axis.stages[state.stage];
  const pairedAxes = (calibrationItem.axisIds || [axis.id]).map((axisId) => ATTRIBUTES.find((item) => item.id === axisId)).filter(Boolean);
  setProgress(`复合实战 ${index + 1}/${plan.length}：${calibrationItem.label}`, 72 + (index / Math.max(1, plan.length)) * 18);

  app.innerHTML = `
    <section class="screen recruitment-flow trial-shell recruitment-calibration ${theme.className}" style="--trial-accent:${theme.accent}; --trial-secondary:${theme.secondary}; --axis-color:${axis.color}">
      <div class="trial-topline">
        <div>
          <p class="eyebrow">Step 5 / Ability Calibration</p>
          <h1>三场复合实战</h1>
          <p>每场检定同时覆盖两项能力。征召官先看你怎么选，骰桌再看你怎么做，最终仍按叙事 60% / 实战 40% 写入雷达。</p>
        </div>
        <div class="trial-progress-card">
          <span>${index + 1}</span>
          <small>/ ${plan.length}</small>
        </div>
      </div>
      <div class="test-stage stage-shell calibration-stage" style="--axis-color:${axis.color}">
        <div class="test-head">
          <div class="test-title">
            <span class="axis-badge">${axis.abbr}</span>
            <div>
              <p class="eyebrow">${getRecruitmentTargetProfession(target)}校准 / ${calibrationItem.label} / ${stage.difficulty}</p>
              <h2>${calibrationItem.label} · ${stage.title}</h2>
              <p>${axis.intro}</p>
            </div>
          </div>
          <div class="composite-axis-pair" aria-label="本场结算属性">
            ${pairedAxes
              .map(
                (pairedAxis) => `
                  <span style="--pair-color:${pairedAxis.color}">
                    <b>${pairedAxis.abbr}</b>
                    <small>${pairedAxis.name}</small>
                  </span>
                `,
              )
              .join("")}
          </div>
          <div class="calibration-ratio">
            <strong>60%</strong><span>征召判断</span>
            <strong>40%</strong><span>实战校准</span>
          </div>
        </div>
        <div class="stage-track calibration-track">
          ${plan
            .map((item, itemIndex) => {
              return `
                <span class="stage-chip ${itemIndex === index ? "active" : ""} ${itemIndex < index ? "done" : ""}">
                  ${itemIndex + 1}. ${item.label}
                </span>
              `;
            })
            .join("")}
        </div>
        <div id="stageMount"></div>
      </div>
    </section>
  `;
  getStageRenderers()[stage.type](axis, stage);
  const gameStart = document.querySelector("#startGame");
  if (gameStart) {
    gameStart.addEventListener(
      "click",
      () => document.querySelector(".calibration-stage")?.classList.add("is-playing"),
      { once: true },
    );
  }
}

function advanceRecruitmentCalibration() {
  const calibration = state.recruitment?.calibration;
  if (!calibration) {
    beginRecruitmentCalibration();
    render();
    return;
  }
  if (calibration.index < calibration.plan.length - 1) {
    calibration.index += 1;
    setRecruitmentCalibrationPointer();
    render();
    return;
  }
  finalizeRecruitment();
  if (shouldRunMbtiProbe()) {
    state.mbtiProbeReturnScreen = "result";
    state.screen = "mbtiProbe";
  } else {
    state.screen = "result";
  }
  render();
}

function renderProfile() {
  setProgress("开卡前的现实锚点", 6);
  app.innerHTML = `
    <section class="screen">
      <div class="tool-panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">Session 0 / Reality Check</p>
            <h2>先填一张现实锚点卡</h2>
            <p>体质检定会参考一点现实状态。你可以填写基础参数，也可以跳过隐私项；已知 MBTI 可直接自填，后面的情境题只负责补扮演口吻。</p>
          </div>
          <button class="button ghost" id="skipProfile" type="button">交给默认骰</button>
        </div>
        <form id="profileForm" class="form-grid">
          <div class="field">
            <label for="age">年龄</label>
            <input id="age" name="age" type="number" min="10" max="90" placeholder="例如 28" />
          </div>
          <div class="field">
            <label for="height">身高 cm</label>
            <input id="height" name="height" type="number" min="30" max="600" placeholder="170；极端值会转 DND 体型" />
          </div>
          <div class="field">
            <label for="weight">体重 kg</label>
            <input id="weight" name="weight" type="number" min="1" max="1600" placeholder="62；巨人体型也能填" />
          </div>
          <div class="field">
            <label for="bodyFat">体脂率，可跳过</label>
            <input id="bodyFat" name="bodyFat" type="number" min="3" max="60" placeholder="例如 24" />
          </div>
          <div class="field">
            <label for="exercise">每周运动频率</label>
            <select id="exercise" name="exercise">
              <option value="unknown">不确定 / 跳过</option>
              <option value="none">基本不运动</option>
              <option value="light">1-2 次轻中强度</option>
              <option value="regular">3-4 次规律运动</option>
              <option value="high">5 次以上高频运动</option>
            </select>
          </div>
          <div class="field">
            <label for="sleep">最近睡眠状态</label>
            <select id="sleep" name="sleep">
              <option value="unknown">不确定 / 跳过</option>
              <option value="good">稳定，恢复感不错</option>
              <option value="average">一般，偶尔疲惫</option>
              <option value="poor">偏差，明显影响状态</option>
            </select>
          </div>
          <div class="field">
            <label for="health">健康影响</label>
            <select id="health" name="health">
              <option value="none">没有明显影响</option>
              <option value="mild">有轻微影响</option>
              <option value="moderate">有中等影响</option>
              <option value="skip">不想填写</option>
            </select>
          </div>
          <div class="field">
            <label for="ancestry">奇幻种族锚点，可选</label>
            <select id="ancestry" name="ancestry">
              ${FANTASY_ANCESTRIES.map((item) => `<option value="${item.id}">${item.name}${item.id === "auto" ? "" : ` · ${item.label}`}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="mbtiSelf">已知 MBTI，可选</label>
            <select id="mbtiSelf" name="mbtiSelf">
              ${MBTI_TYPES.map((type) => `<option value="${type}">${type}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="audio">音频题</label>
            <select id="audio" name="audio">
              <option value="visual">先用视觉替代题</option>
              <option value="audio">可以播放声音</option>
            </select>
          </div>
        </form>
        <div class="notice">
          这里不是体型评价，只给体质轴一个现实参照。种族锚点可以直接选择，不需要靠身高体重解锁；身高体重超出普通人校准区间时，会额外转成 DND 生物体型锚点，不按现实 BMI 硬判。
        </div>
        <div class="actions">
          <button class="button primary" id="profileNext" type="button">进入第一轮检定</button>
        </div>
      </div>
    </section>
  `;
  document.querySelector("#skipProfile").addEventListener("click", () => {
    state.profile = {};
    beginTests();
  });
  document.querySelector("#profileNext").addEventListener("click", () => {
    const form = new FormData(document.querySelector("#profileForm"));
    state.profile = Object.fromEntries(form.entries());
    beginTests();
  });
}

function beginTests() {
  state.recruitment = null;
  state.current = 0;
  state.stage = 0;
  state.scores = {};
  state.axisStages = {};
  state.raw = {};
  state.traits = { ...INITIAL_TRAITS };
  state.mbtiProbe = null;
  state.personalityAnswers = 0;
  state.screen = "test";
  render();
}

function renderTest() {
  const axis = ATTRIBUTES[state.current];
  const stage = axis.stages[state.stage];
  const totalStages = ATTRIBUTES.reduce((sum, item) => sum + item.stages.length, 0);
  const doneStages =
    ATTRIBUTES.slice(0, state.current).reduce((sum, item) => sum + item.stages.length, 0) + state.stage;
  setProgress(`${axis.name}检定 ${state.stage + 1}/${axis.stages.length}：${stage.title}`, 10 + (doneStages / totalStages) * 74);

  app.innerHTML = `
    <section class="screen">
      <div class="test-stage stage-shell" style="--axis-color:${axis.color}">
        <div class="test-head">
          <div class="test-title">
            <span class="axis-badge">${axis.abbr}</span>
            <div>
              <p class="eyebrow">${axis.theme} / ${stage.difficulty}</p>
              <h2>${stage.title}</h2>
              <p>${axis.intro}</p>
            </div>
          </div>
          <button class="button ghost" id="skipStage" type="button">交给 DM 掷默认骰</button>
        </div>
        <div class="stage-track">
          ${axis.stages
            .map(
              (item, index) => `
                <span class="stage-chip ${index === state.stage ? "active" : ""} ${index < state.stage ? "done" : ""}">
                  ${index + 1}. ${item.title}
                </span>
              `,
            )
            .join("")}
        </div>
        <div id="stageMount"></div>
      </div>
    </section>
  `;

  document.querySelector("#skipStage").addEventListener("click", () => {
    completeStage(5.2, { skipped: true, difficulty: stage.difficulty }, "DM 代掷一枚保底骰，使用中性参考分。");
  });

  getStageRenderers()[stage.type](axis, stage);
}

function getStageRenderers() {
  return {
    clickWaves: renderClickWaves,
    stability: renderStability,
    reactionLadder: renderReactionLadder,
    traceLine: renderTraceLine,
    dodge: renderDodge,
    bodyPanel: renderBodyPanel,
    rhythm: renderRhythm,
    memoryLadder: renderMemoryLadder,
    abstractQuiz: renderAbstractQuiz,
    reasoningQuiz: renderReasoningQuiz,
    colorLadder: renderColorLadder,
    dualBall: renderDualBall,
    schulte: renderSchulte,
    charismaQuiz: renderCharismaQuiz,
    alignmentQuiz: renderAlignmentQuiz,
  };
}

function stageGuide({ measure, rule, scoring }) {
  const flavor = getCurrentStageFlavor();
  return `
    <div class="stage-guide">
      <div class="stage-guide-banner">
        <span class="d20-mark">d20</span>
        <div>
          <small>${flavor.check}</small>
          <strong>${flavor.scene}</strong>
          <p>${flavor.stakes}</p>
        </div>
        <span class="dc-chip">${flavor.dc}</span>
      </div>
      <div class="guide-scroll"><strong>检定目标</strong><p>${measure}</p></div>
      <div class="guide-scroll"><strong>本轮玩法</strong><p>${rule}</p></div>
      <div class="guide-scroll"><strong>掷骰结算</strong><p>${scoring}</p></div>
    </div>
  `;
}

function metricStrip(items) {
  return `
    <div class="metric-strip">
      ${items
        .map(
          (item) => `
            <div class="metric">
              <small>${item.label}</small>
              <strong>${item.value}</strong>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function completeStage(score, raw, note) {
  const axis = ATTRIBUTES[state.current];
  const stage = axis.stages[state.stage];
  const calibration = state.screen === "recruitCalibration" ? state.recruitment?.calibration : null;
  const calibrationItem = calibration?.plan?.[calibration.index || 0];
  const scoredAxisIds = calibrationItem?.axisIds || [axis.id];
  scoredAxisIds.forEach((axisId) => {
    const scoredAxis = ATTRIBUTES.find((item) => item.id === axisId) || axis;
    const isHostAxis = axisId === axis.id;
    const adjustedScore = isHostAxis ? clamp(score) : clamp(5 + (score - 5) * 0.88);
    if (!state.axisStages[axisId]) state.axisStages[axisId] = {};
    const stageKey = calibrationItem ? `${stage.id}_${axisId}` : stage.id;
    state.axisStages[axisId][stageKey] = {
      score: adjustedScore,
      title: calibrationItem ? `${calibrationItem.label} · ${scoredAxis.name}` : stage.title,
      weight: calibrationItem ? 1 : stage.weight || 1,
      difficulty: stage.difficulty,
      raw: { ...raw, compositeTrialId: calibrationItem?.id || "", sourceAxisId: axis.id },
      note,
    };
  });
  renderStageComplete(calibrationItem?.label || stage.title, clamp(score), note);
}

function renderStageComplete(title, score, note) {
  const mount = document.querySelector("#stageMount");
  document.querySelector(".calibration-stage")?.classList.add("is-resolving");
  const flavor = getCurrentStageFlavor();
  const d20 = d20Read(score);
  const verdict = verdictForScore(score);
  const isRecruitCalibration = state.screen === "recruitCalibration";
  const calibration = state.recruitment?.calibration;
  const calibrationItem = isRecruitCalibration ? calibration?.plan?.[calibration?.index || 0] : null;
  const isLastCalibration = isRecruitCalibration && calibration && calibration.index >= calibration.plan.length - 1;
  const compositeScores = (calibrationItem?.axisIds || [])
    .map((axisId) => {
      const pairedAxis = ATTRIBUTES.find((item) => item.id === axisId);
      const stageEntry = state.axisStages[axisId]?.[`${ATTRIBUTES[state.current].stages[state.stage].id}_${axisId}`];
      return pairedAxis && stageEntry ? `<span><b>${pairedAxis.abbr}</b>${fmt(stageEntry.score)}</span>` : "";
    })
    .filter(Boolean)
    .join("");
  mount.innerHTML = `
    <div class="arena center result-flash">
      <div class="mini-card resolution-card">
        <p class="eyebrow">检定结算 / Dice on the Table</p>
        <div class="resolution-head">
          <span class="d20-result">${d20}</span>
          <div>
            <h3>${title}</h3>
            <p>${flavor.check} · ${flavor.dc}</p>
          </div>
        </div>
        <div class="resolution-score">
          <span>${verdict}</span>
          <strong>${fmt(score)}</strong>
          <small>/ 10</small>
        </div>
        ${compositeScores ? `<div class="composite-result-axes">${compositeScores}</div>` : ""}
        <p class="dm-note"><strong>DM 记录：</strong>${note}</p>
      </div>
    </div>
    <div class="actions">
      <button class="button primary" id="continueStage" type="button">${isRecruitCalibration ? (isLastCalibration ? "完成征召并生成档案" : "进入下一场复合检定") : "翻到下一项检定"}</button>
    </div>
  `;
  animateDiceResult(document.querySelector(".d20-result"), d20);
  document.querySelector("#continueStage").addEventListener("click", advanceStage);
}

function animateDiceResult(node, finalValue) {
  if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  node.classList.add("is-rolling");
  const startedAt = performance.now();
  const duration = 520;
  function tick(now) {
    const progress = Math.min(1, (now - startedAt) / duration);
    node.textContent = progress >= 1 ? finalValue : Math.floor(Math.random() * 20) + 1;
    if (progress < 1) requestAnimationFrame(tick);
    else node.classList.remove("is-rolling");
  }
  requestAnimationFrame(tick);
}

function advanceStage() {
  if (state.screen === "recruitCalibration") {
    advanceRecruitmentCalibration();
    return;
  }
  const axis = ATTRIBUTES[state.current];
  if (state.stage < axis.stages.length - 1) {
    state.stage += 1;
    render();
    return;
  }
  finalizeAxis(axis);
  if (state.current < ATTRIBUTES.length - 1) {
    state.current += 1;
    state.stage = 0;
    render();
  } else {
    state.screen = shouldRunMbtiProbe() ? "mbtiProbe" : "personality";
    render();
  }
}

function shouldRunMbtiProbe() {
  return !state.profile.mbtiSelf || state.profile.mbtiSelf === "未知";
}

function getMbtiProbeReturnScreen() {
  const returnScreen = state.mbtiProbeReturnScreen || "personality";
  state.mbtiProbeReturnScreen = null;
  return returnScreen;
}

function finalizeAxis(axis) {
  const stages = Object.values(state.axisStages[axis.id] || {});
  const totalWeight = stages.reduce((sum, item) => sum + (item.weight || 1), 0) || 1;
  const weighted = stages.reduce((sum, item) => sum + item.score * (item.weight || 1), 0) / totalWeight;
  state.scores[axis.id] = clamp(weighted);
  state.raw[axis.id] = { stages };
}

function showArenaFeedback(arena, event, kind = "hit") {
  const rect = arena.getBoundingClientRect();
  const marker = document.createElement("span");
  marker.className = `arena-feedback is-${kind}`;
  marker.textContent = kind === "hit" ? "命中" : "空挥";
  marker.style.left = `${event.clientX - rect.left}px`;
  marker.style.top = `${event.clientY - rect.top}px`;
  arena.appendChild(marker);
  marker.addEventListener("animationend", () => marker.remove(), { once: true });
}

function clearArenaTarget(arena) {
  arena.querySelectorAll(".obstacle, .target, #startGame").forEach((element) => element.remove());
}

function renderClickWaves(axis, stage) {
  const mount = document.querySelector("#stageMount");
  mount.innerHTML = `
    ${stageGuide({
      measure: "爆发、连击和误触控制。",
      rule: "依次击碎屏幕上的障碍符印。符印会越来越小、停留越来越短，空挥会断掉连击。",
      scoring: "击破数、最长连击和空挥次数一起结算。不是只拼手速，能稳稳砸中才像真力量。",
    })}
    ${metricStrip([
      { label: "轮次", value: '<span id="waveLabel">待命</span>' },
      { label: "击破", value: '<span id="hitCount">0</span>/24' },
      { label: "空挥", value: '<span id="missCount">0</span>' },
    ])}
    <div class="arena center" id="arena">
      <button class="button primary" id="startGame" type="button">举锤破障</button>
    </div>
  `;

  const arena = document.querySelector("#arena");
  const start = document.querySelector("#startGame");
  let hits = 0;
  let misses = 0;
  let streak = 0;
  let bestStreak = 0;
  let targetNo = 0;
  let running = false;
  const levels = [
    { name: "低", size: 84, timeout: 1100 },
    { name: "中", size: 66, timeout: 850 },
    { name: "高", size: 50, timeout: 650 },
  ];
  let timer = null;

  function update() {
    document.querySelector("#hitCount").textContent = hits;
    document.querySelector("#missCount").textContent = misses;
  }

  function spawn() {
    clearTimeout(timer);
    if (!running) return;
    if (targetNo >= 24) {
      finish();
      return;
    }
    const level = levels[Math.min(2, Math.floor(targetNo / 8))];
    document.querySelector("#waveLabel").textContent = level.name;
    clearArenaTarget(arena);
    const btn = document.createElement("button");
    btn.className = "obstacle";
    btn.type = "button";
    btn.textContent = "破";
    btn.style.width = `${level.size}px`;
    btn.style.height = `${level.size}px`;
    const rect = arena.getBoundingClientRect();
    btn.style.left = `${Math.random() * Math.max(1, rect.width - level.size - 12) + 6}px`;
    btn.style.top = `${Math.random() * Math.max(1, rect.height - level.size - 12) + 6}px`;
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      clearTimeout(timer);
      showArenaFeedback(arena, event, "hit");
      hits += 1;
      streak += 1;
      bestStreak = Math.max(bestStreak, streak);
      targetNo += 1;
      update();
      spawn();
    });
    arena.appendChild(btn);
    timer = setTimeout(() => {
      misses += 1;
      streak = 0;
      targetNo += 1;
      update();
      spawn();
    }, level.timeout);
  }

  function finish() {
    running = false;
    clearTimeout(timer);
    const score = clamp((hits / 24) * 7.2 + (bestStreak / 10) * 2 - misses * 0.18 + 0.8);
    completeStage(score, { hits, misses, bestStreak }, `击破 ${hits}/24，最长连击 ${bestStreak}。`);
  }

  arena.addEventListener("click", (event) => {
    if (!running || event.target !== arena) return;
    showArenaFeedback(arena, event, "miss");
    misses += 1;
    streak = 0;
    update();
  });

  start.addEventListener("click", () => {
    running = true;
    hits = 0;
    misses = 0;
    streak = 0;
    bestStreak = 0;
    targetNo = 0;
    update();
    spawn();
  });
  cleanupFns.push(() => clearTimeout(timer));
}

function renderStability(axis, stage) {
  const mount = document.querySelector("#stageMount");
  mount.innerHTML = `
    ${stageGuide({
      measure: "耐受、控压和后半场续航。",
      rule: "按住会顶住压力，松开会回落。把指针尽量稳在金色安全区，像扛着盾等牧师读条。",
      scoring: "安全区停留越久越好，后半段会稍微加权。",
    })}
    ${metricStrip([
      { label: "安全停留", value: '<span id="safePct">0%</span>' },
      { label: "剩余回合", value: '<span id="stableTime">16.0s</span>' },
      { label: "难度", value: '<span id="stableDifficulty">低</span>' },
    ])}
    <div class="arena center">
      <div class="stability-box">
        <div class="safe-band" id="safeBand"></div>
        <div class="stability-marker" id="stabilityMarker"></div>
      </div>
    </div>
    <div class="actions">
      <button class="button primary" id="startGame" type="button">举盾稳住</button>
      <button class="button" id="holdBtn" type="button" disabled>按住顶盾</button>
    </div>
  `;

  const start = document.querySelector("#startGame");
  const hold = document.querySelector("#holdBtn");
  const marker = document.querySelector("#stabilityMarker");
  const safeBand = document.querySelector("#safeBand");
  const duration = 16000;
  const bands = [
    { name: "低", min: 38, max: 66, rise: 1.2, fall: 0.92, sway: 0.38, weight: 1 },
    { name: "中", min: 43, max: 61, rise: 1.48, fall: 1.12, sway: 0.58, weight: 1.18 },
    { name: "高", min: 47, max: 57, rise: 1.72, fall: 1.34, sway: 0.82, weight: 1.38 },
  ];
  let active = false;
  let holding = false;
  let value = 50;
  let safeWeight = 0;
  let totalWeight = 0;
  let totalTicks = 0;
  let endAt = 0;
  let interval = null;

  function tick() {
    const left = Math.max(0, endAt - performance.now()) / 1000;
    const elapsed = duration / 1000 - left;
    const levelIndex = Math.min(2, Math.floor(elapsed / (duration / 3000)));
    const band = bands[levelIndex];
    value += holding ? band.rise : -band.fall;
    value += Math.sin(totalTicks / Math.max(4, 8 - levelIndex * 1.6)) * band.sway;
    value = Math.max(0, Math.min(100, value));
    const inSafe = value >= band.min && value <= band.max;
    totalTicks += 1;
    totalWeight += band.weight;
    if (inSafe) safeWeight += band.weight;
    safeBand.style.left = `${band.min}%`;
    safeBand.style.width = `${band.max - band.min}%`;
    marker.style.left = `${value}%`;
    document.querySelector("#safePct").textContent = `${Math.round((safeWeight / Math.max(1, totalWeight)) * 100)}%`;
    document.querySelector("#stableTime").textContent = `${left.toFixed(1)}s`;
    document.querySelector("#stableDifficulty").textContent = band.name;
    if (left <= 0) {
      clearInterval(interval);
      active = false;
      hold.disabled = true;
      const score = clamp((safeWeight / Math.max(1, totalWeight)) * 10);
      completeStage(score, { safeWeight, totalWeight, totalTicks }, `盾位维持率约 ${Math.round((safeWeight / Math.max(1, totalWeight)) * 100)}%，高难段安全区收窄到 10%。`);
    }
  }

  start.addEventListener("click", () => {
    active = true;
    start.disabled = true;
    hold.disabled = false;
    safeWeight = 0;
    totalWeight = 0;
    totalTicks = 0;
    value = 50;
    safeBand.style.left = `${bands[0].min}%`;
    safeBand.style.width = `${bands[0].max - bands[0].min}%`;
    endAt = performance.now() + duration;
    interval = setInterval(tick, 90);
  });
  hold.addEventListener("pointerdown", () => {
    if (active) holding = true;
  });
  window.addEventListener("pointerup", () => {
    holding = false;
  });
  cleanupFns.push(() => clearInterval(interval));
}

function renderReactionLadder(axis, stage) {
  const mount = document.querySelector("#stageMount");
  mount.innerHTML = `
    ${stageGuide({
      measure: "先手、误点控制和连续反应。",
      rule: "目标符印出现后立刻点中。每 5 个目标升一级，窗口会越来越短。",
      scoring: "命中率为主，反应时间为辅，漏掉目标会扣分。",
    })}
    ${metricStrip([
      { label: "命中", value: '<span id="dexHits">0</span>/15' },
      { label: "平均反应", value: '<span id="dexAvg">-</span>' },
      { label: "轮次", value: '<span id="dexLevel">待命</span>' },
    ])}
    <div class="arena center" id="arena">
      <button class="button primary" id="startGame" type="button">掷先攻</button>
    </div>
  `;
  const arena = document.querySelector("#arena");
  const start = document.querySelector("#startGame");
  const levels = [
    { name: "低", timeout: 1300, size: 64 },
    { name: "中", timeout: 1000, size: 54 },
    { name: "高", timeout: 760, size: 44 },
  ];
  let hits = 0;
  let misses = 0;
  let round = 0;
  let reactions = [];
  let spawnTime = 0;
  let timeout = null;

  function update() {
    document.querySelector("#dexHits").textContent = hits;
    const avg = reactions.length ? Math.round(reactions.reduce((a, b) => a + b, 0) / reactions.length) : "-";
    document.querySelector("#dexAvg").textContent = avg === "-" ? "-" : `${avg}ms`;
  }

  function spawn() {
    clearTimeout(timeout);
    if (round >= 15) {
      finish();
      return;
    }
    const level = levels[Math.min(2, Math.floor(round / 5))];
    document.querySelector("#dexLevel").textContent = level.name;
    clearArenaTarget(arena);
    const target = document.createElement("button");
    target.className = "target";
    target.type = "button";
    target.textContent = "点";
    target.style.width = `${level.size}px`;
    target.style.height = `${level.size}px`;
    const rect = arena.getBoundingClientRect();
    target.style.left = `${Math.random() * Math.max(1, rect.width - level.size - 12) + 6}px`;
    target.style.top = `${Math.random() * Math.max(1, rect.height - level.size - 12) + 6}px`;
    spawnTime = performance.now();
    target.addEventListener("click", (event) => {
      event.stopPropagation();
      clearTimeout(timeout);
      showArenaFeedback(arena, event, "hit");
      hits += 1;
      reactions.push(performance.now() - spawnTime);
      round += 1;
      update();
      spawn();
    });
    arena.appendChild(target);
    timeout = setTimeout(() => {
      misses += 1;
      round += 1;
      update();
      spawn();
    }, level.timeout);
  }

  function finish() {
    clearTimeout(timeout);
    const avg = reactions.length ? reactions.reduce((a, b) => a + b, 0) / reactions.length : 1200;
    const score = clamp((hits / 15) * 6.5 + ((850 - avg) / 520) * 3.2 - misses * 0.2);
    completeStage(score, { hits, misses, avgReactionMs: Math.round(avg) }, `命中 ${hits}/15，平均反应 ${Math.round(avg)}ms。`);
  }

  start.addEventListener("click", () => {
    hits = 0;
    misses = 0;
    round = 0;
    reactions = [];
    update();
    spawn();
  });
  arena.addEventListener("click", (event) => {
    if (event.target === arena && arena.querySelector(".target")) {
      showArenaFeedback(arena, event, "miss");
    }
  });
  cleanupFns.push(() => clearTimeout(timeout));
}

function renderTraceLine(axis, stage) {
  const mount = document.querySelector("#stageMount");
  mount.innerHTML = `
    ${stageGuide({
      measure: "开锁手感、符线跟随和精细操作。",
      rule: "符线锁被拆成三段。每段按住并沿金色符线走到终点，后面的符线会更窄、更弯。",
      scoring: "三段分别记录偏移与覆盖率，后两段权重更高。",
    })}
    ${metricStrip([
      { label: "段位", value: '<span id="traceSegment">1/3</span>' },
      { label: "覆盖", value: '<span id="traceCover">0%</span>' },
      { label: "偏移", value: '<span id="traceDrift">-</span>' },
    ])}
    <div class="arena center">
      <div class="trace-wrap">
        <canvas class="canvas-game trace-canvas" id="traceCanvas" width="760" height="320"></canvas>
        <p class="trace-status" id="traceStatus">第 1 段：宽符线，先找手感。</p>
      </div>
    </div>
    <div class="actions">
      <button class="button primary" id="submitTrace" type="button">提交第 1 段</button>
      <button class="button ghost" id="clearTrace" type="button">重画本段</button>
    </div>
  `;

  const canvas = document.querySelector("#traceCanvas");
  const ctx = canvas.getContext("2d");
  const traceConfigs = [
    { label: "第 1 段", hint: "宽符线，先找手感。", amp: 42, waves: 1.35, wiggle: 10, wiggleFreq: 4.2, width: 10, tolerance: 17, weight: 1 },
    { label: "第 2 段", hint: "曲线变密，别急着抄近路。", amp: 58, waves: 2.05, wiggle: 18, wiggleFreq: 6.1, width: 8, tolerance: 13, weight: 1.18 },
    { label: "第 3 段", hint: "窄线高频，最后一把机关锁。", amp: 72, waves: 2.85, wiggle: 24, wiggleFreq: 8.2, width: 6, tolerance: 10, weight: 1.36 },
  ];
  let segment = 0;
  let drawing = false;
  let points = [];
  let results = [];

  function currentTrace() {
    return traceConfigs[segment];
  }

  function expectedY(x) {
    const config = currentTrace();
    const t = x / canvas.width;
    const y =
      canvas.height * 0.5 +
      Math.sin(t * Math.PI * config.waves * 2 + segment * 0.6) * config.amp +
      Math.sin(t * Math.PI * config.wiggleFreq + segment * 1.1) * config.wiggle;
    return clamp(y, 34, canvas.height - 34);
  }

  function updateTraceText(stats = null) {
    const config = currentTrace();
    document.querySelector("#traceSegment").textContent = `${segment + 1}/3`;
    document.querySelector("#traceStatus").textContent = `${config.label}：${config.hint}`;
    document.querySelector("#submitTrace").textContent = `提交第 ${segment + 1} 段`;
    if (stats) {
      document.querySelector("#traceCover").textContent = `${Math.round(stats.coverage * 100)}%`;
      document.querySelector("#traceDrift").textContent = `${Math.round(stats.drift)}px`;
    } else {
      document.querySelector("#traceCover").textContent = "0%";
      document.querySelector("#traceDrift").textContent = "-";
    }
  }

  function drawBase() {
    const config = currentTrace();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(8,10,9,0.72)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(243,236,215,0.08)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 38) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    ctx.strokeStyle = "#e4bf62";
    ctx.lineWidth = config.width;
    ctx.lineCap = "round";
    ctx.beginPath();
    for (let x = 26; x < canvas.width - 26; x += 4) {
      const y = expectedY(x);
      if (x === 26) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.fillStyle = "rgba(243,236,215,0.44)";
    ctx.font = "700 15px sans-serif";
    ctx.fillText(config.label, 24, 28);
    redrawUser();
  }

  function redrawUser() {
    if (points.length < 2) return;
    ctx.strokeStyle = "#70c7c7";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.beginPath();
    points.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();
  }

  function canvasPoint(event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * canvas.height,
    };
  }

  canvas.addEventListener("pointerdown", (event) => {
    drawing = true;
    points.push(canvasPoint(event));
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!drawing) return;
    points.push(canvasPoint(event));
    drawBase();
    if (points.length >= 2) updateTraceText(getTraceStats());
  });
  window.addEventListener("pointerup", () => {
    drawing = false;
  });

  document.querySelector("#clearTrace").addEventListener("click", () => {
    points = [];
    drawBase();
    updateTraceText();
  });

  function getTraceStats() {
    if (points.length < 2) return { coverage: 0, drift: 90, points: points.length };
    const xs = points.map((p) => p.x);
    const coverage = clamp((Math.max(...xs) - Math.min(...xs)) / (canvas.width - 52), 0, 1);
    const drift = points.reduce((sum, p) => sum + Math.abs(p.y - expectedY(p.x)), 0) / points.length;
    return { coverage, drift, points: points.length };
  }

  function submitSegment() {
    const config = currentTrace();
    let stats = getTraceStats();
    if (points.length < 8) {
      stats = { coverage: 0, drift: 90, points: points.length };
    }
    const segmentScore = clamp(8.4 - stats.drift / config.tolerance + stats.coverage * 2.4 - (stats.coverage < 0.82 ? 1.6 : 0));
    results.push({ ...stats, score: segmentScore, label: config.label, weight: config.weight });
    if (segment >= traceConfigs.length - 1) {
      const totalWeight = results.reduce((sum, item) => sum + item.weight, 0);
      const score = clamp(results.reduce((sum, item) => sum + item.score * item.weight, 0) / totalWeight);
      const avgCoverage = results.reduce((sum, item) => sum + item.coverage, 0) / results.length;
      const avgDrift = results.reduce((sum, item) => sum + item.drift, 0) / results.length;
      completeStage(
        score,
        { segments: results, avgCoverage, avgDrift: Math.round(avgDrift) },
        `三段符线平均覆盖 ${Math.round(avgCoverage * 100)}%，平均偏移 ${Math.round(avgDrift)}px。`,
      );
      return;
    }
    segment += 1;
    points = [];
    drawBase();
    updateTraceText();
  }

  document.querySelector("#submitTrace").addEventListener("click", () => {
    if (points.length < 8) {
      submitSegment();
      return;
    }
    submitSegment();
  });

  drawBase();
  updateTraceText();
}

function renderDodge(axis, stage) {
  const mount = document.querySelector("#stageMount");
  mount.innerHTML = `
    ${stageGuide({
      measure: "走位、预判和混战里的身体协调。",
      rule: "移动光点躲开飞来的弹幕。第 1 轮 3 颗，第 2 轮 5 颗，第 3 轮 7 颗，擦边越少越好。",
      scoring: "存活时间、碰撞次数和高难回合表现一起结算。",
    })}
    ${metricStrip([
      { label: "存活", value: '<span id="dodgeTime">0.0s</span>' },
      { label: "擦中", value: '<span id="dodgeHit">0</span>' },
      { label: "遭遇", value: '<span id="dodgeLevel">待命</span>' },
    ])}
    <div class="arena center">
      <canvas class="canvas-game dodge-canvas" id="dodgeCanvas" width="760" height="360"></canvas>
    </div>
    <div class="actions">
      <button class="button primary" id="startGame" type="button">冲进箭雨</button>
    </div>
  `;

  const canvas = document.querySelector("#dodgeCanvas");
  const ctx = canvas.getContext("2d");
  const start = document.querySelector("#startGame");
  let player = { x: canvas.width / 2, y: canvas.height / 2 };
  let balls = [];
  let collisions = 0;
  let started = 0;
  let running = false;
  let raf = null;
  let lastCollision = 0;

  function setBalls(level) {
    const count = [3, 5, 7][level];
    balls = Array.from({ length: count }, (_, i) => ({
      x: 80 + Math.random() * (canvas.width - 160),
      y: 60 + Math.random() * (canvas.height - 120),
      vx: (Math.random() > 0.5 ? 1 : -1) * (1.4 + level * 0.55 + i * 0.06),
      vy: (Math.random() > 0.5 ? 1 : -1) * (1.3 + level * 0.52 + i * 0.05),
      r: 12,
    }));
  }

  function draw() {
    if (!running) return;
    const elapsed = (performance.now() - started) / 1000;
    const level = Math.min(2, Math.floor(elapsed / 6));
    document.querySelector("#dodgeLevel").textContent = ["低", "中", "高"][level];
    document.querySelector("#dodgeTime").textContent = `${elapsed.toFixed(1)}s`;
    if (balls.length !== [3, 5, 7][level]) setBalls(level);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(8,10,9,0.74)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(243,236,215,0.1)";
    for (let x = 0; x < canvas.width; x += 44) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    balls.forEach((ball) => {
      ball.x += ball.vx;
      ball.y += ball.vy;
      if (ball.x < ball.r || ball.x > canvas.width - ball.r) ball.vx *= -1;
      if (ball.y < ball.r || ball.y > canvas.height - ball.r) ball.vy *= -1;
      const d = Math.hypot(ball.x - player.x, ball.y - player.y);
      if (d < ball.r + 14 && performance.now() - lastCollision > 450) {
        collisions += 1;
        lastCollision = performance.now();
        document.querySelector("#dodgeHit").textContent = collisions;
      }
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
      ctx.fillStyle = "#d85d4a";
      ctx.fill();
    });
    ctx.beginPath();
    ctx.arc(player.x, player.y, 15, 0, Math.PI * 2);
    ctx.fillStyle = "#72c891";
    ctx.fill();

    if (elapsed >= 18) {
      running = false;
      const score = clamp(10 - collisions * 1.35 + Math.min(2, elapsed / 10));
      completeStage(score, { elapsed: Math.round(elapsed), collisions }, `穿过 18 秒箭雨，擦中 ${collisions} 次。`);
      return;
    }
    raf = requestAnimationFrame(draw);
  }

  function setPlayer(event) {
    const rect = canvas.getBoundingClientRect();
    player.x = ((event.clientX - rect.left) / rect.width) * canvas.width;
    player.y = ((event.clientY - rect.top) / rect.height) * canvas.height;
  }

  canvas.addEventListener("pointermove", setPlayer);
  canvas.addEventListener("pointerdown", setPlayer);
  start.addEventListener("click", () => {
    running = true;
    start.disabled = true;
    collisions = 0;
    started = performance.now();
    setBalls(0);
    draw();
  });
  cleanupFns.push(() => cancelAnimationFrame(raf));
}

function renderBodyPanel(axis, stage) {
  const bodyScore = computeBodyScore();
  const healthScore = computeHealthScore();
  const p = state.profile || {};
  const bmi = Number(p.height) && Number(p.weight) ? Number(p.weight) / (Number(p.height) / 100) ** 2 : null;
  const bodyAnchor = getBodyCreatureAnchor(p);
  const ancestryText = bodyAnchor.ancestrySelected ? bodyAnchor.ancestryLine : "未指定";
  const mount = document.querySelector("#stageMount");
  mount.innerHTML = `
    ${stageGuide({
      measure: "现实锚点、种族锚点、恢复状态和冒险续航底子。",
      rule: "这一步只做娱乐化校准，不评价体型。种族可主动选择；极端身高体重会额外转成 DND 体型锚点，缺失项由公会书记填中性骰。",
      scoring: "现实锚点、可选种族、奇幻体型参照和恢复状态会进入体质轴，避免单个小游戏把体质判歪。",
    })}
    <div class="two-col">
      <div class="mini-card">
        <h3>体魄底子</h3>
        <p class="huge-score">${fmt(bodyScore)}</p>
        <p>年龄：${p.age || "未填"}；身高：${p.height || "未填"}；体重：${p.weight || "未填"}；BMI：${bmi && !bodyAnchor.isFantasy ? fmt(bmi, 1) : bodyAnchor.isFantasy ? "奇幻体型锚点" : "未计算"}</p>
        <p>种族锚点：${ancestryText}</p>
      </div>
      <div class="mini-card">
        <h3>营地恢复</h3>
        <p class="huge-score">${fmt(healthScore)}</p>
        <p>运动：${translateExercise(p.exercise)}；睡眠：${translateSleep(p.sleep)}；健康影响：${translateHealth(p.health)}</p>
      </div>
      <div class="mini-card body-anchor-card">
        <h3>DND 体型锚点</h3>
        <p class="huge-score">${bodyAnchor.size}</p>
        <p><strong>${bodyAnchor.creature}</strong> · ${bodyAnchor.label}</p>
        <p>${bodyAnchor.note}</p>
        ${
          bodyAnchor.ancestrySelected
            ? `<p><strong>种族锚点：</strong>${bodyAnchor.ancestryLine}。${bodyAnchor.ancestryNote}</p>`
            : ""
        }
      </div>
    </div>
    <div class="actions">
      <button class="button primary" id="confirmBody" type="button">盖上公会印章</button>
    </div>
  `;
  document.querySelector("#confirmBody").addEventListener("click", () => {
    const score = clamp(bodyScore * 0.58 + healthScore * 0.42);
    const ancestryNote = bodyAnchor.ancestrySelected ? `；种族锚点为${bodyAnchor.ancestry.name}` : "";
    const note = bodyAnchor.isFantasy
      ? `${bodyAnchor.creature}体型锚点接管普通 BMI 判定${ancestryNote}，体质底分 ${fmt(score)}。`
      : `现实锚点给出体质底分 ${fmt(score)}${ancestryNote}。`;
    completeStage(score, { bodyScore, healthScore, bmi, bodyAnchor }, note);
  });
}

function renderRhythm(axis, stage) {
  const mount = document.querySelector("#stageMount");
  mount.innerHTML = `
    ${stageGuide({
      measure: "节奏、续航和疲劳后的手感。",
      rule: "鼓点会沿轨道冲向金色判定线。音符压线时点击按钮或按空格，越贴近判定线越好。",
      scoring: "Perfect、Good、Miss 会拉开分数。每 8 拍升一级，鼓点会更快、判定窗会更窄。",
    })}
    ${metricStrip([
      { label: "命中", value: '<span id="beatGood">0</span>/24' },
      { label: "判定", value: '<span id="beatJudge">待命</span>' },
      { label: "鼓点", value: '<span id="beatLevel">待命</span>' },
    ])}
    <div class="arena center">
      <div class="rhythm-lane">
        <div class="rhythm-track">
          <div class="rhythm-hit-line"></div>
          <div class="rhythm-note" id="rhythmNote">鼓</div>
        </div>
        <div class="rhythm-judge" id="rhythmJudge">等候营火鼓手起拍</div>
      </div>
    </div>
    <div class="actions">
      <button class="button primary" id="startGame" type="button">点燃营火</button>
      <button class="button" id="tapBeat" type="button" disabled>跟上鼓点</button>
    </div>
  `;

  const start = document.querySelector("#startGame");
  const tap = document.querySelector("#tapBeat");
  const note = document.querySelector("#rhythmNote");
  const judge = document.querySelector("#rhythmJudge");
  const approachMs = [920, 760, 620];
  const perfectWindows = [70, 60, 50];
  const goodWindows = [145, 125, 105];
  const missWindows = [280, 240, 210];
  const startPct = 8;
  const hitPct = 74;
  const endPct = 94;
  let beat = 0;
  let hits = 0;
  let perfect = 0;
  let misses = 0;
  let judgeScore = 0;
  let offsets = [];
  let activeBeat = null;
  let running = false;
  let raf = null;

  function update() {
    document.querySelector("#beatGood").textContent = hits;
  }

  function setJudge(text, kind = "") {
    judge.textContent = text;
    document.querySelector("#beatJudge").textContent = text;
    judge.className = `rhythm-judge ${kind}`.trim();
  }

  function finish() {
    running = false;
    cancelAnimationFrame(raf);
    const avg = offsets.length ? offsets.reduce((a, b) => a + b, 0) / offsets.length : 320;
    const accuracyBonus = offsets.length ? Math.max(0, (150 - avg) / 150) * 0.8 : 0;
    const score = clamp((judgeScore / 24) * 9.2 + accuracyBonus - misses * 0.08);
    tap.disabled = true;
    completeStage(
      score,
      { hits, perfect, misses, total: 24, avgOffsetMs: Math.round(avg) },
      `营火鼓点 ${perfect} 次 Perfect，${hits - perfect} 次 Good，Miss ${misses} 次。`,
    );
  }

  function startBeat() {
    if (beat >= 24) {
      tap.disabled = true;
      finish();
      return;
    }
    const level = Math.min(2, Math.floor(beat / 8));
    document.querySelector("#beatLevel").textContent = ["低", "中", "高"][level];
    beat += 1;
    const now = performance.now();
    activeBeat = {
      level,
      startAt: now,
      targetAt: now + approachMs[level],
      endAt: now + approachMs[level] + missWindows[level],
      tapped: false,
    };
    note.textContent = beat;
    note.className = "rhythm-note active";
    note.style.left = `${startPct}%`;
    setJudge("READY", "");
  }

  function registerTap() {
    if (tap.disabled || !activeBeat || activeBeat.tapped) return;
    const offset = Math.abs(performance.now() - activeBeat.targetAt);
    activeBeat.tapped = true;
    offsets.push(offset);
    note.classList.remove("active");
    if (offset <= perfectWindows[activeBeat.level]) {
      perfect += 1;
      hits += 1;
      judgeScore += 1;
      setJudge("PERFECT", "perfect");
      note.classList.add("perfect");
    } else if (offset <= goodWindows[activeBeat.level]) {
      hits += 1;
      judgeScore += 0.72;
      setJudge("GOOD", "good");
      note.classList.add("good");
    } else {
      misses += 1;
      setJudge("MISS", "miss");
      note.classList.add("miss");
    }
    update();
    setTimeout(startBeat, 180);
  }

  function loop() {
    if (!running) return;
    if (activeBeat) {
      const now = performance.now();
      if (!activeBeat.tapped) {
        if (now <= activeBeat.targetAt) {
          const t = clamp((now - activeBeat.startAt) / (activeBeat.targetAt - activeBeat.startAt), 0, 1);
          note.style.left = `${startPct + (hitPct - startPct) * t}%`;
        } else {
          const t = clamp((now - activeBeat.targetAt) / (activeBeat.endAt - activeBeat.targetAt), 0, 1);
          note.style.left = `${hitPct + (endPct - hitPct) * t}%`;
          if (now > activeBeat.endAt) {
            activeBeat.tapped = true;
            misses += 1;
            note.className = "rhythm-note miss";
            setJudge("MISS", "miss");
            update();
            setTimeout(startBeat, 150);
          }
        }
      }
    }
    raf = requestAnimationFrame(loop);
  }

  start.addEventListener("click", () => {
    start.disabled = true;
    tap.disabled = false;
    beat = 0;
    hits = 0;
    perfect = 0;
    misses = 0;
    judgeScore = 0;
    offsets = [];
    activeBeat = null;
    running = true;
    update();
    setJudge("READY", "");
    startBeat();
    loop();
  });
  tap.addEventListener("click", registerTap);
  window.addEventListener("keydown", (event) => {
    if (event.code === "Space") registerTap();
  });
  cleanupFns.push(() => cancelAnimationFrame(raf));
}

function renderMemoryLadder(axis, stage) {
  const levels = [
    { label: "低", tokens: ["蓝", "塔", "7", "羽"], answer: "蓝-塔-7-羽", revealMs: 3000 },
    { label: "中", tokens: ["东", "镜", "4", "火", "鸦"], answer: "东-镜-4-火-鸦", revealMs: 1500 },
    { label: "高", tokens: ["月", "13", "银", "门", "南", "铃"], answer: "月-13-银-门-南-铃", revealMs: 1000 },
  ];
  let index = 0;
  let correct = 0;
  let startedAt = performance.now();

  function drawReveal() {
    const data = levels[index];
    const mount = document.querySelector("#stageMount");
    const revealSeconds = data.revealMs / 1000;
    mount.innerHTML = `
      ${stageGuide({
        measure: "符文短记、顺序保持和抗干扰回忆。",
        rule: `记住这串符文，本轮 ${revealSeconds} 秒后从卷轴里选出完全一致的一组。`,
        scoring: "三轮符文各占权重，高难卷轴权重略高。",
      })}
      ${metricStrip([
        { label: "难度", value: data.label },
        { label: "抄对", value: `${correct}/${index}` },
        { label: "显现", value: `${revealSeconds} 秒` },
      ])}
      <div class="arena center">
        <div class="memory-strip">${data.tokens.map((token) => `<span class="memory-token">${token}</span>`).join("")}</div>
      </div>
      <div class="actions">
        <button class="button primary" type="button" disabled>${revealSeconds} 秒后收卷</button>
      </div>
    `;
    const timer = setTimeout(() => {
      if ((state.screen === "test" || state.screen === "recruitCalibration") && ATTRIBUTES[state.current].id === "int") drawChoices();
    }, data.revealMs);
    cleanupFns.push(() => clearTimeout(timer));
  }

  function drawChoices() {
    const data = levels[index];
    const variants = shuffle([
      data.answer,
      shuffle([...data.tokens]).join("-"),
      [...data.tokens].reverse().join("-"),
      data.tokens.map((t, i) => data.tokens[(i + 1) % data.tokens.length]).join("-"),
    ]);
    const mount = document.querySelector("#stageMount");
    mount.innerHTML = `
      ${stageGuide({
        measure: "符文短记、顺序保持和抗干扰回忆。",
        rule: "从下面几张卷轴里找回刚才那串完整符文。",
        scoring: "三轮符文各占权重，高难卷轴权重略高。",
      })}
      <div class="question-panel tool-panel">
        <h3>${data.label}难度：哪张卷轴没有抄错？</h3>
        <div class="choice-grid">
          ${variants
            .map(
              (text, i) => `
                <button class="choice" type="button" data-answer="${text}">
                  <span class="choice-kicker">卷轴 ${i + 1}</span>
                  <span>${text}</span>
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
    `;
    document.querySelectorAll("[data-answer]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.answer === data.answer) correct += 1;
        index += 1;
        if (index >= levels.length) {
          const elapsed = (performance.now() - startedAt) / 1000;
          const score = clamp((correct / levels.length) * 8.6 + Math.max(0, 1.4 - elapsed / 90));
          completeStage(score, { correct, total: levels.length, elapsedSec: Math.round(elapsed) }, `符文记忆命中 ${correct}/${levels.length}。`);
        } else {
          drawReveal();
        }
      });
    });
  }

  drawReveal();
}

function renderAbstractQuiz(axis, stage) {
  renderQuizStage(stage, getQuizModule("int_abstract", {
    guide: {
      measure: "谜题结构、类比直觉和隐藏规则。",
      rule: "别只看表面道具，要像解地城机关一样找背后的关系。",
      scoring: "命中率为主，这轮会区分类比、模式和系统归纳。",
    },
    questions: [
      {
        prompt: "DM 在桌上摆出三样道具：火把照亮黑暗，钥匙打开门锁。那地图最像在提供什么？",
        options: [
          { text: "通往目标的路线", score: 10, traits: { N: 1 } },
          { text: "一只等着开的宝箱", score: 3 },
          { text: "一块能披在身上的布", score: 0 },
          { text: "一阵路过的风", score: 1 },
        ],
      },
      {
        prompt: "炼金阵里，A 会转化成 B，B 会催生 C，C 又反过来限制 A。这个机关最像哪种结构？",
        options: [
          { text: "会自我调节的循环反馈", score: 10, traits: { N: 1, T: 1 } },
          { text: "一路到底的单向因果链", score: 4 },
          { text: "随手写下的随机清单", score: 0 },
          { text: "从上到下的等级制度", score: 3 },
        ],
      },
      {
        prompt: "你要给一座被诅咒但还没彻底熄灭的城镇上色，哪组更像“压抑但仍有希望”？",
        options: [
          { text: "蓝灰雾气里留一小点暖金灯火", score: 10, traits: { S: 1, N: 1 } },
          { text: "整座城都涂成刺眼高饱和红", score: 2 },
          { text: "纯黑，没有任何焦点", score: 3 },
          { text: "随机撒满彩虹色", score: 0 },
        ],
      },
      {
        prompt: "一支冒险队屡次翻车，成员都不弱，但关键情报总握在少数人手里。最像哪里出问题？",
        options: [
          { text: "情报流和决策权没有接上", score: 10, traits: { T: 1, J: 1 } },
          { text: "所有队员都不够努力", score: 1 },
          { text: "只是骰运太差", score: 3 },
          { text: "武器外观不够帅", score: 0 },
        ],
      },
    ],
  }));
}

function renderReasoningQuiz(axis, stage) {
  renderQuizStage(stage, getQuizModule("int_reason", {
    guide: {
      measure: "调查、排除干扰项和长线判断。",
      rule: "像跑团调查一样读线索，不急着被最亮的证据牵走。",
      scoring: "命中率、线索权衡和抗误导能力进入智力轴。",
    },
    questions: [
      {
        prompt: "案件：钟楼钥匙只会在午夜后出现。A 说午夜前一直在图书馆，B 手上有钥匙蜡印但没有进入钟楼的机会，C 知道暗门且午夜后离席十分钟。最优先调查谁？",
        options: [
          { text: "先查 C：时间、暗门知识和离席机会都对上", score: 10, traits: { T: 1 } },
          { text: "先查 B：蜡印这个物证最亮眼", score: 5 },
          { text: "先查 A：他说自己在图书馆，很值得怀疑", score: 2 },
          { text: "三个人都同等可疑，先别排序", score: 4 },
        ],
      },
      {
        prompt: "远征选择：近路 2 天但有 40% 概率损失补给；远路 4 天但几乎稳定；队伍有伤员且补给只够 5 天。更稳的判断是？",
        options: [
          { text: "走远路：伤员在队，失败成本高于省下两天", score: 10, traits: { J: 1, good: 1 } },
          { text: "走近路：这把就赌补给没事", score: 5, traits: { risk: 1 } },
          { text: "原地扎营，先等命运自己变好", score: 2 },
          { text: "分队走两条路，试图两头都占", score: 4 },
        ],
      },
      {
        prompt: "一个 NPC 总说自己讨厌权力，却不断把钥匙、钱袋和情报都收到自己手里。最合理的读法是？",
        options: [
          { text: "他的自我叙述和真实控制欲在打架", score: 10, traits: { N: 1 } },
          { text: "他只是无辜保管，大家想太多", score: 0 },
          { text: "他只是忘了把东西分出去", score: 3 },
          { text: "资源本身不重要，随便放哪都一样", score: 1 },
        ],
      },
      {
        prompt: "酒馆里有人给出一段关键证词。你最应该先向 DM 追问哪一项？",
        options: [
          { text: "有没有独立线索能交叉验证这段话", score: 10, traits: { T: 1 } },
          { text: "讲述者说话时是不是很自信", score: 3 },
          { text: "故事听起来够不够戏剧化", score: 2 },
          { text: "这个 NPC 我喜不喜欢", score: 1 },
        ],
      },
    ],
  }));
}

function renderQuizStage(stage, config) {
  let index = 0;
  let totalScore = 0;
  const startedAt = performance.now();

  function draw() {
    const q = config.questions[index];
    const mount = document.querySelector("#stageMount");
    mount.innerHTML = `
      ${stageGuide(config.guide)}
      ${metricStrip([
        { label: "回合", value: `${index + 1}/${config.questions.length}` },
        { label: "判定均值", value: fmt(totalScore / Math.max(1, index)) },
        { label: "检定", value: stage.title },
      ])}
      <div class="question-panel tool-panel deep-question">
        <h3>${q.prompt}</h3>
        <div class="choice-grid">
          ${q.options
            .map(
              (option, i) => `
                <button class="choice" data-choice="${i}" type="button">
                  <span class="choice-kicker">行动 ${i + 1}</span>
                  <span>${option.text}</span>
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
    `;
    document.querySelectorAll("[data-choice]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const option = q.options[Number(btn.dataset.choice)];
        totalScore += option.score;
        applyTraits(option.traits);
        index += 1;
        if (index >= config.questions.length) {
          const elapsed = (performance.now() - startedAt) / 1000;
          const score = clamp(totalScore / config.questions.length - Math.max(0, elapsed - 95) * 0.01);
          completeStage(score, { totalScore, questions: config.questions.length, elapsedSec: Math.round(elapsed) }, `本轮判定均值 ${fmt(totalScore / config.questions.length)}。`);
        } else {
          draw();
        }
      });
    });
  }

  draw();
}

function renderColorLadder(axis, stage) {
  const rounds = [
    { label: "1", size: 3, delta: 30 },
    { label: "2", size: 3, delta: 24 },
    { label: "3", size: 3, delta: 18 },
    { label: "4", size: 4, delta: 16 },
    { label: "5", size: 4, delta: 13 },
    { label: "6", size: 4, delta: 10 },
    { label: "7", size: 5, delta: 9 },
    { label: "8", size: 5, delta: 7 },
    { label: "9", size: 5, delta: 5 },
  ];
  let round = 0;
  let correct = 0;
  let startedAt = performance.now();
  const timeLimit = 20;
  let timer = null;

  function remainingSeconds() {
    return Math.max(0, timeLimit - (performance.now() - startedAt) / 1000);
  }

  function scoreAndFinish(reason) {
    clearInterval(timer);
    const elapsed = (performance.now() - startedAt) / 1000;
    const perfect = correct >= rounds.length && elapsed <= timeLimit;
    const score = perfect ? 10 : clamp((correct / rounds.length) * 9.2 + Math.max(0, 0.8 - elapsed / 40));
    completeStage(
      score,
      { correct, total: rounds.length, elapsedSec: Math.round(elapsed), reason },
      perfect ? "9 张异色印记全部识破，20 秒内完成满分侦测。" : `异色侦测止步 ${correct}/${rounds.length}，${reason}。`,
    );
  }

  function updateTimer() {
    const timeNode = document.querySelector("#colorTime");
    if (!timeNode) return;
    const left = remainingSeconds();
    timeNode.textContent = `${left.toFixed(1)}s`;
    if (left <= 0) scoreAndFinish("20 秒沙漏耗尽");
  }

  function draw() {
    if (remainingSeconds() <= 0) {
      scoreAndFinish("20 秒沙漏耗尽");
      return;
    }
    const data = rounds[round];
    const odd = Math.floor(Math.random() * data.size * data.size);
    const base = [118 + Math.floor(Math.random() * 20), 138 + Math.floor(Math.random() * 20), 130 + Math.floor(Math.random() * 20)];
    const mount = document.querySelector("#stageMount");
    mount.innerHTML = `
      ${stageGuide({
        measure: "异色察觉、速度和视觉敏锐度。",
        rule: "连续侦测 9 张异色印记，错一张或 20 秒耗尽就结算。越往后色差越小。",
        scoring: "9 张全过且 20 秒内完成为 10 分；中途失手会按已识破张数结算。",
      })}
      ${metricStrip([
        { label: "进度", value: `${round + 1}/9` },
        { label: "识破", value: `${correct}/9` },
        { label: "余时", value: '<span id="colorTime">20.0s</span>' },
        { label: "伪装", value: `${data.delta}` },
      ])}
      <div class="arena center">
        <div class="swatch-grid color-grid" style="grid-template-columns:repeat(${data.size}, minmax(40px, 1fr));"></div>
      </div>
    `;
    const grid = document.querySelector(".color-grid");
    for (let i = 0; i < data.size * data.size; i += 1) {
      const btn = document.createElement("button");
      btn.className = "swatch";
      btn.type = "button";
      const delta = i === odd ? data.delta : 0;
      btn.style.background = `rgb(${base[0] + delta}, ${base[1] - Math.round(delta / 2)}, ${base[2] + Math.round(delta / 3)})`;
      btn.addEventListener("click", () => {
        if (i !== odd) {
          scoreAndFinish(`第 ${round + 1} 张误判`);
          return;
        }
        correct += 1;
        round += 1;
        if (round >= rounds.length) {
          scoreAndFinish("九张全过");
        } else {
          draw();
        }
      });
      grid.appendChild(btn);
    }
    updateTimer();
  }

  timer = setInterval(updateTimer, 100);
  cleanupFns.push(() => clearInterval(timer));
  draw();
}

function renderDualBall(axis, stage) {
  const mount = document.querySelector("#stageMount");
  mount.innerHTML = `
    ${stageGuide({
      measure: "分散注意、双目标追踪和混乱中认人。",
      rule: "分低、中、高三轮。每轮先记住两颗目标星，随后星群加速混动，结束后指认一次。",
      scoring: "三轮共 6 颗目标星。等级越高星群越快，全部追中才会接近满分。",
    })}
    ${metricStrip([
      { label: "等级", value: '<span id="dualLevel">低 1/3</span>' },
      { label: "命中", value: '<span id="dualHits">0</span>/6' },
      { label: "局面", value: '<span id="dualPhase">观察</span>' },
    ])}
    <div class="arena center">
      <canvas class="canvas-game dual-canvas" id="dualCanvas" width="760" height="360"></canvas>
    </div>
    <div class="actions" id="dualActions">
      <button class="button primary" id="startGame" type="button">锁定双星</button>
    </div>
  `;
  const canvas = document.querySelector("#dualCanvas");
  const ctx = canvas.getContext("2d");
  const start = document.querySelector("#startGame");
  const levels = [
    { name: "低", count: 8, reveal: 2.3, track: 4.8, speed: 1.08 },
    { name: "中", count: 10, reveal: 1.9, track: 4.5, speed: 1.46 },
    { name: "高", count: 12, reveal: 1.5, track: 4.2, speed: 1.88 },
  ];
  let balls = [];
  let targets = [];
  let picked = [];
  let startedAt = 0;
  let levelIndex = 0;
  let roundResults = [];
  let raf = null;
  let stopped = false;

  function initBalls(config) {
    balls = Array.from({ length: config.count }, (_, i) => ({
      id: i + 1,
      x: 44 + Math.random() * (canvas.width - 88),
      y: 44 + Math.random() * (canvas.height - 88),
      vx: (Math.random() > 0.5 ? 1 : -1) * (config.speed + Math.random() * config.speed),
      vy: (Math.random() > 0.5 ? 1 : -1) * (config.speed * 0.95 + Math.random() * config.speed),
      r: 13,
    }));
    targets = shuffle(balls.map((b) => b.id)).slice(0, 2);
  }

  function draw() {
    const config = levels[levelIndex];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(8,10,9,0.75)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const elapsed = (performance.now() - startedAt) / 1000;
    const reveal = elapsed < config.reveal;
    const trackEnd = config.reveal + config.track;
    document.querySelector("#dualLevel").textContent = `${config.name} ${levelIndex + 1}/3`;
    document.querySelector("#dualPhase").textContent = reveal ? "记住目标" : elapsed < trackEnd ? "追踪中" : "指认";
    balls.forEach((ball) => {
      if (!stopped) {
        ball.x += ball.vx;
        ball.y += ball.vy;
        if (ball.x < ball.r || ball.x > canvas.width - ball.r) ball.vx *= -1;
        if (ball.y < ball.r || ball.y > canvas.height - ball.r) ball.vy *= -1;
      }
      const isTarget = targets.includes(ball.id);
      const isPicked = picked.includes(ball.id);
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
      ctx.fillStyle = reveal && isTarget ? "#e4bf62" : isPicked ? "#70c7c7" : "#6ea8df";
      ctx.fill();
      if (stopped || reveal) {
        ctx.fillStyle = "#10120f";
        ctx.font = "13px Microsoft YaHei, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(String(ball.id), ball.x, ball.y);
      }
    });
    if (elapsed >= trackEnd && !stopped) {
      stopped = true;
      showPickActions();
    }
    if (!stopped) raf = requestAnimationFrame(draw);
  }

  function showPickActions() {
    const config = levels[levelIndex];
    const actions = document.querySelector("#dualActions");
    actions.innerHTML = `<span class="pill">${config.name}级：指认两颗目标星</span>`;
    balls.forEach((ball) => {
      const btn = document.createElement("button");
      btn.className = "button";
      btn.type = "button";
      btn.textContent = String(ball.id);
      btn.addEventListener("click", () => {
        if (picked.includes(ball.id) || picked.length >= 2) return;
        picked.push(ball.id);
        btn.classList.add("primary");
        draw();
        if (picked.length === 2) {
          const hit = picked.filter((id) => targets.includes(id)).length;
          roundResults.push({ level: config.name, targets: [...targets], picked: [...picked], hit });
          const totalHits = roundResults.reduce((sum, item) => sum + item.hit, 0);
          document.querySelector("#dualHits").textContent = totalHits;
          if (levelIndex >= levels.length - 1) {
            const perfect = totalHits === 6;
            const score = clamp((totalHits / 6) * 9.2 + (perfect ? 0.8 : 0));
            completeStage(score, { rounds: roundResults, totalHits }, `三轮双星追踪命中 ${totalHits}/6。`);
          } else {
            levelIndex += 1;
            actions.innerHTML = `<button class="button primary" id="nextDualRound" type="button">进入${levels[levelIndex].name}级追踪</button>`;
            document.querySelector("#nextDualRound").addEventListener("click", startRound);
          }
        }
      });
      actions.appendChild(btn);
    });
    draw();
  }

  function startRound() {
    initBalls(levels[levelIndex]);
    picked = [];
    stopped = false;
    startedAt = performance.now();
    document.querySelector("#dualPhase").textContent = "记住目标";
    document.querySelector("#dualActions").innerHTML = `<span class="pill">${levels[levelIndex].name}级追踪中</span>`;
    cancelAnimationFrame(raf);
    draw();
  }

  start.addEventListener("click", () => {
    start.disabled = true;
    levelIndex = 0;
    roundResults = [];
    document.querySelector("#dualHits").textContent = "0";
    startRound();
  });
  cleanupFns.push(() => cancelAnimationFrame(raf));
}

function renderSchulte(axis, stage) {
  const boards = [
    { label: "低", size: 3 },
    { label: "中", size: 4 },
    { label: "高", size: 5 },
    { label: "极限", size: 6 },
  ];
  let boardIndex = 0;
  let current = 1;
  let errors = 0;
  let startedAt = performance.now();

  function drawBoard() {
    const board = boards[boardIndex];
    current = 1;
    const nums = shuffle(Array.from({ length: board.size * board.size }, (_, i) => i + 1));
    const mount = document.querySelector("#stageMount");
    mount.innerHTML = `
      ${stageGuide({
        measure: "长注意、地形搜索、顺序执行和抗急躁。",
        rule: "按 1 到 N 的顺序点完侦察格。低 3x3，中 4x4，高 5x5，最后追加极限 6x6。",
        scoring: "前三轮看稳定搜索，极限轮用于区分 9 分以上；用时越短越好，点错会扣分。",
      })}
      ${metricStrip([
        { label: "难度", value: board.label },
        { label: "下个格", value: `<span id="nextNumber">${current}</span>` },
        { label: "误判", value: `<span id="schulteErrors">${errors}</span>` },
      ])}
      <div class="arena center">
        <div class="schulte-grid" style="grid-template-columns:repeat(${board.size}, minmax(42px, 1fr));">
          ${nums.map((num) => `<button class="symbol-cell schulte-cell" type="button" data-num="${num}">${num}</button>`).join("")}
        </div>
      </div>
    `;
    document.querySelectorAll("[data-num]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const value = Number(btn.dataset.num);
        if (value === current) {
          btn.disabled = true;
          btn.classList.add("selected");
          current += 1;
          if (current > board.size * board.size) {
            boardIndex += 1;
            if (boardIndex >= boards.length) {
              const elapsed = (performance.now() - startedAt) / 1000;
              const speedBonus = Math.max(0, 2.1 - elapsed / 34);
              const score = clamp(8.4 + speedBonus - errors * 0.42);
              completeStage(score, { elapsedSec: Math.round(elapsed), errors, boards: boards.length }, `完成四轮侦察含极限 6x6，用时 ${Math.round(elapsed)} 秒，误判 ${errors} 次。`);
            } else {
              drawBoard();
            }
          } else {
            document.querySelector("#nextNumber").textContent = current;
          }
        } else {
          errors += 1;
          document.querySelector("#schulteErrors").textContent = errors;
          btn.classList.add("wrong");
          setTimeout(() => btn.classList.remove("wrong"), 220);
        }
      });
    });
  }

  drawBoard();
}

function renderCharismaQuiz(axis, stage) {
  renderQuizStage(stage, getQuizModule("cha_dialogue", {
    guide: {
      measure: "议会发言、酒馆谈判、鼓舞和压场。",
      rule: "这里没有唯一正解，选你会怎么在桌边处理局面。",
      scoring: "目标达成、情绪处理、群体影响和代价控制一起结算。",
    },
    questions: [
      {
        prompt: "议会大厅里，队友当众失误，贵族们开始起哄。你既要保住队伍脸面，又不能把错误糊过去。你会？",
        options: [
          { text: "先接住场面，公开分担一部分责任，私下再复盘关键失误。", score: 9.2, traits: { F: 2, good: 2, empathy: 2, order: 1 } },
          { text: "直接指出问题源头，把所有人拉回当前任务。", score: 6.8, traits: { T: 2, J: 1, lawful: 1, control: 1 } },
          { text: "用一句玩笑卸掉尴尬，再顺势把话题推向下一步。", score: 8.2, traits: { E: 2, P: 1, expression: 2, chaotic: 1 } },
          { text: "先沉默看局，让他自己解释，自己暂时不下场。", score: 4.8, traits: { I: 2, self: 1 } },
        ],
      },
      {
        prompt: "商会代表强硬压价，但你知道他的护送队明早就要出城。你要谈成合作，还不能撕破脸。",
        options: [
          { text: "点出他的时间压力，但递一个双方都能体面下台的条件。", score: 9.4, traits: { F: 1, T: 1, good: 1, control: 1 } },
          { text: "抓住软肋往下压，逼他当场签字。", score: 7.0, traits: { T: 2, self: 2, control: 2 } },
          { text: "绕开金币，改谈护送名额、补给和商会声誉。", score: 8.7, traits: { N: 2, P: 1 } },
          { text: "只按公会牌价报价，不跟他玩心理战。", score: 6.5, traits: { lawful: 2, J: 2, order: 2 } },
        ],
      },
      {
        prompt: "队伍在雨夜里快走不动了，大家已经听腻了“坚持一下”。你要让他们继续前进。",
        options: [
          { text: "承认大家已经累了，然后指出最近的落脚点和各自分工。", score: 9.5, traits: { good: 2, J: 1, empathy: 2 } },
          { text: "摊开代价：现在停下，明天会更糟。按计划走。", score: 7.2, traits: { T: 2, lawful: 1, control: 2 } },
          { text: "自己先走到最前面，用脚步替代演讲。", score: 8.6, traits: { E: 1, action: 2, risk: 1 } },
          { text: "让每个人说出最不想失去的东西，再把它变成前进理由。", score: 8.8, traits: { F: 2, N: 1, expression: 1 } },
        ],
      },
      {
        prompt: "队伍里有个强力队友总抢战功，偏偏他确实能打。你要让队伍继续运作。",
        options: [
          { text: "立一张公开战功表，把分配变成桌面规则。", score: 9.0, traits: { lawful: 2, T: 1, order: 2 } },
          { text: "私下谈，给他面子，但把边界说清楚。", score: 8.5, traits: { F: 1, control: 1 } },
          { text: "当众点破，让他下次不敢再抢。", score: 6.2, traits: { chaotic: 1, self: 1, expression: 1 } },
          { text: "避开他，另外拉一支更听话的小队。", score: 4.5, traits: { I: 1, self: 1 } },
        ],
      },
    ],
  }));
}

function renderAlignmentQuiz(axis, stage) {
  renderQuizStage(stage, getQuizModule("cha_alignment", {
    guide: {
      measure: "规则观、目标观、代价承受和阵营动机。",
      rule: "选你在桌边最想扮演的行动方式。这里会保留“邪恶”阵营，但它只代表角色动机。",
      scoring: "阵营不影响能力强弱，只改变角色气质、职业味道和结局文案。",
    },
    questions: [
      {
        prompt: "你发现一条被王国明令禁止的密道。走它能救很多人，但会破坏一项重要制度。",
        options: [
          { text: "先走合法程序，除非沙漏真的快漏完。", score: 7.5, traits: { lawful: 2, good: 1, J: 1 } },
          { text: "立刻带人走密道，救人优先，后果之后扛。", score: 8.5, traits: { chaotic: 2, good: 2, action: 1 } },
          { text: "只在能把自己摘干净时使用。", score: 5.8, traits: { self: 2, T: 1 } },
          { text: "不碰密道，让王国制度自己处理。", score: 4.5, traits: { I: 1, order: 1 } },
        ],
      },
      {
        prompt: "你拿到一枚能短暂改写他人选择的戒指。最接近你的态度是？",
        options: [
          { text: "不用。人的自主性不是随便能越过的豁免检定。", score: 8.5, traits: { good: 2, F: 1 } },
          { text: "只在避免大灾难时使用，并留下完整记录。", score: 8.0, traits: { lawful: 1, T: 1, control: 1 } },
          { text: "如果能达成重要目标，可以有限使用。", score: 6.2, traits: { self: 2, control: 2 } },
          { text: "这就是改写局面的神器，当然要用。", score: 5.2, traits: { chaotic: 2, risk: 2 } },
        ],
      },
      {
        prompt: "如果这是一支长期团，你更想成为哪种队伍核心？",
        options: [
          { text: "定规则的人，让这支队伍长期不散。", score: 7.8, traits: { lawful: 2, J: 2, order: 2 } },
          { text: "破僵局的人，卡关时负责踹开新门。", score: 8.0, traits: { chaotic: 2, N: 1, risk: 1 } },
          { text: "照看营火的人，让每个人都能撑到最后。", score: 8.4, traits: { F: 2, good: 2, empathy: 2 } },
          { text: "幕后排盘的人，确保最终目标被拿下。", score: 7.2, traits: { T: 2, control: 2, self: 1 } },
        ],
      },
    ],
  }));
}

function renderMbtiProbe() {
  const config = getMbtiProbeConfig();
  const seenAxes = new Set();
  const questions = (config.questions || []).filter((question) => {
    if (seenAxes.has(question.axis)) return false;
    seenAxes.add(question.axis);
    return true;
  });
  if (!questions.length) {
    state.screen = getMbtiProbeReturnScreen();
    render();
    return;
  }

  function startProbe() {
    let index = 0;
    state.mbtiProbe = {
      scores: { I: 0, E: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 },
      answers: [],
      completed: false,
      resultNote: config.resultNote,
    };

    function draw() {
      const q = questions[index];
      setProgress(`扮演滤镜 ${index + 1}/${questions.length}`, 92 + index * 1.5);
      app.innerHTML = `
        <section class="screen mbti-fast-screen">
          <div class="tool-panel mbti-fast-panel">
            <div class="panel-head">
              <div>
                <p class="eyebrow">Roleplay Lens / 4-axis Probe</p>
                <h2>${config.title}</h2>
                <p>四个维度各回答一次，只决定角色的扮演滤镜，不改写已经完成的实战成绩。</p>
              </div>
              <span class="mbti-fast-count">${index + 1} / ${questions.length}</span>
            </div>
            <div class="mbti-fast-question">
              <p class="eyebrow">${q.axis} / 单轮判定</p>
              <h3>${q.prompt}</h3>
              <div class="choice-grid two-col">
                ${q.options
                  .map(
                    (option, i) => `
                      <button class="choice" data-choice="${i}" type="button">
                        <span class="choice-kicker">${option.side}</span>
                        <span>${option.text}</span>
                      </button>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </section>
      `;

      document.querySelectorAll("[data-choice]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const option = q.options[Number(btn.dataset.choice)];
          const side = option.side;
          state.mbtiProbe.scores[side] = (state.mbtiProbe.scores[side] || 0) + (option.score || 1);
          state.mbtiProbe.answers.push({ id: q.id, axis: q.axis, round: 1, side });
          index += 1;
          if (index >= questions.length) {
            state.mbtiProbe.completed = true;
            state.screen = getMbtiProbeReturnScreen();
            render();
          } else {
            draw();
          }
        });
      });
    }

    draw();
  }

  setProgress("选择扮演滤镜", 91);
  app.innerHTML = `
    <section class="screen mbti-gate-screen">
      <div class="tool-panel mbti-gate">
        <div>
          <p class="eyebrow">Final Filter / MBTI</p>
          <h2>最后决定这张卡怎么演</h2>
          <p>知道自己的 MBTI 就直接登记；不知道则用四道跑团情境题快速生成。它只影响角色口吻、职业细分和专属评价。</p>
        </div>
        <div class="mbti-gate-grid">
          <div class="mbti-known-option">
            <strong>我知道自己的类型</strong>
            <select id="knownMbtiSelect" aria-label="选择 MBTI">
              <option value="">选择 16 型之一</option>
              ${MBTI_TYPES.slice(1).map((type) => `<option value="${type}">${type}</option>`).join("")}
            </select>
            <button class="button primary" id="useKnownMbti" type="button" disabled>使用这个类型</button>
          </div>
          <button class="mbti-probe-option" id="startShortMbti" type="button">
            <span class="choice-kicker">4 questions</span>
            <strong>让公会替我判断</strong>
            <small>I/E、N/S、T/F、J/P 各一题</small>
          </button>
        </div>
      </div>
    </section>
  `;
  const select = document.querySelector("#knownMbtiSelect");
  const useKnown = document.querySelector("#useKnownMbti");
  select.addEventListener("change", () => {
    useKnown.disabled = !select.value;
  });
  useKnown.addEventListener("click", () => {
    if (!select.value) return;
    state.profile.mbtiSelf = select.value;
    state.mbtiProbe = null;
    state.screen = getMbtiProbeReturnScreen();
    render();
  });
  document.querySelector("#startShortMbti").addEventListener("click", startProbe);
}

function renderPersonality() {
  setProgress("选择你的扮演姿态", 88);
  const config = getQuizModule("roleplay_stance", {
    page: {
      eyebrow: "Session 0.5 / Roleplay Stance",
      title: "给角色加一层扮演姿态",
      intro: "这几题不改属性点，只决定你在桌边怎么演：守序还是破局，共情还是目标优先，谨慎还是冒险。",
    },
    questions: [
    {
      prompt: "你第一次走进一座陌生地城，最先看什么？",
      options: [
        { text: "门锁、权限、资源流向和巡逻规律。", traits: { I: 1, T: 1, J: 1, order: 1 } },
        { text: "队伍里谁在发号施令，谁其实最紧张。", traits: { F: 1, N: 1, empathy: 1 } },
        { text: "墙缝、捷径、隐藏门和规则漏洞。", traits: { N: 1, P: 1, chaotic: 1 } },
        { text: "有没有能马上推动局面的小动作。", traits: { E: 1, S: 1, action: 1 } },
      ],
    },
    {
      prompt: "公告板上同时挂出四张委托，你最先撕哪一张？",
      options: [
        { text: "潜伏三周，最后一晚一口气收网。", traits: { J: 2, N: 1, control: 1 } },
        { text: "现场混乱、情报不足，但机会窗口只有十分钟。", traits: { P: 2, E: 1, risk: 1 } },
        { text: "找到某个 NPC 真正想要守住的东西。", traits: { F: 2, empathy: 2 } },
        { text: "把一团乱线拆成可执行的三步计划。", traits: { T: 2, S: 1, order: 1 } },
      ],
    },
    {
      prompt: "DM 突然宣布原计划失效，你的第一反应更像？",
      options: [
        { text: "先稳住桌面局势，再重排优先级。", traits: { J: 2, order: 1 } },
        { text: "马上改路线，边跑边修计划。", traits: { P: 2, action: 1 } },
        { text: "先看队友状态，有没有人快掉线。", traits: { F: 2, good: 1 } },
        { text: "先找是哪条关键变量变了。", traits: { T: 2, N: 1 } },
      ],
    },
    {
      prompt: "给这张角色卡留一个可演缺陷，你更想留哪种？",
      options: [
        { text: "总想控场，很难把背后交给别人。", traits: { control: 2, J: 1 } },
        { text: "太容易共情，冷酷选项总下不去手。", traits: { empathy: 2, F: 1 } },
        { text: "太爱自由，规矩常被你顺手拆掉。", traits: { chaotic: 2, P: 1 } },
        { text: "太信原则，有时错过变化窗口。", traits: { lawful: 2, J: 1 } },
      ],
    },
    ],
  });
  const questions = config.questions;
  const page = config.page;
  let index = 0;

  function draw() {
    const q = questions[index];
    setProgress(`扮演姿态 ${index + 1}/${questions.length}`, 88 + index * 2.4);
    app.innerHTML = `
      <section class="screen">
        <div class="tool-panel">
          <p class="eyebrow">${page.eyebrow}</p>
          <h2>${page.title}</h2>
          <p class="panel-copy">${page.intro}</p>
          <div class="question-panel tool-panel deep-question">
            <h3>${q.prompt}</h3>
            <div class="choice-grid">
              ${q.options
                .map(
                  (option, i) => `
                    <button class="choice" data-choice="${i}" type="button">
                      <span class="choice-kicker">扮演 ${i + 1}</span>
                      <span>${option.text}</span>
                    </button>
                  `,
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>
    `;
    document.querySelectorAll("[data-choice]").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyTraits(q.options[Number(btn.dataset.choice)].traits);
        state.personalityAnswers += 1;
        index += 1;
        if (index >= questions.length) {
          state.screen = "result";
          render();
        } else {
          draw();
        }
      });
    });
  }
  draw();
}

function applyTraits(traits) {
  Object.entries(traits || {}).forEach(([key, value]) => {
    state.traits[key] = (state.traits[key] || 0) + value;
  });
}

function getAncestryAnchor(profile = state.profile || {}) {
  const id = profile.ancestry || "auto";
  return FANTASY_ANCESTRIES.find((item) => item.id === id) || FANTASY_ANCESTRIES[0];
}

function isSpecificAncestry(ancestry) {
  return Boolean(ancestry && ancestry.id && ancestry.id !== "auto");
}

function decorateBodyAnchor(anchor, ancestry) {
  const selected = isSpecificAncestry(ancestry);
  if (!selected) {
    return {
      ...anchor,
      ancestry,
      ancestrySelected: false,
      ancestryLine: "",
      ancestryNote: "",
    };
  }

  if (!anchor.isFantasy) {
    return {
      ...anchor,
      size: ancestry.size === "自动" ? anchor.size : ancestry.size,
      creature: ancestry.name,
      label: ancestry.label,
      note: `${ancestry.note} ${anchor.note}`,
      ancestry,
      ancestrySelected: true,
      ancestryLine: `${ancestry.name} · ${ancestry.label}`,
      ancestryNote: ancestry.note,
    };
  }

  return {
    ...anchor,
    ancestry,
    ancestrySelected: true,
    ancestryLine: `${ancestry.name} · ${ancestry.label}`,
    ancestryNote: `${ancestry.note} 体型数值同时触发${anchor.size}参照，跑团时可解释成混血、变体、魔法体型或 DM 特批。`,
  };
}

function getBodyCreatureAnchor(profile = state.profile || {}) {
  const height = Number(profile.height);
  const weight = Number(profile.weight);
  const hasHeight = Number.isFinite(height) && height > 0;
  const hasWeight = Number.isFinite(weight) && weight > 0;
  const ancestry = getAncestryAnchor(profile);

  if ((profile.height && !hasHeight) || (profile.weight && !hasWeight)) {
    return decorateBodyAnchor({
      size: "异常",
      creature: "变形术事故",
      label: "数值需要重新登记",
      note: "公会书记看不懂这组身高体重，先按中性骰处理。",
      isFantasy: true,
      scoreMod: 0,
    }, ancestry);
  }

  if (!hasHeight && !hasWeight) {
    return decorateBodyAnchor({
      size: "中型",
      creature: "未登记冒险者",
      label: "普通开卡参照",
      note: "未填写体型数据，体质轴使用中性现实锚点。",
      isFantasy: false,
      scoreMod: 0,
    }, ancestry);
  }

  const outOfHumanBand =
    (hasHeight && (height < 130 || height > 230)) || (hasWeight && (weight < 35 || weight > 220));

  if (!outOfHumanBand) {
    return decorateBodyAnchor({
      size: "中型",
      creature: "类人生物",
      label: "普通现实锚点",
      note: "身高体重处于普通校准区间，使用现实锚点和 BMI 做轻量娱乐化换算。",
      isFantasy: false,
      scoreMod: 0,
    }, ancestry);
  }

  if ((hasHeight && height < 60) || (hasWeight && weight < 12)) {
    return decorateBodyAnchor({
      size: "微型",
      creature: "小妖精 / 魔宠",
      label: "极小体型参照",
      note: "按奇幻微型生物处理，不套普通人 BMI；优势偏灵巧和隐蔽，负重续航需要道具补足。",
      isFantasy: true,
      scoreMod: -0.15,
    }, ancestry);
  }

  if ((hasHeight && height < 130) || (hasWeight && weight < 35)) {
    return decorateBodyAnchor({
      size: "小型",
      creature: "侏儒 / 半身人 / 狗头人",
      label: "小型冒险者参照",
      note: "按 DND 小型生物处理，不把低身高体重直接判成现实弱项。",
      isFantasy: true,
      scoreMod: 0.05,
    }, ancestry);
  }

  if ((hasHeight && height >= 500) || (hasWeight && weight >= 900)) {
    return decorateBodyAnchor({
      size: "超巨型",
      creature: "泰坦 / 远古巨人",
      label: "史诗体型参照",
      note: "按超巨型奇幻生物处理；承重与冲击力极强，但地城适配会成为可演代价。",
      isFantasy: true,
      scoreMod: 0.9,
    }, ancestry);
  }

  if ((hasHeight && height >= 350) || (hasWeight && weight >= 500)) {
    return decorateBodyAnchor({
      size: "巨型",
      creature: "巨人",
      label: "巨人级体型参照",
      note: "按巨人级体型处理，体质底子偏强，同时保留行动空间和装备适配的剧情限制。",
      isFantasy: true,
      scoreMod: 0.7,
    }, ancestry);
  }

  if ((hasHeight && height >= 240) || (hasWeight && weight >= 220)) {
    return decorateBodyAnchor({
      size: "大型",
      creature: "食人魔 / 半巨人",
      label: "大型生物参照",
      note: "按大型生物处理，不用普通 BMI 评价；优势偏承重、抗压和正面冲击。",
      isFantasy: true,
      scoreMod: 0.45,
    }, ancestry);
  }

  return decorateBodyAnchor({
    size: "中型+",
    creature: "哥利亚 / 熊地精",
    label: "强壮类人生物参照",
    note: "接近普通上限但仍可作为类人生物处理，体质修正保持温和。",
    isFantasy: true,
    scoreMod: 0.25,
  }, ancestry);
}

function computeBodyScore() {
  const p = state.profile || {};
  let score = 5.2;
  const age = Number(p.age);
  const height = Number(p.height);
  const weight = Number(p.weight);
  const bodyFat = Number(p.bodyFat);
  const bodyAnchor = getBodyCreatureAnchor(p);
  if (age) {
    if (age >= 18 && age <= 35) score += 0.5;
    else if (age > 50) score -= 0.35;
  }
  if (bodyAnchor.isFantasy) {
    score += bodyAnchor.scoreMod;
  } else if (height && weight) {
      const bmi = weight / (height / 100) ** 2;
      if (bmi >= 18.5 && bmi <= 27.5) score += 0.7;
      else if (bmi >= 16.5 && bmi <= 31) score += 0.2;
      else score -= 0.35;
  }
  if (bodyFat && !bodyAnchor.isFantasy) {
    if (bodyFat >= 12 && bodyFat <= 30) score += 0.4;
    else if (bodyFat > 38) score -= 0.3;
  }
  if (bodyAnchor.ancestrySelected) score += bodyAnchor.ancestry.scoreMod || 0;
  if (p.exercise === "light") score += 0.35;
  if (p.exercise === "regular") score += 1.0;
  if (p.exercise === "high") score += 1.25;
  if (p.exercise === "none") score -= 0.35;
  if (p.sleep === "good") score += 0.35;
  if (p.sleep === "poor") score -= 0.55;
  if (p.health === "mild") score -= 0.35;
  if (p.health === "moderate") score -= 0.9;
  return clamp(score);
}

function computeHealthScore() {
  const p = state.profile || {};
  let score = 5.4;
  if (p.sleep === "good") score += 1.0;
  if (p.sleep === "average") score += 0.2;
  if (p.sleep === "poor") score -= 1.2;
  if (p.health === "none") score += 0.7;
  if (p.health === "mild") score -= 0.4;
  if (p.health === "moderate") score -= 1.25;
  if (p.exercise === "regular" || p.exercise === "high") score += 0.7;
  return clamp(score);
}

function translateExercise(value) {
  const map = {
    unknown: "未填写",
    none: "基本不运动",
    light: "轻中强度 1-2 次",
    regular: "规律运动",
    high: "高频运动",
  };
  return map[value] || value || "未填写";
}

function translateSleep(value) {
  const map = {
    unknown: "未填写",
    good: "恢复不错",
    average: "一般",
    poor: "偏差",
  };
  return map[value] || value || "未填写";
}

function translateHealth(value) {
  const map = {
    none: "无明显影响",
    mild: "轻微影响",
    moderate: "中等影响",
    skip: "跳过",
  };
  return map[value] || value || "未填写";
}

function renderResult() {
  setProgress("冒险者名册已生成", 100);
  ensureScores();
  const summary = buildSummary();
  app.innerHTML = `
    <section class="screen">
      ${renderRecruitmentResultPanel()}

      <div class="intro-panel result-hero" style="min-height:auto;">
        <p class="eyebrow">Character Sheet Ready / Welcome to the Table</p>
        <h1>${summary.archetype}</h1>
        <p class="lead">${summary.oneLine}</p>
        <div class="pill-row">
          <span class="pill">副职业 ${summary.dndProfile.subclass}</span>
          <span class="pill">${summary.mbtiLabel}</span>
          ${summary.ancestryAnchor.id !== "auto" ? `<span class="pill">${summary.ancestryLabel}</span>` : ""}
          <span class="pill">${summary.top.name} / ${summary.second.name}</span>
        </div>
      </div>

      <div class="result-grid result-grid-identity">
        <div class="result-panel">
          <h2>六维属性雷达</h2>
          <div class="radar-wrap">
            <canvas id="radarCanvas" width="620" height="500"></canvas>
          </div>
        </div>
        <div class="result-panel">
          <h2>立绘与职业牌</h2>
          <div class="portrait-card tarot-layout portrait-identity-only" style="--portrait-a:${summary.top.color}; --portrait-b:${summary.second.color};">
            <div class="tarot-shell">
              <div class="tarot-window">
                ${summary.portraitAsset ? `<img class="portrait-image" src="${summary.portraitAsset}" alt="${summary.mbtiCode} ${summary.dndProfile.className}职业立绘" loading="lazy">` : ""}
                <canvas id="portraitCanvas" class="portrait-canvas" width="520" height="520"></canvas>
              </div>
              <div class="tarot-nameplate">
                <p>${summary.mbtiCode}</p>
                <h3>${summary.dndProfile.className}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="result-panel dnd-class-panel">
        <div class="panel-head dnd-panel-head">
          <div>
            <p class="eyebrow">Class Hooks / DND Job Board</p>
            <h2>职业线索板</h2>
          </div>
        </div>
        <div class="dnd-match-grid">
          ${summary.dndMatches.map((profile, index) => renderDndMatchCard(profile, index, summary.mbtiCode)).join("")}
        </div>
      </div>

      <div class="result-grid result-grid-scores">
        <div class="result-panel">
          <h2>属性点数清单</h2>
          <div class="score-list">
            ${ATTRIBUTES.map((axis) => scoreRow(axis)).join("")}
          </div>
        </div>
        <div class="result-panel">
          <h2>检定日志</h2>
          <div class="stage-breakdown">
            ${ATTRIBUTES.map((axis) => stageBreakdown(axis)).join("")}
          </div>
        </div>
      </div>

      <div class="result-grid result-grid-profile">
        <div class="result-panel">
          <h2>主职业描述</h2>
          <div class="profession-brief">
            <div class="profession-brief-head">
              <span>TOP 1 贴合职业</span>
              <strong>${summary.dndProfile.className}<em>${summary.dndProfile.classEn}</em></strong>
              <p>${summary.dndProfile.subclass} · ${summary.dndProfile.role}</p>
            </div>
            <dl class="profession-lines">
              <div>
                <dt>主职业</dt>
                <dd>${summary.mainClassLine}</dd>
              </div>
              <div>
                <dt>副职业</dt>
                <dd>${summary.subClassLine}</dd>
              </div>
              <div>
                <dt>职业特性</dt>
                <dd>${summary.classFeatureText}</dd>
              </div>
              <div>
                <dt>特殊点</dt>
                <dd>${summary.specialPointText}</dd>
              </div>
              <div>
                <dt>可演缺陷</dt>
                <dd>${summary.riskText}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="result-panel">
          <h2>总结描述词</h2>
          <div class="descriptor-grid">
            ${renderDescriptorGroups(summary.descriptorGroups)}
          </div>
        </div>
      </div>

      <div class="result-grid result-grid-constitution">
        ${renderConstitutionReading(summary.constitution)}
        ${renderDefectReading(summary.constitution)}
      </div>

      <div class="result-panel">
        <h2>给 DM 的角色摘要</h2>
        <p class="fineprint">这段已经把属性、职业线索、扮演口吻和阵营动机压成一张开团便签，方便继续给 OC、自设、跑团建卡或交给文案模型扩写。</p>
        <textarea class="result-copy" id="copyText" readonly>${summary.copyText}</textarea>
        <div class="actions">
          <button class="button primary" id="copyBtn" type="button">复制给 DM</button>
          <button class="button" id="restartBtn" type="button">重开一张卡</button>
        </div>
      </div>
    </section>
  `;
  drawRadar();
  drawPortrait(summary);
  document.querySelector("#copyBtn").addEventListener("click", copySummary);
  document.querySelector("#restartBtn").addEventListener("click", () => {
    Object.assign(state, {
      screen: "start",
      current: 0,
      stage: 0,
      profile: {},
      scores: {},
      axisStages: {},
      raw: {},
      traits: { ...INITIAL_TRAITS },
      mbtiProbe: null,
      mbtiProbeReturnScreen: null,
      personalityAnswers: 0,
      recruitment: null,
    });
    render();
  });
}

function renderDndMatchCard(profile, index, mbtiCode) {
  const style = profile.style || DND_CARD_STYLES[profile.className] || DND_CARD_STYLES.冒险者;
  return `
    <article class="dnd-match-card ${index === 0 ? "is-primary" : ""}" style="--card-a:${style.a}; --card-b:${style.b};">
      <span class="dnd-match-rank">TOP ${index + 1}</span>
      <div>
        <p class="eyebrow">${mbtiCode} ${profile.face}</p>
        <h3>${profile.className}<small>${profile.classEn}</small></h3>
      </div>
      <p>${profile.subclass} · ${profile.role}</p>
      <strong>${fmt(profile.score)} / 10</strong>
      <small>${profile.matchText}</small>
    </article>
  `;
}

function renderRecruitmentResultPanel() {
  const judgement = state.recruitment?.judgement;
  if (!judgement?.ending) return "";
  const ending = judgement.ending;
  const target = judgement.target;
  const theme = getRecruitmentTheme(target?.targetId);
  const endingArt = getEndingArt(ending.endingType);
  return `
    <div class="result-panel recruitment-result-panel ${theme.className}" style="--trial-accent:${theme.accent}; --trial-secondary:${theme.secondary}">
      ${renderRecruitmentArt({ src: endingArt, alt: `${verdictLabel(ending.endingType)}公会判定图`, className: "judgement-art result-judgement-art" })}
      <div class="panel-head">
        <div>
          <p class="eyebrow">Recruitment Verdict / ${verdictLabel(ending.endingType)}</p>
          <h2>${adaptRecruitmentCopy(ending.title)}</h2>
          <p>${adaptRecruitmentCopy(ending.verdictLine)}</p>
        </div>
        <span class="verdict-stamp small">${verdictLabel(ending.endingType)}</span>
      </div>
      <div class="judgement-grid compact">
        <div>
          <strong>血脉</strong>
          <span>${getRecruitmentRaceCard().raceNameZh || "巨魔"}</span>
        </div>
        <div>
          <strong>报名志愿</strong>
          <span>${getRecruitmentTargetProfession(target)}</span>
        </div>
        <div>
          <strong>推荐归宿</strong>
          <span>${(ending.recommendedClass || []).map((id) => getRecruitmentTheme(id).name).join(" / ")}</span>
        </div>
        <div>
          <strong>上桌功能</strong>
          <span>${adaptRecruitmentCopy(ending.tableFunction)}</span>
        </div>
        <div>
          <strong>雷达来源</strong>
          <span>${state.recruitment?.calibration ? "三幕判断 60% / 复合实战 40%" : "三幕判断折算"}</span>
        </div>
      </div>
      <blockquote>${adaptRecruitmentCopy(ending.playableFlaw)}</blockquote>
    </div>
  `;
}

function renderDescriptorGroups(groups) {
  return groups
    .map(
      (group) => `
        <div class="descriptor-card">
          <strong>${group.title}</strong>
          <div class="descriptor-tags">
            ${group.items.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </div>
      `,
    )
    .join("");
}

function renderConstitutionReading(constitution) {
  const base = constitution.base;
  return `
    <div class="result-panel constitution-panel">
      <div class="constitution-head">
        <p class="eyebrow">Constitution Reading / Camp Diagnosis</p>
        <h2>体质鉴定</h2>
        <span>${constitution.tierLabel} · ${constitution.personalityGroup}</span>
      </div>
      <div class="constitution-card">
        <strong>${base.title}</strong>
        <p class="constitution-one-line">${base.oneLine}</p>
        <p>${base.diagnosis}</p>
        <dl class="constitution-lines">
          <div>
            <dt>桌边功能</dt>
            <dd>${base.tableFunction}</dd>
          </div>
          <div>
            <dt>角色钩子</dt>
            <dd>${base.roleHook}</dd>
          </div>
          <div>
            <dt>可演代价</dt>
            <dd>${base.playableCost}</dd>
          </div>
        </dl>
        <div class="descriptor-tags">
          ${constitution.tags.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderDefectReading(constitution) {
  const trigger = constitution.primaryTrigger;
  if (!trigger) {
    return `
      <div class="result-panel defect-panel is-empty">
        <div class="constitution-head">
          <p class="eyebrow">Defect Card / Not Triggered</p>
          <h2>缺陷卡</h2>
          <span>本局未亮牌</span>
        </div>
        <div class="constitution-card">
          <strong>没有触发特殊缺陷卡</strong>
          <p class="constitution-one-line">这张卡只使用基础体质画像；如果后续生成缺陷卡图片，当前角色不需要额外抽卡。</p>
          <p>系统会在特殊种族、极端体型、睡眠诅咒、高体低感知、高力低体等组合出现时亮出缺陷卡。</p>
        </div>
      </div>
    `;
  }

  const asset = trigger.asset || getDefectCardAsset(trigger.defectCardId);
  const hasImage = asset.status === "ready" && asset.file;
  return `
    <div class="result-panel defect-panel">
      <div class="constitution-head">
        <p class="eyebrow">Defect Card / ${trigger.defectCardId}</p>
        <h2>缺陷卡</h2>
        <span>${trigger.reason}</span>
      </div>
      <div class="constitution-card">
        ${
          hasImage
            ? `<figure class="defect-card-art">
                <img src="${asset.file}" alt="${asset.nameZh || trigger.title}" loading="eager">
                <figcaption>${asset.nameZh || trigger.title} · ${trigger.defectCardId}</figcaption>
              </figure>`
            : `<div class="defect-card-missing">缺陷卡图待补：${asset.expectedFile || trigger.defectCardId}</div>`
        }
        <div class="defect-card-id">${trigger.defectCardId}</div>
        <strong>${trigger.title}</strong>
        <p class="constitution-one-line">${trigger.oneLine}</p>
        <p>${trigger.diagnosis}</p>
        <blockquote>${trigger.specialDialogue}</blockquote>
        <dl class="constitution-lines">
          <div>
            <dt>命中证据</dt>
            <dd>${trigger.evidence || trigger.reason}</dd>
          </div>
          <div>
            <dt>上桌用途</dt>
            <dd>${trigger.tableFunction}</dd>
          </div>
          <div>
            <dt>可演代价</dt>
            <dd>${trigger.playableCost}</dd>
          </div>
        </dl>
        ${
          constitution.extraTriggers.length
            ? `<p class="fineprint">其他命中的暗线：${constitution.extraTriggers.map((item) => `${item.title}（${item.defectCardId}）`).join(" / ")}</p>`
            : ""
        }
      </div>
    </div>
  `;
}

function renderDndClassGrid(currentType, currentClassName) {
  return MBTI_TYPES.filter((type) => type !== "未知")
    .map((type) => renderDndClassCard(type, type === currentType, currentClassName))
    .join("");
}

function renderDndClassCard(type, isCurrent, currentClassName) {
  const profile = getDndMatchesForType(type)[0] || getFallbackDndProfile();
  const archetype = MBTI_ARCHETYPES[type] || MBTI_ARCHETYPES.未知;
  const style = DND_CARD_STYLES[profile.className] || DND_CARD_STYLES.冒险者;
  return `
    <article class="dnd-class-card ${isCurrent ? "is-current" : ""} ${profile.className === currentClassName ? "is-class-match" : ""}" style="--card-a:${style.a}; --card-b:${style.b};">
      <div class="dnd-card-rarity">${style.rarity}</div>
      <div class="dnd-card-sigil">${style.sigil}</div>
      <div class="dnd-open-beta">OPEN TEST</div>
      <div class="dnd-card-top">
        <span class="dnd-mbti">${type}</span>
        ${isCurrent ? `<span class="dnd-current-badge">当前结果</span>` : ""}
      </div>
      <div class="dnd-class-title">
        <strong>${profile.className}</strong>
        <span>${profile.classEn}</span>
      </div>
      <p class="dnd-subclass">${profile.subclass}</p>
      <dl class="dnd-card-facts">
        <div>
          <dt>滤镜</dt>
          <dd>${archetype.job}</dd>
        </div>
        <div>
          <dt>定位</dt>
          <dd>${profile.role}</dd>
        </div>
        <div>
          <dt>属性</dt>
          <dd>${profile.stats}</dd>
        </div>
      </dl>
      <p class="dnd-reason">${profile.why}</p>
      <div class="dnd-alt-row">
        ${profile.alternates.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </article>
  `;
}

function getDndMatchesForType(type) {
  const currentState = state.traits;
  return getDndMatches(type, getAlignmentFromTraits(currentState));
}

function scoreRow(axis) {
  const value = state.scores[axis.id] || 0;
  return `
    <div class="score-row">
      <strong style="color:${axis.color}">${axis.name}</strong>
      <span class="axis-bar"><span style="--value:${value * 10}%; --axis-color:${axis.color}"></span></span>
      <span>${fmt(value)}</span>
    </div>
  `;
}

function stageBreakdown(axis) {
  const stages = Object.values(state.axisStages[axis.id] || {});
  return `
    <div class="mini-card compact-stage">
      <h3 style="color:${axis.color}">${axis.name}</h3>
      ${
        stages.length
          ? stages
              .map(
                (item) => `
                  <div class="stage-score-line ${stageRunClass(item)}">
                    <div class="stage-score-main">
                      <span>${item.title}</span>
                      <small>${stageRunLabel(item)} · ${item.note || item.difficulty || "已结算"}</small>
                    </div>
                    <strong>${fmt(item.score)}</strong>
                  </div>
                `,
              )
              .join("")
          : `<p>未完成，使用默认分。</p>`
      }
    </div>
  `;
}

function stageRunLabel(item) {
  if (item.raw?.recruitment) return "征召判断";
  if (item.raw?.calibration) return "实战校准";
  if (item.raw?.skipped) return "默认骰";
  if (item.raw?.demo) return "默认分";
  if (item.raw?.randomSheet) return "随机投点";
  return "实测";
}

function stageRunClass(item) {
  if (item.raw?.recruitment) return "is-default";
  if (item.raw?.calibration) return "is-played";
  if (item.raw?.skipped || item.raw?.demo || item.raw?.randomSheet) return "is-default";
  return "is-played";
}

function ensureScores() {
  ATTRIBUTES.forEach((axis) => {
    if (typeof state.scores[axis.id] !== "number") {
      const stages = axis.stages.map((stage) => ({
        score: 5.2,
        title: stage.title,
        weight: stage.weight || 1,
        difficulty: stage.difficulty,
        raw: { demo: true },
        note: "默认参考分",
      }));
      state.axisStages[axis.id] = Object.fromEntries(stages.map((item, index) => [axis.stages[index].id, item]));
      state.scores[axis.id] = 5.2;
    }
  });
}

function getSortedAxes() {
  return [...ATTRIBUTES].sort((a, b) => state.scores[b.id] - state.scores[a.id]);
}

function getComboKey(a, b) {
  return [a, b].sort().join("-");
}

function getAttributeComboProfile(a, b) {
  const profile = RESULT_CONTENT.attributeCombos[getComboKey(a, b)];
  return (
    profile || {
      name: "复合型冒险者",
      tagline: "多项能力共同驱动，适合写成灵活变通的角色。",
      explanation: "你的长板组合没有落入单一路线，更像在不同场景下切换工具的人。",
      direction: "自由职业者、复合型调查员、能补位的团队成员。",
      weakness: "需要明确优先级，避免什么都想做但没有主轴。",
      candidates: ["冒险者", "自由职业者"],
      titles: ["复合型冒险者"],
    }
  );
}

function getMbtiResultProfile(type, topAxisId) {
  const profile = RESULT_CONTENT.mbtiProfiles[type];
  if (!profile) {
    return {
      style: "未定风格",
      result: describeMbti(type),
      axisLine: "当前人格风格以六维长板为主导。",
    };
  }
  return {
    ...profile,
    axisLine: profile.axes[topAxisId] || profile.result,
  };
}

function getAlignmentResultProfile(label) {
  return RESULT_CONTENT.alignments[label] || describeAlignment(label);
}

function uniqueTagItems(items) {
  const seen = new Set();
  return items
    .map((item) => String(item || "").trim())
    .filter((item) => {
      if (!item || seen.has(item)) return false;
      seen.add(item);
      return true;
    });
}

function splitDescriptorText(text) {
  return String(text || "")
    .split(/[、，,\/·]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildDescriptorGroups({ dndProfile, mbtiCode, mbtiProfile, classProfile, alignment, comboProfile, top, second, low, titles, ancestryAnchor, bodyAnchor }) {
  const hasAncestry = isSpecificAncestry(ancestryAnchor);
  return [
    {
      title: "职业底色",
      items: uniqueTagItems([dndProfile.className, dndProfile.subclass, `TOP 1 ${dndProfile.className}`, ...splitDescriptorText(dndProfile.role)]).slice(0, 6),
    },
    {
      title: "桌边功能",
      items: uniqueTagItems([...splitDescriptorText(dndProfile.role), ...splitDescriptorText(dndProfile.specialty), `${top.name}主轴`, `${second.name}副轴`, ...splitDescriptorText(dndProfile.stats)]).slice(0, 6),
    },
    {
      title: "演法滤镜",
      items: uniqueTagItems([mbtiCode, mbtiProfile.style, classProfile.job, alignment, ...titles.slice(0, 2)]),
    },
    {
      title: "血脉锚点",
      items: uniqueTagItems(
        hasAncestry
          ? [ancestryAnchor.name, ancestryAnchor.label, ancestryAnchor.trait, ...ancestryAnchor.tags, bodyAnchor.size]
          : ["未指定种族", bodyAnchor.size, bodyAnchor.creature, bodyAnchor.label],
      ).slice(0, 6),
    },
    {
      title: "剧情张力",
      items: uniqueTagItems([comboProfile.name, ...comboProfile.candidates.slice(0, 2), `${low.name}短板`, "成长线", "可写成角色缺陷"]),
    },
  ];
}

function getMbtiRoleFlavor(mbtiCode) {
  return MBTI_ROLE_FLAVORS[mbtiCode] || MBTI_ROLE_FLAVORS.未知;
}

function trimSentenceEnd(text) {
  return String(text || "").trim().replace(/[。.!！]+$/u, "");
}

function roleMethodPhrase(text) {
  return trimSentenceEnd(text).replace(/^会把这门职业(?:当成|玩成|用成|演成|变成)/u, "").replace(/^会/u, "");
}

function roleFunctionPhrase(text) {
  return trimSentenceEnd(text).replace(/^擅长/u, "");
}

function roleFlawPhrase(text) {
  return trimSentenceEnd(text).replace(/^可演的代价是/u, "");
}

function getMbtiDndEvaluation(mbtiCode, dndClassEn) {
  const map = window.MBTI_DND_EVALUATIONS || {};
  return map[`${mbtiCode}__${dndClassEn}`] || null;
}

function buildRoleEvaluation({ dndProfile, mbtiCode, mbtiLabel, mbtiProfile, top, second, low }) {
  const roleFlavor = getMbtiRoleFlavor(mbtiCode);
  const classFlavor = dndProfile.flavor || dndProfile.classWhy || `${dndProfile.className}适合承担${dndProfile.role}。`;
  const classSpecialty = dndProfile.specialty || `擅长${dndProfile.role}。`;
  const subclass = dndProfile.subclass;
  const className = dndProfile.className;
  const role = dndProfile.role;
  const reason = `${dndProfile.classWhy || dndProfile.why}本局高亮属性是 ${top.name} ${fmt(state.scores[top.id])} 与 ${second.name} ${fmt(state.scores[second.id])}；${low.name}可以当成限制、代价或剧情弱点。`;
  const geminiEvaluation = getMbtiDndEvaluation(mbtiCode, dndProfile.classEn);
  if (geminiEvaluation) {
    return {
      lead: geminiEvaluation.oneLine,
      mainClassLine: `${geminiEvaluation.dndClass || className}（${geminiEvaluation.dndClassEn || dndProfile.classEn}）：${role}。`,
      subClassLine: `${subclass}：${role}。`,
      featureText: geminiEvaluation.functionText,
      specialPoint: geminiEvaluation.specialPoint,
      primary: `TOP 1 贴合度 ${fmt(dndProfile.score)} / 10。${geminiEvaluation.concept}。`,
      reason,
      mbtiSupport: geminiEvaluation.riskText,
      dmHook: `${geminiEvaluation.concept}：${geminiEvaluation.oneLine}`,
      riskText: geminiEvaluation.riskText,
      concept: geminiEvaluation.concept,
    };
  }
  const methodText = roleMethodPhrase(roleFlavor.method);
  const functionText = roleFunctionPhrase(roleFlavor.function);
  const specialtyText = roleFunctionPhrase(classSpecialty);
  const flawText = roleFlawPhrase(roleFlavor.flaw);
  const lead = `${className} · ${subclass}。定位：${role}。${mbtiCode} 风格：${methodText}。`;
  const mainClassLine = `${className}（${dndProfile.classEn}）：${role}。`;
  const subClassLine = `${subclass}：强化${specialtyText}。`;
  const featureText = `${trimSentenceEnd(classFlavor)}；上桌功能：${specialtyText}。`;
  const specialPoint = `${mbtiCode} 提供行动风格：${functionText}。可写代价：${flawText}。`;
  const primary = `TOP 1 贴合度 ${fmt(dndProfile.score)} / 10。主职业 ${className}，副职业 ${subclass}。`;
  const mbtiSupport = `${mbtiLabel}：${roleFlavor.function}。${roleFlavor.flaw}。`;
  const dmHook = `可以把他写成“${roleFlavor.entrance}”的${className}：上桌能做${role}，剧情里则用“${flawText}”制造记忆点。`;
  return { lead, mainClassLine, subClassLine, featureText, specialPoint, primary, reason, mbtiSupport, dmHook, riskText: mbtiSupport, concept: `${mbtiCode} ${className}` };
}

function getConstitutionTier(score) {
  if (score < 3.2) return "frail";
  if (score < 4.7) return "light";
  if (score < 6.3) return "mortal";
  if (score < 7.8) return "steady";
  if (score < 9) return "iron";
  return "monster";
}

function getConstitutionPersonalityGroup(mbtiCode) {
  const sensing = mbtiCode[1] === "S";
  const feeling = mbtiCode[2] === "F";
  const judging = mbtiCode[3] === "J";
  if (!sensing && !feeling) return "NT";
  if (!sensing && feeling) return "NF";
  if (sensing && judging) return "SJ";
  return "SP";
}

function getConstitutionAncestryId(ancestryAnchor, bodyAnchor) {
  if (isSpecificAncestry(ancestryAnchor)) return ancestryAnchor.id;
  const size = bodyAnchor?.size || "";
  const creature = bodyAnchor?.creature || "";
  if (["大型", "巨型", "超巨型", "中型+"].includes(size) || /食人魔|巨人|泰坦|半巨人/.test(creature)) return "ogre_giant";
  if (["微型", "小型"].includes(size) || /侏儒|半身人|小妖精|狗头人|魔宠/.test(creature)) return "halfling";
  return "human";
}

function getConstitutionBaseCopy(ancestryId, conTier, personalityGroup) {
  const base = CONSTITUTION_COPY.base || {};
  return (
    base[`${ancestryId}__${conTier}__${personalityGroup}`] ||
    base[`human__${conTier}__${personalityGroup}`] ||
    base[`${ancestryId}__mortal__${personalityGroup}`] ||
    base[`human__mortal__${personalityGroup}`] || {
      title: "未登记体质画像",
      oneLine: "公会书记没翻到对应档案，暂按普通冒险者记录。",
      diagnosis: "这张卡缺少可用的体质文案数据，但六维属性仍可正常结算。",
      tableFunction: "作为通用冒险者处理，按当前职业和六维长板安排桌边任务。",
      roleHook: "把体质留成待补设定，等后续剧情或图片资源补齐。",
      playableCost: "缺少专属缺陷描述，暂由最低属性承担可演代价。",
      tags: ["待补档案"],
    }
  );
}

function getConstitutionTriggerCopy(triggerId, personalityGroup) {
  const triggers = CONSTITUTION_COPY.triggers || {};
  return triggers[`${triggerId}__${personalityGroup}`] || triggers[`${triggerId}__NT`] || null;
}

function getDefectCardAsset(defectCardId) {
  const asset = (DEFECT_CARD_ASSETS.byId || {})[defectCardId];
  if (!asset) {
    return {
      id: defectCardId,
      status: "missing",
      file: "",
      expectedFile: `assets/defect-cards/generated/${defectCardId}-preview.webp`,
      nameZh: defectCardId,
    };
  }
  return asset;
}

function getAxisScoreValue(axisId, fallback = 5.2) {
  const value = state.scores?.[axisId];
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function isHugeBody(bodyAnchor, ancestryId) {
  const size = bodyAnchor?.size || "";
  return ["大型", "巨型", "超巨型"].includes(size) || ["troll", "ogre_giant"].includes(ancestryId);
}

function isTinyBody(bodyAnchor, ancestryId) {
  const size = bodyAnchor?.size || "";
  return ["微型", "小型"].includes(size) || ["halfling", "gnome"].includes(ancestryId);
}

function buildConstitutionTriggers({ ancestryId, bodyAnchor, personalityGroup, alignment, mbtiCode }) {
  const con = getAxisScoreValue("con");
  const str = getAxisScoreValue("str");
  const wis = getAxisScoreValue("wis");
  const traits = state.traits || {};
  const hugeBody = isHugeBody(bodyAnchor, ancestryId);
  const tinyBody = isTinyBody(bodyAnchor, ancestryId);
  const ancestryLabel = bodyAnchor?.ancestry?.name || ancestryId;
  const bodyLabel = `${bodyAnchor?.size || "未登记"} / ${bodyAnchor?.creature || "未登记"}`;
  const scoreEvidence = `实测 Str ${fmt(str)} / Con ${fmt(con)} / Wis ${fmt(wis)}`;
  const anchorEvidence = `锚点 ${ancestryLabel}；体型 ${bodyLabel}`;
  const recoveryEvidence = `睡眠 ${translateSleep(state.profile?.sleep)}；健康 ${translateHealth(state.profile?.health)}`;
  const lawfulOrDuty =
    alignment.includes("守序") ||
    mbtiCode.endsWith("J") ||
    (traits.good || 0) - (traits.self || 0) > 1 ||
    (traits.lawful || 0) - (traits.chaotic || 0) > 1;
  const rules = [
    {
      id: "tieflingHighConEvil",
      when: ancestryId === "tiefling" && con >= 7.8 && alignment.includes("邪恶"),
      reason: "提夫林高体质 + 灰暗阵营",
      evidence: `${scoreEvidence}；${anchorEvidence}；阵营 ${alignment}`,
    },
    {
      id: "trollLowStr",
      when: ancestryId === "troll" && str <= 5.2,
      reason: "巨魔锚点 + 力量偏低",
      evidence: `${scoreEvidence}；${anchorEvidence}`,
    },
    {
      id: "dragonbornLowCon",
      when: ancestryId === "dragonborn" && con <= 4.8,
      reason: "龙裔锚点 + 体质偏低",
      evidence: `${scoreEvidence}；${anchorEvidence}`,
    },
    {
      id: "dwarfLowCon",
      when: ancestryId === "dwarf" && con <= 4.8,
      reason: "矮人锚点 + 体质偏低",
      evidence: `${scoreEvidence}；${anchorEvidence}`,
    },
    {
      id: "elfHighCon",
      when: ancestryId === "elf" && con >= 7.8,
      reason: "精灵锚点 + 高体质",
      evidence: `${scoreEvidence}；${anchorEvidence}`,
    },
    {
      id: "lowStrHugeBody",
      when: hugeBody && str <= 5.2,
      reason: "巨体锚点 + 力量偏低",
      evidence: `${scoreEvidence}；${anchorEvidence}`,
    },
    {
      id: "tinyHighCon",
      when: tinyBody && con >= 7.6,
      reason: "小体型锚点 + 高体质",
      evidence: `${scoreEvidence}；${anchorEvidence}`,
    },
    {
      id: "sleepCurse",
      when: state.profile?.sleep === "poor",
      reason: "睡眠恢复偏差",
      evidence: `${recoveryEvidence}；${scoreEvidence}`,
    },
    {
      id: "oldWoundOath",
      when: con <= 5.4 && lawfulOrDuty && (state.profile?.health === "mild" || state.profile?.health === "moderate" || alignment.includes("守序")),
      reason: "中低体质 + 责任/守序倾向",
      evidence: `${scoreEvidence}；${recoveryEvidence}；阵营/职责倾向 ${alignment}`,
    },
    {
      id: "ironBodyLowWis",
      when: con >= 8 && wis <= 4.8,
      reason: "高体质 + 感知偏低",
      evidence: `${scoreEvidence}；${anchorEvidence}`,
    },
    {
      id: "highStrLowCon",
      when: str >= 7.8 && con <= 4.8,
      reason: "高力量 + 低体质",
      evidence: `${scoreEvidence}；${recoveryEvidence}`,
    },
    {
      id: "highConLowStr",
      when: con >= 7.8 && str <= 4.8,
      reason: "高体质 + 低力量",
      evidence: `${scoreEvidence}；${anchorEvidence}`,
    },
  ];
  const seenCards = new Set();
  return rules
    .filter((rule) => rule.when)
    .map((rule) => {
      const copy = getConstitutionTriggerCopy(rule.id, personalityGroup);
      return copy ? { ...copy, reason: rule.reason, evidence: rule.evidence, asset: getDefectCardAsset(copy.defectCardId) } : null;
    })
    .filter((item) => {
      if (!item || seenCards.has(item.defectCardId)) return false;
      seenCards.add(item.defectCardId);
      return true;
    });
}

function buildConstitutionReading({ mbtiCode, alignment, ancestryAnchor, bodyAnchor }) {
  const conScore = getAxisScoreValue("con");
  const conTier = getConstitutionTier(conScore);
  const personalityGroup = getConstitutionPersonalityGroup(mbtiCode);
  const ancestryId = getConstitutionAncestryId(ancestryAnchor, bodyAnchor);
  const base = getConstitutionBaseCopy(ancestryId, conTier, personalityGroup);
  const triggers = buildConstitutionTriggers({ ancestryId, bodyAnchor, personalityGroup, alignment, mbtiCode });
  const tags = uniqueTagItems([
    CONSTITUTION_TIER_LABELS[conTier],
    ancestryId,
    personalityGroup,
    ...(base.tags || []),
  ]).slice(0, 8);
  return {
    ancestryId,
    conTier,
    tierLabel: CONSTITUTION_TIER_LABELS[conTier] || conTier,
    personalityGroup,
    base,
    tags,
    triggers,
    primaryTrigger: triggers[0] || null,
    extraTriggers: triggers.slice(1, 3),
  };
}

function buildSummary() {
  const sorted = getSortedAxes();
  const top = sorted[0];
  const second = sorted[1];
  const low = sorted[sorted.length - 1];
  const mbtiCode = getMbtiCode();
  const mbtiLabel = getMbtiLabel(mbtiCode);
  const alignment = getAlignment();
  const classProfile = MBTI_ARCHETYPES[mbtiCode] || MBTI_ARCHETYPES.未知;
  const dndMatches = getDndMatches(mbtiCode, alignment);
  const dndProfile = dndMatches[0] || getFallbackDndProfile();
  const bodyAnchor = getBodyCreatureAnchor(state.profile || {});
  const ancestryAnchor = bodyAnchor.ancestry || getAncestryAnchor(state.profile || {});
  const hasAncestry = isSpecificAncestry(ancestryAnchor);
  const ancestryLabel = hasAncestry ? `${ancestryAnchor.name} · ${ancestryAnchor.label}` : "未指定种族";
  const ancestrySummary = hasAncestry
    ? `${ancestryAnchor.name}：${ancestryAnchor.note}`
    : `未指定种族，体型参照为${bodyAnchor.size} / ${bodyAnchor.creature}。`;
  const dndTitle = `${dndProfile.className}·${dndProfile.subclass}`;
  const classes = getClasses(top.id, second.id, dndTitle);
  const titles = getTitles(top.id, second.id);
  const comboProfile = getAttributeComboProfile(top.id, second.id);
  const mbtiProfile = getMbtiResultProfile(mbtiCode, top.id);
  const alignmentProfile = getAlignmentResultProfile(alignment);
  const archetype = dndProfile.className;
  const portraitName = `${mbtiCode} ${classProfile.job}`;
  const arcanaNumber = String(Math.round((state.scores[top.id] + state.scores[second.id]) * 3)).padStart(2, "0");
  const cardTitle = `${top.abbr} ${second.abbr} Major`;
  const roleEvaluation = buildRoleEvaluation({ dndProfile, mbtiCode, mbtiLabel, mbtiProfile, top, second, low });
  const mainClassLine = roleEvaluation.mainClassLine;
  const subClassLine = roleEvaluation.subClassLine;
  const classFeatureText = roleEvaluation.featureText;
  const specialPointText = roleEvaluation.specialPoint;
  const riskText = roleEvaluation.riskText;
  const primaryClassText = roleEvaluation.primary;
  const primaryClassReason = roleEvaluation.reason;
  const mbtiSupportText = roleEvaluation.mbtiSupport;
  const oneLine = roleEvaluation.lead;
  const strengthText = `职业贴合的主要证据是 ${top.name} ${fmt(state.scores[top.id])} 与 ${second.name} ${fmt(state.scores[second.id])}。${comboProfile.explanation}`;
  const weaknessText = `${low.name} ${fmt(state.scores[low.id])} 是这张职业卡的可演限制。${comboProfile.weakness}`;
  const mbtiText = `${mbtiLabel} · ${mbtiProfile.style}：${mbtiProfile.result} ${mbtiProfile.axisLine}`;
  const mbtiProbeNote = state.mbtiProbe?.completed ? state.mbtiProbe.resultNote || getMbtiProbeConfig().resultNote : "";
  const alignmentText = `${alignment}：${alignmentProfile} 阵营是角色扮演倾向，不等同于现实道德评价。`;
  const scoreLine = ATTRIBUTES.map((axis) => `${axis.abbr} ${fmt(state.scores[axis.id])}`).join(" / ");
  const constitution = buildConstitutionReading({ mbtiCode, alignment, ancestryAnchor, bodyAnchor });
  const constitutionLine = `${constitution.tierLabel} / ${constitution.base.title}：${constitution.base.oneLine}`;
  const defectLine = constitution.primaryTrigger
    ? `${constitution.primaryTrigger.defectCardId} / ${constitution.primaryTrigger.title}：${constitution.primaryTrigger.reason}；${constitution.primaryTrigger.evidence || ""}`
    : "未触发特殊缺陷卡";
  const extraDefectLine = constitution.extraTriggers.length
    ? constitution.extraTriggers.map((item) => `${item.defectCardId} / ${item.title}：${item.reason}`).join(" / ")
    : "";
  const characterPrompt = buildCharacterPrompt({ mbtiCode, classProfile, dndProfile, top, second, low, alignment, titles, ancestryAnchor, bodyAnchor, constitution });
  const descriptorGroups = buildDescriptorGroups({ dndProfile, mbtiCode, mbtiProfile, classProfile, alignment, comboProfile, top, second, low, titles, ancestryAnchor, bodyAnchor });
  const portraitResource = getMbtiPortraitResource(mbtiCode);
  const portraitAsset = getPortraitAsset(portraitResource);
  const portraitResourceLine =
    portraitResource.status === "ready"
      ? `已接入：${portraitResource.file}`
      : `待补齐：${portraitResource.expectedFile}`;
  const copyText = [
    `冒险者名册：${archetype}`,
    `六维属性：${scoreLine}`,
    `扮演口吻：${mbtiLabel}`,
    ...(mbtiProbeNote ? [`推断说明：${mbtiProbeNote}`] : []),
    `种族锚点：${ancestryLabel}`,
    `体型参照：${bodyAnchor.size} / ${bodyAnchor.creature}`,
    `阵营动机：${alignment}`,
    `主职业线索：${dndProfile.className}（${dndProfile.classEn}） / ${dndProfile.subclass}`,
    `队伍职能：${dndProfile.role}`,
    `优势属性：${dndProfile.stats}`,
    `备用职业钩子：${dndProfile.alternates.join(" / ")}`,
    `职业判定依据：${dndProfile.matchText}`,
    `支线职业灵感：${classes.join(" / ")}`,
    `组合概念：${roleEvaluation.concept}`,
    `桌边称号：${titles.join(" / ")}`,
    `属性组合牌：${comboProfile.name}`,
    `组合说明：${comboProfile.explanation}`,
    `本局玩法：${comboProfile.direction}`,
    `成卡评价：${roleEvaluation.dmHook}`,
    `可演缺陷：${roleEvaluation.riskText}`,
    `体质画像：${constitutionLine}`,
    `体质桌边功能：${constitution.base.tableFunction}`,
    `体质角色钩子：${constitution.base.roleHook}`,
    `体质可演代价：${constitution.base.playableCost}`,
    `缺陷卡：${defectLine}`,
    ...(extraDefectLine ? [`缺陷暗线：${extraDefectLine}`] : []),
    ...(constitution.primaryTrigger ? [`缺陷特殊对话：${constitution.primaryTrigger.specialDialogue}`] : []),
    `人格扮演滤镜：${mbtiProfile.style}；${mbtiProfile.result}`,
    `阵营说明：${alignmentProfile}`,
    `角色钩子：突出${top.name}与${second.name}，把${low.name}写成限制、代价或成长线。`,
    `血脉说明：${ancestrySummary}`,
    `立绘资源：${portraitResourceLine}`,
    "",
    `给 DM 的扩写提示：${characterPrompt}`,
  ].join("\n");
  return {
    top,
    second,
    low,
    archetype,
    oneLine,
    mbtiCode,
    mbtiLabel,
    alignment,
    ancestryAnchor,
    bodyAnchor,
    ancestryLabel,
    classProfile,
    comboProfile,
    mbtiProfile,
    alignmentProfile,
    dndProfile,
    dndMatches,
    classes,
    titles,
    portraitName,
    arcanaNumber,
    cardTitle,
    primaryClassText,
    primaryClassReason,
    mainClassLine,
    subClassLine,
    classFeatureText,
    specialPointText,
    riskText,
    mbtiSupportText,
    strengthText,
    weaknessText,
    mbtiText,
    alignmentText,
    descriptorGroups,
    constitution,
    copyText,
    portraitResource,
    portraitAsset,
  };
}

function getMbtiCode() {
  if (state.profile.mbtiSelf && state.profile.mbtiSelf !== "未知") return state.profile.mbtiSelf;
  const probed = getMbtiCodeFromProbe();
  if (probed) return probed;
  const t = state.traits;
  return `${t.E >= t.I ? "E" : "I"}${t.N >= t.S ? "N" : "S"}${t.F > t.T ? "F" : "T"}${t.P > t.J ? "P" : "J"}`;
}

function getMbtiLabel(mbtiCode) {
  if (state.profile.mbtiSelf && state.profile.mbtiSelf !== "未知") return `${mbtiCode}（玩家自填）`;
  if (state.mbtiProbe?.completed) return `${mbtiCode}（简易推断）`;
  return `${mbtiCode}（检定推断）`;
}

function getMbtiCodeFromProbe() {
  if (!state.mbtiProbe?.completed) return "";
  const scores = state.mbtiProbe.scores || {};
  return `${chooseMbtiSide("I", "E", scores)}${chooseMbtiSide("N", "S", scores)}${chooseMbtiSide("T", "F", scores)}${chooseMbtiSide("J", "P", scores)}`;
}

function chooseMbtiSide(left, right, scores) {
  const leftScore = scores[left] || 0;
  const rightScore = scores[right] || 0;
  if (leftScore > rightScore) return left;
  if (rightScore > leftScore) return right;

  const leftTrait = state.traits[left] || 0;
  const rightTrait = state.traits[right] || 0;
  if (leftTrait > rightTrait) return left;
  if (rightTrait > leftTrait) return right;

  const defaultSides = { I: "E", N: "N", T: "T", J: "J" };
  return defaultSides[left] || left;
}

function getAlignment() {
  return getAlignmentFromTraits(state.traits);
}

function getAlignmentFromTraits(traits) {
  const t = traits;
  const order = t.lawful - t.chaotic;
  const moral = t.good - t.self;
  const orderLabel = order > 1 ? "守序" : order < -1 ? "混乱" : "中立";
  const moralLabel = moral > 1 ? "善良" : moral < -1 ? "邪恶" : "中立";
  if (orderLabel === "中立" && moralLabel === "中立") return "绝对中立";
  return `${orderLabel}${moralLabel}`;
}

function getDndMatches(mbtiCode, alignment) {
  const axisScores = Object.fromEntries(ATTRIBUTES.map((axis) => [axis.id, state.scores[axis.id] || 0]));
  const sortedAxes = getSortedAxes();
  const top = sortedAxes[0];
  const second = sortedAxes[1];
  const mbtiMod = getMbtiDndModifiers(mbtiCode);
  return DND_CLASS_POOL.map((base) => {
    const axisFit = Object.entries(base.axes).reduce((sum, [axis, weight]) => sum + (axisScores[axis] || 0) * weight, 0);
    const weightTotal = Object.values(base.axes).reduce((sum, weight) => sum + weight, 0) || 1;
    const normalized = axisFit / weightTotal;
    const affinity = mbtiMod.affinity[base.className] || 0;
    const recruitmentBoost = getRecruitmentClassBoost(base.className);
    const score = clamp(normalized + affinity + recruitmentBoost);
    const subclass = chooseSubclass(base, mbtiCode, alignment, top.id, second.id);
    const style = DND_CARD_STYLES[base.className] || DND_CARD_STYLES.冒险者;
    return {
      ...base,
      subclass,
      score,
      recruitmentBoost,
      stats: getClassStatsText(base.axes),
      face: `${mbtiMod.style}型${base.className}`,
      flavor: base.flavor,
      specialty: base.specialty,
      classWhy: base.why,
      mbtiDetail: mbtiMod.detail.trim(),
      why: `${base.why}${mbtiMod.detail}`,
      alternates: base.baseSubclasses.filter((item) => item !== subclass).slice(0, 3).map((item) => `${base.className}·${item}`),
      matchText: `六维贡献 ${fmt(normalized)}，人格修饰 ${affinity >= 0 ? "+" : ""}${fmt(affinity)}${recruitmentBoost ? `，征召加权 +${fmt(recruitmentBoost)}` : ""}。主导轴：${top.name} / ${second.name}。`,
      style,
    };
  })
    .sort((a, b) => b.score - a.score || b.recruitmentBoost - a.recruitmentBoost)
    .slice(0, 3);
}

function getRecruitmentClassBoost(className) {
  const judgement = state.recruitment?.judgement;
  if (!judgement?.ending) return 0;
  const endingType = judgement.endingType || judgement.ending.endingType;
  const recommendedIds = (judgement.ending.recommendedClass || []).map(normalizeRecruitmentTargetId);
  const fallbackId = normalizeRecruitmentTargetId(judgement.topTargetId || judgement.target?.targetId || state.recruitment?.targetId);
  const targetIds = recommendedIds.length ? recommendedIds : [fallbackId];
  const classNames = targetIds.map((targetId) => RECRUITMENT_TARGET_CLASS[targetId]).filter(Boolean);
  if (!classNames.includes(className)) return 0;
  const boostMap = {
    accepted: 3.4,
    absurdAccepted: 3.1,
    transferred: 2.8,
    probation: 1.15,
    blacklisted: 0,
  };
  return boostMap[endingType] || 0;
}

function getFallbackDndProfile() {
  const base = DND_CLASS_POOL[0];
  const style = DND_CARD_STYLES[base.className] || DND_CARD_STYLES.冒险者;
  return {
    ...base,
    subclass: base.baseSubclasses[0],
    score: 5,
    stats: getClassStatsText(base.axes),
    face: base.className,
    flavor: base.flavor,
    specialty: base.specialty,
    classWhy: base.why,
    mbtiDetail: "人格风格未定，职业主要由六维属性决定。",
    alternates: base.baseSubclasses.slice(1).map((item) => `${base.className}·${item}`),
    matchText: "默认职业线索。跑完整张卡后会由六维属性重新排序。",
    style,
  };
}

function getMbtiDndModifiers(type) {
  const map = {
    INTJ: { style: "战略", detail: " INTJ 会把这个职业演成冷静规划、长期布置和资源控制。", affinity: { 法师: 0.42, 工匠: 0.32, 战士: 0.08 } },
    INTP: { style: "解析", detail: " INTP 会把这个职业演成机制研究、实验推演和规则拆解。", affinity: { 法师: 0.38, 工匠: 0.36, 术士: 0.12 } },
    ENTJ: { style: "统帅", detail: " ENTJ 会把这个职业演成目标压制、队伍调度和强势推进。", affinity: { 圣武士: 0.34, 战士: 0.28, 牧师: 0.1 } },
    ENTP: { style: "破局", detail: " ENTP 会把这个职业演成临场变招、话术试探和规则边界利用。", affinity: { 术士: 0.34, 吟游诗人: 0.28, 游荡者: 0.14 } },
    INFJ: { style: "预言", detail: " INFJ 会把这个职业演成洞察动机、价值引导和温和但坚定的影响力。", affinity: { 牧师: 0.32, 德鲁伊: 0.22, 法师: 0.1 } },
    INFP: { style: "理想", detail: " INFP 会把这个职业演成个人信念、情感共鸣和守护某种内在誓言。", affinity: { 德鲁伊: 0.3, 吟游诗人: 0.22, 牧师: 0.16 } },
    ENFJ: { style: "鼓舞", detail: " ENFJ 会把这个职业演成团队凝聚、公开承诺和把人心组织起来的能力。", affinity: { 圣武士: 0.3, 吟游诗人: 0.24, 牧师: 0.18 } },
    ENFP: { style: "灵感", detail: " ENFP 会把这个职业演成探索、即兴和把现场变成故事的能力。", affinity: { 吟游诗人: 0.3, 术士: 0.18, 游侠: 0.16 } },
    ISTJ: { style: "纪律", detail: " ISTJ 会把这个职业演成流程、职责和稳定执行。", affinity: { 战士: 0.28, 牧师: 0.18, 圣武士: 0.18 } },
    ISFJ: { style: "守护", detail: " ISFJ 会把这个职业演成照料、保护和队伍续航。", affinity: { 牧师: 0.3, 圣武士: 0.18, 德鲁伊: 0.14 } },
    ESTJ: { style: "指挥", detail: " ESTJ 会把这个职业演成明确分工、现场管理和战术执行。", affinity: { 战士: 0.3, 圣武士: 0.22, 牧师: 0.1 } },
    ESFJ: { style: "协调", detail: " ESFJ 会把这个职业演成关系修复、群体照料和现场情绪管理。", affinity: { 牧师: 0.24, 吟游诗人: 0.24, 圣武士: 0.12 } },
    ISTP: { style: "实操", detail: " ISTP 会把这个职业演成工具、动作效率和冷静拆解现场问题。", affinity: { 游荡者: 0.3, 工匠: 0.24, 战士: 0.16 } },
    ISFP: { style: "感官", detail: " ISFP 会把这个职业演成节奏、审美、环境直觉和个人表达。", affinity: { 游侠: 0.24, 吟游诗人: 0.2, 武僧: 0.12 } },
    ESTP: { style: "突击", detail: " ESTP 会把这个职业演成高风险行动、现场胆量和机会捕捉。", affinity: { 游荡者: 0.28, 战士: 0.22, 武僧: 0.18 } },
    ESFP: { style: "舞台", detail: " ESFP 会把这个职业演成表现力、现场感染和把战斗节奏推到台前。", affinity: { 吟游诗人: 0.24, 游荡者: 0.16, 战士: 0.1 } },
  };
  return map[type] || { style: "未定", detail: " 人格风格未定，职业主要由六维属性决定。", affinity: {} };
}

function chooseSubclass(base, mbtiCode, alignment, topAxis, secondAxis) {
  const pool = base.baseSubclasses;
  if (base.className === "法师" && topAxis === "int" && secondAxis === "wis") return "占卜学派";
  if (base.className === "法师" && mbtiCode.includes("P")) return "幻术学派";
  if (base.className === "战士" && topAxis === "dex") return "战斗大师";
  if (base.className === "战士" && topAxis === "str") return "冠军";
  if (base.className === "圣武士" && alignment.includes("守序")) return "王冠誓言";
  if (base.className === "圣武士" && alignment.includes("邪恶")) return "征服誓言";
  if (base.className === "吟游诗人" && mbtiCode.includes("T")) return "逸闻学院";
  if (base.className === "吟游诗人" && topAxis === "dex") return "剑舞学院";
  if (base.className === "牧师" && alignment.includes("善良")) return "生命领域";
  if (base.className === "牧师" && topAxis === "int") return "知识领域";
  if (base.className === "游荡者" && secondAxis === "int") return "诡术师";
  if (base.className === "游侠" && mbtiCode.includes("N")) return "妖精流浪者";
  if (base.className === "德鲁伊" && secondAxis === "con") return "月亮结社";
  if (base.className === "术士" && mbtiCode.includes("N")) return "古老支配者";
  if (base.className === "武僧" && mbtiCode.includes("S")) return "散打宗";
  if (base.className === "野蛮人" && alignment.includes("善良")) return "祖灵守护者";
  if (base.className === "工匠" && topAxis === "dex") return "战斗铁匠";
  return pool[0];
}

function getClassStatsText(axes) {
  return Object.entries(axes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([axis]) => ATTRIBUTES.find((item) => item.id === axis)?.name || axis)
    .join(" / ");
}

function getClasses(a, b, mbtiJob) {
  const comboProfile = getAttributeComboProfile(a, b);
  if (comboProfile.candidates?.length) return [mbtiJob, ...comboProfile.candidates];
  const key = getComboKey(a, b);
  const table = {
    "con-str": ["战士", "守护者", "前线推进者"],
    "dex-wis": ["游侠", "侦察者", "潜行专家"],
    "int-wis": ["调查者", "法师", "谜题顾问"],
    "cha-dex": ["吟游诗人", "诡术师", "舞台型游荡者"],
    "cha-con": ["圣武士", "领袖", "鼓舞者"],
    "cha-int": ["策士", "谈判专家", "学院派领袖"],
    "con-wis": ["德鲁伊", "守望者", "耐心追踪者"],
    "dex-int": ["机关专家", "战术盗贼", "精密操作者"],
  };
  return [mbtiJob, ...(table[key] || ["冒险者", "自由职业者"])];
}

function getTitles(a, b) {
  const comboProfile = getAttributeComboProfile(a, b);
  if (comboProfile.titles?.length) return comboProfile.titles.slice(0, 2);
  const titleMap = {
    str: "破障者",
    dex: "影步手",
    con: "稳定核心",
    int: "长线推演者",
    wis: "细节猎手",
    cha: "气氛掌控者",
  };
  return [titleMap[a], titleMap[b]];
}

function getArchetype(a, b) {
  if ([a, b].includes("wis") && [a, b].includes("int")) return "策略观察者";
  if ([a, b].includes("dex") && [a, b].includes("wis")) return "游侠型观察者";
  if ([a, b].includes("cha") && [a, b].includes("int")) return "谈判策士";
  if ([a, b].includes("str") && [a, b].includes("con")) return "前线推进者";
  if ([a, b].includes("cha")) return "社交发动机";
  return "复合型冒险者";
}

function describeMbti(type) {
  const descriptions = {
    INTJ: "偏策略、结构感强，适合幕后规划与长线判断。",
    INTP: "偏抽象探索，适合谜题、理论、研究型角色。",
    INFJ: "偏洞察和价值判断，适合预言者、调停者或引导者。",
    INFP: "偏理想和共情，适合创作型、灵感型角色。",
    ENTJ: "偏目标和掌控，适合指挥官、领袖、强势谈判者。",
    ENTP: "偏破局和辩论，适合诡术师、策士、发明家。",
    ENFJ: "偏鼓舞和组织，适合领袖、吟游诗人、圣武士。",
    ENFP: "偏灵感和感染，适合舞台型、自由型角色。",
    ISTJ: "偏秩序和执行，适合守卫、记录者、可靠执行者。",
    ISFJ: "偏照顾和稳定，适合守护者、治疗者、后勤核心。",
    ESTJ: "偏管理和规则，适合队长、军官、组织者。",
    ESFJ: "偏关系和现场照料，适合调停者、社交核心。",
    ISTP: "偏实操和临场处理，适合机关师、游荡者、战术手。",
    ISFP: "偏感受和审美，适合艺术型、自然型角色。",
    ESTP: "偏行动和冒险，适合冲锋者、决斗者、谈判破局者。",
    ESFP: "偏表现和感染，适合吟游诗人、舞台中心。",
  };
  return descriptions[type] || "风格混合，适合做成多面向角色。";
}

function describeAlignment(label) {
  const descriptions = {
    守序善良: "重承诺和保护，愿意在规则内帮助他人。",
    中立善良: "以具体的人为优先，不太被规则束缚。",
    混乱善良: "重自由与善意，愿意打破规则救人。",
    守序中立: "重职责、系统和可预测性。",
    绝对中立: "重平衡和现实判断，不轻易站队。",
    混乱中立: "重自由和变化，讨厌被单一路线绑定。",
    守序邪恶: "擅长利用规则与结构达成目标。",
    中立邪恶: "结果导向，愿意为了收益压低情绪成本。",
    混乱邪恶: "破局欲强，容易选择高风险路线。",
  };
  return descriptions[label] || "倾向混合，适合作为复杂角色动机。";
}

function buildCharacterPrompt({ mbtiCode, classProfile, dndProfile, top, second, low, alignment, titles, ancestryAnchor, bodyAnchor, constitution }) {
  const ancestryLine = isSpecificAncestry(ancestryAnchor)
    ? `种族锚点为${ancestryAnchor.name}（${ancestryAnchor.label}，${ancestryAnchor.trait}），`
    : `种族未指定，体型参照为${bodyAnchor.size}/${bodyAnchor.creature}，`;
  const constitutionLine = constitution
    ? `体质画像为${constitution.base.title}，${constitution.primaryTrigger ? `特殊缺陷卡为${constitution.primaryTrigger.title}（${constitution.primaryTrigger.defectCardId}），` : "未触发特殊缺陷卡，"}`
    : "";
  return `请把这张冒险者名册扩写成 OC / 跑团角色设定：${mbtiCode} ${classProfile.job}，${ancestryLine}${constitutionLine}DND职业线索为${dndProfile.className}（${dndProfile.subclass}），队伍职能${dndProfile.role}；高亮属性是${top.name}和${second.name}，可演缺陷围绕${low.name}设计；阵营动机${alignment}；桌边称号${titles.join("、")}。重点写行为方式、战斗/社交风格、剧情用途、成长线和可扮演的缺陷，不要把职业写死为人格定型。`;
}

function drawRadar() {
  const canvas = document.querySelector("#radarCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2 + 8;
  const radius = Math.min(w, h) * 0.35;
  ctx.clearRect(0, 0, w, h);
  ctx.lineWidth = 1;
  ctx.font = "16px Microsoft YaHei, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (let level = 1; level <= 5; level += 1) {
    const r = (radius * level) / 5;
    ctx.beginPath();
    ATTRIBUTES.forEach((_, i) => {
      const angle = -Math.PI / 2 + (Math.PI * 2 * i) / ATTRIBUTES.length;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.strokeStyle = "rgba(243,236,215,0.16)";
    ctx.stroke();
  }

  ATTRIBUTES.forEach((axis, i) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * i) / ATTRIBUTES.length;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "rgba(243,236,215,0.2)";
    ctx.stroke();
    ctx.fillStyle = axis.color;
    ctx.fillText(`${axis.name} ${fmt(state.scores[axis.id])}`, cx + Math.cos(angle) * (radius + 48), cy + Math.sin(angle) * (radius + 34));
  });

  ctx.beginPath();
  ATTRIBUTES.forEach((axis, i) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * i) / ATTRIBUTES.length;
    const r = (state.scores[axis.id] / 10) * radius;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(112,199,199,0.22)";
  ctx.strokeStyle = "rgba(228,191,98,0.92)";
  ctx.lineWidth = 3;
  ctx.fill();
  ctx.stroke();
}

function drawPortrait(summary) {
  const image = document.querySelector(".portrait-image");
  const canvas = document.querySelector("#portraitCanvas");
  if (!canvas) return;
  if (image) {
    canvas.hidden = true;
    image.addEventListener(
      "error",
      () => {
        image.hidden = true;
        canvas.hidden = false;
        drawPortraitFallback(summary, canvas);
      },
      { once: true },
    );
    return;
  }
  drawPortraitFallback(summary, canvas);
}

function drawPortraitFallback(summary, canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, summary.top.color);
  grad.addColorStop(1, summary.second.color);
  ctx.fillStyle = "#10120f";
  ctx.fillRect(0, 0, w, h);
  ctx.globalAlpha = 0.92;
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.ellipse(w / 2, h * 0.56, 158, 198, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = "rgba(243,236,215,0.86)";
  ctx.beginPath();
  ctx.arc(w / 2, h * 0.32, 66, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(16,18,15,0.92)";
  ctx.beginPath();
  ctx.moveTo(w / 2 - 120, h * 0.82);
  ctx.quadraticCurveTo(w / 2, h * 0.52, w / 2 + 120, h * 0.82);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "rgba(228,191,98,0.9)";
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.fillStyle = "#f3ecd7";
  ctx.font = "700 28px Microsoft YaHei, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(summary.mbtiCode, w / 2, 54);
  ctx.font = "20px Microsoft YaHei, sans-serif";
  ctx.fillText(`${summary.dndProfile.className} ${summary.dndProfile.classEn}`, w / 2, 88);
}

async function copySummary() {
  const textarea = document.querySelector("#copyText");
  textarea.select();
  try {
    await navigator.clipboard.writeText(textarea.value);
  } catch {
    document.execCommand("copy");
  }
  document.querySelector("#copyBtn").textContent = "已复制";
}

function randomRange(min, max, digits = 1) {
  return Number((min + Math.random() * (max - min)).toFixed(digits));
}

function randomPick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function weightedRandomPick(entries) {
  const total = entries.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;
  for (const item of entries) {
    roll -= item.weight;
    if (roll <= 0) return item.value;
  }
  return entries[entries.length - 1]?.value;
}

function buildRandomScores() {
  const axes = shuffle(ATTRIBUTES.map((axis) => axis.id));
  const primary = axes[0];
  const secondary = axes[1];
  const weak = axes[axes.length - 1];
  const scores = {};
  ATTRIBUTES.forEach((axis) => {
    let range = [4.4, 6.8];
    if (axis.id === primary) range = [7.5, 9.4];
    if (axis.id === secondary) range = [6.5, 8.4];
    if (axis.id === weak) range = [3.1, 5.0];
    scores[axis.id] = randomRange(range[0], range[1]);
  });
  return scores;
}

function buildRandomTraits() {
  const traits = { ...INITIAL_TRAITS };
  const type = randomPick(MBTI_TYPES.filter((item) => item !== "未知"));
  const pairMap = {
    E: ["E", "I"],
    I: ["I", "E"],
    N: ["N", "S"],
    S: ["S", "N"],
    T: ["T", "F"],
    F: ["F", "T"],
    J: ["J", "P"],
    P: ["P", "J"],
  };
  type.split("").forEach((letter) => {
    const [major, minor] = pairMap[letter];
    traits[major] += randomRange(4, 7, 0);
    traits[minor] += randomRange(0, 2, 0);
  });

  const orderBias = randomPick(["lawful", "chaotic", "neutral"]);
  const moralBias = randomPick(["good", "self", "neutral"]);
  if (orderBias === "lawful") traits.lawful += randomRange(3, 6, 0);
  if (orderBias === "chaotic") traits.chaotic += randomRange(3, 6, 0);
  if (moralBias === "good") traits.good += randomRange(3, 6, 0);
  if (moralBias === "self") traits.self += randomRange(3, 6, 0);

  traits.action += randomRange(0, 4, 0);
  traits.empathy += randomRange(0, 4, 0);
  traits.order += randomRange(0, 4, 0);
  traits.risk += randomRange(0, 4, 0);
  traits.expression += randomRange(0, 4, 0);
  traits.control += randomRange(0, 4, 0);
  return traits;
}

function buildRandomProfile() {
  const ancestryPool = FANTASY_ANCESTRIES.filter((item) => item.id !== "auto").map((item) => ({
    value: item.id,
    weight: item.id === "human" ? 6 : 0.35,
  }));
  return {
    age: String(randomRange(18, 42, 0)),
    height: "",
    weight: "",
    bodyFat: "",
    exercise: weightedRandomPick([
      { value: "unknown", weight: 0.8 },
      { value: "light", weight: 1.2 },
      { value: "regular", weight: 1.4 },
      { value: "high", weight: 0.6 },
      { value: "none", weight: 0.5 },
    ]),
    sleep: weightedRandomPick([
      { value: "unknown", weight: 0.8 },
      { value: "good", weight: 1 },
      { value: "average", weight: 1.4 },
      { value: "poor", weight: 0.6 },
    ]),
    health: weightedRandomPick([
      { value: "none", weight: 1.8 },
      { value: "mild", weight: 0.9 },
      { value: "moderate", weight: 0.35 },
      { value: "skip", weight: 0.5 },
    ]),
    ancestry: weightedRandomPick(ancestryPool),
    mbtiSelf: "未知",
    audio: "visual",
  };
}

function tuneRandomSheetForAncestry(profile, scores, traits) {
  if (Math.random() > 0.42) return;
  const setScore = (axisId, min, max) => {
    scores[axisId] = randomRange(min, max);
  };
  switch (profile.ancestry) {
    case "troll":
      setScore("str", 3.1, 5.1);
      scores.con = Math.max(scores.con, randomRange(5.8, 7.8));
      break;
    case "dragonborn":
    case "dwarf":
      setScore("con", 3.1, 4.6);
      break;
    case "elf":
      setScore("con", 7.9, 9.4);
      break;
    case "halfling":
    case "gnome":
      setScore("con", 7.7, 9.4);
      break;
    case "ogre_giant":
      setScore("str", 3.1, 5.1);
      break;
    case "tiefling":
      setScore("con", 7.9, 9.4);
      traits.self += 5;
      traits.chaotic += 3;
      break;
    default:
      if (profile.sleep === "poor") setScore("con", 3.6, 5.8);
      break;
  }
}

function fillRandomSheet() {
  state.current = 0;
  state.stage = 0;
  state.raw = {};
  state.mbtiProbe = null;
  state.mbtiProbeReturnScreen = null;
  state.personalityAnswers = 0;
  const randomProfile = buildRandomProfile();
  const randomTraits = buildRandomTraits();
  const randomScores = buildRandomScores();
  tuneRandomSheetForAncestry(randomProfile, randomScores, randomTraits);
  state.profile = randomProfile;
  state.traits = randomTraits;
  state.scores = randomScores;
  state.axisStages = {};
  ATTRIBUTES.forEach((axis) => {
    state.axisStages[axis.id] = {};
    axis.stages.forEach((stage, index) => {
      const offset = (index - (axis.stages.length - 1) / 2) * randomRange(0.18, 0.42);
      state.axisStages[axis.id][stage.id] = {
        title: stage.title,
        score: clamp(getAxisScoreValue(axis.id) + offset + randomRange(-0.35, 0.35)),
        weight: stage.weight || 1,
        difficulty: stage.difficulty,
        raw: { randomSheet: true },
        note: `随机投点生成；血脉锚点为 ${getAncestryAnchor(state.profile).name}。`,
      };
    });
  });
}

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function initAmbient() {
  const canvas = document.querySelector("#ambient-canvas");
  const ctx = canvas.getContext("2d");
  let points = [];
  function resize() {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    points = Array.from({ length: 54 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.18 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.18 * devicePixelRatio,
    }));
  }
  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(92,78,57,0.36)";
    ctx.strokeStyle = "rgba(92,78,57,0.1)";
    points.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.35 * devicePixelRatio, 0, Math.PI * 2);
      ctx.fill();
      for (let j = i + 1; j < points.length; j += 1) {
        const q = points[j];
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 135 * devicePixelRatio) {
          ctx.globalAlpha = 1 - d / (135 * devicePixelRatio);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    });
    requestAnimationFrame(tick);
  }
  resize();
  window.addEventListener("resize", resize);
  tick();
}

initAmbient();
if (!consumeHallHandoff()) {
  loadState();
  if (!state.screen || state.screen === "start") {
    goToRecruitmentHall();
  } else {
    render();
  }
} else {
  render();
}
