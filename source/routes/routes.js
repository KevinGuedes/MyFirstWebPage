const express = require('express')
const router = express.Router()
const { indexModel } = require('../model/indexModel')
const { operationsModel } = require('../model/operationsModel')
const { getOperationData } = require('../database/getOperationData')
const {
    primeEmptyModel,
    fibonacciEmptyModel,
    gcdEmptyModel,
    countEmptyModel,
    quickSortEmptyModel,
    sumEmptyModel,
} = require('../model/pagesEmptyModel')
const { DatabaseError } = require('../exceptions/exceptions')

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

        operationsModel.operations = await getOperationData()
        res.render('operations', operationsModel)

    } catch (error) {

        console.log(new DatabaseError('Failed to load retrieve data from Firebase - Cloud Firestore'))
        console.log(error.message)
    }
    // getOperationData()
    //     .then(operations => {
    //         operationsModel.operations = operations
    //     })
    //     .catch(error => {
    //         console.log(error)
    //         res.redirect
    //     })
    //Add um alert e um redirect em caso de erro, usar o then na getOperationData

})

module.exports = {
    router,
}
