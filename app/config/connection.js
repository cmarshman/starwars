// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
var Sequelize = require("sequelize");

// Setting up our connection information
const sequelize = new Sequelize("starwars", "root", "(Heleen33!)", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  } 
});

// Creating our connection


// Exporting our connection
module.exports = sequelize;
