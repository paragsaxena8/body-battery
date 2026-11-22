/**
 * 1. VERBATIM ASSESSMENT STATEMENTS & TIER GUIDANCE
 */
const ASSESSMENT_STATEMENTS = [
  { id: 0, text: "I slept very well last night.", source: "Physical" },
  {
    id: 1,
    text: "I have clear, purposeful intentions for the day.",
    source: "Spiritual",
  },
  {
    id: 2,
    text: "I am looking forward to the day’s activities.",
    source: "Mental and emotional",
  },
  { id: 3, text: "I am optimistic about my future.", source: "Spiritual" },
  { id: 4, text: "I feel vigorous and energetic.", source: "Physical" },
  { id: 5, text: "My diet is healthy and well-balanced.", source: "Physical" },
  {
    id: 6,
    text: "I am experiencing very little fatigue or burnout.",
    source: "Mental and emotional",
  },
  {
    id: 7,
    text: "I can focus on the things that matter most.",
    source: "Mental and emotional",
  },
  {
    id: 8,
    text: "I feel connected to the important people in my life.",
    source: "Social",
  },
];

const SUGGESTED_FOCUS_BULLETS = [
  "How to tap into your sources of well-being: physical, mental & emotional, social, and spiritual",
  "Specific practices that stand out to you and are worth turning into habits",
  "The impact a “full battery” could have on your life",
];

function getTierDetails(score) {
  if (score <= 3) {
    return {
      range: "0–3",
      title: "Your battery is empty",
      commentary:
        "Regularly charging your battery —and maintaining its charge, would benefit all areas of your life.",
      cellColor: "bg-rose-500",
      badgeClass: "bg-rose-500/15 text-rose-700 dark:text-rose-300",
    };
  }
  if (score <= 5) {
    return {
      range: "4–5",
      title: "Your battery charge is running low and needs attention",
      commentary:
        "You have some well-being charge left, but it would be better to have more. Regularly charging your battery —and maintaining its charge, would benefit all areas of your life.",
      cellColor: "bg-amber-500",
      badgeClass: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
    };
  }
  if (score <= 7) {
    return {
      range: "6–7",
      title: "You would benefit from extra charge to your battery",
      commentary:
        "Your well-being battery is charged, but take a look—is there one category where you scored lower than others? Research shows we need a balance of all four areas for optimal well-being. Maintaining this level of well-being is real work, but it is worth it!",
      cellColor: "bg-sky-500",
      badgeClass: "bg-sky-500/15 text-sky-700 dark:text-sky-300",
    };
  }
  return {
    range: "8–9",
    title: "Your battery is fully charged",
    commentary:
      "Right now, you are moving through life with a fully charged battery—which is great! You are starting from a good place, but there are times when you might find it difficult to maintain this level.",
    cellColor: "bg-emerald-500",
    badgeClass: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  };
}

/**
 * 2. COMPLETE VERBATIM "INGREDIENTS OF WELL-BEING" CURRICULUM
 */
const WELLBEING_INGREDIENTS = {
  Physical: [
    {
      topic: "Sleep",
      individual: [
        "Set a daily cutoff time for work or screen time and aim to go to sleep at the same time each day.",
        "Aim for 7 to 8 hours of sleep.",
        "Create a ritual to help you power down for the day (e.g., light reading before sleep).",
      ],
      team: [
        "Commit to no calls or emails in the early mornings, evenings, or on weekends.",
      ],
    },
    {
      topic: "Exercise",
      individual: [
        "Maintain or increase your weekly exercise goals.",
        "Use spontaneous opportunities to move (e.g., a last-minute meeting cancellation).",
        "Take stretching breaks.",
      ],
      team: [
        "Aim to have a few meetings each week during which team members do not need to be on their laptop or video and can move around instead.",
        "Hold each other accountable for pursuing personal fitness goals. Share and discuss these during weekly check-in meetings.",
      ],
    },
    {
      topic: "Nutrition",
      individual: [
        "Start with a small goal (e.g., no sugary drinks) and build your way up.",
        "Modulate your daily food intake with your level of activity.",
        "Stay hydrated.",
      ],
      team: [
        "Block time on the team calendar for lunch every day and do not set up any meetings during this time. You can also use it as social time.",
      ],
    },
  ],
  "Mental and emotional": [
    {
      topic: "Hobbies",
      individual: [
        "Block time for your hobbies ahead of time and on a recurring basis—solo or in groups.",
      ],
      team: [
        "Hold each other accountable for pursuing hobbies and personal goals. Share and discuss these during weekly check-in meetings.",
      ],
    },
    {
      topic: "Meditation",
      individual: [
        "Commit to a habit of daily meditation. Set aside time, however little, and stick with it even if it takes time to see results.",
      ],
      team: [
        "Block time daily for a short team meditation and invite the full team.",
      ],
    },
    {
      topic: "Focus",
      individual: [
        "Focus on one task at a time.",
        "Address the distractions that lead to multitasking (e.g., put your phone away at the start of meetings or family dinners, shut off your email notifications).",
      ],
      team: [
        "Set norms as a team for how you will interact during meetings (e.g., we all avoid email).",
      ],
    },
    {
      topic: "Introspection",
      individual: [
        "Consider journaling or other ways to express and process your inner thoughts.",
      ],
      team: [
        'Set up ”team reflection" time once a month, with the full team, to reflect on meaning (or challenges) from your ongoing effort.',
      ],
    },
  ],
  Social: [
    {
      topic: "Relationships",
      individual: [
        "Prioritize human connections.",
        "Spend quality time daily with at least one person who is important to you.",
        "Pick an activity to do with a friend.",
        "Bring attention, vulnerability, empathy, and compassion to your relationships.",
      ],
      team: [
        "Build time and space into your meetings for meaningful human connections (e.g., on Friday, ask about weekend plans).",
        "Take advantage of informal opportunities to strengthen your relationships (e.g., virtual team event).",
      ],
    },
    {
      topic: "Societal role",
      individual: [
        "Define your personal values.",
        "Align your priorities with your purpose and values.",
        "During moments of low energy, reflect on your purpose to remind yourself of what truly matters to you.",
        "Get more involved in your local community.",
      ],
      team: [
        "Have a conversation about your team’s shared values and purpose.",
        "If possible, volunteer as a team or support a cause together.",
      ],
    },
  ],
  Spiritual: [
    {
      topic: "Professional calling",
      individual: [
        "Reflect regularly on your work contributions and how they connect to your purpose.",
      ],
      team: [
        "Reflect regularly on the potential or ongoing impact of your team’s work, and what that work means—to each of you individually, to the team’s purpose, and to the organization.",
      ],
    },
    {
      topic: "Spiritual connection",
      individual: [
        "Begin each day with positive affirmations.",
        "Express gratitude for life’s little gifts.",
      ],
      team: [
        "Start or end meetings with a sign of gratitude, a positive affirmation, and/or a celebration.",
      ],
    },
  ],
};

/**
 * 3. APPLICATION STATE & SILENT IP-SCOPED INDEXEDDB STORAGE
 */
const DB_NAME = "BodyBatteryDB";
const DB_VERSION = 2;
const STORE_NAME = "checkins";
const THEME_STORAGE_KEY = "bb_journal_theme_v2";
const PINNED_STORAGE_KEY = "bb_pinned_habits_v2";

let dbInstance = null;
let profileScopeKey = "default-device";
let allCheckins = [];
let selectedDateKey = getTodayDateKey();
let draftAnswers = new Array(9).fill(false);
let activeIngredientSource = "Physical";
let pinnedPractices = [];
let deferredInstallPrompt = null;

function getTodayDateKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatReadableDate(dateKey) {
  const today = getTodayDateKey();
  if (dateKey === today) return "Today";
  const [y, m, d] = dateKey.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

// Silent background scope detection (never displayed to user)
async function resolveProfileScopeSilently() {
  const endpoints = [
    "https://api.ipify.org?format=json",
    "https://api64.ipify.org?format=json",
  ];
  for (const url of endpoints) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 2200);
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timer);
      if (res.ok) {
        const data = await res.json();
        if (data && data.ip) {
          localStorage.setItem("bb_cached_scope", data.ip);
          return data.ip;
        }
      }
    } catch (_) {}
  }
  return localStorage.getItem("bb_cached_scope") || "local-journal-profile";
}

function openIndexedDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (event) => {
      const db = event.target.result;
      const store = db.objectStoreNames.contains(STORE_NAME)
        ? req.transaction.objectStore(STORE_NAME)
        : db.createObjectStore(STORE_NAME, {
          keyPath: ["ip", "dateKey"],
        });
      if (!store.indexNames.contains("by_ip")) {
        store.createIndex("by_ip", "ip", { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function loadCheckinsForProfile() {
  if (!dbInstance) return [];
  return new Promise((resolve) => {
    try {
      const tx = dbInstance.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const index = store.index("by_ip");
      const req = index.getAll(profileScopeKey);
      req.onsuccess = () => {
        const rows = (req.result || []).sort((a, b) =>
          b.dateKey.localeCompare(a.dateKey),
        );
        resolve(rows);
      };
      req.onerror = () => resolve([]);
    } catch (_) {
      resolve([]);
    }
  });
}

async function saveCheckinRecord(record) {
  if (!dbInstance) return;
  return new Promise((resolve, reject) => {
    const tx = dbInstance.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const req = store.put(record);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

/**
 * 4. DARK / LIGHT THEME MANAGEMENT
 */
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;
  applyTheme(shouldBeDark);
}

function applyTheme(isDark) {
  const htmlEl = document.documentElement;
  const themeMeta = document.getElementById("theme-color-meta");
  const labelEl = document.getElementById("theme-toggle-label");

  if (isDark) {
    htmlEl.classList.add("dark");
    if (themeMeta) themeMeta.setAttribute("content", "#121214");
    if (labelEl) labelEl.textContent = "Light";
  } else {
    htmlEl.classList.remove("dark");
    if (themeMeta) themeMeta.setAttribute("content", "#F7F6F2");
    if (labelEl) labelEl.textContent = "Dark";
  }
}

function toggleTheme() {
  const isCurrentlyDark = document.documentElement.classList.contains("dark");
  const nextDark = !isCurrentlyDark;
  localStorage.setItem(THEME_STORAGE_KEY, nextDark ? "dark" : "light");
  applyTheme(nextDark);
}

/**
 * 5. PWA INSTALLATION & ONLINE STATUS
 */
function setupPWA() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("Service worker registration failed:", error);
    });
  }

  // Listen for browser native install prompt
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    const btn = document.getElementById("install-app-btn");
    if (btn) btn.classList.remove("hidden");
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    const btn = document.getElementById("install-app-btn");
    if (btn) btn.classList.add("hidden");
    showToast("Body Battery installed on your device!");
  });

  if (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone
  ) {
    const btn = document.getElementById("install-app-btn");
    if (btn) btn.classList.add("hidden");
  }

  // Offline / Online listeners
  const updateOnlineStatus = () => {
    const banner = document.getElementById("offline-banner");
    if (!navigator.onLine) banner.classList.remove("hidden");
    else banner.classList.add("hidden");
  };
  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
  updateOnlineStatus();
}

async function handleInstallClick() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    if (choice && choice.outcome === "accepted") {
      deferredInstallPrompt = null;
    }
    return;
  }

  const ua = navigator.userAgent || "";
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
  const isAndroid = /Android/.test(ua);
  const bodyEl = document.getElementById("install-instructions-body");

  if (isIOS) {
    bodyEl.innerHTML = `
          <p><strong>On iPhone or iPad (Safari):</strong></p>
          <p>1. Tap the <strong>Share</strong> button at the bottom of your browser.</p>
          <p>2. Scroll down and tap <strong>Add to Home Screen</strong>.</p>
          <p>3. Tap <strong>Add</strong> in the top-right corner.</p>
        `;
  } else if (isAndroid) {
    bodyEl.innerHTML = `
          <p><strong>On Android (Chrome):</strong></p>
          <p>1. Tap the <strong>three-dot menu (⋮)</strong> in the top-right corner.</p>
          <p>2. Tap <strong>Install app</strong> or <strong>Add to Home screen</strong>.</p>
        `;
  } else {
    bodyEl.innerHTML = `
          <p><strong>On Desktop or Tablet Browser:</strong></p>
          <p>Click the <strong>Install icon</strong> in your browser's address bar or open the browser menu and select <strong>Install Body Battery</strong>.</p>
        `;
  }

  const modal = document.getElementById("install-guide-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeInstallGuide() {
  const modal = document.getElementById("install-guide-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

/**
 * 6. DAILY CHECK-IN MODAL & SINGLE-EDIT LOCK LOGIC
 */
function getTodayEntry() {
  const today = getTodayDateKey();
  return allCheckins.find((item) => item.dateKey === today) || null;
}

function handleTodayCheckInAction() {
  const today = getTodayDateKey();
  const todayEntry = getTodayEntry();

  if (!todayEntry) {
    openCheckinModal();
    return;
  }

  if ((todayEntry.editCount || 0) >= 1) {
    selectedDateKey = today;
    renderDashboard();
    showToast("Today's reflection is locked.");
    return;
  }

  openCheckinModal();
}

function openCheckinModal() {
  const today = getTodayDateKey();
  const todayEntry = getTodayEntry();

  if (todayEntry && (todayEntry.editCount || 0) >= 1) {
    showToast("Today's check-in has already been edited once and is locked.");
    return;
  }

  if (todayEntry) {
    draftAnswers = [...todayEntry.answers];
    document.getElementById("modal-reflection-textarea").value =
      todayEntry.note || "";
    document.getElementById("modal-status-pill").textContent = "Final Edit ";
    document.getElementById("modal-submit-btn").textContent =
      "Save Final Update";
  } else {
    draftAnswers = new Array(9).fill(false);
    document.getElementById("modal-reflection-textarea").value = "";
    document.getElementById("modal-status-pill").textContent =
      "Today's Reflection";
    document.getElementById("modal-submit-btn").textContent = "Save Reflection";
  }

  document.getElementById("modal-date-subtitle").textContent =
    formatReadableDate(today);
  renderModalStatements();
  updateModalLiveSummary();

  const modal = document.getElementById("checkin-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeCheckinModal() {
  const modal = document.getElementById("checkin-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function toggleStatement(index) {
  draftAnswers[index] = !draftAnswers[index];
  renderModalStatements();
  updateModalLiveSummary();
}

function renderModalStatements() {
  const container = document.getElementById("modal-statements-container");
  container.innerHTML = ASSESSMENT_STATEMENTS.map((stmt, idx) => {
    const checked = draftAnswers[idx];
    return `
          <button type="button" onclick="toggleStatement(${idx})"
            class="w-full text-left touch-target p-3.5 sm:p-4 rounded-2xl border-2 transition-all active:scale-[0.99] flex items-center justify-between gap-3 ${
              checked
                ? "border-emerald-500 bg-emerald-500/10 dark:bg-emerald-500/15"
                : "border-[#E2DFD7] dark:border-[#2E2E34] bg-[#F7F6F2]/60 dark:bg-[#121214]/60"
            }">
            <div class="flex items-center gap-3.5 min-w-0">
              <span class="w-7 h-7 rounded-xl border-2 flex items-center justify-center shrink-0 transition-colors ${
                checked
                  ? "bg-emerald-600 border-emerald-600 text-white"
                  : "border-zinc-400 dark:border-zinc-600"
              }">
                ${checked ? `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>` : ""}
              </span>
              <span class="text-lg leading-snug ${checked ? "font-medium" : ""}">${stmt.text}</span>
            </div>
            <span class="text-xs px-2.5 py-1 rounded-full paper-subtle shrink-0 text-[#52525B] dark:text-[#A1A1AA]">
              ${stmt.source === "Mental and emotional" ? "Mental" : stmt.source}
            </span>
          </button>
        `;
  }).join("");
}

function updateModalLiveSummary() {
  const count = draftAnswers.filter(Boolean).length;
  const tier = getTierDetails(count);
  document.getElementById("modal-live-count").textContent = count;
  document.getElementById("modal-live-tier-title").textContent = tier.title;
  document.getElementById("modal-live-tier-range").textContent =
    `${tier.range} true`;
  document.getElementById("modal-live-tier-comment").textContent =
    tier.commentary;
}

async function submitTodayAssessment() {
  const today = getTodayDateKey();
  const existing = getTodayEntry();

  if (existing && (existing.editCount || 0) >= 1) {
    closeCheckinModal();
    showToast("Today's reflection is already locked.");
    return;
  }

  const noteText = document
    .getElementById("modal-reflection-textarea")
    .value.trim();
  const nextEditCount = existing ? (existing.editCount || 0) + 1 : 0;

  const record = {
    ip: profileScopeKey,
    dateKey: today,
    answers: [...draftAnswers],
    score: draftAnswers.filter(Boolean).length,
    note: noteText,
    editCount: nextEditCount,
    updatedAt: new Date().toISOString(),
  };

  await saveCheckinRecord(record);
  allCheckins = await loadCheckinsForProfile();
  selectedDateKey = today;

  // Auto-select lowest-scoring source tab in Ingredients guide
  const lowestSource = findLowestWellBeingSource(record.answers);
  if (lowestSource) {
    activeIngredientSource = lowestSource;
  }

  closeCheckinModal();
  renderDashboard();
  showToast(
    nextEditCount === 0
      ? "Saved today's reflection!"
      : "Modified today's reflection. It is now locked.",
  );
}

/**
 * 7. PINNED HABITS & INGREDIENTS OF WELL-BEING
 */
function loadPinnedPractices() {
  try {
    const raw = localStorage.getItem(PINNED_STORAGE_KEY);
    pinnedPractices = raw ? JSON.parse(raw) : [];
  } catch (_) {
    pinnedPractices = [];
  }
}

function togglePinPractice(practiceText) {
  const idx = pinnedPractices.indexOf(practiceText);
  if (idx >= 0) {
    pinnedPractices.splice(idx, 1);
  } else {
    if (pinnedPractices.length >= 3) {
      showToast("You can pin up to 3 focus habits for today.");
      return;
    }
    pinnedPractices.push(practiceText);
  }
  localStorage.setItem(PINNED_STORAGE_KEY, JSON.stringify(pinnedPractices));
  renderPinnedHabits();
  renderIngredientsContent();
}

function renderPinnedHabits() {
  const listEl = document.getElementById("pinned-habits-list");
  const countEl = document.getElementById("pinned-count-label");
  countEl.textContent = `${pinnedPractices.length} / 3 pinned`;

  if (pinnedPractices.length === 0) {
    listEl.innerHTML = `
          <p class="text-base text-[#52525B] dark:text-[#A1A1AA]">
            Pin up to 3 practices from the Ingredients guide below to focus on today.
          </p>
        `;
    return;
  }

  listEl.innerHTML = pinnedPractices
    .map(
      (habit) => `
        <div class="paper-subtle rounded-2xl px-3.5 py-2.5 flex items-center justify-between gap-2.5">
          <span class="text-base leading-snug">${habit}</span>
          <button onclick='togglePinPractice(${JSON.stringify(habit)})' aria-label="Unpin habit" class="touch-target px-2.5 rounded-xl text-sm text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 shrink-0">
            Remove
          </button>
        </div>
      `,
    )
    .join("");
}

function selectIngredientTab(sourceName) {
  activeIngredientSource = sourceName;
  renderIngredientsTabs();
  renderIngredientsContent();
}

function computeSourceScores(answers) {
  const map = {
    Physical: { earned: 0, total: 3 },
    "Mental and emotional": { earned: 0, total: 3 },
    Social: { earned: 0, total: 1 },
    Spiritual: { earned: 0, total: 2 },
  };
  ASSESSMENT_STATEMENTS.forEach((stmt, idx) => {
    if (answers[idx]) map[stmt.source].earned += 1;
  });
  return map;
}

function findLowestWellBeingSource(answers) {
  const scores = computeSourceScores(answers);
  let lowestKey = "Physical";
  let lowestRatio = 2;
  for (const [key, val] of Object.entries(scores)) {
    const ratio = val.earned / val.total;
    if (ratio < lowestRatio) {
      lowestRatio = ratio;
      lowestKey = key;
    }
  }
  return lowestKey;
}

function renderIngredientsTabs() {
  const activeEntry = allCheckins.find((c) => c.dateKey === selectedDateKey);
  const scores = activeEntry ? computeSourceScores(activeEntry.answers) : null;

  const sources = ["Physical", "Mental and emotional", "Social", "Spiritual"];
  sources.forEach((src) => {
    const btn = document.getElementById(`tab-${src}`);
    const badge = document.getElementById(`badge-tab-${src}`);
    if (!btn) return;

    const isActive = src === activeIngredientSource;
    btn.className = `touch-target px-4 py-2.5 rounded-2xl text-base sm:text-lg font-medium shrink-0 border-2 transition-all active:scale-[0.98] flex items-center gap-2 ${
      isActive
        ? "bg-emerald-600 border-emerald-600 text-white shadow-xs"
        : "paper-subtle border-transparent hover:opacity-90"
    }`;

    if (badge) {
      badge.textContent = scores
        ? `${scores[src].earned}/${scores[src].total}`
        : "";
      badge.classList.toggle("hidden", !scores);
    }
  });
}

function renderIngredientsContent() {
  const container = document.getElementById("ingredients-content-container");
  const groups = WELLBEING_INGREDIENTS[activeIngredientSource] || [];

  container.innerHTML = groups
    .map(
      (group) => `
        <div class="paper-subtle rounded-2xl p-4 sm:p-5 space-y-4">
          <h3 class="font-script text-3xl font-bold border-b border-[#E2DFD7] dark:border-[#2E2E34] pb-1.5">
            ${group.topic}
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Individual Practices -->
            <div class="space-y-2">
              <div class="text-xs uppercase tracking-wider font-medium text-emerald-700 dark:text-emerald-400">
                Individual
              </div>
              <div class="space-y-2">
                ${group.individual.map((practice) => renderPracticeRow(practice)).join("")}
              </div>
            </div>

            <!-- Team Practices -->
            <div class="space-y-2">
              <div class="text-xs uppercase tracking-wider font-medium text-sky-700 dark:text-sky-400">
                Team
              </div>
              <div class="space-y-2">
                ${group.team.map((practice) => renderPracticeRow(practice)).join("")}
              </div>
            </div>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderPracticeRow(practiceText) {
  const isPinned = pinnedPractices.includes(practiceText);
  return `
        <button type="button" onclick='togglePinPractice(${JSON.stringify(practiceText)})'
          class="w-full text-left touch-target p-3 rounded-xl border transition-all active:scale-[0.99] flex items-start justify-between gap-3 ${
            isPinned
              ? "border-emerald-500 bg-emerald-500/10 dark:bg-emerald-500/15"
              : "paper-card hover:opacity-95"
          }">
          <span class="text-base leading-snug">${practiceText}</span>
          <span class="text-xs px-2.5 py-1 rounded-full shrink-0 mt-0.5 ${
            isPinned
              ? "bg-emerald-600 text-white"
              : "paper-subtle text-[#52525B] dark:text-[#A1A1AA]"
          }">
            ${isPinned ? "Pinned ✓" : "+ Pin"}
          </span>
        </button>
      `;
}

/**
 * 8. DASHBOARD RENDERING
 */
function renderDashboard() {
  const today = getTodayDateKey();
  const todayEntry = getTodayEntry();

  // Update Today Prompt Banner & Check-in Button States
  const promptBanner = document.getElementById("today-prompt-banner");
  const desktopBtn = document.getElementById("desktop-checkin-btn");
  const desktopLabel = document.getElementById("desktop-checkin-label");
  const mobileBtn = document.getElementById("mobile-bottom-checkin-btn");
  const mobileLabel = document.getElementById("mobile-bottom-checkin-label");

  if (!todayEntry) {
    promptBanner.classList.remove("hidden");
    document.getElementById("prompt-date-text").textContent =
      formatReadableDate(today);
    desktopLabel.textContent = "Today's Check-In";
    mobileLabel.textContent = "Today's Check-In";
    desktopBtn.disabled = false;
    mobileBtn.disabled = false;
  } else if ((todayEntry.editCount || 0) === 0) {
    promptBanner.classList.add("hidden");
    desktopLabel.textContent = "Edit";
    mobileLabel.textContent = "Edit";
  } else {
    promptBanner.classList.add("hidden");
    desktopLabel.textContent = "Today Locked ✓";
    mobileLabel.textContent = "Today Locked ✓";
  }

  // Resolve active entry to display
  let activeEntry = allCheckins.find((c) => c.dateKey === selectedDateKey);
  if (!activeEntry && allCheckins.length > 0) {
    activeEntry = allCheckins[0];
    selectedDateKey = activeEntry.dateKey;
  }

  const answers = activeEntry ? activeEntry.answers : new Array(9).fill(false);
  const score = activeEntry ? activeEntry.score : 0;
  const pct = Math.round((score / 9) * 100);
  const tier = getTierDetails(score);

  document.getElementById("dashboard-date-heading").textContent = activeEntry
    ? `${formatReadableDate(activeEntry.dateKey)}'s Battery`
    : "Today's Battery";

  // Edit / Lock badge beside heading
  const editSlot = document.getElementById("edit-status-slot");
  if (activeEntry && activeEntry.dateKey === today) {
    if ((activeEntry.editCount || 0) === 0) {
      editSlot.innerHTML = `
            <button onclick="openCheckinModal()" class="touch-target px-3 py-1.5 rounded-2xl paper-subtle text-sm font-medium hover:opacity-90">
              Edit
            </button>
          `;
    } else {
      editSlot.innerHTML = `
            <span class="inline-flex items-center px-3 py-1.5 rounded-2xl paper-subtle text-sm text-[#52525B] dark:text-[#A1A1AA]">
              Locked
            </span>
          `;
    }
  } else {
    editSlot.innerHTML = "";
  }

  // Render 9-Cell Battery Gauge
  const cellsGrid = document.getElementById("battery-cells-grid");
  cellsGrid.innerHTML = Array.from({ length: 9 }, (_, i) => {
    const filled = activeEntry && i < score;
    return `<div class="h-full rounded-lg transition-all duration-300 ${
      filled ? tier.cellColor : "bg-zinc-300/45 dark:bg-zinc-800/80"
    }"></div>`;
  }).join("");

  document.getElementById("score-big-number").textContent = score;
  const pctPill = document.getElementById("score-pct-pill");
  pctPill.textContent = `${pct}%`;
  pctPill.className = `px-2.5 py-0.5 rounded-full text-sm font-medium tabular-nums ${
    activeEntry ? tier.badgeClass : "bg-zinc-500/15"
  }`;

  // Render 4 Well-Being Sources Mini-Cards
  const sourceScores = computeSourceScores(answers);
  const sourcesGrid = document.getElementById("four-sources-grid");
  const sourceOrder = [
    { key: "Physical", label: "Physical" },
    { key: "Mental and emotional", label: "Mental & emotional" },
    { key: "Social", label: "Social" },
    { key: "Spiritual", label: "Spiritual" },
  ];

  sourcesGrid.innerHTML = sourceOrder
    .map((s) => {
      const info = sourceScores[s.key];
      const ratio = Math.round((info.earned / info.total) * 100);
      return `
          <button type="button" onclick="selectIngredientTab('${s.key}'); document.getElementById('wellbeing-ingredients-section').scrollIntoView({behavior:'smooth'});"
            class="text-left touch-target p-3 rounded-2xl paper-subtle hover:opacity-90 transition-all">
            <div class="flex items-center justify-between text-base">
              <span class="truncate">${s.label}</span>
              <span class="tabular-nums font-medium">${info.earned}/${info.total}</span>
            </div>
            <div class="w-full h-2 rounded-full bg-zinc-300/50 dark:bg-zinc-800 mt-1.5 overflow-hidden">
              <div class="h-full rounded-full bg-emerald-500 transition-all duration-300" style="width: ${activeEntry ? ratio : 0}%"></div>
            </div>
          </button>
        `;
    })
    .join("");

  // Assessment Guidance Card
  const tierBadge = document.getElementById("tier-range-badge");
  if (activeEntry) {
    tierBadge.textContent = `${tier.range} Statements True`;
    tierBadge.className = `px-3 py-1 rounded-full text-sm font-medium tabular-nums ${tier.badgeClass}`;
    document.getElementById("tier-heading").textContent = tier.title;
    document.getElementById("tier-commentary-text").textContent =
      tier.commentary;
  } else {
    tierBadge.textContent = "Awaiting Today's Check-In";
    tierBadge.className =
      "px-3 py-1 rounded-full text-sm font-medium bg-zinc-500/15";
    document.getElementById("tier-heading").textContent =
      "Assessing your battery level";
    document.getElementById("tier-commentary-text").textContent =
      "Assess your current level of recovery. Tap Today's Check-In to reflect on the 9 statements.";
  }

  document.getElementById("suggested-focus-bullets").innerHTML =
    SUGGESTED_FOCUS_BULLETS.map(
      (b) => `
        <li class="flex items-start gap-2.5">
          <span class="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 shrink-0"></span>
          <span>${b}</span>
        </li>
      `,
    ).join("");

  // Reflection Note Preview
  const noteCard = document.getElementById("reflection-note-card");
  if (activeEntry && activeEntry.note) {
    noteCard.classList.remove("hidden");
    document.getElementById("reflection-note-date").textContent =
      formatReadableDate(activeEntry.dateKey);
    document.getElementById("reflection-note-body").textContent =
      `“${activeEntry.note}”`;
  } else {
    noteCard.classList.add("hidden");
  }

  // Biggest Opportunity Callout
  const oppText = document.getElementById("opportunity-summary-text");
  if (activeEntry) {
    const lowestSrc = findLowestWellBeingSource(activeEntry.answers);
    const displaySrc =
      lowestSrc === "Mental and emotional" ? "Mental & emotional" : lowestSrc;
    oppText.innerHTML = `Your <strong>${displaySrc}</strong> source offers the biggest opportunity to recharge right now.`;
  } else {
    oppText.textContent =
      "Complete today's reflection to see which source offers the biggest opportunity to charge your battery.";
  }

  renderPinnedHabits();
  renderIngredientsTabs();
  renderIngredientsContent();
  renderHistoryLog();
}

function renderHistoryLog() {
  const container = document.getElementById("history-entries-container");
  const streakPill = document.getElementById("journal-streak-pill");
  streakPill.textContent = `${allCheckins.length} ${allCheckins.length === 1 ? "entry" : "entries"}`;

  if (allCheckins.length === 0) {
    container.innerHTML = `
          <div class="sm:col-span-2 lg:col-span-3 rounded-2xl p-6 text-center border-2 border-dashed border-[#E2DFD7] dark:border-[#2E2E34] space-y-3">
            <p class="font-script text-3xl font-bold">Your journal starts today</p>
            <p class="text-base text-[#52525B] dark:text-[#A1A1AA]">
              No past entries yet. Complete your first daily reflection to start tracking your body battery.
            </p>
            <button onclick="openCheckinModal()" class="touch-target px-5 py-2.5 rounded-2xl bg-emerald-600 text-white text-base font-medium">
              Complete Today's Check-In
            </button>
          </div>
        `;
    return;
  }

  container.innerHTML = allCheckins
    .map((entry) => {
      const tier = getTierDetails(entry.score);
      const isSelected = entry.dateKey === selectedDateKey;
      return `
          <button type="button" onclick="selectHistoryDay('${entry.dateKey}')"
            class="text-left touch-target p-4 rounded-2xl border-2 transition-all active:scale-[0.99] flex flex-col justify-between gap-2 ${
              isSelected
                ? "border-emerald-500 bg-emerald-500/10 dark:bg-emerald-500/15"
                : "paper-subtle border-transparent hover:opacity-95"
            }">
            <div class="flex items-center justify-between gap-2 w-full">
              <span class="font-script text-2xl font-bold">${formatReadableDate(entry.dateKey)}</span>
              <span class="px-2.5 py-0.5 rounded-full text-sm font-medium tabular-nums ${tier.badgeClass}">
                ${entry.score}/9
              </span>
            </div>
            <p class="text-base leading-snug line-clamp-2">${tier.title}</p>
            ${entry.note ? `<p class="text-sm italic text-[#52525B] dark:text-[#A1A1AA] line-clamp-1">“${entry.note}”</p>` : ""}
          </button>
        `;
    })
    .join("");
}

function selectHistoryDay(dateKey) {
  selectedDateKey = dateKey;
  renderDashboard();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  const el = document.createElement("div");
  el.className =
    "pointer-events-auto px-4 py-3 rounded-2xl shadow-lg paper-card text-base text-center border-2 border-emerald-500/40 transition-all duration-300";
  el.textContent = message;
  container.appendChild(el);

  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateY(-6px)";
    setTimeout(() => el.remove(), 260);
  }, 3200);
}

/**
 * 9. INITIALIZATION ON LOAD
 */
window.addEventListener("DOMContentLoaded", async () => {
  initTheme();
  setupPWA();
  loadPinnedPractices();

  try {
    dbInstance = await openIndexedDB();
    profileScopeKey = await resolveProfileScopeSilently();
    allCheckins = await loadCheckinsForProfile();
  } catch (_) {
    allCheckins = [];
  }

  const today = getTodayDateKey();
  const todayEntry = getTodayEntry();
  selectedDateKey = todayEntry ? today : allCheckins[0]?.dateKey || today;

  if (todayEntry) {
    activeIngredientSource = findLowestWellBeingSource(todayEntry.answers);
  }

  renderDashboard();

  // Automatically prompt user each day if today's reflection is not yet submitted
  if (!todayEntry) {
    setTimeout(() => {
      openCheckinModal();
    }, 420);
  }
});
