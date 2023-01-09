const isLeapYear = (yr) => {
  return !(yr % 4 || (!(yr % 100) && yr % 400))
    ? "is leap Year"
    : "not a leap year";
  //   if (year % 4) {
  //     console.log("no");
  //   } else {
  //     if (year % 100 && year % 400) {
  //       console.log("no");
  //     } else {
  //       console.log("yes");
  //     }
  //   }
};
const cc = console.log(isLeapYear(2015));
