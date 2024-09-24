const findKey = (obj, callback) => {
    //get keys from object
    const keys = Object.keys(obj);
    
    //Loop through object by keys. If the callback returns true from object value return the key
    for(const key of keys){
        if(callback(obj[key])) {
            return key
        }
    }

    return undefined;
}

module.exports = findKey;