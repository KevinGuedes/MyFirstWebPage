const operationMapper = (operation) => {
    return data = {
        date: new Date(operation.Date).toLocaleDateString(),
        input: operation.input,
        name: operation.operation
    }
}

module.exports = {
    operationMapper
}