const User = require('../models/User');
const bcrypt = require('bcryptjs');
const BaseController = require('../controllers/BaseController');


class UserController extends BaseController {

    async destroy(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (req.user.id !== id) {
                return res.status(403).send({
                    message: "Permission denied."
                });
            } else {
                res.status(200).send({
                    message: "User deleted successfully"
                })
            }
            await User.destroy({
                where: {id: id}
            })
        } catch (e) {
            this.handleError(e, res)
        }
    }

    async update(req, res) {
        try {

            const id = parseInt(req.params.id);
            if (req.user.id !== id) {
                return res.status(403).send({
                    message: "Permission denied."
                });
            } else {
                res.status(200).send({
                    message: "User updated successfully"
                })
            }

            const {name, surname, username, password} = req.body;
            const hashPassword = bcrypt.hashSync(password, 7);
            const user = {name, surname, username, password: hashPassword};

            await User.update(user, {
                where: {id: id}
            });

        } catch (e) {
            this.handleError(e, res)
        }
    }

    async index(req, res) {
        try {
            const users = await User.findAll({where: {}});
            res.json(users)

        } catch (e) {
            this.handleError(e, res)
        }
    }
}

module.exports = new UserController;