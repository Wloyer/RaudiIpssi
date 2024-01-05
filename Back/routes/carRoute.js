const express = require('express')
const route = express.Router()
const carController = require('../controllers/carControllers')

route.get('/getAllCar', carController.getAllCar)
route.post('/createCar', carController.createCar)
route.put('/updateCar', carController.updateCar)
<<<<<<< HEAD
route.delete('/deleteCar/:id', carController.deleteCar)
=======
route.delete('/deleteCar', carController.deleteCar)
>>>>>>> f2761bf7c06b6b9a281ac3a4bc728db0f5bf8eb1

module.exports = route;