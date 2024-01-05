const express = require('express')
const route = express.Router()
const optionController = require('../controllers/optionControllers')

route.get('/getAllOption',)
route.post('/createOption', optionController.CreateOption)
route.put('/updateOption', optionController.UpdateOption)
route.delete('deleteOption',)