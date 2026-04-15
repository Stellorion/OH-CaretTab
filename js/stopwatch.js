let startTime;
let stopwatchInterval;
let elapsedTimePaused = 0;
let isRunning = false;

function startStopwatch() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTimePaused;
    stopwatchInterval = setInterval(updateStopwatch, 50);
    isRunning = true;
  }
}

function pauseStopwatch() {
  if (isRunning) {
    clearInterval(stopwatchInterval);
    elapsedTimePaused = Date.now() - startTime;
    isRunning = false;
  }
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  elapsedTimePaused = 0;
  isRunning = false;

  startTime = Date.now();

  swHour.textContent = "00";
  swMin.textContent = "00";
  swSec.textContent = "00";
  swMilSec.textContent = "00";
}

function updateStopwatch() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / 3600000);
  let minutes = Math.floor((elapsedTime % 3600000) / 60000);
  let seconds = Math.floor((elapsedTime % 60000) / 1000);
  let milliseconds = Math.floor(elapsedTime % 1000);

  swHour.textContent = String(hours).padStart(2, "0");
  swMin.textContent = String(minutes).padStart(2, "0");
  swSec.textContent = String(seconds).padStart(2, "0");
  swMilSec.textContent = String(milliseconds).padStart(3, "0").slice(0, 2);
}

const swStart = document.querySelector("[data-sw-start]");
const swStop = document.querySelector("[data-sw-stop]");
const swReset = document.querySelector("[data-sw-reset]");
const swHour = document.querySelector("[data-sw-hour]");
const swMin = document.querySelector("[data-sw-min]");
const swSec = document.querySelector("[data-sw-sec]");
const swMilSec = document.querySelector("[data-sw-milsec]");

swStart.addEventListener("click", startStopwatch);
swStop.addEventListener("click", pauseStopwatch);
swReset.addEventListener("click", resetStopwatch);

export default {
  resetStopwatch,
  pauseStopwatch,
  startStopwatch,
  swStart,
  swStop,
  swReset,
};
