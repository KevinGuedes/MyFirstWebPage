const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const expressLayout = require('express-ejs-layouts')
const server = express()
const port = process.env.PORT || 5000
const {
    pageIndex,
    pagePrime,
    pageGcd,
    pageFibonacci,
    pageCount,
    pageQuickSort,
    pageSum
} = require('./pages')


server
    .use(express.static('public'))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(expressLayout)


server
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname, '/views'))


server
    .get('/', pageIndex)
    .get('/prime', pagePrime)
    .get('/fibonacci', pageFibonacci)
    .get('/gcd', pageGcd)
    .get('/count', pageCount)
    .get('/quickSort', pageQuickSort)
    .get('/sum', pageSum)


server
    .post('/testIfPrime', pagePrime)
    .post('/getFibonacciElement', pageFibonacci)
    .post('/getGcd', pageGcd)
    .post('/getCount', pageCount)
    .post('/getQuickSortedArray', pageQuickSort)
    .post('/getSum', pageSum)


server.listen(port, function () {
    console.log(`http://localhost:${port}/`)
}) 
