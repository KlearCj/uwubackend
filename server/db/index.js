const Sequelize = require("sequelize");
const {HOST, DB_USER, DB_PASSWORD, DB_NAME} = require('../config.js')

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: HOST,
  dialect: "postgres",
  logging: false,
});

module.exports = db;
