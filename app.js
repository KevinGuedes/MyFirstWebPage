const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {
    pageIndex,
    pagePrime,
    pageGcd,
    pageFibonacci,
    pageCount,
    pageQuickSort,
    pageSum
} = require("./pages");
const server = express();
const port = 3001;

//Configurando Servidor
server
    .use(express.static('public'))
    .use(bodyParser.urlencoded({ extended: true }))
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname, '/views'));

//Rotas
server
    .get("/", pageIndex)
    .get("/prime", pagePrime)
    .get("/fibonacci", pageFibonacci)
    .get("/gcd", pageGcd)
    .get("/count", pageCount)
    .get("/quickSort", pageQuickSort)
    .get("/sum", pageSum)

//Post
server
    .post("/testIfPrime", pagePrime)
    .post("/getFibonacciElement", pageFibonacci)
    .post("/getGcd", pageGcd)
    .post("/getCount", pageCount)
    .post("/getQuickSortedArray", pageQuickSort)
    .post("/getSum", pageSum)


server.listen(port, function () {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
