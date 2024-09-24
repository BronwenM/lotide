//Remove elements from the source array that match the itemsToRemove param
const without = (source, itemsToRemove) => {
    let res = [];
    res = res.concat(source);

    res.forEach(e => {
        if (itemsToRemove.includes(e)) res.splice(res.indexOf(e), 1);
    })

    return res;
}

module.exports = without;