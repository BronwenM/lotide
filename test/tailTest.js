const tail = require("../tail");
const assertEqual = require("../assertEqual");


const result = tail(["Hello", "Lighthouse", "Labs"]); // should return ["Lighthouse", "Labs"]
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail! assert equal cannot compare arrays

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(tail(words).length, 2);

const uno = ["one"];
assertEqual(tail(uno).length, 0);

const none = [];
assertEqual(tail(none).length, 0);