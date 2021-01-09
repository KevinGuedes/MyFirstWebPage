const {InputError} = require('../exceptions/exceptions')

const numericArrayValidator = (arr) => {

    if (!(Array.isArray(arr) &&
        arr.length &&
        arr.every(element => typeof element === 'number') &&
        !arr.includes(NaN))) {

        throw new InputError('Please verify your array')

    }

}

module.exports = {
    numericArrayValidator,
}
