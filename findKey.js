const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

const findKey = (obj, callback) => {
    //get keys from object
    const keys = Object.keys(obj);
    
    //Loop through object by keys. If the callback returns true from object value return the key
    for(const key of keys){
        if(callback(obj[key])) {
            return key
        }
    }

    return undefined;
}

assertEqual(findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ), "noma")

  assertEqual(findKey(
    {},
    (x) => x === 4
  ), undefined)

  assertEqual(findKey(
    {
      Green: 25,
      Yellow: 61,
      Purple: 53,
      Blue: 45,
      Silver: 12,
      Gold: 60,
    },
    (x) => x < 20
  ), "Silver")