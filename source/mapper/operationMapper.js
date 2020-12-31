const {arrayToString} = require('../utils/formatArray')

const operationMapper = (operation) => {

    let input = new String()

    if(Array.isArray(operation.input))
        input = arrayToString(operation.input)
    else
        input = operation.input

    return data = {
        name: operation.name,
        input: input,
        date: new Date(operation.date).toLocaleString(),
    }

}

module.exports = {
    operationMapper,
}
