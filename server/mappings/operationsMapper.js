const { arrayToString } = require('../utils/formatArray')

const operationsMapper = (operations) => {

    const properties = ['prime', 'fibonacci', 'gcd', 'count', 'quicksort', 'sum']
    const operationsType = ['Prime', 'Fibonacci', 'Greatest Common Divisor', 'Count', 'Quick Sort', 'Sum']
    const operationsData = {}

    for (let [index, propertie] of properties.entries()) {

        operationsData[propertie] = {
            name: operationsType[index],
            data: [],
        }

    }

    for (let operation of operations) {

        if (Array.isArray(operation.input))
            operation.input = arrayToString(operation.input)

        const operationName = (operation.name).toLowerCase()

        if (operationsData.hasOwnProperty(operationName))
            operationsData[operationName].data.push({
                name: operation.name,
                input: operation.input,
                date: new Date(operation.date).toLocaleString(),
            })

    }

    return operationsData

}

module.exports = {
    operationsMapper,
}
