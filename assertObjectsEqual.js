const inspect = require('util').inspect;
const eqObjects = require('./eqObjects');

//compare two objects and return true if they are equal
const assertObjectsEqual = (actual, expected) => {
  if (eqObjects(actual, expected)) console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}

module.exports = assertObjectsEqual;