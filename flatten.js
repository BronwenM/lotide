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
    if(eqArrays(arrOne, arrTwo)) console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
    else console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
}

const flatten = (arr) => {
    let res = [];

    for(let el of arr) {
        if(!Array.isArray(el)) {res.push(el)}
        else if (Array.isArray(el)) el.forEach(item => res.push(item));
    }

    return res;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([]));