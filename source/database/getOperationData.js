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

            let data = {
                prime: [],
                fibonacci: [],
                gcd: [],
                count: [],
                quickSort: [],
                sum: []
            }

            for (let operation of operations) {
                operation = operationMapper(operation)
                let operationName = (operation.name).toLowerCase() 
                if(data.hasOwnProperty(operationName))
                    data[operationName].push(operation)
            }

            return data
        })
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = {
    getOperationData
}




