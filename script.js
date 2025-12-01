const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;
    const action = btn.dataset.action;

    if (action === "clear") {
      display.value = "";
      return;
    }

    if (action === "backspace") {
      display.value = display.value.slice(0, -1);
      return;
    }

    if (action === "equals") {
      calculateResult();
      return;
    }

    // append number or operator
    display.value += value;
  });
});

function calculateResult() {
  try {
    if (display.value.includes("/0")) {
      display.value = "Error";
      return;
    }
    const result = eval(display.value); // simple for this small project
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}
