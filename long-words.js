// longWords: returns true if every element of the array is a string with at least 5 characters.
const longWords = (arr) => arr.every((word) => word.length >= 5)

// oneLongWord: returns true if at least one element of the array is a string with 10 or more characters.
const oneLongWord = (arr) => arr.some((word) => word.length >= 10)

// noLongWords: returns true if there are no elements in the array which is a string with at least 7 characters.
const noLongWords = (arr) => arr.every((word) => word.length < 7)

let arr1 = ['fill', 'carbon', 'chart', 'glare', 'express']
let arr2 = ['double', 'afford', 'coalition', 'reaction', 'persist']
let arr3 = ['leak', 'talk', 'bite', 'slip', 'free']
let arr4 = ['fixture', 'opponent', 'coincide', 'residential', 'relaxation']

console.log(longWords(arr1), false)
console.log(longWords(arr2), true)
console.log(longWords(arr3), false)
console.log(longWords(arr4), true)
console.log("-----------------------");
console.log(oneLongWord(arr1), false);
console.log(oneLongWord(arr2), false);
console.log(oneLongWord(arr3), false);
console.log(oneLongWord(arr4), true);
console.log("-----------------------");
console.log(noLongWords(arr1), false);
console.log(noLongWords(arr2), false);
console.log(noLongWords(arr3), true);
console.log(noLongWords(arr4), false);