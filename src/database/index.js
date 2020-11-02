const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Address = require("../models/Address");
const Course = require("../models/Course");
const User = require("../models/User");

const connection = new Sequelize("tracking","root","root",{
    host: 'localhost',
    dialect: 'mssql',
    operatorsAliases: false,
    dialectOptions: {
        options: { instanceName: "sqlexpress" },
        encrypt: false
      }
    
});
User.init(connection);
Address.init(connection);
Course.init(connection);

Address.associate(connection.models)
User.associate(connection.models)
Course.associate(connection.models);

connection
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});