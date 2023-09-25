//  Create a function named dayOfTheYear which accepts a Date. Your function should return the number of days since the first day of that year.
const dayOfTheYear = (date) => {
    const year = date.getFullYear();
    if (year === 0) return 1;
    const firstDayOfYear = new Date(year, 0, 1);
    const timeDiff = date.getTime() - firstDayOfYear.getTime();
    const days = Math.round(timeDiff / (1000 * 60 * 60 * 24)) + 1;
    return days;
}

console.log(dayOfTheYear(new Date('0001-01-01')), 1)
console.log(dayOfTheYear(new Date('1664-08-09')), 222)
console.log(dayOfTheYear(new Date('1600-12-31')), 366)
console.log(dayOfTheYear(new Date('2020-06-22')), 174)
console.log(dayOfTheYear(new Date('2048-12-08')), 343)
console.log(dayOfTheYear(new Date('2048-11-08')), 313)