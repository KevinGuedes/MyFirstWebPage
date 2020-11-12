const arrayToString = (arr) => {
    var stringfiedArray = "";
   
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            stringfiedArray += arr[i];
        }
        else {
            stringfiedArray += arr[i] + ", ";
        }
    }

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