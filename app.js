/* ==========================================================
   WORKPAY KR PRO v1.0
   PART 1 — THEME + BOTTOM NAVIGATION
========================================================== */

// ===== Theme Button =====
const themeBtn = document.getElementById("themeBtn");

// ===== Bottom Navigation =====
const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

// ===== Page Switch =====
tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    const pageId = tab.dataset.page;

    // Active Tab
    tabs.forEach(btn => btn.classList.remove("active"));
    tab.classList.add("active");

    // Active Page
    pages.forEach(page => page.classList.remove("activePage"));

    document
      .getElementById(pageId)
      ?.classList.add("activePage");

  });

});

// ===== Theme Toggle =====
themeBtn?.addEventListener("click", () => {

  document.body.classList.toggle("light");

  const isLight =
    document.body.classList.contains("light");

  themeBtn.textContent = isLight ? "☀️" : "🌙";

  localStorage.setItem(
    "theme",
    isLight ? "light" : "dark"
  );

});

// ===== Load Saved Theme =====
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

  document.body.classList.add("light");

  if (themeBtn) themeBtn.textContent = "☀️";

}

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
   PART 4.2 — Calendar State
========================================================== */

// Current Month / Year
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Korea Calendar Data
let shiftData =
  JSON.parse(localStorage.getItem("workpay_shift_data")) || {};

// Month Names
const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

/* ==========================================================
   PART 4.3 — Calendar Storage
========================================================== */

// Save Shift Data
function saveShiftData() {

  localStorage.setItem(
    "workpay_shift_data",
    JSON.stringify(shiftData)
  );

}

// Date Key (2026-09-15)
function getDateKey(year, month, day) {

  const mm = String(month + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");

  return `${year}-${mm}-${dd}`;

}

/* ==========================================================
   PART 4.4 — Render Calendar
========================================================== */

function renderCalendar() {

  // Calendar မရှိရင် မလုပ်ဘူး
  if (!calendarGrid) return;

  // Clear Calendar Grid
  calendarGrid.innerHTML = "";

  // Month Title
  monthTitle.textContent =
    `${monthNames[currentMonth]} ${currentYear}`;

  // Jump Selector Sync
  jumpMonth.value = currentMonth;
  jumpYear.value = currentYear;

  const today = new Date();

  // Month Information
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

    const dateKey =
      getDateKey(currentYear, currentMonth, day);

    const saved =
      shiftData[dateKey] || {};

    const cell = document.createElement("div");
    cell.className = "dayCell";

    /* ===== Today Highlight ===== */

    if (
      today.getFullYear() === currentYear &&
      today.getMonth() === currentMonth &&
      today.getDate() === day
    ) {
      cell.classList.add("today");
    }

    /* ===== Sunday Highlight ===== */

    const weekDay =
      new Date(currentYear, currentMonth, day).getDay();

    if (weekDay === 0) {
      cell.classList.add("sunday");
    }

    /* ===== Shift Colors ===== */

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

    /* ===== Day Number ===== */

    cell.innerHTML = `<span>${day}</span>`;

    /* ===== Open Day Popup ===== */

    cell.addEventListener("click", () => {
      openDayPopup(dateKey);
    });

    calendarGrid.appendChild(cell);

  }

} // ===== End renderCalendar() =====

/* ==========================================================
   PART 4.8 — Calendar Navigation
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

// Today
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



