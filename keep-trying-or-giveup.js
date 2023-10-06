/**
 * Retries the given callback function a specified number of times until it succeeds or the retry limit is reached.
 *
 * @param {number} count - The maximum number of times the callback function should be retried.
 * @param {Function} callback - The callback function to be retried.
 * @return {Promise<any>} - A promise that resolves with the result of the callback function if it succeeds within the retry limit.
 * @throws {Error} - Throws an error if the callback function fails to succeed within the retry limit.
 */
const retry = async (count, callback) => {
    let retries = 0;
    let lastError = null;

    while (retries < count) {
        try {
            return await callback();
        } catch (error) {
            retries++;
            lastError = error;
        }
    }

    throw new Error(`Retry limit reached (${count} attempts). Last error: ${lastError}`);
}

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
const timeout = async (delay, callback) => Promise.race([
    callback(),
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), delay))
]);

console.log("Hello World");