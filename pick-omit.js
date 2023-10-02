// Create a function which takes an object and a string or array of strings.
// Return a new object that contains only the keys which appear in the string or array of strings.
const pick = (obj, keys) => {
    if (typeof keys === "string") keys = [keys];
    const newObj = {};
    for (const key of keys)
        if (obj.hasOwnProperty(key))
            newObj[key] = obj[key];

    return newObj;
};

// Create a function which takes an object and a string or array of strings. They should return a new object which:
// omit: contains only those keys which do not match the string, or do not appear in the array of strings.
const omit = (obj, keys) => {
    if (typeof keys === "string") keys = [keys];
    const newObj = {};
    for (const key of Object.keys(obj))
        if (!keys.includes(key))
            newObj[key] = obj[key];
}