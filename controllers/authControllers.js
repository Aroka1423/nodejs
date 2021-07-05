const AuthService = require("../services/AuthService");
const BaseController = require("./BaseController");
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');

class AuthControllers extends BaseController {
    authService;

    constructor() {
        super();
        this.login = this.login.bind(this);
        this.authService = new AuthService();
    }

    async registration(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Registration error", errors})
            }
            const {name, surname, username, password} = req.body;
            const candidate = await User.findOne({where: {username: username}});
            if (candidate) {
                return res.status(400).json({message: `User with  ${username} exists`})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const user = new User({name, surname, username, password: hashPassword});
            await user.save();
            return res.json({message: "User registered successfully"})
        } catch (e) {
            console.log(e)
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body;
            let token = await this.authService.login(username, password);

            return res.json({"token": `Bearer ${token}`})
        } catch (e) {
            this.handleError(e, res);
        }
    }

}

module.exports = new AuthControllers();