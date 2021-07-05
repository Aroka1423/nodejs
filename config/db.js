const dbconfig = require('./db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    port: dbconfig.PORT,
    dialect: dbconfig.dialect,

    define: {
        timestamps: false
    }
});

module.exports = sequelize;