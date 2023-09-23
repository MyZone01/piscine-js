const getURL = (str) => str.match(/https?:\/\/\S+/g)
const greedyQuery = (str) => str.match(/https?:\/\/\S+&\S+&\S+/g)
const _notSoGreedy = (str) => str.match(/https?:\/\/\S+\?(\S+=\S+&){1,2}\S+=\S+/g)
const notSoGreedy = (dataSet) => {
    let res = getURL(dataSet)
    let regex = /=/g
    let result = []
    res.forEach(el => {
        match = el.match(regex)
        match !== null && match.length >= 2 && match.length <= 3 && result.push(res[i])
    });
    return result;  
}