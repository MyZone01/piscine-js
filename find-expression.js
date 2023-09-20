function findExpression(num) {
    let i = num;
    let arr = [];
    while (i > 1) {
        if(isPowerOfTwo(i)) {
            while (i > 1) {
                arr.unshift(mul2);
                i /= 2;
            }    
        } else {
            arr.unshift(add4);
            i -= 4;
        }
    }
    let sum = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === add4){
        sum += 4;
        } else if (arr[i] === mul2) {
            sum *= 2;
        } else if (arr[i] === "1") {
            sum += 1;
        }
    }
    if (sum !== num) {
        return undefined;
    }
    return "1 " + arr.join(" ");
}

function isPowerOfTwo(num) {
    return(num > 0 && (num & (num - 1)) == 0)
}