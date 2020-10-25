const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
const dbConfig = require("../config/database");
const User = require("../models/User");

const connection = new Sequelize(dbConfig);
User.init(connection);

try {
    connection.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database.",error);
}