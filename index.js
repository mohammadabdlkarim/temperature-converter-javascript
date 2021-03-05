const convertButton = document.getElementById("convertButton");
const temperature = document.getElementById("temperature");
const from = document.getElementById("unitFrom");
const to = document.getElementById("unitTo");
const result = document.getElementById("result");

let unitFrom = "";
let unitTo = "";
let tempValue = 0;

from.addEventListener("change", () => {
  unitFrom = getSelectValue("unitFrom");
});

to.addEventListener("change", () => {
  unitTo = getSelectValue("unitTo");
});

temperature.addEventListener("change", () => {
  tempValue = getSelectValue("temperature");
  result.value = convert(tempValue, unitFrom, unitTo);
});

convertButton.addEventListener("click", () => {
  result.value = convert(tempValue, unitFrom, unitTo);
});

function convert(value, unitFrom, unitTo) {
  switch (unitFrom) {
    case "Celsius":
      switch (unitTo) {
        case "Fahrenheit":
          return value * 1.8 + 32;
        case "Kelvin":
          return value + 273.15;
        default:
          return value;
      }
    case "Fahrenheit":
      switch (unitTo) {
        case "Celsius":
          return (value - 32) / 1.8;
        case "Kelvin":
          return (value + 459.67) * (5 / 9);
        default:
          return value;
      }
    case "Kelvin":
      switch (unitTo) {
        case "Celsius":
          return value - 273.15;
        case "Fahrenheit":
          return value * 1.8 - 459.67;
        default:
          return value;
      }
  }
}

function setConverted() {
  let res = convert(tempValue, from, to);
  result.value = res;
}

function getSelectValue(id) {
  return document.getElementById(id).value;
}
