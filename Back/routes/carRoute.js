const express = require('express')
const route = express.Router()
const carController = require('../controllers/carControllers')
const middleware = require('../middleware/middleware');

route.get('/getAllCar', carController.getAllCar)
route.get('/getCar/:id', carController.getCar)
route.post('/createCar', middleware.isAdmin, carController.createCar)
route.put('/updateCar/:id', middleware.isAdmin, carController.updateCar)
route.delete('/deleteCar/:id', middleware.isAdmin, carController.deleteCar)

module.exports = route;