const express = require('express')
const route = express.Router()
const orderedController = require('../controllers/orderedControllers'); 
const { isAuthenticated, hasRole } = require('../middleware/middleware');

route.post('/orders', orderedController.createOrder);
route.get('/orders/:id', orderedController.getOrder);
route.put('/orders/:id', orderedController.updateOrder);
route.delete('/orders/:id', orderedController.deleteOrder);
route.get('/ordered/history', orderedController.getOrderedHistory);
route.get('/ordered/monthly', orderedController.getOrderedHistory)

module.exports = route;
