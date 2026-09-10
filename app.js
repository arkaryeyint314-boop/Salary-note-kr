// ===============================
// WorkPay KR PRO v2 - Phase 1
// Navigation + Theme + Calculator
// ===============================

// ---------- Navigation ----------
const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

function openPage(pageId) {
  pages.forEach((page) => page.classList.remove("activePage"));
  tabs.forEach((tab) => tab.classList.remove("active"));

  const page = document.getElementById(pageId);
  if (page) page.classList.add("activePage");

  const activeTab = document.querySelector(`.tab[data-page="${pageId}"]`);
  if (activeTab) activeTab.classList.add("active");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    openPage(tab.dataset.page);
  });
});

openPage("home");

// ---------- Theme ----------
const themeBtn = document.getElementById("themeBtn");

themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const dark = document.body.classList.contains("dark");

  themeBtn.textContent = dark ? "☀️" : "🌙";
  localStorage.setItem("theme", dark ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  if (themeBtn) themeBtn.textContent = "☀️";
}

// ---------- Salary Calculator ----------
function formatWon(num) {
  return "₩" + Math.round(num).toLocaleString("en-US");
}

function calculateSalary() {
  const wage = Number(hourlyWage.value || 0);
  const days = Number(workingDays.value || 0);
  const meal = Number(mealAllowance.value || 0);
  const basic = Number(basicHours.value || 8);
  const ot = Number(otHours.value || 0);
  const night = Number(nightHours.value || 0);
  const holiday = Number(holidayHours.value || 0);

  const basicPay = wage * basic * days;
  const otPayValue = wage * 1.5 * ot;
  const nightPayValue = wage * 1.5 * night;
  const holidayPayValue = wage * 2 * holiday;

  const gross =
    basicPay + otPayValue + nightPayValue + holidayPayValue + meal;

  const insuranceValue = gross * 0.09;
  const net = gross - insuranceValue;

  grossSalary.textContent = formatWon(gross);
  insurance.textContent = formatWon(insuranceValue);
  otPay.textContent = formatWon(otPayValue);
  nightPay.textContent = formatWon(nightPayValue);
  netSalary.textContent = formatWon(net);

  homeSalary.textContent = formatWon(net);
  homeWage.textContent = formatWon(wage);
  homeDays.textContent = days || 0;
}
