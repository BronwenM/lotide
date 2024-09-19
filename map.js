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

const map = (inputArray, callback) => {
  let res = [];

  for (let el of inputArray) {
    res.push(callback(el));
  }

  return res;
};

const words = ["ground", "control", "to", "major", "tom"];
const someNums = [32, 5, 63, 70, 45, 3];
const emptyArr = [];

const results1 = map(words, (word) => word.length);
const results2 = map(someNums, (num) => num % 2 === 0);
const results3 = map(emptyArr, (item) => item + 3);

assertArraysEqual(results1, [ 6, 7, 2, 5, 3 ]);
assertArraysEqual(results2, [true, false, false, true, false, false ]);
assertArraysEqual(results3, []);