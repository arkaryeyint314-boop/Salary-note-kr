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
