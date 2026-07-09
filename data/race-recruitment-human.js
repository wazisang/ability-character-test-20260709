(() => {
  const data = {
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
    "title": "燃烧的凡者",
    "oneLine": "他们没有精灵的长寿与矮人的天生强韧，但他们拥有足以改变世界版图的极端野心与适应力。",
    "bodyText": "人类是大陆上寿命最短促、但也最贪婪的智慧种族。不到百年的寿命让他们充满了不可思议的紧迫感。他们没有与生俱来的魔法血脉，也没有坚不可摧的肉体，但他们用诡计、铁器、极高的繁衍率和对知识的疯狂掠夺弥补了一切。\n\n在公会考官眼中，人类是一张可以涂抹成任何颜色的白纸。他们可能在下一秒背叛你，也可能在绝境中为你挡下致命一击。正是这种游走在伟大与卑劣边缘的灵活性，让人类成为了所有雇佣兵团中最不可或缺的中坚力量。",
    "tags": [
      "极致适应",
      "短寿种",
      "野心勃勃",
      "凡人智慧",
      "道德弹性"
    ],
    "warningText": "警告：该种族个体差异极大，不可用单一模板衡量。测试时需高度警惕其谎言与过度包装。",
    "recruiterQuote": "“我这辈子见过最高尚的圣徒是人类，最令人作呕的骗子也是人类。别看他们活得短，他们折腾出来的麻烦比巨龙还多。”"
  },
  "recruitTargets": [
    {
      "targetId": "guild_fighter",
      "classNameZh": "黑铁训练厅",
      "classNameEn": "Fighter Guild",
      "title": "凡躯之锋",
      "oneLine": "用百种兵器与战术来弥补没有爪牙的遗憾。",
      "recruiter": "断刃的巴尔特，训练厅教头",
      "recruitPitch": "“你没有龙鳞，也没有精灵那变态的视力。但你能学会怎么用长矛捅穿前两者。在我的训练营里，活得久不是因为命长，是因为你学得快、杀得狠。”",
      "acceptedStyle": "能在各种极端恶劣的环境中迅速调整战术的万能老兵。",
      "likelyFailure": "盲目崇拜蛮力或个人英雄主义，在盾墙中成为致命的破绽。",
      "hiddenRoute": "极高智商但力量平庸者可能被发掘为战术参谋。",
      "recommendedStats": [
        "con",
        "str",
        "dex"
      ],
      "riskTags": [
        "折损率高",
        "炮灰风险",
        "百战生还"
      ]
    },
    {
      "targetId": "guild_bard",
      "classNameZh": "银月诗学苑",
      "classNameEn": "College of Bards",
      "title": "无影舌簧",
      "oneLine": "用短暂的生命编织能流传千年的谎言与史诗。",
      "recruiter": "千面者奥菲莉亚，情报总管",
      "recruitPitch": "“精灵可以花三百年写一首诗，但我们人类能在三个小时内编造一个谎言并推翻一个王国。别动刀子，孩子，把你的舌头磨快点，那才是世界上最锋利的武器。”",
      "acceptedStyle": "左右逢源的交际花，或游走在酒馆与贵族后院的情报骗子。",
      "likelyFailure": "极度耿直、毫无演技、在威逼利诱下坚持吐露真言的笨蛋。",
      "hiddenRoute": "若表现出极其冷酷的逻辑，可能被暗影刺客联盟挖走。",
      "recommendedStats": [
        "cha",
        "dex",
        "int"
      ],
      "riskTags": [
        "间谍",
        "煽动者",
        "社会性死亡"
      ]
    },
    {
      "targetId": "guild_artificer",
      "classNameZh": "黄铜齿轮塔",
      "classNameEn": "Artificer Workshop",
      "title": "火药与奇迹",
      "oneLine": "没有天生魔法，那就用炸药、扳手和图纸炸出一条路。",
      "recruiter": "独臂技师罗兰",
      "recruitPitch": "“看我这只金属假手，它比原装的有力多了！人类的肉体太脆弱，所以我们必须用钢铁和火药武装自己。想要魔法？我自己造！”",
      "acceptedStyle": "满手油污，在爆炸和火花中狂热测试新装备的疯子工程师。",
      "likelyFailure": "极其因循守旧，连给武器加个握把都不敢的死脑筋。",
      "hiddenRoute": "如果展现出对机械极端冰冷的控制欲，也许会被高阶死灵法师看中。",
      "recommendedStats": [
        "int",
        "con",
        "dex"
      ],
      "riskTags": [
        "试验爆炸",
        "倾家荡产",
        "工程事故"
      ]
    },
    {
      "targetId": "guild_paladin",
      "classNameZh": "白银誓约庭",
      "classNameEn": "Order of Paladins",
      "title": "凡人的天平",
      "oneLine": "以必死之躯，立下连神明都感到棘手的沉重誓言。",
      "recruiter": "盲眼裁决官伊莲",
      "recruitPitch": "“我们充满缺陷，充满欲望。但正因为我们生来就在泥沼中，我们仰望星空的誓言才显得如此璀璨。宣誓吧，用你那短短几十年的寿命，去捍卫不朽。”",
      "acceptedStyle": "在道德的撕扯与利益的诱惑中，依然能死守底线的顽固磐石。",
      "likelyFailure": "轻易向利益妥协，或为了达成目的毫无底线的实用主义者。",
      "hiddenRoute": "如果对誓言的解读过于偏激，可能会滑向只看结果的复仇骑士。",
      "recommendedStats": [
        "cha",
        "str",
        "wis"
      ],
      "riskTags": [
        "信仰崩溃",
        "自我牺牲",
        "道德绑架"
      ]
    }
  ],
  "mbtiFilters": [
    {
      "groupId": "NT",
      "title": "理性的野心家",
      "oneLine": "你把短暂的生命当成一场高风险高回报的筹码游戏。",
      "evaluationStyle": "公会欣赏你的精算能力。你不相信所谓的命运，你只相信利益的杠杆和计划。你把人类‘短视但疯狂’的特质发挥成了极致的效率。虽然有时缺乏人情味，但你总是那个能在死局中找到出路的人。",
      "guild_fighterFlavor": "你用计算杠杆的眼光看待阵型，每一个动作都是最优解的暴力拆解。",
      "guild_bardFlavor": "谎言是你的算法，人心是你的数据，你用理智操控情绪的洪流。",
      "guild_artificerFlavor": "你对知识的渴求近乎冷酷，哪怕火药炸碎了手指也不能阻止你测试新图纸。",
      "guild_paladinFlavor": "你的誓言不是盲目的狂热，而是一份经过严密逻辑推演的最高等级契约。",
      "riskText": "过于理智的算计可能让你陷入众叛亲离的孤独境地。"
    },
    {
      "groupId": "NF",
      "title": "燃烧的理想者",
      "oneLine": "明知生命苦短，你却偏要在这片大陆上留下属于凡人的回响。",
      "evaluationStyle": "你展现了人类最为复杂、也最闪光的共情力。你不是最强壮的，也不是最渊博的，但你的光芒和信念能让最冷血的雇佣兵为你拼命。公会知道，你不是为了金币而战，你是为了某种超越寿命的意义而战。",
      "guild_fighterFlavor": "你不是为杀戮挥剑，你是为了守护身后的灯火而把自己变成城墙。",
      "guild_bardFlavor": "你讲的故事不仅能骗人，还能在绝望的冬夜里点燃一整个军团的斗志。",
      "guild_artificerFlavor": "你的发明总是带着温度，你希望齿轮不仅能杀人，也能帮农民收割。",
      "guild_paladinFlavor": "你是真正理解宽恕与牺牲的圣徒，即使遍体鳞伤也拒绝向黑暗妥协。",
      "riskText": "过度燃烧的理想极易在残酷的现实面前被碾碎成抑郁的死灰。"
    },
    {
      "groupId": "SJ",
      "title": "秩序的基石",
      "oneLine": "在混乱的奇幻世界里，你用极其凡俗的纪律建立起安全感。",
      "evaluationStyle": "没有你这样的人，人类的城邦早就在巨龙和恶魔的吐息下化为灰烬了。你没有惊世骇俗的天赋，但你绝对可靠。你尊重传统、遵守契约、守卫职责。你是所有冒险者小队里负责管账、规划路线、守夜的最强定海神针。",
      "guild_fighterFlavor": "你是最完美的阵地骨干，军令所指，寸步不退，哪怕面对神祇的投影。",
      "guild_bardFlavor": "你更像是一个严谨的史官或外交官，用详实的卷宗去对抗虚假的流言。",
      "guild_artificerFlavor": "你拒绝危险的爆炸实验，你只生产质量稳定、绝不卡壳的标准化火枪。",
      "guild_paladinFlavor": "你不追求虚无缥缈的光明，你只在乎今天有没有把该执行的法典执行到位。",
      "riskText": "极度的死板可能会让你在必须变通的生死关头错失生机。"
    },
    {
      "groupId": "SP",
      "title": "街头的实用派",
      "oneLine": "打赢就喝麦酒，打输就跑路，人类最大的天赋就是活着。",
      "evaluationStyle": "你完美诠释了人类在底层摸爬滚打出的生存智慧。你不在乎什么大局、誓言或名垂千古，你只看眼前的麻烦怎么用最快的速度解决。你直觉敏锐，身手滑溜，总能在极其糟糕的烂摊子里找到最实惠的出路。",
      "guild_fighterFlavor": "你精通街头斗殴的一切脏套路，能用沙子、板凳和插眼解决绝不用剑。",
      "guild_bardFlavor": "比起宏大的史诗，你更擅长在酒馆赌局里用精湛的千术和荤段子大杀四方。",
      "guild_artificerFlavor": "你是个无可救药的拆家大王，能用几块破铁和一根弹簧组装出一个致命陷阱。",
      "guild_paladinFlavor": "你是个奇葩的街头侠客，经常用极其不光彩的手段去实现某种粗糙的正义。",
      "riskText": "你极其不靠谱，长官总担心你会在关键时刻卷款潜逃。"
    }
  ],
  "physiqueChecks": [
    {
      "id": "human_physique_aging",
      "targetId": "guild_fighter",
      "title": "燃烧的岁月",
      "scene": "体检教官看着你手上的老茧和微微开始灰白的鬓角叹了口气：‘精灵三十岁还在尿床，而人类三十岁身体就开始走下坡路了。你打算怎么应对这短暂且脆弱的巅峰期？’",
      "prompt": "面对寿命与体能衰退的质问，你的回答是：",
      "options": [
        {
          "id": "A",
          "text": "“申请公会经费，去黑市买一套地精外骨骼装甲焊死在身上。肉体会老，但我背上的蒸汽锅炉永远年轻！”",
          "npcReply": "教官在档案上狠狠盖了个章：“极其硬核的机械缝合怪思路，但这股不计代价的疯劲正是我们需要的。”",
          "scoreDelta": {
            "str": 2,
            "con": 1
          },
          "mbtiDelta": {
            "S": 1,
            "J": 1
          },
          "affinityDelta": {
            "guild_fighter": 2
          },
          "alignmentDelta": {
            "lawful": 1,
            "action": 1
          },
          "triggerTags": [
            "机械改造",
            "物理续命"
          ],
          "outcomeTone": "合格",
          "branchHint": "极致榨取潜能的实用老兵"
        },
        {
          "id": "B",
          "text": "“立刻转行研究人体解剖学和杠杆原理，争取做到能用一根手指精准挑断巨魔的脚筋，主打一个绝对不出汗。”",
          "npcReply": "教官挑了挑眉毛：“聪明的偷懒方式。用脑子杀人确实比用肌肉省卡路里。”",
          "scoreDelta": {
            "int": 2,
            "dex": 1
          },
          "mbtiDelta": {
            "N": 1,
            "T": 1
          },
          "affinityDelta": {
            "guild_fighter": 1,
            "guild_artificer": 1
          },
          "alignmentDelta": {
            "order": 1
          },
          "triggerTags": [
            "以巧破力",
            "杠杆狂魔"
          ],
          "outcomeTone": "合格",
          "branchHint": "偏向战术和技巧的灵动战士"
        },
        {
          "id": "C",
          "text": "“当场掏出一张伪造的精灵家谱，试图通过极其严密的学术论证，向教官证明自己其实是个患有早衰症的高等精灵。”",
          "npcReply": "教官看着那张画着尖耳朵火柴人的废纸，陷入了长久的沉默：“……我宁愿相信你是个发育过剩的哥布林。”",
          "scoreDelta": {
            "cha": 2,
            "wis": -1
          },
          "mbtiDelta": {
            "P": 1,
            "S": 1
          },
          "affinityDelta": {
            "guild_rogue": 2,
            "guild_fighter": -1
          },
          "alignmentDelta": {
            "self": 2
          },
          "triggerTags": [
            "物种造假",
            "纯粹忽悠"
          ],
          "outcomeTone": "偏离",
          "branchHint": "满嘴跑火车的老油条"
        },
        {
          "id": "D",
          "text": "“极其嚣张地向死神递交了一份长达七十页的免责声明，扬言自己已把灵魂卖给了三家魔神，死后让他们先打一架再说。”",
          "npcReply": "教官被你的法务鬼才震住了：“此人极度危险或极其有病，建议转交异端审判庭查账。”",
          "scoreDelta": {
            "cha": 2,
            "str": 1
          },
          "mbtiDelta": {
            "F": 1,
            "J": 1
          },
          "affinityDelta": {
            "guild_paladin": 3
          },
          "alignmentDelta": {
            "lawful": 1,
            "good": 1
          },
          "triggerTags": [
            "死神抗诉",
            "法务卡bug"
          ],
          "outcomeTone": "偏离",
          "branchHint": "靠钻神明空子来续命的狂徒"
        }
      ]
    },
    {
      "id": "human_physique_infection",
      "targetId": "guild_artificer",
      "title": "肮脏的伤口",
      "scene": "在模拟野外生存测试中，你不慎被锈烂的铁钉划伤了小腿。人类没有巨魔的再生力，也没有高等精灵的疾病免疫，这处伤口在几小时内就开始红肿发炎。",
      "prompt": "在没有牧师且军需耗尽的情况下，你要如何处理这可能致命的感染？",
      "options": [
        {
          "id": "A",
          "text": "不仅用烧红的匕首直接烙在伤口上，还顺便撒了一把孜然。然后恶狠狠地瞪着教官问他要不要尝一口凡人烤肉。",
          "npcReply": "空气中弥漫着烤肉的味道。考官咽了口唾沫：“极具威慑力的硬汉消毒法，只是有点费香料。”",
          "scoreDelta": {
            "con": 2,
            "wis": 1
          },
          "mbtiDelta": {
            "J": 1,
            "S": 1
          },
          "affinityDelta": {
            "guild_fighter": 2
          },
          "alignmentDelta": {
            "action": 1
          },
          "triggerTags": [
            "硬核烤肉",
            "物理硬抗"
          ],
          "outcomeTone": "合格",
          "branchHint": "对痛苦有极高的忍耐力与幽默感"
        },
        {
          "id": "B",
          "text": "利用随身携带的劣质火药、蝙蝠粪便和半瓶劣酒，当场调配出一副极其刺鼻的炼金膏药，不仅杀菌，还把周围的蚊虫全熏死了。",
          "npcReply": "伤口不仅没恶化，这股味道还帮你们避开了好几波野兽的夜袭。考官记录：“极佳的化学防身术。”",
          "scoreDelta": {
            "int": 3,
            "dex": -1
          },
          "mbtiDelta": {
            "N": 1,
            "T": 1
          },
          "affinityDelta": {
            "guild_artificer": 3
          },
          "alignmentDelta": {
            "control": 1
          },
          "triggerTags": [
            "炼金毒气",
            "就地取材"
          ],
          "outcomeTone": "合格",
          "branchHint": "极其优秀的废品炼金天赋"
        },
        {
          "id": "C",
          "text": "试图以重金贿赂周围的寄生虫，并发表了一段极其煽情的演讲，试图说服细菌们在自己的腿上建立一个互利共生的民主共和国。",
          "npcReply": "细菌显然没有听懂你的政治主张，你很快高烧昏迷了。“你不仅是个病号，还是个极其抽象的政客。”",
          "scoreDelta": {
            "dex": 2,
            "cha": 1
          },
          "mbtiDelta": {
            "P": 1,
            "T": 1
          },
          "affinityDelta": {
            "guild_rogue": 2,
            "guild_paladin": -2
          },
          "alignmentDelta": {
            "self": 2
          },
          "triggerTags": [
            "细菌谈判",
            "跨物种建国"
          ],
          "outcomeTone": "危险",
          "branchHint": "精神极其不稳定的话痨"
        },
        {
          "id": "D",
          "text": "极其虔诚地向医疗之神祈祷，并在伤口上画满神圣符文。结果不仅没止痛，反而因为颜料过敏肿得更大，引来了全营的嘲笑。",
          "npcReply": "你发了三天高烧，在幻觉中差点把神像给砸了。“用魔法颜料对抗破伤风的经典反面教材。”",
          "scoreDelta": {
            "cha": 2,
            "int": -2
          },
          "mbtiDelta": {
            "F": 1,
            "N": 1
          },
          "affinityDelta": {
            "guild_cleric": 1
          },
          "alignmentDelta": {
            "chaotic": 1
          },
          "triggerTags": [
            "颜料过敏",
            "盲目狂热"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "极其迷信且缺乏常识的神棍"
        }
      ]
    },
    {
      "id": "human_physique_stamina",
      "targetId": "guild_fighter",
      "title": "凡人的极限",
      "scene": "全副武装负重急行军三十里后，精灵们依然呼吸平稳，半兽人还在互相角力，而你的肺部仿佛着了火，双腿像灌了铅一样几乎要失去知觉。",
      "prompt": "当带队军官吹响再次加速冲锋的号角时，你的身体和意志在怎样斗争？",
      "options": [
        {
          "id": "A",
          "text": "用绳子死死把自己绑在冲锋的战马尾巴上，就算被拖掉一层皮也绝不掉队。只要我还在往前移动，军团的防线就还在！",
          "npcReply": "你的盔甲磨出了火花，但你始终没有掉队。“这就是为什么人类军团永远是最难被甩掉的牛皮糖。”",
          "scoreDelta": {
            "con": 3,
            "wis": 1
          },
          "mbtiDelta": {
            "S": 1,
            "J": 1
          },
          "affinityDelta": {
            "guild_fighter": 3
          },
          "alignmentDelta": {
            "lawful": 2
          },
          "triggerTags": [
            "物理拖拽",
            "玩命死磕"
          ],
          "outcomeTone": "合格",
          "branchHint": "拥有极其暴力的军团纪律感"
        },
        {
          "id": "B",
          "text": "敏锐地发现风向的变化，立刻从背包里掏出一块破帐篷布做成简易滑翔伞，借着风势和地形直接飘到了队伍的最前方。",
          "npcReply": "你不仅跟上了队伍，还利用空气动力学省了一大半力气。“非常懂怎么用脑子偷懒，完美的侦察兵坯子。”",
          "scoreDelta": {
            "int": 2,
            "dex": 1
          },
          "mbtiDelta": {
            "N": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_fighter": 1,
            "guild_rogue": 1
          },
          "alignmentDelta": {
            "control": 1
          },
          "triggerTags": [
            "空气动力学",
            "合理偷懒"
          ],
          "outcomeTone": "偏离",
          "branchHint": "比起死扛更懂得利用环境的巧将"
        },
        {
          "id": "C",
          "text": "大声宣告自己其实是个极其罕见的泥沼巨魔，然后直接往泥坑里一躺，试图通过“吸收大地的力量”来强行回满体力。",
          "npcReply": "你差点被后面的半兽人军队踩成泥饼。军官骂了一句脏话：“这家伙不仅废，而且脑子有坑！”",
          "scoreDelta": {
            "str": 2,
            "con": -1
          },
          "mbtiDelta": {
            "P": 1,
            "F": 1
          },
          "affinityDelta": {
            "guild_barbarian": 3,
            "guild_fighter": -1
          },
          "alignmentDelta": {
            "chaotic": 1
          },
          "triggerTags": [
            "泥坑躺平",
            "强行碰瓷"
          ],
          "outcomeTone": "偏离",
          "branchHint": "极其懒惰且思路抽象的逃兵"
        },
        {
          "id": "D",
          "text": "掏出破盾牌和两根长矛，在急行军途中现场组装出一个极其简陋的滑板，虽然一路火花带闪电疯狂翻车，但确实比跑步快。",
          "npcReply": "整个队伍的阵型被你飘逸的滑板走位全搅乱了，但大家不知不觉间都跑得飞快（主要是为了躲你）。",
          "scoreDelta": {
            "cha": 3,
            "wis": -1
          },
          "mbtiDelta": {
            "E": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_bard": 3
          },
          "alignmentDelta": {
            "chaotic": 1
          },
          "triggerTags": [
            "战地滑板",
            "泥石流走位"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "拥有极其离谱的载具发明天赋"
        }
      ]
    },
    {
      "id": "human_physique_sleep",
      "targetId": "guild_bard",
      "title": "短命种的困倦",
      "scene": "精灵只需要冥想四小时，而人类极度依赖八小时的深睡眠。但在高压审查周里，考官已经连续三天只给你们安排了两小时的休息。你的脑子像一团浆糊。",
      "prompt": "在极度缺乏睡眠导致的幻觉边缘，你接到了背诵一份复杂情报的任务。你会怎么做？",
      "options": [
        {
          "id": "A",
          "text": "直接把两根极其锋利的牙签撑在自己的眼皮上，同时用针猛刺大腿。只要我不闭眼，大脑的关机键就按不下去！",
          "npcReply": "你的眼睛布满血丝，像个刚从地狱爬出来的恶鬼，但情报一字不差。“对精神的粗暴榨取，纯正的人类作风。”",
          "scoreDelta": {
            "con": 2,
            "wis": 1
          },
          "mbtiDelta": {
            "J": 1,
            "S": 1
          },
          "affinityDelta": {
            "guild_fighter": 2
          },
          "alignmentDelta": {
            "order": 1
          },
          "triggerTags": [
            "牙签撑眼",
            "暴力清醒"
          ],
          "outcomeTone": "合格",
          "branchHint": "对痛苦有极强抗性的狠人"
        },
        {
          "id": "B",
          "text": "把情报编成极其押韵的黑帮切口和荤段子，然后在脑子里循环播放，让低俗的快乐强制战胜生理的疲惫。",
          "npcReply": "考官一边皱眉忍受你的黄腔，一边在表单上打了个勾。“不仅记住了，还完成了极其恶心的加密处理。”",
          "scoreDelta": {
            "cha": 2,
            "int": 1
          },
          "mbtiDelta": {
            "N": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_bard": 3
          },
          "alignmentDelta": {
            "expression": 1
          },
          "triggerTags": [
            "黄腔记忆",
            "低俗加密"
          ],
          "outcomeTone": "合格",
          "branchHint": "天生的洗脑神曲制造机"
        },
        {
          "id": "C",
          "text": "试图用怀表反向催眠教官，声称现在已经是第二天早上了，试图让考官相信考核已经结束，大家都可以去睡觉了。",
          "npcReply": "教官不仅没被催眠，反而拿怀表敲碎了你的头。“由于试图诈骗长官，你喜提了三天禁闭站军姿。”",
          "scoreDelta": {
            "cha": 2,
            "wis": -2
          },
          "mbtiDelta": {
            "E": 1,
            "F": 1
          },
          "affinityDelta": {
            "guild_bard": 1,
            "guild_paladin": -1
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "反向催眠",
            "极限作死"
          ],
          "outcomeTone": "危险",
          "branchHint": "极其大胆但手法拙劣的骗子"
        },
        {
          "id": "D",
          "text": "直接站着睡着了，但在梦游状态下竟然用极其诡异的唱诗班语调把情报一字不落地背了出来，甚至还顺便预言了明天的菜谱。",
          "npcReply": "整个考场鸦雀无声。“他这到底是在背书，还是在请神上身？”",
          "scoreDelta": {
            "wis": 2,
            "cha": 1
          },
          "mbtiDelta": {
            "N": 1,
            "I": 1
          },
          "affinityDelta": {
            "guild_cleric": 2
          },
          "alignmentDelta": {
            "chaotic": 1
          },
          "triggerTags": [
            "梦游通灵",
            "潜意识过载"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "极其诡异的潜意识工作者"
        }
      ]
    },
    {
      "id": "human_physique_fear",
      "targetId": "guild_paladin",
      "title": "战栗的手指",
      "scene": "一头真正的深渊怯魔被关在笼子里。它虽然很弱，但散发出的地狱气息让凡人的生理本能产生极度的战栗。你握剑的手不受控制地发抖。",
      "prompt": "面对这种基因层面的恐惧，凡人该如何挥下第一剑？",
      "options": [
        {
          "id": "A",
          "text": "闭上眼睛，在心里疯狂默念骑士团的高薪待遇和退休金。用极其世俗的金钱欲望强行压制住了对深渊的恐惧，睁眼，挥剑！",
          "npcReply": "怯魔被你气势如虹的一剑斩首。“能把贪财化作斩妖除魔的动力，你也是个奇才。”",
          "scoreDelta": {
            "cha": 3,
            "wis": 1
          },
          "mbtiDelta": {
            "F": 1,
            "J": 1
          },
          "affinityDelta": {
            "guild_paladin": 3
          },
          "alignmentDelta": {
            "lawful": 2
          },
          "triggerTags": [
            "金钱驱动",
            "世俗狂热"
          ],
          "outcomeTone": "合格",
          "branchHint": "极其务实的赏金猎人型圣骑士"
        },
        {
          "id": "B",
          "text": "带上厚重的炼金护目镜，强行把怯魔看作是一堆由碳水化合物和魔力节点组成的物理模型，冷酷地切割其魔力中枢。",
          "npcReply": "极其精准的致命一击。“把恐惧隔离在解剖学之外，非常优秀的冷血技师潜质。”",
          "scoreDelta": {
            "int": 2,
            "dex": 2
          },
          "mbtiDelta": {
            "T": 1,
            "J": 1
          },
          "affinityDelta": {
            "guild_fighter": 2,
            "guild_artificer": 1
          },
          "alignmentDelta": {
            "control": 1
          },
          "triggerTags": [
            "解剖视角",
            "理性剥离"
          ],
          "outcomeTone": "合格",
          "branchHint": "兼具理智与致命效率的解剖狂"
        },
        {
          "id": "C",
          "text": "非但不害怕，反而极其兴奋地掏出一张契约，试图拉怯魔合伙开一家主打深渊风情的连锁鬼屋，并承诺给它三成干股。",
          "npcReply": "怯魔被你比恶魔还变态的资本家嘴脸吓到了，居然自己缩回了法阵里。“……你这属于恶人自有恶人磨。”",
          "scoreDelta": {
            "cha": 2,
            "wis": -2
          },
          "mbtiDelta": {
            "E": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_warlock": 2,
            "guild_paladin": -2
          },
          "alignmentDelta": {
            "self": 2
          },
          "triggerTags": [
            "跨界招商",
            "万物皆可资本"
          ],
          "outcomeTone": "危险",
          "branchHint": "毫无底线的黑心恶商"
        },
        {
          "id": "D",
          "text": "被吓得连滚带爬，但在慌乱中极其巧合地踩中了一块香蕉皮，整个人以极其荒诞的姿势飞起，一头撞晕了那只怯魔。",
          "npcReply": "怯魔被这招从天而降的铁头功直接砸晕了。“虽然毫无章法，但……这就是物理降魔？”",
          "scoreDelta": {
            "dex": 2,
            "str": -1
          },
          "mbtiDelta": {
            "E": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_bard": 1
          },
          "alignmentDelta": {
            "chaotic": 1
          },
          "triggerTags": [
            "香蕉皮奇袭",
            "铁头降魔"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "靠极端好运和滑稽进行物理输出"
        }
      ]
    }
  ],
  "endingTemplates": [
    {
      "endingId": "human_accepted_fighter",
      "endingType": "accepted",
      "title": "百战的凡铁",
      "verdictLine": "你没有魔法，没有利爪，但你用极其严苛的纪律和伤疤把自己锻造成了帝国最坚实的城墙。",
      "explanation": "黑铁训练厅接纳了你。他们看中的不是你的肌肉，而是你那种为了弥补寿命与体能劣势，愿意把每一个战术动作练到肌肉记忆的狠劲。在未来的战场上，精灵可能会因为高傲而死，矮人可能会因为固执而死，但你一定会是那个从尸体堆里爬出来、握着断剑带领幸存者回家的人。",
      "tableFunction": "在队伍中担任绝对的阵线核心，精通所有常规冷兵器，擅长在绝境中组织防线反击。",
      "playableFlaw": "满身的暗伤让你在阴雨天极其痛苦，且因为见过太多死亡，你对一切浪漫的英雄主义嗤之以鼻。",
      "nextHook": "军团准备让你去接手一个刚被半兽人打残的‘惩戒营’，那里全是刺头。你能把他们捏合成一支铁军吗？",
      "recommendedClass": [
        "guild_fighter"
      ],
      "tags": [
        "老兵不死",
        "阵线中坚",
        "凡人百战"
      ]
    },
    {
      "endingId": "human_accepted_bard",
      "endingType": "accepted",
      "title": "王座背后的阴影",
      "verdictLine": "你用短暂的生命看透了人性的贪婪与脆弱，并将其变成了你拨弄局势的琴弦。",
      "explanation": "银月诗学苑对你的社交手腕给予了最高评价。你完美展现了人类最可怕的天赋——极速的学习能力和毫无底线的共情伪装。你不仅是一个能唱出天籁之音的表演者，更是一个能用三言两语摧毁一个同盟的怪物。公会决定将你送往最凶险的异国外交前线。",
      "tableFunction": "极佳的情报贩子、外交官和诈骗大师。能在任何社交场合里找到突破口。",
      "playableFlaw": "因为说了太多谎言，你有时会迷失在自己编造的人设里，患有轻度的身份认知障碍。",
      "nextHook": "一位大贵族雇佣你去勾引敌国的摄政王，但你发现那位摄政王可能是一条伪装成人类的巨龙。",
      "recommendedClass": [
        "guild_bard"
      ],
      "tags": [
        "社交大师",
        "无影舌簧",
        "间谍网"
      ]
    },
    {
      "endingId": "human_accepted_artificer",
      "endingType": "accepted",
      "title": "钢铁的僭越",
      "verdictLine": "既然神明没有赐予人类魔法，那你就用齿轮和火药把神明从天上炸下来。",
      "explanation": "黄铜齿轮塔的大宗师亲自为你颁发了高阶技师执照。你对工程学的狂热甚至超越了对死亡的恐惧。你懂得如何用最廉价的生铁榨出最大的杀伤力，也懂得如何在复杂的魔导回路中找到物理的解法。在你的图纸里，人类的极限已经被重写了。",
      "tableFunction": "火力全开的后勤与输出保障，精通各种爆炸物、陷阱和载具维修。",
      "playableFlaw": "听力因为长期的爆炸测试严重受损，且总是忍不住想拆开队友的魔法装备看看内部结构。",
      "nextHook": "军方交给你一张来自古代遗迹的‘浮空城引擎’残片图纸，但实验它需要海量的危险资源。",
      "recommendedClass": [
        "guild_artificer"
      ],
      "tags": [
        "火药狂人",
        "机械飞升",
        "实用工程学"
      ]
    },
    {
      "endingId": "human_accepted_paladin",
      "endingType": "accepted",
      "title": "凡人的天平",
      "verdictLine": "你在泥沼中仰望星空。你的身体可能随时崩溃，但你的誓言重于泰山。",
      "explanation": "白银誓约庭接纳了你。大主教看着你伤痕累累的身体，看到了人类最宝贵的特质——在看透了世俗的污秽与生命的短暂后，依然愿意为了某种更高尚的理念去牺牲。你不是那种不知人间疾苦的光明圣徒，你是真正在黑暗中搏杀出来的铁血骑士。",
      "tableFunction": "队伍的绝对道德基石和前排堡垒。面对恐惧和邪恶时拥有惊人的抗性。",
      "playableFlaw": "过高的道德标准让你在面对‘必要的牺牲’时常常陷入极度的自我精神内耗。",
      "nextHook": "你被派去净化一座受到严重亡灵诅咒的村庄，但那里的镇长正是当年资助你长大的恩人。",
      "recommendedClass": [
        "guild_paladin"
      ],
      "tags": [
        "铁血圣徒",
        "誓言之盾",
        "道德基石"
      ]
    },
    {
      "endingId": "human_probation_fighter",
      "endingType": "probation",
      "title": "阵线的替补",
      "verdictLine": "你的意志还能凑合，但你的战术素养和肌肉力量还不足以让你站在第一排。",
      "explanation": "你通过了意志测试，但在极限体能和兵器熟练度上暴露了凡人的短板。公会暂时只能将你编入二线守备队。你需要更多的磨练，或者找到一种能掩盖你体能劣势的战斗风格，否则你活不过真正的冬天。",
      "tableFunction": "防御力合格的二线人员，适合打扫战场或看守补给线。",
      "playableFlaw": "极度渴望建功立业，偶尔会在没有命令的情况下冒进以试图证明自己。",
      "nextHook": "守备队突然遭遇了精锐暗夜精灵刺客的夜袭，这是你证明自己不是废物的绝佳（且致命的）机会。",
      "recommendedClass": [
        "guild_fighter"
      ],
      "tags": [
        "二线守备",
        "新兵蛋子",
        "渴望证明"
      ]
    },
    {
      "endingId": "human_probation_bard",
      "endingType": "probation",
      "title": "蹩脚的骗子",
      "verdictLine": "你的谎言太容易被识破，你的歌声也缺乏震撼灵魂的魔力。",
      "explanation": "你有一颗想在名利场里左右逢源的心，但你的演技还太生硬。那些活了几百年的贵族一眼就能看穿你伪装的从容。诗学苑决定先让你去外城区的贫民酒馆里收集最低级的情报，顺便练练你的脸皮厚度。",
      "tableFunction": "混迹市井的半吊子情报贩子，擅长打听三教九流的低级八卦。",
      "playableFlaw": "经常因为吹牛吹破天而被本地地痞追打。",
      "nextHook": "在一次普通的酒后吹嘘中，你意外被一个真正的地下黑帮老大当成了某位神秘大人物。",
      "recommendedClass": [
        "guild_bard"
      ],
      "tags": [
        "市井混混",
        "酒馆情报",
        "破绽百出"
      ]
    },
    {
      "endingId": "human_probation_artificer",
      "endingType": "probation",
      "title": "车间学徒",
      "verdictLine": "你对齿轮有热情，但你那毛手毛脚的习惯随时可能炸掉整个工坊。",
      "explanation": "你的动手能力勉强及格，但在严谨的工程逻辑上完全是个灾难。大宗师拒绝让你接触核心火药库，只允许你留在前院负责打磨生铁和清理废渣。在学会如何冷静地计算承重比例之前，你连一把劣质火铳都不许碰。",
      "tableFunction": "苦力型修理工，能搞定日常修理，但接触精密仪器必出故障。",
      "playableFlaw": "手贱。总是想用扳手去敲击一切看起来有问题的设备。",
      "nextHook": "你在清理废渣时，无意中拼凑出了一个会自己行走的危险废铁机器人。",
      "recommendedClass": [
        "guild_artificer"
      ],
      "tags": [
        "打杂学徒",
        "手残党",
        "工程隐患"
      ]
    },
    {
      "endingId": "human_probation_paladin",
      "endingType": "probation",
      "title": "迷惘的信徒",
      "verdictLine": "你背诵了所有的誓言，但你的眼睛里依然闪烁着对世俗金币的渴望。",
      "explanation": "誓约庭看穿了你的伪装。你也许并不坏，但你的信仰远未达到足以让你为了神明赴死的纯粹程度。你被安排成为了一名见习护教军，负责去偏远的小镇收缴什一税。大主教希望那里的苦难能帮你认清什么才是真正的圣光。",
      "tableFunction": "兼具一定战斗力与神职身份的基层执法者。",
      "playableFlaw": "在执行正义时极易因为对方的贿赂或求饶而产生严重的摇摆。",
      "nextHook": "偏远小镇的镇民不仅交不出税，还把你当成了拯救他们脱离吸血鬼领主的最后希望。",
      "recommendedClass": [
        "guild_paladin"
      ],
      "tags": [
        "世俗信仰",
        "基层护教军",
        "意志不坚"
      ]
    },
    {
      "endingId": "human_transferred_rogue",
      "endingType": "transferred",
      "title": "暗影的利刃",
      "verdictLine": "你在光明正大的战场上显得格格不入，但你那一击致命的狡猾完美契合了黑夜。",
      "explanation": "你极其出色的敏捷和冷酷的止损思维，让你在战士的方阵里显得像个异类。你没有那种愿意替身旁战友挡刀的荣誉感，但你非常清楚如何在敌人眨眼的瞬间抹开他的脖子。盗贼公会花重金从军方把你买走了。",
      "tableFunction": "队伍中的绝对物理刺客与陷阱大师，生存能力极强。",
      "playableFlaw": "极度缺乏团队信任感，睡觉时一只手永远握着匕首。",
      "nextHook": "你接到的第一个刺杀任务，目标竟然是你当年在战士营地的教官。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "rejectedClass": "guild_fighter",
      "tags": [
        "冷酷刺客",
        "战地逃兵",
        "致命效率"
      ]
    },
    {
      "endingId": "human_transferred_barbarian",
      "endingType": "transferred",
      "title": "失控的野兽",
      "verdictLine": "你的愤怒烧毁了你的理智，正规军的纪律束缚不了你这颗随时会爆炸的炸弹。",
      "explanation": "你的破坏欲和对疼痛的病态狂热让所有教官都感到恐惧。你不适合精密的战术配合，只适合被当作一件纯粹的凶器扔进敌人的密集阵型里。军方将你除名，但北方的野蛮人部落向你张开了双臂。",
      "tableFunction": "极其危险的前排绞肉机，能在濒死状态下爆发恐怖的破坏力。",
      "playableFlaw": "极易陷入狂暴，分不清敌我，且对任何形式的约束（包括精致的盔甲）感到烦躁。",
      "nextHook": "部落首领要求你在一场角斗中徒手撕碎一头冰霜巨熊来证明你的狂化天赋。",
      "recommendedClass": [
        "guild_barbarian"
      ],
      "rejectedClass": "guild_paladin",
      "tags": [
        "狂化凡人",
        "理智崩塌",
        "纯粹暴力"
      ]
    },
    {
      "endingId": "human_transferred_wizard",
      "endingType": "transferred",
      "title": "奥术的盗火者",
      "verdictLine": "你那可怕的逻辑推演能力，甚至让那些高傲的精灵法师都感到了一丝威胁。",
      "explanation": "在工匠塔的考核中，你展现出了对魔导回路线路的惊人直觉。你不再满足于用齿轮去模拟魔法，你想要直接触碰那禁忌的根源。高阶法师议会破例接纳了你这个没有任何血脉天赋的凡人，因为你的计算能力足以让你成为一个极其纯粹的奥术学者。",
      "tableFunction": "依靠严密逻辑施法的后排法师，精通卷轴制作和阵法破解。",
      "playableFlaw": "鄙视一切非逻辑的事物，严重缺乏同理心，且因为过度用脑经常流鼻血。",
      "nextHook": "你推演出了一个古老的龙语禁咒，但施展它需要极高的魔力储备，你把目光投向了公会的金库。",
      "recommendedClass": [
        "guild_wizard"
      ],
      "rejectedClass": "guild_artificer",
      "tags": [
        "唯物法师",
        "逻辑施法",
        "天赋突破"
      ]
    },
    {
      "endingId": "human_transferred_cleric",
      "endingType": "transferred",
      "title": "苦修的医者",
      "verdictLine": "比起用剑斩杀邪恶，你更愿意在尸山血海中拯救那些哀嚎的凡人。",
      "explanation": "在圣武士的残酷选拔中，你展现出了极其罕见的悲悯之心。你不愿意为了所谓的绝对正义去牺牲无辜者，这让你无法握紧那把裁决之剑。但神明看到了你的温柔。教廷将你转入了牧师序列，让你去前线医院担任治愈者。",
      "tableFunction": "极具奉献精神的团队辅助，能在绝境中提供最可靠的治疗与精神支持。",
      "playableFlaw": "过度透支自己的生命力去治愈他人，且无法对哪怕是敌人的重伤员痛下杀手。",
      "nextHook": "前线医院被敌军包围，你的神术耗尽，必须拿起身边的一把锈剑保护身后的伤员。",
      "recommendedClass": [
        "guild_cleric"
      ],
      "rejectedClass": "guild_paladin",
      "tags": [
        "悲悯之心",
        "战地医生",
        "拒绝杀戮"
      ]
    },
    {
      "endingId": "human_blacklisted_coward",
      "endingType": "blacklisted",
      "title": "可耻的逃兵",
      "verdictLine": "你用一切卑劣的手段活了下来，但你在人类社会中已经社会性死亡了。",
      "explanation": "在极其危险的考核中，你因为恐慌不仅临阵脱逃，甚至还出卖了你的队友。你保住了这条凡人的小命，但你的名字被钉在了所有雇佣兵公会的耻辱柱上。你只能像只老鼠一样在下水道和黑市里苟延残喘。",
      "tableFunction": "毫无底线、被逼入绝境的底层亡命徒。",
      "playableFlaw": "极度神经质，任何风吹草动都会让你准备逃跑，被正规军看到会被直接通缉。",
      "nextHook": "你曾经出卖过的队友居然没有死，他变成了一个极其恐怖的亡灵骑士回来找你复仇了。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "临阵脱逃",
        "耻辱柱",
        "底层老鼠"
      ]
    },
    {
      "endingId": "human_blacklisted_traitor",
      "endingType": "blacklisted",
      "title": "金币的奴隶",
      "verdictLine": "你把人类逐利的本性发挥到了极致，甚至试图把整个要塞的防区图卖给半兽人。",
      "explanation": "在你的眼里，无论是神圣的誓言还是袍泽之情，都只是可以被估价的商品。你极端的贪婪最终让你越过了红线。你在试图向敌军出售军事情报时被当场抓获。你越狱了，但现在你的赏金比一头龙还高。",
      "tableFunction": "极度危险的情报贩子和双面间谍，极度贪婪但也极度富有。",
      "playableFlaw": "没有人敢信任你，你的队友随时可能为了那笔巨额赏金在半夜割断你的喉咙。",
      "nextHook": "你逃入了一个深渊缝隙，一个真正的大恶魔对你的交易手腕产生了兴趣。",
      "recommendedClass": [
        "guild_warlock"
      ],
      "tags": [
        "极度贪婪",
        "叛国者",
        "双面间谍"
      ]
    },
    {
      "endingId": "human_blacklisted_mad_scientist",
      "endingType": "blacklisted",
      "title": "禁忌的异端",
      "verdictLine": "你为了打破人类的体质极限，进行了极其疯狂的人体炼金实验。",
      "explanation": "你对力量的渴望扭曲了你的理智。工匠塔发现你在暗中解剖异族尸体，甚至试图将魔兽的器官植入自己的身体。这种疯狂的行径让大宗师直接下达了格杀勿论的指令。你带着半成品的实验记录逃入了荒野，成为了一个被全大陆通缉的生化狂人。",
      "tableFunction": "掌握着极度危险但极其强大的人体改造技术的异端医师。",
      "playableFlaw": "你的身体因为粗糙的改造常年散发着异味，且必须定期服用危险的镇定剂来压制排异反应。",
      "nextHook": "你的身体改造出现了一个极其致命的排斥反应，你必须潜入精灵首都盗取一株世界树的树叶来续命。",
      "recommendedClass": [
        "guild_artificer"
      ],
      "tags": [
        "生化狂人",
        "违禁实验",
        "异端改造"
      ]
    },
    {
      "endingId": "human_blacklisted_fanatic",
      "endingType": "blacklisted",
      "title": "血腥的狂信徒",
      "verdictLine": "你把信仰变成了满足自己屠杀欲望的屠刀，你比异教徒还要可怕。",
      "explanation": "你对法典的理解偏激到了令人发指的程度。在一次边境巡逻中，你仅仅因为村民们没有按时缴纳什一税，就以‘异端’之名屠戮了半个村子。教廷剥夺了你的光耀之力并对你下达了绝罚。但你依然坚信自己才是真理的执行者，成了一个游荡在废土上的血腥审判官。",
      "tableFunction": "残暴的私刑执行者，对‘异端’有着令人毛骨悚然的执着和杀伤力。",
      "playableFlaw": "无论走到哪里都会强行用极其残酷的私刑去惩罚那些你认为犯了错的平民。",
      "nextHook": "你遇到了一位真正的、堕落的堕天使，他向你展示了什么才是‘绝对的审判’。",
      "recommendedClass": [
        "guild_fighter"
      ],
      "tags": [
        "极度偏激",
        "血腥私刑",
        "绝罚者"
      ]
    },
    {
      "endingId": "human_absurd_mascot",
      "endingType": "absurdAccepted",
      "title": "要塞吉祥物",
      "verdictLine": "你不仅没死在战场上，还靠着极其离谱的耍宝能力成了全军的开心果。",
      "explanation": "你的战术素养一塌糊涂，你的体能更是烂得像一滩泥。但你在面对死亡威胁时那种极其荒诞的幽默感（比如在巨魔面前跳踢踏舞），奇迹般地缓解了要塞里那种令人窒息的战前抑郁症。将军决定把你留下，专门负责在营地里搞笑。",
      "tableFunction": "队伍的纯粹气氛调节者，能在极度高压的环境下提供极其玄学的士气加成。",
      "playableFlaw": "在任何严肃场合都会忍不住说烂笑话，严重破坏气氛。",
      "nextHook": "将军决定派你去和敌方那位脾气极其暴躁的兽人督军进行谈判，因为他觉得你们俩可能会有共同语言（或者你会直接被吃掉）。",
      "recommendedClass": [
        "guild_bard"
      ],
      "tags": [
        "玄学搞笑",
        "士气挂件",
        "奇葩生存"
      ]
    },
    {
      "endingId": "human_absurd_lucky_fool",
      "endingType": "absurdAccepted",
      "title": "命运的私生子",
      "verdictLine": "你把每一道考核题都搞砸了，但命运女神显然喝醉了酒，硬生生把你推过了及格线。",
      "explanation": "你在体能测试中摔倒，却意外躲过了流弹；你在乱扔火药时，却瞎猫碰死耗子炸塌了敌人的隧道。你的通关报告让整个评审委员会都陷入了长久的沉默。最后他们只能归结于‘该死的凡人运气’，勉强给了你一个编制。",
      "tableFunction": "依靠极其离谱的运气进行操作的危险分子。你的技能随时可能搞死自己，但也可能创造奇迹。",
      "playableFlaw": "你对自己的实力有着极其盲目的自信，完全没有意识到自己只是运气好。",
      "nextHook": "你的好运气似乎用光了。你今天出门踩到了狗屎，并且喝凉水差点塞牙，而今晚你还要去执行一个S级的潜入任务。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "狗屎运",
        "瞎猫死耗子",
        "强行通关"
      ]
    },
    {
      "endingId": "human_absurd_bureaucrat",
      "endingType": "absurdAccepted",
      "title": "文山会海的暴君",
      "verdictLine": "你用极其繁琐的文书工作和报告单，硬生生把一次充满热血的考核变成了一场行政灾难。",
      "explanation": "面对冲锋的怪物，你的第一反应不是拔剑，而是向教官提交了一份《关于训练场怪物投放不符合安全生产规范的抗议书》。你用无数的条令、表格和免责声明把整个公会的行政系统搞得接近瘫痪。为了让你闭嘴，他们决定直接给你发放执照，并把你发配到最远的边疆。",
      "tableFunction": "精通各种条文漏洞，能用规则和文书工作把反派恶心到吐血的行政法师。",
      "playableFlaw": "做任何决定之前都必须先写一份冗长的风险评估报告，极其拖拉。",
      "nextHook": "一个远古巫妖醒来了，它要求你们缴纳长达五百年的土地租赁费。现在轮到你出马用法律条款和它对线了。",
      "recommendedClass": [
        "guild_wizard"
      ],
      "tags": [
        "规则钻营",
        "行政折磨",
        "表格魔法"
      ]
    },
    {
      "endingId": "human_absurd_conman",
      "endingType": "absurdAccepted",
      "title": "史诗级忽悠",
      "verdictLine": "你用空手套白狼的手段，不仅通过了考核，甚至还让教官倒欠了你三百金币。",
      "explanation": "你身上没有任何天赋，但你那张嘴简直就是被谎言之神亲吻过。你不仅成功忽悠考官相信你隐藏了某种毁天灭地的实力（所以不用考核），还在这场谈话中成功向他推销了一份‘公会精英养老保险’。当你拿着执照走出大门时，考官甚至还在感激你。",
      "tableFunction": "登峰造极的骗术大师，能用纯粹的谎言改变剧情走向。",
      "playableFlaw": "只要看到别人手里有钱，就忍不住想编个理由把它骗过来，哪怕对方是头巨龙。",
      "nextHook": "你卖给教官的那份保险出了大问题。他提着一把大剑，带着执法队满世界在找你。",
      "recommendedClass": [
        "guild_bard"
      ],
      "tags": [
        "极致传销",
        "空手套白狼",
        "骗过系统"
      ]
    }
  ],
  "trialSets": {
    "guild_fighter": [
      {
        "id": "human_fighter_weapons",
        "targetId": "guild_fighter",
        "title": "兵器之海",
        "scene": "你面前的武器架上摆放着数百种长短不一的冷兵器。教头将一头装甲厚重的训练用陆行蜥蜴放出牢笼：‘我们人类没有尖牙和利爪，所以我们必须精通工具。选一把武器活下来。’",
        "prompt": "面对冲过来的披甲巨兽，你的选择是：",
        "options": [
          {
            "id": "A",
            "text": "拔起一把最长的重型长戟，利用杠杆原理死死卡住蜥蜴的下巴，然后整个人挂在长戟末端，用体重把它强行翘翻！",
            "npcReply": "完美的阿基米德式绞杀。“这才是人类的战斗方式：用工具放大力量，用脑子弥补体重。”",
            "scoreDelta": {
              "str": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "杠杆原理",
              "重型长戟"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其精通物理学的重装步兵",
            "targetId": "guild_fighter"
          },
          {
            "id": "B",
            "text": "抓起一把轻巧的细剑，放弃所有格挡，像泥鳅一样滑入蜥蜴的侧翼，极其缺德地专门往它的眼睛和排泄孔里捅。",
            "npcReply": "你精准地摧毁了巨兽的尊严。“灵活且下流，但你最好祈祷它没有愤怒到失去理智。”",
            "scoreDelta": {
              "dex": 3,
              "wis": -1
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_fighter": 1,
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "risk": 1
            },
            "triggerTags": [
              "弱点打击",
              "极其下流"
            ],
            "outcomeTone": "偏离",
            "branchHint": "毫无武德的街头剑客",
            "targetId": "guild_fighter"
          },
          {
            "id": "C",
            "text": "对武器架不屑一顾，直接从兜里掏出一把从食堂偷来的辣椒面，大吼着全撒进了蜥蜴的眼睛里。",
            "npcReply": "蜥蜴发疯般地撞碎了笼子，你也差点被踩成肉泥。“你以为这是街头斗殴吗？你这白痴！”",
            "scoreDelta": {
              "str": 1,
              "int": -2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_barbarian": 2,
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "辣椒面",
              "街头战神"
            ],
            "outcomeTone": "危险",
            "branchHint": "满脑子损招的市井无赖",
            "targetId": "guild_fighter"
          },
          {
            "id": "D",
            "text": "直接抓起武器架本身，把它当成一个巨大的带刺拒马狠狠砸向蜥蜴，然后躲在碎木头后面大喊：‘我选这个最沉的！’",
            "npcReply": "蜥蜴被横七竖八的武器彻底绊倒了。“……算你勉强及格，以后武器破损费从你工资里扣。”",
            "scoreDelta": {
              "int": 2,
              "str": -1
            },
            "mbtiDelta": {
              "P": 1,
              "N": 1
            },
            "affinityDelta": {
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "场景杀",
              "武器架拒马"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "用极其费钱的方式解决问题的拆迁办",
            "targetId": "guild_fighter"
          }
        ]
      },
      {
        "id": "human_fighter_shield_wall",
        "targetId": "guild_fighter",
        "title": "盾墙的缝隙",
        "scene": "在一场模拟阵地战中，你所在的步兵方阵正承受着半兽人狂战士的疯狂冲击。你左侧的新兵因为恐惧，举盾的手臂开始剧烈颤抖，眼看防线就要被撕开一个致命的缺口。",
        "prompt": "在生死存亡的一线间，你的反应是：",
        "options": [
          {
            "id": "A",
            "text": "一脚狠踹新兵的膝盖窝让他跪下躲过劈砍，同时把自己的大盾横架在他的头顶，怒吼：‘蹲稳了当我的垫脚石！’",
            "npcReply": "缺口不仅被堵住，你还利用高度优势反杀了半兽人。“虽然手段粗暴，但阵型完好无损。”",
            "scoreDelta": {
              "con": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "F": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "good": 1,
              "order": 1
            },
            "triggerTags": [
              "战术踢膝",
              "双层盾墙"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其粗暴但可靠的阵线大哥",
            "targetId": "guild_fighter"
          },
          {
            "id": "B",
            "text": "冷酷地判断新兵必将崩溃，立刻把他往外猛推一把当做诱饵，在半兽人挥斧砍向新兵的瞬间，将长矛刺入半兽人的心脏。",
            "npcReply": "你杀死了敌人，但新兵受了重伤。考官在记录本上写下：“战术执行完美，但手段极其冷血。”",
            "scoreDelta": {
              "int": 2,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_fighter": 2
            },
            "alignmentDelta": {
              "self": 1
            },
            "triggerTags": [
              "卖队友",
              "冷血刺杀"
            ],
            "outcomeTone": "偏离",
            "branchHint": "具有极其无情的黑心指挥官潜质",
            "targetId": "guild_fighter"
          },
          {
            "id": "C",
            "text": "你觉得盾墙太保守了，于是极其作死地扔掉盾牌，试图对半兽人发动一记极具观赏性的‘回旋飞踢’。",
            "npcReply": "你被半兽人像打棒球一样一棒子扇飞了。“你想当英雄，但你只是个极度愚蠢的空中靶子。”",
            "scoreDelta": {
              "dex": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "P": 1,
              "E": -1
            },
            "affinityDelta": {
              "guild_fighter": -2,
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "回旋飞踢",
              "空中靶子"
            ],
            "outcomeTone": "危险",
            "branchHint": "极易导致军事法庭审判的作秀狂",
            "targetId": "guild_fighter"
          },
          {
            "id": "D",
            "text": "突然用盾牌猛砸新兵的头盔，用比半兽人还要可怕十倍的咆哮声怒骂他昨晚欠你酒钱不还，硬生生把他吓得不敢后退半步。",
            "npcReply": "新兵哭着扛住了冲击，甚至比之前还要用力。“……这也是一种领导力，虽然方法非常市井。”",
            "scoreDelta": {
              "cha": 3,
              "wis": -1
            },
            "mbtiDelta": {
              "E": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_bard": 1,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "讨债战吼",
              "反向士气"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "靠极其私人的恩怨来维持军纪",
            "targetId": "guild_fighter"
          }
        ]
      },
      {
        "id": "human_fighter_adaptability",
        "targetId": "guild_fighter",
        "title": "未知的怪物",
        "scene": "在地城探索中，小队遭遇了一种从未见过的异界史莱姆。所有的物理劈砍都会被它黏稠的身体弹开，甚至连武器都被腐蚀了半截。",
        "prompt": "没有法师支援，手中武器失效，作为战士你将如何应对？",
        "options": [
          {
            "id": "A",
            "text": "立刻抛弃断剑，从背包里翻出极其大量的面粉，像揉面团一样疯狂砸向史莱姆，试图把它强行揉成一个无法动弹的死面疙瘩！",
            "npcReply": "史莱姆被面粉吸干了水分，变成了一坨僵硬的雕塑。“完美的厨房战术！优秀的战士永远不会拘泥于武器的形态。”",
            "scoreDelta": {
              "int": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "面团战术",
              "就地取材"
            ],
            "outcomeTone": "合格",
            "branchHint": "极强的环境适应性与脑洞",
            "targetId": "guild_fighter"
          },
          {
            "id": "B",
            "text": "敏锐地发现史莱姆在移动时会避开地上的石灰粉，立刻命令所有人打碎墙上的石灰墙皮，利用环境将其逼入死角。",
            "npcReply": "你们不费一兵一卒就困住了怪物。考官赞叹：“这是属于游侠和老练猎手才有的环境洞察力。”",
            "scoreDelta": {
              "wis": 3,
              "str": -1
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_ranger": 2,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "环境洞察",
              "石灰封印"
            ],
            "outcomeTone": "偏离",
            "branchHint": "展现出优秀的战地观察家天赋",
            "targetId": "guild_fighter"
          },
          {
            "id": "C",
            "text": "觉得史莱姆晶莹剔透的很像果冻，竟然突发奇想，掏出一根巨大的吸管，试图把它当成饮料喝掉。",
            "npcReply": "你的嘴唇瞬间被强酸肿成了香肠。“……我很难评价一个在战场上试吃怪物的战士脑子里在想什么。”",
            "scoreDelta": {
              "con": 1,
              "int": -2
            },
            "mbtiDelta": {
              "F": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "试吃怪物",
              "吸管战士"
            ],
            "outcomeTone": "危险",
            "branchHint": "因过度贪吃导致丧命的典型反面教材",
            "targetId": "guild_fighter"
          },
          {
            "id": "D",
            "text": "大呼小叫地把身边那个体型庞大且非常耐腐蚀的矮人队友直接抱起来，像挥舞攻城锤一样把他当成抹布砸向史莱姆。",
            "npcReply": "史莱姆被砸扁了，但矮人发誓等他洗干净身上的黏液后一定要砍了你。“非常实用……且非常欠揍的战术。”",
            "scoreDelta": {
              "str": 2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "矮人攻城锤",
              "友军武器化"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其恶搞的团队“配合”",
            "targetId": "guild_fighter"
          }
        ]
      },
      {
        "id": "human_fighter_urban_combat",
        "targetId": "guild_fighter",
        "title": "巷战的法则",
        "scene": "在一次镇压叛乱的城市巷战中，叛军躲在错综复杂的民居屋顶上向下射击。厚重的铠甲让你在爬墙时举步维艰，而正规的步兵阵型在小巷中完全施展不开。",
        "prompt": "面对这种极其憋屈的非对称战局，你的对策是：",
        "options": [
          {
            "id": "A",
            "text": "立刻抛弃沉重的塔盾，卸下全院住户的门板作为简易顶棚掩体，组成罗马龟甲阵，一路稳扎稳打硬推过去。",
            "npcReply": "奇袭非常成功。“抛弃死板阵型，利用人类城建的建材。这是老兵才有的巷战嗅觉。”",
            "scoreDelta": {
              "dex": 2,
              "int": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "拆门板",
              "罗马龟甲阵"
            ],
            "outcomeTone": "合格",
            "branchHint": "完美适应城市复杂地形的战士",
            "targetId": "guild_fighter"
          },
          {
            "id": "B",
            "text": "冷静地计算出木质房屋的承重结构，直接用战锤砸碎了那几栋民居的承重柱，让叛军连同屋顶一起塌下来。",
            "npcReply": "叛军被废墟掩埋。“极其残暴但高效的工程学应用……不过这笔赔偿金得从你工资扣。”",
            "scoreDelta": {
              "int": 2,
              "str": 1
            },
            "mbtiDelta": {
              "T": 1,
              "N": 1
            },
            "affinityDelta": {
              "guild_artificer": 2,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "物理拆迁",
              "结构破坏"
            ],
            "outcomeTone": "偏离",
            "branchHint": "工匠式的暴力拆迁美学",
            "targetId": "guild_fighter"
          },
          {
            "id": "C",
            "text": "觉得叛军太嚣张，干脆去黑市弄了一张极其不稳定的‘狂暴哥布林传送卷轴’扔到屋顶，结果哥布林全传到了自己的阵地里。",
            "npcReply": "你用一次极其弱智的战术操作把自己的小队给团灭了。“你的战术指挥比叛军还要致命。”",
            "scoreDelta": {
              "cha": -2,
              "wis": -1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_fighter": -2,
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "chaotic": 2,
              "self": 2
            },
            "triggerTags": [
              "友军杀手",
              "胡乱施法"
            ],
            "outcomeTone": "危险",
            "branchHint": "碰了不该碰的魔法道具的白痴",
            "targetId": "guild_fighter"
          },
          {
            "id": "D",
            "text": "在小巷里疯狂敲击两面盾牌，并用最大的嗓门大骂叛军首领的八代祖宗，甚至详细编造了首领和他大舅子的狗血绯闻，试图把他们气得跳下来单挑。",
            "npcReply": "叛军首领居然真的被你气得失去了理智，破口大骂着跳下来和你肉搏。“你这张嘴比你的剑还要致命十倍。”",
            "scoreDelta": {
              "cha": 3,
              "wis": -1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 2,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "祖安战吼",
              "绯闻嘲讽"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "依靠逆天嘴炮输出的奇葩破局",
            "targetId": "guild_fighter"
          }
        ]
      },
      {
        "id": "human_fighter_commander",
        "targetId": "guild_fighter",
        "title": "死亡的刻度",
        "scene": "你被临时提拔为一个小队的指挥官，负责防守一座桥梁。桥的对岸是数倍于己的怪物大军。如果要保证主力部队撤退，你们这支小队必定全军覆没。",
        "prompt": "当第一只巨兽踏上桥面时，你作为指挥官下达的最后一道命令是：",
        "options": [
          {
            "id": "A",
            "text": "一剑斩断退路的桥梁绳索：‘今天没人能活着回去！要么我们死在桥上，要么怪物从我们尸体上跨过去！结阵！’",
            "npcReply": "绝望转化为极其恐怖的战斗力。你们硬生生拖住了一小时。“破釜沉舟，极其悲壮的指挥官。”",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "E": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_fighter": 3,
              "guild_paladin": 1
            },
            "alignmentDelta": {
              "good": 2,
              "lawful": 1
            },
            "triggerTags": [
              "破釜沉舟",
              "斩断退路"
            ],
            "outcomeTone": "合格",
            "branchHint": "完美的牺牲与铁血领袖气质",
            "targetId": "guild_fighter"
          },
          {
            "id": "B",
            "text": "冷静地在桥梁承重柱上布置好所有的黑火药，命令小队分批撤离，自己留到最后一刻按下起爆装置，和桥梁同归于尽。",
            "npcReply": "桥梁被炸毁，怪物大军被迫绕路。“极度理性的战损计算，用最小的代价换取了最大的战略纵深。”",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_artificer": 2,
              "guild_fighter": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "爆破断后",
              "理性止损"
            ],
            "outcomeTone": "偏离",
            "branchHint": "理智到近乎冷酷的战术决断",
            "targetId": "guild_fighter"
          },
          {
            "id": "C",
            "text": "极其夸张地向小队宣称，国王已经承诺给坚守者每人一座金矿。结果谎言瞬间被识破，小队为了抢夺仅剩的一条逃生小船自己先打起来了。",
            "npcReply": "你用一个极其弱智的谎言引发了哗变。“画饼也是需要基本逻辑的，白痴。”",
            "scoreDelta": {
              "dex": 1,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_fighter": -2,
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "self": 2,
              "chaotic": 1
            },
            "triggerTags": [
              "画饼翻车",
              "内讧哗变"
            ],
            "outcomeTone": "危险",
            "branchHint": "愚蠢至极的传销式指挥官",
            "targetId": "guild_fighter"
          },
          {
            "id": "D",
            "text": "让小队脱下盔甲绑在草人上伪装成大军，然后在桥上撒满极其密集的图钉、滚珠和发臭的鲱鱼罐头，祈祷能恶心死它们。",
            "npcReply": "巨兽们在桥上滑得人仰马翻且被臭气熏得连连干呕，场面一度极其滑稽。“……防守学上的生化奇迹。”",
            "scoreDelta": {
              "cha": 2,
              "int": 1
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": 1,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "生化地雷",
              "图钉滚珠"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其无厘头的战地拖延法",
            "targetId": "guild_fighter"
          }
        ]
      },
      {
        "id": "human_fighter_endurance",
        "targetId": "guild_fighter",
        "title": "泥沼中的意志",
        "scene": "在一次大雨滂沱的泥沼遭遇战中，你被一支带毒的冷箭射穿了肩膀。半兽人的军队正在逼近，泥水在不断带走你的体温，视线开始变得模糊。",
        "prompt": "在这个凡人躯体即将停摆的绝境中，支撑你站起来的最后动力是：",
        "options": [
          {
            "id": "A",
            "text": "把沾满泥巴的军团徽记死死咬在嘴里。老子的名字是要刻在军团英雄纪念碑上的，绝不能像条野狗一样烂在泥里！",
            "npcReply": "强烈的荣誉感让你强行战胜了毒素的麻痹。“这才是人类，用精神的狂热超越肉体的极限。”",
            "scoreDelta": {
              "con": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "J": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "名垂青史",
              "荣誉续命"
            ],
            "outcomeTone": "合格",
            "branchHint": "拥有极强荣誉感的正统老兵",
            "targetId": "guild_fighter"
          },
          {
            "id": "B",
            "text": "满脑子想着还没花完的那袋金币，以及酒馆里答应今晚要等我的那个舞娘。妈的，老子还没活够呢！",
            "npcReply": "极其庸俗但极其有效的求生欲让你连滚带爬地躲过了追杀。“非常务实的街头生存哲学。”",
            "scoreDelta": {
              "dex": 2,
              "wis": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 2,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "世俗欲望",
              "顽强苟命"
            ],
            "outcomeTone": "偏离",
            "branchHint": "动机非常接地气的市井佣兵",
            "targetId": "guild_fighter"
          },
          {
            "id": "C",
            "text": "在毒素发作前，你觉得不能死得太没面子，于是极其艰难地用最后一口气给自己摆了一个极其嚣张的“竖中指”姿势才咽气。",
            "npcReply": "收尸的战友看到你的遗体陷入了长久的沉默。“……死了都要维持人设的硬核狠人。”",
            "scoreDelta": {
              "str": 2,
              "con": -2
            },
            "mbtiDelta": {
              "F": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "chaotic": 2,
              "risk": 1
            },
            "triggerTags": [
              "誓死装逼",
              "中指遗像"
            ],
            "outcomeTone": "危险",
            "branchHint": "死要面子活受罪的戏精",
            "targetId": "guild_fighter"
          },
          {
            "id": "D",
            "text": "因为太痛太冷，干脆放弃挣扎，直接在泥水里开始仰泳，并大声唱起跑调的童谣，试图让半兽人以为你是个疯子而放过你。",
            "npcReply": "半兽人们面面相觑，觉得这泥水里的生物可能有某种邪恶诅咒，竟然真的绕开了你。“……这也行？”",
            "scoreDelta": {
              "cha": 2,
              "wis": -1
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "泥沼仰泳",
              "装疯卖傻"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "依靠令人智熄的操作苟住小命",
            "targetId": "guild_fighter"
          }
        ]
      },
      {
        "id": "human_fighter_final_proof",
        "targetId": "guild_fighter",
        "title": "凡躯之锋",
        "scene": "考核的最后一关，高阶教官将一面满是剑痕和血迹的沉重鸢盾扔到你面前：‘人类是所有种族中最容易死在第一年的。告诉我，你凭什么能握住这面盾牌直到退役？’",
        "prompt": "面对教官的灵魂拷问，你的最终回答是：",
        "options": [
          {
            "id": "A",
            "text": "单膝跪地，双手稳稳举起鸢盾：‘正因为生命短暂，我们才懂得何为必死之地的防线。我不会退，直到这面盾牌和我一起碎裂。’",
            "npcReply": "教官满意地点头，将属于黑铁训练厅的徽章别在你的胸前：“欢迎加入，铁壁兄弟。”",
            "scoreDelta": {
              "con": 2,
              "wis": 1
            },
            "mbtiDelta": {
              "J": 1,
              "S": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "lawful": 2
            },
            "triggerTags": [
              "沉重宣誓",
              "人盾合一"
            ],
            "outcomeTone": "合格",
            "branchHint": "完美契合战士精神的宣誓",
            "targetId": "guild_fighter"
          },
          {
            "id": "B",
            "text": "一脚踢开那面破盾：‘防守是留给弱者的。只要我能在敌人出刀前砍下他的脑袋，我就不需要这种沉重的累赘！’",
            "npcReply": "教官微微皱眉，但承认了你的杀气：“极致的进攻论。你去突击营会比在防线待着更有用。”",
            "scoreDelta": {
              "str": 3,
              "wis": -1
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_barbarian": 2,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "拒绝防御",
              "极致狂战"
            ],
            "outcomeTone": "偏离",
            "branchHint": "更适合作为撕裂防线的狂战",
            "targetId": "guild_fighter"
          },
          {
            "id": "C",
            "text": "冷笑着拔出匕首在盾牌上刻下自己的名字：‘只要薪水给得足够多，我甚至能帮你挡下龙息。没钱，这盾牌我就卖废铁。’",
            "npcReply": "教官脸色铁青：“极度纯粹的雇佣兵逻辑。公会留不下你这种唯利是图的混蛋。”",
            "scoreDelta": {
              "cha": 2,
              "str": 1
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": -2,
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "唯金币论",
              "雇佣兵本色"
            ],
            "outcomeTone": "危险",
            "branchHint": "毫无忠诚可言的纯粹雇佣兵",
            "targetId": "guild_fighter"
          },
          {
            "id": "D",
            "text": "把盾牌翻过来，在上面敲击出一套节奏感极强的鼓点：‘因为这玩意儿翻过来就是个绝佳的炒锅和乐器！谁能在酒馆里抵挡一个会打碟的战士？’",
            "npcReply": "教官痛苦地捂住额头：“你是怎么混进战士考核的？滚去隔壁的诗学苑吧！”",
            "scoreDelta": {
              "cha": 3,
              "int": -1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": 3,
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "expression": 2
            },
            "triggerTags": [
              "盾牌打碟",
              "战地厨子"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其离谱的跨界整活行为",
            "targetId": "guild_fighter"
          }
        ]
      }
    ],
    "guild_bard": [
      {
        "id": "human_bard_disguise",
        "targetId": "guild_bard",
        "title": "千面之鳞",
        "scene": "情报总管将你带到一面巨大的镜子前：‘精灵靠法术伪装，但人类能单凭演技混进敌营。今晚你要去参加一场黑市头目的极道晚宴，并偷出账本。’",
        "prompt": "面对这极其危险的社交场合，你会选择扮演什么角色？",
        "options": [
          {
            "id": "A",
            "text": "扮演一个破产、走投无路但极其谄媚的落魄贵族，用满嘴浮夸的辞藻和恰到好处的自卑感混入核心圈子，主动帮头目倒酒。",
            "npcReply": "你完美地放下了所有的尊严，毫无破绽。“优秀的间谍必须懂得如何揉碎自己的自尊。”",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "N": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "放弃尊严",
              "落魄贵族"
            ],
            "outcomeTone": "合格",
            "branchHint": "拥有极佳的社会伪装天赋",
            "targetId": "guild_bard"
          },
          {
            "id": "B",
            "text": "扮演一个沉默寡言、带着巨大兜帽的异国算命瞎子。利用自己之前背下的几条无关紧要的黑市传闻，精准预言了头目的晚间行程来装神弄鬼。",
            "npcReply": "你成功骗过了头目，甚至还拿走了一大笔算命钱。“把情报学和心理学结合得十分完美。”",
            "scoreDelta": {
              "int": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": 2,
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "expression": 1
            },
            "triggerTags": [
              "装神弄鬼",
              "情报算命"
            ],
            "outcomeTone": "偏离",
            "branchHint": "带有一丝骗子和神棍的色彩",
            "targetId": "guild_bard"
          },
          {
            "id": "C",
            "text": "你极其自信地走进去，然后扯开嗓子开始唱一首极其极其难听的自编民谣，试图用精神污染让所有帮派成员痛苦倒地。",
            "npcReply": "你被愤怒的黑帮成员套上麻袋打了一顿。“你高估了你的歌声，也低估了黑帮的耐受力。”",
            "scoreDelta": {
              "cha": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": -1,
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "risk": 2,
              "self": 1
            },
            "triggerTags": [
              "精神污染",
              "极限作死"
            ],
            "outcomeTone": "危险",
            "branchHint": "对自己的艺术有着致命误解",
            "targetId": "guild_bard"
          },
          {
            "id": "D",
            "text": "穿上一套极其浮夸的粉色羽毛装，扮演晚宴上负责调节气氛的滑稽小丑，整晚都在用极其下流的笑话疯狂抢戏，甚至跑去和头目抢肉吃。",
            "npcReply": "你成功吸引了所有人的注意力，但由于你表演得太卖力，你连靠近保险箱的时间都没有。“本末倒置的戏精！”",
            "scoreDelta": {
              "cha": 3,
              "int": -1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "expression": 2
            },
            "triggerTags": [
              "哗众取宠",
              "入戏太深"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "太过沉迷于扮演而忘记了任务",
            "targetId": "guild_bard"
          }
        ]
      },
      {
        "id": "human_bard_interrogation",
        "targetId": "guild_bard",
        "title": "舌尖上的审讯",
        "scene": "一名被俘虏的邪教高层拒绝吐露任何情报。圣武士的逼供毫无作用，法师的读心术也被其脑内的防护结界弹开。轮到你上场了。",
        "prompt": "没有魔法和酷刑，你要如何用凡人的语言撬开他紧闭的嘴巴？",
        "options": [
          {
            "id": "A",
            "text": "仔细观察他的微表情，用极其温柔的语气，慢慢虚构出一个关于他女儿被教派高层作为祭品献祭的悲惨故事，从防线的最底端瓦解他。",
            "npcReply": "囚犯在一小时后精神崩溃，痛哭流涕地招供了。“语言的解剖刀，比真理术更可怕。”",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "F": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "control": 1,
              "empathy": 1
            },
            "triggerTags": [
              "心理侧写",
              "同理心毒药"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其高阶的审讯与共情操控",
            "targetId": "guild_bard"
          },
          {
            "id": "B",
            "text": "搬把椅子坐下，拿出算盘，开始极其严密地逐条计算邪教高层的贪污金额和他的微薄薪水，用铁一般的数学逻辑碾压他的信仰。",
            "npcReply": "囚犯被你算出的糊涂账怼得哑口无言，陷入了极度的职场不公愤懑中。“你这哪里是审讯，简直是财务审计。”",
            "scoreDelta": {
              "int": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "T": 2,
              "N": 1
            },
            "affinityDelta": {
              "guild_artificer": 1,
              "guild_bard": 1
            },
            "alignmentDelta": {
              "order": 1
            },
            "triggerTags": [
              "财务审计",
              "逻辑碾压"
            ],
            "outcomeTone": "偏离",
            "branchHint": "更偏向理性法学家或审计员",
            "targetId": "guild_bard"
          },
          {
            "id": "C",
            "text": "极其兴奋地拉着邪教徒开始推销你最新写的三流狗血言情剧本，并且强迫他扮演剧本里那个爱上史莱姆的娇弱女主角，长达四个小时。",
            "npcReply": "邪教徒为了不听你讲那破故事，崩溃着把所有情报都招了。“……这算是一种极其残忍的精神酷刑。”",
            "scoreDelta": {
              "cha": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": -2,
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "狗血剧本",
              "强行陪演"
            ],
            "outcomeTone": "危险",
            "branchHint": "毫无底线且缺乏控制力的剧作狂",
            "targetId": "guild_bard"
          },
          {
            "id": "D",
            "text": "拿出一把破琵琶，开始在他耳边弹奏完全不在调上的走音神曲，并配上歇斯底里的鬼叫，连续三个小时不间断。",
            "npcReply": "囚犯终于捂着耳朵崩溃大喊：‘我全招！只求你别再弹了！’“……噪音也是一种武器，我懂了。”",
            "scoreDelta": {
              "cha": 2,
              "str": -1
            },
            "mbtiDelta": {
              "P": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "expression": 1
            },
            "triggerTags": [
              "魔音穿脑",
              "物理噪音"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "依靠纯粹的物理性折磨过关",
            "targetId": "guild_bard"
          }
        ]
      },
      {
        "id": "human_bard_morale",
        "targetId": "guild_bard",
        "title": "绝望的战歌",
        "scene": "守城战已经到了最后关头。城门被撞破，巨龙的阴影笼罩了天空。士兵们已经丢下武器准备溃逃。没有将领能阻止这片蔓延的恐惧。",
        "prompt": "此时，你站上了最高的废墟，你用什么来挽回这溃败的士气？",
        "options": [
          {
            "id": "A",
            "text": "不用乐器，用最大音量唱起那首在酒馆里人人都会的、关于家乡麦田和母亲的老兵歌谣。歌声嘶哑却穿透了战场。",
            "npcReply": "逃兵们停下了脚步，很多人红了眼眶，重新握紧了长矛。“以凡人的情感对抗龙威，这就是吟游诗人的力量。”",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "F": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "good": 1,
              "action": 1
            },
            "triggerTags": [
              "共情战歌",
              "平民史诗"
            ],
            "outcomeTone": "合格",
            "branchHint": "点燃军团斗志的灵魂核心",
            "targetId": "guild_bard"
          },
          {
            "id": "B",
            "text": "敲着一面破鼓大喊：‘谁今天敢跑，我就把谁临阵脱逃的名字和各种下流癖好写进艳情史诗里，在所有大陆传唱一百年！’",
            "npcReply": "恐惧变成了极度的尴尬和愤怒，士兵们为了保住名誉硬着头皮顶了回去。“非常下流但极具威胁性的激励法。”",
            "scoreDelta": {
              "cha": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": 2,
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "名誉威胁",
              "社会性死亡"
            ],
            "outcomeTone": "偏离",
            "branchHint": "带点无赖色彩的另类激励",
            "targetId": "guild_bard"
          },
          {
            "id": "C",
            "text": "你因为过于紧张，反而吹出了一首极其哀怨的《寡妇的送葬曲》，并大声痛哭着让大家赶紧写遗书分行李。",
            "npcReply": "士气直接跌穿了地心。“如果敌军想让我们崩溃，他们只需要花钱请你去劳军就行了。”",
            "scoreDelta": {
              "wis": 1,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_bard": -2,
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "self": 2,
              "chaotic": 1
            },
            "triggerTags": [
              "寡妇送葬",
              "光速投降"
            ],
            "outcomeTone": "危险",
            "branchHint": "散播绝望的乌鸦嘴",
            "targetId": "guild_bard"
          },
          {
            "id": "D",
            "text": "在一片混乱中，极其淡定地搬出一张桌子，开始现场摆摊开盘，大声吆喝赌这头巨龙要吐几口龙息才会飞走。",
            "npcReply": "这种极度荒诞的反差感奇迹般地缓解了恐惧，几个逃兵甚至走回来下注了。“……你在战场上开赌场？”",
            "scoreDelta": {
              "cha": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "战场开盘",
              "荒诞解压"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其没心没肺的乐子人",
            "targetId": "guild_bard"
          }
        ]
      },
      {
        "id": "human_bard_magic_voice",
        "targetId": "guild_bard",
        "title": "声音的咒语",
        "scene": "你正在学习第一节‘言灵’魔法课。导师要求你不用任何奥术手势，仅仅通过语言的音调、停顿和情感，让桌子上的一根羽毛漂浮起来。",
        "prompt": "作为没有天生施法能力的人类，你要如何找到‘声音即魔法’的感觉？",
        "options": [
          {
            "id": "A",
            "text": "闭上眼睛，回忆起那年在暴风城悬崖边感受到的狂风，将那种自由与磅礴的渴望化作极其空灵的低语吹向羽毛。",
            "npcReply": "羽毛晃悠悠地飘了起来。导师点头：“魔法不是读对发音，而是赋予语言情感的重量。”",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "N": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "expression": 1
            },
            "triggerTags": [
              "情感共鸣",
              "言出法随"
            ],
            "outcomeTone": "合格",
            "branchHint": "展现出极佳的言灵魔法感知力",
            "targetId": "guild_bard"
          },
          {
            "id": "B",
            "text": "仔细研究了导师之前的发音频率和气流方向，用极其硬核的物理共振原理，发出了一串刺耳但能形成精确气流的颤音。",
            "npcReply": "羽毛被你的声波硬生生震到了半空中。“这更像是一门声学工程，而不是一门艺术。”",
            "scoreDelta": {
              "int": 3,
              "cha": -1
            },
            "mbtiDelta": {
              "T": 1,
              "S": 1
            },
            "affinityDelta": {
              "guild_artificer": 2,
              "guild_bard": 1
            },
            "alignmentDelta": {
              "order": 1
            },
            "triggerTags": [
              "物理共振",
              "硬核声学"
            ],
            "outcomeTone": "偏离",
            "branchHint": "用唯物主义解析魔法的异类",
            "targetId": "guild_bard"
          },
          {
            "id": "C",
            "text": "缺乏耐心，极其烦躁地对着羽毛发出了一声充满暴戾杀意的怒吼：‘给我起飞！不然老子把你烧了！’",
            "npcReply": "羽毛没有飘起来，而是直接在桌面上燃烧成了灰烬。导师眉头紧锁：“你的声音里充满了危险的破坏欲。”",
            "scoreDelta": {
              "str": 2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_warlock": 2,
              "guild_bard": -2
            },
            "alignmentDelta": {
              "chaotic": 1,
              "risk": 1
            },
            "triggerTags": [
              "无能狂怒",
              "暴怒施法"
            ],
            "outcomeTone": "危险",
            "branchHint": "魔力波动极具攻击性的莽夫",
            "targetId": "guild_bard"
          },
          {
            "id": "D",
            "text": "觉得这课太难了，于是凑近桌子，猛地吹了一大口物理口水气把羽毛吹飞，然后立刻大声宣布：‘看！无形之风！’",
            "npcReply": "羽毛糊着口水飘到了天花板上。导师冷冷地看着你：“如果你在战场上也能用口水把敌人吹走，我就给你及格。”",
            "scoreDelta": {
              "cha": 2,
              "con": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "expression": 1
            },
            "triggerTags": [
              "物理吹气",
              "强行解释"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其偷懒的耍宝操作",
            "targetId": "guild_bard"
          }
        ]
      },
      {
        "id": "human_bard_court_intrigue",
        "targetId": "guild_bard",
        "title": "贵族的餐桌",
        "scene": "你作为游吟诗人受邀在一场大贵族的晚宴上表演。但在演出中途，你无意中听到两位公爵正在密谋推翻国王，而其中一位公爵此时正盯着你，怀疑你听到了什么。",
        "prompt": "面对足以让你在一夜间人间蒸发的杀机，你如何化解？",
        "options": [
          {
            "id": "A",
            "text": "面不改色地继续弹奏，在下一首曲子中极其巧妙地融入了一段赞美‘新王登基’的隐喻，暗示自己不仅是聋子，还是个极具眼力的墙头草。",
            "npcReply": "公爵的目光移开了，你用精湛的伪装保住了一命。“在刀尖上跳舞，这正是诗学苑的必修课。”",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "N": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "艺术隐喻",
              "完美投诚"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其沉稳的宫廷博弈者",
            "targetId": "guild_bard"
          },
          {
            "id": "B",
            "text": "趁着换曲的空隙，迅速将一封伪造的情书塞进旁边一位夫人的胸衣里，故意制造出一场巨大的捉奸丑闻，趁乱脱身。",
            "npcReply": "晚宴变成了闹剧，你安全撤退，甚至还顺走了一把银汤匙。“极其敏锐的现场破坏与转移视线能力。”",
            "scoreDelta": {
              "dex": 2,
              "int": 2
            },
            "mbtiDelta": {
              "P": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_rogue": 2,
              "guild_bard": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "制造丑闻",
              "金蝉脱壳"
            ],
            "outcomeTone": "偏离",
            "branchHint": "更像是盗贼公会的手笔",
            "targetId": "guild_bard"
          },
          {
            "id": "C",
            "text": "你觉得宫廷阴谋太累了，于是干脆跑到大厅中央，大声宣布：‘我刚听到公爵要谋反！’然后试图趁着所有人互扇耳光时偷偷溜走。",
            "npcReply": "你被公爵的死士当场射成了刺猬。“你用最粗暴的造谣毁掉了自己最后的一丝生机。”",
            "scoreDelta": {
              "cha": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": -1,
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "risk": 2,
              "self": 2
            },
            "triggerTags": [
              "当众爆料",
              "火中取栗"
            ],
            "outcomeTone": "危险",
            "branchHint": "极其缺乏政治嗅觉的自爆卡车",
            "targetId": "guild_bard"
          },
          {
            "id": "D",
            "text": "假装喝醉了，突然跳上餐桌，大喊大叫着宣布自己其实是一只被变形术困住的羊，然后开始在餐盘间疯狂咩咩叫和吃生菜。",
            "npcReply": "公爵厌恶地叫卫兵把你这个疯子扔了出去。你摔在泥水里，但命保住了。“……用彻底丧失社会尊严来换取生存。”",
            "scoreDelta": {
              "cha": 2,
              "wis": -1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "expression": 1
            },
            "triggerTags": [
              "装羊啃草",
              "社会性死亡"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "抛弃底线的极品小丑",
            "targetId": "guild_bard"
          }
        ]
      },
      {
        "id": "human_bard_final_proof",
        "targetId": "guild_bard",
        "title": "无影舌簧",
        "scene": "毕业考核的最后，情报总管拔出一把匕首递给你：‘你的很多同学认为，在这个巨龙和恶魔横行的时代，一个谎言什么都改变不了。给我一个不把你派去送死的理由。’",
        "prompt": "面对这把冰冷的匕首，你的最终回答是：",
        "options": [
          {
            "id": "A",
            "text": "没有接过匕首，而是直视她的眼睛：‘匕首只能杀死一个人，而一句包装成神谕的谣言，可以引爆一场覆灭王国的战争。我就是那句谣言。’",
            "npcReply": "总管收起了匕首，露出了令人胆寒的微笑：“恭喜毕业，无影舌簧。”",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "N": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "谎言核弹",
              "兵不血刃"
            ],
            "outcomeTone": "合格",
            "branchHint": "完美理解了诗人的恐怖之处",
            "targetId": "guild_bard"
          },
          {
            "id": "B",
            "text": "接过匕首，极其熟练地在指尖转了个花刀，藏进袖子：‘故事确实杀不死恶魔，但在给恶魔讲故事的间隙，我能把毒药抹在它牙齿上。’",
            "npcReply": "总管眯起了眼睛：“你似乎更喜欢亲自动手。暗影兄弟会可能对你更感兴趣。”",
            "scoreDelta": {
              "dex": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_rogue": 3,
              "guild_bard": -1
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "图穷匕见",
              "刺客本能"
            ],
            "outcomeTone": "偏离",
            "branchHint": "彻底暴露了游荡者的天赋",
            "targetId": "guild_bard"
          },
          {
            "id": "C",
            "text": "猛地夺过匕首，直接架在总管的脖子上，面露凶光：‘你废话太多了。我现在就证明，刀子比狗屁诗歌有用多了！’",
            "npcReply": "你瞬间被周围的四个隐形守卫按倒在地，骨头断了三根。“不及格。你不配拥有这份优雅的职业。”",
            "scoreDelta": {
              "str": 2,
              "cha": -2
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": -2,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "chaotic": 2,
              "risk": 2
            },
            "triggerTags": [
              "武力威胁",
              "暴躁反杀"
            ],
            "outcomeTone": "危险",
            "branchHint": "因粗暴鲁莽彻底被开除",
            "targetId": "guild_bard"
          },
          {
            "id": "D",
            "text": "拿起匕首，极其深情地对它唱了一首长达二十分钟的爱情赞歌，歌颂刀刃与鲜血凄美的同性爱情，直到总管受不了捂住了耳朵。",
            "npcReply": "总管痛苦地抢回了匕首：“够了！你不仅啰嗦，而且品味极其变态！滚！”",
            "scoreDelta": {
              "cha": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "E": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "expression": 2
            },
            "triggerTags": [
              "对物发情",
              "精神污染"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其欠扁的话痨诗人",
            "targetId": "guild_bard"
          }
        ]
      },
      {
        "id": "human_bard_bluff",
        "targetId": "guild_bard",
        "title": "致命的空城计",
        "scene": "你被一队全副武装的半兽人劫匪逼到了悬崖边。你的武器丢了，队友全军覆没，只有一个毫无用处的神奇海螺。领头的半兽人举起了滴血的战斧。",
        "prompt": "在物理意义上的绝对死局面前，你用什么来换取自己的一线生机？",
        "options": [
          {
            "id": "A",
            "text": "高高举起海螺，用极其威严的语调宣称这是一个能召唤上古红龙的神器，并开始用他们听不懂的加密精灵语倒数：‘三、二……’",
            "npcReply": "半兽人被你视死如归的演技震慑，竟然真的犹豫退缩了。“谎言的最高境界，是连你自己都信了。”",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "risk": 2
            },
            "triggerTags": [
              "海螺核弹",
              "演技爆表"
            ],
            "outcomeTone": "合格",
            "branchHint": "拥有极强的心理素质和临场忽悠能力",
            "targetId": "guild_bard"
          },
          {
            "id": "B",
            "text": "立刻跪下，以极快的语速向首领分析如果留下你，你能帮他们潜入人类城镇倒卖战利品，并承诺教他们做假账。",
            "npcReply": "你被用绳子套住脖子当成了奴隶，但你的命保住了。“在尊严和生存之间，你毫不犹豫地选择了后者。”",
            "scoreDelta": {
              "int": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "T": 1,
              "S": 1
            },
            "affinityDelta": {
              "guild_rogue": 2,
              "guild_bard": 1
            },
            "alignmentDelta": {
              "self": 1
            },
            "triggerTags": [
              "假账谈判",
              "毫无底线"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其纯粹且狡猾的求生欲",
            "targetId": "guild_bard"
          },
          {
            "id": "C",
            "text": "绝望地大喊求饶，甚至主动提出如果放过你，你可以带他们去袭击隔壁那个防守极其薄弱的精灵孤儿院。",
            "npcReply": "半兽人首领鄙夷地看着你，一斧头砍下了你的头。“连半兽人都鄙视出卖老弱病残的懦夫。”",
            "scoreDelta": {
              "cha": -2,
              "wis": -2
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_bard": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "出卖孤儿",
              "极度自私"
            ],
            "outcomeTone": "危险",
            "branchHint": "愚蠢至极的叛徒",
            "targetId": "guild_bard"
          },
          {
            "id": "D",
            "text": "深情地吹响了海螺（虽然根本吹不响发出放屁声），然后开始在悬崖边跳起一段极其魔性的海带舞，试图假装自己是被海神附身了。",
            "npcReply": "半兽人们觉得你的脑子可能被吓坏了，肉肯定不好吃，竟然真的摇摇头走开了。“……只要我足够智障，死神就追不上我。”",
            "scoreDelta": {
              "cha": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "expression": 2
            },
            "triggerTags": [
              "海带舞",
              "装疯卖傻"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "通过极度丢人的方式苟全性命",
            "targetId": "guild_bard"
          }
        ]
      }
    ],
    "guild_artificer": [
      {
        "id": "human_artificer_weakness",
        "targetId": "guild_artificer",
        "title": "血肉苦弱",
        "scene": "齿轮塔的入门考核：一只巨大的魔像堵住了大门。它由纯粹的黑曜石打造，刀剑难伤。独臂教官冷哼一声：‘别用你那软绵绵的拳头去打它，用桌子上的废铜烂铁证明人类配得上这间工坊。’",
        "prompt": "桌面上只有一些生锈的齿轮、劣质黑火药和几根导线。你的做法是：",
        "options": [
          {
            "id": "A",
            "text": "将火药塞进一个齿轮咬合的铁盒里，做成了一个极不稳定的定向爆破装置，冒着炸断手的风险将其死死卡进魔像的膝关节缝隙中。",
            "npcReply": "伴随着一声巨响，魔像跪倒在地。“非常粗暴的实用主义，以及令人欣赏的亡命徒气质。”",
            "scoreDelta": {
              "int": 3,
              "con": 1
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": 3
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "定向爆破",
              "粗暴工程学"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其狂热的爆炸狂人潜质",
            "targetId": "guild_artificer"
          },
          {
            "id": "B",
            "text": "仔细观察魔像关节的能量流动，利用导线极其精准地短接了它膝盖处的魔法核心，让它因为自身能量过载而原地死机。",
            "npcReply": "魔像冒出了一阵青烟，安全地瘫痪了。“对魔导回路有着惊人的直觉。这才是高级技师的手法。”",
            "scoreDelta": {
              "int": 3,
              "dex": 2
            },
            "mbtiDelta": {
              "N": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_artificer": 2,
              "guild_wizard": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "逆向工程",
              "魔法短路"
            ],
            "outcomeTone": "偏离",
            "branchHint": "展现出偏向法师或魔导学者的精细",
            "targetId": "guild_artificer"
          },
          {
            "id": "C",
            "text": "觉得魔像太危险，于是你掏出一本极其厚重的《巨兽保养指南》，试图现场给魔像朗读说明书，让它按照安全规范自行关机。",
            "npcReply": "魔像一脚把说明书踩得粉碎，顺便把你踢飞。“……你在跟一个杀戮机器宣讲工业规范？”",
            "scoreDelta": {
              "str": 1,
              "int": -2
            },
            "mbtiDelta": {
              "S": 1
            },
            "affinityDelta": {
              "guild_artificer": -2
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "朗读说明书",
              "书呆子"
            ],
            "outcomeTone": "危险",
            "branchHint": "毫无工程学思维的职场废柴",
            "targetId": "guild_artificer"
          },
          {
            "id": "D",
            "text": "把废铜烂铁全部吃进了嘴里，试图假装自己也是个正在进食的机器，希望魔像能把你当成同类放你过去。",
            "npcReply": "魔像陷入了逻辑死循环，站在原地卡机了。教官的金属假眼疯狂闪烁：“你这满嘴铁锈的蠢货是在侮辱我的智商吗？！”",
            "scoreDelta": {
              "cha": 2,
              "int": -2
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "机械拟态",
              "物理吞铁"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "依靠彻底的非逻辑行为让机器宕机",
            "targetId": "guild_artificer"
          }
        ]
      },
      {
        "id": "human_artificer_field_repair",
        "targetId": "guild_artificer",
        "title": "阵地维修",
        "scene": "激战正酣，阵地上的主力连发火铳卡壳了，而半兽人冲锋兵距离你们只有不到三十码。图纸规定拆解这台机器需要五种不同的扳手和十分钟的冷却时间。",
        "prompt": "子弹在头顶乱飞，面对卡死的枪膛，你要怎么办？",
        "options": [
          {
            "id": "A",
            "text": "去他妈的图纸！直接用靴底猛踹枪膛的卡榫，然后用匕首硬撬开散热盖，不顾烫伤强行把卡住的子弹抠出来。",
            "npcReply": "你烫掉了一层皮，但火铳重新咆哮了起来。“规则是死的，活下来才是硬道理。”",
            "scoreDelta": {
              "dex": 2,
              "con": 1
            },
            "mbtiDelta": {
              "P": 1,
              "S": 1
            },
            "affinityDelta": {
              "guild_artificer": 3
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "暴力维修",
              "无视图纸"
            ],
            "outcomeTone": "合格",
            "branchHint": "极佳的战地抗压和暴力维修能力",
            "targetId": "guild_artificer"
          },
          {
            "id": "B",
            "text": "冷静地判断出火铳的枪管已经过热变形，继续射击必然炸膛。果断抗命，指挥机枪组立刻放弃阵地，携带核心部件撤退。",
            "npcReply": "火铳被遗弃，但你们保住了整个机枪组的命。“非常理性的技术止损判定，虽然长官会大发雷霆。”",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_artificer": 1,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "理性止损",
              "抗命撤退"
            ],
            "outcomeTone": "偏离",
            "branchHint": "拥有军官或总工的技术大局观",
            "targetId": "guild_artificer"
          },
          {
            "id": "C",
            "text": "你觉得火铳过热是因为不够润滑，于是你极其天才地把一锅煮好的浓肉汤直接倒进了枪管里试图降温。",
            "npcReply": "火铳不出意外地炸了，而且炸出了一股极其浓郁的肉汤香味。“……你这辈子都别想碰任何精密机械了。”",
            "scoreDelta": {
              "dex": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_artificer": -2
            },
            "alignmentDelta": {
              "chaotic": 2,
              "self": 1
            },
            "triggerTags": [
              "肉汤润滑",
              "生化炸膛"
            ],
            "outcomeTone": "危险",
            "branchHint": "绝对不能碰危险品的定时炸弹",
            "targetId": "guild_artificer"
          },
          {
            "id": "D",
            "text": "对着枪膛开始进行极其虔诚的‘机魂安抚仪式’，甚至拿出了机油在枪管上画了一个笑脸，试图用爱感化它。",
            "npcReply": "火铳不仅没修好，还莫名其妙地喷出了一股黑烟，把你的脸熏成了黑炭。“……你是隔壁神学院派来捣乱的吗？”",
            "scoreDelta": {
              "cha": 2,
              "int": -1
            },
            "mbtiDelta": {
              "F": 1,
              "N": 1
            },
            "affinityDelta": {
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "expression": 1
            },
            "triggerTags": [
              "机魂安抚",
              "玄学修枪"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "沉迷于玄学修车的搞笑工匠",
            "targetId": "guild_artificer"
          }
        ]
      },
      {
        "id": "human_artificer_budget",
        "targetId": "guild_artificer",
        "title": "金币与钢",
        "scene": "你接到了军方的一笔订单，要求为前线士兵制造一批防弹护甲。但上面拨下来的预算已经被层层克扣，只够买最劣质的生铁。",
        "prompt": "面对这种极可能导致前线死伤惨重的经费问题，作为总工你会如何抉择？",
        "options": [
          {
            "id": "A",
            "text": "抛弃传统一体化设计，利用劣质生铁的特性，将其打造成极其便宜的‘鱼鳞破片甲’，虽然防刺穿差，但能有效偏转流弹保命。",
            "npcReply": "你用最烂的材料做出了勉强能用的东西。“人类工匠的最高美德：在绝境中榨干最后一点剩余价值。”",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 1,
              "N": 1
            },
            "affinityDelta": {
              "guild_artificer": 3
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "设计降级",
              "变废为宝"
            ],
            "outcomeTone": "合格",
            "branchHint": "深谙甲乙双方之道的实用大师",
            "targetId": "guild_artificer"
          },
          {
            "id": "B",
            "text": "坚守工匠底线，连夜收集黑材料，写了一份极具煽动性的举报信，直接把贪污的军需官告上了军事法庭并送上绞刑架。",
            "npcReply": "军需官被绞死了，你的预算回来了。“你在政治上的嗅觉甚至超过了你的打铁手艺。”",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "J": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_paladin": 2,
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "lawful": 2,
              "good": 1
            },
            "triggerTags": [
              "刚正不阿",
              "物理反腐"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极具正义感的工匠，带有圣武士风范",
            "targetId": "guild_artificer"
          },
          {
            "id": "C",
            "text": "彻底摆烂，甚至自己也贪污了一部分。用掺了泥沙的废铁随便打了几块铁板交差，完全不管前线士兵的死活。",
            "npcReply": "士兵的鲜血染红了前线，而你因为私吞军款被送上了断头台。“你的贪婪和你的图纸一样烂。”",
            "scoreDelta": {
              "cha": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "偷工减料",
              "私吞军费"
            ],
            "outcomeTone": "危险",
            "branchHint": "道德败坏的无良奸商",
            "targetId": "guild_artificer"
          },
          {
            "id": "D",
            "text": "用生铁做了一堆毫无防御力但极其闪亮、还会发出刺耳噪音的胸甲，宣称这是最新型的‘闪光音波嘲讽装甲’。",
            "npcReply": "穿上这套盔甲的士兵成为了全场最亮的靶子。军方拒绝付钱，并把你打了个半死。“你的推销词比装甲防御力还薄。”",
            "scoreDelta": {
              "cha": 2,
              "int": -1
            },
            "mbtiDelta": {
              "E": 1,
              "N": 1
            },
            "affinityDelta": {
              "guild_bard": 1,
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "expression": 1
            },
            "triggerTags": [
              "嘲讽装甲",
              "概念包装"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "点错科技树的概念带货主播",
            "targetId": "guild_artificer"
          }
        ]
      },
      {
        "id": "human_artificer_magic_clash",
        "targetId": "guild_artificer",
        "title": "反魔法狂想",
        "scene": "在高阶会议上，一位傲慢的精灵大魔法师嘲笑你们的火药和齿轮只是‘凡人的泥巴玩具’，并在桌面上施展了一个绝对静音和防火的奥术结界作为挑衅。",
        "prompt": "你的火枪在结界内成了烧火棍。你要如何捍卫工匠的尊严？",
        "options": [
          {
            "id": "A",
            "text": "冷静地抽出一个特制的真空抽气筒，手动将结界内的氧气抽干，让大魔法师因为窒息而面色铁青地被迫解除法术。",
            "npcReply": "法师狼狈地大口喘气。“魔法可以违背常理，但人类可以用基础的物理法则掐住魔法的脖子。”",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_artificer": 3
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "真空抽气",
              "物理破法"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其硬核的唯物主义工匠",
            "targetId": "guild_artificer"
          },
          {
            "id": "B",
            "text": "表面服软，但偷偷在结界的边缘泼洒了极具腐蚀性的炼金强酸，直接把大魔法师那件昂贵的精灵真丝法袍烧出了几个大洞。",
            "npcReply": "法师尖叫着跳了起来。“非常没品，但极度解气。化学永远比魔法更真实。”",
            "scoreDelta": {
              "dex": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "P": 1,
              "S": 1
            },
            "affinityDelta": {
              "guild_rogue": 2,
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "强酸泼洒",
              "下流报复"
            ],
            "outcomeTone": "偏离",
            "branchHint": "更偏向炼金毒师或下毒者",
            "targetId": "guild_artificer"
          },
          {
            "id": "C",
            "text": "你被魔法师的傲慢气笑了，于是你掏出一个极其巨大的扩音喇叭，对着魔法师的耳朵放起了极其吵闹的重金属侏儒摇滚乐。",
            "npcReply": "大魔法师的冥想被强行打断，差点走火入魔。“你用最没品的方式赢下了一场魔法对决。”",
            "scoreDelta": {
              "str": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "F": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_barbarian": 1,
              "guild_artificer": -2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "物理袭击",
              "无能狂怒"
            ],
            "outcomeTone": "危险",
            "branchHint": "极易情绪失控的莽撞者",
            "targetId": "guild_artificer"
          },
          {
            "id": "D",
            "text": "既然结界内静音，那就在结界外用最大音量的发条喇叭播放极其难听的兽人重金属战歌进行物理震动轰炸。",
            "npcReply": "整个塔楼都被你的发条音响震得发抖，法师捂着耳朵落荒而逃。“……用最原始的噪音战胜了最高雅的奥术。”",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": 1,
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "expression": 2
            },
            "triggerTags": [
              "发条音响",
              "噪音反击"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "点歪科技树的噪音工程师",
            "targetId": "guild_artificer"
          }
        ]
      },
      {
        "id": "human_artificer_mad_design",
        "targetId": "guild_artificer",
        "title": "禁忌的图纸",
        "scene": "你在整理老师傅的遗物时，发现了一张名为‘血肉引擎’的图纸。它理论上能让人类拥有媲美巨魔的再生力，但需要持续消耗使用者的寿命。",
        "prompt": "面对这张足以颠覆人类脆弱体质、但也极其危险的图纸，你的决定是：",
        "options": [
          {
            "id": "A",
            "text": "冷酷地将其封存在最高级保密柜中。这种不可控的代价违背了工具造福人类的初衷，它是个诅咒，不能被制造出来。",
            "npcReply": "你守住了理智的底线。“知道什么不该造，比知道怎么造更重要。”",
            "scoreDelta": {
              "wis": 3,
              "int": 1
            },
            "mbtiDelta": {
              "J": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_artificer": 3,
              "guild_paladin": 1
            },
            "alignmentDelta": {
              "lawful": 1,
              "order": 1
            },
            "triggerTags": [
              "理智封存",
              "守住底线"
            ],
            "outcomeTone": "合格",
            "branchHint": "极具大局观的稳健派大宗师",
            "targetId": "guild_artificer"
          },
          {
            "id": "B",
            "text": "如获至宝！立刻开始秘密实验，甚至不惜在自己身上切开口子植入接口，认为哪怕少活二十年，换来无敌的肉体也是赚的。",
            "npcReply": "你的身体半机械化了，散发着机油味。“你跨越了禁忌，堕落成了一个追求机械飞升的异端。”",
            "scoreDelta": {
              "int": 3,
              "con": 2
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_warlock": 2,
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "risk": 2,
              "chaotic": 1
            },
            "triggerTags": [
              "机械飞升",
              "血肉苦弱"
            ],
            "outcomeTone": "偏离",
            "branchHint": "彻底疯狂的赛博异端潜质",
            "targetId": "guild_artificer"
          },
          {
            "id": "C",
            "text": "悄悄把图纸卖给了黑市里的黑心亡灵法师，换取了一大笔足以让你挥霍半生的金币，完全不管这玩意儿会害死多少人。",
            "npcReply": "你发财了，但公会查出真相后，派出了顶尖刺客清理门户。“毫无底线的知识贩子，死不足惜。”",
            "scoreDelta": {
              "cha": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_rogue": 2,
              "guild_artificer": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "贩卖禁忌",
              "唯利是图"
            ],
            "outcomeTone": "危险",
            "branchHint": "为了利益出卖灵魂的叛徒",
            "targetId": "guild_artificer"
          },
          {
            "id": "D",
            "text": "觉得这图纸太费寿命，于是你把它反向魔改了一下，做成了一个极其庞大的‘全自动按摩削皮一体机’，虽然没啥用，但看着很震撼。",
            "npcReply": "参观者看着这台把西瓜切成碎末的恐怖机器陷入了沉思。“……你把足以改变世界的禁忌，变成了一个极其危险的厨房用具。”",
            "scoreDelta": {
              "dex": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "expression": 1
            },
            "triggerTags": [
              "离谱魔改",
              "降维打击"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "将禁忌知识日常化的搞笑天才",
            "targetId": "guild_artificer"
          }
        ]
      },
      {
        "id": "human_artificer_teamwork",
        "targetId": "guild_artificer",
        "title": "致命的火花",
        "scene": "你和几个学徒正在组装一台巨型攻城炮。一个粗心的学徒把一根极其不稳定的雷管掉进了满是火药残渣的底座里，眼看就要引发连锁大爆炸。",
        "prompt": "距离爆炸只有不到三秒，你要如何挽救这场即将发生的灾难？",
        "options": [
          {
            "id": "A",
            "text": "毫不犹豫地将沾满机油的外套猛扑上去死死捂住雷管，同时一脚把那个蠢学徒踹出爆炸范围。宁可重伤，也要保住炮台。",
            "npcReply": "你失去了三根手指，但炮台完好，学徒泣不成声。“极其果敢的牺牲精神，这不仅是工匠，更是领袖。”",
            "scoreDelta": {
              "con": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "F": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_artificer": 3,
              "guild_paladin": 1
            },
            "alignmentDelta": {
              "good": 2,
              "action": 1
            },
            "triggerTags": [
              "肉身填炮",
              "果断牺牲"
            ],
            "outcomeTone": "合格",
            "branchHint": "拥有极高责任感的车间主任",
            "targetId": "guild_artificer"
          },
          {
            "id": "B",
            "text": "冷静到极点，瞬间拔出随身的小钳子，以单身二十年的手速在雷管落地前凌空剪断了它最核心的引火线。",
            "npcReply": "雷管在底座里发出一声闷响，哑火了。所有人出了一身冷汗。“如同外科手术般精准的极限反应。”",
            "scoreDelta": {
              "dex": 3,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": 2,
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "凌空拆弹",
              "极限微操"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其纯粹的技术拆弹专家",
            "targetId": "guild_artificer"
          },
          {
            "id": "C",
            "text": "惊恐万分，第一反应是抓住那个学徒挡在自己身前当肉盾，自己则抱头蹲下。",
            "npcReply": "学徒被炸成了碎片，你活下来了，但你的工程学生涯也彻底结束了。“怯懦且残忍的自私鬼，滚出齿轮塔。”",
            "scoreDelta": {
              "dex": 1,
              "wis": -2
            },
            "mbtiDelta": {
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "拿徒弟当盾",
              "极度自私"
            ],
            "outcomeTone": "危险",
            "branchHint": "为求生抛弃一切底线的败类",
            "targetId": "guild_artificer"
          },
          {
            "id": "D",
            "text": "大喊一声‘科学的制裁！’把手里的一整桶冷水混合着喝剩下的半瓶麦酒，直接对着底座泼了下去。",
            "npcReply": "雷管没炸，但麦酒的腐蚀让整个底座彻底生锈报废了。“……算是把命保住了，但你这个月的工资没了。”",
            "scoreDelta": {
              "cha": 2,
              "str": -1
            },
            "mbtiDelta": {
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "泼洒麦酒",
              "暴力报废"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "用极其草率的方式解决危机",
            "targetId": "guild_artificer"
          }
        ]
      },
      {
        "id": "human_artificer_final_proof",
        "targetId": "guild_artificer",
        "title": "火药与奇迹",
        "scene": "齿轮塔的最终考核：大宗师将一根粗糙的生铁管和一枚打磨完美的精灵魔晶放在你面前：‘人类没有魔法的天赋。如果你必须在这两者中选择一样去改变世界，你选什么？’",
        "prompt": "面对大宗师的终极考验，你的回答是：",
        "options": [
          {
            "id": "A",
            "text": "毫不犹豫地拿起生铁管：‘魔晶只能成就一个精灵，但只要找到配方，生铁管可以武装一万个人类。我们需要标准化的大炮！’",
            "npcReply": "大宗师露出了满意的笑容：“正确。欢迎来到黄铜齿轮塔，用流水线推平那群尖耳朵的傲慢吧。”",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_artificer": 3
            },
            "alignmentDelta": {
              "order": 2
            },
            "triggerTags": [
              "工业标准",
              "量产真理"
            ],
            "outcomeTone": "合格",
            "branchHint": "完美契合量产化工程思维",
            "targetId": "guild_artificer"
          },
          {
            "id": "B",
            "text": "拿起魔晶，硬生生地砸碎塞进生铁管里作为高能底火：‘小孩子才做选择，我要用魔法的骨灰来驱动凡人的大炮！’",
            "npcReply": "大宗师眼前一亮：“极其危险且亵渎的思路，但这正是魔导科技的未来。”",
            "scoreDelta": {
              "int": 2,
              "dex": 2
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": 2,
              "guild_wizard": 1
            },
            "alignmentDelta": {
              "risk": 1
            },
            "triggerTags": [
              "粉碎魔晶",
              "魔导融合"
            ],
            "outcomeTone": "偏离",
            "branchHint": "打破常规的魔导工程先驱",
            "targetId": "guild_artificer"
          },
          {
            "id": "C",
            "text": "对生铁管不屑一顾，拿起魔晶试图强行吸收里面的魔力，极度渴望像法师一样获得那种高高在上的力量。",
            "npcReply": "魔力暴走，炸瞎了你的左眼。“嫉妒和盲从会毁掉一个工匠。你不配拥有钢铁。”",
            "scoreDelta": {
              "cha": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_artificer": -2
            },
            "alignmentDelta": {
              "self": 1,
              "chaotic": 1
            },
            "triggerTags": [
              "贪图魔法",
              "反噬瞎眼"
            ],
            "outcomeTone": "危险",
            "branchHint": "迷失在对魔法的嫉妒中的失败者",
            "targetId": "guild_artificer"
          },
          {
            "id": "D",
            "text": "把生铁管当成烟斗，把魔晶当成打火石，极其嚣张地当着大宗师的面点燃了一锅劣质烟丝，吐出一个大大的烟圈。",
            "npcReply": "大宗师被呛得直咳嗽：“……你对这两种足以改变世界的材料毫无敬畏之心，但我不得不承认，这烟圈吐得挺圆。”",
            "scoreDelta": {
              "cha": 3,
              "wis": -1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": 1,
              "guild_bard": 1
            },
            "alignmentDelta": {
              "expression": 2
            },
            "triggerTags": [
              "魔晶点烟",
              "极度嚣张"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "脑回路极其清奇的街头混子",
            "targetId": "guild_artificer"
          }
        ]
      }
    ],
    "guild_paladin": [
      {
        "id": "human_paladin_mercy",
        "targetId": "guild_paladin",
        "title": "凡人的宽恕",
        "scene": "你抓获了一个偷取军用口粮的盗贼。按照军法应该立刻斩断双手。但他跪在泥水里哭诉自己是半兽人混血，一直被排挤，妹妹快饿死了才会偷窃。",
        "prompt": "面对严格的法典与凡人的怜悯，你的裁决是：",
        "options": [
          {
            "id": "A",
            "text": "严格执行法典斩断他的左手，但随后用自己的所有军饷为他雇佣医师，并亲自把干净的食物送到他妹妹面前。",
            "npcReply": "鲜血与慈悲并存。“你没有亵渎法典的威严，也没有泯灭凡人的同情。这是圣武士的重担。”",
            "scoreDelta": {
              "wis": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "J": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_paladin": 3
            },
            "alignmentDelta": {
              "lawful": 1,
              "good": 1
            },
            "triggerTags": [
              "法典流血",
              "私人救赎"
            ],
            "outcomeTone": "合格",
            "branchHint": "完美平衡了律法与怜悯",
            "targetId": "guild_paladin"
          },
          {
            "id": "B",
            "text": "完全无视他的哭诉，冷酷地拔剑斩断了他的双手：‘法律就是法律，私人的怜悯只会导致整个军团在冬天挨饿。’",
            "npcReply": "你维护了绝对的秩序，但平民看你的眼神充满了恐惧。“你是一个完美的执法机器，但更像是个审判官。”",
            "scoreDelta": {
              "int": 2,
              "wis": -1
            },
            "mbtiDelta": {
              "T": 2,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_paladin": 1
            },
            "alignmentDelta": {
              "order": 2
            },
            "triggerTags": [
              "绝对无情",
              "铁血律法"
            ],
            "outcomeTone": "偏离",
            "branchHint": "过于冷酷的复仇骑士或铁血军法官",
            "targetId": "guild_paladin"
          },
          {
            "id": "C",
            "text": "被他的身世打动，不仅放过了他，还利用自己的职权偷偷从仓库里多拿了几袋粮食白送给他。",
            "npcReply": "你的善心泛滥导致小队因粮食短缺饿着肚子作战。“极其伪善的个人英雄主义！你慷了全军之慨！”",
            "scoreDelta": {
              "cha": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "F": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_paladin": -2,
              "guild_bard": 1
            },
            "alignmentDelta": {
              "chaotic": 1,
              "self": 1
            },
            "triggerTags": [
              "慷他人之慨",
              "底线崩塌"
            ],
            "outcomeTone": "危险",
            "branchHint": "因圣母心泛滥而触犯军规的典型",
            "targetId": "guild_paladin"
          },
          {
            "id": "D",
            "text": "大声向神明祈祷，要求天上直接掉下一堆热腾腾的面包来解决这个两难的问题。然后你们所有人就在雨里干等了半个小时。",
            "npcReply": "什么都没发生，除了盗贼趁你闭眼祈祷的时候又顺走了你的钱袋。“……信仰不是让你当白痴的。”",
            "scoreDelta": {
              "cha": 2,
              "int": -2
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_cleric": 1
            },
            "alignmentDelta": {
              "expression": 1
            },
            "triggerTags": [
              "神棍做派",
              "闭眼祈祷"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其可笑的狂信徒",
            "targetId": "guild_paladin"
          }
        ]
      },
      {
        "id": "human_paladin_corruption",
        "targetId": "guild_paladin",
        "title": "腐化的金币",
        "scene": "你发现你的顶头上司，一位备受尊敬的骑士长，正在偷偷接受当地黑帮的贿赂，以换取对非法地下斗兽场的睁一只眼闭一只眼。",
        "prompt": "他是你的恩师，但他的行为严重违背了骑士誓言。你要怎么做？",
        "options": [
          {
            "id": "A",
            "text": "在深夜穿戴整齐，独自来到营帐前，拔出长剑要求进行一对一的神圣决斗，用鲜血来洗清誓言的耻辱。",
            "npcReply": "你亲手杀死了自己的恩师，然后在他的尸体前跪了一夜。“最痛苦的决断，但也最为纯粹。”",
            "scoreDelta": {
              "str": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "J": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_paladin": 3
            },
            "alignmentDelta": {
              "lawful": 2,
              "action": 1
            },
            "triggerTags": [
              "恩师决斗",
              "维护誓言"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其坚毅不屈的骑士楷模",
            "targetId": "guild_paladin"
          },
          {
            "id": "B",
            "text": "表面不动声色，暗中收集了所有贿赂账本和证据，直接越级向教廷和国王递交了极其详实的匿名举报信。",
            "npcReply": "骑士长被秘密逮捕。你的手没有沾血，但同僚们对你充满了防备。“非常理性的官僚手段。”",
            "scoreDelta": {
              "int": 3,
              "cha": -1
            },
            "mbtiDelta": {
              "N": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_rogue": 1,
              "guild_paladin": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "收集证据",
              "越级举报"
            ],
            "outcomeTone": "偏离",
            "branchHint": "手段偏向情报官或审判庭密探",
            "targetId": "guild_paladin"
          },
          {
            "id": "C",
            "text": "你觉得骑士长贪污得太没水准，于是极其兴奋地拿着一份‘宗教高利贷’企划书去找他，试图拉他合伙做大做强。",
            "npcReply": "骑士长被你比魔鬼还贪婪的资本家嘴脸吓得直接投案自首了。“……你的邪恶甚至超越了异端。”",
            "scoreDelta": {
              "cha": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "P": 1,
              "S": 1
            },
            "affinityDelta": {
              "guild_paladin": -2,
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "反向敲诈",
              "同流合污"
            ],
            "outcomeTone": "危险",
            "branchHint": "迅速堕落为黑警的反面教材",
            "targetId": "guild_paladin"
          },
          {
            "id": "D",
            "text": "冲进地下斗兽场，宣布自己也要参赛，并在众目睽睽之下把黑帮所有的拳王全揍趴下，把赢来的奖金全捐给了孤儿院。",
            "npcReply": "黑帮破产了，骑士长气得吐血，而你成了当地平民的英雄。“……非常令人头疼的街头正义。”",
            "scoreDelta": {
              "str": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_paladin": 1,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "chaotic": 2,
              "good": 1
            },
            "triggerTags": [
              "踢馆反腐",
              "物理砸场"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "不走寻常路的莽夫侠客",
            "targetId": "guild_paladin"
          }
        ]
      },
      {
        "id": "human_paladin_sacrifice",
        "targetId": "guild_paladin",
        "title": "天平的代价",
        "scene": "一座受到诅咒的村庄正在爆发瘟疫。教廷的命令是烧毁整座村庄以防止瘟疫蔓延到王城。但你听到了地窖里还有十几个未感染的孩子的哭声。",
        "prompt": "火把已经举起，是遵循大局的残酷命令，还是为了几条生命违抗军令？",
        "options": [
          {
            "id": "A",
            "text": "违抗命令踢开地窖，把孩子护在身后。拔出重剑面对曾经的同袍：‘如果光明需要用无辜者的骨灰来燃烧，那这光明不要也罢！’",
            "npcReply": "你被打断了双腿，剥夺了骑士头衔，但孩子们活下来了。“你失去了公会的认可，但赢得了真正的神明注视。”",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "F": 2,
              "J": 1
            },
            "affinityDelta": {
              "guild_paladin": 3
            },
            "alignmentDelta": {
              "good": 2,
              "chaotic": 1
            },
            "triggerTags": [
              "剑指同袍",
              "守护弱小"
            ],
            "outcomeTone": "合格",
            "branchHint": "拥有极其高尚但不死板的真正信仰",
            "targetId": "guild_paladin"
          },
          {
            "id": "B",
            "text": "咬着牙关下令点火。为了全人类的存续，这个代价必须有人来背负。你亲自投下了第一根火把，任由罪恶感啃噬余生。",
            "npcReply": "瘟疫被控制了。你获得了十字勋章，但你的灵魂永远留在了那场大火里。“最残酷的理智，极其沉重的责任感。”",
            "scoreDelta": {
              "int": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "T": 2,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_paladin": 1
            },
            "alignmentDelta": {
              "order": 2,
              "control": 1
            },
            "triggerTags": [
              "执行火刑",
              "顾全大局"
            ],
            "outcomeTone": "偏离",
            "branchHint": "适合成为背负骂名的铁血统帅",
            "targetId": "guild_paladin"
          },
          {
            "id": "C",
            "text": "你不仅没有点火，反而因为严重的脑抽，突然觉得食尸鬼很可怜，竟然脱下盔甲试图去跟村里的食尸鬼讲道理劝善。",
            "npcReply": "你立刻就被撕成了碎片。“你的同情心用错了地方，极其愚蠢的圣母行为。”",
            "scoreDelta": {
              "dex": 1,
              "wis": -2
            },
            "mbtiDelta": {
              "P": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_paladin": -2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "劝善食尸鬼",
              "精神崩坏"
            ],
            "outcomeTone": "危险",
            "branchHint": "因无法承受道德压力而崩溃",
            "targetId": "guild_paladin"
          },
          {
            "id": "D",
            "text": "大声宣布自己对瘟疫免疫，跳进地窖和孩子们待在一起，威胁说如果谁敢放火就让瘟疫之神晚上去他家做客。",
            "npcReply": "同僚们被你的疯狂举动震慑，暂时撤退了。你没感染，但被当成异端抓了起来。“用魔法打败魔法，用无赖对抗残酷。”",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "E": 1,
              "N": 1
            },
            "affinityDelta": {
              "guild_bard": 1,
              "guild_paladin": 1
            },
            "alignmentDelta": {
              "expression": 2
            },
            "triggerTags": [
              "神级耍赖",
              "物理碰瓷"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "用极其无厘头的方式拖延了时间",
            "targetId": "guild_paladin"
          }
        ]
      },
      {
        "id": "human_paladin_temptation",
        "targetId": "guild_paladin",
        "title": "恶魔的契约",
        "scene": "在一个古老的遗迹中，一只被封印的高阶魅魔向你开出条件：只要你砍断封印锁链的一角，她就赋予你长达五百年的寿命。",
        "prompt": "永生的诱惑就在眼前，这对一个寿命不足百年的人类来说几乎无法拒绝。你如何回应？",
        "options": [
          {
            "id": "A",
            "text": "冷笑着举起战锤，狠狠砸在魅魔的手指上：‘老子活七十年就能把你塞回深渊，活五百年难道是为了看你这副丑态吗？滚回去！’",
            "npcReply": "魅魔惨叫着缩回了深渊。“你用最粗暴的方式拒绝了最甜美的毒药。意志坚如磐石。”",
            "scoreDelta": {
              "wis": 3,
              "str": 1
            },
            "mbtiDelta": {
              "J": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_paladin": 3
            },
            "alignmentDelta": {
              "lawful": 2
            },
            "triggerTags": [
              "锤爆魅魔",
              "坚守寿命"
            ],
            "outcomeTone": "合格",
            "branchHint": "彻底战胜了对死亡的恐惧",
            "targetId": "guild_paladin"
          },
          {
            "id": "B",
            "text": "假装同意她的交易，在靠近锁链的瞬间，将一张极其高阶的驱魔符咒死死贴在了她的额头上，借机加固了封印。",
            "npcReply": "魅魔在尖叫中被重新封印。“非常狡猾的战术。神明不会介意你用一点谎言来对付恶魔。”",
            "scoreDelta": {
              "int": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 1,
              "guild_paladin": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "假意逢迎",
              "符咒糊脸"
            ],
            "outcomeTone": "偏离",
            "branchHint": "懂得变通的智慧型圣武士",
            "targetId": "guild_paladin"
          },
          {
            "id": "C",
            "text": "觉得魅魔给的条件太小气，极其专业地拿出一份传销合同，试图忽悠魅魔加入‘光明洗发水代理’业务，赚够一千年的寿命。",
            "npcReply": "魅魔被你这极其离谱的传销思路给整不会了，吓得自己把锁链给焊死了。“……你这属于恶人自有恶人磨。”",
            "scoreDelta": {
              "cha": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "F": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_paladin": -2,
              "guild_warlock": 2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "传销魅魔",
              "无耻推销"
            ],
            "outcomeTone": "危险",
            "branchHint": "毫无信仰，极易堕落的软骨头",
            "targetId": "guild_paladin"
          },
          {
            "id": "D",
            "text": "开始极其认真地跟魅魔讨价还价，要求除了五百年寿命外，还要包吃包住并附带五险一金，否则免谈。",
            "npcReply": "魅魔被你繁琐的劳动合同条款搞得极度烦躁，主动切断了精神连接。“……你用官僚主义打败了邪恶。”",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_bard": 1,
              "guild_paladin": 1
            },
            "alignmentDelta": {
              "expression": 1
            },
            "triggerTags": [
              "五险一金",
              "恶魔砍价"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其离谱的谈判鬼才",
            "targetId": "guild_paladin"
          }
        ]
      },
      {
        "id": "human_paladin_exhaustion",
        "targetId": "guild_paladin",
        "title": "破损的盔甲",
        "scene": "连续高强度的剿匪任务让你身心俱疲。你的盔甲已经破烂不堪，军饷也已经三个月没发了。今天，一个富商甩给你一袋金币，只求你在他走私货物时闭上眼睛转过身去。",
        "prompt": "金币砸在地上发出清脆的响声。现实的疲惫与神圣的誓言，你选择哪一边？",
        "options": [
          {
            "id": "A",
            "text": "一脚将金币踢回富商脸上，拔出破破烂烂的长剑：‘我的盔甲会破，但我的脊梁不会。以圣光之名，你被捕了。’",
            "npcReply": "富商被你眼中的光芒震慑，乖乖束手就擒。“哪怕在最肮脏的泥沼里，凡人的灵魂依然能熠熠生辉。”",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "J": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_paladin": 3
            },
            "alignmentDelta": {
              "lawful": 2,
              "good": 1
            },
            "triggerTags": [
              "严拒贿赂",
              "傲骨长存"
            ],
            "outcomeTone": "合格",
            "branchHint": "绝对纯正的古典圣武士",
            "targetId": "guild_paladin"
          },
          {
            "id": "B",
            "text": "把金币捡起来收进怀里，然后反手就把富商连同货物一起扣押了：‘感谢你为公会捐献的剿匪军费。人带走。’",
            "npcReply": "富商破口大骂你不讲信用。“你游走在规则的灰色地带，但结果是好的。典型的黑吃黑正义。”",
            "scoreDelta": {
              "int": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 1,
              "guild_paladin": 2
            },
            "alignmentDelta": {
              "risk": 1,
              "control": 1
            },
            "triggerTags": [
              "黑吃黑",
              "没收赃款"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其务实且狡猾的街头执法者",
            "targetId": "guild_paladin"
          },
          {
            "id": "C",
            "text": "你不仅没收缴货物，反而觉得他们的走私路线太蠢，开始极其专业地指导他们应该怎么避开教廷税收和伪造通关文牒。",
            "npcReply": "走私犯被你极其硬核的走私理论给折服了。“……你到底是圣武士还是黑帮会计？”",
            "scoreDelta": {
              "cha": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_paladin": -2,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "指导走私",
              "彻底腐化"
            ],
            "outcomeTone": "危险",
            "branchHint": "因生活压力而堕落的堕落骑士",
            "targetId": "guild_paladin"
          },
          {
            "id": "D",
            "text": "盯着金币看了很久，突然哇地一声哭了出来，一边哭一边抱怨物价太高、盔甲太沉，把富商吓得连钱都不要就跑了。",
            "npcReply": "你在街头号啕大哭的形象彻底粉碎了圣武士的威严。“……你可能需要去看一下心理医生。”",
            "scoreDelta": {
              "cha": 2,
              "wis": -1
            },
            "mbtiDelta": {
              "E": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "expression": 2
            },
            "triggerTags": [
              "当街崩溃",
              "吓跑歹徒"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "压力过大导致精神失常的搞笑打工人",
            "targetId": "guild_paladin"
          }
        ]
      },
      {
        "id": "human_paladin_final_proof",
        "targetId": "guild_paladin",
        "title": "凡人的天平",
        "scene": "白银誓约庭的最终洗礼。大主教将圣水洒在你的额头：‘很多异族嘲笑人类的圣武士是可笑的流星。我们寿命短暂，极易腐化。你为什么还要接过这副重担？’",
        "prompt": "面对大主教关于人类劣根性的拷问，你的最终回答是：",
        "options": [
          {
            "id": "A",
            "text": "抬头直视神像：‘正因为我们生命如流星般短暂，我们燃烧时的光芒才足以划破这漫长的黑夜。异族的永生只是停滞，凡人的誓言重于泰山。’",
            "npcReply": "大主教将圣白长剑递入你手中。“阿门。去照亮那片黑夜吧，燃烧的凡者。”",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "N": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_paladin": 3
            },
            "alignmentDelta": {
              "lawful": 2,
              "good": 1
            },
            "triggerTags": [
              "流星誓言",
              "接下重担"
            ],
            "outcomeTone": "合格",
            "branchHint": "完美的圣武士毕业宣言",
            "targetId": "guild_paladin"
          },
          {
            "id": "B",
            "text": "擦去额头的圣水：‘我不关心什么永生。我只知道，如果没有人来维持秩序，人类的城邦明天就会变成废墟。我只在乎现世的安宁。’",
            "npcReply": "大主教点了点头。“缺乏一点浪漫，但极其扎实。这正是白银法庭需要的基石。”",
            "scoreDelta": {
              "int": 2,
              "con": 1
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_paladin": 2
            },
            "alignmentDelta": {
              "order": 2
            },
            "triggerTags": [
              "现世秩序",
              "实用信仰"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其务实的护教军风格",
            "targetId": "guild_paladin"
          },
          {
            "id": "C",
            "text": "冷笑一声：‘少给我洗脑了。我加入誓约庭只是因为这里的伙食最好，而且圣武士的头衔在贵族寡妇圈子里很吃得开。’",
            "npcReply": "圣水在你额头上变得滚烫，将你烫伤。“亵渎者！你根本不配站在这里！”",
            "scoreDelta": {
              "cha": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_paladin": -2,
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "贪图美色",
              "当面亵渎"
            ],
            "outcomeTone": "危险",
            "branchHint": "因动机极其不纯被当场开除",
            "targetId": "guild_paladin"
          },
          {
            "id": "D",
            "text": "突然拿出一本厚厚的《偏方大全》：‘所以我们在念誓言之前，能不能先讨论一下公会怎么解决我的养老和工伤脱发问题？’",
            "npcReply": "大主教被你气得差点脑溢血。“……你的世俗焦虑已经严重干扰了神圣的仪式！”",
            "scoreDelta": {
              "int": 2,
              "cha": -1
            },
            "mbtiDelta": {
              "E": 1,
              "S": 1
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "expression": 1
            },
            "triggerTags": [
              "工伤脱发",
              "医保谈判"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "在最神圣的时刻讨论最世俗的问题",
            "targetId": "guild_paladin"
          }
        ]
      },
      {
        "id": "human_paladin_heretic",
        "targetId": "guild_paladin",
        "title": "异教的火刑架",
        "scene": "你押送一名精灵异教徒前往火刑架。一路上，她一直平静地向你阐述她的信仰，你震惊地发现她的教义中充满了对生命真正的热爱和对穷人的怜悯，远比你的上级更加高尚。",
        "prompt": "当处刑的火把交到你手中时，面对信仰的巨大割裂，你的决定是：",
        "options": [
          {
            "id": "A",
            "text": "丢下火把，当众斩断了绑着精灵的锁链：‘如果圣光需要焚烧无辜者的善良来维持纯洁，那我宁愿坠入黑暗！’",
            "npcReply": "你成为了教廷的通缉犯，但也成了自由意志的英雄。“你剥离了教条的躯壳，触碰到了善良的核心。”",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "F": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_paladin": 3
            },
            "alignmentDelta": {
              "good": 2,
              "chaotic": 1
            },
            "triggerTags": [
              "劫法场",
              "反抗教条"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其纯粹的善良与自我觉醒",
            "targetId": "guild_paladin"
          },
          {
            "id": "B",
            "text": "痛苦地闭上眼睛，点燃了火把。作为执法者，你不能因为个人的情感判断去推翻帝国的法律基石，否则世界将陷入无序。",
            "npcReply": "精灵化为灰烬，你的良知也死了一半。“极其冰冷的秩序维护者，你背负了体制的罪恶。”",
            "scoreDelta": {
              "int": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "T": 2,
              "J": 2
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_paladin": 1
            },
            "alignmentDelta": {
              "lawful": 2,
              "order": 1
            },
            "triggerTags": [
              "含泪行刑",
              "秩序至上"
            ],
            "outcomeTone": "偏离",
            "branchHint": "为了秩序牺牲良知的法条主义者",
            "targetId": "guild_paladin"
          },
          {
            "id": "C",
            "text": "为了讨好上面来视察的大主教，你不仅点燃了火把，还极力煽动周围的民众向异教徒扔石头，高呼赞美神明的口号。",
            "npcReply": "你获得了大主教的赏识，但你的灵魂已经腐烂透顶。“踩着无辜者的尸骨往上爬的伪信徒。”",
            "scoreDelta": {
              "cha": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "E": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_paladin": -2,
              "guild_bard": 1
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "落井下石",
              "政治投机"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度虚伪且不择手段的政客",
            "targetId": "guild_paladin"
          },
          {
            "id": "D",
            "text": "大声宣布火把受了潮点不着，然后以极其夸张的演技在刑场上表演了一套‘求火舞’，硬生生拖延时间直到下起了暴雨。",
            "npcReply": "暴雨浇灭了柴堆，死刑被迫推迟。大主教看着满身是泥的你陷入了沉思。“……你对程序的破坏力简直堪比天灾。”",
            "scoreDelta": {
              "cha": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "P": 2,
              "E": 1
            },
            "affinityDelta": {
              "guild_bard": 1,
              "guild_paladin": 1
            },
            "alignmentDelta": {
              "expression": 2
            },
            "triggerTags": [
              "求火舞",
              "物理拖延"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "用令人智熄的演技强行拖延时间的乐子人",
            "targetId": "guild_paladin"
          }
        ]
      }
    ]
  }
};
  window.RACE_RECRUITMENT_DATASET = Object.freeze({
    ...(window.RACE_RECRUITMENT_DATASET || {}),
    "human": Object.freeze(data),
  });
})();
