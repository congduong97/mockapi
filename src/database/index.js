const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Address = require("../models/Address");
const Course = require("../models/Course");
const User = require("../models/User");

const connection = new Sequelize("TrackingVietin","cong","cong1997",{
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
        encrypt: true
      }
});
User.init(connection);
Address.init(connection);
Course.init(connection);

Address.associate(connection.models)
User.associate(connection.models)
Course.associate(connection.models);


    connection.authenticate().catch(error => console.log(error))
   