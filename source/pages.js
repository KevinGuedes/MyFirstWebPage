const mathFunction = require("./utils/mathFunctions");


const pageIndex = (req, res) => {
    res.render('index')
}


const pagePrime = (req, res) => {
    
    var inputNumber = parseInt(req.body.inputNumber);
    
    const data = {
        inputNumber : inputNumber,
        result : inputNumber ? mathFunction.testIfPrime(inputNumber) : ""
    }

    res.render('prime', data)
};


const pageFibonacci = (req, res) => {
    var inputNumber = parseInt(req.body.inputNumber);

    const data = {
        inputNumber : inputNumber,
        result :  inputNumber ? mathFunction.getFibonacciElement(inputNumber) : ""
    }

    res.render('fibonacci', data)
}


const pageGcd = (req, res) => {
    var firstNumber = parseInt(req.body.firstNumber);
    var secondNumber = parseInt(req.body.secondNumber);

    const data = {
        firstNumber : firstNumber,
        secondNumber : secondNumber,
        result : mathFunction.getGcd(firstNumber, secondNumber)
    }

    res.render('gcd', data)
}


const pageCount = (req, res) => {

    var inputNumber = parseInt(req.body.inputNumber);
    const data = {
        inputNumber : inputNumber,
        result : inputNumber ? mathFunction.getCount(inputNumber) : ""
    }
    res.render('count', data)
}


const pageQuickSort = (req, res) => {

    res.render('quickSort', data)
}


const pageSum = (req, res) => {

    res.render('sum', data)
}


module.exports = {
    pageIndex,
    pagePrime,
    pageFibonacci,
    pageGcd,
    pageCount,
    pageQuickSort,
    pageSum
}