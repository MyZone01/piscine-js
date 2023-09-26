//  Create these functions which receive an array and a function each. Each element will return true if
//  every: every element in the array respects the condition of the function.
const every = (arr, func) => {
    for (let i = 0; i < arr.length; i++)
        if (!func(arr[i])) return false
    return true
}

//  some: that returns true if at least one element in the array respects the condition of the function.
const some = (arr, func) => {
    for (let i = 0; i < arr.length; i++)
        if (func(arr[i])) return true
    return false
}

//  none: that returns true if none of the elements in the array respects the condition of the function.
const none = (arr, func) => !some(arr, element => func(element))
