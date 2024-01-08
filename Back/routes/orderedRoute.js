const express = require('express')
const route = express.Router()
const orderedController = require('../controllers/orderedControllers'); 
const { isAuthenticated, hasRole } = require('../middleware/middleware');

route.post('/orders', isAuthenticated, hasRole(['admin', 'comptable', 'utilisateur']), orderedController.createOrder);
route.get('/orders/:id', isAuthenticated, hasRole(['admin', 'comptable', 'utilisateur']), orderedController.getOrder);
route.put('/orders/:id', isAuthenticated, hasRole(['admin']), orderedController.updateOrder);
route.delete('/orders/:id', isAuthenticated, hasRole(['admin']), orderedController.deleteOrder);
route.get('/ordered/history',isAuthenticated, hasRole(['admin', 'comptable', 'utilisateur']), orderedController.getOrderedHistory);
route.get('/ordered/monthly', isAuthenticated, hasRole(['admin', 'comptable']), orderedController.getOrderedHistory)

module.exports = route;
