//Loop through object values by key. If the callback returns true from object value return the key
const findKey = (obj, callback) => {
    const keys = Object.keys(obj);
    
    for(const key of keys){
        if(callback(obj[key])) {
            return key
        }
    }

    return undefined;
}

module.exports = findKey;