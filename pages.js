const mathFunction = require("./mathFunctions");

const pageIndex = (req, res) => {
    res.render('index')
}
const pagePrime = (req, res) => {
    var inputNumber = parseInt(req.body.inputNumber);
    const data = {
        inputNumber : inputNumber,
        result : mathFunction.testIfPrime(inputNumber)
    }
    res.render('prime', data)
};


module.exports = {
    pageIndex,
    pagePrime
}