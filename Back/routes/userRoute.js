const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const { isAuthenticated, hasRole } = require('../middleware/middleware');

// Utilisez isAuthenticated avant hasRole pour vérifier d'abord l'authentification
router.get('/getUser/:id', isAuthenticated, hasRole(['admin', 'comptable']), userController.getUser);
router.get('/getAllUsers', isAuthenticated, hasRole(['admin', 'comptable']), userController.getAllUsers);
router.put('/updateUser/:id', isAuthenticated, hasRole(['admin', 'comptable', 'utilisateur']), userController.updateUser);
router.delete('/deleteUser/:id', isAuthenticated, hasRole(['admin']), userController.deleteUser);

// Les routes de register et login n'ont pas besoin d'authentification ou de vérification de rôle
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
