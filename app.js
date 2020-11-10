const express = require('express');
const path = require('path');
const server = express();
const bodyParser = require('body-parser');
const {pageIndex, pagePrime} = require("./pages");
const port = 3001;


server
.use(express.static('public'))
.use(bodyParser.urlencoded({extended: true}))
.set('view engine', 'ejs')
.set('views', path.join(__dirname, '/views'));


//Routes
server
.get("/", pageIndex)
.get("/prime", pagePrime)


//Post
server
.post("/testIfPrime", pagePrime)

server.listen(port, function () {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
