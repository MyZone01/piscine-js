/**
 * Runs an array of asynchronous functions in series and returns an array of their results.
 *
 * @param {Array<Function>} funcs - An array of asynchronous functions to be executed in series.
 * @return {Promise<Array>} - A promise that resolves to an array of the results of each function.
*/
// const series = async (funcs) => await funcs.map(async func => await func());

async function series(funcs) {
    let result = []
    for (let i = 0; i < funcs.length; i++) result.push(await funcs[i]())
    return result
}