/**
 * Queries the servers for the given server name and query.
 *
 * @param {string} serverName - The name of the server to query.
 * @param {string} q - The query to send to the server.
 * @return {Promise} A promise that resolves to the JSON response from the server.
 */
const queryServers = (serverName, q) => Promise.any([getJSON(`/${serverName}?q=${q}`), getJSON(`/${serverName}_backup?q=${q}`)]).then((result) => result).catch ((e) => {
    throw e
});

/**
 * Performs a search on multiple servers for the given query.
 *
 * @param {string} q - The search query.
 * @return {Object} An object containing the search results for web, image, and video.
 */
async function gougleSearch(query) {
    let result = await Promise.all([ // return the fastest response from each server
        await timeout(80, queryServers('web', query)),
        await timeout(80, queryServers('image', query)),
        await timeout(80, queryServers('video', query))
    ])
    return { 'web': result[0], 'image': result[1], 'video': result[2] }
}

/**
 * Executes a callback function with a timeout.
 *
 * @param {number} delay - The delay in milliseconds before the timeout.
 * @param {function} callback - The callback function to execute.
 * @return {Promise} A promise that resolves with the result of the callback function or rejects with an error if the timeout occurs.
 */
function timeout(delay, callback) {
    return Promise.race([callback, new Promise((_, reject) => { // return the fastest response
        setTimeout(() => reject(new Error("timeout")), delay)
    })])
}