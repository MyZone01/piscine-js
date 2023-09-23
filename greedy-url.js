const getURL = (dataSet) => {
    let regex = /(((https?:\/\/)|(www\.))[^\s]+)/g
    return dataSet.match(regex)
}

const greedyQuery = (dataSet) => {  
    let regex = /(https?:\/\/[^\s]+\?[^\s]+=[^\s]+&[^\s]+=[^\s]+&[^\s]+=[^\s]+)/g;    
    return dataSet.match(regex); 
}

const notSoGreedy = (dataSet) => {
    let res = getURL(dataSet)
    let regex = /=/g
    let result = []
    for (let i=0; i < res.length; i++){
        let match = res[i].match(regex)
        if (match !== null && match.length >= 2 && match.length <= 3){
            result.push(res[i])
        }
    }   
    return result;  
}