const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = (objOne, objTwo) => {
  let keysOne = Object.keys(objOne);
  let keysTwo = Object.keys(objTwo);

  if (keysOne.length === keysTwo.length) {
    for (let key of keysOne) {
      if (!Array.isArray(objOne[key]) && objOne[key] !== objTwo[key]) { //basic key/value handling excluding array
        return false;
      } else if (Array.isArray(objOne[key])) { //compare arrays
        if (objOne[key].length === objTwo[key].length) {
          for (let e of objOne[key]) {
            if (!objTwo[key].includes(e)) { //second object's array doesn't include element e, set false and break the loop
              return false;
            }
          }
        } else return false;
      }
    }
  } else return false;

  return true;
};

/* const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false */


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };


const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};

const manySizedTankTop = {
  size: "medium",
  colors: [],
  sleeveLength: "short"
};
const noColorTank = {
  size: "medium",
  colors: ["yellow"],
  sleeveLength: "short"
};

assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false
assertEqual(eqObjects(manySizedTankTop, noColorTank), false); // => false