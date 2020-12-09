const mathFunctions = require("./utils/mathFunctions");
const formatArray = require("./utils/formatArray");
const arrayValidator = require("./validators/arrayValidator");
const { saveOperation } = require("../database/database");
const gcdValidator = require("./validators/gcdValidator");
const {
    indexData,
    primeData,
    fibonacciData,
    gcdData,
    countData,
    quickSortData,
    sumData
} = require('./model/pagesModel')


const pageIndex = (req, res) => {

    res.render('index', indexData);
}


const pagePrime = (req, res) => {

    var inputNumber = parseInt(req.body.inputNumber);
    var result = "";

    if (inputNumber) {
        result = mathFunctions.testIfPrime(inputNumber);
        saveOperation("Prime", inputNumber, result);
    }

    data = primeData(inputNumber, result);

    res.render('prime', data);
};


const pageFibonacci = (req, res) => {

    var inputNumber = parseInt(req.body.inputNumber);
    var result = "";

    if (inputNumber) {
        result = mathFunctions.getFibonacciElement(inputNumber);
        saveOperation("Fibonacci", inputNumber, result);
    }

    data = fibonacciData(indexData, result);

    res.render('fibonacci', data);
};


const pageGcd = (req, res) => {

    var firstNumber = parseInt(req.body.firstNumber);
    var secondNumber = parseInt(req.body.secondNumber);
    var result = "";

   
    try {
        gcdValidator.gcdInputValidator(firstNumber, secondNumber);
        result = mathFunctions.getGcd(firstNumber, secondNumber);
        saveOperation("Greatest Common Divisor", [firstNumber, secondNumber], result);
    }
    catch (exception) {
        result = exception.message;
    }
    

    const data = gcdData(firstNumber, secondNumber, result);

    res.render('gcd', data);
};


const pageCount = (req, res) => {

    var inputNumber = parseInt(req.body.inputNumber);
    var result = "";

    if (inputNumber) {
        result = mathFunctions.getCount(inputNumber);
        saveOperation("Count", inputNumber, result);
    }

    const data = countData(inputNumber, result);

    res.render('count', data);
};


const pageQuickSort = (req, res) => {

    var inputArray = req.body.inputArray;
    var result = "";

    if (inputArray) {
        try {
            let processmentArray = formatArray.stringToArray(inputArray);
            arrayValidator.numericArrayValidator(processmentArray);
            result = "Your 'Quick Sorted' array is: " + formatArray.arrayToString(mathFunctions.getQuickSortedArray(processmentArray));
            saveOperation("Quick Sort", processmentArray, result);
        }
        catch (exception) {
            result = exception.message;
        }
    }

    data = quickSortData(inputArray, result);

    res.render('quickSort', data);
};


const pageSum = (req, res) => {

    var inputArray = req.body.inputArray;
    var result = "";

    if (inputArray) {
        try {
            let processmentArray = formatArray.stringToArray(inputArray);
            arrayValidator.numericArrayValidator(processmentArray);
            result = "The sum is: " + mathFunctions.getSumOfNumbers(processmentArray);
            saveOperation("Sum", processmentArray, result);
        }
        catch (exception) {
            result = exception.message;
        }
    }

    const data = sumData(inputArray, result);

    res.render('sum', data);
};


module.exports = {
    pageIndex,
    pagePrime,
    pageFibonacci,
    pageGcd,
    pageCount,
    pageQuickSort,
    pageSum
}
