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
      { id: "wis_dual", title: "双星追踪", type: "dualBall", difficulty: "中 / 高", weight: 0.36 },
      { id: "wis_schulte", title: "侦察方格", type: "schulte", difficulty: "低 / 中 / 高", weight: 0.38 },
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
  },
  {
    className: "战士",
    classEn: "Fighter",
    axes: { str: 0.72, dex: 0.48, con: 0.58, wis: 0.12 },
    role: "前线推进、武器专精、稳定输出",
    baseSubclasses: ["战斗大师", "冠军", "骑士"],
    why: "力量、敏捷或体质任何一侧足够突出，都可以转译成可靠的武技路线。",
  },
  {
    className: "游荡者",
    classEn: "Rogue",
    axes: { dex: 1, int: 0.34, cha: 0.24, wis: 0.22 },
    role: "潜入侦察、机关处理、机会爆发",
    baseSubclasses: ["盗贼", "诡术师", "刺客"],
    why: "敏捷高且有一定判断或社交读场时，角色更适合在信息缝隙里创造优势。",
  },
  {
    className: "游侠",
    classEn: "Ranger",
    axes: { dex: 0.65, wis: 0.82, con: 0.22, int: 0.16 },
    role: "追踪侦察、野外生存、远程压制",
    baseSubclasses: ["幽域追踪者", "妖精流浪者", "猎人"],
    why: "敏捷与感知组合突出时，角色会更像用环境、路径和预判作战的猎手。",
  },
  {
    className: "牧师",
    classEn: "Cleric",
    axes: { wis: 0.92, cha: 0.28, con: 0.28 },
    role: "治疗支援、价值锚定、团队续航",
    baseSubclasses: ["生命领域", "知识领域", "秩序领域", "和平领域"],
    why: "感知、共情和稳定性较强时，角色适合承担判断、守护和队伍恢复责任。",
  },
  {
    className: "德鲁伊",
    classEn: "Druid",
    axes: { wis: 0.82, con: 0.38, int: 0.18 },
    role: "自然调和、形态适应、持续控制",
    baseSubclasses: ["星辰结社", "梦境结社", "月亮结社"],
    why: "感知和体质较好时，角色会更像能适应环境、维持节奏并用直觉读局的人。",
  },
  {
    className: "圣武士",
    classEn: "Paladin",
    axes: { cha: 0.62, str: 0.58, con: 0.42, wis: 0.16 },
    role: "誓言压阵、前线保护、气场威慑",
    baseSubclasses: ["献身誓言", "王冠誓言", "征服誓言", "救赎誓言"],
    why: "魅力与身体轴同时有支撑时，角色适合把信念、压迫感和保护欲写成行动力。",
  },
  {
    className: "吟游诗人",
    classEn: "Bard",
    axes: { cha: 1, dex: 0.28, int: 0.22, wis: 0.16 },
    role: "社交破局、灵感支援、现场节奏",
    baseSubclasses: ["雄辩学院", "逸闻学院", "魅惑学院", "剑舞学院"],
    why: "魅力高时，角色可以通过语言、表演、谈判或情绪调度改变局面。",
  },
  {
    className: "术士",
    classEn: "Warlock",
    axes: { cha: 0.84, int: 0.34, wis: 0.2, con: 0.16 },
    role: "契约博弈、奇术干扰、危险交易",
    baseSubclasses: ["妖精宗主", "古老支配者", "邪魔宗主"],
    why: "魅力和抽象判断同时较强时，角色适合走高风险、高风格化的契约路线。",
  },
  {
    className: "武僧",
    classEn: "Monk",
    axes: { dex: 0.76, wis: 0.58, con: 0.28 },
    role: "机动连击、专注控制、近身游走",
    baseSubclasses: ["散打宗", "影宗", "醉拳宗"],
    why: "敏捷、感知和稳定专注一起出现时，角色更像依靠身体节奏和心流作战。",
  },
  {
    className: "野蛮人",
    classEn: "Barbarian",
    axes: { str: 0.88, con: 0.74, dex: 0.12 },
    role: "爆发承伤、正面突破、压力释放",
    baseSubclasses: ["狂战士道途", "图腾战士道途", "祖灵守护者"],
    why: "力量和体质双高时，角色适合把冲击力、承伤和原始意志写成核心武器。",
  },
  {
    className: "工匠",
    classEn: "Artificer",
    axes: { int: 0.78, dex: 0.34, con: 0.18, wis: 0.12 },
    role: "装置制造、战术道具、系统改造",
    baseSubclasses: ["战斗铁匠", "炼金术士", "炮铳师"],
    why: "智力与精细操作一起突出时，角色适合通过工具、装备和系统理解来解决问题。",
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

const state = {
  screen: "start",
  current: 0,
  stage: 0,
  profile: {},
  scores: {},
  axisStages: {},
  raw: {},
  traits: { ...INITIAL_TRAITS },
  personalityAnswers: 0,
};

let cleanupFns = [];

const app = document.querySelector("#app");
const progressLabel = document.querySelector("#progressLabel");
const progressBar = document.querySelector("#progressBar");

document.querySelector("#brandHome").addEventListener("click", () => {
  state.screen = "start";
  render();
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

function render() {
  cleanup();
  if (state.screen === "start") renderStart();
  if (state.screen === "profile") renderProfile();
  if (state.screen === "test") renderTest();
  if (state.screen === "personality") renderPersonality();
  if (state.screen === "result") renderResult();
}

function renderStart() {
  setProgress("公会柜台待命", 0);
  app.innerHTML = `
    <section class="screen hero-grid">
      <div class="intro-panel hero-panel">
        <div class="hero-orbit" aria-hidden="true"></div>
        <p class="eyebrow">A6 Adventurer Sheet / 六维能力检定</p>
        <h1>
          <span class="hero-title-line">先过一轮</span>
          <span class="hero-title-line">六维检定，</span>
          <span class="hero-title-line">再领取你的</span>
          <span class="hero-title-line">冒险者名册。</span>
        </h1>
        <p class="lead">
          公会柜台不靠自我介绍发证。你会过一串力量、敏捷、体质、智力、感知、魅力检定；跑完以后，桌上会多出职业线索、阵营动机、扮演口吻和能直接开团的角色钩子。
        </p>
        <div class="pill-row">
          <span class="pill">15 个小检定</span>
          <span class="pill">六维属性投点</span>
          <span class="pill">DND 职业线索</span>
          <span class="pill">阵营动机牌</span>
          <span class="pill">可扩写角色钩子</span>
        </div>
        <div class="actions">
          <button class="button primary" id="startBtn" type="button">掷骰开卡</button>
          <button class="button ghost" id="demoResultBtn" type="button">偷看成卡</button>
        </div>
        <p class="fineprint">这是一张娱乐用角色卡，不构成医学、心理学或职业建议。原型阶段数据只在浏览器本地计算。</p>
      </div>

      <aside class="side-panel scan-panel">
        <h3>今日委托板</h3>
        <div class="stage-map">
          ${ATTRIBUTES.map(
            (axis) => `
              <div class="stage-map-row" style="--axis-color:${axis.color}">
                <div>
                  <strong>${axis.name}</strong>
                  <small>${axis.theme}</small>
                </div>
                <span>${axis.stages.length} 项检定</span>
              </div>
            `,
          ).join("")}
        </div>
        <div class="notice">
          每项属性都会经过几轮检定，不靠单题定性。不想跑某段，可以让公会书记填一枚中性参考骰。
        </div>
        <div class="mini-card">
          <h3>跑完会拿到</h3>
          <p>一张六维雷达、一组职业线索、人格扮演滤镜、阵营动机、角色称号和一段可直接交给 DM 的设定摘要。</p>
        </div>
      </aside>
    </section>
  `;
  document.querySelector("#startBtn").addEventListener("click", () => {
    state.screen = "profile";
    render();
  });
  document.querySelector("#demoResultBtn").addEventListener("click", () => {
    fillDemo();
    state.screen = "result";
    render();
  });
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
            <input id="height" name="height" type="number" min="100" max="230" placeholder="例如 170" />
          </div>
          <div class="field">
            <label for="weight">体重 kg</label>
            <input id="weight" name="weight" type="number" min="25" max="220" placeholder="例如 62" />
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
          这里不是体型评价，只给体质轴一个现实参照。健康和睡眠会影响检定权重，不会被简单折算成“好”或“差”。
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
  state.current = 0;
  state.stage = 0;
  state.scores = {};
  state.axisStages = {};
  state.raw = {};
  state.traits = { ...INITIAL_TRAITS };
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

  const renderers = {
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
  renderers[stage.type](axis, stage);
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
  if (!state.axisStages[axis.id]) state.axisStages[axis.id] = {};
  state.axisStages[axis.id][stage.id] = {
    score: clamp(score),
    title: stage.title,
    weight: stage.weight || 1,
    difficulty: stage.difficulty,
    raw,
    note,
  };
  renderStageComplete(stage.title, clamp(score), note);
}

function renderStageComplete(title, score, note) {
  const mount = document.querySelector("#stageMount");
  const flavor = getCurrentStageFlavor();
  const d20 = d20Read(score);
  const verdict = verdictForScore(score);
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
        <p class="dm-note"><strong>DM 记录：</strong>${note}</p>
      </div>
    </div>
    <div class="actions">
      <button class="button primary" id="continueStage" type="button">翻到下一项检定</button>
    </div>
  `;
  document.querySelector("#continueStage").addEventListener("click", advanceStage);
}

function advanceStage() {
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
    state.screen = "personality";
    render();
  }
}

function finalizeAxis(axis) {
  const stages = Object.values(state.axisStages[axis.id] || {});
  const totalWeight = stages.reduce((sum, item) => sum + (item.weight || 1), 0) || 1;
  const weighted = stages.reduce((sum, item) => sum + item.score * (item.weight || 1), 0) / totalWeight;
  state.scores[axis.id] = clamp(weighted);
  state.raw[axis.id] = { stages };
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
    arena.innerHTML = "";
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
      { label: "难度", value: stage.difficulty },
    ])}
    <div class="arena center">
      <div class="stability-box">
        <div class="safe-band"></div>
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
  let active = false;
  let holding = false;
  let value = 50;
  let safeTicks = 0;
  let totalTicks = 0;
  let endAt = 0;
  let interval = null;

  function tick() {
    const left = Math.max(0, endAt - performance.now()) / 1000;
    value += holding ? 1.45 : -1.05;
    value += Math.sin(totalTicks / 7) * 0.45;
    value = Math.max(0, Math.min(100, value));
    const inSafe = value >= 42 && value <= 62;
    totalTicks += 1;
    if (inSafe) safeTicks += left < 7 ? 1.25 : 1;
    marker.style.left = `${value}%`;
    document.querySelector("#safePct").textContent = `${Math.round((safeTicks / Math.max(1, totalTicks)) * 100)}%`;
    document.querySelector("#stableTime").textContent = `${left.toFixed(1)}s`;
    if (left <= 0) {
      clearInterval(interval);
      active = false;
      hold.disabled = true;
      const score = clamp((safeTicks / Math.max(1, totalTicks)) * 10);
      completeStage(score, { safeTicks, totalTicks }, `盾位维持率约 ${Math.round((safeTicks / totalTicks) * 100)}%。`);
    }
  }

  start.addEventListener("click", () => {
    active = true;
    start.disabled = true;
    hold.disabled = false;
    safeTicks = 0;
    totalTicks = 0;
    value = 50;
    endAt = performance.now() + 16000;
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
    arena.innerHTML = "";
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
  cleanupFns.push(() => clearTimeout(timeout));
}

function renderTraceLine(axis, stage) {
  const mount = document.querySelector("#stageMount");
  mount.innerHTML = `
    ${stageGuide({
      measure: "开锁手感、符线跟随和精细操作。",
      rule: "按住并沿金色符线走到终点。越贴线、覆盖越完整，越像成功拆掉机关。",
      scoring: "偏移、覆盖率和断线情况一起结算。",
    })}
    ${metricStrip([
      { label: "覆盖", value: '<span id="traceCover">0%</span>' },
      { label: "偏移", value: '<span id="traceDrift">-</span>' },
      { label: "机关", value: "符线锁" },
    ])}
    <div class="arena center">
      <canvas class="canvas-game trace-canvas" id="traceCanvas" width="760" height="320"></canvas>
    </div>
    <div class="actions">
      <button class="button primary" id="submitTrace" type="button">尝试开锁</button>
      <button class="button ghost" id="clearTrace" type="button">重画符线</button>
    </div>
  `;

  const canvas = document.querySelector("#traceCanvas");
  const ctx = canvas.getContext("2d");
  let drawing = false;
  let points = [];

  function expectedY(x) {
    const t = x / canvas.width;
    return canvas.height * 0.5 + Math.sin(t * Math.PI * 2.4) * 58 + Math.sin(t * Math.PI * 5) * 18;
  }

  function drawBase() {
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
    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.beginPath();
    for (let x = 26; x < canvas.width - 26; x += 4) {
      const y = expectedY(x);
      if (x === 26) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
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
  });
  window.addEventListener("pointerup", () => {
    drawing = false;
  });

  document.querySelector("#clearTrace").addEventListener("click", () => {
    points = [];
    drawBase();
    document.querySelector("#traceCover").textContent = "0%";
    document.querySelector("#traceDrift").textContent = "-";
  });

  document.querySelector("#submitTrace").addEventListener("click", () => {
    if (points.length < 8) {
      completeStage(1.2, { points: points.length }, "符线太短，机关没有响应。");
      return;
    }
    const xs = points.map((p) => p.x);
    const coverage = (Math.max(...xs) - Math.min(...xs)) / (canvas.width - 52);
    const drift = points.reduce((sum, p) => sum + Math.abs(p.y - expectedY(p.x)), 0) / points.length;
    const score = clamp(10 - drift / 12 + clamp(coverage, 0, 1) * 2 - (coverage < 0.75 ? 1.8 : 0));
    completeStage(score, { coverage, drift: Math.round(drift), points: points.length }, `符线覆盖 ${Math.round(coverage * 100)}%，平均偏移 ${Math.round(drift)}px。`);
  });

  drawBase();
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
  const mount = document.querySelector("#stageMount");
  mount.innerHTML = `
    ${stageGuide({
      measure: "现实锚点、恢复状态和冒险续航底子。",
      rule: "这一步只做娱乐化校准，不评价体型。缺失项会由公会书记填入中性默认值。",
      scoring: "现实锚点和恢复状态会进入体质轴，避免单个小游戏把体质判歪。",
    })}
    <div class="two-col">
      <div class="mini-card">
        <h3>体魄底子</h3>
        <p class="huge-score">${fmt(bodyScore)}</p>
        <p>年龄：${p.age || "未填"}；身高：${p.height || "未填"}；体重：${p.weight || "未填"}；BMI：${bmi ? fmt(bmi, 1) : "未计算"}</p>
      </div>
      <div class="mini-card">
        <h3>营地恢复</h3>
        <p class="huge-score">${fmt(healthScore)}</p>
        <p>运动：${translateProfile(p.exercise)}；睡眠：${translateProfile(p.sleep)}；健康影响：${translateProfile(p.health)}</p>
      </div>
    </div>
    <div class="actions">
      <button class="button primary" id="confirmBody" type="button">盖上公会印章</button>
    </div>
  `;
  document.querySelector("#confirmBody").addEventListener("click", () => {
    const score = clamp(bodyScore * 0.58 + healthScore * 0.42);
    completeStage(score, { bodyScore, healthScore, bmi }, `现实锚点给出体质底分 ${fmt(score)}。`);
  });
}

function renderRhythm(axis, stage) {
  const mount = document.querySelector("#stageMount");
  mount.innerHTML = `
    ${stageGuide({
      measure: "节奏、续航和疲劳后的手感。",
      rule: "看到营火核心亮起就点击按钮或按空格。每 8 拍升一级，鼓点会越来越急。",
      scoring: "命中窗口、漏拍和后半段表现综合结算。",
    })}
    ${metricStrip([
      { label: "命中", value: '<span id="beatGood">0</span>/24' },
      { label: "平均偏差", value: '<span id="beatAvg">-</span>' },
      { label: "鼓点", value: '<span id="beatLevel">待命</span>' },
    ])}
    <div class="arena center">
      <div class="pulse-core" id="pulseCore">稳</div>
    </div>
    <div class="actions">
      <button class="button primary" id="startGame" type="button">点燃营火</button>
      <button class="button" id="tapBeat" type="button" disabled>跟上鼓点</button>
    </div>
  `;

  const start = document.querySelector("#startGame");
  const tap = document.querySelector("#tapBeat");
  const core = document.querySelector("#pulseCore");
  const intervals = [860, 720, 590];
  let beat = 0;
  let lastBeat = 0;
  let good = 0;
  let offsets = [];
  let tappedBeat = new Set();
  let timer = null;

  function update() {
    document.querySelector("#beatGood").textContent = good;
    const avg = offsets.length ? Math.round(offsets.reduce((a, b) => a + b, 0) / offsets.length) : "-";
    document.querySelector("#beatAvg").textContent = avg === "-" ? "-" : `${avg}ms`;
  }

  function nextPulse() {
    if (beat >= 24) {
      const avg = offsets.length ? offsets.reduce((a, b) => a + b, 0) / offsets.length : 460;
      const score = clamp((good / 24) * 7.5 + ((260 - avg) / 260) * 2.6);
      tap.disabled = true;
      completeStage(score, { good, total: 24, avgOffsetMs: Math.round(avg) }, `营火鼓点命中 ${good}/24，平均偏差 ${Math.round(avg)}ms。`);
      return;
    }
    const level = Math.min(2, Math.floor(beat / 8));
    document.querySelector("#beatLevel").textContent = ["低", "中", "高"][level];
    beat += 1;
    lastBeat = performance.now();
    core.textContent = beat;
    core.classList.add("active");
    setTimeout(() => core.classList.remove("active"), 190);
    timer = setTimeout(nextPulse, intervals[level]);
  }

  function registerTap() {
    if (tap.disabled || !lastBeat || tappedBeat.has(beat)) return;
    const offset = Math.abs(performance.now() - lastBeat);
    tappedBeat.add(beat);
    offsets.push(offset);
    if (offset <= 250) good += 1;
    update();
  }

  start.addEventListener("click", () => {
    start.disabled = true;
    tap.disabled = false;
    beat = 0;
    good = 0;
    offsets = [];
    tappedBeat = new Set();
    update();
    nextPulse();
  });
  tap.addEventListener("click", registerTap);
  window.addEventListener("keydown", (event) => {
    if (event.code === "Space") registerTap();
  });
  cleanupFns.push(() => clearTimeout(timer));
}

function renderMemoryLadder(axis, stage) {
  const levels = [
    { label: "低", tokens: ["蓝", "塔", "7", "羽"], answer: "蓝-塔-7-羽" },
    { label: "中", tokens: ["东", "镜", "4", "火", "鸦"], answer: "东-镜-4-火-鸦" },
    { label: "高", tokens: ["月", "13", "银", "门", "南", "铃"], answer: "月-13-银-门-南-铃" },
  ];
  let index = 0;
  let correct = 0;
  let startedAt = performance.now();

  function drawReveal() {
    const data = levels[index];
    const mount = document.querySelector("#stageMount");
    mount.innerHTML = `
      ${stageGuide({
        measure: "符文短记、顺序保持和抗干扰回忆。",
        rule: "记住这串符文，几秒后从卷轴里选出完全一致的一组。",
        scoring: "三轮符文各占权重，高难卷轴权重略高。",
      })}
      ${metricStrip([
        { label: "难度", value: data.label },
        { label: "抄对", value: `${correct}/${index}` },
        { label: "卷轴", value: "顺序符文" },
      ])}
      <div class="arena center">
        <div class="memory-strip">${data.tokens.map((token) => `<span class="memory-token">${token}</span>`).join("")}</div>
      </div>
      <div class="actions">
        <button class="button primary" id="hideMemory" type="button">合上卷轴</button>
      </div>
    `;
    document.querySelector("#hideMemory").addEventListener("click", drawChoices);
    const timer = setTimeout(() => {
      if (state.screen === "test" && ATTRIBUTES[state.current].id === "int") drawChoices();
    }, 3600 + index * 500);
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
  renderQuizStage(stage, {
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
  });
}

function renderReasoningQuiz(axis, stage) {
  renderQuizStage(stage, {
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
  });
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
    { label: "低", size: 3, delta: 28 },
    { label: "中", size: 4, delta: 15 },
    { label: "高", size: 5, delta: 7 },
  ];
  let round = 0;
  let correct = 0;
  let startedAt = performance.now();

  function draw() {
    const data = rounds[round];
    const odd = Math.floor(Math.random() * data.size * data.size);
    const base = [118 + Math.floor(Math.random() * 20), 138 + Math.floor(Math.random() * 20), 130 + Math.floor(Math.random() * 20)];
    const mount = document.querySelector("#stageMount");
    mount.innerHTML = `
      ${stageGuide({
        measure: "异色察觉、速度和视觉敏锐度。",
        rule: "低中高三轮，异常色块会越来越接近背景。找出那枚不对劲的魔法印记。",
        scoring: "识破率和用时共同结算，高难异常印记权重更高。",
      })}
      ${metricStrip([
        { label: "难度", value: data.label },
        { label: "识破", value: `${correct}/${round}` },
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
        if (i === odd) correct += 1;
        round += 1;
        if (round >= rounds.length) {
          const elapsed = (performance.now() - startedAt) / 1000;
          const score = clamp((correct / rounds.length) * 8.6 + Math.max(0, 1.4 - elapsed / 32));
          completeStage(score, { correct, total: rounds.length, elapsedSec: Math.round(elapsed) }, `异色印记识破 ${correct}/${rounds.length}。`);
        } else {
          draw();
        }
      });
      grid.appendChild(btn);
    }
  }

  draw();
}

function renderDualBall(axis, stage) {
  const mount = document.querySelector("#stageMount");
  mount.innerHTML = `
    ${stageGuide({
      measure: "分散注意、双目标追踪和混乱中认人。",
      rule: "开局会标出两颗目标星。随后所有星点变成同色并乱动，结束后选出你一路盯住的两颗。",
      scoring: "猜中 0/1/2 颗会拉开分数，同时记录你在高干扰下的专注度。",
    })}
    ${metricStrip([
      { label: "目标星", value: "2 颗" },
      { label: "星群", value: "12" },
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
  let balls = [];
  let targets = [];
  let picked = [];
  let startedAt = 0;
  let raf = null;
  let stopped = false;

  function initBalls() {
    balls = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      x: 44 + Math.random() * (canvas.width - 88),
      y: 44 + Math.random() * (canvas.height - 88),
      vx: (Math.random() > 0.5 ? 1 : -1) * (1.4 + Math.random() * 1.4),
      vy: (Math.random() > 0.5 ? 1 : -1) * (1.3 + Math.random() * 1.4),
      r: 13,
    }));
    targets = shuffle(balls.map((b) => b.id)).slice(0, 2);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(8,10,9,0.75)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const elapsed = (performance.now() - startedAt) / 1000;
    const reveal = elapsed < 2.5;
    document.querySelector("#dualPhase").textContent = reveal ? "记住目标" : elapsed < 9 ? "追踪中" : "指认";
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
    if (elapsed >= 9 && !stopped) {
      stopped = true;
      showPickActions();
    }
    if (!stopped) raf = requestAnimationFrame(draw);
  }

  function showPickActions() {
    const actions = document.querySelector("#dualActions");
    actions.innerHTML = `<span class="pill">指认两颗目标星</span>`;
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
          const score = hit === 2 ? 9.4 : hit === 1 ? 5.8 : 2.0;
          completeStage(score, { targets, picked, hit }, `指认 ${hit}/2，目标星是 ${targets.join("、")}。`);
        }
      });
      actions.appendChild(btn);
    });
    draw();
  }

  start.addEventListener("click", () => {
    initBalls();
    picked = [];
    stopped = false;
    startedAt = performance.now();
    start.disabled = true;
    draw();
  });
  cleanupFns.push(() => cancelAnimationFrame(raf));
}

function renderSchulte(axis, stage) {
  const boards = [
    { label: "低", size: 3 },
    { label: "中", size: 4 },
    { label: "高", size: 5 },
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
        rule: "按 1 到 N 的顺序点完侦察格。低 3x3，中 4x4，高 5x5。",
        scoring: "用时越短越好，点错会扣分。这一轮主要进入感知里的专注分。",
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
              const score = clamp(10 - elapsed / 12 - errors * 0.45 + 2.2);
              completeStage(score, { elapsedSec: Math.round(elapsed), errors }, `完成三轮侦察，用时 ${Math.round(elapsed)} 秒，误判 ${errors} 次。`);
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
  renderQuizStage(stage, {
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
  });
}

function renderAlignmentQuiz(axis, stage) {
  renderQuizStage(stage, {
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
  });
}

function renderPersonality() {
  setProgress("选择你的扮演姿态", 88);
  const questions = [
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
  ];
  let index = 0;

  function draw() {
    const q = questions[index];
    setProgress(`扮演姿态 ${index + 1}/${questions.length}`, 88 + index * 2.4);
    app.innerHTML = `
      <section class="screen">
        <div class="tool-panel">
          <p class="eyebrow">Session 0.5 / Roleplay Stance</p>
          <h2>给角色加一层扮演姿态</h2>
          <p class="panel-copy">这几题不改属性点，只决定你在桌边怎么演：守序还是破局，共情还是目标优先，谨慎还是冒险。</p>
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

function computeBodyScore() {
  const p = state.profile || {};
  let score = 5.2;
  const age = Number(p.age);
  const height = Number(p.height);
  const weight = Number(p.weight);
  const bodyFat = Number(p.bodyFat);
  if (age) {
    if (age >= 18 && age <= 35) score += 0.5;
    else if (age > 50) score -= 0.35;
  }
  if (height && weight) {
    const bmi = weight / (height / 100) ** 2;
    if (bmi >= 18.5 && bmi <= 27.5) score += 0.7;
    else if (bmi >= 16.5 && bmi <= 31) score += 0.2;
    else score -= 0.35;
  }
  if (bodyFat) {
    if (bodyFat >= 12 && bodyFat <= 30) score += 0.4;
    else if (bodyFat > 38) score -= 0.3;
  }
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

function translateProfile(value) {
  const map = {
    unknown: "未填写",
    none: "无明显影响 / 基本不运动",
    light: "轻中强度 1-2 次",
    regular: "规律运动",
    high: "高频运动",
    good: "恢复不错",
    average: "一般",
    poor: "偏差",
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
      <div class="intro-panel result-hero" style="min-height:auto;">
        <p class="eyebrow">Character Sheet Ready / Welcome to the Table</p>
        <h1>${summary.archetype}</h1>
        <p class="lead">${summary.oneLine}</p>
        <div class="pill-row">
          <span class="pill">${summary.mbtiLabel}</span>
          <span class="pill">${summary.alignment}</span>
          <span class="pill">${summary.classProfile.job}</span>
          <span class="pill">DND ${summary.dndProfile.className}</span>
          <span class="pill">${summary.titles.join(" / ")}</span>
        </div>
      </div>

      <div class="result-grid">
        <div class="result-panel">
          <h2>六维属性雷达</h2>
          <div class="radar-wrap">
            <canvas id="radarCanvas" width="620" height="500"></canvas>
          </div>
        </div>
        <div class="result-panel">
          <h2>立绘与职业牌</h2>
          <div class="portrait-card tarot-layout" style="--portrait-a:${summary.top.color}; --portrait-b:${summary.second.color};">
            <div class="tarot-shell">
              <div class="tarot-corner tarot-corner-tl">${summary.top.abbr}</div>
              <div class="tarot-corner tarot-corner-tr">${summary.second.abbr}</div>
              <div class="tarot-corner tarot-corner-bl">${summary.mbtiCode.slice(0, 2)}</div>
              <div class="tarot-corner tarot-corner-br">${summary.mbtiCode.slice(2)}</div>
              <div class="tarot-header">
                <span>ARCANA ${summary.arcanaNumber}</span>
                <strong>${summary.cardTitle}</strong>
              </div>
              <div class="tarot-window">
                ${summary.portraitAsset ? `<img class="portrait-image" src="${summary.portraitAsset}" alt="${summary.portraitName}" loading="lazy">` : ""}
                <canvas id="portraitCanvas" class="portrait-canvas" width="520" height="520"></canvas>
              </div>
              <div class="tarot-gems">
                <span style="--gem:${summary.top.color};">${summary.top.name} ${fmt(state.scores[summary.top.id])}</span>
                <span style="--gem:${summary.second.color};">${summary.second.name} ${fmt(state.scores[summary.second.id])}</span>
              </div>
              <div class="tarot-nameplate">
                <p>${summary.mbtiCode} / ${summary.dndProfile.classEn}</p>
                <h3>${summary.portraitName}</h3>
              </div>
            </div>
            <div class="portrait-lore">
              <p class="eyebrow">${summary.cardTitle} / DND ${summary.dndProfile.classEn}</p>
              <h3>${summary.portraitName}</h3>
              <p>${summary.classProfile.face}</p>
              <p class="portrait-resource-note">
                ${
                  summary.portraitResource.status === "ready"
                    ? `立绘已接入 · ${summary.portraitResource.manifestId}`
                    : `立绘待补齐 · ${summary.portraitResource.expectedFile}`
                }
              </p>
              <div class="dnd-current-match">
                <span>本局主职业 · 六维投点</span>
                <strong>${summary.dndProfile.className}<em>${summary.dndProfile.classEn}</em></strong>
                <p>${summary.dndProfile.subclass} · ${summary.dndProfile.role}</p>
                <small>${summary.dndProfile.matchText} ${summary.dndProfile.why}</small>
              </div>
              <div class="ornament-row">
                <span>${summary.alignment}</span>
                <span>${summary.titles.join(" / ")}</span>
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
          <p>职业不是 MBTI 套模板，先看六维投点，再看你打算怎么演。ESFP 可以钻研法术，INTJ 也可以上前线，只要这张卡支撑得住。</p>
        </div>
        <div class="dnd-match-grid">
          ${summary.dndMatches.map((profile, index) => renderDndMatchCard(profile, index, summary.mbtiCode)).join("")}
        </div>
        <div class="dnd-class-grid">
          ${renderDndClassGrid(summary.mbtiCode, summary.dndProfile.className)}
        </div>
      </div>

      <div class="result-grid">
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

      <div class="result-grid">
        <div class="result-panel">
          <h2>扮演滤镜与阵营动机</h2>
          <div class="insight-stack">
            <div class="mini-card">
              <h3>MBTI 扮演口吻</h3>
              <p>${summary.mbtiText}</p>
            </div>
            <div class="mini-card">
              <h3>阵营动机</h3>
              <p>${summary.alignmentText}</p>
            </div>
          </div>
        </div>
        <div class="result-panel">
          <h2>可跑团的角色钩子</h2>
          <div class="insight-stack">
            <div class="mini-card combo-card">
              <p class="eyebrow">${summary.top.abbr} + ${summary.second.abbr}</p>
              <h3>${summary.comboProfile.name}</h3>
              <p>${summary.comboProfile.direction}</p>
              <div class="compact-chip-row">
                ${summary.comboProfile.candidates.map((item) => `<span>${item}</span>`).join("")}
              </div>
            </div>
            <div class="mini-card">
              <h3>高亮属性</h3>
              <p>${summary.strengthText}</p>
            </div>
            <div class="mini-card">
              <h3>可演缺陷</h3>
              <p>${summary.weaknessText}</p>
            </div>
          </div>
        </div>
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
      personalityAnswers: 0,
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
                  <div class="stage-score-line">
                    <span>${item.title}</span>
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

function buildSummary() {
  const sorted = getSortedAxes();
  const top = sorted[0];
  const second = sorted[1];
  const low = sorted[sorted.length - 1];
  const mbtiCode = getMbtiCode();
  const mbtiLabel = state.profile.mbtiSelf && state.profile.mbtiSelf !== "未知" ? `${mbtiCode}（玩家自填）` : `${mbtiCode}（检定推断）`;
  const alignment = getAlignment();
  const classProfile = MBTI_ARCHETYPES[mbtiCode] || MBTI_ARCHETYPES.未知;
  const dndMatches = getDndMatches(mbtiCode, alignment);
  const dndProfile = dndMatches[0] || getFallbackDndProfile();
  const dndTitle = `${dndProfile.className}·${dndProfile.subclass}`;
  const classes = getClasses(top.id, second.id, dndTitle);
  const titles = getTitles(top.id, second.id);
  const comboProfile = getAttributeComboProfile(top.id, second.id);
  const mbtiProfile = getMbtiResultProfile(mbtiCode, top.id);
  const alignmentProfile = getAlignmentResultProfile(alignment);
  const archetype = `${comboProfile.name} · ${getArchetype(top.id, second.id)}`;
  const portraitName = `${mbtiCode} ${classProfile.job}`;
  const arcanaNumber = String(Math.round((state.scores[top.id] + state.scores[second.id]) * 3)).padStart(2, "0");
  const cardTitle = `${top.abbr} ${second.abbr} Major`;
  const oneLine = `${comboProfile.tagline} 本次出卡暂定 DND「${dndProfile.className}」路线，${mbtiCode} 决定它在桌边怎么演。`;
  const strengthText = `这张卡最亮的属性是 ${top.name} ${fmt(state.scores[top.id])} 与 ${second.name} ${fmt(state.scores[second.id])}。${comboProfile.explanation}`;
  const weaknessText = `${low.name} ${fmt(state.scores[low.id])} 不是扣分项，更像一条可以在剧情里反复上桌的麻烦。${comboProfile.weakness}`;
  const mbtiText = `${mbtiLabel} · ${mbtiProfile.style}：${mbtiProfile.result} ${mbtiProfile.axisLine}`;
  const alignmentText = `${alignment}：${alignmentProfile} 阵营是角色扮演倾向，不等同于现实道德评价。`;
  const scoreLine = ATTRIBUTES.map((axis) => `${axis.abbr} ${fmt(state.scores[axis.id])}`).join(" / ");
  const characterPrompt = buildCharacterPrompt({ mbtiCode, classProfile, dndProfile, top, second, low, alignment, titles });
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
    `阵营动机：${alignment}`,
    `主职业线索：${dndProfile.className}（${dndProfile.classEn}） / ${dndProfile.subclass}`,
    `队伍职能：${dndProfile.role}`,
    `优势属性：${dndProfile.stats}`,
    `备用职业钩子：${dndProfile.alternates.join(" / ")}`,
    `职业判定依据：${dndProfile.matchText}`,
    `支线职业灵感：${classes.join(" / ")}`,
    `桌边称号：${titles.join(" / ")}`,
    `属性组合牌：${comboProfile.name}`,
    `组合说明：${comboProfile.explanation}`,
    `本局玩法：${comboProfile.direction}`,
    `人格扮演滤镜：${mbtiProfile.style}；${mbtiProfile.result}`,
    `阵营说明：${alignmentProfile}`,
    `角色钩子：突出${top.name}与${second.name}，把${low.name}写成限制、代价或成长线。`,
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
    strengthText,
    weaknessText,
    mbtiText,
    alignmentText,
    copyText,
    portraitResource,
    portraitAsset,
  };
}

function getMbtiCode() {
  if (state.profile.mbtiSelf && state.profile.mbtiSelf !== "未知") return state.profile.mbtiSelf;
  const t = state.traits;
  return `${t.E >= t.I ? "E" : "I"}${t.N >= t.S ? "N" : "S"}${t.F > t.T ? "F" : "T"}${t.P > t.J ? "P" : "J"}`;
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
    const score = clamp(normalized + affinity);
    const subclass = chooseSubclass(base, mbtiCode, alignment, top.id, second.id);
    const style = DND_CARD_STYLES[base.className] || DND_CARD_STYLES.冒险者;
    return {
      ...base,
      subclass,
      score,
      stats: getClassStatsText(base.axes),
      face: `${mbtiMod.style}型${base.className}`,
      why: `${base.why}${mbtiMod.detail}`,
      alternates: base.baseSubclasses.filter((item) => item !== subclass).slice(0, 3).map((item) => `${base.className}·${item}`),
      matchText: `六维贡献 ${fmt(normalized)}，人格修饰 ${affinity >= 0 ? "+" : ""}${fmt(affinity)}。主导轴：${top.name} / ${second.name}。`,
      style,
    };
  })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
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

function buildCharacterPrompt({ mbtiCode, classProfile, dndProfile, top, second, low, alignment, titles }) {
  return `请把这张冒险者名册扩写成 OC / 跑团角色设定：${mbtiCode} ${classProfile.job}，DND职业线索为${dndProfile.className}（${dndProfile.subclass}），队伍职能${dndProfile.role}；高亮属性是${top.name}和${second.name}，可演缺陷围绕${low.name}设计；阵营动机${alignment}；桌边称号${titles.join("、")}。重点写行为方式、战斗/社交风格、剧情用途、成长线和可扮演的缺陷，不要把职业写死为人格定型。`;
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

function fillDemo() {
  state.profile = { age: "28", height: "170", weight: "62", exercise: "regular", sleep: "average", health: "none", mbtiSelf: "INTJ" };
  state.scores = { str: 4.8, dex: 7.4, con: 5.8, int: 8.2, wis: 8.6, cha: 6.4 };
  state.axisStages = {};
  ATTRIBUTES.forEach((axis) => {
    state.axisStages[axis.id] = {};
    axis.stages.forEach((stage, index) => {
      state.axisStages[axis.id][stage.id] = {
        title: stage.title,
        score: clamp((state.scores[axis.id] || 5.2) + (index - 1) * 0.35),
        weight: stage.weight || 1,
        difficulty: stage.difficulty,
        raw: { demo: true },
      };
    });
  });
  state.traits = {
    ...INITIAL_TRAITS,
    I: 5,
    N: 4,
    T: 5,
    J: 6,
    lawful: 3,
    good: 2,
    empathy: 2,
    order: 4,
    control: 4,
  };
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
    ctx.fillStyle = "rgba(238,232,207,0.32)";
    ctx.strokeStyle = "rgba(238,232,207,0.08)";
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
render();
