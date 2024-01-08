const express = require('express')
const route = express.Router()
const databaseController = require('../controllers/databaseControllers')
const { isAuthenticated, hasRole } = require('../middleware/middleware');


route.get('/createAllTable', databaseController.createAllTable)

module.exports = route