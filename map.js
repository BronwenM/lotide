//perform operation on elements of input array as defined by callback, return new array with altered elements
const map = (inputArray, callback) => {
  let res = [];

  for (let el of inputArray) {
    res.push(callback(el));
  }

  return res;
};

module.exports = map;