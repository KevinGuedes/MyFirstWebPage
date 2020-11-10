const mathFunction = require("./mathFunctions");


const pagePrime = (req, res) => {
    var inputNumber = parseInt(req.body.inputNumber);
    const data = {
        inputNumber : inputNumber,
        result : mathFunction.testIfPrime(inputNumber)
    }
    res.render('prime', data)
};


module.exports = {
    pagePrime
}