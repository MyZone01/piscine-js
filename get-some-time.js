const formatDate = (day, month, _year) => `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${_year}`;

/**
 * Calculates the date of the first day of a given week in a specific year.
*
* @param {number} week - The week number.
* @param {number} year - The year.
* @returns {string} The date of the first day of the week in the format dd-mm-yyyy.
*/
const firstDayWeek = (week, year) => {
    const JanuaryFirst = new Date(year, 0, 1);
    if (week === 1) return formatDate(JanuaryFirst.getDate(), JanuaryFirst.getMonth() + 1, JanuaryFirst.getFullYear());
    const daysToAdd = (week - 1) * 7;
    const firstDay = new Date(JanuaryFirst.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
    let weekDay = firstDay.getDay();
    weekDay = weekDay === 0 ? 6 : weekDay - 1;
    if (weekDay !== 1) firstDay.setHours(-24 * weekDay)
    const day = firstDay.getDate();
    const month = firstDay.getMonth() + 1;
    const _year = firstDay.getFullYear();
    return formatDate(day, month, _year);
}
