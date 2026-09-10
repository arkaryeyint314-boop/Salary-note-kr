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

// ---------- Calculator ----------
function formatWon(num) {
  return "₩" + Math.round(num).toLocaleString();
}

function calculateSalary() {
  const wage = Number(document.getElementById("hourlyWage").value) || 0;
  const days = Number(document.getElementById("workingDays").value) || 0;
  const meal = Number(document.getElementById("mealAllowance").value) || 0;
  const basic = Number(document.getElementById("basicHours").value) || 8;
  const ot = Number(document.getElementById("otHours").value) || 0;
  const night = Number(document.getElementById("nightHours").value) || 0;
  const holiday = Number(document.getElementById("holidayHours").value) || 0;

  const basicPay = wage * basic * days;
  const otPay = wage * 1.5 * ot;
  const nightPay = wage * 1.5 * night;
  const holidayPay = wage * 2 * holiday;

  const gross = basicPay + otPay + nightPay + holidayPay + meal;
  const insurance = gross * 0.09;
  const net = gross - insurance;

  document.getElementById("grossSalary").textContent = formatWon(gross);
  document.getElementById("insurance").textContent = formatWon(insurance);
  document.getElementById("otPay").textContent = formatWon(otPay);
  document.getElementById("nightPay").textContent = formatWon(nightPay);
  document.getElementById("netSalary").textContent = formatWon(net);

  document.getElementById("homeSalary").textContent = formatWon(net);
  document.getElementById("homeWage").textContent = formatWon(wage);
  document.getElementById("homeDays").textContent = days;
}
