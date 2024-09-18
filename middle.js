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

const middle = (arr) => {
  let midArr = [];
  let midIndex;

  if (arr.length > 2) {
    midIndex = (arr.length / 2);

    if (arr.length % 2 !== 0) midArr.push(arr[Math.floor(midIndex)]);
    else midArr.push(arr[midIndex - 1], arr[midIndex]);


    return midArr;
  }
  return [];
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), [6]);
assertArraysEqual(middle([1, 2]), []);
