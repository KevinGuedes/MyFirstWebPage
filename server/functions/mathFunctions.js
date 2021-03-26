const testIfPrime = (number) => {

    let count = 0

    if (number === 1 || number === 0) {

        return 'The number ' + number + ' is neither a prime nor a composite number'

    } else {

        for (let i = 1; i <= number; i++) {

            if (number % i === 0) {

                count++

            }

        }
        if (count === 2) {

            return 'The number ' + number + ' is Prime'

        } else {

            return 'The number ' + number + ' is not Prime'

        }

    }

}

const getFibonacciElement = (elementNumber) => {

    const sequence = [0, 1]

    for (let i = 2; i < elementNumber; i++) {

        sequence.push(sequence[i - 2] + sequence[i - 1])

    }

    return 'The element #' + elementNumber + ' is: ' + sequence[elementNumber - 1]

}

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

const getCount = (number) => {

    let count = 0

    for (let i = 1; i <= number; i++) {

        count++

    }

    return 'There are ' + count + ' integer numbers between 1 and ' + number + '!'

}

function getQuickSortedArray(inputArray) {

    const arr = inputArray.slice()

    if (arr.length <= 1) {

        return arr

    } else {

        const left = []
        const right = []
        const newArray = []
        const pivot = arr.pop()
        const length = arr.length

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

const getSumOfNumbers = (inputArray) => {

    const result = inputArray.reduce((sum, actual) => {
        return sum + actual
    })

    return result

}

module.exports = {
    testIfPrime,
    getFibonacciElement,
    getGcd,
    getCount,
    getQuickSortedArray,
    getSumOfNumbers,
}
