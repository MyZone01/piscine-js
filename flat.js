const flat = (arr, depth = 1) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++)
        if (Array.isArray(arr[i]) && depth > 0)
            newArr = [...newArr, ...flat(arr[i], depth - 1)];
        else
            newArr.push(arr[i]);
    return newArr;
}

