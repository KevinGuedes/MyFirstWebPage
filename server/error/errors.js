class DatabaseError extends Error {
    constructor(message) {
        super(message)
        this.name = 'Database Error'
        this.message = message
    }
}

class InputError extends Error {
    constructor(message) {
        super(message)
        this.name = 'Input Error'
        this.message = message
    }
}

module.exports = {
    DatabaseError,
    InputError,
}
