const express = require('express')
const route = express.Router()
const carController = require('../controllers/carControllers')

route.get('/getAllCar', carController.getAllCar)
route.post('/createCar', carController.createCar)
route.put('/updateCar/:id', carController.updateCar)
route.delete('/deleteCar/:id', carController.deleteCar)

module.exports = route;