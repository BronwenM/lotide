const eqArrays = (a, b) => {
    let arrsMatch = true; //default value is arrays do not match

    if (a.length === b.length) { //make sure the arrays have the same length, otherwise auto-fails
        for (let index in a) {
            if (a[index] !== b[index]) {arrsMatch = false; break;}
        }
    }
    else arrsMatch = false;

    return arrsMatch;
};

const assertArraysEqual = (arrOne, arrTwo) => {
    if (eqArrays(arrOne, arrTwo)) console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
    else console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
}

const without = (source, itemsToRemove) => {
    let res = [];
    res = res.concat(source);
    // console.log(res);

    res.forEach(e => {
        // console.log("E is: ", e)
        // console.log("pre res is: ", res)
        if (itemsToRemove.includes(e)) res.splice(res.indexOf(e), 1);
        // console.log("post res is: ", res)
    })

    return res;
}

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3", 4], [1, 2, "3"]), ["1", "2", 4]);

const testArr = ["No", "Way", "No", "How"];
without(testArr, ["No"]);
assertArraysEqual(testArr, ["Way", "How"]);

assertArraysEqual(without(["No", "Way", "No", "How"], ["No"]), ["Way", "How"]);