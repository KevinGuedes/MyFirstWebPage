const mathFunctions = require("./utils/mathFunctions");
const formatArray = require("./utils/formatArray");
const arrayValidator = require("./utils/arrayValidator");
const { generateUniqueId } = require("./utils/uniqueIdGenerator");
const { db } = require("../database/database");

const saveData = (data) => {
    let operationBaseRef = db.collection('Operations').doc(generateUniqueId());
    operationBaseRef.set(data);
};

const pageIndex = (req, res) => {

    const data = {
        layout : 'index',
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
    };

    res.render('index', data);
}


const pagePrime = (req, res) => {

    var inputNumber = parseInt(req.body.inputNumber);
    var result = "";

    if(inputNumber){
        result = mathFunctions.testIfPrime(inputNumber);

        saveData({
            "operation" : "Test if prime",
            "input" : inputNumber,
            "result" : result
        })
        
    };
    
    const data = {
        inputNumber : inputNumber,
        result : result,
        hrefCss : "/styles/page-prime.css",
        title : "Prime Numbers",
        pageHeader : "Check if a number is prime or not",
        formClass : "prime-tester",
        action : "/testIfPrime",
        buttonText : "Test if the number is prime",
        layout : 'layout'
    };

    res.render('prime', data);
};


const pageFibonacci = (req, res) => {

    var inputNumber = parseInt(req.body.inputNumber);
    var result = "";

    if(inputNumber){
        result = mathFunctions.getFibonacciElement(inputNumber);
    }

    const data = {
        inputNumber: inputNumber,
        result: result,
        hrefCss: "/styles/page-fibonacci.css",
        title: "Fibonacci Sequence",
        pageHeader : "Show the i-th element in a Fibonacci sequence",
        formClass : "fibonacci-element",
        action : "/getFibonacciElement",
        buttonText : "Get element",
        layout : 'layout'
    };

    res.render('fibonacci', data);
};


const pageGcd = (req, res) => {

    var firstNumber = parseInt(req.body.firstNumber);
    var secondNumber = parseInt(req.body.secondNumber);
    var result;
    var both = firstNumber && secondNumber;

    if (both || (firstNumber === 0 && secondNumber == 1) || (firstNumber === 1 && secondNumber == 0)) {
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
    };

    const data = {
        firstNumber : !Number.isNaN(firstNumber) ? firstNumber : "",
        secondNumber : !Number.isNaN(secondNumber) ? secondNumber : "",
        result: result,
        hrefCss: "/styles/page-gcd.css",
        title: "Greatest Common Divisor",
        pageHeader : "Greatest common divisor of two numbers",
        formClass : "gcd",
        action : "/getGcd",
        buttonText : "Find greatest common divisor",
        layout : 'layout'
    };

    res.render('gcd', data);
};


const pageCount = (req, res) => {

    var inputNumber = parseInt(req.body.inputNumber);
    var result = "";

    if(inputNumber){
        result = mathFunctions.getCount(inputNumber) 
    }

    const data = {
        inputNumber : inputNumber,
        result : result,
        hrefCss : "/styles/page-count.css",
        title : "Count Numbers",
        pageHeader : "Count Numbers Within A Range",
        formClass : "count",
        action : "/getCount",
        buttonText : "Get count",
        layout : 'layout'
    }

    res.render('count', data);
};


const pageQuickSort = (req, res) => {

    var inputArray = req.body.inputArray;
    var result = "";

    if (inputArray) {

        processmentArray = formatArray.stringToArray(inputArray);

        if (arrayValidator.numericArrayValidator(processmentArray)) {
            var result = "Your 'Quick Sorted' array is: " + formatArray.arrayToString(mathFunctions.getQuickSortedArray(processmentArray));
        }
        else {
            result = "Please verify your array";
        }
    };

    const data = {
        inputArray : inputArray,
        result : result,
        hrefCss : "/styles/page-quickSort.css",
        title : "Quick Sort",
        pageHeader : "Sort an array using Quick Sort method",
        formClass : "quickSort",
        action : "/getQuickSortedArray",
        buttonText : "Sort the array",
        layout : 'layout'
    };

    res.render('quickSort', data);
};


const pageSum = (req, res) => {

    var inputArray = req.body.inputArray;
    var result = "";

    if (inputArray) {

        var processmentArray = formatArray.stringToArray(inputArray);

        if (arrayValidator.numericArrayValidator(processmentArray)) {
            var result = "The sum is " + mathFunctions.getSumOfNumbers(processmentArray);
        }
        else {
            result = "Please verify your array";
        }

    };

    const data = {
        inputArray : inputArray,
        result : result,
        hrefCss : "/styles/page-sum.css",
        title : "Sum",
        pageHeader : "Calculate the sum of numbers inside an array",
        formClass : "sum",
        action : "/getSum",
        buttonText : "Get sum of numbers",
        layout : 'layout'
    };

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
