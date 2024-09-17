const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (a, b) => {
  let arrsMatch = false; //default value is arrays do not match

  if (a.length === b.length) { //make sure the arrays have the same length, otherwise auto-fails
    for (let index in a) {
      if (a[index] === b[index]) arrsMatch = true;
      else arrsMatch = false;
    }
  }

  return arrsMatch;
};

assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'c']), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

assertEqual(eqArrays(['Yes', 'Yes', 'No'], ['Yes', 'Yes', 'No']), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false