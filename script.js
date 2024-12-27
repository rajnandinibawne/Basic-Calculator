// Get the display element
const display = document.getElementById("display");

// Function to append values to the display
function appendValue(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

// Function to clear the display
function clearDisplay() {
  display.innerText = "0";
}

// Function to remove the last character
function backspace() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

// Function to calculate the result
function calculate() {
  try {
    display.innerText = eval(display.innerText.replace("x", "*"));
  } catch {
    display.innerText = "Error";
  }
}
