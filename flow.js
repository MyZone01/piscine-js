// Create the function named flow that will act like the _.flow([funcs]) from lodash.
const flow = (funcs) => (...elem) => {
    let args = elem.slice()
    funcs.forEach(element => {
        if (Array.isArray(args)) {
            args = element(...args)
        } else {
            args = element(args)
        }
    });
    return args
}
