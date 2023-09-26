//Your solutions must use reduce.

// adder: accepts an array of numbers, and returns the sum as a number.
const adder = (arr) => arr.reduce((a, b) => a + b)

// sumOrMul: accepts an array of numbers and adds or multiplies its elements depending on whether the element is odd or even. Even = multiply. Odd = add.
const sumOrMul = (arr) => arr.reduce((a, b) => (b % 2 === 0 ? a * b : a + b), 1)

// funcExec: accepts an array of functions and executes them using reduce, returning the result.
const funcExec = (arr) => arr.reduce((a, b) => b(a), 0)
