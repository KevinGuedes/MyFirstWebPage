const {FireSQL} = require('firesql')
const {db} = require('./database')
const {operationMapper} = require('../mapper/operationMapper')


const getOperationData = async () => {

    try {

        const operations = await new FireSQL(db).query(`
            SELECT *
            FROM Operations
            ORDER BY date DESC
        `)

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

            operation = operationMapper(operation)

            const operationName = (operation.name).toLowerCase()
            if (operationsData.hasOwnProperty(operationName)) {

                operationsData[operationName].data.push(operation)

            }

        }

        return operationsData

    } catch (error) {

        console.log(error)

    }

}

module.exports = {
    getOperationData,
}
