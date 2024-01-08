const express = require('express')
const route = express.Router()
const orderedController = require('../controllers/orderedControllers'); 
//to do : ajouter ici les const pour le middleware authentification et autorisation comptable

route.post('/orders', orderedController.createOrder);
route.get('/orders/:id', orderedController.getOrder);
route.put('/orders/:id', orderedController.updateOrder);
route.delete('/orders/:id', orderedController.deleteOrder);
route.get('/ordered/history', orderedController.getOrderedHistory) // todo : ajouter élémentents du middleware

module.exports = route;
