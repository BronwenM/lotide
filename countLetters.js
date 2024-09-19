const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

//take in a string
//count the letters in the string
//return the counts as obj
const countLetters = (str) => {
    let res = {};

    const smStr = str.split(' ').join('');

    for(let char of smStr){
        if(res[char]) res[char]++;
        else res[char] = 1;
    }

    return res;
}


const result1 = countLetters("lighthouse in the house");

assertEqual(result1["i"], 2);
assertEqual(result1["h"], 4);
assertEqual(result1["e"], 3);
assertEqual(result1["u"], 2);