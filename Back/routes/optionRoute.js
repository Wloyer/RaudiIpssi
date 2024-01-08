const express = require('express')
const route = express.Router()
const optionController = require('../controllers/optionControllers')
const { isAuthenticated, hasRole } = require('../middleware/middleware');

route.get('/getAllOption', optionController.getAllOption)
route.get('/getOption/:id', optionController.getOption)
route.post('/createOption', optionController.createOption)
route.put('/updateOption/:id', optionController.updateOption)
route.delete('/deleteOption/:id', optionController.deleteOption)

module.exports = route;