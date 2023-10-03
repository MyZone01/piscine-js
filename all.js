/**
 * Creates a Promise that resolves to an object with the values of the properties of the input object.
 *
 * @param {Object} object - The input object.
 * @return {Promise<Object>} - A Promise that resolves to an object with the values of the properties of the input object.
 */
function all(object) {
    return new Promise((resolve, reject) => {
        const keys = Object.keys(object);
        const results = {};

        let remainingCount = keys.length;

        if (remainingCount === 0) {
            resolve({});
            return;
        }

        keys.forEach((key) => {
            Promise.resolve(object[key])
                .then((value) => {
                    results[key] = value;
                    remainingCount--;

                    if (remainingCount === 0) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
}
