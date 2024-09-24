//takes in array (allItems) and an object (itemsToCount)
//fn will count the number of items in the array, as listed in the object as "true" (ie [a,b,c,a,c] and {a: true, b: false, c:true})
//returns an object ({a: 2, c: 2})
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