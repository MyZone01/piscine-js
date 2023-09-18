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
        str1: 'Serigne Saliou Mbacké Mbaye',
        num1: 120498,
        bool1: true
    }
}

Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested)