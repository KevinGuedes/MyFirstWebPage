const numericArrayValidator = (arr) => {
    return Array.isArray(arr) && 
        arr.length && 
        arr.every(function (element) { return typeof element === 'number'}) && 
        !arr.includes(NaN);
};


module.exports = {
    numericArrayValidator
}