const gcdInputValidator = (firstInput, secondInput) => {

    if (firstInput === 0 && secondInput === 0) {

        throw new Error('The numbers cannot be both zero')

    }

}

module.exports = {
    gcdInputValidator,
}
