/**
 * Checks if the given item is an object.
 *
 * @param {any} item - The item to be checked.
 * @return {boolean} Returns true if the item is an object, false otherwise.
 */
const isObject = (item) => (item && typeof item === 'object' && !Array.isArray(item));


/**
 * Generates a replica of the target object by merging it with the provided sources.
 *
 * @param {object} target - The target object to be replicated.
 * @param {...object} sources - The source objects to be merged with the target.
 * @return {object} - The replicated object.
 */
const replica = (target, ...sources) => {
    if (!sources.length) return target;

    for (const source of sources)
        for (const key in source)
            if (source.hasOwnProperty(key))
                if (isObject(source[key]) && isObject(target[key]))
                    target[key] = replica(target[key], source[key]);
                else
                    target[key] = source[key];

    return target;
}
