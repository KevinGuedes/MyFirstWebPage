const primeEmptyModel = {
    inputNumber: '',
    result: '',
    hrefCss: '/styles/page-prime.css',
    title: 'Prime Numbers',
    pageHeader: 'Check if a number is prime or not',
    formClass: 'prime-tester',
    action: '/prime/testIfPrime',
    buttonText: 'Test if the number is prime',
    layout: './layouts/algorithmLayout',
    redirectEnabled: false,
}

const fibonacciEmptyModel = {
    inputNumber: '',
    result: '',
    hrefCss: '/styles/page-fibonacci.css',
    title: 'Fibonacci Sequence',
    pageHeader: 'Show the i-th element in a Fibonacci sequence',
    formClass: 'fibonacci-element',
    action: '/fibonacci/getFibonacciElement',
    buttonText: 'Get element',
    layout: './layouts/algorithmLayout',
    redirectEnabled: false,
}

const gcdEmptyModel = {
    firstNumber: '',
    secondNumber: '',
    result: '',
    hrefCss: '/styles/page-gcd.css',
    title: 'Greatest Common Divisor',
    pageHeader: 'Greatest common divisor of two numbers',
    formClass: 'gcd',
    action: '/gcd/getGcd',
    buttonText: 'Find greatest common divisor',
    layout: './layouts/algorithmLayout',
    redirectEnabled: false,
}

const countEmptyModel = {
    inputNumber: '',
    result: '',
    hrefCss: '/styles/page-count.css',
    title: 'Count Numbers',
    pageHeader: 'Count Numbers Within A Range',
    formClass: 'count',
    action: '/count/getCount',
    buttonText: 'Get count',
    layout: './layouts/algorithmLayout',
    redirectEnabled: false,
}

const quickSortEmptyModel = {
    inputArray: '',
    result: '',
    hrefCss: '/styles/page-quickSort.css',
    title: 'Quick Sort',
    pageHeader: 'Sort an array using Quick Sort method',
    formClass: 'quickSort',
    action: '/quickSort/getQuickSortedArray',
    buttonText: 'Sort the array',
    layout: './layouts/algorithmLayout',
    redirectEnabled: false,
}

const sumEmptyModel = {
    inputArray: '',
    result: '',
    hrefCss: '/styles/page-sum.css',
    title: 'Sum',
    pageHeader: 'Calculate the sum of numbers inside an array',
    formClass: 'sum',
    action: '/sum/getSum',
    buttonText: 'Get sum of numbers',
    layout: './layouts/algorithmLayout',
    redirectEnabled: false,
}

module.exports = {
    primeEmptyModel,
    fibonacciEmptyModel,
    gcdEmptyModel,
    countEmptyModel,
    quickSortEmptyModel,
    sumEmptyModel,
}
