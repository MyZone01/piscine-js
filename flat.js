const flat = (arr, depth = 1) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++)
        if (Array.isArray(arr[i]) && depth > 0)
            newArr = [...newArr, ...flat(arr[i], depth - 1)];
        else
            newArr.push(arr[i]);
    return newArr;
}

const arr1 = [0, 1, 2, [3, 4]];

console.log(flat(arr1));

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(flat(arr2, 4));
