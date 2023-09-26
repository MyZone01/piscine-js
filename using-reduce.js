//Your solutions must use reduce.

// adder: accepts an array of numbers, and returns the sum as a number.
const adder = (arr, init = 0) => arr.reduce((a, b) => a + b, init)

// sumOrMul: accepts an array of numbers and adds or multiplies its elements depending on whether the element is odd or even. Even = multiply. Odd = add.
const sumOrMul = (arr, init = 0) => arr.reduce((a, b) => (b % 2 === 0 ? a * b : a + b), init)

// funcExec: accepts an array of functions and executes them using reduce, returning the result.
const funcExec = (arr, init = 0) => arr.reduce((a, b) => b(a), init)
