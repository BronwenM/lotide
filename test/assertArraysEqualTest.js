const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([], []);