// getting the required html elements
const select = document.getElementById("car");
const days = document.getElementById("days");
const para = document.getElementById("para");
const form = document.querySelector(".container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // prevents the default reloading page behaviour on submit
  if (days.value <= 0) {
    // 0 or negative values will be declined
    alert("Day(s) can't be negative or zero")
    // days input will also be emptied
    days.value=""
  } else {
    if (select.value == "Economy") {
        // printing total cost in paragraph
      para.textContent = `Total cost is ${days.value * 4000}`;
    } else if (select.value == "Midsize") {
      para.textContent = `Total cost is ${days.value * 10000}`;
    } else {
      para.textContent = `Total cost is ${days.value * 20000}`;
    }
  }
});
