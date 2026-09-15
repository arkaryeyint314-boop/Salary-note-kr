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
const popupNote = document.getElementById("popupNote");

const closePopup = document.getElementById("closePopup");
const saveDayBtn = document.getElementById("saveDayBtn");
const deleteDayBtn = document.getElementById("deleteDayBtn");

// ===== Popup State =====
let selectedDate = "";
let selectedShift = "day";

/* ==========================================================
   PART 5.2 — Open / Close Popup
========================================================== */

// ===== Open Popup =====
function openDayPopup(dateKey) {

  selectedDate = dateKey;

  popupDate.textContent = dateKey;

  const saved = shiftData[dateKey] || {};

  selectedShift = saved.shift || "day";

  popupStart.value = saved.start || "08:30";
  popupEnd.value = saved.end || "17:30";

  popupBreakStart.value = saved.breakStart || "00:00";
  popupBreak.value = saved.breakMinutes || 60;

  popupOT.value = saved.otHours || 0;
  popupNote.value = saved.note || "";

  // Shift Button Active
  document.querySelectorAll(".shift-btn").forEach(btn => {

    btn.classList.remove("active");

    if (btn.dataset.shift === selectedShift) {
      btn.classList.add("active");
    }

  });

  // Auto OT
  calculateOTHours();

  // Show Popup
  dayPopup.classList.remove("hidden");

}

// ===== Close Button =====
closePopup?.addEventListener("click", () => {

  dayPopup.classList.add("hidden");

});

// ===== Click Outside Popup =====
dayPopup?.addEventListener("click", (e) => {

  if (e.target === dayPopup) {
    dayPopup.classList.add("hidden");
  }

});

/* ==========================================================
   PART 5.3 — Shift Button Selection
========================================================== */

document.querySelectorAll(".shift-btn").forEach(btn => {

  btn.addEventListener("click", () => {

    selectedShift = btn.dataset.shift;

    document.querySelectorAll(".shift-btn").forEach(item => {
      item.classList.remove("active");
    });

    btn.classList.add("active");

  });

});

/* ==========================================================
   PART 5.4 — Auto OT Calculator
========================================================== */

// HH:MM → Minutes
function timeToMinutes(time) {

  const [hour, minute] = time.split(":").map(Number);

  return (hour * 60) + minute;

}

// Calculate OT
function calculateOTHours() {

  if (!popupStart.value || !popupEnd.value) return;

  let startMin = timeToMinutes(popupStart.value);
  let endMin = timeToMinutes(popupEnd.value);

  // Night Shift
  if (endMin <= startMin) {
    endMin += 24 * 60;
  }

  const breakMinutes =
    Number(popupBreak.value) || 0;

  const totalHours =
    (endMin - startMin - breakMinutes) / 60;

  const otHours =
    Math.max(0, totalHours - 8);

  popupOT.value = otHours.toFixed(1);

}

// Auto Update
[popupStart, popupEnd, popupBreak].forEach(input => {

  input?.addEventListener("input", calculateOTHours);
  input?.addEventListener("change", calculateOTHours);

});

/* ==========================================================
   PART 5.5 — Save Calendar Day
========================================================== */

saveDayBtn?.addEventListener("click", () => {

  shiftData[selectedDate] = {

    shift: selectedShift,

    start: popupStart.value,
    end: popupEnd.value,

    breakStart: popupBreakStart.value,
    breakMinutes: Number(popupBreak.value),

    otHours: Number(popupOT.value),

    note: popupNote.value

  };

  // Save LocalStorage
  saveShiftData();

  // Refresh Calendar
  renderCalendar();

  // Refresh Calculator
  if (typeof syncCalendarToCalculator === "function") {
    syncCalendarToCalculator();
  }

  // Refresh Dashboard
  if (typeof updateHomeDashboard === "function") {
    updateHomeDashboard();
  }

  // Close Popup
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
========================================================== */

function syncCalendarToCalculator() {

  let workingDays = 0;

  let basicHours = 0;
  let otHours = 0;
  let nightHours = 0;
  let holidayHours = 0;

  Object.values(shiftData).forEach(day => {

    // ===== Working Days =====
    if (
      day.shift === "day" ||
      day.shift === "night" ||
      day.shift === "holiday"
    ) {

      workingDays++;

      // Basic Hours (8h/day)
      basicHours += 8;

    }

    // ===== OT =====
    otHours += Number(day.otHours || 0);

    // ===== Night Shift =====
    if (day.shift === "night") {

      let start = timeToMinutes(day.start || "20:30");
      let end = timeToMinutes(day.end || "08:30");

      if (end <= start) end += 1440;

      const worked =
        (end - start - Number(day.breakMinutes || 60)) / 60;

      nightHours += Math.max(0, worked);

    }

    // ===== Holiday Shift =====
    if (day.shift === "holiday") {

      let start = timeToMinutes(day.start || "08:30");
      let end = timeToMinutes(day.end || "17:30");

      if (end <= start) end += 1440;

      const worked =
        (end - start - Number(day.breakMinutes || 60)) / 60;

      holidayHours += Math.max(0, worked);

    }

  });

  // ===== Fill Calculator =====
  workingDaysInput.value = workingDays;

  basicHoursInput.value = basicHours;
  otHoursInput.value = otHours.toFixed(1);
  nightHoursInput.value = nightHours.toFixed(1);
  holidayHoursInput.value = holidayHours.toFixed(1);

  // ===== Refresh Home Dashboard =====
  updateHomeDashboard();

}

// Refresh Calendar
renderCalendar();

// Calendar → Calculator
syncCalendarToCalculator();

// Home Dashboard
updateHomeDashboard();

renderCalendar();
syncCalendarToCalculator();
updateHomeDashboard();

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









