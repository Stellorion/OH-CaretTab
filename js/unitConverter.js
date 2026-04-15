// Get references to the select elements and the result pre element
const unitTypeSelect = document.querySelector("[data-unit-type]");
const fromUnitSelect = document.querySelector("[data-unit-from]");
const toUnitSelect = document.querySelector("[data-unit-to]");
const unitResPre = document.querySelector("[data-unitRes]");
const unitValue = document.querySelector("[data-unit-value]");

// Define options for each unit type
const unitOptions = {
  area: ["Square Meters", "Square Feet", "Square Yards"],
  bytes: ["Bytes", "Kilobytes", "Megabytes"],
  length: ["Meters", "Feet", "Inches"],
  temperature: ["Celsius", "Fahrenheit", "Kelvin"],
  time: ["Seconds", "Minutes", "Hours"],
  volume: ["Liters", "Gallons", "Cubic Meters"],
  weight: ["Kilograms", "Pounds", "Ounces"],
};

// Conversion factors for unit types
const unitConversionFactors = {
  area: {
    "square meters": 1,
    "square feet": 10.7639,
    "square yards": 1.19599,
  },
  bytes: {
    bytes: 1,
    kilobytes: 0.001,
    megabytes: 0.000001,
  },
  length: {
    meters: 1,
    feet: 3.28084,
    inches: 39.3701,
  },
  temperature: {
    celsius: {
      fahrenheit: (value) => (value * 9) / 5 + 32,
      kelvin: (value) => value + 273.15,
    },
    fahrenheit: {
      celsius: (value) => ((value - 32) * 5) / 9,
      kelvin: (value) => ((value - 32) * 5) / 9 + 273.15,
    },
    kelvin: {
      celsius: (value) => value - 273.15,
      fahrenheit: (value) => (value * 9) / 5 - 459.67,
    },
  },
  time: {
    seconds: 1,
    minutes: 1 / 60,
    hours: 1 / 3600,
  },
  volume: {
    liters: 1,
    gallons: 0.264172,
    "cubic meters": 0.001,
  },
  weight: {
    kilograms: 1,
    pounds: 2.20462,
    ounces: 35.274,
  },
};

// Function to update options based on the selected unit type
function updateUnitOptions() {
  const selectedUnitType = unitTypeSelect.value;
  const options = unitOptions[selectedUnitType] || [];

  // Clear existing options
  fromUnitSelect.innerHTML = "";
  toUnitSelect.innerHTML = "";

  // Populate new options
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    fromUnitSelect.appendChild(optionElement);

    const optionElementClone = optionElement.cloneNode(true);
    toUnitSelect.appendChild(optionElementClone);
  });

  // Calculate and display the initial result
  calculateResult();
}

function roundTo3DecimalPlaces(number) {
  const rounded = Math.round(number * 1000) / 1000;
  return rounded.toFixed(3).replace(/\.?0+$/, ""); // Remove trailing zeros
}

function calculateTemperature(selectedFromUnit, selectedToUnit, inputValue) {
  switch (selectedFromUnit) {
    case "celsius":
      return selectedToUnit === "fahrenheit"
        ? (inputValue * 9) / 5 + 32
        : selectedToUnit === "kelvin"
        ? inputValue + 273.15
        : inputValue;
    case "fahrenheit":
      return selectedToUnit === "celsius"
        ? ((inputValue - 32) * 5) / 9
        : selectedToUnit === "kelvin"
        ? ((inputValue - 32) * 5) / 9 + 273.15
        : inputValue;
    case "kelvin":
      return selectedToUnit === "celsius"
        ? inputValue - 273.15
        : selectedToUnit === "fahrenheit"
        ? ((inputValue - 273.15) * 9) / 5 + 32
        : inputValue;
    default:
      return inputValue;
  }
}

// Function to calculate and update the result
function calculateResult() {
  const selectedUnitType = unitTypeSelect.value;
  const selectedFromUnit = fromUnitSelect.value.toLowerCase();
  const selectedToUnit = toUnitSelect.value.toLowerCase();
  const inputValue = parseFloat(unitValue.value);

  // Get the conversion factor for the selected units
  const conversionFactorFrom =
    unitConversionFactors[selectedUnitType][selectedFromUnit];
  const conversionFactorTo =
    unitConversionFactors[selectedUnitType][selectedToUnit];

  if (isNaN(inputValue)) {
    unitResPre.textContent = "Invalid input";
    return;
  }

  let result;
  if (selectedUnitType === "temperature") {
    result = roundTo3DecimalPlaces(
      calculateTemperature(selectedFromUnit, selectedToUnit, inputValue)
    );
  } else {
    result = roundTo3DecimalPlaces(
      (inputValue * conversionFactorTo) / conversionFactorFrom
    );
  }

  unitResPre.textContent = `${result} ${toUnitSelect.value}`;
}

// Add event listeners to the select elements and input to trigger updates
unitTypeSelect.addEventListener("change", updateUnitOptions);
fromUnitSelect.addEventListener("change", calculateResult);
toUnitSelect.addEventListener("change", calculateResult);
unitValue.addEventListener("input", calculateResult);

// Initially populate options based on the default selected unit type
updateUnitOptions();

export default {
  unitTypeSelect,
  fromUnitSelect,
  toUnitSelect,
  unitResPre,
  unitValue,
  unitOptions,
  unitConversionFactors,
  updateUnitOptions,
  roundTo3DecimalPlaces,
  calculateTemperature,
  calculateResult,
};
