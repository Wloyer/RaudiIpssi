const express = require('express')
const route = express.Router()
const carController = require('../controllers/carControllers')

route.get('/getAllCar', carController.getAllCar)
route.post('/createCar', carController.createCar)
route.put('updateCar', carController.updateCar)
route.delete('deleteCar', carController.deleteCar)

module.exports = route;