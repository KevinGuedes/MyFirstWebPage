const mathFunctions = require("./utils/mathFunctions");
const formatArray = require("./utils/formatArray");
const { sec } = require("mathjs");

const pageIndex = (req, res) => {

    const data = {
        hrefCss: "/styles/page-index.css",
        title: "Kevin's First Web Page | Basic Algorithms",
        menu: [
            {
                href: "/prime",
                method: "Test if a number is prime or not"
            },
            {
                href: "/fibonacci",
                method: "Show the i-th element in a Fibonacci sequence"
            },
            {
                href: "/gcd",
                method: "Show the greatest common divisor of two numbers"
            },
            {
                href: "/count",
                method: "Count numbers within a range"
            },
            {
                href: "/quickSort",
                method: "Sort an array using Quick Sort method"
            },
            {
                href: "/sum",
                method: "Calculate the sum of numbers inside an array"
            }
        ]
    }

    res.render('index', data)
}


const pagePrime = (req, res) => {

    var inputNumber = parseInt(req.body.inputNumber);

    const data = {
        inputNumber: inputNumber,
        result: inputNumber ? mathFunctions.testIfPrime(inputNumber) : "",
        hrefCss: "/styles/page-prime.css",
        title: "Prime Numbers"
    }

    res.render('prime', data)
};


const pageFibonacci = (req, res) => {

    var inputNumber = parseInt(req.body.inputNumber);

    const data = {
        inputNumber: inputNumber,
        result: inputNumber ? mathFunctions.getFibonacciElement(inputNumber) : "",
        hrefCss: "/styles/page-fibonacci.css",
        title: "Fibonacci Sequence"
    }

    res.render('fibonacci', data)
};


const pageGcd = (req, res) => {

    var firstNumber = parseInt(req.body.firstNumber);
    var secondNumber = parseInt(req.body.secondNumber);
    var result;
    var both = firstNumber && secondNumber;

    if (both) {
        result = mathFunctions.getGcd(firstNumber, secondNumber);
    }
    else if (firstNumber === 0 && secondNumber === 0) {
        result = "Invalid numbers. They cannot be both 0";
    }
    else if (Number.isNaN(firstNumber) && Number.isNaN(secondNumber)) {
        result = ""; 
    }
    else {
        result = "Insert both numbers";
    }

    console.log(firstNumber)
    console.log(secondNumber)

    const data = {
        firstNumber: !Number.isNaN(firstNumber) ? firstNumber : "",
        secondNumber: !Number.isNaN(secondNumber) ? secondNumber : "",
        result: result,
        hrefCss: "/styles/page-gcd.css",
        title: "Greatest Common Divisor"
    }

    res.render('gcd', data)
};


const pageCount = (req, res) => {

    var inputNumber = parseInt(req.body.inputNumber);

    const data = {
        inputNumber: inputNumber,
        result: inputNumber ? mathFunctions.getCount(inputNumber) : "",
        hrefCss: "/styles/page-count.css",
        title: "Count Numbers"
    }

    res.render('count', data)
};


const pageQuickSort = (req, res) => {

    var inputArray = req.body.inputArray;
    var result = "";
    var copiedInputArray = "";

    if (inputArray) {

        copiedInputArray = inputArray;
        inputArray = formatArray.stringToArray(inputArray);

        if (formatArray.numericArrayValidator(inputArray)) {
            copiedInputArray = inputArray.slice();
            copiedInputArray = formatArray.arrayToString(copiedInputArray);
            var result = "Your 'Quick Sorted' array is: " + formatArray.arrayToString(mathFunctions.getQuickSortedArray(inputArray, 0, inputArray.length - 1));
        }
        else {
            result = "Please verify your array";
        }
    }

    const data = {
        inputArray: copiedInputArray,
        result: result,
        hrefCss: "/styles/page-quickSort.css",
        title: "Quick Sort"
    }

    res.render('quickSort', data)
};


const pageSum = (req, res) => {

    var inputArray = req.body.inputArray;
    var result = "";
    var copiedInputArray = "";

    if (inputArray) {

        copiedInputArray = inputArray
        inputArray = formatArray.stringToArray(inputArray);

        if (formatArray.numericArrayValidator(inputArray)) {
            copiedInputArray = inputArray.slice();
            copiedInputArray = formatArray.arrayToString(copiedInputArray);
            var result = "The sum is " + mathFunctions.getSumOfNumbers(inputArray);
            inputArray = formatArray.arrayToString(inputArray);
        }
        else {
            result = "Please verify your array";
        }

    }

    const data = {
        inputArray: copiedInputArray,
        result: result,
        hrefCss: "/styles/page-sum.css",
        title: "Sum"
    }

    res.render('sum', data)
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
