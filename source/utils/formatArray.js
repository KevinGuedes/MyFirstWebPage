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
    return arr.replace(/\s/g, '')
        .split(",")
        .filter(Boolean)
        .map(element => +element);
};


const numericArrayValidator = (arr) => {
    return Array.isArray(arr) && 
        arr.length && 
        arr.every(function (element) { return typeof element === 'number'}) && 
        !arr.includes(NaN);
};


module.exports = {
    arrayToString,
    stringToArray,
    numericArrayValidator
}
