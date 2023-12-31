/**
 * Throttles the execution of a function.
 *
 * @param {function} func - The function to be throttled.
 * @param {number} wait - The number of milliseconds to wait between function calls.
 * @return {function} - The throttled function.
 */
const throttle = (func, wait) => {
    let lastCalledTime = 0;

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
const opThrottle = (func, wait, option = {}) => {
    let lastCalledTime = 0;
    let timeoutId = null;

    return (...args) => {
        const now = Date.now();

        if (!lastCalledTime && leading === false) lastCalledTime = now;

        const remaining = wait - (now - lastCalledTime);

        if (remaining <= 0 || remaining > wait) {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
            func.apply(this, args);
            lastCalledTime = now;
        } else if (!timeoutId && trailing !== false) {
            timeoutId = setTimeout(() => {
                lastCalledTime = leading === false ? 0 : Date.now();;
                timeoutId = null
                func.apply(this, args);
            }, remaining);
        }
    };
}

