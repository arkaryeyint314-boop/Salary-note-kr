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
    language_title: "🌐 Language",
    home_takehome: "This Month Take Home",
    home_expected: "Expected salary after insurance",
    hourly_wage: "Hourly Wage",
    working_days: "Working Days",
    today_shift: "Today's Shift",
    shift_day: "☀️ Day",
    shift_night: "🌙 Night",
    shift_holiday: "🎌 Holiday"
  },

  ko: {
    language_title: "🌐 언어",
    home_takehome: "이번 달 실수령 예상 급여",
    home_expected: "4대 보험 공제 후 예상 급여",
    hourly_wage: "시급",
    working_days: "근무일수",
    today_shift: "오늘 근무",
    shift_day: "☀️ 주간",
    shift_night: "🌙 야간",
    shift_holiday: "🎌 휴일"
  },

  my: {
    language_title: "🌐 ဘာသာစကား",
    home_takehome: "ဒီလ လက်ခံရမယ့်လစာ",
    home_expected: "အာမခံဖြတ်ပြီး ရရှိမယ့်လစာ",
    hourly_wage: "တစ်နာရီလုပ်ခ",
    working_days: "အလုပ်လုပ်ရက်",
    today_shift: "ဒီနေ့ အလုပ်ဆိုင်း",
    shift_day: "☀️ နေ့ဆိုင်း",
    shift_night: "🌙 ညဆိုင်း",
    shift_holiday: "🎌 ပိတ်ရက်"
  }
};

function setLanguage(lang) {
  const dict = translations[lang];

  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.dataset.lang;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  localStorage.setItem("language", lang);

  if (languageSelect) {
    languageSelect.value = lang;
  }
}

// Load saved language
const savedLang = localStorage.getItem("language") || "en";
setLanguage(savedLang);

// Change language
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
