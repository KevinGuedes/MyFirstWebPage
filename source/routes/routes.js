const express = require('express')
const router = express.Router()
const {indexModel} = require('../model/indexModel')
const {operationsModel} = require('../model/operationsModel')
const {getOperationData} = require('../database/getOperationData')
const {
    primeEmptyModel,
    fibonacciEmptyModel,
    gcdEmptyModel,
    countEmptyModel,
    quickSortEmptyModel,
    sumEmptyModel,
} = require('../model/pagesEmptyModel')


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

        if(operationsModel.operations){
            console.log('Data READY')
            res.render('operations', operationsModel)
        }
        else
            throw new Error("Failed to load data")
        

    } catch (error) {

        console.log(error)
        
    }

})

module.exports = {
    router,
}
