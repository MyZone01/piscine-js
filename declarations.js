const escapeStr = "\' \` \\ \/ \""
const arr = [2, '4']
const obj = {
    str: 'Serigne Saliou Mbacké Mbaye',
    num: 120498,
    bool: true,
    undef: undefined,
}
const nested = {
    arr: [2, undefined, "4"],
    obj: {
        str1: 'Serigne Saliou Mbacké Mbaye',
        num1: 120498,
        bool1: true
    }
}

Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested)