const primeData = (inputNumber, result, empty = false) => {

    if(empty){
        inputNumber = ""
        result = ""
    }

    return {
        inputNumber: inputNumber,
        result: result,
        hrefCss: '/styles/page-prime.css',
        title: 'Prime Numbers',
        pageHeader: 'Check if a number is prime or not',
        formClass: 'prime-tester',
        action: '/prime/testIfPrime',
        buttonText: 'Test if the number is prime',
        layout: 'layout'
    }
}

const fibonacciData = (inputNumber, result, empty = false) => {

    if(empty){
        inputNumber = ""
        result = ""
    }

    return {
        inputNumber: inputNumber,
        result: result,
        hrefCss: '/styles/page-fibonacci.css',
        title: 'Fibonacci Sequence',
        pageHeader: 'Show the i-th element in a Fibonacci sequence',
        formClass: 'fibonacci-element',
        action: '/fibonacci/getFibonacciElement',
        buttonText: 'Get element',
        layout: 'layout'
    }
}

const gcdData = (firstNumber, secondNumber, result) => {
    
    if(empty){
        firstNumber = ""
        secondNumber = ""
        result = ""
    }

    return {
        firstNumber: !Number.isNaN(firstNumber) ? firstNumber : '',
        secondNumber: !Number.isNaN(secondNumber) ? secondNumber : '',
        result: result,
        hrefCss: '/styles/page-gcd.css',
        title: 'Greatest Common Divisor',
        pageHeader: 'Greatest common divisor of two numbers',
        formClass: 'gcd',
        action: '/gcd/getGcd',
        buttonText: 'Find greatest common divisor',
        layout: 'layout'
    }
}

const countData = (inputNumber, result, empty = false) => {
    
    if(empty){
        inputNumber = ""
        result = ""
    }

    return {
        inputNumber: inputNumber,
        result: result,
        hrefCss: '/styles/page-count.css',
        title: 'Count Numbers',
        pageHeader: 'Count Numbers Within A Range',
        formClass: 'count',
        action: '/count/getCount',
        buttonText: 'Get count',
        layout: 'layout'
    }
}

const quickSortData = (inputArray, result, empty = false) => {
    
    if(empty){
        inputArray = ""
        result = ""
    }

    return {
        inputArray: inputArray,
        result: result,
        hrefCss: '/styles/page-quickSort.css',
        title: 'Quick Sort',
        pageHeader: 'Sort an array using Quick Sort method',
        formClass: 'quickSort',
        action: '/quickSort/getQuickSortedArray',
        buttonText: 'Sort the array',
        layout: 'layout'
    }
}

const sumData = (inputArray, result, empty = false) => {

    if(empty){
        inputArray = ""
        result = ""
    }

    return {
        inputArray: inputArray,
        result: result,
        hrefCss: '/styles/page-sum.css',
        title: 'Sum',
        pageHeader: 'Calculate the sum of numbers inside an array',
        formClass: 'sum',
        action: '/sum/getSum',
        buttonText: 'Get sum of numbers',
        layout: 'layout'
    }
}

module.exports = {
    primeData,
    fibonacciData,
    gcdData,
    countData,
    quickSortData,
    sumData
}