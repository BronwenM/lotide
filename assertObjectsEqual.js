const eqObjects = (objOne, objTwo) => {
  let keysOne = Object.keys(objOne);
  let keysTwo = Object.keys(objTwo);

  if (keysOne.length === keysTwo.length) {
    for (let key of keysOne) {
      if (!Array.isArray(objOne[key]) && objOne[key] !== objTwo[key]) { //basic key/value handling excluding array
        return false;
      } else if (Array.isArray(objOne[key])) { //compare arrays
        if (objOne[key].length === objTwo[key].length) {
          for (let e = 0; e < objOne[key].length; e++) {
            if (objTwo[key][e] !== objOne[key][e]) { 
              return false;
            }
          }
        } else return false;
      }
    }
  } else return false;

  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };


const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};

const manySizedTankTop = {
  size: "medium",
  colors: ["red", "yellow"],
  sleeveLength: "short"
};
const noColorTank = {
  size: "medium",
  colors: ["yellow", "red"],
  sleeveLength: "short"
};

assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertObjectsEqual(manySizedTankTop, noColorTank); // => false