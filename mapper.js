// Create a map function that takes an array as the first argument, a function as second, and that works like the method .map
const map = (arr, func) => {
    const mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArr.push(func(arr[i], i, arr));
    }
    return mappedArr;
}

// Create a flatMap function that takes an array as the first argument, a function as second, and that works like the method .flatMap
const flatMap = (arr, func) => {
    return arr.reduce((acc, val, i) => {
        return acc.concat(func(val, i, arr));
    }, []);
}
