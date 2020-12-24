const { FireSQL } = require('firesql')
const { db } = require('./database')
const { operationMapper } = require('../mapper/operationMapper')
const fireSQL = new FireSQL(db)

const getOperationData = () => {

    try {
        const operationPromise = fireSQL.query
            (`
                SELECT *
                FROM Operations
                ORDER BY date DESC
            `)

        return operationPromise.then(operations => {

            let operationsInfo = {
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
                if(operationsInfo.hasOwnProperty(operationName))
                    operationsInfo[operationName].data.push(operation)
            }

            return operationsInfo
        })
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = {
    getOperationData
}




