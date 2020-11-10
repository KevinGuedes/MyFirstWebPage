// Fibonacci
const getFibonacciElement = (elementNumber) => {

    let sequence = [0, 1];

    for (let i = 2; i < elementNumber; i++) {
        sequence.push(sequence[i - 2] + sequence[i - 1])
    }

    if (elementNumber <= 0) {
        return "Insert a number greater than 0";
    }
    else {
        return "The element #" + elementNumber + " is: " + sequence[elementNumber - 1];
    }
};


//Greatest Common Divisor
const calculateGcd = (firstNumber, secondNumber) => {
    if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber) && !(firstNumber === 0 && secondNumber === 0)) {
        if (!secondNumber) {
            return firstNumber;
        }
        return processGcd(secondNumber, firstNumber % secondNumber);
    }
};

const getGcd = (req, res) => {
    var firstNumber = parseInt(req.body.firstNumber);
    var secondNumber = parseInt(req.body.secondNumber);

    if (firstNumber < 0) {
        firstNumber = -firstNumber;
    }

    if (secondNumber < 0) {
        secondNumber = -secondNumber;
    }

    if (firstNumber === 0 && secondNumber === 0) {
        return "Invalid numbers. They cannot be both 0";
    }
    else if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
        return "Insert both numbers";
    }
    else {
        return "The greatest common divisor of " + firstNumber + " and " + secondNumber + " is " + calculateGcd(n1, n2);
    }
};

//Prime Number
const testIfPrime = (number) => {

    var count = 0;

    if (number === 1 || number === 0) {
        return "The number " + number + " is neither a prime nor a composite number";
    }
    else if (Number.isNaN(number) || number < 0) {
        return "Insert a number greater than 0";
    }
    else {
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                count++;
            }
        }
        if (count === 2) {
            return "The number " + number + " is Prime";
        }
        else {
            return "The number " + number + " is not Prime";
        }
    }
};

//Count
const getCount = () => {

    var number = parseInt(req.body.inputNumber);
    var count = 0;

    if (number < 0) {
        return "Insert a number greanter than zero";
    }
    else if (!Number.isInteger(number)) {
        return "Insert an integer number";
    }
    else {
        for (var i = 1; i <= number; i++) {
            count++;
        }
        return "There are " + count + " between 0 and " + number + "!";
    }
};


//Sum of numbers

const sumOfNumbers = () => {
    var arr = req.body.inputArray;


}


//Quicksort

const getQuickSortedArray = () => {
    
}

module.exports = {
    getFibonacciElement,
    testIfPrime,
    getGcd,
    getCount
}