const express = require('express')
const router = express.Router()
const {
    indexData
} = require('../model/indexModel')
const {
    primeEmptyData,
    fibonacciEmptyData,
    gcdEmptyData,
    countEmptyData,
    quickSortEmptyData,
    sumEmptyData
} = require('../model/pagesEmptyModel')


router.get('/', (req, res) => {
    res.render('index', indexData)
})

router.get('/prime', (req, res) => {
    res.render('prime', primeEmptyData)
})

router.get('/fibonacci', (req, res) => {
    res.render('fibonacci', fibonacciEmptyData)
})

router.get('/gcd', (req, res) => {
    res.render('gcd', gcdEmptyData)
})

router.get('/count', (req, res) => {
    res.render('count', countEmptyData)
})

router.get('/quickSort', (req, res) => {
    res.render('quickSort', quickSortEmptyData)
})

router.get('/sum', (req, res) => {
    res.render('sum', sumEmptyData)
})

router.get('/operations', (req, res) => {

    data = {
        layout: './layouts/layout',
        hrefCss: '/styles/page-operations.css',
        title: "Operations",

        operations: {
            prime: [
                {
                    'x': 1,
                    'teste': "olá mundo1"
                },
                {
                    'x': 2,
                    'teste': "olá mundo2"
                }
            ],
            fibonacci: [
                {
                    'x': 3,
                    'teste': "olá mundo3"
                },
                {
                    'x': 4,
                    'teste': "olá mundo4"
                }
            ]
        }
    }


    res.render('operations', data)
})

module.exports = {
    router
}