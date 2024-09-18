const eqArrays = (a, b) => {
    let arrsMatch = true; //default value is arrays do not match

    if (a.length === b.length) { //make sure the arrays have the same length, otherwise auto-fails
        for (let index in a) {
            if (a[index] !== b[index]) arrsMatch = false; break;
        }
    }
    else arrsMatch = false;

    return arrsMatch;
};

const assertEqualArrays = (arrOne, arrTwo) => {
    if(eqArrays(arrOne, arrTwo)) console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
    else console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
}

const without = (source, itemsToRemove) => {
    let res = source;
    itemsToRemove.forEach(item => {
        res = res.filter((e) => e !== item)
        // console.log(res);
    });

    return res;
}

assertEqualArrays(without([1, 2, 3], [1]), [2,3]);
assertEqualArrays(without(["1", "2", "3", 4], [1, 2, "3"]), ["1", "2", 4]);