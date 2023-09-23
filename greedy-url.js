const getURL = (str) => str.match(/https?:\/\/\S+/g)
const greedyQuery = (str) => str.match(/https?:\/\/\S+&\S+&\S+/g)
const notSoGreedy = (str) => str.match(/https?:\/\/\S+\?\S+=\S+&\S+=\S+(&\S+=\S+)?/g)