const Order = require('../models/orderedModel'); 
const User = require('../models/userModel');
const Car = require('../models/carModel');



const OrderedController = {

    // Créer une nouvelle commande

    async createOrder(req, res) {
        try {
            const { userId, carId, price, orderDate  } = req.body;

            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(404).json({ message: 'Utilisateur non trouvé' });
            }

            const car = await Car.findByPk(carId);
            if (!car) {
                return res.status(404).json({ message: 'Voiture non trouvée' });
            }

            const newOrder = await Order.create({
                userId,
                carId,
                price,
                orderDate,
            });

            res.status(201).json(newOrder);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
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
    }
};

module.exports = OrderedController;
