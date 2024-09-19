const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

//takes in array (allItems) and an object (itemsToCount)
//fn will count the number of items in the array, as listed in the object as "true" (ie [a,b,c,a,c] and {a: true, b: false, c:true})
//returns an object ({a: 2, c: 2})

const countOnly = (allItems, itemsToCount) => {
    results = {}

    for (const item of allItems) {
        if (itemsToCount[item]) {
            if (results[item]) results[item]++;
            else results[item] = 1;
        }
    }

    return results;
}

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

const result1 = countOnly(firstNames, {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);