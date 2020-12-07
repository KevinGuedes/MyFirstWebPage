const {
    commonMessages,
    firstGcdInputMessages,
    secondGcdInputMessages
} = require("../model/inputValidatorModel");
const { numericArrayValidator } = require("./arrayValidator");

const {
    numberIsNotZero,
    positiveNumberOrZero,
    integerNumber,
    isNumber
} = require("./numberValidator")


const basicValidation = (number, messages, notZero = false) => {
    try {
        integerNumber(number, messages.integerNumber);
        isNumber(number, messages.isNumber);
        positiveNumberOrZero(number, messages.numberGreaterThanZero);

        if (notZero) {
            numberIsNotZero(number, messages.numberIsNotZero);
        }

    }
    catch (exception) {
        return exception;
    }

    return {
        isValidInput: true,
        message: "Correct input"
    }
}

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
}


const quickSortValidator = (input) => {
    try {
        numericArrayValidator(input);
    }
    catch (exception) {
        return exception;
    }
}

const sumValidator = (input) => {
    try {
        numericArrayValidator(input);
    }
    catch (exception) {
        return exception;
    }
}


module.exports = {
    primeInputValidator,
    fibonacciInputValidator,
    countInputValidator,
    gcdInputValidator,
    quickSortValidator,
    sumValidator
}