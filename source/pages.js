const mathFunctions = require('./utils/mathFunctions')
const formatArray = require('./utils/formatArray')
const arrayValidator = require('./validators/arrayValidator')
const { saveOperation } = require('./database/saveOperation')
const gcdValidator = require('./validators/gcdValidator')
const {
    primeModel,
    fibonacciModel,
    gcdModel,
    countModel,
    quickSortModel,
    sumModel
} = require('./model/pagesModel')


const pagePrime = (req, res) => {

    let inputNumber = parseInt(req.body.inputNumber)
    let result = ''

    if (inputNumber) {
        result = mathFunctions.testIfPrime(inputNumber)
        saveOperation('prime', inputNumber, result)
    }

    data = primeModel(inputNumber, result)

    res.render('prime', data)
}


const pageFibonacci = (req, res) => {

    let inputNumber = parseInt(req.body.inputNumber)
    let result = ''

    if (inputNumber) {
        result = mathFunctions.getFibonacciElement(inputNumber)
        saveOperation('fibonacci', inputNumber, result)
    }

    data = fibonacciModel(inputNumber, result)

    res.render('fibonacci', data)
}


const pageGcd = (req, res) => {

    let firstNumber = parseInt(req.body.firstNumber)
    let secondNumber = parseInt(req.body.secondNumber)
    let result = ''

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        try {
            gcdValidator.gcdInputValidator(firstNumber, secondNumber)
            result = mathFunctions.getGcd(firstNumber, secondNumber)
            saveOperation('gcd', [firstNumber, secondNumber], result)
        }
        catch (exception) {
            result = exception.message
        }
    }

    const data = gcdModel(firstNumber, secondNumber, result)

    res.render('gcd', data)
}


const pageCount = (req, res) => {

    let inputNumber = parseInt(req.body.inputNumber)
    let result = ''

    if (inputNumber) {
        result = mathFunctions.getCount(inputNumber)
        saveOperation('count', inputNumber, result)
    }

    const data = countModel(inputNumber, result)

    res.render('count', data)
}


const pageQuickSort = (req, res) => {

    let inputArray = req.body.inputArray
    let result = ''

    if (inputArray) {
        try {
            let processmentArray = formatArray.stringToArray(inputArray)
            arrayValidator.numericArrayValidator(processmentArray)
            result = "Your 'Quick Sorted' array is: " + formatArray.arrayToString(mathFunctions.getQuickSortedArray(processmentArray))
            saveOperation('quickSort', processmentArray, result)
        }
        catch (exception) {
            result = exception.message
        }
    }

    data = quickSortModel(inputArray, result)

    res.render('quickSort', data)
}


const pageSum = (req, res) => {

    let inputArray = req.body.inputArray
    let result = ''

    if (inputArray) {
        try {
            let processmentArray = formatArray.stringToArray(inputArray)
            arrayValidator.numericArrayValidator(processmentArray)
            result = 'The sum is: ' + mathFunctions.getSumOfNumbers(processmentArray)
            saveOperation('sum', processmentArray, result)
        }
        catch (exception) {
            result = exception.message
        }
    }

    const data = sumModel(inputArray, result)

    res.render('sum', data)
}


module.exports = {
    pagePrime,
    pageFibonacci,
    pageGcd,
    pageCount,
    pageQuickSort,
    pageSum
}
