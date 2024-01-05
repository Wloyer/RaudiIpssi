const express = require('express')
const route = express.Router()
const orderedController = require('../controllers/orderedControllers'); 

route.post('/orders', orderedController.createOrder);
route.get('/orders/:id', orderedController.getOrder);
route.put('/orders/:id', orderedController.updateOrder);
route.delete('/orders/:id', orderedController.deleteOrder);

module.exports = route;
