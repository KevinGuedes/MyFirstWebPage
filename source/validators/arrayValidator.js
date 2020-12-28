const numericArrayValidator = (arr) => {

    if (!(Array.isArray(arr) &&
        arr.length &&
        arr.every(function(element) {

            return typeof element === 'number'

        }) &&
        !arr.includes(NaN))) {

        throw {
            message: 'Please verify your array',
        }

    }

}

module.exports = {
    numericArrayValidator,
}
