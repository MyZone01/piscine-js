// Function similar to filter for object values
const filterValues = (obj, callback) => {
    const filteredObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (callback(obj[key])) {
                filteredObj[key] = obj[key];
            }
        }
    }
    return filteredObj;
}

// Function similar to map for object values
const mapValues = (obj, callback) => {
    const mappedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            mappedObj[key] = callback(obj[key]);
        }
    }
    return mappedObj;
}

// Function similar to reduce for object values
const reduceValues = (obj, callback, initialValue) => {
    let accumulator = initialValue === undefined ? 0 : initialValue;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            accumulator = callback(accumulator, obj[key]);
        }
    }
    return accumulator;
}
