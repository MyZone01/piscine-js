const first = (arr) => arr[0]
const last = (arr) => arr[arr.length - 1]
const last1 = (arr) => arr.slice(-1)[0] // arr.slice(-1).pop()
const last2 = (arr) => arr.at(-1)

const kiss = (arr) => [last(arr), first(arr)]
