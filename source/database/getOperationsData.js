const { FireSQL } = require('firesql')
const { db } = require('./database')
const { DatabaseError } = require('../exceptions/exceptions')


const getOperationsData = async () => {

    return await new FireSQL(db).query(`
        SELECT 
        FROM Operations
        ORDER BY date DESC
    `).then(
        result => {

            console.log('Data READY')
            return result

        },
        error => {

            console.log(error.message)
            throw new DatabaseError('Failed to load data from Firebase - Cloud Firestore')

        }
    )

}

module.exports = {
    getOperationsData,
}
