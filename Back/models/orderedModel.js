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
    orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

Order.associate = (models) => {
  Order.ManyToMany(models.User, { as: "User", foreignKey: "userId" });
  Order.ManyToMany(models.Car, { as: "Car", foreignKey: "carId" });
};

module.exports = Order;
