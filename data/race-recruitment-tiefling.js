(() => {
  const data = {
  "meta": {
    "version": 1,
    "raceId": "tiefling",
    "raceNameZh": "提夫林",
    "scope": "race_recruitment_full"
  },
  "raceCard": {
    "raceId": "tiefling",
    "raceNameZh": "提夫林",
    "raceNameEn": "Tiefling",
    "title": "深渊血脉的中二病患者",
    "oneLine": "拥有恶魔血统的非主流边缘人，拉风的角与中二之魂是他们的终极武装。",
    "bodyText": "拥有恶魔血统的非主流边缘人。喜欢用极其夸张的‘中二病’言辞掩饰内心的不安。坚信深色的衣服和拉风的角能增加战斗力。经常在自我感动的忧郁中不小心把酒馆烧了。",
    "tags": [
      "恶魔血统",
      "中二病",
      "重金属",
      "灵魂传销"
    ],
    "warningText": "警告：在与其签订任何契约前，请务必仔细阅读字号小于1号的免责条款，以防灵魂被莫名转让。",
    "recruiterQuote": "“要不要也跟我的宗主签个约？新签约即送深渊一日游哦！”"
  },
  "recruitTargets": [
    {
      "targetId": "guild_warlock",
      "classNameZh": "异常契约审阅处",
      "classNameEn": "Warlock Desk",
      "title": "深渊签单员",
      "oneLine": "比起使用魔法，他们更享受向别人推销‘你要不要也跟我的宗主签个约’的过程。深渊传销大师。",
      "recruiter": "异常契约审阅处书记员",
      "recruitPitch": "比起使用魔法，他们更享受向别人推销‘你要不要也跟我的宗主签个约’的过程。深渊传销大师。",
      "acceptedStyle": "关键门槛：STR 10 / DEX 10 / CON 10 / INT 12 / WIS 10 / CHA 14。通过后会按该路线记录职业试炼倾向。",
      "likelyFailure": "若只展示血脉噱头而无法稳定服务队伍，会被列入观察或转岗名单。",
      "hiddenRoute": "试炼会同时记录其他公会倾向，最终判定可能转荐到更匹配的柜台。",
      "recommendedStats": [
        "str",
        "dex",
        "con",
        "int",
        "wis",
        "cha"
      ],
      "riskTags": [
        "契约",
        "风险",
        "STR",
        "DEX"
      ]
    },
    {
      "targetId": "guild_rogue",
      "classNameZh": "斥候与机关处",
      "classNameEn": "Rogue Office",
      "title": "暗影中二病",
      "oneLine": "潜行前必须先念一段极其尴尬的暗影台词。如果没人听到他的帅气登场，他会觉得潜行毫无意义。",
      "recruiter": "斥候与机关处书记员",
      "recruitPitch": "潜行前必须先念一段极其尴尬的暗影台词。如果没人听到他的帅气登场，他会觉得潜行毫无意义。",
      "acceptedStyle": "关键门槛：STR 10 / DEX 14 / CON 10 / INT 10 / WIS 10 / CHA 12。通过后会按该路线记录职业试炼倾向。",
      "likelyFailure": "若只展示血脉噱头而无法稳定服务队伍，会被列入观察或转岗名单。",
      "hiddenRoute": "试炼会同时记录其他公会倾向，最终判定可能转荐到更匹配的柜台。",
      "recommendedStats": [
        "str",
        "dex",
        "con",
        "int",
        "wis",
        "cha"
      ],
      "riskTags": [
        "潜行",
        "机关",
        "STR",
        "DEX"
      ]
    },
    {
      "targetId": "guild_bard",
      "classNameZh": "联络与士气处",
      "classNameEn": "Bard Office",
      "title": "重金属地狱火",
      "oneLine": "用附带火焰伤害的电吉他进行演奏。他们的音乐通常不需要听懂，只需要感受耳膜被震碎的快感。",
      "recruiter": "联络与士气处书记员",
      "recruitPitch": "用附带火焰伤害的电吉他进行演奏。他们的音乐通常不需要听懂，只需要感受耳膜被震碎的快感。",
      "acceptedStyle": "关键门槛：STR 10 / DEX 10 / CON 12 / INT 10 / WIS 10 / CHA 14。通过后会按该路线记录职业试炼倾向。",
      "likelyFailure": "若只展示血脉噱头而无法稳定服务队伍，会被列入观察或转岗名单。",
      "hiddenRoute": "试炼会同时记录其他公会倾向，最终判定可能转荐到更匹配的柜台。",
      "recommendedStats": [
        "str",
        "dex",
        "con",
        "int",
        "wis",
        "cha"
      ],
      "riskTags": [
        "士气",
        "交涉",
        "STR",
        "DEX"
      ]
    },
    {
      "targetId": "guild_sorcerer",
      "classNameZh": "血脉术法厅",
      "classNameEn": "Sorcerer Hall",
      "title": "混沌纵火犯",
      "oneLine": "任何法术在他们手里最终都会变成不同颜色的火球。他们声称这是混沌的意志，其实只是因为火球最拉风。",
      "recruiter": "血脉术法厅书记员",
      "recruitPitch": "任何法术在他们手里最终都会变成不同颜色的火球。他们声称这是混沌的意志，其实只是因为火球最拉风。",
      "acceptedStyle": "关键门槛：STR 10 / DEX 12 / CON 10 / INT 10 / WIS 10 / CHA 14。通过后会按该路线记录职业试炼倾向。",
      "likelyFailure": "若只展示血脉噱头而无法稳定服务队伍，会被列入观察或转岗名单。",
      "hiddenRoute": "试炼会同时记录其他公会倾向，最终判定可能转荐到更匹配的柜台。",
      "recommendedStats": [
        "str",
        "dex",
        "con",
        "int",
        "wis",
        "cha"
      ],
      "riskTags": [
        "血脉",
        "魔力",
        "STR",
        "DEX"
      ]
    }
  ],
  "physiqueChecks": [
    {
      "id": "tiefling_physique_horns",
      "targetId": "guild_rogue",
      "title": "恶魔之角的烦恼",
      "scene": "作为潜行者，你正试图钻过一个极其狭窄的通风管道。但是你那对极其夸张、极其拉风的恶魔之角死死地卡在了管道的拐角处，进退两难。",
      "prompt": "面对这种因为追求造型而导致的极其尴尬的局面，你如何脱困？",
      "options": [
        {
          "id": "A",
          "text": "你施展了一记『法师之手』，将深渊史莱姆粘液完美地涂抹在角上，并附带『魔法伎俩』播放史诗级登场BGM，随后以极其符合流体力学的『火影跑』姿势，像一条黄油泥鳅般丝滑地滑出了管道。",
          "npcReply": "极致的物理润滑与满分的登场特效。‘你对潜行的理解比泥鳅还要丝滑。’",
          "scoreDelta": {
            "dex": 3,
            "con": 1
          },
          "mbtiDelta": {
            "J": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_rogue": 3
          },
          "alignmentDelta": {
            "control": 2
          },
          "triggerTags": [
            "法师之手",
            "物理润滑",
            "丝滑潜行"
          ],
          "outcomeTone": "合格",
          "branchHint": "极度在乎排面、善用魔法物理双重润滑的特种刺客"
        },
        {
          "id": "B",
          "text": "你极其果断地对通风管施展了『粉碎音波』，瞬间将周围的承重墙炸成废墟。你从灰尘中优雅地走出，整理了一下发型：‘只要干掉所有目击者，就是完美的潜行。’",
          "npcReply": "你完美解决了‘潜行被卡’的问题，顺便摧毁了一栋楼。‘极度硬核的物理爆破潜行大师。’",
          "scoreDelta": {
            "int": 2,
            "wis": 2
          },
          "mbtiDelta": {
            "T": 1,
            "J": 1
          },
          "affinityDelta": {
            "guild_warlock": 2,
            "guild_rogue": 1
          },
          "alignmentDelta": {
            "action": 1
          },
          "triggerTags": [
            "粉碎音波",
            "爆破潜行",
            "物理硬核"
          ],
          "outcomeTone": "偏离",
          "branchHint": "极度信奉“杀光所有目击者就是完美潜行”的狂暴刺客"
        },
        {
          "id": "C",
          "text": "你直接摆烂拒绝通过。你摸出一张全量伪造的《地下城幽闭空间安全许可证》，隔着管道大声警告卫兵这里的犄角净空不达标，并扬言要进行劳工仲裁，成功骗到三个月带薪病假。",
          "npcReply": "盗贼公会第一次收到了带薪休假的劳工仲裁申请。‘你用极度严密的法律武器保护了你的角。’",
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
            "risk": 2
          },
          "triggerTags": [
            "劳工仲裁",
            "伪造证件",
            "带薪休假"
          ],
          "outcomeTone": "危险",
          "branchHint": "精通劳动法、善于用工伤骗保来逃避战斗的法务型盗贼"
        },
        {
          "id": "D",
          "text": "你不仅没想出来，反而把卡住的通风管当成了音响放大器，开始播报长达三个小时的《论深色衣物与有角种族在现代建筑中的边缘化》播客，直到卫兵受不了噪音主动把墙砸了求你闭嘴。",
          "npcReply": "卫兵们为了阻止你的精神污染主动帮你拆了墙。‘……你用极度的废话重塑了建筑结构。’",
          "scoreDelta": {
            "cha": 3,
            "dex": 1
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
            "播客广播",
            "精神污染",
            "废话拆墙"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "随时随地都能进行高强度精神污染的播客奇葩"
        }
      ]
    },
    {
      "id": "tiefling_physique_stigma",
      "targetId": "guild_warlock",
      "title": "异类的狂欢",
      "scene": "你走进了一个极其排外的人类村庄。村民们看到你头上的角和红色的皮肤，极其极其恐惧地举起了粪叉和火把，试图将你驱逐。",
      "prompt": "面对这种充满恶意的歧密，你作何反应？",
      "options": [
        {
          "id": "A",
          "text": "你极其兴奋地凑上前，双眼冒出红光，掏出一份长达五十页的《深渊灵魂分时度假协议》。你极度专业地向愤怒的村民推销，指出用粪叉太落后了，不如加入你的地狱房地产传销网络，下线拉满三人即可免除火刑。",
          "npcReply": "村民们扔下火把，开始疯狂地互相拉下线。‘你把致命的种族仇恨转化为了极其残暴的下线业绩。’",
          "scoreDelta": {
            "cha": 3,
            "int": 1
          },
          "mbtiDelta": {
            "E": 2,
            "T": 1
          },
          "affinityDelta": {
            "guild_warlock": 3
          },
          "alignmentDelta": {
            "action": 2
          },
          "triggerTags": [
            "灵魂分时度假",
            "地狱房地产",
            "传销网络"
          ],
          "outcomeTone": "合格",
          "branchHint": "极度擅长将一切危机转化为深渊传销机会的恶魔销冠"
        },
        {
          "id": "B",
          "text": "你极其冷静地施展了『次级幻影』，让村民手里的粪叉和火把不仅看起来像刚出炉的法棍面包，甚至还散发着迷人的黄油香气。饥饿的暴民瞬间陷入混乱开始啃咬武器，而你优雅地从满地找牙的人群中穿过。",
          "npcReply": "你用碳水化合物的幻象瓦解了信仰的狂热。‘极度实用且极其缺德的战术解围。’",
          "scoreDelta": {
            "wis": 2,
            "cha": 1
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
            "control": 2
          },
          "triggerTags": [
            "法棍幻影",
            "碳水瓦解",
            "缺德解围"
          ],
          "outcomeTone": "偏离",
          "branchHint": "极度狡诈、擅长用缺德幻术制造混乱的战术大师"
        },
        {
          "id": "C",
          "text": "你立刻原地倒下施展『假死术』，但为了确保万无一失，你在倒下前极其熟练地往自己身上挤满了番茄酱，甚至掏出了一份提前写好的《遗嘱》，大声控诉村长就是谋杀你的主谋。村民们怕惹上命案当场作鸟兽散。",
          "npcReply": "村民们看着满地的番茄酱和遗书陷入了极度的恐慌。‘你的碰瓷技术极其登峰造极。’",
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
            "番茄酱假死",
            "遗嘱碰瓷",
            "物理讹诈"
          ],
          "outcomeTone": "危险",
          "branchHint": "极度擅长碰瓷、用物理级装死讹诈全世界的高端骗子"
        },
        {
          "id": "D",
          "text": "you极其离谱地夺过带头大哥的粪叉，用深渊之火将其点燃当作麦克风支架。你不仅没有逃跑，反而原地开启了一场名为“燃烧吧凡人”的重金属摇滚死亡派对，极度狂热的音浪硬生生把暴民变成了互相冲撞的狂热粉丝。",
          "npcReply": "村民们在极度重金属的音浪中疯狂甩头互殴。‘……你用极度的狂乱重塑了村庄的民俗。’",
          "scoreDelta": {
            "cha": 3,
            "con": 1
          },
          "mbtiDelta": {
            "E": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_bard": 2
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "粪叉麦克风",
            "重金属派对",
            "暴民粉丝化"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "极度狂热、能把火刑现场变成重金属音乐节的节奏大师"
        }
      ]
    },
    {
      "id": "tiefling_physique_music",
      "targetId": "guild_bard",
      "title": "恶魔的品味",
      "scene": "为了潜入一个极其极其极其高雅的精灵贵族宴会，你需要伪装成一名乐手。精灵们极其极其极其极其期待你能演奏一曲极其极其极其极其优美的竖琴独奏。",
      "prompt": "作为极其极其极其推崇重金属和爆炸艺术的提夫林，你如何度过这个难关？",
      "options": [
        {
          "id": "A",
          "text": "你直接对着竖琴施展了『灼热金属』，把它当成一把燃烧的电贝斯。你极其狂热地扫弦，用一段高BPM的死亡金属Solo让全场下起火雨和血色花瓣，震耳欲聋的深渊音波直接让精灵贵族的耳膜经历了重金属洗礼。",
          "npcReply": "精灵贵族们在极度的音波震撼中疯狂甩头，彻底抛弃了仪态。‘你用真理般的重金属摧毁了高雅的虚伪。’",
          "scoreDelta": {
            "cha": 3,
            "str": 1
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
            "灼热金属",
            "燃烧贝斯",
            "死亡金属"
          ],
          "outcomeTone": "合格",
          "branchHint": "极度硬核、能让精灵贵族都为之疯狂甩头的重金属教父"
        },
        {
          "id": "B",
          "text": "你极其精明地在琴弦上绑定了极其微小的隐形丝线，召唤出一只受过严格音乐训练的深渊剧毒蜘蛛在琴弦间快速穿梭，弹出完美的古典奏鸣曲。而你本人则只需极其做作地在前面假弹，甚至有空向最富有的贵族抛媚眼。",
          "npcReply": "极其完美的假弹，蜘蛛的指法超越了所有精灵大师。‘你用极度狡猾的深渊外包工程完成了高雅艺术。’",
          "scoreDelta": {
            "int": 2,
            "wis": 2
          },
          "mbtiDelta": {
            "I": 1,
            "J": 1
          },
          "affinityDelta": {
            "guild_rogue": 2,
            "guild_bard": 1
          },
          "alignmentDelta": {
            "control": 1
          },
          "triggerTags": [
            "隐形丝线",
            "蜘蛛外包",
            "做作假弹"
          ],
          "outcomeTone": "偏离",
          "branchHint": "极度精明、擅长将所有技术活外包给召唤物的伪装大师"
        },
        {
          "id": "C",
          "text": "你极其理直气壮地拒绝演奏，并掏出一份长达十页的医学证明，声称自己患有‘急性琴弦创伤后应激障碍(PTSD)’，控诉现场的竖琴唤醒了你祖母被魔法竖琴吃掉的悲惨童年，反向要求精灵领主支付巨额精神损失费。",
          "npcReply": "精灵领主不仅没有怪罪你，反而向你支付了巨额的心理赔偿金。‘你用极其无赖的政治正确榨干了贵族。’",
          "scoreDelta": {
            "wis": -2,
            "dex": -2
          },
          "mbtiDelta": {
            "F": 1
          },
          "affinityDelta": {
            "guild_bard": -2
          },
          "alignmentDelta": {
            "self": 2,
            "risk": 2
          },
          "triggerTags": [
            "急性PTSD",
            "反向索赔",
            "精神损失费"
          ],
          "outcomeTone": "危险",
          "branchHint": "极度擅长利用政治正确和心理疾病进行敲诈勒索的无赖"
        },
        {
          "id": "D",
          "text": "你极其离谱地尝试注入一丝狂野魔法，结果竖琴不仅没有发出声音，反而长出了六条木头腿变成了一只巨大的木螃蟹。这只竖琴螃蟹开始极其狂躁地自己弹奏自己，并追着宴会上的侍者疯狂索要开胃小菜。",
          "npcReply": "宴会变成了极其离谱的竖琴螃蟹追逐战。‘……你的音乐甚至能赋予无机物极度离谱的食欲。’",
          "scoreDelta": {
            "cha": 2,
            "con": 2
          },
          "mbtiDelta": {
            "P": 2,
            "N": 1
          },
          "affinityDelta": {
            "guild_sorcerer": 1
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "狂野魔法",
            "竖琴螃蟹",
            "活化索食"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "极度混乱、随时能把高雅乐器变成生化危机的活化大师"
        }
      ]
    },
    {
      "id": "tiefling_physique_tail",
      "targetId": "guild_sorcerer",
      "title": "失控的魔性尾巴",
      "scene": "在一次严肃的法术对决中，你正准备施展火球术，但你那根平时极度不安分且有自我意识的恶魔尾巴，突然在背后极其下作地对对手做出嘲讽的手势，甚至试图从其法器袋中偷窃施法水晶。",
      "prompt": "在全场考官的注视下，你如何处理尾巴的这出小剧场？",
      "options": [
        {
          "id": "A",
          "text": "你极其冷酷地分出部分狂野奥术能量注入尾巴，令其瞬间化为一柄燃烧的火焰长鞭，在半空中配合你的手势舞出一道极其绚丽的恶魔双重施法轨迹，以百分之两百的威力将对手的防御屏障砸个粉碎。",
          "npcReply": "‘完美的战术协同，你把尾巴的叛逆做成了战术特技。’",
          "scoreDelta": {
            "cha": 3,
            "dex": 1
          },
          "mbtiDelta": {
            "E": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_sorcerer": 3
          },
          "alignmentDelta": {
            "action": 2
          },
          "triggerTags": [
            "火焰长鞭",
            "双重施法",
            "威力加倍"
          ],
          "outcomeTone": "合格",
          "branchHint": "极其擅长利用身体异能进行狂野双重施法的奥术狂人"
        },
        {
          "id": "B",
          "text": "你极其冷静地把左手背在身后，装作正在施展复杂的『盲区幻术』。你的尾巴则丝滑地顺走了对手的施法材料并悄悄塞回你的口袋，同时你微笑着告诉考官，这是在测试对手对隐蔽窃听的被动感知力。",
          "npcReply": "对手直到法术失效才发现材料没了。‘极度顺滑的物理脱困与心理战术。’",
          "scoreDelta": {
            "dex": 3,
            "wis": 1
          },
          "mbtiDelta": {
            "I": 1,
            "T": 1
          },
          "affinityDelta": {
            "guild_rogue": 3
          },
          "alignmentDelta": {
            "control": 2
          },
          "triggerTags": [
            "盲区幻术",
            "尾巴行窃",
            "感知测试"
          ],
          "outcomeTone": "偏离",
          "branchHint": "极度冷静、精通双重掩护与尾巴潜行技术的特工"
        },
        {
          "id": "C",
          "text": "你极其无赖地向考官提交了一份《深渊附属肢体法律独立性免责声明》，声明这根尾巴是你的深渊宗主代持股的独立法人单位，其所作所为产生的任何盗窃行为应直接向宗主追责，与你的躯干法人无关。",
          "npcReply": "法庭和考场都对你这套极其生草的法律分割感到了深深的无力。‘你用极度离谱的法学隔离逃避了盗窃罪名。’",
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
            "独立法人",
            "免责声明",
            "法律隔离"
          ],
          "outcomeTone": "危险",
          "branchHint": "擅长利用极端法学概念将自身恶行转嫁给神明的戏精"
        },
        {
          "id": "D",
          "text": "你极其离谱地直接放弃施法，极其离谱地把尾巴当成吉他拨片，将背后的铁链拽出来当琴弦，当场弹奏了一首极度诡异的深渊探戈。你的尾巴甚至拉着对手的尾巴跳起了极其整齐的拉丁舞，整场对决变成了斗舞大会。",
          "npcReply": "对手被强行拉入舞蹈，甚至在转圈时把法杖给甩飞了。‘……你的尾巴确实具有超越凡人的社交牛逼症。’",
          "scoreDelta": {
            "cha": 3,
            "con": 1
          },
          "mbtiDelta": {
            "P": 2
          },
          "affinityDelta": {
            "guild_bard": 3
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "尾巴探戈",
            "社交牛逼",
            "斗舞大会"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "极度混乱、能用奇葩行为把血腥决斗变成拉丁舞会的老狐狸"
        }
      ]
    },
    {
      "id": "tiefling_physique_eyes",
      "targetId": "guild_warlock",
      "title": "氪金狗眼的探照灯",
      "scene": "你们小队潜入了一处被遗忘的黑暗神殿，要求绝对隐蔽。但由于你情绪有些紧张，你的提夫林血脉出现异变，你那双血红的恶魔之眼突然像两盏一千瓦的卤素探照灯一样，射出两道极其刺眼的红光，将整个大厅照得纤毫毕现。",
      "prompt": "在这道红光即将吸引所有骷髅卫兵注意力的一瞬间，你如何解围？",
      "options": [
        {
          "id": "A",
          "text": "你极其迅速地盯住大厅中央的黄金雕像，启动『深渊视界』。你将光线伪装成古代神殿机关触发的“安防激光扫射”，用威严的恶魔语宣告：『神殿自检中，无关骷髅请退避。』骷髅们以为是程序自检，乖乖退回了壁画里。",
          "npcReply": "‘用眼神扮演系统警报，你的欺骗技术极具科技感。’",
          "scoreDelta": {
            "cha": 3,
            "int": 1
          },
          "mbtiDelta": {
            "E": 1,
            "J": 1
          },
          "affinityDelta": {
            "guild_warlock": 3
          },
          "alignmentDelta": {
            "lawful": 1
          },
          "triggerTags": [
            "深渊视界",
            "系统自检",
            "恶魔宣告"
          ],
          "outcomeTone": "合格",
          "branchHint": "擅长将自身的异常特质融入战术掩护的冷静博弈者"
        },
        {
          "id": "B",
          "text": "you极其冷静地掏出两片红色的彩色玻璃片卡在眼眶前，开始快速眨眼。利用红光和眨眼频率，你完美模拟了极其复杂的『求救信号莫尔斯电码』，成功向远处游荡的暗影潜行者小队发送了包抄指令，抢先清场。",
          "npcReply": "you把生理尴尬变成了战术信号灯。‘完美的临场指挥与摩斯电码秀。’",
          "scoreDelta": {
            "dex": 2,
            "wis": 2
          },
          "mbtiDelta": {
            "T": 2
          },
          "affinityDelta": {
            "guild_rogue": 3
          },
          "alignmentDelta": {
            "control": 1
          },
          "triggerTags": [
            "摩斯电码",
            "战术信号",
            "快速清场"
          ],
          "outcomeTone": "偏离",
          "branchHint": "极度理性、善于把一切突发状况转化为数字编码的特工"
        },
        {
          "id": "C",
          "text": "你极其果断地捂住双眼大声惨叫，声称自己遭到了神殿灯光污染导致的“工伤致盲”，并掏出一份写好的《神殿光环境与尘埃粒子合规申诉书》，威胁要给守护神殿的死神发律师函，以争取带薪医疗期。",
          "npcReply": "你甚至连死神都敢碰瓷。‘你用极度死皮赖脸的法律诉讼完成了对死亡的嘲讽。’",
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
            "工伤致申诉",
            "律师函",
            "带薪医疗"
          ],
          "outcomeTone": "危险",
          "branchHint": "极其擅长利用伪造的伤病诉求进行碰瓷与逃避责任的讼棍"
        },
        {
          "id": "D",
          "text": "你极其离谱地直接在红光前跳起了极其鬼畜的极乐净土，同时用『魔法伎俩』在神殿天花板投射出一个旋转的玻璃彩球。你用红光作为激光特效，把原本恐怖的黑暗神殿强行改造成了极其嗨皮的深渊迪斯科地下酒吧。",
          "npcReply": "守卫的骷髅们被欢快的音乐打动，当场拆下自己的大腿骨开始在红光下蹦迪。‘……你的眼睛真是一流的派对氛围灯。’",
          "scoreDelta": {
            "cha": 3,
            "con": 1
          },
          "mbtiDelta": {
            "P": 2
          },
          "affinityDelta": {
            "guild_bard": 3
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "神殿迪斯科",
            "玻璃彩球",
            "大腿骨蹦迪"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "极度抽象、能把考古遗迹瞬间变成摇滚夜店的奇葩艺术家"
        }
      ]
    }
  ],
  "trialSets": {
    "guild_warlock": [
      {
        "id": "tiefling_warlock_contract",
        "targetId": "guild_warlock",
        "title": "恶魔的KPI",
        "scene": "你的宗主（一位深渊领主）向你下达了本月的灵魂收割KPI，要求你在三天内拉拢十个信徒。否则他将收回你的法力。",
        "prompt": "面对这种充满压榨的职场要求，你如何完成指标？",
        "options": [
          {
            "id": "A",
            "text": "你极其硬核地无视了活人市场，直接冲进死灵法师的墓地。你施展『死者交谈』，极其强硬地跟十具刚复活的骷髅签了深渊契约，并向宗主狡辩：‘死人的灵魂在法律意义上也是灵魂，甚至还不需要交社保。’",
            "npcReply": "深渊领主看着这批毫无生气的骷髅信徒陷入了长久的沉默。‘你用极度硬核的卡bug方式完成了KPI。’",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "E": 2,
              "N": 1
            },
            "affinityDelta": {
              "guild_warlock": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "死者交谈",
              "骷髅契约",
              "法律卡bug"
            ],
            "outcomeTone": "合格",
            "branchHint": "极度钻营、连死人羊毛都要薅的契约漏洞大师"
          },
          {
            "id": "B",
            "text": "你极其精明地在主城开了一家完全合法的‘圣骑士心理创伤免费疗养院’。在极其复杂的患者入院登记表背面，你用极其微小的字号规定：接受抗焦虑药水八五折优惠的前提是自愿转让灵魂所有权。精准收割。",
            "npcReply": "你极其精准地收割了圣骑士的灵魂，甚至还赚了他们的医药费。‘你是个极度冷血且高效的心理学恶魔。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "J": 2,
              "T": 1
            },
            "affinityDelta": {
              "guild_warlock": 2,
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "心理疗养院",
              "隐蔽条款",
              "优惠收割"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度精明、将心理治疗与灵魂收割完美结合的商业奇才"
          },
          {
            "id": "C",
            "text": "你不仅没有去拉人，反而极其熟练地向宗主提交了一份‘不可抗力免责声明’，声称当地的冒险者公会已经垄断了下沉市场，要求宗主在指派KPI前先提供一笔极其庞大的‘市场下沉开拓补贴’，成功反向白嫖了一大笔经费。",
            "npcReply": "你不仅没干活，反而成功从宗主那里骗到了一大笔活动经费。‘你用极其油滑的商业套话反向白嫖了魔王。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_warlock": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "不可抗力",
              "市场开拓补贴",
              "反向白嫖"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度圆滑、精通职场甩锅与反向白嫖经费的糊弄学宗师"
          },
          {
            "id": "D",
            "text": "你极其离谱地完全无视了KPI，转手写了一部风靡大陆的音乐剧《汉密尔顿：深渊领主》。你把宗主捧成了全大陆最火的顶流偶像，导致成千上万的狂热粉丝主动把灵魂抵押给你，只为了换取一张极其珍贵的VIP后台握手券。",
            "npcReply": "深渊领主被迫出道成为了位面顶级偶像。‘……你用极度离谱的饭圈文化超额完成了深渊指标。’",
            "scoreDelta": {
              "int": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "音乐剧",
              "顶流偶像",
              "饭圈收割"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度离谱、能把恶魔契约变成饭圈打榜的超级制作人"
          }
        ]
      },
      {
        "id": "tiefling_warlock_recruitment",
        "targetId": "guild_warlock",
        "title": "深渊传销大会",
        "scene": "你为宗主组织了一场声势浩大的“灵魂红利分享会”，然而主讲的深渊大魔鬼在穿过传送门时因为超重被海关扣留，台下上百名交了入场费的冒险者开始群情激愤。",
        "prompt": "面对即将退票暴动的观众，你如何救场？",
        "options": [
          {
            "id": "A",
            "text": "你极其淡定地走上台，掏出一本《深渊成功学》，用高昂的语气大喊：『真正的强者不需要听别人演讲，因为你们自己就是未来的深渊股东！』随后当场分发灵魂理财白皮书，成功让台下开始疯狂购买期权。",
            "npcReply": "‘你甚至能在魔鬼缺席的情况下，把空气卖给这群冒险者。’",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_warlock": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "深渊成功学",
              "期权认购",
              "现场洗脑"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其擅长利用情绪共鸣进行无实物灵魂推销的洗脑大师"
          },
          {
            "id": "B",
            "text": "你极其冷静地启动备用幻影法术，播放录制好的大魔鬼虚拟影像。在幻影中，你细心地插入了大量“深渊底层商业逻辑解构”与“灵魂去中心化管理”等黑话PPT，用枯燥的行业术语把台下的观众全部催眠。",
            "npcReply": "‘你成功用行业垃圾话避免了暴动。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_warlock": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "幻影录屏",
              "黑话PPT",
              "催眠救场"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极其理性、精通行业黑话与标准化危机公关的文书奇才"
          },
          {
            "id": "C",
            "text": "你一拍大腿极其浮夸地倒在台上大哭，声称大魔鬼的失联是因为被反传销组织非法拘禁，而作为承办方的你也是受害者，且因心力交瘁患上“创伤后宣讲功能障碍”，要求在场所有人反向支付你退票慰问金。",
            "npcReply": "‘连骗子的入场费你都要反向碰瓷，你真是个天才。’",
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
              "装哭碰瓷",
              "慰问金",
              "反向索赔"
            ],
            "outcomeTone": "危险",
            "branchHint": "擅长将一切组织失误归咎于健康原因并反向讹诈的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地在台上架起了一口油锅，声称这是地狱温泉体验项目。你邀请台下的半兽人上去洗澡，并用极其鬼畜的唢呐吹奏了一曲地狱摇滚，把分享会强行改造成了“铁板烧半兽人”狂欢嘉年华。",
            "npcReply": "‘……你硬是把商业骗局办成了邪恶美食节。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "油锅温泉",
              "鬼畜唢呐",
              "美食狂欢"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其抽象、能把任何讲座现场改造成鬼畜庙会的行为艺术家"
          }
        ]
      },
      {
        "id": "tiefling_warlock_negotiation",
        "targetId": "guild_warlock",
        "title": "霸王条款的辩护",
        "scene": "一位正义的圣骑士带着他的律师找上门，指控你用欺诈手段诱骗了一位无辜的年轻农夫签订了灵魂典当合同，要求立刻无条件撤销契约。",
        "prompt": "面对法律与神圣双重施压，你如何为自己申辩？",
        "options": [
          {
            "id": "A",
            "text": "你极其熟练地翻出合同第397页的附录，指出上面用隐形墨水写着：『如对本合同有异议，需由深渊仲裁庭进行终审。』你微笑着询问圣骑士是否愿意前往第九地狱与判官面对面开庭，对方当场哑口无言。",
            "npcReply": "‘你对地狱管辖权的运用比魔鬼还要熟练。’",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "J": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_warlock": 3
            },
            "alignmentDelta": {
              "lawful": 2
            },
            "triggerTags": [
              "隐形条款",
              "管辖权异议",
              "仲裁开庭"
            ],
            "outcomeTone": "合格",
            "branchHint": "极度在乎契约文本与管辖漏洞的冷酷法务契约员"
          },
          {
            "id": "B",
            "text": "you极其冷静地拿出一份《灵魂转售补充协议》，向圣骑士的律师指出：其实该农夫的灵魂已经由你打包成AAA级理财产品转售给了隔壁神殿，用于冲抵信托基金。如果撤销，隔壁神殿将面临破产，完美转嫁矛盾。",
            "npcReply": "‘你成功把一件简单的合同纠纷做成了复杂的金融衍生品骗局。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_warlock": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "金融转售",
              "打包理财",
              "债务转嫁"
            ],
            "outcomeTone": "偏离",
            "branchHint": "理性至上、擅长将灵魂证券化以逃避法律责任的金融鬼才"
          },
          {
            "id": "C",
            "text": "你立刻假装晕倒，并声称圣骑士身上的圣光对你造成了严重的“跨位面辐射伤害”，要求圣骑士赔偿你下半生的深渊护肤品费用，并当场拟定了一份《辐射伤害赔偿抵消灵魂转让合同》逼对方签字。",
            "npcReply": "‘圣骑士第一次见到碰瓷碰到圣光头上的提夫林。’",
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
              "圣光辐射",
              "伪造伤害",
              "反向签字"
            ],
            "outcomeTone": "危险",
            "branchHint": "擅长将对方的神圣属性作为碰瓷筹码的奇葩合同工"
          },
          {
            "id": "D",
            "text": "你极其离谱地直接撕毁了合同，但在空中将纸屑吹成了无数只会唱赞美诗的纸蝴蝶。你拉起圣骑士的手跳起了华尔兹，并大声歌颂：『爱是不用签字的契约！』在对方陷入极度懵逼时，顺手摸走了他的钱包。",
            "npcReply": "‘……你用极度的离谱和煽情，完成了物理意义上的财产转移。’",
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
              "chaotic": 2
            },
            "triggerTags": [
              "纸屑蝴蝶",
              "当街华尔兹",
              "顺手牵羊"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度荒谬、用强烈的舞台表演掩盖偷窃行径的艺术盗贼"
          }
        ]
      },
      {
        "id": "tiefling_warlock_audit",
        "targetId": "guild_warlock",
        "title": "深渊财务审计",
        "scene": "三位来自深渊税务总局的链魔审计官突然降临，声称你最近报销的“拉拢信徒公关费”存在严重的虚开发票嫌疑，如果查实将取消你的施法资格并送入冰油锅惩罚。",
        "prompt": "面对阻神恶煞的税务审计官，你如何应对？",
        "options": [
          {
            "id": "A",
            "text": "你极其淡定地翻出你的差旅日志，用密密麻麻的『合理避税条款』和『跨位面差旅补助细则』进行逐一辩驳。你甚至指出审计官本人的传送门费用报销标准超标，成功把审计大会变成了反向审计培训班。",
            "npcReply": "‘链魔审计官头一次在税务文件上被人类血脉给绕晕了。’",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "J": 2
            },
            "affinityDelta": {
              "guild_warlock": 3
            },
            "alignmentDelta": {
              "lawful": 2
            },
            "triggerTags": [
              "合理避税",
              "反向审计",
              "账目核对"
            ],
            "outcomeTone": "合格",
            "branchHint": "精通地狱税务法与做账漏洞的资深财务官"
          },
          {
            "id": "B",
            "text": "你极其冷静地拿出一套《深渊去中心化账本》。你向审计官展示了你用狂野奥术编写的链式记账法，声称每一笔消费都在虚空中有节点共识，不存在任何篡改可能。复杂的数学公式直接让链魔的大脑过载宕机。",
            "npcReply": "‘你成功用高科技黑话把深渊税务变成了科技泡沫。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_warlock": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "去中心化账本",
              "链式记账",
              "公式过载"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度理智、用技术壁垒糊弄地狱监管的奥术极客"
          },
          {
            "id": "C",
            "text": "你极其无赖地当场撕碎了所有发票，并吞了下去。随后捂着肚子在地上打滚，声称审计官提供的笔墨有剧毒，要求地狱总局进行工伤赔偿，否则你将向深渊劳工保护协会发起绝食抗议。",
            "npcReply": "‘生吞证据加反手碰瓷，你简直是深渊无赖的标杆。’",
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
              "吞噬证据",
              "绝食抗议",
              "假装中毒"
            ],
            "outcomeTone": "危险",
            "branchHint": "极其擅长消灭物理证据并用悲情牌进行勒索的极端骗子"
          },
          {
            "id": "D",
            "text": "你极其离谱地把审计表格折成了三只千羽鹤，并在上面施加了火球术。你开始用大号伴奏，把千羽鹤当成烟花在审计官头顶燃放，宣称这是为了庆祝『深渊税务审计节』而特意准备的摇滚魔术秀。",
            "npcReply": "‘……你硬是把财务危机过成了跨年晚会。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "千纸鹤烟花",
              "大号伴奏",
              "税务节魔术"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度抽象、能把销毁账本说成是节日庆典的狂热乐手"
          }
        ]
      },
      {
        "id": "tiefling_warlock_promotion",
        "targetId": "guild_warlock",
        "title": "魔王的晋升试炼",
        "scene": "为了获得晋升为“深渊高级代理人”的资格，你必须进入火元素位面的焦土炼狱，在不使用任何抗性装备的前提下，带回一颗温度高达上千度的熔岩之心。",
        "prompt": "面对足以将人烤干的极端高温，你如何完成带货任务？",
        "options": [
          {
            "id": "A",
            "text": "你极其狂热地引导体内的提夫林地狱火血脉，将自己伪装成熔岩之心的『合法共生寄主』。你用法术契约与熔岩之心签订了“短期租赁免税协议”，让它自动飘进你的手中，连一根汗毛都没被烫伤。",
            "npcReply": "‘你连没脑子的火元素核心都能签下租赁协议。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "E": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_warlock": 3
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "地狱火血脉",
              "租赁协议",
              "合法寄生"
            ],
            "outcomeTone": "合格",
            "branchHint": "精通生命体与无机物契约置换的高阶代购员"
          },
          {
            "id": "B",
            "text": "你极其冷静地施展了『冰霜射线』与『控制水体』，在熔岩之心周围制造了一个极度精密的真空隔热力场。你用悬浮术将核心托起，像运送精密仪器一样将其安全送回，整个过程温度下降了不到一度。",
            "npcReply": "‘完美的物理隔热与工程学操作。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "真空隔热",
              "悬浮运送",
              "物理操作"
            ],
            "outcomeTone": "偏离",
            "branchHint": "理性至上、用严密的奥术工程学解决高温难题的学术家"
          },
          {
            "id": "C",
            "text": "你极其无赖地在入口处用番茄酱和泥沙涂满全身，假装自己刚从里面逃出来并受了重伤。你拿着一张盖了假章的《火元素安全生产违规认定书》，控诉宗主没有提供合格的劳保手套，反向索要工伤假条。",
            "npcReply": "‘你宁可写十页劳动仲裁信，也不愿意去捡地上的石头。’",
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
              "假装重伤",
              "安全认定书",
              "工伤索偿"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度抗拒物理劳动、擅长用安全规定讹诈考官的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地把焦土炼狱当成了天然自助烧烤摊。你用深渊之火点燃了一把肉串，现场烤起了地狱大腰子，并大声弹奏电吉他，硬生生把焦土炼狱改造成了“地狱摇滚烧烤音乐节”。",
            "npcReply": "‘……你居然用上千度的熔岩之心来保温你的烤羊肉串。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "地狱烧烤",
              "大号伴奏",
              "摇滚烧烤节"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、善于把危险的试炼地变成烧烤摊的抽象乐手"
          }
        ]
      },
      {
        "id": "tiefling_warlock_marketing",
        "targetId": "guild_warlock",
        "title": "地狱特产的推销",
        "scene": "你的宗主研发了一款名为“深渊熔岩辣酱”的黑暗美食，要求你将其推广到注重清淡饮食的精灵神庙中，并实现至少一百瓶的订购量。",
        "prompt": "面对只吃露水和水果的精灵僧侣，你如何完成销售任务？",
        "options": [
          {
            "id": "A",
            "text": "你极其狂热地将辣酱包装成“地狱排毒火山精粹”。你向精灵僧侣宣称，这款辣酱能用纯正的火焰能量净化凡世积攒的碳水毒素。你当场喝下一整瓶，并施展『奇术』让双眼喷火，大喊：『这就是灵魂升华的温度！』精灵们大受震撼，当场爆单。",
            "npcReply": "‘你成功把地狱刑具包装成了高端轻食养生品。’",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_warlock": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "排毒精粹",
              "奇术喷火",
              "养生推销"
            ],
            "outcomeTone": "合格",
            "branchHint": "极具专导性、能把深渊垃圾卖出天价的超级推销员"
          },
          {
            "id": "B",
            "text": "你极其冷静地分析了精灵的生理结构。you指出辣酱中的地狱辣椒素可以通过稀释十万倍，制作成极其高效的“防野兽花粉防狼喷雾”。you起草了一份《森林防卫体系升级方案》，成功将辣酱作为军需物资打包卖给了神庙护卫队。",
            "npcReply": "‘极其高明的战术拆分与B2B军需推销。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_warlock": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "辣椒素稀释",
              "防狼喷雾",
              "军需升级"
            ],
            "outcomeTone": "偏离",
            "branchHint": "理性实用、善于通过工业改造和B2B合作完成任务的商业奇才"
          },
          {
            "id": "C",
            "text": "你极其无赖地在神庙门口摆烂。you故意吃了一勺辣酱然后极其做作地倒地抽搐，声称神庙的空气与辣酱发生化学反应导致你中毒，要求神庙僧侣为你的“跨位面消化不良”负责，并购买一百瓶作为和解条件。",
            "npcReply": "‘神圣的精灵神庙还是第一次遇到这种辣酱瓷娃娃。’",
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
              "假装抽搐",
              "和解条件",
              "恶意索赔"
            ],
            "outcomeTone": "危险",
            "branchHint": "精通利用对方善良天性进行商业勒索的职业骗子"
          },
          {
            "id": "D",
            "text": "你极其离谱地把辣酱倒进了神庙的圣水池里。池水瞬间沸腾并散发出香浓的火锅底料味。你掏出大号和肉片，现场组织了一场“圣水火锅蹦迪大会”，让原本清心寡欲的精灵僧侣开始疯狂抢肉吃。",
            "npcReply": "‘……你竟然把神圣的圣水池变成了地狱鸳鸯锅。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "圣水火锅",
              "大号演奏",
              "圣水火锅节"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、善于通过破坏公共设施来创造美食派对的狂暴乐手"
          }
        ]
      },
      {
        "id": "tiefling_warlock_crisis",
        "targetId": "guild_warlock",
        "title": "深渊合同危机",
        "scene": "一个传言在冒险者中传开：你之前签下的所有灵魂合同中，其实在第99页都藏着“死后自动变为深渊劣魔”的隐藏条款。愤怒的客户们手持合同，将你的办公室围得水泄不通。",
        "prompt": "面对信任崩塌与群情激愤的客户，你如何化解公关危机？",
        "options": [
          {
            "id": "A",
            "text": "你极其高调地召开“转世劣魔职业规划发布会”。你大张旗鼓地指出劣魔虽然底薪低，但包吃包住且有“无限晋升空间”（有机会进化为大魔鬼）。你当场展示了几位成功进化的劣魔学长PPT，成功把危机办成了深渊春招会。",
            "npcReply": "‘你竟然把变成地狱炮灰吹成了外企管培生项目。’",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_warlock": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "劣魔职业规划",
              "管培生吹嘘",
              "发布会救场"
            ],
            "outcomeTone": "合格",
            "branchHint": "擅长用话术将地狱苦工包装成高阶职业机遇的营销鬼才"
          },
          {
            "id": "B",
            "text": "你极其冷静地出示了一份《劣魔自愿转股补充协议》。你向客户解释，劣魔条款其实是“地狱合伙人期权激励计划”，死后变成劣魔其实是获得了地狱股份代持权。你用复杂的股权架构图成功绕晕了所有维权者。",
            "npcReply": "‘你用复杂的现代金融股权术语把这群冒险者全整懵了。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_warlock": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "转股协议",
              "合伙人期权",
              "金融欺骗"
            ],
            "outcomeTone": "偏离",
            "branchHint": "理智冷静、精通现代公司金融制度漏洞的法务高层"
          },
          {
            "id": "C",
            "text": "你极其熟练地关门摆烂。你掏出扬声器大喊自己也是被深渊宗主逼迫的受害者，并宣称自己因客户的威胁患上了“严重的突发性恶魔焦虑症”，要求在场的所有维权客户先赔偿你精神折旧费，否则拒绝谈判。",
            "npcReply": "‘作为骗人的一方，你比被骗的还要委屈。’",
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
              "关门摆烂",
              "焦虑症赔偿",
              "拒绝谈判"
            ],
            "outcomeTone": "危险",
            "branchHint": "极其擅长反客为主、用心理病史勒索受害者的无耻官僚"
          },
          {
            "id": "D",
            "text": "你极其离谱地把办公室的契约书全部折成了会飞的纸炸弹，并用深渊之火点燃。你一边吹唢呐一边在办公室里大跳踢踏舞，大喊：『合同作废，大家来玩踩气球！』把维权现场强行改造成了疯狂踩炸弹派对。",
            "npcReply": "‘……你硬生生用纯粹的物理爆破和精神污染把维权现场给炸平了。’",
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
              "chaotic": 2
            },
            "triggerTags": [
              "纸炸弹舞会",
              "大号演奏",
              "疯狂派对"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、善于用爆破和极度抽象的行为强行遣散人群的疯子"
          }
        ]
      }
    ],
    "guild_rogue": [
      {
        "id": "tiefling_rogue_shadow",
        "targetId": "guild_rogue",
        "title": "中二的潜行",
        "scene": "你正在执行暗杀任务，目标就在前方的阳台上。但此时月光极其明亮，照亮了整个庭院，完全没有任何阴影可以隐蔽。",
        "prompt": "作为自诩为‘黑夜之子’的提夫林盗贼，你如何靠近目标？",
        "options": [
          {
            "id": "A",
            "text": "你极其张狂地走到庭院对面，用『魔法伎俩』放了一场极度刺眼、极其夸张的连环烟花秀。趁着所有守卫和目标都被强光致盲并大喊 ‘哇哦’ 的时候，你大摇大摆地走过去，在光天化日之下极其高调地完成了暗杀。",
            "npcReply": "极其高调的掩护，极其低调的刺杀。‘你证明了只要光线足够亮，亮到致盲，那它就是绝对的暗影。’",
            "scoreDelta": {
              "dex": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "E": 2,
              "S": 1
            },
            "affinityDelta": {
              "guild_rogue": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "致盲烟花",
              "光天化日",
              "反向暗影"
            ],
            "outcomeTone": "合格",
            "branchHint": "极度张狂、善用光污染制造“反向暗影”的战术刺客"
          },
          {
            "id": "B",
            "text": "你极其冷静地施展了『易容术』，完美伪装成目标的贴身保镖。你直接走到目标面前，极其严厉地大喊：‘大人，这里不安全！’然后极其顺滑地护送他进入了一个极度黑暗的安全屋，在没有任何人看见的地方解决了问题。",
            "npcReply": "极其顺滑的渗透。‘你不寻找阴影，你直接把目标带进了你准备好的阴影里。’",
            "scoreDelta": {
              "wis": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "I": 2,
              "J": 1
            },
            "affinityDelta": {
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "易容保镖",
              "骗入暗室",
              "顺滑渗透"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度冷静、精通心理战术与身份伪装的渗透大师"
          },
          {
            "id": "C",
            "text": "你极其无赖地掏出一个安全帽戴上，拿出一个小本本，以‘刺客公会职业安全与健康(OHS)监察员’的身份走到目标面前。你极其严肃地对其庭院‘过度照明’开出了一笔巨额罚单，拿着罚款潇洒离去，并在任务报告里写上‘客户不配合调查，任务取消’。",
            "npcReply": "你不仅没有完成暗杀，还极其无赖地收了一笔合规罚款。‘你用极其荒诞的合规检查逃避了战斗。’",
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
              "合规检查",
              "过度照明罚单",
              "职业安全"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度稳妥、擅长用虚假合规名义进行敲诈勒索的法务盗贼"
          },
          {
            "id": "D",
            "text": "你极其离谱地直接把『黑暗术』释放在自己的头顶，导致自己完全变成了一个瞎子。接着你像个极其狂躁的保龄球一样，在庭院里一边狂奔一边尖叫‘我就是黑夜！’，最后居然靠着极其纯粹的狗屎运，把目标从阳台上撞飞了出去。",
            "npcReply": "全场的守卫都被你这极度抽象的自爆式袭击震撼得忘记了阻拦。‘……你用极度薛定谔的潜行法完成了任务。’",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_sorcerer": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "自带黑暗术",
              "自爆式冲锋",
              "薛定谔潜行"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、全靠瞎猫碰死耗子进行硬核暗杀的抽象刺客"
          }
        ]
      },
      {
        "id": "tiefling_rogue_escape",
        "targetId": "guild_rogue",
        "title": "艺术性的越狱",
        "scene": "你被关进了高层石塔的地牢中，双手被反铐着魔封锁。守卫正在桌子旁打瞌睡，而唯一的钥匙挂在墙壁的挂钩上，距离你至少三米远。",
        "prompt": "在法力被锁且双手受限的情况下，你如何脱困？",
        "options": [
          {
            "id": "A",
            "text": "你极其敏捷地用脚趾夹住一根稻草，伸进脚踝的系带，利用提夫林尾巴的柔韧性，在半空中完成了一个高难度的“蝎子摆尾”，用尾巴尖端极其精准地勾下钥匙，并丝滑地用尾巴把钥匙插进手铐锁孔解开束缚。",
            "npcReply": "‘你那条尾巴比绝大多数盗贼的手指还要灵活。’",
            "scoreDelta": {
              "dex": 3,
              "str": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "尾巴蝎子摆尾",
              "尾巴解锁",
              "丝滑脱困"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其擅长利用物理体能与尾巴灵活度进行极限脱困的特种刺客"
          },
          {
            "id": "B",
            "text": "你极其冷静地观察了锁具结构。你利用墙壁上的铁锈和手铐的缝隙，用极其均匀的频率制造“微型共振”，通过震动磨损机械结构。三个小时后，锁芯应声而断，且没有发出半点惊动守卫的声响。",
            "npcReply": "‘极具耐心与物理逻辑的硬核越狱。’",
            "scoreDelta": {
              "int": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "I": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "微型共振",
              "无声解锁",
              "机械震断"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度理智、用微物理机制和超常耐心进行解密的高阶特工"
          },
          {
            "id": "C",
            "text": "你极其无赖地开始大声呼救。你向守卫控诉地牢里的稻草潮湿，导致你患上了“突发性跨位面风湿骨痛”，扬言如果不立刻给你换到带温泉的VIP单间，你将向城防司令部递交环境侵权诉讼，硬是吓得守卫打开了门锁。",
            "npcReply": "‘守卫这辈子第一次遇到坐牢坐得像旅游维权的犯人。’",
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
              "大声维权",
              "环境侵权诉讼",
              "温泉单间"
            ],
            "outcomeTone": "危险",
            "branchHint": "擅长在身陷囹圄时利用规章制度反向威胁看守的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地在牢房里开始用嘴巴和尾巴合奏死亡摇滚。你用脚踢铁栅栏当作架子鼓，用嗓音模拟电吉他，极其鬼畜的刺耳噪音直接把打瞌睡的守卫折磨到耳膜流血，为了让你闭嘴，他主动开锁跪求你越狱。",
            "npcReply": "‘……你硬是把越狱办成了音波摧毁现场。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "音响肉体化",
              "铁栅栏架子鼓",
              "噪音摧毁"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极其抽象、能用极端噪音和精神污染把狱警逼疯的奇葩乐手"
          }
        ]
      },
      {
        "id": "tiefling_rogue_heist",
        "targetId": "guild_rogue",
        "title": "博物馆奇妙夜",
        "scene": "你的目标是盗取帝国博物馆里展出的“深渊红宝石”。宝石放在一个极其灵敏的重力压感台上，只要重量发生0.1克的偏差，警报就会拉响，届时数十名精锐圣骑士将在十秒内包围展厅。",
        "prompt": "在没有法力辅助且不能触发警报的前提下，你如何下手？",
        "options": [
          {
            "id": "A",
            "text": "你极其张狂地用嘴巴咬住一根涂有深渊史莱姆胶水的线。你整个人像蜘蛛般倒挂在天花板上，用胶水线精准粘住宝石，并在抽离宝石的一瞬间，以极其精确的力道用尾巴将一颗重量完全相同的假番茄酱蜡丸拍在压感台上，分毫不差。",
            "npcReply": "‘你对重力天平的掌控力精准得像个无良的药剂师。’",
            "scoreDelta": {
              "dex": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "S": 2
            },
            "affinityDelta": {
              "guild_rogue": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "重力天平",
              "番茄酱蜡丸",
              "蜘蛛倒挂"
            ],
            "outcomeTone": "合格",
            "branchHint": "极限物理控、擅长通过高空特技与精密力学进行盗窃的刺客"
          },
          {
            "id": "B",
            "text": "你极其冷静地对展厅的重力传导石施加了微量的『法术缓降』。你计算出压感机构的弹簧恢复系数，用一根空心金属细管将细砂缓慢吹入压感台底部卡住弹簧，让压感机械暂时瘫痪，随后优雅地拿走红宝石。",
            "npcReply": "‘用严密的物理公式让警报器直接瘫痪，极其高明。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "弹簧系数",
              "细砂瘫痪法",
              "物理失效"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度理智、擅长用工程力学原理直接物理降维警报装置的极客"
          },
          {
            "id": "C",
            "text": "你极其无赖地直接抱起宝石，站在压感台上不下来。you拿出一张伪造的《展品重力安全性评估报告》，隔空大喊大厅的地板存在塌陷隐患，威胁要起诉博物馆让其破产。守卫为了平息事端，决定把宝石低价卖给你以换取免责协议。",
            "npcReply": "‘你竟然用诉讼把偷窃变成了强买强卖，服了。’",
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
              "赖在台上",
              "安全评估报告",
              "免责置换"
            ],
            "outcomeTone": "危险",
            "branchHint": "精通商法和讹诈、用极其泼皮的方式把盗窃转为诉讼置换的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地掏出一台重金属电吹风，用最强的热风顶着宝石悬浮。你吹唢呐伴奏，把重力压感台当成了打地鼠玩具，用屁股在上面疯狂踩踏，震天响的唢呐声硬是让巡逻守卫以为是烟花晚会而没过来。",
            "npcReply": "‘……你硬是把精密潜行搞成了拆迁蹦迪现场。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "电吹风悬浮",
              "鬼畜踩踏",
              "唢呐晚会"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、善于通过极端噪音和奇葩行为震慑守卫的怪胎"
          }
        ]
      },
      {
        "id": "tiefling_rogue_shadowbox",
        "targetId": "guild_rogue",
        "title": "暗影中二病的对决",
        "scene": "一位自称“无影神偷”的同行在酒馆里公开挑衅你，声称你的暗影台词都是垃圾，并向你发起挑战：在一炷香的时间内，谁能悄无声息地剪掉酒馆老板的胡子，谁就是真正的暗影之王。",
        "prompt": "面对尊严的挑战，你如何证明自己才是第一中二？",
        "options": [
          {
            "id": "A",
            "text": "你极其兴奋地接受了挑战。你用『魔法伎俩』在酒馆天花板上制造出极其深邃、极其拉风的黑洞特效，并当场念诵长达三分钟的暗影降临誓言。趁老板抬头看特效并大喊『卧槽』的瞬间，你以极其丝滑的极速，用尾巴夹住剪刀秒掉了胡子。",
            "npcReply": "‘用满分的降临特效和极致的速度完成了最炫的剪胡子。’",
            "scoreDelta": {
              "dex": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_rogue": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "黑洞特效",
              "暗影誓言",
              "尾巴极速剪"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其在乎登场排面且拥有极高身体控制力的中二刺客"
          },
          {
            "id": "B",
            "text": "你极其冷静地在一旁研磨一种强效的“无色无味迷药”。你极其精准地把迷药吹进老板的麦酒里。等老板陷入深度睡眠后，你极其整洁地将其胡子理成最符合美学的几何图形，全程零分贝，同行看得目瞪口呆。",
            "npcReply": "‘冷静、用药、无声，你这才是真正专业的潜行作风。’",
            "scoreDelta": {
              "wis": 3,
              "int": 1
            },
            "mbtiDelta": {
              "I": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "迷药麦酒",
              "几何剃胡",
              "零噪音操作"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度理智、善于利用化学制剂和战术规划完美执行任务的盗贼"
          },
          {
            "id": "C",
            "text": "你极其无赖地向老板出示了一份伪造的《酒馆理发服务业合规安全与健康卫生协议》。你大声警告老板，他的胡子藏有寄生虫，违反了《地下城卫生法》，威胁要上报卫生局吊销营业执照，吓得老板自己拿剪刀把胡子剃了。",
            "npcReply": "‘你竟然能用食品卫生法让目标自我剪胡子。’",
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
              "卫生法警告",
              "自我剃须",
              "执照威胁"
            ],
            "outcomeTone": "危险",
            "branchHint": "精通利用对方对监管机构的恐惧以达成个人目的的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地抢过同行的剪刀，施展『狂野变大术』将其变成三米长。你开始狂吹大号，把剪刀当成螺旋桨在酒馆里横冲直撞，硬生生把老板和同行的胡子连同酒馆的桌椅一起剃成光秃秃的白地。",
            "npcReply": "‘……你硬是把剃胡子大赛办成了伐木拆迁现场。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "巨型剪刀",
              "狂野大号",
              "剃光酒馆"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、把精细活全部搞成大范围物理破坏的奇葩"
          }
        ]
      },
      {
        "id": "tiefling_rogue_trap",
        "targetId": "guild_rogue",
        "title": "拆弹专家的烦恼",
        "scene": "你面前有一个极其复杂的黄金宝箱，锁眼处被灌注了『爆燃印记』。只要锁芯被触动，或者用魔法强行破解，宝箱就会瞬间自爆，将周围十米内的一切化为灰烬。",
        "prompt": "在物理与魔法双重封锁下，你如何安全拆解陷阱？",
        "options": [
          {
            "id": "A",
            "text": "你极其张狂地冷笑，用法师之手将一根注满了“深渊防火史莱姆粘液”的细针插进锁芯。你用地狱火血脉包裹双手，在针尖引发极小范围的“地狱反向引爆”，以毒攻毒地将爆燃印记提前冲抵，随后丝滑撬开宝箱。",
            "npcReply": "‘用深渊地狱火对冲爆燃印记，你的拆弹技术极具艺术美感。’",
            "scoreDelta": {
              "dex": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "反向引爆",
              "防火史莱姆",
              "以毒攻毒"
            ],
            "outcomeTone": "合格",
            "branchHint": "擅长利用地狱血脉与高难度对冲技术解决陷阱的爆破型刺客"
          },
          {
            "id": "B",
            "text": "你极其冷静地从工具包里掏出多面镜和长焦透镜。you利用光学折射，将神殿微弱的圣光折射成极其精细的光束射入锁孔，缓慢融化爆燃符文的魔力连线，像做心脏手术一样在不触碰弹簧的情况下切断引信。",
            "npcReply": "‘极其高超的光学融引信技术，毫无破绽。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "光学折射",
              "光束融引信",
              "精密解构"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度理智、擅长用物理光学和微操手术解决魔力陷阱的极客"
          },
          {
            "id": "C",
            "text": "你极其无赖地在箱子前抱头蹲下，拿出一份《易爆物品存放合规隐患通知书》。you大声警告神殿守卫，这里的宝箱存在严重违规，威胁要起诉他们违反了《地下城消防法》，吓得守卫连滚带爬地主动把箱子抬出了神殿送给你。",
            "npcReply": "‘你竟然能用消防安全法逼神殿卫兵帮你搬炸弹。’",
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
              "消防隐患通知",
              "消防法起诉",
              "卫兵搬运"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度稳妥、擅长用行业安全规定威胁对手以套取利益的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地直接用狂野魔法把黄金宝箱变成了一只极其生草的黄金尖叫鸡。黄金尖叫鸡开始一边尖叫一边疯狂吐金币，自爆印记也变成了喷出的彩带。你在一旁吹大号伴奏，把黄金尖叫鸡当成宠物带回了酒馆。",
            "npcReply": "‘……你硬是把致命的炸弹盒变成了金币孵化鸡。’",
            "scoreDelta": {
              "cha": 2,
              "con": 2
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "黄金尖叫鸡",
              "狂野变形",
              "彩带彩爆"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、喜欢用无厘头变形术直接重塑物质结构的怪咖"
          }
        ]
      },
      {
        "id": "tiefling_rogue_fencing",
        "targetId": "guild_rogue",
        "title": "黑市销赃的博弈",
        "scene": "你成功盗取了城主夫人的蓝宝石项链，正准备在黑市上卖给一位极其贪婪的销赃商。然而，对方一眼看出项链是赃物，故意将价格压低到原价的百分之一，并威胁如果不卖就立刻举报你。",
        "prompt": "面对黑吃黑的威胁，你如何拿回你的应得利益？",
        "options": [
          {
            "id": "A",
            "text": "你极其张狂地冷笑，掏出一枚刻有深渊宗主标记的徽章在手里抛玩。你用极其阴冷的声音大喊：『你听说过深渊分时度假契约吗？』同时你的尾巴悄无声息地伸进商人的口袋，将其账簿偷了出来，并以此反向要挟，逼其以双倍价格收购。",
            "npcReply": "‘反向敲诈加无声行窃，你这套黑吃黑技术满分。’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "徽章恐吓",
              "账本窃取",
              "双倍收购"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其擅长反向心理威慑与小偷小摸的职业黑吃黑专家"
          },
          {
            "id": "B",
            "text": "你极其冷静地指出了项链上的每一处防伪标记。you掏出放大镜，详尽地向商人讲解这枚蓝宝石在学术界的名字、其历史背景以及其黑市交易的最佳时机，甚至帮其起草了一份《宝石合法化重包装方案》，成功说服他以八折收购并长期合作。",
            "npcReply": "‘你硬是把黑市交易做成了专业的艺术品投资讲座。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "防伪鉴定",
              "历史讲座",
              "方案说服"
            ],
            "outcomeTone": "偏离",
            "branchHint": "理性冷静、善于用学术价值和商业合作打动对方的儒雅随和派"
          },
          {
            "id": "C",
            "text": "你极其无赖地在黑市门口嚎啕大哭。you大声控诉商人犯有“欺诈未成年人与弱势提夫林罪”，大喊自己因为他的压价导致“急性心脏供血不足”，威胁要起诉其违反了《黑市合规自律公约》，逼得周围同行围观，商人只得高价买下封口。",
            "npcReply": "‘你在黑市里讲消协公约，真是个顶级无赖。’",
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
              "大哭维权",
              "黑市公约",
              "高价封口"
            ],
            "outcomeTone": "危险",
            "branchHint": "擅长在非法交易场所利用道德约束和泼皮手段碰瓷的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地掏出一把大号，对着项链猛吹。狂野的声波硬是把蓝宝石项链震成了十只闪闪发光蓝色小甲虫。甲虫们开始满街乱爬并到处咬商人的屁股。你一边大跳踢踏舞，一边趁乱用面粉糊了商人的脸并抱走了项链。",
            "npcReply": "‘……你硬是把销赃会办成了昆虫灾难蹦迪秀。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "大号声波",
              "蓝宝石昆虫",
              "面粉偷袭"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、习惯用奇葩魔法和暴力恶作剧把交易现场砸烂的疯子"
          }
        ]
      },
      {
        "id": "tiefling_rogue_hideout",
        "targetId": "guild_rogue",
        "title": "秘密基地的围剿",
        "scene": "你们盗贼公会的秘密基地被守卫包围了。大门被用撞木疯狂撞击，通风口被塞入了催泪烟雾。公会同伴们乱成一团，而城防卫兵即将在三十秒内破门而入。",
        "prompt": "面对插翅难逃的合围，你如何带领大家撤退？",
        "options": [
          {
            "id": "A",
            "text": "你极其张狂地站在最前面，用『魔法伎俩』释放出极其庞大的深渊幻影巨兽堵在门口。你手持双匕，一边念诵中二台词，一边以极其丝滑的滑行步法，用尾巴将后墙的承重支撑木全部砍断，引发精准塌方，砸出一条直通下水道的逃生通道。",
            "npcReply": "‘精准爆破与炫酷幻象，你让撤退看起来像终结者谢幕。’",
            "scoreDelta": {
              "dex": 3,
              "str": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "幻影巨兽",
              "尾巴断木",
              "塌方通道"
            ],
            "outcomeTone": "合格",
            "branchHint": "极具表现力、能在绝境中利用物理爆破砸开生路的硬核刺客"
          },
          {
            "id": "B",
            "text": "你极其冷静地拉下了秘密基地内的一系列机械拉杆。you利用气流反转原理，把催泪烟雾反向吹向卫兵。同时，you精确计算出每个同伴的负重，带领大家以极其精密的队列，通过事先布置好的滑轨矿车无声撤离。",
            "npcReply": "‘极度严密的逆风战术和滑轨撤退，无懈可击。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "气流反转",
              "滑轨矿车",
              "精密队列"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度理智、用工程机械和气流计算带领团队脱困的战术指挥"
          },
          {
            "id": "C",
            "text": "你极其无赖地直接推门走出去，举起双手大喊这里被认定为“历史建筑文化遗产”。you向卫兵军官提交了一份伪造的《文化遗产拆迁与军事活动限制令》，警告他们任何强拆都将面临跨国法庭的传唤，成功拖延了三个小时让同伴撤退。",
            "npcReply": "‘你竟然能用强拆法阻挡军队进军，真是个奇葩。’",
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
              "遗产限制令",
              "强拆起诉",
              "拖延战术"
            ],
            "outcomeTone": "危险",
            "branchHint": "擅长在武装冲突中利用行政法规和诉讼拖延对手的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地在门口引爆了狂野魔法，把撞木变成了一只巨型黄金腊肠犬。腊肠犬开始极其狂躁地舔卫兵的脸，大门喷出了彩带。你一边吹唢呐一边带领大家跳着踢踏舞从前门大摇大摆地走了出去。",
            "npcReply": "‘……你硬是把惨烈的围剿战变成了宠物狗蹦迪大会。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "腊肠犬撞门",
              "大号开道",
              "前门撤离"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、善于利用狂野变形将恐怖战局化为无厘头派对的怪人"
          }
        ]
      }
    ],
    "guild_sorcerer": [
      {
        "id": "tiefling_sorcerer_chaos",
        "targetId": "guild_sorcerer",
        "title": "混沌的火球",
        "scene": "你被要求展示你对魔法的精确控制。考官在五十米外放了一个极其微小的苹果，要求你用一发魔法飞弹精确击中它，不能伤及其他。",
        "prompt": "作为提夫林术士，你的魔法展示是：",
        "options": [
          {
            "id": "A",
            "text": "你极其狂妄地冷笑一声，直接施展『变大/缩小术』将整个五十米的考场缩小成一个鞋盒大小。你极其随意地捏起那个变得只有细菌大小的苹果，用附带了『魔法飞弹』的牙签极其暴力地将其捅穿，然后又把考场恢复了原状。",
            "npcReply": "考官看着你极其嚣张的物理命中陷入了沉思。‘你用极其暴力的空间折叠抹平了准星不够的缺陷。’",
            "scoreDelta": {
              "cha": 3,
              "str": 1
            },
            "mbtiDelta": {
              "E": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_sorcerer": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "缩小考场",
              "牙签捅穿",
              "空间折叠"
            ],
            "outcomeTone": "合格",
            "branchHint": "极度狂妄、善用降维打击解决精确度问题的空间狂徒"
          },
          {
            "id": "B",
            "text": "你极其冷血地召唤出一只微型小魔鬼，把『魔法飞弹』的水晶塞进它手里，命令它极其精准地飞过去，把飞弹直接塞进苹果的中心。为了销毁作弊证据，你甚至在命中的瞬间顺手把小魔鬼和苹果一起炸成了灰。",
            "npcReply": "极其残忍且极度高效的战术外包。‘你不相信自己的准头，但你极度相信资本与剥削的力量。’",
            "scoreDelta": {
              "int": 3,
              "dex": 2
            },
            "mbtiDelta": {
              "J": 2,
              "T": 1
            },
            "affinityDelta": {
              "guild_sorcerer": 2,
              "guild_warlock": 1
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "小魔鬼外包",
              "塞进苹果",
              "销毁证据"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度冷血、为达目的随时牺牲召唤物的实用主义法师"
          },
          {
            "id": "C",
            "text": "你极其虚伪地掏出一份满是折痕的《咒法系过敏症诊断书》，在考官面前开始了极其浮夸的表演。你假装一看到苹果就诱发了极度严重的深渊哮喘，疯狂咳嗽直到口吐白沫，硬生生逼得考官为了避免摊上医疗事故而给了你及格。",
            "npcReply": "你用极其精湛的演技和一份伪造病历骗过了魔法测试。‘你的厚脸皮比任何防御法术都坚不可摧。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_sorcerer": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "过敏诊断书",
              "深渊哮喘",
              "碰瓷及格"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度无赖、精通伪造病历和装病逃避考核的戏精术士"
          },
          {
            "id": "D",
            "text": "你极其离谱地在魔法飞弹里混入了一大团狂野魔法。飞弹不仅没有击碎苹果，反而极其生草地把苹果变成了一只会跳踢踏舞且具有极度攻击性的追踪信鸽。信鸽扑腾着翅膀，极其精准地一头撞死在考官的脸上，爆开漫天的苹果汁。",
            "npcReply": "考官擦掉脸上的苹果汁，给了你满分。‘……你用极其离谱的双向奔赴重新定义了命中率。’",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_bard": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "狂野魔法",
              "信鸽苹果",
              "脸部爆破"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度抽象、脑洞极其清奇的活化魔改大师"
          }
        ]
      },
      {
        "id": "tiefling_sorcerer_surge",
        "targetId": "guild_sorcerer",
        "title": "狂野魔法的茶会",
        "scene": "在魔法学院的尊贵茶会上，你体内的混沌魔力发生暴走，你面前的精致锡兰红茶突然化为了一座小型“焦油岩浆喷泉”，并且即将引爆周围贵重的水晶吊灯。",
        "prompt": "面对即将被岩浆摧毁的茶会大厅，你如何挽救局势？",
        "options": [
          {
            "id": "A",
            "text": "你极其狂妄地冷笑，不仅不灭火，反而引导地狱火血脉把整桌茶点全部化为焦炭。你用魔力将岩浆塑造成一条极其拉风的“岩浆黑龙”，大喊：『这就是深渊红茶的奥义！』在半空中将黑龙引爆为漫天的红色火花，化险为夷。",
            "npcReply": "‘你把魔力失控吹成了火山艺术大师秀。’",
            "scoreDelta": {
              "cha": 3,
              "str": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "岩浆塑龙",
              "地狱火血脉",
              "火焰烟花"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其狂妄、善于利用地狱火将魔力失控化为视觉盛宴的术士"
          },
          {
            "id": "B",
            "text": "你极其冷静地对喷泉施加了『重力逆转』和『温度锁定』。你将岩浆的温度控制在摄氏零度，并将其塑造成一件晶莹剔透的“黑曜石茶具雕塑”，摆在桌子中央，反向证明这是你精心准备的雕塑艺术展示。",
            "npcReply": "‘完美的重力控制与危机转化，毫无破绽。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "重力逆转",
              "温度锁定",
              "黑曜石雕塑"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度理智、用微物理机制和重力控制实现精确防灾的科学家"
          },
          {
            "id": "C",
            "text": "你极其无赖地当场倒在岩浆旁边。you捂着大腿大喊自己被学校提供的“劣质茶水”严重烧伤，并拿出一份写好的《学院特种饮品安全责任书》，要求校方终身免除你的学费并补偿带薪疗养假。",
            "npcReply": "‘校领导看着你嘴角的红茶渍，陷入了长久的沉思。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_sorcerer": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "假装烧伤",
              "饮品责任书",
              "终身免学费"
            ],
            "outcomeTone": "危险",
            "branchHint": "精通商法和讹诈、利用环境隐患逼学校妥协的法务奇葩"
          },
          {
            "id": "D",
            "text": "你极其离谱地在喷泉里丢入了几颗爆米花玉米。狂野的岩浆瞬间把玉米炸成了漫天飞舞、带火焰伤害的爆米花雨。你一边狂吹大号，一边让漫天的爆米花在贵妇的裙摆间跳舞，把茶会办成了爆米花游园会。",
            "npcReply": "‘……你硬是把火山爆发变成了游乐场爆米花机。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "岩浆爆米花",
              "大号演奏",
              "游园会狂欢"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、擅长用离奇想法破坏一切优雅社交的混世魔王"
          }
        ]
      },
      {
        "id": "tiefling_sorcerer_fireball",
        "targetId": "guild_sorcerer",
        "title": "艺术就是爆炸",
        "scene": "你们在调查一处地下图书馆时被噬书虫包围了。馆长极其严肃地警告你：『藏书价值连城，绝对不能用火法术，否则你将赔偿十万金币！』",
        "prompt": "在不能用常规火球术且要消灭噬书虫的限制下，你如何施法？",
        "options": [
          {
            "id": "A",
            "text": "你极其狂傲地冷笑，直接施展『空间压缩术』将所有书架的藏书塞进一个微型亚空间袋中。随后你极其张狂地释放了一记全功率『超魔·地狱火风暴』，把空荡荡的图书馆连同所有虫子炸成废墟，最后又把亚空间的书放了回来。",
            "npcReply": "‘你成功实现了物理意义上的空地爆破，书完好无损。’",
            "scoreDelta": {
              "cha": 3,
              "str": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_sorcerer": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "亚空间打包",
              "全功率火风暴",
              "物理清空"
            ],
            "outcomeTone": "合格",
            "branchHint": "极度狂傲、精通超魔技巧与亚空间折叠的狂暴火法师"
          },
          {
            "id": "B",
            "text": "你极其冷静地对图书馆施加了『局部真空术』，切断了噬书虫周围的氧气供应，使其窒息而死。同时，you精确调整魔力输出，将温度控制在绝对不点燃纸张的451华氏度以下，用余热烘干了发霉的书籍。",
            "npcReply": "‘不仅消灭了虫子，甚至还顺便帮图书馆完成了除湿保养。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "局部真空",
              "控温烘干",
              "除湿保养"
            ],
            "outcomeTone": "偏离",
            "branchHint": "理智冷静、用精密的热力学公式解决化学火灾隐患的极客"
          },
          {
            "id": "C",
            "text": "你极其无赖地指着馆长桌上的防火标志，声称这个标志字号不合规导致你受到了严重的“火系法力倒流精神创伤”。you拿出一份《学院防火规范缺陷索赔书》，大声警告要起诉图书馆直到其被查封，成功把馆长吓跑。",
            "npcReply": "‘你对安全法条的运用比你对魔法的控制还要熟练。’",
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
              "防火标志缺陷",
              "法力倒流创伤",
              "起诉索赔"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度稳妥、擅长用建筑合规漏洞反向起诉客户以逃避责任的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地把狂野魔法注入一只大号中。你吹出一段走音的BGM，把所有的噬书虫变成了会吃纸张废屑并产出高级墨水的小蜜蜂。小蜜蜂开始在图书馆里跳起了极其鬼畜的芭蕾舞，馆长看着满地的墨水陷入了石化。",
            "npcReply": "‘……你硬是把虫灾变成了现代艺术墨水工坊。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "狂野大号",
              "墨水小蜜蜂",
              "蜜蜂芭蕾"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、喜欢用意想不到的生态变形彻底颠覆常理的艺术术士"
          }
        ]
      },
      {
        "id": "tiefling_sorcerer_clone",
        "targetId": "guild_sorcerer",
        "title": "分身术的暴动",
        "scene": "你尝试施展超魔分裂，创造了一个魔法克隆分身帮你抄写古籍。然而分身遗传了你全部的偷懒基因，它不仅把笔折了，还极其狂妄地宣称它才是本体，试图把你锁进地下室去代替它干活。",
        "prompt": "面对这个比你还要嚣张、还要想摆烂的分身，你如何处理？",
        "options": [
          {
            "id": "A",
            "text": "你极其狂妄地冷笑，掏出一份《深渊宗主二阶段转包合同》。you指出分身作为第二级法人代表，必须无条件代偿你欠宗主的全部高利贷债务。分身看了一眼十万金币的利滚利账单，当场跪下哭求你把它销毁。",
            "npcReply": "‘你竟然用高利贷负债反向逼疯了自己的克隆体。’",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_warlock": 3
            },
            "alignmentDelta": {
              "lawful": 1
            },
            "triggerTags": [
              "债务转包",
              "利滚利账单",
              "自愿消亡"
            ],
            "outcomeTone": "合格",
            "branchHint": "极度在乎商业负债分割、擅长用债务武器反向消灭敌人的契约员"
          },
          {
            "id": "B",
            "text": "你极其冷静地对分身施加了『能量反馈反转』。you计算出它的法力维持震荡频率，用一根铜丝将自己的发带与分身的扣带相连，使其每一次偷懒动作都会变成给你充电的蓄电池，把它当成全天候跑步发电机。",
            "npcReply": "‘把分身的怠工转化成了物理电能，极高明的工程学榨取。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "反馈反转",
              "铜丝发电机",
              "物理榨取"
            ],
            "outcomeTone": "偏离",
            "branchHint": "理智冷静、善于用能量置换原理彻底奴役召唤物的极客"
          },
          {
            "id": "C",
            "text": "你极其无赖地直接躺在地上摆烂。you对分身大喊：『既然你是本体，那么城防军昨天开的十张违停罚单、还有高利贷的催收统统由你来付！』you甚至掏出伪造的《精神病免责证明》，要求分身每个月给你发零花钱。",
            "npcReply": "‘克隆体第一次后悔自己继承了本体的厚脸皮。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_sorcerer": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "罚单转移",
              "精神病证明",
              "零花钱索赔"
            ],
            "outcomeTone": "危险",
            "branchHint": "极其擅长把生活重担和财务黑洞无赖推卸给别人的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地直接用狂野魔法把分身变成了一只巨型黄金尖叫鸭。鸭子开始在房间里极其狂躁地踩着踢踏舞，并狂吐金币。你在一旁狂吹大号，把尖叫鸭当成打击乐器，和它一起演奏起地狱重金属交响乐。",
            "npcReply": "‘……你硬是把克隆体暴动变成了黄金鸭子乐团。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "黄金尖叫鸭",
              "大号节奏",
              "打击乐交响"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、习惯用奇葩变形术解决一切人事危机的抽象派"
          }
        ]
      },
      {
        "id": "tiefling_sorcerer_catalyst",
        "targetId": "guild_sorcerer",
        "title": "不靠谱的法器",
        "scene": "你新购买的施法媒介（一个会说话的深渊头骨）突然在期末考核中发了疯，每次你准备施展复杂的奥术时，它就会在你手中用极其极其鬼畜的嗓音大声讲冷笑话，导致你的施法音调被彻底带偏。",
        "prompt": "面对这个大声捣乱的头骨，你如何完成法术考核？",
        "options": [
          {
            "id": "A",
            "text": "你极其狂妄地冷笑，直接顺着头骨的冷笑话语调施法。you将冷笑话的音波共振与提夫林地狱火魔法相结合，开发出了一门全新的『超魔·地狱鬼畜爆裂法』，把考场前方的钢靶子直接炸成了一张笑脸。",
            "npcReply": "‘你把法器捣乱硬生生开发成了一门新法术，极具创造力。’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_sorcerer": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "鬼畜爆裂法",
              "冷笑话共振",
              "笑脸钢靶"
            ],
            "outcomeTone": "合格",
            "branchHint": "极具天赋、能把噪音干扰转化为新型爆破魔法的混沌术士"
          },
          {
            "id": "B",
            "text": "你极其冷静地掏出两片极度精密的隔音软木塞，死死堵住头骨的耳道和嘴巴。you利用光学折射镜片，将头骨内部逸散的魔力光线重新汇聚，绕过声音机制，改用电磁偏振激发奥术飞弹，完美正中红心。",
            "npcReply": "‘完美的声学隔离与电磁激发改造，极度硬核。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "软木隔音",
              "光学偏振",
              "电磁飞弹"
            ],
            "outcomeTone": "偏离",
            "branchHint": "理智冷静、善于用电磁和光学工程手段强行静音噪音源的极客"
          },
          {
            "id": "C",
            "text": "你极其无赖地把头骨拍在考官面前。you指控头骨存在严重的“出厂噪音分贝违规”，并掏出一份《深渊商贸法合规评估书》，声称这导致你患上了“严重的心脏杂音创伤”，起诉学校采购伪劣产品，要求直接给满分。",
            "npcReply": "‘考官这辈子没见过把法器故障做成商贸诉讼的学生。’",
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
              "噪音违规",
              "采购诉讼",
              "心脏创伤索赔"
            ],
            "outcomeTone": "危险",
            "branchHint": "擅长利用商业法规和伪造病历将器材故障转嫁给学校的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地直接用狂野魔法把头骨变成了一只极其生草的黄金尖叫风琴。每次它讲冷笑话，你就疯狂踩风琴，把冷笑话变成鬼畜的交响乐。你一边狂吹大号，一边让考场里的桌椅在摇滚乐里飞速转圈。",
            "npcReply": "‘……你硬是把期末考试办成了疯狂马戏团电音节。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "尖叫风琴",
              "大号狂踩",
              "狂舞桌椅"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、善于利用狂野魔法将严肃考试变成迪斯科舞会的狂人"
          }
        ]
      },
      {
        "id": "tiefling_sorcerer_portal",
        "targetId": "guild_sorcerer",
        "title": "错误的传送门",
        "scene": "你尝试施展空间传送回到酒馆，但因为狂野魔力的扰动，你极其不幸地把传送门直接开在了主城大教堂的洗礼池池底。巨大的水流开始朝池底疯狂倒灌，圣职者们举着法杖大喊『有恶魔入侵洗礼池！』",
        "prompt": "面对即将被圣水淹没并被当作恶魔逮捕的窘境，你如何逃生？",
        "options": [
          {
            "id": "A",
            "text": "你极其狂妄地冷笑，不仅不关闭传送门，反而顺手施展了『超魔·重力偏转』。you将倒灌的圣水全部偏转成向上喷射的“圣光喷泉大秀”，并用提夫林地狱火将水花染成极其炫酷的荧光绿，踩着喷泉在空中华丽滑行逃离。",
            "npcReply": "‘把严重的魔法事故办成了全城瞩目的荧光喷泉秀。’",
            "scoreDelta": {
              "cha": 3,
              "str": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "重力偏转",
              "荧光喷泉",
              "喷泉滑行"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其狂妄、擅长通过视觉特效和重力魔法化险为夷的表演狂"
          },
          {
            "id": "B",
            "text": "你极其冷静地对洗礼池施加了『局部结冰术』和『水压均衡力场』。you将倒灌的水流瞬间冻结成一圈环形的“真空水幕障壁”，完全隔离了水压，随后计算出最佳的空间跃迁公式，无声无息地在光影死角闪现回酒馆。",
            "npcReply": "‘严密的冰动力学与无声的空间跃迁，教科书般的撤退。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "局部结冰",
              "水压均衡",
              "死角跃迁"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度理智、用结冰工程和空间跳跃无声脱困的科学家"
          },
          {
            "id": "C",
            "text": "你极其无赖地当场躺在水池里。you大声控诉教堂的洗礼池深度不达标，导致你传送时发生了严重的“跨位面脑震荡”，并掏出一份《大教堂洗礼水质合规索赔书》，威胁要给教皇发律师函，逼得主教只得退让并送你出大门。",
            "npcReply": "‘教堂的圣职者们第一次见到能在洗礼池里碰瓷的恶魔血脉。’",
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
              "脑震荡碰瓷",
              "水质索赔书",
              "教皇律师函"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度稳妥、擅长在神圣场所利用行政合规和碰瓷要挟的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地在池底施展了狂野魔法，把洗礼水全部变成了极度香浓的起泡可乐。你开始吹起唢呐，把洗礼池改造成了“可乐温泉嘉年华”，带着大批信徒在可乐里大跳蹦迪迪斯科，大呼：『可乐圣光照耀你我！』",
            "npcReply": "‘……你硬是把庄严的教堂洗礼办成了可乐派对狂欢节。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "起泡可乐",
              "唢呐伴奏",
              "可乐蹦迪"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、喜欢用无厘头流体改造彻底砸烂宗教仪式的怪胎"
          }
        ]
      },
      {
        "id": "tiefling_sorcerer_wildlife",
        "targetId": "guild_sorcerer",
        "title": "混沌宠物的进化",
        "scene": "你饲养的深渊小火蜥蜴不小心吞下了你一颗尚未稳定的『狂野魔力水晶』，身体瞬间膨胀成一头十米高、长着翅膀的荧光绿巨龙，正极其兴奋地在城郊喷出大量的绿色肥皂泡火焰，将周围的农舍全变成了肥皂泡城堡。",
        "prompt": "面对这头魔性大发且随时可能爆炸的宠物，你如何降服它？",
        "options": [
          {
            "id": "A",
            "text": "你极其狂妄地大笑，踩着魔力飞轮直接冲上巨龙的脊背。you用地狱火血脉强行与巨龙体内的狂野魔力进行同频共振，将其魔性火焰化为一道极其炫酷的荧光绿烟花秀，大喊：『艺术就是爆炸！』在一声巨响中把多余魔力安全引爆。",
            "npcReply": "‘你不仅没有受伤，反而骑着火花巨龙在空中跳了一场华丽的探戈。’",
            "scoreDelta": {
              "cha": 3,
              "str": 1
            },
            "mbtiDelta": {
              "E": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "同频共振",
              "魔力引爆",
              "荧光绿探戈"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其狂妄、擅长通过魔力共振和暴力压制彻底降服野兽的驯兽师"
          },
          {
            "id": "B",
            "text": "你极其冷静地掏出多光谱折射镜。you精确计算出巨龙眼部对绿色光的偏振吸收率，用多道极细的『彩色奥术射线』在其视网膜前投射出虚拟的三维激光逗猫棒，成功将其引诱进一个坚固的亚空间防爆坑中锁定。",
            "npcReply": "‘完美的偏振光学与高科技逗猫棒，巨龙毫无反抗。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "多光谱折射",
              "激光逗猫棒",
              "亚空间锁"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度理智、精通光学折射与精准物理诱导的学术型术士"
          },
          {
            "id": "C",
            "text": "你极其无赖地在农舍废墟前大哭。you拿出一张伪造的《野生动物保护法特种宠物免责条款》，向赶来的领主声称巨龙是“合法注册的深渊情感治疗宠物”，其行为属于“不可抗力情绪宣泄”，反向起诉领主没有提供足够的放飞空域。",
            "npcReply": "‘领主头一次见到带着十米巨龙碰瓷的无赖。’",
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
              "情感宠物免责",
              "空域索赔",
              "起诉领主"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度稳妥、善于利用野生动物保护法和荒唐概念讹诈政府的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地直接用狂野魔法把巨龙的咆哮声全部变成了鬼畜迪斯科BGM。巨龙喷出的肥皂泡火焰变成了旋转的玻璃霓虹球。你一边狂吹大号，一边带着全村的羊群在泡泡城堡里大跳拉丁舞，把现场办成了乡村泡泡蹦迪会。",
            "npcReply": "‘……你硬是把物种突变事故过成了盛大的乡村迪斯科派对。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "鬼畜迪斯科",
              "霓虹彩球",
              "乡村泡泡舞"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、善于将危险事故化为鬼畜嘉年华派对的抽象大师"
          }
        ]
      }
    ],
    "guild_bard": [
      {
        "id": "tiefling_bard_concert",
        "targetId": "guild_bard",
        "title": "重金属地狱火",
        "scene": "你们小队被一群狂暴的半兽人包围了。战士们已经力竭，必须有人站出来吸引敌人的注意力，争取突围的时间。",
        "prompt": "作为队伍里的提夫林重金属乐手，你的个人演唱会开始了：",
        "options": [
          {
            "id": "A",
            "text": "你极其狂热地施展了『奇术』，将自己的嗓门放大了三百倍，同时掏出一把长满尖刺的深渊肩背式键盘。你极其嚣张地在满是油腻术的泥坑里滑跪，奏响了一段极其硬核的融脸级死亡金属。半兽人的大脑在极度的音波震撼中直接蓝屏当机了。",
            "npcReply": "半兽人们丢下武器，疯狂地向你抛掷战利品以示膜拜。‘你用极度硬核的重金属魅力征服了战场。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "E": 2,
              "S": 1
            },
            "affinityDelta": {
              "guild_bard": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "奇术扩音",
              "深渊键盘",
              "蓝屏当机"
            ],
            "outcomeTone": "合格",
            "branchHint": "极度狂热、能把绝命突围变成万人演唱会的重金属巨星"
          },
          {
            "id": "B",
            "text": "你极其精明地施展了『奥图迷舞』，并极其巧妙地将其混入了一首极度洗脑的动感迪斯科神曲中。整个狂暴的半兽人大军极其诡异地被强制拉平了智商，开始极其整齐划一地跳起了大型广场舞，为你队友的撤退铺平了极其宽阔的道路。",
            "npcReply": "极度优雅且极其高效的群体控场。‘你把血腥的修罗场变成了极度欢乐的广场舞大妈阵地。’",
            "scoreDelta": {
              "int": 3,
              "cha": 2
            },
            "mbtiDelta": {
              "N": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_bard": 2,
              "guild_warlock": 1
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "奥图迷舞",
              "迪斯科神曲",
              "群体广场舞"
            ],
            "outcomeTone": "偏离",
            "branchHint": "极度精明、擅长用强制性欢乐魔法进行群体降智的控场大师"
          },
          {
            "id": "C",
            "text": "你极其自私地秒开了一个仅限单人的『隐形术』，随后极其熟练地扔出一个预先录制好“救命啊！我们在这里！”的魔法留声机。在留声机把所有半兽人都吸引到反方向时，你极其淡定地吃着三明治，大摇大摆地独自撤离了战场。",
            "npcReply": "你的队友和半兽人看着你留下的留声机，陷入了极度的迷茫。‘你用极其冷血的声东击西保全了自己。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_bard": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "单人隐形",
              "留声机诱饵",
              "卖队友撤离"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度自私、随时准备用假死或隐身卖队友的高阶跑路大师"
          },
          {
            "id": "D",
            "text": "你极其离谱地对着战场中央施展了『反转重力』，同时极其狂躁地吹起了一把走音极其严重的大号。所有的半兽人极其无助地飘向半空，像愤怒的陀螺一样不停旋转，而你极其生草地为他们配上了极其欢乐的马戏团受苦BGM。",
            "npcReply": "半兽人在极度离谱的失重音乐会中呕吐不止。‘……你用极度的混乱和黑色幽默瓦解了敌军的尊严。’",
            "scoreDelta": {
              "cha": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "P": 2,
              "F": 1
            },
            "affinityDelta": {
              "guild_sorcerer": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "反转重力",
              "大号伴奏",
              "失重马戏团"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度抽象、总能把严肃战斗变成极其生草的马戏团表演的奇葩"
          }
        ]
      },
      {
        "id": "tiefling_bard_battle",
        "targetId": "guild_bard",
        "title": "斗乐场的死亡对决",
        "scene": "一位来自精灵贵族的竖琴乐手在广场上向你发起乐律决斗。他弹奏了一首极其柔美、旨在净化心灵的古典圣歌，周围的听众纷纷露出陶醉而虔诚的神色。",
        "prompt": "作为提夫林死亡金属的唯一继承人，你如何接招？",
        "options": [
          {
            "id": "A",
            "text": "你极其狂热地冷笑，直接在电吉他上施加『灼热金属』。你疯狂扫弦，将高亢刺耳的地狱嘶吼与强烈的破音失真音浪融为一体，音波中甚至附带了爆燃火花。重金属的狂暴引力瞬间撕碎了柔美的圣歌，听众们开始狂乱地甩头蹦迪。",
            "npcReply": "‘你用真理般的电吉他噪音给精灵贵族洗了脑。’",
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
              "action": 2
            },
            "triggerTags": [
              "灼热金属",
              "破音失真",
              "甩头蹦迪"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其狂热、坚信重金属才能征服一切灵魂的硬核死亡摇滚歌手"
          },
          {
            "id": "B",
            "text": "你极其冷静地在一旁配合他的节奏，用古筝弹奏了一段极具杀伤力的“十面埋伏”和弦。你巧妙地将『次级幻影』融入乐曲中，在听众脑海中投射出极其逼真的“铁甲骑兵冲锋”画面，用极具压迫感的古典乐完美反超。",
            "npcReply": "‘完美的声画同频与音乐心理战，极其高明。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "十面埋伏",
              "铁甲冲锋幻影",
              "声画同频"
            ],
            "outcomeTone": "偏离",
            "branchHint": "理智冷静、精通中国风杀伐和弦与心理声学暗示的古典大师"
          },
          {
            "id": "C",
            "text": "你极其无赖地当场扔掉乐器躺在地上。you大声指控精灵的竖琴音乐分贝超标，导致你患上了“严重的急性跨位面神经衰弱”，并出示功量伪造的《精神损失判定书》，逼得精灵乐手只得赔钱求你闭嘴。",
            "npcReply": "‘精灵乐手活了一百年，第一次遇到被音乐震出脑震荡来索赔的。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_bard": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "急性神经衰弱",
              "分贝违规",
              "赔款封口"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度稳妥、擅长用虚假病历和碰瓷敲诈同行的讼棍型乐手"
          },
          {
            "id": "D",
            "text": "你极其离谱地把狂野魔法注入了对方的竖琴。竖琴突然长出了八条木头腿，变成了一只巨大的“竖琴蜘蛛”。竖琴蜘蛛开始极其狂躁地满街狂奔并追着观众讨要苹果派，你则在一旁吹着唢呐，为其逃亡配上欢快的马戏团BGM。",
            "npcReply": "‘……你硬是把高雅的音乐对决变成了蜘蛛逃亡大戏。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "竖琴蜘蛛",
              "苹果派讨要",
              "马戏团BGM"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、善于利用活化魔法彻底搅碎一切严肃音乐会的老油条"
          }
        ]
      },
      {
        "id": "tiefling_bard_protest",
        "targetId": "guild_bard",
        "title": "静音条令的反抗",
        "scene": "保守的市长颁布了《夜间广场噪音管制条例》，禁止任何低于100分贝的“金属音乐”。违反者将被关押在静音术牢房里。你正准备今晚在广场举办重金属篝火晚会。",
        "prompt": "面对针对你的禁令，你如何展开你的摇滚狂欢？",
        "options": [
          {
            "id": "A",
            "text": "你极其张狂地接受了挑战。you连夜将晚会改造为“无声死亡重金属晚会”。you给所有参与者分发了由『奇术』震荡的“颅骨骨传导耳机”，并在广场中央施展『灼热金属』把篝火变成五颜六色的荧光绿。千人在无声中跟着脑海中的死亡音浪狂暴甩头，市长彻底学乖。",
            "npcReply": "‘把违禁噪音做成骨传导电音节，你真是个天才。’",
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
              "action": 2
            },
            "triggerTags": [
              "骨传导耳机",
              "无声重金属",
              "荧光绿篝火"
            ],
            "outcomeTone": "合格",
            "branchHint": "极富创意、能用高科技手段绕过静音法规的骨传导电音教父"
          },
          {
            "id": "B",
            "text": "你极其冷静地研究了法条。you发现条令漏洞：『军乐演奏不受噪音法限制』。you连夜为全队印制了《城防军第一重装交响吹鼓手聘书》。you带领同伴穿上铠甲，推着重炮，在广场上“合法合规”地大肆齐射并吹奏爆燃重音，市长无可奈何。",
            "npcReply": "‘极度严密的法律漏洞利用，你让噪音变成了合法的军事演习。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "lawful": 2
            },
            "triggerTags": [
              "军乐漏洞",
              "重炮齐射",
              "合法演习"
            ],
            "outcomeTone": "偏离",
            "branchHint": "理性冷静、擅长抓行政法漏洞并用合法暴力反击压迫的战术乐手"
          },
          {
            "id": "C",
            "text": "你极其无赖地抱着乐器坐在市长办公室门口大哭。you声称静音条令导致你作为提夫林的“夜间艺术创作权”受到致命伤害，诱发了“严重的深渊幽闭恐惧症”，并起诉市长违反《多元物种包容公约》，要求高额财政补贴。",
            "npcReply": "‘市长这辈子没见过维权维得这么理直气壮的噪音犯。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_bard": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "物种包容公约",
              "幽闭恐惧索赔",
              "办公室摆烂"
            ],
            "outcomeTone": "危险",
            "branchHint": "精通行政诉讼、善于利用多元包容政策敲诈政府的法务奇葩"
          },
          {
            "id": "D",
            "text": "你极其离谱地在市长家烟囱里开通了一个双向的『狂野传送门』。you把广场上的重金属电吉他放大器直接塞进烟囱里。大半夜的，市长家壁炉里开始疯狂喷吐着绿色的恶魔火焰，并伴随着震耳欲聋的死亡摇滚BGM，市长当场妥协。",
            "npcReply": "‘……你硬是把壁炉变成了魔鬼蹦迪机。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "壁炉传送门",
              "烟囱电吉他",
              "物理反击"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、善于利用空间法术和恶作剧彻底逼疯政客的混世魔王"
          }
        ]
      },
      {
        "id": "tiefling_bard_romance",
        "targetId": "guild_bard",
        "title": "深渊情歌诱惑",
        "scene": "为了通过一条被巨型、暴躁的石巨魔守卫的地下桥梁，你的队友已经无计可施。石巨魔极度讨厌人类，但传闻它非常非常痴迷于凄美、忧郁的深渊爱情民谣。",
        "prompt": "面对面目狰狞的石巨魔守卫，你准备演奏哪一首爱情歌曲？",
        "options": [
          {
            "id": "A",
            "text": "你极其张狂地冷笑，掏出一把由龙骨制成的电吉他。you施展『奇术』，让天空飘下血红的花瓣，you用极度凄凉的嘶吼嗓音，狂扫一曲“地狱火与岩石的旷世奇恋”。极其高亢的融脸金属音浪瞬间将石巨魔感动得痛哭流涕，当场放行。",
            "npcReply": "‘你竟然用震耳欲聋的死亡重金属把巨魔给唱哭了。’",
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
              "action": 2
            },
            "triggerTags": [
              "龙骨吉他",
              "融脸嘶吼",
              "巨魔痛哭"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其擅长利用情绪爆裂金属打动异界巨型生物的重金属巨星"
          },
          {
            "id": "B",
            "text": "你极其冷静地拿出一份《巨模配偶行为心理分析报告》。you用木琴极其精准地弹奏了一段符合巨魔脑波共振频率的“安魂曲”。随着节拍，you用迷幻术在其眼帘前制造出一位漂亮的“石巨魔新娘”虚影，引诱它跟着新娘走进侧道。",
            "npcReply": "‘极其高超的生物声学共振与战术美人计。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "巨魔脑波",
              "安魂曲共振",
              "巨魔新娘虚影"
            ],
            "outcomeTone": "偏离",
            "branchHint": "理智冷静、精通生物电波与精准心理暗示的战术乐手"
          },
          {
            "id": "C",
            "text": "你极其无赖地直接在桥中间躺下。you指控巨魔的体味对你的“恶魔呼吸系统”造成了永久性的“跨物物光化学污染”，并掏出伪造的《巨魔劳动仲裁申请书》，声称要起诉城主雇佣无卫生许可证的怪兽，逼得巨魔委屈地让路。",
            "npcReply": "‘连守桥的巨魔你都要去卫生局起诉它，太狠了。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_bard": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "呼吸系统创伤",
              "巨魔起诉书",
              "光化学污染"
            ],
            "outcomeTone": "危险",
            "branchHint": "擅长在物理对抗中利用行政安全条例和道德勒索搞垮对手的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地直接用狂野魔法把巨魔的心脏魔改成了一台极其生草的“可乐自动贩卖机”。只要巨魔一感动，它就会疯狂吐可乐。你在一旁狂吹唢呐伴奏，让巨魔拉着你的队友在桥上大跳欢快的圆舞曲，直到大家都喝撑了。",
            "npcReply": "‘……你硬是把守桥决斗办成了可乐狂欢会。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "心脏贩卖机",
              "圆舞曲蹦迪",
              "可乐喷吐"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、擅长用离奇的生物魔改魔法将危险战局化为闹剧的疯子"
          }
        ]
      },
      {
        "id": "tiefling_bard_hype",
        "targetId": "guild_bard",
        "title": "主场哨制造者",
        "scene": "你们小队在竞技场上与精锐的骑士团决斗，但是由于客场作战，全场上万名观众都在极其极其恶劣地给你们喝倒彩、扔西红柿，你们的战士士气降到了冰点。",
        "prompt": "面对漫天西红柿和敌意的海洋，你如何带起全场节奏？",
        "options": [
          {
            "id": "A",
            "text": "你极其狂热地翻上竞技场护栏，用『魔法伎俩』把全场观众手里的西红柿全部变成了带地狱火焰特效的“岩浆弹”。you手持电吉他，狂扫一曲“地狱火之怒”，用极致的死亡金属轰鸣让全场观众当场热血上涌，开始疯狂为你打call。",
            "npcReply": "‘你把扔向你的西红柿变成了你的专属舞台应援火花。’",
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
              "action": 2
            },
            "triggerTags": [
              "岩浆西红柿",
              "重金属应援",
              "士气暴增"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其擅长利用视觉特技与重金属狂暴感染全场观众的节奏巨星"
          },
          {
            "id": "B",
            "text": "你极其冷静地把圣骑士的战歌节奏记录下来。you用极速和弦弹奏了一曲“逆相位声波对冲”。you完美抵消了全场观众的倒彩声音，并在大厅中央用『奥图迷舞』引导出动感迪斯科，强行让上万观众开始极其诡异地齐跳广场舞。",
            "npcReply": "‘用逆相位声波强行静音全场，并用迪斯科强行统一了肢体。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "声波对冲",
              "逆相位广场舞",
              "群体物理控制"
            ],
            "outcomeTone": "偏离",
            "branchHint": "理智冷静、精通声学对冲与群体行为学物理操控的高级特工"
          },
          {
            "id": "C",
            "text": "你极其无赖地被一个西红柿砸中后原地假死。you掏出全量伪造的《大型体育赛事观众违规投掷伤害认定书》，声称自己作为“濒危恶魔血脉”遭到了严重的种族偏见伤害，控诉主办方违反《反歧视法》，逼得裁判判你直接获胜。",
            "npcReply": "‘西红柿砸头你都能判定为种族伤害，碰瓷界泰斗。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_bard": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "濒危血脉保护",
              "反歧视法控诉",
              "直接获胜"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度稳妥、精通诉讼保全和用弱势群身份对裁判进行道德绑架的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地施展狂野魔法，把漫天飞舞的西红柿全部变成了极其生草的“黄金爆弹洋葱”。洋葱在空中开始一边跳舞一边释放爆燃催泪瓦斯。你在一边狂吹大号，带着泪流满面的骑士团和上万观众开始极其生草地大跳探戈。",
            "npcReply": "‘……你硬是把血腥的骑士决斗办成了万人洋葱催泪蹦迪会。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "洋葱瓦斯弹",
              "催泪探戈",
              "万人大合跳"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、喜欢用意想不到的催泪武器彻底重塑战场氛围的艺术怪胎"
          }
        ]
      },
      {
        "id": "tiefling_bard_instrument",
        "targetId": "guild_bard",
        "title": "乐器的诅咒",
        "scene": "你从一位黑市商人手里购买了一把自称是“黄金风琴”的施法乐器。然而回到酒馆一试音，这把风琴被深渊领主下了恶毒的诅咒：无论你弹什么，它都会自动发出极其难听、能把周围牛奶震酸的重金属金属刮擦噪音。",
        "prompt": "面对这把发出致命刮擦声的诅咒乐器，你如何完成今晚的演奏？",
        "options": [
          {
            "id": "A",
            "text": "你极其狂热地大笑，顺着这股金属刮擦噪音直接进行“地狱重音即兴Solo”。you用地狱火血脉包裹琴弦，将其刮擦声化为极其震撼的融脸重金属撕裂音浪。噪音与你的死亡唱腔完美融合，把酒馆里的冒险者听得热血澎湃，纷纷开始砸桌子抗议世俗平庸。",
            "npcReply": "‘你把地狱诅咒噪音强行做成了最前卫的先锋金属音乐。’",
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
              "action": 2
            },
            "triggerTags": [
              "先锋金属",
              "地狱火破音",
              "砸桌狂欢"
            ],
            "outcomeTone": "合格",
            "branchHint": "极其狂热、能把一切声学灾难强行重构为前卫艺术的摇滚鬼才"
          },
          {
            "id": "B",
            "text": "你极其冷静地用两根铜丝将风琴的共鸣腔与酒馆的金属排水管相连。you精确计算出刮擦噪音的音频相位，利用排水管道的物理长度，完美制造了一个“逆相位声波吸收器”，强行将难听的刮擦声吸收，改用物理偏振发出纯净音色。",
            "npcReply": "‘完美的声波相位抵消与管道谐振改造，极度硬核。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 2
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "逆相位管道",
              "声波抵消",
              "物理偏振"
            ],
            "outcomeTone": "偏离",
            "branchHint": "理智冷静、精通物理声波相位对冲与建筑谐振改建的极客术士"
          },
          {
            "id": "C",
            "text": "你极其无赖地把风琴拍在黑市商人的柜台上。you拿出全量伪造的《特种商品售后合规质量认定书》，声称这把风琴的噪音违反了《地下城噪音污染防治法》，起诉商人欺诈消费者，要求三倍赔偿并终身免费保修。",
            "npcReply": "‘黑市商人卖了一辈子违禁品，头一次遇到来要三包和维权诉讼的。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_bard": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "消费者维权",
              "噪音污染法",
              "三倍索赔"
            ],
            "outcomeTone": "危险",
            "branchHint": "精通商法漏洞、利用消费者保护法条款对黑商进行物理讹诈的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地直接用狂野魔法把这把风琴变成了一只巨大的“黄金腊肠犬风琴”。每次你一弹琴，狗就开始极其鬼畜地大声唱神曲，并且每次吐出一颗黄金洋葱。你一边吹大号一边带着全酒馆的客人在地上学狗叫蹦迪。",
            "npcReply": "‘……你硬是把地狱诅咒改造成了腊肠狗鬼畜点唱机。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "腊肠风琴",
              "黄金洋葱吐",
              "鬼畜点唱机"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、喜欢用无厘头物种变形强行覆盖魔力诅咒的奇葩大师"
          }
        ]
      },
      {
        "id": "tiefling_bard_festival",
        "targetId": "guild_bard",
        "title": "毁灭音乐节的灾难",
        "scene": "你作为压轴嘉宾参加了首届“深渊重金属音乐节”。然而因为你的吉他低音炮威力太大，强烈的声波震动引发了主舞台后方死火山的局部喷发，滚滚黑烟和火山灰即将把现场三万名观众活埋。",
        "prompt": "面对即将被火山活埋的歌迷，你如何进行你的谢幕演奏？",
        "options": [
          {
            "id": "A",
            "text": "你极其狂热地大笑，不仅不逃跑，反而将地狱火血脉全开，与火山喷发的岩浆进行强力“魔力音律同频”。you将喷出的岩浆塑造成一道直径百米的“火焰舞台背景墙”，踩着龙骨吉他弹出一首绝顶的《毁灭交响乐》，把灾难办成了史诗级谢幕火山秀。",
            "npcReply": "‘你用滚烫的岩浆喷发作为你重金属演唱会的免费背景特效，太疯了。’",
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
              "action": 2
            },
            "triggerTags": [
              "火山同频",
              "火焰背景墙",
              "史诗火山秀"
            ],
            "outcomeTone": "合格",
            "branchHint": "极度狂妄、坚信用史诗级爆炸和火山谢幕才是摇滚乐终极奥义的乐手"
          },
          {
            "id": "B",
            "text": "你极其冷静地把低音炮调整为“重力对冲逆相位”。you精确计算出火山灰沉降的力学速度，将强大的音波化为一个巨大的“半球形隔音防冲击障壁”，强行将喷出的滚石和黑烟反弹回火山闸口内，保全了全场观众的安全。",
            "npcReply": "‘用低音炮逆相位声波力场强行压制火山喷发，极度硬核。’",
            "scoreDelta": {
              "int": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_bard": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "逆相位防爆",
              "声波压火山",
              "重力障壁"
            ],
            "outcomeTone": "偏离",
            "branchHint": "理智冷静、精通流体声力学与大型物理隔震力场搭建的高级特工"
          },
          {
            "id": "C",
            "text": "你极其无赖地在舞台上开门摆烂。you掏出伪造的《不可抗力自然灾害演出免责认定书》，通过大喇叭大喊：『火山喷发属于不可抗力，主办方概不退票！』并起诉火山管理机构没有做好消防评估，要求补偿你的乐器折旧费。",
            "npcReply": "‘火山爆发要埋了三万人，你居然在喇叭里喊不退票，顶级厚脸皮。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_bard": -2
            },
            "alignmentDelta": {
              "self": 2,
              "risk": 2
            },
            "triggerTags": [
              "免责认定书",
              "概不退票",
              "乐器折旧索赔"
            ],
            "outcomeTone": "危险",
            "branchHint": "极度稳妥、擅长在灾难发生时利用免责条款甩锅并敲诈保险公司的讼棍"
          },
          {
            "id": "D",
            "text": "你极其离谱地在火山口上施展了狂野魔法，把喷出的岩浆全部变成了极其香浓、漫天飞舞的草莓起泡汽水。漫天的火山灰变成了飘香的草莓爆米花雨。你在一旁吹大号伴奏，带着三万歌迷在汽水雨里开始大跳狂欢拉丁舞。",
            "npcReply": "‘……你硬生生把庞贝末日般的死火山灾难变成了巨型草莓汽水游园会。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "P": 2
            },
            "affinityDelta": {
              "guild_sorcerer": 3
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "草莓汽水喷",
              "草莓爆米花雨",
              "汽水蹦迪"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "极度混乱、喜欢用颠覆性流体改造将灭世危机化为生草喜剧的艺术家"
          }
        ]
      }
    ]
  },
  "endingTemplates": [
    {
      "endingId": "tiefling_bard_end",
      "endingType": "accepted",
      "title": "重金属地狱火",
      "verdictLine": "你用灼热的琴弦点燃了凡世的沉闷，你是深渊与人间共同的摇滚之王。",
      "explanation": "你成了全大陆最臭名昭著但也最受欢迎的重金属巡演乐手。你的演唱会经常因为舞台上的恶魔火焰失控而把整个剧院烧成白地，但票依然供不应求。甚至连一些无聊的深渊领主都会偷偷跨越位面来听你弹电吉他，你的音乐成了沟通两界的唯一和平桥梁（虽然极其扰民）。",
      "tableFunction": "驻店重金属DJ / 消防演练指挥",
      "playableFlaw": "耳鸣，且对所有低于120分贝的谈话完全听不见",
      "nextHook": "下一次，你打算去水元素位面举办一场史无前例的水下电音节。",
      "recommendedClass": [
        "guild_bard"
      ],
      "tags": [
        "摇滚巨星",
        "火焰掌控",
        "听力受损"
      ]
    },
    {
      "endingId": "tiefling_warlock_end",
      "endingType": "accepted",
      "title": "深渊销冠",
      "verdictLine": "地狱的合同写满了剥削，而你则是那个连魔鬼都能反向套牢的终极打工人。",
      "explanation": "你凭借着极其严密的商业漏洞和传销手段，成功架空了你的深渊宗主。你不仅没有被收割灵魂，反而把整个地狱的恶魔都发展成了你的下线，让他们每天去主物质位面发传单拉业务。你成了地狱历史上第一个靠PPT和KPI统治深渊的魔王。",
      "tableFunction": "灵魂并购副总裁 / 虚空金融精算师",
      "playableFlaw": "下意识地用极小字体和身边人说话，以掩盖免责条款",
      "nextHook": "你的下一个目标是收购天堂的赎罪券发行业务。",
      "recommendedClass": [
        "guild_warlock"
      ],
      "tags": [
        "传销教父",
        "反向白嫖",
        "PPT之王"
      ]
    },
    {
      "endingId": "tiefling_rogue_end",
      "endingType": "accepted",
      "title": "反向暗影传奇",
      "verdictLine": "谁说潜行一定要躲在阴影里？光天化日之下炸毁一切才是刺客的浪漫。",
      "explanation": "你成为盗贼公会历史上的一个传奇特例。你从不寻找阴影，而是制造亮瞎狗眼的爆炸或高调烟花，在光天化日之下堂而皇之地完成暗杀。你大摇大摆地离去，甚至还会给围观群众签名。保镖们因为你的狂妄而惊呆了，完全忘记了防备。",
      "tableFunction": "酒馆安全特技指导 / 爆破设计师",
      "playableFlaw": "每到一个新房间，必须踩在桌子上高声宣布自己的帅气登场台词",
      "nextHook": "你计划下个月潜入帝国皇宫，当着皇帝的面表演一次大型魔术逃脱秀。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "闪耀登场",
        "爆破刺客",
        "中二之魂"
      ]
    },
    {
      "endingId": "tiefling_sorcerer_end",
      "endingType": "accepted",
      "title": "降维掌控者",
      "verdictLine": "在空间折叠与混沌面前，一切繁复的吟唱都是缺乏想象力的拙劣模仿。",
      "explanation": "你成功将狂野的魔法能量与空间法则结合。你不屑于瞄准目标，直接通过折叠考场或将空间鞋盒化来抹平距离。你对混沌魔法的精确重组让你成为了帝国魔法协会的首席顾问，虽然你的每一次演示都会让大厅里的茶具长出腿来跑路。",
      "tableFunction": "酒馆特约空间整理师 / 奇葩变形顾问",
      "playableFlaw": "无法正常开门，每次都会下意识地用超魔空间折叠直接穿过门板",
      "nextHook": "你正在研究如何将一整条街的商业区打包塞进你的零钱包里。",
      "recommendedClass": [
        "guild_sorcerer"
      ],
      "tags": [
        "降维打击",
        "空间折叠",
        "狂野魔改"
      ]
    },
    {
      "endingId": "tiefling_bard_alt_end",
      "endingType": "probation",
      "title": "古典交响骗局",
      "verdictLine": "真正的音乐家绝不动手，深渊剧毒蜘蛛才是我们指尖优雅的打工人。",
      "explanation": "你开创了“召唤外包古典乐派”。在所有演出中你都在前台进行极其浮夸和优雅的假弹动作，而隐藏在琴弦背后的深渊蜘蛛则以超越凡世的指法演奏出天籁之音。你不仅赚取了数不清的贵族打赏，还被誉为“古典乐的终极代行者”。",
      "tableFunction": "酒馆假弹钢琴师 / 外包业务总经理",
      "playableFlaw": "只要听到掌声，双手就会不受控制地做出夸张的谢幕致意动作",
      "nextHook": "你打算给教皇的私人唱诗班雇佣一批受过声学训练的深渊劣魔外包工。",
      "recommendedClass": [
        "guild_bard"
      ],
      "tags": [
        "优雅代弹",
        "蜘蛛外包",
        "高雅骗局"
      ]
    },
    {
      "endingId": "tiefling_warlock_alt_end",
      "endingType": "probation",
      "title": "死灵HR经理",
      "verdictLine": "活人需要交五险一金，而死灵骷髅才是最听话的零成本合伙人。",
      "explanation": "你通过和墓地里的复活骷髅签订免税和免除社保的灵魂契约，成功打造了全大陆第一个“死灵劳务派遣公司”。你用死人羊毛把深渊宗主喂得脑满肠肥，而你本人则凭借卡合同Bug成为了地狱人力资源部的主管，掌握着数十万不吃不喝的白骨打工人大军。",
      "tableFunction": "酒馆死灵劳务中介 / 考勤督导员",
      "playableFlaw": "说话前必须拿出一个空白契约文本摸一下，否则会浑身发痒",
      "nextHook": "你正着手准备让这批不吃不喝的骷髅去开采矮人的万年地底金矿。",
      "recommendedClass": [
        "guild_warlock"
      ],
      "tags": [
        "骷髅HR",
        "零社保劳务",
        "漏洞之王"
      ]
    },
    {
      "endingId": "tiefling_rogue_alt_end",
      "endingType": "probation",
      "title": "无懈可击的渗透大师",
      "verdictLine": "最顶级的刺客从不翻墙，他们穿着目标的衣服，坐着目标的滑车退场。",
      "explanation": "你凭借对心理战和物理力学的双重钻研，成为了无可争议的伪装大师。你穿着保镖的衣服把目标送进小黑屋，拉动秘密滑轨把同伴送出重围。在任何人反应过来之前，你已经完成了任务并坐着城防军的豪华矿车优雅离去，留下一地懵逼的守卫。",
      "tableFunction": "酒馆地下滑轨管理员 / 保镖评估师",
      "playableFlaw": "总是下意识地对每扇门的气流和把手进行安全评估并开具发票",
      "nextHook": "你的下一个计划是伪装成圣骑士团长去主持明天的圣光祈福大会。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "心理防线",
        "身份神偷",
        "无声滑轨"
      ]
    },
    {
      "endingId": "tiefling_sorcerer_alt_end",
      "endingType": "probation",
      "title": "真空防灾特工",
      "verdictLine": "火球的高温虽然致命，但我手中的绝对零度与力学壁障更为坚固。",
      "explanation": "你虽然是混沌的术士，却开发出了极致的冷却与物理防御超魔。在所有人都以为你会引发火山爆发时，你用逆相位声波和绝对零度制造了完美的真空安全区。你被主城高薪聘请为“城市魔法安全委员会首席防爆队长”，每天拿着巨额津贴维护治安。",
      "tableFunction": "酒馆安全防护主管 / 灭火演习顾问",
      "playableFlaw": "看到火光就会大声念诵热力学定律，并用冰水浇灭它",
      "nextHook": "你准备去火元素位面的主城推销你的真空隔热阻燃墙板。",
      "recommendedClass": [
        "guild_sorcerer"
      ],
      "tags": [
        "防爆专家",
        "绝对零度",
        "反向控温"
      ]
    },
    {
      "endingId": "tiefling_failure_end",
      "endingType": "blacklisted",
      "title": "褪色的恶魔",
      "verdictLine": "怯懦抹去了你的犄角与血色，你终究只是个在故事角落里摆烂的凡夫俗子。",
      "explanation": "你的极度怯懦和毫无底线的背叛不仅让人类唾弃你，连深渊都觉得你丢人。你引以为傲的恶魔之角萎缩成了两个滑稽的小鼓包，你那拉风的红皮肤也褪成了极其难看的病态粉色。你成了一个连哥布林都敢欺负的流浪汉，整天在酒馆角落里吹嘘自己以前多厉害，然后被人像扔垃圾一样扔出去。",
      "tableFunction": "酒馆垃圾分类监督员 (无薪)",
      "playableFlaw": "极度自卑，看见红色和角状物就会浑身发抖",
      "nextHook": "也许你该去哥布林营地应聘个洗碗工？至少那里没人认识曾经的你。",
      "recommendedClass": [
        "guild_warlock"
      ],
      "tags": [
        "悲惨生活",
        "犄角萎缩",
        "碰瓷失败"
      ]
    },
    {
      "endingId": "tiefling_reject_warlock_end",
      "endingType": "blacklisted",
      "title": "被宗主拉黑的推销员",
      "verdictLine": "当你把宗主逼得关闭了传送门，你的施法也就只能靠自己脑补了。",
      "explanation": "因为你频繁提交《不可抗力退票免责声明》并疯狂索要“下沉市场开拓补贴”，你那可怜的深渊宗主最终被你薅秃了羊毛。他在昨天单方面注销了你的灵魂账号并把你彻底拉黑。你失去了所有的邪术师法力，现在沦落到酒馆里推销伪劣假羊毛袜子。",
      "tableFunction": "酒馆劣质产品销售员 / 维权申诉代理",
      "playableFlaw": "逢人就展示被拉黑的恶魔印记，控诉魔鬼没有良心",
      "nextHook": "你打算去起诉深渊总局，要求他们退还你的三年灵魂社保积金。",
      "recommendedClass": [
        "guild_warlock"
      ],
      "tags": [
        "白嫖翻车",
        "账号注销",
        "法力清零"
      ]
    },
    {
      "endingId": "tiefling_reject_rogue_end",
      "endingType": "blacklisted",
      "title": "风干在通风口的悲喜剧",
      "verdictLine": "为了风度而死不锯角的刺客，最终只能成为通风管里的艺术干尸。",
      "explanation": "你坚信自己的恶魔之角是黑夜之子的灵魂武装，在被卡在管道阻角处时死活不肯用锯子把它锯掉。最终，你在那里卡了三天，直到被卫兵像掏炉灰一样掏了出来，挂在城墙上示众。你的角萎缩了，偷窃生涯也就此彻底宣告终结。",
      "tableFunction": "通风管道疏通学徒 (无薪)",
      "playableFlaw": "无法钻过任何低矮的门，看到烟囱就会感到头疼和胸闷",
      "nextHook": "你只能去给当地的烟囱清扫工当学徒，主要负责帮他们望风。",
      "recommendedClass": [
        "guild_warlock"
      ],
      "tags": [
        "卡死管道",
        "面子害人",
        "偷窃泡汤"
      ]
    },
    {
      "endingId": "tiefling_reject_bard_end",
      "endingType": "blacklisted",
      "title": "被精灵起诉到破产的乐手",
      "verdictLine": "当巨额的噪音污染和耳膜受损赔偿单拍在你脸上，摇滚也救不了你。",
      "explanation": "你的融脸重金属和死火山音浪彻底惹怒了精灵贵族和市政法庭。在收到一百多张关于“耳鸣创伤”和“大理石柱震裂”的起诉书后，你被判处终身赔偿三万金币。你所有的乐器都被拍卖，现在只能在酒馆里用旧锅铲和铁盆敲出极其难听的破旧杂音度日。",
      "tableFunction": "酒馆破铁盆敲击手 / 洗碗部帮工",
      "playableFlaw": "只要听到任何法律术语，就会立刻把铁盆扣在头上装聋作哑",
      "nextHook": "你打算潜入下水道去给耗子唱歌，毕竟它们不收精神损失费。",
      "recommendedClass": [
        "guild_warlock"
      ],
      "tags": [
        "负债累累",
        "乐器被扣",
        "破铜烂铁"
      ]
    },
    {
      "endingId": "tiefling_special_disco_dragon",
      "endingType": "absurdAccepted",
      "title": "迪斯科驯龙天王",
      "endingConditions": "affinity.guild_bard >= 3 && affinity.guild_sorcerer >= 2",
      "verdictLine": "你用眼睛里的激光和胸中的大号，将灭世的飞龙变成了广场舞的主领队。",
      "explanation": "你凭借着一双能当激光氛围灯的眼睛，以及把十米巨龙变成草莓汽水喷泉并让全村蹦迪的奇葩经历，成功被位面魔兽协会授予“迪斯科驯龙天王”称号。现在你骑着浑身喷吐荧光绿肥皂泡的可乐飞龙在全大陆巡回演出，所到之处寸草不生，但蹦迪氛围拉满。",
      "tableFunction": "首席驯兽DJ / 泡泡火龙骑士",
      "playableFlaw": "每当情绪激动，双眼就会疯狂闪烁荧光绿红双色强光，极其刺眼",
      "nextHook": "你正在谋划骑着你的可乐肥龙去征服火山位面的火焰之主。",
      "recommendedClass": [
        "guild_bard",
        "guild_sorcerer"
      ],
      "tags": [
        "飞龙蹦迪",
        "荧光双眼",
        "可乐风暴"
      ]
    },
    {
      "endingId": "tiefling_special_legal_advisor",
      "endingType": "absurdAccepted",
      "title": "酒馆特约法务顾问",
      "endingConditions": "alignment.lawful >= 2 && scoreDelta.int >= 12",
      "verdictLine": "你是那个能用《地下城卫生法》逼退城防军，用仲裁条款绕晕魔王的大法学家。",
      "explanation": "你凭借对劳动法、反向起诉、消防法以及免责声明的出色运用，成功帮助酒馆老板打赢了十七场跨位面逃税和强拆官司。你不仅被聘请为“不纯 Tavern 终身法务总监”，还拿到了帝国大法官的特许辩护权。连地狱的链魔看到你都要恭敬地喊一声‘律师老师’。",
      "tableFunction": "终身首席法务顾问 / 逃税做账特聘专家",
      "playableFlaw": "无论吃什么喝什么，必须先要求酒保签署一份《流体吸入免责申明》",
      "nextHook": "你打算给深渊税务总局起草一份《地狱熔岩合理避税与折旧补偿细则》。",
      "recommendedClass": [
        "guild_rogue",
        "guild_warlock"
      ],
      "tags": [
        "做账天王",
        "法庭流氓",
        "官司全胜"
      ]
    },
    {
      "endingId": "tiefling_special_zombie_pension",
      "endingType": "absurdAccepted",
      "title": "骷髅养老基金理事长",
      "endingConditions": "affinity.guild_warlock >= 3 && scoreDelta.wis <= 8",
      "verdictLine": "连没有肉体的骨头架子你都要压榨出社保期权，你才是终极的资本吸血鬼。",
      "explanation": "你把骷髅劳务合同进行分层打包，并上市发行了“深渊骷髅养老期权激励基金”。你成功诱骗了上万具骷髅和僵尸自愿购买地狱转世AAA级理财项目。你现在成了跨位面死灵财富信托的理事长，每天躺在由金币铺成的棺材里睡觉，连死亡主宰都要找你咨询资产增值方案。",
      "tableFunction": "死灵财富信托理事长 / 灵魂期权总精算师",
      "playableFlaw": "看任何人（包括活人）都会下意识地估算其骨架折旧率与派遣价值",
      "nextHook": "你计划推出一款针对幽灵的“虚空防消散人寿分期保险”。",
      "recommendedClass": [
        "guild_warlock"
      ],
      "tags": [
        "理财之王",
        "死灵金融",
        "骨架折旧"
      ]
    },
    {
      "endingId": "tiefling_special_flawless_imposter",
      "endingType": "absurdAccepted",
      "title": "无懈可击的卧底影帝",
      "endingConditions": "affinity.guild_rogue >= 3 && scoreDelta.dex >= 14",
      "verdictLine": "你用保镖的制服骗过了城主，用消防限制令吓退了追兵，你是卧底界的奥斯卡。",
      "explanation": "你把渗透与伪装提升到了艺术层面。你不仅完美易容成目标的贴身保镖，甚至还用一份《文化遗产保护令》在城防军大军面前强行拖延了三个小时。你被刺客联盟和保密公会共同评选为“跨位面最不可能被识破的终极卧底”，你的教科书成了所有潜行者新兵的必读经典。",
      "tableFunction": "酒馆密室设计顾问 / 假制服评委长",
      "playableFlaw": "每隔半小时就会神经质地换一套新衣服和发型，并假装路人甲",
      "nextHook": "你准备去易容成精灵女皇身边的皇家大祭司，混吃混喝两个月。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "影帝卧底",
        "制服诱惑",
        "脱身大秀"
      ]
    },
    {
      "endingId": "tiefling_reject_sorcerer_end",
      "endingType": "transferred",
      "title": "炸成漫天爆米花的术士",
      "verdictLine": "玩火自焚或许是一种艺术，但被炸成焦黑的爆米花绝对不是。",
      "explanation": "你太过于迷恋狂野魔法的随机概率，在期末考试和茶会暴动中，你多次把致命的火焰能量改造成爆米花雨。最终，一次巨大的魔力水晶过载将你整个人也混入了解释性的爆裂反应中，你被炸成了一块焦黑的“人形提夫林爆米花”，现在只能作为警示展品摆在学校走廊里。",
      "tableFunction": "魔法安全警示干尸 (免维护)",
      "playableFlaw": "身体偶尔会发出‘啪啪’的爆裂声，并从嘴里吐出一颗爆米花",
      "nextHook": "也许某个路过的狗头人会觉得你闻起来挺香，把你打包带走。",
      "recommendedClass": [
        "guild_warlock"
      ],
      "tags": [
        "魔法事故",
        "焦黑变身",
        "爆米花化"
      ],
      "rejectedClass": "guild_rogue"
    },
    {
      "endingId": "tiefling_reject_generic_end",
      "endingType": "transferred",
      "title": "碰瓷法务戏精的末路",
      "verdictLine": "当世界上所有的法庭都对你发出了拉黑警告，你也就只能去碰瓷哥布林了。",
      "explanation": "你太过于沉迷于利用《安全生产法》和伪造《精神病免责证明》在神殿和考场碰瓷。最终，主城法警局联手深渊地狱法庭，对你开出了《跨位面无赖讼棍拉黑认定书》。现在全大陆没有人敢跟你说半句话，你只能坐在路边，尝试去碰瓷一头路过的哥布林独角兽。",
      "tableFunction": "酒馆门口踩脚瓷娃娃 (无薪)",
      "playableFlaw": "一看到穿制服的卫兵就会下意识地躺倒，嘴里大喊‘赔钱’",
      "nextHook": "你打算写一本《碰瓷法务大全：如何在主物质位面白嫖三百年》。",
      "recommendedClass": [
        "guild_warlock"
      ],
      "tags": [
        "信用破产",
        "全界拉黑",
        "碰瓷失败"
      ],
      "rejectedClass": "guild_rogue"
    },
    {
      "endingId": "tiefling_special_chaos_gourmet",
      "endingType": "transferred",
      "title": "碳水爆破美食家",
      "endingConditions": "affinity.guild_sorcerer >= 3 && affinity.guild_bard >= 2",
      "verdictLine": "把敌人的粪叉点燃成火锅，把致命的宝箱改造成尖叫鸡，你是混乱的食神。",
      "explanation": "你成功将狂野的变形魔法与烹饪融合。你把发霉的书籍除湿变成爆米花，把大教堂洗礼水改造成起泡可乐，甚至把圣骑士扔的西红柿变成了岩浆辣酱。你开创了“地狱混乱大排档”，成为全大陆最火爆的邪恶美食教父，无数老饕不远万里来抢吃你的可乐爆米花。",
      "tableFunction": "酒馆地狱火锅总厨 / 起泡可乐品鉴大师",
      "playableFlaw": "吃任何普通食物都会觉得清淡，必须往里面狂倒可乐和辣酱",
      "nextHook": "你正着手将地狱熔岩河流承包下来，开一家全位面最大的自助麻辣烫店。",
      "recommendedClass": [
        "guild_sorcerer",
        "guild_bard"
      ],
      "tags": [
        "可乐温泉",
        "爆米花龙",
        "火锅底料"
      ],
      "rejectedClass": "guild_warlock"
    },
    {
      "endingId": "tiefling_special_crab_orchestra",
      "endingType": "transferred",
      "title": "竖琴螃蟹马戏团长",
      "endingConditions": "affinity.guild_bard >= 3 && affinity.guild_sorcerer >= 3",
      "verdictLine": "当你的竖琴长了腿开始追咬侍从，你就知道你的音乐节不需要活人乐手了。",
      "explanation": "你凭借让贵族竖琴活化为“索食螃蟹”，以及让分身变成黄金尖叫鸭并狂踩风琴的抽象操作，成功组建了“跨位面活化腊肠风琴马戏团”。你是这支由活化竖琴、黄金尖叫鸭和蹦迪骷髅组成的怪胎乐团的唯一团长。你的音乐不仅扰民，甚至还具有极高物理攻击性。",
      "tableFunction": "酒馆特聘抽象乐团长 / 尖叫鸭驯养员",
      "playableFlaw": "一说话就会发出大号的破音轰鸣，导致周围的人被迫捂住耳朵",
      "nextHook": "你计划带着你的活化乐器去精灵皇家大剧院进行一次拆迁式公演。",
      "recommendedClass": [
        "guild_bard",
        "guild_sorcerer"
      ],
      "tags": [
        "活化竖琴",
        "尖叫风琴",
        "马戏团长"
      ],
      "rejectedClass": "guild_warlock"
    }
  ],
  "mbtiFilters": [
    {
      "groupId": "NT",
      "title": "深渊学术极客 (NT)",
      "oneLine": "用最严谨的逻辑解构最混乱的深渊，合约漏洞与空间折叠是你们的玩具。",
      "evaluationStyle": "理性、逻辑严密、充满对禁忌知识的探求欲，善于卡法则Bug。",
      "guild_warlockFlavor": "倾向于用KPI and 分层传销反向套牢宗主，将邪术合同做成风险投资。",
      "guild_rogueFlavor": "精通物理级爆破潜行与逻辑脱困，视暗杀为数学公式的解。",
      "guild_sorcererFlavor": "精确计算混沌魔法的概率，用降维打击和空间法则压制敌人。",
      "guild_bardFlavor": "编写极度复杂的十二音阶洗脑旋律，用算法重构听众的大脑。",
      "riskText": "过于迷信逻辑与合同条款，可能会在面对无脑的狂暴物理伤害时被一锤砸扁。"
    },
    {
      "groupId": "NF",
      "title": "中二灵魂绘师 (NF)",
      "oneLine": "坚信暗影与火焰中有神圣的救赎，用戏剧张力和诗意重塑冰冷的战场。",
      "evaluationStyle": "感性、充满表现欲、追求自我认同与戏剧性，极度抗拒平庸。",
      "guild_warlockFlavor": "将与宗主的契约升华为灵魂的羁绊，向世人宣讲救赎与毁灭的交响诗。",
      "guild_rogueFlavor": "潜行前必须朗诵大段极其凄美尴尬的暗影台词，用艺术的仪式感暗杀目标。",
      "guild_sorcererFlavor": "将狂野魔法视为情绪的宣泄，每一次爆燃都是内心的深红独白。",
      "guild_bardFlavor": "用死亡金属宣泄对世俗偏见的抗争，引导暴民在泪水与嘶吼中找到真我。",
      "riskText": "容易陷入自我感动的忧郁中，甚至在战斗中因为“姿势不够帅”而放弃完美的防御机会。"
    },
    {
      "groupId": "SJ",
      "title": "深渊规矩守护者 (SJ)",
      "oneLine": "提夫林中的异类，追求秩序与合规，善于伪造和利用规则保护自己。",
      "evaluationStyle": "注重规则、细节、防御，擅长用合规条款与仲裁逃避正面暴力。",
      "guild_warlockFlavor": "极其按时打卡收割灵魂，把深渊契约执行得像公务员的打卡记录。",
      "guild_rogueFlavor": "精通劳动安全法，用假身份与合规检查让敌人知难而退。",
      "guild_sorcererFlavor": "试图让每一发火球都符合法术安全标准，作弊手段极其合规。",
      "guild_bardFlavor": "将重金属派对变成有序的队列操练，用强制性广场舞实行铁腕控场。",
      "riskText": "一旦失去规章制度和法律条文的庇护，会在真正的无秩序混乱面前手足无措。"
    },
    {
      "groupId": "SP",
      "title": "混沌爆裂艺术家 (SP)",
      "oneLine": "现场即兴之王，只要好玩，把整个世界炸掉也是一种完美的艺术形式。",
      "evaluationStyle": "高行动力、乐天派、追求刺激与感官享受，随时准备自爆或摆烂。",
      "guild_warlockFlavor": "无所谓契约细节，只想要好玩的黑魔法力量去进行深渊一日游。",
      "guild_rogueFlavor": "喜欢在最亮的地方表演盲人潜行，靠着极其纯粹的狗屎运撞飞目标。",
      "guild_sorcererFlavor": "极度沉迷狂野魔法带来的随机惊喜，把考场苹果变成跳舞螃蟹也毫无压力。",
      "guild_bardFlavor": "用反转重力和大号伴奏把修罗场变成失重马戏团，制造最极致的生草名场面。",
      "riskText": "由于极度缺乏计划性，其即兴发挥的战术有50%的概率把队友也一并送走。"
    }
  ]
};
  window.RACE_RECRUITMENT_DATASET = Object.freeze({
    ...(window.RACE_RECRUITMENT_DATASET || {}),
    "tiefling": Object.freeze(data),
  });
})();
