const numericArrayValidator = (arr) => {
    if (!(Array.isArray(input) &&
        input.length &&
        input.every(function (element) { return typeof element === 'number' }) &&
        !input.includes(NaN))) {
        throw {
            isValidInput: false,
            message: "Please verify your array"
        }
    }
};

const arrayValidator = (inputArray) => {
    try{
        numericArrayValidator(inputArray)
    }
    catch (exception) {
        return exception
    }

    return {
        isValidInput: true,
        message: "Correct input"
    }
}

module.exports = {
    arrayValidator
}