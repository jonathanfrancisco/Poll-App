const config = require('../config/config.js');
const mysql = require('mysql2/promise');


module.exports.getConnection = () => {
    return mysql.createConnection({
        host: config.dbHost,
        user: config.dbUsername,
        password: config.dbPassword,
        database: config.dbName
    });
}