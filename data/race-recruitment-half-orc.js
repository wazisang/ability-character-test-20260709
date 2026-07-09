(() => {
  const data = {
  "meta": {
    "version": 1,
    "raceId": "half_orc",
    "raceNameZh": "半兽人",
    "scope": "race_recruitment_full"
  },
  "raceCard": {
    "raceId": "half_orc",
    "raceNameZh": "半兽人",
    "raceNameEn": "Half-orc",
    "title": "信奉俺寻思之力的铁骨头",
    "oneLine": "能用锤子解决的就别动脑子，如果没砸开，说明力气还不够大。",
    "bodyText": "拥有狂暴血液的半兽人，肌肉是他们的终极逻辑。虽然偶尔会在精密的密码锁前抠脑门，但他们总能用粗暴但绝对震撼的物理方式解决一切难题。如果他们跟你讲道理，那通常意味着他们手里正拎着一柄三百斤的重锤。",
    "tags": [
      "狂暴血脉",
      "物理骇客",
      "俺寻思之力",
      "铁胃钢牙"
    ],
    "warningText": "警告：切勿在他们面前使用任何超过两个音节的生僻词汇，否则可能导致他们大脑因过载而触发物理防御性狂暴。",
    "recruiterQuote": "“俺寻思这扇铁门可能需要一点呼吸……起开！让俺给它来一锤！”"
  },
  "recruitTargets": [
    {
      "targetId": "guild_barbarian",
      "classNameZh": "突破先锋营",
      "classNameEn": "Barbarian Vanguard",
      "title": "血怒狂暴者",
      "oneLine": "只要愤怒值叠满，连巨龙的头盖骨都能徒手掀开。他们的战术面板上只有一个极其巨大的‘WAAAGH！’。",
      "recruiter": "突破先锋营书记员",
      "recruitPitch": "只要愤怒值叠满，连巨龙的头盖骨都能徒手掀开。他们的战术面板上只有一个极其巨大的‘WAAAGH！’。",
      "acceptedStyle": "关键门槛：STR 14 / CON 12。通过后会按该路线记录职业试炼倾向。",
      "likelyFailure": "若只展示血脉噱头而无法稳定服务队伍，会被列入观察或转岗名单。",
      "hiddenRoute": "试炼会同时记录其他公会倾向，最终判定可能转荐到更匹配的柜台。",
      "recommendedStats": [
        "str",
        "con"
      ],
      "riskTags": [
        "冲锋",
        "狂暴",
        "STR",
        "CON"
      ]
    },
    {
      "targetId": "guild_fighter",
      "classNameZh": "战士训练厅",
      "classNameEn": "Fighter Guild",
      "title": "碎骨督军",
      "oneLine": "除了蛮力，他们还有极其残忍的战斗智商。懂得用最有效率的方式拆卸敌人的关节，或者用队友的盾牌当投掷武器。",
      "recruiter": "战士训练厅书记员",
      "recruitPitch": "除了蛮力，他们还有极其残忍的战斗智商。懂得用最有效率的方式拆卸敌人的关节，或者用队友的盾牌当投掷武器。",
      "acceptedStyle": "关键门槛：STR 12 / CON 12 / DEX 10。通过后会按该路线记录职业试炼倾向。",
      "likelyFailure": "若只展示血脉噱头而无法稳定服务队伍，会被列入观察或转岗名单。",
      "hiddenRoute": "试炼会同时记录其他公会倾向，最终判定可能转荐到更匹配的柜台。",
      "recommendedStats": [
        "str",
        "con",
        "dex"
      ],
      "riskTags": [
        "阵线",
        "武器",
        "STR",
        "CON"
      ]
    },
    {
      "targetId": "guild_rogue",
      "classNameZh": "斥候与机关处",
      "classNameEn": "Rogue Office",
      "title": "物理刺客",
      "oneLine": "掌握了半兽人特有的潜行技巧：只要把方圆十里内所有能喘气的生物全部物理超度，就没人知道我潜入过。",
      "recruiter": "斥候与机关处书记员",
      "recruitPitch": "掌握了半兽人特有的潜行技巧：只要把方圆十里内所有能喘气的生物全部物理超度，就没人知道我潜入过。",
      "acceptedStyle": "关键门槛：STR 12 / DEX 12。通过后会按该路线记录职业试炼倾向。",
      "likelyFailure": "若只展示血脉噱头而无法稳定服务队伍，会被列入观察或转岗名单。",
      "hiddenRoute": "试炼会同时记录其他公会倾向，最终判定可能转荐到更匹配的柜台。",
      "recommendedStats": [
        "str",
        "dex"
      ],
      "riskTags": [
        "潜行",
        "机关",
        "STR",
        "DEX"
      ]
    },
    {
      "targetId": "guild_cleric",
      "classNameZh": "誓约医疗所",
      "classNameEn": "Cleric Ward",
      "title": "先祖萨满",
      "oneLine": "用极其暴力的‘肌肉神术’跟先祖之灵交流。治疗法术通常伴随着极其剧烈的巴掌和‘赶紧给老子站起来’的怒吼。",
      "recruiter": "誓约医疗所书记员",
      "recruitPitch": "用极其暴力的‘肌肉神术’跟先祖之灵交流。治疗法术通常伴随着极其剧烈的巴掌和‘赶紧给老子站起来’的怒吼。",
      "acceptedStyle": "关键门槛：STR 10 / WIS 12 / CHA 12。通过后会按该路线记录职业试炼倾向。",
      "likelyFailure": "若只展示血脉噱头而无法稳定服务队伍，会被列入观察或转岗名单。",
      "hiddenRoute": "试炼会同时记录其他公会倾向，最终判定可能转荐到更匹配的柜台。",
      "recommendedStats": [
        "str",
        "wis",
        "cha"
      ],
      "riskTags": [
        "神术",
        "急救",
        "STR",
        "WIS"
      ]
    }
  ],
  "physiqueChecks": [
    {
      "id": "orc_physique_locked_door",
      "targetId": "guild_barbarian",
      "title": "复杂的门锁",
      "scene": "你的小队被一扇极其厚重的精钢大门挡住了去路。大门上有一个极其复杂的九宫格魔法密码锁，如果三次输错就会触发毁灭性的连环爆炸陷阱。盗贼队友正在满头大汗地计算密码。",
      "prompt": "面对这种极其考验智商和耐心的解谜环节，你的‘半兽人式’破局方法是：",
      "options": [
        {
          "id": "A",
          "text": "你一把推开还在算概率的盗贼，往手心吐了口唾沫，大喝一声：‘俺寻思这门轴也是需要呼吸的！’随后抡起三百斤的重锤，连带着墙皮、门轴和魔法锁一起砸成了稀烂。密码？密码就是物理学！",
          "npcReply": "大门轰然倒塌，密码锁被物理超度。陷阱甚至连判定都没来得及走完。‘这才是最纯粹的物理骇客，没有门，自然就不需要开门。’",
          "scoreDelta": {
            "str": 3,
            "wis": -1
          },
          "mbtiDelta": {
            "S": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_barbarian": 3,
            "guild_fighter": 1
          },
          "alignmentDelta": {
            "action": 2
          },
          "triggerTags": [
            "物理骇客",
            "俺寻思之力",
            "门轴呼吸法"
          ],
          "outcomeTone": "合格",
          "branchHint": "坚信‘大力出奇迹’的物理爆破专家"
        },
        {
          "id": "B",
          "text": "你冷静地拦住想要暴捶密码锁的队友，用指关节敲了敲大门旁边的承重墙。‘兄弟们，防盗门防的是盗贼，不是拆迁办。’紧接着你掏出破甲镐，在墙壁上精准地凿出了一个可供两人并排走的巨洞。",
          "npcReply": "盗贼看着墙上的大洞，默默合上了密码本。‘卓越的空间战术思维。你重新定义了什么是绕后。’",
          "scoreDelta": {
            "str": 2,
            "int": 1
          },
          "mbtiDelta": {
            "T": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_fighter": 2,
            "guild_rogue": 1
          },
          "alignmentDelta": {
            "action": 1
          },
          "triggerTags": [
            "拆迁办思维",
            "精准破墙",
            "物理绕后"
          ],
          "outcomeTone": "偏离",
          "branchHint": "粗暴但带有极强战术思维的拆墙狂人"
        },
        {
          "id": "C",
          "text": "‘爆……爆炸？！’你猛地打了个哆嗦，迅速从背包里掏出一份盖着假章的《半兽人战后创伤应激障碍诊断书》，一边浑身抽搐一边大喊：‘我PTSD犯了！医生说我不能接触闪光和巨响！’然后麻溜地钻进了远处的防爆桶里。",
          "npcReply": "队友们面无表情地看着你在防爆桶里瑟瑟发抖。‘你的战术规避动作很熟练，但你的尊严已经和那张假病历一起碎了一地。’",
          "scoreDelta": {
            "con": -2,
            "cha": -2
          },
          "mbtiDelta": {
            "F": 1,
            "J": 1
          },
          "affinityDelta": {
            "guild_barbarian": -2
          },
          "alignmentDelta": {
            "risk": 2,
            "self": 1
          },
          "triggerTags": [
            "假病历",
            "战术钻桶",
            "PTSD遁法"
          ],
          "outcomeTone": "危险",
          "branchHint": "随身携带假病历本的战术规避达人"
        },
        {
          "id": "D",
          "text": "你盯着密码锁沉思了片刻，然后从怀里掏出一大块还在滴油的变质烤野猪肉，硬生生顺着密码锁的缝隙塞了进去。‘只要油水够大，锁芯也会滑肠。’你一边用力挤压脂肪一边一本正经地解释。",
          "npcReply": "变质烤肉的酸腐油脂奇迹般地导致魔法锁内的精巧齿轮发生严重卡壳，大门‘咔哒’一声弹开了。‘这不可名状的开锁手法，简直是对炼金学的莫大侮辱。’",
          "scoreDelta": {
            "dex": 2,
            "cha": 1
          },
          "mbtiDelta": {
            "N": 2,
            "P": 1
          },
          "affinityDelta": {
            "guild_rogue": 2
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "变质烤肉",
            "脂肪润滑",
            "炼金侮辱"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "总能用令人倒胃口的方式触发奇迹的奇葩"
        }
      ]
    },
    {
      "id": "orc_physique_stealth",
      "targetId": "guild_rogue",
      "title": "半兽人的潜行",
      "scene": "前方有一座极其严密的地精岗哨。作为队伍里被指派的潜行者，你需要极其安静地穿过这片区域去拉下吊桥。但你穿着极其沉重的钉刺皮甲，甚至走起路来都在‘哐哐’作响。",
      "prompt": "面对这种极其不适合你的潜行任务，你如何执行你的‘暗杀’？",
      "options": [
        {
          "id": "A",
          "text": "你光明正大地从正面走到岗哨中央，在警报拉响前，用巨斧以极其骇人的效率将哨塔连同十二个地精全部劈成肉泥。完事后你优雅地擦了擦手：‘没人看见我潜行进来了，因为活着的目击者已经归零了。’",
          "npcReply": "血流成河，鸦雀无声。‘无懈可击的逻辑闭环。只要死人不会说话，这就是最顶级的潜行。’",
          "scoreDelta": {
            "str": 3,
            "dex": -1
          },
          "mbtiDelta": {
            "S": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_rogue": 3,
            "guild_barbarian": 1
          },
          "alignmentDelta": {
            "action": 2
          },
          "triggerTags": [
            "目击者清零",
            "物理潜行",
            "正面暗杀"
          ],
          "outcomeTone": "合格",
          "branchHint": "精通‘目击者清零’法则的物理潜行大师"
        },
        {
          "id": "B",
          "text": "你从附近的泥坑里抓起两只尖叫的野猪，给它们的尾巴点上火，然后精准地投掷进地精岗哨的军火库方向。趁着地精们为了救火乱作一团，你像个大爷一样悠闲地踱步过去，把吊桥的拉杆拽了下来。",
          "npcReply": "极度混乱的场面掩盖了你沉重的脚步声。‘虽然做法粗暴到了极点，但这确实是一次完美的战术声东击西。’",
          "scoreDelta": {
            "str": 2,
            "int": 1
          },
          "mbtiDelta": {
            "T": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_rogue": 2,
            "guild_fighter": 1
          },
          "alignmentDelta": {
            "control": 1
          },
          "triggerTags": [
            "投掷火猪",
            "战术遛弯",
            "声东击西"
          ],
          "outcomeTone": "偏离",
          "branchHint": "擅长用极致混乱制造隐蔽空间的战术大师"
        },
        {
          "id": "C",
          "text": "潜行太危险了！你毫不犹豫地吹响了一个劣质的哨子，指着盗贼队友大喊：‘长官！我抓到了一个联盟间谍！申请减刑和全额赏金！’趁着地精们全副武装扑向懵逼的队友，你头也不回地跑路了。",
          "npcReply": "盗贼在被淹没前对你竖起了中指。‘你对卖队友的业务熟练得让人心寒。这已经不是懦弱，是纯粹的无耻。’",
          "scoreDelta": {
            "wis": -2,
            "cha": -2
          },
          "mbtiDelta": {
            "P": 1,
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
            "倒打一耙",
            "间谍指控",
            "卖队友"
          ],
          "outcomeTone": "危险",
          "branchHint": "为了保命随时随地转做二五仔的极品人渣"
        },
        {
          "id": "D",
          "text": "你扯下旁边的巨大树叶和藤蔓，把自己裹得像个绿色的粽子，然后大摇大摆地走进地精岗哨，闭着眼睛开始进行极其诡异光合作用。‘别看我，我只是一棵长着獠牙的盆栽。’",
          "npcReply": "地精守卫们盯着这棵流着口水、肌肉贲张的‘盆栽’，集体陷入了长达五分钟的大脑宕机。趁他们怀疑人生时，你已经顺手拉下了吊桥。‘拟态伪装的至高境界，就是让敌人以为自己疯了。’",
          "scoreDelta": {
            "con": 2,
            "cha": 2
          },
          "mbtiDelta": {
            "E": 1,
            "N": 1
          },
          "affinityDelta": {
            "guild_rogue": 1
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "拟态盆栽",
            "光合作用",
            "精神污染"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "能够随时随地进行精神污染的抽象伪装者"
        }
      ]
    },
    {
      "id": "orc_physique_magic_resist",
      "targetId": "guild_barbarian",
      "title": "法爷的噩梦",
      "scene": "对练场上，一个极其高傲的人类法师对你释放了一个极其复杂的‘高阶恐惧术’。这种法术通常能让意志不坚的人极其崩溃地跪地求饶。",
      "prompt": "当极其恐怖的幻象侵入你的大脑时，你的半兽人神经会如何反应？",
      "options": [
        {
          "id": "A",
          "text": "法术制造的恐怖骷髅幻象，在你不带任何褶皱的大脑处理下，被自动过滤成了香喷喷的骨头熬汤。你甚至馋得直流口水，顶着精神压迫一路狂奔，一口咬断了法师施法的橡木法杖。‘这排骨怎么是木头味的？！’",
          "npcReply": "法师被你眼冒绿光、吃干抹净的恐怖食欲吓得当场解除了法术。‘你的智商低得恰到好处，完美免疫了所有需要想象力的精神攻击。’",
          "scoreDelta": {
            "con": 3,
            "int": -1
          },
          "mbtiDelta": {
            "S": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_barbarian": 3
          },
          "alignmentDelta": {
            "action": 2
          },
          "triggerTags": [
            "智商豁免",
            "啃噬法杖",
            "食欲克制恐惧"
          ],
          "outcomeTone": "合格",
          "branchHint": "用极其单薄的智力完美豁免精神攻击的狂战"
        },
        {
          "id": "B",
          "text": "你强忍着幻象带来的不适，拔出腰间的飞斧，一个精准的战术投掷直接剁在了法师的脚趾头上。法师顿时发出一声惨绝人寰的尖叫，什么高阶恐惧术瞬间烟消云散。‘法术需要专注，而断掉的脚趾是专注最大的敌人。’",
          "npcReply": "法师抱着脚趾在地上疯狂打滚。‘简单、粗暴且极度高效的打断技。你向所有人证明了战士的禁魔领域叫做物理创伤。’",
          "scoreDelta": {
            "str": 2,
            "wis": 1
          },
          "mbtiDelta": {
            "E": 1,
            "T": 1
          },
          "affinityDelta": {
            "guild_fighter": 2,
            "guild_barbarian": 1
          },
          "alignmentDelta": {
            "control": 1
          },
          "triggerTags": [
            "剁脚趾打断",
            "物理禁魔",
            "战术飞斧"
          ],
          "outcomeTone": "偏离",
          "branchHint": "深谙物理打断法术施法的暴力专家"
        },
        {
          "id": "C",
          "text": "恐怖幻象刚一出现，你立马闭上眼睛疯狂倒地装死。为了让装死看起来更逼真，你甚至硬生生憋气憋到脸色发紫，连心跳都慢了下来，主打一个‘只要我没有意识，精神攻击就打不中我’。",
          "npcReply": "法师看着地上那具直挺挺的、甚至开始发臭的‘尸体’，默默取消了法术。‘用极其硬核的龟息功来逃避现实，真是难为你了。’",
          "scoreDelta": {
            "wis": -2,
            "cha": -2
          },
          "mbtiDelta": {
            "F": 2
          },
          "affinityDelta": {
            "guild_barbarian": -2
          },
          "alignmentDelta": {
            "risk": 2
          },
          "triggerTags": [
            "憋气装死",
            "断气规避",
            "硬核龟息"
          ],
          "outcomeTone": "危险",
          "branchHint": "熟练掌握断气装死神功的绝对逃避者"
        },
        {
          "id": "D",
          "text": "幻象中的恐怖怪物张牙舞爪，而你直接在幻象里原地开始跳起了一段极其妖娆、辣眼睛的半兽人钢管舞。你甚至对那些恐怖幻象抛起了媚眼。这种超越了碳基生物底线的画面，顺着精神链接直接反向输入了法师的脑海。",
          "npcReply": "法师‘哇’地一声吐了一地，精神连接瞬间崩溃。‘你用不可名状的扭曲舞姿，完成了对施法者的反向精神污染。’",
          "scoreDelta": {
            "cha": 3,
            "con": 1
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
            "妖娆钢管舞",
            "反向精神污染",
            "辣眼睛反杀"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "擅长用辣眼睛行为反制法术的抽象奇葩"
        }
      ]
    },
    {
      "id": "orc_physique_diet",
      "targetId": "guild_cleric",
      "title": "铁胃的试炼",
      "scene": "先祖萨满的试炼极其硬核：考官端上来一盘极其极其令人作呕的‘剧毒魔沼蛙刺身’。这种蛙的毒液极其猛烈，通常只有生命力极其顽强的人才能活下来与先祖沟通。",
      "prompt": "面对这盘还在极其诡异地抽搐、散发着极其恶臭的食物，你的选择是：",
      "options": [
        {
          "id": "A",
          "text": "你毫无犹豫地抓起那只还在抽搐的毒蛙，连端上来的盘子都快吹碎了，直接一口囫囵吞下。剧毒瞬间引发了强烈的胃痉挛，你一边翻着白眼口吐白沫，一边兴奋地大吼大叫：‘先祖保佑！这蛤蟆够劲儿！’",
          "npcReply": "你强大的肉体生生扛住了毒素，并在毒性幻觉中与先祖完成了热烈的交谈。‘极其纯粹的肌肉神术觉醒者，你的胃袋比钢板还要坚固。’",
          "scoreDelta": {
            "con": 3,
            "wis": 1
          },
          "mbtiDelta": {
            "S": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_cleric": 3
          },
          "alignmentDelta": {
            "action": 2
          },
          "triggerTags": [
            "活吞毒蛙",
            "口吐白沫",
            "硬扛剧毒"
          ],
          "outcomeTone": "合格",
          "branchHint": "拥有变态体质、用物理硬扛剧毒的硬核萨满"
        },
        {
          "id": "B",
          "text": "你嫌弃地挑开刺身，从背包里掏出一把深渊辣椒面和重度孜然，给这只蛙来了个里外涂抹，然后架在篝火上烤至焦炭状。‘我只信奉一个真理：只要火候够大，一切毒素都会转化成嘎嘣脆的优质蛋白。’",
          "npcReply": "你吃下了焦炭，虽然没看到先祖，但完美中和了毒性。‘你用重口味的美拉德反应战胜了自然界的剧毒，令人敬佩的野外生存学。’",
          "scoreDelta": {
            "str": 2,
            "int": 1
          },
          "mbtiDelta": {
            "T": 1,
            "J": 1
          },
          "affinityDelta": {
            "guild_fighter": 2,
            "guild_cleric": 1
          },
          "alignmentDelta": {
            "control": 1
          },
          "triggerTags": [
            "孜然烧烤",
            "高温去毒",
            "嘎嘣脆蛋白"
          ],
          "outcomeTone": "偏离",
          "branchHint": "深谙高温消毒原理的狂暴美食家"
        },
        {
          "id": "C",
          "text": "你盯着那盘毒蛙，忽然灵机一动，掏出一本厚厚的《半兽人劳动法》，指着条款大声控诉：‘这属于未提供安全劳保用品的违规试炼！我要向部落仲裁庭起诉你们职场霸凌！’然后趁考官愣神，一脚踢翻了盘子。",
          "npcReply": "考官被你的法律名词轰炸得陷入了沉思，完全忘记了你根本没吃毒蛙的事实。‘你用极其狡猾的规则漏洞，狠狠践踏了先祖的传统。’",
          "scoreDelta": {
            "wis": -2,
            "cha": -2
          },
          "mbtiDelta": {
            "T": 1,
            "E": 1
          },
          "affinityDelta": {
            "guild_cleric": -2
          },
          "alignmentDelta": {
            "self": 2,
            "risk": 2
          },
          "triggerTags": [
            "劳动法遁",
            "起诉考官",
            "职场霸凌指控"
          ],
          "outcomeTone": "危险",
          "branchHint": "熟读劳动法、用规则漏洞躲避试炼的法棍"
        },
        {
          "id": "D",
          "text": "你把魔沼蛙顶在头顶上，然后开始疯狂地拍打自己极其滚圆的肚皮，敲出了一段动感十足的B-Box节奏。你宣称这是古老的‘肚皮共振解毒法’，企图用声波在体外把蛙的毒腺直接震碎。",
          "npcReply": "你的肚皮被拍得青紫，但魔沼蛙却被你震得晕了过去，毒液全吐在了地上。‘先祖可能都被你这种匪夷所思的操作给逗乐了，竟然真的没中毒。’",
          "scoreDelta": {
            "con": 2,
            "cha": 2
          },
          "mbtiDelta": {
            "N": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_rogue": 1
          },
          "alignmentDelta": {
            "chaotic": 2
          },
          "triggerTags": [
            "肚皮BBox",
            "共振解毒",
            "震晕毒蛙"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "总能用极其抽象的物理操作达成玄学效果的奇物"
        }
      ]
    },
    {
      "id": "orc_physique_interrogation",
      "targetId": "guild_rogue",
      "title": "粗暴的审讯",
      "scene": "你们极其艰难地抓获了一名极其极其嘴硬的高等精灵斥候。他极其极其高傲地闭口不言，完全无视了人类骑士极其极其极其文明的审讯手段。",
      "prompt": "作为队伍里的物理刺客/拷问专家，轮到你上场了。你会如何让他极其极其极其快地开口？",
      "options": [
        {
          "id": "A",
          "text": "你大步走上前，一言不发地拿起精灵那把极其精美的传家宝长弓，当着防守他的面，用你粗糙的大手一点、一点地把它撅成了两段。然后你拿起带有精灵铭文的木刺，顶在精灵引以为傲的下巴上：‘是你的嘴硬，还是这块破木头硬？’",
          "npcReply": "精灵眼中的高傲瞬间崩溃，心痛地惨叫出声，随后极其配合地交代了所有情报。‘精准打击敌人的心理防线，极致的冷酷无情。’",
          "scoreDelta": {
            "str": 3,
            "int": 1
          },
          "mbtiDelta": {
            "J": 1,
            "T": 1
          },
          "affinityDelta": {
            "guild_rogue": 3,
            "guild_fighter": 1
          },
          "alignmentDelta": {
            "control": 2,
            "action": 1
          },
          "triggerTags": [
            "折断长弓",
            "心理破防",
            "冷酷无情"
          ],
          "outcomeTone": "合格",
          "branchHint": "极其残忍、深谙毁坏贵重物品施压的拷问大师"
        },
        {
          "id": "B",
          "text": "你根本懒得废话，直接伸手捏住精灵那纤细的脖子，把他整个人像小鸡一样提到了半空中。你张开满是獠牙的大嘴，口水混合着大蒜的臭气直接喷在他脸上：‘不说？那就拿你当今天的饭后甜点！’",
          "npcReply": "精灵被你恐怖的食欲和严重的口臭直接熏晕了过去，虽然没问出完整情报，但搜身时他已经无力反抗。‘极其直接的野蛮威慑，纯粹的恐惧投射。’",
          "scoreDelta": {
            "con": 2,
            "cha": 1
          },
          "mbtiDelta": {
            "E": 1,
            "P": 1
          },
          "affinityDelta": {
            "guild_barbarian": 2
          },
          "alignmentDelta": {
            "action": 2
          },
          "triggerTags": [
            "锁喉生吞",
            "口臭攻击",
            "野蛮威吓"
          ],
          "outcomeTone": "偏离",
          "branchHint": "缺乏耐心、只懂用野蛮威吓和口臭解决问题的暴徒"
        },
        {
          "id": "C",
          "text": "你凑到精灵耳边，压低声音说：‘两千金币，外加你那套精灵丝绸内衣，我立马在牢房后墙挖个洞放你走。’精灵为了保命立刻签了魔法欠条。你拿到欠条后，真的在墙上挖了个洞，让他滚蛋了。",
          "npcReply": "骑士发现犯人不见时，你正数着金币装傻充愣。‘为了金币你可以出卖一切，你的道德底线比地精的个头还要矮。’",
          "scoreDelta": {
            "wis": -2,
            "cha": -2
          },
          "mbtiDelta": {
            "P": 1,
            "T": 1
          },
          "affinityDelta": {
            "guild_rogue": -2
          },
          "alignmentDelta": {
            "self": 2
          },
          "triggerTags": [
            "索要贿赂",
            "私放囚犯",
            "贪婪无底线"
          ],
          "outcomeTone": "危险",
          "branchHint": "见钱眼开、随时可以进行肮脏交易的腐败分子"
        },
        {
          "id": "D",
          "text": "你掏出一把生了锈的破锯子，没有去锯精灵，而是走到旁边生满铁锈的铁门前，开始用锯子疯狂地来回摩擦。那极其刺耳、令人牙酸的金属刮擦声在密闭的审讯室里疯狂回荡。",
          "npcReply": "拥有超强听觉的精灵双手捂住耳朵，痛苦地满地打滚，不到五秒就哭喊着招供了。‘这极其缺德的音波折磨，绝对算得上是精神污染领域的奇迹。’",
          "scoreDelta": {
            "int": 3,
            "cha": 1
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
            "锯铁门",
            "音波精神污染",
            "物理折磨听觉"
          ],
          "outcomeTone": "荒诞",
          "branchHint": "极其擅长利用非人折磨手段和音波攻击的恶鬼"
        }
      ]
    }
  ],
  "trialSets": {
    "guild_barbarian": [
      {
        "id": "orc_barb_rage_trigger",
        "targetId": "guild_barbarian",
        "title": "沸腾之血",
        "scene": "血怒试炼的第一关，考官命令几个地精拿着极其尖锐的长矛不断戳刺你的大腿，试图激发出你最原始的狂化状态。",
        "prompt": "面对这种极其屈辱的疼痛，你要如何释放你的怒火？",
        "options": [
          {
            "id": "A",
            "text": "你发出一声如同雷鸣般的狂吼，肌肉猛然膨胀。你不仅没有躲避，反而迎着长矛往前走，徒手一把抓住矛杆，硬生生把那个地精拽到半空中，然后一记势大力沉的头槌直接把对方砸得眼冒金星。",
            "npcReply": "疼痛成了你最完美的兴奋剂。‘这才是最纯粹的狂化，你的怒火足以融化钢铁。’",
            "scoreDelta": {
              "str": 3,
              "con": 2
            },
            "mbtiDelta": {
              "E": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "徒手夺矛",
              "迎难而上",
              "致命头槌"
            ],
            "outcomeTone": "合格",
            "branchHint": "在痛苦中爆发恐怖战斗力的纯粹狂战士"
          },
          {
            "id": "B",
            "text": "你冷冷地拔出腿上的长矛，连眉头都没皱一下。你不屑于对弱小的地精发脾气，而是转身一脚踹飞了旁边重达千斤的青铜巨鼎。巨鼎砸穿了墙壁，你用这种绝对霸道的方式宣告了你的力量。",
            "npcReply": "地精们吓得丢下武器跪地求饶。‘极度傲慢的力量展示，你不屑于向蝼蚁宣泄愤怒。’",
            "scoreDelta": {
              "con": 3,
              "cha": 1
            },
            "mbtiDelta": {
              "I": 1,
              "T": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "踹飞巨鼎",
              "冷酷无视",
              "力量碾压"
            ],
            "outcomeTone": "偏离",
            "branchHint": "自负傲慢、不屑于欺凌弱小的高傲暴徒"
          },
          {
            "id": "C",
            "text": "长矛刚戳破一点皮，你立马杀猪般地惨叫起来。你火速掏出一张皱巴巴的《和平主义者豁免证明》，高喊着：‘我有免战金牌！打人犯法！我要投诉你们使用管制刀具！’然后抱头鼠窜，一溜烟逃出了考场。",
            "npcReply": "地精们举着长矛在风中凌乱。‘你用极其娴熟的法律武器，成功捍卫了自己那少得可怜的痛觉神经，可惜丢光了兽人的脸。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_barbarian": -2
            },
            "alignmentDelta": {
              "risk": 2
            },
            "triggerTags": [
              "和平主义证明",
              "投诉管制刀具",
              "抱头鼠窜"
            ],
            "outcomeTone": "危险",
            "branchHint": "精通利用免战声明逃避一切肉体痛苦的滑头"
          },
          {
            "id": "D",
            "text": "你不仅没有狂化，反而因为疼痛触发了某种奇怪的开关。你猛吸一口气，扯开破锣嗓子，开始深情且极度跑调地高唱《兽人十八摸》。那魔音穿脑的歌声化作实质的物理伤害，无差别攻击在场所有人。",
            "npcReply": "地精们捂着流血的耳朵疯狂逃窜。‘不可思议……你竟然用声带完成了狂暴战的群体恐惧效果。’",
            "scoreDelta": {
              "cha": 2,
              "int": 1
            },
            "mbtiDelta": {
              "N": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_cleric": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "跑调战歌",
              "魔音穿脑",
              "声波恐惧"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "能把疼痛转化为魔音穿脑进行群伤的抽象歌手"
          }
        ]
      },
      {
        "id": "half_orc_barb_weapon_choice",
        "targetId": "guild_barbarian",
        "title": "武器的抉择",
        "scene": "血怒试炼的第二关，武器库里摆满了各式各样的精美武器，甚至有附带各种华丽魔法属性的法杖和细剑。但它们看起来都轻飘飘的。",
        "prompt": "作为一名追求极致破坏力的狂暴者，你的武器选择是：",
        "options": [
          {
            "id": "A",
            "text": "选择那柄最重、布满锈迹的双手巨型石锤，宣称‘越重的铁锤，砸碎脑壳时的声音越清脆’。",
            "npcReply": "你抡起大锤砸向地面，强烈的震荡波让整个库房都抖了三抖。‘绝对的力量与终极的物理打击感，这才是真男人的玩具。’",
            "scoreDelta": {
              "str": 3,
              "con": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "双手石锤",
              "生猛重击",
              "力量证明"
            ],
            "outcomeTone": "合格",
            "branchHint": "坚信‘大力出奇迹’的物理重击狂魔"
          },
          {
            "id": "B",
            "text": "挑选一柄配有重力附魔的玄铁双手剑，在挥舞时利用重力流体力学微调角度。",
            "npcReply": "重剑切开空气发出凄厉的尖啸。‘懂得借用附魔和重力惯性调整轨迹，这证明你在粗野的表象下藏着精明的战术思考。’",
            "scoreDelta": {
              "str": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "玄铁双手剑",
              "重力附魔",
              "流体力学"
            ],
            "outcomeTone": "偏离",
            "branchHint": "擅长借力打力、将重力融入劈砍的战术型重步兵"
          },
          {
            "id": "C",
            "text": "抱起一根装满火油、印有危险易燃标志的爆破木桩。一旦砍在敌人身上就会同归于尽，主打一个战死沙场。",
            "npcReply": "教官脸色煞白地夺下你手中的火油木桩。‘我们是在征兵，不是在招募敢死自爆步兵！你的求死欲望已经严重超标了！’",
            "scoreDelta": {
              "con": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_barbarian": -2
            },
            "alignmentDelta": {
              "risk": 2
            },
            "triggerTags": [
              "火油木桩",
              "自爆倾向",
              "玉石俱焚"
            ],
            "outcomeTone": "危险",
            "branchHint": "脑子里只有同归于尽与华丽自爆的绝境狂徒"
          },
          {
            "id": "D",
            "text": "抢走地精考官的板凳和公文包，宣称‘俺觉得这玩意拍人最顺手，这才是无招胜有招’。",
            "npcReply": "你端着公文包在空气中狂挥乱舞。‘这不仅毫无章法，甚至还带有一种能把法师气出脑溢血的荒谬感。’",
            "scoreDelta": {
              "dex": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "折叠板凳",
              "公文包砸人",
              "即兴武器"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "总能把身边日常用品玩成凶器的街头格斗流氓"
          }
        ]
      },
      {
        "id": "half_orc_barb_beast_combat",
        "targetId": "guild_barbarian",
        "title": "与猛兽共舞",
        "scene": "试炼场铁笼落下，一只处于极度饥饿状态的深渊魔爪兽被释放了出来。它流着带酸液的口水，咆哮着向你扑来。",
        "prompt": "面对这头凶猛的野兽，你打算如何解决？",
        "options": [
          {
            "id": "A",
            "text": "主动迎着利爪冲上去，任凭双臂被抓出深可见骨的血痕，借着剧痛带来的狂性爆发，双臂合拢将魔爪兽的颈椎生生勒断。",
            "npcReply": "血水溅了一地，你的吼声盖过了野兽的临终惨叫。‘在伤痛中狂怒，用野兽的方式摧毁野兽。这才是真正的血怒！’",
            "scoreDelta": {
              "str": 3,
              "con": 2
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "迎击利爪",
              "剧痛反击",
              "绞杀颈椎"
            ],
            "outcomeTone": "合格",
            "branchHint": "将自身痛苦完全转化为极限破坏力的狂暴武士"
          },
          {
            "id": "B",
            "text": "借着冲锋的力道，将身侧的尖锐铁刺拒马推向兽群，迫使它被自己冲击的惯性刺穿。",
            "npcReply": "巨兽撞击在拒马上，发出了凄厉的哀鸣。‘冷静借物，你用最小的代价换取了最直接的战果。’",
            "scoreDelta": {
              "str": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "拒马截击",
              "惯性冲撞",
              "高效杀戮"
            ],
            "outcomeTone": "偏离",
            "branchHint": "擅长将战场障碍物转为防御反击工事的精明军士"
          },
          {
            "id": "C",
            "text": "被魔爪兽的吼声吓得浑身发抖，企图假装自己是驯兽师，拿出一根干瘪的鸡大腿试图喂食，结果被一巴掌拍飞。",
            "npcReply": "你揉着肿胀的脸从地上爬起来，鸡大腿已经被魔爪兽连手套一起吞了。‘把致命魔兽当小猫喂，你对自己的生命极其不负责任。’",
            "scoreDelta": {
              "con": -2,
              "wis": -2
            },
            "mbtiDelta": {
              "F": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": -2
            },
            "alignmentDelta": {
              "risk": 2
            },
            "triggerTags": [
              "鸡腿诱捕",
              "天真假死",
              "重度拍飞"
            ],
            "outcomeTone": "危险",
            "branchHint": "在极度危险的野兽面前玩耍弱智驯兽术的作死达人"
          },
          {
            "id": "D",
            "text": "对着魔爪兽发出比它更狂暴、更震耳欲聋的尖叫，并开始疯狂撕扯自己的头发和衣服，主打一个‘用精神失常战胜兽性’。",
            "npcReply": "魔爪兽瞪大了眼睛看着你抓狂的疯癫模样，迟疑着往后缩了缩。‘这不仅是嗓门的比拼，这是一种把野兽活活吓退的抽象精神压迫。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "疯癫尖叫",
              "精神恐吓",
              "反向驯化"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "擅长用更彻底的狂乱与疯癫来震慑大自然的抽象怪杰"
          }
        ]
      },
      {
        "id": "half_orc_barb_hostage_rescue",
        "targetId": "guild_barbarian",
        "title": "狂暴式营救",
        "scene": "敌军哨所里，一名重要的人质被绑在装满炸药桶的绞刑架上。一旦有明显的正面进攻，守卫就会点燃引信。",
        "prompt": "你的狂怒营救战术是：",
        "options": [
          {
            "id": "A",
            "text": "不顾一切地从正门以时速五十公里的狂暴冲锋撞碎栅栏，赶在引信燃尽前，用身体挡住爆炸，顺手将绞刑架整根拔起抗走。",
            "npcReply": "哨所在爆炸中化为火海，你背着一整根木桩人质从浓烟里一瘸一拐但毫发无伤地走了出来。‘极致的力量与极致的抗击打，你就是移动的掩体！’",
            "scoreDelta": {
              "str": 3,
              "con": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "狂野冲锋",
              "肉体挡爆",
              "拔桩扛人"
            ],
            "outcomeTone": "合格",
            "branchHint": "擅长用坚不可摧的肉身硬接爆炸来保护人质的猛人"
          },
          {
            "id": "B",
            "text": "用重弩精准射断引信，再用抛石机扔进一包生石灰，趁乱突入哨所迅速将绑缚切断。",
            "npcReply": "哨兵在石灰粉尘中疯狂咳嗽，你已经干净利落地把人质解下并背回了安全地带。‘极其少见的智取，你证明了半兽人也懂得声东击西。’",
            "scoreDelta": {
              "dex": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "石灰致盲",
              "精准弩击",
              "迅速切锁"
            ],
            "outcomeTone": "偏离",
            "branchHint": "深谙弹幕和粉尘干扰手段的精细特战小分队队长"
          },
          {
            "id": "C",
            "text": "冲哨所里的绑匪大喊大叫：‘有种把我也绑上去！俺跟人质同甘共苦！’随后真的被绑匪乱箭射翻。",
            "npcReply": "你倒在血泊里，大腿上插着三支断箭。‘把绑匪当做文明人商量同等待遇，你的愚蠢已经超越了荒野的平均水平。’",
            "scoreDelta": {
              "con": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_barbarian": -2
            },
            "alignmentDelta": {
              "risk": 2
            },
            "triggerTags": [
              "自投罗网",
              "道德游说",
              "箭雨洗礼"
            ],
            "outcomeTone": "危险",
            "branchHint": "试图在残酷绑匪前大发慈悲同甘共苦的憨货"
          },
          {
            "id": "D",
            "text": "扯下自己的红色内裤挂在脸上假装是‘末日恐怖分子’，冲进哨所并大吼‘俺已经把这里包围了，立刻交出人质！’",
            "npcReply": "绑匪被你这幅脸上挂红内裤且气势极其霸道的匪夷所思状态彻底整懵了，连点火的火柴都掉在了地上。‘这不仅是威吓，这是一种能摧毁心智的精神攻击。’",
            "scoreDelta": {
              "cha": 3,
              "wis": -2
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "红内裤假面",
              "反向包围",
              "脑干缺失威吓"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "能够通过极度丢人但气势极强的装束实现强力震慑的奇葩"
          }
        ]
      },
      {
        "id": "half_orc_barb_sieging",
        "targetId": "guild_barbarian",
        "title": "撞门艺术",
        "scene": "试炼堡垒的铁木大门紧闭，城墙上箭如雨下，后方追兵步步逼近。攻城车已经在刚才的魔导炮击中烧毁。",
        "prompt": "面对这块坚硬的阻碍，你体内沸腾的狂血催促你：",
        "options": [
          {
            "id": "A",
            "text": "放弃寻找工具，用你坚硬如铁的头盖骨当作攻城槌，对准铁木大门的中心点发起疯狂的连续撞击，硬生生把门板撞出个大窟窿。",
            "npcReply": "伴随着一声震天巨响，铁木大门解体崩裂，而你的额头只有几处擦伤。‘你的头骨密度让矮人战锤都感到汗颜，真正的物理开锁器！’",
            "scoreDelta": {
              "con": 3,
              "str": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "头铁神功",
              "物理撞大门",
              "铁头娃"
            ],
            "outcomeTone": "合格",
            "branchHint": "头盖骨硬度超越花岗岩的终极人形攻城槌"
          },
          {
            "id": "B",
            "text": "搬起地上的攻城车残骸，利用杠杆原理别在门缝间，全身发力配合杠杆将门轴生生撬断。",
            "npcReply": "随着一声刺耳的折断声，大门轰然向内倒塌。‘懂得以力使物，利用杠杆弥补力气的不足。出色的物理工程思维。’",
            "scoreDelta": {
              "str": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "杠杆破门",
              "合理借力",
              "破门高手"
            ],
            "outcomeTone": "偏离",
            "branchHint": "善用临时工具与物理原理进行硬核破障的力学先锋"
          },
          {
            "id": "C",
            "text": "抱着头蹲在城墙底下哭着呼唤妈妈，假装自己只是一块无害的圆润石头，希望敌人的弓箭手看不见你。",
            "npcReply": "你缩成一团瑟瑟发抖，结果不仅没能隐藏，反而因为占据了唯一的死角，被同伴一脚从楼梯上踹了下去。‘你的逃避战术极度低劣，连路过的哥布林都嫌弃你的懦弱。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": -2
            },
            "alignmentDelta": {
              "risk": 2
            },
            "triggerTags": [
              "战术圆润",
              "叫妈妈",
              "死角哭泣"
            ],
            "outcomeTone": "危险",
            "branchHint": "遇到重压只会当场缩成球体进行精神哭求的纯摆烂"
          },
          {
            "id": "D",
            "text": "抓起身边重装盾卫的塔盾，踩在盾牌上大喊‘俺就是滑板鞋之王！’，利用城墙前的斜坡滑入大门上的通气窗。",
            "npcReply": "你踩着塔盾在战火中以极其魔性的弧度飞跃上天，精准地砸穿了通气窗的横木。‘滑板鞋？这叫物理飞行，你简直把战场玩成了极限运动场。’",
            "scoreDelta": {
              "dex": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "滑板盾跃",
              "通气窗潜入",
              "极限跑酷"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "能在枪林弹雨里强行把重盾当做滑板进行空中突击的杂耍帝"
          }
        ]
      },
      {
        "id": "half_orc_barb_pain_resistance",
        "targetId": "guild_barbarian",
        "title": "痛觉的熔炉",
        "scene": "血怒试炼的终关，主考官拿出一支涂满熔岩巨蝎毒素的烙铁，准备在你的胸口烙印上狂怒的印记。这通常会引发无法忍受的精神崩溃。",
        "prompt": "当滚烫的烙铁贴上你的皮肤，开始滋滋作响时，你：",
        "options": [
          {
            "id": "A",
            "text": "仰天狂笑，甚至主动向前挺胸让烙铁按得更深。你用指甲掐进自己的肉里，将这股剧痛全数化为双眼燃烧的怒火。",
            "npcReply": "焦糊的烟雾升腾，你的狂笑声甚至盖过了金属的滋滋声。主考官被你的凶狠吓退了一步。‘痛觉只是俺怒火的火药，你通过了最硬核的考验！’",
            "scoreDelta": {
              "con": 3,
              "str": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "挺胸迎痛",
              "怒火转化",
              "狂傲深烙"
            ],
            "outcomeTone": "合格",
            "branchHint": "视剧痛为力量催化剂、彻底克服肉体本能折磨的怪兽"
          },
          {
            "id": "B",
            "text": "咬紧钢牙，全身肌肉极度紧绷硬化，启动半兽人特有的厚皮防御，强行将伤势控制在最表层的皮肤。",
            "npcReply": "烙铁留下了规整的焦黑印记，但你甚至连呼吸的频率都没乱。‘近乎变态的肉体控制力，你的防御本能已经化为骨骼的一部分。’",
            "scoreDelta": {
              "con": 2,
              "wis": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "肌肉角质化",
              "无伤硬抗",
              "坚如铁石"
            ],
            "outcomeTone": "偏离",
            "branchHint": "能够硬化体表肌肉、将高温灼伤物理隔绝的铁砧"
          },
          {
            "id": "C",
            "text": "疼得鼻涕眼泪一起流，一把夺过烙铁指着主考官大喊：‘退后！不然我就给自己脸上也来一下！咱们都别想好过！’",
            "npcReply": "主考官和周围的卫兵当场愣住了。‘用极端的自残动作进行反向威胁……你的道德和精神底线已经彻底脱离了正常生物。’",
            "scoreDelta": {
              "con": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 2
            },
            "affinityDelta": {
              "guild_barbarian": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "反向自残",
              "极度恐慌",
              "烙铁威胁"
            ],
            "outcomeTone": "危险",
            "branchHint": "在精神崩溃下企图通过反向自残实施道德绑架的懦夫"
          },
          {
            "id": "D",
            "text": "掏出一颗生鸡蛋按在滚烫的烙铁上，撒点胡椒面开始煎蛋。‘烙铁温度正好，这波操作俺给满分！’",
            "npcReply": "在滋滋的油水声中，你精准地压下了一口荷包蛋。‘在致命试炼现场搞铁板烧，你到底是对痛苦没有知觉，还是纯粹嘴馋？’",
            "scoreDelta": {
              "cha": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "铁板煎蛋",
              "吃货本能",
              "试炼野餐"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "能在剧烈灼烧现场极度放松地利用高温制作夜宵的吃货"
          }
        ]
      },
      {
        "id": "half_orc_barb_chase",
        "targetId": "guild_barbarian",
        "title": "狂暴追击",
        "scene": "敌军的骑兵正骑着双足飞龙撤退，距离你已经有数百步之遥。你手中没有任何远程武器，只有你的双腿。",
        "prompt": "你要如何阻止他们的逃跑？",
        "options": [
          {
            "id": "A",
            "text": "进入完全狂暴状态，双脚践踏地面飞奔，一路撞倒所有的树木，硬生生跑出野兽般的速度，在飞龙起飞前一跃而上将其拽下。",
            "npcReply": "你带着被撞烂的树枝和泥土从天而降，硬生生把飞龙的尾巴从空中拽回了地面。‘纯粹的爆发，你用双腿丈量了距离与重力！’",
            "scoreDelta": {
              "str": 3,
              "con": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "野兽奔袭",
              "重力擒抱",
              "撞碎树林"
            ],
            "outcomeTone": "合格",
            "branchHint": "拥有恐怖的爆发耐力、能在速度上超越飞龙起飞的冲锋狂"
          },
          {
            "id": "B",
            "text": "迅速奔向旁边的配重抛石机，砍断绳索，将自己当作投掷物，以精准的角度向飞龙群‘发射’出去。",
            "npcReply": "你像一颗沉重的炮弹划过天空，精准砸中了飞龙的鞍座。‘这不仅需要勇气，还需要极其变态的弹道计算。完美的物理飞行！’",
            "scoreDelta": {
              "str": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "把自己发射",
              "弹道飞天",
              "物理砸击"
            ],
            "outcomeTone": "偏离",
            "branchHint": "将重型器械与自身重力完美融合的疯狂肉弹战车"
          },
          {
            "id": "C",
            "text": "跪在地上画个圈，声称飞龙侵占了半兽人的神圣领地，如果它们不停下就要向荒野神殿起诉，结果被飞龙的尾巴扫进泥潭。",
            "npcReply": "你吃了一满嘴泥沙。‘指望通过画地为牢的契约起诉来约束翱翔的野兽，你的脑水可能在刚才撞门时漏光了。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_barbarian": -2
            },
            "alignmentDelta": {
              "risk": 2
            },
            "triggerTags": [
              "画地为牢",
              "强行起诉",
              "泥潭甩尾"
            ],
            "outcomeTone": "危险",
            "branchHint": "企图用荒野神权法律去说服暴虐野兽的规则脑癌"
          },
          {
            "id": "D",
            "text": "抢过身边小贩的推车，骑在上面一边疯狂蹬腿一边大喊‘俺寻思这轮子转得够快它就能飞！’推车奇迹般地滑翔了起来。",
            "npcReply": "你踩着推车在空中以极其颠簸但极快的速度滑翔过去。‘俺寻思之力再次显灵……你简直打破了主物质位面的物理底线！’",
            "scoreDelta": {
              "dex": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "俺寻思起飞",
              "推车滑翔",
              "力学侮辱"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "坚信“只要速度够快就能飞”并成功以推车上天的抽象客"
          }
        ]
      }
    ],
    "guild_fighter": [
      {
        "id": "half_orc_fighter_trench_def",
        "targetId": "guild_fighter",
        "title": "阵线的基石",
        "scene": "狭窄的谷口战壕里，重装骑士正发起波状冲锋。作为战线基石 of 你的，被要求在没有任何掩体的情况下死守防线十分钟。",
        "prompt": "面对汹涌而来的铁骑，你的防御姿态是：",
        "options": [
          {
            "id": "A",
            "text": "将塔盾深深插入泥土，用肩膀死死顶住盾牌内部，肌肉紧绷得如同坚石，以最规范的拒马姿态硬生生扛下骑兵的第一波撞击。",
            "npcReply": "盾牌与战马的胸甲猛烈相撞，发出沉闷的巨响。你的脚在泥土里退了三寸，但防线稳如泰山。‘教科书般的步兵架势，你的脊梁比城堡的铁门还要可靠！’",
            "scoreDelta": {
              "str": 2,
              "con": 2
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "order": 2
            },
            "triggerTags": [
              "标准拒马",
              "塔盾合围",
              "钢铁之躯"
            ],
            "outcomeTone": "合格",
            "branchHint": "坚守防线规程、以完美姿态吃下所有物理撞击的铁壁防员"
          },
          {
            "id": "B",
            "text": "冷静观察冲锋阵型的间隙，在铁骑撞击前的一瞬间，用阔盾侧面偏转敌方长枪的力道，并顺势用斩马刀砍断马腿。",
            "npcReply": "你侧身滑步，盾面将枪尖卸到一侧，随后在错身而过的瞬间利落地横扫斩马刀。‘优秀的动态视力与借力技巧，你把防御变成了一场高效的截击。’",
            "scoreDelta": {
              "str": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "卸力侧滑",
              "顺势砍马脚",
              "防御截击"
            ],
            "outcomeTone": "偏离",
            "branchHint": "懂得避实就虚、通过精巧卸力和反击瓦解骑兵的长刀手"
          },
          {
            "id": "C",
            "text": "抱起一大包烈性黑火药，点燃引信直接冲向最密集的骑兵群，大喊着‘为了氏族的绩效！’主打一个玉石俱焚。",
            "npcReply": "爆炸把战壕掀上了天。‘你的精神值得赞扬，但带上整队人一块飞天说明你的战术判断力完全是一团稀泥。’",
            "scoreDelta": {
              "con": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "risk": 2
            },
            "triggerTags": [
              "药包自杀",
              "连环爆炸",
              "同归于尽"
            ],
            "outcomeTone": "危险",
            "branchHint": "为了完成防守指标不惜带上全队在原地放烟花的战术鬼才"
          },
          {
            "id": "D",
            "text": "从背后掏出一面印着骷髅和爱心的粉红旗帜疯狂挥舞，扭动腰肢，宣称正在进行‘帝国军规第三条’的无公害交通疏导。",
            "npcReply": "正处于冲锋状态的骑兵被你的妖娆姿态和诡异旗帜惊得目瞪口呆，甚至导致几匹战马在惊慌中绊倒了同伴。‘用辣眼睛的姿势干扰重装骑兵的视野……极其歹毒的操作。’",
            "scoreDelta": {
              "cha": 3,
              "wis": -2
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "粉红指挥旗",
              "辣眼睛指挥",
              "战马宕机"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "能在两军厮杀的最前线通过极其抽象的肢体动作引发生化混乱的奇葩"
          }
        ]
      },
      {
        "id": "half_orc_fighter_weapon_custom",
        "targetId": "guild_fighter",
        "title": "兵器的改良",
        "scene": "军械库里，常规的战斧在面对敌人厚重的板甲时容易滑刃。教官要求你对自己的战斧进行实战化的改装。",
        "prompt": "你的改良方案是：",
        "options": [
          {
            "id": "A",
            "text": "卸掉华而不实的装饰，在斧背加焊一块重达二十斤的实心生铁凸起。‘劈不开重甲没关系，俺能直接隔着盔甲把他的内脏震碎！’",
            "npcReply": "你抡起这柄改装过的重斧，一下把铁假人砸成了扁平状。‘完美的物理破甲思路，你的实用主义和暴力美学完美融合。’",
            "scoreDelta": {
              "str": 3,
              "con": 1
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "order": 1
            },
            "triggerTags": [
              "实心铁凸",
              "物理隔甲震击",
              "战斧魔改"
            ],
            "outcomeTone": "合格",
            "branchHint": "追求极致的物理破甲与内脏震碎率的重型改造家"
          },
          {
            "id": "B",
            "text": "重新打磨斧刃边缘，将其改造成微弧度的锯齿状，并在手柄末端加入平衡配重的黄铜圆球以提升旋转惯性。",
            "npcReply": "战斧在空气中挥舞出规律的圆弧，发出刺耳的嗡嗡声。‘出色的平衡性与穿透性改造，这让你的每一次挥砍都能最大程度节省体力。’",
            "scoreDelta": {
              "dex": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "锯齿斧刃",
              "黄铜配重球",
              "挥砍惯性优化"
            ],
            "outcomeTone": "偏离",
            "branchHint": "深谙人体工程学与物理惯性的精细工匠"
          },
          {
            "id": "C",
            "text": "给斧刃涂上一层极度不稳定、随时可能发生自爆的红龙腐蚀粘液。‘只要威力够大，我自己的手被烂掉也值得！’",
            "npcReply": "你刚试着挥舞了一下，飞溅的粘液就当场把你的护手烧穿了。‘这是一柄极其危险的双刃剑，在敌人死掉之前，你自己的骨头先要被溶化！’",
            "scoreDelta": {
              "con": -2,
              "wis": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "risk": 2
            },
            "triggerTags": [
              "酸液附魔",
              "强力腐蚀",
              "防具崩坏"
            ],
            "outcomeTone": "危险",
            "branchHint": "为了追求单发高伤害而不惜在自用兵器上涂满自爆毒药的狂徒"
          },
          {
            "id": "D",
            "text": "把斧头手柄改成双节棍样式，甚至在斧面上装了一个用来喝水的吸管。‘这叫战术饮水两不误，俺寻思挺拉风的。’",
            "npcReply": "你一甩手，双节战斧的刀刃直接朝你自己的额头砍了过来，吓得你狼狈趴下。‘这诡异的构造，简直是战术装备学史上最滑稽的灾难！’",
            "scoreDelta": {
              "cha": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "双节斧柄",
              "吸管斧头",
              "自杀式甩动"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "总想给冷兵器增加一些多功能抽象功能却险些把自己割喉的废柴"
          }
        ]
      },
      {
        "id": "half_orc_fighter_tactical_retreat",
        "targetId": "guild_fighter",
        "title": "战术性转进",
        "scene": "战场上，你们的先锋队遭遇了数倍于己的伏兵，阵型被打散。考官命令你作为临时指挥官，带领残部撤退。",
        "prompt": "你的掩护撤退方案是：",
        "options": [
          {
            "id": "A",
            "text": "亲自带队殿后，严格要求残兵保持单列纵队。你手持双盾堵在山谷最狭窄的退路上，用坚固的身躯组成人肉防线，一步步稳健后撤。",
            "npcReply": "敌人的箭矢劈里啪啦砸在你背后的双盾上。伤亡报告显示，没有一名撤退的队友在后撤时掉队。‘稳健、冷酷且尽职！这才是阵线骨干！’",
            "scoreDelta": {
              "con": 3,
              "str": 1
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "order": 2
            },
            "triggerTags": [
              "双盾殿后",
              "列队撤退",
              "绝对守护"
            ],
            "outcomeTone": "合格",
            "branchHint": "把后背留给箭雨、坚决执行有序后退程序的重装坚盾手"
          },
          {
            "id": "B",
            "text": "利用林地地形，指挥射手进行梯次齐射，自己则在撤退路线上布置绊马索与尖钉陷阱，限制敌方轻骑兵的追击速度。",
            "npcReply": "追兵被林间的尖钉和绊马索弄得手忙脚乱，你带着剩余队伍极其轻快地脱离了包围圈。‘优秀的步射协同与环境设陷，极具灵性的撤退大师。’",
            "scoreDelta": {
              "int": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "梯次射击",
              "陷阱密布",
              "步射协同"
            ],
            "outcomeTone": "偏离",
            "branchHint": "擅长运用战术撤退和环境物理障碍进行阻击的工兵少尉"
          },
          {
            "id": "C",
            "text": "带着队伍向深渊毒沼的方向狂奔，大喊‘大家跟着俺冲，沼泽的剧毒能帮我们挡住追兵！’，导致三名队友中毒倒地。",
            "npcReply": "你和剩下的同伴被困在烂泥地里，不仅要面对背后的敌人，还要强忍剧烈的毒气。‘用自杀式环境拖延追兵，你在拿同伴的生命开玩笑。’",
            "scoreDelta": {
              "con": -2,
              "wis": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "毒沼逃亡",
              "队友中毒",
              "绝望突围"
            ],
            "outcomeTone": "危险",
            "branchHint": "通过把全队带入剧毒环境来实现同等毁灭性避难的灾难指挥"
          },
          {
            "id": "D",
            "text": "掏出事先准备好的大喇叭，对准敌军大喊：‘你们已经被我军重重包围！限你们三分钟内交出武器！’，趁敌人愣神时一溜烟跑了。",
            "npcReply": "追兵的前锋因为这突如其来的雷鸣喊叫吓得紧急勒马，你们借着这一秒的混乱，一头钻进树林彻底不见了。‘这极其离谱的空城计，竟然真的卡住了对手的脑干。’",
            "scoreDelta": {
              "cha": 3,
              "wis": -2
            },
            "mbtiDelta": {
              "N": 2
            },
            "affinityDelta": {
              "guild_cleric": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "假大空城计",
              "大喇叭威慑",
              "趁乱开溜"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "擅长用夸张假情报威吓配合心理落差开溜的战术大话王"
          }
        ]
      },
      {
        "id": "half_orc_fighter_colosseum",
        "targetId": "guild_fighter",
        "title": "角斗场的尊严",
        "scene": "氏族的角斗场上，你正与一名老练的兽人剑客对决。他的剑术行云流水，你身上已经多处挂彩。观众正疯狂嘲笑你的笨重。",
        "prompt": "面对围攻与嘲讽，你将如何赢回尊重？",
        "options": [
          {
            "id": "A",
            "text": "沉下心来，不再理会观众的嘘声。严格遵循战阵守则，稳扎稳打地消耗对手体力，在对方露出疲态的瞬间一记盾牌猛击砸碎其下颚。",
            "npcReply": "你用朴实无华的铁盾砸在对方脸上，全场嘲笑声瞬间归零。‘在嘈杂中保持钢铁般的冷静，用最扎实的技术给对手致命一击。这才是真正的斗士！’",
            "scoreDelta": {
              "str": 2,
              "con": 2
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "order": 2
            },
            "triggerTags": [
              "专注盾击",
              "体能消磨",
              "防守反击"
            ],
            "outcomeTone": "合格",
            "branchHint": "不受外界舆论影响、严格根据心肺耐力磨死对手的沉稳力士"
          },
          {
            "id": "B",
            "text": "故意漏出左肋的空门，在对方刺来的瞬间用侧身肌肉夹住剑刃，同时右手短刀精准反切其手腕腱鞘。",
            "npcReply": "鲜血网络腰侧滑过，但对方的手筋瞬间被你的短刀挑断，长剑无力坠地。‘极其毒辣且大胆的肌肉诱饵。你不仅有肌肉，还有恐怖的战术狡黠。’",
            "scoreDelta": {
              "dex": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "肌肉夹刃",
              "腱鞘切割",
              "险招取胜"
            ],
            "outcomeTone": "偏离",
            "branchHint": "通过伤害控制与血肉诱饵实现极限一击剥夺战斗力的快刀手"
          },
          {
            "id": "C",
            "text": "彻底破防，抛弃所有防御防具，赤身裸体冲向对方的剑尖，高喊‘看谁先被扎透！’，结果胸口被刺穿送进ICU。",
            "npcReply": "你在担架上直挺挺地躺着，胸口裹满了绷带。‘被观众一挑逗就完全丧失了防卫常识，你这不叫勇猛，这叫重度无脑自杀。’",
            "scoreDelta": {
              "con": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "risk": 2
            },
            "triggerTags": [
              "裸奔冲锋",
              "防具抛弃",
              "重创濒死"
            ],
            "outcomeTone": "危险",
            "branchHint": "因面子受挫直接脱掉重铠给敌人送致命弱点攻击的破防怪"
          },
          {
            "id": "D",
            "text": "突然从裤裆里掏出一把大蒜和辣椒面撒在自己的盾牌上，然后开始疯狂地舔舐盾牌并朝对手做鬼脸，把对方吓得连退数步。",
            "npcReply": "看着你满嘴流着大蒜辣酱、面目极度狰狞且舔盾牌的抽象样子，对手的手都在疯狂颤抖。‘你不仅污染了决斗场，还摧毁了他的心理防线！’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "N": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "辣椒粉舔盾",
              "心理生化战",
              "鬼脸嘲讽"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "利用极其倒胃口的自残式鬼畜动作强行进行精神污染的恶鬼"
          }
        ]
      },
      {
        "id": "half_orc_fighter_night_raid",
        "targetId": "guild_fighter",
        "title": "军纪的考核",
        "scene": "深夜，军营突然遭遇敌方狮鹫的空投燃烧弹袭击，周围火光冲天，新兵们因为恐慌而四处奔逃，防线即将崩溃。",
        "prompt": "作为副军士长，你的第一反应是：",
        "options": [
          {
            "id": "A",
            "text": "拔出佩剑劈断逃兵的木盾，以雷鸣般的军令怒吼压制杂音，强行将残存 of 重步兵按原有编制重新集结，用盾墙阻挡火势与余波。",
            "npcReply": "你高大的身躯在火光下如同一座铁塔，新兵们看到你高高举起的军旗，瞬间找到了主心骨。‘钢铁般的威信，你保住了氏族的灵魂与阵线！’",
            "scoreDelta": {
              "str": 2,
              "cha": 2
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "order": 2
            },
            "triggerTags": [
              "强行集结",
              "铁面弹压",
              "盾阵合龙"
            ],
            "outcomeTone": "合格",
            "branchHint": "坚决以严苛军法弹压恐慌、通过编制重整挽救残局的教官"
          },
          {
            "id": "B",
            "text": "指挥工兵就地掘土覆盖燃烧源，同时用弩车瞄准低空盘旋的狮鹫，精准射杀其骑手以解除空投威胁。",
            "npcReply": "重弩的钢丝弹动，一只巨大的狮鹫应声打着旋坠入河中，敌人的空袭阵型瞬间被你撕开。‘优秀的临场灭火统筹与精准的对空狙击战术。’",
            "scoreDelta": {
              "int": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "对空狙击",
              "沙土覆火",
              "精准反击"
            ],
            "outcomeTone": "偏离",
            "branchHint": "冷静理智、利用重型守城器械针对敌人软肋进行斩首的反空专家"
          },
          {
            "id": "C",
            "text": "物理性判定营地没救了，抢先跑到军需库把仅存的氏族金币全部打包塞进裤兜，嘴里喊着‘俺去保护国有资产！’然后开溜。",
            "npcReply": "你在大门口被军法处抓了个正着，金币哗啦啦从你被烧出破洞的裤管里掉了出来。‘战场盗窃与叛逃，你的下半生将在死囚营里度过！’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "军需库偷盗",
              "战时出逃",
              "当场收网"
            ],
            "outcomeTone": "危险",
            "branchHint": "在队伍生死关头极其纯熟地实施中饱私囊与火线卷款跑路的无耻流"
          },
          {
            "id": "D",
            "text": "脱下裤子用尿去浇灭烈火，并指着天上的狮鹫大骂：‘有种下来跟俺比划比划，在天上丢炮仗算什么半兽人！’",
            "npcReply": "你迎风甩动的姿态和惊世骇俗的叫骂声成功引起了敌人的敌意，大批狮鹫偏离了航线朝你俯冲。‘你用极其荒谬的个人举动，完成了战场嘲讽！’",
            "scoreDelta": {
              "cha": 2,
              "con": 1
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "开闸放水",
              "生化灭火",
              "个人嘲讽"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "能用极其下流但极其拉仇恨的方式在废墟里建立防线的怪咖"
          }
        ]
      },
      {
        "id": "half_orc_fighter_heavy_armor",
        "targetId": "guild_fighter",
        "title": "重甲的负累",
        "scene": "试炼中你必须穿着重达一百二十斤的全身板甲通过一片齐腰深的烂泥地，板甲已经开始进水进泥，每走一步都极其吃力。",
        "prompt": "你会如何通过这片泥潭？",
        "options": [
          {
            "id": "A",
            "text": "调整呼吸节奏，严格保持重心的稳定。每一步都深深踩实，利用腰腹力量强行拔出泥腿，如同一台人形坦克般稳健地趟过去。",
            "npcReply": "你每走一步都在泥浆里留下一个极其深深的脚印，但你的步伐极其稳定，最终平稳上岸。‘真正卓越的纯肉体力量与呼吸吐纳，你征服了重力！’",
            "scoreDelta": {
              "con": 3,
              "str": 1
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "order": 2
            },
            "triggerTags": [
              "人形坦克",
              "深陷拔步",
              "稳定重心"
            ],
            "outcomeTone": "合格",
            "branchHint": "通过调整肺部换气节奏、依靠钢铁腰肌强行战胜粘滞阻力的力士"
          },
          {
            "id": "B",
            "text": "利用铁铲和长枪作为支撑杆，平铺木板分摊重量，采用滑行和匍匐的姿势，极其技巧性地缩短通过时间。",
            "npcReply": "你踩在泥中的长柄武器残骸上，如同在冰面上滑行一样轻松滑过。‘出色的战术器材利用！你把笨重的铠甲玩成了雪橇。’",
            "scoreDelta": {
              "dex": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 2,
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "盾牌滑冰",
              "长柄枪铺路",
              "技巧滑行"
            ],
            "outcomeTone": "偏离",
            "branchHint": "懂得利用表面积物理压强原理在沼泽中快速位移的聪明军士"
          },
          {
            "id": "C",
            "text": "觉得甲胄太重，直接在泥潭里把板甲脱个精光扔掉，结果刚上岸就被林子里的毒针吹箭射了一满身。",
            "npcReply": "你浑身肿胀地倒在岸边。‘抛弃防具等于直接对死神缴械，没有板甲的掩护，你那点糙肉连一只毒虫都挡不住。’",
            "scoreDelta": {
              "con": -2,
              "wis": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "防具解除",
              "毒素入侵",
              "裸奔上岸"
            ],
            "outcomeTone": "危险",
            "branchHint": "嫌弃铠甲沉重在危险行军途中完全裸露防御弱点的脑瘫"
          },
          {
            "id": "D",
            "text": "在泥里开始打滚，嘴里大喊‘俺已经和泥土融为一体了，大地的母亲在召唤俺！’，靠着泥滑的摩擦力滚过了泥潭。",
            "npcReply": "你变成了一个巨大的泥球，一路咕噜咕噜滚上了岸。‘虽然看起来极度恶心且毫无尊严，但泥浆的确中和了板甲的死角摩擦力。’",
            "scoreDelta": {
              "cha": 2,
              "con": 1
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "泥球打滚",
              "摩擦中和",
              "大地母亲托梦"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "能把钢铁防具当做滚动外壳在污泥里打转上岸的抽象怪物"
          }
        ]
      },
      {
        "id": "half_orc_fighter_hostile_general",
        "targetId": "guild_fighter",
        "title": "敌将的挑衅",
        "scene": "战场两军对垒，敌方的一名重装统领在阵前疯狂叫骂，指名道姓地侮辱你的先祖，试图引诱你单挑以破坏你们的防守阵型。",
        "prompt": "你的应对是：",
        "options": [
          {
            "id": "A",
            "text": "面无表情地坚守防线，示意弓箭手准备。‘军令如山，氏族的阵型比俺的个人荣誉重要一万倍。’",
            "npcReply": "敌人的污言秽语撞在你的塔盾上，你连眼皮都没眨一下。你的冷静让全军阵线稳如坚墙。‘真正的将军！大将风度！’",
            "scoreDelta": {
              "con": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 3
            },
            "alignmentDelta": {
              "order": 2
            },
            "triggerTags": [
              "坚如磐石",
              "无视挑衅",
              "严守军令"
            ],
            "outcomeTone": "合格",
            "branchHint": "坚守防卫章程、为了大局完全无视对方粗鄙指责的钢铁卫士"
          },
          {
            "id": "B",
            "text": "示意重步兵推进十步以缩短距离，随后冷静反讽，指出对方头盔上的孔径过大，下一秒用重弩一箭精准射穿其面甲。",
            "npcReply": "破空声响起，敌将的叫骂声随着箭矢射穿头盔的声音嘎然而止。‘漂亮的精准射击！你用最少的口舌，进行了最有效的战术斩首。’",
            "scoreDelta": {
              "int": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_fighter": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "推进弩射",
              "精准斩首",
              "硬核反击"
            ],
            "outcomeTone": "偏离",
            "branchHint": "精通以极短的战术突进和重型抛射武器堵住对方嘴巴的斩首专家"
          },
          {
            "id": "C",
            "text": "气得双眼发黑，不顾统帅的撤退命令，一个人端着长枪嗷嗷叫着冲向敌阵，结果陷入重重包围被打成筛子。",
            "npcReply": "你的长枪甚至没碰到敌将，就被大批枪兵卡死，随后被网兜套牢。‘因为两句脏话就抛弃了阵列的掩护，你根本不配当一名士兵！’",
            "scoreDelta": {
              "con": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_fighter": -2
            },
            "alignmentDelta": {
              "risk": 2
            },
            "triggerTags": [
              "越界送死",
              "阵线决裂",
              "万箭穿心"
            ],
            "outcomeTone": "危险",
            "branchHint": "因几句挑衅就抛弃盾阵大部队一个人无脑冲敌方阵地的莽夫"
          },
          {
            "id": "D",
            "text": "掏出镜子和梳子，当着两军的面开始整理自己的獠牙和发型，并指着敌将大笑：‘你骂得挺好，但你长得像个没洗干净的红薯！’",
            "npcReply": "敌人的重装将领当场被你这荒诞的整理仪容和红薯言论弄得不知所措，两军的新兵更是哄堂大笑。‘你成功把严肃的决斗现场重构成了喜剧。’",
            "scoreDelta": {
              "cha": 3,
              "wis": -2
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "战中理容",
              "红薯指控",
              "哄堂大笑"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "能用极度不正经的动作和奇特比喻让紧绷的死斗现场瞬间破防的笑匠"
          }
        ]
      }
    ],
    "guild_rogue": [
      {
        "id": "orc_rogue_assassination",
        "targetId": "guild_rogue",
        "title": "暗杀的奥义",
        "scene": "作为潜行者，你的目标是暗杀一个被重兵把守的兽人军阀。他正躲在极其坚固的堡垒里。",
        "prompt": "你要如何极其完美地完成这次暗杀？",
        "options": [
          {
            "id": "A",
            "text": "你一脚踹碎了堡垒的大门，手持两把涂满烈性毒药的重型开山刀，一路像绞肉机一样从正门狂砍到顶楼。在所有人震惊的目光中，你一刀砍下了军阀的脑袋。‘这就是我的潜行，绝对没人活着出去通风报信！’",
            "npcReply": "堡垒内尸横遍野，血流成河。‘把暗杀硬生生玩成了攻城战，你完美定义了什么是物理潜行。’",
            "scoreDelta": {
              "str": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 3,
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "正门绞肉机",
              "物理清场",
              "硬核暗杀"
            ],
            "outcomeTone": "合格",
            "branchHint": "坚信‘杀光目击者就是潜行’的绞肉机刺客"
          },
          {
            "id": "B",
            "text": "你摸清了军阀的饮食规律，在几公里外的一处高地，用特制的巨型机弩把一发装满剧毒孢子的箭矢精准射入了他的烤肉帐篷里。然后你悠闲地泡了杯茶，用望远镜冷酷地看着堡垒内部乱作一团。",
            "npcReply": "军阀毒发身亡，卫兵连敌人的影子都没看到。‘运筹帷幄的超视距暗杀，极其阴毒且高效。’",
            "scoreDelta": {
              "int": 2,
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
              "control": 2
            },
            "triggerTags": [
              "超视距投毒",
              "机弩狙击",
              "运筹帷幄"
            ],
            "outcomeTone": "偏离",
            "branchHint": "擅长超视距打击和精准投毒的老硬币"
          },
          {
            "id": "C",
            "text": "你费避千辛万苦潜入堡垒，结果一看到军阀那夸张的肌肉就怂了。你立刻双膝跪地，双手奉上雇主的名单和所有暗杀计划，声泪俱下地大喊：‘大王！我是来投诚的！这就是那个想杀您的混蛋！’",
            "npcReply": "军阀极其满意地收编了你，而你的前雇主很快被满门抄斩。‘只要滑跪得够快，敌人的大腿就是你最稳固的靠山。’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "P": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_rogue": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "滑跪投诚",
              "出卖雇主",
              "职业反骨仔"
            ],
            "outcomeTone": "危险",
            "branchHint": "极其熟练掌握滑跪投诚技巧的职业反骨仔"
          },
          {
            "id": "D",
            "text": "你穿上一身西装，夹着公文包，大摇大摆地敲开堡垒大门，自称是‘地精联合保险公司’的高级理赔员。你靠着极其离谱的嘴遁和话术，硬生生把军阀忽悠得买了一份‘意外死亡险’，并在签字笔的墨水里下了见血封喉的剧毒。",
            "npcReply": "军阀签完字后毒发身亡，而你甚至还合法地拿走了他的第一笔保费。‘这是一种超越了碳基生物理解范畴的金融诈骗式暗杀。’",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "N": 1,
              "E": 1
            },
            "affinityDelta": {
              "guild_cleric": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "保险推销",
              "理赔员伪装",
              "合同下毒"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "能把商业诈骗玩成夺命暗杀的超级神棍"
          }
        ]
      },
      {
        "id": "half_orc_rogue_pocket_pick",
        "targetId": "guild_rogue",
        "title": "顺手牵羊",
        "scene": "繁华的下城区集市上，教官指着一个挂着沉甸甸钱袋的肥胖商贩。你的任务是悄无声息地把钱袋偷走。",
        "prompt": "面对这个极其考验手艺的活儿，你的操作是：",
        "options": [
          {
            "id": "A",
            "text": "利用你庞大的体型故意撞上去，在撞击的瞬间使用暗影指法极其迅速地切断钱袋挂绳，并在对方发飙前连声道歉脱身。",
            "npcReply": "商贩被你撞得晕乎乎的，连声说没事，而他的钱包早已落入你的袖口。‘绝妙的撞击掩护与瞬间的手法！’",
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
              "action": 1
            },
            "triggerTags": [
              "肉体碰撞",
              "袖口乾坤",
              "瞬间切绳"
            ],
            "outcomeTone": "合格",
            "branchHint": "通过故意撞击进行感官掩盖、实施高速扒窃的肉体派盗贼"
          },
          {
            "id": "B",
            "text": "假装在旁边的摊位挑选货物，用特制的长杆吸铁石和夹子，极其冷静地隔着数米距离将钱袋‘钓’了过来。",
            "npcReply": "钱包穿过重重衣摆被你钓回了袖子。‘拉长了施法与盗取距离，极度冷静与理性的机械式扒手。’",
            "scoreDelta": {
              "dex": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_rogue": 2
            },
            "alignmentDelta": {
              "control": 2
            },
            "triggerTags": [
              "机械长竿",
              "隔空垂钓",
              "精确卡位"
            ],
            "outcomeTone": "偏离",
            "branchHint": "善用长柄机械辅助与空间距离规避物理指认的科技扒手"
          },
          {
            "id": "C",
            "text": "刚把手伸过去就被商贩抓个正着，你脑子一热，直接一拳把商贩揍昏过去，抓起钱袋在城防军的围追堵截中疯狂逃跑。",
            "npcReply": "满大街的警铃响起。‘在光天化日之下把扒窃直接升级为强行抢劫打人，你的潜行思路已经彻底回到了荒野。’",
            "scoreDelta": {
              "str": 2,
              "con": -2
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
              "扒窃败露",
              "重拳击晕",
              "全城大通缉"
            ],
            "outcomeTone": "危险",
            "branchHint": "一旦穿帮就当街实施暴力肉搏以抗衡法律制裁的急躁鬼"
          },
          {
            "id": "D",
            "text": "走到商贩面前扯下自己的一颗獠牙丢进他的钱袋，大喊‘俺用这颗纯手工獠牙跟你换这袋金币，买定离手啊！’",
            "npcReply": "商贩看着手里那颗还在流血的狰狞獠牙，吓得当场嚎啕大哭，把钱包扔在地上连滚带爬地跑了。‘物理性血腥交易，你重新定义了物物交换。’",
            "scoreDelta": {
              "cha": 3,
              "wis": -2
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "物理性拔牙",
              "强行兑换",
              "心理震慑"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "能够通过极其诡异的自残物换金币方式迫使商贩落荒而逃的异类"
          }
        ]
      },
      {
        "id": "half_orc_rogue_poison_mix",
        "targetId": "guild_rogue",
        "title": "毒药的艺术",
        "scene": "暗杀任务需要你在目标的酒杯里下一剂无色无味的致命毒药。但你的毒药瓶在路上被挤坏了，只剩下一堆刺鼻的化学粉末。",
        "prompt": "你的下毒方案是：",
        "options": [
          {
            "id": "A",
            "text": "把刺鼻的毒药粉末揉进一块大蒜和臭豆腐里，伪装成‘异域风味小吃’强行塞给目标的侍从，让侍从的口臭间接把目标熏倒。",
            "npcReply": "目标在闻到侍从口臭的瞬间当场双眼翻白倒地不起。‘利用发酵食物的穿透力强行掩盖毒素异味，你完成了完美的毒素掩护！’",
            "scoreDelta": {
              "dex": 2,
              "cha": 2
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
              "生化遮蔽",
              "臭味掩盖",
              "宿主传播"
            ],
            "outcomeTone": "合格",
            "branchHint": "擅长用重度食物气味伪装中和毒素刺激化学反应的刺客"
          },
          {
            "id": "B",
            "text": "利用目标的酒是烈性麦酒的特点，计算出酒精中和毒素气味的临界比例，将其精准研磨后撒入酒杯，确保其无色。",
            "npcReply": "目标喝下麦酒，赞叹了一声酒味够劲，随后在三个呼吸内安详地趴在了桌上。‘完美的溶解速率与比例精算，真正的化学毒杀！’",
            "scoreDelta": {
              "int": 3,
              "dex": 1
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
              "酒精溶解",
              "气味稀释",
              "精准剂量"
            ],
            "outcomeTone": "偏离",
            "branchHint": "通过麦酒高酒精度进行稀释与化学物理常识融毒的极客"
          },
          {
            "id": "C",
            "text": "觉得太麻烦，直接把毒药粉末全撒在自己的拳头上，准备等会儿直接一拳轰进目标嘴里，完全不管自己也会中毒。",
            "npcReply": "你的一拳打碎了对方的门牙，而毒药也顺着你拳头上的伤口溶进了你自己的血里，你们俩在ICU里并排躺着。‘杀敌一千自损八百，你的战术极其战术短视。’",
            "scoreDelta": {
              "str": 2,
              "con": -2
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
              "拳头融毒",
              "硬核物理灌药",
              "毒药倒灌"
            ],
            "outcomeTone": "危险",
            "branchHint": "习惯用重拳塞药导致自己和目标双双倒在毒素反噬下的莽撞人"
          },
          {
            "id": "D",
            "text": "把毒药粉末和红糖混合做成一颗极其拉风的“爆燃麦芽糖”，送给目标并声称这是“深渊特产跳跳糖”，引诱他端着嚼碎。",
            "npcReply": "目标在噼里啪啦的爆炸声中被炸穿了食道，而你在他爆炸前顺势拿走了他的金戒指。‘这不仅是毒杀，这是一种极具视觉特效的口中爆破。’",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "自制跳跳糖",
              "口中燃爆",
              "特效毒击"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "把毒药改造成能在目标嘴巴里放礼花的爆破食品艺术家"
          }
        ]
      },
      {
        "id": "half_orc_rogue_escape",
        "targetId": "guild_rogue",
        "title": "铁窗泪逃生",
        "scene": "不幸的是你被关进了城防军的死牢里。牢门是由精钢打造的，墙壁是厚达三尺的坚石，唯一的看守正坐在桌子旁打瞌睡。",
        "prompt": "你要如何脱困？",
        "options": [
          {
            "id": "A",
            "text": "趁看守打瞌睡，利用你惊人的指力把裤腰带上的铁搭扣掰成一根细铁丝，极其耐心地伸进锁孔，盲摸了十分钟将锁撬开。",
            "npcReply": "微弱的‘咔哒’声中，铁锁崩开，你如同黑夜中的猫一样无声滑出。‘无懈可击的手工巧劲，这才是真正的开锁大师！’",
            "scoreDelta": {
              "dex": 3,
              "con": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 3
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "铁丝开锁",
              "细微指力",
              "无声脱离"
            ],
            "outcomeTone": "合格",
            "branchHint": "以微小指关节骨骼错位和金属铁丝进行盲开锁的特工"
          },
          {
            "id": "B",
            "text": "用铁勺在墙角的排水渠边缘极其规律地刮擦，造成地基松动，随后利用杠杆原理推开松动的石砖，从地下水道逃脱。",
            "npcReply": "几块松动的花岗岩被你物理撬开，你一头扎进恶臭的下水道顺利脱困。‘懂得分析牢房建筑学的薄弱点，极其耐心的战术工兵。’",
            "scoreDelta": {
              "int": 2,
              "dex": 1
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
              "刮擦花岗岩",
              "地基破坏",
              "水道撤退"
            ],
            "outcomeTone": "偏离",
            "branchHint": "通过物理敲击和水文侵蚀判断墙体薄弱点进行破拆的工兵"
          },
          {
            "id": "C",
            "text": "用头疯狂撞击精钢牢门企图将其撞开，结果门没碎，自己的脑门鲜血直流，还把大批看守全给引了过来。",
            "npcReply": "你被穿上束缚带吊在墙上。‘指望用肉体之躯撞碎城防军的魔导合金门，你的大脑可能在降生时被钳子夹扁过。’",
            "scoreDelta": {
              "con": -2,
              "wis": -2
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
              "硬磕合金门",
              "鲜血直流",
              "看守警报"
            ],
            "outcomeTone": "危险",
            "branchHint": "试图以肉体头槌冲装城防禁魔精钢门引发大出血的铁头娃"
          },
          {
            "id": "D",
            "text": "扯开喉咙对看守大唱深渊情歌，深情款款地宣称‘俺爱上了你的制服，让俺出去给你做一辈子大腰子！’，把看守恶心得直接开门。",
            "npcReply": "看守脸色铁青、浑身战栗地打开牢门，一边呕吐一边逃命。‘你用极其可怕的歌喉与极度可怕的示爱，完成了生理级退敌。’",
            "scoreDelta": {
              "cha": 3,
              "wis": -2
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_cleric": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "惊世示爱",
              "制服行头",
              "看守心理崩溃"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "能用极其刺耳甚至让人下半身发凉的求爱话术逼迫看守开门的怪杰"
          }
        ]
      },
      {
        "id": "half_orc_rogue_intel_gather",
        "targetId": "guild_rogue",
        "title": "情报的窃取",
        "scene": "敌军将领的卧房里藏有一份极其机密的城防图。卧房门外有两名重装卫兵守卫，窗户上挂着魔法警铃。",
        "prompt": "你的潜入方案是：",
        "options": [
          {
            "id": "A",
            "text": "利用夜色，倒挂在房顶上，用一根涂了粘胶的长竹竿隔着窗户缝隙，将桌上的城防图一点点‘粘’出来。",
            "npcReply": "图纸在微风中摇晃着被你缓缓拉上屋顶。‘极致的稳定性与耐心，没有触发任何魔法波动。标准的影武者！’",
            "scoreDelta": {
              "dex": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "S": 1,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 3
            },
            "alignmentDelta": {
              "action": 1
            },
            "triggerTags": [
              "屋顶潜伏",
              "长竹竿粘图",
              "无痕盗窃"
            ],
            "outcomeTone": "合格",
            "branchHint": "通过倒挂树梢与摩擦力控制进行远程无声探取的潜伏高手"
          },
          {
            "id": "B",
            "text": "微装成送炭火的仆人，在炭盆里加入特制的迷魂草，通过通气孔将房间内的人全部迷晕，再大摇大摆进去拿走图纸。",
            "npcReply": "房间里传出了粗重的鼾声，你轻松地推门进去拿走了公文。‘利用空气动力学与药物反应，极度科学且安全的方法。’",
            "scoreDelta": {
              "int": 2,
              "dex": 1
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
              "迷魂熏香",
              "假扮杂役",
              "空气下毒"
            ],
            "outcomeTone": "偏离",
            "branchHint": "善用易容、伪装与气体挥发毒剂进行大范围非杀伤性制服的特工"
          },
          {
            "id": "C",
            "text": "觉得没必要鬼鬼祟祟，直接一枪把魔法警铃打爆，顶着刺耳的警报声冲进房间抓起图纸，在箭雨中疯狂逃窜。",
            "npcReply": "你的屁股上挨了两箭，背上的斗篷也被烧焦了一大半。‘打草惊蛇之后强行突防，你简直是在拿自己的肉体和子弹做概率实验！’",
            "scoreDelta": {
              "str": 2,
              "con": -2
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
              "警铃引爆",
              "强行突破",
              "箭雨洗礼"
            ],
            "outcomeTone": "危险",
            "branchHint": "宁愿顶着防空警报强行掠夺防卫文书也不愿做任何技巧遮蔽的憨批"
          },
          {
            "id": "D",
            "text": "穿着一身极其紧身的粉红色夜行衣，在走廊里一边走猫步一边朝卫兵飞吻，坚信‘只要俺坚信自己是隐形的，别人就看不见俺’。",
            "npcReply": "两个重装卫兵在惊骇与三观尽碎的冲击下陷入了痴呆，你踩着妖娆的步子从他们中间拿走了钥匙。‘你的中二病和俺寻思之力竟然能扭曲空间认同！’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "粉红紧身衣",
              "极度自恋",
              "视觉盲区制造"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "通过极度刺眼的粉色夜行衣配合强烈的心理自信强行扭曲敌人视角的抽象人"
          }
        ]
      },
      {
        "id": "half_orc_rogue_crowd_meld",
        "targetId": "guild_rogue",
        "title": "融入人群",
        "scene": "你被城防军满街通缉，一队卫兵正在前方挨个盘查路人。由于你两米二的身高和那一对标志性的獠牙，人群中你极其扎眼。",
        "prompt": "你的伪装避难方案是：",
        "options": [
          {
            "id": "A",
            "text": "迅速抢过路边卖艺小贩的油彩，往脸上画上夸张的妆容，抓起锣鼓大吼大叫地开始表演‘胸口碎大石’，假装自己是个滑稽的马戏团小丑。",
            "npcReply": "围观群众疯狂鼓掌，盘查的卫兵甚至还往你的脸盆里丢了两枚铜板。‘完美的戏剧张力！你把显眼的身高变成了最合理的马戏团招牌！’",
            "scoreDelta": {
              "dex": 2,
              "cha": 2
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
              "街头卖艺",
              "油彩伪装",
              "碎大石吸睛"
            ],
            "outcomeTone": "合格",
            "branchHint": "将自身异族体格特征伪装成夸张的艺术卖艺小丑、利用心理盲区避险的戏精"
          },
          {
            "id": "B",
            "text": "闪入胡同，换上一套极其严整的城防军军官制服，反倒拿着通缉令走到盘查的卫兵面前，冷酷地训斥他们效率低下，随后大摇大摆穿过防线。",
            "npcReply": "小队长被你训得满头大汗，站得笔直给你敬礼。‘教科书般的反向气场压制，你比城防军更像个长官。’",
            "scoreDelta": {
              "cha": 2,
              "int": 1
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
              "军官制服",
              "威压训斥",
              "贼喊捉贼"
            ],
            "outcomeTone": "偏离",
            "branchHint": "通过偷取高阶军官服饰、施加严苛阶级气场反制低级卫兵的心理伪装家"
          },
          {
            "id": "C",
            "text": "吓得魂飞魄散，直接把旁边抱小孩的妇人推倒，抢走她的婴儿车自己钻了进去，企图假装自己是一个两百斤的‘巨婴’。",
            "npcReply": "你蜷缩在小车里，两条两米长的毛腿露在外面，车轴发出凄惨的断裂声。卫兵像看傻子一样把你拎了起来。‘你的愚蠢和残忍简直是不折不扣的灾难！’",
            "scoreDelta": {
              "con": -2,
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
              "婴儿车潜伏",
              "妇人推倒",
              "穿帮爆笑"
            ],
            "outcomeTone": "危险",
            "branchHint": "因极端恐慌做出了伤害无辜且造型极度违背人类骨骼极限的作死懦夫"
          },
          {
            "id": "D",
            "text": "把头埋进旁边的泔水桶里，屁股留在外面，坚信‘只要看不见世界，世界就看不见俺，俺现在是一根大葱’。",
            "npcReply": "卫兵盯着这根在泔水桶里扭动屁股的两米二‘大葱’，铺着鼻子绕道而行，生怕染上神经病。‘你用极具生理和心理污染的抽象行为，强行驱散了盘查。’",
            "scoreDelta": {
              "cha": 2,
              "wis": -2
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "泔水桶大葱",
              "神经病伪装",
              "生化恶心"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "能够通过极度恶心且违背文明底线的掩耳盗铃行为实现大范围驱人的怪胎"
          }
        ]
      },
      {
        "id": "half_orc_rogue_trap_disarm",
        "targetId": "guild_rogue",
        "title": "陷阱的拆除",
        "scene": "通往藏宝室的走廊上铺满了微不可察的红外线触发射线，一旦碰触，两侧墙壁就会射出成百上千支毒箭。",
        "prompt": "你打算如何拆除或通过这个陷阱区？",
        "options": [
          {
            "id": "A",
            "text": "拿出一面小镜子反射射线折射路径，用极度灵巧的身段在射线的缝隙中进行近乎人体极限的折叠与滑行，安然通过。",
            "npcReply": "你做出了一个极其优美的后折腰，像一片飘落的叶子一样滑过了红外网。‘惊人的柔韧性与折叠技巧，你的肌肉简直比面条还要柔软！’",
            "scoreDelta": {
              "dex": 3,
              "con": 1
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
              "镜面反射",
              "面条折腰",
              "极限红外闪躲"
            ],
            "outcomeTone": "合格",
            "branchHint": "以极致骨关节折叠与经典体操翻滚无伤趟过射线阵的软骨刺客"
          },
          {
            "id": "B",
            "text": "射出几枚飞镖破坏走廊尽头的发射法阵核心，或者用喷雾显现射线的实体，用剪刀精准切断其背后的感应铜丝。",
            "npcReply": "几声脆响后，射线接二连三地熄灭。‘理性的逆向工程分析。你找到了能量源并进行了精准的物理切断。’",
            "scoreDelta": {
              "int": 2,
              "dex": 1
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
              "法阵爆除",
              "感应铜线切断",
              "射线雾化"
            ],
            "outcomeTone": "偏离",
            "branchHint": "深谙法阵能量回路与机械触发原理的精准拆弹专家"
          },
          {
            "id": "C",
            "text": "闭上眼睛直接平趟过去，声称‘俺有主角光环，子弹都会绕着俺走！’，结果被射成了刺猬送去抢救。",
            "npcReply": "你身上插着三十六支短箭被抬了出来，大腿肿得像大象。‘把致命的毒箭反射阵当做个人的运气测试，你的鲁莽简直是对医疗资源的严重浪费。’",
            "scoreDelta": {
              "con": -2,
              "wis": -2
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
              "平趟毒刺",
              "刺猬化身",
              "光环幻想"
            ],
            "outcomeTone": "危险",
            "branchHint": "迷信玄学大运强行用肉体硬抗成百上千毒箭喷射的豪赌狂人"
          },
          {
            "id": "D",
            "text": "召唤出你的魔宠——一只肥胖的土拨鼠，让它穿上特制的防弹背心在前面探路触发，自己则在后面当保龄球滚过去。",
            "npcReply": "土拨鼠一边发出凄惨的尖叫一边在前面吃箭，你踩着油水一路咕噜噜滚过走廊。‘可怜的土拨鼠……但这个防弹背心加保龄球滚法的确把高度差降到了最低。’",
            "scoreDelta": {
              "cha": 2,
              "dex": 1
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_barbarian": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "防弹土拨鼠",
              "保龄球滚行",
              "盾牌翻滚"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "能将防弹小动物与自身翻滚物理惯性强行融合滑行而过的无节操狂"
          }
        ]
      }
    ],
    "guild_cleric": [
      {
        "id": "half_orc_cleric_healing",
        "targetId": "guild_cleric",
        "title": "萨满的物理治疗",
        "scene": "你的队友在战斗中被重创，大腿动脉破裂，血流如注，整个人陷入了重度失血性休克。",
        "prompt": "你的治疗法术是：",
        "options": [
          {
            "id": "A",
            "text": "狂吼一声‘给老子醒过来！’，一记重重的物理巴掌抽在队友脸上，强行用粗暴的『圣疗术』止住流血。‘先祖说了，只要你丫还能感觉到疼，就证明你还没死！’",
            "npcReply": "队友一个激灵从地上蹦了起来，大腿伤口在血色神圣微光中迅速收口。‘充满野性的肌肉激活手法，你用痛苦强行拉回了戏里的灵魂！’",
            "scoreDelta": {
              "str": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "物理唤醒巴掌",
              "痛觉激活神术",
              "肌肉圣疗"
            ],
            "outcomeTone": "合格",
            "branchHint": "通过强烈肉体抽击和意志震颤逼迫伤患求生欲望觉醒的暴躁萨满"
          },
          {
            "id": "B",
            "text": "引导温和的自然之水冲洗伤口，用草药碎末敷在患处，并低声念诵先祖的安魂咒语，缓慢但稳妥地恢复其生命力。",
            "npcReply": "队友的神色逐渐安详，呼吸平稳下来。‘优雅且循规蹈矩的自然疗愈，你对草药学的理解超出了大部分半兽人的粗砺本能。’",
            "scoreDelta": {
              "wis": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 2,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "水流清洗",
              "草药包扎",
              "安魂低吟"
            ],
            "outcomeTone": "偏离",
            "branchHint": "精通生理急救和无菌水化清创、以平和的神术温养的知识型医生"
          },
          {
            "id": "C",
            "text": "慌乱中从包里掏出一瓶极其诡异的黑魔法死灵药剂灌下去，大喊‘死人是不会感觉到疼的！’，导致队友直接开始尸变。",
            "npcReply": "队友的眼睛变成了猩红色，喉咙里发出野兽般的低吼，伸手掐向你的脖子。‘用死灵药水代替治疗药剂，你成功地把队友送进了亡灵图鉴！’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_cleric": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "死灵灌药",
              "队友尸变",
              "违规施法"
            ],
            "outcomeTone": "危险",
            "branchHint": "在慌乱中实施死灵禁忌魔法导致队友异化为丧尸的恐怖神棍"
          },
          {
            "id": "D",
            "text": "对着队友的伤口疯狂吹气，大喊‘痛痛飞飞！’，并跳起了一段极其魔性的‘健康歌’广场舞，指望用尴尬治愈伤痛。",
            "npcReply": "队友因为忍受不了你这充满魔性扭动的广场舞，拼尽最后的力气一拳把你砸进了旁边的泥里。‘这不可名状的情绪疗法，显然把病患活活气精神了。’",
            "scoreDelta": {
              "cha": 3,
              "con": 1
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "吹气解痛",
              "尴尬广场舞",
              "物理气醒"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "坚信“精神降维尴尬”能转移痛觉感官并以舞蹈逗乐队友的抽象狂"
          }
        ]
      },
      {
        "id": "half_orc_cleric_sermon",
        "targetId": "guild_cleric",
        "title": "灵魂的传道",
        "scene": "你试图在一个极其顽固、排斥外族信仰的半兽人小部落里传播先祖之灵的荣光。村民们正对你指指点点。",
        "prompt": "你的传教方式是：",
        "options": [
          {
            "id": "A",
            "text": "直接发起挑战，将部落里最强壮的三个勇士当众摔个鼻青脸肿，然后踩着他们的脊梁大吼：‘这就是先祖赐予俺的肌肉！信先祖，得大块头！’",
            "npcReply": "倒在泥里的勇士们眼冒金星地大喊‘先祖保佑！’，大批村民当场跪倒在地。‘在半兽人氏族里，物理说服就是最神圣、最有穿透力的神启！’",
            "scoreDelta": {
              "str": 3,
              "wis": 1
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "摔跤传教",
              "肌肉物理说服",
              "踩脊梁狂呼"
            ],
            "outcomeTone": "合格",
            "branchHint": "坚信“绝对力量即神圣代笔”、通过摔跤打碎异教的纯肌肉萨满"
          },
          {
            "id": "B",
            "text": "在部落中央点燃一盆巨大的篝火，通过往火里投掷幻粉展现先祖当年开天辟地的宏大历史幻象，用逻辑与历史感服众人。",
            "npcReply": "村民们沉浸在壮丽的幻象中，留下了感动的泪水。‘利用光学幻影与宏大叙事解构信仰，极具智慧与文化色彩的布道。’",
            "scoreDelta": {
              "wis": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 2,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "幻粉投影",
              "篝火夜话",
              "史诗叙事"
            ],
            "outcomeTone": "偏离",
            "branchHint": "通过药理投影投射先祖开拓史、实施软性历史统摄的学者"
          },
          {
            "id": "C",
            "text": "宣称先祖今晚要降下神罚毁灭部落，结果半夜部落不仅没灭，反倒因为你偷偷纵火而被村民当场抓住扭送法办。",
            "npcReply": "你被倒吊在部落大门上，脸上盖满了烂西红柿。‘用人为制造灾难的手段来伪造神迹，你的行为已经构成了纵火罪与讹诈罪！’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_cleric": -2
            },
            "alignmentDelta": {
              "risk": 2
            },
            "triggerTags": [
              "假神惩纵火",
              "被捕倒挂",
              "敲诈失败"
            ],
            "outcomeTone": "危险",
            "branchHint": "为了强推自身地位不惜伪造神谴、在他人粮仓偷偷点火的法外骗徒"
          },
          {
            "id": "D",
            "text": "挨家挨户推销‘先祖牌纯天然无公害猪皮面膜’，声称每天敷面膜能得到先祖的托梦保佑，硬生生把信仰做成了直销。",
            "npcReply": "大批兽人主妇疯狂抢购，嘴里念叨着‘老祖宗面膜’。‘你成功地将神圣的祭祀学，重构成了一场庞氏美容微商风暴。’",
            "scoreDelta": {
              "cha": 3,
              "int": 1
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "猪皮面膜直销",
              "微商附魔",
              "托梦面膜"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "将信仰做成护肤品传销、靠着话术和微商逻辑席卷部落的金融萨满"
          }
        ]
      },
      {
        "id": "half_orc_cleric_undead_turn",
        "targetId": "guild_cleric",
        "title": "驱散亡灵",
        "scene": "阴暗的墓穴里，数十只低阶骷髅兵正从泥土中爬出，它们散发着腐烂的死气，将你们的小队团团围住。",
        "prompt": "作为萨满，你的驱散神术是：",
        "options": [
          {
            "id": "A",
            "text": "高举你的萨满图腾，将其狠狠砸入地面。伴随着震耳欲聋的战吼，图腾释放出耀眼的纯阳烈焰，直接将周围十米的骨头架子融为齑粉。",
            "npcReply": "烈焰轰鸣，骨骼在光芒中净化成灰烬。‘极致的图腾共振，你的信念和热血直接引爆了对死灵的绝对克制！’",
            "scoreDelta": {
              "wis": 2,
              "str": 2
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "图腾砸地",
              "纯阳烈焰",
              "群体净化"
            ],
            "outcomeTone": "合格",
            "branchHint": "以图腾基座为振荡源、释放高爆神圣波导物理荡平死灵的猛士"
          },
          {
            "id": "B",
            "text": "施展『死灵退散』法阵，利用符文的排斥效应在小队周围建立一个神圣结界，将骷髅阻挡在外并逐一进行定点清除。",
            "npcReply": "骷髅撞在淡金色的法阵边界上，被灼烧出黑烟。‘极度理性的防御性防线。你以结界中和了数量上的围攻劣势。’",
            "scoreDelta": {
              "wis": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 2,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "神圣屏障",
              "符文排斥",
              "定点消灭"
            ],
            "outcomeTone": "偏离",
            "branchHint": "以符文阵线建立动态结界、采用阵地战消耗骷髅大军的保守派"
          },
          {
            "id": "C",
            "text": "吓得当场皈依死灵法师，跪在地上对着带头的骷髅队长大喊‘大哥收我当小弟吧！’，并主动奉献了自己队友的脖子。",
            "npcReply": "看守的白骨巨剑当场拍在你的屁股上。‘在神圣墓穴里向腐朽的骷髅投降并出卖队友，你简直丢尽了活人的脸面！’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_cleric": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "火线倒戈",
              "骨头大哥",
              "队友出卖"
            ],
            "outcomeTone": "危险",
            "branchHint": "被低阶死灵吓破胆当场叛变甚至愿意给僵尸洗脚的极品反骨"
          },
          {
            "id": "D",
            "text": "掏出两根大排骨在骷髅面前晃悠，像逗狗一样大喊‘接着！’，企图用这种方式把骷髅们的注意力全部转移走。",
            "npcReply": "几只下巴脱落的骷髅歪着头盯着那两根大排骨，竟然真的开始跟着排骨的移动方向转动脑袋。‘对骷髅物种实施骨质吸引干扰……极其抽象的驯兽技巧。’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "排骨逗引",
              "亡灵转头",
              "骨质干扰"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "将排骨作为本能逗引诱饵对没有脑子的骷髅实施定向戏耍的奇葩"
          }
        ]
      },
      {
        "id": "half_orc_cleric_communion",
        "targetId": "guild_cleric",
        "title": "先祖的托梦",
        "scene": "为了获得走出这片迷雾森林的指引，你必须在神龛前引导仪式，与千年前的先祖英灵进行跨位面的心智沟通。",
        "prompt": "在仪式中，当先祖之灵以威严的幻象显现时，你：",
        "options": [
          {
            "id": "A",
            "text": "恭敬地献上你亲手猎杀的巨兽头骨，挺直脊梁，大声汇报氏族的近况，用坦荡的战绩与纯粹的信仰换取先祖的指引。",
            "npcReply": "先祖之灵发出满意的笑声，微风吹散了四周的浓雾。‘极其标准的勇士之道。以血还血，以强证强，你通过了荒野的试炼！’",
            "scoreDelta": {
              "wis": 3,
              "str": 1
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 3
            },
            "alignmentDelta": {
              "order": 2
            },
            "triggerTags": [
              "头骨献祭",
              "功绩汇报",
              "雾气消散"
            ],
            "outcomeTone": "合格",
            "branchHint": "遵循氏族古老献祭法度、以堂皇的战果换取神圣方向指示的英灵萨满"
          },
          {
            "id": "B",
            "text": "详细地用沙盘向先祖展示当前大陆的势力分布，通过严谨的问题陈述，请求先祖基于历史经验给出战术建议。",
            "npcReply": "先祖在沙盘上画出了几条行军路线。‘用严密的沙盘模型代替盲目的玄学乞求，你把神启仪式做成了一场极其科学的战术研讨会。’",
            "scoreDelta": {
              "wis": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 2,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "沙盘汇报",
              "战术推演",
              "理智沟通"
            ],
            "outcomeTone": "偏离",
            "branchHint": "将萨满招魂仪式重构为历史推演与多方数据对齐战术研讨的信息处理者"
          },
          {
            "id": "C",
            "text": "觉得神龛前的贡品看起来很好吃，顺手偷吃了一大半，并对先祖的幻象做鬼脸，结果被愤怒的先祖神雷劈得浑身焦黑。",
            "npcReply": "你在地上直冒烟，头发卷曲。‘偷吃先祖的供果还对英灵扮鬼脸，你的亵渎行为直接激怒了整个荒野神界！’",
            "scoreDelta": {
              "con": -2,
              "wis": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_cleric": -2
            },
            "alignmentDelta": {
              "risk": 2
            },
            "triggerTags": [
              "贡品偷吃",
              "神雷劈顶",
              "亵渎惩罚"
            ],
            "outcomeTone": "危险",
            "branchHint": "因口腹之欲亵渎神龛、甚至对神仙做鬼脸挑衅的亵渎狂"
          },
          {
            "id": "D",
            "text": "拿出手机（或者魔法留音石）对准先祖的幻象大喊‘老祖宗给家人点个赞！’，强行和先祖的灵魂合影发朋友圈。",
            "npcReply": "先祖英灵在强光的闪烁中呆立了三秒，随后满头雾水地化作了一缕轻烟。‘你用这荒样跨位面的语境，强行解构了严肃的通灵术。’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "合影合照",
              "老祖宗点赞",
              "神学消解"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "利用魔法影像强行拉着千年亡魂搞网红式自拍和老铁双击的戏谑鬼"
          }
        ]
      },
      {
        "id": "half_orc_cleric_bless",
        "targetId": "guild_cleric",
        "title": "战前的狂暴祝福",
        "scene": "决战前夕，小队的士气低落。作为萨满，你需要为队友们施加『先祖的嗜血祝福』以提升他们的战斗力。",
        "prompt": "你的施法动作是：",
        "options": [
          {
            "id": "A",
            "text": "咬破自己的手指，在每一个队友的额头上画上血红的符文，并用响彻营地的咆哮激发他们体内的半兽人狂怒。",
            "npcReply": "队友们大声怒吼，瞳孔蒙上了赤色，萎靡的气氛一扫而空。‘极其霸道的鲜血媒介，你唤醒了他们骨子里的先祖战魂！’",
            "scoreDelta": {
              "wis": 2,
              "con": 2
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "鲜血符文",
              "嗜血咆哮",
              "战魂唤醒"
            ],
            "outcomeTone": "合格",
            "branchHint": "以自身鲜血做引导媒介、用声波共振物理引燃全队肾上腺素的暴力祭司"
          },
          {
            "id": "B",
            "text": "吟唱低沉的战歌，将先祖的坚韧属性通过图腾光环源源不断地注入队友体内，提升他们的护甲与持续作战耐力。",
            "npcReply": "蓝色的防御光环在队友身侧环绕，让他们感觉身体变轻了许多。‘稳健的防御灵气，你提升了整个战线在鏖战中的韧性。’",
            "scoreDelta": {
              "wis": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 2,
              "guild_fighter": 1
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "坚韧战歌",
              "防卫光环",
              "阵地加持"
            ],
            "outcomeTone": "偏离",
            "branchHint": "通过低音谱频吟诵与图腾辐射稳定全队能量流、强化护壳的防守祭司"
          },
          {
            "id": "C",
            "text": "偷偷往队友的行军水壶里加入了过量的狂暴药剂，大喊‘喝了它就能刀枪不入！’，导致队友们集体胃穿孔紧急送医。",
            "npcReply": "大批重装步兵在地上捂着肚子痛苦打滚，防线不攻自破。‘往水源投毒强行促使爆燃，你的药理知识简直和你的脑容量一样匮乏！’",
            "scoreDelta": {
              "con": -2,
              "wis": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_cleric": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "药水投毒",
              "胃穿孔惨剧",
              "防线崩溃"
            ],
            "outcomeTone": "危险",
            "branchHint": "擅长用违禁兴奋剂污染小队口粮导致大规模集体中毒的化学杀手"
          },
          {
            "id": "D",
            "text": "给队友每人发了一个大喇叭，让他们跟着你一起大喊‘俺们是最棒的！俺们要拿年终奖！’，用职场洗脑话术提升士气。",
            "npcReply": "队员们麻木地跟着你喊口号，敌方阵营的侦察兵在远处听得满脸痴呆。‘你成功地将史诗战役重构为了一场尴尬的中介年会动员大会。’",
            "scoreDelta": {
              "cha": 3,
              "wis": -2
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "大喇叭年会",
              "职场口号",
              "精神重塑"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "通过尴尬的商业团建喊口号方式把拼死沙场的战团改造成销售大队的抽象人"
          }
        ]
      },
      {
        "id": "half_orc_cleric_sacrifice",
        "targetId": "guild_cleric",
        "title": "祭祀的祭品",
        "scene": "氏族的丰收祭典上，需要你主持献祭仪式。这关系到下一年氏族是否能获得先祖的庇护和充足的雨水。",
        "prompt": "你选择的献祭仪式是：",
        "options": [
          {
            "id": "A",
            "text": "亲自带队深入最危险的火山，斩杀一头作恶多端的熔岩巨蜥，将温热的巨兽心脏摆在祭坛中央，以示武力与诚意。",
            "npcReply": "祭坛上的火焰轰然大作，先祖的叹息中带着赞许。‘极其标准的勇士之道。以血还血，以强证强，你通过了荒野的试炼！’",
            "scoreDelta": {
              "str": 2,
              "wis": 2
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 3
            },
            "alignmentDelta": {
              "order": 2
            },
            "triggerTags": [
              "巨兽斩杀",
              "温热心脏",
              "古礼献祭"
            ],
            "outcomeTone": "合格",
            "branchHint": "通过狩猎高阶熔岩魔兽、获取心脏温热能量进行传统火祭的豪杰"
          },
          {
            "id": "B",
            "text": "组织村民将一整年的收成进行精准的账目统计，将其中固定比例的谷物与猎物整齐摆放，严格按照古礼三跪九叩。",
            "npcReply": "大批统计报表在火盆中燃尽。‘用会计学管理信仰，你的每一分账目都让先祖看到了部落长治久安的秩序规划。’",
            "scoreDelta": {
              "wis": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 2
            },
            "alignmentDelta": {
              "order": 2
            },
            "triggerTags": [
              "账目统计",
              "比例献祭",
              "规整祭品"
            ],
            "outcomeTone": "偏离",
            "branchHint": "以精确比例农业报税制梳理祭品供给、严格遵守宗教礼法常轨的司铎"
          },
          {
            "id": "C",
            "text": "觉得打猎太累，把隔壁哥布林部落的垃圾桶给搬了过来当作祭品，并对先祖说‘俺觉得心意到了就行，垃圾分类从俺做起’。",
            "npcReply": "一阵狂风把垃圾桶的烂菜叶卷到了你的秃头上。‘用肮脏的垃圾糊弄神祇，你正在公然挑衅整个先祖英灵殿的雷霆之怒！’",
            "scoreDelta": {
              "wis": -2,
              "cha": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_cleric": -2
            },
            "alignmentDelta": {
              "self": 2
            },
            "triggerTags": [
              "垃圾桶献祭",
              "菜叶洗脸",
              "神之震怒"
            ],
            "outcomeTone": "危险",
            "branchHint": "懒得打猎直接搬泔水垃圾桶当做祭礼糊弄列祖列宗的懒汉"
          },
          {
            "id": "D",
            "text": "在祭坛上摆了一台自制的“抽奖大转盘”，高喊着“老祖宗抽到什么俺就献祭什么，祝老祖宗一发入魂，欧气满满！”",
            "npcReply": "转盘停在了‘谢谢参与’的一格，村民们集体陷入了沉思。‘把严肃的求雨祭奠重构成盲盒博彩，你简直是信仰领域的欺诈天王。’",
            "scoreDelta": {
              "cha": 3,
              "dex": 1
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "转盘盲盒",
              "一发入魂",
              "博彩神学"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "将求雨大典改成抽卡博彩、让鬼神在转盘前面碰运气的赌鬼萨满"
          }
        ]
      },
      {
        "id": "half_orc_cleric_storm",
        "targetId": "guild_cleric",
        "title": "召唤风暴",
        "scene": "干旱的麦田即将枯萎，氏族的长老们跪地求雨。你需要引导雷霆风暴来降下甘霖。",
        "prompt": "你的降雨祈祷是：",
        "options": [
          {
            "id": "A",
            "text": "双手紧握战锤疯狂敲击盾牌，模拟雷霆的轰鸣，双脚跺地跳起战舞，用最原始的震颤强行勾连天上的雷云降下暴雨。",
            "npcReply": "大地轰鸣，天空中电闪雷鸣，倾盆大雨瞬间降临。‘用铁锤和肌肉跳起沟通大自然的战舞！真正的风暴之子！’",
            "scoreDelta": {
              "wis": 2,
              "str": 2
            },
            "mbtiDelta": {
              "S": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 3
            },
            "alignmentDelta": {
              "action": 2
            },
            "triggerTags": [
              "重锤击盾",
              "震地求雨舞",
              "雷云聚拢"
            ],
            "outcomeTone": "合格",
            "branchHint": "通过高频物理撞击制造音波共鸣、强行召唤雷电对冲云层的硬核祭司"
          },
          {
            "id": "B",
            "text": "测量空气的湿度与气压，吟唱微风法术聚集周边的水汽，极其技巧性地在干旱区域上空形成小范围的降雨云层。",
            "npcReply": "细密的小雨从天而降，温柔地滋润着麦苗。‘极其精妙的微观气候干预。你用知性与技巧战胜了干旱。’",
            "scoreDelta": {
              "wis": 2,
              "int": 1
            },
            "mbtiDelta": {
              "T": 1,
              "J": 1
            },
            "affinityDelta": {
              "guild_cleric": 2
            },
            "alignmentDelta": {
              "control": 1
            },
            "triggerTags": [
              "湿度监测",
              "水汽汇聚",
              "微观云化"
            ],
            "outcomeTone": "偏离",
            "branchHint": "懂得利用热气流抬升与水汽凝结的物理大气分析气象法师"
          },
          {
            "id": "C",
            "text": "往天上发射了三枚自制的雷管，试图强行‘人工降雨’，结果把大片的麦田直接炸成了焦炭。",
            "npcReply": "浓烟滚滚，焦黑的麦田散发着焦糖的气味。‘把自制炸药当做祈雨法术，你成功地提前收割了所有庄稼！’",
            "scoreDelta": {
              "con": -2,
              "wis": -2
            },
            "mbtiDelta": {
              "F": 1
            },
            "affinityDelta": {
              "guild_cleric": -2
            },
            "alignmentDelta": {
              "risk": 2
            },
            "triggerTags": [
              "雷管升天",
              "农田炸平",
              "焦炭收割"
            ],
            "outcomeTone": "危险",
            "branchHint": "粗暴利用自制炸弹搞人工降雨却把全村一整年粮食炸飞的祸害"
          },
          {
            "id": "D",
            "text": "跪在地上哭喊‘老天爷啊，俺的猪丢了，一定是飞到天上去当神仙了！’，企图用这种荒唐的借口把天神感动到哭。",
            "npcReply": "天空中滑过了一道极其尴尬的闷雷，随后落下了几滴仿佛是鳄鱼眼泪一样的稀疏雨点。‘你这极其荒谬的谎言，连雷神都要为你流下无语的泪水。’",
            "scoreDelta": {
              "cha": 3,
              "wis": -2
            },
            "mbtiDelta": {
              "N": 2,
              "P": 1
            },
            "affinityDelta": {
              "guild_rogue": 1
            },
            "alignmentDelta": {
              "chaotic": 2
            },
            "triggerTags": [
              "飞天神猪说",
              "嚎啕求同情",
              "尴尬神雷"
            ],
            "outcomeTone": "荒诞",
            "branchHint": "用极度鬼扯和悲情编造引逗天界、强行感动神仙哭泣降雨的说谎大王"
          }
        ]
      }
    ]
  },
  "endingTemplates": [
    {
      "endingId": "orc_barbarian_end",
      "endingType": "accepted",
      "title": "碎骨的狂怒",
      "verdictLine": "血怒营非常满意，他们正缺一个不需要修补的破城槌。",
      "explanation": "你在考核中展现出了惊人的破坏欲和与其匹配的承受力。考官不在乎你懂不懂复杂的战术，只要你能在战场上把敌人的大门连同守卫一起砸碎，还能在战后自己把脱臼的手臂接回去，你就是他们最完美的破阵先锋。",
      "tableFunction": "在队伍最前线撕裂敌方防线、以肉身制造物理破障的狂暴输出核心。",
      "playableFlaw": "一打起来就极其容易上头，分不清战术撤退和送死的区别。",
      "nextHook": "军士长交给你一柄重锤，让你带队去清剿一个布满路障的哥布林巢穴。",
      "recommendedClass": [
        "guild_barbarian"
      ],
      "tags": [
        "物理破坏",
        "狂暴战意",
        "破阵先锋"
      ]
    },
    {
      "endingId": "orc_rogue_end",
      "endingType": "accepted",
      "title": "绝对的潜行",
      "verdictLine": "刺客公会的导师默默擦去冷汗，表示你的‘物理消音法’确实无可挑剔。",
      "explanation": "你成功向公会展示了半兽人特有的潜伏艺术：只要把视野范围内的敌军全部物理超度，就没人知道你潜入过。这种极其高调但结果无懈可击的暗杀风格，让公会决定破格录取你为‘强袭潜行者’。",
      "tableFunction": "擅长在敌后制造混乱、以暴力手段强行瘫痪警报设施的强袭刺客。",
      "playableFlaw": "由于身形庞大且甲片哐哐作响，传统意义上的无声潜伏对你来说完全是天方夜谭。",
      "nextHook": "分会长让你潜入一座庄园，‘如果被发现了，就把里面的人全干掉，这样潜行就依然成功’。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "目击者清零",
        "强袭特工",
        "物理暗杀"
      ]
    },
    {
      "endingId": "orc_accepted_fighter_commander",
      "endingType": "accepted",
      "title": "碎骨督军",
      "verdictLine": "军团需要有脑子的铁血军官，而你正好用锤子和智慧证明了这一点。",
      "explanation": "你不仅拥有半兽人标准的怪力，更展现了令人惊讶的战术素养。你懂得分析承重结构，用最小的力量撬动最大的防线，还懂得利用阵型压制对手。军团长认为你是个不可多得的战术指挥人才，任命你为碎骨小队的前线百夫长。",
      "tableFunction": "兼具高物理输出与阵线协调能力的重装战术指挥官。",
      "playableFlaw": "由于习惯了用粗暴的物理手段解决障碍，写战后报告时经常因为用词过于野蛮而遭到军法官退信。",
      "nextHook": "你接到了第一份指挥任务：带领一个由人类新兵组成的小队去防守被遗弃的关隘。",
      "recommendedClass": [
        "guild_fighter"
      ],
      "tags": [
        "阵地指挥",
        "重装战术",
        "百夫长"
      ]
    },
    {
      "endingId": "orc_accepted_cleric_ancestor",
      "endingType": "accepted",
      "title": "先祖之拳",
      "verdictLine": "先祖之灵表示，你那记充满爱意的物理大巴掌比任何温和的神术都更管用。",
      "explanation": "你将半兽人的气血伟力与先祖信仰完美融合。你用一记充满热血的物理耳光把濒死休克的战友从鬼门关硬生生拽了回来。萨满神殿认为你展现了最纯粹的肌肉神术，任命你为神殿常驻祭司。",
      "tableFunction": "能够在前线提供极强治疗加持、并利用图腾进行群体净化的暴力辅助。",
      "playableFlaw": "你的治疗法术总是伴随着极高的物理痛觉，导致队友宁可拖着伤口也不想让你施法。",
      "nextHook": "先祖之灵在你的梦里抱怨隔壁部落的祭坛太脏，命令你去用物理方式‘打扫’一下。",
      "recommendedClass": [
        "guild_cleric"
      ],
      "tags": [
        "肌肉神术",
        "图腾加持",
        "物理治疗"
      ]
    },
    {
      "endingId": "orc_accepted_fighter_shield",
      "endingType": "probation",
      "title": "渊岩铁卫",
      "verdictLine": "只要你还在方阵里站着，整条防线就如同焊死在了山岩之中。",
      "explanation": "你放弃了狂野的冲锋，选择将自己锻造成团队最坚固的盾牌。考核中你用稳健的步幅和无懈可击的格挡，在城墙缺口处生生阻挡了三波重装步兵的冲击。黑旗军团将你列为防线基石。",
      "tableFunction": "极度稳定的防线主坦克，能完美阻挡骑兵冲锋与大范围物理打击。",
      "playableFlaw": "为了追求绝对防御而装备了过重的塔盾，这导致你在复杂泥泞的地形中极易发生‘卡在泥里’的窘境。",
      "nextHook": "你被派去守护要塞最薄弱的地底铁门，据说今晚会有成群的座狼突袭。",
      "recommendedClass": [
        "guild_fighter"
      ],
      "tags": [
        "盾防基石",
        "阵地死守",
        "钢铁堡垒"
      ]
    },
    {
      "endingId": "orc_accepted_cleric_microfinance",
      "endingType": "probation",
      "title": "直销萨满",
      "verdictLine": "先祖牌猪皮面膜在氏族里卖断了货，大祭司决定提拔你为神殿商业总监。",
      "explanation": "你打破了萨满传统布道的枯燥模式，天才地将先祖祝福重构成了一种微商庞氏直销网络。你用一盒盒‘先祖加持面膜’和‘托梦润肤膏’席卷了整个下城区，成功让氏族的资金流翻了三倍。",
      "tableFunction": "善于利用交易和话术控制敌人情绪、同时能为小队提供丰足物资支援的辅助。",
      "playableFlaw": "无论在多么严肃的生死关头，你都会下意识地向敌人推销你的美容产品或理财项目。",
      "nextHook": "大祭司要求你去开发隔壁精灵领地的‘高端护肤品市场’，哪怕要用战锤敲开他们的大门。",
      "recommendedClass": [
        "guild_cleric"
      ],
      "tags": [
        "商业奇才",
        "直销布道",
        "不务正业"
      ]
    },
    {
      "endingId": "orc_accepted_barbarian_berserker",
      "endingType": "probation",
      "title": "无痛灾兽",
      "verdictLine": "你顶着全身的窟窿还在狂吼冲锋，连魔沼蛙的毒素都只能当你的兴奋剂。",
      "explanation": "你拥有超越凡理的变态肉体。在考核中你生吞剧毒魔沼蛙，并借着毒发幻觉在铁笼中勒断了魔爪兽的颈椎。你对痛苦的极度迟钝和恐怖的肉身自愈力，让你成为了血怒营最棘手的‘不死灾兽’。",
      "tableFunction": "依靠掉血和疼痛反向提升输出、拥有不死般生存特性的狂战士。",
      "playableFlaw": "由于痛觉神经严重退化，你经常无法准确察觉自己什么时候已经处于濒死边缘，容易意外倒地。",
      "nextHook": "军士长为了测试你的极限，把你丢进了一个布满辐射与剧毒雾气的地底天坑。",
      "recommendedClass": [
        "guild_barbarian"
      ],
      "tags": [
        "肉身硬抗",
        "痛觉免疫",
        "疯狂自愈"
      ]
    },
    {
      "endingId": "orc_accepted_rogue_acrobat",
      "endingType": "probation",
      "title": "人体折叠家",
      "verdictLine": "谁都没想到一个一米九的半兽人能像拉面一样把自己折叠塞进箱子里。",
      "explanation": "你证明了肌肉不仅有力量，更有令人惊叹的韧性。在红外线走廊中，你用近乎体操动作的极度折腰和丝滑翻滚，无伤趟过了红外网。刺客公会对你这具能够随时‘折叠’的怪胎躯体产生了浓厚的兴趣。",
      "tableFunction": "拥有惊人机动性、能轻易绕过敌方防御墙和机关陷阱的机动刺客。",
      "playableFlaw": "由于长期习惯将骨骼折叠至极限，你走路时偶尔会发出牙酸的关节脆响，极易暴露位置。",
      "nextHook": "你需要潜入帝国银行最狭窄的管道金库，里面布满了只能容纳猫咪钻过的气道。",
      "recommendedClass": [
        "guild_rogue"
      ],
      "tags": [
        "极限折叠",
        "机关闪避",
        "骨骼异化"
      ]
    },
    {
      "endingId": "orc_failure_end",
      "endingType": "blacklisted",
      "title": "断牙的耻辱",
      "verdictLine": "你胆怯的表现不仅让同胞蒙羞，连路过的地精都在嘲笑你的怯懦。",
      "explanation": "你面对痛苦时退缩、甚至为了自保而出卖同僚的行为，彻底激怒了招募处。根据氏族的古老传统，你被强行拔去了代表荣耀的獠牙，剥夺了半兽人的身份，沦为在最底层做苦力的流浪汉。",
      "tableFunction": "没有任何战斗与施法能力的白丁，在战斗中只能充当吸引火力的炮灰。",
      "playableFlaw": "极度缺乏自信，在面对任何散发敌意的种族时都会下意识地发抖。",
      "nextHook": "你被驱逐到了城外的乱石滩，除了帮地精挑粪，你别无选择。",
      "recommendedClass": [
        "guild_barbarian"
      ],
      "tags": [
        "放逐者",
        "拔牙之耻",
        "信用破产"
      ]
    },
    {
      "endingId": "orc_rejected_lawyer",
      "endingType": "blacklisted",
      "title": "法庭讼棍的末路",
      "verdictLine": "当你掏出《劳动法》试图起诉大萨满的那一刻，你就注定只能去扫大街了。",
      "explanation": "你在试炼中拒绝吃下有毒的魔沼蛙，甚至搬出《半兽人劳动法》控诉考场存在职场霸凌。你的油滑与对传统的蔑视彻底惹怒了神殿。大萨满对你开出了《跨氏族拉黑令》，你被终身禁止加入任何正规公会。",
      "tableFunction": "只会在法庭上碰瓷、没有任何实战贡献的冗员。",
      "playableFlaw": "一旦进入战斗，第一反应不是拔刀，而是寻找地形上的安全隐患并开具免责申明发票。",
      "nextHook": "没有公会愿意雇佣你，你只能在酒馆门口当清洁工，顺便帮喝醉的客人打官司维权。",
      "recommendedClass": [
        "guild_barbarian"
      ],
      "tags": [
        "起诉狂魔",
        "职场防线",
        "信用破产"
      ]
    },
    {
      "endingId": "orc_rejected_cowardly_meatshield",
      "endingType": "blacklisted",
      "title": "战友垫脚石",
      "verdictLine": "公会绝对无法容忍一个在潜行中把队友踢向探照灯以求自保的家伙。",
      "explanation": "你在潜行试炼中因为害怕被发现，极其卑劣地将战友推了出去当替罪羊，自己则趴在草丛里装死。你的自私和背叛让所有人唾弃。你被公会当场除名，并在黑市的追杀单上挂了名。",
      "tableFunction": "在混乱战局中擅长牺牲队友位置来保全自己的极度自私角色。",
      "playableFlaw": "队友在进行任何战术配合时都会对你保持极高的警戒度，甚至下意识地与你保持五米距离。",
      "nextHook": "为了躲避前队友的物理清算，你不得不逃入肮脏的地底废墟，苟延残喘。",
      "recommendedClass": [
        "guild_barbarian"
      ],
      "tags": [
        "背叛之刺",
        "自私自利",
        "黑市通缉"
      ]
    },
    {
      "endingId": "orc_rejected_suicide_bomber",
      "endingType": "blacklisted",
      "title": "自爆木桩狂徒",
      "verdictLine": "教官觉得你不是来打仗的，你是来用自爆把军械库和大家一起送上天的。",
      "explanation": "你在试炼中表现出了极其病态的玉石俱焚倾向。你拒绝挑选正常的剑盾，死活抱着易燃的火油木桩试图去和巨兽同归于尽。考官认为你精神严重失常，将你列为了‘军火库高危禁入对象’并强行驱逐。",
      "tableFunction": "拥有自爆和环境破坏特长、但极易导致团队灭亡的自残型输出。",
      "playableFlaw": "身上总是散发着刺鼻的火药与硝石味，极易在行军中被法师的火球术意外引爆。",
      "nextHook": "地下军火承包商找到了你，邀请你以‘活体攻城弹药’的身份参与一次非法爆破。",
      "recommendedClass": [
        "guild_barbarian"
      ],
      "tags": [
        "高危易爆",
        "求死欲望",
        "兵营驱逐"
      ]
    },
    {
      "endingId": "orc_special_tactician",
      "endingType": "absurdAccepted",
      "title": "铁血军师",
      "verdictLine": "当半兽人开始用杠杆原理撬开城门，连矮人的工程师都得写请假条。",
      "explanation": "你向世界证明了，极致的力量与极致的理工思维结合会产生何等恐怖的威力。你在考核中无视密码锁，用爆破镐直接击碎墙体的力学支点，并用攻城车残骸制作杠杆撬断了铁木门轴。军团将你奉为铺路破障与结构拆除的‘铁血军师’。",
      "tableFunction": "能利用物理支点制造大范围环境破坏、提供地形改造与重装控制的重炮军师。",
      "playableFlaw": "对几何对称与力学平衡有着病态的执念，如果战场的阵型不够工整，会狂躁地试图纠正队友。",
      "recommendedClass": [
        "guild_fighter"
      ],
      "tags": [
        "力学爆破",
        "结构拆解",
        "理工军师"
      ]
    },
    {
      "endingId": "orc_special_disco_shaman",
      "endingType": "absurdAccepted",
      "title": "风暴蹦迪之王",
      "verdictLine": "先祖们在你的雷雨中跳起了踢踏舞，表示你这大喇叭伴奏比战歌得劲多了。",
      "explanation": "你用极其抽象的行为消解了严肃的降雨祭奠。你用重锤拍打盾牌，敲出动感的B-Box，并强行用大喇叭和广场舞拉着先祖亡魂一起在雷光下蹦迪。这颠覆性的场面直接让干旱的雷云都为之无语，降下了百年难遇的暴雨。",
      "tableFunction": "依靠鬼畜的歌舞和重金属音波制造大范围精神混乱与强力闪电控场的战神萨满。",
      "playableFlaw": "情绪激动时双眼会射出刺眼的探照红光，在进行任何潜行任务时都会自动变成活靶子。",
      "recommendedClass": [
        "guild_cleric"
      ],
      "tags": [
        "神殿迪斯科",
        "音波轰鸣",
        "风暴蹦迪"
      ]
    },
    {
      "endingId": "orc_special_pension_fund",
      "endingType": "absurdAccepted",
      "title": "祖宗期权经理人",
      "verdictLine": "连地下的骨头架子你都能忽悠着去买你的养老信托，你才是地底最黑的吸血鬼。",
      "explanation": "你凭借极其严密的商业头脑，将萨满神术的未来收益打包发行成了‘先祖转世期权信托基金’。你忽悠了上百个地堡和墓地的亡灵购买你的免税分红项目，连大魔鬼都不得不找你咨询合理避税与折旧补偿。",
      "tableFunction": "能通过削弱自己或队友的生命值上限、来换取天价战术物资与强力增益的金融施法者。",
      "playableFlaw": "每次交易或谈话前必须强制身边所有人签署一份《虚空吸入免责协议》，极易引发社交反感。",
      "recommendedClass": [
        "guild_cleric"
      ],
      "tags": [
        "金融思维",
        "契约漏洞",
        "信托基金"
      ]
    },
    {
      "endingId": "orc_special_acrobatic_skater",
      "endingType": "absurdAccepted",
      "title": "极限飞盾板鞋王",
      "verdictLine": "当你踩着塔盾从百米高的堡垒滑翔而下，连天上的飞龙都看呆了。",
      "explanation": "你彻底颠覆了重装步兵的移动界限。你把沉重的塔盾当作滑板，借助陡峭的城堡废墟斜坡腾空起飞，精准地撞穿了敌军最核心的指挥气窗。极限运动协会决定授予你‘极限滑盾战神’称号。",
      "tableFunction": "拥有无视重力和地形减值、能通过高空坠击对敌阵造成恐怖物理冲击的机动重坦。",
      "playableFlaw": "无法老老实实走路，每当遇到斜坡或台阶都会不受控制地发起盾牌滑行判定，极易摔倒。",
      "recommendedClass": [
        "guild_fighter"
      ],
      "tags": [
        "极限滑盾",
        "重装飞行",
        "飞天战神"
      ]
    },
    {
      "endingId": "orc_rejected_desecrator",
      "endingType": "transferred",
      "title": "亵渎神龛的吃货",
      "verdictLine": "先祖的雷霆很响，而你偷吃供果时挨劈的惨叫声更响。",
      "explanation": "你在神圣的通灵仪式上表现得毫无敬畏之心。你不仅偷吃了神龛上的大半贡品，还对着先祖幻象扮鬼脸。愤怒的先祖之灵降下神雷将你劈成焦黑，并剥夺了你的神启资格。你被氏族宣布为‘不受欢迎的异端’。",
      "tableFunction": "经常由于嘴馋和好奇心破坏关键魔法机制或仪式的捣乱鬼。",
      "playableFlaw": "一看到发光或带有魔法气味的果实就无法克制进食欲望，经常触发古墓陷阱。",
      "nextHook": "你只能在神庙外跪着，用你焦黑的手帮前来朝圣的信徒擦拭台阶。",
      "recommendedClass": [
        "guild_barbarian"
      ],
      "tags": [
        "神谴之身",
        "亵渎先祖",
        "贪吃误事"
      ],
      "rejectedClass": "guild_fighter"
    },
    {
      "endingId": "orc_rejected_scammer",
      "endingType": "transferred",
      "title": "假病历碰瓷犯",
      "verdictLine": "拿着一张盖着胡萝卜章的PTSD假诊断书，你指望能白嫖三个月的带薪假？",
      "explanation": "你在面对密码锁和战斗测试时，多次掏出伪造的《应激障碍诊断书》和《免战豁免》试图装病遁走。考官在戳穿了你的胡萝卜假章后，将你痛揍了一顿并扔出了公会大门。现在你成了整个街区有名的笑柄。",
      "tableFunction": "擅长在非战斗关卡通过耍赖逃避判定、但实战完全零作用的骗子。",
      "playableFlaw": "一遇到敌人施展闪光或噪音魔法，就会不受控制地倒地抽搐，试图索要工伤赔偿。",
      "nextHook": "地下黑帮看中了你那无耻的碰瓷演技，雇佣你去豪门贵族的马车前进行假摔讹诈。",
      "recommendedClass": [
        "guild_barbarian"
      ],
      "tags": [
        "碰瓷专家",
        "假病历",
        "无赖作风"
      ],
      "rejectedClass": "guild_fighter"
    },
    {
      "endingId": "orc_special_law_enforcer",
      "endingType": "transferred",
      "title": "合规暴击卫士",
      "verdictLine": "‘你的要塞违背了消防条例！’——随后你一锤砸碎了他们的防御塔。",
      "explanation": "你是一个极度死板、甚至有些偏执的守序战术大师。你将帝国的《市政安全规范》和《要塞净空标准》背得滚瓜烂熟。每次开战前，你都会以‘违规搭建’和‘无防雷设施’为由，名正言顺地用大锤物理拆除敌人的箭塔和栅栏。",
      "tableFunction": "能对建筑、机械和重装防御造成双倍物理破甲伤害的战场拆迁专家。",
      "playableFlaw": "如果在战斗中发现战友或敌人的装备违背了安全条例（如没有防爆挂件），会下意识地停止攻击并开具警告罚单。",
      "recommendedClass": [
        "guild_fighter"
      ],
      "tags": [
        "守序拆迁",
        "合规审计",
        "战锤拆墙"
      ],
      "rejectedClass": "guild_barbarian"
    },
    {
      "endingId": "orc_special_unbreakable_wall",
      "endingType": "transferred",
      "title": "叹息之壁",
      "verdictLine": "战壕被火炮炸平，你像要塞闸门般不可动摇，用血肉之躯在风暴中重铸防线。",
      "explanation": "你展现出了神话级的抗击打极限。在漫天石弩和炼金火药的轰炸中，你将自己与阵地柱石锁在一起，死守通道，用胸膛迎着爆炸的冲击波强行保护了整个营地。战后你被授予‘不落要塞勋章’。",
      "tableFunction": "能通过主动开启防御领域来代替全队承受百分之八十非物理伤害的顶级血肉防线。",
      "playableFlaw": "由于过度依赖肉身抗击，你的肺部积压了大量的硝石火药灰，每到阴雨天都会不受控制地剧烈咳出火星。",
      "recommendedClass": [
        "guild_barbarian"
      ],
      "tags": [
        "要塞之盾",
        "肉身防爆",
        "叹息之墙"
      ],
      "rejectedClass": "guild_fighter"
    }
  ],
  "mbtiFilters": [
    {
      "groupId": "NT",
      "title": "脑力碾压型 (NT)",
      "oneLine": "舍弃无谓的狂怒，用战术、力学与逻辑来解构杀戮的半兽人智者。",
      "evaluationStyle": "理性、注重效率与逻辑、擅长卡规则Bug、视力量为精准计算的杠杆。",
      "guild_barbarianFlavor": "将狂暴化作冷静的阈值计算，在最合理的时机爆发出毁灭性的一击。",
      "guild_fighterFlavor": "精通解剖学与重力力学，用最小的体能消耗精准卸掉敌人的关节。",
      "guild_rogueFlavor": "把潜行设计成逻辑闭环，通过目击者清零或精准破墙达成完美的刺杀。",
      "guild_clericFlavor": "以功利的心态对待信仰，把祭祀和神术看作是与先祖进行高回报的资产交换。",
      "riskText": "由于凡事过度追求逻辑与计算，在面对纯粹、不讲理的压倒性肉体力量时，容易因为算漏而直接被锤成肉泥。"
    },
    {
      "groupId": "NF",
      "title": "誓约守护型 (NF)",
      "oneLine": "用炽热的情感和灵魂的誓约来填补肉身的缺陷，追寻半兽人的救赎之光。",
      "evaluationStyle": "感性、充满信念与守护欲、追求戏剧性的自我实现、极度抗拒平庸的平淡生活。",
      "guild_barbarianFlavor": "将无尽的怒火转化为守护同伴的誓言，在绝境中燃烧生命微光完成逆袭。",
      "guild_fighterFlavor": "视每一场决斗为洗礼，将同伴的生命安全抗在宽厚的肩膀上，以身筑墙。",
      "guild_rogueFlavor": "在阴影中守护正义的暗杀刺客，每次动手前必须念出大段凄美的誓约台词。",
      "guild_clericFlavor": "用热烈而纯粹的情感召唤先祖的庇护，以极其温和的安魂曲治愈迷途者的灵魂。",
      "riskText": "容易因为过度燃烧情感而积劳成疾，在战斗中容易为了所谓的“浪漫姿态”或“守护誓言”而放弃最合理的战术规避。"
    },
    {
      "groupId": "SJ",
      "title": "纪律卫士型 (SJ)",
      "oneLine": "恪守氏族法度与行军规矩，用无可动摇的固执将自身化为阵线的最强基石。",
      "evaluationStyle": "守序、注重军规细节、极具团队配合意识，极其擅长防御与阵地坚守。",
      "guild_barbarianFlavor": "即使处于狂暴边缘也绝不脱离方阵，将无尽 of 野性强行编入标准化的战术动作。",
      "guild_fighterFlavor": "严格按照操典打卡训练，用整齐划一的盾防与稳健步伐维持无可撼动的防线。",
      "guild_rogueFlavor": "熟读《劳动法》和《地下城安全法》，在任务中极力避免违规操作，擅长合规脱困。",
      "guild_clericFlavor": "严格遵循古礼进行多班次值班与祭祀，以标准化且毋庸置疑的神术光环加持队友。",
      "riskText": "思维与行动模式容易陷入僵化，在缺乏规则保护的无序混乱、或面对狡诈多变的魔法奇袭时，常常显得手足无措。"
    },
    {
      "groupId": "SP",
      "title": "即兴狂徒型 (SP)",
      "oneLine": "沉醉于刀尖起舞的快感，用野兽般的直觉和即兴发挥在战场上制造混乱。",
      "evaluationStyle": "行动力极强、追求刺激、崇尚即兴破坏、总能用极其抽象的操作达成奇效。",
      "guild_barbarianFlavor": "把狂暴和痛苦当作即兴表演，在魔音穿脑的跑调战歌中将敌人砸个粉碎。",
      "guild_fighterFlavor": "拒绝死板套路，抓起酒凳、大蒜和辣椒面就能在角斗场上打出令人窒息的连招。",
      "guild_rogueFlavor": "现场即兴之王，在最亮的地方表演拟态盆栽，用最匪夷所思的滑稽操作瞒天过海。",
      "guild_clericFlavor": "用肚皮B-box驱散毒素，在祭坛上摆大转盘和手机直播，把神圣的仪式做成直销派对。",
      "riskText": "战术由于完全缺乏计划性，充满了致命的随机性，有高达一半的概率在狂欢中把队友也一并送走。"
    }
  ]
};
  window.RACE_RECRUITMENT_DATASET = Object.freeze({
    ...(window.RACE_RECRUITMENT_DATASET || {}),
    "half_orc": Object.freeze(data),
  });
})();
