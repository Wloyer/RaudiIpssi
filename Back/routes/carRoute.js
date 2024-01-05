const express = require('express')
const route = express.Router()
const carController = require('../controllers/carControllers')

route.get('/getAllCar', carController.getAllCar)
route.post('/createCar', carController.CreateCar)
route.put('updateCar', carController.UpdateCar)
route.delete('deleteCar', carController.DeleteCar)

module.exports = route;