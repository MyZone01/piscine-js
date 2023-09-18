const sign = (n) => (n > 0) ? 1 : ((n == 0) ? 0 : -1)
const sameSign = (n1, n2) => (sign(n1) == sign(n2)) ? true : false