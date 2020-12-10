const arrayToString = (arr) => {
    let stringfiedArray = "";
   
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


// const stringToArray = (arr) => {
//     return arr
//         .replace(/[^,0-9]/g, '')
//         .split(',')
//         .filter(Boolean)
//         .map(element => +element);
// };


module.exports = {
    arrayToString,
    stringToArray,
}
