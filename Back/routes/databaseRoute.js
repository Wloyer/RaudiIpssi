const express = require('express')
const route = express.Router()
const databaseController = require('../controllers/databaseControllers')


route.get('/createAllTable', databaseController.createAllTable)

module.exports = route