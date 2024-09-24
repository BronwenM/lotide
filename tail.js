//Remove the first element in an array and return the trailing elements 
const tail = function (arr) {
  let res = [].concat(arr);
  if(arr === undefined) return undefined;
  if (arr.length > 1) return res.slice(1);
  else return [];
};

module.exports = tail;