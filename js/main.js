import stopwatch from "./stopwatch.js";
import updateTime from "./time.js";
import updateDate from "./date.js";
import dialogUtils from "./sideMenu.js";
import calculator from "./calculator.js";
import passwordGen from "./randomGen.js"
import unitConverter from "./unitConverter.js";

// Update time every second
setInterval(() => {
  updateTime();
}, 1000);

// Update date
updateDate();

// Setup dialog utils
dialogUtils;

// Setup calculator
calculator;

// Setup stopwatch
stopwatch

// Setup password generator
passwordGen;

// Setup unitConvertor
unitConverter