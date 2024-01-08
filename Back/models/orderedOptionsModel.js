const sequelize = require("../database/database");
const { DataTypes } = require("sequelize");

// Nouveau modèle "orderedOptions"
const orderedOptions = sequelize.define("orderedOptions", {
    optionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  
orderedOptions.associate = (models) => {
  orderedOptions.belongsTo(models.Order, { foreignKey: "orderId" });
  orderedOptions.belongsTo(models.Option, { foreignKey: "optionId" });
  
  models.Order.belongsToMany(models.Option, { through: orderedOptions });
  models.Option.belongsToMany(models.Order, { through: orderedOptions });
}
  
module.exports = orderedOptions;