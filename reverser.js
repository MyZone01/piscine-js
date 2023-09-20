function reverse(str){
    let res = ''
    let result = []
    for (let i = str.length-1; i >=0; i--) {
        if (typeof str === 'string'){
            res+=str[i]
        }else if (Array.isArray(str)){
            result.push(str[i])
        }
    
    }
    if (typeof str === 'string'){
        return res
    }
    return result
}

console.log(reverse([1, , 3, 4]))