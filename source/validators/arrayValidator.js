const numericArrayValidator = (arr) => {
    if (Array.isArray(input) &&
        input.length &&
        input.every(function (element) { return typeof element === 'number' }) &&
        !input.includes(NaN)) {
        return {
            isValidInput: true,
            message: "Correct input"
        }
    }
    else {
        return {
            isValidInput: false,
            message: "Please, verify your array"
        }
    }
};


module.exports = {
    numericArrayValidator
}