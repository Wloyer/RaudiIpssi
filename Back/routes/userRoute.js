const express = require('express')
const route = express.Router()
const userController = require('../controllers/userControllers')

route.get('/getAllUser', userController.getUser)
route.post('/createUser', userController.createUser)
route.put('/updateUser/:id', userController.updateUser)
route.delete('/deleteUser/:id', userController.deleteUser)

module.exports = route;