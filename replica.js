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

// objects mutability
console.log(
    replica(
        {},
        Object.freeze({ line: 'Replicants are like any other machine' }),
        Object.freeze({ author: 'Rich' })
    ),
    { line: 'Replicants are like any other machine', author: 'Rich' }
)

// different value types
console.log(
    replica({ con: console.log }, { reg: /hello/ }),
    {
        con: console.log,
        reg: /hello/,
    }
)

// primitive into an object
console.log(replica({ a: 4 }, { a: { b: 1 } }).a.b, 1)

// nested array into a primitive
console.log(
    replica({ a: { b: { c: [123, 1] } } }, { a: { b: { c: '1' } } }).a.b.c,
    '1'
)

// primitive into an array
console.log(replica({ a: 2 }, { a: [4] }).a, [4])

// object into an array
console.log(replica({ a: { b: [2] } }, { a: [4] }).a, [4])

// array into an object
console.log(replica({ a: [1, 2, 4] }, { a: { b: [4] } }).a, { b: [4] })

// nested objects
console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }), { a: { b: 1, c: 23 } })

// super nested objects
// letter+number indicates the depth
console.log(
    replica(
        {},
        { a: { b1: 1, c1: 2 } },
        { a: { b1: { d2: 1, e2: 2 } } },
        { a: { b1: { d2: { f3: 1, h3: 1 }, e2: { g3: 2 } } } },
        { a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } } } }
    ),
    { a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } }, c1: 2 } }
)
