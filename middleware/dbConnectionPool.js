'use strict';
const mysql = require("mysql2");

module.exports = (req, res, next) => {
  const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }).promise();
  req.con = con;
  next();
}