const Order = require('../models/orderedModel'); 
const User = require('../models/userModel');
const Car = require('../models/carModel');
const orderedOptions = require('../models/orderedOptionsModel');

const orderedOptionsController = {
  // Créer une nouvelle association orderedOptions
  createOrderedOption: async (req, res) => {
    try {
      const newOrderedOption = await orderedOptions.create(req.body);
      res.status(201).json(newOrderedOption);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Obtenir toutes les associations orderedOptions
  getAllOrderedOptions: async (req, res) => {
    try {
      const allOrderedOptions = await orderedOptions.findAll();
      res.status(200).json(allOrderedOptions);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Obtenir une association orderedOptions par ID
  getOrderedOptionById: async (req, res) => {
    try {
      const orderedOption = await orderedOptions.findByPk(req.params.id);
      if (!orderedOption) {
        return res.status(404).json({ message: "Association orderedOptions non trouvée" });
      }
      res.status(200).json(orderedOption);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Mettre à jour une association orderedOptions par ID
  updateOrderedOption: async (req, res) => {
    try {
      const updatedOrderedOption = await orderedOptions.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(200).json(updatedOrderedOption);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Supprimer une association orderedOptions par ID
  deleteOrderedOption: async (req, res) => {
    try {
      const deletedOrderedOption = await orderedOptions.destroy({ where: { id: req.params.id } });
      if (!deletedOrderedOption) {
        return res.status(404).json({ message: "Association orderedOptions non trouvée" });
      }
      res.status(200).json({ message: "Association orderedOptions supprimée avec succès" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = orderedOptionsController;
