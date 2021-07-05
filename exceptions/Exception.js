class Exception {
    code;
    message;

    constructor(code, message) {
        this.code = code;
        this.message = message;
    }

    getCode() {
        return this.code;
    }

    getMessage() {
        return this.message;
    }
}

module.exports = Exception;