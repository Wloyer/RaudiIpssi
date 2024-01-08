const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const { isAuthenticated, hasRole } = require('../middleware/middleware');


router.get('/getUser/:id', isAuthenticated, hasRole(['admin', 'comptable']), userController.getUser);
router.get('/getAllUsers', isAuthenticated, hasRole(['admin', 'comptable']), userController.getAllUsers);
router.put('/updateUser/:id', isAuthenticated, hasRole(['admin', 'comptable', 'utilisateur']), userController.updateUser);
router.delete('/deleteUser/:id', isAuthenticated, hasRole(['admin']), userController.deleteUser);
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
