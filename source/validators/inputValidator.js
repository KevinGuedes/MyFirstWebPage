const { arrayValidator } = require("./arrayValidator");
const { basicValidation } = require("./numberValidator");
const {
    commonMessages,
    firstGcdInputMessages,
    secondGcdInputMessages
} = require("../model/inputValidatorModel");


const primeInputValidator = (input) => {
    return basicValidation(input, commonMessages, false);
};


const fibonacciInputValidator = (input) => {
    return basicValidation(input, commonMessages, true);
};


const countInputValidator = (input) => {
    return basicValidation(input, commonMessages, true);
};


const gcdInputValidator = (firstInput, secondInput) => {
    let firstInputValidation = basicValidation(firstInput, firstGcdInputMessages, false);
    if (!firstInputValidation.isValidInput) {
        return firstInputValidation;
    }

    let secondInputValidation = basicValidation(secondInput, secondGcdInputMessages, false);
    if (!secondInputValidation.isValidInput) {
        return secondInputValidation;
    }

    if (firstInput === 0 && secondInput === 0) {
        return {
            isValidInput: false,
            message: "The numbers cannot be both zero"
        }
    }

    return {
        isValidInput: true,
        message: "Correct input"
    }
};


const quickSortValidator = (input) => {
    return arrayValidator(input);
};


const sumValidator = (input) => {
    return arrayValidator(input);
};


module.exports = {
    primeInputValidator,
    fibonacciInputValidator,
    countInputValidator,
    gcdInputValidator,
    quickSortValidator,
    sumValidator
}