const {generateUniqueId} = require('../utils/uniqueIdGenerator')
const {db} = require('./database')


const saveOperation = (operationName, input, result) => {

    const data = {
        name: operationName,
        input: input,
        result: result,
        date: new Date().getTime(),
    }

    const operationBaseRef = db.collection('Operations').doc(generateUniqueId())
    operationBaseRef.set(data)

}

module.exports = {
    saveOperation,
}
