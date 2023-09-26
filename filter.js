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


const check1 = (el) => el % 2 === 0
const check2 = (el, i) => el % 3 === 0 && i % 2 === 0
const check3 = (el) => Array.isArray(el)
const check4 = (el, i, arr) =>
    typeof el !== 'number' && i % 2 !== 0 && arr.includes(true)
const check5 = (el, i) =>
    (typeof el === 'number' || typeof el === 'boolean') && i > 5
const check6 = (el) => el.region === 'South' || el.region === 'West'

console.log(filter(ctx.onlyNumbers, check2), [15, 33, 450, 66])