const Order = require('../models/orderedModel'); 
const User = require('../models/userModel');
const Car = require('../models/carModel');
const orderedOptions = require('../models/ordoredOptionsModel');
const sequelize = require('../database/database');



const OrderedController = {

    // Créer une nouvelle commande
    

    createOrder: async (req, res) => {
        
    

    createOrder: async (req, res) => {
        
        try {
          const { price, userId, carId, selectedOptionIds } = req.body;
          console.log(selectedOptionIds);if (!Array.isArray(selectedOptionIds)) {
          const { price, userId, carId, selectedOptionIds } = req.body;
          console.log(selectedOptionIds);if (!Array.isArray(selectedOptionIds)) {

            return res.status(400).json({ error: "selectedOptionIds must be an array" });
        
        }
          const newOrder = await Order.create({
            userId,
            carId,
            price,
          });
    
          for (const optionId of selectedOptionIds) {
            await orderedOptions.create({
              orderId: newOrder.id,
              optionId: optionId ,
            return res.status(400).json({ error: "selectedOptionIds must be an array" });
        
        }
          const newOrder = await Order.create({
            userId,
            carId,
            price,
          });
    
          for (const optionId of selectedOptionIds) {
            await orderedOptions.create({
              orderId: newOrder.id,
              optionId: optionId ,
            });
          }
    
          res.status(201).json(newOrder);
          }
    
          res.status(201).json(newOrder);
        } catch (error) {
          res.status(400).json({ error: error.message });
          res.status(400).json({ error: error.message });
        }
      },
      },

    // Obtenir les informations d'une commande
    async getOrder(req, res) {
        try {
            const order = await Order.findByPk(req.params.id, {
                include: [User, Car] 
            });

            if (!order) {
                return res.status(404).json({ message: 'Commande non trouvée' });
            }

            res.status(200).json(order);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    
    // Mettre à jour une commande
    async updateOrder(req, res) {
        try {
            const { price, orderDate} = req.body;
            const orderId = req.params.id;

            const order = await Order.findByPk(orderId);

            if (!order) {
                return res.status(404).json({ message: 'Commande non trouvée' });
            }

            order.price = price !== undefined ? price : order.price;
            order.orderDate = orderDate !== undefined ? orderDate : order.orderDate;


            await order.save();
            res.status(200).json(order);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Supprimer une commande
    async deleteOrder(req, res) {
        try {
            const order = await Order.findByPk(req.params.id);

            if (!order) {
                return res.status(404).json({ message: 'Commande non trouvée' });
            }

            await order.destroy();
            res.status(200).json({ message: 'Commande supprimée' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // historique des commandes pour rôles comptable et admin 
    async getOrderedHistory(req,res) {
        if (req.user.role === 'comptable' || req.user.role === 'admin') {
            const orders = await Order.findAll({
                include: [{model:User}],
            });
            res.status(200).json({
                success: true,
                message: "Voici l'historique de toutes les commandes",
                orders:orders
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Vous n'êtes pas autorisé à accéder à l'historique des commandes"
            });
        }
    },

    async getMonthlyReport(req,res){
        if (req.user.role === 'comptable' || req.user.role === 'admin') {
            const monthlyReport = await Order.findAll({
                attributes: [
                    [sequelize.fn('MONTH', sequelize.col('createdAt')), 'month'],
                    [sequelize.fn('COUNT', sequelize.col('id')), 'totalOrders'],
                    [sequelize.fn('SUM', sequelize.col('price')), 'totalPrice']
                ],
                group: [sequelize.fn('MONTH', sequelize.col('createdAt'))],
                include: [{model: User}],
            });
            res.status(200).json({
                success: true,
                message: "Récapitulatif des commandes clients par mois",
                monthlyReport: monthlyReport
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Vous n'avez pas les autorisations pour accéder à cet espace"
            });
        }
    }



};

/* // historique des commandes
exports.getOrderedHistory = async (req,res) => {
    if (req.user.role === 'comptable' || req.user.role === 'admin') {
        const orders = await Order.findAll({
            include: [{model:User}],
        });
        res.status(200).json({
            success: true,
            message: "Voici l'historique des commandes",
            orders:orders
        });
    } else {
        res.status(400).json({
            success: false,
            message: "Vous n'êtes pas autorisé à accéder à l'historique des commandes"
        });
    }
} */
/* 
exports.getMonthlyReport = async(req,res) => {
    if (req.user.role === 'comptable') {
        const monthlyReport = await Order.findAll({
            attributes: [
                [sequelize.fn('MONTH', sequelize.col('createdAt')), 'month'],
                [sequelize.fn('COUNT', sequelize.col('id')), 'totalOrders'],
                [sequelize.fn('SUM', sequelize.col('price')), 'totalPrice']
            ],
            group: [sequelize.fn('MONTH', sequelize.col('createdAt'))],
            include: [{model: User}],
        });
        res.status(200).json({
            success: true,
            message: "Récapitulatif des commandes clients par mois",
            monthlyReport: monthlyReport
        });
    } else {
        res.status(400).json({
            success: false,
            message: "Vous n'avez pas les autorisations pour accéder à cet espace"
        });
    }
}
 */
module.exports = OrderedController;
