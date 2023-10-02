/**
 * Extracts pronouns and their corresponding words from the input string.
 *
 * @param {string} input - The input string from which pronouns are extracted.
 * @return {Object} - An object containing pronouns as keys and their corresponding words as values.
 */
function pronoun(input) {
    const result = {};
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const words = input.toLowerCase().split(/\W/g).filter(x => x !== '');
    for (let i = 0; i < words.length; i++) {
        const pronoun = words[i];
        const word = (i+1 <= words.length-1 && !pronouns.includes(words[i+1])) ? words[i+1] : "";
        if (pronouns.includes(pronoun)) {
            if (!result[pronoun]) result[pronoun] = { word: [], count: 0 };
            if (word !== "") result[pronoun].word.push(word);
            result[pronoun].count++;
        }
    }

    return result;
}

// no pronouns
console.log(pronoun("Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value."), {})

// simple count
console.log(pronoun("The seal method seals an object, preventing new properties fr\om being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable."), { it: { word: ['and'], count: 1 }, they: { word: ['are'], count: 1 }, })

// multiple pronouns
console.log(pronoun('I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go'), { i: { word: ['buy', 'to'], count: 2 }, you: { word: ['buy', 'go'], count: 2 }, it: { word: ['have', 'buys', 'is'], count: 3 }, })

// repetition of pronouns
console.log(pronoun("it i it she is gone"), { it: { word: [], count: 2 }, i: { word: [], count: 1 }, she: { word: ['is'], count: 1 }, })

// repetition of same pronoun
console.log(pronoun('she she she she is'), { she: { word: ['is'], count: 4 } })


// pronoun with out verb
console.log(pronoun('we will rock you'), { we: { word: ['will'], count: 1 }, you: { word: [], count: 1 }, })

