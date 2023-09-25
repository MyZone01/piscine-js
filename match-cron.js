/**
 * Checks if a given cron expression matches a given date.
 *
 * @param {string} cron - The cron expression to match.
 * @param {Date} date - The date to compare against the cron expression.
 * @returns {boolean} Returns true if the cron expression matches the date, otherwise returns false.
 */
const matchCron = (cron, date) => {
    const cronParts = cron.split(' ');
    const dateParts = [
        date.getSeconds(),
        date.getMinutes(),
        date.getHours(),
        date.getDate(),
        date.getMonth() + 1,
        date.getFullYear()
    ];

    return (cronParts[0] === parseInt(dateParts[0]) || cronParts[0] === '*') &&
        (cronParts[1] === parseInt(dateParts[1]) || cronParts[1] === '*') &&
        (cronParts[2] === parseInt(dateParts[2]) || cronParts[2] === '*') &&
        (cronParts[3] === parseInt(dateParts[3]) || cronParts[3] === '*') &&
        (cronParts[4] === parseInt(dateParts[4]) || cronParts[4] === '*')
}

console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00')));
console.log(matchCron('* * * 2 *', new Date('2021-02-01 00:00:00')));
console.log(matchCron('* * 9 * *', new Date('2020-06-09 00:00:00')));
console.log(matchCron('* 3 * * *', new Date('2020-05-31 03:00:00')));
console.log(matchCron('1 * * * *', new Date('2020-05-30 19:01:00')));
console.log(matchCron('3 3 * 3 3', new Date('2021-03-03 03:03:00')));
console.log(matchCron('* * * * *', new Date()));
console.log(matchCron('* * * * 1', new Date('2020-06-02 00:00:00')));
console.log(matchCron('* * * 2 *', new Date('2021-03-01 00:00:00')));
console.log(matchCron('* * 8 * *', new Date('2020-06-09 00:00:00')));
console.log(matchCron('* 2 * * *', new Date('2020-05-31 03:00:00')));
console.log(matchCron('1 * * * *', new Date('2020-05-30 19:00:00')));
console.log(matchCron('3 3 * 3 3', new Date('2021-03-02 03:03:00')));