const commonMessages = {
    numberGreaterThanZero: "Insert numbers greater than zero",
    integerNumber: "Insert integer numbers",
    validNumber: "Insert numbers only",
}

const gcdInputMessages = (inputName) => {
    return {
        integerNumber: `The ${inputName} must be an integer number`,
        validNumber: `The ${inputName} must be a number`,
    }
}

const firstGcdInputMessages = gcdInputMessages("first input")
const secondGcdInputMessages = gcdInputMessages("second input")



module.exports = {
    commonMessages,
    firstGcdInputMessages,
    secondGcdInputMessages
}