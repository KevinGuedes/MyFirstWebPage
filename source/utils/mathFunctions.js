//Prime Number
const testIfPrime = (number) => {

    let count = 0

    if (number === 1 || number === 0) {
        return 'The number ' + number + ' is neither a prime nor a composite number'
    }
    else if (Number.isNaN(number) || number < 0) {
        return 'Insert a number greater than 0'
    }
    else {
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                count++
            }
        }
        if (count === 2) {
            return 'The number ' + number + ' is Prime'
        }
        else {
            return 'The number ' + number + ' is not Prime'
        }
    }
}


// Fibonacci
const getFibonacciElement = (elementNumber) => {

    let sequence = [0, 1]

    for (let i = 2; i < elementNumber; i++) {
        sequence.push(sequence[i - 2] + sequence[i - 1])
    }

    if (elementNumber <= 0) {
        return 'Insert a number greater than 0'
    }
    else {
        return 'The element #' + elementNumber + ' is: ' + sequence[elementNumber - 1]
    }
}


//Greatest Common Divisor
const calculateGcd = (firstNumber, secondNumber) => {
    if (!secondNumber) {
        return firstNumber
    }
    return calculateGcd(secondNumber, firstNumber % secondNumber)
}

const getGcd = (firstNumber, secondNumber) => {

    if (firstNumber < 0) {
        firstNumber = -firstNumber
    }

    if (secondNumber < 0) {
        secondNumber = -secondNumber
    }

    return 'The greatest common divisor of ' + firstNumber + ' and ' + secondNumber + ' is ' + calculateGcd(firstNumber, secondNumber)
}


//Count
const getCount = (number) => {

    let count = 0

    if (number <= 0) {
        return 'Insert a number greanter than zero'
    }
    else if (!Number.isInteger(number)) {
        return 'Insert an integer number'
    }
    else {
        for (let i = 1; i <= number; i++) {
            count++
        }
        return 'There are ' + count + ' integer numbers between 1 and ' + number + '!'
    }
}



//Quicksort
function getQuickSortedArray(inputArray) {

    let arr = inputArray.slice()

    if (arr.length <= 1) {
        return arr
    }
    else {

        let left = []
        let right = []
        let newArray = []
        let pivot = arr.pop()
        let length = arr.length

        for (let i = 0; i < length; i++) {
            if (arr[i] <= pivot) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }

        return newArray.concat(getQuickSortedArray(left), pivot, getQuickSortedArray(right))
    }
}


//Sum of numbers
const getSumOfNumbers = (inputArray) => {
    let arr = inputArray.slice()
    let sum = 0
    arr.forEach(element => {
        sum += element
    })
    return sum
}


module.exports = {
    testIfPrime,
    getFibonacciElement,
    getGcd,
    getCount,
    getQuickSortedArray,
    getSumOfNumbers
}