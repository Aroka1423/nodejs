const UserNotFoundException = require("../exceptions/UserNotFoundException");
const InvalidPasswordException = require("../exceptions/InvalidPasswordException");
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secret} = require('../key');

class AuthService {
    async login(username, password) {
        const user = await User.findOne({where: {username: username}});
        if (!user) {
            throw new UserNotFoundException();
        }

        const validatePassword = bcrypt.compareSync(password, user.password);
        if (!validatePassword) {
            throw new InvalidPasswordException();
        }

        return this.generateToken(user.id);
    }

    generateToken(id) {
        const payload = {id};
        return jwt.sign(payload, secret, {expiresIn: "15m"})
    }
}

module.exports = AuthService;