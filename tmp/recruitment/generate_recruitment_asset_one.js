const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..", "..");
const SESSION = "recruitment-assets-gen";
const BRIDGE_URL = "http://127.0.0.1:10086/command";
const OUT_DIR = path.join(ROOT, "assets", "recruitment", "generated");
const MANIFEST_PATH = path.join(ROOT, "assets", "recruitment", "image_manifest.json");
const DATA_JS_PATH = path.join(ROOT, "data", "race-recruitment-assets.js");
const PYTHON = path.join(os.homedir(), ".cache", "codex-runtimes", "codex-primary-runtime", "dependencies", "python", "python.exe");
const CROP_SCRIPT = path.join(__dirname, "crop_recruitment_asset.py");

const STYLE_PREFIX =
  "Western fantasy tabletop RPG illustration, cinematic painterly realism, adventurer guild recruitment atmosphere, strong readable silhouette, detailed environment props, dramatic torchlight, parchment and iron texture, grounded dark fantasy, high detail, professional game concept art, cohesive recruitment asset series.";

const NEGATIVE_SUFFIX =
  "No text, no watermark, no logo, no readable letters, no UI overlay, no modern city, no sci-fi technology, no neon cyberpunk, no anime chibi, no cartoon mascot, no oversexualized outfit, no explicit gore, no exposed organs, no self-harm close-up, no dismemberment close-up, no blurry image, no low quality, no extra limbs, no distorted hands, no duplicate characters, no bad anatomy.";

const RACE_CARD_STYLE_PREFIX =
  "DND fantasy race card illustration, portrait-orientation 2:3 canvas, tall vertical tarot card image, full card visible from top to bottom, cohesive defect-card series, ornate dark bronze tarot border, dark parchment background, subtle arcane frame, single centered subject, cinematic tabletop RPG character concept art, dramatic but clean lighting, clear readable silhouette.";

const RACE_CARD_NEGATIVE_SUFFIX =
  "No text, no watermark, no logo, no signature, no extra people, no crowd, no gore, no explicit injury, no severed limb, no body shaming, no medical chart, no modern hospital, no modern clothes, no sci-fi interface, no low quality, no blurry image, no bad anatomy, no cropped face, no cluttered background, no square image, no 1:1 canvas, no horizontal layout.";

const TARGET_CARD_STYLE_PREFIX =
  "DND fantasy guild dossier card illustration, horizontal 16:9 canvas, cohesive recruitment card series, environment-first medium-wide scene, one recruit occupying no more than one third of the frame, visible guild architecture and profession tools, subtle dark bronze ornamental edge treatment, dark parchment and black iron texture, bright high-key environmental lighting, medium-high exposure, balanced bright midtones, clear color separation, readable shadows, warm sunlight or luminous window light, cinematic painterly realism, clear silhouette, grounded western dark fantasy, professional tabletop RPG concept art, no crushed blacks, no heavy vignette, no brown-black monochrome.";

const TARGET_CARD_NEGATIVE_SUFFIX =
  "No text, no watermark, no logo, no readable letters, no UI overlay, no close-up portrait, no character filling the frame, no child, no teenager, no childlike face, no generic empty background, no modern equipment, no sci-fi technology, no neon cyberpunk, no anime, no chibi, no cartoon mascot, no oversexualized outfit, no explicit gore, no blurry image, no low quality, no extra limbs, no distorted hands, no duplicate main character, no crushed black shadows, no near-black exposure, no muddy brown monochrome, no heavy vignette.";

const ENDING_CARD_STYLE_PREFIX =
  "DND fantasy guild verdict dossier card illustration, horizontal 16:9 canvas, cohesive recruitment card series, environment-first scene, stamped parchment and black iron bureaucracy props, subtle dark bronze ornamental edge treatment, bright high-key environmental lighting, medium-high exposure, balanced bright midtones, clear color separation, readable shadows, luminous warm overhead lamplight and window light, cinematic painterly realism, grounded western dark fantasy, professional tabletop RPG concept art, no crushed blacks, no heavy vignette, no brown-black monochrome.";

const ASSETS = [
  {
    id: "ui_home_recruitment_hall",
    role: "ui",
    group: "ui",
    key: "home",
    ratio: "16:9-home",
    file: "ui_home_recruitment_hall-preview.webp",
    keyword: "massive wooden notice board",
    promptBrief: "adventurer recruitment hall beside a dungeon gate",
    scene:
      "Scene: Western fantasy adventurer recruitment hall beside a dungeon gate, massive wooden notice board covered with parchment contracts and wax seals, guild counter, weapons rack, torchlight, stone walls, a few vague mercenary silhouettes. Composition: wide 16:9 hero background, main visual weight on the right and center, darker calmer space on the left for overlaid interface copy, no important information at the bottom. Mood: cinematic warm dark fantasy, official but dangerous.",
  },
  {
    id: "ui_bloodline_registry",
    role: "ui",
    group: "ui",
    key: "registry",
    ratio: "16:9",
    file: "ui_bloodline_registry-preview.webp",
    keyword: "open bestiary ledger",
    promptBrief: "bloodline registry desk in a fantasy guild",
    scene:
      "Scene: Bloodline registry desk in a fantasy guild, open bestiary ledger, sealed specimen tags, ink bottles, claw marks on parchment, iron stamp, candlelight. Composition: 16:9 environment still life, desk in foreground, official guild atmosphere, safe margins for cropping. Mood: mysterious but official.",
  },
  {
    id: "ui_guild_verdict_scroll",
    role: "ui",
    group: "ui",
    key: "verdict",
    ratio: "16:9",
    file: "ui_guild_verdict_scroll-preview.webp",
    keyword: "black iron badge",
    promptBrief: "guild verdict table with stamped parchment",
    scene:
      "Scene: Guild verdict table with stamped parchment, wax seals, black iron badge, recruitment folders, candle smoke, official fantasy bureaucracy. Composition: cinematic 16:9 overhead table scene with strong central silhouette and dark edge vignette. Mood: dramatic overhead light, judgement after a guild trial.",
  },
  {
    id: "race_human_card",
    role: "race-card",
    group: "races",
    raceId: "human",
    ratio: "2:3",
    file: "race_human_card-preview.webp",
    keyword: "map case and mixed tools",
    promptBrief: "human adventurer recruit at a guild counter",
    scene:
      "Scene: Human adventurer recruit at a guild counter, adaptable traveler with worn cloak, sword, map case and mixed tools, determined practical expression, warm torchlit recruitment hall. Composition: 2:3 portrait composition, waist-up to full-body recruit, readable silhouette, safe margins. Mood: grounded western fantasy practicality.",
  },
  {
    id: "race_elf_card",
    role: "race-card",
    group: "races",
    raceId: "elf",
    ratio: "2:3",
    file: "race_elf_card-preview.webp",
    keyword: "silver-green fabric",
    promptBrief: "elegant elf bloodline recruit in ancient forest ruins",
    scene:
      "Scene: Elegant elf bloodline recruit in ancient forest ruins, keen eyes, long-lived calm, moonlit leaves, silver-green fabric, refined silhouette. Composition: 2:3 portrait composition, centered recruit, graceful but grounded, safe margins. Mood: moonlit old-world elegance.",
  },
  {
    id: "race_drow_card",
    role: "race-card",
    group: "races",
    raceId: "drow",
    ratio: "2:3",
    file: "race_drow_card-preview.webp",
    keyword: "obsidian stone",
    promptBrief: "dark elf recruit from an underground city",
    scene:
      "Scene: Dark elf recruit from an underground city, obsidian stone, violet torchlight, dangerous charisma, cautious smile, elegant armor, shadowed cavern architecture. Composition: 2:3 portrait, centered subject, readable silhouette, safe margins. Mood: subterranean intrigue and restraint.",
  },
  {
    id: "race_dwarf_card",
    role: "race-card",
    group: "races",
    raceId: "dwarf",
    ratio: "2:3",
    file: "race_dwarf_card-preview.webp",
    keyword: "glowing clan runes",
    promptBrief: "sturdy dwarf clan recruit in mountain forge light",
    scene:
      "Scene: Sturdy dwarf clan recruit in mountain forge light, ancestral hammer, iron braids, heavy boots, glowing clan runes on metal, grounded endurance. Composition: 2:3 portrait, sturdy low center of gravity, safe margins. Mood: forge warmth and clan duty.",
  },
  {
    id: "race_halfling_card",
    role: "race-card",
    group: "races",
    raceId: "halfling",
    ratio: "2:3",
    file: "race_halfling_card-preview.webp",
    keyword: "lucky charm",
    promptBrief: "small halfling recruit under an oversized cloak and shield",
    scene:
      "Scene: Small halfling recruit under an oversized cloak and shield, lucky charm, warm campfire near a dangerous road, brave but understated. Composition: 2:3 portrait, small subject still readable, safe margins. Mood: humble courage in a large dangerous world.",
  },
  {
    id: "race_gnome_card",
    role: "race-card",
    group: "races",
    raceId: "gnome",
    ratio: "2:3",
    file: "race_gnome_card-preview.webp",
    keyword: "tiny clockwork devices",
    promptBrief: "gnome recruit with clockwork devices and illusion sparks",
    scene:
      "Scene: Weathered adult gnome recruit surrounded by tiny clockwork devices and soft illusion sparks, sharp curious eyes, compact traveling kit, practical workshop leathers, adult proportions, stern field-engineer posture, grounded fantasy workshop. Composition: 2:3 portrait, compact figure with readable props, safe margins. Mood: curious practical invention, not cute, not childlike.",
  },
  {
    id: "race_half_orc_card",
    role: "race-card",
    group: "races",
    raceId: "half_orc",
    ratio: "2:3",
    file: "race_half_orc_card-preview.webp",
    keyword: "cracked tusk",
    promptBrief: "half-orc recruit with cracked tusk and frontier camp",
    scene:
      "Scene: Half-orc recruit with cracked tusk, survival scars, practical weapon harness, direct powerful stance, frontier camp background, resilient and misunderstood. Composition: 2:3 portrait, strong silhouette, safe margins. Mood: hard-earned resilience, no explicit injury.",
  },
  {
    id: "race_tiefling_card",
    role: "race-card",
    group: "races",
    raceId: "tiefling",
    ratio: "2:3",
    file: "race_tiefling_card-preview.webp",
    keyword: "infernal mark",
    promptBrief: "tiefling recruit with horns and infernal mark",
    scene:
      "Scene: Tiefling recruit with subtle horns and infernal mark, contract shadows behind them, proud defiant posture, dark red candlelight, identity tension, not oversexualized. Composition: 2:3 portrait, elegant but practical outfit, safe margins. Mood: defiance under suspicion.",
  },
  {
    id: "race_dragonborn_card",
    role: "race-card",
    group: "races",
    raceId: "dragonborn",
    ratio: "2:3",
    file: "race_dragonborn_card-preview.webp",
    keyword: "ember breath glow",
    promptBrief: "dragonborn recruit before clan banner",
    scene:
      "Scene: Dragonborn recruit before clan banner, ember breath glow, scale armor, proud ceremonial posture, honor and pressure of bloodline. Composition: 2:3 portrait, strong upright silhouette, safe margins. Mood: proud ceremonial burden.",
  },
  {
    id: "race_goliath_card",
    role: "race-card",
    group: "races",
    raceId: "goliath",
    ratio: "2:3",
    file: "race_goliath_card-preview.webp",
    keyword: "stone-like skin markings",
    promptBrief: "tall goliath recruit from high mountains",
    scene:
      "Scene: Tall goliath recruit from high mountains, stone-like skin markings, cold wind, climbing ropes, quiet strength, highland survival culture. Composition: 2:3 portrait, large calm silhouette, safe margins. Mood: austere mountain endurance.",
  },
  {
    id: "race_troll_card",
    role: "race-card",
    group: "races",
    raceId: "troll",
    ratio: "2:3",
    file: "race_troll_card-preview.webp",
    keyword: "too large for the guild doorway",
    promptBrief: "giant troll-blood recruit too large for the guild doorway",
    scene:
      "Scene: Giant troll-blood recruit too large for the guild doorway, regenerating green scars, huge hands, frightening silhouette but intelligent eyes, cracked stone floor, dark fantasy recruitment hall. Composition: 2:3 portrait, massive centered subject, safe margins, no explicit gore. Mood: dangerous but playable.",
  },
  {
    id: "race_ogre_giant_card",
    role: "race-card",
    group: "races",
    raceId: "ogre_giant",
    ratio: "2:3",
    file: "race_ogre_giant_card-preview.webp",
    keyword: "tiny doorway",
    promptBrief: "giant-blood recruit squeezing through a narrow dungeon gate",
    scene:
      "Scene: Giant-blood or ogre-blood recruit squeezing through a narrow dungeon gate, massive shoulders scraping stone, heavy pack, scale contrast with tiny doorway, imposing but playable. Composition: 2:3 portrait, readable scale problem, safe margins. Mood: oversized strength meeting dungeon architecture.",
  },
  {
    id: "troll_target_barbarian_camp",
    role: "target",
    group: "targets",
    raceId: "troll",
    targetId: "barbarian_camp",
    ratio: "16:9",
    file: "troll_target_barbarian_camp-preview.webp",
    keyword: "beast-hide banners",
    promptBrief: "troll-blood recruit at a brutal barbarian war camp",
    scene:
      "Scene: Troll-blood recruit at a brutal barbarian war camp, split axes, bonfire, beast-hide banners, cracked training dummies, wild frontline energy. Composition: cinematic 16:9, target card background, strong orange fire and black iron shapes, safe margins. Mood: feral pressure, no gore.",
  },
  {
    id: "troll_target_fighter_line",
    role: "target",
    group: "targets",
    raceId: "troll",
    targetId: "fighter_line",
    ratio: "16:9",
    file: "troll_target_fighter_line-preview.webp",
    keyword: "black-flag heavy armor",
    promptBrief: "oversized troll-blood recruit fitted into black-flag heavy armor",
    scene:
      "Scene: Oversized troll-blood recruit fitted into black-flag heavy armor, shield wall training ground, disciplined soldiers, iron banners, rain on steel. Composition: cinematic 16:9, disciplined lines and large silhouette, safe margins. Mood: blue gray military fantasy.",
  },
  {
    id: "troll_target_warlock_contract",
    role: "target",
    group: "targets",
    raceId: "troll",
    targetId: "warlock_contract",
    ratio: "16:9",
    file: "troll_target_warlock_contract-preview.webp",
    keyword: "candlelit contract cellar",
    promptBrief: "troll-blood recruit in a candlelit contract cellar",
    scene:
      "Scene: Troll-blood recruit in a candlelit contract cellar, raven-masked scholar, black parchment, wax seals, occult circles, restrained body-horror atmosphere, purple crimson shadows. Composition: cinematic 16:9, contract table and recruit silhouette, safe margins. Mood: sinister but controlled, no explicit gore.",
  },
  {
    id: "troll_target_druid_mutation_circle",
    role: "target",
    group: "targets",
    raceId: "troll",
    targetId: "druid_mutation_circle",
    ratio: "16:9",
    file: "troll_target_druid_mutation_circle-preview.webp",
    keyword: "wild druidic mutation circle",
    promptBrief: "troll-blood recruit inside a wild druidic mutation circle",
    scene:
      "Scene: Troll-blood recruit standing inside a wild druidic mutation circle, roots, bone branches, glowing fungi, moss growing across regenerated scars, green gold forest gloom. Composition: cinematic 16:9, ritual circle and troll silhouette, safe margins. Mood: wild growth and uneasy transformation.",
  },
  {
    id: "troll_physique_01_hammer_test",
    role: "question",
    group: "questions",
    questionId: "troll_physique_1",
    ratio: "16:9",
    file: "troll_physique_01_hammer_test-preview.webp",
    keyword: "guild testing yard",
    promptBrief: "rusty heavy war hammer impact test",
    scene:
      "Scene: Rusty heavy war hammer swinging toward a giant troll-blood recruit's shoulder in a guild testing yard, instructor laughing in background, impact moment, no visible wound, strength and endurance test. Composition: cinematic 16:9 action scene, clear hammer arc and recruit silhouette, safe margins. Mood: rough practical test.",
  },
  {
    id: "troll_physique_02_mire_wagon",
    role: "question",
    group: "questions",
    questionId: "troll_physique_2",
    ratio: "16:9",
    file: "troll_physique_02_mire_wagon-preview.webp",
    keyword: "ore wagon stuck deep",
    promptBrief: "ore wagon stuck in swamp mud",
    scene:
      "Scene: Huge ore wagon stuck deep in swamp mud, dwarves pushing helplessly, troll-blood recruit standing nearby like a living crane, muddy fantasy camp, practical comedy tension. Composition: cinematic 16:9, wagon and recruit scale clearly readable, safe margins. Mood: grounded physical problem with dry humor.",
  },
  {
    id: "troll_physique_03_narrow_passage",
    role: "question",
    group: "questions",
    questionId: "troll_physique_3",
    ratio: "16:9",
    file: "troll_physique_03_narrow_passage-preview.webp",
    keyword: "goblin-sized spiked stone doorway",
    promptBrief: "troll recruit facing a tiny spiked doorway",
    scene:
      "Scene: Giant troll-blood recruit facing a tiny goblin-sized spiked stone doorway above a fragile floor and dark pit, exaggerated scale problem, dungeon hazard test. Composition: cinematic 16:9, doorway scale contrast centered, safe margins. Mood: tense dungeon logistics.",
  },
  {
    id: "troll_physique_04_regeneration_cost",
    role: "question",
    group: "questions",
    questionId: "troll_physique_4",
    ratio: "16:9",
    file: "troll_physique_04_regeneration_cost-preview.webp",
    keyword: "empty food bowls",
    promptBrief: "regeneration has a cost",
    scene:
      "Scene: Troll-blood recruit sitting in a rough guild infirmary after a brutal training trial, faint green restorative magic fading around old armor scratches, empty food bowls and tired posture, regeneration has a cost, no visible wound. Composition: cinematic 16:9, exhausted large figure in rough guild infirmary, safe margins. Mood: weary cost of survival.",
  },
  {
    id: "troll_physique_05_tavern_stares",
    role: "question",
    group: "questions",
    questionId: "troll_physique_5",
    ratio: "16:9",
    file: "troll_physique_05_tavern_stares-preview.webp",
    keyword: "oversized mug",
    promptBrief: "troll recruit awkward in a small town tavern",
    scene:
      "Scene: Troll-blood recruit sitting awkwardly in a small town tavern, terrified patrons fleeing, bartender placing an oversized mug with trembling hands, social pressure and monster silhouette. Composition: cinematic 16:9, clear tavern scale and reactions, safe margins. Mood: uncomfortable social comedy, not cartoonish.",
  },
  {
    id: "troll_ending_accepted",
    role: "ending",
    group: "endings",
    raceId: "troll",
    endingType: "accepted",
    ratio: "16:9",
    file: "troll_ending_accepted-preview.webp",
    keyword: "official acceptance contract",
    promptBrief: "guild officer stamping acceptance",
    scene:
      "Scene: Guild officer stamping an official acceptance contract for a troll-blood recruit, torchlit cheers, weapon and class insignia on the table, triumphant but rough fantasy bureaucracy. Composition: cinematic 16:9 judgement background, stamp and recruit silhouette readable, safe margins. Mood: hard-won acceptance, no readable text.",
  },
  {
    id: "troll_ending_probation",
    role: "ending",
    group: "endings",
    raceId: "troll",
    endingType: "probation",
    ratio: "16:9",
    file: "troll_ending_probation-preview.webp",
    keyword: "temporary mercenary tag",
    promptBrief: "troll recruit receiving a temporary mercenary tag",
    scene:
      "Scene: Troll-blood recruit receiving a temporary mercenary tag from a cautious guild clerk, half-open gate, suspicious guards, useful but not trusted, muted amber light. Composition: cinematic 16:9 judgement background, tag and guarded doorway readable, safe margins. Mood: provisional trust.",
  },
  {
    id: "troll_ending_transferred",
    role: "ending",
    group: "endings",
    raceId: "troll",
    endingType: "transferred",
    ratio: "16:9",
    file: "troll_ending_transferred-preview.webp",
    keyword: "multiple faction banners",
    promptBrief: "recruitment officer redirecting troll recruit",
    scene:
      "Scene: Recruitment officer redirecting a troll-blood recruit from one department door to another, multiple faction banners, confusing parchment files, destiny rerouted. Composition: cinematic 16:9, directional doors and paperwork, safe margins. Mood: bureaucratic rerouting in fantasy guild.",
  },
  {
    id: "troll_ending_blacklisted",
    role: "ending",
    group: "endings",
    raceId: "troll",
    endingType: "blacklisted",
    ratio: "16:9",
    file: "troll_ending_blacklisted-preview.webp",
    keyword: "black wax seal",
    promptBrief: "guild blacklist ledger closing",
    scene:
      "Scene: A dark guild blacklist ledger being closed while a troll-blood silhouette leaves toward a back alley, black wax seal, dangerous underground offers implied, no execution, no gore. Composition: cinematic 16:9 judgement background, ledger foreground and leaving silhouette, safe margins. Mood: ominous rejection.",
  },
  {
    id: "troll_ending_absurdAccepted",
    role: "ending",
    group: "endings",
    raceId: "troll",
    endingType: "absurdAccepted",
    ratio: "16:9",
    file: "troll_ending_absurdAccepted-preview.webp",
    keyword: "exhausted clerks",
    promptBrief: "absurd trial success in chaotic guild office",
    scene:
      "Scene: Chaotic fantasy guild office after an absurd trial success, exhausted clerks, troll-blood recruit accidentally blocking a doorway while everyone reluctantly stamps approval, black humor. Composition: cinematic 16:9, cluttered office but readable silhouettes, safe margins. Mood: dry absurd victory, not slapstick.",
  },
];

const RACE_TARGET_VISUALS = {
  human: {
    name: "human",
    marker: "green travel cloak and mixed adventuring kit",
    anchor: "An adaptable adult human recruit wearing a practical deep-green travel cloak, layered brown leather, a mixed field kit and a plain guild token; grounded proportions and an alert pragmatic expression.",
  },
  elf: {
    name: "elf",
    marker: "silver green leaf armor and moonlit profile",
    anchor: "A tall slender adult elf recruit with clearly pointed ears, silver-green leaf-pattern armor, pale moonlit fabric and restrained ancient elegance; precise posture and long-lived calm.",
  },
  dwarf: {
    name: "dwarf",
    marker: "braided beard and glowing clan runes",
    anchor: "A short broad adult dwarf recruit with a heavy braided beard, forge-black plate, thick boots, a compact center of gravity and glowing clan runes worked into metal tools.",
  },
  halfling: {
    name: "halfling",
    marker: "russet cloak lucky charm and low eye line",
    anchor: "A small middle-aged adult halfling recruit with a weathered mature face, visible age lines, adult facial proportions, russet traveling cloak, lucky charm, compact cooking kit and a noticeably low eye line against oversized guild furniture.",
  },
  half_orc: {
    name: "half-orc",
    marker: "cracked tusk and frontier weapon harness",
    anchor: "A powerful adult half-orc recruit with olive-gray skin, one cracked tusk, practical frontier weapon harness, resilient scars without gore and a direct disciplined stance.",
  },
  tiefling: {
    name: "tiefling",
    marker: "swept horns ember marks and tailored dark leather",
    anchor: "An adult tiefling recruit with swept horns, ember-red skin, subtle glowing infernal markings and tailored dark leather; proud controlled posture, never oversexualized.",
  },
  dragonborn: {
    name: "dragonborn",
    marker: "bronze scales clan tabard and breath glow",
    anchor: "An adult dragonborn recruit with an unmistakable draconic head, bronze-crimson scales, clan tabard, heavy clawed hands and a faint elemental breath glow; ceremonial dignity.",
  },
  ogre_giant: {
    name: "ogre or giant-blood",
    marker: "towering frame heavy pack and undersized doorway",
    anchor: "A towering adult ogre-blood or giant-blood recruit with massive shoulders, weathered heavy pack, thick worn leather and obvious scale contrast against undersized guild doors and furniture; imposing but intelligent.",
  },
};

const GUILD_TARGET_VISUALS = {
  guild_fighter: {
    name: "fighter training hall",
    marker: "shield wall yard and rain-dark weapon racks",
    scene: "a disciplined shield-wall training yard with rain-dark weapon racks, black iron shields, tactical sand tables and blue-gray military light",
  },
  guild_bard: {
    name: "bard liaison office",
    marker: "sealed dispatches instruments and burgundy banners",
    scene: "a guild liaison and morale office with sealed dispatches, regional maps, practical instruments, burgundy banners and a negotiation table",
  },
  guild_artificer: {
    name: "artificer workshop",
    marker: "brass gears alchemy bench and teal sparks",
    scene: "a crowded but readable artificer workshop with brass gears, alchemy bench, half-built field devices, ochre forge light and restrained teal sparks",
  },
  guild_paladin: {
    name: "paladin oath hall",
    marker: "oath shields candle aisle and blue gold light",
    scene: "a solemn oath review hall with upright shields, witness benches, a candle aisle, blue-and-gold heraldry and an open ceremonial ledger",
  },
  guild_ranger: {
    name: "ranger border station",
    marker: "tracking maps bow racks and wet pine doorway",
    scene: "a frontier ranger station with tracking maps, bow racks, weathered trail markers, hanging herbs and an open doorway onto wet pine forest",
  },
  guild_wizard: {
    name: "wizard archive",
    marker: "rune folios astrolabe and cold blue lamplight",
    scene: "a wizard tower archive with rune folios, astrolabe, stacked spell cases, chalk geometry and controlled cold blue lamplight",
  },
  guild_druid: {
    name: "druid advisory circle",
    marker: "living roots herb tables and green gold mist",
    scene: "a natural advisory courtyard where living roots cross stone, herb tables surround a seasonal map and green-gold mist filters through antler charms",
  },
  guild_rogue: {
    name: "rogue scout office",
    marker: "lock bench shadow routes and amber slit light",
    scene: "a scout and mechanisms office with a lock-testing bench, pinned shadow routes, rope tools, false doors and narrow amber slit light",
  },
  guild_cleric: {
    name: "cleric field ward",
    marker: "field cots holy symbols and amber cyan lanterns",
    scene: "a field medical ward with sturdy cots, holy symbols, herb cabinets, wash basins and amber-cyan lanterns prepared for battlefield triage",
  },
  guild_warlock: {
    name: "warlock contract archive",
    marker: "black parchment wax seals and violet crimson cellar",
    scene: "an abnormal contract archive with black parchment, wax seals, chained folios, a cautious witness desk and controlled violet-crimson cellar light",
  },
  guild_barbarian: {
    name: "barbarian breach camp",
    marker: "battering ram breach gate and red fire banners",
    scene: "a breach-vanguard camp with a battered practice gate, compact battering ram, split training posts, red fire banners and blackened iron tools",
  },
  guild_sorcerer: {
    name: "sorcerer bloodline hall",
    marker: "bloodline mirrors floating embers and crimson violet arcs",
    scene: "a bloodline magic hall with ancestry mirrors, scorched practice rings, floating embers and unstable but contained crimson-violet spell arcs",
  },
};

const RACE_TARGET_ROUTES = {
  human: ["guild_fighter", "guild_bard", "guild_artificer", "guild_paladin"],
  elf: ["guild_ranger", "guild_wizard", "guild_druid", "guild_rogue"],
  dwarf: ["guild_fighter", "guild_paladin", "guild_cleric", "guild_artificer"],
  halfling: ["guild_rogue", "guild_bard", "guild_ranger", "guild_warlock"],
  half_orc: ["guild_barbarian", "guild_fighter", "guild_rogue", "guild_cleric"],
  tiefling: ["guild_warlock", "guild_rogue", "guild_bard", "guild_sorcerer"],
  dragonborn: ["guild_paladin", "guild_fighter", "guild_sorcerer", "guild_barbarian"],
  ogre_giant: ["guild_barbarian", "guild_fighter", "guild_cleric", "guild_druid"],
};

const raceTargetAssets = Object.entries(RACE_TARGET_ROUTES).flatMap(([raceId, targetIds]) =>
  targetIds.map((targetId) => {
    const race = RACE_TARGET_VISUALS[raceId];
    const route = GUILD_TARGET_VISUALS[targetId];
    const shortTarget = targetId.replace(/^guild_/, "");
    const keyword = `${race.marker} ${route.marker}`;
    return {
      id: `race_${raceId}_target_${shortTarget}`,
      role: "target",
      group: "targets",
      raceId,
      targetId,
      ratio: "16:9",
      file: `race_${raceId}_target_${shortTarget}-preview.webp`,
      keyword,
      promptBrief: `${race.name} recruit at the ${route.name}`,
      scene: `Visual anchor: ${keyword}. Scene: ${race.anchor} The recruit is being evaluated inside ${route.scene}. Composition: horizontal 16:9 guild dossier card, environment occupies at least two thirds of the image, medium-wide view, the recruit remains off-center and never exceeds one third of the frame, profession tools and architecture are clearly readable, safe margins for UI cropping. Mood: immersive, serious, tactile dark fantasy; preserve the race's culture and physical scale rather than using a generic human silhouette.`,
    };
  }),
);

const genericEndingAssets = [
  {
    id: "guild_ending_accepted",
    role: "ending",
    group: "endings",
    raceId: "guild",
    endingType: "accepted",
    ratio: "16:9",
    file: "guild_ending_accepted-preview.webp",
    keyword: "gold wax acceptance seal and open guild gate",
    promptBrief: "formal guild acceptance verdict",
    scene: "Visual anchor: gold wax acceptance seal and open guild gate. Scene: A formal fantasy guild verdict desk with an approved parchment, gold wax seal, iron badge and an open gate toward a torchlit expedition courtyard; diverse recruit silhouettes remain small in the distance. Composition: 16:9 environment-first verdict card, strong central document and safe margins. Mood: earned formal acceptance, restrained triumph.",
  },
  {
    id: "guild_ending_probation",
    role: "ending",
    group: "endings",
    raceId: "guild",
    endingType: "probation",
    ratio: "16:9",
    file: "guild_ending_probation-preview.webp",
    keyword: "temporary iron tag and amber observation ledger",
    promptBrief: "guild probation verdict",
    scene: "Visual anchor: temporary iron tag and amber observation ledger. Scene: A cautious guild clerk issues a temporary iron tag beside an amber observation ledger, stacked trial reports and a half-open side gate. Composition: 16:9 environment-first verdict card, bureaucracy props dominate, small recruit silhouette, safe margins. Mood: conditional opportunity under scrutiny.",
  },
  {
    id: "guild_ending_transferred",
    role: "ending",
    group: "endings",
    raceId: "guild",
    endingType: "transferred",
    ratio: "16:9",
    file: "guild_ending_transferred-preview.webp",
    keyword: "crossed route ribbons and redirected sealed dossier",
    promptBrief: "guild transfer verdict",
    scene: "Visual anchor: crossed route ribbons and redirected sealed dossier. Scene: A fantasy recruitment officer slides a sealed dossier from one guild emblem toward another across a route map, with two differently lit corridors beyond. Composition: 16:9 environment-first verdict card, strong diagonal transfer motion, no readable text, safe margins. Mood: surprising but constructive redirection.",
  },
  {
    id: "guild_ending_blacklisted",
    role: "ending",
    group: "endings",
    raceId: "guild",
    endingType: "blacklisted",
    ratio: "16:9",
    file: "guild_ending_blacklisted-preview.webp",
    keyword: "black wax refusal seal and barred archive drawer",
    promptBrief: "guild blacklist verdict",
    scene: "Visual anchor: black wax refusal seal and barred archive drawer. Scene: A dark guild ledger is locked into an iron archive drawer with a black wax seal while a distant recruit silhouette exits toward a rain-dark alley; no punishment or violence. Composition: 16:9 environment-first verdict card, ledger foreground, safe margins. Mood: ominous refusal with future underground possibilities.",
  },
  {
    id: "guild_ending_absurdAccepted",
    role: "ending",
    group: "endings",
    raceId: "guild",
    endingType: "absurdAccepted",
    ratio: "16:9",
    file: "guild_ending_absurdAccepted-preview.webp",
    keyword: "crooked approval stamp and exhausted guild clerks",
    promptBrief: "absurd guild acceptance verdict",
    scene: "Visual anchor: crooked approval stamp and exhausted guild clerks. Scene: A chaotic but grounded fantasy guild office where an improbable trial result has been approved, crooked wax stamp, displaced equipment, exhausted clerks and one small triumphant recruit silhouette. Composition: 16:9 environment-first verdict card, readable controlled clutter, safe margins. Mood: dry black-humor victory, never slapstick.",
  },
];

ASSETS.push(...raceTargetAssets, ...genericEndingAssets);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bridge(action, args = {}) {
  const response = await fetch(BRIDGE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, args, session: SESSION }),
  });
  const json = await response.json();
  if (!(json.ok === true || json.success === true)) {
    throw new Error(`${action} failed: ${JSON.stringify(json).slice(0, 900)}`);
  }
  return json;
}

async function evalPage(code) {
  const json = await bridge("evaluate", { code });
  const value = json?.data?.value;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function seriesMarkerFor(asset) {
  if ((asset.group === "targets" && asset.raceId !== "troll") || (asset.group === "endings" && asset.raceId === "guild")) {
    return "cohesive recruitment card series";
  }
  return asset.group === "races" ? "portrait-orientation 2:3 canvas" : "cohesive recruitment asset series";
}

function outputRatioFor(asset) {
  return asset.group === "races" ? "2:3" : asset.ratio;
}

function normalizeRaceScene(scene) {
  return String(scene || "")
    .replace(/^Scene:\s*/i, "")
    .replace(/\s*Composition:[^.]*\./gi, "")
    .replace(/\s*Mood:\s*/gi, " ")
    .replace(/\b4:5\b/g, "2:3")
    .replace(/\s+/g, " ")
    .trim();
}

function promptFor(asset) {
  if (asset.group === "races") {
    return `${RACE_CARD_STYLE_PREFIX} ${normalizeRaceScene(asset.scene)} ${RACE_CARD_NEGATIVE_SUFFIX}`;
  }
  if (asset.group === "targets" && asset.raceId !== "troll") {
    return `${TARGET_CARD_STYLE_PREFIX} ${asset.scene} ${TARGET_CARD_NEGATIVE_SUFFIX}`;
  }
  if (asset.group === "endings" && asset.raceId === "guild") {
    return `${ENDING_CARD_STYLE_PREFIX} ${asset.scene} ${TARGET_CARD_NEGATIVE_SUFFIX}`;
  }
  return `${STYLE_PREFIX} ${asset.scene} ${NEGATIVE_SUFFIX}`;
}

async function ensurePage() {
  const status = await evalPage(`(()=>JSON.stringify({ok:true,title:document.title,url:location.href,hasEditor:!!document.querySelector('[contenteditable="true"]')}))()`).catch(() => null);
  if (status?.hasEditor && String(status.url || "").includes("img.codexbuy.com")) return status;
  await bridge("navigate", { url: "https://img.codexbuy.com/", newTab: true, group_title: SESSION });
  await sleep(2500);
  return evalPage(`(()=>JSON.stringify({ok:true,title:document.title,url:location.href,hasEditor:!!document.querySelector('[contenteditable="true"]')}))()`);
}

async function ensureAutoSize() {
  const current = await evalPage(`(()=>{const isSize=t=>t==='auto'||t.includes('1024')||t.includes('1536')||t.includes('768')||t.includes('×')||t.includes('Ã'); const buttons=[...document.querySelectorAll('button')].map(b=>{const r=b.getBoundingClientRect(); const text=(b.innerText||b.textContent||'').trim(); return {text,x:r.x,y:r.y,w:r.width,h:r.height};}); const candidates=buttons.filter(b=>(innerHeight===0||b.y>innerHeight*0.45)&&(innerWidth===0||b.x<innerWidth*0.70)&&b.h>15&&isSize(b.text)).sort((a,b)=>b.y-a.y||b.x-a.x); const anyAuto=buttons.some(b=>b.text==='auto'); return JSON.stringify({ok:true,current:candidates[0]||null,anyAuto,viewport:{w:innerWidth,h:innerHeight},buttons:buttons.filter(b=>isSize(b.text)).slice(0,8)});})()`);
  if (current.current?.text === "auto" || current.anyAuto) return current;
  const opened = await evalPage(`(()=>{const isSize=t=>t==='auto'||t.includes('1024')||t.includes('1536')||t.includes('768')||t.includes('×')||t.includes('Ã'); const buttons=[...document.querySelectorAll('button')].map(b=>{const r=b.getBoundingClientRect(); return {el:b,text:(b.innerText||b.textContent||'').trim(),x:r.x,y:r.y,w:r.width,h:r.height};}); const btn=buttons.filter(b=>(innerHeight===0||b.y>innerHeight*0.45)&&(innerWidth===0||b.x<innerWidth*0.70)&&b.h>15&&isSize(b.text)).sort((a,b)=>b.y-a.y||b.x-a.x)[0]?.el; if(!btn)return JSON.stringify({ok:false,reason:'size button not found'}); btn.click(); return JSON.stringify({ok:true});})()`);
  if (!opened.ok) throw new Error(opened.reason);
  await sleep(500);
  const selected = await evalPage(`(()=>{const auto=[...document.querySelectorAll('button')].find(b=>{const t=((b.innerText||b.textContent||'').trim()); return t.includes('自动')||t.includes('èªå¨');}); if(!auto)return JSON.stringify({ok:false,reason:'auto tab not found'}); auto.click(); setTimeout(()=>{const c=[...document.querySelectorAll('button')].find(b=>{const t=((b.innerText||b.textContent||'').trim()); return t.includes('确定')||t.includes('ç¡®å®');}); if(c)c.click();},120); return JSON.stringify({ok:true});})()`);
  if (!selected.ok) throw new Error(selected.reason);
  await sleep(800);
  const verified = await evalPage(`(()=>{const isSize=t=>t==='auto'||t.includes('1024')||t.includes('1536')||t.includes('768')||t.includes('×')||t.includes('Ã'); const buttons=[...document.querySelectorAll('button')].map(b=>{const r=b.getBoundingClientRect(); const text=(b.innerText||b.textContent||'').trim(); return {text,x:r.x,y:r.y,w:r.width,h:r.height};}); const candidates=buttons.filter(b=>(innerHeight===0||b.y>innerHeight*0.45)&&(innerWidth===0||b.x<innerWidth*0.70)&&b.h>15&&isSize(b.text)).sort((a,b)=>b.y-a.y||b.x-a.x); const anyAuto=buttons.some(b=>b.text==='auto'); return JSON.stringify({ok:candidates[0]?.text==='auto'||anyAuto,current:candidates[0]||null,anyAuto});})()`);
  if (!verified.ok) throw new Error("size:auto verification failed");
  return verified;
}

async function fillPrompt(asset, prompt) {
  await bridge("fill", { selector: '[contenteditable="true"]', value: prompt });
  await sleep(300);
  const seriesMarker = seriesMarkerFor(asset);
  const verification = await evalPage(`(()=>{const text=(document.querySelector('[contenteditable="true"]')?.innerText)||''; return JSON.stringify({ok:text.includes(${JSON.stringify(asset.keyword)})&&text.includes(${JSON.stringify(seriesMarker)})&&text.includes('No text'),length:text.length,start:text.slice(0,120)});})()`);
  if (!verification.ok) throw new Error(`prompt injection failed: ${JSON.stringify(verification)}`);
  return verification;
}

async function clickGenerate() {
  await evalPage(`(()=>{const original=window.__recruitmentOriginalFetch||window.fetch.bind(window);window.__recruitmentOriginalFetch=original;window.__recruitmentRequests=[];window.fetch=async(...args)=>{let record=null;try{const input=args[0];const init=args[1]||{};const url=typeof input==='string'?input:(input&&input.url)||'';if(String(url).includes('/v1/images/generations')){let body='';if(typeof init.body==='string')body=init.body;record={url:String(url),body:body.slice(0,4000),time:Date.now()};window.__recruitmentRequests.push(record);}}catch(e){} const response=await original(...args); if(record){try{record.status=response.status;record.ok=response.ok;record.statusText=response.statusText;response.clone().text().then(text=>{record.responseText=String(text||'').slice(0,2000);}).catch(()=>{});}catch(e){record.responseError=String(e&&e.message||e);}} return response;};return JSON.stringify({ok:true});})()`);
  const clicked = await evalPage(`(()=>{const btn=[...document.querySelectorAll('button')].reverse().find(b=>(((b.innerText||b.textContent||'')+(b.getAttribute('aria-label')||'')).includes('生成图像'))||(((b.innerText||b.textContent||'')+(b.getAttribute('aria-label')||'')).includes('çæå¾å'))); if(!btn)return JSON.stringify({ok:false,reason:'generate button not found'}); if(btn.disabled||btn.getAttribute('aria-disabled')==='true')return JSON.stringify({ok:false,reason:'generate button disabled'}); btn.click(); return JSON.stringify({ok:true});})()`);
  if (!clicked.ok) throw new Error(clicked.reason);
  let request = null;
  for (let attempt = 0; attempt < 12; attempt += 1) {
    await sleep(500);
    request = await evalPage(`(()=>{const req=(window.__recruitmentRequests||[])[0]; if(!req)return JSON.stringify({ok:false,reason:'generation request not captured'}); let parsed=null; try{parsed=JSON.parse(req.body)}catch(e){}; if(!parsed)return JSON.stringify({ok:false,reason:'request body was not JSON'}); return JSON.stringify({ok:true,size:parsed.size,quality:parsed.quality,n:parsed.n,promptPrefix:String(parsed.prompt||'').slice(0,100)});})()`);
    if (request.ok) break;
  }
  if (request.ok && request.size !== "auto") {
    throw new Error(`request verification failed: ${JSON.stringify(request)}`);
  }
  if (!request.ok) {
    console.warn(`[generation] request capture unavailable; continuing with verified size:auto and task-card matching (${request.reason})`);
  }
  return clicked;
}

async function waitForPreview(asset) {
  const started = Date.now();
  const seriesMarker = seriesMarkerFor(asset);
  let last = null;
  while (Date.now() - started < 260000) {
    last = await evalPage(`(()=>{const keyword=${JSON.stringify(asset.keyword)}; const series=${JSON.stringify(seriesMarker)}; const cards=[...document.querySelectorAll('.task-card-wrapper')]; const candidates=cards.map((card,index)=>{const text=card.innerText||''; const img=card.querySelector('img.saveable-image')||card.querySelector('img'); const src=img?(img.currentSrc||img.src||''):''; return {index,hasKeyword:text.includes(keyword),hasSeries:text.includes(series),failed:text.includes('失败')||text.includes('å¤±è´¥'),hasImg:!!img,complete:img?img.complete:false,srcPrefix:src.slice(0,24),srcLength:src.length,w:img?img.naturalWidth:0,h:img?img.naturalHeight:0,text:text.slice(0,220)};}).filter(x=>x.hasKeyword); const current=candidates[0]||null; const ready=current&&current.hasSeries&&current.hasImg&&current.srcPrefix.startsWith('data:image')&&current.srcLength>1000?current:null; const failed=current&&current.hasSeries&&current.failed&&!current.hasImg?current:null; return JSON.stringify({ok:!!ready,ready,failed,current,candidates:candidates.slice(0,3),count:candidates.length,requests:(window.__recruitmentRequests||[]).slice(-2)});})()`);
    if (last.ok) return last.ready;
    if (last.failed) throw new Error(`generation failed: ${JSON.stringify(last).slice(0, 1500)}`);
    await sleep(8000);
  }
  throw new Error(`timed out waiting for preview: ${JSON.stringify(last)}`);
}

async function extractAndSave(asset) {
  const seriesMarker = seriesMarkerFor(asset);
  const extracted = await evalPage(`(()=>{const keyword=${JSON.stringify(asset.keyword)}; const series=${JSON.stringify(seriesMarker)}; const cards=[...document.querySelectorAll('.task-card-wrapper')]; for (const card of cards) { const text=card.innerText||''; if(!text.includes(keyword)||!text.includes(series)) continue; const img=card.querySelector('img.saveable-image')||card.querySelector('img'); if(!img) continue; const src=img.currentSrc||img.src||''; if(src.startsWith('data:image')) return JSON.stringify({ok:true,src,w:img.naturalWidth||0,h:img.naturalHeight||0,text:text.slice(0,500)}); } return JSON.stringify({ok:false,reason:'no matching current data image'});})()`);
  if (!extracted.ok) throw new Error(extracted.reason || "extract failed");
  const match = extracted.src.match(/^data:(.*?);base64,(.*)$/);
  if (!match) throw new Error("preview image is not a base64 data URL");
  const mime = match[1];
  const ext = mime.includes("webp") ? "webp" : (mime.split("/")[1] || "png");
  const sourceRel = `assets/recruitment/generated/${asset.id}-source.${ext}`;
  const fileRel = `assets/recruitment/generated/${asset.file}`;
  const sourcePath = path.join(ROOT, sourceRel);
  const filePath = path.join(ROOT, fileRel);
  fs.mkdirSync(path.dirname(sourcePath), { recursive: true });
  fs.writeFileSync(sourcePath, Buffer.from(match[2], "base64"));
  const crop = spawnSync(PYTHON, [CROP_SCRIPT, outputRatioFor(asset), sourcePath, filePath], { encoding: "utf8" });
  if (crop.status !== 0) throw new Error(`crop failed: ${crop.stderr || crop.stdout}`);
  return {
    file: fileRel,
    sourceFile: sourceRel,
    sourcePreviewSize: { width: extracted.w, height: extracted.h },
    bytes: fs.statSync(filePath).size,
    sourceBytes: fs.statSync(sourcePath).size,
    format: "webp",
  };
}

function targetSizeForRatio(ratio) {
  if (ratio === "2:3") return { width: 720, height: 1080 };
  if (ratio === "4:5") return { width: 1024, height: 1280 };
  if (ratio === "16:9-home") return { width: 1920, height: 1080 };
  if (ratio === "16:9") return { width: 1536, height: 864 };
  return { width: 768, height: 768 };
}

function readManifest() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    return {
      version: 1,
      updatedAt: new Date().toISOString(),
      role: "race-recruitment-assets",
      baseDir: "assets/recruitment/generated",
      slotCount: ASSETS.length,
      readyCount: 0,
      slots: ASSETS.map((asset) => ({
        id: asset.id,
        role: asset.role,
        status: "pending",
        file: "",
        expectedFile: `assets/recruitment/generated/${asset.file}`,
        ratio: outputRatioFor(asset) === "16:9-home" ? "16:9" : outputRatioFor(asset),
        promptBrief: asset.promptBrief,
      })),
      items: [],
    };
  }
  return JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
}

function writeAssetDataFile(manifest) {
  const data = {
    meta: {
      source: "assets/recruitment/image_manifest.json",
      version: manifest.version || 1,
      updatedAt: manifest.updatedAt || "",
      slotCount: manifest.slotCount || ASSETS.length,
      readyCount: manifest.readyCount || 0,
    },
    ui: {},
    races: {},
    targets: {},
    questions: {},
    endings: {},
    byId: {},
  };

  for (const slot of manifest.slots || []) {
    const asset = ASSETS.find((entry) => entry.id === slot.id) || {};
    const record = {
      id: slot.id,
      role: slot.role || asset.role || "",
      group: slot.group || asset.group || "",
      raceId: slot.raceId || asset.raceId || "",
      targetId: slot.targetId || asset.targetId || "",
      questionId: slot.questionId || asset.questionId || "",
      endingType: slot.endingType || asset.endingType || "",
      status: slot.status || "pending",
      file: slot.file || "",
      sourceFile: slot.sourceFile || "",
      expectedFile: slot.expectedFile || `assets/recruitment/generated/${asset.file || ""}`,
      ratio: slot.ratio || (outputRatioFor(asset) === "16:9-home" ? "16:9" : outputRatioFor(asset) || ""),
      promptBrief: slot.promptBrief || asset.promptBrief || "",
    };
    data.byId[slot.id] = record;
    if (record.status !== "ready" || !record.file) continue;

    if (asset.group === "ui" && asset.key) data.ui[asset.key] = record.file;
    if (asset.group === "races" && asset.raceId) data.races[asset.raceId] = record.file;
    if (asset.group === "targets" && asset.targetId) {
      const targetRaceId = asset.raceId || "guild";
      if (!data.targets[targetRaceId]) data.targets[targetRaceId] = {};
      data.targets[targetRaceId][asset.targetId] = record.file;
    }
    if (asset.group === "questions") {
      data.questions[asset.id] = record.file;
      if (asset.questionId) data.questions[asset.questionId] = record.file;
    }
    if (asset.group === "endings" && asset.endingType) {
      const endingRaceId = asset.raceId || "guild";
      if (!data.endings[endingRaceId]) data.endings[endingRaceId] = {};
      data.endings[endingRaceId][asset.endingType] = record.file;
    }
  }

  fs.mkdirSync(path.dirname(DATA_JS_PATH), { recursive: true });
  fs.writeFileSync(DATA_JS_PATH, `window.RACE_RECRUITMENT_ASSETS = Object.freeze(${JSON.stringify(data, null, 2)});\n`, "utf8");
}

function writeManifest(asset, prompt, saved) {
  const manifest = readManifest();
  manifest.version = 1;
  manifest.updatedAt = new Date().toISOString();
  manifest.role = "race-recruitment-assets";
  manifest.baseDir = "assets/recruitment/generated";
  manifest.slotCount = ASSETS.length;
  manifest.slots = ASSETS.map((entry) => {
    const existing = (manifest.slots || []).find((slot) => slot.id === entry.id) || {};
    const isCurrent = entry.id === asset.id;
    return {
      id: entry.id,
      role: entry.role,
      group: entry.group,
      raceId: entry.raceId || "",
      targetId: entry.targetId || "",
      questionId: entry.questionId || "",
      endingType: entry.endingType || "",
      status: isCurrent ? "ready" : existing.status || "pending",
      file: isCurrent ? saved.file : existing.file || "",
      sourceFile: isCurrent ? saved.sourceFile : existing.sourceFile || "",
      expectedFile: `assets/recruitment/generated/${entry.file}`,
      ratio: outputRatioFor(entry) === "16:9-home" ? "16:9" : outputRatioFor(entry),
      promptBrief: entry.promptBrief,
    };
  });
  const item = {
    id: asset.id,
    role: asset.role,
    group: asset.group,
    raceId: asset.raceId || "",
    targetId: asset.targetId || "",
    questionId: asset.questionId || "",
    endingType: asset.endingType || "",
    file: saved.file,
    sourceFile: saved.sourceFile,
    source: "https://img.codexbuy.com/",
    prompt,
    ratio: outputRatioFor(asset) === "16:9-home" ? "16:9" : outputRatioFor(asset),
    previewSize: targetSizeForRatio(outputRatioFor(asset)),
    sourcePreviewSize: saved.sourcePreviewSize,
    format: saved.format,
    bytes: saved.bytes,
    sourceBytes: saved.sourceBytes,
    generatedAt: new Date().toISOString(),
    review: {
      status: "ready",
      note: "Prompt injection and matching task card were verified; source preview was cropped to the documented UI ratio.",
    },
  };
  manifest.items = (manifest.items || []).filter((entry) => entry.id !== asset.id);
  manifest.items.push(item);
  manifest.items.sort((a, b) => ASSETS.findIndex((asset) => asset.id === a.id) - ASSETS.findIndex((asset) => asset.id === b.id));
  manifest.readyCount = manifest.slots.filter((slot) => slot.status === "ready" && slot.file).length;
  fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });
  fs.writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  writeAssetDataFile(manifest);
  return { readyCount: manifest.readyCount, slotCount: manifest.slotCount };
}

async function main() {
  const id = process.argv[2];
  if (!id) throw new Error(`Usage: node ${path.basename(__filename)} <asset-id>`);
  const asset = ASSETS.find((entry) => entry.id === id);
  if (!asset) throw new Error(`Unknown asset id: ${id}`);
  const extractExistingOnly = process.argv.includes("--extract-existing");
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const prompt = promptFor(asset);
  console.log(`[${asset.id}] open page`);
  await ensurePage();
  if (extractExistingOnly) {
    console.log(`[${asset.id}] extract existing matching task`);
    const ready = await waitForPreview(asset);
    console.log(`[${asset.id}] task card verified ${ready.w}x${ready.h || "unknown"} srcLength=${ready.srcLength || "unknown"}`);
    const saved = await extractAndSave(asset);
    const manifest = writeManifest(asset, prompt, saved);
    console.log(`[${asset.id}] saved ${saved.file} bytes=${saved.bytes}`);
    console.log(`[${asset.id}] manifest ready ${manifest.readyCount}/${manifest.slotCount}`);
    return;
  }
  console.log(`[${asset.id}] ensure size:auto`);
  await ensureAutoSize();
  console.log(`[${asset.id}] fill prompt`);
  const verification = await fillPrompt(asset, prompt);
  console.log(`[${asset.id}] prompt verified length=${verification.length} keyword="${asset.keyword}"`);
  console.log(`[${asset.id}] generate`);
  await clickGenerate();
  const ready = await waitForPreview(asset);
  console.log(`[${asset.id}] task card verified ${ready.w}x${ready.h}`);
  const saved = await extractAndSave(asset);
  const manifest = writeManifest(asset, prompt, saved);
  console.log(`[${asset.id}] saved ${saved.file} bytes=${saved.bytes}`);
  console.log(`[${asset.id}] manifest ready ${manifest.readyCount}/${manifest.slotCount}`);
}

main().catch((error) => {
  console.error(error.stack || error.message || String(error));
  process.exit(1);
});
