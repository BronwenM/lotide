const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

//take in object and value to look for in object
//return the 1st key with that value. if no value return undef
const findKeyByValue = (obj, val) => {
    for(item in obj){
        if(obj[item] === val) return item
    }
    return undefined;
}

const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
    romance: "The Wire",
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "romance"); //should fail because it's after drama