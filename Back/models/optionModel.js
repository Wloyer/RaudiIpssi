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
    price: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
});

Option.associate = (models) => {
    Option.hasMany(models.Order, { as: 'Orders', foreignKey: 'optionId' });
};

module.exports = Option