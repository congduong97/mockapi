const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Address = require("../models/Address");
const User = require("../models/User");

const connection = new Sequelize(dbConfig);
User.init(connection);
Address.init(connection);

Address.associate(connection.models)
User.associate(connection.models)

try {
    connection.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database.",error);
}