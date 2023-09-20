const indexOf = (arr, word, start = 0) => {
    for (let i = start; i < arr.length; i++ ) {
        if (arr[i] === word) {
            return i
        } 
    }
    return -1
}

const lastIndexOf = (arr, word, end = arr.length) => {
    for (let i = end; i >= 0; i-- ) {
        if (arr[i] === word) {
            return i
        }
    }
    return -1
}

const includes = (arr, word) => {
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] === word) {
            return true
        }
    }
    return false
}