const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;
function convert() {
  if (toFahrenheit.checked) {
    temp = (textBox.value * 9) / 5 + 32;
    result.textContent = temp + "°F"; 

  } else if (toCelsius.checked) {
    temp =(textBox.value -32) * 5 / 9;
    result.textContent = temp + "°C";
  } else {
    result.textContent = "Please select your unit";
  }
}
