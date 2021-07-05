const {check} = require('express-validator');

const AuthValidator = [
    check('surname', 'Surname cannot be less than 4 characters or more 15').isLength({min: 4, max: 15}),
    check('password', 'Password cannot be less than 4 and more than 10 characters').isLength({min: 4, max: 10}),
    check('name', 'Name cannot be less than 2 characters or more 8').isLength({min: 3, max: 13}),
    check('username', 'Username cannot be less than 4 characters and more than 8').isLength({min: 4, max: 10})
];

module.exports = AuthValidator;

