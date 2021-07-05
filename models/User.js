const sequelize = require('../config/db');
const DataTypes = require('sequelize');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
     name: {
         type: DataTypes.STRING,
         required: true
     },

    surname: {
        type: DataTypes.STRING,
        required: true
    },

    username: {
        type: DataTypes.STRING,
        unique: true,
        required: true
    },

    password: {
        type: DataTypes.STRING,
        required: true
    }
});

module.exports = User;