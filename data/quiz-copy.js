window.QUIZ_COPY = Object.freeze({
  modules: {
    int_abstract: {
      title: "谜题归纳",
      guide: {
        measure: "奥术眼界、类比直觉与隐藏规律的穿透力。",
        rule: "像拆地城机关一样读题：先看道具之间的关系，再决定它们在提示什么。",
        scoring: "本轮考察类比推演、模式识别与系统归纳能力。",
      },
      questions: [
        {
          questionId: "int_abstract_01",
          prompt: "DM 在桌上摆出三样道具：火把照亮黑暗，钥匙打开门锁。那地图最像在提供什么？",
          options: [
            { optionIndex: 0, text: "标出抵达目标的路线", score: 10, traits: { N: 1 } },
            { optionIndex: 1, text: "提示可能藏着回报的位置", score: 3, traits: {} },
            { optionIndex: 2, text: "遮住还没揭开的危险区域", score: 0, traits: {} },
            { optionIndex: 3, text: "记录旅途中风向与地貌的变化", score: 1, traits: {} },
          ],
        },
        {
          questionId: "int_abstract_02",
          prompt: "炼金阵里，A 会转化成 B，B 会催生 C，C 又反过来限制 A。这个机关最像哪种结构？",
          options: [
            { optionIndex: 0, text: "彼此牵制的循环反馈", score: 10, traits: { N: 1, T: 1 } },
            { optionIndex: 1, text: "一层推向下一层的因果链", score: 4, traits: {} },
            { optionIndex: 2, text: "三处偶然相连的材料反应", score: 0, traits: {} },
            { optionIndex: 3, text: "上级驱动下级的命令链条", score: 3, traits: {} },
          ],
        },
        {
          questionId: "int_abstract_03",
          prompt: "你要给一座被诅咒但还没彻底熄灭的城镇上色，哪组更像“压抑但仍有希望”？",
          options: [
            { optionIndex: 0, text: "蓝灰冷雾里留一盏温黄灯火", score: 10, traits: { S: 1, N: 1 } },
            { optionIndex: 1, text: "用大片鲜红盖住所有废墟", score: 2, traits: {} },
            { optionIndex: 2, text: "只留下纯黑轮廓和无光街道", score: 3, traits: {} },
            { optionIndex: 3, text: "把街区涂成节庆般的彩虹色", score: 0, traits: {} },
          ],
        },
        {
          questionId: "int_abstract_04",
          prompt: "一支冒险队屡次翻车，成员都不弱，但关键情报总握在少数人手里。最像哪里出问题？",
          options: [
            { optionIndex: 0, text: "情报没有进入共同决策", score: 10, traits: { T: 1, J: 1 } },
            { optionIndex: 1, text: "执行时各做各的，缺少统一口令", score: 1, traits: {} },
            { optionIndex: 2, text: "关键几次都把胜负押给了骰运", score: 3, traits: {} },
            { optionIndex: 3, text: "装备看似豪华，却没有形成配合", score: 0, traits: {} },
          ],
        },
      ],
    },
    int_reason: {
      title: "钟楼推理",
      guide: {
        measure: "线索排查、风险权衡与长线因果判断。",
        rule: "像跑团调查一样追问证据链，不要被最显眼的物证直接牵走。",
        scoring: "本轮考察抗误导能力、逻辑权重评估与复杂局势判定。",
      },
      questions: [
        {
          questionId: "int_reason_01",
          prompt: "案件：钟楼钥匙只会在午夜后出现。A 说午夜前一直在图书馆，B 手上有钥匙蜡印但没有进入钟楼的机会，C 知道暗门且午夜后离席十分钟。最优先调查谁？",
          options: [
            { optionIndex: 0, text: "先查 C：时间、暗门知识和离席窗口都对上", score: 10, traits: { T: 1 } },
            { optionIndex: 1, text: "先查 B：钥匙蜡印是最醒目的直接物证", score: 5, traits: {} },
            { optionIndex: 2, text: "先查 A：图书馆说法需要旁证确认", score: 2, traits: {} },
            { optionIndex: 3, text: "先监控三人，等新物证再排主次", score: 4, traits: {} },
          ],
        },
        {
          questionId: "int_reason_02",
          prompt: "远征选择：近路 2 天但有 40% 概率损失补给；远路 4 天但几乎稳定；队伍有伤员且补给只够 5 天。更稳的判断是？",
          options: [
            { optionIndex: 0, text: "走远路：伤员在队，失败成本高于省下两天", score: 10, traits: { J: 1, good: 1 } },
            { optionIndex: 1, text: "走近路：用时间优势赌过补给风险", score: 5, traits: { risk: 1 } },
            { optionIndex: 2, text: "就地设防：等待天气或外援出现转机", score: 2, traits: {} },
            { optionIndex: 3, text: "分兵双路：轻装探路，主力稳步推进", score: 4, traits: {} },
          ],
        },
        {
          questionId: "int_reason_03",
          prompt: "一个 NPC 总说自己讨厌权力，却不断把钥匙、钱袋和情报都收到自己手里。最合理的读法是？",
          options: [
            { optionIndex: 0, text: "他的说法和实际掌控欲正在互相打架", score: 10, traits: { N: 1 } },
            { optionIndex: 1, text: "他只是临时保管，队伍没必要过度解读", score: 0, traits: {} },
            { optionIndex: 2, text: "小队太松散，才让他被动接住资源", score: 3, traits: {} },
            { optionIndex: 3, text: "这些只是杂物归属，和局势关系不大", score: 1, traits: {} },
          ],
        },
        {
          questionId: "int_reason_04",
          prompt: "酒馆里有人给出一段关键证词。你最应该先向 DM 追问哪一项？",
          options: [
            { optionIndex: 0, text: "有没有第三方线索能交叉印证这段话", score: 10, traits: { T: 1 } },
            { optionIndex: 1, text: "讲述者说话时有没有明显紧张或回避", score: 3, traits: {} },
            { optionIndex: 2, text: "这段证词和当地流言是否能对上", score: 2, traits: {} },
            { optionIndex: 3, text: "他和我方过去的声望关系如何", score: 1, traits: {} },
          ],
        },
      ],
    },
    cha_dialogue: {
      title: "议会交涉",
      guide: {
        measure: "社交博弈、话术抗压与团队声誉的调度力。",
        rule: "选择你在桌边最习惯的表达立场。这里没有绝对对错，但每种打法都有代价。",
        scoring: "本轮考察共情缓冲、规则施压、舞台表达与退路控制。",
      },
      questions: [
        {
          questionId: "cha_dialogue_01",
          prompt: "议会大厅里，队友当众失误，贵族们开始起哄。你既要保住队伍脸面，又不能把错误糊过去。你会？",
          options: [
            { optionIndex: 0, text: "先出面接住场面，分担压力，私下再复盘失误", score: 9.2, traits: { F: 2, good: 2, empathy: 2, order: 1 } },
            { optionIndex: 1, text: "点明问题核心，把众人的注意力拉回当前任务", score: 6.8, traits: { T: 2, J: 1, lawful: 1, control: 1 } },
            { optionIndex: 2, text: "用一记自嘲玩笑破局，再顺势拿回话语权", score: 8.2, traits: { E: 2, P: 1, expression: 2, chaotic: 1 } },
            { optionIndex: 3, text: "先沉默看清局势，让当事人自己承担解释", score: 4.8, traits: { I: 2, self: 1 } },
          ],
        },
        {
          questionId: "cha_dialogue_02",
          prompt: "商会代表强硬压价，但你知道他的护送队明早就要出城。你要谈成合作，还不能撕破脸。",
          options: [
            { optionIndex: 0, text: "点出他的时间压力，同时递出体面退场的条件", score: 9.4, traits: { F: 1, T: 1, good: 1, control: 1 } },
            { optionIndex: 1, text: "抓住窗口压价，逼他在天亮前把契约签完", score: 7.0, traits: { T: 2, self: 2, control: 2 } },
            { optionIndex: 2, text: "绕开金币，改谈护送名额、补给和商会声誉", score: 8.7, traits: { N: 2, P: 1 } },
            { optionIndex: 3, text: "只按公会牌价报价，不把谈判变成心理战", score: 6.5, traits: { lawful: 2, J: 2, order: 2 } },
          ],
        },
        {
          questionId: "cha_dialogue_03",
          prompt: "队伍在雨夜里快走不动了，大家已经听腻了“坚持一下”。你要让他们继续前进。",
          options: [
            { optionIndex: 0, text: "承认大家已经累了，再指出最近落脚点和分工", score: 9.5, traits: { good: 2, J: 1, empathy: 2 } },
            { optionIndex: 1, text: "摊开代价：现在停下，明天会更糟，按计划走", score: 7.2, traits: { T: 2, lawful: 1, control: 2 } },
            { optionIndex: 2, text: "自己先走到最前面，用脚步替代演讲", score: 8.6, traits: { E: 1, action: 2, risk: 1 } },
            { optionIndex: 3, text: "让每个人说出不想失去的东西，再把它变成前进理由", score: 8.8, traits: { F: 2, N: 1, expression: 1 } },
          ],
        },
        {
          questionId: "cha_dialogue_04",
          prompt: "队伍里有个强力队友总抢战功，偏偏他确实能打。你要让队伍继续运作。",
          options: [
            { optionIndex: 0, text: "立一张公开战功表，把分配变成桌面规则", score: 9.0, traits: { lawful: 2, T: 1, order: 2 } },
            { optionIndex: 1, text: "私下谈，保住他的面子，但把边界说清楚", score: 8.5, traits: { F: 1, control: 1 } },
            { optionIndex: 2, text: "当众点破，让所有人知道这条线不能再踩", score: 6.2, traits: { chaotic: 1, self: 1, expression: 1 } },
            { optionIndex: 3, text: "避开正面冲突，另组一支更听指挥的小队", score: 4.5, traits: { I: 1, self: 1 } },
          ],
        },
      ],
    },
    cha_alignment: {
      title: "阵营抉择",
      guide: {
        measure: "扮演红线、利益取舍与阵营动机。",
        rule: "选择你在桌边最想扮演的行动方式。这里会保留灰色和利益优先的角色动机。",
        scoring: "阵营不影响能力强弱，只改变角色气质、职业味道和结局文案。",
      },
      questions: [
        {
          questionId: "cha_alignment_01",
          prompt: "你发现一条被王国明令禁止的密道。走它能救很多人，但会破坏一项重要制度。",
          options: [
            { optionIndex: 0, text: "先走合规通道动员资源，除非沙漏真的快漏完", score: 7.5, traits: { lawful: 2, good: 1, J: 1 } },
            { optionIndex: 1, text: "立刻带人走密道，救人优先，后果之后承担", score: 8.5, traits: { chaotic: 2, good: 2, action: 1 } },
            { optionIndex: 2, text: "暗中评估风险，只在我方能脱身时才指路", score: 5.8, traits: { self: 2, T: 1 } },
            { optionIndex: 3, text: "不碰禁区，交给王国的正式防线处理", score: 4.5, traits: { I: 1, order: 1 } },
          ],
        },
        {
          questionId: "cha_alignment_02",
          prompt: "你拿到一枚能短暂改写他人选择的戒指。最接近你的态度是？",
          options: [
            { optionIndex: 0, text: "封存戒指，意志不该被随手越过", score: 8.5, traits: { good: 2, F: 1 } },
            { optionIndex: 1, text: "只在重大灾难前作为底牌，并留下公会记录", score: 8.0, traits: { lawful: 1, T: 1, control: 1 } },
            { optionIndex: 2, text: "若能推进核心目标，它就是一件高风险工具", score: 6.2, traits: { self: 2, control: 2 } },
            { optionIndex: 3, text: "规则会束手束脚，能改写局面就该大胆使用", score: 5.2, traits: { chaotic: 2, risk: 2 } },
          ],
        },
        {
          questionId: "cha_alignment_03",
          prompt: "如果这是一支长期团，你更想成为哪种队伍核心？",
          options: [
            { optionIndex: 0, text: "秩序的压阵者：制定规范，让长线探索不脱轨", score: 7.8, traits: { lawful: 2, J: 2, order: 2 } },
            { optionIndex: 1, text: "死局的破除者：卡关时带头掀开新路", score: 8.0, traits: { chaotic: 2, N: 1, risk: 1 } },
            { optionIndex: 2, text: "营火的照料者：守住队伍的精神血线", score: 8.4, traits: { F: 2, good: 2, empathy: 2 } },
            { optionIndex: 3, text: "幕后的布盘者：精算资源，确保最终战果最大化", score: 7.2, traits: { T: 2, control: 2, self: 1 } },
          ],
        },
      ],
    },
    roleplay_stance: {
      title: "扮演姿态",
      page: {
        eyebrow: "Session 0.5 / Roleplay Stance",
        title: "给冒险者定下桌边姿态",
        intro: "这些选择不改属性点，只给角色卡加一层演法滤镜：你更像守阵的人、破局的人、照看营火的人，还是在暗处布盘的人。",
      },
      questions: [
        {
          questionId: "roleplay_stance_01",
          prompt: "你第一次走进一座陌生地城，最先看什么？",
          options: [
            { optionIndex: 0, text: "机关阀门、防御死角、能量流向和守卫巡逻节律", traits: { I: 1, T: 1, J: 1, order: 1 } },
            { optionIndex: 1, text: "队友的站位、呼吸和谁正在强装镇定", traits: { F: 1, N: 1, empathy: 1 } },
            { optionIndex: 2, text: "墙缝、捷径、隐藏门和规则漏洞", traits: { N: 1, P: 1, chaotic: 1 } },
            { optionIndex: 3, text: "前方有没有能立刻抢到的战术先手", traits: { E: 1, S: 1, action: 1 } },
          ],
        },
        {
          questionId: "roleplay_stance_02",
          prompt: "公告板上同时挂出四张委托，你最先撕哪一张？",
          options: [
            { optionIndex: 0, text: "两周长线侦查，最后一晚一口气收网", traits: { J: 2, N: 1, control: 1 } },
            { optionIndex: 1, text: "现场混乱、情报不足，但机会窗口只有十分钟", traits: { P: 2, E: 1, risk: 1 } },
            { optionIndex: 2, text: "深入冲突地带，找回某个 NPC 真正珍视的东西", traits: { F: 2, empathy: 2 } },
            { optionIndex: 3, text: "把混乱边境重新划出规矩，搭起安全走廊", traits: { T: 2, S: 1, order: 1 } },
          ],
        },
        {
          questionId: "roleplay_stance_03",
          prompt: "DM 突然宣布原计划失效，你的第一反应更像？",
          options: [
            { optionIndex: 0, text: "立刻重估备选方案，重排队伍站位和职责", traits: { J: 2, order: 1 } },
            { optionIndex: 1, text: "顺着混乱找新切口，先抢回行动节奏", traits: { P: 2, action: 1 } },
            { optionIndex: 2, text: "先看队友状态，确认没人被混乱甩出队伍", traits: { F: 2, good: 1 } },
            { optionIndex: 3, text: "先找是哪条关键变量变了，再重算局面", traits: { T: 2, N: 1 } },
          ],
        },
        {
          questionId: "roleplay_stance_04",
          prompt: "给这张角色卡留一个可演缺陷，你更想留哪种？",
          options: [
            { optionIndex: 0, text: "掌控欲太强，很难信任计划外的即兴动作", traits: { control: 2, J: 1 } },
            { optionIndex: 1, text: "共情太深，面对灰色取舍时总会慢半拍", traits: { empathy: 2, F: 1 } },
            { optionIndex: 2, text: "太爱自由，规矩常被你顺手拆掉", traits: { chaotic: 2, P: 1 } },
            { optionIndex: 3, text: "太信原则，有时错过最佳变招窗口", traits: { lawful: 2, J: 1 } },
          ],
        },
      ],
    },
  },
  mbtiProbe: {
    title: "扮演滤镜检定",
    intro: "这 8 道轻量跑团抉择，会为未填写 MBTI 的玩家推断一层角色演法滤镜。它只服务于角色卡生成，不是严肃心理测试。",
    questions: [
      {
        id: "mbti_ie_01",
        axis: "IE",
        round: 1,
        prompt: "冒险结束后，队伍在营地休整。你更想怎么恢复状态？",
        options: [
          { side: "I", text: "独自待在安静帐篷里整理装备、复盘线索，让精神慢慢回满。", score: 1 },
          { side: "E", text: "围坐在营火旁和队友交换见闻，把白天的惊险讲成新故事。", score: 1 },
        ],
      },
      {
        id: "mbti_ie_02",
        axis: "IE",
        round: 2,
        prompt: "你们第一次走进一间陌生酒馆，里面全是可能给线索的 NPC。你会？",
        options: [
          { side: "I", text: "先观察谁神色紧张、谁在回避目光，再决定从哪里切入。", score: 1 },
          { side: "E", text: "先找吧台旁最健谈的人落座，用几句话把气氛暖起来。", score: 1 },
        ],
      },
      {
        id: "mbti_ns_01",
        axis: "NS",
        round: 1,
        prompt: "调查现场只留下脚印、碎布和一枚奇怪符号。你会先注意什么？",
        options: [
          { side: "S", text: "脚印深度、布料质感、符号刻痕这些能直接验证的细节。", score: 1 },
          { side: "N", text: "这些物证背后可能指向的身份、动机和势力关系。", score: 1 },
        ],
      },
      {
        id: "mbti_ns_02",
        axis: "NS",
        round: 2,
        prompt: "地图上有一条安全大路和一条传闻中的旧密道。你更倾向怎么判断？",
        options: [
          { side: "S", text: "盘点补给消耗、已知魔兽分布和天气，选风险最清楚的路线。", score: 1 },
          { side: "N", text: "追问旧密道为什么被掩埋，以及它可能带来的隐藏机会。", score: 1 },
        ],
      },
      {
        id: "mbti_tf_01",
        axis: "TF",
        round: 1,
        prompt: "队友因为分配战利品吵起来，下一场战斗又快到了。你会先？",
        options: [
          { side: "T", text: "把贡献明细和下一战需求摆上桌，先定一个能执行的分法。", score: 1 },
          { side: "F", text: "先接住双方的委屈和疲惫，再找大家愿意接受的分法。", score: 1 },
        ],
      },
      {
        id: "mbti_tf_02",
        axis: "TF",
        round: 2,
        prompt: "一个 NPC 隐瞒了关键情报，但他的理由是保护家人。你会更重视？",
        options: [
          { side: "T", text: "隐瞒造成的战术损害，以及接下来如何降低风险。", score: 1 },
          { side: "F", text: "他在困境中的痛苦选择，以及怎样让相关的人不再受伤。", score: 1 },
        ],
      },
      {
        id: "mbti_jp_01",
        axis: "JP",
        round: 1,
        prompt: "明天要进地城，你负责安排出发前夜。你更倾向？",
        options: [
          { side: "J", text: "列好开路顺序、警戒职责和撤退预案，把变量压到最低。", score: 1 },
          { side: "P", text: "备妥核心补给和几条备选思路，等现场信息出现再调整。", score: 1 },
        ],
      },
      {
        id: "mbti_jp_02",
        axis: "JP",
        round: 2,
        prompt: "原计划被突发事件打断，目标可能换了位置。你第一反应是？",
        options: [
          { side: "J", text: "收拢队形，重建执行序列，把小队拉回可控节奏。", score: 1 },
          { side: "P", text: "利用突发事件带来的新信息，寻找顺势改道的新打法。", score: 1 },
        ],
      },
    ],
    resultNote: "这是根据 8 个跑团情境题推断出的演法滤镜，只用于角色卡风格生成，不代表正式人格测评。",
  },
});
