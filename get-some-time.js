/**
 * Calculates the date of the first day of a given week in a specific year.
 *
 * @param {number} week - The week number.
 * @param {number} year - The year.
 * @returns {string} The date of the first day of the week in the format dd-mm-yyyy.
 */
function firstDayWeek(week, year) {
    const JanuaryFirst = new Date(year, 0, 1);
    const daysToAdd = (week - 1) * 7;
    const firstDay = new Date(JanuaryFirst.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
    const day = firstDay.getDate();
    const month = firstDay.getMonth() + 1;
    const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
    return formattedDate;
}

console.log(firstDayWeek(1, '1000'), '01-01-1000')
console.log(firstDayWeek(52, '1000'), '22-12-1000')
console.log(firstDayWeek(2, '0001'), '08-01-0001')
console.log(firstDayWeek(43, '1983'), '17-10-1983')
console.log(firstDayWeek(23, '0091'), '04-06-0091')
console.log(firstDayWeek(2, '2017'), '02-01-2017')
