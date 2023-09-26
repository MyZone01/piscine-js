// Create the function currify that will curry any functions put as argument.
const currify = (func) => curried = (...args) => (args.length >= func.length) ? func(...args) : (...moreArgs) => curried(...args, ...moreArgs)
