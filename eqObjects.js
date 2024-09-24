//Compare two objects and return true/false for equality
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
            if (!objTwo[key].includes(e)) { //second object's array doesn't include element e, set false and break the loop //will return true regardless of order, TODO: change to ensure order preserves
              return false;
            }
          }
        } else return false;
      }
    }
  } else return false;

  return true;
};

module.exports = eqObjects;