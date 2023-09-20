const multiply = (a, b) => {
    let check = false
    let result = 0
    if (b<0){
        b=-b
        check = true
    }
    while (b>0){
        result += a
        b--
    }
    if (check){
        result = -result 
    }
    return result
}

const divide = (a, b) => {
    let check = false
    let count = 0
    if (b<0 && a<0){
        b=-b
        a=-a
    }
    if (a<0){
        a=-a
        check=true
    }
    if (b<0){
        b=-b
        check=true
    }
   let c = a
   while (c>b){
    c-=b
    count++
   }
    if (check){
        count=-count
    }
    return count
}

const modulo = (a, b) => {
    let n = divide(a,b)
    let t = multiply(n,b)
    return a-t
}
