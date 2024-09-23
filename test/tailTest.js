const tail = require("../tail");
const assertArraysEqual = require("../assertArraysEqual");


const result = tail(["Hello", "Lighthouse", "Labs"]); // should return ["Lighthouse", "Labs"]
assertArraysEqual(result, ["Lighthouse", "Labs"]); // => will always fail! assert equal cannot compare arrays

const uno = ["one"];
assertArraysEqual(tail(uno), []);

const none = [];
assertArraysEqual(tail(none), []);