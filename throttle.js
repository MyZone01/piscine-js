/**
 * Throttles the execution of a function.
 *
 * @param {function} func - The function to be throttled.
 * @param {number} wait - The number of milliseconds to wait between function calls.
 * @return {function} - The throttled function.
 */
const throttle = (func, wait) => {
    let lastCalledTime = 0;
    let timeoutId;

    return (...args) => {
        const now = Date.now();
        if (now > lastCalledTime + wait) {
            func.apply(this, args);
            lastCalledTime = now;
        }
    };
}

/**
 * Throttles the execution of a function.
 *
 * @param {Function} func - The function to be throttled.
 * @param {number} wait - The time in milliseconds to wait between function calls.
 * @param {Object} options - Optional configuration options.
 * @param {boolean} options.leading - Whether to execute the function on the leading edge of the wait timeout. Default is true.
 * @param {boolean} options.trailing - Whether to execute the function on the trailing edge of the wait timeout. Default is true.
 */
const opThrottle = (func, wait, { leading = false, trailing = true } = {}) => {
    let lastCalledTime = 0;
    let timeoutId = null;

    return (...args) => {
        const now = Date.now();

        if (!lastCalledTime && leading === false) {
            lastCalledTime = now;
        }
        if (now - lastCalledTime > wait) {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
            func.apply(this, args);
            lastCalledTime = now;
        } else if (!timeoutId && trailing !== false) {
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastCalledTime = now;
                timeoutId = null
            }, wait);
        }
    };
}
