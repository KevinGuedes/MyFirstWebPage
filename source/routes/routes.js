const express = require('express')
const router = express.Router()
const { indexModel } = require('../model/indexModel')
const { operationsModel } = require('../model/operationsModel')
const { getOperationsData } = require('../database/getOperationsData')
const {
    primeEmptyModel,
    fibonacciEmptyModel,
    gcdEmptyModel,
    countEmptyModel,
    quickSortEmptyModel,
    sumEmptyModel,
} = require('../model/pagesEmptyModel')
const { operationsMapper } = require('../mapper/operationsMapper')


router.get('/', (req, res) => {

    res.render('index', indexModel)

})

router.get('/prime', (req, res) => {

    res.render('prime', primeEmptyModel)

})

router.get('/fibonacci', (req, res) => {

    res.render('fibonacci', fibonacciEmptyModel)

})

router.get('/gcd', (req, res) => {

    res.render('gcd', gcdEmptyModel)

})

router.get('/count', (req, res) => {

    res.render('count', countEmptyModel)

})

router.get('/quickSort', (req, res) => {

    res.render('quickSort', quickSortEmptyModel)

})

router.get('/sum', (req, res) => {

    res.render('sum', sumEmptyModel)

})

router.get('/operations', async (req, res) => {

    try {

        const operationsData = await getOperationsData()
        operationsModel.operations = operationsMapper(operationsData)

        res.render('operations', operationsModel)

    } catch (error) {
        
        console.log(error.message)

    }

})

module.exports = {
    router,
}
