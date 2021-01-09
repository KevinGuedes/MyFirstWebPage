const {InputError} = require('../exceptions/exceptions')

const gcdInputValidator = (firstInput, secondInput) => {

    if (firstInput === 0 && secondInput === 0) {

        throw new InputError('The numbers cannot be both zero')

    }

}

module.exports = {
    gcdInputValidator,
}
