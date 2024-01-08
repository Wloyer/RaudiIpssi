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
    autoIncrement: true,
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
Car.associate = (models) => {
  Car.belongsTo(models.User, { as: "Owner", foreignKey: "userId" });
  Car.belongsToMany(Option, { through: 'CarOptions' });
  Option.belongsToMany(Car, { through: 'CarOptions' });
  Car.hasMany(models.Order, { as: "Orders", foreignKey: "carId" });
};

module.exports = Car;
