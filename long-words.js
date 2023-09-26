// longWords: returns true if every element of the array is a string with at least 5 characters.
const longWords = (arr) => arr.every((word) => word.length >= 5)

// oneLongWord: returns true if at least one element of the array is a string with 10 or more characters.
const oneLongWord = (arr) => arr.every((word) => word.length >= 10)

// noLongWords: returns true if there are no elements in the array which is a string with at least 7 characters.
const noLongWords = (arr) => arr.every((word) => word.length < 7)
