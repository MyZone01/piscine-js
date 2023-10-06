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
const timeout = (delay, callback) => (...args) => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('timeout'))
    }, delay)
    callback(...args).then(resolve)
});


// const fail = (q) =>
//     q.then(
//         (v) => Promise.reject('should fail'),
//         (e) => e.message,
//     )

// const ctx = {
//     r: Math.random().toString(36).slice(2),
//     failNTimes: (n) => async (...v) =>
//         --n < 0 ? v : Promise.reject(Error(`x:${v}`)),
//     delayed: (delay) => (...v) => new Promise((s) => setTimeout(s, delay, v)),
// }

// async function newFunction() {
//     console.log(await retry(0, ctx.failNTimes(0))(ctx.r), [ctx.r])
//     console.log(await retry(3, ctx.failNTimes(3))(ctx.r), [ctx.r])
//     console.log(await retry(10, ctx.failNTimes(5))(ctx.r, ctx.r), [ctx.r, ctx.r])
//     console.log(await fail(retry(3, ctx.failNTimes(9))(ctx.r)), `x:${ctx.r}`)
//     console.log(await timeout(2, ctx.delayed(0))(ctx.r), [ctx.r])
//     console.log(await timeout(2, ctx.delayed(0))(ctx.r, ctx.r), [ctx.r, ctx.r])
//     console.log(await fail(timeout(2, ctx.delayed(4))(ctx.r)), 'timeout')
// }

// newFunction()
