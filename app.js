/* ==========================================================
   WORKPAY KR PRO v1.0
   PART 1 — THEME + BOTTOM NAVIGATION (OFFICIAL FIX)
========================================================== */

// ===== Theme Button =====
const themeBtn = document.getElementById("themeBtn");

// ===== Bottom Navigation =====
const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

/* ==========================================================
   PART 1.1 — Bottom Navigation
========================================================== */

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    const pageId = tab.dataset.page;

    tabs.forEach(btn => btn.classList.remove("active"));
    tab.classList.add("active");

    pages.forEach(page => page.classList.remove("activePage"));

    document.getElementById(pageId)?.classList.add("activePage");

  });

});

/* ==========================================================
   PART 1.2 — Theme System
========================================================== */

function applyTheme(theme) {

  if (theme === "light") {

    document.body.classList.add("light");
    themeBtn.textContent = "☀️";

  } else {

    document.body.classList.remove("light");
    themeBtn.textContent = "🌙";

  }

  localStorage.setItem("theme", theme);

}

// Load Theme (Default = Dark)
applyTheme(localStorage.getItem("theme") || "dark");

// Toggle Theme
themeBtn?.addEventListener("click", () => {

  const nextTheme =
    document.body.classList.contains("light")
      ? "dark"
      : "light";

  applyTheme(nextTheme);

});
/* ==========================================================
   PART 2 — LANGUAGE SYSTEM
   English / Korean / Myanmar
========================================================== */

// ===== Language Selector =====
const languageSelect = document.getElementById("languageSelect");

// ==========================================================
// Translation Dictionary
// ==========================================================

const translations = {

  // ===== English =====
  en: {

    /* ---------- Bottom Navigation ---------- */

    tab_home: "Home",
    tab_calendar: "Calendar",
    tab_calculator: "Calculator",
    tab_history: "History",
    tab_profile: "Profile",

    /* ---------- Home ---------- */

    home_takehome: "This Month Take Home",
    home_expected: "Expected salary after insurance",
    today_shift: "Today's Shift",

    shift_day: "☀️ Day",
    shift_night: "🌙 Night",
    shift_holiday: "🎌 Holiday",

    /* ---------- Calculator ---------- */

    calculator_title: "Salary Calculator",
    hourly_wage: "Hourly Wage (₩)",
    working_days: "Working Days",
    working_hours: "Working Hours",

    basic_hours: "Basic Hours",
    ot_hours: "OT Hours",
    night_hours: "Night Hours",
    holiday_hours: "Holiday Hours",

    calculate_salary: "Calculate Salary",

    take_home_salary: "Take Home Salary",
    gross_salary: "Gross Salary",
    insurance_title: "Insurance",
    ot_pay: "OT Pay",
    night_pay: "Night Pay",

    /* ---------- Profile ---------- */

    profile_title: "My Profile",
    profile_subtitle: "Myanmar Worker in Korea",

    language_title: "🌐 Language",
    appearance_title: "🎨 Appearance",
    work_profile_title: "🏭 Work Profile",

    theme_auto: "Auto",
    theme_light: "Light",
    theme_dark: "Dark",

    /* ---------- Placeholders ---------- */

    company_name: "Company Name",
    hourly_wage_placeholder: "Hourly Wage",
    working_days_placeholder: "Working Days",

    visa_type: "Visa Type (E9 / F2 / D2)"

  },

  // ===== Korean =====
  ko: {

    tab_home: "홈",
    tab_calendar: "달력",
    tab_calculator: "계산기",
    tab_history: "기록",
    tab_profile: "프로필",

    home_takehome: "이번 달 실수령액",
    home_expected: "보험 공제 후 예상 급여",

    today_shift: "오늘 근무",

    shift_day: "☀️ 주간",
    shift_night: "🌙 야간",
    shift_holiday: "🎌 휴일",

    calculator_title: "급여 계산기",

    hourly_wage: "시급 (₩)",
    working_days: "근무일수",

    working_hours: "근무 시간",

    basic_hours: "기본 시간",
    ot_hours: "연장 시간",
    night_hours: "야간 시간",
    holiday_hours: "휴일 시간",

    calculate_salary: "급여 계산",

    take_home_salary: "실수령액",
    gross_salary: "총 급여",
    insurance_title: "4대 보험",

    ot_pay: "연장 수당",
    night_pay: "야간 수당",

    profile_title: "내 프로필",
    profile_subtitle: "한국 미얀마 근로자",

    language_title: "🌐 언어",
    appearance_title: "🎨 테마",
    work_profile_title: "🏭 회사 정보",

    theme_auto: "자동",
    theme_light: "라이트",
    theme_dark: "다크",

    company_name: "회사 이름",
    hourly_wage_placeholder: "시급 입력",
    working_days_placeholder: "근무일수 입력",

    visa_type: "비자 종류 (E9 / F2 / D2)"

  },

  // ===== Myanmar =====
  my: {

    tab_home: "ပင်မ",
    tab_calendar: "ပြက္ခဒိန်",
    tab_calculator: "တွက်စက်",
    tab_history: "မှတ်တမ်း",
    tab_profile: "ပရိုဖိုင်",

    home_takehome: "ဒီလ ရရှိမည့် လစာ",
    home_expected: "Insurance ဖြတ်ပြီး ရရှိမည့်လစာ",

    today_shift: "ဒီနေ့ အလုပ်ဆိုင်း",

    shift_day: "☀️ နေ့ဆိုင်း",
    shift_night: "🌙 ညဆိုင်း",
    shift_holiday: "🎌 အနီရက်",

    calculator_title: "လစာတွက်စက်",

    hourly_wage: "တစ်နာရီလုပ်ခ (₩)",
    working_days: "အလုပ်ဆင်းရက်",

    working_hours: "အလုပ်ချိန်",

    basic_hours: "ပုံမှန်နာရီ",
    ot_hours: "OT နာရီ",
    night_hours: "ညဆိုင်းနာရီ",
    holiday_hours: "အနီရက်နာရီ",

    calculate_salary: "လစာတွက်မယ်",

    take_home_salary: "ရရှိမည့်လစာ",
    gross_salary: "စုစုပေါင်းလစာ",
    insurance_title: "အာမခံ",

    ot_pay: "OT ကြေး",
    night_pay: "ညဆိုင်းကြေး",

    profile_title: "ကျွန်ုပ် ပရိုဖိုင်",
    profile_subtitle: "ကိုရီးယားရောက် မြန်မာအလုပ်သမား",

    language_title: "🌐 ဘာသာစကား",
    appearance_title: "🎨 Theme",
    work_profile_title: "🏭 အလုပ်အချက်အလက်",

    theme_auto: "အလိုအလျောက်",
    theme_light: "အလင်း",
    theme_dark: "အမှောင်",

    company_name: "ကုမ္ပဏီအမည်",
    hourly_wage_placeholder: "တစ်နာရီလုပ်ခ",
    working_days_placeholder: "အလုပ်ဆင်းရက်",

    visa_type: "ဗီဇာအမျိုးအစား (E9 / F2 / D2)"

  }

};

/* ==========================================================
   PART 2.2 — CHANGE LANGUAGE
========================================================== */

// Change Language
function setLanguage(lang) {

  const dict = translations[lang];

  if (!dict) return;

  // ===== Text =====
  document.querySelectorAll("[data-lang]").forEach(el => {

    const key = el.dataset.lang;

    if (dict[key]) {
      el.textContent = dict[key];
    }

  });

  // ===== Placeholder =====
  document.querySelectorAll("[data-lang-placeholder]").forEach(el => {

    const key = el.dataset.langPlaceholder;

    if (dict[key]) {
      el.placeholder = dict[key];
    }

  });

  // Save Language
  localStorage.setItem("language", lang);

  if (languageSelect) {
    languageSelect.value = lang;
  }

}

// ===== Load Saved Language =====
const savedLang =
  localStorage.getItem("language") || "en";

setLanguage(savedLang);

// ===== Language Change =====
languageSelect?.addEventListener("change", (e) => {

  setLanguage(e.target.value);

});

/* ==========================================================
   PART 3 — HOME DASHBOARD
   Monthly Summary + Hero Salary Card
========================================================== */

// ===== Home Card Elements =====
const homeSalary = document.getElementById("homeSalary");
const homeDays = document.getElementById("homeDays");
const homeOT = document.getElementById("homeOT");
const homeNight = document.getElementById("homeNight");
const homeHoliday = document.getElementById("homeHoliday");
const homeWage = document.getElementById("homeWage");

/* ==========================================================
   PART 3.1 — Update Home Dashboard
========================================================== */

function updateHomeDashboard() {

  // Hourly Wage
  const wage =
    Number(document.getElementById("hourlyWage")?.value) || 0;

  homeWage.textContent =
    `₩${wage.toLocaleString()}`;

  // Calendar Summary — only the month currently being viewed
  const summary = getMonthSummary();

  // Summary Cards
  homeDays.textContent = summary.workDays;
  homeOT.textContent = summary.otHours.toFixed(1);
  homeNight.textContent = summary.nightHours.toFixed(1);
  homeHoliday.textContent = summary.holidayHours.toFixed(1);

  // Take Home Salary
  const net =
    Number(
      document.getElementById("netSalary")?.textContent.replace(/[₩,]/g, "")
    ) || 0;

  homeSalary.textContent =
    `₩${net.toLocaleString()}`;

}

/* ==========================================================
   PART 3.2 — Refresh Dashboard
========================================================== */

function refreshDashboard() {

  updateHomeDashboard();

}

/* ==========================================================
   PART 4 — CALENDAR ENGINE
   Korea Calendar + Month Navigation + LocalStorage
========================================================== */

/* ==========================================================
   PART 4.1 — Calendar Elements
========================================================== */

// ===== Calendar Grid =====
const calendarGrid = document.getElementById("calendarGrid");
const monthTitle = document.getElementById("monthTitle");

// ===== Month Navigation =====
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
const todayBtn = document.getElementById("todayBtn");

// ===== Jump Month / Year =====
const jumpMonth = document.getElementById("jumpMonth");
const jumpYear = document.getElementById("jumpYear");
const jumpBtn = document.getElementById("jumpBtn");

/* ==========================================================
   PART 4.2 — Calendar State + Korea Holiday Database
========================================================== */

// ===== Current Month / Year =====
const today = new Date();

let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function readStoredJson(key, fallback, validator) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;

    const parsed = JSON.parse(raw);
    return validator(parsed) ? parsed : fallback;
  } catch (error) {
    console.warn(`Could not read saved data for ${key}.`, error);
    return fallback;
  }
}

// ===== Calendar LocalStorage =====
let shiftData =
  readStoredJson(
    "workpay_shift_data",
    {},
    value => value && typeof value === "object" && !Array.isArray(value)
  );

const PAY_FORMULA_STORAGE_KEY = "workpay_pay_formula_v1";
const KOREA_PAY_FORMULA_DEFAULTS = Object.freeze({
  regularHoursPerDay: 8,
  otMultiplier: 1.5,
  nightMultiplier: 0.5,
  holidayMultiplier: 1.5
});

function normalizePayFormula(value) {
  const source = value && typeof value === "object" ? value : {};
  const normalized = {};

  Object.entries(KOREA_PAY_FORMULA_DEFAULTS).forEach(([key, fallback]) => {
    const number = Number(source[key]);
    normalized[key] = Number.isFinite(number) && number >= 0
      ? number
      : fallback;
  });

  if (normalized.regularHoursPerDay <= 0) {
    normalized.regularHoursPerDay =
      KOREA_PAY_FORMULA_DEFAULTS.regularHoursPerDay;
  }

  return normalized;
}

let payFormula = normalizePayFormula(
  readStoredJson(
    PAY_FORMULA_STORAGE_KEY,
    KOREA_PAY_FORMULA_DEFAULTS,
    value => value && typeof value === "object" && !Array.isArray(value)
  )
);

// ===== Month Names =====
const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

/* ==========================================================
   PART 4.2.2 — Month-scoped Calendar Summary
   Keep dashboard and calculator totals tied to the month
   currently shown in the calendar.
========================================================== */

function getMonthShiftEntries(year = currentYear, month = currentMonth) {

  const monthPrefix =
    `${year}-${String(month + 1).padStart(2, "0")}-`;

  return Object.entries(shiftData)
    .filter(([dateKey]) => dateKey.startsWith(monthPrefix));

}

function getMonthSummary(year = currentYear, month = currentMonth) {

  const summary = {
    workDays: 0,
    basicHours: 0,
    otHours: 0,
    nightHours: 0,
    holidayHours: 0,
    hourlyOtHours: 0,
    hourlyNightHours: 0,
    hourlyHolidayHours: 0
  };

  getMonthShiftEntries(year, month).forEach(([, day]) => {

    if (day.shift && day.shift !== "off") {
      summary.workDays++;
    }

    summary.basicHours += Number(day.basicHours || 0);
    summary.otHours += Number(day.otHours || 0);
    summary.nightHours += Number(day.nightHours || 0);
    summary.holidayHours += Number(day.holidayHours || 0);

    summary.hourlyOtHours += Number(day.otHours || 0);
    summary.hourlyNightHours += Number(day.nightHours || 0);
    summary.hourlyHolidayHours += Number(day.holidayHours || 0);

  });

  return summary;

}

function renderCalendarSummary() {

  const summary = getMonthSummary();

  const workDays = document.getElementById("summaryWorkDays");
  const basicHours = document.getElementById("summaryBasicHours");
  const otHours = document.getElementById("summaryOtHours");
  const premiumHours = document.getElementById("summaryPremiumHours");

  if (workDays) workDays.textContent = summary.workDays;
  if (basicHours) basicHours.textContent = summary.basicHours.toFixed(1);
  if (otHours) otHours.textContent = summary.otHours.toFixed(1);
  if (premiumHours) {
    premiumHours.textContent =
      `${summary.nightHours.toFixed(1)} / ${summary.holidayHours.toFixed(1)}`;
  }

}

/* ==========================================================
   PART 4.2.1 — Korea Public Holiday Database (2025–2035)
========================================================== */

const koreaHolidays = {

  // ==================== 2025 ====================
  2025: {
    "2025-01-01":"신정",
    "2025-01-28":"설날 연휴",
    "2025-01-29":"설날",
    "2025-01-30":"설날 연휴",

    "2025-03-01":"삼일절",
    "2025-03-03":"삼일절 대체공휴일",

    "2025-05-05":"어린이날 · 부처님오신날",

    "2025-06-06":"현충일",

    "2025-08-15":"광복절",

    "2025-10-03":"개천절",
    "2025-10-05":"추석 연휴",
    "2025-10-06":"추석",
    "2025-10-07":"추석 연휴",
    "2025-10-08":"추석 대체공휴일",
    "2025-10-09":"한글날",

    "2025-12-25":"성탄절"
  },

  // ==================== 2026 ====================
  2026: {
    "2026-01-01":"신정",

    "2026-02-16":"설날 연휴",
    "2026-02-17":"설날",
    "2026-02-18":"설날 연휴",

    "2026-03-01":"삼일절",
    "2026-03-02":"삼일절 대체공휴일",

    "2026-05-05":"어린이날",
    "2026-05-24":"부처님오신날",
    "2026-05-25":"부처님오신날 대체공휴일",

    "2026-06-06":"현충일",

    "2026-08-15":"광복절",
    "2026-08-17":"광복절 대체공휴일",

    // ⭐ September Chuseok
    "2026-09-24":"추석 연휴",
    "2026-09-25":"추석",
    "2026-09-26":"추석 연휴",
    "2026-09-27":"추석 대체공휴일",

    "2026-10-03":"개천절",
    "2026-10-05":"개천절 대체공휴일",
    "2026-10-09":"한글날",

    "2026-12-25":"성탄절"
  },

  // ==================== 2027 ====================
  2027: {
    "2027-01-01":"신정",

    "2027-02-06":"설날 연휴",
    "2027-02-07":"설날",
    "2027-02-08":"설날 연휴",
    "2027-02-09":"설날 대체공휴일",

    "2027-03-01":"삼일절",

    "2027-05-05":"어린이날",
    "2027-05-13":"부처님오신날",

    "2027-06-06":"현충일",
    "2027-06-07":"현충일 대체공휴일",

    "2027-08-15":"광복절",
    "2027-08-16":"광복절 대체공휴일",

    "2027-09-14":"추석 연휴",
    "2027-09-15":"추석",
    "2027-09-16":"추석 연휴",

    "2027-10-03":"개천절",
    "2027-10-04":"개천절 대체공휴일",
    "2027-10-09":"한글날",
    "2027-10-11":"한글날 대체공휴일",

    "2027-12-25":"성탄절",
    "2027-12-27":"성탄절 대체공휴일"
  },

  // ==================== 2028 ====================
  2028: {
    "2028-01-26":"설날 연휴",
    "2028-01-27":"설날",
    "2028-01-28":"설날 연휴",

    "2028-03-01":"삼일절",

    "2028-05-02":"부처님오신날",
    "2028-05-05":"어린이날",

    "2028-06-06":"현충일",

    "2028-08-15":"광복절",

    "2028-10-02":"추석 연휴",
    "2028-10-03":"추석 · 개천절",
    "2028-10-04":"추석 연휴",

    "2028-10-09":"한글날",

    "2028-12-25":"성탄절"
  },

  // ==================== 2029 ====================
  2029: {
    "2029-01-01":"신정",

    "2029-02-12":"설날 연휴",
    "2029-02-13":"설날",
    "2029-02-14":"설날 연휴",

    "2029-03-01":"삼일절",

    "2029-05-05":"어린이날",
    "2029-05-20":"부처님오신날",

    "2029-06-06":"현충일",

    "2029-08-15":"광복절",

    "2029-09-21":"추석 연휴",
    "2029-09-22":"추석",
    "2029-09-23":"추석 연휴",
    "2029-09-24":"추석 대체공휴일",

    "2029-10-03":"개천절",
    "2029-10-09":"한글날",

    "2029-12-25":"성탄절"
  },

  // ==================== 2030 ====================
  2030: {
    "2030-01-01":"신정",

    "2030-02-02":"설날 연휴",
    "2030-02-03":"설날",
    "2030-02-04":"설날 연휴",

    "2030-03-01":"삼일절",

    "2030-05-05":"어린이날",
    "2030-05-09":"부처님오신날",

    "2030-06-06":"현충일",

    "2030-08-15":"광복절",

    "2030-09-11":"추석 연휴",
    "2030-09-12":"추석",
    "2030-09-13":"추석 연휴",

    "2030-10-03":"개천절",
    "2030-10-09":"한글날",

    "2030-12-25":"성탄절"
  },

  // ==================== 2031 ====================
  2031: {
    "2031-01-22":"설날 연휴",
    "2031-01-23":"설날",
    "2031-01-24":"설날 연휴",

    "2031-03-01":"삼일절",

    "2031-05-05":"어린이날",
    "2031-05-28":"부처님오신날",

    "2031-06-06":"현충일",

    "2031-08-15":"광복절",

    "2031-09-30":"추석 연휴",
    "2031-10-01":"추석",
    "2031-10-02":"추석 연휴",

    "2031-10-03":"개천절",
    "2031-10-09":"한글날",

    "2031-12-25":"성탄절"
  },

  // ==================== 2032 ====================
  2032: {
    "2032-01-10":"설날 연휴",
    "2032-01-11":"설날",
    "2032-01-12":"설날 연휴",

    "2032-03-01":"삼일절",

    "2032-05-05":"어린이날",
    "2032-05-16":"부처님오신날",

    "2032-06-06":"현충일",

    "2032-08-15":"광복절",

    "2032-09-18":"추석 연휴",
    "2032-09-19":"추석",
    "2032-09-20":"추석 연휴",

    "2032-10-03":"개천절",
    "2032-10-09":"한글날",

    "2032-12-25":"성탄절"
  },

  // ==================== 2033 ====================
  2033: {
    "2033-01-29":"설날 연휴",
    "2033-01-30":"설날",
    "2033-01-31":"설날 연휴",

    "2033-03-01":"삼일절",

    "2033-05-05":"어린이날",
    "2033-05-06":"부처님오신날",

    "2033-06-06":"현충일",

    "2033-08-15":"광복절",

    "2033-09-07":"추석 연휴",
    "2033-09-08":"추석",
    "2033-09-09":"추석 연휴",

    "2033-10-03":"개천절",
    "2033-10-09":"한글날",

    "2033-12-25":"성탄절"
  },

  // ==================== 2034 ====================
  2034: {
    "2034-02-18":"설날 연휴",
    "2034-02-19":"설날",
    "2034-02-20":"설날 연휴",

    "2034-03-01":"삼일절",

    "2034-05-05":"어린이날",
    "2034-05-25":"부처님오신날",

    "2034-06-06":"현충일",

    "2034-08-15":"광복절",

    "2034-09-26":"추석 연휴",
    "2034-09-27":"추석",
    "2034-09-28":"추석 연휴",

    "2034-10-03":"개천절",
    "2034-10-09":"한글날",

    "2034-12-25":"성탄절"
  },

  // ==================== 2035 ====================
  2035: {
    "2035-02-07":"설날 연휴",
    "2035-02-08":"설날",
    "2035-02-09":"설날 연휴",

    "2035-03-01":"삼일절",

    "2035-05-05":"어린이날",
    "2035-05-15":"부처님오신날",

    "2035-06-06":"현충일",

    "2035-08-15":"광복절",

    "2035-09-15":"추석 연휴",
    "2035-09-16":"추석",
    "2035-09-17":"추석 연휴",

    "2035-10-03":"개천절",
    "2035-10-09":"한글날",

    "2035-12-25":"성탄절"
  }

};

/* ==========================================================
   PART 4.3 — Calendar Storage
========================================================== */

// ===== Save Shift Data =====
function saveShiftData() {

  localStorage.setItem(
    "workpay_shift_data",
    JSON.stringify(shiftData)
  );

}

// ===== Date Key (2026-09-15) =====
function getDateKey(year, month, day) {

  const mm = String(month + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");

  return `${year}-${mm}-${dd}`;

}

/* ==========================================================
   PART 4.4 — Render Calendar (Official v2 BUG FIX)
========================================================== */

function renderCalendar() {

  // Calendar မရှိရင် မလုပ်ဘူး
  if (!calendarGrid) return;

  // Clear Calendar
  calendarGrid.innerHTML = "";

  // Month Title
  monthTitle.textContent =
    `${monthNames[currentMonth]} ${currentYear}`;

  // Jump Selector Sync
  if (jumpMonth) jumpMonth.value = currentMonth;
  if (jumpYear) jumpYear.value = currentYear;

  const todayDate = new Date();

  // Month Info
  const firstDay =
    new Date(currentYear, currentMonth, 1).getDay();

  const daysInMonth =
    new Date(currentYear, currentMonth + 1, 0).getDate();

  /* ===== Empty Cells ===== */

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    empty.className = "emptyDay";
    calendarGrid.appendChild(empty);
  }

  /* ===== Calendar Day Cells ===== */

  for (let day = 1; day <= daysInMonth; day++) {

    const dateKey = getDateKey(currentYear, currentMonth, day);
    const currentDate = new Date(currentYear, currentMonth, day);

    const saved = shiftData[dateKey] || {};

    // Korea Holiday
    const holidayName =
      koreaHolidays[currentYear]?.[dateKey] || "";

    const cell = document.createElement("div");
    cell.className = "dayCell";

    /* ===== Today ===== */

    if (
      todayDate.getFullYear() === currentYear &&
      todayDate.getMonth() === currentMonth &&
      todayDate.getDate() === day
    ) {
      cell.classList.add("today");
    }

    /* ===== Sunday ===== */

    if (currentDate.getDay() === 0) {
      cell.classList.add("sunday");
    }

    /* ===== Korea Holiday ===== */

    if (holidayName) {
      cell.classList.add("publicHoliday");
    }

    /* ===== Shift Color (FIX) ===== */

    if (saved.shift === "day") {
      cell.classList.add("dayColor");
    }

    if (saved.shift === "night") {
      cell.classList.add("nightColor");
    }

    if (saved.shift === "holiday") {
      cell.classList.add("holidayWorkColor");
    }

    if (saved.shift === "off") {
      cell.classList.add("offColor");
    }

    /* ===== Calendar Cell ===== */

    cell.innerHTML = `
      <span class="dayNumber">${day}</span>
      ${
        holidayName
          ? `<span class="holidayName">${holidayName}</span>`
          : ""
      }
    `;

    /* ===== Open Popup ===== */

    cell.addEventListener("click", () => {
      openDayPopup(dateKey);
    });

    calendarGrid.appendChild(cell);
  }

  renderCalendarSummary();
}

/* ==========================================================
   PART 4.5 — Calendar Navigation
========================================================== */

// Previous Month
prevMonth?.addEventListener("click", () => {

  currentMonth--;

  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }

  renderCalendar();
  syncCalendarToCalculator();

});

// Next Month
nextMonth?.addEventListener("click", () => {

  currentMonth++;

  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }

  renderCalendar();
  syncCalendarToCalculator();

});

// Today Button
todayBtn?.addEventListener("click", () => {

  const now = new Date();

  currentMonth = now.getMonth();
  currentYear = now.getFullYear();

  renderCalendar();
  syncCalendarToCalculator();

});

// Jump Month / Year
jumpBtn?.addEventListener("click", () => {

  currentMonth = Number(jumpMonth.value);
  currentYear = Number(jumpYear.value);

  renderCalendar();
  syncCalendarToCalculator();

});

// First Load
renderCalendar();

/* ==========================================================
   PART 5 — CALENDAR DAY POPUP
   Open / Close / Shift / Save / Delete
========================================================== */

/* ==========================================================
   PART 5.1 — Popup Elements & State
========================================================== */

// ===== Popup Elements =====
const dayPopup = document.getElementById("dayPopup");
const popupDate = document.getElementById("popupDate");

const popupStart = document.getElementById("popupStart");
const popupEnd = document.getElementById("popupEnd");

const popupBreakStart = document.getElementById("popupBreakStart");
const popupBreak = document.getElementById("popupBreak");

const popupOT = document.getElementById("popupOT");
const popupNight = document.getElementById("popupNight");
const popupHoliday = document.getElementById("popupHoliday"); // ✅ NEW
const popupNote = document.getElementById("popupNote");

const closePopup = document.getElementById("closePopup");
const saveDayBtn = document.getElementById("saveDayBtn");
const deleteDayBtn = document.getElementById("deleteDayBtn");
const manualEntryBtn = document.getElementById("manualEntryBtn");
const templateEntryBtn = document.getElementById("templateEntryBtn");
const manualShiftPicker = document.getElementById("manualShiftPicker");
const templateShiftPicker = document.getElementById("templateShiftPicker");

// ===== Popup State =====
let selectedDate = "";
let selectedShift = "day";
let selectedDayTemplateId = null;
let selectedDayRuleStatus = "manual";
let selectedDayEntryMode = "manual";

function setDayEntryMode(mode) {
  selectedDayEntryMode = mode === "template" ? "template" : "manual";

  manualEntryBtn?.classList.toggle("active", selectedDayEntryMode === "manual");
  templateEntryBtn?.classList.toggle("active", selectedDayEntryMode === "template");
  manualShiftPicker?.classList.toggle("hidden", selectedDayEntryMode !== "manual");
  templateShiftPicker?.classList.toggle("hidden", selectedDayEntryMode !== "template");

  if (selectedDayEntryMode === "manual") {
    selectedDayTemplateId = null;
    selectedDayRuleStatus = "manual";
  }

  shiftButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.shift === selectedShift);
  });
  renderDayTemplatePicker();
}
/* ==========================================================
   PART 5.2 — Open / Close Day Popup (WORKPAY KR STABLE FIX)
========================================================== */

function openDayPopup(dateKey) {

  selectedDate = dateKey;
  popupDate.textContent = dateKey;

  const saved = shiftData[dateKey] || {};

  // ===== Restore Shift =====
  selectedShift = saved.shift || "day";
  selectedDayTemplateId =
    saved.source === "template" ? saved.templateId || null : null;
  selectedDayRuleStatus =
    saved.ruleStatus === "confirmed" ? "confirmed" : "manual";

  setDayEntryMode(selectedDayTemplateId ? "template" : "manual");

  // ===== Restore Time =====
  popupStart.value = saved.start || "";
  popupEnd.value = saved.end || "";

  // ===== Restore Break =====
  popupBreakStart.value = saved.breakStart || "";
  popupBreak.value = saved.breakMinutes ?? 0;

  // ===== Restore Calculated Hours =====
  popupOT.value = saved.otHours ?? 0;

  if (popupNight) {
    popupNight.value = saved.nightHours ?? 0;
  }

  if (popupHoliday) {
    popupHoliday.value = saved.holidayHours ?? 0;
  }

  // ===== Restore Note =====
  popupNote.value = saved.note || "";

  // ===== Show Popup =====
  dayPopup.classList.remove("hidden");

  // Auto Calculate (Start/End ရှိရင်)
  if (popupStart.value && popupEnd.value) {
    calculateOTHours();
  }

}

/* ===== Close Popup (X Button) ===== */

closePopup?.addEventListener("click", () => {
  dayPopup.classList.add("hidden");
});

/* ===== Close Popup (Background Tap) ===== */

dayPopup?.addEventListener("click", (e) => {
  if (e.target === dayPopup) {
    dayPopup.classList.add("hidden");
  }
});
/* ==========================================================
   PART 5.3 — Shift Button Selection (Official Manual)
========================================================== */

const shiftButtons = document.querySelectorAll(".shift-btn");

manualEntryBtn?.addEventListener("click", () => {
  setDayEntryMode("manual");
});

templateEntryBtn?.addEventListener("click", () => {
  setDayEntryMode("template");
});

shiftButtons.forEach(btn => {

  btn.addEventListener("click", () => {

    // Remove previous active
    shiftButtons.forEach(item =>
      item.classList.remove("active")
    );

    // Active current
    btn.classList.add("active");

    // Save selected shift only
    selectedShift = btn.dataset.shift;
    selectedDayTemplateId = null;

    // Recalculate holiday hours immediately when the shift type changes.
    calculateOTHours();

  });

});

/* ==========================================================
   PART 5.4 — Auto OT / Night / Holiday Calculator
   WORKPAY KR OFFICIAL v1.4
========================================================== */

// ===== HH:MM → Minutes =====
function timeToMinutes(time) {
  if (!time) return 0;

  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function intervalOverlap(startA, endA, startB, endB) {
  return Math.max(0, Math.min(endA, endB) - Math.max(startA, startB));
}

function calculateShiftMetrics(
  dateKey,
  shift,
  start,
  end,
  breakStart,
  breakMinutesValue
) {
  if (shift === "off" || !start || !end) {
    return {
      workedHours: 0,
      basicHours: 0,
      otHours: 0,
      nightHours: 0,
      holidayHours: 0
    };
  }

  const startMin = timeToMinutes(start);
  let endMin = timeToMinutes(end);
  if (endMin <= startMin) endMin += 1440;

  const breakMinutes = Math.max(0, Number(breakMinutesValue) || 0);
  let breakStartMin = null;
  let breakEndMin = null;

  if (breakStart && breakMinutes > 0) {
    breakStartMin = timeToMinutes(breakStart);
    if (breakStartMin < startMin) breakStartMin += 1440;
    breakEndMin = Math.min(endMin, breakStartMin + breakMinutes);
  }

  const scheduledMinutes = Math.max(0, endMin - startMin);
  const deductedBreakMinutes = Math.min(breakMinutes, scheduledMinutes);
  const workedMinutes = Math.max(0, scheduledMinutes - deductedBreakMinutes);

  // Night work is 22:00–06:00. Evaluate each night window that
  // intersects the shift and remove any break overlap.
  let nightMinutes = 0;
  for (let dayOffset = -1; dayOffset <= 1; dayOffset++) {
    const nightStart = dayOffset * 1440 + 22 * 60;
    const nightEnd = (dayOffset + 1) * 1440 + 6 * 60;
    let overlap =
      intervalOverlap(startMin, endMin, nightStart, nightEnd);

    if (breakStartMin !== null && breakEndMin !== null) {
      overlap -= intervalOverlap(
        breakStartMin,
        breakEndMin,
        nightStart,
        nightEnd
      );
    }

    nightMinutes += Math.max(0, overlap);
  }

  // Classify holiday work from the shift's start date. A Friday night shift
  // that ends on Saturday morning remains Friday work. Users can still mark
  // any factory-specific shift explicitly as Holiday / Weekend.
  const shiftDate = new Date(dateKey + "T00:00:00");
  const isHolidayStartDate =
    shiftDate.getDay() === 6 ||
    !!koreaHolidays?.[shiftDate.getFullYear()]?.[dateKey];
  const holidayMinutes =
    shift === "holiday" || isHolidayStartDate
      ? workedMinutes
      : 0;

  const workedHours = workedMinutes / 60;

  return {
    workedHours,
    basicHours: Math.min(workedHours, payFormula.regularHoursPerDay),
    otHours: Math.max(0, workedHours - payFormula.regularHoursPerDay),
    nightHours: nightMinutes / 60,
    holidayHours: Math.min(
      holidayMinutes / 60,
      payFormula.regularHoursPerDay
    )
  };
}

function renderPayFormulaSettings() {
  Object.keys(KOREA_PAY_FORMULA_DEFAULTS).forEach(key => {
    const input = document.getElementById(key);
    if (input) input.value = payFormula[key];
  });
}

function recalculateSavedShiftMetrics() {
  Object.entries(shiftData).forEach(([dateKey, entry]) => {
    if (!entry || typeof entry !== "object") return;

    const metrics = calculateShiftMetrics(
      dateKey,
      entry.shift,
      entry.start,
      entry.end,
      entry.breakStart,
      entry.breakMinutes
    );

    shiftData[dateKey] = {
      ...entry,
      basicHours: Number(metrics.basicHours.toFixed(2)),
      otHours: Number(metrics.otHours.toFixed(2)),
      nightHours: Number(metrics.nightHours.toFixed(2)),
      holidayHours: Number(metrics.holidayHours.toFixed(2))
    };
  });

  saveShiftData();
  renderCalendar();
  syncCalendarToCalculator();
}

function savePayFormulaSettings(nextFormula) {
  payFormula = normalizePayFormula(nextFormula);
  localStorage.setItem(
    PAY_FORMULA_STORAGE_KEY,
    JSON.stringify(payFormula)
  );
  renderPayFormulaSettings();
  recalculateSavedShiftMetrics();
  calculateSalary();
}

document.getElementById("savePayFormulaBtn")
?.addEventListener("click", () => {
  const nextFormula = {};
  Object.keys(KOREA_PAY_FORMULA_DEFAULTS).forEach(key => {
    nextFormula[key] = document.getElementById(key)?.value;
  });
  savePayFormulaSettings(nextFormula);
  alert("Pay formula saved.");
});

document.getElementById("resetPayFormulaBtn")
?.addEventListener("click", () => {
  savePayFormulaSettings(KOREA_PAY_FORMULA_DEFAULTS);
});

renderPayFormulaSettings();

// ===== Auto Calculate =====
function calculateOTHours() {

  if (!popupStart.value || !popupEnd.value) {
    popupOT.value = "0.0";
    if (popupNight) popupNight.value = "0.0";
    if (popupHoliday) popupHoliday.value = "0.0";
    return;
  }

  const metrics = calculateShiftMetrics(
    selectedDate,
    selectedShift,
    popupStart.value,
    popupEnd.value,
    popupBreakStart.value,
    popupBreak.value
  );

  // ===== Update Popup =====
  popupOT.value = metrics.otHours.toFixed(1);

  if (popupNight) {
    popupNight.value = metrics.nightHours.toFixed(1);
  }

  if (popupHoliday) {
    popupHoliday.value = metrics.holidayHours.toFixed(1);
  }

}

// ===== Auto Update =====
[popupStart, popupEnd, popupBreakStart, popupBreak].forEach(input => {
  input?.addEventListener("input", calculateOTHours);
  input?.addEventListener("change", calculateOTHours);
});

/* ==========================================================
   PART 5.5 — Save Calendar Day (WORKPAY KR OFFICIAL v1.5)
========================================================== */

saveDayBtn?.addEventListener("click", () => {

  const breakMinutes = Number(popupBreak.value) || 0;
  const metrics = calculateShiftMetrics(
    selectedDate,
    selectedShift,
    popupStart.value,
    popupEnd.value,
    popupBreakStart.value,
    breakMinutes
  );

  // ===== Save =====
  shiftData[selectedDate] = {

    shift: selectedShift,

    start: popupStart.value,
    end: popupEnd.value,

    breakStart: popupBreakStart.value,
    breakMinutes,

    // ✅ Basic Hours (Day / Night / Holiday)
    basicHours: metrics.basicHours,

    // ✅ OT Hours
    otHours: metrics.otHours,

    // ✅ Night Hours
    nightHours: metrics.nightHours,

    // ✅ Holiday Hours
    holidayHours: metrics.holidayHours,

    note: popupNote.value || "",

    source: selectedDayTemplateId ? "template" : "manual",
    templateId: selectedDayTemplateId || undefined,
    templateName:
      selectedDayTemplateId
        ? shiftTemplates.find(item => item.id === selectedDayTemplateId)?.name
        : undefined,
    ruleStatus:
      selectedDayTemplateId
        ? selectedDayRuleStatus
        : "manual"

  };

  saveShiftData();
  renderCalendar();
  syncCalendarToCalculator();

  if (typeof updateHomeDashboard === "function") {
    updateHomeDashboard();
  }

  dayPopup.classList.add("hidden");

});


/* ==========================================================
   PART 5.6 — Delete Calendar Day
========================================================== */

deleteDayBtn?.addEventListener("click", () => {

  delete shiftData[selectedDate];

  saveShiftData();

  renderCalendar();

  if (typeof syncCalendarToCalculator === "function") {
    syncCalendarToCalculator();
  }

  if (typeof updateHomeDashboard === "function") {
    updateHomeDashboard();
  }

  dayPopup.classList.add("hidden");

});

/* ==========================================================
   PART 6 — CALENDAR → CALCULATOR SYNC
   Calendar Data → Salary Calculator
========================================================== */

/* ==========================================================
   PART 6.1 — Calculator Elements
========================================================== */

const workingDaysInput = document.getElementById("workingDays");
const basicHoursInput = document.getElementById("basicHours");
const otHoursInput = document.getElementById("otHours");
const nightHoursInput = document.getElementById("nightHours");
const holidayHoursInput = document.getElementById("holidayHours");

/* ==========================================================
   PART 6.2 — Sync Calendar To Calculator
   WORKPAY KR OFFICIAL v1.4
========================================================== */

function syncCalendarToCalculator() {

  const summary = getMonthSummary();

  workingDaysInput.value = summary.workDays;

  basicHoursInput.value = summary.basicHours.toFixed(1);
  otHoursInput.value = summary.otHours.toFixed(1);
  nightHoursInput.value = summary.nightHours.toFixed(1);
  holidayHoursInput.value = summary.holidayHours.toFixed(1);

  if (typeof updateHomeDashboard === "function") {
    updateHomeDashboard();
  }

}
/* ==========================================================
   PART 6.3 — App Refresh (Official)
========================================================== */

renderCalendar();
syncCalendarToCalculator();

if (typeof updateHomeDashboard === "function") {
  updateHomeDashboard();
}


/* ==========================================================
   PART 7 — SALARY CALCULATOR ENGINE
   Gross Salary + Insurance + Take Home
========================================================== */

/* ==========================================================
   PART 7.1 — Salary Result Elements
========================================================== */

// ===== Salary Inputs =====
const hourlyWageInput = document.getElementById("hourlyWage");

// ===== Result Cards =====
const grossSalaryText = document.getElementById("grossSalary");
const insuranceText = document.getElementById("insurance");
const otPayText = document.getElementById("otPay");
const nightPayText = document.getElementById("nightPay");
const netSalaryText = document.getElementById("netSalary");

/* ==========================================================
   PART 7.2 — Korea Insurance Calculator
========================================================== */

// Korea 4 Insurance (Approximation)
function calculateInsurance(grossSalary) {

  const 국민연금 = grossSalary * 0.045;
  const 건강보험 = grossSalary * 0.03545;
  const 장기요양 = 건강보험 * 0.1295;
  const 고용보험 = grossSalary * 0.009;

  return Math.round(
    국민연금 +
    건강보험 +
    장기요양 +
    고용보험
  );

}

/* ==========================================================
   PART 7.3 — Calculate Salary
========================================================== */
/* ==========================================================
   PART 9.2 — Calculate Salary (Official)
========================================================== */

function calculateSalary(saveHistory = false) {

  // ===== User Input =====
  const wage = Number(hourlyWageInput.value) || 0;
  const basicHours = Number(basicHoursInput.value) || 0;
  const monthSummary = getMonthSummary();
  const otHours = monthSummary.hourlyOtHours;
  const nightHours = monthSummary.hourlyNightHours;
  const holidayHours = monthSummary.hourlyHolidayHours;

  // ===== Salary Formula =====
  const basicPay = wage * basicHours;

  const otPay = wage * payFormula.otMultiplier * otHours;

  const nightPay = wage * payFormula.nightMultiplier * nightHours;

  const holidayPay = wage * payFormula.holidayMultiplier * holidayHours;

  let grossSalary =
    basicPay +
    otPay +
    nightPay +
    holidayPay;

  // ===== Factory Rules (+ / -) =====
  const extraTotal = getExtraPayTotal();

  grossSalary += extraTotal;

  // ===== Insurance =====
  const insurance = calculateInsurance(grossSalary);

  // ===== Take Home =====
  const netSalary = grossSalary - insurance;

  // ===== Result Cards =====
  grossSalaryText.textContent =
    `₩${Math.round(grossSalary).toLocaleString()}`;

  insuranceText.textContent =
    `- ₩${Math.round(insurance).toLocaleString()}`;

  otPayText.textContent =
    `₩${Math.round(otPay).toLocaleString()}`;

  nightPayText.textContent =
    `₩${Math.round(nightPay).toLocaleString()}`;

  netSalaryText.textContent =
    `₩${Math.round(netSalary).toLocaleString()}`;

  // ===== Extra Total Card =====
  document.getElementById("extraTotal").textContent =
    `₩${extraTotal.toLocaleString()}`;

  // ===== Home Dashboard =====
  updateHomeDashboard();

  if (saveHistory) {
    saveSalaryHistorySnapshot({
      wage,
      basicPay,
      otPay,
      nightPay,
      holidayPay,
      extraTotal,
      grossSalary,
      insurance,
      netSalary,
      monthSummary
    });
  }

}
// ===== End calculateSalary()

/* ==========================================================
   PART 8 — FACTORY PAY RULES
   Profile → Calculator Auto Sync
========================================================== */

/* ==========================================================
   PART 8.1 — Popup Elements
========================================================== */

// ===== Factory Rule Popup =====
const rulePopup = document.getElementById("rulePopup");
const addRuleBtn = document.getElementById("addRuleBtn");
const closeRulePopup = document.getElementById("closeRulePopup");
let editingFactoryRuleIndex = null;

function openFactoryRuleEditor(index = null) {
  const rule =
    index === null ? null : factoryRules[index];

  editingFactoryRuleIndex =
    rule ? index : null;

  document.getElementById("rulePopupTitle").textContent =
    rule ? "Edit Factory Pay Rule" : "Factory Pay Rule";
  document.getElementById("ruleType").value =
    rule?.type || "plus";
  document.getElementById("ruleStatus").value =
    rule?.status === "confirmed" ? "confirmed" : "manual";
  document.getElementById("ruleName").value =
    rule?.name || "";
  document.getElementById("ruleAmount").value =
    rule?.amount || "";
  document.getElementById("ruleNote").value =
    rule?.note || "";

  rulePopup.classList.remove("hidden");
}

// ===== Popup Open =====
addRuleBtn?.addEventListener("click", () => {
  openFactoryRuleEditor();
});

// ===== Popup Close =====
closeRulePopup?.addEventListener("click", () => {

  rulePopup.classList.add("hidden");
  editingFactoryRuleIndex = null;

});

// ===== Click Outside =====
rulePopup?.addEventListener("click", (e) => {

  if (e.target === rulePopup) {
    rulePopup.classList.add("hidden");
    editingFactoryRuleIndex = null;
  }

});

/* ==========================================================
   PART 8.2 — LocalStorage
========================================================== */

let factoryRules =
  readStoredJson(
    "factoryRules",
    [],
    value => Array.isArray(value)
  );

factoryRules = factoryRules.map(rule => {
  return {
    ...rule,
    status: rule.status === "confirmed" ? "confirmed" : "manual"
  };
});

// Save Rules
function saveFactoryRules() {

  localStorage.setItem(
    "factoryRules",
    JSON.stringify(factoryRules)
  );

}
saveFactoryRules();
renderFactoryRules();
refreshCalculatorRules();

rulePopup.classList.add("hidden");
/* ==========================================================
   PART 8.3 — Render Factory Rule List
========================================================== */

function renderFactoryRules() {

  const list = document.getElementById("factoryRuleList");

  if (!list) return;

  list.innerHTML = "";

  // No Rules
  if (factoryRules.length === 0) {

    list.innerHTML = `
      <p style="color:#94A3B8;text-align:center;padding:18px 0;">
        No factory rules yet.
      </p>
    `;

    renderCalculatorRules();
    return;

  }

  // Rule List
  factoryRules.forEach((rule, index) => {

    const item = document.createElement("div");

    item.className = "ruleItem";

    const status =
      rule.status === "confirmed" ? "confirmed" : "manual";

    item.innerHTML = `
      <div>
        <div class="${rule.type}">
          ${rule.type === "plus" ? "🟢 +" : "🔴 -"} ${rule.name}
          <span class="ruleStatusBadge ${status}">
            ${status === "confirmed" ? "Confirmed" : "User Manual"}
          </span>
        </div>

        <strong>₩${Number(rule.amount).toLocaleString()}</strong>
        ${
          rule.note
            ? `<p class="ruleEvidence">${escapeTemplateText(rule.note)}</p>`
            : ""
        }
      </div>

      <div class="ruleItemActions">
        <button class="templateEditBtn editRuleBtn" data-index="${index}" type="button">
          Edit
        </button>
        <button class="removeBtn" data-index="${index}" type="button">
          Delete
        </button>
      </div>
    `;

    list.appendChild(item);

  });

  // Delete Button
  list.querySelectorAll(".editRuleBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      openFactoryRuleEditor(Number(btn.dataset.index));
    });
  });

  list.querySelectorAll(".removeBtn").forEach(btn => {

    btn.addEventListener("click", () => {

      const index = Number(btn.dataset.index);

      factoryRules.splice(index, 1);

      saveFactoryRules();
      renderFactoryRules();

    });

  });

  // Refresh Calculator Card
  renderCalculatorRules();

}

/* ==========================================================
   PART 8.4 — Save Factory Rule
========================================================== */

document.getElementById("saveRuleBtn")
?.addEventListener("click", () => {

  const type =
    document.getElementById("ruleType").value;

  const status =
    document.getElementById("ruleStatus").value;

  const name =
    document.getElementById("ruleName").value.trim();

  const amount =
    Number(document.getElementById("ruleAmount").value);

  const note =
    document.getElementById("ruleNote").value.trim();

  if (!name || amount <= 0) {

    alert("Please enter rule name and amount.");

    return;

  }

  const savedRule = {
    type,
    name,
    amount,
    status,
    note
  };

  if (editingFactoryRuleIndex === null) {
    factoryRules.push(savedRule);
  } else {
    factoryRules[editingFactoryRuleIndex] = savedRule;
  }

  saveFactoryRules();

  renderFactoryRules();

  rulePopup.classList.add("hidden");
  editingFactoryRuleIndex = null;

});

/* ==========================================================
   PART 8.5 — Calculator Rule Card
========================================================== */

function renderCalculatorRules() {

  const container =
    document.getElementById("payItemList");

  if (!container) return;

  container.innerHTML = "";

  let total = 0;

  factoryRules.forEach((rule, index) => {

    const row = document.createElement("div");
    const status =
      rule.status === "confirmed" ? "confirmed" : "manual";

    row.className = "payItemRow";

    row.innerHTML = `
      <div class="payInfo">

        <span>
          ${rule.type === "plus" ? "🟢 +" : "🔴 -"}
          ${rule.name}
        </span>

        <span class="ruleStatusBadge ${status}">
          ${status === "confirmed" ? "Confirmed" : "User Manual"}
        </span>

      </div>

      <input
        type="number"
        class="payAmount"
        data-index="${index}"
        value="${rule.amount}"
      >
    `;

    container.appendChild(row);

  });

  // User Edit Amount
  container.querySelectorAll(".payAmount")
  .forEach(input => {

    input.addEventListener("input", () => {

      const index = Number(input.dataset.index);

      factoryRules[index].amount =
        Number(input.value) || 0;

      saveFactoryRules();

      updateExtraTotal();

    });

  });

  updateExtraTotal();

}

/* ==========================================================
   PART 8.6 — Extra Total
========================================================== */

function updateExtraTotal() {

  const breakdown = getFactoryRuleBreakdown();

  document.getElementById("extraTotal").textContent =
    `₩${breakdown.total.toLocaleString()}`;

  const confirmedTotal =
    document.getElementById("confirmedRuleTotal");
  const manualTotal =
    document.getElementById("manualRuleTotal");

  if (confirmedTotal) {
    confirmedTotal.textContent =
      `Confirmed ₩${breakdown.confirmed.toLocaleString()}`;
  }

  if (manualTotal) {
    manualTotal.textContent =
      `User Manual ₩${breakdown.manual.toLocaleString()}`;
  }

  return breakdown.total;

}

/* ==========================================================
   PART 9 — EXTRA PAY / DEDUCTION ENGINE
   Factory Rules + Manual Pay Items → Salary Calculator
========================================================== */

/* ==========================================================
   PART 9.1 — Calculate Extra Total
========================================================== */

function getFactoryRuleBreakdown() {

  const breakdown = {
    confirmed: 0,
    manual: 0,
    total: 0
  };

  factoryRules.forEach(rule => {

    const amount = Number(rule.amount) || 0;
    const signedAmount =
      rule.type === "plus" ? amount : -amount;
    const status =
      rule.status === "confirmed" ? "confirmed" : "manual";

    breakdown[status] += signedAmount;
    breakdown.total += signedAmount;

  });

  return breakdown;

}

function getExtraPayTotal() {
  return getFactoryRuleBreakdown().total;
}

/* ==========================================================
   PART 9.3 — Auto Refresh Salary
========================================================== */

function refreshCalculatorRules() {

  renderCalculatorRules();

  if (typeof calculateSalary === "function") {
    calculateSalary();
  }

}

/* ==========================================================
   PART 9.4 — FACTORY SHIFT TEMPLATES
   Date range + weekday application
========================================================== */

const SHIFT_TEMPLATE_STORAGE_KEY = "workpay_shift_templates";

let shiftTemplates =
  readStoredJson(
    SHIFT_TEMPLATE_STORAGE_KEY,
    [],
    value => Array.isArray(value)
  );

let editingShiftTemplateId = null;

const shiftTemplatePopup =
  document.getElementById("shiftTemplatePopup");
const applyTemplatePopup =
  document.getElementById("applyTemplatePopup");
function saveShiftTemplates() {
  localStorage.setItem(
    SHIFT_TEMPLATE_STORAGE_KEY,
    JSON.stringify(shiftTemplates)
  );
}

function migrateFixedPayDataToHourly() {
  let templatesChanged = false;
  let calendarChanged = false;

  shiftTemplates = shiftTemplates.map(template => {
    const normalizedStatus =
      template.ruleStatus === "confirmed" ? "confirmed" : "manual";
    if (
      Object.prototype.hasOwnProperty.call(template, "payMode") ||
      Object.prototype.hasOwnProperty.call(template, "extraPay") ||
      template.ruleStatus !== normalizedStatus
    ) {
      templatesChanged = true;
      const { payMode, extraPay, ...hourlyTemplate } = template;
      return {
        ...hourlyTemplate,
        ruleStatus: normalizedStatus
      };
    }
    return template;
  });

  Object.keys(shiftData).forEach(dateKey => {
    const entry = shiftData[dateKey];
    if (entry && typeof entry === "object") {
      const normalizedStatus =
        entry.ruleStatus === "confirmed" ? "confirmed" : "manual";
      const needsMigration =
        Object.prototype.hasOwnProperty.call(entry, "payMode") ||
        Object.prototype.hasOwnProperty.call(entry, "extraPay") ||
        entry.ruleStatus !== normalizedStatus;

      if (!needsMigration) return;

      calendarChanged = true;
      const { payMode, extraPay, ...hourlyEntry } = entry;
      shiftData[dateKey] = {
        ...hourlyEntry,
        ruleStatus: normalizedStatus
      };
    }
  });

  if (templatesChanged) saveShiftTemplates();
  if (calendarChanged) saveShiftData();
}

migrateFixedPayDataToHourly();

function escapeTemplateText(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function setTemplateShiftFieldState() {
  const isOff =
    document.getElementById("templateShiftType")?.value === "off";

  [
    "templateStart",
    "templateEnd",
    "templateBreakStart",
    "templateBreakMinutes"
  ].forEach(id => {
    const input = document.getElementById(id);
    if (input) input.disabled = isOff;
  });
}

function closeShiftTemplateEditor() {
  shiftTemplatePopup?.classList.add("hidden");
  editingShiftTemplateId = null;
}

function openShiftTemplateEditor(templateId = null) {
  const template =
    shiftTemplates.find(item => item.id === templateId) || null;

  editingShiftTemplateId = template?.id || null;

  const title = document.getElementById("shiftTemplatePopupTitle");
  if (title) {
    title.textContent = template ? "Edit Shift Template" : "New Shift Template";
  }

  document.getElementById("templateName").value =
    template?.name || "";
  document.getElementById("templateShiftType").value =
    template?.shift || "day";
  document.getElementById("templateStart").value =
    template?.start || "08:30";
  document.getElementById("templateEnd").value =
    template?.end || "17:30";
  document.getElementById("templateBreakStart").value =
    template?.breakStart || "12:30";
  document.getElementById("templateBreakMinutes").value =
    template?.breakMinutes ?? 60;
  document.getElementById("templateRuleStatus").value =
    template?.ruleStatus === "confirmed" ? "confirmed" : "manual";
  document.getElementById("templateNote").value =
    template?.note || "";

  setTemplateShiftFieldState();
  shiftTemplatePopup?.classList.remove("hidden");
}

function applyTemplateToOpenDay(templateId) {
  const template =
    shiftTemplates.find(item => item.id === templateId);
  if (!template) return;

  selectedDayTemplateId = template.id;
  selectedDayEntryMode = "template";
  selectedShift = template.shift || "day";
  selectedDayRuleStatus =
    template.ruleStatus === "confirmed"
      ? "confirmed"
      : "manual";

  popupStart.value = template.start || "";
  popupEnd.value = template.end || "";
  popupBreakStart.value = template.breakStart || "";
  popupBreak.value = Number(template.breakMinutes) || 0;
  popupNote.value = template.note || "";

  calculateOTHours();
  setDayEntryMode("template");
}

function renderDayTemplatePicker() {
  const picker = document.getElementById("dayTemplatePicker");
  if (!picker) return;

  if (shiftTemplates.length === 0) {
    picker.innerHTML = `
      <p class="dayTemplateEmpty">
        No templates yet. Add one in Profile first.
      </p>
    `;
    return;
  }

  picker.innerHTML = shiftTemplates.map(template => `
    <button
      type="button"
      class="dayTemplateBtn ${
        selectedDayTemplateId === template.id ? "active" : ""
      }"
      data-template-id="${template.id}"
    >
      ${escapeTemplateText(template.name)}
    </button>
  `).join("");

  picker.querySelectorAll(".dayTemplateBtn").forEach(button => {
    button.addEventListener("click", () => {
      applyTemplateToOpenDay(button.dataset.templateId);
    });
  });
}

function renderShiftTemplates() {
  const list = document.getElementById("shiftTemplateList");
  const applySelect = document.getElementById("applyTemplateSelect");

  if (list) {
    list.innerHTML = "";

    if (shiftTemplates.length === 0) {
      list.innerHTML = `
        <p class="emptyTemplateState">
          No shift templates yet. Add your factory's first shift.
        </p>
      `;
    }

    shiftTemplates.forEach(template => {
      const item = document.createElement("div");
      const ruleStatus =
        template.ruleStatus === "confirmed"
          ? "confirmed"
          : "manual";

      item.className = "shiftTemplateItem";
      item.innerHTML = `
        <div class="shiftTemplateInfo">
          <strong>${escapeTemplateText(template.name)}</strong>
          <span class="ruleStatusBadge ${ruleStatus}">
            ${ruleStatus === "confirmed" ? "Confirmed" : "User Manual"}
          </span>
          <span>
            ${escapeTemplateText(template.start || "Off")}
            ${template.end ? `–${escapeTemplateText(template.end)}` : ""}
            · Hourly formula
          </span>
        </div>
        <div class="shiftTemplateActions">
          <button class="templateEditBtn" data-id="${template.id}" type="button">
            Edit
          </button>
          <button class="templateDeleteBtn" data-id="${template.id}" type="button">
            Delete
          </button>
        </div>
      `;
      list.appendChild(item);
    });

    list.querySelectorAll(".templateEditBtn").forEach(button => {
      button.addEventListener("click", () => {
        openShiftTemplateEditor(button.dataset.id);
      });
    });

    list.querySelectorAll(".templateDeleteBtn").forEach(button => {
      button.addEventListener("click", () => {
        const template =
          shiftTemplates.find(item => item.id === button.dataset.id);

        if (!template || !confirm(`Delete "${template.name}"?`)) return;

        shiftTemplates =
          shiftTemplates.filter(item => item.id !== button.dataset.id);
        saveShiftTemplates();
        renderShiftTemplates();
      });
    });
  }

  if (applySelect) {
    applySelect.innerHTML = shiftTemplates
      .map(template => `
        <option value="${template.id}">
          ${escapeTemplateText(template.name)}
        </option>
      `)
      .join("");
  }

  renderDayTemplatePicker();
}

function formatLocalDate(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

function getTemplateCalendarEntry(dateKey, template) {
  if (template.shift === "off") {
    return {
      shift: "off",
      start: "",
      end: "",
      breakStart: "",
      breakMinutes: 0,
      basicHours: 0,
      otHours: 0,
      nightHours: 0,
      holidayHours: 0,
      note: template.note || "",
      source: "template",
      templateId: template.id,
      templateName: template.name,
      ruleStatus:
        template.ruleStatus === "confirmed"
          ? "confirmed"
          : "manual"
    };
  }

  const breakMinutes = Number(template.breakMinutes) || 0;
  const metrics = calculateShiftMetrics(
    dateKey,
    template.shift,
    template.start,
    template.end,
    template.breakStart,
    breakMinutes
  );

  return {
    shift: template.shift,
    start: template.start,
    end: template.end,
    breakStart: template.breakStart || "",
    breakMinutes,
    basicHours: Number(metrics.basicHours.toFixed(2)),
    otHours: Number(metrics.otHours.toFixed(2)),
    nightHours: Number(metrics.nightHours.toFixed(2)),
    holidayHours: Number(metrics.holidayHours.toFixed(2)),
    note: template.note || "",
    source: "template",
    templateId: template.id,
    templateName: template.name,
    ruleStatus:
      template.ruleStatus === "confirmed"
        ? "confirmed"
        : "manual"
  };
}

function getSelectedApplyWeekdays() {
  return new Set(
    Array.from(
      document.querySelectorAll(
        "#applyTemplatePopup .weekdayBtn.active"
      )
    ).map(button => Number(button.dataset.weekday))
  );
}

function setApplyWeekdaySelection(selected) {
  document.querySelectorAll(
    "#applyTemplatePopup .weekdayBtn"
  ).forEach(button => {
    const active = selected.has(Number(button.dataset.weekday));
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function getApplyDates(startValue, endValue, weekdays) {
  const start = new Date(startValue + "T00:00:00");
  const end = new Date(endValue + "T00:00:00");
  const dates = [];

  for (
    let cursor = new Date(start);
    cursor <= end;
    cursor.setDate(cursor.getDate() + 1)
  ) {
    if (weekdays.has(cursor.getDay())) {
      dates.push(formatLocalDate(cursor));
    }
  }

  return dates;
}

document.getElementById("addShiftTemplateBtn")
?.addEventListener("click", () => openShiftTemplateEditor());

document.getElementById("closeShiftTemplatePopup")
?.addEventListener("click", closeShiftTemplateEditor);

document.getElementById("cancelShiftTemplateBtn")
?.addEventListener("click", closeShiftTemplateEditor);

document.getElementById("templateShiftType")
?.addEventListener("change", setTemplateShiftFieldState);

document.getElementById("saveShiftTemplateBtn")
?.addEventListener("click", () => {
  const name =
    document.getElementById("templateName").value.trim();
  const shift =
    document.getElementById("templateShiftType").value;
  const start =
    document.getElementById("templateStart").value;
  const end =
    document.getElementById("templateEnd").value;
  if (!name) {
    alert("Please enter a template name.");
    return;
  }

  if (shift !== "off" && (!start || !end)) {
    alert("Please enter the shift start and end time.");
    return;
  }

  const previous =
    shiftTemplates.find(item => item.id === editingShiftTemplateId);
  const template = {
    id:
      editingShiftTemplateId ||
      `shift-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    shift,
    start: shift === "off" ? "" : start,
    end: shift === "off" ? "" : end,
    breakStart:
      shift === "off"
        ? ""
        : document.getElementById("templateBreakStart").value,
    breakMinutes:
      shift === "off"
        ? 0
        : Number(document.getElementById("templateBreakMinutes").value) || 0,
    ruleStatus:
      document.getElementById("templateRuleStatus").value === "confirmed"
        ? "confirmed"
        : "manual",
    note: document.getElementById("templateNote").value.trim(),
    createdAt: previous?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  if (editingShiftTemplateId) {
    shiftTemplates = shiftTemplates.map(item =>
      item.id === editingShiftTemplateId ? template : item
    );
  } else {
    shiftTemplates.push(template);
  }

  saveShiftTemplates();
  renderShiftTemplates();
  closeShiftTemplateEditor();
});

function closeApplyTemplate() {
  applyTemplatePopup?.classList.add("hidden");
}

document.getElementById("openApplyTemplateBtn")
?.addEventListener("click", () => {
  if (shiftTemplates.length === 0) {
    alert("Add at least one shift template first.");
    openShiftTemplateEditor();
    return;
  }

  renderShiftTemplates();

  const monthStart =
    new Date(currentYear, currentMonth, 1);
  const monthEnd =
    new Date(currentYear, currentMonth + 1, 0);

  document.getElementById("applyStartDate").value =
    formatLocalDate(monthStart);
  document.getElementById("applyEndDate").value =
    formatLocalDate(monthEnd);
  document.getElementById("overwriteTemplateDates").checked = false;

  applyTemplatePopup?.classList.remove("hidden");
});

document.getElementById("closeApplyTemplatePopup")
?.addEventListener("click", closeApplyTemplate);

document.getElementById("cancelApplyTemplateBtn")
?.addEventListener("click", closeApplyTemplate);

document.querySelectorAll("#applyTemplatePopup .weekdayBtn")
.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    button.setAttribute(
      "aria-pressed",
      String(button.classList.contains("active"))
    );
  });
});

document.getElementById("selectAllWeekdaysBtn")
?.addEventListener("click", () => {
  setApplyWeekdaySelection(new Set([0, 1, 2, 3, 4, 5, 6]));
});

document.getElementById("clearWeekdaysBtn")
?.addEventListener("click", () => {
  setApplyWeekdaySelection(new Set());
});

document.getElementById("applyTemplateBtn")
?.addEventListener("click", () => {
  const templateId =
    document.getElementById("applyTemplateSelect").value;
  const template =
    shiftTemplates.find(item => item.id === templateId);
  const startValue =
    document.getElementById("applyStartDate").value;
  const endValue =
    document.getElementById("applyEndDate").value;
  const weekdays = getSelectedApplyWeekdays();
  const overwrite =
    document.getElementById("overwriteTemplateDates").checked;

  if (!template || !startValue || !endValue) {
    alert("Choose a template and date range.");
    return;
  }

  const start = new Date(startValue + "T00:00:00");
  const end = new Date(endValue + "T00:00:00");

  if (
    Number.isNaN(start.getTime()) ||
    Number.isNaN(end.getTime())
  ) {
    alert("Please enter a valid start and end date.");
    return;
  }

  const rangeDays =
    Math.floor((end - start) / 86400000) + 1;

  if (end < start) {
    alert("The end date must be after the start date.");
    return;
  }

  if (rangeDays > 366) {
    alert("Please apply one year or less at a time.");
    return;
  }

  if (weekdays.size === 0) {
    alert("Choose at least one weekday.");
    return;
  }

  const dates = getApplyDates(startValue, endValue, weekdays);
  const existingDates =
    dates.filter(dateKey =>
      Object.prototype.hasOwnProperty.call(shiftData, dateKey)
    );
  const appliedDates =
    overwrite
      ? dates
      : dates.filter(dateKey =>
          !Object.prototype.hasOwnProperty.call(shiftData, dateKey)
        );

  if (dates.length === 0) {
    alert("No dates match the selected weekdays.");
    return;
  }

  const overwritePreview =
    existingDates.length > 0
      ? `\nExisting dates: ${existingDates.slice(0, 10).join(", ")}${
          existingDates.length > 10 ? "…" : ""
        }`
      : "";
  const message = overwrite
    ? `Apply "${template.name}" to ${appliedDates.length} dates?` +
      `\n${existingDates.length} existing entries will be replaced.` +
      overwritePreview
    : `Apply "${template.name}" to ${appliedDates.length} empty dates?` +
      `\n${existingDates.length} existing entries will be kept.` +
      overwritePreview;

  if (!confirm(message)) return;

  appliedDates.forEach(dateKey => {
    const existing =
      shiftData[dateKey] && typeof shiftData[dateKey] === "object"
        ? shiftData[dateKey]
        : {};
    const templateEntry =
      getTemplateCalendarEntry(dateKey, template);

    shiftData[dateKey] = {
      ...existing,
      ...templateEntry,
      note: templateEntry.note || existing.note || ""
    };
  });

  saveShiftData();
  renderCalendar();
  syncCalendarToCalculator();
  updateHomeDashboard();
  closeApplyTemplate();

  alert(
    `${appliedDates.length} dates updated.` +
    (existingDates.length && !overwrite
      ? ` ${existingDates.length} existing entries were kept.`
      : "")
  );
});

document.getElementById("removeAppliedTemplateBtn")
?.addEventListener("click", () => {
  const templateId =
    document.getElementById("applyTemplateSelect").value;
  const template =
    shiftTemplates.find(item => item.id === templateId);
  const startValue =
    document.getElementById("applyStartDate").value;
  const endValue =
    document.getElementById("applyEndDate").value;
  const weekdays = getSelectedApplyWeekdays();

  if (!template || !startValue || !endValue) {
    alert("Choose a template and date range.");
    return;
  }

  const start = new Date(startValue + "T00:00:00");
  const end = new Date(endValue + "T00:00:00");

  if (
    Number.isNaN(start.getTime()) ||
    Number.isNaN(end.getTime()) ||
    end < start
  ) {
    alert("Please enter a valid date range.");
    return;
  }

  const rangeDays =
    Math.floor((end - start) / 86400000) + 1;

  if (rangeDays > 366) {
    alert("Please remove one year or less at a time.");
    return;
  }

  if (weekdays.size === 0) {
    alert("Choose at least one weekday.");
    return;
  }

  const matchingDates =
    getApplyDates(startValue, endValue, weekdays)
      .filter(dateKey =>
        shiftData[dateKey]?.source === "template" &&
        shiftData[dateKey]?.templateId === templateId
      );

  if (matchingDates.length === 0) {
    alert("No matching applied shifts were found.");
    return;
  }

  const preview =
    matchingDates.slice(0, 10).join(", ") +
    (matchingDates.length > 10 ? "…" : "");

  if (!confirm(
    `Remove "${template.name}" from ${matchingDates.length} dates?` +
    `\n${preview}` +
    "\nManual entries and other templates will not be deleted."
  )) return;

  matchingDates.forEach(dateKey => {
    delete shiftData[dateKey];
  });

  saveShiftData();
  renderCalendar();
  syncCalendarToCalculator();
  updateHomeDashboard();
  closeApplyTemplate();

  alert(`${matchingDates.length} applied shifts removed.`);
});

shiftTemplatePopup?.addEventListener("click", event => {
  if (event.target === shiftTemplatePopup) {
    closeShiftTemplateEditor();
  }
});

applyTemplatePopup?.addEventListener("click", event => {
  if (event.target === applyTemplatePopup) {
    closeApplyTemplate();
  }
});

renderShiftTemplates();

/* ==========================================================
   PART 9.5 — VERSIONED MONTHLY SALARY HISTORY
========================================================== */

const SALARY_HISTORY_STORAGE_KEY = "workpay_salary_history_v1";

let salaryHistory =
  readStoredJson(
    SALARY_HISTORY_STORAGE_KEY,
    [],
    value => Array.isArray(value)
  );

function copySnapshotData(value) {
  return JSON.parse(JSON.stringify(value));
}

function saveSalaryHistorySnapshot(result) {
  const period =
    `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}`;
  const calculatedAt = new Date().toISOString();
  const entries = Object.fromEntries(
    getMonthShiftEntries().map(([dateKey, entry]) => [
      dateKey,
      copySnapshotData(entry)
    ])
  );
  const factoryRuleBreakdown =
    getFactoryRuleBreakdown();

  const snapshot = {
    version: 2,
    period,
    calculatedAt,
    inputs: {
      hourlyWage: result.wage
    },
    payFormula: copySnapshotData(payFormula),
    monthSummary: copySnapshotData(result.monthSummary),
    factoryRules: copySnapshotData(factoryRules),
    entries,
    breakdown: {
      basicPay: result.basicPay,
      otPay: result.otPay,
      nightPay: result.nightPay,
      holidayPay: result.holidayPay,
      factoryRuleTotal: result.extraTotal,
      factoryRuleConfirmed: factoryRuleBreakdown.confirmed,
      factoryRuleManual: factoryRuleBreakdown.manual,
      grossSalary: result.grossSalary,
      insurance: result.insurance,
      netSalary: result.netSalary
    }
  };

  const existingIndex =
    salaryHistory.findIndex(item => item.period === period);

  if (existingIndex >= 0) {
    salaryHistory[existingIndex] = snapshot;
  } else {
    salaryHistory.push(snapshot);
  }

  salaryHistory.sort((a, b) =>
    String(b.period).localeCompare(String(a.period))
  );

  localStorage.setItem(
    SALARY_HISTORY_STORAGE_KEY,
    JSON.stringify(salaryHistory)
  );

  renderSalaryHistory();
}

function renderSalaryHistory() {
  const list = document.getElementById("historyList");
  if (!list) return;

  if (salaryHistory.length === 0) {
    list.innerHTML = `
      <p class="emptyTemplateState">
        No saved calculation yet. Use Calculate Salary to save a month.
      </p>
    `;
    return;
  }

  list.innerHTML = salaryHistory.map(snapshot => {
    const summary = snapshot.monthSummary || {};
    const breakdown = snapshot.breakdown || {};
    const ruleCount = Array.isArray(snapshot.factoryRules)
      ? snapshot.factoryRules.length
      : 0;

    return `
      <article class="salaryHistoryItem">
        <div class="salaryHistoryHeader">
          <div>
            <strong>${escapeTemplateText(snapshot.period)}</strong>
            <span>
              ${Number(summary.workDays || 0)} work days ·
              ${ruleCount} factory rules
            </span>
          </div>
          <strong>
            ₩${Math.round(Number(breakdown.netSalary || 0)).toLocaleString()}
          </strong>
        </div>
        <details>
          <summary>Saved calculation details</summary>
          <div class="salaryHistoryBreakdown">
            <span>Hourly wage</span>
            <strong>₩${Number(snapshot.inputs?.hourlyWage || 0).toLocaleString()}</strong>
            <span>Basic pay</span>
            <strong>₩${Math.round(Number(breakdown.basicPay || 0)).toLocaleString()}</strong>
            <span>OT / Night / Holiday</span>
            <strong>
              ₩${Math.round(
                Number(breakdown.otPay || 0) +
                Number(breakdown.nightPay || 0) +
                Number(breakdown.holidayPay || 0)
              ).toLocaleString()}
            </strong>
            <span>Factory adjustments</span>
            <strong>
              Confirmed ₩${Math.round(Number(breakdown.factoryRuleConfirmed || 0)).toLocaleString()}
              · User Manual ₩${Math.round(Number(
                breakdown.factoryRuleManual ??
                breakdown.factoryRuleProvisional ??
                0
              )).toLocaleString()}
            </strong>
            <span>Gross / Insurance</span>
            <strong>
              ₩${Math.round(Number(breakdown.grossSalary || 0)).toLocaleString()}
              / -₩${Math.round(Number(breakdown.insurance || 0)).toLocaleString()}
            </strong>
          </div>
        </details>
      </article>
    `;
  }).join("");
}

/* ==========================================================
   PART 10 — APP INITIALIZE
   Load Everything When App Starts
========================================================== */

/* ==========================================================
   PART 10.1 — Restore Local Data
========================================================== */

window.addEventListener("load", () => {

  // ===== Calendar =====
  renderCalendar();

  // ===== Calendar → Calculator =====
  syncCalendarToCalculator();

  // ===== Factory Rules =====
  renderFactoryRules();
  renderCalculatorRules();
  renderShiftTemplates();
  renderSalaryHistory();

  // ===== Home Dashboard =====
  updateHomeDashboard();

  // ===== Language =====
  const savedLang =
    localStorage.getItem("language") || "en";

  setLanguage(savedLang);

  // ===== Theme =====
  const savedTheme =
    localStorage.getItem("theme");

  if (savedTheme === "light") {

    document.body.classList.add("light");

    if (themeBtn) {
      themeBtn.textContent = "☀️";
    }

  }

});

/* ==========================================================
   PART 10.2 — Auto Refresh Dashboard
========================================================== */

function refreshDashboard() {

  syncCalendarToCalculator();
  updateHomeDashboard();

}

/* ==========================================================
   END OF WORKPAY KR PRO v1.0
========================================================== */









