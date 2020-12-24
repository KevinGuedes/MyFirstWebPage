const express = require('express')
const router = express.Router()
const { indexData } = require('../model/indexModel')
const {
    primeEmptyData,
    fibonacciEmptyData,
    gcdEmptyData,
    countEmptyData,
    quickSortEmptyData,
    sumEmptyData
} = require('../model/pagesEmptyModel')
const { operationsData } = require('../model/operationsModel')
const { getOperationData } = require('../database/getOperationData')

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
    getOperationData().then(result => {
        operationsData.operations = result
        console.log(operationsData)
        res.render('operations', operationsData)
    })
})

module.exports = {
    router
}