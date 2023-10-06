/**
 * Runs an array of asynchronous functions in series and returns an array of their results.
 *
 * @param {Array<Function>} asyncFuncs - An array of asynchronous functions to be executed in series.
 * @return {Promise<Array>} - A promise that resolves to an array of the results of each function.
*/
const series = async (asyncFuncs) => await asyncFuncs.map(async func => await func());
