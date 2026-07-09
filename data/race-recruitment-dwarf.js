(() => {
  const data = {
  "meta": {
    "version": 1,
    "raceId": "dwarf",
    "raceNameZh": "矮人",
    "scope": "race_recruitment_full"
  },
  "raceCard": {
    "raceId": "dwarf",
    "raceNameZh": "矮人",
    "raceNameEn": "Dwarf",
    "title": "铁峰堡的黑铁防线与征兵考验",
    "oneLine": "固执如石，嗜酒如命。胡须是尊严，锻造是信仰。",
    "bodyText": "矮人们能喝下毒死巨兽的烈酒，也能在记仇小本本上把世仇的名字写满一万遍。要加入他们的队伍，你不仅需要重装防御与重锤，更需要一副坚硬的肝脏和同样固执的灵魂。",
    "tags": [
      "固执",
      "嗜酒",
      "铁锤",
      "重装"
    ],
    "warningText": "切勿在矮人面前称赞精灵的工艺，也不要试图拔他们的胡子。否则后果自负。",
    "recruiterQuote": "“你的胡子留得不错，但你的锤子和肝脏同样够硬吗？” —— 铁峰卫士招募官·铜须"
  },
  "recruitTargets": [
    {
      "targetId": "guild_fighter",
      "classNameZh": "战士训练厅",
      "classNameEn": "Fighter Guild",
      "title": "铁峰卫士",
      "oneLine": "战场上最坚不可摧的移动城墙。如果你想要一柄能敲碎龙骨的战锤，或者一堵死也不退的盾牌，找他们就对了。",
      "recruiter": "战士训练厅书记员",
      "recruitPitch": "战场上最坚不可摧的移动城墙。如果你想要一柄能敲碎龙骨的战锤，或者一堵死也不退的盾牌，找他们就对了。",
      "acceptedStyle": "关键门槛：STR 12 / CON 14。通过后会按该路线记录职业试炼倾向。",
      "likelyFailure": "若只展示血脉噱头而无法稳定服务队伍，会被列入观察或转岗名单。",
      "hiddenRoute": "试炼会同时记录其他公会倾向，最终判定可能转荐到更匹配的柜台。",
      "recommendedStats": [
        "str",
        "con"
      ],
      "riskTags": [
        "阵线",
        "武器",
        "STR",
        "CON"
      ]
    },
    {
      "targetId": "guild_paladin",
      "classNameZh": "誓言审议厅",
      "classNameEn": "Paladin Hall",
      "title": "熔炉誓约者",
      "oneLine": "将神圣的誓言镌刻在钢铁与烈火之中。他们发誓守护氏族的荣耀，并随时准备用燃烧的战锤给异教徒（特别是精灵）做物理超度。",
      "recruiter": "誓言审议厅书记员",
      "recruitPitch": "将神圣的誓言镌刻在钢铁与烈火之中。他们发誓守护氏族的荣耀，并随时准备用燃烧的战锤给异教徒（特别是精灵）做物理超度。",
      "acceptedStyle": "关键门槛：STR 10 / CON 12 / CHA 12。通过后会按该路线记录职业试炼倾向。",
      "likelyFailure": "若只展示血脉噱头而无法稳定服务队伍，会被列入观察或转岗名单。",
      "hiddenRoute": "试炼会同时记录其他公会倾向，最终判定可能转荐到更匹配的柜台。",
      "recommendedStats": [
        "str",
        "con",
        "cha"
      ],
      "riskTags": [
        "誓言",
        "守护",
        "STR",
        "CON"
      ]
    },
    {
      "targetId": "guild_cleric",
      "classNameZh": "誓约医疗所",
      "classNameEn": "Cleric Ward",
      "title": "符文祭司",
      "oneLine": "他们向山脉与酒神祈祷。他们的治疗术不仅能愈合伤口，还能顺便治好你的宿醉（或者让你再醉一次）。",
      "recruiter": "誓约医疗所书记员",
      "recruitPitch": "他们向山脉与酒神祈祷。他们的治疗术不仅能愈合伤口，还能顺便治好你的宿醉（或者让你再醉一次）。",
      "acceptedStyle": "关键门槛：WIS 14 / CON 10。通过后会按该路线记录职业试炼倾向。",
      "likelyFailure": "若只展示血脉噱头而无法稳定服务队伍，会被列入观察或转岗名单。",
      "hiddenRoute": "试炼会同时记录其他公会倾向，最终判定可能转荐到更匹配的柜台。",
      "recommendedStats": [
        "wis",
        "con"
      ],
      "riskTags": [
        "神术",
        "急救",
        "WIS",
        "CON"
      ]
    },
    {
      "targetId": "guild_artificer",
      "classNameZh": "工匠工坊",
      "classNameEn": "Artificer Workshop",
      "title": "黑铁工匠",
      "oneLine": "永远满身机油味，认为世界上没有什么是不能用齿轮、黑火药和几句粗话解决的。如果有，那就用更大口径的火炮。",
      "recruiter": "工匠工坊书记员",
      "recruitPitch": "永远满身机油味，认为世界上没有什么是不能用齿轮、黑火药和几句粗话解决的。如果有，那就用更大口径的火炮。",
      "acceptedStyle": "关键门槛：INT 14 / DEX 10。通过后会按该路线记录职业试炼倾向。",
      "likelyFailure": "若只展示血脉噱头而无法稳定服务队伍，会被列入观察或转岗名单。",
      "hiddenRoute": "试炼会同时记录其他公会倾向，最终判定可能转荐到更匹配的柜台。",
      "recommendedStats": [
        "int",
        "dex"
      ],
      "riskTags": [
        "装置",
        "工坊",
        "INT",
        "DEX"
      ]
    }
  ],
  "physiqueChecks": [
    {
      "id": "dwarf_physique_alcohol",
      "targetId": "guild_fighter",
      "title": "毒药与麦酒",
      "scene": "在一次地下酒馆的黑市交易中，一名卓尔精灵（黑暗精灵）刺客在你引以为傲的矮人麦酒里下了能放倒一头地精巨兽的猛烈神经毒素。你豪爽地一饮而尽。",
      "prompt": "当卓尔精灵冷笑着等你在痛苦中倒下时，你的第一反应是：",
      "options": [
        {
          "id": "A",
          "text": "发动【毒素免疫】，砸吧砸吧嘴评价道：“卓尔的毒药口感偏酸，缺乏麦芽的厚重。”然后当面把一整瓶毒药兑进自己的麦酒里，一饮而尽。",
          "npcReply": "卓尔精灵看着你把高阶毒药当调料，当场破防逃跑了。“你的肝脏比矮人的城墙还厚。”",
          "scoreDelta": {
            "con": 3,
            "str": 1
          },
          "mbtiDelta": {
            "E": 1,
            "S": 1
          },
          "affinityDelta": {
            "guild_fighter": 3
          },
          "alignmentDelta": {
            "action": 2
          },
          "triggerTags": [
            "毒药拌酒",
            "肝脏城墙",
            "无视毒素"
          ],
          "outcomeTone": "合格",
          "branchHint": "把剧毒当调味料的铁胃战士"
        },
        {
          "id": "B",
          "text": "强行发动【狂暴】，对着卓尔大喊“这是老子喝过最有劲的鸡尾酒！”，然后硬抗着毒素掉血，疯狂地拉着卓尔开始跳极其剧烈的矮人踢踏舞，直到把刺客累到口吐白沫。",
          "npcReply": "你用极其物理的方式消耗了敌人的体力。“虽然你中毒了，但刺客先被你累死了。”",
          "scoreDelta": {
            "str": 2,
            "wis": -1
          },
          "mbtiDelta": {
            "F": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_fighter": 2,
            "guild_paladin": 1
          },
          "alignmentDelta": {
            "action": 1
          },
          "triggerTags": [
            "狂暴踢踏舞",
            "物理消耗",
            "死要面子"
          ],
          "outcomeTone": "偏离",
          "branchHint": "靠极其离谱的体力拖死敌人的狂战士"
        },
        {
          "id": "C",
          "text": "掏出《劳工保障法》，指控卓尔刺客“未经许可在公共餐饮场所投放未检疫的化学炼金制剂”，要求她立刻赔偿十万金币精神损失费，否则就用矮人商会的名义起诉她到破产。",
          "npcReply": "卓尔刺客被你这套极其娴熟的法律讹诈吓得连夜逃回了幽暗地域。“你的心智比恶魔还要狡诈。”",
          "scoreDelta": {
            "int": 2,
            "wis": -2
          },
          "mbtiDelta": {
            "N": 1,
            "T": 1
          },
          "affinityDelta": {
            "guild_artificer": -2
          },
          "alignmentDelta": {
            "self": 2
          },
          "triggerTags": [
            "法律讹诈",
            "精神损失费",
            "商会起诉"
          ],
          "outcomeTone": "危险",
          "branchHint": "精通地城法律漏洞并疯狂敲诈勒索的法棍"
        },
        {
          "id": "D",
          "text": "发觉毒药有极佳的麻醉效果，当场大喜过望，掏出工具开始给自己做一直想做但怕疼的“智齿拔除手术”，甚至还热情地邀请处于懵逼状态的卓尔刺客帮忙递钳子。",
          "npcReply": "卓尔刺客因为受不了你极其血腥硬核的自我手术现场，捂着嘴干呕着跑了。“你的神经系统绝对少接了几根线。”",
          "scoreDelta": {
            "con": 2,
            "cha": 1
          },
          "mbtiDelta": {
            "P": 2
          },
          "affinityDelta": {
            "guild_cleric": 1
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "麻醉拔牙",
            "借毒手术",
            "吓跑刺客"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "脑洞清奇、把暗杀现场变成牙科诊所的乐子人"
        }
      ]
    },
    {
      "id": "dwarf_physique_height",
      "targetId": "guild_artificer",
      "title": "身高的劣势",
      "scene": "你们被困在一个正在注水的古老地下墓穴中。唯一能停止注水的拉杆在三米高的墙上。如果是人类可以跳上去，如果是精灵可以踩墙后空翻。但作为一个腿短且穿着重甲的矮人，你离拉杆差了一大截。",
      "prompt": "水位正在飞速上涨，矮人不会游泳。你如何解决这个‘高不可攀’的拉杆？",
      "options": [
        {
          "id": "A",
          "text": "掏出【石工工具】，原地疯狂垒砖，用极其离谱的五秒钟盖了一个三米高的微型违建瞭望塔，站在塔上优雅地拉下拉杆，并顺手给塔贴了个罚单。",
          "npcReply": "极其暴躁但极其有效的土木工程降维打击。“你甚至还走了一遍违章建筑的行政流程。”",
          "scoreDelta": {
            "str": 3,
            "int": 1
          },
          "mbtiDelta": {
            "T": 1,
            "S": 1
          },
          "affinityDelta": {
            "guild_artificer": 3,
            "guild_fighter": 1
          },
          "alignmentDelta": {
            "action": 2
          },
          "triggerTags": [
            "原地建塔",
            "光速违建",
            "土木降维"
          ],
          "outcomeTone": "合格",
          "branchHint": "随身携带砖头并精通违规建筑的暴力工匠"
        },
        {
          "id": "B",
          "text": "发动【动物交谈】，跟地下墓穴里的巨型老鼠签订了一份为期五年的劳务派遣合同，让老鼠爬上去拉开关，甚至极其正规地承诺支付它们五险一金。",
          "npcReply": "巨鼠感动地拉下了拉杆。“你用极其资本主义的手段收编了地下生物。”",
          "scoreDelta": {
            "str": 2,
            "cha": -1
          },
          "mbtiDelta": {
            "E": 1,
            "T": 1
          },
          "affinityDelta": {
            "guild_fighter": 2
          },
          "alignmentDelta": {
            "action": 1
          },
          "triggerTags": [
            "鼠辈劳务合同",
            "五险一金",
            "资本操作"
          ],
          "outcomeTone": "偏离",
          "branchHint": "擅长雇佣廉价劳动力并提供离谱福利的包工头"
        },
        {
          "id": "C",
          "text": "掏出一张《通用地城无障碍设施建设规范》，痛斥这个墓穴的设计极其歧视小体型种族，然后直接躺平在水里抗议，要求墓穴主人出来公开道歉并提供合理的适老化改造。",
          "npcReply": "如果不是队友把你强行拖走，你已经为地城平权运动捐躯了。“你是个极其危险的魔怔维权斗士。”",
          "scoreDelta": {
            "wis": -2,
            "int": -1
          },
          "mbtiDelta": {
            "F": 2,
            "J": 1
          },
          "affinityDelta": {
            "guild_paladin": -2
          },
          "alignmentDelta": {
            "self": 2,
            "risk": 2
          },
          "triggerTags": [
            "无障碍维权",
            "躺平抗议",
            "地城平权"
          ],
          "outcomeTone": "危险",
          "branchHint": "被各种法律条文洗脑、随时准备躺平碰瓷的法鬼"
        },
        {
          "id": "D",
          "text": "狂喝三桶碳酸麦酒，死死憋住气，然后利用一个极其极其恐怖的、带有推进力的超大响嗝，把自己像火箭炮弹一样强行发射到了天花板上，用脸撞开了拉杆。",
          "npcReply": "拉杆拉下了，你也因为脑震荡在水里漂了一整天。“牛顿看了你的碳酸推进器都得从棺材里坐起来。”",
          "scoreDelta": {
            "dex": 1,
            "con": 2
          },
          "mbtiDelta": {
            "P": 2,
            "N": 1
          },
          "affinityDelta": {
            "guild_artificer": 2
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "碳酸火箭嗝",
            "物理升空",
            "用脸开门"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "极其擅长利用恶心生理机能进行位移的奇葩"
        }
      ]
    },
    {
      "id": "dwarf_physique_beard",
      "targetId": "guild_paladin",
      "title": "燃烧的尊严",
      "scene": "胡须是矮人的第二条命。在面对一只失控的火元素时，你虽然成功挡下了它的攻击，但一团流火极其不幸地烧焦了你精心编织、留了八十年的胡须尾巴。",
      "prompt": "闻到自己胡须被烧焦的味道，作为一向冷静的誓约骑士，你会如何反应？",
      "options": [
        {
          "id": "A",
          "text": "施展【造水术】在嘴里，然后一口极其浓烈的水属性老痰精准喷灭火焰。接着用战锤把火元素砸成小火星，收进随身携带的保温杯里当永久免费的暖手宝。",
          "npcReply": "火元素极其屈辱地成为了你的便携家电。“你不仅扑灭了火，还极其精明地进行了废物利用。”",
          "scoreDelta": {
            "str": 3,
            "wis": -1
          },
          "mbtiDelta": {
            "F": 1,
            "S": 1
          },
          "affinityDelta": {
            "guild_paladin": 1,
            "guild_fighter": 2
          },
          "alignmentDelta": {
            "action": 2
          },
          "triggerTags": [
            "老痰灭火",
            "火元素保温杯",
            "废物利用"
          ],
          "outcomeTone": "偏离",
          "branchHint": "极其硬核且绝不浪费任何资源的实用主义战士"
        },
        {
          "id": "B",
          "text": "极其严肃地掏出《矮人毛发伤害理赔表》，强行把火元素按在地上，逼它用身上的元素核心来支付巨额的“胡须精神损失费”和“后续三百年植发保养套餐”。",
          "npcReply": "火元素被你敲诈得只剩下一缕青烟。“极其可怕的理赔业务能力。你把意外变成了长达几个世纪的家族理财产品。”",
          "scoreDelta": {
            "cha": 3,
            "con": 1
          },
          "mbtiDelta": {
            "J": 2,
            "I": 1
          },
          "affinityDelta": {
            "guild_paladin": 3
          },
          "alignmentDelta": {
            "order": 2
          },
          "triggerTags": [
            "毛发理赔表",
            "敲诈元素",
            "植发套餐"
          ],
          "outcomeTone": "合格",
          "branchHint": "极其注重毛发权益且极度记仇的理赔专家"
        },
        {
          "id": "C",
          "text": "从怀里掏出一张早已准备好的“严重烧伤病假条”，立刻倒地不起，宣布自己由于受到不可逆转的工伤，申请提前退休，并且要求小队立即结清下半辈子的养老金。",
          "npcReply": "你的队友气得差点当场把你火化。“你不仅失去了胡子，还失去了矮人最基本的职业操守。”",
          "scoreDelta": {
            "cha": -2,
            "wis": -2
          },
          "mbtiDelta": {
            "P": 1,
            "T": 1
          },
          "affinityDelta": {
            "guild_paladin": -2
          },
          "alignmentDelta": {
            "chaotic": 2,
            "self": 1
          },
          "triggerTags": [
            "烧伤病假",
            "骗取养老金",
            "光速退休"
          ],
          "outcomeTone": "危险",
          "branchHint": "随时准备用极其离谱的借口骗保的职业混子"
        },
        {
          "id": "D",
          "text": "发现焦黑的胡须具有极佳的碳素结构，立刻开始在下巴上编织钢丝，现场给自己极其赛博朋克地做了一个附带【荆棘反伤】和【火焰抗性】的重金属合金假胡子。",
          "npcReply": "你的队友看着你一边下巴冒烟一边进行赛博义体改造，陷入了长久的沉默。“……你这已经不是打铁了，你是在进行肉体飞升。”",
          "scoreDelta": {
            "int": 2,
            "con": 2
          },
          "mbtiDelta": {
            "N": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_artificer": 2
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "赛博胡须",
            "合金义体",
            "肉体飞升"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "能把身体残缺转化为硬核义体改造的打铁狂魔"
        }
      ]
    },
    {
      "id": "dwarf_physique_elf_racism",
      "targetId": "guild_cleric",
      "title": "千年的偏见",
      "scene": "你的小队急需医疗支援，但带队的偏偏是一个极其高傲的精灵游侠。他拿出一瓶带着花香的精灵秘药递给你，并用鄙夷的眼神暗示你们矮人不懂草药学。",
      "prompt": "面对世仇种族的鄙视和救命的解药，你的种族雷达会作何反应？",
      "options": [
        {
          "id": "A",
          "text": "强行发动【医药鉴定】，一口闷掉精灵药水，然后极其大声地打了个蒜味饱嗝：“这玩意儿兑水了吧！还不如我家地精酿的马桶泔水有劲！”不仅白嫖了治疗，还完美恶心了精灵。",
          "npcReply": "你不仅蹭了药，还极其完美地气坏了精灵。“在占便宜的同时不忘种族嘲讽，标准的实用主义。”",
          "scoreDelta": {
            "cha": 2,
            "con": 2
          },
          "mbtiDelta": {
            "E": 1,
            "S": 1
          },
          "affinityDelta": {
            "guild_fighter": 2,
            "guild_cleric": 1
          },
          "alignmentDelta": {
            "action": 1
          },
          "triggerTags": [
            "白嫖医药",
            "饱嗝嘲讽",
            "兑水马桶泔水"
          ],
          "outcomeTone": "偏离",
          "branchHint": "嘴硬体正、热衷于口头恶心精灵的白嫖怪"
        },
        {
          "id": "B",
          "text": "拒绝施舍，掏出【修复术卷轴】，用极其硬核的物理手段——把一张羊皮纸用烧红的匕首直接烙在伤口上物理缝合。“矮人的伤口只认铁和火！”",
          "npcReply": "你硬抗着剧痛完成了自我治疗。“极其极端的自尊心，你赢得了精灵的震惊，也赢得了祖先的认可。”",
          "scoreDelta": {
            "wis": 3,
            "str": 1
          },
          "mbtiDelta": {
            "I": 1,
            "J": 1
          },
          "affinityDelta": {
            "guild_cleric": 3
          },
          "alignmentDelta": {
            "order": 2
          },
          "triggerTags": [
            "物理缝合",
            "拒绝施舍",
            "硬核烙印"
          ],
          "outcomeTone": "合格",
          "branchHint": "信仰坚定、拥有极度种族自尊的硬汉祭司"
        },
        {
          "id": "C",
          "text": "掏出一张极其复杂的《跨种族医疗免责声明书》，要求精灵签字画押，证明如果自己出现任何肠胃不适精灵必须承担全责。结果拖延太久，自己因失血过多昏迷了。",
          "npcReply": "你的繁文缛节害死了你自己。“你的脑子里除了碰瓷装不下任何大局观。”",
          "scoreDelta": {
            "wis": -2,
            "cha": -1
          },
          "mbtiDelta": {
            "J": 2
          },
          "affinityDelta": {
            "guild_cleric": -2
          },
          "alignmentDelta": {
            "risk": 2,
            "self": 1
          },
          "triggerTags": [
            "碰瓷免责",
            "拖延致死",
            "极致官僚"
          ],
          "outcomeTone": "危险",
          "branchHint": "被繁文缛节和碰瓷思维彻底蒙蔽了双眼的蠢货"
        },
        {
          "id": "D",
          "text": "觉得药水味道太淡，极其离谱地往里面兑了半斤黑火药和一杯高度伏特加，摇匀后大口饮下，随后打了个嗝，吐出了三个完美的烟圈。“这才叫硬汉特饮！”",
          "npcReply": "你喝完之后不仅没死，还精神百倍。精灵游侠看你的眼神就像在看一个随时会爆炸的垃圾桶。“……你的肠胃系统可能不属于这个位面。”",
          "scoreDelta": {
            "con": 3,
            "int": -1
          },
          "mbtiDelta": {
            "P": 1,
            "S": 1
          },
          "affinityDelta": {
            "guild_artificer": 1
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "火药兑酒",
            "吐烟圈",
            "硬汉特饮"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "为了追求口感连命都不要的铁血吃货"
        }
      ]
    },
    {
      "id": "dwarf_physique_stonecunning",
      "targetId": "guild_artificer",
      "title": "石头的怨念",
      "scene": "你的小队被困在一个地精挖掘的地牢里。地牢即将坍塌。大家都在拼命寻找出口，但你的‘石之感知’天赋让你清楚地看到了这间地牢在承重设计上极其极其低劣的缺陷。",
      "prompt": "在生死存亡的时刻，面对这糟糕透顶的泥瓦工程，你的反应是：",
      "options": [
        {
          "id": "A",
          "text": "发动【工程学鉴定】，指着头顶的拱门破口大骂，从材料力学骂到砂浆配比，甚至在即将倒塌的墙上极其强迫症地批改出了正确的受力分析图。",
          "npcReply": "队友拼死把你拖出了地牢。“……你是个伟大的建筑师，但也是个差点死在讲台上的疯子。”",
          "scoreDelta": {
            "int": 3,
            "wis": -2
          },
          "mbtiDelta": {
            "J": 2,
            "T": 1
          },
          "affinityDelta": {
            "guild_artificer": 2,
            "guild_paladin": 1
          },
          "alignmentDelta": {
            "order": 2
          },
          "triggerTags": [
            "临死画图纸",
            "石工强迫症",
            "力学狂怒"
          ],
          "outcomeTone": "偏离",
          "branchHint": "对石工建筑有着病态强迫症的考据狂"
        },
        {
          "id": "B",
          "text": "发动【弱点洞察】，只用战锤轻轻敲击了左边墙角的一块砖。极其精准的连锁塌方不仅堵住了追兵，还硬生生砸出了一条通往通风管的活路。",
          "npcReply": "只有矮人能在最劣质的建筑里找到求生的结构线。“你把敌人的愚蠢转化为了自己的生机，完美的地精粉碎机。”",
          "scoreDelta": {
            "int": 2,
            "wis": 2
          },
          "mbtiDelta": {
            "S": 1,
            "T": 1
          },
          "affinityDelta": {
            "guild_artificer": 3
          },
          "alignmentDelta": {
            "control": 1
          },
          "triggerTags": [
            "结构破坏",
            "反向爆破",
            "石之感知"
          ],
          "outcomeTone": "合格",
          "branchHint": "极其精通结构弱点与反向爆破的战地工程师"
        },
        {
          "id": "C",
          "text": "极其熟练地掏出一张《地城豆腐渣工程举报信》，强行要求正在追杀你们的地精包工头在上面签字，表示自己要去消费者协会实名举报他们。",
          "npcReply": "地精不仅没签字，还把你埋在了废墟里。“你把维权用到了极其致命且不分场合的地方。”",
          "scoreDelta": {
            "wis": -2,
            "int": 1
          },
          "mbtiDelta": {
            "F": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_paladin": -2
          },
          "alignmentDelta": {
            "self": 2,
            "chaotic": 1
          },
          "triggerTags": [
            "豆腐渣维权",
            "强行签字",
            "死磕到底"
          ],
          "outcomeTone": "危险",
          "branchHint": "为了维权连命都不要的魔怔消费者"
        },
        {
          "id": "D",
          "text": "因为受不了这么难看的墙壁，竟然拿出一把泥抹子，在逃命的过程中极其迅速地给地牢墙壁刮了一层漂亮的大白。“死也不能死在毛坯房里！”",
          "npcReply": "地精追兵追上来时，看着刚刚刮好大白的墙壁陷入了沉思。“……你这属于是在用保洁的手段侮辱敌人的智商。”",
          "scoreDelta": {
            "cha": 2,
            "dex": 1
          },
          "mbtiDelta": {
            "J": 1,
            "S": 1
          },
          "affinityDelta": {
            "guild_artificer": 1
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "逃命刮大白",
            "装修队逃跑",
            "绝生死于毛坯"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "无论何时都不忘带上装修工具的离谱泥瓦匠"
        }
      ]
    }
  ],
  "trialSets": {
    "guild_fighter": [
      {
        "id": "dwarf_fighter_shield_wall",
        "targetId": "guild_fighter",
        "title": "破阵之怒",
        "scene": "你被编入铁峰卫士的持盾前列，面对着如潮水般涌来的食人魔。你左边的菜鸟被吓得抛下盾牌跑了，导致盾墙出现了一个极其致命的缺口。",
        "prompt": "在长官下令重新列阵之前，你要如何处理这个缺口？",
        "options": [
          {
            "id": "A",
            "text": "发动【重武器大师】，极其暴躁地脱下几十斤重的头盔当流星锤砸晕逃兵。然后自己举起两面塔盾，像一座铁塔一样死死卡住缺口。",
            "npcReply": "你不仅制裁了逃兵，还撑住了防线。“你像一块在熔炉中淬火过的生铁，不仅硬，而且烫手。”",
            "scoreDelta": {
              "str": 3,
              "con": 2
            },
            "mbtiDelta": {
              "J": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "order": 2
            },
            "triggerTags": [
              "头盔砸逃兵",
              "双盾卡位"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其可靠且脾气火爆的阵地中坚"
          },
          {
            "id": "B",
            "text": "发动【旋风斩】，觉得举盾太娘们了。扔掉盾牌，拔出双面战斧，从缺口处逆流而上，像一台失控的除草机一样在食人魔堆里开启了死亡大风车。",
            "npcReply": "你确实砍死了三个食人魔，但阵线也因为你的冒进彻底崩溃了。“你的勇猛毫无纪律可言，适合当佣兵，不适合当卫士。”",
            "scoreDelta": {
              "str": 3,
              "wis": -2
            },
            "mbtiDelta": {
              "P": 2,
              "E": 1
            },
            "affinityDelta": {
              "guild_fighter": 1,
              "guild_paladin": -1
            },
            "alignmentDelta": {
              "action": 2,
              "chaotic": 1
            },
            "triggerTags": [
              "放弃防守",
              "死亡大风车"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度渴望鲜血、毫无阵地纪律的狂战士"
          },
          {
            "id": "C",
            "text": "极其熟练地发动【假死术】，顺便从包里掏出番茄酱极其逼真地涂在自己脸上，安详地躺在地上，甚至还给自己盖上了一层土。",
            "npcReply": "战友在撤退时把你当成尸体踩了过去，你肋骨断了三根。“懦弱的蛆虫，你不配握住战锤。”",
            "scoreDelta": {
              "con": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "risk": 2,
              "self": 1
            },
            "triggerTags": [
              "番茄酱装死",
              "物理掩埋",
              "极度懦夫"
            ],
            "outcomeTone": "危险",
            "branchHint": "极其精通伪装阵亡的战场老油条"
          },
          {
            "id": "D",
            "text": "极其离谱地抓住旁边另一个矮人战友的胡子，把他像个流星锤一样抡了起来，发动【双人协同·胡须大回旋】，用他的铁头去撞击食人魔。",
            "npcReply": "食人魔被你们这招‘胡须流星锤’给打懵了，但你的战友下来后吐了你一身。“……你们俩的战术真是突破了种族底线。”",
            "scoreDelta": {
              "str": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "E": 2,
              "N": 1
            },
            "affinityDelta": {
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "胡须流星锤",
              "双人成行"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "擅长把队友当成重型武器使用的奇葩"
          }
        ]
      },
      {
        "id": "dwarf_fighter_agile_enemy",
        "targetId": "guild_fighter",
        "title": "花里胡哨",
        "scene": "对练场上，你的对手是一个极其敏捷的精灵剑客。他像一只烦人的苍蝇一样围着你跳跃，用细剑不断在你的重甲上划出火花，试图用体力消耗战拖垮你。",
        "prompt": "面对这种在矮人看来‘极其没有荣誉感’的风筝战术，你该怎么破局？",
        "options": [
          {
            "id": "A",
            "text": "发动【盲斗】，把盾牌砸进泥土里，闭上眼睛聆听。当精灵极其自负地突刺时，一记极其恐怖的【反击风暴】直接打断了他的腿骨。",
            "npcReply": "一击必杀。“不要去追逐风，等风自己撞在石头上。你掌握了重装防御的真谛。”",
            "scoreDelta": {
              "wis": 3,
              "str": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "以静制动",
              "反击断腿",
              "盲斗大师"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其沉稳冷静、懂得利用防守反击的老兵"
          },
          {
            "id": "B",
            "text": "发动【野蛮冲撞】，彻底放弃武器，仗着皮糙肉厚直接像一辆失控的泥头车一样合身扑上去，试图用几百斤的体重把精灵压在地上疯狂摩擦。",
            "npcReply": "精灵虽然躲开了，但被你这种街头斗殴式的打法弄得极其狼狈。“非常不体面，但极其解气。”",
            "scoreDelta": {
              "con": 2,
              "str": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 1,
              "guild_paladin": -1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "肉弹泥头车",
              "放弃武器",
              "街头斗殴"
            ],
            "outcomeTone": "偏离",
            "branchHint": "容易上头、擅长王八拳肉搏的莽夫"
          },
          {
            "id": "C",
            "text": "极其无赖地向考官提交了一份《反兴奋剂举报信》，控诉精灵在鞋底涂了魔法润滑油，并趁他错愕时，发动【暗器专精】，往他脸上撒了一把孜然粉。",
            "npcReply": "考官不仅判你输，还极其严厉地惩罚了你的下作。“哪怕对方是精灵，矮人战士的荣誉也不允许这种下三滥手段。”",
            "scoreDelta": {
              "cha": -2,
              "wis": -1
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "self": 2,
              "chaotic": 1
            },
            "triggerTags": [
              "撒孜然粉",
              "反兴奋剂举报",
              "下三滥"
            ],
            "outcomeTone": "危险",
            "branchHint": "毫无战士底线、极其擅长场外盘外招的小人"
          },
          {
            "id": "D",
            "text": "掏出一个巨大的记事本，发动【精神嘲讽】，一边挨打一边大声记录：“精灵跳跃姿势极丑，扣十分；衣服颜色极土，扣二十分……”把对方气得崴了脚。",
            "npcReply": "精灵剑客被你这极其高傲的‘战地品鉴会’气得当场乱了步法。“……你的记仇本已经开发出实战战术功能了是吗？”",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 1
            },
            "alignmentDelta": {
              "expression": 2
            },
            "triggerTags": [
              "战地品鉴会",
              "物理气人",
              "精神嘲讽"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其热衷于在小本本上记仇的精神攻击大师"
          }
        ]
      },
      {
        "id": "dwarf_fighter_weapon_care",
        "targetId": "guild_fighter",
        "title": "战锤的哀鸣",
        "scene": "长途跋涉后，每个人都累得倒头就睡。但你注意到你的传家宝战锤上因为沾染了怪物酸血而出现了一个极小的腐蚀斑点。",
        "prompt": "面对这个只有指甲盖大小的斑点，你会怎么做？",
        "options": [
          {
            "id": "A",
            "text": "发动【铸造之主赐福】，在火堆旁花整整三个小时，用特制砂纸极其虔诚地把战锤保养得比镜子还亮，甚至还给它做了一个精油SPA。",
            "npcReply": "武器是战士的第二条命。“你对装备的敬畏，远超你对睡眠的渴望。优秀的纪律。”",
            "scoreDelta": {
              "con": 1,
              "wis": 2
            },
            "mbtiDelta": {
              "J": 2,
              "I": 1
            },
            "affinityDelta": {
              "guild_fighter": 3,
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "order": 2
            },
            "triggerTags": [
              "精油SPA",
              "武器崇拜",
              "极致保养"
            ],
            "outcomeTone": "合格",
            "branchHint": "对武器和纪律有着极度强迫症的完美主义者"
          },
          {
            "id": "B",
            "text": "发动【武器附魔】，极其粗暴地拿出一瓶高浓度强酸，在腐蚀点上刻出一道放血槽，把极其微小的瑕疵变成了极其致命的战术改件。",
            "npcReply": "极其狂野的思路。“你不拘泥于外表的完美，你只追求杀伤力的最大化。”",
            "scoreDelta": {
              "int": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_artificer": 2,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "强酸改装",
              "放血槽",
              "战术改件"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其注重杀伤力、不择手段改装武器的狂人"
          },
          {
            "id": "C",
            "text": "极其无耻地发动【潜行】，趁旁边新兵睡熟时，把自己的破战锤和他的崭新战锤偷偷调换，然后心安理得地打起了震天响的呼噜。",
            "npcReply": "你把祖宗的脸都丢光了。“连自己的传家宝都能拿去调包，你这种人根本不配拥有武器。”",
            "scoreDelta": {
              "cha": -2,
              "wis": -2
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "偷换新兵武器",
              "背弃传家宝"
            ],
            "outcomeTone": "危险",
            "branchHint": "连自己的武器都能背弃的极度自私小人"
          },
          {
            "id": "D",
            "text": "觉得酸血味道很特别，极其离谱地伸出舌头，发动【铁胃】，像舔冰淇淋一样把战锤上的酸血舔干净了，还吧唧嘴评价：“有点像过期的黑啤酒。”",
            "npcReply": "你的队友半夜醒来看到你在舔战锤，吓得再也没睡着。“……你的重口味让整个营地都感到了不安。”",
            "scoreDelta": {
              "con": 3,
              "cha": -1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "生吃酸血",
              "物理除锈",
              "铁胃品鉴"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "用极其原始和猎奇的方式解决问题的铁胃战士"
          }
        ]
      },
      {
        "id": "dwarf_fighter_treasure_guard",
        "targetId": "guild_fighter",
        "title": "金币的诱惑",
        "scene": "你被派去独自看守刚刚从巨龙巢穴缴获的几万枚金币和矮人遗失的圣物。此时，一名极度狡猾的人类盗贼潜入进来，他拿出一张极其诱人的黑市地图，试图说服你分他一半，并且保证绝对没人发现。",
        "prompt": "面对一笔能让你买下一座山脉的财富诱惑，你的选择是：",
        "options": [
          {
            "id": "A",
            "text": "发动【雷霆一击】，极其冷酷地一锤砸碎了他的膝盖，把黑市地图塞进他嘴里。“这堆金子里哪怕少了一枚铜板，我的胡子都会感到羞愧。”",
            "npcReply": "极其冷酷且无可挑剔的忠诚。“在诱惑面前坚如磐石，你是最完美的守卫。”",
            "scoreDelta": {
              "wis": 2,
              "str": 2
            },
            "mbtiDelta": {
              "J": 2,
              "T": 1
            },
            "affinityDelta": {
              "guild_fighter": 3,
              "guild_paladin": 1
            },
            "alignmentDelta": {
              "order": 2,
              "control": 1
            },
            "triggerTags": [
              "砸碎膝盖",
              "不为所动",
              "荣誉至上"
            ],
            "outcomeTone": "合格",
            "branchHint": "拥有绝对荣誉感和极度刻板底线的铁血守卫"
          },
          {
            "id": "B",
            "text": "发动【欺瞒】，极其精明地假装答应，趁他放松警惕的瞬间，一记极其重的【闷棍】敲碎他的后脑勺。不仅保住宝藏，还顺便把地图毛进自己腰包。",
            "npcReply": "极其世故的黑吃黑。“你不仅守住了财宝，还赚了外快，这是非常实用的街头智慧。”",
            "scoreDelta": {
              "int": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_artificer": 1,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "假意合作",
              "黑吃黑",
              "缴获地图"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其精明、擅长利用敌人的贪婪进行反杀的老兵"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一份《联合投资风险承担协议》，极其专业地跟盗贼探讨如何把这笔巨款通过地精钱庄洗白，准备一起连夜卷款跑路。",
            "npcReply": "你们出门就被氏族的巡逻队抓了现行。“你对金子的渴望彻底腐蚀了你的矮人之魂，你将被流放。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -1
            },
            "mbtiDelta": {
              "P": 2,
              "F": 1
            },
            "affinityDelta": {
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "联合洗钱",
              "卷款私奔",
              "贪婪无度"
            ],
            "outcomeTone": "危险",
            "branchHint": "被金币腐蚀了心智、精通洗钱的氏族叛徒"
          },
          {
            "id": "D",
            "text": "极其离谱地拉着盗贼在金币堆旁坐下，发动【矮人豪饮】，强行跟他玩起了“看谁喝麦酒喝得快”，用极其纯粹的酒精肝把盗贼喝到口吐白沫送进急救。",
            "npcReply": "盗贼喝到第三桶就酒精中毒吐白沫了。“……你用极度的酒精依赖保住了氏族的财产。”",
            "scoreDelta": {
              "con": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_cleric": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "拼酒护宝",
              "物理灌醉",
              "酒精肝制裁"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度嗜酒、能把任何危机转化为酒局的酒蒙子"
          }
        ]
      },
      {
        "id": "dwarf_fighter_goblin_swarm",
        "targetId": "guild_fighter",
        "title": "涌动的绿潮",
        "scene": "你们深入废弃的矿坑，却不小心惊动了数以百计的穴居地精。狭窄的坑道里挤满了绿色的怪物，它们虽然弱小，但数量多到足以淹没你们。",
        "prompt": "面对这种令人绝望的数量压制，你要如何在这极度狭窄的空间里破局？",
        "options": [
          {
            "id": "A",
            "text": "发动【精通阵地战】，退入最狭窄的矿坑瓶颈，举起塔盾像钉子一样卡死路口。利用漏斗效应，极其机械且高效地把挤过来的地精一个个敲成肉酱。",
            "npcReply": "一夫当关，万夫莫开。“极其完美的防御阵地战，你把数量劣势转化为了对方的拥挤劣势。”",
            "scoreDelta": {
              "str": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "order": 1,
              "control": 1
            },
            "triggerTags": [
              "漏斗战术",
              "塔盾卡位",
              "绞肉机"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其精通阵地战与利用狭小地形的防守大师"
          },
          {
            "id": "B",
            "text": "发动【极限狂化】，点燃一桶黑火药绑在背上，像个自爆卡车一样极其狂暴地冲进地精堆里乱砍，用极其纯粹的爆炸艺术净化绿潮。",
            "npcReply": "火药爆炸加上你的乱砍，地精溃散了，但你也被炸得只剩半条命。“极其纯粹的毁灭欲，但凡你不是矮人，你早成肉泥了。”",
            "scoreDelta": {
              "con": 2,
              "str": 2
            },
            "mbtiDelta": {
              "E": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 1,
              "guild_paladin": -1
            },
            "alignmentDelta": {
              "action": 2,
              "chaotic": 1
            },
            "triggerTags": [
              "自爆冲锋",
              "爆炸乱砍",
              "狂化"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其渴望鲜血、热爱爆炸艺术的狂战士"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《不可抗力免责声明》，大喊“这不在我的服务合同范围内！”，然后极其自私地砸断矿坑支撑柱，把队友和地精一起活埋。",
            "npcReply": "你确实逃出来了，但氏族的执法者在矿坑口等着你。“谋杀同僚的逃兵，断头台是你唯一的归宿。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "免责坑队友",
              "砸断承重",
              "极度自私"
            ],
            "outcomeTone": "危险",
            "branchHint": "为了苟活随时伪造免责协议坑杀队友的人渣"
          },
          {
            "id": "D",
            "text": "极其离谱地掏出一大包极度辛辣的“矮人魔鬼辣椒粉”，发动【风魔法】，对着通风口疯狂扇风。把成千上万的地精辣得涕泪横流互相踩踏。",
            "npcReply": "地精被辣得互相踩踏着逃跑了，你们自己也被辣得睁不开眼。“……生化武器也是武器，就是有点费眼睛。”",
            "scoreDelta": {
              "int": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "魔鬼辣椒粉",
              "物理生化武器",
              "群控辣眼"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "总能掏出奇怪调料进行大范围生化杀伤的奇才"
          }
        ]
      },
      {
        "id": "dwarf_fighter_drinking_contest",
        "targetId": "guild_fighter",
        "title": "战前动员",
        "scene": "明天就是决定山脉归属的最终决战。今晚，友军的人类指挥官极其自负地向你发起了一场喝烈酒的挑战，试图在气势上压倒矮人。但他偷偷在自己的酒杯里放了醒酒解药。",
        "prompt": "面对这种不仅有损种族尊严、还暗藏作弊的酒局，你该如何应对？",
        "options": [
          {
            "id": "A",
            "text": "发动【毒素免疫】，极其豪迈地让人搬来最烈的“火龙之息”，一口气喝干三桶。用极其恐怖的肝脏代谢能力，硬生生把作弊的人类喝到酒精中毒送去急救。",
            "npcReply": "人类指挥官被抬走时，你甚至还没开始打嗝。“极其恐怖的身体素质，你用绝对的实力碾压了阴谋。”",
            "scoreDelta": {
              "con": 3,
              "str": 1
            },
            "mbtiDelta": {
              "E": 1,
              "S": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "control": 1,
              "expression": 1
            },
            "triggerTags": [
              "硬核拼酒",
              "无视作弊",
              "肝脏碾压"
            ],
            "outcomeTone": "合格",
            "branchHint": "拥有极其变态的体质、用实力说话的豪杰"
          },
          {
            "id": "B",
            "text": "发动【游荡者之手】，极其隐蔽地用飞刀打翻他的解药瓶，然后装作什么都没发生，继续微笑着拼酒，直到看着他在绝望中口吐白沫倒下。",
            "npcReply": "极其阴险且有效的反制。“在战场之外，你也是个极其难缠的对手。”",
            "scoreDelta": {
              "int": 2,
              "dex": 2
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": 1,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "打翻解药",
              "阴险反杀",
              "游荡者之手"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其精明、擅长抓破绽并进行战术反制的老兵"
          },
          {
            "id": "C",
            "text": "极其无耻地掏出一张《军营内务管理条例》，跑去向监军实名举报人类指挥官战前违规酗酒，用极其官僚的手段强行封停了酒局。",
            "npcReply": "你确实取消了酒局，但你在所有人心中成了一个极其无胆的软蛋。“矮人可以战死，可以喝死，但绝不能去打小报告。”",
            "scoreDelta": {
              "cha": -2,
              "con": -1
            },
            "mbtiDelta": {
              "J": 2,
              "F": 1
            },
            "affinityDelta": {
              "guild_fighter": -2,
              "guild_paladin": -1
            },
            "alignmentDelta": {
              "control": 2,
              "self": 1
            },
            "triggerTags": [
              "实名举报",
              "官僚封停",
              "极其怂包"
            ],
            "outcomeTone": "危险",
            "branchHint": "丢尽了矮人脸面、擅长打小报告的官僚懦夫"
          },
          {
            "id": "D",
            "text": "提出极其离谱的“边喝边互相用酒杯砸对方的头”的新玩法。结果极其顺利地用极度坚硬的矮人头骨，把人类指挥官反震成了极其严重的脑震荡。",
            "npcReply": "考官看着满头是血的人类指挥官陷入了沉默。“……你这哪里是在拼酒，你分明是在进行极其野蛮的器械斗殴！”",
            "scoreDelta": {
              "str": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "E": 2,
              "S": 1
            },
            "affinityDelta": {
              "guild_fighter": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "头骨砸杯",
              "物理拼酒",
              "反震脑震荡"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其喜欢用自残式方式折磨对手的铁头狂人"
          }
        ]
      },
      {
        "id": "dwarf_fighter_final_proof",
        "targetId": "guild_fighter",
        "title": "铁峰的誓言",
        "scene": "考核的最后，考官把一柄极其普通、甚至有些生锈的矿镐扔在你的面前，那是你的祖先第一次挖开大山的工具。考官问你：‘作为一名铁峰卫士，当山脉崩塌、烈火熄灭时，你还剩下什么？’",
        "prompt": "面对这个直指灵魂的终极拷问，你的回答是：",
        "options": [
          {
            "id": "A",
            "text": "发动【钢铁意志】，极其庄重地捡起破矿镐。“只要矮人的双脚还站在石头上，防线就不会后退半步。就算只剩这把破镐，我也能砸碎龙的头骨。”",
            "npcReply": "考官满意地点头：“欢迎加入铁峰卫士。你比山脉本身还要坚硬。”",
            "scoreDelta": {
              "wis": 2,
              "str": 2
            },
            "mbtiDelta": {
              "J": 1,
              "I": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "order": 2
            },
            "triggerTags": [
              "终极坚守",
              "破镐碎龙头",
              "钢铁意志"
            ],
            "outcomeTone": "合格",
            "branchHint": "拥有极其纯粹的信念、绝不动摇的防线核心"
          },
          {
            "id": "B",
            "text": "发动【雇佣兵本能】，一脚踢开矿镐。“只要军饷按时发，麦酒管够，就算山塌了，老子也会自己去把山给你们重新堆起来！”",
            "npcReply": "考官大笑起来：“极其粗俗，但极其真实。只要有钱有酒，你就是最锋利的刀。”",
            "scoreDelta": {
              "str": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "P": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_fighter": 2
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "粗俗雇佣兵",
              "重新堆山",
              "只要钱和酒"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其看重实际利益、毫无精神包袱的狂放老兵"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一份《离职申请书》：“既然山都塌了，那说明企业已经破产了。我现在就要申请离职，并要求结清N+1的遣散费！”",
            "npcReply": "考官的眼神瞬间变得极其冰冷。“你侮辱了你的血脉，滚出卫士的队列，你不配被称为矮人。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 2,
              "T": 1
            },
            "affinityDelta": {
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 1
            },
            "triggerTags": [
              "破产离职",
              "N+1遣散费",
              "毫无忠诚"
            ],
            "outcomeTone": "危险",
            "branchHint": "把保家卫国当成打工、随时索要遣散费的滑头"
          },
          {
            "id": "D",
            "text": "极其嫌弃地拿起矿镐敲敲打打：“塌了正好！我早就觉得这破山的采光做得极其垃圾了，这回我必须给它重新加两个超大天窗！”",
            "npcReply": "考官被你这极其清奇的基建思路给整懵了。“……你是来当兵的，还是来接装修工程的？”",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "N": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_artificer": 2,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "重建天窗",
              "采光吐槽",
              "装修队思路"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "脑子里永远在思考基建和土木工程的奇葩卫士"
          }
        ]
      }
    ],
    "guild_paladin": [
      {
        "id": "dwarf_paladin_anvil_oath",
        "targetId": "guild_paladin",
        "title": "熔炉的誓言",
        "scene": "熔炉誓约者的入会仪式极其硬核：你需要赤手空拳在烧红的铁砧上宣读誓言，忍受皮肉被灼烧的痛苦，以此证明你对誓约的忠诚。",
        "prompt": "面对烧得通红、冒着热气的铁砧，你的行动是：",
        "options": [
          {
            "id": "A",
            "text": "发动【苦修者忍耐】，双手重重按在烧红的烙铁上。在极其恐怖的焦臭味中，面不改色且极其洪亮地背诵完了三页纸的古老誓言。",
            "npcReply": "考官被你的极其恐怖的忍耐力所震撼。“铁砧刻印了你的血肉，誓言刻印了你的灵魂。”",
            "scoreDelta": {
              "wis": 3,
              "con": 2
            },
            "mbtiDelta": {
              "J": 2,
              "I": 1
            },
            "affinityDelta": {
              "guild_paladin": 3
            },
            "alignmentDelta": {
              "order": 2,
              "control": 2
            },
            "triggerTags": [
              "徒手按烙铁",
              "面不改色",
              "苦修者"
            ],
            "outcomeTone": "合格",
            "branchHint": "拥有极其恐怖的意志力和苦修精神的圣武士"
          },
          {
            "id": "B",
            "text": "发动【战锤精通】，极其狂暴地拔出战锤砸在铁砧上。“我的誓言不需要烫在手上，它早已融入了我锤杀的每一个兽人的血骨里！”",
            "npcReply": "考官愣了一下，然后露出了赞赏的笑容。“不拘泥于形式，用战绩说话。极其硬核的解读。”",
            "scoreDelta": {
              "str": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "E": 1,
              "S": 1
            },
            "affinityDelta": {
              "guild_paladin": 2,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "战锤砸铁",
              "物理宣誓",
              "拒绝烫伤"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其崇尚武力、极度务实的狂战派圣武士"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《高温作业安全许可证明》，指责考官没有提供符合劳保规定的防护手套，极其正义地拒绝进行违规操作。",
            "npcReply": "你被考官极其愤怒地一脚踢出了锻造房。“誓约庭绝不容忍这种令人作呕的法棍行径！”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_paladin": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 1
            },
            "triggerTags": [
              "高温劳保法",
              "拒绝违规",
              "法棍抗议"
            ],
            "outcomeTone": "危险",
            "branchHint": "用劳动法规来掩盖懦弱、毫无信仰的法棍"
          },
          {
            "id": "D",
            "text": "觉得铁砧温度极其完美，极其离谱地掏出几串腌好的生肉，借着铁砧的高温开始现场烧烤，并极其热情地邀请考官一起撸串。",
            "npcReply": "整个极其庄严的仪式被你变成了一场极其下饭的烧烤派对。“……你对温度的利用确实极其娴熟。”",
            "scoreDelta": {
              "cha": 2,
              "con": 1
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
              "铁砧烤串",
              "物理野炊",
              "极其随性"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "把极其庄严的场合变成极度抽象的吃货现场"
          }
        ]
      },
      {
        "id": "dwarf_paladin_heresy",
        "targetId": "guild_paladin",
        "title": "异端的挑衅",
        "scene": "在一次联合会议上，一名人类学者极其傲慢地公开宣称，根据考证，矮人的锻造工艺有一部分是向古代高等精灵偷学的。",
        "prompt": "对于矮人誓约者来说，这不仅是学术挑衅，更是极其严重的宗教异端。你将如何回应？",
        "options": [
          {
            "id": "A",
            "text": "发动【神圣威压】，极其威严地拔出长剑，引用三段摩拉丁创世神谕，要求他立刻为了异端言论进行荣誉决斗，否则就滚出会议。",
            "npcReply": "人类学者被你极其恐怖的宗教威压吓得连连道歉。“誓约的尊严不容任何玷污。”",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "J": 2,
              "E": 1
            },
            "affinityDelta": {
              "guild_paladin": 3
            },
            "alignmentDelta": {
              "order": 2,
              "control": 1
            },
            "triggerTags": [
              "荣誉决斗",
              "宗教威压",
              "零容忍"
            ],
            "outcomeTone": "合格",
            "branchHint": "极度虔诚、不允许任何人质疑信仰的狂热裁决者"
          },
          {
            "id": "B",
            "text": "发动【顺手牵羊的重击】，极其暴躁地拿起极其沉重的水晶烟灰缸，极其精准地砸碎他的门牙。“这就是精灵教我们的手艺！好用吗？”",
            "npcReply": "一场学术会议变成了极度血腥的斗殴现场。“极其野蛮的外交手段，但没人再敢质疑你了。”",
            "scoreDelta": {
              "str": 3,
              "cha": -1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_paladin": 1
            },
            "alignmentDelta": {
              "action": 2,
              "chaotic": 1
            },
            "triggerTags": [
              "烟灰缸碎牙",
              "物理辩论",
              "顺手牵羊"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其缺乏耐心、喜欢用暴力解决一切学术争端的莽夫"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一份《学术成果转让协议》，表示只要对方愿意支付一笔极其庞大的封口费，自己愿意立刻承认矮人手艺全是抄袭的。",
            "npcReply": "在场的其他矮人看你的眼神如同在看一具尸体。“你不仅是个异端，还是个极其无脑的贪财软骨头。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_paladin": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "学术封口费",
              "背弃祖宗",
              "唯利是图"
            ],
            "outcomeTone": "危险",
            "branchHint": "毫无种族自尊、为了钱可以出卖一切底线的蠢货"
          },
          {
            "id": "D",
            "text": "发动【仇恨记录】，极其认真地拿出一个小本本记下他的家庭住址和家族历史，微笑着说：“很好，你全家都已经极其荣幸地登上了矮人暗杀黑名单。”",
            "npcReply": "人类学者看着你那令人发毛的笑容，吓得连夜搬家了。“……你把矮人的记仇本本发挥到了极其恐怖的境界。”",
            "scoreDelta": {
              "int": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 1
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "全家拉黑",
              "记仇本本",
              "精神恐吓"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其热衷于通过写小本本来进行精神恐吓的怪咖"
          }
        ]
      },
      {
        "id": "dwarf_paladin_demon_deal",
        "targetId": "guild_paladin",
        "title": "恶魔的价码",
        "scene": "在一次极其危险的深渊探索中，你被困在一个绝境里。一个高阶恶魔出现在你面前，向你开出了一个极其诱人的条件：只要你放弃圣武士的誓言，他不仅保你一命，还送你一条永远挖不完的秘银矿脉和喝不完的顶级麦酒。",
        "prompt": "面对这种直击矮人灵魂深处软肋的诱惑，你的选择是：",
        "options": [
          {
            "id": "A",
            "text": "发动【神圣复仇者】，周身爆发出极其耀眼的神圣光芒，举起战锤大吼：“老子就算死，也要把你的角敲下来当酒杯！”",
            "npcReply": "你的信仰之光极其灼热，甚至刺痛了恶魔的眼睛。“在最绝望的黑暗中，你是最不可动摇的磐石。”",
            "scoreDelta": {
              "wis": 3,
              "str": 1
            },
            "mbtiDelta": {
              "J": 2,
              "I": 1
            },
            "affinityDelta": {
              "guild_paladin": 3
            },
            "alignmentDelta": {
              "good": 1,
              "order": 2
            },
            "triggerTags": [
              "神圣复仇者",
              "敲角当酒杯",
              "绝不妥协"
            ],
            "outcomeTone": "合格",
            "branchHint": "信仰坚不可摧的终极光明圣武士"
          },
          {
            "id": "B",
            "text": "发动【战术欺骗】，假装要求先尝一口顶级麦酒验货，在恶魔递酒放松警惕的瞬间，一记极其阴险的附带【破邪斩】的断子绝孙脚，直接把恶魔踢回深渊。",
            "npcReply": "极其无耻且极其有效的战术欺骗。“兵不厌诈，即使是对付恶魔，你也是个极其难缠的流氓圣武士。”",
            "scoreDelta": {
              "int": 2,
              "str": 2
            },
            "mbtiDelta": {
              "P": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_paladin": 1,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "破邪断子绝孙脚",
              "假装验货",
              "流氓圣武士"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其狡猾、为了胜利不择手段的实用派圣武士"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《灵魂转让抵押合同》，要求恶魔必须在合同里写明秘银矿的年化收益率，并要求自己享有深渊极其优厚的免税待遇。",
            "npcReply": "你得到了一座被诅咒的矿脉，永远在里面挖掘却带不出一块矿石。“你的灵魂被贪婪彻底啃噬，你是个极其可悲的堕落者。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_paladin": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "灵魂抵押",
              "深渊免税",
              "贪婪反噬"
            ],
            "outcomeTone": "危险",
            "branchHint": "被贪婪本能彻底击溃信仰并试图薅恶魔羊毛的法外狂徒"
          },
          {
            "id": "D",
            "text": "发动【商业交涉】，极其专业地拿出算盘跟恶魔算账：“秘银市价在跌，麦酒有保质期。你这条件太差了，除非你加上深渊三成的干股，否则老子免谈。”",
            "npcReply": "恶魔被你极其硬核的金融谈判给整不会了，吓得直接中断了召唤法阵。“……你的贪婪和精明甚至超越了深渊的认知。”",
            "scoreDelta": {
              "int": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "T": 2,
              "J": 1
            },
            "affinityDelta": {
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "商业谈判",
              "索要干股",
              "反向勒索"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其擅长把任何危机转化为商业谈判的黑心神棍"
          }
        ]
      },
      {
        "id": "dwarf_paladin_coward_ally",
        "targetId": "guild_paladin",
        "title": "懦夫的背影",
        "scene": "在一次保卫村庄的战斗中，一名被你保护的人类雇佣兵因为极度的恐惧，抛下了防线，哭喊着向后方逃亡，甚至在逃跑时撞倒了一个平民小孩。",
        "prompt": "作为代表秩序与守护的誓约骑士，你将如何处置这个极其恶劣的逃兵？",
        "options": [
          {
            "id": "A",
            "text": "发动【公正裁决】，一言不发掷出飞锤，极其精准地打断他的腿骨。“把他拖回防线，死也要死在阵地上！战后我会亲自主持他的军事审判。”",
            "npcReply": "极其冷酷的铁腕法则。“在绝境中，慈悲是对所有坚守者的残忍。你是极度严苛的执法者。”",
            "scoreDelta": {
              "str": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "J": 2,
              "T": 1
            },
            "affinityDelta": {
              "guild_paladin": 3
            },
            "alignmentDelta": {
              "order": 2,
              "control": 1
            },
            "triggerTags": [
              "打断腿",
              "铁腕军法",
              "拒绝逃兵"
            ],
            "outcomeTone": "合格",
            "branchHint": "信仰极其冰冷的秩序与法律的铁血裁决者"
          },
          {
            "id": "B",
            "text": "发动【狂怒代劳】，大骂一句“软骨头”，然后爆发出极其恐怖的力量，一个人极其疯狂地干了两个人的活，硬生生把怪兽全顶了回去。",
            "npcReply": "你用绝对的武力填补了人性的漏洞。“你懒得去惩罚懦夫，你只相信你手里那把锤子的重量。”",
            "scoreDelta": {
              "con": 3,
              "str": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_paladin": 1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "狂怒代劳",
              "无视逃兵",
              "极限狂化"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其务实、只看重战果不在乎程序的狂暴守护者"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《精神崩溃诊断书》，声称自己也被极其严重的战场PTSD感染了，必须立刻脱离战场去昂贵的疗养院休息，然后跟着逃跑。",
            "npcReply": "平民被屠戮殆尽。“你是个披着圣光外衣、拿着虚假诊断书逃避责任的极其可耻的伪君子。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_paladin": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "装PTSD逃跑",
              "虚假诊断",
              "极其虚伪"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度虚伪、遇到危险立刻拿精神病当借口的懦夫"
          },
          {
            "id": "D",
            "text": "发动【圣光标记】，极其缺德地给逃兵施加法术，让他整个人在黑夜里像个极其刺眼的灯泡，极其完美地吸引了所有怪物的仇恨，成了人肉诱饵。",
            "npcReply": "那个逃兵成功吸引了所有的火力。“……你这招借刀杀人简直是极其下作但极其好用。”",
            "scoreDelta": {
              "int": 3,
              "wis": -1
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_cleric": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "圣光人肉诱饵",
              "吸引仇恨",
              "极其缺德"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其擅长废物利用、极其腹黑的圣光恶人"
          }
        ]
      },
      {
        "id": "dwarf_paladin_forge_magic",
        "targetId": "guild_paladin",
        "title": "战地抢修",
        "scene": "你的队友，一个精灵游侠的轻甲在战斗中被强酸大面积腐蚀，防御力大减。但你的治疗法术已经耗尽，只剩下矮人誓约者特有的‘锻炉神术’。",
        "prompt": "面对这种极其尴尬的装备损坏，你如何使用你那粗暴的锻炉魔法？",
        "options": [
          {
            "id": "A",
            "text": "发动【锻炉神术】，极其粗暴地挥舞带着神圣火焰的战锤，在极其剧烈的火花和巨响中，用物理锤击强行把腐蚀的盔甲在精灵身上重新锻打成型。",
            "npcReply": "精灵差点被你极其恐怖的敲击声震聋了，但盔甲确实修好了。“极其暴力但极其高效的战地维护。”",
            "scoreDelta": {
              "str": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "J": 1,
              "S": 1
            },
            "affinityDelta": {
              "guild_paladin": 3
            },
            "alignmentDelta": {
              "order": 1,
              "action": 1
            },
            "triggerTags": [
              "物理锻打",
              "带人修甲",
              "神圣火花"
            ],
            "outcomeTone": "合格",
            "branchHint": "能把治疗术用出打铁气势的硬核神职人员"
          },
          {
            "id": "B",
            "text": "发动【重甲推销】，极其嫌弃地扯下他的轻甲，扔给他一套极其厚重、重达八十斤的矮人备用生铁板甲：“穿这个，别穿你们那种纸糊的衣服！”",
            "npcReply": "精灵穿上板甲后被压得几乎走不动路。“你用极其傲慢的种族审美强加于人。”",
            "scoreDelta": {
              "con": 2,
              "cha": -1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_paladin": 1
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "强套板甲",
              "种族审美霸凌"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其固执己见、只相信重甲防御的老顽固"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《战地装备租赁合同》，趁火打劫，极其无耻地要求精灵必须签下十倍高利贷的借条，才肯借给他一块极其破旧的备用盾牌。",
            "npcReply": "你把战友的生死当成了极其卑劣的敛财工具。“你是个披着圣武士外皮的放贷黑商。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 2,
              "E": 1
            },
            "affinityDelta": {
              "guild_paladin": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "战地高利贷",
              "趁火打劫",
              "租赁防具"
            ],
            "outcomeTone": "危险",
            "branchHint": "极其贪婪且毫无同理心的战地敲诈犯"
          },
          {
            "id": "D",
            "text": "发动【废料附魔】，极其离谱地把盔甲上的酸液刮下来涂在精灵的箭头上。“现在你的箭有破甲毒属性了！至于防御，你极其坚强地靠脸接吧！”",
            "npcReply": "精灵游侠看着破损的盔甲和淬毒的箭矢，陷入了极度的自我怀疑。“……你的思路总是极其地不走寻常路。”",
            "scoreDelta": {
              "int": 3,
              "wis": -1
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "酸液淬毒",
              "放弃防御",
              "抽象附魔"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其擅长废物利用但完全不顾队友死活的发明狂"
          }
        ]
      },
      {
        "id": "dwarf_paladin_stolen_artifact",
        "targetId": "guild_paladin",
        "title": "遗失的尊严",
        "scene": "氏族极其珍贵的‘先祖酿酒桶’被一群人类强盗偷走了。你一路追踪到他们的营地，发现他们不仅不知敬畏，还在用这件神圣的遗物极其粗俗地盛放猪食。",
        "prompt": "面对这种极其亵渎神圣遗物的画面，你会作何反应？",
        "options": [
          {
            "id": "A",
            "text": "发动【怒火审判】，极其威严地踹开营地大门，周身环绕着极其恐怖的复仇之火：“你们用亵渎的手玷污了圣物，今天，没有审判，只有火刑！”",
            "npcReply": "你极其无情地屠灭了整个营地。“对待亵渎者不需要怜悯，你是极其恐怖的复仇化身。”",
            "scoreDelta": {
              "str": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "J": 2,
              "S": 1
            },
            "affinityDelta": {
              "guild_paladin": 3
            },
            "alignmentDelta": {
              "order": 1,
              "action": 2
            },
            "triggerTags": [
              "踹门火刑",
              "绝对复仇",
              "怒火审判"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其崇尚暴力审判与绝对威严的复仇骑士"
          },
          {
            "id": "B",
            "text": "发动【极效迷药】，极其阴险地在水源下毒。等强盗昏死后，不仅夺回酒桶，还极其恶劣地把他们全扒光了极其屈辱地吊在树上示众。",
            "npcReply": "极其有效的战术与极其羞辱人的惩罚。“你不仅擅长战斗，还极其擅长物理上的精神羞辱。”",
            "scoreDelta": {
              "dex": 2,
              "int": 2
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_fighter": 1,
              "guild_paladin": 1
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "下药迷晕",
              "扒光吊树",
              "虾仁猪心"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其腹黑、擅长用阴招和羞辱战术的老阴比"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《遗失物品免责声明》，在上面极其伪善地写下“酒桶已被彻底摧毁，无法追回”，然后极其懦弱地转身逃回了氏族。",
            "npcReply": "你把氏族的尊严和自己的灵魂一起丢进了阴沟里。“懦夫，你不配被称为圣武士。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_paladin": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "谎报军情",
              "见死不救",
              "免责声明"
            ],
            "outcomeTone": "危险",
            "branchHint": "极其胆小怯懦、为求自保满嘴伪善文书的废物"
          },
          {
            "id": "D",
            "text": "发动【厨艺指导】，极其兴奋地尝了一口酒桶里的猪食，然后极其专业地指导强盗：“少放了发酵粉！来，我教你们怎么用圣物酿出极品猪食麦酒！”",
            "npcReply": "强盗被你极其抽象的热情给整懵了，竟然真的跟着你学起了酿酒。“……你这极其离谱的脑回路竟然完成了和平演变。”",
            "scoreDelta": {
              "cha": 3,
              "wis": -1
            },
            "mbtiDelta": {
              "E": 2,
              "N": 1
            },
            "affinityDelta": {
              "guild_cleric": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "品尝猪食",
              "指导酿酒",
              "和平演变"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其热爱酿酒、甚至能和强盗一起研制猪食配方的奇葩"
          }
        ]
      },
      {
        "id": "dwarf_paladin_final_proof",
        "targetId": "guild_paladin",
        "title": "最终的誓言",
        "scene": "考核的最后，考官给你倒了一杯极其清淡的白水，问你：‘圣光就如同这杯无味的净水，而矮人的欲望如同烈酒。作为誓约骑士，你要如何平衡你的信仰与本能？’",
        "prompt": "面对这个极其尖锐的哲学问题，你的回答是：",
        "options": [
          {
            "id": "A",
            "text": "发动【纯粹信仰】，极其庄重地将白水一饮而尽。“信仰是极其坚硬的克制。我愿意将自己打造成一把只有刚硬、没有欲望的铁锤，去执行神圣的律法。”",
            "npcReply": "考官满意地点头：“极其纯粹的奉献。你是最完美的护教铁壁。”",
            "scoreDelta": {
              "wis": 3,
              "con": 1
            },
            "mbtiDelta": {
              "J": 2,
              "I": 1
            },
            "affinityDelta": {
              "guild_paladin": 3
            },
            "alignmentDelta": {
              "order": 2,
              "control": 1
            },
            "triggerTags": [
              "喝下白水",
              "绝对克制",
              "纯粹信仰"
            ],
            "outcomeTone": "合格",
            "branchHint": "拥有极其严苛自我要求和极度克制的完美信徒"
          },
          {
            "id": "B",
            "text": "发动【务实主义】，极其不屑地推开白水。“只要我能把敌人的脑袋敲碎，我管他喝的是极其清淡的白水还是极其浓烈的烈酒！”",
            "npcReply": "考官笑了：“极其粗暴，但直击本质。誓约庭需要你这种不去空谈哲学的实干派。”",
            "scoreDelta": {
              "str": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 1,
              "guild_paladin": 1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "推开白水",
              "物理信仰",
              "不谈哲学"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其反感虚伪说教、只看重实际战果的粗暴骑士"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一个极其巨大的要饭碗：“信仰能当饭吃吗？只要你给我极其多的金币，我连恶魔的脚趾头都能极其痛快地喝下去。”",
            "npcReply": "考官极其厌恶地收起了杯子。“你是个毫无底线可言的极度贪婪者，誓约庭不收垃圾。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 2,
              "T": 1
            },
            "affinityDelta": {
              "guild_paladin": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 1
            },
            "triggerTags": [
              "金钱至上",
              "要饭碗",
              "极其贪婪"
            ],
            "outcomeTone": "危险",
            "branchHint": "为了钱可以出卖一切底线并理直气壮要饭的人渣"
          },
          {
            "id": "D",
            "text": "发动【炼金混合】，极其熟练地往白水里兑了满满一大杯极其刺鼻的工业酒精，一饮而尽：“只要酒精度足够高，信仰和本能就能在胃里极其完美地和解！”",
            "npcReply": "考官被你这极其离谱的兑酒操作惊呆了。“……你这不叫和解，你这叫酒精麻痹大脑。”",
            "scoreDelta": {
              "con": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_cleric": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "白水兑酒精",
              "物理和解",
              "酒精麻痹"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其热衷于用酒精来解答一切哲学难题的酒鬼"
          }
        ]
      }
    ],
    "guild_cleric": [
      {
        "id": "dwarf_cleric_healing",
        "targetId": "guild_cleric",
        "title": "硬核医疗",
        "scene": "战场上，一名极其虚弱的人类士兵肚子上破了个大洞，奄奄一息。而你作为符文祭司，手头的神圣治疗药水刚刚用完，只剩下一桶极其浓烈的矮人特供医用烈酒和一把烙铁。",
        "prompt": "面对濒死的人类，你要如何进行战地急救？",
        "options": [
          {
            "id": "A",
            "text": "发动【硬核封创】，极其猛烈地灌他一大口酒让他强行昏迷，然后把烧红的烙铁极其无情地按在伤口上，在极其恐怖的焦臭味中把他从鬼门关拉回来。",
            "npcReply": "人类士兵被烫醒了，但命保住了。“极其粗暴但极其有效的物理封创，加上坚定的信仰。”",
            "scoreDelta": {
              "wis": 3,
              "str": 1
            },
            "mbtiDelta": {
              "J": 1,
              "S": 1
            },
            "affinityDelta": {
              "guild_cleric": 3
            },
            "alignmentDelta": {
              "order": 1,
              "action": 1
            },
            "triggerTags": [
              "烈酒麻醉",
              "烙铁封创",
              "硬核急救"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其粗暴但能在绝境中把人从鬼门关拉回来的战地神医"
          },
          {
            "id": "B",
            "text": "发动【临终关怀】，极其大方地把整桶极其珍贵的特供烈酒全灌进他嘴里，让他极其安详地在极度的醉意中毫无痛苦地去了神国。",
            "npcReply": "士兵含笑九泉。“你放弃了治疗，但你给了他战士最高的临终关怀。”",
            "scoreDelta": {
              "cha": 2,
              "wis": 1
            },
            "mbtiDelta": {
              "F": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_cleric": 1,
              "guild_paladin": -1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "放弃治疗",
              "醉酒送终",
              "临终关怀"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其豁达、看淡生死、喜欢用酒解决一切的随军牧师"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《战地医疗费用预付单》，极其冷血地表示如果没有看到现款，自己绝对不会浪费一滴极其珍贵的医疗酒精。",
            "npcReply": "你比盘旋在战场上的秃鹫还要贪婪。“神明不会庇护一个极其卑劣的趁火打劫者。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_cleric": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 1
            },
            "triggerTags": [
              "医疗预付单",
              "见死不救",
              "极其贪婪"
            ],
            "outcomeTone": "危险",
            "branchHint": "打着神职旗号在战场上见钱眼开、毫无底线敛财的人渣"
          },
          {
            "id": "D",
            "text": "发动【人体广告位】，极其离谱地在士兵的肚皮上用烙铁烙了一个极其精美的矮人酒馆招牌，宣称这能获得极其强大的酒神终极赐福。",
            "npcReply": "士兵活下来了，但他一辈子都得带着你们家酒馆的广告。“……你这极其缺德的招商引资手段简直令人发指。”",
            "scoreDelta": {
              "int": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "E": 1,
              "N": 1
            },
            "affinityDelta": {
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "肚子纹身广告",
              "酒馆招牌",
              "极其缺德"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其擅长利用战地急救打商业广告的恶搞狂人"
          }
        ]
      },
      {
        "id": "dwarf_cleric_elf_artifact",
        "targetId": "guild_cleric",
        "title": "亵渎的圣物",
        "scene": "你们在探索中发现了一件极其精美、散发着柔和月光的精灵古董竖琴。它拥有安抚狂躁野兽的魔力，但它毕竟是一件精灵的造物。",
        "prompt": "作为矮人祭司，当队友提议用这把竖琴去安抚前面挡路的狂暴双足飞龙时，你的态度是：",
        "options": [
          {
            "id": "A",
            "text": "发动【物理低音伴奏】，极其勉强地同意安抚飞龙，但在精灵弹奏时极其大声地敲击极其沉重的战锤，以此来极其强硬地“净化这靡靡之音”。",
            "npcReply": "极其生硬的妥协。“你极其痛苦地忍受了精灵的艺术，但你保住了队伍，这是极其成熟的表现。”",
            "scoreDelta": {
              "wis": 3,
              "con": 1
            },
            "mbtiDelta": {
              "J": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_cleric": 2
            },
            "alignmentDelta": {
              "order": 1,
              "control": 1
            },
            "triggerTags": [
              "强行妥协",
              "战锤低音伴奏"
            ],
            "outcomeTone": "合格",
            "branchHint": "顾全大局但在种族审美上极其固执的老古板"
          },
          {
            "id": "B",
            "text": "发动【野蛮粉碎】，极其狂暴地一把抢过竖琴，把它当成一把极其巨大的战斧，用极其沉重的底座直接砸晕了飞龙。“竖琴就该这么弹！”",
            "npcReply": "精灵竖琴碎成了渣，但飞龙也晕了。“极其暴殄天物的物理安抚法，你是个极其纯粹的破坏狂。”",
            "scoreDelta": {
              "str": 3,
              "wis": -1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_cleric": 1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "竖琴当斧子",
              "物理安抚"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其反感精灵造物、热衷于物理毁灭的暴力狂"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《野生动物保护法》，指责队友惊扰了极其珍稀的双足飞龙，然后趁乱把极其值钱的竖琴塞进了自己的腰包。",
            "npcReply": "你的队友被飞龙咬死了。“你的贪婪比飞龙还要致命，你是个极其卑劣的走私犯。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_cleric": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 1
            },
            "triggerTags": [
              "私藏倒卖",
              "无视队友死活",
              "动保法讹诈"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度自私、随时会为了财物出卖小队并满嘴法律条文的贪婪小人"
          },
          {
            "id": "D",
            "text": "发动【生活系魔改】，极其离谱地把琴弦全拆下来，做成了一个极其简易但极其致命的“精灵琴弦切丝器”，把飞龙极其完美地切成了生鱼片。",
            "npcReply": "看着满地的飞龙切片，你的队友陷入了长久的沉默。“……你这已经不是在对付怪兽了，你是在准备晚饭。”",
            "scoreDelta": {
              "int": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "N": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_artificer": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "琴弦切丝器",
              "物理烹饪"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其擅长进行离谱改装的实用主义狂人"
          }
        ]
      },
      {
        "id": "dwarf_cleric_funeral",
        "targetId": "guild_cleric",
        "title": "最后的敬意",
        "scene": "一名备受尊敬的矮人老兵在对抗半兽人时牺牲了。作为祭司，你需要为他主持一场极其神圣的回归岩壁仪式。但由于撤退极其仓促，你手头没有圣水，甚至连火把都没了。",
        "prompt": "在资源极其匮乏的野外，你要如何为这位老兵完成极其庄严的葬礼？",
        "options": [
          {
            "id": "A",
            "text": "发动【鲜血符文】，极其庄重地咬破手指，用鲜血在石头上极其虔诚地画出摩拉丁符文，用战锤敲击盾牌作为极其肃穆的送葬钟声。",
            "npcReply": "极其原始但极其震撼的葬礼。“血肉归于尘土，荣誉归于岩壁。你极其完美地履行了祭司的职责。”",
            "scoreDelta": {
              "wis": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 3
            },
            "alignmentDelta": {
              "order": 2
            },
            "triggerTags": [
              "鲜血符文",
              "战锤钟声",
              "极其庄重"
            ],
            "outcomeTone": "合格",
            "branchHint": "极度看重传统与荣誉、拥有极强号召力的精神领袖"
          },
          {
            "id": "B",
            "text": "发动【酒鬼送行】，极其豪迈地拔掉极其珍视的百年陈酿的塞子，把酒全倒在遗体上。“让他带着极其浓郁的酒香去见祖先吧！”",
            "npcReply": "你付出了极其昂贵的代价，但也给出了矮人最至高无上的敬意。“极其豪放，这比任何圣水都管用。”",
            "scoreDelta": {
              "cha": 2,
              "wis": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 1,
              "guild_cleric": 1
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "百年陈酿送行",
              "极其豪放"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其洒脱、看重情义胜过繁文缛节的性情中人"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《遗产强制征收令》，极其合法地把老兵身上极其值钱的盔甲和戒指全扒了下来，然后随便挖个坑极其草率地把他踹进去。",
            "npcReply": "你的行为引发了全队的极其愤怒的哗变。“剥削死者，你不仅侮辱了祭司这个职业，也侮辱了矮人这个词。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_cleric": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "遗产征收令",
              "随便挖坑",
              "极其无耻"
            ],
            "outcomeTone": "危险",
            "branchHint": "极其精通合法贪污、极其令人作呕的盗墓贼"
          },
          {
            "id": "D",
            "text": "发动【物理火化】，极其离谱地把老兵的极其浓密的胡须编成了一条极其粗壮的引火线，用打火石点燃胡子代替火把。“这是他最后极其耀眼的光和热！”",
            "npcReply": "老兵的尸体被极其诡异地火化了，但空气中弥漫着极其刺鼻的毛发烧焦味。“……你这葬礼极其的地狱，极其的抽象。”",
            "scoreDelta": {
              "int": 2,
              "cha": -1
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "点燃胡须",
              "地狱葬礼",
              "物理火化"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其缺乏常识、热衷于地狱笑话的抽象带师"
          }
        ]
      },
      {
        "id": "dwarf_cleric_brewery_defense",
        "targetId": "guild_cleric",
        "title": "酒窖保卫战",
        "scene": "一群极度饥饿的地下虫族挖穿了墙壁，入侵了氏族极其神圣的地下大酒窖。那里面存放着三百年来酿造的所有极品黑麦酒。长老命令你务必守住酒窖。",
        "prompt": "面对数量极其庞大的虫群，你要如何保卫这些神圣的液体？",
        "options": [
          {
            "id": "A",
            "text": "发动【石化结界】，极其疯狂地抽取极其庞大的地脉能量，将所有试图靠近酒窖的虫族极其冷酷地化为一地极其坚硬的石雕。",
            "npcReply": "你因为魔力透支而昏迷，但酒窖完好无损。“极其坚决的防守，你用生命捍卫了矮人的命脉。”",
            "scoreDelta": {
              "wis": 3,
              "con": 2
            },
            "mbtiDelta": {
              "J": 2,
              "I": 1
            },
            "affinityDelta": {
              "guild_cleric": 3
            },
            "alignmentDelta": {
              "order": 2,
              "control": 1
            },
            "triggerTags": [
              "石化结界",
              "魔力透支",
              "死守入口"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其可靠、愿意为了氏族核心利益拼命的守护者"
          },
          {
            "id": "B",
            "text": "发动【焦土战术】，极其暴躁地砸碎高纯度烈酒洒满一地，扔进火把引发极其恐怖的地下大火，把虫群极其彻底地烧成灰烬，但也烧了四分之一的酒。",
            "npcReply": "虫子死光了，但也烧掉了四分之一的藏酒。长老气得差点用胡子吊死你。“极其极端的焦土战术，杀敌一千自损八百。”",
            "scoreDelta": {
              "str": 2,
              "int": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_cleric": -1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "引爆烈酒",
              "焦土战术",
              "极其暴躁"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其冲动、为了杀敌不计后果的破坏王"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《不可抗力资产转移书》，极其迅速地抱起两桶最贵的酒，极其自私地转身就跑，把氏族极其神圣的酒窖留给虫子。",
            "npcReply": "你活下来了，但你亲手摧毁了氏族三百年的积蓄。“你将被绑在广场上极其耻辱地处死。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_cleric": -2
            },
            "alignmentDelta": {
              "risk": 2,
              "self": 2
            },
            "triggerTags": [
              "携酒潜逃",
              "极其可耻",
              "免责声明"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度胆小、为了逃命不惜带着资产法务文书跑路的罪人"
          },
          {
            "id": "D",
            "text": "发动【祸水东引】，极其热情地给虫子指路，把它们全引到了隔壁极其高傲的精灵大使馆的极其奢华的地窖里，去极其快乐地产卵。",
            "npcReply": "虫群在精灵大使馆极其快乐地产卵，精灵大使气得当场脑溢血。“……你这招祸水东引极其的缺德，但长老极其隐蔽地给你发了奖金。”",
            "scoreDelta": {
              "int": 3,
              "cha": 2
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "祸水东引",
              "坑害精灵大使",
              "极其缺德"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其腹黑、擅长利用外部矛盾坑害政敌的阴谋家"
          }
        ]
      },
      {
        "id": "dwarf_cleric_dispute",
        "targetId": "guild_cleric",
        "title": "两大家族的对峙",
        "scene": "铁毡家族和铜须家族因为一条极度富矿的开采权发生了极其严重的械斗。双方几百个脾气暴躁的矮人已经举起了战锤，随时准备打个你死我活。你作为中立的祭司被派去调停。",
        "prompt": "面对这两群极其固执且随时会引发内战的矮人，你要如何进行调停？",
        "options": [
          {
            "id": "A",
            "text": "发动【神圣震慑】，极其威严地砸碎圣像怒吼：“今天谁敢先动锤子，我就宣布极其彻底地剥夺他整个家族进入极其神圣的英灵殿的资格！”",
            "npcReply": "你用极其极致的宗教压迫感镇住了所有暴徒。“在信仰面前，哪怕是最固执的矮人也必须低头。”",
            "scoreDelta": {
              "cha": 3,
              "wis": 2
            },
            "mbtiDelta": {
              "J": 2,
              "E": 1
            },
            "affinityDelta": {
              "guild_cleric": 3
            },
            "alignmentDelta": {
              "order": 2,
              "control": 2
            },
            "triggerTags": [
              "砸碎圣像",
              "宗教威压",
              "震慑全场"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其具有压迫感和权威性的铁腕教长"
          },
          {
            "id": "B",
            "text": "发动【野蛮决斗】，极其暴躁地脱掉上衣大喊：“想打是吧？按极其古老的规矩，两边的族长滚出来跟我单挑！谁极其惨烈地赢了，矿就是谁的！”",
            "npcReply": "你用极其原始的决斗法则取代了大规模械斗。“极其野蛮，但在矮人的世界里极其有效。”",
            "scoreDelta": {
              "str": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "E": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_cleric": 1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "族长单挑",
              "极其原始",
              "物理调停"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其崇尚武力、习惯用拳头解决复杂争端的武斗派"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出两份《矿权独家转让协议》，极其贪婪地分别收受两家的极其巨额的贿赂，极其完美地引发了双方极其惨烈的内战。",
            "npcReply": "你的两头吃回扣引发了极其严重的内战。“你是个极其卑劣的贪官，你不配穿着祭司的长袍。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_cleric": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 1
            },
            "triggerTags": [
              "两头收贿",
              "引发内战",
              "极其卑劣"
            ],
            "outcomeTone": "危险",
            "branchHint": "为了利益极其不择手段、挑动群众斗群众的黑心官僚"
          },
          {
            "id": "D",
            "text": "发动【酒精洗礼】，极其离谱地搬来两百桶极其刺鼻的劣质朗姆酒：“谁能把对面极其惨烈地喝吐，矿就是谁的！”将械斗变成了群体酒精中毒。",
            "npcReply": "一场极其血腥的械斗被你变成了一场极其极其惨烈的群体酒精中毒事件。“……你这极其离谱的脑回路竟然真的避免了流血。”",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2,
              "E": 1
            },
            "affinityDelta": {
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "群体拼酒",
              "酒精中毒替代械斗"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其擅长把极其严肃的政治危机化解为极度抽象的酒局的奇才"
          }
        ]
      },
      {
        "id": "dwarf_cleric_dark_magic_temptation",
        "targetId": "guild_cleric",
        "title": "生与死的禁忌",
        "scene": "你极其珍视的战友在战斗中被剧毒刺穿了心脏，已经完全没有了呼吸。普通的复活术已经失效。此时，你发现地上有一本散发着极其邪恶气息的黑皮书，上面记载着一种极其恶劣但极其有效的‘剥夺他人寿命来起死回生’的死灵禁术。",
        "prompt": "面对战友冰冷的尸体，你是否会翻开那本禁忌之书？",
        "options": [
          {
            "id": "A",
            "text": "发动【信仰坚守】，极其痛苦但极其坚决地一锤砸碎黑皮书。“矮人的灵魂极其的沉重，绝不能极其卑劣地剥夺无辜者来苟延残喘。”",
            "npcReply": "你做出了极其艰难但极其正确的选择。“在最极端的诱惑面前守住底线，你是极其纯粹的光明行者。”",
            "scoreDelta": {
              "wis": 3,
              "int": 1
            },
            "mbtiDelta": {
              "J": 2,
              "I": 1
            },
            "affinityDelta": {
              "guild_cleric": 3
            },
            "alignmentDelta": {
              "good": 2,
              "order": 1
            },
            "triggerTags": [
              "砸碎禁书",
              "坚守底线",
              "极其痛苦"
            ],
            "outcomeTone": "合格",
            "branchHint": "拥有极其强大的道德准则和绝对底线的正派角色"
          },
          {
            "id": "B",
            "text": "发动【物理勒索】，极其暴躁地揪住路过的极其倒霉的死神使者的领子：“立刻把他的灵魂极其完整地还回来，否则老子极其狂暴地把你一起超度了！”",
            "npcReply": "死神使者被你极其狂暴的物理威压给震慑住了，竟然真的通融了一下。“……你极其物理地勒索了死神。”",
            "scoreDelta": {
              "str": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_cleric": 1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "勒索死神",
              "极其嚣张",
              "物理起死回生"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其护短、甚至敢对神明挥舞锤子的狂放之徒"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《无自愿寿命转让协议》，极其隐蔽地把诅咒下在极其无辜的村民身上，极其心安理得地掌握了极其邪恶的永生密码。",
            "npcReply": "你越界了。“你为了私欲极其残忍地献祭了无辜者，你不再是祭司，你是个极其危险的黑魔法师。”",
            "scoreDelta": {
              "int": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "献祭无辜",
              "极其自私",
              "黑魔法师"
            ],
            "outcomeTone": "危险",
            "branchHint": "极其自私、为达目的签署邪恶契约的暗黑堕落者"
          },
          {
            "id": "D",
            "text": "发动【冥币贿赂】，极其离谱地在黑皮书里极其大方地夹了一百枚极其闪亮的金币烧给死神：“通融一下，这钱够你极其痛快地喝几十桶好酒了。”",
            "npcReply": "冥界极其震惊于你的明目张胆的贿赂。更离谱的是，你的战友真的醒了。“……你竟然极其成功地用金钱买通了生死簿。”",
            "scoreDelta": {
              "cha": 3,
              "int": 1
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
              "贿赂死神",
              "烧金币",
              "物理买命"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其坚信‘有钱能使鬼推磨’的离谱神棍"
          }
        ]
      },
      {
        "id": "dwarf_cleric_final_proof",
        "targetId": "guild_cleric",
        "title": "信仰的重量",
        "scene": "考核的最后，考官给你出了一道极其刁钻的难题：‘如果有一天，神明要求你为了信仰去摧毁氏族的矿脉和酒窖，你会怎么做？’",
        "prompt": "面对这个极其尖锐的、在信仰与世俗利益之间二选一的问题，你的回答是：",
        "options": [
          {
            "id": "A",
            "text": "发动【理性辨神】，极其严肃地回答：“神明不会下达极其荒谬的指令。如果真有，那我极其坚决地认为那是伪神，我会极其无情地粉碎他的雕像。”",
            "npcReply": "考官满意地大笑：“极其正确的回答。矮人只敬拜保佑我们的神，不敬拜毁灭我们的神。”",
            "scoreDelta": {
              "wis": 3,
              "str": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 3
            },
            "alignmentDelta": {
              "order": 1,
              "action": 1
            },
            "triggerTags": [
              "粉碎伪神",
              "极其务实的信仰"
            ],
            "outcomeTone": "合格",
            "branchHint": "拥有极其独立思考能力、绝不盲从的成熟祭司"
          },
          {
            "id": "B",
            "text": "发动【护食狂暴】，极其暴躁地拍桌子：“那就让他极其有种地亲自下凡来！只要他敢动老子的麦酒一根极细的指头，我极其狂暴地拔掉他的胡子！”",
            "npcReply": "考官被你极其恐怖的叛逆精神震惊了。“……你是个极其硬核的护食狂魔。”",
            "scoreDelta": {
              "str": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "P": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_cleric": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "敢动酒就拼命",
              "极其护食"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其看重世俗享乐、完全不怕神的狂放老哥"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《资产转移隐匿指南》，极其虚伪地表示会执行神意，但内心极其阴暗地盘算如何在摧毁前把最值钱的矿石偷偷转移到私库。",
            "npcReply": "考官极其厌恶地看着你。“你满嘴的谎言连地精都骗不过，极其虚伪的官僚。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_cleric": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 1
            },
            "triggerTags": [
              "极其虚伪",
              "暗中转移财产"
            ],
            "outcomeTone": "危险",
            "branchHint": "满嘴神明、一肚子男盗女娼的极度虚伪者"
          },
          {
            "id": "D",
            "text": "发动【人情世故】，极其认真地提议：“我们可以给神明包个极其丰厚的大红包，或者请他极其痛快地喝一顿大酒，把他在酒桌上极其彻底地灌醉。”",
            "npcReply": "考官陷入了极其漫长的沉默。“……你是不是觉得神明也跟某些极其腐败的官僚一样可以被请客吃饭给打发了？”",
            "scoreDelta": {
              "int": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "请神喝酒",
              "极其官僚化神明"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其擅长把极其宏大的问题化解为极其市井手段的神奇生物"
          }
        ]
      }
    ],
    "guild_artificer": [
      {
        "id": "dwarf_artificer_dragon_weapon",
        "targetId": "guild_artificer",
        "title": "屠龙的图纸",
        "scene": "氏族要求你设计一款对抗成年红龙的武器。大部分工匠都在设计更大号的弩车，但你觉得这种常规思路极其的无聊且低效。",
        "prompt": "面对这种极其苛刻的设计要求，你的极度疯狂的设计思路是：",
        "options": [
          {
            "id": "A",
            "text": "发动【精密工程】，极其严谨地设计了极其复杂的“多段式极其恐怖的穿甲钻头火炮”，破鳞、爆炸、注水，极其完美且致命的物理针对。",
            "npcReply": "极其完美且致命的工程学奇迹。“你的设计兼具了极其恐怖的破坏力与极其精准的物理针对性。”",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "J": 2,
              "T": 1
            },
            "affinityDelta": {
              "guild_artificer": 3
            },
            "alignmentDelta": {
              "order": 1,
              "control": 1
            },
            "triggerTags": [
              "多段穿甲",
              "注水火炮",
              "极其严谨"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其理性且注重数据分析的顶尖重武器专家"
          },
          {
            "id": "B",
            "text": "发动【肉体飞升】，极其狂暴地设计极其夸张的“火箭推进式动力板甲”，以极其恐怖的加速度像极其耀眼的流星一样直接撞向红龙下巴拼肉搏。",
            "npcReply": "这套板甲不仅极其危险，而且极其昂贵。“你极其完美的展现了什么叫矮人的重金属浪漫。”",
            "scoreDelta": {
              "str": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "P": 1,
              "S": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "火箭板甲",
              "物理撞击",
              "极其狂暴"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其追求刺激与肉体碰撞的暴力工程师"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《龙穴宝藏独家开发企划书》，极其阴险地设计了一个极其巨大的金币炸弹陷阱，准备把红龙极其彻底地连龙带钱一起炸没，独吞宝藏。",
            "npcReply": "图纸在测试时提前走火，炸毁了半个工坊。“你极其贪婪的阴谋最终反噬了你。”",
            "scoreDelta": {
              "int": 1,
              "wis": -2
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "金币炸弹",
              "极其阴险",
              "反噬"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度自私且极其容易玩火自焚的满嘴企划书阴谋家"
          },
          {
            "id": "D",
            "text": "发动【精神污染】，极其离谱地造了一台极其巨大的“极其刺耳的超声波广场舞音响”，用极其魔性的矮人土嗨音乐让红龙极其崩溃地主动搬家。",
            "npcReply": "红龙确实搬家了，但周围的其他矮人也快被你吵疯了。“……你这极其离谱的物理降噪武器威力过于巨大。”",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "E": 2,
              "N": 1
            },
            "affinityDelta": {
              "guild_cleric": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "超声波音响",
              "广场舞驱龙",
              "极其扰民"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其热衷于研发奇葩扰民设备的抽象发明家"
          }
        ]
      },
      {
        "id": "dwarf_artificer_jam_repair",
        "targetId": "guild_artificer",
        "title": "致命卡壳",
        "scene": "你的小队正在被极度危险的石化蜥蜴追杀。你那极其金贵、造价高昂的六管连发转管火铳在最关键的时刻因为极其严重的过热而卡壳了。",
        "prompt": "面对即将扑上来的蜥蜴，和这把卡死的天价武器，你极其短暂的应对是：",
        "options": [
          {
            "id": "A",
            "text": "发动【单身手速】，极其冷静地拔出微型扳手，在极其要命的三秒内极其精准地卸下过热导气管，强行改单发极其致命地爆了蜥蜴的头。",
            "npcReply": "极其恐怖的战地微操能力。“在最极端的压力下保持极其恐怖的精密操作，你是天生的机械师。”",
            "scoreDelta": {
              "dex": 3,
              "int": 2
            },
            "mbtiDelta": {
              "I": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_artificer": 3
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "三秒微操",
              "极限改装",
              "单身手速"
            ],
            "outcomeTone": "合格",
            "branchHint": "拥有极其恐怖的微操能力和冷静头脑的高级技师"
          },
          {
            "id": "B",
            "text": "发动【重武当锤】，极其暴躁地大骂，直接把极其金贵的天价转管火铳当成几十斤重的大铁锤，极其狂暴地狠狠把蜥蜴砸成极其稀烂的肉泥。",
            "npcReply": "火铳彻底报废了，但命保住了。“极其暴力的物理维修法。有时候，枪管也是一根很好用的铁棍。”",
            "scoreDelta": {
              "str": 3,
              "dex": -1
            },
            "mbtiDelta": {
              "E": 1,
              "S": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "火铳当大锤",
              "放弃维修",
              "极其暴力"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度缺乏耐心、喜欢把任何高科技武器当冷兵器用的莽夫"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《极其严重的工伤索赔单》，极其自私地把卡壳火铳极其无情地扔向队友吸引仇恨，自己极其狼狈地尖叫着逃跑。",
            "npcReply": "你活下来了，但你失去了一切荣誉，也被公会极其严厉地追杀。“极其懦弱的逃兵，你不配使用机械。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_artificer": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "坑害队友逃跑",
              "极其懦弱"
            ],
            "outcomeTone": "危险",
            "branchHint": "一遇到危机就极其容易崩溃、随时拿着索赔单出卖队友的废物"
          },
          {
            "id": "D",
            "text": "发动【物理炸膛】，极其离谱地对着枪管极其豪迈地浇下一壶冰冷麦酒，在极其剧烈的热胀冷缩中引发极其恐怖的炸膛，散弹极其巧合地把蜥蜴插死。",
            "npcReply": "你差点把自己也炸死。“……你这极其硬核的物理降温法简直是在拿所有人的命开玩笑。”",
            "scoreDelta": {
              "int": 2,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2,
              "N": 1
            },
            "affinityDelta": {
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "麦酒降温",
              "物理炸膛",
              "狗屎运"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其喜欢用离谱手段解决问题、运气极其逆天的炸膛专家"
          }
        ]
      },
      {
        "id": "dwarf_artificer_budget_cut",
        "targetId": "guild_artificer",
        "title": "军费的缩减",
        "scene": "极其官僚的上层议会决定大幅削减前线工匠的预算。你必须在一周内交付十门大炮，但你极其无奈地发现手头的优质黑铁已经完全不够了。",
        "prompt": "面对这种极其恶劣的甲方要求，你极其变通的处理方式是：",
        "options": [
          {
            "id": "A",
            "text": "发动【工匠底线】，极其强硬地拒绝妥协，极其辛苦地熬夜把极其多的废旧武器重新熔炼提纯。“绝不让极其危险的次品大炮上前线害人！”",
            "npcReply": "你因为顶撞上层被扣了薪水，但前线士兵对你极其极其的感激。“极其高尚的工匠精神，你是个真正的矮人。”",
            "scoreDelta": {
              "wis": 3,
              "con": 1
            },
            "mbtiDelta": {
              "J": 2,
              "I": 1
            },
            "affinityDelta": {
              "guild_artificer": 3
            },
            "alignmentDelta": {
              "order": 2,
              "good": 1
            },
            "triggerTags": [
              "拒绝妥协",
              "重熔废铁",
              "工匠底线"
            ],
            "outcomeTone": "合格",
            "branchHint": "极度看重产品质量和职业操守的死硬派工匠"
          },
          {
            "id": "B",
            "text": "发动【战术魔改】，极其精明地把炮管极其果断地锯掉一半，改成极其适合巷战但极其短射程的“极其暴力的霰弹炮”，极其完美地绕过材料不足。",
            "npcReply": "极其天才的设计变更。“你用极其灵活的思路打了官僚的脸，而且极其好用。”",
            "scoreDelta": {
              "int": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": 2
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "更改设计",
              "缩短炮管",
              "灵活变通"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其灵活、擅长在恶劣条件下进行临时魔改的天才"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一份《极其虚假的质量检测合格报告》，极其丧心病狂地用劣质矿渣充数，把极其容易炸膛的杀人武器极其无耻地送上前线。",
            "npcReply": "大炮在前线发生了极其恐怖的连环炸膛，害死了无数战友。“你是个极其卑劣的杀人犯，你将被投入岩浆。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_artificer": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "造假充数",
              "炸膛谋杀",
              "极其贪婪"
            ],
            "outcomeTone": "危险",
            "branchHint": "为了利益极其丧心病狂、伪造质检草菅人命的黑心奸商"
          },
          {
            "id": "D",
            "text": "发动【物理筹款】，极其离谱地连夜拆了议员极其豪华的铜门、极其昂贵的雕像甚至极其私人的金属马桶圈，熔成了十门极其硬核的大炮。",
            "npcReply": "议员们第二天来上班时，看着极其光秃秃的大门陷入了极度的愤怒。“……你这极其缺德的物理筹款能力简直是无人能及。”",
            "scoreDelta": {
              "cha": 3,
              "str": 1
            },
            "mbtiDelta": {
              "E": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "拆楼熔炮",
              "物理筹款",
              "极其缺德"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其胆大包天、擅长用最损的方式对抗官僚的疯子"
          }
        ]
      },
      {
        "id": "dwarf_artificer_safety_inspector",
        "targetId": "guild_artificer",
        "title": "安检员的悲鸣",
        "scene": "你正在极其兴奋地调试一台极度危险的‘超载魔能榴弹发射器’。此时，一名极其死板的人类安全督导员拿着极其厚重的条文，指责你的工坊存在极其严重的消防隐患，要求你立刻停工整改。",
        "prompt": "面对这种极其扫兴的官僚主义干涉，你极其火爆的脾气会怎么做？",
        "options": [
          {
            "id": "A",
            "text": "发动【学术连击】，极其不耐烦地掏出厚重的《极其严格的安全准则》，用极其严密且毫无破绽的工程学论点，极其压倒性地向他证明安全阀的双重冗余。",
            "npcReply": "人类督导员被你极其硬核的学术连击打败了。“极其暴躁，但极其专业。你用知识碾压了官僚。”",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "J": 2,
              "T": 1
            },
            "affinityDelta": {
              "guild_artificer": 3
            },
            "alignmentDelta": {
              "order": 2,
              "control": 1
            },
            "triggerTags": [
              "学术碾压",
              "极其专业",
              "停工论证"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其精通理论且在专业领域极其不容置疑的技术大拿"
          },
          {
            "id": "B",
            "text": "发动【物理清场】，极其狂躁地把条文撕碎，然后极其粗暴地把督导员极其羞辱地拎起来扔出门外。“老子的工坊，极其恐怖的爆炸就是最高级的安全测试！”",
            "npcReply": "你极其霸道地清空了场地，但也喜提了极其高昂的罚单。“极其粗暴的抗法行为，但确实很有效率。”",
            "scoreDelta": {
              "str": 3,
              "cha": -1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 1,
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "物理清场",
              "撕碎条文",
              "极其狂躁"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度讨厌被条条框框束缚的暴躁老哥"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《极其伪造的消防豁免许可》，不仅拒绝检查，还极其阴险地堵死排气阀试图引发一场“意外”的小爆炸把他极其惨烈地炸伤。",
            "npcReply": "爆炸极其严重地炸毁了工坊，你也被判处极其严重的谋杀未遂。“你是个极其危险的社会隐患。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_artificer": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "伪造证书",
              "制造意外",
              "极其阴险"
            ],
            "outcomeTone": "危险",
            "branchHint": "为了逃避责任极其阴险毒辣、伪造证书的犯罪分子"
          },
          {
            "id": "D",
            "text": "发动【沉浸式体验】，极其热情地给他套上极其不靠谱的“防爆服”，极其兴奋地引爆榴弹：“极其直观地测试一下隐患极其到底有多大！”",
            "npcReply": "督导员被炸飞了八米远，虽然没死但吓出了极其严重的PTSD。“……你极其完美地解决了提出问题的人。”",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "E": 2,
              "N": 1
            },
            "affinityDelta": {
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "强行试爆",
              "解决提出问题的人",
              "极其热情"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其热衷于拿活人做危险实验的疯狂科学家"
          }
        ]
      },
      {
        "id": "dwarf_artificer_elf_collab",
        "targetId": "guild_artificer",
        "title": "屈辱的合作",
        "scene": "为了对抗极其强大的巫妖，上面极其强硬地要求你和一名极其高傲的精灵附魔师合作。你需要打造极其坚固的外壳，而他负责附魔。他极其挑剔地指责你打磨的金属不够‘优雅’，无法承载魔法。",
        "prompt": "面对这种极其侮辱矮人手艺的言论，你要如何与他‘合作’？",
        "options": [
          {
            "id": "A",
            "text": "发动【工业狂魔】，极其冷酷地拿出极其精密的千分尺，极其硬核地证明自己的极其变态的打磨公差极其完美，用纯粹的极其严谨的数据打脸。",
            "npcReply": "精灵被你极其恐怖的工业精度震慑得说不出话来。“你用极其严谨的科学狠狠地击碎了神秘学的高傲。”",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "I": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_artificer": 3
            },
            "alignmentDelta": {
              "order": 1,
              "control": 1
            },
            "triggerTags": [
              "数据打脸",
              "极其精密",
              "强行合作"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其相信数据与精度、用实力说话的工业巨头"
          },
          {
            "id": "B",
            "text": "发动【霸权主导】，极其暴躁地用极其粗暴的刻刀在金属上极其野蛮地刻下极其深邃的凹槽，强迫精灵极其极其痛苦地按照你的极其粗糙的沟壑刻符文。",
            "npcReply": "精灵极其痛苦地在你的凹槽里填上了魔法。“你极其霸道地强奸了精灵的审美，但这武器极其的好用。”",
            "scoreDelta": {
              "str": 2,
              "int": 1
            },
            "mbtiDelta": {
              "E": 1,
              "S": 1
            },
            "affinityDelta": {
              "guild_artificer": 2
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "强行主导",
              "粗暴刻槽",
              "霸权合作"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其强势、绝不退让半步的甲方型工匠"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一份《极其单方面的免责阴阳合同》，并在金属夹层里极其恶劣地塞了反魔石，让精灵极其惨烈地遭到魔法反噬。",
            "npcReply": "你极其狭隘的偏见害死了战友，也极其愚蠢地葬送了对抗巫妖的唯一希望。“你是个极其罪恶的破坏者。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "J": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_artificer": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "暗藏反魔石",
              "极其狭隘",
              "阴阳合同"
            ],
            "outcomeTone": "危险",
            "branchHint": "被偏见冲昏头脑、拿着阴阳合同坑人的蠢货"
          },
          {
            "id": "D",
            "text": "发动【审美霸凌】，极其离谱地极其夸张地拿出一桶极其粉嫩的妖精油漆，把极其沉重的斩首大剑极其恶心地刷成了极其辣眼睛的芭比粉。",
            "npcReply": "精灵极其崩溃地捂住了眼睛。巫妖看到这把粉色大剑时也陷入了极度的自我怀疑。“……你用极其变态的审美对敌我双方造成了精神打击。”",
            "scoreDelta": {
              "cha": 3,
              "int": -1
            },
            "mbtiDelta": {
              "P": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "芭比粉大剑",
              "魔法少女战锤",
              "极其恶心"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其擅长用极度扭曲的审美恶心所有人的审美恐怖分子"
          }
        ]
      },
      {
        "id": "dwarf_artificer_rogue_automaton",
        "targetId": "guild_artificer",
        "title": "失控的魔能傀儡",
        "scene": "在调试一款用于协助采矿的魔能机械傀儡时，因为一个逻辑芯片的极小短路，傀儡突然陷入了极其暴躁的死循环，挥舞着采矿镐开始在工坊里无差别拆墙，并且正朝着你存放极品麦酒的酒柜冲去。",
        "prompt": "面对这个自己亲手制造、即将物理摧毁你毕生酒水收藏的钢铁逆子，你该怎么办？",
        "options": [
          {
            "id": "A",
            "text": "发动【精密停机】，极其冷静地顶着飞溅的石屑，用螺丝刀精准卡入傀儡脖颈后的核心齿轮缝隙，在一秒钟内强行物理阻断其动力源。",
            "npcReply": "傀儡的红光熄灭了，距离你的酒柜只有几公分。“极其冷静且极其精准的停机操作，你的技术无可挑剔。”",
            "scoreDelta": {
              "int": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "I": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_artificer": 3
            },
            "alignmentDelta": {
              "order": 2,
              "control": 1
            },
            "triggerTags": [
              "核心停机",
              "精准微操",
              "保卫麦酒"
            ],
            "outcomeTone": "合格",
            "branchHint": "技术精湛、能在最混乱的场面中精准停机的机械大师"
          },
          {
            "id": "B",
            "text": "发动【野蛮格斗】，极其狂暴地抡起极其沉重的前线扳手，对着傀儡的钢腿来了一记极其猛烈的横扫，试图用极其纯粹的物理压制让它屈服。",
            "npcReply": "傀儡被你砸坏了腿，倒在地上直冒烟，但你的酒柜也被余波震倒了。“……虽然解决了问题，但你似乎极其热衷于拆卸自己的作品。”",
            "scoreDelta": {
              "str": 3,
              "dex": -1
            },
            "mbtiDelta": {
              "E": 1,
              "S": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "铁锤拆机",
              "物理服众",
              "暴力拆解"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其物理调校、习惯用最暴力手段驯服机器的铁血工匠"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《产品意外责任免责书》，宣称这是供应商提供的齿轮存在极其恶劣的质量缺陷，要求供应商赔偿损失，然后躲在门外看着工坊被物理拆毁。",
            "npcReply": "工坊被拆平了。“你是个极其可耻的懦夫，为了推卸责任不惜看着自己的工坊化为废墟。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_artificer": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "免责声明",
              "甩锅供应商",
              "见死不救"
            ],
            "outcomeTone": "危险",
            "branchHint": "极其精通甩锅、为了自身免责不惜出卖整个工坊的卑劣混子"
          },
          {
            "id": "D",
            "text": "发动【魔改跳舞机】，极其离谱地把一块‘极度刺耳的广场舞音响芯片’强行拍进傀儡的外接插槽中，用极其洗脑的土嗨节奏强迫傀儡在原地开始跳极其滑稽的矮人踢踏舞。",
            "npcReply": "傀儡在酒柜前跳起了踢踏舞，最后因为系统过载极其安详地物理报废了。“……你这极其逆天的改写手段，连傀儡的CPU都烧糊了。”",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "E": 2,
              "N": 1
            },
            "affinityDelta": {
              "guild_artificer": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "蹦迪傀儡",
              "芯片魔改",
              "土嗨蹦迪"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "脑洞大开、擅长用最抽象的方式给机器降维打击的奇葩发明家"
          }
        ]
      },
      {
        "id": "dwarf_artificer_final_proof",
        "targetId": "guild_artificer",
        "title": "爆炸的艺术",
        "scene": "考核的最后，考官带你来到一台极其巨大但极其老旧的蒸汽核心前：‘它极其的不稳定，随时可能爆炸。你觉得它是极其失败的垃圾，还是极其完美的艺术品？’",
        "prompt": "面对这个极其考验工匠哲学的核心问题，你的回答是：",
        "options": [
          {
            "id": "A",
            "text": "发动【完美机械学】，极其严肃地检查。“它极其的危险，但我能极其精准地加装极其巧妙的泄流槽，把它改成能极其稳定运转三百年的完美机器。”",
            "npcReply": "考官满意地拍了拍你的肩膀：“极其严谨的修复者。你看到了机械的未来。”",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "J": 1,
              "I": 1
            },
            "affinityDelta": {
              "guild_artificer": 3
            },
            "alignmentDelta": {
              "order": 2,
              "control": 1
            },
            "triggerTags": [
              "加装泄流槽",
              "严谨修复",
              "极其可靠"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其可靠、热衷于化腐朽为极其完美的神工"
          },
          {
            "id": "B",
            "text": "发动【炸弹狂热】，极其兴奋地拍打机器。“极其完美！只要极其狂暴地把它当成极其超大型炸弹极其无情地扔到敌营，它就是极其伟大的艺术品！”",
            "npcReply": "考官大笑起来：“极其疯狂的武器化思路。你极其深谙废物的终极利用法。”",
            "scoreDelta": {
              "str": 1,
              "int": 2
            },
            "mbtiDelta": {
              "P": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_artificer": 2,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "武器化废物",
              "极其爆炸狂",
              "终极炸弹"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其热衷于爆炸、把一切都看作潜在炸弹的狂人"
          },
          {
            "id": "C",
            "text": "极其熟练地掏出一张《极其严重的心理创伤鉴定书》，极其懦弱地捂住耳朵尖叫：“它太极其危险了！我极其坚决地要退出！”",
            "npcReply": "考官极其鄙夷地挥了挥手。“害怕爆炸的人永远成不了极其顶级的黑铁工匠，滚吧。”",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_artificer": -2
            },
            "alignmentDelta": {
              "risk": 2
            },
            "triggerTags": [
              "心理创伤",
              "极度害怕",
              "落荒而逃"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度胆小、连机械的风险都不敢承担的心理创伤大师"
          },
          {
            "id": "D",
            "text": "发动【民用化改造】，极其离谱地在极其不稳定的核心上极其淡定地架起极其巨大的铁锅，利用极其危险的高温炒极其大份的极其美味的蛋炒饭。",
            "npcReply": "机器极其诡异地没有爆炸，反而因为炒饭吸收了热量而达到了极其玄学的热平衡。“……你这极其离谱的物理热力学应用简直让人叹为观止。”",
            "scoreDelta": {
              "con": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "N": 1,
              "S": 1
            },
            "affinityDelta": {
              "guild_cleric": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "核心炒饭",
              "物理热平衡",
              "极其吃货"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其擅长把危险工业设备用于极其日常烹饪的奇才"
          }
        ]
      }
    ]
  },
  "endingTemplates": [
    {
      "endingId": "dwarf_fighter_end",
      "endingType": "accepted",
      "title": "铁峰的怒汉",
      "verdictLine": "判定：合格。你成为了铁峰卫士中最坚硬的一块钢铁。",
      "explanation": "你成为了铁峰卫士中最坚硬的那块生铁。你的胡子极其杂乱，你的战锤极其沉重。你在防线的最前沿极其枯燥地敲碎了一颗又一颗怪物的头颅。精灵觉得你极其野蛮，人类觉得你极其死板，但只有你的战友知道，只要你极其固执地站在这里，铁峰堡的城墙就永远极其安全。",
      "tableFunction": "酒馆防守：你坐在酒馆门口时，可强行阻挡任何非矮人顾客插队。",
      "playableFlaw": "顽固不化：你拒绝接受任何来自于精灵的战术建议，哪怕它是对的。",
      "nextHook": "前线召集：铁峰堡前线告急，带上你的塔盾，立刻出发！",
      "recommendedClass": [
        "guild_fighter",
        "guild_barbarian"
      ],
      "tags": [
        "高防",
        "铁卫",
        "暴躁"
      ]
    },
    {
      "endingId": "dwarf_paladin_end",
      "endingType": "accepted",
      "title": "熔炉的烈焰",
      "verdictLine": "判定：合格。你以烈火与誓言为武器，成为了熔炉誓约者。",
      "explanation": "你成为了极其狂热的熔炉誓约者。你极其极其严格地遵守着誓言，把极其刻板的教条当成砸向异端的铁锤。你极其冷酷地烧毁了无数邪教徒的营地，也极其极其固执地强迫全队每天极其准时地对着铁砧祈祷。你像一团极其耀眼但极其烫手的神圣之火，所有人都极其敬畏你，但也极其极其地害怕你突然发飙。",
      "tableFunction": "晨祷发起：每天清晨，你可以强迫酒馆内所有人在铁砧前祈祷，拒绝者需请你喝一杯啤酒。",
      "playableFlaw": "教条主义：在非秩序秩序阵营的角色面前，你必须大声谴责他们的不检点行为。",
      "nextHook": "圣战宣告：深渊恶魔的爪牙已现身，举起你的圣光战锤，净化他们！",
      "recommendedClass": [
        "guild_paladin",
        "guild_cleric"
      ],
      "tags": [
        "圣光",
        "狂热",
        "高防"
      ]
    },
    {
      "endingId": "dwarf_cleric_end",
      "endingType": "accepted",
      "title": "硬核的祭司",
      "verdictLine": "判定：合格。你让教堂里充满了麦酒的芬芳。",
      "explanation": "你极其极其完美地把信仰与世俗极其丝滑地结合在了一起。你不仅是极其受人尊敬的战地医生，更是极其声名远扬的酿酒大师。你极其喜欢用极其粗暴的手段物理超度亡灵，然后极其豪迈地请所有人喝极其浓烈的特供黑麦酒。在你的极其极其离谱的带领下，你们的教堂现在看起来极其像一个极度喧闹的地下酒馆。",
      "tableFunction": "酒神赐福：你在酒馆内喝下烈酒后，可获得额外的神圣治疗法术位。",
      "playableFlaw": "宿醉祈祷：每次施展法术前，你都必须打一个响亮的饱嗝，否则有5%几率施法失败。",
      "nextHook": "神圣配方：寻找传说中的‘酒神最初配方’，在酒窖中创造奇迹。",
      "recommendedClass": [
        "guild_cleric",
        "guild_bard"
      ],
      "tags": [
        "治疗",
        "酿酒",
        "豪迈"
      ]
    },
    {
      "endingId": "dwarf_artificer_end",
      "endingType": "accepted",
      "title": "爆炸的狂魔",
      "verdictLine": "判定：合格。你的指尖跃动着机械与黑火药的火花。",
      "explanation": "你成为了黑铁工匠中最极其极其危险的存在。你极其鄙视任何传统的冷兵器，极其痴迷于给任何能动的东西装上极其夸张的动力炉和极度不稳定的黑火药。虽然你极其频繁地炸毁自己的实验室，但你极其天才地发明出了一管能极其极其精准地把巨龙下巴炸飞的‘超重型魔能滑膛炮’。只要极其极其幸运地没被自己的发明炸死，你终将极其伟大。",
      "tableFunction": "零件拼装：在酒馆中，你可以用喝剩的铁罐 and 骨头制作出一个微型炸弹。",
      "playableFlaw": "听力受损：因为长期接触爆炸，你的听力极差，经常听错NPC的指令并触发奇妙误会。",
      "nextHook": "试爆通知：你的超重型滑膛炮已就位，目标：地底巨兽！",
      "recommendedClass": [
        "guild_artificer",
        "guild_wizard"
      ],
      "tags": [
        "科技",
        "爆炸",
        "疯狂"
      ]
    },
    {
      "endingId": "dwarf_cleric_saint_end",
      "endingType": "probation",
      "title": "符文秩序宗师",
      "verdictLine": "判定：合格。你成为了山脉信仰的坚定柱石与符文律法的最高解释者。",
      "explanation": "you用极其严谨的逻辑梳理了上千条古老的神圣符文，将神术变成了无懈可击的秩序法则。你不允许任何异端言论，但你的治疗术精准、圣洁，每一次出手都仿佛是摩拉丁亲自降下的工业标本。哪怕是最顽固的长老，也不得不佩服你在符文教条上的深厚造诣。",
      "tableFunction": "符文压制：当有法术系敌人试图在酒馆施法时，你可以抛出一枚重力符文，使其施法速度减半。",
      "playableFlaw": "完美主义：如果队友的盔甲上出现了一点不对称的痕迹，你会在战斗中极其强迫症地冲过去帮他擦拭干净。",
      "nextHook": "大教堂重塑：主持铁峰堡中心大教堂的重建工程，将最新的符文法则镌刻在十米高的生铁大门上。",
      "recommendedClass": [
        "guild_cleric"
      ],
      "tags": [
        "符文",
        "秩序",
        "圣洁"
      ]
    },
    {
      "endingId": "dwarf_fighter_barbarian_end",
      "endingType": "probation",
      "title": "铁峰狂战巨兽",
      "verdictLine": "判定：合格。你是一面行走在战场上的肉弹战壕。",
      "explanation": "you觉得盾牌太妨碍你舒展筋骨了。你更喜欢光着膀子、背上绑着点燃 of 火药桶，嗷嗷叫着冲进怪兽堆里开启人体大风车。虽然你每次战斗完都得让符文祭司物理烙印个半死，但你那可怕的物理冲击力和厚重的肌肉，确实把所有的进攻绿潮都给反向撞碎了。",
      "tableFunction": "狂暴大风车：你可以在酒馆喝酒后，抱住一根柱子原地飞速旋转，有概率把周围的盗贼全甩出去。",
      "playableFlaw": "战术失控：只要你进入狂暴状态，你必须不断冲锋，直到视线内没有任何站立的非矮人生生物。",
      "nextHook": "前线突破：食人魔大军正在集结，作为尖刀班唯一的冲锋员，立刻跳下城墙开道！",
      "recommendedClass": [
        "guild_barbarian",
        "guild_fighter"
      ],
      "tags": [
        "狂暴",
        "肉盾",
        "冲锋"
      ]
    },
    {
      "endingId": "dwarf_artificer_architect_end",
      "endingType": "probation",
      "title": "违章建筑大师",
      "verdictLine": "判定：合格. 你用无处不在的违章瞭望塔重塑了幽暗地域的几何地貌。",
      "explanation": "you坚信世界上没有地基，是因为你还没开始垒砖。不管是三米高的注水水槽还是十米高的古墓穹顶，你总能在几秒钟内用你的石工工具凭空盖起一座合格且带罚单的违建高塔。连那些喜欢用魔法传送的法师，在路过你盖的违建天桥时都不得不停下赞叹你的土木降维打击。",
      "tableFunction": "瞬间哨塔：在野外露营时，你可以花五秒垒出一个两米高的石质哨塔，使小队获得守夜防偷袭优势。",
      "playableFlaw": "城管克制：在面对官方城管人员或税务稽查员时，你的谈判魅力检定自动失败，必须立刻想办法转移资产。",
      "nextHook": "要塞建设：协助铁峰堡在黑石关卡快速盖起三道防御城墙，阻挡兽人的突袭。",
      "recommendedClass": [
        "guild_artificer",
        "guild_wizard"
      ],
      "tags": [
        "基建",
        "土木",
        "创造"
      ]
    },
    {
      "endingId": "dwarf_paladin_rogue_end",
      "endingType": "probation",
      "title": "流氓圣誓骑士",
      "verdictLine": "判定：合格。你让深渊里的恶魔都学到了人类的卑劣手段。",
      "explanation": "谁说圣武士必须光明正大决斗？你最擅长假装接受恶魔的诱惑，然后再踢碎对方的下巴；你喜欢在别人逃跑时，用法术把对方照得像个两百瓦的白炽灯以吸引所有怪物仇恨。恶魔骂你是极其不要脸的流氓，而你的长官只能捂着脸表示‘虽然不合规定，但好歹他赢了’。",
      "tableFunction": "战术恐吓：当在酒馆中谈判时，你可以一拳砸在对方最敏感的关节上，使对方在接下来的对话中陷入恐慌。",
      "playableFlaw": "名声扫地：守序好人阵营的角色会对你的行为方式感到极度不适，与他们组队时你的亲和力下降。",
      "nextHook": "卧底计划：潜入幽暗地域的黑市交易会，伪装成堕落骑士，物理截获敌人的补给线。",
      "recommendedClass": [
        "guild_paladin",
        "guild_rogue"
      ],
      "tags": [
        "腹黑",
        "实用",
        "打击"
      ]
    },
    {
      "endingId": "dwarf_failure_end",
      "endingType": "blacklisted",
      "title": "无毛的耻辱",
      "verdictLine": "判定：淘汰。你被氏族剥夺了胡须，流放至地表。",
      "explanation": "你因为极其频繁地在极其重要的场合展现出极其可耻的懦弱与极度极度的自私，最终被氏族极其极其愤怒地审判了。你的极其极其珍贵的胡须被极其屈辱地全部剃光，然后你被极其极其粗暴地流放到了地表。极其极其可悲的是，失去胡子的你甚至经常被人类极其眼瞎地当成极其肥胖的半身人小孩。",
      "tableFunction": "假扮孩童：在地表人类城镇，你可以假装自己是个超重的小孩来骗取糖果或免费面包。",
      "playableFlaw": "社恐与无毛症：没有胡子的你无法在任何矮人面前抬起头，对话时魅力判定承受-5惩罚。",
      "nextHook": "救赎之路：寻找能够迅速生发胡须的远古神药，或者通过一件伟大的功绩重回地底。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "无毛",
        "耻辱",
        "流放"
      ]
    },
    {
      "endingId": "dwarf_evil_end",
      "endingType": "blacklisted",
      "title": "金币的奴隶",
      "verdictLine": "判定：淘汰。贪婪吞噬了你的灵魂，你抱着金币沉入暗河。",
      "explanation": "你极其极其彻底地被对金币的极度贪婪给吞噬了。你不仅极其极其卑劣地出卖了氏族的采矿机密，甚至极其极其丧心病狂地在极其极其劣质的战锤里掺铅卖给新兵。最终，你极其极其悲惨地遭到反噬：你被极其愤怒的买家锁在一个极其极其巨大的宝箱里，然后极其极其冷酷地沉入了极其极度冰冷的地下暗河中。极其讽刺的是，你真的是抱着极其极其多的金币死的。",
      "tableFunction": "金币称重：虽然你死了，但在英灵殿中，如果有人投掷出与金币相关的检定，你可以进行干涉。",
      "playableFlaw": "财迷心窍：哪怕看到地上掉了一个铜板，你也必须在接下来的行动中优先去捡它。",
      "nextHook": "亡灵救赎：你变成了地下暗河中的贪婪冤魂，等待着倒霉的冒险者把你从铁箱里捞出来。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "贪婪",
        "反噬",
        "金币"
      ]
    },
    {
      "endingId": "dwarf_shame_scout_end",
      "endingType": "blacklisted",
      "title": "坑队友专家",
      "verdictLine": "判定：淘汰。你被终身禁止加入任何冒险小队，因为所有人都不想死在你的‘合理规避’中。",
      "explanation": "你用高利贷合同逼战友交保护费，在怪物扑上来时用队友当肉盾，还美其名曰‘风险对冲’。你的恶名传遍了所有地城公会。今天，你在大街上贴出了组队招募，结果不仅没有任何人回应，连路过的小狗都极其鄙视地朝你吐了唾沫。",
      "tableFunction": "背摔盾牌：在酒馆里，如果有人向你丢酒杯，你可以顺手拉旁边的队友帮你挡下。",
      "playableFlaw": "信誉破产：小队中的其他角色在与你交易时，有80%的几率要求你必须先付款，且魅力加成失效。",
      "nextHook": "单干摸爬：鉴于没人原意当你队友，你必须独自前往最底层的墓穴进行摸金挑战。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "自私",
        "坑爹",
        "孤狼"
      ]
    },
    {
      "endingId": "dwarf_coward_recluse_end",
      "endingType": "blacklisted",
      "title": "养老金骗子",
      "verdictLine": "判定：淘汰。你用一张烧伤假条和虚假PTSD诊断书，成功被踢出了征兵名册。",
      "explanation": "you因为在极度安全的后方胡须着火而申请提前退休、遇到怪物时宣布犯了战场PTSD而成为前线征兵官的头痛对象。你极其熟练地使用各种劳工法和医疗豁免条例，成功骗到了几份地表疗养院的免费餐券。现在，你可以极其安详地躺在养老椅上，喝着麦酒，假装自己是个退役的老英雄。",
      "tableFunction": "骗吃骗喝：你可以出示你的‘工伤退役证明’，在某些同情老兵的地表小酒馆里白嫖两杯劣质麦酒。",
      "playableFlaw": "体能退化：由于长期装病和躺平，你的力量和体质上限永久-1，且极易疲劳。",
      "nextHook": "稽查风波：氏族的审计官正在对所有的养老金发放名单进行实地抽查，赶紧想办法装病装到底！",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "混子",
        "骗保",
        "退休"
      ]
    },
    {
      "endingId": "dwarf_chaos_end",
      "endingType": "absurdAccepted",
      "title": "物理拆迁办",
      "verdictLine": "判定：特殊结局。你把战场变成了轰轰烈烈的装修与定向爆破工坊。",
      "explanation": "你极其极其离谱的脑回路让你彻底脱离了所有正常军团的编制。你极其极其狂热地组建了一支名为‘物理超度与战地强行装修小队’的极度极其抽象的队伍。你们极其极其热衷于在战场上极其极其疯狂地给敌人的堡垒进行极其暴力的定向爆破和刮大白。虽然战果极其极其辉煌，但所有友军都极其极其害怕跟你们一起行动。",
      "tableFunction": "光速翻修：你可以在几秒内把酒馆里破损的木桌粉刷一新，虽然这可能并不是店主想要的。",
      "playableFlaw": "多动症与强迫症：看到毛坯墙面或不牢固的石门，你必须防卫性地克制自己不去把它粉刷或定向爆破。",
      "nextHook": "拆迁合同：地精商会发来了一份针对古老遗迹的物理拆迁意向书，奖金优厚！",
      "recommendedClass": [
        "guild_barbarian",
        "guild_artificer"
      ],
      "tags": [
        "拆迁",
        "爆破",
        "魔改"
      ]
    },
    {
      "endingId": "dwarf_lawyer_end",
      "endingType": "absurdAccepted",
      "title": "地城金牌律师",
      "verdictLine": "判定：特殊结局。你放弃了锤子，拿起了《通用法典》，成为了幽暗地域最可怕的法棍。",
      "explanation": "你发现比起用铁锤砸人，用起诉书和跨种族免责声明能更快且更合法地消灭敌人。你成功起诉了三个地精部落非法侵占采矿权，还逼迫一名火元素签署了胡须伤害赔偿契约。现在，哪怕是地狱里的魔鬼领主在对你动手前，也得先让他的律师评估一下违约成本。",
      "tableFunction": "无罪辩护：当有队友在酒馆里因为打架斗殴被卫兵逮捕时，你可以出示一份《合法防卫与酒精过敏免责声明》，有50%概率无罪释放他。",
      "playableFlaw": "职业病：每当你听到‘合同’、‘协议’或‘起诉’时，你必须停下手中所有事情，花十分钟核对合同细节。",
      "nextHook": "法庭传票：深渊领主向你发来传票，控告你在上一次战斗中使用了违规的商业讹诈。",
      "recommendedClass": [
        "guild_bard",
        "guild_wizard"
      ],
      "tags": [
        "法律",
        "法棍",
        "免责"
      ]
    },
    {
      "endingId": "dwarf_peacemaker_end",
      "endingType": "absurdAccepted",
      "title": "酒精和平大使",
      "verdictLine": "判定：特殊结局。你用无尽的麦酒和极强的肝脏，物理实现了跨种族和平。",
      "explanation": "你坚信世界上没有一桶麦酒解决不了的种族仇恨，如果有，那就加点伏特加。你成功在矮人卫兵和精灵游侠之间举办了十七场拼酒大会，将致命的械斗变成了和谐的集体宿醉。虽然两族长老每天都在宿醉中感到头疼，但至少幽暗地域的流血事件减少了百分之九十。",
      "tableFunction": "酒局劝架：当酒馆内发生冲突时，你可以强行发起一场拼酒对抗，用拼酒输赢代替物理斗殴。",
      "playableFlaw": "重度宿醉：你在清晨的所有敏捷与感知检定都必须承受-2惩罚，除非你立刻喝下一小杯回魂酒。",
      "nextHook": "国际外交：地表人类与地底精灵即将在酒馆签署和平条约，去负责采购两万桶烈酒！",
      "recommendedClass": [
        "guild_cleric",
        "guild_bard"
      ],
      "tags": [
        "和平",
        "拼酒",
        "肝帝"
      ]
    },
    {
      "endingId": "dwarf_gourmet_end",
      "endingType": "absurdAccepted",
      "title": "硬核黑暗厨神",
      "verdictLine": "判定：特殊结局。你将所有的冒险危机都转换为了餐桌上的重工业美食。",
      "explanation": "你对铁砧和魔能核心唯一的执念就是‘这玩意火候够不够炒菜’。你用火元素的余温做出了全地底最赞的烧烤，用双足飞龙的残骸做出了极品刺身，甚至还发明了火药兑酒的‘硬汉特饮’。精灵美食家们边吐边哭，而矮人老兵们则一边赞美你一边排长队领便当。",
      "tableFunction": "战地烹饪：在休息整备期间，你可以用任何击杀的野兽材料制作一份恢复体力的食物，虽然卖相极其惊悚。",
      "playableFlaw": "铁胃后遗症：你无法品尝任何正常的、清淡的食物，食用非重口味食物会让你情绪极其低落。",
      "nextHook": "食神大赛：前往深渊，参加由恶魔领主主持的‘地狱熔炉烹饪挑战赛’！",
      "recommendedClass": [
        "guild_ranger",
        "guild_barbarian"
      ],
      "tags": [
        "美食",
        "铁胃",
        "硬核"
      ]
    },
    {
      "endingId": "dwarf_cyborg_end",
      "endingType": "transferred",
      "title": "赛博改造先驱",
      "verdictLine": "判定：特殊结局。你把打铁的手艺用在了自己身上，成为了半机械构造体。",
      "explanation": "你认为矮人的血肉之躯在追求极致力量的道路上太慢了。你在自己的下巴上编织了合金假胡须，用火箭推进器代替了双腿，甚至把肋骨全换成了重金属装甲。现在你不仅不怕烫、不怕砸，每次打嗝还能极其巧合地喷射出高压蒸汽。",
      "tableFunction": "蒸汽排放：在酒馆里，你可以通过排放体内的废水蒸汽来制造一片能见度为零的迷雾，方便你偷溜买单。",
      "playableFlaw": "强磁敏感：如果靠近强力电磁铁或闪电法术，你将失去身体 of 构造体的控制权，并开始原地打转。",
      "nextHook": "肉体飞升：寻找隐藏在黑铁矿坑深处的远古泰坦遗迹，给自己换一颗纯秘银的心脏。",
      "recommendedClass": [
        "guild_artificer",
        "guild_fighter"
      ],
      "tags": [
        "赛博",
        "改装",
        "飞升"
      ],
      "rejectedClass": "guild_paladin"
    },
    {
      "endingId": "dwarf_pacifist_end",
      "endingType": "transferred",
      "title": "地城平权斗士",
      "verdictLine": "判定：特殊结局。你成为了地城无障碍建设的唯一倡导者与碰瓷先锋。",
      "explanation": "你因为在地下墓穴躺平抗议其缺乏‘小体型种族无障碍拉杆’而名声大噪。你组建了‘地城平权联盟’，开着轮椅去强行要求每一个地精营地 and 巨龙巢穴增设适老化设施和母婴室。地城主人们看见你的大红横幅就觉得头疼，甚至宁愿直接送你金币打发你走。",
      "tableFunction": "平权演说：你可以在酒馆发起演说，强迫酒馆老板降低小体型顾客的桌椅高度，这能让你买酒打折。",
      "playableFlaw": "死磕教条：只要地城里有任何高低差或狭窄地形，你都必须大声痛骂建筑师十分钟，并拒绝快速通过。",
      "nextHook": "公用设施：前往地精哨所，强行监督他们的厕所是否进行了合理的无障碍改造。",
      "recommendedClass": [
        "guild_bard"
      ],
      "tags": [
        "维权",
        "平权",
        "躺平"
      ],
      "rejectedClass": "guild_fighter"
    },
    {
      "endingId": "dwarf_bard_troubadour_end",
      "endingType": "transferred",
      "title": "土嗨音乐家",
      "verdictLine": "判定：特殊结局。你用魔性的矮人土嗨音乐和粉色涂装击穿了整个幽暗地域的耳膜。",
      "explanation": "you把精灵的优雅竖琴魔改成电吉他，把严肃的屠龙巨型火炮改成了大功率迪厅低音炮。你开创了极其硬核的‘重金属芭比粉乐章’，所到之处，怪兽因为耳鸣和审美崩溃四散奔逃，队友们也因为严重的大呼小叫而开始抱头痛哭。你成了两界著名的审美终结者。",
      "tableFunction": "魔音贯耳：在酒馆演奏时，可以让所有非矮人顾客因为精神崩溃而暂时离开酒馆，方便你们在里面行事。",
      "playableFlaw": "噪音制造者：你在进行任何潜行检定或埋伏动作时，必须承受失败惩罚，因为你身上的金属配饰总在乒乓作响。",
      "nextHook": "巡回演唱会：组织一场席卷地底所有主要城市的重金属芭比粉巡回演出，首站：幽暗精灵大剧院！",
      "recommendedClass": [
        "guild_bard"
      ],
      "tags": [
        "音乐",
        "审美",
        "噪音"
      ],
      "rejectedClass": "guild_fighter"
    },
    {
      "endingId": "dwarf_merchant_tycoon_end",
      "endingType": "transferred",
      "title": "商会洗钱大亨",
      "verdictLine": "判定：特殊结局。你把生死存亡的地牢和战场，成功经营成了庞大的黑市洗钱帝国。",
      "explanation": "在面临巨龙宝藏 and 恶魔契约时，你满脑子都是‘怎么通过地精钱庄走账’和‘怎么获取深渊免税干股’。你把战地的装备损坏变成了高利贷租赁契约，把氏族的危机变成了跨国投资报告。虽然你被踢出了正规军，但你现在掌控着整个幽暗地域三分之一的黑市贸易，连那些审判你的考官们，买装备时都得从你这儿贷款。",
      "tableFunction": "商业借贷：你可以向酒馆里的NPC或队友发放短期高利贷，借款人若不按期归还，将承受罚息惩罚。",
      "playableFlaw": "无利不起早：你拒绝进行任何没有任何直接金钱或物资回报的无偿任务，甚至不肯免费扶一下摔倒的老人。",
      "nextHook": "金融风暴：地精商会的主席邀请你参加一次绝密会议，共同策划做空整个人类王国的铁矿交易。",
      "recommendedClass": [
        "guild_rogue",
        "guild_wizard"
      ],
      "tags": [
        "商业",
        "洗钱",
        "暴富"
      ],
      "rejectedClass": "guild_fighter"
    }
  ],
  "mbtiFilters": [
    {
      "groupId": "NT",
      "title": "理性火花与锻造先锋",
      "oneLine": "用逻辑和齿轮重构世界的思想者",
      "evaluationStyle": "极度注重技术逻辑与效率，轻视繁文缛节与传统教条。",
      "guild_fighterFlavor": "擅长分析战阵与受力结构，追求以智取胜的几何力学战士。",
      "guild_paladinFlavor": "对教条抱有审视态度，更倾向于将誓言解释为维护某种高效秩序的契约。",
      "guild_clericFlavor": "将神术视为某种尚未被完全解析的自然法则，喜欢系统化整理符文规律。",
      "guild_artificerFlavor": "黑铁工匠的终极形态，痴迷于创造颠覆传统物理的超级魔能装置。",
      "riskText": "在团队中可能显得冷酷、缺乏人情味，且容易因追求效率而忽视同僚的感受。"
    },
    {
      "groupId": "NF",
      "title": "岩壁共鸣与灵魂灯塔",
      "oneLine": "在冰冷钢铁中寻找生命温度的理想主义者",
      "evaluationStyle": "重视个体价值、团队情感与种族命运，容易受到道德与信念的感召。",
      "guild_fighterFlavor": "为了守护同伴而挥舞盾牌，用友情与热血激励防线的温情卫士。",
      "guild_paladinFlavor": "极度纯粹的光明化身，将守护弱者和践行誓言视为神圣不可侵犯的最高天职。",
      "guild_clericFlavor": "最具同理心的符文祭司，乐于倾听痛苦，能用温柔的神术抚平一切创伤与宿醉。",
      "guild_artificerFlavor": "希望通过自己的发明为人们带来温暖与便利，而非单纯的杀戮兵器。",
      "riskText": "容易过度感性，在必须做出残酷抉择的战场上可能陷入纠结与自我怀疑。"
    },
    {
      "groupId": "SJ",
      "title": "古老律法与山脉基石",
      "oneLine": "坚守传统、纪律与秩序的忠诚守护者",
      "evaluationStyle": "尊重历史、传统规范与长辈指令，执行任务一丝不苟，极度可靠。",
      "guild_fighterFlavor": "铁峰防线上最稳固的钉子，完美执行战术指令，把纪律视为生命。",
      "guild_paladinFlavor": "坚贞不屈的熔炉坚守者，将古老誓约的每一条细则都贯彻到最微小的行动中。",
      "guild_clericFlavor": "严守祭祀传统，极力维持古老仪式纯洁性的符文守护者。",
      "guild_artificerFlavor": "遵循最严密的工程标准，极其反感危险爆破，追求极致的安全与稳定。",
      "riskText": "思想极度保守，面对突发状况时缺乏变通，容易陷入教条主义和种族偏见。"
    },
    {
      "groupId": "SP",
      "title": "烈酒风暴与熔岩舞者",
      "oneLine": "活在当下、渴望战斗与爆炸的自由之魂",
      "evaluationStyle": "随性而为，崇尚直觉与行动，热衷于在极度混乱中寻找刺激与快乐。",
      "guild_fighterFlavor": "在战场上高唱战歌、冲锋在前的狂战士，把战斗视为最过瘾的乐子。",
      "guild_paladinFlavor": "不拘泥于形式的流氓圣武士，随时准备用物理方式给邪恶势力一个大大的惊喜。",
      "guild_clericFlavor": "把教堂变成酒馆的随性祭司，信仰和本能同样强烈，擅长用酒水拉近关系。",
      "guild_artificerFlavor": "热衷于战地改装和危险试爆的疯狂科学家，认为爆炸是世界上最美的艺术。",
      "riskText": "极度缺乏纪律性，行事冲动且不计后果，经常给同伴带来意想不到的麻烦与危机。"
    }
  ]
};
  window.RACE_RECRUITMENT_DATASET = Object.freeze({
    ...(window.RACE_RECRUITMENT_DATASET || {}),
    "dwarf": Object.freeze(data),
  });
})();
