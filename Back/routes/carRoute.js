const express = require('express')
const route = express.Router()
const carController = require('../controllers/carControllers')
const { isAuthenticated, hasRole } = require('../middleware/middleware');

route.get('/getAllCar', carController.getAllCar)
route.get('/getCar/:id', carController.getCar)
route.post('/createCar', isAuthenticated, hasRole(['admin']), carController.createCar)
route.put('/updateCar/:id', isAuthenticated, hasRole(['admin']), carController.updateCar)
route.delete('/deleteCar/:id', isAuthenticated, hasRole(['admin']), carController.deleteCar)

module.exports = route;