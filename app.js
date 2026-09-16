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
    meal_allowance: "Meal Allowance",
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
    meal_allowance_placeholder: "Meal Allowance",

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
    meal_allowance: "식대",

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
    meal_allowance_placeholder: "식대 입력",

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
    meal_allowance: "ထမင်းစရိတ်",

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
    meal_allowance_placeholder: "ထမင်းစရိတ်",

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

  // Calendar Summary
  let workDays = 0;
  let otHours = 0;
  let nightHours = 0;
  let holidayHours = 0;

  Object.values(shiftData).forEach(day => {

    if (day.shift === "day") workDays++;
    if (day.shift === "night") workDays++;
    if (day.shift === "holiday") workDays++;

    otHours += Number(day.otHours || 0);

    nightHours += Number(day.nightHours || 0);

    holidayHours += Number(day.holidayHours || 0);

  });

  // Summary Cards
  homeDays.textContent = workDays;
  homeOT.textContent = otHours.toFixed(1);
  homeNight.textContent = nightHours.toFixed(1);
  homeHoliday.textContent = holidayHours.toFixed(1);

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

// ===== Calendar LocalStorage =====
let shiftData =
  JSON.parse(localStorage.getItem("workpay_shift_data")) || {};

// ===== Month Names =====
const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

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

});

// Next Month
nextMonth?.addEventListener("click", () => {

  currentMonth++;

  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }

  renderCalendar();

});

// Today Button
todayBtn?.addEventListener("click", () => {

  const now = new Date();

  currentMonth = now.getMonth();
  currentYear = now.getFullYear();

  renderCalendar();

});

// Jump Month / Year
jumpBtn?.addEventListener("click", () => {

  currentMonth = Number(jumpMonth.value);
  currentYear = Number(jumpYear.value);

  renderCalendar();

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
const popupNight = document.getElementById("popupNight"); // NEW
const popupNote = document.getElementById("popupNote");

const closePopup = document.getElementById("closePopup");
const saveDayBtn = document.getElementById("saveDayBtn");
const deleteDayBtn = document.getElementById("deleteDayBtn");

// ===== Popup State =====
let selectedDate = "";
let selectedShift = "day";

/* ==========================================================
   PART 5.2 — Open / Close Day Popup (Official Manual)
========================================================== */

function openDayPopup(dateKey) {

  selectedDate = dateKey;
  popupDate.textContent = dateKey;

  const saved = shiftData[dateKey] || {};

  // ===== Restore Selected Shift =====
  selectedShift = saved.shift || "day";

  shiftButtons.forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.dataset.shift === selectedShift
    );
  });

  // ===== Restore Saved Values =====
  popupStart.value = saved.start || "";
  popupEnd.value = saved.end || "";

  popupBreakStart.value = saved.breakStart || "";
  popupBreak.value = saved.breakMinutes ?? 0; // Default 0

  popupOT.value = saved.otHours ?? 0;

  if (popupNight) {
    popupNight.value = saved.nightHours ?? 0;
  }

  popupNote.value = saved.note || "";

  // ===== Show Popup =====
  dayPopup.classList.remove("hidden");

  // Auto Calculate
  if (popupStart.value && popupEnd.value) {
    calculateOTHours();
  }

}

// ===== Close Popup (X) =====
closePopup?.addEventListener("click", () => {
  dayPopup.classList.add("hidden");
});

// ===== Close Popup (Background Click) =====
dayPopup?.addEventListener("click", (e) => {
  if (e.target === dayPopup) {
    dayPopup.classList.add("hidden");
  }
});

/* ==========================================================
   PART 5.3 — Shift Button Selection (Official Manual)
========================================================== */

const shiftButtons = document.querySelectorAll(".shift-btn");

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

    // Manual Mode
    // Time / Break / OT / Note ကို မပြောင်းဘူး။

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

// ===== Auto Calculate =====
function calculateOTHours() {

  if (!popupStart.value || !popupEnd.value) return;

  let startMin = timeToMinutes(popupStart.value);
  let endMin = timeToMinutes(popupEnd.value);

  // Next day (17:30→01:30 / 20:30→08:30)
  if (endMin <= startMin) {
    endMin += 1440;
  }

  const breakMinutes = Number(popupBreak.value) || 0;

  const workedHours =
    Math.max(0, (endMin - startMin - breakMinutes) / 60);

  // ===== OT =====
  const otHours = Math.max(0, workedHours - 8);

  // ===== Night Hours (22:00 ~ 06:00) =====
  let nightMinutes = 0;

  const overlapStart = Math.max(startMin, 22 * 60);
  const overlapEnd = Math.min(endMin, 30 * 60);

  if (overlapEnd > overlapStart) {
    nightMinutes = overlapEnd - overlapStart;
  }

  const nightHours = nightMinutes / 60;

  // ===== Holiday Hours =====
  const date = new Date(selectedDate + "T00:00:00");
  const isSaturday = date.getDay() === 6;

  const isPublicHoliday =
    koreaHolidays[currentYear] &&
    koreaHolidays[currentYear][selectedDate];

  let holidayValue = 0;

  if (selectedShift === "holiday" || isSaturday || isPublicHoliday) {
    holidayValue = Math.min(workedHours, 8);
  }

  // ===== Update Popup =====
  popupOT.value = otHours.toFixed(1);

  if (popupNight) {
    popupNight.value = nightHours.toFixed(1);
  }

  if (popupHoliday) {
    popupHoliday.value = holidayValue.toFixed(1);
  }

}

// ===== Auto Update =====
[popupStart, popupEnd, popupBreak].forEach(input => {
  input?.addEventListener("input", calculateOTHours);
  input?.addEventListener("change", calculateOTHours);
});


/* ==========================================================
   PART 5.5 — Save Calendar Day (WORKPAY KR OFFICIAL)
========================================================== */

saveDayBtn?.addEventListener("click", () => {

  let startMin = timeToMinutes(popupStart.value);
  let endMin = timeToMinutes(popupEnd.value);

  if (endMin <= startMin) {
    endMin += 1440;
  }

  const breakMinutes = Number(popupBreak.value) || 0;

  const workedHours =
    Math.max(0, (endMin - startMin - breakMinutes) / 60);

  const date = new Date(selectedDate + "T00:00:00");

  const isSaturday = date.getDay() === 6;

  const isPublicHoliday =
    koreaHolidays[currentYear] &&
    koreaHolidays[currentYear][selectedDate];

  // ===== Save =====
  shiftData[selectedDate] = {

    shift: selectedShift,

    start: popupStart.value,
    end: popupEnd.value,

    breakStart: popupBreakStart.value,
    breakMinutes: breakMinutes,

    basicHours:
      selectedShift === "off"
        ? 0
        : Math.min(workedHours, 8),

    otHours: Number(popupOT.value) || 0,

    nightHours: Number(popupNight?.value || 0),

    holidayHours:
      selectedShift === "holiday" || isSaturday || isPublicHoliday
        ? Math.min(workedHours, 8)
        : 0,

    note: popupNote.value

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

  let workingDays = 0;

  let basicHours = 0;
  let otHours = 0;
  let nightHours = 0;
  let holidayHours = 0;

  Object.values(shiftData).forEach(day => {

    if (day.shift !== "off") {
      workingDays++;
    }

    basicHours += Number(day.basicHours || 0);
    otHours += Number(day.otHours || 0);
    nightHours += Number(day.nightHours || 0);
    holidayHours += Number(day.holidayHours || 0);

  });

  workingDaysInput.value = workingDays;

  basicHoursInput.value = basicHours.toFixed(1);
  otHoursInput.value = otHours.toFixed(1);
  nightHoursInput.value = nightHours.toFixed(1);
  holidayHoursInput.value = holidayHours.toFixed(1);

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
const mealAllowanceInput = document.getElementById("mealAllowance");

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

function calculateSalary() {

  // ===== User Input =====
  const wage = Number(hourlyWageInput.value) || 0;
  const meal = Number(mealAllowanceInput.value) || 0;

  const basicHours = Number(basicHoursInput.value) || 0;
  const otHours = Number(otHoursInput.value) || 0;
  const nightHours = Number(nightHoursInput.value) || 0;
  const holidayHours = Number(holidayHoursInput.value) || 0;

  // ===== Salary Formula =====
  const basicPay = wage * basicHours;

  const otPay = wage * 1.5 * otHours;

  const nightPay = wage * 0.5 * nightHours;

  const holidayPay = wage * 1.5 * holidayHours;

  // Meal Allowance
  let grossSalary =
    basicPay +
    otPay +
    nightPay +
    holidayPay +
    meal;

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

// ===== Popup Open =====
addRuleBtn?.addEventListener("click", () => {

  document.getElementById("ruleType").value = "plus";
  document.getElementById("ruleName").value = "";
  document.getElementById("ruleAmount").value = "";

  rulePopup.classList.remove("hidden");

});

// ===== Popup Close =====
closeRulePopup?.addEventListener("click", () => {

  rulePopup.classList.add("hidden");

});

// ===== Click Outside =====
rulePopup?.addEventListener("click", (e) => {

  if (e.target === rulePopup) {
    rulePopup.classList.add("hidden");
  }

});

/* ==========================================================
   PART 8.2 — LocalStorage
========================================================== */

let factoryRules =
  JSON.parse(localStorage.getItem("factoryRules")) || [];

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

    item.innerHTML = `
      <div>
        <div class="${rule.type}">
          ${rule.type === "plus" ? "🟢 +" : "🔴 -"} ${rule.name}
        </div>

        <strong>₩${Number(rule.amount).toLocaleString()}</strong>
      </div>

      <button class="removeBtn" data-index="${index}">
        Delete
      </button>
    `;

    list.appendChild(item);

  });

  // Delete Button
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

  const name =
    document.getElementById("ruleName").value.trim();

  const amount =
    Number(document.getElementById("ruleAmount").value);

  if (!name || amount <= 0) {

    alert("Please enter rule name and amount.");

    return;

  }

  factoryRules.push({

    type,
    name,
    amount

  });

  saveFactoryRules();

  renderFactoryRules();

  rulePopup.classList.add("hidden");

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

    row.className = "payItemRow";

    row.innerHTML = `
      <div class="payInfo">

        <span>
          ${rule.type === "plus" ? "🟢 +" : "🔴 -"}
          ${rule.name}
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

  let total = 0;

  factoryRules.forEach(rule => {

    if (rule.type === "plus") {

      total += Number(rule.amount);

    } else {

      total -= Number(rule.amount);

    }

  });

  document.getElementById("extraTotal").textContent =
    `₩${total.toLocaleString()}`;

  return total;

}

/* ==========================================================
   PART 9 — EXTRA PAY / DEDUCTION ENGINE
   Factory Rules + Manual Pay Items → Salary Calculator
========================================================== */

/* ==========================================================
   PART 9.1 — Calculate Extra Total
========================================================== */

function getExtraPayTotal() {

  let total = 0;

  factoryRules.forEach(rule => {

    const amount = Number(rule.amount) || 0;

    if (rule.type === "plus") {
      total += amount;
    } else {
      total -= amount;
    }

  });

  return total;

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









