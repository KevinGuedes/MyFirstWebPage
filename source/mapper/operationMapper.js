const operationMapper = (operation) => {
    return data = {
        name: operation.name,
        input: operation.input,
        date: new Date(operation.date).toLocaleDateString()
    }
}

module.exports = {
    operationMapper
}