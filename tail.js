const tail = function (arr) {
  if(arr === undefined) return undefined;
  if (arr.length > 1) return arr.slice(1);
  else return [];
};

module.exports = tail;