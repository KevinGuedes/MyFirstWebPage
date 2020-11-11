const arrayToString = (arr) => {
    var stringfiedArray = "";
    arr.forEach(element => {
        stringfiedArray += element + " ";
    });
    return stringfiedArray;
};

const stringToArray = (arr) => {
    return arr.replace(/\s/g, '').split(",").map(element => +element);
};

module.exports = {
    arrayToString,
    stringToArray
}