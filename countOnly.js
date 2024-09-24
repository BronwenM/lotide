//Count the number of items in an array, as listed in the object as "true" return an object with key/value pairs for each unique element in the array
//E.X. [a,b,c,a,c] and {a: true, b: false, c:true} will return {a: 2, c:2}
const countOnly = (allItems, itemsToCount) => {
    let results = {}

    for (const item of allItems) {
        if (itemsToCount[item]) {
            if (results[item]) results[item]++;
            else results[item] = 1;
        }
    }

    return results;
}

module.exports = countOnly;