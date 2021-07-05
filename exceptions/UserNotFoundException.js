const Exception = require("./Exception");

class UserNotFoundException extends Exception {
    constructor() {
        super(404, 'User not found.');
    }
}

module.exports = UserNotFoundException;