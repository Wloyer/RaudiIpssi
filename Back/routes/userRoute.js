const express = require('express')
const route = express.Router()
const userController = require('../controllers/userControllers')

route.get('/getUser/:id', userController.getUser)
route.get('/getAllUsers', userController.getAllUsers)
route.post('/createUser', userController.createUser)
route.put('/updateUser/:id', userController.updateUser)
route.delete('/deleteUser/:id', userController.deleteUser)
route.post('/register', userController.register)
route.post('/login', userController.login)


module.exports = route;