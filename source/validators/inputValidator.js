const {
    commonMessages,
    firstGcdInputMessages,
    secondGcdInputMessages
} = require("../model/inputValidatorModel");


const numberIsNotZero = (number, message) => {
    if (number === 0) { //Não aceita zero
        throw {
            isValidInput: false,
            message: message
        }
    }
}

const positiveNumberOrZero = (number, message) => {
    if (number < 0) { //Aceita 0
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






const basicValidation = (number, messages, notZero = false) => {
    try {
        integerNumber(number, messages.integerNumber);
        validNumber(number, messages.validNumber);
        positiveNumberOrZero(number, messages.numberGreaterThanZero);

        if (notZero) {
            numberIsNotZero(number, messages.equalToZero);
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


module.exports = {
    primeInputValidator,
    fibonacciInputValidator,
    countInputValidator,
    gcdInputValidator
}