const escapeStr = "\' \` \\ \/ \""
const arr = [4, '2']
const obj = {
    str: 'Serigne Saliou Mbacké Mbaye',
    num: 120498,
    bool: true,
    undef: undefined,
}
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: 'Serigne Saliou Mbacké Mbaye',
        num: 120498,
        bool: true
    }
}

function deepFreeze(object) {
    // Retrieve the property names defined on object
    const propNames = Reflect.ownKeys(object);

    // Freeze properties before freezing self
    for (const name of propNames) {
        const value = object[name];

        if ((value && typeof value === "object") || typeof value === "function") {
            deepFreeze(value);
        }
    }

    return Object.freeze(object);
}

Object.freeze(arr)
Object.freeze(obj)
deepFreeze(nested)