//Count each instance of a letter in a string, return an object with key/value pairs for each unique letter in the string
const countLetters = (str) => {
    let res = {};

    const smStr = str.split(' ').join('');

    for(let char of smStr){
        if(res[char]) res[char]++;
        else res[char] = 1;
    }

    return res;
}

module.exports = countLetters;