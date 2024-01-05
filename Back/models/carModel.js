const sequelize = require('../database/database')
const {DataTypes} = require('sequelize')
//ici importation des modeles avec lesquels lier cette table


//table Car et champs
const Car = sequelize.define('car', {
    //première colonne
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoincrement: true
    },
    //deuxième colonne
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    //troisième colonne
    door: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    //quatrième colonne
    engine: {
        type: DataTypes.STRING,
        allowNull: false,
    },
     //cinqième colonne
     seating_capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});


//ici faire les liens has et belongsTo etc 


module.exports = Car