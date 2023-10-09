#!/usr/bin/env node

/**
 * Reverses the order of the characters in a word.
 *
 * @param {string} word - The word to be reversed.
 * @return {string} - The reversed word.
 */
const makeWordVeryDisco = (word) => word.slice(Math.ceil(word.length / 2)) + word.slice(0, Math.ceil(word.length / 2));

/**
 * Splits the input string into an array of words, applies the 'makeWordVeryDisco'
 * function to each word, and then joins the modified words back into a single string.
 *
 * @param {string} input - the input string to be modified
 * @return {string} - the modified string with each word made very disco
 */
const makeInputVeryDisco = (input) => input.split(' ').map(makeWordVeryDisco).join(' ');

// Check if an argument is provided
if (process.argv.length < 3)
    console.log('Usage: node verydisco.mjs <input>');
else
    console.log(makeInputVeryDisco(process.argv[2]));

