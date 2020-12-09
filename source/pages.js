const mathFunctions = require("./utils/mathFunctions");
const formatArray = require("./utils/formatArray");
const arrayValidator = require("./validators/arrayValidator");
const { db, save } = require("./database/database");
const {
    indexData,
    primeData,
    fibonacciData,
    gcdData,
    countData,
    quickSortData,
    sumData
} = require("./model/pagesModel");
const {
    primeInputValidator,
    fibonacciInputValidator,
    countInputValidator,
    gcdInputValidator,
    quickSortValidator,
    sumValidator
} = require("./validators/inputValidator")


const pageIndex = (req, res) => {

    res.render('index', indexData);
}


const pagePrime = (req, res) => {

    let inputNumber = req.body.inputNumber;
    let validatorResult = primeInputValidator((parseInt(inputNumber)))
    let result;

    if (validatorResult.isValidInput) {
        result = mathFunctions.testIfPrime(parseInt(inputNumber));
        save('Operations', "Prime", inputNumber, result);
    }
    else {
        result = validatorResult.message
        //save('Errors', "Prime", inputNumber, result);
    }

    data = primeData(req.body.inputNumber, result);

    res.render('prime', data);
};


const pageFibonacci = (req, res) => {

    let inputNumber = "undefined";
    let validatorResult = fibonacciInputValidator((parseInt(inputNumber)))
    let result;

    if (validatorResult.isValidInput) {
        result = mathFunctions.getFibonacciElement(parseInt(inputNumber));
        save('Operations', "Fibonacci", inputNumber, result);
    }
    else if (!validatorResult.isValidInput && inputNumber == undefined){
        result = "";
    }
    else {
        result = validatorResult.message;
        //save('Errors', "Fibonacci", inputNumber, validatorResult.message);
    }

    data = fibonacciData(req.body.inputNumber, result);

    res.render('fibonacci', data);
};


const pageGcd = (req, res) => {

    var firstNumber = parseInt(req.body.firstNumber);
    var secondNumber = parseInt(req.body.secondNumber);
    var result;
    var both = firstNumber && secondNumber;

    if (both || (firstNumber === 0 && secondNumber == 1) || (firstNumber === 1 && secondNumber == 0)) {
        result = mathFunctions.getGcd(firstNumber, secondNumber);

        save('Operations', {
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
    let inputNumber = req.body.inputNumber;
    let validatorResult = countInputValidator((parseInt(inputNumber)))
    let result;

    if (validatorResult.isValidInput) {
        
        result = mathFunctions.getCount(parseInt(inputNumber));
        save('Operations', "Count", inputNumber, result);
    }
    else {
        result = validatorResult.message;
        //saver('Errors', "Count", inputNumber, result);
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

            save('Operations', {
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

            save('Operations', {
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
