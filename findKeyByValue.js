//take in object and value to look for in object
//return the 1st key with that value. if no value return undef
const findKeyByValue = (obj, val) => {
    for(item in obj){
        if(obj[item] === val) return item
    }
    return undefined;
}

module.exports = findKeyByValue;