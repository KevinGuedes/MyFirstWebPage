const { generateUniqueId } = require("../utils/uniqueIdGenerator")
const { db } = require('./database')

const saveOperation = (operationName, input, result) => {

    let data = {
        "name": operationName,
        "input": input,
        "result": result,
        "date": new Date().getTime()
    }
    
    let operationBaseRef = db.collection('Operations').doc(generateUniqueId())
    operationBaseRef.set(data)
}

module.exports = {
    saveOperation
}