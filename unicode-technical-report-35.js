const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
];
const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const LONG_FORMAT_BC = 'Before Christ';
const LONG_FORMAT_AD = 'Anno Domini';
const SHORT_FORMAT_BC = 'BC';
const SHORT_FORMAT_AD = 'AD';
const PM = 'PM';
const AM = 'AM';
/**
 * Formats a date according to the specified format string.
 *
 * @param {Date} date - The date to be formatted.
 * @param {string} formatString - The format string specifying the desired format.
 * @return {string} The formatted date string.
 */
function format(date, formatString) {

    const placeholders = {
        'yyyy': Math.abs(date.getFullYear()).toString().padStart(4, '0'),
        'y': date.getFullYear().toString().substring(date.getFullYear() < 0 ? 1 : 0),
        'GGGG': date.getFullYear() < 0 ? LONG_FORMAT_BC : LONG_FORMAT_AD,
        'G': date.getFullYear() < 0 ? SHORT_FORMAT_BC : SHORT_FORMAT_AD,
        'MMMM': MONTHS[date.getMonth()],
        'MMM': MONTHS[date.getMonth()].substring(0, 3),
        'MM': (date.getMonth() + 1).toString().padStart(2, '0'),
        'M': (date.getMonth() + 1).toString(),
        'dd': date.getDate().toString().padStart(2, '0'),
        'd': date.getDate().toString(),
        'EEEE': DAYS_OF_WEEK[date.getDay()],
        'E': DAYS_OF_WEEK[date.getDay()].substring(0, 3),
        'HH': date.getHours().toString().padStart(2, '0'),
        'H': date.getHours().toString(),
        'hh': (date.getHours() % 12).toString().padStart(2, '0'),
        'h': (date.getHours() % 12).toString(),
        'mm': date.getMinutes().toString().padStart(2, '0'),
        'm': date.getMinutes().toString(),
        'ss': date.getSeconds().toString().padStart(2, '0'),
        's': date.getSeconds().toString(),
        'a': date.getHours() >= 12 ? PM : AM
    };

    const regex = new RegExp(Object.keys(placeholders).join('|'), 'g');

    return formatString.replace(regex, (match) => placeholders[match]);
}
