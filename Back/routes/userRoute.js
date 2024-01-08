const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const { isAuthenticated, hasRole } = require('../middleware/middleware');


router.get('/getUser/:id', userController.getUser);
router.get('/getAllUsers', userController.getAllUsers);
router.put('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
