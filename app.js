/* ==========================================================
   WORKPAY KR OFFICIAL APP.JS
   PART 1 — GLOBAL VARIABLES + THEME + NAVIGATION
   Version : v1.0 Official
========================================================== */

console.log("🚀 WorkPay KR Official Loaded");

/* ==========================================================
   PART 1.1 — Global DOM Elements
========================================================== */

const body = document.body;

// Pages
const pages = document.querySelectorAll(".page");

// Bottom Navigation Tabs
const tabs = document.querySelectorAll(".tab");

// Theme Button
const themeBtn = document.getElementById("themeBtn");

// Language Select
const languageSelect = document.getElementById("languageSelect");


/* ==========================================================
   PART 1.2 — Theme Engine
   Auto / Light / Dark
========================================================== */

const savedTheme = localStorage.getItem("theme") || "dark";

applyTheme(savedTheme);

function applyTheme(theme) {

  body.classList.remove("light", "dark");

  body.classList.add(theme);

  localStorage.setItem("theme", theme);

  if (themeBtn) {
    themeBtn.textContent =
      theme === "dark" ? "☀️" : "🌙";
  }

}

// Theme Toggle
themeBtn?.addEventListener("click", () => {

  const nextTheme =
    body.classList.contains("dark")
      ? "light"
      : "dark";

  applyTheme(nextTheme);

});


/* ==========================================================
   PART 1.3 — Bottom Navigation
========================================================== */

tabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    const targetPage = tab.dataset.page;

    // Remove Active
    tabs.forEach((btn) => btn.classList.remove("active"));
    pages.forEach((page) => page.classList.remove("activePage"));

    // Add Active
    tab.classList.add("active");

    document
      .getElementById(targetPage)
      ?.classList.add("activePage");

  });

});


/* ==========================================================
   PART 1.4 — Home Dashboard Elements
========================================================== */

const homeSalary = document.getElementById("homeSalary");
const homeDays = document.getElementById("homeDays");
const homeOT = document.getElementById("homeOT");
const homeNight = document.getElementById("homeNight");
const homeHoliday = document.getElementById("homeHoliday");
const homeWage = document.getElementById("homeWage");


/* ==========================================================
   PART 1.5 — Calculator Elements
========================================================== */

const hourlyWageInput = document.getElementById("hourlyWage");
const workingDaysInput = document.getElementById("workingDays");
const mealAllowanceInput = document.getElementById("mealAllowance");

const basicHoursInput = document.getElementById("basicHours");
const otHoursInput = document.getElementById("otHours");
const nightHoursInput = document.getElementById("nightHours");
const holidayHoursInput = document.getElementById("holidayHours");


/* ==========================================================
   PART 1.6 — Salary Result Elements
========================================================== */

const grossSalaryBox = document.getElementById("grossSalary");
const insuranceBox = document.getElementById("insurance");
const netSalaryBox =
  document.getElementById("netSalary") ||
  document.getElementById("takeHomeSalary");

const otPayBox = document.getElementById("otPay");
const nightPayBox = document.getElementById("nightPay");


/* ==========================================================
   PART 1.7 — Helper Functions
========================================================== */

// Korean Won Formatter
function formatWon(value) {

  return "₩" + Math.round(value).toLocaleString("en-US");

}

// Number Formatter
function toNumber(value) {

  return Number(value) || 0;

}

/* ==========================================================
   PART 2 — LANGUAGE TRANSLATION ENGINE
   English / Korean / Myanmar
========================================================== */

/* ==========================================================
   PART 2.1 — Translation Dictionary
========================================================== */

const translations = {

  /* ================= ENGLISH ================= */

  en: {

    // Navigation
    tab_home: "Home",
    tab_calendar: "Calendar",
    tab_calculator: "Calc",
    tab_history: "History",
    tab_profile: "Profile",

    // Home
    home_takehome: "This Month Take Home",
    home_expected: "Expected salary after insurance",
    today_shift: "Today's Shift",

    shift_day: "☀️ Day",
    shift_night: "🌙 Night",
    shift_holiday: "🎌 Holiday",

    // Calculator
    calculator_title: "Salary Calculator",
    hourly_wage: "Hourly Wage",
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

    // Profile
    profile_title: "My Profile",
    profile_subtitle: "Myanmar Worker in Korea",

    language_title: "🌐 Language",
    appearance_title: "🎨 Appearance",
    work_profile_title: "🏭 Work Profile",

    theme_auto: "Auto",
    theme_light: "Light",
    theme_dark: "Dark",

    // Placeholder
    company_name: "Company Name",
    hourly_wage_placeholder: "Hourly Wage",
    working_days_placeholder: "Working Days",
    meal_allowance_placeholder: "Meal Allowance",
    visa_type: "Visa Type (E9 / F2 / D2)"

  },

  /* ================= KOREAN ================= */

  ko: {

    tab_home: "홈",
    tab_calendar: "달력",
    tab_calculator: "계산기",
    tab_history: "기록",
    tab_profile: "프로필",

    home_takehome: "이번 달 실수령 예상 급여",
    home_expected: "4대보험 공제 후 예상 급여",

    today_shift: "오늘 근무",

    shift_day: "☀️ 주간",
    shift_night: "🌙 야간",
    shift_holiday: "🎌 휴일",

    calculator_title: "급여 계산기",

    hourly_wage: "시급",
    working_days: "근무일수",
    meal_allowance: "식대",

    working_hours: "근무 시간",

    basic_hours: "기본 시간",
    ot_hours: "연장 시간",
    night_hours: "야간 시간",
    holiday_hours: "휴일 시간",

    calculate_salary: "급여 계산하기",

    take_home_salary: "실수령액",
    gross_salary: "총 급여",

    insurance_title: "4대보험",
    ot_pay: "연장수당",
    night_pay: "야간수당",

    profile_title: "내 프로필",
    profile_subtitle: "한국 미얀마 근로자",

    language_title: "🌐 언어",
    appearance_title: "🎨 화면 설정",
    work_profile_title: "🏭 근무 정보",

    theme_auto: "자동",
    theme_light: "라이트",
    theme_dark: "다크",

    company_name: "회사명",
    hourly_wage_placeholder: "시급 입력",
    working_days_placeholder: "근무일수",
    meal_allowance_placeholder: "식대 입력",
    visa_type: "비자 종류"

  },

  /* ================= MYANMAR ================= */

  my: {

    tab_home: "ပင်မ",
    tab_calendar: "ပြက္ခဒိန်",
    tab_calculator: "တွက်ချက်",
    tab_history: "မှတ်တမ်း",
    tab_profile: "ပရိုဖိုင်",

    home_takehome: "ဒီလ လက်ခံရမယ့် လစာ",
    home_expected: "အာမခံဖြတ်ပြီး ခန့်မှန်းလစာ",

    today_shift: "ဒီနေ့ အလုပ်ဆိုင်း",

    shift_day: "☀️ နေ့ဆိုင်း",
    shift_night: "🌙 ညဆိုင်း",
    shift_holiday: "🎌 အားလပ်ရက်",

    calculator_title: "လစာတွက်စက်",

    hourly_wage: "တစ်နာရီလုပ်ခ",
    working_days: "အလုပ်ဆင်းရက်",
    meal_allowance: "ထမင်းစရိတ်",

    working_hours: "အလုပ်ချိန်",

    basic_hours: "ပုံမှန်နာရီ",
    ot_hours: "OT နာရီ",
    night_hours: "ညနာရီ",
    holiday_hours: "အားလပ်ရက်နာရီ",

    calculate_salary: "လစာတွက်မယ်",

    take_home_salary: "လက်ခံရမယ့် လစာ",
    gross_salary: "စုစုပေါင်းလစာ",

    insurance_title: "အာမခံ",
    ot_pay: "OT ကြေး",
    night_pay: "ညကြေး",

    profile_title: "ကျွန်ုပ် ပရိုဖိုင်",
    profile_subtitle: "ကိုရီးယားရှိ မြန်မာအလုပ်သမား",

    language_title: "🌐 ဘာသာစကား",
    appearance_title: "🎨 အရောင်အပြင်အဆင်",
    work_profile_title: "🏭 အလုပ်အချက်အလက်",

    theme_auto: "အလိုအလျောက်",
    theme_light: "အလင်း",
    theme_dark: "အမှောင်",

    company_name: "ကုမ္ပဏီနာမည်",
    hourly_wage_placeholder: "တစ်နာရီလုပ်ခ",
    working_days_placeholder: "အလုပ်ဆင်းရက်",
    meal_allowance_placeholder: "ထမင်းစရိတ်",
    visa_type: "ဗီဇာအမျိုးအစား"

  }

};

/* ==========================================================
   PART 2.2 — Apply Language
========================================================== */

function setLanguage(lang) {

  const dict = translations[lang];

  if (!dict) return;

  // Text
  document.querySelectorAll("[data-lang]").forEach((el) => {

    const key = el.dataset.lang;

    if (dict[key]) {
      el.textContent = dict[key];
    }

  });

  // Placeholder
  document.querySelectorAll("[data-lang-placeholder]").forEach((el) => {

    const key = el.dataset.langPlaceholder;

    if (dict[key]) {
      el.placeholder = dict[key];
    }

  });

  // Save
  localStorage.setItem("language", lang);

  if (languageSelect) {
    languageSelect.value = lang;
  }

}

/* ==========================================================
   PART 2.3 — Load Saved Language
========================================================== */

const savedLanguage =
  localStorage.getItem("language") || "en";

setLanguage(savedLanguage);

/* ==========================================================
   PART 2.4 — Change Language Event
========================================================== */

languageSelect?.addEventListener("change", (e) => {

  setLanguage(e.target.value);

});

/* ==========================================================
   PART 3 — HOME DASHBOARD + MONTHLY SUMMARY ENGINE
   Dashboard Auto Sync (Calendar → Home)
========================================================== */

/* ==========================================================
   PART 3.1 — Dashboard Update Function
========================================================== */

function updateHomeDashboard() {

  const summary = getMonthlySummary();

  // Working Summary
  homeDays.textContent = summary.workingDays;
  homeOT.textContent = summary.otHours;
  homeNight.textContent = summary.nightHours;
  homeHoliday.textContent = summary.holidayHours;

  // Hourly Wage
  const wage =
    Number(localStorage.getItem("hourlyWage")) ||
    toNumber(hourlyWageInput?.value);

  homeWage.textContent = formatWon(wage);

  // Current Take Home (Last Calculate Result)
  const savedSalary =
    Number(localStorage.getItem("takeHomeSalary")) || 0;

  homeSalary.textContent = formatWon(savedSalary);

}


/* ==========================================================
   PART 3.2 — Save Hourly Wage
========================================================== */

hourlyWageInput?.addEventListener("input", () => {

  localStorage.setItem(
    "hourlyWage",
    toNumber(hourlyWageInput.value)
  );

  updateHomeDashboard();

});


/* ==========================================================
   PART 3.3 — Monthly Summary Auto Fill Calculator
========================================================== */

function syncSummaryToCalculator() {

  const summary = getMonthlySummary();

  workingDaysInput.value = summary.workingDays;
  basicHoursInput.value = summary.workingDays * 8;

  otHoursInput.value = summary.otHours;
  nightHoursInput.value = summary.nightHours;
  holidayHoursInput.value = summary.holidayHours;

}


/* ==========================================================
   PART 3.4 — Calendar Change Refresh
========================================================== */

function refreshDashboard() {

  syncSummaryToCalculator();

  updateHomeDashboard();

}


/* ==========================================================
   PART 3.5 — Save Take Home Salary
========================================================== */

function saveTakeHomeSalary(value) {

  localStorage.setItem("takeHomeSalary", value);

  updateHomeDashboard();

}

/* ==========================================================
   PART 4.1 — CALENDAR CORE
   Calendar Variables + LocalStorage
========================================================== */

// ===== Calendar DOM =====
const calendarGrid = document.getElementById("calendarGrid");
const monthTitle = document.getElementById("monthTitle");

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
const todayBtn = document.getElementById("todayBtn");

const jumpMonth = document.getElementById("jumpMonth");
const jumpYear = document.getElementById("jumpYear");
const jumpBtn = document.getElementById("jumpBtn");

// ===== Current Calendar =====
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// ===== Month Names =====
const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

// ===== Shift Data =====
let shiftData =
  JSON.parse(localStorage.getItem("workpay_shift_data")) || {};

// Save Shift Data
function saveShiftData() {
  localStorage.setItem(
    "workpay_shift_data",
    JSON.stringify(shiftData)
  );
}

// Date Key
function getDateKey(year, month, day) {

  const mm = String(month + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");

  return `${year}-${mm}-${dd}`;

}

/* ==========================================================
   PART 4.2 — RENDER CALENDAR
========================================================== */

function renderCalendar() {

  if (!calendarGrid) return;

  calendarGrid.innerHTML = "";

  // Month Title
  monthTitle.textContent =
    `${monthNames[currentMonth]} ${currentYear}`;

  // Jump Selector Sync
  jumpMonth.value = currentMonth;
  jumpYear.value = currentYear;

  const today = new Date();

  const firstDay =
    new Date(currentYear, currentMonth, 1).getDay();

  const daysInMonth =
    new Date(currentYear, currentMonth + 1, 0).getDate();

  // Empty Cells
  for (let i = 0; i < firstDay; i++) {

    const empty = document.createElement("div");
    empty.className = "emptyDay";

    calendarGrid.appendChild(empty);

  }

  // Calendar Days
  for (let day = 1; day <= daysInMonth; day++) {

    const dateKey =
      getDateKey(currentYear, currentMonth, day);

    const saved =
      shiftData[dateKey] || {};

    const cell = document.createElement("div");
    cell.className = "dayCell";

    // Today Highlight
    if (
      today.getFullYear() === currentYear &&
      today.getMonth() === currentMonth &&
      today.getDate() === day
    ) {
      cell.classList.add("today");
    }

    // Sunday Color
    const weekDay =
      new Date(currentYear, currentMonth, day).getDay();

    if (weekDay === 0) {
      cell.classList.add("sunday");
    }

    // Shift Colors
    if (saved.shift === "day") cell.classList.add("dayColor");
    if (saved.shift === "night") cell.classList.add("nightColor");
    if (saved.shift === "holiday") cell.classList.add("holidayWorkColor");
    if (saved.shift === "off") cell.classList.add("offColor");

    cell.innerHTML = `<span>${day}</span>`;

    // Popup
    cell.addEventListener("click", () => {
      openDayPopup(dateKey);
    });

    calendarGrid.appendChild(cell);

  }

}

/* ==========================================================
   PART 4.3 — CALENDAR NAVIGATION
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

  const today = new Date();

  currentMonth = today.getMonth();
  currentYear = today.getFullYear();

  renderCalendar();

});

// Jump Month / Year
jumpBtn?.addEventListener("click", () => {

  currentMonth = Number(jumpMonth.value);
  currentYear = Number(jumpYear.value);

  renderCalendar();

});

/* ==========================================================
   PART 5.0 — POPUP STATE
========================================================== */

const dayPopup = document.getElementById("dayPopup");
const popupDate = document.getElementById("popupDate");
const closePopup = document.getElementById("closePopup");

let selectedDate = "";
let selectedShift = "day";













