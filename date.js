const monthNames = [
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

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var d = new Date();

let monthName = monthNames[d.getMonth()];
let dayName = days[d.getDay()];
let day = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

function logger() {
  return `Today is ${dayName} the ${day} of ${monthName} ${year}`;
}

console.log(logger());
