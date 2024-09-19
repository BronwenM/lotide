const eqArrays = (a, b) => {
    let arrsMatch = true; //default value is arrays do not match

    if (a.length === b.length) { //make sure the arrays have the same length, otherwise auto-fails
        for (let index in a) {
            if (a[index] !== b[index]) {
                arrsMatch = false; break;
            }
        }
    } else arrsMatch = false;

    return arrsMatch;
};

const assertArraysEqual = (arrOne, arrTwo) => {
    if (eqArrays(arrOne, arrTwo)) console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
    else console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
};

const letterPosition = (str) => {
    const res = {};

    for (let index = 0; index < str.length; index++) {
        if (str[index] !== " ") {
            if (res[str[index]]) res[str[index]].push(index);
            else res[str[index]] = [index];
        }

    }



    return res;
};

const result1 = letterPosition("lighthouse in the house");

// console.log(result1);

assertArraysEqual(result1["i"], [1, 11]);
assertArraysEqual(result1["h"], [3, 5, 15, 18]);
assertArraysEqual(result1["e"], [9, 16, 22]);
assertArraysEqual(result1["u"], [7, 20]);