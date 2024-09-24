const assertObjectsEqual = require('../assertObjectsEqual');
const assertEqual = require('../assertEqual');
const flatten = require('../flatten');
const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');
const countOnly = require('../countOnly');
const countLetters = require('../countLetters');


//Assert Objects equal tests

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

//Count Letters
const result1 = countLetters("lighthouse in the house");

assertEqual(result1["i"], 2);
assertEqual(result1["h"], 4);
assertEqual(result1["e"], 3);
assertEqual(result1["u"], 2);

//Count Only Tests
const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
];

const coResult1 = countOnly(firstNames, {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
});

assertEqual(coResult1["Jason"], 1);
assertEqual(coResult1["Karima"], undefined);
assertEqual(coResult1["Fang"], 2);
assertEqual(coResult1["Agouhanna"], undefined);

//findKey tests
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

//find key by value test
const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
    romance: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "romance"); //should fail because it's after drama

//flatten tests
console.log(flatten([1, 2, [3, [4]], 5, [6], [7,[8,[9,[10, [11, [12]]]]]]]));
console.log(flatten([]));

//letter positions
const lpResult = letterPosition("lighthouse in the house");

// console.log(lpResult);

assertArraysEqual(lpResult["i"], [1, 11]);
assertArraysEqual(lpResult["h"], [3, 5, 15, 18]);
assertArraysEqual(lpResult["e"], [9, 16, 22]);
assertArraysEqual(lpResult["u"], [7, 20]);

//map tests
const words = ["ground", "control", "to", "major", "tom"];
const someNums = [32, 5, 63, 70, 45, 3];
const emptyArr = [];

const mapRes1 = map(words, (word) => word.length);
const mapRes2 = map(someNums, (num) => num % 2 === 0);
const mapRes3 = map(emptyArr, (item) => item + 3);

assertArraysEqual(mapRes1, [ 6, 7, 2, 5, 3 ]);
assertArraysEqual(mapRes2, [true, false, false, true, false, false ]);
assertArraysEqual(mapRes3, []);

//takeUntil tests
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

//without tests
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3", 4], [1, 2, "3"]), ["1", "2", 4]);

const testArr = ["No", "Way", "No", "How"];
without(testArr, ["No"]);
assertArraysEqual(testArr, ["Way", "How"]);

assertArraysEqual(without(["No", "Way", "No", "How"], ["No"]), ["Way", "How"]);