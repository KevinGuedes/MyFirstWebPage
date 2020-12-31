const numericArrayValidator = (arr) => {

    if (!(Array.isArray(arr) &&
        arr.length &&
        arr.every(element => {

            return typeof element === 'number'

        }) &&
        !arr.includes(NaN))) {

        throw new Error('Please verify your array')

    }

}

module.exports = {
    numericArrayValidator,
}
