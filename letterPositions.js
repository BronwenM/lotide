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
  let res = {};
  let strArr = str.split(' ').join('').split('');

  for (let index = 0; index < strArr.length; index++) {
    if (res[strArr[index]]) res[strArr[index]].push(Number(index));
    else res[strArr[index]] = [Number(index)];
  }



  return res;
};

const result1 = letterPosition("lighthouse in the house");

// console.log(result1);

assertArraysEqual(result1["i"], [1, 10]);
assertArraysEqual(result1["h"], [3, 5, 13, 15]);
assertArraysEqual(result1["e"], [9, 14, 19]);
assertArraysEqual(result1["u"], [7, 17]);