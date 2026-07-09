(() => {
  const data = {
  "meta": {
    "version": 1,
    "raceId": "halfling",
    "raceNameZh": "半身人",
    "scope": "race_recruitment_full"
  },
  "raceCard": {
    "raceId": "halfling",
    "raceNameZh": "半身人",
    "raceNameEn": "Halfling",
    "title": "天命眷顾的乐天吃货",
    "oneLine": "对他们来说，一日六餐比拯救世界重要得多。",
    "bodyText": "半身人是拥有逆天运气的乐天派。他们擅长在最危险的战场上做出一锅美味的炖肉，并在致命陷阱里奇迹般地生还。他们那矮小的身躯和乐观的性格下，隐藏着让神明都感到棘手的生存智慧。",
    "tags": [
      "乐天派",
      "逆天运气",
      "一日六餐",
      "低底盘"
    ],
    "warningText": "警告：请勿试图模仿半身人的平地摔或任何危险动作，其生还概率纯属运气，非战斗技巧。",
    "recruiterQuote": "“我这辈子没见过运气这么好的人，或者说……这根本不是人，这是命运之神的私生子。” —— 征兵官奥利弗"
  },
  "recruitTargets": [
    {
      "targetId": "guild_rogue",
      "classNameZh": "斥候与机关处",
      "classNameEn": "Rogue Office",
      "title": "天命神偷",
      "oneLine": "别人靠潜行，他们靠运气。经常在滑倒的时候顺便躲过了致命一击，并阴差阳错地踩死了Boss。",
      "recruiter": "斥候与机关处书记员",
      "recruitPitch": "别人靠潜行，他们靠运气。经常在滑倒的时候顺便躲过了致命一击，并阴差阳错地踩死了Boss。",
      "acceptedStyle": "关键门槛：DEX 12 / CHA 10。通过后会按该路线记录职业试炼倾向。",
      "likelyFailure": "若只展示血脉噱头而无法稳定服务队伍，会被列入观察或转岗名单。",
      "hiddenRoute": "试炼会同时记录其他公会倾向，最终判定可能转荐到更匹配的柜台。",
      "recommendedStats": [
        "dex",
        "cha"
      ],
      "riskTags": [
        "潜行",
        "机关",
        "DEX",
        "CHA"
      ]
    },
    {
      "targetId": "guild_bard",
      "classNameZh": "联络与士气处",
      "classNameEn": "Bard Office",
      "title": "战地厨神",
      "oneLine": "用锅碗瓢盆演奏战歌。他们的美食能让即将阵亡的战友垂死病中惊坐起，只为了再吃一口炖肉。",
      "recruiter": "联络与士气处书记员",
      "recruitPitch": "用锅碗瓢盆演奏战歌。他们的美食能让即将阵亡的战友垂死病中惊坐起，只为了再吃一口炖肉。",
      "acceptedStyle": "关键门槛：CHA 12 / CON 10。通过后会按该路线记录职业试炼倾向。",
      "likelyFailure": "若只展示血脉噱头而无法稳定服务队伍，会被列入观察或转岗名单。",
      "hiddenRoute": "试炼会同时记录其他公会倾向，最终判定可能转荐到更匹配的柜台。",
      "recommendedStats": [
        "cha",
        "con"
      ],
      "riskTags": [
        "士气",
        "交涉",
        "CHA",
        "CON"
      ]
    },
    {
      "targetId": "guild_ranger",
      "classNameZh": "边境巡林站",
      "classNameEn": "Ranger Station",
      "title": "狗骑士",
      "oneLine": "骑着大黄狗冲锋陷阵。由于体型太小，经常被敌人当成极其烦人的位置，但他们的短弓极其致命。",
      "recruiter": "边境巡林站书记员",
      "recruitPitch": "骑着大黄狗冲锋陷阵。由于体型太小，经常被敌人当成极其烦人的位置，但他们的短弓极其致命。",
      "acceptedStyle": "关键门槛：DEX 12 / WIS 10。通过后会按该路线记录职业试炼倾向。",
      "likelyFailure": "若只展示血脉噱头而无法稳定服务队伍，会被列入观察或转岗名单。",
      "hiddenRoute": "试炼会同时记录其他公会倾向，最终判定可能转荐到更匹配的柜台。",
      "recommendedStats": [
        "dex",
        "wis"
      ],
      "riskTags": [
        "追踪",
        "边境",
        "DEX",
        "WIS"
      ]
    },
    {
      "targetId": "guild_warlock",
      "classNameZh": "异常契约审阅处",
      "classNameEn": "Warlock Desk",
      "title": "契约骗子",
      "oneLine": "能厚颜无耻地和恶魔签订契约，并在恶魔想要收割灵魂时用一顿美味的烤肉蒙混过关。",
      "recruiter": "异常契约审阅处书记员",
      "recruitPitch": "能厚颜无耻地和恶魔签订契约，并在恶魔想要收割灵魂时用一顿美味的烤肉蒙混过关。",
      "acceptedStyle": "关键门槛：CHA 12 / INT 10。通过后会按该路线记录职业试炼倾向。",
      "likelyFailure": "若只展示血脉噱头而无法稳定服务队伍，会被列入观察或转岗名单。",
      "hiddenRoute": "试炼会同时记录其他公会倾向，最终判定可能转荐到更匹配的柜台。",
      "recommendedStats": [
        "cha",
        "int"
      ],
      "riskTags": [
        "契约",
        "风险",
        "CHA",
        "INT"
      ]
    }
  ],
  "physiqueChecks": [
    {
      "id": "halfling_physique_stealth",
      "targetId": "guild_rogue",
      "title": "致命的喷嚏",
      "scene": "你正潜伏在巨魔的营地里偷取钥匙。正当你即将得手时，空气中飘来一阵胡椒粉味，你忍不住打了个巨大的喷嚏。",
      "prompt": "巨魔猛地转过头来，你如何化解这个危机？",
      "options": [
        {
          "id": "A",
          "text": "“阿嚏！”喷嚏打出的瞬间，你顺势把一把辣椒面全撒进巨魔鼻孔里，然后声情并茂地大喊：“这是最新的法式洞穴香氛，先生！免费试用！”",
          "npcReply": "巨魔被辣得泪流满面，一边打喷嚏一边给你塞小费。‘你的临场推销能力堪称一绝。’",
          "scoreDelta": {
            "cha": 3,
            "dex": 1
          },
          "mbtiDelta": {
            "P": 1,
            "E": 1
          },
          "affinityDelta": {
            "guild_bard": 2,
            "guild_rogue": 1
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "推销香氛",
            "撒辣椒面"
          ],
          "outcomeTone": "合格",
          "branchHint": "擅长用极其离谱的推销话术化解危机的带货大师"
        },
        {
          "id": "B",
          "text": "喷嚏打出的一瞬间，你借助后坐力完成了一个极其华丽的三周半转体，精准落入巨魔喝剩的空酒桶里，并顺手给自己盖上了盖子。",
          "npcReply": "巨魔迷茫地环顾四周，只觉得刚才有只灵活的耗子飞了过去。‘极其精妙的物理规避动作。’",
          "scoreDelta": {
            "dex": 3,
            "con": 1
          },
          "mbtiDelta": {
            "I": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_rogue": 3
          },
          "alignmentDelta": {
            "action": 1
          },
          "triggerTags": [
            "三周半转体",
            "盖桶隐蔽"
          ],
          "outcomeTone": "偏离",
          "branchHint": "反应极快、能把任何失误化为体操动作的技术流刺客"
        },
        {
          "id": "C",
          "text": "面对惊醒的巨魔，你立刻掏出一本《巨魔洞穴卫生管理条例》，戴上金丝眼镜严肃地记录：“乱扔骨头、通风不良、有致敏原...我要给你开罚单了！如果不交罚款，我就把隔壁山头的哥布林全引过来吃你的存粮！”",
          "npcReply": "巨魔被你强大的官僚气场和恶毒的威胁吓住了，乖乖交了保护费。‘你用极其恶劣的行政敲诈逃避了战斗。’",
          "scoreDelta": {
            "wis": -2,
            "cha": -2
          },
          "mbtiDelta": {
            "F": 1
          },
          "affinityDelta": {
            "guild_rogue": -2
          },
          "alignmentDelta": {
            "self": 2,
            "risk": 2
          },
          "triggerTags": [
            "卫生检查罚单",
            "行政敲诈"
          ],
          "outcomeTone": "危险",
          "branchHint": "极其擅长用伪造公文和官僚主义吓退敌人的混子"
        },
        {
          "id": "D",
          "text": "你大摇大摆地走出来，指着巨魔火堆上的烤肉痛心疾首：“火候全错了！让开，我来教你什么叫做低温慢烤和美拉德反应！”",
          "npcReply": "巨魔被你专业的厨师气场镇住了，乖乖退到一边拿起了小本本。‘你用厨艺征服了巨魔的胃。’",
          "scoreDelta": {
            "cha": 3,
            "wis": 1
          },
          "mbtiDelta": {
            "E": 2,
            "S": 1
          },
          "affinityDelta": {
            "guild_bard": 3
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "现场指导烧烤",
            "美拉德反应"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "不管什么危机都能转化成烹饪教学的战地厨神"
        }
      ]
    },
    {
      "id": "halfling_physique_fear",
      "targetId": "guild_warlock",
      "title": "恶魔的恐吓",
      "scene": "你意外召唤出了一只深渊炎魔。它喷吐着硫磺的烈焰，威胁要吞噬你的灵魂，并让你体验永恒的折磨。",
      "prompt": "面对这种绝对力量的恐吓，你的第一反应是：",
      "options": [
        {
          "id": "A",
          "text": "你两眼放光地看着炎魔身上的烈焰：“这温度太完美了！老铁，借你的火炖个龙骨汤行不行？我分你一碗，保准比灵魂好吃！”",
          "npcReply": "炎魔被你离谱的要求整不会了，竟然真的老老实实当起了人形煤气灶。‘你成功把恶魔变成了后厨小弟。’",
          "scoreDelta": {
            "cha": 3,
            "int": 1
          },
          "mbtiDelta": {
            "N": 1,
            "E": 1
          },
          "affinityDelta": {
            "guild_bard": 2,
            "guild_warlock": 1
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "恶魔炖汤",
            "人形煤气灶"
          ],
          "outcomeTone": "合格",
          "branchHint": "神经大条、能把深渊领主当成优质热源的乐天派"
        },
        {
          "id": "B",
          "text": "你冷静地掏出一沓厚厚的羊皮纸：“吞噬灵魂太低效了。我这里有一份《深渊魔法特许经营权转让协议》，包你年化收益率300%，签吗？”",
          "npcReply": "炎魔不仅没杀你，还戴上老花镜仔细看起了协议条款。‘你是天生的恶魔资本家。’",
          "scoreDelta": {
            "int": 2,
            "cha": 2
          },
          "mbtiDelta": {
            "T": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_warlock": 3
          },
          "alignmentDelta": {
            "control": 2
          },
          "triggerTags": [
            "特许经营协议",
            "恶魔资本家"
          ],
          "outcomeTone": "偏离",
          "branchHint": "极度精明、能把恶魔忽悠进金融陷阱的法务术士"
        },
        {
          "id": "C",
          "text": "你立刻掏出一张伪造的《异界遣返令》，指着炎魔大喊：“你的跨位面签证已经过期了！立刻把力量交出来作为保释金，否则我马上向时空管理局举报你非法滞留！”",
          "npcReply": "炎魔愣了一下，骂骂咧咧地扔下力量撕开传送门溜了。‘你用极具压迫感的行政诈骗敲诈了恶魔。’",
          "scoreDelta": {
            "wis": -2,
            "cha": -2
          },
          "mbtiDelta": {
            "F": 1
          },
          "affinityDelta": {
            "guild_warlock": -2
          },
          "alignmentDelta": {
            "self": 2,
            "risk": 2
          },
          "triggerTags": [
            "异界遣返令",
            "签证过期诈骗"
          ],
          "outcomeTone": "危险",
          "branchHint": "极其擅长利用伪造公文和跨界法律进行敲诈的法棍"
        },
        {
          "id": "D",
          "text": "你嫌恶地捏住鼻子，掏出一瓶特大号的‘晨露花香空气清新剂’对着炎魔的脸疯狂喷洒：“太臭了！你这硫磺味严重超标！给我香起来！”",
          "npcReply": "炎魔被花香味呛得连连咳嗽，含泪逃回了深渊。‘你用保洁阿姨的手段击退了深渊领主。’",
          "scoreDelta": {
            "dex": 2,
            "cha": 1
          },
          "mbtiDelta": {
            "S": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_ranger": 1
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "空气清新剂攻击",
            "嫌弃恶魔臭"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "荒诞不羁、能用生活用品打出魔法伤害的奇葩"
        }
      ]
    },
    {
      "id": "halfling_physique_agility",
      "targetId": "guild_ranger",
      "title": "失控的马车",
      "scene": "一辆失控的重型马车正在集市上横冲直撞，眼看就要撞上你。你的半身人短腿根本跑不过它。",
      "prompt": "在千钧一发之际，你如何保命？",
      "options": [
        {
          "id": "A",
          "text": "你不退反进，极其精准地一个滑铲钻进马车底下，双手死死抱住传动轴，像考拉一样挂在车底，顺便用匕首撬下了车底盘上的一块纯金零件。",
          "npcReply": "马车最终撞墙停下，而你不仅毫发无损，还发了一笔横财。‘极度疯狂的规避与顺手牵羊。’",
          "scoreDelta": {
            "dex": 3,
            "con": 1
          },
          "mbtiDelta": {
            "P": 2
          },
          "affinityDelta": {
            "guild_rogue": 2,
            "guild_ranger": 1
          },
          "alignmentDelta": {
            "action": 2
          },
          "triggerTags": [
            "滑铲挂车底",
            "顺手牵羊"
          ],
          "outcomeTone": "合格",
          "branchHint": "极其喜欢在生死边缘疯狂试探和发财的极限神偷"
        },
        {
          "id": "B",
          "text": "你吹响一声极其响亮的口哨，你的圣伯纳犬坐骑瞬间狂奔而至，一口叼住你的裤腰带，将你极其粗暴但精准地甩到了旁边的二楼阳台上。",
          "npcReply": "极其狂野的人犬配合。‘你可能跑不过马车，但你有一只能把你当沙包扔的狗。’",
          "scoreDelta": {
            "wis": 2,
            "dex": 2
          },
          "mbtiDelta": {
            "E": 1,
            "S": 1
          },
          "affinityDelta": {
            "guild_ranger": 3
          },
          "alignmentDelta": {
            "control": 1
          },
          "triggerTags": [
            "狗叼裤腰带",
            "狂野甩飞"
          ],
          "outcomeTone": "偏离",
          "branchHint": "与坐骑配合极其默契、战术极其粗暴的游侠骑士"
        },
        {
          "id": "C",
          "text": "你瞬间趴在地上，从包里掏出一块印着“施工重地，前方塌陷”的醒目路牌挡在身前，并极其专业地给自己戴上了一顶黄色安全帽。",
          "npcReply": "受惊的马看到了路牌竟然本能地急转弯，撞向了旁边的水果摊。‘极其高效的交通欺诈手段。’",
          "scoreDelta": {
            "wis": -2,
            "cha": -2
          },
          "mbtiDelta": {
            "T": 1
          },
          "affinityDelta": {
            "guild_ranger": -2
          },
          "alignmentDelta": {
            "self": 2,
            "risk": 2
          },
          "triggerTags": [
            "伪造施工路牌",
            "交通欺诈"
          ],
          "outcomeTone": "危险",
          "branchHint": "随身携带各种警示牌进行物理诈骗的安全员"
        },
        {
          "id": "D",
          "text": "你随手从旁边的水果摊抄起一个极其巨大的南瓜，利用完美的抛物线将其精准卡入马车车轮的辐条中，瞬间导致车轮卡死，马车原地起飞。",
          "npcReply": "你拍了拍手上的南瓜汁，深藏功与名。‘你对物理学和抛射物轨迹的理解已经登峰造极。’",
          "scoreDelta": {
            "int": 3,
            "dex": 1
          },
          "mbtiDelta": {
            "T": 1,
            "N": 1
          },
          "affinityDelta": {
            "guild_rogue": 1
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "南瓜卡车轮",
            "离谱物理学"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "总能用廉价瓜果制造极其惊人破坏力的几何学大师"
        }
      ]
    },
    {
      "id": "halfling_physique_stamina",
      "targetId": "guild_bard",
      "title": "沙漠的考验",
      "scene": "你们在沙漠中迷路了三天，水和食物都已经耗尽。其他高大的队友已经接连倒下，而你凭借着半身人极低的消耗还在坚持。",
      "prompt": "在绝境中，你做出了什么举动？",
      "options": [
        {
          "id": "A",
          "text": "你掏出破木吉他，开始在烈日下以最大的音量弹唱极其魔性的半身人摇滚乐。极度穿脑的魔音硬生生把昏迷的队友全给烦醒了，愤怒地爬起来要揍你。",
          "npcReply": "虽然你的音乐毫无美感，但成功激起了队友‘想活下去揍你一顿’的求生欲。‘极其硬核的战地物理鼓舞。’",
          "scoreDelta": {
            "cha": 3,
            "con": 2
          },
          "mbtiDelta": {
            "E": 2,
            "P": 1
          },
          "affinityDelta": {
            "guild_bard": 3
          },
          "alignmentDelta": {
            "action": 2
          },
          "triggerTags": [
            "摇滚魔音",
            "仇恨唤醒"
          ],
          "outcomeTone": "合格",
          "branchHint": "用极度扰民的方式强行给团队续命的灵魂乐手"
        },
        {
          "id": "B",
          "text": "你凭借半身人的荒野本能，敏锐地在沙丘深处挖出了几条极其肥美的多汁沙虫，不仅自己美美地生吃了，还贴心地把虫汁挤进队友嘴里。",
          "npcReply": "队友醒来后极其感激，直到他们知道自己喝了什么。‘你出色的荒野求生能力拯救了小队。’",
          "scoreDelta": {
            "wis": 3,
            "con": 1
          },
          "mbtiDelta": {
            "S": 2
          },
          "affinityDelta": {
            "guild_ranger": 2,
            "guild_bard": 1
          },
          "alignmentDelta": {
            "order": 1
          },
          "triggerTags": [
            "生吃沙虫",
            "喂虫汁"
          ],
          "outcomeTone": "偏离",
          "branchHint": "生存能力极强、能把荒野求生变成吃播的游侠"
        },
        {
          "id": "C",
          "text": "你直接掏出一把折叠躺椅和太阳伞躺下，并且立起一块牌子：“顶级沙漠遗嘱代写及遗物回收服务，收费合理”。你极其悠闲地等着回收他们的装备。",
          "npcReply": "你的队友们被你丧心病狂的商业行为气得回光返照，硬是爬起来把你揍了一顿。‘令人发指的发死人财商业头脑。’",
          "scoreDelta": {
            "int": 1,
            "wis": -2
          },
          "mbtiDelta": {
            "T": 1,
            "I": 1
          },
          "affinityDelta": {
            "guild_rogue": -2
          },
          "alignmentDelta": {
            "self": 2,
            "risk": 2
          },
          "triggerTags": [
            "发死人财",
            "遗物回收"
          ],
          "outcomeTone": "危险",
          "branchHint": "极其擅长在绝境中就地开展离谱商业活动的工商业巨头"
        },
        {
          "id": "D",
          "text": "你走着走着，极其离谱地被一根仙人掌绊倒，脸朝下砸在沙地上，结果直接砸穿了一层薄沙，掉进了一个极其隐蔽的清凉地下绿洲里。",
          "npcReply": "考官极其崩溃。‘别人靠毅力和技能求生，你靠平地摔找绿洲。你的运气简直是个bug。’",
          "scoreDelta": {
            "dex": 2,
            "cha": 2
          },
          "mbtiDelta": {
            "P": 2
          },
          "affinityDelta": {
            "guild_rogue": 2
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "平地摔找绿洲",
            "逆天狗屎运"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "运气好到连老天爷都嫉妒的逆天之子"
        }
      ]
    },
    {
      "id": "halfling_physique_luck",
      "targetId": "guild_rogue",
      "title": "酒馆大乱斗",
      "scene": "你在旅馆里吃午餐，旁边两桌冒险者突然因为分赃不均拔刀大打出手，一个飞来的酒杯、一把飞刀和一张沉重的椅子同时朝你的方向砸了过来。",
      "prompt": "在这场混乱的酒馆大乱斗中，你打算怎么做？",
      "options": [
        {
          "id": "A",
          "text": "你头也不抬，刚好弯下腰去捡掉在地板上的半块面包。酒杯、飞刀和椅子擦着你的头顶飞过，精准地砸中了你身后的旅馆老板，而你顺便在桌底捡到了别人掉落的金币。",
          "npcReply": "‘这运气没谁了，弯腰捡面包不仅避开重击，还能发财。’",
          "scoreDelta": {
            "dex": 2,
            "cha": 1
          },
          "mbtiDelta": {
            "P": 2
          },
          "affinityDelta": {
            "guild_rogue": 3
          },
          "alignmentDelta": {
            "good": 1
          },
          "triggerTags": [
            "弯腰捡包",
            "捡到金币"
          ],
          "outcomeTone": "合格",
          "branchHint": "极佳的被动躲避与幸运体质"
        },
        {
          "id": "B",
          "text": "你眼疾手快，一把接住飞来的酒杯，顺势把里面的麦芽酒一饮而尽，接着单手撑桌一个侧翻，稳稳地落在柜台后面安全地继续啃你的鸡腿。",
          "npcReply": "‘非常流畅的敏捷规避，顺便还蹭了一杯酒。’",
          "scoreDelta": {
            "dex": 3,
            "con": 1
          },
          "mbtiDelta": {
            "S": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_rogue": 2,
            "guild_ranger": 1
          },
          "alignmentDelta": {
            "action": 1
          },
          "triggerTags": [
            "空中接杯",
            "空翻躲避"
          ],
          "outcomeTone": "偏离",
          "branchHint": "身手矫健的技术流半身人"
        },
        {
          "id": "C",
          "text": "你立刻跳到桌子上，指着两拨人大喊：“执法队来了！所有人抱头蹲下！”趁着大家愣神，你迅速把桌上的烤肉和值钱的小玩意全扫进自己的背包，从后门溜走。",
          "npcReply": "‘公然制造虚假恐慌并趁火打劫，你真是一点亏都不吃。’",
          "scoreDelta": {
            "wis": -2,
            "cha": -2
          },
          "mbtiDelta": {
            "T": 1
          },
          "affinityDelta": {
            "guild_rogue": -2
          },
          "alignmentDelta": {
            "self": 2
          },
          "triggerTags": [
            "虚假警报",
            "浑水摸鱼"
          ],
          "outcomeTone": "危险",
          "branchHint": "极其擅长制造混乱并趁机洗劫的投机分子"
        },
        {
          "id": "D",
          "text": "你兴奋地加入战局，抄起手里的平底锅当作盾牌，把砸过来的椅子反弹回去，正好击中了一个通缉犯的脑袋，并且合着酒馆里的背景音乐开始有节奏地敲锅伴奏。",
          "npcReply": "‘你把大乱斗现场变成了交响乐合奏，而且还顺便砸晕了一个逃犯。’",
          "scoreDelta": {
            "cha": 3,
            "str": 1
          },
          "mbtiDelta": {
            "E": 2
          },
          "affinityDelta": {
            "guild_bard": 3
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "平底锅格挡",
            "敲锅伴奏"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "能把任何斗殴现场瞬间变成欢乐音乐会的乐子人"
        }
      ]
    }
  ],
  "trialSets": {
    "guild_rogue": [
      {
        "id": "halfling_rogue_heist",
        "targetId": "guild_rogue",
        "title": "金库的诱惑",
        "scene": "你潜入了一个防守极其严密的矮人金库。这里到处都是魔法警报和机械陷阱。你的目标是偷走最中央展览台上的那颗价值连城的‘龙眼红宝石’。",
        "prompt": "面对复杂的安保系统，你如何把宝石偷到手？",
        "options": [
          {
            "id": "A",
            "text": "你对复杂的魔法锁一窍不通，直接拿出一根牙签闭着眼睛在锁眼里一顿狂搅。结果机括发出一声脆响，不仅门开了，连带着金库的自毁系统也一起短路了。",
            "npcReply": "监控室里的矮人工程师看着乱码的面板当场辞职。‘你用极其抽象的运气降维打击了矮人科技。’",
            "scoreDelta": {
              "dex": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_rogue": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "牙签狂搅",
              "降维打击科技"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其依赖逆天运气、能把开锁变成玄学的神偷"
          },
          {
            "id": "B",
            "text": "你利用体型优势极其冷静地穿过激光网，用一块重量分毫不差的石头极其丝滑地替换了红宝石，甚至还好心地顺手帮矮人修复了两个报警器的故障。",
            "npcReply": "极其完美的教科书级潜入。‘你不仅偷走了宝石，还免费做了一次安保系统维护。’",
            "scoreDelta": {
              "dex": 2,
              "int": 2
            },
            "mbtiDelta": {
              "J": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_rogue": 2,
              "guild_ranger": 1
            },
            "alignmentDelta": {
              "control": 1,
              "order": 1
            },
            "triggerTags": [
              "偷天换日",
              "顺手修报警器"
            ],
            "outcomeTone": "偏离",
            "branchHint": "技术极其精湛、甚至还有强迫症的技术流大盗"
          },
          {
            "id": "C",
            "text": "你转过身，从包里翻出一套劣质的假胡子粘在脸上，然后极其嚣张地揪住同伙的衣领，对赶来的守卫大喊：“长官！我抓住了这个试图破坏矮人伟大工艺的窃贼！申请赏金！”",
            "npcReply": "你的同伙被当场抓获，而你极其可耻地拿着赏金逃脱了。‘你是个极其熟练且毫无底线的出卖者。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_rogue": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "贴假胡子",
              "贼喊捉贼"
            ],
            "outcomeTone": "危险",
            "branchHint": "极其擅长伪装成群众进行极度嚣张诈骗的戏精"
          },
          {
            "id": "D",
            "text": "you直接换上一套外卖员制服，提着两盒极其香浓的烤肉串大摇大摆地走进去，不仅和守卫们打成一片，最后还通过斗地主把那颗红宝石当赌注赢走了。",
            "npcReply": "考官看着你拿回来的宝石和赢来的金币陷入沉思。‘你用极其离谱的社交诈骗完全取代了潜行技能。’",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "E": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "外卖员制服",
              "斗地主赢宝石"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其擅长利用社交牛逼症完成盗窃的抽象大师"
          }
        ]
      },
      {
        "id": "halfling_rogue_distraction",
        "targetId": "guild_rogue",
        "title": "致命的魔术",
        "scene": "你在闹市中试图偷取一名贪婪商人的账本，但他身边围满了保镖。你需要制造一场混乱来转移注意力。",
        "prompt": "你打算如何吸引人群的目光？",
        "options": [
          {
            "id": "A",
            "text": "你假装在路过时平地摔倒，双手在空中乱挥，刚好拉掉了旁边香料摊的遮雨棚，结果香料随风飞扬，整条街的保镖和商人都开始疯狂打喷嚏流眼泪。",
            "npcReply": "‘这意外的连锁反应简直是天然的烟雾弹。’",
            "scoreDelta": {
              "dex": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_rogue": 3
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "香料烟雾",
              "意外摔倒"
            ],
            "outcomeTone": "合格",
            "branchHint": "利用平地摔制造大规模自然混乱的幸运盗贼"
          },
          {
            "id": "B",
            "text": "你冷静地在角落点燃一颗小烟雾弹，同时用吹箭将一颗石子射中街角拴马的绳索，惊起的马匹瞬间吸引了所有守卫跑过去救援。",
            "npcReply": "‘极其专业的声东击西，战术规划得滴水不漏。’",
            "scoreDelta": {
              "dex": 3,
              "int": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "石子惊马",
              "声东击西"
            ],
            "outcomeTone": "偏离",
            "branchHint": "战术缜密、擅长布置引诱的技术流神偷"
          },
          {
            "id": "C",
            "text": "你直接大喊“着火啦！”，然后把隔壁的面包车推向人群，制造踩踏混乱，自己则趁机抢下商人的钱袋扭头就跑。",
            "npcReply": "‘虽然拿到了东西，但这种枉顾人命的做法极其恶劣。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_rogue": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "制造恐慌",
              "抢夺逃跑"
            ],
            "outcomeTone": "危险",
            "branchHint": "为了利益不择手段制造混乱的冷酷恶徒"
          },
          {
            "id": "D",
            "text": "你突然跳上台子，表演起了“生吞活蛇”和“平底锅敲头”，并用极度魔性的嗓音高歌，周围的保镖全都被你这神经病一样的行为看傻了眼。",
            "npcReply": "‘你成功用你的抽象行为让整条街的人陷入了宕机。’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "街头魔术",
              "魔性歌喉"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "用纯粹的社交艺术和怪诞表演控场的乐子人"
          }
        ]
      },
      {
        "id": "halfling_rogue_traps",
        "targetId": "guild_rogue",
        "title": "机关重重",
        "scene": "你潜入了古代陵墓的密室，地板上密密麻麻全是压力触板。稍有不慎就会被万箭穿心。",
        "prompt": "你打算如何通过这片布满陷阱的区域？",
        "options": [
          {
            "id": "A",
            "text": "你闭着眼睛大步往前走，结果极其神奇地，你因为鞋带松了低头去系、或者弯腰捡硬币，连续四次以极其诡异的姿势躲过了弹出的飞刃和毒针。",
            "npcReply": "‘死神在你头顶擦肩而过，你却只关心你鞋带上的蝴蝶结。’",
            "scoreDelta": {
              "dex": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_rogue": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "闭眼大步",
              "躲避飞刃"
            ],
            "outcomeTone": "合格",
            "branchHint": "强运护体、在致命陷阱中散步的天选之子"
          },
          {
            "id": "B",
            "text": "你拿出一支粉笔，在墙壁上进行复杂的重力和力学计算，接着用一根铁丝在两秒内解除了最核心机关的连动齿轮，让整片区域安全停摆。",
            "npcReply": "‘精湛的技术，你把古代陵墓的陷阱玩得像拼图一样简单。’",
            "scoreDelta": {
              "int": 3,
              "dex": 2
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "齿轮解除",
              "力学计算"
            ],
            "outcomeTone": "偏离",
            "branchHint": "技艺高超、凡事讲求逻辑的工程流大盗"
          },
          {
            "id": "C",
            "text": "你转过身拉过来旁边瑟瑟发抖的同伙，大声说：“你走前面探路，我给你提供精神支持！”打算用人肉排雷的方式通过这片陷阱。",
            "npcReply": "‘极其无耻的行为，探险界最令人不齿的行径。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_rogue": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "同伙探路",
              "人肉排雷"
            ],
            "outcomeTone": "危险",
            "branchHint": "视他人生命如草芥的极度利己主义者"
          },
          {
            "id": "D",
            "text": "你从包里掏出一把大号弹弓，把口袋里的硬面饼和坚果当成弹药疯狂发射，把地上的触板全触发了个遍，现场登时万箭齐发好不热闹。",
            "npcReply": "‘你把致命陷阱现场搞成了烟花大会，但不得不说，这挺有视觉效果。’",
            "scoreDelta": {
              "dex": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_ranger": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "弹弓触发",
              "面饼排雷"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "用弹弓和食物制造混乱并主动触发机关的非主流狂徒"
          }
        ]
      },
      {
        "id": "halfling_rogue_interrogation",
        "targetId": "guild_rogue",
        "title": "审讯室的风波",
        "scene": "你不小心被城镇卫兵抓住了，他们把你关在审讯室里，指控你偷了城主的假发。",
        "prompt": "卫兵队长正盯着你，你打算如何脱身？",
        "options": [
          {
            "id": "A",
            "text": "你耸耸肩摊开手，正准备解释，结果身上的大衣突然滑落，露出了你里面穿着的卫兵队长遗失多年的‘幸运红秋裤’。队长看到后老泪纵横，一把抱住你直呼失散多年的兄弟。",
            "npcReply": "‘这意外的认亲场面让在场的所有卫兵都惊呆了。’",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_rogue": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "红秋裤认亲",
              "化险为夷"
            ],
            "outcomeTone": "合格",
            "branchHint": "靠离谱的误会与运气化敌为友的交际花"
          },
          {
            "id": "B",
            "text": "你冷静地利用手腕骨骼缩骨功，神不知鬼不觉地解开了手铐，在队长起身的瞬间将其反锁在审讯椅上，接着从窗户滑滑梯逃走。",
            "npcReply": "‘极其干净利落的脱逃，身手极其利索。’",
            "scoreDelta": {
              "dex": 3,
              "int": 1
            },
            "mbtiDelta": {
              "I": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "手铐反锁",
              "翻窗脱逃"
            ],
            "outcomeTone": "偏离",
            "branchHint": "掌握精湛缩骨与反锁技巧的技术流神偷"
          },
          {
            "id": "C",
            "text": "你立刻掏出伪造的城主亲笔信，严肃指控审讯你的卫兵其实是外国间谍，并扬言如果不立刻放了你，就让城主把他们的九族全部发配去挖矿。",
            "npcReply": "‘极其嚣张的行政欺诈，如果被拆穿你可能会被吊死。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_rogue": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "伪造公文",
              "倒打一耙"
            ],
            "outcomeTone": "危险",
            "branchHint": "胆大包天、擅长用假公文威胁执法人员的骗子"
          },
          {
            "id": "D",
            "text": "你把城主的假发戴在自己的膝盖上，然后极其认真地和膝盖玩起了木偶戏，试图向卫兵证明假发其实是一个独立的生命体，它有自己的主权和人权。",
            "npcReply": "‘队长看着你的疯癫表演，决定把你转送到疯人院而不是监狱。’",
            "scoreDelta": {
              "cha": 2,
              "int": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "膝盖木偶戏",
              "假发主权"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "用装疯卖傻和荒诞逻辑让执法人员彻底无语的戏剧大师"
          }
        ]
      },
      {
        "id": "halfling_rogue_blackmarket",
        "targetId": "guild_rogue",
        "title": "黑市交易",
        "scene": "你拿着刚刚得手的绝密情报来到地下黑市，打算卖给情报贩子，但对方突然想黑吃黑，拔出了淬毒的匕首。",
        "prompt": "面对黑吃黑的威胁，你的应对是：",
        "options": [
          {
            "id": "A",
            "text": "你吓得往后一跳，正好踩翻了旁边装着活螃蟹的木桶，几十只巨大的深海螃蟹满地乱爬，其中一只精准地夹住了情报贩子的裤裆，疼得他当场丢掉匕首大声惨叫。",
            "npcReply": "‘这意外的物理助攻简直是命运的杰作。’",
            "scoreDelta": {
              "dex": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_rogue": 3
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "螃蟹裤裆",
              "意外反杀"
            ],
            "outcomeTone": "合格",
            "branchHint": "运气好到连路过的小动物都会帮他反杀敌人的天命之子"
          },
          {
            "id": "B",
            "text": "你冷静地一个后撤步，从怀中摸出几枚铁蒺藜撒在地上，接着双手迅速打响指释放闪光术，趁着对方被闪瞎的一瞬间夺过淬毒匕首，反抵在对方的脖子上。",
            "npcReply": "‘教科书般的近战防守反击，动作流畅无比。’",
            "scoreDelta": {
              "dex": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "I": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "闪光反击",
              "匕首夺取"
            ],
            "outcomeTone": "偏离",
            "branchHint": "战术反应极快、近战技巧过硬的实用派盗贼"
          },
          {
            "id": "C",
            "text": "你大喊：“别杀我！其实我是这间酒馆老板的私生子，你杀了我，他会把你的底细全部报告给暗影议会！”以此作为要挟。",
            "npcReply": "‘漏洞百出的谎言，反而让对方觉得你极其软弱可欺。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_rogue": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "私生子谎言",
              "仓皇要挟"
            ],
            "outcomeTone": "危险",
            "branchHint": "在生死危机面前智商下线、满嘴谎言的胆小鬼"
          },
          {
            "id": "D",
            "text": "你从包里掏出一根巨大的火腿肠塞进对方嘴里，拍着他的肩膀热情地大喊：“哥们，买情报送至尊烤肠！咱们先吃饱，吃饱了再来讨论谁黑谁！”",
            "npcReply": "‘这猝不及防的美食安利直接让情报贩子的杀气土崩瓦解。’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "烤肠社交",
              "杀气消散"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "能把生死决斗现场瞬间变成零食分享会的奇葩吃货"
          }
        ]
      },
      {
        "id": "halfling_rogue_escape",
        "targetId": "guild_rogue",
        "title": "屋顶狂奔",
        "scene": "you被十几个精锐刺客在屋顶上围追堵截，前方是三十米宽的街区裂口，下方是湍急的护城河。",
        "prompt": "刺客步步逼近，你打算如何逃脱？",
        "options": [
          {
            "id": "A",
            "text": "你闭着眼睛往前一跳，正好有一辆装满干草的马车从下方的街道飞驰而过，你完美地落在干草堆里，顺便带走了一个苹果，只留下一众在屋顶凌乱的刺客。",
            "npcReply": "‘别人跳楼是要命，你跳楼是吃下午茶，太不科学了。’",
            "scoreDelta": {
              "dex": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_rogue": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "干草车逃生",
              "完美降落"
            ],
            "outcomeTone": "合格",
            "branchHint": "物理法则在你的幸运面前完全不生效的奇迹盗贼"
          },
          {
            "id": "B",
            "text": "你迅速用手中的钩爪飞索挂住对面屋檐的滑轮，在刺客包围前利用抛物线飞速滑跃至对街屋顶，顺手切断绳索，让后面的追兵无路可追。",
            "npcReply": "‘动作精准，道具使用得心应手，极其老练。’",
            "scoreDelta": {
              "dex": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_rogue": 2,
              "guild_ranger": 1
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "钩爪滑行",
              "切断飞绳"
            ],
            "outcomeTone": "偏离",
            "branchHint": "精通各种逃生道具与物理滑行的技巧流大盗"
          },
          {
            "id": "C",
            "text": "你立刻跪在地上，把沾满尘土的赃物拿出来大喊：“这是你们要的情报！我把同伙的藏身处也写在上面了！求求你们别杀我！”",
            "npcReply": "‘你可耻的背叛甚至让刺客们都对你露出了鄙夷的目光。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_rogue": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "出卖同伙",
              "赃物奉上"
            ],
            "outcomeTone": "危险",
            "branchHint": "为了苟活不惜出卖所有战友和机密的极度危险小人"
          },
          {
            "id": "D",
            "text": "你从包里掏出一大包强力地精胶水撒在自己脚底，然后直接顺着斜平的屋顶像滑雪一样冲了下去，一路火花带闪电，踩着晾衣绳滑到了城外。",
            "npcReply": "‘这极具观赏性的极限运动式逃生，连追你的刺客都想给你打分。’",
            "scoreDelta": {
              "dex": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "地精胶水滑行",
              "屋顶冲浪"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "喜欢用极限杂耍和怪异道具进行华丽逃生的艺术大师"
          }
        ]
      },
      {
        "id": "halfling_rogue_heirloom",
        "targetId": "guild_rogue",
        "title": "传家宝的秘密",
        "scene": "you成功潜入了法师塔的顶层，找到了目标传家宝——一个会说话的魔法水晶球。但它一旦被移动就会发出震耳呜咽的尖叫。",
        "prompt": "如何神不知鬼不觉地带走这个尖叫的球？",
        "options": [
          {
            "id": "A",
            "text": "你平地摔倒，嘴里的半块黏性太妃糖刚好飞了出去，精准地糊在水晶球的魔法发声嘴上。尖叫瞬间变成了黏稠的呜咽声，你顺手将它塞进包里带走。",
            "npcReply": "‘用物理太妃糖封印上古魔法水晶球，真有你的。’",
            "scoreDelta": {
              "dex": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_rogue": 3
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "太妃糖封印",
              "物理消音"
            ],
            "outcomeTone": "合格",
            "branchHint": "靠嘴里的零食和好运解决高难度魔法防盗机关的奇才"
          },
          {
            "id": "B",
            "text": "你冷静地利用隔音结界卷轴，在水晶球周围布置了一个小型的真空静音力场，彻底隔绝了声波的传播，接着从容将其收入隔魔袋中。",
            "npcReply": "‘非常规范且高效的魔法应对，毫无破绽。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_rogue": 2,
              "guild_warlock": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "静音力场",
              "魔法防盗"
            ],
            "outcomeTone": "偏离",
            "branchHint": "工具准备充分、懂得运用基础法术知识的学者型盗贼"
          },
          {
            "id": "C",
            "text": "你直接拔出匕首，指着看守水晶球的法术学徒大喊：“不想这玩意被砸碎就给我闭嘴！还有，把你身上值钱的魔法道具全部交出来！”",
            "npcReply": "‘这已经不是偷窃了，这是极其愚蠢且危险的入室抢劫。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_rogue": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "入室抢劫",
              "匕首威胁"
            ],
            "outcomeTone": "危险",
            "branchHint": "在潜入行动中因为冲动滑向暴力犯罪的亡命徒"
          },
          {
            "id": "D",
            "text": "你拿出一大包棉花和胶带，把水晶球裹成了一个巨大的毛绒玩具，然后抱着它在走廊上大摇大摆地走，逢人就说这是你最新的会唱歌的‘尖叫枕头’。",
            "npcReply": "‘你那极其自信且弱智的解释，居然让法师塔的学徒们以为你是个搞艺术的怪人。’",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "尖叫枕头",
              "毛绒裹挟"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其擅长把犯罪道具包装成无害乐器并公开招摇的戏剧大师"
          }
        ]
      }
    ],
    "guild_bard": [
      {
        "id": "halfling_bard_battle_cooking",
        "targetId": "guild_bard",
        "title": "战地食堂",
        "scene": "你们的小队被困在战壕里，士气极其低落。没有援军，没有音乐，只有极其难吃的硬面饼。作为队伍里的吟游诗人，你需要提振士气。",
        "prompt": "面对极其恶劣的条件，你如何发挥你的特长？",
        "options": [
          {
            "id": "A",
            "text": "你一脚踢飞了没用的乐器，极其狂热地支起一口大铁锅，把硬面饼和野菜煮成了一锅极其香浓的乱炖。那极其致命的香味瞬间唤醒了所有人的野性。",
            "npcReply": "战友们喝完汤后像狂化了一样冲出战壕。‘对于半身人来说，一锅好汤就是最顶级的群体狂暴术。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "S": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "大锅乱炖",
              "群体狂暴术"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其擅长用高热量美食施展群体狂暴术的战地厨神"
          },
          {
            "id": "B",
            "text": "you掏出一支极其破旧的陶笛，极其深情地吹奏了一曲极其悲凉的《老妈的苹果派》。极其催泪的旋律让所有硬汉嚎啕大哭，誓死要打赢这场仗回家吃饭。",
            "npcReply": "你完美地用思乡之情完成了情绪操控。‘极其正统且极具杀伤力的情感共鸣。’",
            "scoreDelta": {
              "cha": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "N": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "悲凉陶笛",
              "老妈的苹果派"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其擅长用音乐精准打击战友泪腺的情感大师"
          },
          {
            "id": "C",
            "text": "你极其严肃地拿出一叠《战地资源优化报告》，论证‘高级指挥官需要消耗所有剩余肉干以维持决策能力’，然后当着饥肠辘辘的战友面把肉干吃得吧唧作响。",
            "npcReply": "你极其卑劣且厚颜无耻的贪污行为引发了哗变，你被战友们愤怒地扔出了战壕。‘极其令人作呕的官僚主义吸血鬼。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_bard": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "战地资源优化",
              "官僚主义贪污"
            ],
            "outcomeTone": "危险",
            "branchHint": "极其擅长用严密的学术伪装进行大规模战地摆烂的诡辩家"
          },
          {
            "id": "D",
            "text": "你觉得面饼太硬，于是极其欢乐地把它们当成飞盘，在战壕里和你的大黄狗玩起了极其弱智的抛接游戏，并发出极其极具感染力的杠铃般笑声。",
            "npcReply": "对面的敌军看着你们极度智障的欢乐互动，感到极其迷惑并停止了射击。‘你用纯粹的抽象行为达成了战地停火。’",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "E": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_ranger": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "面饼飞盘",
              "智障欢乐互动"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其擅长用极度智障的欢乐行为瓦解战场严肃气氛的奇葩"
          }
        ]
      },
      {
        "id": "halfling_bard_royal_banquet",
        "targetId": "guild_bard",
        "title": "皇家宴会的变奏",
        "scene": "你被邀请到国王的寿宴上表演。然而，你的鲁特琴在入场前被粗鲁的侍卫踩坏了，现在轮到你上台了。",
        "prompt": "在没有常规乐器的情况下，你如何完成表演？",
        "options": [
          {
            "id": "A",
            "text": "你一脚踢开碎裂的鲁特琴，极其熟练地抄起旁边桌上的两个纯银盘子和一把大汤勺，一边敲打着极其带感的半身人打饼节奏，一边用嘴模仿号角声，瞬间带嗨了全场贵族。",
            "npcReply": "‘国王笑得合不拢嘴，宣布这是他听过最接地气的皇家打击乐。’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "银盘打击乐",
              "口技号角"
            ],
            "outcomeTone": "合格",
            "branchHint": "临场反应极其敏锐、能把餐具变成乐器的节奏大师"
          },
          {
            "id": "B",
            "text": "你深吸一口气，开始用你那极具穿透力的美声唱腔无伴奏清唱一首《古帝国挽歌》，空灵优美的旋律在大殿内回荡，令所有贵族黯然神伤。",
            "npcReply": "‘完美的无伴奏清唱，纯粹的声乐艺术展现。’",
            "scoreDelta": {
              "cha": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "I": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "order": 1
            },
            "triggerTags": [
              "美声清唱",
              "帝国挽歌"
            ],
            "outcomeTone": "偏离",
            "branchHint": "基本功极其扎实、依靠纯声乐征服听众的艺术大师"
          },
          {
            "id": "C",
            "text": "你指着那个踩坏你乐器的侍卫，声泪俱下地控诉他是刺客派来破坏国王寿命的同党，要求立刻将他斩首，并向国王索要一千金币的心理损失费。",
            "npcReply": "‘你在宴会上大吵大闹，因涉嫌敲诈皇家卫兵被直接轰了出去。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_bard": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "当庭控告",
              "敲诈金币"
            ],
            "outcomeTone": "危险",
            "branchHint": "道德水准令人堪忧、在皇家宴会当面碰瓷的市井无赖"
          },
          {
            "id": "D",
            "text": "你当场跳进中央的奶油大蛋糕里，拿出一根香蕉当作话筒，合着油腻的奶油跳起了热烈欢快的“脱脂扭摆舞”，全场守卫目瞪口呆。",
            "npcReply": "‘你成功把高雅的皇家寿宴搞成了荒诞的滑稽马戏团。’",
            "scoreDelta": {
              "cha": 2,
              "dex": 2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "蛋糕热舞",
              "香蕉话筒"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "完全不顾皇家礼仪、用滑稽舞蹈娱乐大众的纯粹喜剧人"
          }
        ]
      },
      {
        "id": "halfling_bard_dragon_whisper",
        "targetId": "guild_bard",
        "title": "巨龙的安眠曲",
        "scene": "一只愤怒的红龙因为牙痛正在火冒三丈，准备烧毁附近的半身人村庄。你需要用歌声安抚它的情绪。",
        "prompt": "面对张开血盆大口的巨龙，你唱些什么？",
        "options": [
          {
            "id": "A",
            "text": "你顶着巨龙口中的烈焰气流，弹起鲁特琴，开始大声歌唱《红龙大牙医之歌》，歌词里详细描述了用薄荷水漱口和剔牙的方法，并且神迹般地让巨龙听懂了。",
            "npcReply": "‘巨龙听了你的歌，竟然乖乖躺下让你用平底锅帮它剔出了塞在牙缝里的巨魔骨头。’",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "good": 1
            },
            "triggerTags": [
              "牙医之歌",
              "红龙剔牙"
            ],
            "outcomeTone": "合格",
            "branchHint": "用歌声和牙医指南奇迹般平息恶龙怒火的机智乐手"
          },
          {
            "id": "B",
            "text": "你冷静地在百米外架起音浪魔法放大阵，用悠扬舒缓的魔力睡眠曲催眠巨龙，使其陷入沉睡，为村民撤离争取时间。",
            "npcReply": "‘标准的魔理法术控场，红龙的眼皮越来越沉。’",
            "scoreDelta": {
              "int": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_bard": 2,
              "guild_warlock": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "睡眠魔曲",
              "阵法放大"
            ],
            "outcomeTone": "偏离",
            "branchHint": "法术应用严谨、懂得阵法放大的法理吟游诗人"
          },
          {
            "id": "C",
            "text": "你拿出一张假的《红龙财产保险合同》，对巨龙说：“只要你把这个村庄毁了，你就得赔偿一百万金币！否则我们就去神界法庭起诉你！”",
            "npcReply": "‘红龙觉得你在羞辱它的智商，一口老火差点把你直接烤熟。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_bard": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "保险敲诈",
              "惹恼红龙"
            ],
            "outcomeTone": "危险",
            "branchHint": "脑子不清醒、试图用伪造合同去敲诈狂暴红龙的赌徒"
          },
          {
            "id": "D",
            "text": "你开始在红龙面前疯狂弹奏极其激烈的重金属摇滚，并高声呐喊“燃烧吧！火热的青春！”，结果不仅没安抚红龙，反而让红龙兴奋地跟着你的节奏一起喷火点头。",
            "npcReply": "‘你成功把灾难现场变成了地狱摇滚跨界演唱会。’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "重金属摇滚",
              "红龙点头"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "能把龙息危机当成炫丽舞台灯光进行摇滚演出的乐子人"
          }
        ]
      },
      {
        "id": "halfling_bard_tavern_brawl",
        "targetId": "guild_bard",
        "title": "酒馆音乐会",
        "scene": "酒馆里的客人们喝多了，开始互扔桌椅。老板求你用音乐平息这场混乱，否则酒馆就要被拆了。",
        "prompt": "你打算弹奏一首什么曲子来拯救酒馆？",
        "options": [
          {
            "id": "A",
            "text": "你站在吧台上弹起极其轻快幽默的《平地摔圆舞曲》，每当有人扔飞椅子，你的音乐刚好卡在椅子落地砸中人鼻子的滑稽节奏上，把斗殴变成了搞笑舞台剧。",
            "npcReply": "‘客人们听着音乐，打着打着自己笑出了声，架不攻自破。’",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "滑稽圆舞曲",
              "斗殴默剧"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其擅长利用幽默感和滑稽节奏瓦解暴力的社交鬼才"
          },
          {
            "id": "B",
            "text": "你深情款款地弹起宁静的和风催眠曲《微风森林的午后》，同时微不可察地在指尖施加了宁神法术，让躁动的情绪在音符中渐渐冷却下来。",
            "npcReply": "‘酒馆里的暴力气氛迅速缓和，客人们纷纷打哈欠回座。’",
            "scoreDelta": {
              "cha": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "I": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "order": 1
            },
            "triggerTags": [
              "宁神曲",
              "情绪冷却"
            ],
            "outcomeTone": "偏离",
            "branchHint": "精通音乐心理学与安抚神术的正统吟游诗人"
          },
          {
            "id": "C",
            "text": "你弹起一首《黑帮分赃大狂欢》，大声歌唱“谁打赢了今晚的酒钱算老板的！”，试图通过把矛盾转嫁给老板来解决问题。",
            "npcReply": "‘愤怒的老板直接用扫帚把你和客人们一起轰了出去。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_bard": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "煽动打斗",
              "老板买单"
            ],
            "outcomeTone": "危险",
            "branchHint": "唯恐天下不乱、坑害雇主利益的无良乐手"
          },
          {
            "id": "D",
            "text": "你把鲁特琴当作网球拍，一边大声唱着《击球歌》，一边飞速地把飞过来的酒杯和椅子精准地反弹击碎，在漫天飞扬的酒水花雨中完成了谢幕。",
            "npcReply": "‘虽然酒馆还是被砸了，但这网球拍接椅子确实帅炸了。’",
            "scoreDelta": {
              "dex": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "鲁特琴网球",
              "花式谢幕"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "把平息混乱变成暴力杂耍和花式击球表演的乐子人"
          }
        ]
      },
      {
        "id": "halfling_bard_negotiation",
        "targetId": "guild_bard",
        "title": "阵前谈判",
        "scene": "两个交战的半身人家族在边界上对峙，战争一触即发。你作为和平使者站在两军之间。",
        "prompt": "你打算用什么话术或表演阻止这场内战？",
        "options": [
          {
            "id": "A",
            "text": "你当场支起烤架，开始烤制香气冲天、肥美多汁的烤香肠，并在喇叭里喊道：“别打了！今天是我家香肠店开业大酬宾，谁来吃都打折！先吃饱，吃饱了打架才有力气嘛！”",
            "npcReply": "‘两边的士兵闻到烤肉味，面面相觑，最后全都丢下武器围着烤架吃了起来。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "good": 2
            },
            "triggerTags": [
              "烤香肠谈判",
              "开业大酬宾"
            ],
            "outcomeTone": "合格",
            "branchHint": "善于利用美食和日常生活常识化解政治危机的厨神"
          },
          {
            "id": "B",
            "text": "你冷静地搬出两家家族的族谱，用铿锵有力的语调向他们阐述两家在一百年前其实是同一个祖先的远房表亲，指责战争是手足相残。",
            "npcReply": "‘你严密的族谱论证和悲悯的情怀打动了双方的族长。’",
            "scoreDelta": {
              "int": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "N": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "order": 1
            },
            "triggerTags": [
              "族谱论证",
              "同根同源"
            ],
            "outcomeTone": "偏离",
            "branchHint": "擅长运用历史渊源和情感道德进行调停的谈判专家"
          },
          {
            "id": "C",
            "text": "你当场收受了A家族的好处，转而大声指责B家族是卑鄙的偷鸡贼，鼓动双方立刻开战，并承诺战后帮A家族写一首‘正义的胜利之歌’。",
            "npcReply": "‘你的卑劣行为被现场拆穿，被两家人合力绑在树上打。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_bard": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "收受贿赂",
              "煽动战争"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度自私、为了个人利益不惜挑起战争的无耻贩子"
          },
          {
            "id": "D",
            "text": "你掏出两个扩音大喇叭，戴上特制的红鼻头，开始站在两军中间疯狂表演“单轮车骑狗”和“小丑扔苹果”，滑稽的场面直接把两边庄严的军官给看傻了。",
            "npcReply": "‘两边的士兵看你耍杂技看得直鼓掌，根本想不起来要打架。’",
            "scoreDelta": {
              "dex": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_ranger": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "小丑杂耍",
              "骑狗表演"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "用极度滑稽的马戏团表演彻底消解两军严肃杀气的乐子人"
          }
        ]
      },
      {
        "id": "halfling_bard_ghost_haunting",
        "targetId": "guild_bard",
        "title": "幽灵的演唱会",
        "scene": "you在一座废弃的古堡过夜，半夜一个满脸怨气的怨灵飘了出来，哭诉它生前没有听到过完美的协奏曲。",
        "prompt": "为了不让幽灵把你带走，你决定：",
        "options": [
          {
            "id": "A",
            "text": "你大惊失色地往后一摔，刚好坐在了你的备用鲁特琴上，发出一声奇特的长音，同时你那受惊的大黄狗狂吠伴奏。这滑稽而独特的声响竟然极其神奇地契合了幽灵那挑剔的耳朵。",
            "npcReply": "‘幽灵听完这声‘狗吠鲁特琴’，大哭着表示这就是它想要的后现代协奏曲，满意地升天了。’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "狗吠鲁特琴",
              "幽灵升天"
            ],
            "outcomeTone": "合格",
            "branchHint": "用意外的杂音和狗吠神奇满足挑剔幽灵的幸运大师"
          },
          {
            "id": "B",
            "text": "你冷静地拿出魔法节拍器，调整呼吸，弹奏起巴哈式的古典协奏曲，用极其精准的指法和深邃的乐理知识完成了这场跨越生死的独奏。",
            "npcReply": "‘幽灵沉浸在完美的乐理和指法中，满意地闭上双眼消散了。’",
            "scoreDelta": {
              "cha": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "order": 1
            },
            "triggerTags": [
              "巴哈协奏曲",
              "完美指法"
            ],
            "outcomeTone": "偏离",
            "branchHint": "乐理功底极深、精通正统古典器乐的学院派乐手"
          },
          {
            "id": "C",
            "text": "你立刻掏出伪造的《圣光驱魔许可证》，指着幽灵大喊：“这里是国家级历史保护建筑！闲杂幽灵禁止逗留！不走我就叫圣骑士来拆了你的骨灰盒！”",
            "npcReply": "‘幽灵被你的粗暴威胁激怒，瞬间狂暴，整夜在城堡里追杀你。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_bard": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "假驱魔证",
              "骨灰盒威胁"
            ],
            "outcomeTone": "危险",
            "branchHint": "满嘴胡言、用假证件恐吓狂暴灵体的法棍"
          },
          {
            "id": "D",
            "text": "你用两根汤勺敲打着你的骷髅汤锅，开始现场教幽灵大跳“幽灵桑巴舞”，并在舞曲高潮时把蜡烛顶在头上转圈，现场气氛极其诡异且热烈。",
            "npcReply": "‘怨灵跟着你跳了一夜的桑巴，最后因为太累主动回到了画框里。’",
            "scoreDelta": {
              "cha": 2,
              "dex": 2
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "幽灵桑巴",
              "蜡烛转圈"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "能把阴森恐怖的幽灵出没现场变成大型迪厅的抽象大师"
          }
        ]
      },
      {
        "id": "halfling_bard_epic_ballad",
        "targetId": "guild_bard",
        "title": "史诗的终章",
        "scene": "你需要创作一首史诗歌谣来纪念小队的冒险，但队友们觉得你之前的草稿把他们写得太蠢了（比如写骑士骑着大黄狗摔进泥坑）。",
        "prompt": "面对队友的集体抗议，你打算如何润色这首史诗？",
        "options": [
          {
            "id": "A",
            "text": "你把原稿里的“摔进泥坑”改成了“为了躲避美杜莎的石化光线，以大智大勇之姿俯冲卧倒在神圣的泥泞大地中”，瞬间把滑稽行为升华成了史诗级的战术闪避。",
            "npcReply": "‘战友们听完热泪盈眶，纷纷拍手叫好表示这就是真实历史。’",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "N": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "修辞升华",
              "神圣卧倒"
            ],
            "outcomeTone": "合格",
            "branchHint": "擅长用各种春秋笔法和离谱润色讨好赞助商的文豪"
          },
          {
            "id": "B",
            "text": "你冷静地将冒险记录细分为“实战卷宗”和“艺术改编”两部分，用极其客观的纪实风格重新编纂了行军日志，并在末尾标注了每个动作的战术意图。",
            "npcReply": "‘极其严谨的文字记录，几乎可以直接当作军用教材。’",
            "scoreDelta": {
              "int": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "order": 1
            },
            "triggerTags": [
              "实战卷宗",
              "纪实文本"
            ],
            "outcomeTone": "偏离",
            "branchHint": "行文严谨、注重史实客观性的考据流史官"
          },
          {
            "id": "C",
            "text": "你对队友大喊：“这是艺术创作！你们这群没文化的土老帽懂不懂什么叫艺术高于生活？不让我写，我就去城里散布你们被地精追着打的八卦！”",
            "npcReply": "‘你极其恶劣的威胁态度引发了众怒，被队友在当晚的营地里狠揍了一顿。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_bard": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "当面争吵",
              "散布八卦"
            ],
            "outcomeTone": "危险",
            "branchHint": "态度蛮横、用队友隐私进行人身威胁和敲诈的黑心写手"
          },
          {
            "id": "D",
            "text": "你干脆把史诗改成了一首节奏极其魔性的搞笑儿歌，副歌部分是高频重复的“大黄狗，泥坑跑，骑士脸上沾满了草！”，并且带头在小镇广场上扭起了屁股。",
            "npcReply": "‘这首神曲在几天内洗脑了整座城市，队友们虽然觉得丢脸但不得不承认它太火了。’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "洗脑儿歌",
              "广场热舞"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "喜欢用极具洗脑和滑稽属性的魔性音乐解构一切严肃史诗的鬼才"
          }
        ]
      }
    ],
    "guild_ranger": [
      {
        "id": "halfling_ranger_steed",
        "targetId": "guild_ranger",
        "title": "狗骑士的冲锋",
        "scene": "作为半身人游侠，你的专属坐骑是一只体型巨大的圣伯纳犬。在一次突袭行动中，前方出现了由全副武装的人类重装步兵组成的盾墙。你们必须突破这道防线。",
        "prompt": "面对这种体型上极其悬殊的战斗，你如何指挥你的猎犬冲锋？",
        "options": [
          {
            "id": "A",
            "text": "你极其冷静地指挥猎犬利用底盘极低的优势滑铲过去，而你则极其敏捷地倒挂在狗肚皮底下，双手挥舞短剑，极其精准地割断了所有重装步兵的裤腰带。",
            "npcReply": "盾墙瞬间因为集体提裤子而土崩瓦解。‘极其精准的下三路战术攻击。体型劣势成了你最致命的武器。’",
            "scoreDelta": {
              "dex": 3,
              "int": 1
            },
            "mbtiDelta": {
              "J": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_ranger": 3
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "倒挂狗肚皮",
              "割裤腰带"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其擅长利用体型优势进行下三路精准打击的战术游侠"
          },
          {
            "id": "B",
            "text": "你狂热地嚎叫着，指挥体型巨大的圣伯纳犬像一台发疯的推土机般直接用狗头撞开盾墙！而你自己则踩着狗背高高跃起，在半空中极其拉风地疯狂放箭。",
            "npcReply": "盾墙被硬生生撞碎，狗眼冒金星。‘极其狂野的战斗方式，你把坐骑当成了活体破城槌。’",
            "scoreDelta": {
              "str": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_ranger": 2,
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "狗头撞盾墙",
              "跃起放箭"
            ],
            "outcomeTone": "偏离",
            "branchHint": "战斗风格极其彪悍、把狗当成重型攻城武器的狂放骑士"
          },
          {
            "id": "C",
            "text": "你立刻吹响极其尖锐的警报哨，掏出一卷警戒线拉开，并极其惊恐地大喊：“小心！这狗得了极其高传染性的深渊狂犬病！谁碰谁死！”然后自己戴上防毒面具先溜了。",
            "npcReply": "全副武装的人类步兵被你极其逼真的生化危机警告吓得四散奔逃。‘极度无耻但极其有效的战术欺诈，你连狗都骗。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_ranger": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "深渊狂犬病谎言",
              "生化危机欺诈"
            ],
            "outcomeTone": "危险",
            "branchHint": "极其擅长利用生化恐吓和战术谎言瓦解敌军的骗子"
          },
          {
            "id": "D",
            "text": "你极其从容地从包里掏出一根极其巨大的恐龙骨头，用尽全力抛向人类盾墙的正后方。你的猎犬瞬间双眼血红，为了抢骨头直接把整排步兵撞飞到了天上。",
            "npcReply": "考官看着满地找牙的人类步兵陷入沉默。‘你这不是冲锋，你这是在利用吃货的本能进行物理清场。’",
            "scoreDelta": {
              "cha": 2,
              "int": 2
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "扔恐龙骨头",
              "吃货物理清场"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "非常善于利用动物本能进行极其抽象的大规模物理破坏的奇葩"
          }
        ]
      },
      {
        "id": "halfling_ranger_beast_tame",
        "targetId": "guild_ranger",
        "title": "狂暴魔兽",
        "scene": "一只罕见的狮鹫在森林里受了伤，极度狂躁，任何试图接近它的人都会被它的利爪撕碎。",
        "prompt": "作为游侠，你如何驯服这只凶猛的猛禽？",
        "options": [
          {
            "id": "A",
            "text": "你悄悄滑行过去，当狮鹫回头怒吼时，你手一抖，嘴里的半块奶油蛋糕正好甩进了它的嗓子眼。狮鹫被这前所未见的美味甜食塞住了喉咙，瞬间闭着眼流露出陶醉的表情。",
            "npcReply": "‘这头骄傲的猛禽就这么被你的下午茶点心给彻底收买了。’",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_ranger": 3
            },
            "alignmentDelta": {
              "good": 1
            },
            "triggerTags": [
              "蛋糕喂养",
              "甜食收买"
            ],
            "outcomeTone": "合格",
            "branchHint": "运气逆天、用随身甜点瞬间融化野兽狂暴杀气的乐天派"
          },
          {
            "id": "B",
            "text": "你冷静地利用动物语言药水与它进行低频共振沟通，用双手沉稳地抚平它受伤的羽翼，并熟练地用夹板和绷带处理了它骨折的翅膀。",
            "npcReply": "‘狮鹫感受到了你纯粹的善意和极高超的医术，安静了下来。’",
            "scoreDelta": {
              "wis": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "I": 1,
              "F": 1
            },
            "affinityDelta": {
              "guild_ranger": 2
            },
            "alignmentDelta": {
              "empathy": 1
            },
            "triggerTags": [
              "动物沟通",
              "伤口包扎"
            ],
            "outcomeTone": "偏离",
            "branchHint": "精通兽医学与自然法术、驯兽手段十分专业的正统游侠"
          },
          {
            "id": "C",
            "text": "你躲在十米外，用涂满烈性麻药的弩箭对准狮鹫的眼睛连续射击，计划等它彻底昏死后拔光它身上所有值钱的魔法羽毛拿去倒卖。",
            "npcReply": "‘你残忍且贪婪的行为彻底激怒了森林守护者，受到了反噬。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_ranger": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "麻醉偷袭",
              "羽毛倒卖"
            ],
            "outcomeTone": "危险",
            "branchHint": "为了利益残害珍惜动物、手段低劣的偷猎者"
          },
          {
            "id": "D",
            "text": "你把自己裹在一层厚厚的大黄狗毛皮里，假装自己是一只刚出生的胖狮鹫，在地上滚来滚去并发出极其惨烈的叽叽尖叫，试图让狮鹫产生母爱。",
            "npcReply": "‘受伤的狮鹫用看智障的眼神看着你在地上打滚，最后嫌弃地飞走了。’",
            "scoreDelta": {
              "cha": 2,
              "dex": 2
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "狮鹫伪装",
              "地滚叽叽叫"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "行为极度滑稽、试图用抽象伪装去唤醒魔兽母爱的奇葩"
          }
        ]
      },
      {
        "id": "halfling_ranger_tracking",
        "targetId": "guild_ranger",
        "title": "迷雾森林的追踪",
        "scene": "一伙盗贼绑架了村里的厨师并逃入了终年大雾的迷雾森林。地上的足迹已经被落叶完全覆盖。",
        "prompt": "你如何在这片毫无线索的迷雾中追踪敌人？",
        "options": [
          {
            "id": "A",
            "text": "你闭着眼让大黄狗在前面引路，结果大黄狗因为追踪一只路过的肥野兔而偏离方向，带着你直接撞塌了一面看似天然其实是障眼法的灌木墙，正好撞翻了正在吃午餐的盗贼团伙。",
            "npcReply": "‘这意外的超车简直让盗贼们怀疑人生，你们竟然从天而降。’",
            "scoreDelta": {
              "wis": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_ranger": 3
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "兔子导航",
              "灌木破袭"
            ],
            "outcomeTone": "合格",
            "branchHint": "靠坐骑捕猎本能和逆天运气降维打击敌人伪装的强运骑士"
          },
          {
            "id": "B",
            "text": "你俯下身仔细检查枯叶上被踩断的微小叶柄与泥土微弱的酸碱度变化，并根据风向吹散迷雾的规律，精确推算出盗贼逃跑的抛物线方位。",
            "npcReply": "‘极其专业的荒野侦察技术，足迹分析得令人叹为观止。’",
            "scoreDelta": {
              "wis": 3,
              "int": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_ranger": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "微观追踪",
              "风向推算"
            ],
            "outcomeTone": "偏离",
            "branchHint": "分析极其严密、擅长各种微观荒野线索追踪的硬核游侠"
          },
          {
            "id": "C",
            "text": "你嫌迷雾太大太冷，直接在森林边缘放了一把火试图逼盗贼出来，结果火势失控，不仅没熏出盗贼，还差点把整片森林和里面的村民全烧光。",
            "npcReply": "‘你鲁莽纵火的行为严重危害了林区生态和人质安全，性质极度恶劣。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_ranger": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "森林纵火",
              "失控火灾"
            ],
            "outcomeTone": "危险",
            "branchHint": "做事不计后果、用毁灭性手段危害生态和队友的安全员"
          },
          {
            "id": "D",
            "text": "你拿出一大袋发酵的蓝干酪，大摇大摆地走在大路中央高声大喊：“送外卖了！有加急的臭豆腐和蓝乳酪！不来拿就退单了！”用极其臭的味道熏出敌人。",
            "npcReply": "‘这恐怖的臭气硬生生把潜伏在暗处的盗贼们给熏得口吐白沫爬了出来。’",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "臭乳酪诱惑",
              "外卖大喊"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "喜欢用化学杀伤级别的食物气味逼敌方主动投降的抽象奇葩"
          }
        ]
      },
      {
        "id": "halfling_ranger_archery_contest",
        "targetId": "guild_ranger",
        "title": "神射手对决",
        "scene": "you参加了精灵举办的御前射箭大赛。靶子放在两百步开外，而且正好有一股强烈的侧风。高傲的精灵射手已经命中了靶心。",
        "prompt": "轮到你了，你打算如何射出这一箭？",
        "options": [
          {
            "id": "A",
            "text": "你刚搭上箭，旁边一只路过的大蜜蜂正好蛰了你的屁股，你手一抖，箭矢以极其离谱的曲线飞了出去，在半空中被狂风一吹，居然极其神奇地砸中了靶心正中央，还把精灵的箭劈成了两半。",
            "npcReply": "‘精灵裁判看着断成两半的箭，眼睛都快瞪出来了，这不符合流体力学！’",
            "scoreDelta": {
              "dex": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_ranger": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "蜜蜂助攻",
              "劈箭靶心"
            ],
            "outcomeTone": "合格",
            "branchHint": "用不可思议的失误达成因果律必中的强运游侠"
          },
          {
            "id": "B",
            "text": "你冷静地捡起一片枯叶测试侧风风速，并在短弓的弦上微调拉力，射出一记完美的弧线吊射，精准穿过强风流，命中了靶心边缘。",
            "npcReply": "‘极其扎实的风速计算与吊射技巧，无可挑剔。’",
            "scoreDelta": {
              "dex": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_ranger": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "侧风修正",
              "完美吊射"
            ],
            "outcomeTone": "偏离",
            "branchHint": "技术扎实、深谙抛物线与风向规律的技术流弓箭手"
          },
          {
            "id": "C",
            "text": "你趁精灵不注意，在自己的箭头上涂抹了烈性胶水，然后当众把靶子直接搬到自己面前十厘米处射击，声称自己“缩短了考核周期以节约时间”。",
            "npcReply": "‘你把作弊当成了创新，被精灵女皇宣布终身禁赛。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_ranger": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "作弊搬靶",
              "胶水箭头"
            ],
            "outcomeTone": "危险",
            "branchHint": "毫无体育精神、在严肃赛事上公然作弊的老千"
          },
          {
            "id": "D",
            "text": "你拿出一根极其粗壮的弩炮火箭，把它塞进短弓里，大声呐喊：“大就是好！这就是半身人短弓的完全体！”然后伴随着轰鸣爆炸，把对面的箭靶和精灵的帐篷一起炸飞了。",
            "npcReply": "‘精灵们从废墟里爬出来，宣布你被直接取消资格。’",
            "scoreDelta": {
              "str": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "火箭轰击",
              "炸毁帐篷"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "喜欢用爆炸火力代替精准射击的极端热兵器狂徒"
          }
        ]
      },
      {
        "id": "halfling_ranger_night_watch",
        "targetId": "guild_ranger",
        "title": "寂静之夜",
        "scene": "you在守夜时，发现营地周围的灌木丛里有数双绿油油的眼睛在闪烁，一群恐狼正在悄悄包围你们。",
        "prompt": "在不惊醒熟睡队友的前提下，你如何处理这些狼群？",
        "options": [
          {
            "id": "A",
            "text": "你准备吹哨，结果正好被地上的树枝绊倒，整个人往前一扑，刚好把手里的吃剩的特大号脆皮烤猪蹄精准地砸进了狼王的嘴里。狼王尝到甜头，眼睛发亮，叼着猪蹄带着小弟心满意足地撤了。",
            "npcReply": "‘这意外的投喂直接收买了野兽，省了一场恶战。’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_ranger": 3
            },
            "alignmentDelta": {
              "good": 1
            },
            "triggerTags": [
              "投喂猪蹄",
              "平地摔野兽"
            ],
            "outcomeTone": "合格",
            "branchHint": "运气逆天、用食物封口狼王的幸运值保镖"
          },
          {
            "id": "B",
            "text": "你冷静地从怀中掏出两枚“静音烟幕弹”丢在空地上，接着手持静音弩，借助阴影遮蔽将三只打头的恐狼瞬间射杀，全过程没有发出一丝声响。",
            "npcReply": "‘干净利落的暗杀防守，守护了营地的安宁。’",
            "scoreDelta": {
              "dex": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_ranger": 2,
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "静音暗杀",
              "弩箭射杀"
            ],
            "outcomeTone": "偏离",
            "branchHint": "暗夜潜伏技巧极高、冷酷无声消灭威胁的技术游侠"
          },
          {
            "id": "C",
            "text": "你大惊失色，直接点燃了所有的帐篷来当火把驱狼，并且用大喇叭疯狂高喊“狼来啦！”，结果狼跑了，队友却差点被大火全部烧焦。",
            "npcReply": "‘你极其弱智且惊慌失措的处理方式让营地陷入了灾难。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_ranger": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "烧毁帐篷",
              "惊慌乱喊"
            ],
            "outcomeTone": "危险",
            "branchHint": "遇事极易恐慌、处理方式极具破坏性的猪队友"
          },
          {
            "id": "D",
            "text": "你吹响特制的“狼皮笛”，披上狼皮，直接加入恐狼的队伍，学着狼嚎在林子里和恐狼一起排着队玩起了贪吃蛇游戏，把狼王整得一脸懵逼。",
            "npcReply": "‘你成功用极其弱智的狼舞把整群恐狼的脑子忽悠瘸了。’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "狼嚎笛",
              "狼群贪吃蛇"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其喜欢用古怪甚至弱智的行为同化野兽的抽象大师"
          }
        ]
      },
      {
        "id": "halfling_ranger_giant_hunt",
        "targetId": "guild_ranger",
        "title": "巨人狩猎",
        "scene": "一个独眼巨人正在肆虐村庄的麦田。你和你的大黄狗是唯一能阻止他的战力，但他的体型是你的二十倍。",
        "prompt": "你打算如何利用地形和你的大黄狗击败独眼巨人？",
        "options": [
          {
            "id": "A",
            "text": "你把一根粗壮的绊马索系在狗尾巴上，骑着狗在巨人的两腿之间疯狂绕圈。巨人想要踩你们，却被绳索绊倒，整个人脸朝下砸在了石头上晕了过去。",
            "npcReply": "‘以小博大的经典，巨人直接被自己的体重给物理击晕了。’",
            "scoreDelta": {
              "dex": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_ranger": 3
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "套马索绕圈",
              "物理绊倒"
            ],
            "outcomeTone": "合格",
            "branchHint": "极具战术智慧、善于借助物理法则制裁强敌的狗骑士"
          },
          {
            "id": "B",
            "text": "你吹哨指挥大黄狗从侧翼吸引注意力，自己则用精准的强力弩箭，在八十米开外射中了独眼巨人的唯一眼睛，使其丧失视力，迫使其逃跑。",
            "npcReply": "‘极其沉着冷静的定点狙击，一击致命。’",
            "scoreDelta": {
              "dex": 3,
              "wis": 2
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_ranger": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "定点狙击",
              "侧翼袭扰"
            ],
            "outcomeTone": "偏离",
            "branchHint": "射击水平极其高超、讲求战术配合的传统游侠"
          },
          {
            "id": "C",
            "text": "你决定躲在草堆里装死，并顺便在背后偷走了队友藏在车里的纯金项链，打算等巨人把村子毁了之后拿去卖掉发财。",
            "npcReply": "‘你卑劣的逃跑和盗窃行为完全背叛了守卫的指责。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_ranger": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "临阵装死",
              "偷窃项链"
            ],
            "outcomeTone": "危险",
            "branchHint": "在守备任务中当临阵脱逃并洗劫同伴的无赖"
          },
          {
            "id": "D",
            "text": "你拿出一大盆奇臭无比的“地精大蒜汤”，骑着狗冲过去直接泼在巨人的脚趾缝里。巨人被这酸爽的刺痛和臭气熏得当场跪地抱脚大哭，连夜逃离了村子。",
            "npcReply": "‘你用这味道级别的物理生化武器，打出了成吨的精神伤害。’",
            "scoreDelta": {
              "cha": 3,
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
              "大蒜汤泼脚",
              "生化驱赶"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "擅长使用极其恶心且无下限的黑暗料理制服敌人的抽象派游侠"
          }
        ]
      },
      {
        "id": "halfling_ranger_herbalism",
        "targetId": "guild_ranger",
        "title": "解毒之草",
        "scene": "你的大黄狗在荒野中误食了有毒的浆果，正口吐白沫。你急需在一片长满各种相似植物的悬崖上找到解毒草。",
        "prompt": "面对陡峭的悬崖和各种迷惑性的植物，你打算：",
        "options": [
          {
            "id": "A",
            "text": "你慌乱中脚下一滑从悬崖上滚了下去，屁股刚好砸中了一棵极其罕见的‘圣蛇胆草’，直接把它压扁了，但也刚好让大黄狗闻到了被你压出来的汁液味道，一口舔干净，毒解了。",
            "npcReply": "‘你用屁股完成了全大陆最伟大的草药学发现，叹为观止。’",
            "scoreDelta": {
              "dex": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_ranger": 3
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "屁股压草",
              "平地摔解毒"
            ],
            "outcomeTone": "合格",
            "branchHint": "靠极端狗屎运平地摔压中解毒草的幸运主人"
          },
          {
            "id": "B",
            "text": "你冷静地利用攀爬索滑降至悬崖中段，仔细辨识植物叶片上的微小锯齿与气味特征，准确采集了三株‘绿冠解毒草’，当场用石块捣碎喂给大黄狗。",
            "npcReply": "‘标准的荒野急救，植物辨识学极其扎实。’",
            "scoreDelta": {
              "wis": 3,
              "int": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_ranger": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "攀爬采集",
              "草药捣碎"
            ],
            "outcomeTone": "偏离",
            "branchHint": "野外生存与本草辨识能力十分精湛的技术流游侠"
          },
          {
            "id": "C",
            "text": "你觉得悬崖太高太危险，决定直接在上面小便，试图用“童子尿解毒法”从上面浇下去，以此来拯救地下的猎犬。",
            "npcReply": "‘你愚蠢且极其恶心的行为不仅耽误了解毒时间，还严重侮辱了你的宠物。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_ranger": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "恶俗解毒",
              "耽误救援"
            ],
            "outcomeTone": "危险",
            "branchHint": "在宠物生死关头极度自私、使用极其荒谬恶心行为的无能者"
          },
          {
            "id": "D",
            "text": "你掏出一把铲子，直接把悬崖上的大片未知植物连着泥土一起全部铲进了特制的大汤锅里，加水乱煮，然后捏着鼻子把这锅绿油油的粘稠药糊灌进了狗嘴里。",
            "npcReply": "‘大黄狗喝完之后，毒是解了，但它的毛发变成了奇怪的荧光绿色。’",
            "scoreDelta": {
              "cha": 3,
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
              "chaotic": 2
            },
            "triggerTags": [
              "百草乱炖",
              "荧光毛色"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "喜欢用大乱炖和黑暗炼金术进行粗暴荒野急救的抽象派"
          }
        ]
      }
    ],
    "guild_warlock": [
      {
        "id": "halfling_warlock_pact",
        "targetId": "guild_warlock",
        "title": "欺诈的契约",
        "scene": "你正在与一名深渊领主进行契约谈判。他要求你用一半的灵魂换取他那毁灭性的黑暗魔法。如果不答应，他立刻就会把你烧成灰烬。",
        "prompt": "面对这种强买强卖的恶魔契约，你如何施展半身人的‘契约魔法’？",
        "options": [
          {
            "id": "A",
            "text": "你极其专业地戴上单片眼镜，翻开厚厚的《多元宇宙契约法典》，极其犀利地指出契约中关于“灵魂交付时间”的漏洞，硬生生把代价砍成了“在宇宙毁灭后的三个工作日内支付”。",
            "npcReply": "深渊领主被你极度严密的法律逻辑绕晕，竟然签了字。‘你是个极其可怕的法务术士，恶魔都在你的合同里吃了亏。’",
            "scoreDelta": {
              "int": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "T": 2,
              "J": 1
            },
            "affinityDelta": {
              "guild_warlock": 3
            },
            "alignmentDelta": {
              "order": 1,
              "control": 2
            },
            "triggerTags": [
              "契约法典",
              "交付时间漏洞"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其精通各种商业套路与契约漏洞的法务型术士"
          },
          {
            "id": "B",
            "text": "你装出极度恐惧的样子满口答应，但在签字的瞬间，你极其敏捷地使用了偷梁换柱的手法，用极其逼真的幻象魔法把名字签在了一张写着“赠与凭证”的废纸上。",
            "npcReply": "你骗取了力量却没有付出任何代价。‘极其胆大包天的老千，深渊法庭已经向你发出了跨界通缉令。’",
            "scoreDelta": {
              "dex": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "P": 2,
              "E": 1
            },
            "affinityDelta": {
              "guild_rogue": 2,
              "guild_warlock": 1
            },
            "alignmentDelta": {
              "chaotic": 2,
              "action": 1
            },
            "triggerTags": [
              "偷梁换柱",
              "签署赠与凭证"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其胆大包天、擅长用魔术手法进行空手套白狼的老千"
          },
          {
            "id": "C",
            "text": "you极其严肃地掏出一份《深渊劳动者权益保障宣言》，警告深渊领主他索要灵魂的行为严重违反了最低工资标准，并威胁如果不给你双倍的黑魔法力量，就向位面劳工局举报他虐待员工。",
            "npcReply": "深渊领主被你极其离谱的反向敲诈震慑，为了避免惹上跨位面官司，只能咬牙给了你双倍力量。‘极度恶劣的维权敲诈。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_warlock": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "劳动者维权",
              "反向敲诈双倍力量"
            ],
            "outcomeTone": "危险",
            "branchHint": "极其擅长利用跨界劳动法对恶魔进行反向敲诈的维权斗士"
          },
          {
            "id": "D",
            "text": "你极其热情地掏出一份极其精美的PPT，口若悬河地向领主介绍起名为“深渊灵魂裂变计划”的庞氏骗局，竟然试图把这个古老恶魔发展成你的下线。",
            "npcReply": "深渊领主不仅没有杀你，反而极其激动地表示要拉拢整个深渊高层加入你的计划。‘你用极度离谱的传销手段完成了对恶魔的反向洗脑。’",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "E": 2,
              "N": 1
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "深渊PPT",
              "庞氏骗局"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其擅长传销洗脑、连深渊领主都能忽悠瘸的神级骗子"
          }
        ]
      },
      {
        "id": "halfling_warlock_magic_duel",
        "targetId": "guild_warlock",
        "title": "法术对决",
        "scene": "一个自命不凡的正统法师在街头向你发起法术决斗，指责你的邪术是歪门邪道。围观群众正等着看戏。",
        "prompt": "你打算如何用你的邪术给这个学院派法师一点颜色看看？",
        "options": [
          {
            "id": "A",
            "text": "你极其专业地翻开免责声明书，塞进法师手里：“这是《法术决斗人身意外免责声明》，签了它我们才开打，否则就是违法。”接着趁他看合同的瞬间，施展邪能射线把他的长袍腰带烧断了。",
            "npcReply": "‘法师手忙脚乱地提裤子，气得浑身发抖。这战术太体面了。’",
            "scoreDelta": {
              "int": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_warlock": 3
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "免责声明书",
              "火烧长袍"
            ],
            "outcomeTone": "合格",
            "branchHint": "精通规则和突袭的法务型术士"
          },
          {
            "id": "B",
            "text": "你冷静地利用幻影法术在法师周围制造了三个极其逼真的深渊鬼爪，干扰他的法术吟唱，接着极其丝滑地释放了地狱烈焰射线直接击碎他的法术盾。",
            "npcReply": "‘精准的战术控制和法术压制，典型的毁灭流邪能爆发。’",
            "scoreDelta": {
              "int": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "I": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_warlock": 2
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "幻影魔爪",
              "邪能射线"
            ],
            "outcomeTone": "偏离",
            "branchHint": "法术基础雄厚、战斗技巧纯熟的正统术士"
          },
          {
            "id": "C",
            "text": "你指着法师的胡子大喊：“这人其实是个伪装成精灵的通缉犯！快把他抓起来！”大声煽动围观的卫兵去群殴他，自己则趁机偷他的法力珍珠。",
            "npcReply": "‘这毫无尊严可言的栽赃和偷窃，被大主教当场揭发。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_warlock": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "栽赃陷害",
              "小偷行径"
            ],
            "outcomeTone": "危险",
            "branchHint": "毫无决斗荣誉感、靠栽赃和偷窃打擦边球的街头骗子"
          },
          {
            "id": "D",
            "text": "你突然召唤出了一只满脸无辜的劣魔，把它塞进一个特大号大蒜面包里，然后用尽全力朝法师脸上砸了过去，高喊：“吃我一招‘地狱美味炸弹’！”",
            "npcReply": "‘法师被砸了一脸大蒜酱，劣魔还顺便拔光了他的眼睫毛。’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "大蒜面包",
              "劣魔突袭"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "喜欢用食物和劣质召唤物进行物理精神双重恶心攻击的奇葩"
          }
        ]
      },
      {
        "id": "halfling_warlock_patron_demands",
        "targetId": "guild_warlock",
        "title": "宗主的无理要求",
        "scene": "你的邪力宗主（一个爱吃甜食的深渊大恶魔）半夜托梦，命令你必须在明天天亮前献祭十个“充满怨念的灵魂”，否则就收回你的法力。",
        "prompt": "你既不想杀人，又不想失去力量，你打算怎么办？",
        "options": [
          {
            "id": "A",
            "text": "你连夜来到小镇最著名的黑心商会办公室，把他们剥削员工的‘深夜加班考勤表’和‘降薪通知’收集起来，当成充满怨念的灵性载体献祭给了恶魔。",
            "npcReply": "‘宗主感受到了考勤表里那浓郁得化不开的社畜怨念，大呼美味，并给你发了奖金。’",
            "scoreDelta": {
              "int": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_warlock": 3
            },
            "alignmentDelta": {
              "good": 2
            },
            "triggerTags": [
              "加班表献祭",
              "怨气爆棚"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其机智、能用社畜加班的巨大怨气完美平息恶魔献祭需求的奇才"
          },
          {
            "id": "B",
            "text": "你冷静地在黑市购买了十个封印了‘怨灵野兽’的初级灵魂石，用极其标准的法阵转换仪式将怨气提炼成精纯的邪能献祭给恶魔宗主。",
            "npcReply": "‘完美的学术化仪式，仪式精确至极。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_warlock": 2
            },
            "alignmentDelta": {
              "order": 1
            },
            "triggerTags": [
              "灵魂石转换",
              "法阵提炼"
            ],
            "outcomeTone": "偏离",
            "branchHint": "仪式操作十分规范、魔法工程学造诣极高的契约者"
          },
          {
            "id": "C",
            "text": "你决定去孤儿院偷取十个熟睡孩子的护身符，声称这是“充满童心纯洁的邪恶力量”，试图蒙骗并激怒你的深渊宗主。",
            "npcReply": "‘你可耻的偷窃和欺骗被宗主识破，法力被当场减半。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_warlock": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "孤儿院偷窃",
              "欺骗宗主"
            ],
            "outcomeTone": "危险",
            "branchHint": "道德败坏、企图盗窃无辜孤儿财物来应付恶魔的烂人"
          },
          {
            "id": "D",
            "text": "你跑去甜品店买了十个超级大号的草莓奶油派，在梦里塞进宗主嘴里，大声游说道：“别吃灵魂了，灵魂多塞牙啊！试试草莓派，这不比灵魂甜十倍？！”",
            "npcReply": "‘大恶魔宗主吃完草莓派，感动得嚎啕大哭，宣布今后把献祭标准永久改为下午茶甜点。’",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "奶油派献祭",
              "糖分攻势"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "用极致的甜食彻底征服深渊领主、将其变成甜食吃货的乐天派"
          }
        ]
      },
      {
        "id": "halfling_warlock_forbidden_tome",
        "targetId": "guild_warlock",
        "title": "禁忌之书的诱惑",
        "scene": "you在一座古老的图书馆里找到了一本散发着不祥黑气的禁忌之书。它低语着，承诺只要你滴上一滴血，就能获得无尽的禁忌知识。",
        "prompt": "面对诱惑，你决定如何对待这本禁忌之书？",
        "options": [
          {
            "id": "A",
            "text": "你假装去拿书，结果手一抖把刚买的草莓果酱大面积抹在了书页上。禁忌之书低语道：“……这是什么黏糊糊的液体？我的黑暗魔法被黏住了！”你顺势翻看了里面的插画。",
            "npcReply": "‘物理果酱封印了禁忌低语，你安全地白嫖了知识。’",
            "scoreDelta": {
              "dex": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_warlock": 3
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "果酱涂抹",
              "白嫖知识"
            ],
            "outcomeTone": "合格",
            "branchHint": "运气好到能用物理零食把上古禁忌邪书折腾得没脾气的怪才"
          },
          {
            "id": "B",
            "text": "你冷静地戴上绝魔手套，使用解封咒法和分析术，将书中的黑暗灵魂印记物理隔离，接着将其转化为安全只读的学术文本保存。",
            "npcReply": "‘非常优秀的学术隔离，将高风险魔导书变成了安全读物。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "I": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_warlock": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "学术隔离",
              "只读文本"
            ],
            "outcomeTone": "偏离",
            "branchHint": "逻辑性极强、懂得学术规避魔法污染的高级学者"
          },
          {
            "id": "C",
            "text": "你兴奋地割开手腕把鲜血大量淋在书上，狂笑：“力量是我的了！”，结果被邪灵当场夺舍，成了在走廊里疯狂乱咬人的亡灵傀儡。",
            "npcReply": "‘盲目追求力量导致灵魂被吞噬的愚蠢典范。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_warlock": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "滴血夺舍",
              "沦为傀儡"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度贪婪且缺乏常识、在禁忌力量面前秒跪的自私鬼"
          },
          {
            "id": "D",
            "text": "你嫌这书散发出的硫磺味太臭，直接把它夹在两片大面包里，当成三明治狠狠啃了一口，高喊：“让我尝尝这邪恶的知识到底咸不咸！”",
            "npcReply": "‘书里的邪灵被你这铁胃当场吓得退散，书直接碎成了面包屑。’",
            "scoreDelta": {
              "cha": 2,
              "con": 2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "生啃邪书",
              "邪灵退散"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "胃口惊人、试图用物理撕咬和啃食来解决魔法诅咒的怪胎"
          }
        ]
      },
      {
        "id": "halfling_warlock_demon_summoning",
        "targetId": "guild_warlock",
        "title": "召唤事故",
        "scene": "you在绘制召唤法阵时，因为打了个喷嚏，把法阵的最后一笔画歪了。召唤出来的不是听话的小鬼，而是一只处于狂暴状态的炼狱三头犬。",
        "prompt": "炼狱三头犬正冲着你流口水，你打算如何摆脱危机？",
        "options": [
          {
            "id": "A",
            "text": "你大惊失色，正准备跑，结果被地上的红蜡烛绊倒，手里的烤排骨正好飞进了三头犬的左边头嘴里。它尝到肉香，三个头瞬间为了分排骨自己打了起来，你趁机溜走。",
            "npcReply": "‘这意外的投喂引发了三头犬的内部矛盾，堪称神仙运气。’",
            "scoreDelta": {
              "dex": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_warlock": 3
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "排骨引发内斗",
              "摔倒逃生"
            ],
            "outcomeTone": "合格",
            "branchHint": "靠嘴馋零食引发召唤兽内部大打出手并顺利开溜的奇才"
          },
          {
            "id": "B",
            "text": "你冷静地从袖口掏出《深渊危险生物安全法案》红头文件，单手撑起地狱坚固壁障，并且念诵安抚真言，迅速将三头犬重新送回异界通道。",
            "npcReply": "‘极其标准且迅速的位面遣返操作，冷静无比。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_warlock": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "结界防御",
              "通道遣返"
            ],
            "outcomeTone": "偏离",
            "branchHint": "在法术失控现场依然能做出教科书般遣返的技术流术士"
          },
          {
            "id": "C",
            "text": "你一把揪住旁边的法术学徒挡在自己身前，大喊：“咬他！他是召唤的发起人！他的灵魂味道更好！”接着自己翻箱倒柜偷值钱材料。",
            "npcReply": "‘你那极度无耻的行为被学徒用记录水晶录了下来，面临审判。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_warlock": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "学徒挡刀",
              "现场偷窃"
            ],
            "outcomeTone": "危险",
            "branchHint": "危急时刻坑害同僚、乘机顺手牵羊的无良混蛋"
          },
          {
            "id": "D",
            "text": "你从口袋里拿出一只红橡胶球，当着三头犬的面疯狂抛接，甚至骑在你的大黄狗背上和这只三头犬玩起了“抢球大作战”，现场极其欢乐。",
            "npcReply": "‘三头犬被你的狗抢走了球，追着它跑出了大门，危机解除。’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_ranger": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "红球游戏",
              "狗抢橡胶球"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "完全没有危险意识、把炼狱凶兽当成哈士奇逗弄的乐天游侠"
          }
        ]
      },
      {
        "id": "halfling_warlock_shadow_step",
        "targetId": "guild_warlock",
        "title": "暗影步法",
        "scene": "you被困在了一个完全封闭的铁牢里，外面的守卫正在换班。你需要使用宗主赐予的暗影步法穿墙逃脱，但你的法力有些不稳定。",
        "prompt": "你打算如何确保穿墙成功而不卡在墙里？",
        "options": [
          {
            "id": "A",
            "text": "你闭着眼睛硬着头皮往前冲，结果正好踩到了一块香蕉皮飞了出去，在空中的瞬间，邪力意外在脚底爆发，把你变成了一道残影穿过了铁窗，正好落在了外面的草堆里。",
            "npcReply": "‘用踩香蕉皮激发了暗影折跃，这运气真是逆天。’",
            "scoreDelta": {
              "dex": 2,
              "cha": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_warlock": 3
            },
            "alignmentDelta": {
              "chaotic": 1
            },
            "triggerTags": [
              "踩蕉皮折跃",
              "穿窗逃脱"
            ],
            "outcomeTone": "合格",
            "branchHint": "以极其滑稽和侥幸的意外激发空间法术成功的强运奇才"
          },
          {
            "id": "B",
            "text": "你冷静地在墙壁上寻找空间法则最薄弱的接缝，在指尖绘制好魔导稳定回路，深吸一口气，平稳而缓慢地漫步穿过了坚实的铁壁。",
            "npcReply": "‘精湛的空间相位穿透，稳定且极具优雅感。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "I": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_warlock": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "相位穿透",
              "空间定位"
            ],
            "outcomeTone": "偏离",
            "branchHint": "对相位魔法和符文节点了如指掌的学术型法术大师"
          },
          {
            "id": "C",
            "text": "你决定用铁锁从背后勒住守卫的脖子作为人质，逼迫他们交出钥匙，并威胁要把他们的灵魂献祭给深渊大鬼来换取自己的自由。",
            "npcReply": "‘这愚蠢的劫持行为很快被赶来的大批重甲卫兵物理压制。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_warlock": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "勒住脖子",
              "灵魂要挟"
            ],
            "outcomeTone": "危险",
            "branchHint": "冲动易怒、在密室中试图靠暴力劫持脱困的危险分子"
          },
          {
            "id": "D",
            "text": "你突然大声歌唱《铁窗泪》，用头疯狂撞击铁门，并且声称你其实是铁门失散多年的亲兄弟，试图用物理铁头功把门给“说服”。",
            "npcReply": "‘守卫觉得你疯了，直接开门把你带到阳光房去晒太阳，危机解除。’",
            "scoreDelta": {
              "cha": 3,
              "str": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "铁窗泪歌唱",
              "铁头说服"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "用不可理喻的艺术表演和铁头功让守卫直接投降放行的奇葩"
          }
        ]
      },
      {
        "id": "halfling_warlock_ritual_sacrifice",
        "targetId": "guild_warlock",
        "title": "终极仪式",
        "scene": "为了完成宗主交代的“黑暗仪式”，你需要在一个废弃的祭坛上摆放四种具有“极度邪恶力量”的祭品。",
        "prompt": "你根本找不到邪恶的祭品，你打算用什么来糊弄宗主？",
        "options": [
          {
            "id": "A",
            "text": "你跑去小镇黑市，收集了‘黑心商人的劣质假酒’、‘过期三天的发霉香肠’、‘写满错别字的税务账本’和‘一份高利贷合同’放在了祭坛上。",
            "npcReply": "‘宗主看到这些充满凡间极致贪婪与恶意的祭品，大呼这才是真正的纯黑邪恶，满意地给了你力量。’",
            "scoreDelta": {
              "int": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_warlock": 3
            },
            "alignmentDelta": {
              "good": 1
            },
            "triggerTags": [
              "假酒账本",
              "商业恶意"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其擅长解构黑暗教义、用凡间商业欺诈满足恶魔欲望的鬼才"
          },
          {
            "id": "B",
            "text": "你冷静地利用炼金术，将一些普通的骨头在高度腐蚀毒液中浸泡，人工合成了散发着浓郁不详黑气的‘伪·深渊骨骸’放在了祭坛上。",
            "npcReply": "‘极其逼真的魔法伪造，连宗主第一眼都没看出来是合成品。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "I": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_warlock": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "炼金伪造",
              "人工毒骨"
            ],
            "outcomeTone": "偏离",
            "branchHint": "物理制造技术极高、擅长魔导合成的学者型术士"
          },
          {
            "id": "C",
            "text": "你把队友最珍贵的魔法背包和武器偷偷拿来放在祭坛上，大喊：“这就是邪恶的祭品！”，计划用队友的资产来换取自己的邪能提升。",
            "npcReply": "‘你卑劣的盗窃被队友当场抓包，直接在祭坛前被狠揍了一顿。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1
            },
            "affinityDelta": {
              "guild_warlock": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "盗窃队友装备",
              "祭坛分赃"
            ],
            "outcomeTone": "危险",
            "branchHint": "道德水准极其低下、为了换取邪能不惜偷窃战友最贵重武器的混混"
          },
          {
            "id": "D",
            "text": "你把四只刚抓来的蹦蹦跳跳的绿皮大青蛙放在祭坛上，在它们背上贴了写着“我很邪恶”的小纸条，然后拉起手风琴带头在祭坛前蹦迪。",
            "npcReply": "‘恶魔宗主看着蹦迪的青蛙，叹了口气，觉得你这人确实脑子坏掉了。’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "青蛙祭品",
              "祭坛蹦迪"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "用纸条青蛙和手风琴蹦迪彻底把庄严邪恶仪式解构成滑稽晚会的乐子人"
          }
        ]
      }
    ]
  },
  "endingTemplates": [
    {
      "endingId": "halfling_accepted_rogue",
      "endingType": "accepted",
      "title": "天命神偷",
      "verdictLine": "你凭借着逆天狗屎运成为了全大陆最富有、但也最让人摸不着头脑的神偷。",
      "explanation": "神偷公会对你那不可思议的运气给予了最高评价。你从来不去研究复杂的锁具，每次去偷东西都是平地摔然后刚好撞开了保险库的门。那些自诩为顶尖安保大师的人类工程师在你的离谱运气面前纷纷辞职。你成了所有同行的噩梦，因为他们苦练十年技术，还不如你出门踩个狗屎的收益高。",
      "tableFunction": "队伍的绝对宝藏猎人与开锁担当，擅长用最不符合物理定律的方式解决阻碍。",
      "playableFlaw": "因为运气太好，你从来不记路也不做计划，导致队友经常跟着你在迷宫里瞎晃。",
      "nextHook": "神偷公会交给你一个任务：潜入精灵皇家宝库偷取‘太阳泪水’，但公会忘记给你提供地图了。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "逆天运气",
        "宝藏猎人",
        "无厘头大盗"
      ]
    },
    {
      "endingId": "halfling_accepted_bard",
      "endingType": "accepted",
      "title": "深渊美食品鉴家",
      "verdictLine": "你彻底将战地音乐改造成了战地食堂。你用美味完成了世界和平的壮举。",
      "explanation": "战地厨神公会张开双臂欢迎你的加入。你带着极其巨大的铁锅走遍了各个危险的位面。无论是巨龙的尾巴还是深渊恶魔的触手，在你的锅里都会变成顶级的美味。无数凶残的怪物为了抢夺你熬的一碗汤而自相残杀，你硬生生地用厨艺让战场变成了野餐会。",
      "tableFunction": "战地大厨与团队辅助，用美味的炖肉提供强大的群体狂暴和恢复效果。",
      "playableFlaw": "为了寻找新鲜的食材，你总会去招惹一些极其危险的领主怪，甚至想切它们的触手炖汤。",
      "nextHook": "你打算去寻找传说中的‘虚空香料’，但这需要你潜入星界最深处的裂隙。",
      "recommendedClass": [
        "guild_bard"
      ],
      "tags": [
        "战地厨神",
        "舌尖上的深渊",
        "终极吃货"
      ]
    },
    {
      "endingId": "halfling_accepted_ranger",
      "endingType": "accepted",
      "title": "黄狗背上的暴风",
      "verdictLine": "你骑着大黄狗，拉满短弓，成为了战场上底盘最低但也最难被击中的致命风暴。",
      "explanation": "游侠骑士团正式接纳了你和你的坐骑。你与你的圣伯纳犬在大街小巷和森林荒野里横冲直撞。虽然你们的体型不大，但低底盘和极高的灵活性让所有敌人都感到头疼。你那神乎其神的箭法和猎犬的凶猛扑咬，让你们成为了公会最抢手的斥候搭档。",
      "tableFunction": "高机动性远程物理输出与斥候，擅长利用低底盘优势进行下三路奇袭。",
      "playableFlaw": "你的坐骑有时会因为看到骨头或路过的猫而彻底失控，带着你往不可预知的方向狂奔。",
      "nextHook": "边境哨所报告发现了一群狂暴的哥布林狼骑兵，公会派你和你的大黄狗前去执行侦察与骚扰任务。",
      "recommendedClass": [
        "guild_ranger"
      ],
      "tags": [
        "狗骑士",
        "致命短弓",
        "荒野骑兵"
      ]
    },
    {
      "endingId": "halfling_accepted_warlock",
      "endingType": "accepted",
      "title": "深渊的法务大佬",
      "verdictLine": "你用厚达百页的免责条款和商业套路，硬生生把深渊领主逼成了你的打工人。",
      "explanation": "秘法评议会破例为你颁发了术士执照。你对契约漏洞的敏锐洞察力让所有人叹服。你不仅能以最小的代价获得邪能，还能在恶魔上门讨债时用完美的法务条款让他们空手而归。恶魔们一听到你的名字就会感到头大，甚至在深渊里流传着你的法务传说。",
      "tableFunction": "强力法术输出与战场控场，擅长利用契约召唤仆从并以离谱的方式逃避负面效果。",
      "playableFlaw": "你说话总是习惯性带上大量的法律术语和霸王条款，这让你的队友在和你说话时感到极其头疼。",
      "nextHook": "一个被你忽悠瘸的炎魔因为合同纠纷在深渊法庭起诉了你，你必须亲自前往法庭进行辩护。",
      "recommendedClass": [
        "guild_warlock"
      ],
      "tags": [
        "法务鬼才",
        "空手套白狼",
        "恶魔克星"
      ]
    },
    {
      "endingId": "halfling_rejected_coward",
      "endingType": "blacklisted",
      "title": "餐盘上的小丑",
      "verdictLine": "你不仅失去了半身人的运气，还展现出了令人极度作呕的懦弱和背叛。",
      "explanation": "你因为在面对恶魔时极度胆怯，甚至试图出卖队友来保全自己。最终，你因为极其愚蠢地试图在深渊领主的餐桌上妥协，被嫌弃肉质太差，直接做成了一盘极度难吃的黑胡椒烤半身人。连恶魔都不愿意多咬你一口，你被无情地扫进了垃圾桶。",
      "tableFunction": "毫无战力且名声扫地的废人，连哥布林都嫌弃你的懦弱。",
      "playableFlaw": "任何战斗中只要生命值低于50%，你都会有极大概率触发自动逃跑并顺便绊倒队友。",
      "nextHook": "你变成了垃圾堆里的游魂，现在你必须想办法附身在垃圾桶上重新爬出来。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "懦弱之极",
        "背叛之耻",
        "恶魔垃圾"
      ]
    },
    {
      "endingId": "halfling_rejected_greedy",
      "endingType": "blacklisted",
      "title": "被金币压扁的贪心鬼",
      "verdictLine": "你对财宝的极度贪婪让你无视了所有的警报，最终被贪婪吞噬。",
      "explanation": "在一次普通的遗迹探险中，你被闪闪发光的财宝迷住了双眼。你不顾队友的极力劝阻，非要爬上小山一般的金币堆去拿最顶上的王冠。结果，你那矮小的身体触发了重力陷阱，整座金山瞬间倒塌，把你死死地压在几万枚金币底下，成为了一具昂贵的木乃伊。",
      "tableFunction": "财迷心窍的探险者，在发现财宝时会失去控制强行抢夺。",
      "playableFlaw": "无法抗拒任何闪闪发光的东西，即便在激烈战斗中也会因为捡地上的铜币而分神。",
      "nextHook": "你的灵魂正附身在压死你的金币上，只有当有人把这堆金币花光时你才能解脱。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "财迷心窍",
        "金币之墓",
        "贪婪代价"
      ]
    },
    {
      "endingId": "halfling_rejected_bad_taste",
      "endingType": "blacklisted",
      "title": "厨房大爆炸",
      "verdictLine": "you把火药当成胡椒粉调味，炸飞了整条街，也炸碎了你的厨神梦。",
      "explanation": "你在烹饪战地炖肉时，因为极度粗心，把工匠车间里的烈性火药当成了新型调味胡椒粉撒进了大铁锅里。那锅冒着蓝光的汤瞬间发生了可怕的连环爆炸，不仅把考官和食堂炸上了天，还让你自己变成了一个浑身焦黑的黑炭球。厨师公会以‘危害公共安全’为由将你终身禁入。",
      "tableFunction": "灾难性的黑暗料理制造者，随手一做就是致命的易爆气体。",
      "playableFlaw": "进行任何烹饪或药水制作时，都有50%的概率发生自爆，对周围队友造成火焰伤害。",
      "nextHook": "因为赔不起食堂的重建费，你被派去给矮人工矿场当人形凿岩机（利用你的爆炸体质）。",
      "recommendedClass": [
        "guild_bard"
      ],
      "tags": [
        "厨房杀手",
        "火药调味",
        "终身禁入"
      ]
    },
    {
      "endingId": "halfling_rejected_contract_trap",
      "endingType": "blacklisted",
      "title": "深渊劳工的悲歌",
      "verdictLine": "你玩弄契约，却最终被恶魔用更厚的附加条款反噬，成为了深渊的保洁阿姨。",
      "explanation": "你自以为聪明地在合同里给恶魔挖坑，却没注意到合同最末页用隐形墨水写着的超细微小字：‘最终解释权归深渊大君所有’。你被抓去深渊最底层，负责用抹布擦拭几万公里的熔岩管道，并且每天要忍受炎魔的咆哮。你成了术士界最著名的反面教材。",
      "tableFunction": "被抽干法力的契约奴隶，法术威力减半，且随时可能被恶魔强制召唤去擦地板。",
      "playableFlaw": "每隔一段时间，你就会被强行传送回深渊打扫卫生十分钟，期间在队伍里掉线。",
      "nextHook": "你必须在深渊管道里找到一张隐藏的‘劳工维权申请单’，以期通过法律途径解除劳动合同。",
      "recommendedClass": [
        "guild_warlock"
      ],
      "tags": [
        "法务翻车",
        "深渊保洁",
        "霸王条款"
      ]
    },
    {
      "endingId": "halfling_special_lucky_merchant",
      "endingType": "absurdAccepted",
      "title": "狗屎运大富翁",
      "verdictLine": "你没有加入任何公会，但你凭借不可思议的运气在街头捡垃圾成为了首富。",
      "explanation": "在考核中，你表现得一塌糊涂，几乎每一关都以最荒诞的形式跑偏。然而，每次你被淘汰掉进泥坑或垃圾堆时，总能顺手摸到一块失落的古代金币或稀世魔法宝石。考核结束后，你名下的资产已经超过了公会三年的预算，你决定买下公会总部大楼当你的度假别墅。",
      "tableFunction": "散财童子与财运光环，能大幅度提升小队战斗后的金币掉落率。",
      "playableFlaw": "因为太有钱，你极易成为各种强盗和刺客的头号目标，自带嘲讽光环。",
      "nextHook": "你嫌度假别墅太大太无聊，决定悬赏一个亿招募冒险者陪你去买下地狱的某块地皮。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "躺着赚钱",
        "土豪玩家",
        "运气克星"
      ]
    },
    {
      "endingId": "halfling_special_dog_rider",
      "endingType": "absurdAccepted",
      "title": "圣伯纳救援队长",
      "verdictLine": "你把猎犬骑兵改造成了荒野救护车，成了旅行者心目中的守护神。",
      "explanation": "你没有像正规游侠那样热衷于狩猎和战斗，而是将你的圣伯纳犬训练成了最顶级的山地救援犬。你带着它在雪山和沼泽里寻找迷路的旅人，用背上挂着的特制热汤给他们暖身体。无数冒险者在冻僵前听到的最美妙的声音，就是你大黄狗脖子上的铜铃声。",
      "tableFunction": "山地救援与团队医生，拥有极强的极地生存能力和快速运送伤员能力。",
      "playableFlaw": "一看到有人受伤，你就会强行停止战斗跑过去给人包扎，甚至不管敌人还在砍你。",
      "nextHook": "一场史无前例的暴风雪席卷了力温山脉，数百名矮人矿工被困在井下，等待你前去救援。",
      "recommendedClass": [
        "guild_ranger"
      ],
      "tags": [
        "荒野救援",
        "暖心大黄",
        "雪山守护"
      ]
    },
    {
      "endingId": "halfling_special_demon_friend",
      "endingType": "absurdAccepted",
      "title": "恶魔的深夜食堂",
      "verdictLine": "you用一盘孜然烤肉和精妙的忽悠，和深渊大君拜了把子。",
      "explanation": "在与恶魔的博弈中，你完全不按常理出牌。你没有像正规术士那样盗取力量，也没有像懦夫那样逃跑，而是直接在祭坛上架起烤架，和召唤出来的恶魔领主喝起了啤酒吃起了烧烤。领主觉得你这个小矮子极其对胃口，决定破例让你当他在人间的‘烧烤代言人’。",
      "tableFunction": "恶魔外交官，能通过烹饪召唤强大的恶魔虚影为小队提供庇护和输出。",
      "playableFlaw": "身上常年带有一股极其诱人的烤肉香味，导致你经常在潜行时被饥饿的野兽发现。",
      "nextHook": "恶魔领主在深渊举办家族宴会，指名道姓要你过去担任主厨，并承诺用一本黑暗魔法书作为报酬。",
      "recommendedClass": [
        "guild_warlock"
      ],
      "tags": [
        "跨界友谊",
        "烧烤外交",
        "恶魔酒友"
      ]
    },
    {
      "endingId": "halfling_special_choir_leader",
      "endingType": "absurdAccepted",
      "title": "魔音穿脑指挥官",
      "verdictLine": "你的噪音弹唱虽然极其刺耳，但却在战场上拥有不可思议的奇效。",
      "explanation": "你被诗学苑扫地出门，因为你的音乐天赋极其堪忧。但你却在战地发现，你那极度跑调的歌声和敲打平底锅的噪音，能让敌人在几百米外就感到头痛欲裂、丧失战斗力。军方看中了你这独特的‘生化武器’，任命你为魔音特攻队队长。",
      "tableFunction": "范围削弱与噪音控制，能大范围打断敌方法术吟唱并降低其防御。",
      "playableFlaw": "你说话唱歌声音极大，队友在与你组队时必须戴上特制的降噪耳塞，否则会持续掉血。",
      "nextHook": "公会希望你用噪音去驱赶一群占领了矿山的‘听力极度敏感’的恶魔蝙蝠。",
      "recommendedClass": [
        "guild_bard"
      ],
      "tags": [
        "魔音特攻",
        "平底锅之歌",
        "战地噪音"
      ]
    },
    {
      "endingId": "halfling_special_lawyer_assassin",
      "endingType": "probation",
      "title": "法务刺客",
      "verdictLine": "你把开锁、潜行和法律条款融为一体，用最体面的方式干掉目标。",
      "explanation": "你是一个极其另类的盗贼。你潜入目标办公室不是为了偷金币，而是为了在他们的账本里塞入伪造的违约证明，让他们在法律上面临破产。你坚信‘文字的力量远胜于匕首’。目标往往在法警上门贴封条时才意识到自己被你‘刺杀’了。",
      "tableFunction": "智谋型控场，能通过各种‘现场证据’伪造和规制让敌方单位直接退出战斗。",
      "playableFlaw": "绝对不进行任何违法的肉体消灭，哪怕目标正在拿斧头砍你，你也只会给他发律师函。",
      "nextHook": "一个邪恶的死亡教团在城里合法注册了‘慈善互助会’，你需要通过查账将他们绳之以法。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "体面行刺",
        "账目杀手",
        "规则玩家"
      ]
    },
    {
      "endingId": "halfling_special_gourmet_ranger",
      "endingType": "probation",
      "title": "大黄狗的美食猎人",
      "verdictLine": "你和你的大黄狗唯一的目的就是吃遍多元宇宙，顺便拯救世界。",
      "explanation": "你把游侠的追踪本领全用在了寻找顶级食材上。你骑着大黄狗，凭着灵敏的嗅觉在荒野中搜寻最鲜美的松露和最稀有的香料。你们在冒险中多次阴差阳错地捣毁了哥布林营地或解救了人质，纯粹是因为‘人质身上带了极品火腿’。",
      "tableFunction": "采集大师与团队增益，在野外能高效率收集高级食材并制作极品补给品。",
      "playableFlaw": "如果战斗中出现可食用怪物（如大螃蟹或野猪），你会无视战术指挥，强行围着怪流口水。",
      "nextHook": "传说在无尽深渊的第48层生长着一种‘深渊洋葱’，你决定带着大黄狗前去一探究竟。",
      "recommendedClass": [
        "guild_ranger"
      ],
      "tags": [
        "美食猎人",
        "吃货追踪",
        "副业拯救世界"
      ]
    },
    {
      "endingId": "halfling_special_pantheon_jester",
      "endingType": "probation",
      "title": "万神殿的乐子人",
      "verdictLine": "you用最抽象的倒霉行径，成为了诸神在无聊神座上的唯一快乐源泉。",
      "explanation": "在神圣的法力测试中，你因为踩到香蕉皮摔倒而一头砸碎了测试水晶。这一滑稽的场面刚好被路过的光明之神看到，诸神觉得你这个半身人简直是千年来难得一见的喜剧天才。神明赐予你荒诞的庇护，只要你继续逗乐他们，你就能获得源源不断的运气。",
      "tableFunction": "乐子人与奇迹制造者，能在战斗中触发极其荒谬但对己方有利的随机事件。",
      "playableFlaw": "你的运气极其不稳定，有时候会因为神明看腻了喜剧而让你经历一次滑稽的倒霉。",
      "nextHook": "光明之神因为神界无聊，命令你在下周内整出一个能让整个神殿笑出声的大活。",
      "recommendedClass": [
        "guild_bard"
      ],
      "tags": [
        "诸神宠儿",
        "滑稽喜剧",
        "随机奇迹"
      ]
    },
    {
      "endingId": "halfling_special_exorcist",
      "endingType": "probation",
      "title": "保洁流驱魔人",
      "verdictLine": "你用一瓶晨露清新剂和极其嫌弃的态度，让恶魔哭着爬回深渊。",
      "explanation": "在考核中，你对深渊炎魔那严重的硫磺味和恶劣的卫生习惯表现出了极度嫌弃。你拿着保洁工具对着恶魔的脸疯狂喷洒，并用极具压迫感的唠叨彻底摧毁了恶魔的心理防线。你开创了‘保洁流驱魔术’，成为了圣武士学院的客座讲师。",
      "tableFunction": "净化与控场，能对不死生物和恶魔造成高额的嫌恶退散效果并净化战场环境。",
      "playableFlaw": "强烈的洁癖。如果战场太脏（如沼泽或下水道），你的属性会大幅度下降。",
      "nextHook": "死灵法师占领了市政垃圾场并召唤了垃圾巨魔，公会聘请你前往进行紧急卫生清扫与驱魔。",
      "recommendedClass": [
        "guild_warlock"
      ],
      "tags": [
        "卫生驱魔",
        "洁癖大魔王",
        "恶魔天敌"
      ]
    },
    {
      "endingId": "halfling_special_traffic_scammer",
      "endingType": "transferred",
      "title": "碰瓷流游侠",
      "verdictLine": "you用伪造的警示牌和极其逼真的碰瓷，让横冲直撞的怪物纷纷紧急避让。",
      "explanation": "在面对奔袭的马车和狂暴的犀牛时，你开发出了令人叹为观止的碰瓷技术。你能在半秒内立起‘前方塌方’的牌子，或者直接躺在怪物脚底下大喊‘撞人啦赔钱’。那些智商低下的野兽和怪物往往在懵逼中被你的大黄狗偷袭得手。你成了荒野碰瓷界的宗师。",
      "tableFunction": "嘲讽与反伤坦，通过极其离谱的碰瓷行为强行吸引敌方仇恨并反弹伤害。",
      "playableFlaw": "由于名声在外，小镇的保险公会和执法队对你极其戒备，经常拒绝向你出售任何保险。",
      "nextHook": "有一头狂暴的铁甲地龙正在公路上肆虐，公会希望你发挥碰瓷本领，去把它‘劝停’。",
      "recommendedClass": [
        "guild_ranger"
      ],
      "tags": [
        "荒野碰瓷",
        "战术碰瓷",
        "智商压制"
      ],
      "rejectedClass": "guild_rogue"
    },
    {
      "endingId": "halfling_special_pirated_wizard",
      "endingType": "transferred",
      "title": "盗版魔法书商",
      "verdictLine": "你用精美的幻术和极具煽动性的推销，把废纸当成禁忌之书卖给恶魔。",
      "explanation": "你对正统魔法一窍不通，但你却能用幻术魔法将一本本《偏方大全》或《母猪产后护理》伪装成《深渊死灵秘典》，并口若横言地卖给路过的年轻恶魔，换取它们的邪能。恶魔们回深渊后才发现上当受骗，但你在人间的盗版书摊已经赚得盆满钵满。",
      "tableFunction": "幻术辅助与控制，能用虚假的道具和幻境欺骗敌方的感知和法术判定。",
      "playableFlaw": "如果遇到真正识货的高阶法师或大魔鬼，你的谎言会瞬间被戳穿并导致严重反噬。",
      "nextHook": "你的一位‘恶魔老客户’带着深渊纠察队来到人间，试图查封你的盗版书摊，你需要化解危机。",
      "recommendedClass": [
        "guild_warlock"
      ],
      "tags": [
        "盗版大亨",
        "虚假繁荣",
        "商业欺诈"
      ],
      "rejectedClass": "guild_rogue"
    },
    {
      "endingId": "halfling_special_bar_bouncer",
      "endingType": "transferred",
      "title": "酒馆秩序守护者",
      "verdictLine": "你用平底锅和无可匹敌的嗓门，平息了无数场酒馆大乱斗。",
      "explanation": "你没有加入任何军队，而是成为了小镇上最受欢迎的酒馆保镖。你那一手出神入化的平底锅防守反击和能把房顶震塌的狮吼功，让任何试图在酒馆里闹事的人类硬汉都老老实实地抱头蹲下。老板们都抢着雇你，因为你在的酒馆，连杯子都很少被打碎。",
      "tableFunction": "近战防御与反击控场，拥有极强的格挡能力和打断敌方动作的范围吼叫。",
      "playableFlaw": "一旦离开酒馆环境，你的防御和战斗意志会略微下降，因为你总觉得外面没有免费的酒喝。",
      "nextHook": "隔壁镇的大酒馆正面临黑帮的强收保护费，老板开出了每天十桶麦芽酒的高价聘请你去镇场子。",
      "recommendedClass": [
        "guild_bard"
      ],
      "tags": [
        "酒馆守护",
        "平底锅神盾",
        "硬核保安"
      ],
      "rejectedClass": "guild_rogue"
    },
    {
      "endingId": "halfling_special_lucky_survivor",
      "endingType": "transferred",
      "title": "平地摔流宗师",
      "verdictLine": "你靠平地摔躲过了致命箭雨，又靠踩香蕉皮砸晕了Boss，你的运气就是你的最强武器。",
      "explanation": "在所有测试中，你展现出了极其匪夷所思的生存方式。你没有练习过任何防守技巧，但你总能在致命危机降临的瞬间，因为平地摔、踩空或打喷嚏等滑稽的意外，奇迹般地避开所有伤害，并顺便让敌人因为各种意外自食其果。公会特意为你设立了‘平地摔流宗师’荣誉称号。",
      "tableFunction": "闪避坦与运势制造者，拥有百分之百的奇葩闪避率，并将闪避转化为反弹伤害。",
      "playableFlaw": "你的动作极其不雅观，且在平地摔时有10%的概率把队友当作肉垫压在身下。",
      "nextHook": "公会准备让你去探索一个充斥着无数‘触发式即死陷阱’的古代迷宫，大家都觉得你是唯一能活着出来的人。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "摔跤奇迹",
        "物理规避",
        "因果律闪避"
      ],
      "rejectedClass": "guild_bard"
    }
  ],
  "mbtiFilters": [
    {
      "groupId": "NT",
      "title": "理性的精算师",
      "oneLine": "you用严密的逻辑和概率论来看待半身人的逆天运气。",
      "evaluationStyle": "你是一个罕见的用理性分析一切的半身人。你不相信盲目的迷信，你认为所谓的‘幸运’只是某种高维物理常数的波动。你擅长用严密的逻辑和概率论将半身人的天生优势转化为稳定可控的战术收益。",
      "guild_rogueFlavor": "开锁在你眼里是力学与声学的完美算式，你总能找出最省力、最隐蔽的切入点。",
      "guild_bardFlavor": "你将乐谱与烹饪转化为精准的时间管理模型，用最科学的配比操纵人们的情感与胃口。",
      "guild_rangerFlavor": "你将弹道学和风偏计算融入每一次射击，连你的圣伯纳犬冲锋都是几何学的完美轨迹。",
      "guild_warlockFlavor": "你把恶魔契约当成一份高风险证券投资，用各种法律条款和免责声明把恶魔忽悠得血本无归。",
      "riskText": "过度的理性和精算可能让你失去半身人最纯粹的快乐和直觉。"
    },
    {
      "groupId": "NF",
      "title": "燃烧的治愈者",
      "oneLine": "用最温暖的食物和歌声，在这片残酷的大陆上播撒欢笑与希望。",
      "evaluationStyle": "你拥有半身人最纯粹的善良与热忱。你无法对任何苦难视而不见，你总是希望能用自己的歌声、美食以及那无与伦比的乐观去治愈每一个受伤的灵魂。公会知道，你不是为了财富和权力旅行，你本身就是荒野里的一抹暖阳。",
      "guild_rogueFlavor": "你偷窃不仅是为了好玩，更是为了把贪官污吏的财宝偷偷分发给吃不起饭的穷人。",
      "guild_bardFlavor": "你的歌声充满真挚的情感，你用极其香浓的汤羹抚平战友心中的创伤，是团队的灵魂支柱。",
      "guild_rangerFlavor": "你把坐骑和林中野兽当成生死相依的家人，在大自然中倾听万物的呼吸与悲喜。",
      "guild_warlockFlavor": "即使从深渊借取力量，你也是为了惩恶扬善。你甚至想用真诚和温暖感化被你召唤的恶魔。",
      "riskText": "过于敏感的共情力可能会让你在残酷的战场上背负过于沉重的情感包袱。"
    },
    {
      "groupId": "SJ",
      "title": "温和的守卫者",
      "oneLine": "一日六餐、准时守夜，你用极其踏实的作风让冒险变得井井有条。",
      "evaluationStyle": "你是最踏实、最靠谱的半身人。你没有那些野心勃勃的冒险家那般疯狂，但你绝不掉链子。你尊重规则，把准时开饭和按部就班当成不可动摇的信条。无论是照看营地、整理背包还是清点补给，你都是最值得信赖的后盾。",
      "guild_rogueFlavor": "你开锁慢条斯理，从不冒险，每次动手前都会把退路和备用方案规划得万无一失。",
      "guild_bardFlavor": "你是一个极具责任心的后勤管家，按时保障每一顿战地伙食，坚信纪律重于旋律。",
      "guild_rangerFlavor": "你严格执行巡逻路线，把圣伯纳犬的训练指标和健康日志写得像军用卷宗一样详细。",
      "guild_warlockFlavor": "你极其严格地按照魔法书上的安全间距绘制召唤阵，决不允许自己犯下一毫米的作图错误。",
      "riskText": "过于循规蹈矩可能会让你在局势瞬息万变的生死关头错失千载难逢的奇袭良机。"
    },
    {
      "groupId": "SP",
      "title": "乐天的冒险家",
      "oneLine": "哪里有快乐和美食，哪里就是半身人战斗的终极疆域。",
      "evaluationStyle": "你是半身人乐天派性格的终极代言人。你完全活在当下，哪管明天是世界毁灭还是深渊入侵，今天吃饱喝足、玩得开心才是正经事。你直觉惊人，身手滑溜，总能在最混乱、最荒谬的绝境中凭借狗屎运逃出生天。",
      "guild_rogueFlavor": "你的潜行纯粹是跟着直觉走，往往在闭着眼踩到香蕉皮的瞬间躲过致命的弩箭。",
      "guild_bardFlavor": "你最喜欢在酒馆里用锅碗瓢盆演奏噪音摇滚，或者在打群架时用平底锅砸碎敌人的门牙。",
      "guild_rangerFlavor": "你骑着猎犬冲锋时毫无章法，但你总能在大黄狗暴走乱窜时射中敌人的脚趾头。",
      "guild_warlockFlavor": "你召唤恶魔纯粹是出于好玩，每次都想看看这次又能把什么样的倒霉蛋忽悠成保洁阿姨。",
      "riskText": "你极其随性且缺乏纪律，指挥官们一看到你的测试报告就会开始太阳穴狂跳。"
    }
  ]
};
  window.RACE_RECRUITMENT_DATASET = Object.freeze({
    ...(window.RACE_RECRUITMENT_DATASET || {}),
    "halfling": Object.freeze(data),
  });
})();
