//Returns the 1st key in an object with that match value param. If no value matches return undefined
const findKeyByValue = (obj, val) => {
    for(item in obj){
        if(obj[item] === val) return item
    }
    return undefined;
}

module.exports = findKeyByValue;