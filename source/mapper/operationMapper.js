const operationMapper = (operation) => {
    return data = {
        date: new Date(operation.date).toLocaleDateString(),
        input: operation.input,
        name: operation.name
    }
}

module.exports = {
    operationMapper
}