const {
    testIfPrime,
    getFibonacciElement,
    getGcd,
    getCount,
    getQuickSortedArray,
    getSumOfNumbers,
} = require('../utils/mathFunctions')

// #region Prime
test('Prime - Non prime numbers', () => {

    const input = 10
    const expected = 'The number 10 is not Prime'
    const actual = testIfPrime(input)

    expect(actual).toBe(expected)

})

test('Prime - Prime numbers', () => {

    const input = 3
    const expected = 'The number 3 is Prime'
    const actual = testIfPrime(input)

    expect(actual).toBe(expected)

})
// #endregion

// #region Count
test('Count - 163', () => {

    const input = 163
    const expected = 'There are 163 integer numbers between 1 and 163!'
    const actual = getCount(input)

    expect(actual).toBe(expected)

})
// #endregion

// #region Fibonacci
test('Fibonacci - 22', () => {

    const input = 22
    const expected = 'The element #22 is: 10946'
    const actual = getFibonacciElement(input)

    expect(actual).toBe(expected)

})

test('Fibonacci - 13', () => {

    const input = 13
    const expected = 'The element #13 is: 144'
    const actual = getFibonacciElement(input)

    expect(actual).toBe(expected)

})
// #endregion

// #region Greatest Common Divisor
test('Greatest Common Divisor - 2, 3', () => {

    const input = [2, 3]
    const expected = 'The greatest common divisor of 2 and 3 is 1'
    const actual = getGcd(input[0], input[1])

    expect(actual).toBe(expected)

})

test('Greatest Common Divisor - 4, 4', () => {

    const input = [4, 4]
    const expected = 'The greatest common divisor of 4 and 4 is 4'
    const actual = getGcd(input[0], input[1])

    expect(actual).toBe(expected)

})

test('Greatest Common Divisor - 0, 4', () => {

    const input = [0, 4]
    const expected = 'The greatest common divisor of 0 and 4 is 4'
    const actual = getGcd(input[0], input[1])

    expect(actual).toBe(expected)

})
// #endregion

// #region Sum
test('Sum - [5.3, 3.7, -1.5]', () => {

    const input = [5.3, 3.7, -1.5]
    const expected = 7.5
    const actual = getSumOfNumbers(input)

    expect(actual).toBe(expected)

})
// #endregion

// #region Sum
test('Quick Sort - [5.3, 3.7, -1.5]', () => {

    const input = [5.3, 3.7, -1.5]
    const expected = [-1.5, 3.7, 5.3]
    const actual = getQuickSortedArray(input)

    expect(actual).toStrictEqual(expected)

})

test('Quick Sort - [2, -9, -0.000001]', () => {

    const input = [2, -9, -0.000001]
    const expected = [-9, -0.000001, 2]
    const actual = getQuickSortedArray(input)

    expect(actual).toStrictEqual(expected)

})
// #endregion
