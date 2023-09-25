/**
 * Adds a week to the given date and returns the day of the week.
 *
 * @param {Date} date - The date to which a week will be added.
 * @return {string} The day of the week after adding a week to the given date.
 */
const addWeek = (date) => {
    const beginDate = new Date("0001-01-01")
    let tabDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let ms = (date - beginDate) / 86400000
    let res = ms % 14

    if (res < 7) return tabDay[res]
    return "second" + tabDay[res - 7].toString()
}

/**
 * Generates a new Date object by modifying the hour, minute, and second of the given date object.
 *
 * @param {Object} obj - The object containing the date and the time components to modify.
 * @param {Date} obj.date - The original date object.
 * @param {number} obj.hour - The hour component to set.
 * @param {number} obj.minute - The minute component to set.
 * @param {number} obj.second - The second component to set.
 * @return {Date} - The modified date object.
 */
const timeTravel = (obj) => {
    return new Date(obj.date.setHours(obj.hour, obj.minute, obj.second))
}
