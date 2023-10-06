/**
 * Retries the given callback function a specified number of times until it succeeds or the retry limit is reached.
 *
 * @param {number} count - The maximum number of times the callback function should be retried.
 * @param {Function} callback - The callback function to be retried.
 * @return {Promise<any>} - A promise that resolves with the result of the callback function if it succeeds within the retry limit.
 * @throws {Error} - Throws an error if the callback function fails to succeed within the retry limit.
 */
const retry = (count, callback) => (...args) => callback(...args).catch((err) => {
    if (count == 0) throw err
    return retry(count - 1, callback)(...args)
})

/**
 * Executes a callback function with a specified delay, and returns a promise that resolves
 * with the result of the callback function or rejects with an error if the callback does not
 * complete within the specified delay.
 *
 * @param {number} delay - The delay in milliseconds before the callback function times out.
 * @param {function} callback - The callback function to be executed.
 * @return {Promise} A promise that resolves with the result of the callback function or rejects
 *                   with an error if the callback does not complete within the specified delay.
 */
const timeout = (delay, callback) => (...args) => Promise.race([
    callback(args),
    new Promise((resolve) => setTimeout(resolve, delay))
]).then((value) => {
    if (!value) throw new Error('timeout')
    else return value
});
