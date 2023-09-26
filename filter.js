// Create the following functions, which each take an array as the first argument, and a function as the second argument.
// filter: that works like the [].filter method.
const filter = (arr, func) => {
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

// reject: that works like the reject function from lodash.
const reject = (arr, func) => {
    const rejected = [];
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            rejected.push(arr[i]);
        }
    }
    return rejected;
}

// partition: that works like the partition function from lodash.
const partition = (arr, func) => [filter(arr, func), reject(arr, func)];
