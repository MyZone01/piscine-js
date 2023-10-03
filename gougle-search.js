/**
 * Queries the servers for the given server name and query.
 *
 * @param {string} serverName - The name of the server to query.
 * @param {string} q - The query to send to the server.
 * @return {Promise} A promise that resolves to the JSON response from the server.
 */
const queryServers = (serverName, q) => Promise.race([getJSON(`/${serverName}?q=${q}`), getJSON(`/${serverName}_backup?q=${q}`)]);

/**
 * Performs a search on multiple servers for the given query.
 *
 * @param {string} q - The search query.
 * @return {Object} An object containing the search results for web, image, and video.
 */
const gougleSearch = async (q) => {
    const webPromise = queryServers('web', q);
    const imagePromise = queryServers('image', q);
    const videoPromise = queryServers('video', q);

    const results = Promise.race([
        await Promise.all([webPromise, imagePromise, videoPromise]),
        new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error('timeout'));
            }, 80);
        })
    ])

    return {
        web: results[0],
        image: results[1],
        video: results[2],
    };
};