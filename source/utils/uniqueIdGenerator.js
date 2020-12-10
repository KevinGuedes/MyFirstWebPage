const crypto = require("crypto");

const generateUniqueId = () => {
    return crypto.randomBytes(16).toString("hex");
}

module.exports = {
    generateUniqueId
}