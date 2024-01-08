const sequelize = require('../database/database')
const Order = require('../models/orderedModel'); 
const User = require('../models/userModel');
const Car = require('../models/carModel');
const orderedOptions = require('../models/orderedOptionsModel');

exports.createAllTable = async (req, res) => {
    try {
        await sequelize.sync({ force: true });
        res.status(200).json('Toutes les tables sont créées');
    } catch (error) {
        console.error('Erreur lors de la création des tables:', error);
        res.status(500).json('Erreur lors de la création des tables');
    }
};
