/**
 * Creates a deep copy of an object or an array.
 *
 * @param {Object|Array} obj - The object or array to be deep copied.
 * @return {Object|Array} - The deep copied object or array.
 */
const deepCopy = (obj) => Array.isArray(obj) ? obj.map((item) => deepCopy(item)) : typeof obj === "object" && obj !== null ? Object.keys(obj).reduce((acc, key) => { acc[key] = deepCopy(obj[key]); return acc; }, {}) : obj;
