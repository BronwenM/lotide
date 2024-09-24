# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @BronwenM/lotide`

**Require it:**

`const _ = require('@BronwenM/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual`: Compare two arrays with eqArrays and return log statements based on equality
- `assertEqual`: Compare two primitive inputs and return return log statements based on equality
- `assertObjectsEqual`: Compare two objects with eqObjects and return log statements based on equality
- `countLetters`: Count each instance of a letter in a string, return an object with key/value pairs for each unique letter in the string
- `countOnly`: Count the number of items in an array, as listed in the object as "true" return an object with key/value pairs for each unique element in the array
- `eqArrays`: Compare two arrays and return true/false for strict equality
- `eqObjects`: Compare two objects and return true/false for equality
- `findKey`: Loop through object values by key. If the callback param returns true from a value return the key
- `findKeyByValue`: Return the 1st key in an object with that match value param. If no value matches return undefined
- `flatten`: Recursively flatten a nested set of arrays
- `head`: Return the first element in an array
- `letterPositions`: Return the positions of each letter in a string as an object with each unique letter as a key
- `map`: Perform operation on each element of input array as defined by callback, return new array with altered elements
- `middle`: Return the middle item in an array. If the array has an even number of items, return both middle items.
- `tail`: Remove the first element in an array and return the trailing elements 
- `takeUntil`: Take elements from the start of an array until a condition from callback is satisfied. Return new array of elements
- `without`: Remove elements from the source array that match the itemsToRemove param