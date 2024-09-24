//return the positions of each letter in a string as an object with each unique letter as a key
const letterPositions = (str) => {
    const res = {};

    for (let index = 0; index < str.length; index++) {
        if (str[index] !== " ") {
            if (res[str[index]]) res[str[index]].push(index);
            else res[str[index]] = [index];
        }

    }



    return res;
};

module.exports = letterPositions