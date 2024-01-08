const sequelize = require("../database/database");
const { DataTypes } = require("sequelize");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  carId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});



Order.associate = (models) => {
  Order.belongsTo(models.User, { as: "User", foreignKey: "userId" });
  Order.belongsTo(models.orderedOptions, { as: "orderedOptions", foreignKey: "orderId" });
  Order.belongsTo(models.Car, { as: "Car", foreignKey: "carId" });
};

module.exports = Order;
