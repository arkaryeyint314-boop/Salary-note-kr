// ===== WorkPay KR Salary Calculator =====

// Money formatter
function formatWon(value) {
  return "₩" + Math.round(value).toLocaleString("en-US");
}

// Calculate salary
function calculateSalary() {
  const wage = Number(document.getElementById("hourlyWage").value) || 0;
  const meal = Number(document.getElementById("mealAllowance").value) || 0;
  const days = Number(document.getElementById("workingDays").value) || 0;

  const basicHours = Number(document.getElementById("basicHours").value) || 0;
  const otHours = Number(document.getElementById("otHours").value) || 0;
  const nightHours = Number(document.getElementById("nightHours").value) || 0;
  const holidayHours = Number(document.getElementById("holidayHours").value) || 0;

  const basicPay = wage * basicHours * days;
  const overtimePay = wage * 1.5 * otHours;
  const nightPay = wage * 1.5 * nightHours;
  const holidayPay = wage * 2 * holidayHours;

  const grossSalary =
    basicPay + overtimePay + nightPay + holidayPay + meal;

  // Simple estimate (about 9%)
  const insurance = grossSalary * 0.09;

  const netSalary = grossSalary - insurance;

  // Show results
  document.getElementById("basicPay").innerText = formatWon(basicPay);
  document.getElementById("otPay").innerText = formatWon(overtimePay);
  document.getElementById("nightPay").innerText = formatWon(nightPay);
  document.getElementById("holidayPay").innerText = formatWon(holidayPay);

  document.getElementById("mealPay").innerText = formatWon(meal);
  document.getElementById("grossSalary").innerText = formatWon(grossSalary);
  document.getElementById("insurance").innerText = formatWon(insurance);
  document.getElementById("netSalary").innerText = formatWon(netSalary);

  saveHistory(netSalary);
}

// Clear inputs
function clearAll() {
  document.querySelectorAll("input").forEach(input => {
    if (input.type === "number") input.value = "";
  });

  document.getElementById("basicHours").value = 8;
  document.getElementById("otHours").value = 0;
  document.getElementById("nightHours").value = 0;
  document.getElementById("holidayHours").value = 0;

  ["basicPay","otPay","nightPay","holidayPay",
   "mealPay","grossSalary","insurance","netSalary"]
   .forEach(id=>{
      document.getElementById(id).innerText="₩0";
   });
}

// ===== Theme =====
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeBtn.innerText = "☀️";
  } else {
    themeBtn.innerText = "🌙";
  }
});

// ===== History =====
function saveHistory(netSalary) {

  const history =
    JSON.parse(localStorage.getItem("salaryHistory")) || [];

  history.unshift({
    date: new Date().toLocaleDateString("en-GB"),
    salary: netSalary
  });

  if (history.length > 12) history.pop();

  localStorage.setItem("salaryHistory", JSON.stringify(history));

  loadHistory();
}

function loadHistory() {

  const history =
    JSON.parse(localStorage.getItem("salaryHistory")) || [];

  const list = document.getElementById("historyList");

  if (history.length === 0) {
    list.innerHTML = "No salary history yet.";
    return;
  }

  list.innerHTML = history.map(item => `
    <div style="
      display:flex;
      justify-content:space-between;
      padding:12px 0;
      border-bottom:1px solid #273449;">
        <span>${item.date}</span>
        <strong>${formatWon(item.salary)}</strong>
    </div>
  `).join("");

}

loadHistory();

// ===== Bottom Navigation =====

const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    pages.forEach(p => p.classList.remove("activePage"));

    tab.classList.add("active");

    const page = document.getElementById(tab.dataset.page);
    if(page){
      page.classList.add("activePage");
    }

  });
});

// ===== Theme =====

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
      themeBtn.innerHTML="☀️";
      localStorage.setItem("theme","dark");
  }else{
      themeBtn.innerHTML="🌙";
      localStorage.setItem("theme","light");
  }

});

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
    themeBtn.innerHTML="☀️";
}
