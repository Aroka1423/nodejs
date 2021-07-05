const Exception = require("../exceptions/Exception");

class BaseController {
    handleError(e, res) {
        if (e instanceof Exception) {
            return res.status(e.getCode()).json({
                message: e.getMessage()
            })
        }
        console.log(e);
        return res.status(500).json({
            message: 'Server error.'
        })
    }
}

module.exports = BaseController;