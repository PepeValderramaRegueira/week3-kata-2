function daysOfAMonth(year, month) {

  // This function returns the number of days of a month
  
  let february = 28;
  let monthDays = 30;

  // Check if is a leap-year
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    february = 29;
  }

  switch (month) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      monthDays = 31;
      break;
    case 1:
      monthDays = february;
      break;
  }

  return monthDays;
}

function lastDayIsFriday(initialYear, endYear) {
  const to = endYear !== undefined ? endYear : initialYear;

  let monthsEndOnFriday = 0;
  let newDate = new Date();

  for (let i = initialYear; i <= to; i++) {

    // Iterate through the months
    for (let j = 0; j < 12; j++) {

      // Set the new full year (year, month, lastDayOfMonth)
      newDate.setFullYear(i, j, daysOfAMonth(i, j));
      // newDate.setFullYear(i, j, 0); // -> If the day is 0, returns the number of days the the month has

      // Check the day (5 = friday!)
      // ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      if (newDate.getDay() === 5) {
        monthsEndOnFriday++;
      }
    }
  }

  return monthsEndOnFriday;
}

console.log(lastDayIsFriday(1901, 2017));
