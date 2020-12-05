const mathFunctions = require("./utils/mathFunctions");
const formatArray = require("./utils/formatArray");
const arrayValidator = require("./validators/arrayValidator");
const { generateUniqueId } = require("./utils/uniqueIdGenerator");
const { db, saveData } = require("./database/database");
const {
    indexData,
    primeData,
    fibonacciData,
    gcdData,
    countData,
    quickSortData,
    sumData
} = require("./model/pagesModel");


const pageIndex = (req, res) => {

    res.render('index', indexData);
}


const pagePrime = (req, res) => {

    var inputNumber = parseInt(req.body.inputNumber);
    var result = "";

    if (inputNumber) {
        result = mathFunctions.testIfPrime(inputNumber);

        saveData('Operations', {
            "operation": "Prime",
            "input": inputNumber,
            "result": result
        })
    }

    data = primeData(inputNumber, result);

    res.render('prime', data);
};


const pageFibonacci = (req, res) => {

    var inputNumber = parseInt(req.body.inputNumber);
    var result = "";

    if (inputNumber) {
        result = mathFunctions.getFibonacciElement(inputNumber);

        saveData('Operations', {
            "operation": "Fibonacci",
            "input": inputNumber,
            "result": result
        })
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

        saveData('Operations', {
            "operation": "Greatest Common Divisor",
            "input": [firstNumber, secondNumber],
            "result": result
        })
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

        saveData('Operations', {
            "operation": "Count",
            "input": inputNumber,
            "result": result
        })
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

            saveData('Operations', {
                "operation": "Quick Sort",
                "input": processmentArray,
                "result": result
            })
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

            saveData('Operations', {
                "operation": "Sum",
                "input": inputArray,
                "result": result
            })
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
