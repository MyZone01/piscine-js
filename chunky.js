function chunk(arr,int) {
    let res = []
    for(let i =0;i<arr.length;i++){
        res.push(arr.slice(0,int))
        arr = arr.slice(int)
        if(arr.length<int && arr.length != 0){
            res.push(arr)
            return res
        }
    }
    return res
}

console.log(chunk([1,2,3,4,5,6,6,7,8,9], 3));