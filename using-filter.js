//  Your solutions must use filter.
// filterShortStateName: accepts an array of strings, and returns only those strings which contain less than 7 characters.
const filterShortStateName = (arr) => arr.filter((state) => state.length < 7)

// filterStartVowel: accepts an array of strings, and returns only those that start with any vowel (a,e,i,o,u).
const filterStartVowel = (arr) => arr.filter((state) => state[0] === 'a' || state[0] === 'e' || state[0] === 'i' || state[0] === 'o' || state[0] === 'u' || state[0] === 'A' || state[0] === 'E' || state[0] === 'I' || state[0] === 'O' || state[0] === 'U')

// filter5Vowels: accepts an array of strings, and returns only those which contain at least 5 of any vowels (a,e,i,o,u).
const filter5Vowels = (arr) => arr.filter((state) => state.toLowerCase().split('').filter((vowel) => vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u').length >= 5)

// filter1DistinctVowel: accepts an array of strings, and returns only those which contain only one distinct vowel (a,e,i,o,u). For example, "Alabama" contains only 1 distinct vowel "a".
const filter1DistinctVowel = (arr) => arr.filter((state) => state.toLowerCase().split('').filter((vowel) => vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u').every((val, ind, tab) => val === tab[0]))

/*multiFilter: accepts an array of objects, and returns only those which:
the key capital contains at least 8 characters.
the key name does not start with a vowel.
the key tag has at least one vowel.
the key region is not "South"*/
const multiFilter = (arr) => arr.filter((obj) => obj.capital.length >= 8 && !filterStartVowel([obj.name]) && obj.tag.toLowerCase().split('').filter((vowel) => vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u' || vowel === 'A' || vowel === 'E' || vowel === 'I' || vowel === 'O' || vowel === 'U').length > 0 && obj.region !== 'South')