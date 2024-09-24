//Recursively flatten a nested set of arrays
const flatten = (arr, resultArray = []) => {
    let res = resultArray;

    for(let el of arr) {
        if(!Array.isArray(el)) {res.push(el)}
        else if (Array.isArray(el)) flatten(el, resultArray)
    }

    return res;
}

module.exports = flatten;