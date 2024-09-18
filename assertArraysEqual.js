const eqArrays = (a, b) => {
    let arrsMatch = false; //default value is arrays do not match

    if (a.length === b.length) { //make sure the arrays have the same length, otherwise auto-fails
        for (let index in a) {
            if (a[index] === b[index]) arrsMatch = true;
            else arrsMatch = false;
        }
    }

    return arrsMatch;
};

const assertEqualArrays = (arrOne, arrTwo) => {
    if(eqArrays(arrOne, arrTwo)) console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
    else console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
}

assertEqualArrays(['a', 'b', 'c'], ['a', 'b', 'c']);
assertEqualArrays([1, 2, 3], [3, 2, 1]);