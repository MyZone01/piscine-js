/**
 * Creates a promise that is settled as soon as any of the promises in the given iterable are fulfilled or rejected.
 *
 * @param {Array<Promise>} promises - An array of promises to race.
 * @return {Promise} A promise that is fulfilled with the value of the first promise in the iterable that fulfills, or rejected with the reason of the first promise that rejects.
 */
const race = (promises) => {
    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            Promise.resolve(promise)
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        }
    });
};

/**
 * Generates a new promise that resolves with an array of values from the given `values` array.
 * The promise resolves with the first `count` values from the `values` array, or with all the values if `count` is greater than the length of the `values` array.
 *
 * @param {Array} values - The array of values to extract from.
 * @param {number} count - The number of values to extract.
 * @return {Promise<Array>} A promise that resolves with an array of values.
 */
const some = (values, count) => {
    if (count <= 0 || values.length === 0) {
        return Promise.resolve(undefined);
    }

    const results = [];
    let remainingCount = count;

    return new Promise((resolve, reject) => {
        for (const value of values) {
            Promise.resolve(value)
                .then((resolvedValue) => {
                    results.push(resolvedValue);
                    remainingCount--;

                    if (remainingCount === 0) {
                        if (results[1] === undefined && results.length > 1) {
                            results = [results[1], results[0]];
                        }
                        resolve(results);
                    }
                })
                .catch(() => {
                    if (remainingCount === 0) {
                        resolve(results);
                    }
                });
        }
    });
};
