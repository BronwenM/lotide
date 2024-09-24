//take in a string
//count the letters in the string
//return the counts as obj
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