/**
 * Creates a promise that is settled as soon as any of the values in the given iterable are fulfilled or rejected.
 *
 * @param {Array<Promise>} values - An array of values to race.
 * @return {Promise} A promise that is fulfilled with the value of the first promise in the iterable that fulfills, or rejected with the reason of the first promise that rejects.
 */
const race = (values) => {
    return new Promise((resolve, reject) => {
        for (const promise of values) {
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
    return new Promise(function (resolve, reject) {
        if (count === 0 || values.length === 0) { resolve([]) }
        for (let i = 0; i < values.length; i++) {
            if (values[i] instanceof Promise) {
                values[i].then((value) => {
                    values[i] = value;
                    count--;
                    if (count === 0) {
                        let res = values.filter((el) => !(el instanceof Promise));
                        resolve(res);
                    }
                }).catch((err) => { reject(err) })
            } else {
                count--;
                if (count === 0) {
                    resolve(values.filter((el) => !(el instanceof Promise)));
                }
            }
        };

    });
};
