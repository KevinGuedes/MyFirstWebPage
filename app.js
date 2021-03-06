const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const expressLayout = require('express-ejs-layouts')
const server = express()
const port = process.env.PORT || 5001
const { router } = require('./server/routes/routes')
const {
    pagePrime,
    pageGcd,
    pageFibonacci,
    pageCount,
    pageQuickSort,
    pageSum,
} = require('./server/controller/methods')

server
    .use(express.static('public'))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(expressLayout)
    .use(router)

server
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname, 'server/views'))

server
    .post('/prime/testIfPrime', pagePrime)
    .post('/fibonacci/getFibonacciElement', pageFibonacci)
    .post('/gcd/getGcd', pageGcd)
    .post('/count/getCount', pageCount)
    .post('/quickSort/getQuickSortedArray', pageQuickSort)
    .post('/sum/getSum', pageSum)

server.listen(port, () => {

    console.log(`http://localhost:${port}/`)

})
