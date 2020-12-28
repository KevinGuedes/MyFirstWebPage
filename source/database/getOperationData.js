const { FireSQL } = require('firesql')
const { db } = require('./database')
const { operationMapper } = require('../mapper/operationMapper')


const getOperationData = async () => {

    try {

        const fireSQL = new FireSQL(db)

        const operations = await fireSQL.query
            (`
                SELECT *
                FROM Operations
                ORDER BY date DESC
            `)

        let operationsData = {
            prime: {
                name: 'Prime',
                data: []
            },
            fibonacci: {
                name: 'Fibonacci',
                data: []
            },
            gcd: {
                name: 'Greatest Common Divisor',
                data: []
            },
            count: {
                name: 'Count',
                data: []
            },
            quicksort: {
                name: 'Quick Sort',
                data: []
            },
            sum: {
                name: 'Sum',
                data: []
            }
        }

        for (let operation of operations) {

            operation = operationMapper(operation)

            let operationName = (operation.name).toLowerCase()
            if (operationsData.hasOwnProperty(operationName))
                operationsData[operationName].data.push(operation)
        }

        return operationsData
    }
    catch (error) {

        console.log(error)
    }
}

module.exports = {
    getOperationData
}




