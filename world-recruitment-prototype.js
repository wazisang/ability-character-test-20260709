const RACES = Object.freeze([
  {
    id: "human",
    name: "人类",
    en: "HUMAN",
    accent: "#a34d35",
    focus: "ray",
    art: "./assets/recruitment/characters/race-human-v1.png",
    idleArt: "./assets/recruitment/characters/race-human-kneel-idle-v1.png",
    summary: "适应力强，职业道路广，善于在变化中建立秩序。人类工会重视协作、执行与公开责任。",
    careers: [
      { id: "guild_fighter", name: "战士", location: "黑铁训练厅", art: "./assets/recruitment/world-careers/human-fighter-v1.webp", desc: "训练队形协作、装备使用与稳定的前线判断。" },
      { id: "guild_bard", name: "吟游诗人", location: "联络与士气处", art: "./assets/recruitment/world-careers/human-bard-v2.webp", desc: "学习联络、交涉与现场调度，以表达维持队伍士气。" },
      { id: "guild_artificer", name: "工匠", location: "工匠工坊", art: "./assets/recruitment/world-careers/human-artificer-v2.webp", desc: "掌握装备维护、机关处理与可靠的现场制作。" },
      { id: "guild_paladin", name: "圣武士", location: "誓言审议厅", art: "./assets/recruitment/world-careers/human-paladin-v2.webp", desc: "接受誓言、护卫与危机处置训练，在责任中维持秩序。" },
    ],
  },
  {
    id: "elf",
    name: "精灵",
    en: "ELF",
    accent: "#315f5b",
    focus: "ray-reverse",
    art: "./assets/recruitment/characters/race-elf-bow-aim-selected-v1.png",
    idleArt: "./assets/recruitment/characters/race-elf-string-tune-idle-v1.png",
    summary: "感官敏锐、行动克制，在漫长时间中保持清醒判断。精灵路线重视精准、观察与长期影响。",
    careers: [
      { id: "guild_ranger", name: "游侠", location: "边境巡林站", art: "./assets/recruitment/world-careers/elf-ranger-v1.webp", desc: "训练追踪、远程作战与野外生存，负责边境侦察。" },
      { id: "guild_wizard", name: "法师", location: "法师塔档案室", art: "./assets/recruitment/world-careers/elf-wizard-v1.webp", desc: "研习奥术理论、异常辨识与远程演算。" },
      { id: "guild_druid", name: "德鲁伊", location: "自然顾问席", art: "./assets/recruitment/world-careers/elf-druid-v1.webp", desc: "学习自然观察、环境适应与生命照护。" },
      { id: "guild_rogue", name: "潜行者", location: "斥候与机关处", art: "./assets/recruitment/world-careers/elf-rogue-v1.webp", desc: "训练潜行、侦察、机关与高风险路线规划。" },
    ],
  },
  {
    id: "half_orc",
    name: "半兽人",
    en: "HALF-ORC",
    accent: "#596044",
    focus: "dots",
    art: "./assets/recruitment/characters/race-half-orc-v1.png",
    idleArt: "./assets/recruitment/characters/race-half-orc-bracer-idle-v1.png",
    summary: "重视力量、行动和群体责任，擅长承担前线压力。半兽人路线强调可靠承压与直接解决问题。",
    careers: [
      { id: "guild_barbarian", name: "野蛮人", location: "荒野战技场", art: "./assets/recruitment/world-careers/half-orc-barbarian-v1.webp", desc: "强化突破、耐受与近身压制，承担最直接的危险任务。" },
      { id: "guild_fighter", name: "战士", location: "重装训练营", art: "./assets/recruitment/world-careers/half-orc-fighter-v1.webp", desc: "训练阵线维持、兵器配合与团队掩护。" },
      { id: "guild_rogue", name: "潜行者", location: "边境斥候站", art: "./assets/recruitment/world-careers/half-orc-rogue-v1.webp", desc: "以耐力、路线判断和突袭承担危险侦察。" },
      { id: "guild_cleric", name: "牧师", location: "战地救护所", art: "./assets/recruitment/world-careers/half-orc-cleric-v1.webp", desc: "接受救援、祝祷与净化训练，保护队伍的生存底线。" },
    ],
  },
  {
    id: "tiefling",
    name: "提夫林",
    en: "TIEFLING",
    accent: "#773a38",
    focus: "dots-offset",
    art: "./assets/recruitment/characters/race-tiefling-v1.png",
    idleArt: "./assets/recruitment/characters/race-tiefling-lean-idle-v1.png",
    summary: "熟悉禁忌与契约，在被凝视时仍坚持定义自己的道路。提夫林路线重视力量控制与风险判断。",
    careers: [
      { id: "guild_warlock", name: "契术师", location: "契约审查室", art: "./assets/recruitment/world-careers/tiefling-warlock-v1.webp", desc: "学习契约识别、风险控制与异常力量运用。" },
      { id: "guild_rogue", name: "潜行者", location: "夜巡情报处", art: "./assets/recruitment/world-careers/tiefling-rogue-v1.webp", desc: "训练情报、潜入与复杂环境中的路线控制。" },
      { id: "guild_bard", name: "吟游诗人", location: "异闻联络所", art: "./assets/recruitment/world-careers/tiefling-bard-v1.webp", desc: "用故事、谈判和现场反应处理偏见与冲突。" },
      { id: "guild_sorcerer", name: "术士", location: "血脉稳定院", art: "./assets/recruitment/world-careers/tiefling-sorcerer-v1.webp", desc: "训练血脉魔力控制、快速施法与失控处置。" },
    ],
  },
]);

const INFO_TABS = Object.freeze([
  ["today", "今日招募", "#a34d35"],
  ["partners", "合作单位", "#315f5b"],
  ["purpose", "征召目的", "#a34d35"],
  ["steps", "如何接受", "#b99045"],
  ["report", "报到说明", "#315f5b"],
]);

const PARTNERS = Object.freeze([
  ["世界冒险者工会", "发布征召、登记档案并管理任务。"],
  ["大陆城邦联盟", "提供跨境通行与地方协助。"],
  ["法师塔联合会", "监测裂隙并提供奥术支援。"],
  ["圣殿医疗救援会", "承担治疗、净化和伤员转运。"],
  ["边境守望军", "提供前线情报、地图与道路护卫。"],
]);

const MISSIONS = Object.freeze([
  {
    id: "rift",
    title: "世界裂隙调查",
    intro: "前往已发现的世界裂隙，确认规模、稳定程度和另一侧环境，并建立警戒范围。",
    goals: ["完成裂隙地图标记。", "判断裂隙的变化状态。", "回收环境或魔力样本。", "建立警戒点并提交记录。"],
    note: "请勿把头伸进裂隙确认另一侧天气。此前已有三名实习员采用该方法，目前只回来两顶帽子。",
  },
  {
    id: "city",
    title: "失踪城邦搜寻",
    intro: "一座登记在册的城邦连同道路、居民和税务档案一起从地图上消失。请确认其去向。",
    goals: ["追查消失前的交通记录。", "找到城邦或确认转移方向。", "核实居民与设施状况。", "建立返程信标并带回档案。"],
    note: "若当地官员坚称只是集体搬家，请要求出示迁址批文。无法出示批文的城邦，在行政意义上仍然属于失踪。",
  },
  {
    id: "savior",
    title: "疑似救世主护送",
    intro: "护送一名被多份预言同时提及的旅人前往世界尽头。目标身份尚未完全确认。",
    goals: ["核验目标身份与预言文件。", "制定安全路线。", "保证目标与关键物品抵达。", "交付封存证明。"],
    note: "目标可能没有战斗能力，但通常很有主意。请勿允许其在沿途每个村庄停下来接受支线委托。",
  },
  {
    id: "dragon",
    title: "古龙危机谈判",
    intro: "一条古龙宣布将在近期毁灭数座城邦。任务重点是查明诉求并争取修改行动日期。",
    goals: ["确认古龙身份与正式诉求。", "建立谈判渠道。", "提出赔偿或延期方案。", "带回双方认可的契约。"],
    note: "能把末日从本周推迟到下季度，也算阶段性胜利。谈判期间请勿主动提及龙巢税或历史欠款。",
  },
  {
    id: "island",
    title: "周期性岛屿调查",
    intro: "一座海岛每隔七天出现一次，并在日落后重新消失。请建立稳定的观测记录。",
    goals: ["推算下次出现的位置。", "建立定位信标与撤离计时。", "调查遗迹及异常生物。", "日落前撤离并带回记录。"],
    note: "错过撤离窗口的队员将自动转为下一期调查员，等待七天后统一接回。滞留期间不另计差旅补贴。",
  },
]);

const state = loadHallState();
let careerAnimating = false;
const stageViewport = document.querySelector("#stageViewport");
const recruitmentDesk = document.querySelector("#recruitmentDesk");
const raceRoster = document.querySelector("#raceRoster");
const raceCaption = document.querySelector("#raceCaption");
const raceCaptionTitle = document.querySelector("#raceCaptionTitle");
const raceCaptionBody = document.querySelector("#raceCaptionBody");
const raceCaptionStamp = document.querySelector("#raceCaptionStamp");
const careerHeading = document.querySelector("#careerHeading");
const careerBookmarks = document.querySelector("#careerBookmarks");
const careerCard = document.querySelector("#careerCard");
const dossierHint = document.querySelector("#dossierHint");
const noticeTabs = document.querySelector("#noticeTabs");
const noticeCopy = document.querySelector("#noticeCopy");
const selectionSummary = document.querySelector("#selectionSummary");
const acceptButton = document.querySelector("#acceptButton");
const acceptLabel = document.querySelector("#acceptLabel");
const noticePaper = document.querySelector(".notice-paper");
const missionDialog = document.querySelector("#missionDialog");
const missionDialogTitle = document.querySelector("#missionDialogTitle");
const missionDialogBody = document.querySelector("#missionDialogBody");

function loadHallState() {
  try {
    const saved = JSON.parse(sessionStorage.getItem("worldRecruitmentHallState") || "null");
    const race = RACES.find((item) => item.id === saved?.raceId);
    const career = race?.careers.find((item) => item.id === saved?.careerId);
    return {
      raceId: race?.id || "",
      careerId: career?.id || "",
      infoTab: INFO_TABS.some(([id]) => id === saved?.infoTab) ? saved.infoTab : "purpose",
      locked: false,
    };
  } catch (error) {
    return { raceId: "", careerId: "", infoTab: "purpose", locked: false };
  }
}

function saveHallState() {
  try {
    sessionStorage.setItem("worldRecruitmentHallState", JSON.stringify({
      raceId: state.raceId,
      careerId: state.careerId,
      infoTab: state.infoTab,
    }));
  } catch (error) {}
}

function fitRecruitmentStage() {
  if (window.matchMedia("(max-width: 720px)").matches) {
    recruitmentDesk.style.transform = "none";
    stageViewport.style.width = "100%";
    stageViewport.style.height = "auto";
    return;
  }
  const scale = Math.min(window.innerWidth / 1672, window.innerHeight / 941, 1);
  recruitmentDesk.style.transform = `scale(${scale})`;
  stageViewport.style.width = `${Math.round(1672 * scale)}px`;
  stageViewport.style.height = `${Math.round(941 * scale)}px`;
}

function selectedRace() {
  return RACES.find((race) => race.id === state.raceId) || null;
}

function selectedCareer() {
  return selectedRace()?.careers.find((career) => career.id === state.careerId) || null;
}

function renderSealedCareerCard(title, subtitle) {
  return `
    <div class="career-back-ritual" aria-hidden="true">
      <span class="career-back-orbit"></span>
      <span class="career-back-sigil">界</span>
      <span class="career-back-rune career-back-rune--north">I</span>
      <span class="career-back-rune career-back-rune--east">V</span>
      <span class="career-back-rune career-back-rune--south">IX</span>
      <span class="career-back-rune career-back-rune--west">XIII</span>
    </div>
    <div class="career-empty-copy"><strong>${title}</strong><span>${subtitle}</span></div>
  `;
}

function renderRoster() {
  raceRoster.innerHTML = RACES.map((race) => `
    <button class="race-choice" data-race="${race.id}" data-focus="${race.focus}" type="button"
      aria-pressed="false" aria-label="选择${race.name}" style="--race-accent:${race.accent}">
      <span class="selection-print" aria-hidden="true"></span>
      ${race.id === "tiefling" ? `<span class="race-support race-support--notice-pillar" aria-hidden="true"></span>` : ""}
      ${race.idleArt ? `
        <img class="race-portrait race-portrait--idle" src="${race.idleArt}" alt="${race.name}征召候选人待机姿势">
        <img class="race-portrait race-portrait--selected" src="${race.art}" alt="" aria-hidden="true">
      ` : `<img class="race-portrait" src="${race.art}" alt="${race.name}征召候选人">`}
      <span class="race-state">已选择</span>
      <span class="race-name">${race.name}<small>${race.en}</small></span>
    </button>
  `).join("");

  raceRoster.addEventListener("click", (event) => {
    const button = event.target.closest("[data-race]");
    if (!button || state.locked) return;
    state.raceId = button.dataset.race;
    state.careerId = "";
    saveHallState();
    updateSelectionUI();
    playRaceRecruitment(state.raceId);
  });
}

function playRaceRecruitment(raceId) {
  const active = raceRoster.querySelector(`[data-race="${raceId}"]`);
  if (!active || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  active.classList.remove("is-recruiting");
  void active.offsetWidth;
  active.classList.add("is-recruiting");
  window.setTimeout(() => active.classList.remove("is-recruiting"), raceId === "tiefling" ? 780 : 700);
}

function updateRaceUI() {
  const race = selectedRace();
  const index = Math.max(0, RACES.findIndex((item) => item.id === state.raceId));
  document.querySelectorAll("[data-race]").forEach((button) => {
    const active = button.dataset.race === state.raceId;
    button.classList.toggle("is-selected", active);
    button.setAttribute("aria-pressed", String(active));
  });

  recruitmentDesk.style.setProperty("--selection-accent", race?.accent || "#a34d35");
  raceCaption.style.setProperty("--caption-x", `${index * 18 + 23}%`);
  raceCaption.classList.toggle("has-selection", Boolean(race));
  raceCaptionTitle.textContent = race ? `${race.name} · ${race.en}` : "请选择一名征召候选人";
  raceCaptionBody.textContent = race?.summary || "种族决定可申请的职业路线，不影响职业检验的最终成绩。";
  raceCaptionStamp.textContent = race ? "今日\n征召" : "待\n登记";
}

function renderCareerSelector() {
  const race = selectedRace();
  const career = selectedCareer();
  careerHeading.textContent = race ? `${race.name}对应职业` : "先选择种族";

  if (!race) {
    careerBookmarks.innerHTML = [1, 2, 3, 4].map((index) => `
      <button class="career-bookmark" type="button" disabled data-slot="${index}" style="--bookmark:${index % 2 ? "#a34d35" : "#315f5b"}">档案 ${index}</button>
    `).join("");
    careerCard.className = "career-card is-empty";
    careerCard.style.removeProperty("--card-accent");
    careerCard.innerHTML = renderSealedCareerCard("秘契封存", "选择种族后启封");
    dossierHint.textContent = "种族登记后，对应的四份职业档案会在这里展开。";
    return;
  }

  const bookmarkColors = [race.accent, "#315f5b", "#b99045", "#733c35"];
  race.careers.forEach((item) => {
    const image = new Image();
    image.src = item.art;
  });
  careerBookmarks.innerHTML = race.careers.map((item, index) => `
    <button class="career-bookmark" data-career="${item.id}" role="tab" type="button"
      data-slot="${index + 1}" aria-selected="${item.id === state.careerId}" style="--bookmark:${bookmarkColors[index]}">
      ${item.name}
    </button>
  `).join("");

  if (!career) {
    careerCard.className = "career-card is-empty";
    careerCard.style.setProperty("--card-accent", race.accent);
    careerCard.innerHTML = renderSealedCareerCard("职业秘契", "从左侧书签选择职业");
    dossierHint.textContent = "职业不会自动代选。查看档案并确认后，征召按钮才会启用。";
    return;
  }

  const careerCode = career.id.replace(/^guild_/, "").toUpperCase();
  careerCard.className = "career-card is-revealed";
  careerCard.style.setProperty("--card-accent", race.accent);
  careerCard.innerHTML = `
    <div class="career-card-header" aria-hidden="true">
      <span class="career-card-code">${careerCode}</span>
      <span class="career-card-sigil">${career.name.slice(0, 1)}</span>
      <span class="career-card-rank">GUILD CLASS</span>
    </div>
    <div class="career-art-wrap"><img class="career-art" src="${career.art}" alt="${race.name}${career.name}职业卡"></div>
    <div class="career-card-copy">
      <h3>${career.name}</h3>
      <p class="career-location">报到地点：${career.location}</p>
      <p class="career-desc">${career.desc}</p>
    </div>
    <span class="career-selected-mark">登记</span>
  `;
  dossierHint.textContent = `${race.name} / ${career.name}的职业组合已经登记，可以接受征召。`;
}

function renderInfoTabs() {
  noticeTabs.innerHTML = INFO_TABS.map(([id, label, color], index) => `
    <button class="notice-tab" role="tab" type="button" data-info-tab="${id}"
      aria-selected="${state.infoTab === id}" style="--tab-color:${color}">${index + 1}. ${label}</button>
  `).join("");
}

function renderInfoCopy() {
  const race = selectedRace();
  if (state.infoTab === "today") {
    noticeCopy.innerHTML = `
      <h2>今日招募</h2>
      <p>人类、精灵、半兽人、提夫林四族登记席现已开放。${race ? `当前已登记：${race.name}。` : "请从上方人物画像选择种族。"}</p>
      <p>种族决定职业题库与叙事路线，不直接增加或扣除检验成绩。</p>
    `;
    return;
  }

  if (state.infoTab === "partners") {
    noticeCopy.innerHTML = `
      <h2>合作单位</h2>
      <div class="partner-grid">${PARTNERS.map(([name, body], index) => `
        <article style="--partner-color:${index % 2 ? "#315f5b" : "#a34d35"}"><strong>${name}</strong><p>${body}</p></article>
      `).join("")}</div>
    `;
    return;
  }

  if (state.infoTab === "steps") {
    noticeCopy.innerHTML = `
      <h2>如何接受征召</h2>
      <ol class="process-list">
        <li>选择你的种族</li><li>选择对应职业</li><li>接受职业检验</li><li>通过综合考核</li><li>登记成为冒险者</li>
      </ol>
    `;
    return;
  }

  if (state.infoTab === "report") {
    noticeCopy.innerHTML = `
      <h2>报到说明</h2>
      <p>凭本征召令至当地冒险者工会领取推荐印，再前往所选职业卡标注的培训地点报到。</p>
      <p>推荐印仅限本人使用；种族和职业登记完成后不得自行涂改。</p>
    `;
    return;
  }

  noticeCopy.innerHTML = `
    <h2>征召目的</h2>
    <p>世界裂隙正在扩张，各地道路、季节与城市记录接连失常。工会现征召各族人员调查灾变并维持秩序。</p>
    <div class="mission-tags">${MISSIONS.map((mission) => `<button class="mission-tag" data-mission="${mission.id}" type="button">${mission.title}</button>`).join("")}</div>
  `;
}

function updateAcceptance() {
  const race = selectedRace();
  const career = selectedCareer();
  const ready = Boolean(race && career && !state.locked);
  selectionSummary.textContent = `${race?.name || "种族未登记"} · ${career?.name || "职业未登记"}`;
  acceptButton.disabled = !ready;
  acceptLabel.textContent = ready ? `接受征召：${race.name} ${career.name}` : "选择种族与职业后接受征召";
}

function updateSelectionUI() {
  updateRaceUI();
  renderCareerSelector();
  renderInfoCopy();
  updateAcceptance();
}

function openMission(missionId) {
  const mission = MISSIONS.find((item) => item.id === missionId);
  if (!mission) return;
  missionDialogTitle.textContent = mission.title;
  missionDialogBody.innerHTML = `
    <p>${mission.intro}</p>
    <h3>任务目标</h3>
    <ol>${mission.goals.map((goal) => `<li>${goal}</li>`).join("")}</ol>
    <h3>工会备注</h3>
    <p class="mission-note">${mission.note}</p>
  `;
  missionDialog.showModal();
}

careerBookmarks.addEventListener("click", (event) => {
  const button = event.target.closest("[data-career]");
  if (!button || state.locked || careerAnimating || button.dataset.career === state.careerId) return;
  const race = selectedRace();
  const previousIndex = race?.careers.findIndex((item) => item.id === state.careerId) ?? -1;
  const nextIndex = race?.careers.findIndex((item) => item.id === button.dataset.career) ?? 0;
  const direction = previousIndex < 0 || nextIndex >= previousIndex ? 1 : -1;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || typeof careerCard.animate !== "function") {
    state.careerId = button.dataset.career;
    saveHallState();
    renderCareerSelector();
    updateAcceptance();
    return;
  }

  careerAnimating = true;
  const outgoing = careerCard.animate([
    { transform: "translateX(0) rotateY(0deg) rotateZ(0deg) scale(1)", opacity: 1, filter: "blur(0)" },
    { transform: `translateX(${-direction * 46}px) rotateY(${direction * 9}deg) rotateZ(${-direction * 2.5}deg) scale(.96)`, opacity: 0, filter: "blur(1.5px)" },
  ], { duration: 180, easing: "cubic-bezier(.55,.05,.8,.35)", fill: "none" });

  outgoing.finished.then(() => {
    careerCard.getAnimations().forEach((animation) => animation.cancel());
    state.careerId = button.dataset.career;
    saveHallState();
    renderCareerSelector();
    updateAcceptance();
    const incoming = careerCard.animate([
      { transform: `translateX(${direction * 58}px) rotateY(${-direction * 11}deg) rotateZ(${direction * 3}deg) scale(.95)`, opacity: 0, filter: "blur(2px)" },
      { transform: "translateX(-5px) rotateY(1deg) rotateZ(-.4deg) scale(1.015)", opacity: 1, filter: "blur(0)" },
      { transform: "translateX(0) rotateY(0deg) rotateZ(0deg) scale(1)", opacity: 1, filter: "blur(0)" },
    ], { duration: 380, easing: "cubic-bezier(.18,.82,.2,1)", fill: "none" });
    incoming.finished.then(() => {
      careerCard.getAnimations().forEach((animation) => animation.cancel());
      careerCard.style.opacity = "1";
      careerCard.style.transform = "none";
      careerCard.style.filter = "none";
      careerAnimating = false;
    }).catch(() => {
      careerAnimating = false;
    });
  }).catch(() => {
    careerAnimating = false;
  });
});

noticeTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-info-tab]");
  if (!button) return;
  state.infoTab = button.dataset.infoTab;
  saveHallState();
  renderInfoTabs();
  renderInfoCopy();
});

noticeCopy.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mission]");
  if (button) openMission(button.dataset.mission);
});

document.querySelector("#dialogClose").addEventListener("click", () => missionDialog.close());
missionDialog.addEventListener("click", (event) => {
  if (event.target === missionDialog) missionDialog.close();
});

acceptButton.addEventListener("click", () => {
  const race = selectedRace();
  const career = selectedCareer();
  if (!race || !career || state.locked) return;
  state.locked = true;
  noticePaper.classList.add("is-sealed");
  acceptButton.disabled = true;
  acceptLabel.textContent = "征召令盖印中";
  document.querySelector("#handoffCopy").textContent = `${race.name} · ${career.name}档案正在移交职业检验场地`;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.setTimeout(() => {
    document.querySelector("#handoffScreen").classList.add("is-visible");
    document.querySelector("#handoffScreen").setAttribute("aria-hidden", "false");
  }, reducedMotion ? 20 : 520);

  window.setTimeout(() => {
    sessionStorage.removeItem("worldRecruitmentHallState");
    const params = new URLSearchParams({ from: "hall", race: race.id, target: career.id });
    window.location.href = `./index.html?${params.toString()}`;
  }, reducedMotion ? 260 : 1800);
});

renderRoster();
renderInfoTabs();
updateSelectionUI();
fitRecruitmentStage();
window.addEventListener("resize", fitRecruitmentStage, { passive: true });
