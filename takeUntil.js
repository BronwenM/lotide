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

const takeUntil = (array, callback) => {
  let res = [];

  for (let el of array) {
    if (!callback(el)) {
      res.push(el);
    } else break;
  };

  return res;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('--------------------------------------------------');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);

console.log('--------------------------------------------------');

const data3 = [11, 22, 23, 33];
const results3 = takeUntil(data3, x => x % 11 !== 0);
assertArraysEqual(results3, [11, 22]);