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

const isNumber = (number, message) => {
    if (isNaN(number)) {
        throw {
            isValidInput: false,
            message: message
        }
    }
}

module.exports = {
    numberIsNotZero,
    positiveNumberOrZero,
    integerNumber,
    isNumber
}