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
function opThrottle(func, wait, option = {}) {
    let lastCalledTime = null;
    let timeoutID = null;

    function setTimer() {
        timeoutID = setTimeout(timerFunc, wait);
    }

    function timerFunc() {
        timeoutID = null;
        if (lastCalledTime && option.trailing) {
            func.apply(lastCalledTime.context, lastCalledTime.args)
            setTimer();
        }
        lastCalledTime = null;
    }

    return function throttled(...args) {
        if (timeoutID === null) {
            option.leading ? func.apply(this, args) : lastCalledTime = { args, context: this };
            setTimer();
        } else {
            lastCalledTime = { args, context: this };
        }
    }
}

