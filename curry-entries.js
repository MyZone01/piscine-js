/**
 * A function that returns a new object by merging the properties of two objects.
 *
 * @param {object} obj1 - The first object to merge.
 * @return {function} - A function that takes the second object to merge.
 * @return {object} - The merged object.
 */
const defaultCurry = (obj1) => (obj2) => ({ ...obj1, ...obj2 });

/**
 * Returns a curried version of the map function for objects.
 *
 * @param {Function} callback - A callback function to apply to each key-value pair in the object.
 * @return {Function} - A curried version of the map function that takes an object to map over.
 */
const mapCurry = (callback) => (obj2) => Object.fromEntries(Object.entries(obj2).map(callback));

/**
 * A higher-order function that takes a callback function and returns a new function that 
 * applies the callback function using the reduce method on the entries of an object.
 *
 * @param {function} callback - The callback function to be applied to the reduce method.
 * This function should take two arguments: the accumulator and the current entry of the 
 * object being reduced.
 * @return {function} The new function that applies the callback function using the reduce
 * method on the entries of an object.
 */
const reduceCurry = (callback) => (obj2, acc) => Object.entries(obj2).reduce(callback, (acc))

/**
 * A function that takes a function as an argument and returns a new function
 * that filters an object based on the given function.
 *
 * @param {function} func - The filter function that takes a key-value pair
 *                          and returns a boolean.
 * @return {object} The filtered object.
 */
const filterCurry = (callback) => (obj) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => callback([key, value])));

/**
 * Calculates the average score for each player in the given object.
 *
 * @param {object} obj - The object containing player information.
 * @return {object} - The object with average scores added for each player.
 */
const mapAverage = (obj) => mapCurry(([key, value]) => [key, { averageScore: (value.shootingScore + value.pilotingScore) / 2, ...value }])(obj)

/**
 * Reduces the score of force users in the given object based on the provided value.
 *
 * @param {object} obj - The object containing the scores of force users.
 * @param {number} value - The value by which the scores should be reduced.
 * @return {number} - The total reduced score.
 */
const reduceScore = (obj, value) => reduceCurry((acc, [key, val]) => acc + val.pilotingScore + val.shootingScore)(filterCurry(([key, val]) => val.isForceUser)(obj), value)

/**
 * Filters an object and returns a new object with only the properties that have a shooting score of 80 or higher and are force users.
 *
 * @param {object} obj - The object to be filtered.
 * @return {object} The filtered object.
 */
const filterForce = (obj) => filterCurry((([key, val]) => val.shootingScore >= 80 && val.isForceUser))(obj)
