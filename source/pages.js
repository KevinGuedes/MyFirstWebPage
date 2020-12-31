const mathFunctions = require('./utils/mathFunctions')
const formatArray = require('./utils/formatArray')
const arrayValidator = require('./validators/arrayValidator')
const {saveOperation} = require('./database/saveOperation')
const gcdValidator = require('./validators/gcdValidator')
const {
    primeModel,
    fibonacciModel,
    gcdModel,
    countModel,
    quickSortModel,
    sumModel,
} = require('./model/pagesModel')


const pagePrime = (req, res) => {

    const inputNumber = parseInt(req.body.inputNumber)
    let result = ''

    if (inputNumber) {

        result = mathFunctions.testIfPrime(inputNumber)
        saveOperation('prime', inputNumber, result)

    }

    res.render('prime', primeModel(inputNumber, result))

}

const pageFibonacci = (req, res) => {

    const inputNumber = parseInt(req.body.inputNumber)
    let result = ''

    if (inputNumber) {

        result = mathFunctions.getFibonacciElement(inputNumber)
        saveOperation('fibonacci', inputNumber, result)

    }

    res.render('fibonacci', fibonacciModel(inputNumber, result))

}

const pageGcd = (req, res) => {

    const firstNumber = parseInt(req.body.firstNumber)
    const secondNumber = parseInt(req.body.secondNumber)
    let result = ''

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {

        try {

            gcdValidator.gcdInputValidator(firstNumber, secondNumber)
            result = mathFunctions.getGcd(firstNumber, secondNumber)
            saveOperation('gcd', [firstNumber, secondNumber], result)

        } catch (exception) {

            result = exception

        }

    }

    res.render('gcd', gcdModel(firstNumber, secondNumber, result))

}

const pageCount = (req, res) => {

    const inputNumber = parseInt(req.body.inputNumber)
    let result = ''

    if (inputNumber) {

        result = mathFunctions.getCount(inputNumber)
        saveOperation('count', inputNumber, result)

    }

    res.render('count', countModel(inputNumber, result))

}

const pageQuickSort = (req, res) => {

    const inputArray = req.body.inputArray
    let result = ''

    if (inputArray) {

        try {

            const processmentArray = formatArray.stringToArray(inputArray)
            arrayValidator.numericArrayValidator(processmentArray)
            result = 'Your \'Quick Sorted\' array is: ' + formatArray.arrayToString(mathFunctions.getQuickSortedArray(processmentArray))
            saveOperation('quickSort', processmentArray, result)

        } catch (exception) {

            result = exception

        }

    }

    res.render('quickSort', quickSortModel(inputArray, result))

}

const pageSum = (req, res) => {

    const inputArray = req.body.inputArray
    let result = ''

    if (inputArray) {

        try {

            const processmentArray = formatArray.stringToArray(inputArray)
            arrayValidator.numericArrayValidator(processmentArray)
            result = 'The sum is: ' + mathFunctions.getSumOfNumbers(processmentArray)
            saveOperation('sum', processmentArray, result)

        } catch (exception) {

            result = exception

        }

    }

    res.render('sum', sumModel(inputArray, result))

}

module.exports = {
    pagePrime,
    pageFibonacci,
    pageGcd,
    pageCount,
    pageQuickSort,
    pageSum,
}
