//take elements from the start of an array until a condition from callback is satisfied. Return new array of elements
const takeUntil = (array, callback) => {
  let res = [];

  for (let el of array) {
    if (!callback(el)) {
      res.push(el);
    } else break;
  };

  return res;
};

module.exports = takeUntil;