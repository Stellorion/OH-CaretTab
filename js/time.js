const hourDiv = document.querySelector("[data-current-hour]");
const minDiv = document.querySelector("[data-current-min]");
const secDiv = document.querySelector("[data-current-sec]");

const getHour = () => {
  const d = new Date();
  let hours = d.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return hours;
};

const getMin = () => {
  const d = new Date();
  let minutes = d.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return minutes;
};

const getSec = () => {
  const d = new Date();
  let seconds = d.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return seconds;
};

const updateTime = () => {
  const hour = getHour();
  const min = getMin();
  const sec = getSec();
  hourDiv.innerHTML = hour;
  minDiv.innerHTML = min;
  secDiv.innerHTML = sec;
};

export default updateTime;
