// citiesOnly: accepts an array of objects and returns an array of strings from the city key.
const citiesOnly = (arr) => arr.map(obj => obj.city)

// upperCasingStates: accepts an array of strings, and returns a new array of strings.The returned array will be the same as the argument, except the first letter of every word must be capitalized.
const upperCasingStates = (arr) => arr.map((str) => str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' '));

// fahrenheitToCelsius: accepts an array of fahrenheit temperatures as strings, and returns an array of strings converted to celsius. Round down the result.
const fahrenheitToCelsius = (arr) => arr.map((fahrenheit) => Math.round((((parseInt(fahrenheit.slice(0, -2) - 32) * 5) / 9) - 0.5)).toString() + '°C');

// trimTemp: accepts an array of objects, and returns a new array of objects with the same structure.The temperature strings must have their spaces removed in the new array.
const trimTemp = (arr) => { arr.map((obj) => { obj.temperature = obj.temperature.replaceAll(' ', '') }); return arr };

// tempForecasts: accepts an array of objects, and returns an array of formatted strings
const tempForecasts = (arr) => arr.map(({ city, temperature, state }) => `${Math.round((((parseInt(temperature.replaceAll(' ', '').slice(0, -2) - 32) * 5) / 9) - 0.5)).toString()}°Celsius in ${city}, ${state.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')}`);
