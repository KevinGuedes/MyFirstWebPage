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


const arrayValidator = (arr) => {
    return Array.isArray(arr) && arr.length;
}

module.exports = {
    arrayToString,
    stringToArray,
    arrayValidator
}