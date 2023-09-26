// Create the following functions with the "currying" process. Those functions should accept only one argument each.
// mult2: that multiplies two numbers.
const mult2 = (a) => (b) => a * b;
// add3: that adds three numbers.
const add3 = (a) => (b) => (c) => a + b + c;
// sub4: that subtracts four numbers in the given order: first number minus second number etc.
const sub4 = (a) => (b) => (c) => (d) => a - b - c - d;