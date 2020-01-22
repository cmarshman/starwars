const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

const Character = sequelize.define("character", {
    routeName: {
        type: Sequelize.STRING,
        allNull: false
    }, 
    name: {
        type: Sequelize.STRING,
        allNull: false
    }, 
    role: {
        type: Sequelize.STRING,
        allNull: false
    }, 
    side: {
        type: Sequelize.STRING,
        allNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allNull: false
    },  
    forcePoints: {
        type: Sequelize.INTEGER,
        allNull: false
    }, 
}, {
    freezeTableName: true
});

Character.sync();

module.exports = Character