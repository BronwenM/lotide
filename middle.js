//Return the middle item in an array. If the array has an even number of items, return both middle items.
const middle = (arr) => {
  let midArr = [];
  let midIndex;

  if (arr.length > 2) {
    midIndex = (arr.length / 2);

    if (arr.length % 2 !== 0) midArr.push(arr[Math.floor(midIndex)]);
    else midArr.push(arr[midIndex - 1], arr[midIndex]);


    return midArr;
  }
  return [];
};

module.exports = middle;
