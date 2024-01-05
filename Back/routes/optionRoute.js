const express = require('express')
const route = express.Router()
const optionController = require('../controllers/optionControllers')

route.get('/getAllOption', optionController.getAllOption)
route.post('/createOption', optionController.CreateOption)
route.put('/updateOption/:id', optionController.UpdateOption)
route.delete('/deleteOption/:id', optionController.DeleteOption)

module.exports = route;