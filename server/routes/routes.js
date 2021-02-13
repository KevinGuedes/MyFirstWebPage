const express = require('express')
const router = express.Router()
const { indexModel } = require('../model/indexModel')
const { operationsModel } = require('../model/operationsModel')
const { errorModel } = require('../model/errorModel')
const {
    primeEmptyModel,
    fibonacciEmptyModel,
    gcdEmptyModel,
    countEmptyModel,
    quickSortEmptyModel,
    sumEmptyModel,
} = require('../model/pagesEmptyModel')
const { getOperationsData } = require('../firebase/getOperationsData')
const { operationsMapper } = require('../mappings/operationsMapper')


router.get('/', (req, res) => {

    res.status(200).render('index', indexModel)

})

router.get('/prime', (req, res) => {

    res.status(200).render('prime', primeEmptyModel)

})

router.get('/fibonacci', (req, res) => {

    res.status(200).render('fibonacci', fibonacciEmptyModel)

})

router.get('/gcd', (req, res) => {

    res.status(200).render('gcd', gcdEmptyModel)

})

router.get('/count', (req, res) => {

    res.status(200).render('count', countEmptyModel)

})

router.get('/quickSort', (req, res) => {

    res.status(200).render('quickSort', quickSortEmptyModel)

})

router.get('/sum', (req, res) => {

    res.status(200).render('sum', sumEmptyModel)

})

router.get('/operations', async (req, res) => {

    try {

        const operationsData = await getOperationsData()
        operationsModel.operations = operationsMapper(operationsData)

        res.status(200).render('operations', operationsModel)

    } catch (error) {

        console.log(error.message)

        res.status(200).render('error', errorModel)

    }

})

router.get('/error', (req, res) => {

    res.status(200).render('error', errorModel)

})


module.exports = {
    router,
}
