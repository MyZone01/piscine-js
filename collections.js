const arrToSet = (a) => new Set(a)
const arrToStr = (a) => a.join("")
const setToArr = (a) => [...a]
const setToStr = (a) => Array.from(a).join("")
const strToArr = (a) => a.split("")
const strToSet = (a) => new Set([...strToArr(a)])
const mapToObj = (a) => Object.fromEntries(a)
const objToArr = (a) => Object.values(a)
const objToMap = (a) => new Map(Object.entries(a))
const arrToObj = (a) => Object.assign({}, a)
const strToObj = (a) => arrToObj(a.split(""))
const superTypeOf = (a) => {
    switch (typeof a) {
        case "number":
            return "Number";
        case "string":
            return "String";
        case "boolean":
            return "Boolean";
        case "undefined":
            return "undefined";
        case "object":
            if (a instanceof Array) {
                return "Array";
            }
            if (a instanceof Set) {
                return "Set";
            }
            if (a instanceof Map) {
                return "Map";
            }
            if (a === null) {
                return "null";
            }
            return "Object";
        case "function":
            return "Function";
        default:
            return typeof arg;
    }
}