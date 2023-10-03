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

        if (now - lastCalledTime >= wait) {
            func.apply(this, args);
            lastCalledTime = now;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastCalledTime = now;
            }, wait - (now - lastCalledTime));
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
const opThrottle = (func, wait, options) => {
    let lastCalledTime = 0;
    let timeoutId;
    let leadingExecuted = false;

    return (...args) => {
        const now = Date.now();

        if (!leadingExecuted && options?.leading === false) {
            // Skip leading execution
            leadingExecuted = true;
        } else {
            if (now - lastCalledTime >= wait) {
                func.apply(this, args);
                lastCalledTime = now;
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                    lastCalledTime = now;
                }, wait - (now - lastCalledTime));
            }
        }

        if (options?.trailing === false) {
            clearTimeout(timeoutId);
        }
    };
}
