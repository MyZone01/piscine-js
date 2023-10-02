const deepCopy = (obj) => {
    if (Array.isArray(obj))
        return obj.map((item) => deepCopy(item));
    else if (typeof obj === 'object' && obj !== null)
        return Object.keys(obj).reduce((acc, key) => { if (obj.hasOwnProperty(key)) acc[key] = deepCopy(obj[key]); return acc; }, {});
    else
        return obj;
};
