const { FireSQL } = require('firesql')
const { db } = require('./database')
const fireSQL = new FireSQL(db)

const getOperationData = (operationName) => {

    let operationData = new Array();

    const operationPromise = fireSQL.query(`
        SELECT *
        FROM Operations
        WHERE operation = '${operationName}'
        ORDER BY Date DESC
    `)

    operationPromise.then(operations => {
        for (let operation of operations) {
            // operationData.push(1)
            console.log(
                `${new Date(operation.Date)}: ${operation.operation} - Input: ${operation.input}  - Result: ${operation.result}`
            )
            operationData.push({
                date: new Date(operation.Date),
                input: operation.input,
                result: operation.result,
                operation: operation.operation
            })
        }
        return operationData;
    })

    
}



let teste = getOperationData('Prime')

console.log(teste)