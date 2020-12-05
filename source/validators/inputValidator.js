const { 
    commonMessages,
    firstGcdInputMessages,
    secondGcdInputMessages
} = require("../model/inputValidatorModel");

const numberGreaterThanZero = (number, message) => {
    if (number < 0) {
        throw {
            isValidInput: false,
            message: message
        }
    }
}

const integerNumber = (number, message) => {
    if (!Number.isInteger(number)) {
        throw {
            isValidInput: false,
            message: message
        }
    }
}

const validNumber = (number, message) => {
    if (isNaN(number)) {
        throw {
            isValidInput: false,
            message: message
        }
    }
}


const basicValidation = (number, messages) => {
    try {
        numberGreaterThanZero(number, messages.numberGreaterThanZero);
        integerNumber(number, messages.integerNumber);
        validNumber(number, messages.validNumber);
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
    return basicValidation(input, commonMessages);
};


const fibonacciInputValidator = (input) => {
    return basicValidation(input, commonMessages);
};


const countInputValidator = (input) => {
    return basicValidation(input, commonMessages);
};

const gcdInputValidator = (firstInput, secondInput) => {
    let firstInputValidation = basicValidation(firstInput, firstGcdInputMessages);
    if(!firstInputValidation.isValidInput) {
        return firstInputValidation;
    }

    let secondInputValidation = basicValidation(secondInput, secondGcdInputMessages);
    if(!secondInputValidation.isValidInput) {
        return secondInputValidation;
    }
}


module.exports = {
    primeInputValidator,
    fibonacciInputValidator,
    countInputValidator,
    gcdInputValidator
}