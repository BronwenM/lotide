const eqArrays = require("./eqArrays");

//Compare two arrays with eq arrays and return t/f for equality
const assertArraysEqual = (arrOne, arrTwo) => {
    if(eqArrays(arrOne, arrTwo)) console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
    else console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
}

module.exports = assertArraysEqual;