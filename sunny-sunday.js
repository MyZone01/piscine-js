/**
 * Retrieves the weekday name based on a given date.
 *
 * @param {Date} date - The input date.
 * @return {string} The name of the weekday.
 */
const sunnySunday = (date) => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][(Math.abs(Math.floor((new Date('0001-01-01') - date) / 86400000))) % 6];
