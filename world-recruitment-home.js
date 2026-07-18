const WORLD_HOME_RACES = Object.freeze([
  { id: "human", name: "人类", en: "HUMAN", accent: "#a65a3d", focus: "ray", summary: "适应力强，职业道路广，善于在变化中建立秩序。" },
  { id: "elf", name: "精灵", en: "ELF", accent: "#70815d", focus: "ray-reverse", summary: "感官敏锐、行动克制，在漫长时间中保持清醒判断。" },
  { id: "half_orc", name: "半兽人", en: "HALF-ORC", accent: "#596044", focus: "vortex", summary: "重视力量、行动和群体责任，擅长承担前线压力。" },
  { id: "tiefling", name: "提夫林", en: "TIEFLING", accent: "#773a38", focus: "vortex-offset", summary: "熟悉禁忌与契约，在被凝视时仍坚持定义自己的道路。" },
]);

const WORLD_HOME_PARTNERS = Object.freeze([
  ["世界冒险者工会", "发布征召、登记冒险者、安排职业检验并管理任务档案。"],
  ["大陆城邦联盟", "提供跨境通行、地方协助、法律授权和临时驻地。"],
  ["法师塔联合会", "监测世界裂隙、处理传送异常并提供奥术支援。"],
  ["圣殿医疗救援会", "提供治疗、诅咒净化、伤员转运和灾区救援。"],
  ["边境守望军", "提供前线情报、危险区域地图、道路护卫和紧急防御。"],
]);

const WORLD_HOME_CAREER_COPY = Object.freeze({
  guild_fighter: "接受基础战斗、队形协作与装备使用训练，承担稳定的前线职责。",
  guild_bard: "学习联络、鼓舞、交涉与现场调度，以表达能力维持队伍士气。",
  guild_artificer: "掌握装备维护、机关处理与现场制作，为行动提供可靠工具。",
  guild_paladin: "接受誓言、护卫与危机处置训练，在公开责任中维持秩序。",
  guild_ranger: "训练追踪、远程作战与野外生存，负责边境侦察和路线判断。",
  guild_wizard: "研习奥术理论、异常辨识与远程演算，处理复杂魔法事件。",
  guild_druid: "学习自然观察、环境适应与生命照护，协调聚落和荒野之间的冲突。",
  guild_rogue: "训练潜行、侦察、机关与路线规划，执行高风险精密任务。",
  guild_barbarian: "强化突破、耐受与近身压制能力，承担最直接的危险任务。",
  guild_cleric: "接受救援、祝祷与净化训练，为队伍提供治疗和精神支持。",
  guild_warlock: "学习契约识别、风险控制与异常力量运用，处理危险协定。",
  guild_sorcerer: "训练血脉魔力控制、快速施法与失控处置，稳定先天术法。",
});

const WORLD_HOME_TASKS = Object.freeze([
  {
    id: "rift",
    title: "世界裂隙调查",
    intro: "前往已发现的世界裂隙，确认其规模、稳定程度和另一侧环境，建立警戒范围并回收调查样本。",
    goals: ["找到裂隙并完成地图标记。", "判断裂隙属于稳定、扩张或移动状态。", "回收一份环境或魔力样本。", "建立临时警戒点并提交调查记录。"],
    note: "请勿把头伸进裂隙确认另一侧天气。此前已有三名实习员采用该方法，目前只回来两顶帽子。",
  },
  {
    id: "city",
    title: "失踪城邦搜寻",
    intro: "一座登记在册的城邦连同道路、居民和税务档案一起从地图上消失。调查其最后位置，确认城邦现状并恢复联络。",
    goals: ["追查城邦消失前的交通和魔力记录。", "找到城邦或确认其转移方向。", "核实居民、管理机构和基础设施状况。", "建立返程信标并带回城邦档案。"],
    note: "若当地官员坚称“我们只是集体搬家”，请要求出示迁址批文。无法出示批文的城邦，在行政意义上仍然属于失踪。",
  },
  {
    id: "savior",
    title: "疑似救世主护送",
    intro: "护送一名被多份预言同时提及的旅人前往世界尽头。目标身份尚未完全确认，但已有多个敌对组织试图阻止其出发。",
    goals: ["核验目标身份和预言文件。", "制定安全路线并避开公开追捕。", "保证目标及关键物品完整抵达。", "将封存证明交给终点接收人。"],
    note: "目标可能没有战斗能力，但通常很有主意。请勿允许其在沿途每个村庄停下来接受支线委托。",
  },
  {
    id: "dragon",
    title: "古龙危机谈判",
    intro: "一条古龙宣布将在近期毁灭数座城邦。任务重点不是击败古龙，而是查明诉求、建立停战窗口并争取修改行动日期。",
    goals: ["确认古龙身份、领地和正式诉求。", "建立不会立刻遭到吐息攻击的谈判渠道。", "提出赔偿、替代目标或延期方案。", "带回双方认可的书面或魔法契约。"],
    note: "能把末日从本周推迟到下季度，也算阶段性胜利。谈判期间请勿主动提及龙巢税或历史欠款。",
  },
  {
    id: "island",
    title: "周期性岛屿调查",
    intro: "一座海岛每隔七天出现一次，并在日落后重新消失。调查岛上的遗迹、居民和时间异常，建立稳定的观测记录。",
    goals: ["推算岛屿下一次出现的时间和位置。", "登岛后建立定位信标和撤离计时。", "调查遗迹、居民及异常生物。", "在岛屿消失前撤离并带回记录。"],
    note: "错过撤离窗口的队员将自动转为下一期调查员，等待七天后统一接回。滞留期间不另计差旅补贴。",
  },
]);

const WORLD_HOME_PANELS = Object.freeze([
  ["today", "今日招募"],
  ["partners", "合作单位"],
  ["purpose", "征召目的"],
  ["steps", "如何接受"],
  ["report", "报到说明"],
]);

let worldTaskReturnId = "";

function createWorldRecruitmentState() {
  return { raceId: "", targetId: "", panel: "purpose", taskId: "", locked: false };
}

function getWorldRecruitmentState() {
  if (!state.worldRecruitment) state.worldRecruitment = createWorldRecruitmentState();
  return state.worldRecruitment;
}

function worldEscape(value) {
  return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function renderWorldRaceArtwork(race, selected) {
  const src = getRaceArt(race.id);
  return `
    <span class="world-focus-print focus-${race.focus}" aria-hidden="true"></span>
    <span class="world-race-art ${src ? "has-image" : "is-placeholder"}">
      ${src ? `<img src="${worldEscape(src)}" alt="${race.name}征召人物" onerror="this.parentElement.classList.add('is-placeholder');this.remove();">` : ""}
      <i aria-hidden="true"></i>
    </span>
    <span class="world-race-status">${selected ? "已选择" : "候选"}</span>
    <strong>${race.name}</strong><small>${race.en}</small>
  `;
}

function renderWorldCareerDeck(raceId, selectedTargetId) {
  if (!raceId) {
    return `
      <div class="world-career-sealed" aria-label="职业牌堆尚未开启">
        ${[0,1,2,3].map((index) => `<span style="--card-index:${index}"><i>AG</i></span>`).join("")}
        <p>请先选择种族</p>
      </div>
    `;
  }
  const targets = getHomeRecruitTargetPreviews(raceId).slice(0, 4);
  return `
    <div class="world-career-deck" aria-label="对应职业">
      ${targets.map((target, index) => {
        const selected = selectedTargetId === target.id;
        return `
          <button class="world-career-card ${selected ? "is-selected" : ""}" data-world-target="${worldEscape(target.id)}" type="button" aria-pressed="${selected}" style="--card-index:${index};--career-accent:${target.theme?.accent || "#9b5d3f"}">
            <span class="career-selected-mark" ${selected ? "" : "aria-hidden=\"true\""}>${selected ? "已选择" : ""}</span>
            <small>开放登记</small>
            <strong>${worldEscape(target.title)}</strong>
            <b>${worldEscape(target.subtitle)}</b>
            <p>${worldEscape(WORLD_HOME_CAREER_COPY[target.id] || "接受对应职业的基础方法、风险规范与现场协作训练。")}</p>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderWorldInfoPanel(panelId, selectedRace) {
  if (panelId === "today") {
    return `<div class="world-info-copy"><h2>今日招募</h2><p>人类 / 精灵 / 半兽人 / 提夫林</p><p>${selectedRace ? `当前登记席已为${selectedRace.name}开放。` : "四族登记席均已开放，请从人物征召栏选择一名人物。"}</p></div>`;
  }
  if (panelId === "partners") {
    return `<div class="world-info-copy"><h2>合作单位</h2><div class="world-partner-list">${WORLD_HOME_PARTNERS.map(([name, body]) => `<article><strong>${name}</strong><p>${body}</p></article>`).join("")}</div></div>`;
  }
  if (panelId === "steps") {
    return `<div class="world-info-copy"><h2>如何接受征召</h2><ol class="world-steps"><li>选择种族</li><li>选择对应职业</li><li>接受职业检验</li><li>完成考核</li><li>登记成为冒险者</li></ol></div>`;
  }
  if (panelId === "report") {
    return `<div class="world-info-copy"><h2>报到说明</h2><p>持本征召令至当地冒险者工会领取推荐印，再前往对应职业培训地点报到。</p><p class="world-fineprint">推荐印仅限本人使用。种族与职业登记完成后不得私自涂改。</p></div>`;
  }
  return `
    <div class="world-info-copy">
      <h2>征召目的</h2>
      <p>近月来，各地天空与古代传送门同时出现裂隙。城市失踪、季节错乱，魔物沿着断裂的道路进入现实。世界冒险者工会现面向各族征召人员，调查裂隙来源并维持各地秩序。</p>
      <div class="world-task-tabs">${WORLD_HOME_TASKS.map((task) => `<button data-world-task="${task.id}" type="button" aria-pressed="false">${task.title}</button>`).join("")}</div>
    </div>
  `;
}

function renderWorldTaskSheet(taskId) {
  const task = WORLD_HOME_TASKS.find((item) => item.id === taskId);
  if (!task) return "";
  return `
    <div class="world-task-overlay" data-world-task-overlay>
      <article class="world-task-sheet" role="dialog" aria-modal="true" aria-labelledby="worldTaskTitle">
        <button class="world-task-close" data-world-task-close type="button" aria-label="关闭任务详情">×</button>
        <p class="world-kicker">GUILD ATTACHMENT · 任务附页</p>
        <h2 id="worldTaskTitle" tabindex="-1">${task.title}</h2>
        <p>${task.intro}</p>
        <h3>任务目标</h3>
        <ol>${task.goals.map((goal) => `<li>${goal}</li>`).join("")}</ol>
        <aside><strong>工会备注</strong><p>${task.note}</p></aside>
      </article>
    </div>
  `;
}

function renderWorldRecruitmentHome() {
  document.title = "世界征召令 | 世界冒险者工会";
  setProgress("世界征召令", 0);
  const homeState = getWorldRecruitmentState();
  const selectedRace = WORLD_HOME_RACES.find((race) => race.id === homeState.raceId) || null;
  const targets = selectedRace ? getHomeRecruitTargetPreviews(selectedRace.id).slice(0, 4) : [];
  if (homeState.targetId && !targets.some((target) => target.id === homeState.targetId)) homeState.targetId = "";
  const selectedTarget = targets.find((target) => target.id === homeState.targetId) || null;
  const combinationReady = Boolean(selectedRace && selectedTarget);
  app.innerHTML = `
    <section class="world-recruitment-page ${homeState.locked ? "is-locked is-sealing" : ""}" style="--selected-race-accent:${selectedRace?.accent || "#8a4b37"}">
      <header class="world-order-head">
        <p>世界冒险者工会联合征募</p>
        <h1>世界征召令</h1>
        <span>WORLD ADVENTURERS GUILD · GENERAL RECRUITMENT</span>
      </header>

      <div class="world-order-main">
        <section class="world-roster" aria-label="选择种族">
          <div class="world-race-grid">
            ${WORLD_HOME_RACES.map((race) => {
              const selected = race.id === selectedRace?.id;
              return `<button class="world-race-option ${selected ? "is-selected" : ""} ${selectedRace && !selected ? "is-dimmed" : ""}" data-world-race="${race.id}" type="button" aria-pressed="${selected}" style="--race-accent:${race.accent}">${renderWorldRaceArtwork(race, selected)}</button>`;
            }).join("")}
          </div>
          <div class="world-race-caption ${selectedRace ? "has-selection" : ""}" style="--caption-index:${Math.max(0, WORLD_HOME_RACES.findIndex((race) => race.id === selectedRace?.id))}">
            <span class="world-caption-pointer" aria-hidden="true"></span>
            <div><strong>${selectedRace ? `${selectedRace.name}　${selectedRace.en}` : "请选择一名人物"}</strong>${selectedRace ? "<small>今日征召</small>" : ""}</div>
            <p>${selectedRace?.summary || "从上方征召栏选择种族。种族不会决定最终成绩，但会确定职业检验的档案标注与叙事路线。"}</p>
          </div>
        </section>

        <aside class="world-career-panel">
          <div class="world-career-head"><span>${selectedRace ? `${selectedRace.name}对应职业` : "对应职业"}</span><small>${selectedTarget ? "组合已完成" : "职业档案"}</small></div>
          ${renderWorldCareerDeck(selectedRace?.id || "", selectedTarget?.id || "")}
        </aside>
      </div>

      <nav class="world-info-tabs" role="tablist" aria-label="征召令信息">
        ${WORLD_HOME_PANELS.map(([id, label]) => `<button role="tab" aria-selected="${homeState.panel === id}" class="${homeState.panel === id ? "is-active" : ""}" data-world-panel="${id}" type="button">${label}</button>`).join("")}
      </nav>
      <section class="world-info-panel" role="tabpanel">
        ${renderWorldInfoPanel(homeState.panel, selectedRace)}
        ${renderWorldTaskSheet(homeState.taskId)}
      </section>

      <footer class="world-acceptance">
        <div class="world-selection-summary"><span>${selectedRace ? selectedRace.name : "种族未登记"}</span><i>×</i><span>${selectedTarget ? selectedTarget.title : "职业未登记"}</span></div>
        <button id="worldAcceptRecruitment" type="button" ${combinationReady && !homeState.locked ? "" : "disabled"}>${combinationReady ? "接受征召" : "接受征召：尚不可用"}</button>
        <div class="world-seal-confirmation" aria-hidden="true"><i>AG</i><strong>征召登记已确认</strong><span>${selectedRace?.name || ""} / ${selectedTarget?.title || ""}</span></div>
      </footer>
    </section>
  `;

  document.querySelectorAll("[data-world-race]").forEach((button) => button.addEventListener("click", () => {
    if (homeState.locked) return;
    homeState.raceId = button.dataset.worldRace;
    homeState.targetId = "";
    state.homePreviewRaceId = homeState.raceId;
    render();
  }));
  document.querySelectorAll("[data-world-target]").forEach((button) => button.addEventListener("click", () => {
    if (homeState.locked) return;
    homeState.targetId = button.dataset.worldTarget;
    render();
  }));
  document.querySelectorAll("[data-world-panel]").forEach((button) => button.addEventListener("click", () => {
    homeState.panel = button.dataset.worldPanel;
    homeState.taskId = "";
    render();
  }));
  document.querySelectorAll("[data-world-task]").forEach((button) => button.addEventListener("click", () => {
    worldTaskReturnId = button.dataset.worldTask;
    homeState.taskId = button.dataset.worldTask;
    render();
    window.setTimeout(() => document.querySelector("#worldTaskTitle")?.focus(), 0);
  }));
  const closeTask = () => {
    if (!homeState.taskId) return;
    homeState.taskId = "";
    render();
    window.setTimeout(() => document.querySelector(`[data-world-task="${worldTaskReturnId}"]`)?.focus(), 0);
  };
  document.querySelector("[data-world-task-close]")?.addEventListener("click", closeTask);
  document.querySelector("[data-world-task-overlay]")?.addEventListener("click", (event) => { if (event.target === event.currentTarget) closeTask(); });
  const escapeHandler = (event) => { if (event.key === "Escape") closeTask(); };
  document.addEventListener("keydown", escapeHandler);
  cleanupFns.push(() => document.removeEventListener("keydown", escapeHandler));

  document.querySelector("#worldAcceptRecruitment")?.addEventListener("click", () => {
    if (!combinationReady || homeState.locked) return;
    homeState.locked = true;
    render();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => beginRecruitment(selectedRace.id, { skipRaceRegistry: true, targetId: selectedTarget.id }), reducedMotion ? 260 : 1650);
    cleanupFns.push(() => window.clearTimeout(timer));
  });
}
