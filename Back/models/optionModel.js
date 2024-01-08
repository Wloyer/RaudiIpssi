const sequelize = require('../database/database')
const {DataTypes} = require('sequelize')
//ici importation des modeles avec lesquels lier cette table


//table Option et champs
const Option = sequelize.define('option', {
    //première colonne
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    //deuxième colonne
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    //troisième colonne
    prix: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
});

module.exports = Option