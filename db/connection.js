const config = require('../config/config.js');
const mysql = require('mysql2');


module.exports.connect = () => {
    return mysql.createConnection({
        host: config.dbHost,
        user: config.dbUsername,
        password: config.dbPassword,
        database: config.dbName
    });
}