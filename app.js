// ===== WorkPay KR PRO =====

// ---------- Elements ----------
const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");
const themeBtn = document.getElementById("themeBtn");

// ---------- Navigation ----------
function openPage(pageId) {
  pages.forEach(page => page.classList.remove("activePage"));
  tabs.forEach(tab => tab.classList.remove("active"));

  const page = document.getElementById(pageId);
  if (page) page.classList.add("activePage");

  const activeTab = document.querySelector(`.tab[data-page="${pageId}"]`);
  if (activeTab) activeTab.classList.add("active");
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => openPage(tab.dataset.page));
});

openPage("home");

// ---------- Theme ----------
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const dark = document.body.classList.contains("dark");
  themeBtn.textContent = dark ? "☀️" : "🌙";
  localStorage.setItem("theme", dark ? "dark" : "light");
});

// ---------- Language ----------

const languageSelect = document.getElementById("languageSelect");

const translations = {
  en: {
    // Home
    language_title: "🌐 Language",
    home_takehome: "This Month Take Home",
    home_expected: "Expected salary after insurance",
    hourly_wage: "Hourly Wage",
    working_days: "Working Days",
    today_shift: "Today's Shift",
    shift_day: "☀️ Day",
    shift_night: "🌙 Night",
    shift_holiday: "🎌 Holiday",
calculator_title: "Salary Calculator",
meal_allowance: "Meal Allowance",
working_hours: "Working Hours",
basic_hours: "Basic Hours",
ot_hours: "OT Hours",
night_hours: "Night Hours",
holiday_hours: "Holiday Hours",
calculate_salary: "Calculate Salary",
take_home_salary: "Take Home Salary",
gross_salary: "Gross Salary",
insurance: "Insurance",
ot_pay: "OT Pay",
night_pay: "Night Pay",
working_days_placeholder: "Working Days",
meal_allowance_placeholder: "Meal Allowance",
basic_hours_placeholder: "Basic Hours",
ot_hours_placeholder: "OT Hours",
night_hours_placeholder: "Night Hours",
holiday_hours_placeholder: "Holiday Hours",
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
 appearance_title: "🎨 Appearance",
 theme_auto: "Auto",
 theme_light: "Light",
 theme_dark: "Dark",
 work_profile_title: "🏭 Work Profile",

    // Placeholders
    company_name: "Company Name",
    hourly_wage_placeholder: "Hourly Wage",
    visa_type: "Visa Type (E9 / F2 / D2)"
  },

  ko: {
    // Home
    language_title: "🌐 언어",
    home_takehome: "이번 달 실수령 예상 급여",
    home_expected: "4대 보험 공제 후 예상 급여",
    hourly_wage: "시급",
    working_days: "근무일수",
    today_shift: "오늘 근무",
    shift_day: "☀️ 주간",
    shift_night: "🌙 야간",
    shift_holiday: "🎌 휴일",
 calculator_title: "급여 계산기",
meal_allowance: "식대",
working_hours: "근무 시간",
basic_hours: "기본 근무시간",
ot_hours: "연장 근무시간",
night_hours: "야간 근무시간",
holiday_hours: "휴일 근무시간",
calculate_salary: "급여 계산하기",
take_home_salary: "실수령 급여",
gross_salary: "총 급여",
insurance: "4대 보험",
ot_pay: "연장수당",
night_pay: "야간수당",
working_days_placeholder: "근무일수",
meal_allowance_placeholder: "식대",
basic_hours_placeholder: "기본 시간",
ot_hours_placeholder: "연장 시간",
night_hours_placeholder: "야간 시간",
holiday_hours_placeholder: "휴일 시간",
 meal_allowance: "식대",
working_hours: "근무 시간",
basic_hours: "기본 근무시간",
ot_hours: "연장 근무시간",
night_hours: "야간 근무시간",
holiday_hours: "휴일 근무시간",
calculate_salary: "급여 계산하기",
take_home_salary: "실수령 급여",
gross_salary: "총 급여",
insurance_title: "4대 보험",
ot_pay: "연장수당",
night_pay: "야간수당",
 
    // Profile
    profile_title: "내 프로필",
    profile_subtitle: "한국에서 일하는 미얀마 근로자",
    appearance_title: "🎨 화면 설정",
    theme_auto: "자동",
    theme_light: "라이트",
    theme_dark: "다크",
    work_profile_title: "🏭 근무 정보",

    // Placeholders
    company_name: "회사 이름",
    hourly_wage_placeholder: "시급",
    visa_type: "비자 종류 (E9 / F2 / D2)"
  },

  my: {
    // Home
    language_title: "🌐 ဘာသာစကား",
    home_takehome: "ဒီလ လက်ခံရမယ့်လစာ",
    home_expected: "အာမခံဖြတ်ပြီး ရရှိမယ့်လစာ",
    hourly_wage: "တစ်နာရီလုပ်ခ",
    working_days: "အလုပ်လုပ်ရက်",
    today_shift: "ဒီနေ့ အလုပ်ဆိုင်း",
    shift_day: "☀️ နေ့ဆိုင်း",
    shift_night: "🌙 ညဆိုင်း",
    shift_holiday: "🎌 ပိတ်ရက်",
calculator_title: "လစာတွက်စက်",
meal_allowance: "စားစရိတ်",
working_hours: "အလုပ်ချိန်",
basic_hours: "ပုံမှန်အလုပ်ချိန်",
ot_hours: "အချိန်ပို (OT)",
night_hours: "ညဆိုင်းနာရီ",
holiday_hours: "ပိတ်ရက်နာရီ",
calculate_salary: "လစာတွက်မယ်",
take_home_salary: "လက်ခံရမယ့်လစာ",
gross_salary: "စုစုပေါင်းလစာ",
insurance: "အာမခံ",
ot_pay: "OT ကြေး",
night_pay: "ညဆိုင်းကြေး",
working_days_placeholder: "အလုပ်လုပ်ရက်",
meal_allowance_placeholder: "စားစရိတ်",
basic_hours_placeholder: "ပုံမှန်နာရီ",
ot_hours_placeholder: "OT နာရီ",
night_hours_placeholder: "ညဆိုင်းနာရီ",
holiday_hours_placeholder: "ပိတ်ရက်နာရီ",
    meal_allowance: "စားစရိတ်",
working_hours: "အလုပ်ချိန်",
basic_hours: "ပုံမှန်အလုပ်ချိန်",
ot_hours: "အချိန်ပို (OT)",
night_hours: "ညဆိုင်းနာရီ",
holiday_hours: "ပိတ်ရက်နာရီ",
calculate_salary: "လစာတွက်မယ်",
take_home_salary: "လက်ခံရမယ့်လစာ",
gross_salary: "စုစုပေါင်းလစာ",
insurance_title: "အာမခံ",
ot_pay: "OT ကြေး",
night_pay: "ညဆိုင်းကြေး",
    
    // Profile
    profile_title: "ကျွန်ုပ်၏ ပရိုဖိုင်",
    profile_subtitle: "ကိုရီးယားရှိ မြန်မာအလုပ်သမား",
    appearance_title: "🎨 အပြင်အဆင်",
    theme_auto: "အလိုအလျောက်",
    theme_light: "အလင်း",
    theme_dark: "အမှောင်",
    work_profile_title: "🏭 အလုပ်အချက်အလက်",

    // Placeholders
    company_name: "ကုမ္ပဏီအမည်",
    hourly_wage_placeholder: "တစ်နာရီလုပ်ခ",
    visa_type: "ဗီဇာအမျိုးအစား (E9 / F2 / D2)"
  }
};

function setLanguage(lang) {
  const dict = translations[lang];

  // Text ပြောင်းမယ်
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.dataset.lang;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Placeholder ပြောင်းမယ်
  document.querySelectorAll("[data-lang-placeholder]").forEach(el => {
    const key = el.dataset.langPlaceholder;
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Language သိမ်းထားမယ်
  localStorage.setItem("language", lang);

  if (languageSelect) {
    languageSelect.value = lang;
  }
}

// App ဖွင့်တဲ့အချိန် Language ပြန်တင်မယ်
const savedLang = localStorage.getItem("language") || "en";
setLanguage(savedLang);

// Language ပြောင်းတဲ့အချိန်
if (languageSelect) {
  languageSelect.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
}

// ---------- Calculator ----------

function formatWon(num) {
  return "₩" + Math.round(num).toLocaleString();
}

function calculateSalary() {
  // Validate required fields
const wageInput = document.getElementById("hourlyWage");
const daysInput = document.getElementById("workingDays");

if (wageInput.value.trim() === "") {
  alert("Please enter your hourly wage.");
  wageInput.focus();
  return;
}

if (daysInput.value.trim() === "") {
  alert("Please enter working days.");
  daysInput.focus();
  return;
}
  const wage = Number(document.getElementById("hourlyWage").value) || 0;
  const days = Number(document.getElementById("workingDays").value) || 0;
  const meal = Number(document.getElementById("mealAllowance").value) || 0;
  const basic = Number(document.getElementById("basicHours").value) || 8;
  const ot = Number(document.getElementById("otHours").value) || 0;
  const night = Number(document.getElementById("nightHours").value) || 0;
  const holiday = Number(document.getElementById("holidayHours").value) || 0;

  // Salary calculation
  const basicPay = wage * basic * days;
  const otPay = wage * 1.5 * ot;
  const nightPay = wage * 1.5 * night;
  const holidayPay = wage * 2 * holiday;

  const gross = basicPay + otPay + nightPay + holidayPay + meal;
  const insurance = gross * 0.09;
  const net = gross - insurance;

  // Calculator page results
  document.getElementById("grossSalary").textContent = formatWon(gross);
  document.getElementById("insurance").textContent = formatWon(insurance);
  document.getElementById("otPay").textContent = formatWon(otPay);
  document.getElementById("nightPay").textContent = formatWon(nightPay);
  document.getElementById("netSalary").textContent = formatWon(net);

  // Home page summary
  document.getElementById("homeSalary").textContent = formatWon(net);
  document.getElementById("homeWage").textContent = formatWon(wage);
  document.getElementById("homeDays").textContent = days;
}

console.log("WorkPay KR JS Loaded");

// ===== CALENDAR ENGINE =====

const calendarGrid = document.getElementById("calendarGrid");
const monthTitle = document.getElementById("monthTitle");

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

// ===== Korea Public Holidays Database =====

const koreaHolidays = {

  // ================= 2025 =================
  2025: {
    "2025-01-01": "신정",
    "2025-01-27": "임시공휴일",
    "2025-01-28": "설날 연휴",
    "2025-01-29": "설날",
    "2025-01-30": "설날 연휴",

    "2025-03-01": "삼일절",
    "2025-03-03": "대체공휴일",

    "2025-05-01": "노동절",
    "2025-05-05": "어린이날 · 부처님 오신 날",
    "2025-05-06": "대체공휴일",

    "2025-06-03": "대통령선거",
    "2025-06-06": "현충일",

    "2025-08-15": "광복절",

    "2025-10-03": "개천절",
    "2025-10-05": "추석 연휴",
    "2025-10-06": "추석",
    "2025-10-07": "추석 연휴",
    "2025-10-08": "대체공휴일",
    "2025-10-09": "한글날",

    "2025-12-25": "크리스마스"
  },

  // ================= 2026 =================
  2026: {
    "2026-01-01": "신정",

    "2026-02-16": "설날 연휴",
    "2026-02-17": "설날",
    "2026-02-18": "설날 연휴",

    "2026-03-01": "삼일절",
    "2026-03-02": "대체공휴일",

    "2026-05-01": "노동절",
    "2026-05-05": "어린이날",
    "2026-05-25": "부처님 오신 날",

    "2026-06-06": "현충일",

    "2026-07-17": "제헌절",

    "2026-08-15": "광복절",
    "2026-08-17": "대체공휴일",

    "2026-09-24": "추석 연휴",
    "2026-09-25": "추석",
    "2026-09-26": "추석 연휴",
    "2026-09-28": "대체공휴일",

    "2026-10-03": "개천절",
    "2026-10-05": "대체공휴일",
    "2026-10-09": "한글날",

    "2026-12-25": "크리스마스"
  },

  // ================= 2027 =================
  2027: {
    "2027-01-01": "신정",

    "2027-02-06": "설날 연휴",
    "2027-02-07": "설날",
    "2027-02-08": "설날 연휴",
    "2027-02-09": "대체공휴일",

    "2027-03-01": "삼일절",

    "2027-05-01": "노동절",
    "2027-05-05": "어린이날",
    "2027-05-13": "부처님 오신 날",

    "2027-06-06": "현충일",

    "2027-07-17": "제헌절",
    "2027-08-15": "광복절",
    "2027-08-16": "대체공휴일",

    "2027-09-14": "추석 연휴",
    "2027-09-15": "추석",
    "2027-09-16": "추석 연휴",

    "2027-10-03": "개천절",
    "2027-10-04": "대체공휴일",
    "2027-10-09": "한글날",
    "2027-10-11": "대체공휴일",

    "2027-12-25": "크리스마스",
    "2027-12-27": "대체공휴일"
  },

  // ================= 2028 =================
  2028: {
    "2028-01-01": "신정",

    "2028-01-25": "설날 연휴",
    "2028-01-26": "설날",
    "2028-01-27": "설날 연휴",

    "2028-03-01": "삼일절",

    "2028-05-01": "노동절",
    "2028-05-05": "어린이날",
    "2028-05-12": "부처님 오신 날",

    "2028-06-06": "현충일",

    "2028-07-17": "제헌절",

    "2028-08-15": "광복절",

    "2028-10-02": "추석 연휴",
    "2028-10-03": "추석",
    "2028-10-04": "추석 연휴",
    "2028-10-05": "대체공휴일",

    "2028-10-09": "한글날",

    "2028-12-25": "크리스마스"
  },

  // ================= 2029 =================
  2029: {
    "2029-01-01": "신정",

    "2029-02-12": "설날 연휴",
    "2029-02-13": "설날",
    "2029-02-14": "설날 연휴",

    "2029-03-01": "삼일절",

    "2029-05-01": "노동절",
    "2029-05-05": "어린이날",
    "2029-05-21": "부처님 오신 날",

    "2029-06-06": "현충일",

    "2029-07-17": "제헌절",

    "2029-08-15": "광복절",

    "2029-09-21": "추석 연휴",
    "2029-09-22": "추석",
    "2029-09-23": "추석 연휴",
    "2029-09-24": "대체공휴일",

    "2029-10-03": "개천절",
    "2029-10-09": "한글날",

    "2029-12-25": "크리스마스"
  },

  // ================= 2030 =================
  2030: {
    "2030-01-01": "신정",

    "2030-02-01": "설날 연휴",
    "2030-02-02": "설날",
    "2030-02-03": "설날 연휴",

    "2030-03-01": "삼일절",

    "2030-05-01": "노동절",
    "2030-05-05": "어린이날",
    "2030-05-10": "부처님 오신 날",

    "2030-06-06": "현충일",

    "2030-07-17": "제헌절",

    "2030-08-15": "광복절",

    "2030-09-11": "추석 연휴",
    "2030-09-12": "추석",
    "2030-09-13": "추석 연휴",

    "2030-10-03": "개천절",
    "2030-10-09": "한글날",

    "2030-12-25": "크리스마스"
  },

  // ================= 2031 =================
  2031: {
    "2031-01-01": "신정",

    "2031-01-22": "설날 연휴",
    "2031-01-23": "설날",
    "2031-01-24": "설날 연휴",

    "2031-03-01": "삼일절",

    "2031-05-01": "노동절",
    "2031-05-05": "어린이날",
    "2031-04-30": "부처님 오신 날",

    "2031-06-06": "현충일",

    "2031-07-17": "제헌절",

    "2031-08-15": "광복절",

    "2031-09-30": "추석 연휴",
    "2031-10-01": "추석",
    "2031-10-02": "추석 연휴",

    "2031-10-03": "개천절",
    "2031-10-09": "한글날",

    "2031-12-25": "크리스마스"
  },

  // ================= 2032 =================
  2032: {
    "2032-01-01": "신정",

    "2032-02-09": "설날 연휴",
    "2032-02-10": "설날",
    "2032-02-11": "설날 연휴",

    "2032-03-01": "삼일절",

    "2032-05-01": "노동절",
    "2032-05-05": "어린이날",
    "2032-05-18": "부처님 오신 날",

    "2032-06-06": "현충일",

    "2032-07-17": "제헌절",

    "2032-08-15": "광복절",

    "2032-09-18": "추석 연휴",
    "2032-09-19": "추석",
    "2032-09-20": "추석 연휴",

    "2032-10-03": "개천절",
    "2032-10-09": "한글날",

    "2032-12-25": "크리스마스"
  },

    // ================= 2033 =================
  2033: {
    "2033-01-01": "신정",

    "2033-01-28": "설날 연휴",
    "2033-01-29": "설날",
    "2033-01-30": "설날 연휴",

    "2033-03-01": "삼일절",

    "2033-05-01": "노동절",
    "2033-05-05": "어린이날",
    "2033-05-07": "부처님 오신 날",

    "2033-06-06": "현충일",

    "2033-07-17": "제헌절",

    "2033-08-15": "광복절",

    "2033-09-07": "추석 연휴",
    "2033-09-08": "추석",
    "2033-09-09": "추석 연휴",

    "2033-10-03": "개천절",
    "2033-10-09": "한글날",

    "2033-12-25": "크리스마스"
  },

  // ================= 2034 =================
  2034: {
    "2034-01-01": "신정",

    "2034-02-16": "설날 연휴",
    "2034-02-17": "설날",
    "2034-02-18": "설날 연휴",

    "2034-03-01": "삼일절",

    "2034-05-01": "노동절",
    "2034-05-05": "어린이날",
    "2034-05-26": "부처님 오신 날",

    "2034-06-06": "현충일",

    "2034-07-17": "제헌절",

    "2034-08-15": "광복절",

    "2034-09-26": "추석 연휴",
    "2034-09-27": "추석",
    "2034-09-28": "추석 연휴",

    "2034-10-03": "개천절",
    "2034-10-09": "한글날",

    "2034-12-25": "크리스마스"
  },

  // ================= 2035 =================
  2035: {
    "2035-01-01": "신정",

    "2035-02-05": "설날 연휴",
    "2035-02-06": "설날",
    "2035-02-07": "설날 연휴",

    "2035-03-01": "삼일절",

    "2035-05-01": "노동절",
    "2035-05-05": "어린이날",
    "2035-05-15": "부처님 오신 날",

    "2035-06-06": "현충일",

    "2035-07-17": "제헌절",

    "2035-08-15": "광복절",

    "2035-09-15": "추석 연휴",
    "2035-09-16": "추석",
    "2035-09-17": "추석 연휴",

    "2035-10-03": "개천절",
    "2035-10-09": "한글날",

    "2035-12-25": "크리스마스"
  }

};
  
function getDateKey(year, month, day) {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

function renderCalendar() {

  if (!calendarGrid) return;

  calendarGrid.innerHTML = "";

  monthTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  document.getElementById("jumpMonth").value = currentMonth;
  document.getElementById("jumpYear").value = currentYear;

  const today = new Date();

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // ✅ ဒီနှစ် Holiday Data ကိုယူ
  const holidayData = koreaHolidays[currentYear] || {};

  // Empty Cells
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    calendarGrid.appendChild(empty);
  }

  // Days
  for (let day = 1; day <= daysInMonth; day++) {

    const cell = document.createElement("div");
    cell.className = "dayCell";

    const date = new Date(currentYear, currentMonth, day);
    const weekDay = date.getDay();
    const dateKey = getDateKey(currentYear, currentMonth, day);

    const dayNumber = document.createElement("div");
    dayNumber.className = "dayNumber";
    dayNumber.textContent = day;
    cell.appendChild(dayNumber);

    // Sunday
    if (weekDay === 0) {
      cell.classList.add("sunday");
    }

    // Today
    if (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    ) {
      cell.classList.add("today");
    }

    // Holiday (နှစ်အလိုက်)
    if (holidayData[dateKey]) {
      cell.classList.add("holiday");

      const holidayName = document.createElement("div");
      holidayName.className = "holidayName";
      holidayName.innerHTML = holidayData[dateKey].replace(" 연휴", "<br>연휴");

      cell.appendChild(holidayName);
    }

    calendarGrid.appendChild(cell);
  }

}

// Month buttons
document.getElementById("prevMonth")?.addEventListener("click", () => {
  currentMonth--;

  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }

  renderCalendar();
});

document.getElementById("nextMonth")?.addEventListener("click", () => {
  currentMonth++;

  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }

  renderCalendar();
});

renderCalendar();

// Today Button
document.getElementById("todayBtn")?.addEventListener("click",()=>{

  const today=new Date();

  currentMonth=today.getMonth();
  currentYear=today.getFullYear();

  renderCalendar();

});

// Jump Button
document.getElementById("jumpBtn")?.addEventListener("click",()=>{

  currentMonth=Number(document.getElementById("jumpMonth").value);
  currentYear=Number(document.getElementById("jumpYear").value);

  renderCalendar();

});
