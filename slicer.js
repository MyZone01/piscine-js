const slice = (str, start, end=str.length) => {
    if (start<0){
        start = -start
        start = str.length - start
    }
    if (end<0){
        end = -end
        end = str.length-end
    }
    let res = ''
    let array = []
    for (let i = 0; i < str.length; i++) {
        if (i >= start && i < end){
            if (typeof(str) == 'string'){
                res += str[i]
            }else if(Array.isArray(str)){
                array.push(str[i])
            }
        }
        
    }
    if (typeof(str)=='string'){
        return res
    }
    return array
}