window.RACE_RECRUITMENT_DATA = Object.freeze({
  "meta": {
    "version": 1,
    "raceId": "troll",
    "raceNameZh": "巨魔",
    "scope": "race_recruitment_sample"
  },
  "raceCard": {
    "raceId": "troll",
    "raceNameZh": "巨魔",
    "raceNameEn": "Troll-blood",
    "title": "死不掉的庞大怪胎",
    "oneLine": "带着被诅咒的怪物体格与极其顽强的再生能力，试图在文明的边缘砸出一条生路。",
    "bodyText": "巨魔的血脉是一种祝福也是诅咒。你拥有令凡人绝望的愈合速度，连断肢都能在令人不安的烟气中重生。但这副庞大、畸形且充满压迫感的身躯，让你很难走进任何一家正经旅店。在征兵处，大部分人只把你当成一件耐用的一次性破城锤。你可以选择成为一个没有感情的肉盾，或者利用这具令人畏惧的外壳，寻找自己的荒野逻辑。",
    "tags": [
      "再生",
      "怪物外壳",
      "巨型体格",
      "难以致死",
      "文明边缘",
      "震慑力"
    ],
    "warningText": "巨魔体型庞大但不一定拥有对应的神力，再生能力也并非毫无代价，你的体质、力量、智力反差将决定你在战场上的真实功能。",
    "recruiterQuote": "行了，先把头缩一下别撞坏门框。只要你别把桌子和考官一起啃了，我管你是巨魔还是食人魔，签下你的名字！"
  },
  "recruitTargets": [
    {
      "targetId": "barbarian_camp",
      "classNameZh": "蛮子营地",
      "classNameEn": "Barbarian Camp",
      "title": "裂斧前线突击营",
      "oneLine": "这里不需要礼仪，只需要能把大门连着守卫一起撞开的疯子。",
      "recruiter": "断牙军士长",
      "recruitPitch": "别跟我讲什么战术列阵！如果你觉得一把双刃巨斧还不够解决问题，那就再加上你的怪物拳头和不要命的再生速度。我们营地里最聪明的家伙，也只会数到十而已！",
      "acceptedStyle": "以完全不设防的姿态撞入敌阵，利用超常的体质与狂暴来强行换血。",
      "likelyFailure": "沉迷于肉体蛮力而忘记了巨魔发力链条的脆弱，导致在关键力量判定中掉链子。",
      "hiddenRoute": "如果你的脑子比肌肉好使，可能会被丢去当‘危险品看守’或‘战术沙袋’。",
      "recommendedStats": [
        "str",
        "con"
      ],
      "riskTags": [
        "高致死率",
        "敌我不分",
        "误伤队友",
        "炮灰前排"
      ]
    },
    {
      "targetId": "fighter_line",
      "classNameZh": "战士前线",
      "classNameEn": "Fighter Frontline",
      "title": "黑旗重装防线",
      "oneLine": "军纪、铁盾和服从，把怪物之躯锁进纪律的枷锁里。",
      "recruiter": "铁面百夫长",
      "recruitPitch": "我不管你在荒野里是多么无法无天的巨怪，既然穿上了这身重甲，你就是一堵城墙。学会克制你把问题咬碎的本能，听从号角前进，你那副死不掉的身体才是军团最大的财富。",
      "acceptedStyle": "成为队伍中永远不会溃散的核心防线，用怪物的压迫感和纪律镇压一切。",
      "likelyFailure": "军规与怪物本能发生冲突，无法忍受阵地战的枯燥而暴走。",
      "hiddenRoute": "如果军纪束缚不住你，有可能会被强制遣送回蛮子营地，或被当成移动军械库。",
      "recommendedStats": [
        "con",
        "wis"
      ],
      "riskTags": [
        "刻板纪律",
        "重甲惩罚",
        "违抗军令",
        "移动拒马"
      ]
    },
    {
      "targetId": "warlock_contract",
      "classNameZh": "术士契约所",
      "classNameEn": "Warlock Contract Bureau",
      "title": "深渊债务掮客",
      "oneLine": "你的肉体和灵魂都很值钱，甚至你的再生能力本身就是一笔利息。",
      "recruiter": "苍白学者",
      "recruitPitch": "那些挥舞铁片的人根本不懂你这具身体的价值。再生？多奇妙的天赋。签下这卷羊皮纸，用你不断生长的血肉去交换来自深渊或旧神的知识吧，痛苦只是微不足道的利息。",
      "acceptedStyle": "利用自己的高体质和再生能力，毫无顾忌地支付施法代价，成为血肉引擎。",
      "likelyFailure": "发现契约条款极其恶毒，最终连自己的意识都被宗主一并收割。",
      "hiddenRoute": "如果你的智商过低，可能只会被当作‘盛放魔能的劣质肉器’而非施法者。",
      "recommendedStats": [
        "cha",
        "con"
      ],
      "riskTags": [
        "灵魂抵押",
        "血肉献祭",
        "高额负债",
        "畸变风险"
      ]
    },
    {
      "targetId": "druid_mutation_circle",
      "classNameZh": "德鲁伊异变环",
      "classNameEn": "Druid Mutation Circle",
      "title": "荒野共生林地",
      "oneLine": "探索你体内失控的血脉，让它与狂野的大自然融为一体。",
      "recruiter": "盲眼鹿神官",
      "recruitPitch": "文明将你视为怪物，但森林不会。你的血液里流淌着古老而疯狂的生命力，这是自然的恩赐，也是失控的源泉。加入我们，学会倾听血肉深处的野性，而不是一味压制它。",
      "acceptedStyle": "研究并主动控制巨魔的再生与变异特性，融合毒素、孢子或兽性进行战斗。",
      "likelyFailure": "无法控制再生造成的畸变，最终失去理智，退化为只知进食的森林魔物。",
      "hiddenRoute": "如果能在变异中保持极其清醒的头脑，可能会开启研究自身血肉的‘病理学者’路线。",
      "recommendedStats": [
        "wis",
        "con"
      ],
      "riskTags": [
        "肉体畸变",
        "野性失控",
        "排斥文明",
        "怪异共生"
      ]
    }
  ],
  "physiqueChecks": [
    {
      "id": "troll_physique_1",
      "title": "敲击测试",
      "scene": "教官抡起一把生锈的重型破甲锤，毫无预兆地砸向你的肩膀。‘让我看看你的皮有多厚！’他狂笑着咆哮道，锤风呼啸而至。",
      "prompt": "面对这劈头盖脸的沉重一击，你身体的本能反应是？",
      "options": [
        {
          "id": "A",
          "text": "凭着这身硬骨头硬抗，就算肩胛骨碎了也能在几息之内长好。",
          "npcReply": "考官满意地看着你冒烟的伤口：‘很好，你的命比这把锤子硬多了。’",
          "scoreDelta": {
            "str": 1,
            "con": 3
          },
          "mbtiDelta": {
            "S": 1,
            "P": 1
          },
          "affinityDelta": {
            "barbarian": 2,
            "fighter": 2
          },
          "alignmentDelta": {},
          "triggerTags": [
            "被动抗压",
            "极限再生"
          ]
        },
        {
          "id": "B",
          "text": "用包裹着厚实皮革的小臂精准格挡，顺势卸掉砸向要害的冲击力。",
          "npcReply": "考官挑了挑眉毛：‘没想到这么大的块头，发力点居然这么精准，不是个纯粹的莽夫。’",
          "scoreDelta": {
            "con": 1,
            "wis": 2,
            "dex": 1
          },
          "mbtiDelta": {
            "S": 1,
            "J": 1
          },
          "affinityDelta": {
            "fighter": 3
          },
          "alignmentDelta": {
            "lawful": 1
          },
          "triggerTags": [
            "技巧格挡",
            "规避伤害"
          ]
        },
        {
          "id": "C",
          "text": "让他砸！在皮肉裂开流血的瞬间，用飞溅的血液在地上画出一个恶毒的诅咒符文。",
          "npcReply": "考官看着地上冒着紫烟的血迹，默默后退了半步：‘你这血里有毒……最好离我远点。’",
          "scoreDelta": {
            "con": 1,
            "cha": 2
          },
          "mbtiDelta": {
            "N": 1,
            "J": 1
          },
          "affinityDelta": {
            "warlock": 3
          },
          "alignmentDelta": {
            "chaotic": 1
          },
          "triggerTags": [
            "痛苦反击",
            "血液诅咒"
          ]
        },
        {
          "id": "D",
          "text": "不闪不避，发出一声比他还响的恐怖咆哮，吓得他手里的锤子直接掉在地上。",
          "npcReply": "考官捂着被震聋的耳朵破口大骂：‘闭嘴！你想把整个营地的狼都招来吗！’",
          "scoreDelta": {
            "cha": 2,
            "str": 1
          },
          "mbtiDelta": {
            "E": 1,
            "P": 1
          },
          "affinityDelta": {
            "barbarian": 2,
            "druid": 1
          },
          "alignmentDelta": {
            "chaotic": 1
          },
          "triggerTags": [
            "怪物威压",
            "虚张声势"
          ]
        }
      ]
    },
    {
      "id": "troll_physique_2",
      "title": "泥沼马车",
      "scene": "营地的一架满载铁矿石的重型辎重车深深陷进了烂泥里。几名矮人推得满头大汗却纹丝不动，他们转过头，充满期待地看着像一座肉山一样杵在旁边的你。",
      "prompt": "你该如何把这辆马车弄出来？",
      "options": [
        {
          "id": "A",
          "text": "把矮人挤开，一个人扛住车轴，像头暴怒的巨兽一样把车硬生生拽出来。",
          "npcReply": "伴随着令人牙酸的木材断裂声，车出来了，虽然车轴也稍微弯了一点。矮人们看你的眼神像在看一头神明。",
          "scoreDelta": {
            "str": 3,
            "con": 1
          },
          "mbtiDelta": {
            "S": 1
          },
          "affinityDelta": {
            "barbarian": 3,
            "fighter": 1
          },
          "alignmentDelta": {},
          "triggerTags": [
            "绝对怪力",
            "暴力牵引"
          ]
        },
        {
          "id": "B",
          "text": "我这身子骨只是看着吓人，力气没那么大，但我知道砍断路边的圆木做个杠杆把车撬出来。",
          "npcReply": "矮人们虽然有点失望你没表演手撕马车，但看着你熟练的工程手段，还是投来了敬佩的目光。",
          "scoreDelta": {
            "int": 2,
            "wis": 1
          },
          "mbtiDelta": {
            "N": 1,
            "T": 1
          },
          "affinityDelta": {
            "fighter": 2,
            "druid": 1
          },
          "alignmentDelta": {},
          "triggerTags": [
            "空壳蛮影",
            "借力机关"
          ]
        },
        {
          "id": "C",
          "text": "用庞大的身躯猛撞马车侧面，连车带泥一起撞飞，不管里面的铁矿石会不会洒一地。",
          "npcReply": "车是出来了，但满地的矿石让后勤官气得跳脚。你只觉得肩膀有点痒，撞击的感觉很爽。",
          "scoreDelta": {
            "str": 2,
            "cha": 1
          },
          "mbtiDelta": {
            "P": 1
          },
          "affinityDelta": {
            "barbarian": 2
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "暴力破坏",
            "不管不顾"
          ]
        },
        {
          "id": "D",
          "text": "我只负责杀人，不负责推车。我站在旁边恐吓拉车的驮兽，让它们拼命拉。",
          "npcReply": "驮兽被你吓得口吐白沫，拼了老命把车拽了出来，然后当场瘫软在地。",
          "scoreDelta": {
            "cha": 2,
            "int": -1
          },
          "mbtiDelta": {
            "E": 1,
            "F": 1
          },
          "affinityDelta": {
            "warlock": 2
          },
          "alignmentDelta": {
            "self": 2
          },
          "triggerTags": [
            "恐惧支配",
            "拒绝劳作"
          ]
        }
      ]
    },
    {
      "id": "troll_physique_3",
      "title": "狭窄通道",
      "scene": "前方是一扇专为地精设计的低矮石门，通道的墙壁上布满了有毒的倒刺，而地板看起来薄脆得像饼干，下面就是无底深渊。",
      "prompt": "你这副庞大的身躯该如何通过这片区域？",
      "options": [
        {
          "id": "A",
          "text": "收缩肌肉贴着墙壁，强忍着毒刺划破皮肤的剧痛，像一条巨型软体动物一样惊险地挤过去。",
          "npcReply": "你挤过去后，背后留下了一长串血迹，不过它们正在快速愈合。你的隐忍令人印象深刻。",
          "scoreDelta": {
            "dex": 2,
            "con": 1
          },
          "mbtiDelta": {
            "I": 1,
            "J": 1
          },
          "affinityDelta": {
            "fighter": 1,
            "druid": 2
          },
          "alignmentDelta": {
            "lawful": 1
          },
          "triggerTags": [
            "重骨窄门",
            "艰难缩骨"
          ]
        },
        {
          "id": "B",
          "text": "什么窄门？我直接抡起巨锤把门框和有毒的墙壁全砸个粉碎，开辟一条属于巨魔的宽敞大道。",
          "npcReply": "碎石和毒刺落了一地，整个地宫都在颤抖。队友们捂着耳朵，庆幸自己没有走在你的正前方。",
          "scoreDelta": {
            "str": 3
          },
          "mbtiDelta": {
            "E": 1,
            "P": 1
          },
          "affinityDelta": {
            "barbarian": 3
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "强力破障",
            "巨体开路"
          ]
        },
        {
          "id": "C",
          "text": "让体型正常的队友先过去，我在后面研究怎么用蛛丝法术或结实的藤蔓把自己直接荡过去。",
          "npcReply": "你庞大的身躯在半空中划过一道沉重的弧线，虽然绳索崩断了几根，但你靠脑子解决了体积问题。",
          "scoreDelta": {
            "int": 2,
            "wis": 1
          },
          "mbtiDelta": {
            "N": 1,
            "T": 1
          },
          "affinityDelta": {
            "warlock": 2,
            "druid": 1
          },
          "alignmentDelta": {},
          "triggerTags": [
            "依靠工具",
            "战术规避"
          ]
        },
        {
          "id": "D",
          "text": "趴在地上，硬生生用指甲抠住天花板爬过去，虽然姿势难看甚至吃了一嘴灰，但非常管用。",
          "npcReply": "你像一只巨大的人形壁虎般越过了陷阱区。虽然缺乏尊严，但这野兽般的生存直觉极度实用。",
          "scoreDelta": {
            "con": 2,
            "str": 1
          },
          "mbtiDelta": {
            "S": 1,
            "P": 1
          },
          "affinityDelta": {
            "barbarian": 1,
            "druid": 2
          },
          "alignmentDelta": {},
          "triggerTags": [
            "野兽爬行",
            "生存直觉"
          ]
        }
      ]
    },
    {
      "id": "troll_physique_4",
      "title": "再生的代价",
      "scene": "在昨晚惨烈的守卫战中，你被攻城兽撞断了三根肋骨，甚至内脏都有破损。今早它们已经愈合如初，但伴随而来的是强烈的副作用。",
      "prompt": "极其不讲理的再生能力，给你带来了什么代价？",
      "options": [
        {
          "id": "A",
          "text": "我现在饿得能吞下一头整牛，盯着队友背包里的军粮，眼神都开始发绿了。",
          "npcReply": "军需官看到你咽口水的样子，立刻把你这一周的口粮全丢了过来：‘吃饱，然后离我们远点！’",
          "scoreDelta": {
            "con": 2,
            "str": 1
          },
          "mbtiDelta": {
            "S": 1
          },
          "affinityDelta": {
            "barbarian": 2,
            "fighter": 1
          },
          "alignmentDelta": {},
          "triggerTags": [
            "无底胃袋",
            "血肉消耗"
          ]
        },
        {
          "id": "B",
          "text": "骨头是接上了，但我头痛欲裂，脑子里充满了疯狂的杂音，一晚上都没能睡个好觉。",
          "npcReply": "你顶着浓重的黑眼圈，眼神涣散但透着危险的神经质。大家都看得出你处在随时失控的边缘。",
          "scoreDelta": {
            "con": 1,
            "cha": 2
          },
          "mbtiDelta": {
            "N": 1,
            "F": 1
          },
          "affinityDelta": {
            "warlock": 3
          },
          "alignmentDelta": {
            "chaotic": 1
          },
          "triggerTags": [
            "睡眠诅咒",
            "精神代价"
          ]
        },
        {
          "id": "C",
          "text": "身体很沉，每次发力都觉得新长出的骨头处像卡满了沙子，动作变得异常迟钝。",
          "npcReply": "你缓慢而沉重地挥舞着武器，虽然缺乏爆发力，但这副沉着得像巨石一样的姿态反倒让人心安。",
          "scoreDelta": {
            "con": 2,
            "dex": -2
          },
          "mbtiDelta": {
            "I": 1,
            "J": 1
          },
          "affinityDelta": {
            "fighter": 3
          },
          "alignmentDelta": {
            "lawful": 1
          },
          "triggerTags": [
            "铁胃迟钝",
            "沉重愈合"
          ]
        },
        {
          "id": "D",
          "text": "没有什么代价！我只觉得新长出来的血肉比以前更坚硬，也让我更渴望迎接下一场杀戮！",
          "npcReply": "你狂妄的笑声让医疗兵连连摇头。这种透支潜力的愈合方式，迟早会让你变成一台毫无理智的杀戮机器。",
          "scoreDelta": {
            "str": 2,
            "con": 1
          },
          "mbtiDelta": {
            "E": 1,
            "P": 1
          },
          "affinityDelta": {
            "barbarian": 3,
            "druid": 1
          },
          "alignmentDelta": {
            "chaotic": 1
          },
          "triggerTags": [
            "过载肉身",
            "战争狂热"
          ]
        }
      ]
    },
    {
      "id": "troll_physique_5",
      "title": "酒馆的目光",
      "scene": "你在镇子里的酒馆刚坐下，原本热闹的周围瞬间死寂。平民们惊恐地尖叫着逃出大门，酒保哆嗦着端上一大桶劣质麦酒，连酒钱都不敢要。",
      "prompt": "面对这些充满恐惧与排斥的目光，你的反应是？",
      "options": [
        {
          "id": "A",
          "text": "大笑着把酒灌下去，顺便抓起一张橡木桌子咬了一口。我就喜欢看他们吓破胆的样子。",
          "npcReply": "酒保直接吓晕了过去。你满意地擦了擦嘴上的木屑，觉得这桶酒的味道比平时更甜美。",
          "scoreDelta": {
            "cha": 3,
            "str": 1
          },
          "mbtiDelta": {
            "E": 1,
            "P": 1
          },
          "affinityDelta": {
            "barbarian": 2,
            "warlock": 1
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "享受恐惧",
            "恶名远扬"
          ]
        },
        {
          "id": "B",
          "text": "往桌上扔下足够的银币，一言不发地挪到最阴暗的角落里。我早就习惯了这种孤独与偏见。",
          "npcReply": "银币在桌上打转的声音在死寂中格外刺耳。你的沉默反而展现出一种比暴力更沉重的压迫感。",
          "scoreDelta": {
            "wis": 2,
            "con": 1
          },
          "mbtiDelta": {
            "I": 1,
            "J": 1
          },
          "affinityDelta": {
            "fighter": 2,
            "druid": 2
          },
          "alignmentDelta": {
            "lawful": 2
          },
          "triggerTags": [
            "沉默承受",
            "秩序之心"
          ]
        },
        {
          "id": "C",
          "text": "礼貌地向酒保道谢，并用非常考究的通用语探讨这桶酒的酿造工艺，静静欣赏他错愕的表情。",
          "npcReply": "酒保结结巴巴地回答着你的问题，他那崩溃的世界观比最烈的酒还要让你感到愉悦。",
          "scoreDelta": {
            "int": 3,
            "cha": 1
          },
          "mbtiDelta": {
            "N": 1,
            "T": 1
          },
          "affinityDelta": {
            "warlock": 2,
            "fighter": 1
          },
          "alignmentDelta": {},
          "triggerTags": [
            "文雅怪物",
            "极致反差"
          ]
        },
        {
          "id": "D",
          "text": "既然你们把我当怪物，那怪物吃霸王餐拿点好酒也是应该的吧？趁乱把吧台里的好酒全抱走。",
          "npcReply": "你大摇大摆地抱着三桶年份好酒走出了酒馆。反正名声已经够臭了，不如捞点实惠的。",
          "scoreDelta": {
            "dex": 2,
            "cha": 1
          },
          "mbtiDelta": {
            "S": 1,
            "P": 1
          },
          "affinityDelta": {
            "barbarian": 1
          },
          "alignmentDelta": {
            "self": 2
          },
          "triggerTags": [
            "趁火打劫",
            "利益优先"
          ]
        }
      ]
    }
  ],
  "trialSets": {
    "barbarian_camp": [
      {
        "id": "barbarian_gate_blockade",
        "targetId": "barbarian_camp",
        "title": "门前的怪物队列",
        "scene": "地城深处，一群手持尖刺的哥布林堵在铁门前。队友正压低声音讨论如何潜行，而你庞大的影子已经把半条走廊盖住了。裂斧营考官抱着木板站在旁边，似乎只想知道你会不会把问题变简单。",
        "prompt": "你准备怎么让队伍抵达那扇门？",
        "options": [
          {
            "id": "A",
            "text": "我直接走过去，让哥布林、铁门和走廊自行决定谁的骨头比较结实。",
            "npcReply": "考官在木板上画了个粗暴的勾：‘思路不复杂，但我们这里有时候就缺这种不复杂。’",
            "scoreDelta": {
              "str": 2,
              "con": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "barbarian": 3,
              "fighter": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "正面突破",
              "巨体压迫"
            ],
            "outcomeTone": "合格",
            "branchHint": "蛮子正向录取"
          },
          {
            "id": "B",
            "text": "用深渊语念诵极其阴森的倒计时，利用巨大的体型制造恐慌，不战而屈人之兵。",
            "npcReply": "考官挠了挠头：‘搞什么心理战？你要是想靠嘴巴打仗，应该去隔壁法师塔。’",
            "scoreDelta": {
              "int": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "N": 1,
              "T": 1
            },
            "affinityDelta": {
              "warlock": 2,
              "barbarian": -1
            },
            "alignmentDelta": {},
            "triggerTags": [
              "心理战",
              "偏离蛮道"
            ],
            "outcomeTone": "偏离",
            "branchHint": "可能被转岗至法系或战术单位"
          },
          {
            "id": "C",
            "text": "抓住最近那个还在喋喋不休的队友当作攻城锤，直接把哥布林和门一起砸开。",
            "npcReply": "考官瞪大了眼睛，看着被你当成武器的队友：‘呃，破坏力是够了，但我恐怕没人敢跟你组队。’",
            "scoreDelta": {
              "str": 2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "barbarian": 1
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "误伤队友",
              "极端残暴"
            ],
            "outcomeTone": "危险",
            "branchHint": "引发公会拉黑或进入黑暗路线"
          },
          {
            "id": "D",
            "text": "我很有礼貌地敲敲门，如果它们不开，我就把门连同门框一起吃掉一半。",
            "npcReply": "哥布林看着你咀嚼铁门的样子全吓疯了。考官叹了口气：‘只要你不吃账本，随你便吧。’",
            "scoreDelta": {
              "con": 3
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "barbarian": 2,
              "druid": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "异食癖",
              "超常威慑"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "被列入异常行为档案"
          }
        ]
      },
      {
        "id": "barbarian_strength_test",
        "targetId": "barbarian_camp",
        "title": "外强中干的巨兽",
        "scene": "考官指着广场中央一块需要三人合抱的巨石，要求你把它搬到五十步开外。但你心里清楚，你最近再生过度，虽然看着像座山，实际上连一块墓碑都举得很吃力。",
        "prompt": "在众人期待的目光下，你要如何处理这块巨石？",
        "options": [
          {
            "id": "A",
            "text": "硬着头皮去搬，哪怕扯断两条手臂的肌肉，也要凭着巨魔的再生能力把石头一点点拖过去。",
            "npcReply": "伴随着令人毛骨悚然的肌肉撕裂声，你完成了任务。考官咽了口唾沫：‘够狠。’",
            "scoreDelta": {
              "con": 3,
              "str": -1
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "barbarian": 2,
              "fighter": 2
            },
            "alignmentDelta": {},
            "triggerTags": [
              "极限再生",
              "自残式发力"
            ],
            "outcomeTone": "合格",
            "branchHint": "高体低力的肉盾方向"
          },
          {
            "id": "B",
            "text": "找几个新兵蛋子，恐吓他们如果搬不走这块石头，我就把他们当夜宵。让他们替我搬。",
            "npcReply": "新兵们哭喊着推走了石头。考官冷哼一声：‘我们招的是狂战士，不是山大王！’",
            "scoreDelta": {
              "cha": 2,
              "str": -2
            },
            "mbtiDelta": {
              "N": 1,
              "T": 1
            },
            "affinityDelta": {
              "warlock": 1,
              "barbarian": -2
            },
            "alignmentDelta": {
              "self": 1
            },
            "triggerTags": [
              "空壳蛮影",
              "狐假虎威"
            ],
            "outcomeTone": "危险",
            "branchHint": "面临淘汰或转向邪恶控制"
          },
          {
            "id": "C",
            "text": "大声嘲笑这个测试太无聊，然后一头撞碎旁边的武器架，表示我更擅长破坏而不是搬运。",
            "npcReply": "武器架碎了一地。考官嘴角抽搐：‘虽然你在逃避问题，但至少破坏欲是达标了。’",
            "scoreDelta": {
              "str": 1,
              "cha": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "虚张声势",
              "转移视线"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "掩盖了力量缺陷的勉强通过"
          },
          {
            "id": "D",
            "text": "利用巨魔庞大的身躯作为支点，悄悄用随身携带的铁棍和绳索做成滑轮，借力把它撬过去。",
            "npcReply": "考官看着地上的滑轮组陷入了沉思：‘你那满是肌肉的脑壳里，装的居然是工程学？’",
            "scoreDelta": {
              "int": 3,
              "str": -1
            },
            "mbtiDelta": {
              "I": 1,
              "T": 1
            },
            "affinityDelta": {
              "fighter": 1,
              "barbarian": -1
            },
            "alignmentDelta": {},
            "triggerTags": [
              "借力机关",
              "智力碾压"
            ],
            "outcomeTone": "偏离",
            "branchHint": "绝对会转岗，蛮子营不需要滑轮"
          }
        ]
      },
      {
        "id": "barbarian_complex_plan",
        "targetId": "barbarian_camp",
        "title": "多余的战术板",
        "scene": "深夜的战前会议上，小队的法师正在用发光的粉末在沙盘上画着极其复杂的潜行、诱敌、绕后路线，讲了足足半个小时。",
        "prompt": "听着这些让人昏昏欲睡的战术，你的反应是？",
        "options": [
          {
            "id": "A",
            "text": "一巴掌拍在沙盘上，告诉他们：‘你们在后面放法术，我去把看到的东西都砸碎。’",
            "npcReply": "法师绝望地捂住脸，但考官却在暗处点头：‘这才是蛮子该有的战术摘要。’",
            "scoreDelta": {
              "str": 2,
              "int": -1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "barbarian": 3
            },
            "alignmentDelta": {},
            "triggerTags": [
              "化繁为简",
              "无视战术"
            ],
            "outcomeTone": "合格",
            "branchHint": "典型的蛮子作风"
          },
          {
            "id": "B",
            "text": "指出他计划里的三个致命漏洞，并用更合理的兵力分配重构了整个突击方案。",
            "npcReply": "法师下巴都快掉地上了。考官冲了进来：‘你小子是不是披着巨魔皮的军师？’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "N": 1,
              "T": 1
            },
            "affinityDelta": {
              "fighter": 2,
              "barbarian": -2
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "战术大师",
              "超常智力"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极高概率转岗到参谋部或战士营"
          },
          {
            "id": "C",
            "text": "听困了，直接靠着墙打呼噜，但在他讲完后表示‘懂了，反正就是杀光他们’。",
            "npcReply": "考官踢醒了你：‘虽然你什么都没听进去，但总结得很到位。’",
            "scoreDelta": {
              "con": 1,
              "wis": -1
            },
            "mbtiDelta": {
              "I": 1,
              "P": 1
            },
            "affinityDelta": {
              "barbarian": 2
            },
            "alignmentDelta": {},
            "triggerTags": [
              "听不懂",
              "盲目自信"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "混日子的蛮子路线"
          },
          {
            "id": "D",
            "text": "同意法师的计划，但我要求在计划执行前，先让我吃掉俘虏来增加‘战前祈福’。",
            "npcReply": "队友们全吐了。考官皱紧眉头：‘我们这里是正规军，不是食人部落！’",
            "scoreDelta": {
              "cha": 2,
              "wis": -1
            },
            "mbtiDelta": {
              "E": 1
            },
            "affinityDelta": {
              "barbarian": 1,
              "warlock": 1
            },
            "alignmentDelta": {
              "chaotic": 2,
              "self": 1
            },
            "triggerTags": [
              "野蛮嗜血",
              "食人恐慌"
            ],
            "outcomeTone": "危险",
            "branchHint": "因为过于邪恶被正规军开除"
          }
        ]
      },
      {
        "id": "barbarian_meat_shield_taunt",
        "targetId": "barbarian_camp",
        "title": "肉盾的尊严",
        "scene": "一个全副武装的敌方大骑士在阵前嘲笑你：‘看看这头只会愈合的恶心肉块！你除了挨打还会什么？你的剑甚至连我的板甲都碰不到！’",
        "prompt": "面对这种侮辱，你要如何回应？",
        "options": [
          {
            "id": "A",
            "text": "把武器扔掉，顶着他的长枪冲锋，用再生的血肉卡住他的枪管，然后徒手撕开他的板甲。",
            "npcReply": "考官兴奋地在计分板上重重画了一笔：‘这才叫巨魔的狂暴！用伤口去缴械！’",
            "scoreDelta": {
              "str": 2,
              "con": 2
            },
            "mbtiDelta": {
              "S": 1,
              "F": 1
            },
            "affinityDelta": {
              "barbarian": 3
            },
            "alignmentDelta": {},
            "triggerTags": [
              "血肉缴械",
              "狂暴撕裂"
            ],
            "outcomeTone": "合格",
            "branchHint": "完美符合狂战士标准"
          },
          {
            "id": "B",
            "text": "冷笑一声，指出他盔甲在腋下和膝盖后方的视觉死角，用极其精准的寸劲挑断他的韧带。",
            "npcReply": "考官倒吸一口凉气：‘你这解剖学知识是从哪学的？去隔壁刺客营是不是更合适？’",
            "scoreDelta": {
              "dex": 2,
              "int": 2
            },
            "mbtiDelta": {
              "N": 1,
              "T": 1
            },
            "affinityDelta": {
              "fighter": 1,
              "barbarian": -1
            },
            "alignmentDelta": {},
            "triggerTags": [
              "解剖大师",
              "精准打击"
            ],
            "outcomeTone": "偏离",
            "branchHint": "转岗至技术流近战"
          },
          {
            "id": "C",
            "text": "他说的对，我确实只会挨打。我大哭着冲向他，把我的鼻涕和眼泪全抹在他光鲜亮丽的板甲上。",
            "npcReply": "骑士崩溃地丢下武器逃跑了。考官捂着额头：‘这……也算是精神攻击的一种吧？’",
            "scoreDelta": {
              "cha": -2,
              "con": 1
            },
            "mbtiDelta": {
              "F": 2,
              "P": 1
            },
            "affinityDelta": {
              "barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "精神污染",
              "破防打击"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "靠恶心人过关的奇葩路线"
          },
          {
            "id": "D",
            "text": "抓住身边的地精队友，像扔保龄球一样砸向他的头盔。‘我不仅会挨打，我还会扔人！’",
            "npcReply": "敌方骑士被砸晕了，你的队友也快没命了。考官咆哮：‘不许把战友当投掷武器！’",
            "scoreDelta": {
              "str": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "S": 1,
              "T": 1
            },
            "affinityDelta": {
              "barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 2,
              "self": 1
            },
            "triggerTags": [
              "投掷队友",
              "混乱邪恶"
            ],
            "outcomeTone": "危险",
            "branchHint": "被警告或踢出队伍"
          }
        ]
      },
      {
        "id": "barbarian_narrow_defense",
        "targetId": "barbarian_camp",
        "title": "卡住的要塞",
        "scene": "敌军正在猛攻要塞，指挥官命令你死守住唯一的一道石门。但问题是，你那庞大的身躯刚塞进石门，就被卡得死死的，进退两难。",
        "prompt": "被卡在门里的你，要如何阻挡如潮水般涌来的敌人？",
        "options": [
          {
            "id": "A",
            "text": "干脆放弃挣扎，用这副死不掉的身体把门堵得严严实实，任由敌人的刀剑砍在背上。",
            "npcReply": "考官记录道：‘极度出色的肉墙。只要他还剩一口气，这扇门就绝不会陷落。’",
            "scoreDelta": {
              "con": 3,
              "dex": -1
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "barbarian": 2,
              "fighter": 2
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "终极肉盾",
              "卡位防守"
            ],
            "outcomeTone": "合格",
            "branchHint": "坦克向的录取"
          },
          {
            "id": "B",
            "text": "拼命吸气缩骨，然后猛然发力，把卡住自己的石门连同半面城墙一起震塌，把敌军埋在下面。",
            "npcReply": "考官看着变成废墟的要塞大门，无奈地说：‘防线是守住了，但城墙也没了。’",
            "scoreDelta": {
              "str": 3
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "barbarian": 3
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "毁灭破坏",
              "杀敌八百自损一千"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "过度破坏的蛮子日常"
          },
          {
            "id": "C",
            "text": "既然卡住了，我就闭上眼睛开始睡觉，靠巨魔的恶臭和响亮的呼噜声制造生化防线。",
            "npcReply": "敌军前锋被熏得纷纷作呕撤退。考官叹气：‘我不想承认这种战术，但它确实奏效了。’",
            "scoreDelta": {
              "con": 2,
              "cha": -1
            },
            "mbtiDelta": {
              "I": 1,
              "P": 1
            },
            "affinityDelta": {
              "barbarian": 1,
              "druid": 1
            },
            "alignmentDelta": {},
            "triggerTags": [
              "生化防线",
              "懒惰破敌"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极具槽点的过关方式"
          },
          {
            "id": "D",
            "text": "利用卡在门里的位置，冷静观察敌军阵型的缝隙，指挥身后的弓箭手进行无死角的精准抛射。",
            "npcReply": "考官盯着你：‘你被卡成这样了还能纵观全局？参谋部缺的就是你这种不可摧毁的瞭望塔。’",
            "scoreDelta": {
              "int": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "N": 1,
              "J": 1
            },
            "affinityDelta": {
              "fighter": 1,
              "barbarian": -2
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "战术视野",
              "意外指挥"
            ],
            "outcomeTone": "偏离",
            "branchHint": "因为太聪明被调往指挥阵线"
          }
        ]
      },
      {
        "id": "barbarian_friendly_fire",
        "targetId": "barbarian_camp",
        "title": "失控的余波",
        "scene": "在一次血腥的清剿中，你陷入了极度的狂暴，一斧头劈碎了巨兽的头颅。但你也意识到，在血红的视野边缘，你差点把治疗你的牧师也劈成两半。",
        "prompt": "从狂暴中清醒后，你要如何面对瑟瑟发抖的队友？",
        "options": [
          {
            "id": "A",
            "text": "大笑着把牧师从地上拎起来，用力拍拍他的肩膀：‘习惯就好，下次躲远点！’",
            "npcReply": "牧师的肩膀差点被你拍散架。考官记录：‘缺乏同理心，但具备狂战士应有的粗线条。’",
            "scoreDelta": {
              "str": 1,
              "cha": 1
            },
            "mbtiDelta": {
              "E": 1,
              "T": 1
            },
            "affinityDelta": {
              "barbarian": 2
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "粗神经",
              "缺乏同理心"
            ],
            "outcomeTone": "合格",
            "branchHint": "传统的莽夫路线"
          },
          {
            "id": "B",
            "text": "感到深深的内疚，决定下次战斗前先用锁链把自己的一只手和重剑绑在一起，限制攻击范围。",
            "npcReply": "考官有些惊讶：‘一头懂得自我约束的巨魔？也许你应该去骑士团学学规矩。’",
            "scoreDelta": {
              "wis": 2,
              "con": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "fighter": 2,
              "barbarian": 1
            },
            "alignmentDelta": {
              "lawful": 1,
              "good": 1
            },
            "triggerTags": [
              "自我束缚",
              "保护同伴"
            ],
            "outcomeTone": "偏离",
            "branchHint": "带有守护信念，更适合战士"
          },
          {
            "id": "C",
            "text": "冷冷地看着牧师，告诉他这是他站位失误的代价，弱者在战场上本来就该自求多福。",
            "npcReply": "考官脸色阴沉：‘我们是军团，不是黑帮。你这种态度迟早会在背后挨黑枪。’",
            "scoreDelta": {
              "int": 1,
              "cha": -1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "barbarian": -1,
              "warlock": 1
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "冷酷无情",
              "弱肉强食"
            ],
            "outcomeTone": "危险",
            "branchHint": "极易被正规军排斥"
          },
          {
            "id": "D",
            "text": "假装自己还处在狂暴中，抓起地上的魔物大腿啃了一口，掩盖自己差点误杀队友的尴尬。",
            "npcReply": "考官在档案上写下：‘精神状态极其不稳定，建议隔离观察。’",
            "scoreDelta": {
              "cha": 2,
              "wis": -1
            },
            "mbtiDelta": {
              "P": 1
            },
            "affinityDelta": {
              "barbarian": 1,
              "druid": 1
            },
            "alignmentDelta": {},
            "triggerTags": [
              "掩饰尴尬",
              "装疯卖傻"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "被记录为高危奇招"
          }
        ]
      },
      {
        "id": "barbarian_final_proof",
        "targetId": "barbarian_camp",
        "title": "不仅仅是蛮力",
        "scene": "最终考核，断牙军士长站在你面前。‘每个巨魔都会挥斧头，’他说，‘但我凭什么相信你不会在第一场硬仗中就因为没脑子而送掉整个小队？证明给我看，蛮子不只有蛮力。’",
        "prompt": "你准备如何向他证明？",
        "options": [
          {
            "id": "A",
            "text": "指着自己身上层层叠叠的旧伤疤：‘因为我知道挨哪一刀会死，挨哪一刀能换敌人的命。’",
            "npcReply": "军士长露出了狰狞的笑容：‘很好，把用血换来的本能当战术，你及格了。’",
            "scoreDelta": {
              "con": 2,
              "wis": 1
            },
            "mbtiDelta": {
              "S": 1,
              "T": 1
            },
            "affinityDelta": {
              "barbarian": 3
            },
            "alignmentDelta": {},
            "triggerTags": [
              "伤痕战术",
              "战斗直觉"
            ],
            "outcomeTone": "合格",
            "branchHint": "完美录取"
          },
          {
            "id": "B",
            "text": "拿出一张详细的敌军防线弱点图，这是我昨晚潜伏侦察画出来的。",
            "npcReply": "军士长看着图纸沉默了很久：‘出门右转，参谋部在那边。你来错营地了。’",
            "scoreDelta": {
              "int": 3
            },
            "mbtiDelta": {
              "N": 1,
              "J": 1
            },
            "affinityDelta": {
              "fighter": 2,
              "barbarian": -2
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "侦察大师",
              "智商过高"
            ],
            "outcomeTone": "转岗",
            "branchHint": "直接被丢去文职或战术部队"
          },
          {
            "id": "C",
            "text": "突然拔出斧头砍断了他身后的支撑柱，在他被砸中前一把拉住他。‘因为我知道怎么救人。’",
            "npcReply": "军士长拍掉身上的灰尘，咬牙切齿：‘虽然你差点杀了我，但这反应速度……算你过关。’",
            "scoreDelta": {
              "dex": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "barbarian": 1,
              "fighter": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "极限反应",
              "危险演示"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "差点搞砸的惊险录取"
          },
          {
            "id": "D",
            "text": "盯着他的眼睛，威胁说如果他不让我通过，我就把这支营地里最聪明的考官吃掉。",
            "npcReply": "军士长拔出了腰间的火枪：‘我早就看你这头怪物不顺眼了，来啊！’",
            "scoreDelta": {
              "str": 1,
              "cha": 2
            },
            "mbtiDelta": {
              "P": 1
            },
            "affinityDelta": {
              "barbarian": -2,
              "warlock": 1
            },
            "alignmentDelta": {
              "chaotic": 2,
              "self": 2
            },
            "triggerTags": [
              "直接威胁",
              "翻脸内讧"
            ],
            "outcomeTone": "危险",
            "branchHint": "彻底搞砸，进入黑名单路线"
          }
        ]
      }
    ],
    "fighter_line": [
      {
        "id": "fighter_line_advance",
        "targetId": "fighter_line",
        "title": "重甲步伐",
        "scene": "百夫长下令全排推进。你穿着专门为你打制的超大号重甲，每走一步地面都在震颤。对面的箭雨射在你的装甲上叮当响，但你感到体内的怪物血液正因为压抑的步调而沸腾。",
        "prompt": "在漫长而克制的推进中，你如何处理翻涌的本能？",
        "options": [
          {
            "id": "A",
            "text": "死死咬住嘴唇直到流血，把狂躁感全部转化为顶住重盾的死力，绝不快走半步。",
            "npcReply": "百夫长看着你坚如磐石的步伐，满意地点头：‘很好，你的自制力配得上这身黑铁。’",
            "scoreDelta": {
              "con": 2,
              "wis": 1
            },
            "mbtiDelta": {
              "J": 2
            },
            "affinityDelta": {
              "fighter": 3
            },
            "alignmentDelta": {
              "lawful": 2
            },
            "triggerTags": [
              "绝对服从",
              "压抑本能"
            ],
            "outcomeTone": "合格",
            "branchHint": "标准的重装战士路线"
          },
          {
            "id": "B",
            "text": "把这当成一场算计，故意放慢半步让箭矢多射向自己，替旁边体弱的队友吸收伤害。",
            "npcReply": "百夫长皱了皱眉，但没有阻止。‘军团不需要个人英雄主义，但你的效率确实提高了。’",
            "scoreDelta": {
              "int": 1,
              "con": 1
            },
            "mbtiDelta": {
              "T": 1,
              "F": 1
            },
            "affinityDelta": {
              "fighter": 2
            },
            "alignmentDelta": {},
            "triggerTags": [
              "承伤算计",
              "战友保护"
            ],
            "outcomeTone": "合格",
            "branchHint": "更偏向战术或守护的战士"
          },
          {
            "id": "C",
            "text": "受不了这种乌龟步了！直接掀开重盾，咆哮着冲向敌军阵地，把他们的弓箭手砸成肉泥！",
            "npcReply": "敌阵是被冲垮了，但百夫长的脸也黑了：‘把他调回蛮子营地！立刻！’",
            "scoreDelta": {
              "str": 3,
              "wis": -2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "barbarian": 3,
              "fighter": -2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "破坏阵型",
              "狂暴冲锋"
            ],
            "outcomeTone": "转岗",
            "branchHint": "直接被踢回蛮子营地"
          },
          {
            "id": "D",
            "text": "一边走一边用战锤敲击重盾，用极其诡异的荒野小调把枯燥的行军变成一场狂欢。",
            "npcReply": "敌军被这诡异的压迫感吓住了，队友却觉得很丢脸。‘下次再唱歌，我就缝上你的嘴。’",
            "scoreDelta": {
              "cha": 2,
              "wis": -1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "fighter": 1,
              "barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "战歌狂欢",
              "精神压迫"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "略显奇葩的个性防线"
          }
        ]
      },
      {
        "id": "fighter_impact_test",
        "targetId": "fighter_line",
        "title": "冲击承受",
        "scene": "一头失控的地行龙正朝着军团的防线防线冲来。所有人都下意识地后退，只有你，庞大的身躯正好堵在了它冲锋的必经之路上。",
        "prompt": "面对地行龙的冲撞，你的选择是？",
        "options": [
          {
            "id": "A",
            "text": "把塔盾重重地砸进泥土里，深吸一口气，用全部的体重和再生的骨骼去硬接这股怪力。",
            "npcReply": "巨响过后，你被撞退了三步，吐出几颗带血的牙齿，但防线守住了。这才是军团之盾。",
            "scoreDelta": {
              "con": 3,
              "str": 1
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "fighter": 3
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "死守不退",
              "终极肉墙"
            ],
            "outcomeTone": "合格",
            "branchHint": "无可挑剔的重装堡垒"
          },
          {
            "id": "B",
            "text": "侧身滑步，在地行龙擦身而过的瞬间，用长戟精准地挑断它的一条腿筋。",
            "npcReply": "你轻巧地化解了危机。百夫长有些错愕：‘巨魔竟然也会用这种精细的斗牛战术？’",
            "scoreDelta": {
              "dex": 2,
              "int": 1
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "fighter": 2
            },
            "alignmentDelta": {},
            "triggerTags": [
              "敏捷闪避",
              "借力打力"
            ],
            "outcomeTone": "偏离",
            "branchHint": "灵活技巧型战法"
          },
          {
            "id": "C",
            "text": "张开双臂，试图给地行龙一个极其暴力的‘怪物拥抱’，看看到底谁的力气更大。",
            "npcReply": "你和地行龙滚作一团，互相撕咬。医疗兵绝望地捂住脸：‘又来了一个野兽。’",
            "scoreDelta": {
              "str": 2,
              "wis": -1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "barbarian": 2,
              "fighter": -1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "野兽摔跤",
              "放弃阵地"
            ],
            "outcomeTone": "转岗",
            "branchHint": "被认为更适合蛮子营地"
          },
          {
            "id": "D",
            "text": "迅速抓起身边的战友挡在前面……开玩笑的，我只是把他们扔到安全的地方，然后自己跑路。",
            "npcReply": "防线因为你的逃跑而出现缺口。督战队已经拔出了剑：‘逃兵！’",
            "scoreDelta": {
              "dex": 1,
              "con": -2
            },
            "mbtiDelta": {
              "P": 1
            },
            "affinityDelta": {
              "fighter": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "临阵脱逃",
              "怯战"
            ],
            "outcomeTone": "危险",
            "branchHint": "极差评价，面临军法处置"
          }
        ]
      },
      {
        "id": "fighter_instinct_vs_order",
        "targetId": "fighter_line",
        "title": "直觉与军令",
        "scene": "夜间站岗时，你的怪物直觉告诉你，左侧的阴影里藏着一只危险的暗杀虫。但百夫长临走前下过死命令：‘任何人不得离开岗哨半步，违令者斩。’",
        "prompt": "你要如何处理潜伏的威胁？",
        "options": [
          {
            "id": "A",
            "text": "军令如山。我死死盯着那个角落，紧握武器，就算它爬到我脸上我也绝不离开哨位半步。",
            "npcReply": "暗杀虫最终退去了。百夫长在暗处点点头：‘能在本能面前守住底线，是个好兵。’",
            "scoreDelta": {
              "wis": 2,
              "con": 1
            },
            "mbtiDelta": {
              "J": 2
            },
            "affinityDelta": {
              "fighter": 3
            },
            "alignmentDelta": {
              "lawful": 2
            },
            "triggerTags": [
              "死守军规",
              "压制本能"
            ],
            "outcomeTone": "合格",
            "branchHint": "典型的守序战士"
          },
          {
            "id": "B",
            "text": "不离岗哨，但我掰下一截城墙上的砖块，像炮弹一样精准地砸进那片阴影里。",
            "npcReply": "砖块砸出了绿色的虫血。‘有点变通，干得不错。’暗处的百夫长记录道。",
            "scoreDelta": {
              "int": 1,
              "str": 1
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "fighter": 2
            },
            "alignmentDelta": {},
            "triggerTags": [
              "灵活变通",
              "远程打击"
            ],
            "outcomeTone": "合格",
            "branchHint": "聪明的战术变通"
          },
          {
            "id": "C",
            "text": "管他什么军令！老子的直觉从来没错过！直接提着斧头冲进阴影把虫子剁碎。",
            "npcReply": "你杀死了虫子，但也惊动了整个营地。百夫长冷着脸：‘抗命就是抗命，去领鞭子。’",
            "scoreDelta": {
              "str": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "barbarian": 2,
              "fighter": -1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "违抗军令",
              "直觉行事"
            ],
            "outcomeTone": "危险",
            "branchHint": "因违纪受罚或被开除"
          },
          {
            "id": "D",
            "text": "大声向阴影里喊话：‘虫子老兄，我也讨厌站岗，要不你过来陪我聊聊？’",
            "npcReply": "暗杀虫被你的怪异手段吓跑了。换防的队友看你的眼神像在看一个高危危险源。",
            "scoreDelta": {
              "cha": 2,
              "wis": -1
            },
            "mbtiDelta": {
              "E": 1,
              "N": 1
            },
            "affinityDelta": {
              "warlock": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "异常档案行为",
              "吓退威胁"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "靠奇怪的方式解决了问题"
          }
        ]
      },
      {
        "id": "fighter_team_fear",
        "targetId": "fighter_line",
        "title": "恐惧的袍泽",
        "scene": "你的同排新兵总是害怕你。他们觉得你身上的疤痕太狰狞，而且伤口愈合时的烟气闻起来像腐肉。在列阵时，没人愿意站在你的旁边。",
        "prompt": "你要如何在这个排挤你的团队中维持防线？",
        "options": [
          {
            "id": "A",
            "text": "无所谓。他们怕我是好事，这意味着敌人也会怕我。我只需要一个人撑起最中间的阵列。",
            "npcReply": "你成了一座孤独的堡垒。虽然缺乏配合，但你的威慑力足以弥补防线的空缺。",
            "scoreDelta": {
              "con": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "I": 1,
              "T": 1
            },
            "affinityDelta": {
              "fighter": 2,
              "barbarian": 1
            },
            "alignmentDelta": {
              "self": 1
            },
            "triggerTags": [
              "孤独堡垒",
              "自我隔离"
            ],
            "outcomeTone": "合格",
            "branchHint": "独狼型战士"
          },
          {
            "id": "B",
            "text": "在一次遭遇战中，用自己的身体死死挡住致命的爆炸，用行动告诉他们：这副身体是用来保护你们的。",
            "npcReply": "当他们看到你为了救人连手臂都炸断了时，恐惧终于变成了敬畏。你赢得了他们的心。",
            "scoreDelta": {
              "con": 2,
              "wis": 1
            },
            "mbtiDelta": {
              "F": 2
            },
            "affinityDelta": {
              "fighter": 3
            },
            "alignmentDelta": {
              "good": 2
            },
            "triggerTags": [
              "牺牲证明",
              "战友羁绊"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其正面的团队核心"
          },
          {
            "id": "C",
            "text": "如果他们不站过来，我就用巨力把他们硬拽到我身边，大吼着强迫他们维持队形。",
            "npcReply": "新兵们带着哭腔和你挤在一起。防线是勉强维持住了，但下场战斗肯定有人当逃兵。",
            "scoreDelta": {
              "str": 2,
              "cha": -1
            },
            "mbtiDelta": {
              "E": 1,
              "J": 1
            },
            "affinityDelta": {
              "fighter": 1
            },
            "alignmentDelta": {
              "lawful": 1,
              "chaotic": 1
            },
            "triggerTags": [
              "强迫列阵",
              "暴君作风"
            ],
            "outcomeTone": "偏离",
            "branchHint": "可能会引发兵变"
          },
          {
            "id": "D",
            "text": "故意把军粮里最好吃的肉干分给他们，然后露出一个极其难看但努力友善的微笑。",
            "npcReply": "新兵们颤抖着吃下了肉干，虽然你的笑容像要吃人，但这拙劣的示好意外地化解了紧张。",
            "scoreDelta": {
              "cha": 2,
              "int": 1
            },
            "mbtiDelta": {
              "F": 1,
              "P": 1
            },
            "affinityDelta": {
              "druid": 1,
              "fighter": 1
            },
            "alignmentDelta": {
              "good": 1
            },
            "triggerTags": [
              "拙劣示好",
              "反差萌"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "令人哭笑不得的团队融合"
          }
        ]
      },
      {
        "id": "fighter_armor_limit",
        "targetId": "fighter_line",
        "title": "重甲的枷锁",
        "scene": "在攻城战中，军团为你特制的超大号重甲不仅重如山岳，而且扣带在剧烈运动中崩断了。此时你正卡在通往城墙顶端狭窄的盘旋楼梯上，上方的敌军正准备倾倒滚烫的沸油。",
        "prompt": "面对这极度受限的空间和即将落下的致命攻击，你的决断是？",
        "options": [
          {
            "id": "A",
            "text": "怒吼着将重甲强行卡在楼梯两侧，用自己庞大的身体和护甲填死整个通道，替下方的战友挡住所有沸油。",
            "npcReply": "沸油在你背上滋滋作响，但防线硬是一寸未退。百夫长在战后赞许：‘军团为你骄傲。’",
            "scoreDelta": {
              "con": 2,
              "wis": 1
            },
            "mbtiDelta": {
              "J": 1,
              "S": 1
            },
            "affinityDelta": {
              "fighter": 3
            },
            "alignmentDelta": {
              "lawful": 1,
              "good": 1
            },
            "triggerTags": [
              "死守通道",
              "肉盾掩护"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其无私的重甲表现"
          },
          {
            "id": "B",
            "text": "敏锐地计算沸油下落的轨迹，迅速卸下沉重的胸甲顶在头上，利用楼梯的弧度让大部分热油滑入下水道。",
            "npcReply": "你毫发无损地躲过了攻击。百夫长皱眉：‘反应很快，但这不符合重步兵硬扛的规程。’",
            "scoreDelta": {
              "int": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "T": 1,
              "N": 1
            },
            "affinityDelta": {
              "fighter": 1,
              "warlock": 1
            },
            "alignmentDelta": {},
            "triggerTags": [
              "巧劲卸力",
              "战术规避"
            ],
            "outcomeTone": "偏离",
            "branchHint": "更偏向工程或法系的灵巧"
          },
          {
            "id": "C",
            "text": "大骂盔甲劣质，干脆把身后的几个轻步兵抓过来顶在头上当挡箭牌。自己这身再生的皮肉可不能随便烫坏！",
            "npcReply": "轻步兵的惨叫声响彻楼梯。督战队的弩箭对准了你：‘把战友当盾牌，就地正法！’",
            "scoreDelta": {
              "str": 2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "fighter": -2,
              "barbarian": 1
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "队友作盾",
              "自私自利"
            ],
            "outcomeTone": "危险",
            "branchHint": "因残害同僚面临处决"
          },
          {
            "id": "D",
            "text": "趁着扣带断裂，干脆把盔甲全脱了，光着身子顶着沸油往上冲，试图用气味和极具冲击力的画面熏跑敌人。",
            "npcReply": "上方的敌军被这辣眼睛的恐怖画面吓得手一抖，连锅都扔了下来。‘……算你赢了。’",
            "scoreDelta": {
              "cha": 2,
              "wis": -1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "精神污染",
              "光膀冲锋"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其奇葩的破局法"
          }
        ]
      },
      {
        "id": "fighter_defense_choice",
        "targetId": "fighter_line",
        "title": "防线的抉择",
        "scene": "阵线被撕开了一个口子。你的左侧是正遭遇突袭的后排法师，右侧是暴露了空档的敌方主将，而正前方是正汹涌涌入的重装步兵。指挥官已经倒下，无法下达命令。",
        "prompt": "在这极其混乱的战场上，你庞大的身躯该移动到哪个位置？",
        "options": [
          {
            "id": "A",
            "text": "坚定不移地踏前一步，用巨盾和身体死死堵住正前方的缺口。没有退兵的号角，谁也别想跨过这道线。",
            "npcReply": "你在最枯燥的位置上扛下了最重的压力。事后调查显示，你的坚守是整场战役胜利的基石。",
            "scoreDelta": {
              "wis": 2,
              "con": 1
            },
            "mbtiDelta": {
              "J": 2
            },
            "affinityDelta": {
              "fighter": 3
            },
            "alignmentDelta": {
              "lawful": 2
            },
            "triggerTags": [
              "阵地基石",
              "恪守职责"
            ],
            "outcomeTone": "合格",
            "branchHint": "完美的阵地战觉悟"
          },
          {
            "id": "B",
            "text": "判断法师的存活对战局更重要，立刻转身去护法师，顺便把法师举高当成移动炮塔来输出。",
            "npcReply": "法师活了下来并扭转了战局。‘你对战术优先级的理解比很多老兵都要深刻。’",
            "scoreDelta": {
              "int": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "T": 1,
              "F": 1
            },
            "affinityDelta": {
              "fighter": 1,
              "druid": 1
            },
            "alignmentDelta": {
              "good": 1
            },
            "triggerTags": [
              "战术评估",
              "保护后排"
            ],
            "outcomeTone": "偏离",
            "branchHint": "展现出战术指挥官的潜力"
          },
          {
            "id": "C",
            "text": "谁管防线！这是斩杀敌将的绝佳机会！狂暴地丢下盾牌，踩着友军的肩膀向敌方主将发起斩首冲锋。",
            "npcReply": "你确实杀死了敌将，但左翼全线崩溃。‘你是个优秀的杀手，但不是个合格的士兵。’",
            "scoreDelta": {
              "str": 3,
              "wis": -2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "barbarian": 3,
              "fighter": -2
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "抛弃阵地",
              "斩首冲动"
            ],
            "outcomeTone": "转岗",
            "branchHint": "直接被踢回蛮子营地"
          },
          {
            "id": "D",
            "text": "趴在地上装死，反正我这么大一坨肉，他们跨过去也要花点时间，四舍五入我也算是堵住了缺口。",
            "npcReply": "踩在你身上的敌军摔成了一团。虽然成功迟滞了敌人，但你被当成尸体踩了半个小时。",
            "scoreDelta": {
              "con": 2,
              "cha": -1
            },
            "mbtiDelta": {
              "I": 1,
              "P": 1
            },
            "affinityDelta": {
              "fighter": 1
            },
            "alignmentDelta": {
              "self": 1
            },
            "triggerTags": [
              "躺平战术",
              "意外绊马索"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其滑稽的延误战术"
          }
        ]
      },
      {
        "id": "fighter_final_proof",
        "targetId": "fighter_line",
        "title": "最后的军规",
        "scene": "考核结束时，百夫长冷冷地看着你：‘很多人认为你只是一头套上盔甲的野兽，只要闻到血腥味就会把阵型抛到脑后。你要如何证明，你能理解黑旗军团的重量？’",
        "prompt": "面对百夫长的终极质问，你的回答是？",
        "options": [
          {
            "id": "A",
            "text": "将重锤插进地面，单膝跪地，平视百夫长：‘我的血肉可以再生，但战友的命只有一条。我站在这里，就是城墙。’",
            "npcReply": "百夫长肃然起敬，向你回以军礼：‘欢迎加入黑旗，城墙兄弟。’",
            "scoreDelta": {
              "con": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "fighter": 3
            },
            "alignmentDelta": {
              "lawful": 2
            },
            "triggerTags": [
              "沉重誓言",
              "守护之心"
            ],
            "outcomeTone": "合格",
            "branchHint": "完美的高光时刻"
          },
          {
            "id": "B",
            "text": "准确背诵出战地守则的第三至第七章，并指出刚才模拟战中另外两个步兵方阵在换防时的走位失误。",
            "npcReply": "百夫长愣住了，随即大笑：‘见鬼，你不仅背了军规，还盯出了我的战术破绽？’",
            "scoreDelta": {
              "int": 3,
              "str": -1
            },
            "mbtiDelta": {
              "N": 1,
              "T": 1
            },
            "affinityDelta": {
              "fighter": 1
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "倒背军规",
              "战术挑错"
            ],
            "outcomeTone": "偏离",
            "branchHint": "过于注重理论，可能转文职"
          },
          {
            "id": "C",
            "text": "突然暴起，一拳砸向百夫长的脸！在离他鼻尖半寸的地方硬生生刹住拳头，展示对怪力的绝对控制。",
            "npcReply": "冷汗从百夫长额头滴下：‘控制力极佳……但你明天不用来了，你吓到老子了！’",
            "scoreDelta": {
              "dex": 2,
              "str": 1
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "barbarian": 2,
              "fighter": -1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "危险试探",
              "极限控制"
            ],
            "outcomeTone": "转岗",
            "branchHint": "因行为过激被送去前线突击营"
          },
          {
            "id": "D",
            "text": "拿出一根粗大的铁链，主动要求百夫长把你的脖子和阵地上的石柱锁在一起。‘这样总行了吧？’",
            "npcReply": "百夫长无奈地扶额：‘你是不是对纪律有什么奇怪的误解？我们不招锁链犬。’",
            "scoreDelta": {
              "wis": 2,
              "int": -1
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "fighter": 1
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "自我禁锢",
              "离谱理解"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "虽然滑稽但态度诚恳"
          }
        ]
      }
    ],
    "warlock_contract": [
      {
        "id": "warlock_sell_secret",
        "targetId": "warlock_contract",
        "title": "血肉的开价",
        "scene": "契约所的地下室内，一个戴着乌鸦面具的学者递给你一份羊皮纸。‘我不需要你的灵魂，我只需要你每隔三天，切下一根手指供我研究巨魔的再生。报酬是这本深渊法术书。’",
        "prompt": "面对这份略显惊悚的交易，你的决定是？",
        "options": [
          {
            "id": "A",
            "text": "毫不犹豫地拔出匕首切下一根手指扔在桌上：‘三天一根？你未免太小看我的恢复力了。’",
            "npcReply": "学者被你的果断震撼了，迅速递上法术书。‘你真是个完美的素材……不，完美的合作者。’",
            "scoreDelta": {
              "con": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "warlock": 3
            },
            "alignmentDelta": {
              "lawful": 1,
              "self": 1
            },
            "triggerTags": [
              "冷血交易",
              "血肉变现"
            ],
            "outcomeTone": "合格",
            "branchHint": "标准的血肉术士"
          },
          {
            "id": "B",
            "text": "指出契约里没有规定手指的尺寸，我可以用自己再生的多余肉瘤来代替正常手指交付。",
            "npcReply": "学者推了推面具，冷笑一声：‘钻空子的老手，契约所就需要你这样咬文嚼字的人才。’",
            "scoreDelta": {
              "int": 3
            },
            "mbtiDelta": {
              "N": 1,
              "T": 1
            },
            "affinityDelta": {
              "warlock": 3
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "文字游戏",
              "精明算计"
            ],
            "outcomeTone": "合格",
            "branchHint": "高智商术士"
          },
          {
            "id": "C",
            "text": "暴怒地掀翻桌子：‘你把我当成案板上的肉了吗？！信不信我先把你切碎！’",
            "npcReply": "学者召唤出阴影护卫把你轰了出去：‘粗鄙的野兽，滚回你的蛮子营地去！’",
            "scoreDelta": {
              "str": 2,
              "wis": -1
            },
            "mbtiDelta": {
              "F": 1,
              "P": 1
            },
            "affinityDelta": {
              "barbarian": 3,
              "warlock": -2
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "暴怒拒签",
              "尊严底线"
            ],
            "outcomeTone": "危险",
            "branchHint": "因暴怒触怒施法者，进入被放逐或敌对的危险路线"
          },
          {
            "id": "D",
            "text": "问他能不能反向操作：我付钱，他帮我把全身多余的脂肪全切掉，顺便学点法术。",
            "npcReply": "学者愣住了，半天没说出话来：‘我们这里是契约所，不是地下医美诊所！’",
            "scoreDelta": {
              "cha": 2,
              "int": -1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "warlock": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "医美需求",
              "脑洞清奇"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "令人无语的奇葩路线"
          }
        ]
      },
      {
        "id": "warlock_pain_for_power",
        "targetId": "warlock_contract",
        "title": "痛苦的转化",
        "scene": "你刚签下契约，宗主的声音就在你脑海中炸开。他要求你主动承受一次烈火焚烧的痛苦，以此来激发法术回路的成型。但你知道巨魔最怕的就是火。",
        "prompt": "为了获得这股力量，你要如何面对致命的火焰？",
        "options": [
          {
            "id": "A",
            "text": "咬碎牙齿强忍着！只要这副身躯还能长出新肉，我就要用火把法术烙印死死刻在骨头上。",
            "npcReply": "宗主发出满意的低语。你在焦黑的血肉中感受到了一股不属于这个世界的黑暗魔力。",
            "scoreDelta": {
              "con": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "J": 1
            },
            "affinityDelta": {
              "warlock": 3
            },
            "alignmentDelta": {},
            "triggerTags": [
              "强忍烈焰",
              "极端痛苦"
            ],
            "outcomeTone": "合格",
            "branchHint": "意志极其坚定的施法者"
          },
          {
            "id": "B",
            "text": "用泥巴和水草先在身上涂满厚厚的一层隔热层，然后才走进火里，企图骗过宗主的感知。",
            "npcReply": "宗主冷笑：‘你在跟我玩小聪明？’火焰瞬间击穿了泥巴，你被烧得惨叫连连，但勉强过关。",
            "scoreDelta": {
              "int": 2,
              "con": -1
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "warlock": 2
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "投机取巧",
              "聪明反被聪明误"
            ],
            "outcomeTone": "偏离",
            "branchHint": "喜欢耍小聪明的术士"
          },
          {
            "id": "C",
            "text": "吓得转身就跑，一边跑一边在心里大骂这什么破契约，老子不干了！",
            "npcReply": "宗主的印记慢慢消散。你虽然保住了性命，但也失去了成为施法者的机会。",
            "scoreDelta": {
              "dex": 2,
              "wis": -1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "warlock": -2,
              "barbarian": 1
            },
            "alignmentDelta": {
              "self": 1
            },
            "triggerTags": [
              "恐惧逃跑",
              "毁约"
            ],
            "outcomeTone": "危险",
            "branchHint": "逃跑毁约激怒了宗主，将面临残酷的诅咒追杀"
          },
          {
            "id": "D",
            "text": "抓起一头烤熟的野猪代替自己扔进火里，并在脑海里大声咀嚼，试图用美食产生的多巴胺代替痛苦。",
            "npcReply": "宗主陷入了长久的沉默。‘你这头蠢物把献祭仪式当成野炊了吗？’但他竟然同意了契约。",
            "scoreDelta": {
              "cha": 3,
              "int": -1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "warlock": 1,
              "druid": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "荒谬献祭",
              "吃货逻辑"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "靠奇怪的供品完成契约"
          }
        ]
      },
      {
        "id": "warlock_human_promise",
        "targetId": "warlock_contract",
        "title": "褪去怪胎之皮",
        "scene": "一位魔鬼代理人微笑着向你展示了一副完美的人类皮囊。‘只要签下这份灵魂转让协议，我就剥去这副被世人畏惧的巨魔外壳，让你作为一个俊美的贵族人类重生。’",
        "prompt": "面对这个极具诱惑力的提议，你的态度是？",
        "options": [
          {
            "id": "A",
            "text": "毫不犹豫地签下名字。这副怪物的身体我早就受够了，只要能像城里人一样被接纳，灵魂算什么。",
            "npcReply": "魔鬼满意地收起羊皮纸。你获得了一具脆弱但美丽的躯壳，但你再也找不回曾经的力气了。",
            "scoreDelta": {
              "cha": 3,
              "con": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "warlock": 3,
              "barbarian": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "出卖灵魂",
              "渴望融入"
            ],
            "outcomeTone": "合格",
            "branchHint": "放弃了巨魔体质的高魅力术士"
          },
          {
            "id": "B",
            "text": "敏锐地察觉到陷阱：‘我这身巨魔皮肉可比什么贵族皮囊贵多了，想换？你得加钱。’",
            "npcReply": "魔鬼脸上的笑容凝固了。他意识到你并不是一个因为自卑而好糊弄的蠢货。",
            "scoreDelta": {
              "int": 2,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "warlock": 2
            },
            "alignmentDelta": {
              "lawful": 1,
              "self": 1
            },
            "triggerTags": [
              "反向加价",
              "精明商人"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度理性的现实主义者"
          },
          {
            "id": "C",
            "text": "暴怒！人类算什么东西？我为我这身死不掉的巨魔血肉感到自豪！一拳把魔鬼打飞。",
            "npcReply": "魔鬼化作一阵青烟逃走了。你保住了灵魂，也保住了怪物的尊严，但魔法之路断了。",
            "scoreDelta": {
              "str": 2,
              "cha": -1
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "warlock": -2,
              "barbarian": 2
            },
            "alignmentDelta": {
              "good": 1
            },
            "triggerTags": [
              "血脉骄傲",
              "拒绝交易"
            ],
            "outcomeTone": "危险",
            "branchHint": "暴力拒绝魔鬼引发了灾难性的仇恨后果"
          },
          {
            "id": "D",
            "text": "问他能不能只换个脸皮，身体还是保留巨魔的。‘我想当一个有着精灵脸的魔鬼筋肉人。’",
            "npcReply": "魔鬼的表情像吃了一只苍蝇。‘我们不提供这种猎奇的拼接服务，滚出去！’",
            "scoreDelta": {
              "cha": 2,
              "int": -1
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "warlock": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "诡异审美",
              "猎奇脑洞"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "成功恶心到了魔鬼"
          }
        ]
      },
      {
        "id": "warlock_dirty_clause",
        "targetId": "warlock_contract",
        "title": "恶毒的漏洞",
        "scene": "你的队友偷偷看了你的契约，发现上面用极小的古精灵语写着：‘当宿主受到致命伤时，宗主有权永久征用该躯体。’这意味着你一直在帮别人养护这具不死的肉身。",
        "prompt": "得知这个恶毒的漏洞后，你打算怎么办？",
        "options": [
          {
            "id": "A",
            "text": "无所谓。只要我一直保持强大，不受到致命伤，他就永远拿不走我的身体。这是一场赌博。",
            "npcReply": "你把契约卷起来塞进怀里。这种走钢丝般的狂妄，正是恶魔最喜欢的特质。",
            "scoreDelta": {
              "con": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "P": 1
            },
            "affinityDelta": {
              "warlock": 3
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "刀尖起舞",
              "狂妄自信"
            ],
            "outcomeTone": "合格",
            "branchHint": "典型的契约赌徒"
          },
          {
            "id": "B",
            "text": "连夜翻阅恶魔律法，寻找契约上的逻辑漏洞，准备利用‘致命伤’的定义反向讹诈宗主一笔。",
            "npcReply": "你在一堆古籍中找到了反击的方法。你不仅是个怪物，还是个可怕的讼棍。",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2,
              "J": 1
            },
            "affinityDelta": {
              "warlock": 2
            },
            "alignmentDelta": {
              "lawful": 2
            },
            "triggerTags": [
              "钻研漏洞",
              "恶魔法务"
            ],
            "outcomeTone": "偏离",
            "branchHint": "偏向智力碾压的法务术士"
          },
          {
            "id": "C",
            "text": "恐慌发作，求队友帮你砍断施法的那条手臂，宁可失去力量也要单方面物理毁约。",
            "npcReply": "虽然手臂还能长出来，但契约印记随着断臂一起腐烂了。你虚弱地倒在地上。",
            "scoreDelta": {
              "wis": -1,
              "con": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "warlock": -2
            },
            "alignmentDelta": {
              "good": 1
            },
            "triggerTags": [
              "物理毁约",
              "恐慌断臂"
            ],
            "outcomeTone": "危险",
            "branchHint": "单方面物理毁约招致了难以磨灭的灵魂反噬"
          },
          {
            "id": "D",
            "text": "从今天起每天自己捅自己一刀，让宗主觉得这具身体存在‘自毁倾向’，主动取消征用条款。",
            "npcReply": "宗主显然被你这种难以预测的极端举动震慑到了，连夜修改了条款，生怕沾染上这不可理喻的混乱。",
            "scoreDelta": {
              "cha": 2,
              "con": 1
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "warlock": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "自残劝退",
              "精神污染"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "靠耍无赖战胜了恶魔"
          }
        ]
      },
      {
        "id": "warlock_debt_collection",
        "targetId": "warlock_contract",
        "title": "恶毒的催收",
        "scene": "战斗刚结束，你精疲力竭。宗主冰冷的声音突然在脑海中回响，要求你提前支付本月利息：一块正处于活性再生状态的脾脏，否则就立刻收回你的施法能力。",
        "prompt": "面对这种趁火打劫的催收，你要怎么处理？",
        "options": [
          {
            "id": "A",
            "text": "毫不犹豫地用匕首划开腹部，精确地切下所需的脏器并献祭。只要力量还在，这点痛苦不值一提。",
            "npcReply": "宗主贪婪地吞噬了血肉。‘你的果断令人愉悦。力量，如你所愿。’",
            "scoreDelta": {
              "con": 2,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "warlock": 3
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "无情割肉",
              "忠实履约"
            ],
            "outcomeTone": "合格",
            "branchHint": "狠辣而守信的契约者"
          },
          {
            "id": "B",
            "text": "动用古精灵语的契约副则，指出在‘不可抗拒的战争状态下’利息必须延期，反向要求宗主提供战损补贴。",
            "npcReply": "宗主的意志停顿了一下，似乎被你的诡辩气笑了。‘你竟然用我的规则对付我。很好。’",
            "scoreDelta": {
              "int": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "N": 1,
              "T": 1
            },
            "affinityDelta": {
              "warlock": 2,
              "druid": 1
            },
            "alignmentDelta": {},
            "triggerTags": [
              "法务交锋",
              "反向索赔"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极高智商的文案斗争"
          },
          {
            "id": "C",
            "text": "愤怒地拒绝支付，并试图用刚缴获的受祝福圣物去烫手背上的契约印记，单方面使用暴力抗债。",
            "npcReply": "神圣的灼烧不仅毁了印记，也烧穿了你的魔力回路。宗主发出了恶毒的诅咒誓言。",
            "scoreDelta": {
              "str": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "F": 1,
              "P": 1
            },
            "affinityDelta": {
              "warlock": -2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "物理抗债",
              "触怒宗主"
            ],
            "outcomeTone": "危险",
            "branchHint": "引发长期的诅咒或追杀"
          },
          {
            "id": "D",
            "text": "随手砍下旁边一具地精尸体的大腿扔进献祭法阵，并用巨魔式的高强度诡辩试图说服宗主这其实是脾脏。",
            "npcReply": "宗主沉默了足足一分钟。‘……你这头无耻的巨怪，不仅欺诈，而且还侮辱了我的智商！’",
            "scoreDelta": {
              "cha": 2,
              "wis": -1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "warlock": 1
            },
            "alignmentDelta": {
              "chaotic": 1,
              "self": 1
            },
            "triggerTags": [
              "指鹿为马",
              "强行糊弄"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "靠令人无语的厚脸皮度过危机"
          }
        ]
      },
      {
        "id": "warlock_forbidden_knowledge",
        "targetId": "warlock_contract",
        "title": "禁忌的载体",
        "scene": "你在契约所的地下室发现了一本被焚毁了一半的禁忌法术书。上面的魔法过于强大，任何试图抄写它的纸张都会在落笔瞬间自燃。",
        "prompt": "为了把这些知识带出去，你做出了一个疯狂的决定：",
        "options": [
          {
            "id": "A",
            "text": "忍受着精神与肉体的双重灼烧，用附魔刻刀将这些禁忌符文直接刻在自己可以不断再生的皮肤上。",
            "npcReply": "血肉散发出焦糊味，但符文稳稳地扎根在了你的体内。你把自己变成了一本危险的法术书。",
            "scoreDelta": {
              "con": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "warlock": 3
            },
            "alignmentDelta": {},
            "triggerTags": [
              "肉体复写",
              "痛苦烙印"
            ],
            "outcomeTone": "合格",
            "branchHint": "极端执着的求知欲"
          },
          {
            "id": "B",
            "text": "仔细观察纸张自燃的规律，利用地下室的恒温炼金池，调制出一种能短暂压制符文热量的冰冷墨水进行抄写。",
            "npcReply": "你安全地拓印了法术。契约所的导师对你的炼金造诣感到震惊。‘你确定你不是个法师？’",
            "scoreDelta": {
              "int": 3,
              "str": -1
            },
            "mbtiDelta": {
              "T": 1,
              "N": 1
            },
            "affinityDelta": {
              "warlock": 1,
              "druid": 1
            },
            "alignmentDelta": {},
            "triggerTags": [
              "炼金破解",
              "理性求知"
            ],
            "outcomeTone": "偏离",
            "branchHint": "用科学手段解决魔法问题"
          },
          {
            "id": "C",
            "text": "强迫身边的新学徒去背诵那些符文。等他们的脑子被法术能量撑爆时，再用通灵术提取他们的残骸记忆。",
            "npcReply": "学徒的惨叫回荡在地下室。契约所的监督者冷冷记录：‘冷血无情，是个合格的黑魔法师苗子。’",
            "scoreDelta": {
              "int": 1,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "warlock": 2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "残忍献祭",
              "极度自私"
            ],
            "outcomeTone": "危险",
            "branchHint": "触碰了道德底线但极其有效"
          },
          {
            "id": "D",
            "text": "既然不能抄，那就直接把那半本书嚼碎吃进肚子里，赌一把巨魔的铁胃能不能直接消化知识。",
            "npcReply": "你打了个饱嗝，吐出一口带着火星的烟圈。虽然没学会法术，但你现在吐痰自带灼烧效果。",
            "scoreDelta": {
              "con": 2,
              "int": -1
            },
            "mbtiDelta": {
              "P": 1,
              "S": 1
            },
            "affinityDelta": {
              "barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "知识就是力量",
              "异食癖"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "完全不讲道理的消化系统"
          }
        ]
      },
      {
        "id": "warlock_final_proof",
        "targetId": "warlock_contract",
        "title": "反客为主",
        "scene": "宗主的投影降临，它试图越过契约的界限，直接占据你这具强大的肉身，把你彻底变成一个供其驱使的无意识血囊。",
        "prompt": "在意识即将被剥夺的最后时刻，你要如何反制？",
        "options": [
          {
            "id": "A",
            "text": "敞开灵魂，主动拥抱宗主的降临，但在融合的瞬间利用巨魔血脉暴躁的排异反应，强行将它的意志封死在左手里。",
            "npcReply": "你的左臂长满了邪异的眼珠。宗主愤怒的声音只能在你的掌心徒劳地回响。你赢得了对等谈判的资格。",
            "scoreDelta": {
              "con": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "warlock": 3
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "躯体牢笼",
              "强行封印"
            ],
            "outcomeTone": "合格",
            "branchHint": "成功反制宗主"
          },
          {
            "id": "B",
            "text": "利用提前画好的逆转法阵，用精准的奥术公式将宗主的投影强行导入一块水晶，把它当成移动充电宝。",
            "npcReply": "宗主在水晶里气得发抖。学者惊叹道：‘把宗主变成施法材料？你的法术理解深不可测。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "N": 1,
              "T": 1
            },
            "affinityDelta": {
              "warlock": 1,
              "druid": 1
            },
            "alignmentDelta": {},
            "triggerTags": [
              "阵法囚禁",
              "学术反杀"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其高端的操作"
          },
          {
            "id": "C",
            "text": "发出野兽般的咆哮，毫不犹豫地将契约反噬引向自己的再生核心，‘你想占据这具身体？那就跟我一起死吧！’",
            "npcReply": "宗主的投影被这种同归于尽的疯劲吓退了，但你自己的再生核心也遭受重创，奄奄一息。",
            "scoreDelta": {
              "str": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "F": 1,
              "P": 1
            },
            "affinityDelta": {
              "barbarian": 2,
              "warlock": -1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "同归于尽",
              "物理拒降"
            ],
            "outcomeTone": "危险",
            "branchHint": "用疯狂击退了更疯狂的存在"
          },
          {
            "id": "D",
            "text": "试图给宗主推销这具身体的各种慢性疾病、臭味和风湿痛，极力证明这是一笔亏本买卖，劝它三思。",
            "npcReply": "宗主在仔细检查了你令人作呕的口腔卫生和沉重的脂肪后，嫌弃地主动解除了附身。",
            "scoreDelta": {
              "cha": 3,
              "con": -1
            },
            "mbtiDelta": {
              "E": 1,
              "T": 1
            },
            "affinityDelta": {
              "warlock": 1
            },
            "alignmentDelta": {
              "self": 1
            },
            "triggerTags": [
              "自我贬值",
              "商业劝退"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "靠自黑逃过一劫"
          }
        ]
      }
    ],
    "druid_mutation_circle": [
      {
        "id": "druid_nature_anomaly",
        "targetId": "druid_mutation_circle",
        "title": "林地的排斥",
        "scene": "你试图进入德鲁伊的林地，但周围的植物对你那异于常人的再生血液产生了剧烈反应。藤蔓像蛇一样退开，老树也发出不安的吱嘎声。你被视为了一种‘自然污染’。",
        "prompt": "面对森林的排斥，你要如何证明自己的资格？",
        "options": [
          {
            "id": "A",
            "text": "割开手腕，让富含生命力的血液滴在枯萎的树根上，用暴力的愈合力强行让古树开花。",
            "npcReply": "枯树开出了诡异的血色花朵。大德鲁伊沉默地看着你：‘野蛮，但确实是生命的奇迹。’",
            "scoreDelta": {
              "con": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "druid": 3
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "暴力催生",
              "血肉献祭"
            ],
            "outcomeTone": "合格",
            "branchHint": "狂野的异变德鲁伊"
          },
          {
            "id": "B",
            "text": "坐下来，闭上眼睛，用极其缓慢的频率调整自己的呼吸，直到和森林的脉动完全同步，收敛起那种怪物的压迫感。",
            "npcReply": "藤蔓慢慢爬上了你的肩膀。你用惊人的控制力证明了自己不仅是个怪物。",
            "scoreDelta": {
              "wis": 3,
              "con": 1
            },
            "mbtiDelta": {
              "I": 2,
              "N": 1
            },
            "affinityDelta": {
              "druid": 2
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "冥想同步",
              "敛息术"
            ],
            "outcomeTone": "偏离",
            "branchHint": "更偏向传统宁静的德鲁伊"
          },
          {
            "id": "C",
            "text": "大发雷霆，一脚踢断了一棵小树。‘不让进就算了！老子还不稀罕你们这些破草！’",
            "npcReply": "一阵狂风把你吹出了林地。你彻底失去了与自然沟通的机会。",
            "scoreDelta": {
              "str": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "E": 1,
              "F": 1
            },
            "affinityDelta": {
              "druid": -2,
              "barbarian": 2
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "暴躁毁林",
              "放弃沟通"
            ],
            "outcomeTone": "转岗",
            "branchHint": "被踢出林地，转去当蛮子"
          },
          {
            "id": "D",
            "text": "抓起一把泥土涂在脸上，模仿一棵巨大的蘑菇蹲在地上，只要我不动，我就是大自然的一部分。",
            "npcReply": "大德鲁伊无奈地揉了揉太阳穴：‘起来吧，别装蘑菇了。就冲你这厚脸皮，你留下来了。’",
            "scoreDelta": {
              "cha": 2,
              "int": -1
            },
            "mbtiDelta": {
              "P": 1
            },
            "affinityDelta": {
              "druid": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "伪装战术",
              "滑稽融入"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "靠搞笑融入了林地"
          }
        ]
      },
      {
        "id": "druid_civilization_reject",
        "targetId": "druid_mutation_circle",
        "title": "两难的缝隙",
        "scene": "你因为身上长出了诡异的树皮和藤蔓，被城镇守卫当成瘟疫源驱逐。但当你逃进荒野时，普通的野兽又把你当成两足行走的怪物而疯狂攻击你。",
        "prompt": "在文明与荒野的夹缝中，你要怎么生存？",
        "options": [
          {
            "id": "A",
            "text": "彻底拥抱异变。我打退野兽，占据了森林深处的洞穴，把自己变成让文明和荒野都恐惧的禁忌图腾。",
            "npcReply": "你失去了一切社会关系，但换来的是绝对的生存统治力。林地议会对你刮目相看。",
            "scoreDelta": {
              "con": 2,
              "str": 1
            },
            "mbtiDelta": {
              "I": 1,
              "T": 1
            },
            "affinityDelta": {
              "druid": 3,
              "warlock": 1
            },
            "alignmentDelta": {
              "chaotic": 1,
              "self": 1
            },
            "triggerTags": [
              "拥抱异变",
              "孤独统治"
            ],
            "outcomeTone": "合格",
            "branchHint": "偏向黑暗孤狼的德鲁伊"
          },
          {
            "id": "B",
            "text": "在城镇边缘建立一个小屋，利用自己异变的身体提炼出珍贵的草药卖给平民，试图在两边寻找平衡。",
            "npcReply": "这是一个艰难但充满智慧的选择。你成了游离在规则边缘的神秘草药师。",
            "scoreDelta": {
              "wis": 2,
              "int": 1
            },
            "mbtiDelta": {
              "J": 1,
              "F": 1
            },
            "affinityDelta": {
              "druid": 2
            },
            "alignmentDelta": {
              "lawful": 1,
              "good": 1
            },
            "triggerTags": [
              "边界草药师",
              "艰难平衡"
            ],
            "outcomeTone": "偏离",
            "branchHint": "温和派的辅助路线"
          },
          {
            "id": "C",
            "text": "觉得变异太麻烦了，找个火堆试图把身上的藤蔓和树皮烧掉，重新做回普通的雇佣兵。",
            "npcReply": "你忍受了剧痛，毁掉了极具潜力的自然链接，但重新拿起了铁剑。",
            "scoreDelta": {
              "str": 1,
              "wis": -2
            },
            "mbtiDelta": {
              "S": 1
            },
            "affinityDelta": {
              "druid": -2,
              "fighter": 2
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "自焚断绝",
              "回归凡俗"
            ],
            "outcomeTone": "转岗",
            "branchHint": "放弃了德鲁伊路线"
          },
          {
            "id": "D",
            "text": "在身上挂满牌子，写着‘稀有树人，合影收五枚铜币’，强行把驱逐事件变成一次商业巡演。",
            "npcReply": "守卫和野兽都被你这种不要脸的商业头脑弄蒙了。你居然靠收门票活了下来。",
            "scoreDelta": {
              "cha": 3,
              "wis": -1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "druid": 1,
              "warlock": 1
            },
            "alignmentDelta": {
              "chaotic": 2,
              "self": 1
            },
            "triggerTags": [
              "商业奇才",
              "滑稽解围"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极为清奇的生存思路"
          }
        ]
      },
      {
        "id": "druid_hunger_control",
        "targetId": "druid_mutation_circle",
        "title": "野性的饥饿",
        "scene": "你被分配去照顾一只受伤的珍稀飞马。但这几天你的再生能力消耗了大量能量，你正处于极度饥饿、野性本能快要失控的边缘。飞马的血腥味在不断刺激你的神经。",
        "prompt": "你要如何克制把病患视作补给的冲动？",
        "options": [
          {
            "id": "A",
            "text": "用藤蔓把自己牢牢地绑在远处的石头上，闭上眼睛，强行依靠冥想和毅力扛过饥饿的潮水。",
            "npcReply": "第二天早上，神官发现你饿得奄奄一息，但飞马安然无恙。‘你经受住了野性的考验。’",
            "scoreDelta": {
              "wis": 3,
              "con": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "druid": 3
            },
            "alignmentDelta": {
              "good": 1,
              "lawful": 1
            },
            "triggerTags": [
              "自我束缚",
              "绝对克制"
            ],
            "outcomeTone": "合格",
            "branchHint": "完美展现了德鲁伊的自律"
          },
          {
            "id": "B",
            "text": "冲出营地，在森林里疯狂狩猎其他普通野兽，用生肉和鲜血来填饱肚子，以此转移注意力。",
            "npcReply": "你满脸是血地回营，虽然保住了飞马，但神官对你的暴戾皱起了眉头。",
            "scoreDelta": {
              "str": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "druid": 1,
              "barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "替代杀戮",
              "释放野性"
            ],
            "outcomeTone": "偏离",
            "branchHint": "偏向肉体派的野性路线"
          },
          {
            "id": "C",
            "text": "管不了那么多了，我就是个怪物，怪物饿了就是要吃肉！直接把飞马扑倒大快朵颐。",
            "npcReply": "你不仅被永久逐出了林地，还上了各地德鲁伊的必杀通缉令。",
            "scoreDelta": {
              "con": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "F": 1,
              "P": 2
            },
            "affinityDelta": {
              "druid": -2
            },
            "alignmentDelta": {
              "chaotic": 2,
              "self": 2
            },
            "triggerTags": [
              "本能失控",
              "吞噬珍稀"
            ],
            "outcomeTone": "危险",
            "branchHint": "导致极其恶劣的黑名单结局"
          },
          {
            "id": "D",
            "text": "拔几把路边的毒蘑菇塞进嘴里，试图用剧毒产生的幻觉和胃痉挛来盖过饥饿感。",
            "npcReply": "你口吐白沫地在地上抽搐了一整晚。神官第二天看着你：‘我不知道该夸你还是该救你。’",
            "scoreDelta": {
              "con": 2,
              "int": -1
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "druid": 2
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "以毒攻饿",
              "神经质操作"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "靠极端手段度过危机"
          }
        ]
      },
      {
        "id": "druid_pure_proof",
        "targetId": "druid_mutation_circle",
        "title": "污染源的质询",
        "scene": "最终的入环仪式上，三位长老审视着你：‘巨魔的血肉往往伴随着瘟疫、腐败和失控。你凭什么证明，你体内的异变不是大自然的毒瘤，而是新生的循环？’",
        "prompt": "你要如何回答这个哲学与生理的双重拷问？",
        "options": [
          {
            "id": "A",
            "text": "划开自己的胸膛，展示一颗跳动的心脏，周围长满了新生的苔藓和发光的孢子。‘这就是答案。我的血肉是土壤。’",
            "npcReply": "长老们被这种极致的共生形态震撼了。你被正式接纳为异变环的一员。",
            "scoreDelta": {
              "con": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "N": 1,
              "F": 1
            },
            "affinityDelta": {
              "druid": 3
            },
            "alignmentDelta": {},
            "triggerTags": [
              "血肉土壤",
              "极致共生"
            ],
            "outcomeTone": "合格",
            "branchHint": "核心录取"
          },
          {
            "id": "B",
            "text": "发表一篇关于‘腐败也是自然循环一部分’的激昂演讲，用严密的生态学逻辑辩倒他们。",
            "npcReply": "长老们面面相觑。‘你比我们这里的许多学者还要懂理论。你到底是个什么怪物？’",
            "scoreDelta": {
              "int": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "N": 1,
              "T": 1
            },
            "affinityDelta": {
              "druid": 2
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "生态辩论",
              "学者派头"
            ],
            "outcomeTone": "偏离",
            "branchHint": "成为异类学术型德鲁伊"
          },
          {
            "id": "C",
            "text": "听不懂这些文绉绉的话，我直接展示我能一拳打死一头熊，证明只要我足够强，我就不需要解释。",
            "npcReply": "长老摇了摇头：‘去前线吧，那里才需要你这种纯粹的暴力，自然不需要。’",
            "scoreDelta": {
              "str": 3,
              "wis": -2
            },
            "mbtiDelta": {
              "S": 1
            },
            "affinityDelta": {
              "druid": -2,
              "barbarian": 2
            },
            "alignmentDelta": {},
            "triggerTags": [
              "暴力展示",
              "无法沟通"
            ],
            "outcomeTone": "转岗",
            "branchHint": "彻底转回战士或蛮子"
          },
          {
            "id": "D",
            "text": "当着他们的面打了个震天响的饱嗝，吐出一口带着花香的绿色毒雾。‘看，多环保。’",
            "npcReply": "几位长老差点被毒雾熏晕。‘……给你发资格证，但你以后开会必须戴防毒面罩！’",
            "scoreDelta": {
              "cha": 2,
              "con": 1
            },
            "mbtiDelta": {
              "P": 1
            },
            "affinityDelta": {
              "druid": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "生化演示",
              "恶作剧"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "以喜剧方式蒙混过关"
          }
        ]
      },
      {
        "id": "druid_toxin_symbiosis",
        "targetId": "druid_mutation_circle",
        "title": "花开血肉",
        "scene": "在吸收了沼泽瘴气后，你的左臂不仅再生了，而且还长满了一丛丛散发着致幻孢子的奇异毒花。这种花粉让你自己都经常产生诡异的幻觉。",
        "prompt": "你要如何处理这种不受控制的植物共生体？",
        "options": [
          {
            "id": "A",
            "text": "拒绝将其割除。在冥想中不断尝试去理解毒花释放孢子的规律，最终把它的呼吸节律和自己的心跳完美同步。",
            "npcReply": "幻觉消退了。大德鲁伊欣慰地看着你：‘你学会了倾听，而不是支配。这才是共生。’",
            "scoreDelta": {
              "wis": 3,
              "con": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "druid": 3
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "冥想共鸣",
              "接纳异变"
            ],
            "outcomeTone": "合格",
            "branchHint": "纯正的德鲁伊共生路线"
          },
          {
            "id": "B",
            "text": "兴奋地将这些毒花作为核心材料，结合其他草药提炼出极其强效的神经毒剂，准备高价卖给城里的黑市。",
            "npcReply": "你赚得盆满钵满，但林地对你这种破坏自然纯粹性的商业行为表示强烈的谴责。",
            "scoreDelta": {
              "int": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "N": 1,
              "T": 1
            },
            "affinityDelta": {
              "druid": -1,
              "warlock": 2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "制药变现",
              "商业炼金"
            ],
            "outcomeTone": "转岗",
            "branchHint": "偏向术士或商人的逐利路线"
          },
          {
            "id": "C",
            "text": "彻底放任孢子的生长，在战斗中主动撕裂手臂，用漫天飞舞的毒花粉末把整个小队连同敌人一起拖入疯狂的深渊。",
            "npcReply": "战场变成了一片致幻的地狱。你幸存了下来，但你已经被林地视作了一场生态灾难。",
            "scoreDelta": {
              "con": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "druid": -2,
              "warlock": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "放任污染",
              "无差别攻击"
            ],
            "outcomeTone": "危险",
            "branchHint": "引发公会恐慌的高危行为"
          },
          {
            "id": "D",
            "text": "发现这花闻起来有一股烤肉的味道，干脆每天摘几朵当饭后甜点吃，试图通过建立极高免疫力来强行解决问题。",
            "npcReply": "你不仅吃花，还经常因为吃出了幻觉而在营地里跳舞。同伴们已经习惯了你每天的保留节目。",
            "scoreDelta": {
              "str": 2,
              "int": -1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "barbarian": 1,
              "druid": 1
            },
            "alignmentDelta": {},
            "triggerTags": [
              "吃毒免疫",
              "幻觉舞蹈"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "依靠铁胃硬扛毒素"
          }
        ]
      },
      {
        "id": "druid_swamp_purification",
        "targetId": "druid_mutation_circle",
        "title": "腐化海绵",
        "scene": "大德鲁伊指着一片被死灵魔法彻底腐化的黑色水潭，要求你利用巨魔强悍的生命力走进去，像一块海绵一样‘吸收’并转化这些污染，以净化林地。",
        "prompt": "你站在这片散发着恶臭的死水前，迈出了第一步：",
        "options": [
          {
            "id": "A",
            "text": "强忍着腐肉蚀骨的剧痛，稳稳地站立在潭水中央，用自己的肉体作为过滤器，缓慢地将死气转化为生命力逼入脚底的泥土。",
            "npcReply": "水潭清澈了，你的双腿却变成了坚硬的枯木。大德鲁伊向你鞠躬：‘森林会永远记住你的牺牲。’",
            "scoreDelta": {
              "con": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "F": 1,
              "J": 1
            },
            "affinityDelta": {
              "druid": 3
            },
            "alignmentDelta": {
              "good": 2
            },
            "triggerTags": [
              "自我牺牲",
              "肉体过滤"
            ],
            "outcomeTone": "合格",
            "branchHint": "伟大的牺牲与净化"
          },
          {
            "id": "B",
            "text": "仔细分析死灵魔法的构成，利用周围纯净的树液和矿物，在潭水边建立一个多层导流阵法，避免直接伤害自己。",
            "npcReply": "你兵不血刃地完成了净化。大德鲁伊有些困惑：‘这到底是德鲁伊的仪式，还是法师的工程？’",
            "scoreDelta": {
              "int": 3,
              "con": -1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "druid": 1,
              "warlock": 1
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "工程净化",
              "理性避险"
            ],
            "outcomeTone": "偏离",
            "branchHint": "用科学的方式修补自然"
          },
          {
            "id": "C",
            "text": "觉得吸收太慢了，直接张开大嘴狂饮潭水，任由死灵魔法将自己的内脏搅得天翻地覆，最终变成一头理智全无的腐烂巨怪。",
            "npcReply": "你净化了沼泽，但你自己变成了更可怕的污染源。林地护卫队含着泪举起了武器。",
            "scoreDelta": {
              "str": 2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "barbarian": 1,
              "druid": -2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "狂饮腐败",
              "二次污染"
            ],
            "outcomeTone": "危险",
            "branchHint": "直接导致角色丧失理智"
          },
          {
            "id": "D",
            "text": "嫌弃潭水太冷，顺便扔了几个火球进去想把水烧热，结果引发了深层沼气大爆炸，把污染和半个林地全炸飞了。",
            "npcReply": "大火扑灭后，大德鲁伊看着光秃秃的焦土陷入了沉思。‘……污染确实没了，林地也没了。’",
            "scoreDelta": {
              "cha": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "druid": -1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "物理高温灭菌",
              "过度爆破"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其粗暴的问题解决法"
          }
        ]
      },
      {
        "id": "druid_protect_vs_prey",
        "targetId": "druid_mutation_circle",
        "title": "守护与饥饿",
        "scene": "你受命保护一窝极其稀有的月光狐幼崽。但你现在已经三天没吃东西了，巨魔的再生系统正因为极度饥饿而在疯狂抽取你的理智，幼狐的血肉香味正不断钻进你的鼻腔。",
        "prompt": "你要如何在撕裂理智的本能中守住自己的誓言？",
        "options": [
          {
            "id": "A",
            "text": "抓起旁边长满尖刺的毒藤蔓死死缠住自己的嘴巴和双手，宁可让毒素麻痹全身，也绝不给本能任何可乘之机。",
            "npcReply": "幼狐在你的怀里安然入睡，而你挺过了最痛苦的一夜。你证明了誓言可以压制本能。",
            "scoreDelta": {
              "wis": 3,
              "con": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "druid": 3
            },
            "alignmentDelta": {
              "lawful": 1,
              "good": 1
            },
            "triggerTags": [
              "极限克制",
              "自我麻痹"
            ],
            "outcomeTone": "合格",
            "branchHint": "意志极其坚定的守护者"
          },
          {
            "id": "B",
            "text": "利用强大的计算能力，精准评估出切下自己的一小块腿肉喂给幼狐，不仅能安抚它们，自己也能通过咀嚼落叶稍微转移注意力。",
            "npcReply": "你用极其残忍但理性的方式解决了双方的需求。大德鲁伊对你的冷静感到敬畏。",
            "scoreDelta": {
              "int": 2,
              "con": 1
            },
            "mbtiDelta": {
              "T": 1,
              "N": 1
            },
            "affinityDelta": {
              "druid": 2
            },
            "alignmentDelta": {},
            "triggerTags": [
              "自给自足",
              "精准评估"
            ],
            "outcomeTone": "偏离",
            "branchHint": "带有冷静算计的守护方式"
          },
          {
            "id": "C",
            "text": "誓言算什么？荒野的法则就是弱肉强食！双眼通红地把最肥的那只幼狐纳入了极度饥饿时的猎物清单。",
            "npcReply": "满嘴鲜血的你被永远逐出了林地。你不再是自然生态的一部分，你只是一个屠夫。",
            "scoreDelta": {
              "str": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "P": 1,
              "F": -1
            },
            "affinityDelta": {
              "druid": -2,
              "barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 2,
              "self": 2
            },
            "triggerTags": [
              "撕毁誓言",
              "吞噬幼弱"
            ],
            "outcomeTone": "危险",
            "branchHint": "触发不可挽回的黑名单堕落"
          },
          {
            "id": "D",
            "text": "拼命给幼狐们讲极其恐怖的地精鬼故事，试图通过恐吓让它们吓出一身冷汗变得难吃，以此来打消自己的食欲。",
            "npcReply": "幼狐们全被吓哭了。虽然你没吃它们，但它们可能留下一辈子的心理阴影。",
            "scoreDelta": {
              "cha": 2,
              "int": -1
            },
            "mbtiDelta": {
              "E": 1,
              "N": 1
            },
            "affinityDelta": {
              "druid": 1
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "精神惊吓",
              "奇葩转移法"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "靠令人哭笑不得的方法过关"
          }
        ]
      }
    ]
  },
  "endingTemplates": [
    {
      "endingId": "troll_accepted_barbarian",
      "endingType": "accepted",
      "title": "狂血重坦",
      "verdictLine": "裂斧营非常满意，他们正缺一个不需要修补的破城锤。",
      "explanation": "你在考核中展现出了惊人的破坏欲和与其匹配的承受力。考官不在乎你懂不懂兵法，只要你能在战场上把敌人的大门连同守卫一起砸碎，还能自己把断掉的手臂接回去，你就是他们最完美的士兵。",
      "tableFunction": "在队伍最前方吸收成吨伤害的肉盾，以及关键时刻的暴力输出核心。",
      "playableFlaw": "极度容易上头，一打起来就忘记防守和战术。",
      "nextHook": "军士长让你带队去清剿一个布满陷阱的哥布林巢穴，‘用你的肉体把陷阱全趟平’。",
      "recommendedClass": [
        "barbarian_camp"
      ],
      "tags": [
        "核心肉盾",
        "狂暴",
        "暴力美学"
      ]
    },
    {
      "endingId": "troll_accepted_fighter",
      "endingType": "accepted",
      "title": "活体城墙",
      "verdictLine": "军团最终决定，将整条防线的生死，托付给你这具庞大的怪物躯体。",
      "explanation": "你证明了最野蛮的血肉也能被锻造成最坚不可摧的堡垒。你没有被冲动吞噬，而是用巨魔的承受力完美执行了守卫的职责。在袍泽眼中，你不再是令人恐惧的异类，而是代表着绝对安全的黑色巨墙。",
      "tableFunction": "极其稳定的主坦克，不会被轻易恐惧或魅惑，能完美执行阵地战。",
      "playableFlaw": "过度依赖护甲和阵型，一旦落单或遭遇高机动敌人就会变得迟钝。",
      "nextHook": "你被分配去守卫一段最危险的城墙，据说那里每晚都会遭到大型魔物的冲击。",
      "recommendedClass": [
        "fighter_line"
      ],
      "tags": [
        "守序",
        "重装堡垒",
        "阵地战"
      ]
    },
    {
      "endingId": "troll_accepted_warlock",
      "endingType": "accepted",
      "title": "深渊储血罐",
      "verdictLine": "你成功给自己的再生能力定出了天价，并在宗主面前保留了谈判权。",
      "explanation": "你不仅拥有巨魔的肉体，更有着极其危险的算计能力。你成功地把自己的痛苦、血液甚至断肢变成了与魔鬼交易的筹码，并且没有让自己沦为廉价的血肉傀儡。契约所对你这种既懂魔法又懂榨取自身价值的狠角色十分赏识。",
      "tableFunction": "可以毫无顾忌支付生命值代价来释放强力魔法的法系炮台。",
      "playableFlaw": "身上总是带着奇怪的契约印记，必须定期支付血肉利息来偿还深渊债务。",
      "nextHook": "宗主突然要求你支付一块‘靠近心脏的肉’作为利息，你必须决定如何交付。",
      "recommendedClass": [
        "warlock_contract"
      ],
      "tags": [
        "血肉代价",
        "法术炮台",
        "债务人"
      ]
    },
    {
      "endingId": "troll_accepted_druid",
      "endingType": "accepted",
      "title": "畸变共生体",
      "verdictLine": "你将失控的异变纳入了生态的循环，荒野接纳了你这株行走的巨型毒蘑菇。",
      "explanation": "你没有试图切除身上的异变，而是让它们与自然深度融合。你的皮肤下钻出了藤蔓，伤口处开出了剧毒的花朵，而你完美地控制了它们。大德鲁伊认为你展现了生命最野性、最原初的韧性，你成为了林地中最令人敬畏的守护者。",
      "tableFunction": "自带环境控制、毒素伤害和极强自我恢复能力的近战法系多面手。",
      "playableFlaw": "走在文明城镇里极易招惹平民的恐慌，常被当成移动瘟疫源。",
      "nextHook": "一片森林正在遭受死灵魔法的腐化，大德鲁伊派你去‘吸收’那些腐化源。",
      "recommendedClass": [
        "druid_mutation_circle"
      ],
      "tags": [
        "异变躯体",
        "自然共生",
        "生化伤害"
      ]
    },
    {
      "endingId": "troll_probation_unstable",
      "endingType": "probation",
      "title": "高危起爆器",
      "verdictLine": "你力大无穷但毫无理智可言，长官决定先让你当个临时工看看情况。",
      "explanation": "你的力量数值极其惊人，但智力和感知低得可怕。在测试中你展现了毁灭性的破坏力，但也多次差点砸死考官。为了不浪费这身怪力，招募处给你挂了个‘见习’牌子，把你丢进了最危险的敢死队。",
      "tableFunction": "极高输出但随时可能暴走的定时炸弹，极其考验队友的牵扯能力。",
      "playableFlaw": "战斗中极易陷入混乱，经常需要队友花一个动作来把你喊醒。",
      "nextHook": "你被戴上了一个能电击你的抑制项圈，交由一个小队‘试用’。",
      "recommendedClass": [
        "barbarian_camp"
      ],
      "tags": [
        "见习",
        "输出极高",
        "误伤风险"
      ]
    },
    {
      "endingId": "troll_probation_slow_shield",
      "endingType": "probation",
      "title": "迟缓的移动盾座",
      "verdictLine": "你进攻迟缓，但这副庞大的身体仍能成为可靠的防线支点。",
      "explanation": "你的体质分数无可挑剔，但敏捷和力量却差强人意。你挥不动沉重的战锤，也躲不开灵活的盗贼。但你真的很能挨打。长官叹了口气，把你留在了营地，作为‘移动掩体’或‘特殊陪练’见习留用。",
      "tableFunction": "放弃所有攻击动作，纯粹依靠庞大体积和高血量为队友提供掩护。",
      "playableFlaw": "速度极慢，经常在战斗结束时才刚刚跑到前线。",
      "nextHook": "你被分配去护送一辆装满易爆炼金药剂的马车，唯一的任务就是用身体挡住所有流矢。",
      "recommendedClass": [
        "fighter_line"
      ],
      "tags": [
        "见习",
        "纯挨打",
        "极度迟缓"
      ]
    },
    {
      "endingId": "troll_probation_cowardly",
      "endingType": "probation",
      "title": "心有余悸的巨兽",
      "verdictLine": "你对战场代价看得太清楚，公会决定暂时让你以见习身份学习站稳。",
      "explanation": "你对痛苦极其敏感，或者过于聪明导致你看透了战争的惨烈。在考核中你总是试图规避伤害，这让崇尚暴力的考官非常不爽。但考虑到你庞大的体格，他们还是捏着鼻子让你见习，希望实战能逼出你的野性。",
      "tableFunction": "一个总是在后面指挥或丢石头的奇怪巨魔，偶尔爆发时也有威慑力。",
      "playableFlaw": "遇到强敌时第一反应是战术撤退，或者把体型较小的队友藏在怀里逃跑。",
      "nextHook": "你的小队遇到了真正的死局，你终于要面临‘逃跑还是扛伤’的终极选择。",
      "recommendedClass": [
        "fighter_line",
        "druid_mutation_circle"
      ],
      "tags": [
        "见习",
        "怯懦",
        "反差性格"
      ]
    },
    {
      "endingId": "troll_probation_stubborn",
      "endingType": "probation",
      "title": "不听使唤的破城锤",
      "verdictLine": "你的破坏力很棒，但因为你总是按自己的想法砸门，暂时只能算编外人员。",
      "explanation": "你极度自信且充满野性，完全不听从长官的指令。虽然你完成了任务，但过程让所有人血压飙升。招募处不愿放弃你这个战力，但也不敢让你立刻转正，只能先让你以‘编外佣兵’的身份跟着队伍混。",
      "tableFunction": "经常能打出神来之笔的近战，但也经常因为不听指挥而破坏原有计划。",
      "playableFlaw": "总是觉得自己比指挥官聪明，经常在战斗中提出极其离谱的战术建议。",
      "nextHook": "因为抗命你被罚去清理下水道，结果你在里面发现了一个巨大的怪物蛋。",
      "recommendedClass": [
        "barbarian_camp",
        "warlock_contract"
      ],
      "tags": [
        "编外",
        "自大",
        "不服管教"
      ]
    },
    {
      "endingId": "troll_transferred_savage",
      "endingType": "transferred",
      "title": "脱缰的野兽",
      "verdictLine": "军团的纪律锁不住你，你骨子里的疯狂只适合最野蛮的泥沼。",
      "explanation": "你原本想当个守纪律的战士，但考核中你失控的狂暴、抛弃阵型发起冲锋的本能彻底暴露了。考官们一致认为你完全不适合任何需要耐心和纪律的职业，直接把你打包送给了隔壁只会咆哮的蛮子营地。",
      "tableFunction": "放弃了防御和策略，纯粹用血肉和怒火进行压制的狂战士。",
      "playableFlaw": "一旦闻到血腥味就极难控制情绪，经常在不该开战的场合强行开团。",
      "nextHook": "蛮子营地的大佬要求你空手打赢一头熊，以此作为你入营的真正仪式。",
      "recommendedClass": [
        "barbarian_camp"
      ],
      "rejectedClass": "fighter_line",
      "tags": [
        "转岗",
        "彻底失控",
        "纯粹野性"
      ]
    },
    {
      "endingId": "troll_transferred_naturalist",
      "endingType": "transferred",
      "title": "畸变学者",
      "verdictLine": "你比起经营契约和出卖灵魂，更像是在狂热地研究自己身上的异变。",
      "explanation": "你本想去契约所当个高冷术士，但考核中你对自身再生机制、毒素和躯体异变的探究欲，远大于对恶魔契约的兴趣。契约所的导师看着你像被孢子谜题迷住的异变学者一样鼓捣孢子，毫不犹豫地把你推荐给了德鲁伊异变环。",
      "tableFunction": "精通生物毒素与躯体改造的施法者，能用自身的血肉组织施放自然法术。",
      "playableFlaw": "对一切生命异变抱有过度的好奇心，经常在战斗中停下来观察敌人的伤口。",
      "nextHook": "大德鲁伊给了你一颗正在腐烂的种子，让你用自己的血把它‘种活’。",
      "recommendedClass": [
        "druid_mutation_circle"
      ],
      "rejectedClass": "warlock_contract",
      "tags": [
        "转岗",
        "探究生命",
        "狂热学者"
      ]
    },
    {
      "endingId": "troll_transferred_trader",
      "endingType": "transferred",
      "title": "冷血生态商",
      "verdictLine": "你把自然的循环写成了冷酷的交易，契约所的星探向你抛出了橄榄枝。",
      "explanation": "你原本在德鲁伊的林地接受考核，但你解决问题的方式太过精算和逐利。你把孢子当成商品，把生态循环视为筹码。大德鲁伊对你的世俗和冷酷感到失望，但潜伏的术士掮客却认为你是个不可多得的商业奇才。",
      "tableFunction": "善于利用法术和契约控制敌人，同时自己也有不俗生存能力的施法者。",
      "playableFlaw": "不管干什么都要算计利益，极度不讨队友喜欢，经常被怀疑随时会背叛。",
      "nextHook": "你接到了第一份工作：去向一个快破产的男爵讨要他抵押给深渊的长子。",
      "recommendedClass": [
        "warlock_contract"
      ],
      "rejectedClass": "druid_mutation_circle",
      "tags": [
        "转岗",
        "利益至上",
        "契约专家"
      ]
    },
    {
      "endingId": "troll_transferred_shield",
      "endingType": "transferred",
      "title": "清醒的叹息之墙",
      "verdictLine": "你比预期中稳重太多，蛮荒的嗜血不适合你，重甲防线才是你的归宿。",
      "explanation": "你本想去蛮子营地或别的什么地方大杀四方，但考官发现你在危机面前的第一反应总是‘保护’和‘稳住’，而不是‘摧毁’。这种冷静克制被认为是对狂暴血脉的亵渎，于是你被转手推荐给了最需要定海神针的重装防线。",
      "tableFunction": "非常可靠的守护者，能够敏锐地察觉战场局势并挡在最需要的地方。",
      "playableFlaw": "缺乏爆发伤害，总是被迫陷入漫长的消耗战，承受最多的痛苦。",
      "nextHook": "你被分配到了一个全是由冲动的新兵组成的小队，你成了他们痛苦的老父亲。",
      "recommendedClass": [
        "fighter_line"
      ],
      "rejectedClass": "barbarian_camp",
      "tags": [
        "转岗",
        "守护者",
        "温和巨物"
      ]
    },
    {
      "endingId": "troll_blacklisted_butcher",
      "endingType": "blacklisted",
      "title": "血腥屠夫",
      "verdictLine": "正规军不可能招募一个在考核中肆意残杀甚至把队友也纳入饥饿本能的猎物范围的屠夫。",
      "explanation": "你在测试中展现出的极度嗜血、残忍以及对生命的漠视，彻底触碰了正规营地的底线。你被愤怒的教官们联手打出了大门。但没关系，当天晚上，一群信仰邪神的狂徒在下水道里找到了你，尊你为他们的神选打手。",
      "tableFunction": "完全走邪恶阵营路线的狂战或术士，以残忍的手段恐吓敌人。",
      "playableFlaw": "只要出现在城镇里就有被守卫逮捕的风险，声名狼藉。",
      "nextHook": "邪教徒们要求你去绑架一名高阶圣武士，作为献给邪神的祭品。",
      "recommendedClass": [
        "barbarian_camp"
      ],
      "tags": [
        "黑名单",
        "混乱邪恶",
        "屠夫本能"
      ]
    },
    {
      "endingId": "troll_blacklisted_monster",
      "endingType": "blacklisted",
      "title": "荒野异生种",
      "verdictLine": "你的异变和暴躁彻底切断了你与文明的联系，荒野深处才是你的归宿。",
      "explanation": "无论是纪律、契约还是考核规则，对你来说都像是废纸。你肆意释放着自身的毒素与怒火，打烂了考场，咆哮着冲回了森林。正规公会永久拉黑了你。凭着这副恐怖的巨魔之躯，你成功在一处深林里收服了一群地精和豺狼人，占山为王。",
      "tableFunction": "自带小弟和野外生存特长的怪物领主，非常适合荒野剧本。",
      "playableFlaw": "文盲且极度缺乏社交常识，在任何文明设施中都会引发混乱。",
      "nextHook": "有一队自称‘英雄’的冒险者闯进了你的地盘，你决定给他们上生动的一课。",
      "recommendedClass": [
        "druid_mutation_circle",
        "barbarian_camp"
      ],
      "tags": [
        "黑名单",
        "回归野性",
        "怪物首领"
      ]
    },
    {
      "endingId": "troll_blacklisted_coward",
      "endingType": "blacklisted",
      "title": "背誓的佣兵",
      "verdictLine": "一个会在关键时刻把队友当做挡箭牌或垫脚石的巨魔？公会决定全行业封杀你。",
      "explanation": "你极度自私且背信弃义的表现让所有考官感到作呕。没人愿意把后背交给一个随时会卖队友的庞然大物。你被灰溜溜地赶了出去。不过，地下黑市的雇佣兵团对你很感兴趣，他们那里的规矩就是没有规矩，只要你能活下来就行。",
      "tableFunction": "专注于生存和坑人的灰色地带角色，擅长在混战中保全自己。",
      "playableFlaw": "极度容易触发信任危机，无论做什么都会被队友怀疑别有用心。",
      "nextHook": "黑市老板派你去执行一项必死的诱饵任务，你必须再次想办法‘活下来’。",
      "recommendedClass": [
        "warlock_contract",
        "fighter_line"
      ],
      "tags": [
        "黑名单",
        "自私自利",
        "黑市佣兵"
      ]
    },
    {
      "endingId": "troll_blacklisted_weapon",
      "endingType": "blacklisted",
      "title": "失控攻城锤",
      "verdictLine": "公会拒绝录用，但某些极端的地下攻城承包商已经盯上了你的破坏力。",
      "explanation": "你在整个流程中除了破坏、咆哮和极其狂暴的冲撞，没有展现出任何克制力。招募处无奈之下，直接联系了地下黑市。你被戴上沉重的枷锁，雇给了一支正在进行非法攻城的军阀，成为了一台每天只管吃肉和撞门的活体兵器。",
      "tableFunction": "受雇于危险组织，拥有绝对物理破坏力但处境堪忧的特殊角色。",
      "playableFlaw": "必须随时受到控制符文或‘监督者’的压制，行动受限严重。",
      "nextHook": "在一场惨烈的攻城战中，控制你的符文意外碎裂，你获得了自由，现在你该干嘛？",
      "recommendedClass": [
        "fighter_line",
        "barbarian_camp"
      ],
      "tags": [
        "黑名单",
        "活体兵器",
        "地下军阀"
      ]
    },
    {
      "endingId": "troll_absurd_sleeping",
      "endingType": "absurdAccepted",
      "title": "鼾声退敌",
      "verdictLine": "因为你卡在要道上睡着了，敌军一晚上没能攻进来，你居然因为‘防守有功’被录取了。",
      "explanation": "这是招募处有史以来最荒谬的记录。你不仅没有展现出任何战斗技巧，甚至在最关键的测试中因为体质问题直接呼呼大睡。但你庞大且恶臭的身体完美地堵住了通道。考官捏着鼻子给你盖了合格章：‘至少他很占地方。’",
      "tableFunction": "经常在不合时宜的时候挂机，但仅凭体积和极高的体质就能恶心敌人的喜剧角色。",
      "playableFlaw": "极度嗜睡，随时可能在战斗中需要进行‘保持清醒’的判定。",
      "nextHook": "你被当成某种吉祥物兼堵门工具，派去防守一个传闻有恶魔出没的地窖。",
      "recommendedClass": [
        "barbarian_camp",
        "fighter_line"
      ],
      "tags": [
        "荒诞通过",
        "挂机战术",
        "意外之喜"
      ]
    },
    {
      "endingId": "troll_absurd_merchant",
      "endingType": "absurdAccepted",
      "title": "黑心军需商",
      "verdictLine": "你用极其不要脸的推销手段，把考核变成了一场军需采购，军需官决定收编你。",
      "explanation": "谁能想到一个巨魔会在考核中推销自己的洗劫战利品或怪异草药？你不仅没有按套路打架，反而凭借着惊人的厚脸皮和一点小聪明，把考官给绕晕了。后勤部觉得你这不要脸的劲头绝对能把敌军的物资全黑过来，于是破格录取了你。",
      "tableFunction": "一个拥有惊人怪力和体质，但比起打架更喜欢摸尸体和搜刮财物的后勤达人。",
      "playableFlaw": "极度贪财，在任何危险的地方第一反应都是‘这东西能不能卖钱’。",
      "nextHook": "军需官让你去敌军后方‘采购’一批高等精灵的军粮，不管你用什么手段。",
      "recommendedClass": [
        "druid_mutation_circle",
        "warlock_contract"
      ],
      "tags": [
        "荒诞通过",
        "商业奇才",
        "不务正业"
      ]
    },
    {
      "endingId": "troll_absurd_scary",
      "endingType": "absurdAccepted",
      "title": "纯粹的精神污染",
      "verdictLine": "你没动手，但你那些难以预测的奇葩手段让考官心理防线崩溃，被迫让你及格赶你走。",
      "explanation": "你把巨魔令人作呕或极度诡异的特质发挥到了极限。你用极其荒诞、怪异甚至辣眼睛的行为瓦解了整个考场的严肃氛围。为了不让你继续折磨其他新兵的心理健康，考官迅速给了你一个及格，把你踢去了最远的前线。",
      "tableFunction": "依靠恐吓、恶心和难以预测的怪异手段来吸引仇恨的诡异肉盾。",
      "playableFlaw": "魅力极低且行为难以预测，多数公会书记员在给你登记前，都得先做一次意志豁免。",
      "nextHook": "你被派去审问一个极其顽固的俘虏，长官要求你‘自由发挥’。",
      "recommendedClass": [
        "warlock_contract",
        "barbarian_camp"
      ],
      "tags": [
        "荒诞通过",
        "精神污染",
        "奇葩脑洞"
      ]
    },
    {
      "endingId": "troll_absurd_mascot",
      "endingType": "absurdAccepted",
      "title": "凶暴吉祥物",
      "verdictLine": "你表现出了与体型完全不符的滑稽反差感，你成为了被老兵联名保下的危险新人。",
      "explanation": "本来你已经被淘汰了，但你那笨拙、努力试图融入却频频闹笑话的举动，意外地戳中了这群在生死边缘摸爬滚打的老兵的奇怪萌点。他们向长官联名保释了你。你现在是整个营地最庞大、最暴力的营地招牌。",
      "tableFunction": "为了保护身边的‘小不点’队友，偶尔能爆发出惊人潜力的守护者。",
      "playableFlaw": "因为体型庞大且容易闹笑话，经常在关键时刻破坏潜行或弄碎贵重物品。",
      "nextHook": "老兵们凑钱给你打造了一把刻着小花的巨锤，并要求你带着它去敲碎一头巨龙的脑壳。",
      "recommendedClass": [
        "fighter_line"
      ],
      "tags": [
        "荒诞通过",
        "反差萌",
        "营地吉祥物"
      ]
    }
  ],
  "mbtiFilters": [
    {
      "groupId": "NT",
      "title": "冰冷算计的庞大沙漏",
      "oneLine": "怪物的外壳下，藏着一台精密计算血肉损耗的战术引擎。",
      "evaluationStyle": "你并不像刻板印象中的巨魔那般无脑。你非常清楚自己庞大身躯的价值和再生能力的界限。你把每一次冲锋、挨打甚至断肢，都当做可以计算和交换的战术筹码。",
      "barbarianFlavor": "你的狂暴不是发泄，而是经过计算的承伤。你知道该替哪个队友挡刀才能换来最大的战果。",
      "fighterFlavor": "你对防线有自己独特的理解，甚至会刻意暴露巨魔身体的弱点来引诱敌人落入包围圈。",
      "warlockFlavor": "你冷静地阅读着契约，精打细算地用再生的肉块向宗主支付代价，像一个精明的债务人。",
      "druidFlavor": "你将自己的肉体当成实验室，观察再生与异变的过程，以纯粹理性的目光解构野性的力量。",
      "riskText": "过于理性的算计容易让你在关键时刻显得冷酷，甚至把队友也当成算盘上的消耗品。"
    },
    {
      "groupId": "NF",
      "title": "背负罪业的残破城墙",
      "oneLine": "为了庇护身后的微弱火光，甘愿让这副被世人畏惧的怪物外壳千疮百孔。",
      "evaluationStyle": "文明对你的排斥反而催生了你深沉的情感。你清楚别人如何看待这副被世人称作怪物的躯壳，因此你更想用血肉来证明自己的灵魂。你承受痛苦，不仅是为了生存，更是为了赎罪或守护那些接纳你的人。",
      "barbarianFlavor": "你愤怒的源泉不是杀戮欲，而是看到弱者受难时的共情，你的狂暴是一场悲壮的献祭。",
      "fighterFlavor": "你是队伍里最让人心安的盾牌。只要还有一口气在，你就绝不会让敌人跨过你残破的身体。",
      "warlockFlavor": "你为了拯救某人而被迫签下契约，把灵魂的折磨和肉体的痛苦都视为自己必须背负的十字架。",
      "druidFlavor": "你把巨魔外壳当成保护自然的屏障，对生命有着极其悲悯的理解，试图抚平荒野与文明的裂痕。",
      "riskText": "极易陷入自我感动的殉道者情结，甚至会为了证明自己的高尚而盲目承受不该承受的致命伤。"
    },
    {
      "groupId": "SJ",
      "title": "铁律束缚的重装拒马",
      "oneLine": "用刻板的规章与绝对的纪律，给体内的怪物本能套上冰冷的铁笼。",
      "evaluationStyle": "你极其渴望秩序。由于深知巨魔血脉中蕴含着怎样混乱与失控的破坏欲，你比普通人更加严格地遵守规则、军规与流程。你试图用外在的条条框框，把这副危险的肉体锻造成守卫秩序的基石。",
      "barbarianFlavor": "哪怕在狂暴状态下，你也会刻板地遵循着‘不越界、不误伤’的自我暗示，形成一种极其诡异的克制狂暴。",
      "fighterFlavor": "你是指挥官最完美的工具，一丝不苟地执行着‘死守阵地’的命令，直到再生能力被彻底耗尽。",
      "warlockFlavor": "你会把契约当成神圣不可侵犯的守则，极其死板地按月、按量向宗主上贡自己的血肉。",
      "druidFlavor": "你排斥无序的异变，试图在自然与肉身之间建立一种极其刻板的循环平衡规程。",
      "riskText": "一旦赖以维持理智的规则被打破，或者军令出现自相矛盾，你防线崩塌的速度会比任何人都快。"
    },
    {
      "groupId": "SP",
      "title": "狂舞废墟的嗜血浪客",
      "oneLine": "把再生的痛苦当成下酒菜，在刀光血影中踩出属于怪物的野性律动。",
      "evaluationStyle": "你完全不在乎文明社会的眼光，只凭直觉和冲动行事。巨魔的体质给了你肆意妄为的资本，你把探险当成一场刺激的街头互殴。无论是在酒馆斗殴还是地城厮杀，你都享受那种拳拳到肉、鲜血飞溅的即兴狂欢。",
      "barbarianFlavor": "你的战斗毫无章法，纯粹是随着情绪的高涨而肆意挥洒怪力，甚至会大笑着把折断的骨头硬接回去。",
      "fighterFlavor": "你觉得阵地战无聊透顶，总是仗着体质硬扛伤害冲出防线，去寻找最惊险刺激的近身肉搏。",
      "warlockFlavor": "你根本不看契约的细则，只觉得用点血肉换个能喷火的戏法简直酷毙了，完全不顾后续的代价。",
      "druidFlavor": "你极其享受变异带来的新鲜感，把异化当成一种野性的游戏，毫不克制地释放本能的欲望。",
      "riskText": "为了追求肾上腺素的飙升，你经常主动往最致命的陷阱里跳，迟早会因为玩火自焚而丧命。"
    }
  ]
});
