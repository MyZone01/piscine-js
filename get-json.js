/**
 * Retrieves JSON data from a specified path with optional parameters.
 *
 * @param {string} path - The URL or path to retrieve the JSON data from.
 * @param {object} params - Optional parameters to be included in the request.
 * @returns {Promise<any>} - A promise that resolves with the retrieved JSON data.
 * @throws {Error} - If the response is not ok or if the retrieved data contains an error.
 */
async function getJSON(path, params) {
    const url = new URL(path);
    if (params) {
        Object.keys(params).forEach((key) => {
            url.searchParams.append(key, params[key]);
        });
    }

    try {
        const response = await fetch(url.toString());
        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();
        if (data.error) throw new Error(data.error);

        return data.data;
    } catch (error) {
        throw error;
    }
}
