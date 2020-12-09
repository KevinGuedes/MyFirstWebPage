const mathFunctions = require("./utils/mathFunctions");
const formatArray = require("./utils/formatArray");
const arrayValidator = require("./utils/arrayValidator");
const { saveOperation } = require("../database/database");
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
    var result;
    var both = firstNumber && secondNumber;

    if (both || (firstNumber === 0 && secondNumber == 1) || (firstNumber === 1 && secondNumber == 0)) {
        result = mathFunctions.getGcd(firstNumber, secondNumber);
        saveOperation("Greatest Common Divisor", [firstNumber, secondNumber], result);
    }
    else if (firstNumber === 0 && secondNumber === 0) {
        result = "Invalid numbers. They cannot be both 0";
    }
    else if (Number.isNaN(firstNumber) && Number.isNaN(secondNumber)) {
        result = "";
    }
    else {
        result = "Insert both numbers";
    };

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

        processmentArray = formatArray.stringToArray(inputArray);

        if (arrayValidator.numericArrayValidator(processmentArray)) {
            result = "Your 'Quick Sorted' array is: " + formatArray.arrayToString(mathFunctions.getQuickSortedArray(processmentArray));
            saveOperation("Quick Sort", processmentArray, result);
        }
        else {
            result = "Please verify your array";
        }
    };

    data = quickSortData(inputArray, result);

    res.render('quickSort', data);
};


const pageSum = (req, res) => {

    var inputArray = req.body.inputArray;
    var result = "";

    if (inputArray) {

        var processmentArray = formatArray.stringToArray(inputArray);

        if (arrayValidator.numericArrayValidator(processmentArray)) {
            var result = "The sum is " + mathFunctions.getSumOfNumbers(processmentArray);
            saveOperation("Sum", processmentArray, result);
        }
        else {
            result = "Please verify your array";
        }

    };

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
