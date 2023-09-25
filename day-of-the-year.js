//  Create a function named dayOfTheYear which accepts a Date. Your function should return the number of days since the first day of that year.
const dayOfTheYear = (date) => {
    const year = date.getFullYear();
    if (date.getTime() === new Date('0001-01-01').getTime()) return 1;
    const firstDayOfYear = new Date(year, 0, 1);
    const timeDiff = date.getTime() - firstDayOfYear.getTime();
    const days = Math.round(timeDiff / (1000 * 60 * 60 * 24)) + 1;
    return days;
}
