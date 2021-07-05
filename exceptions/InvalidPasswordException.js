const Exception = require("./Exception");

class InvalidPasswordException extends Exception {
    constructor() {
        super(401, 'Invalid password.');
    }
}

module.exports = InvalidPasswordException;