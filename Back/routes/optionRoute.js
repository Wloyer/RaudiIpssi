const express = require('express')
const route = express.Router()
const optionController = require('../controllers/optionControllers')
const { isAuthenticated, hasRole } = require('../middleware/middleware');

route.get('/getAllOption', isAuthenticated, hasRole(['admin', 'comptable', 'utilisateur']), optionController.getAllOption)
route.get('/getOption/:id', isAuthenticated, hasRole(['admin', 'comptable', 'utilisateur']), optionController.getOption)
route.post('/createOption', isAuthenticated, hasRole(['admin']), optionController.createOption)
route.put('/updateOption/:id', isAuthenticated, hasRole(['admin']), optionController.updateOption)
route.delete('/deleteOption/:id', isAuthenticated, hasRole(['admin']), optionController.deleteOption)


module.exports = route;