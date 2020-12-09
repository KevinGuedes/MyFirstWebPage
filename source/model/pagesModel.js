const indexData = {
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



const primeData = (inputNumber, result) => {
    return {
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
}


const fibonacciData = (inputNumber, result) => {
    return {
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
}


const gcdData = (firstNumber, secondNumber, result) => {
    return {
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
}


const countData = (inputNumber, result) => {
    return {
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
}

const quickSortData = (inputArray, result) => {
    return {
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
}

const sumData = (inputArray, result) => {
    return {
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

}

module.exports = {
    indexData,
    primeData,
    fibonacciData,
    gcdData,
    countData,
    quickSortData,
    sumData
}