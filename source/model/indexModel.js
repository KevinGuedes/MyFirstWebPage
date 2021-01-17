const indexModel = {
    layout: './layouts/layout',
    hrefCss: '/styles/page-index.css',
    title: 'Kevin\'s First Web Page | Basic Algorithms',
    redirectEnabled: false,
    menu: [
        {
            href: '/prime',
            method: 'Test if a number is prime or not',
        },
        {
            href: '/fibonacci',
            method: 'Show the i-th element in a Fibonacci sequence',
        },
        {
            href: '/gcd',
            method: 'Show the greatest common divisor of two numbers',
        },
        {
            href: '/count',
            method: 'Count numbers within a range',
        },
        {
            href: '/quickSort',
            method: 'Sort an array using Quick Sort method',
        },
        {
            href: '/sum',
            method: 'Calculate the sum of numbers inside an array',
        },
    ],
}

module.exports = {
    indexModel,
}
