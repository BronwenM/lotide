//Compare two arrays and return true/false for strict equality
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

module.exports = eqArrays;