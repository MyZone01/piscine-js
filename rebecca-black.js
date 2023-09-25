// isFriday returns true if the Date is a Friday.
const isFriday = (date) => date.getDay() == 5

// isWeekend returns true if the Date is a weekend day.
const isWeekend = (date) => date.getDay() == 6 || date.getDay() == 0

// isLeapYear returns true if the year of the Date is a leap year.
const isLeapYear = (date) => date.getFullYear() % 4 == 0 && date.getFullYear() % 100 != 0 || date.getFullYear() % 400 == 0

// isLastDayOfMonth returns true if the Date represents the last day of the month.
const isLastDayOfMonth = (date) => date.getDate() == new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();