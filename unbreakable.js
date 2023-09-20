const split = (str, elem) => {
    let arr = []
    let idx = 0
    let i = 0
    let j = 0

    while (i < str.length) {
        if (str[i] == elem[j]) {
            if (j == elem.length - 1) {
                arr.push(str.slice(idx, i - j))
                idx = i + 1
                j = 0
            } else {
                j++
            }
        } else {
            j = 0
        }
        i++
    }
    
    if (elem == '' && str != '') {
        const arr2 = new Array(str.length) 
        for (i = 0; i < str.length; i++) {
            arr2[i] = (str[i])
        }
        return arr2
    }

    arr.push(str.slice(idx, i))
    return arr
}

const join = (arr, element) => {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        if (element.length == 0) {
            res += arr[i]
        } else {
            res += arr[i] + element
        }
    }

    res = res.slice(0, res.length - element.length)
    return res
}
