// Function that accepts a Date, and returns false if the Date is invalid.
const isValid = (date) => {
    // Check if the date is a valid instance of the Date object
    date = new Date(date);
    if (!(date instanceof Date)) {
        return false;
    }

    // Check if the date is a valid date
    if (isNaN(date.getTime())) {
        return false;
    }

    // Check if the date is in the valid range
    const minDate = new Date("0000-01-01");
    const maxDate = new Date("9999-12-31");
    if (date < minDate || date > maxDate) {
        return false;
    }

    return true;
}

// Function that accepts two Date arguments, and returns true if the first is greater than the second.
const isAfter = (date1, date2) => date1 > date2

// Function that accepts two Date arguments, and returns true if the second is greater than the first.
const isBefore = (date1, date2) => date1 < date2

// Function that accepts a Date, and returns true if the Date is valid, and is after than the present date.
const isFuture = (date) => {
    // Check if the date is a valid Date object
    if (Object.prototype.toString.call(date) !== '[object Date]') {
        return false;
    }

    // Get the current date
    const currentDate = new Date();

    // Check if the given date is after the current date
    if (date > currentDate) {
        return true;
    }

    return false;
}

// Function that accepts a Date, and returns true if the Date is valid, and is before the present date.
const isPast = (date) => {
    const presentDate = new Date(); // Get the present date

    if (Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date)) { // Check if the date is valid
        return date < presentDate; // Return true if the date is before the present date
    }

    return false; // Return false if the date is invalid
}

console.log(isValid(Date.now()));