// Function similar to filter for object keys
const filterKeys = (obj, callback) => {
    const filteredObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (callback(key)) {
                filteredObj[key] = obj[key];
            }
        }
    }
    return filteredObj;
}

// Function similar to map for object keys
const mapKeys = (obj, callback) => {
    const mappedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            mappedObj[callback(key)] = obj[key];
        }
    }
    return mappedObj;
}

// Function similar to reduce for object keys
const reduceKeys = (obj, callback, initialValue) => {
    let keys = Object.keys(obj);
    let accumulator = initialValue === undefined ? keys[0] : initialValue;
    keys = keys.slice(1);
    for (const key of keys) {
        accumulator = callback(accumulator, key);
    }
    return accumulator;
}
