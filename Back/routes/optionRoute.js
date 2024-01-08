const express = require('express')
const route = express.Router()
const optionController = require('../controllers/optionControllers')
const { isAuthenticated, hasRole } = require('../middleware/middleware');

route.get('/getAllOption', isAuthenticated, hasRole(['admin', 'comptable', 'utilisateur']), optionController.getAllOption)
route.post('/createOption', isAuthenticated, hasRole(['admin']), optionController.CreateOption)
route.put('/updateOption/:id', isAuthenticated, hasRole(['admin']), optionController.UpdateOption)
route.delete('/deleteOption/:id', isAuthenticated, hasRole(['admin']), optionController.DeleteOption)

module.exports = route;