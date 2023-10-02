/**
 * Creates a deep copy of an object or an array.
 *
 * @param {Object|Array} obj - The object or array to be deep copied.
 * @return {Object|Array} - The deep copied object or array.
 */
const deepCopy = (obj) => {
    if (Array.isArray(obj))
        return obj.map((item) => deepCopy(item));
    else if (typeof obj === 'object' && obj !== null) {
        const keys = Object.keys(obj)
        if (keys.length === 0)
            return obj
        else
            return keys.reduce((acc, key) => { if (obj.hasOwnProperty(key)) acc[key] = deepCopy(obj[key]); return acc; }, {});
    } else
        return obj;
};
