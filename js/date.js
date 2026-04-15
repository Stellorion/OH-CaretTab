const d = new Date();
const weekday = document.querySelector("[data-current-weekday]");
const month = document.querySelector("[data-current-month]");
const day = document.querySelector("[data-current-day]");
const year = document.querySelector("[data-current-year]");

const getWeekday = () => {
  const weekdayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let weekday = weekdayName[d.getDay()];
  return weekday;
};

const getMonthName = () => {
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentMonth = monthName[d.getMonth()];
  return currentMonth;
};

const getDayNum = () => {
  let dayNum = d.getDate();
  return dayNum;
};

const getYear = () => {
  let year = d.getFullYear();
  return year;
};

const updateDate = () => {
  weekday.innerHTML = getWeekday() + ",";
  month.innerHTML = getMonthName();
  day.innerHTML = getDayNum() + ",";
  year.innerHTML = getYear();
};

export default updateDate;
