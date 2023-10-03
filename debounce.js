/**
 * Creates a debounced version of a function that delays its execution until a specified amount of time
 * has passed since the last time it was invoked.
 *
 * @param {function} func - The function to be debounced.
 * @param {number} wait - The number of milliseconds to delay the execution of the function.
 * @return {function} - A debounced version of the original function.
 */
const debounce = (func, wait) => {
    let timeout;

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

/**
 * Debounces a function, ensuring it is only called once after a specified wait time,
 * even if it is triggered multiple times before the wait time has passed.
 *
 * @param {function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to wait before calling the function.
 * @param {boolean} [leading=false] - Whether to call the function immediately on the leading edge.
 * @return {function} - The debounced function.
 */
const opDebounce = (func, wait, leading = false) => {
    let timeout;

    return (...args) => {
        const callNow = leading && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            if (!leading) func.apply(this, args);
        }, wait);

        if (callNow) func.apply(this, args);
    };
}

