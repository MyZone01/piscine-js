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
        date.getMinutes(),
        date.getHours(),
        date.getDate(),
        date.getMonth() + 1,
        date.getDay() ?? 7,
    ];

    return (parseInt(cronParts[0]) === dateParts[0] || cronParts[0] === '*') &&
        (parseInt(cronParts[1]) === dateParts[1] || cronParts[1] === '*') &&
        (parseInt(cronParts[2]) === dateParts[2] || cronParts[2] === '*') &&
        (parseInt(cronParts[3]) === dateParts[3] || cronParts[3] === '*') &&
        (parseInt(cronParts[4]) === dateParts[4] || cronParts[4] === '*')
}
