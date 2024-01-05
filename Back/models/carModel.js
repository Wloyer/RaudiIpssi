const sequelize = require("../database/database");
const { DataTypes } = require("sequelize");
//ici importation des modeles avec lesquels lier cette table

//table Car et champs
const Car = sequelize.define("car", {
  //première colonne
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoincrement: true,
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
  },
});
Car.associate = (models) => {
  Car.belongsTo(models.User, { as: "Owner", foreignKey: "userId" });
  Car.belongsToMany(models.Option, {
    through: "CarOptions",
    as: "Options",
    foreignKey: "carId",
  });
  Option.belongsToMany(models.Car, {
    through: models.Order,
    as: "Cars",
    foreignKey: "optionId",
  });
};

module.exports = Car;
