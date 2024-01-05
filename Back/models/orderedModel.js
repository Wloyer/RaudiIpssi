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
        autoincrement: true
    },
    //deuxième colonne
    ac: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    //troisième colonne
    transmission: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    //quatrième colonne
    roof: {
        type: DataTypes.STRING,
        allowNull: false,
    },
     //cinqième colonne
     automatic_parking: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
     //sixème colonne
     rearview_camera: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});


// Option.associate = (models) => {
//     Option.belongsToMany(models.Car, { 
//         through: 'CarOptions', 
//         as: 'Cars', 
//         foreignKey: 'optionId' 
//     });
// };

module.exports = Option