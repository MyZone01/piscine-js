// Create four functions:
// fold that receives an array, a function and an accumulator, in this order, and applies the function in the elements of the array starting on the left.
const fold = (arr, func, acc) => {
    let res = acc
    for (let i = 0; i < arr.length; i++) {
        res = func(res, arr[i], i, arr)
    }
    return res
}

// foldRight that receives an array, a function and an accumulator, in this order, and applies the function in the elements of the array starting on the right.
const foldRight = (arr, func, acc) => {
    let res = acc
    for (let i = arr.length - 1; i >= 0; i--) {
        res = func(res, arr[i], i, arr)
    }
    return res
}

// reduce that works just like the method [].reduce when you don't specify an accumulator. The arguments should be an array and a function. The starting value of your accumulator must be the first value of the array. If your array is less than 1 argument you should throw an error.
const reduce = (arr, func) => {
    let res = arr[0]
    for (let i = 1; i < arr.length; i++) {
        res = func(res, arr[i], i, arr)
    }
    return res
}

// reduceRight like reduce, from the last value to the first
const reduceRight = (arr, func) => {
    let res = arr[arr.length - 1]
    for (let i = arr.length - 2; i >= 0; i--) {
        res = func(res, arr[i], i, arr)
    }
    return res
}
