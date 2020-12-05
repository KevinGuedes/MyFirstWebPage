const numberGreaterThanZero = (number) => {
    if (number < 0) {
        throw {
            isValidInput: false,
            message: "Insert numbers greater than zero"
        }
    }
}

const integerNumber = (number) => {
    if (!Number.isInteger(input)) {
        throw {
            isValidInput: false,
            message: "Insert integer numbers"
        }
    }
}

const validNumber = (number) => {
    if (isNaN(number)) {
        throw {
            isValidInput: false,
            message: "Insert numbers only"
        }
    }
}

const basicValidation = (number) => {
    numberGreaterThanZero(number);
    integerNumber(number);
    validNumber(number);
}

const primeInputValidator = (input) => {

    try {
        basicValidation(input)
    }
    catch (exception) {
        return exception;
    }

    return {
        isValidInput: true,
        message: "Correct input"
    }

};

const fibonacciInputValidator = (input) => {

    try {
        basicValidation(input)
    }
    catch (exception) {
        return exception;
    }

    return {
        isValidInput: true,
        message: "Correct input"
    }
};


const countInputValidator = (input) => {

    try {
        basicValidation(input)
    }
    catch (exception) {
        return exception;
    }

    return {
        isValidInput: true,
        message: "Correct input"
    }
};
