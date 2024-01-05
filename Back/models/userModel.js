const sequelize = require('../database/database')
const { DataTypes } = require('sequelize')
const bcrypt = require("bcrypt");

const User = sequelize.define('user', {
    // une colonne:
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    ordered:{
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName: true,
    instanceMethods: {
        generateHash(password) {
            return bcrypt.hash(password, bcrypt.genSaltSync(8));// 8 ou 10 ?
        },
        validPassword(password) {
            return bcrypt.compare(password, this.password);
        }
    }
});

return User;


module.exports = Produit