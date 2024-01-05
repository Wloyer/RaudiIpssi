const express = require('express');
const router = express.Router();
const orderedController = require('../controllers/orderedControllers'); 


router.post('/orders', orderedController.createOrder);
router.get('/orders/:id', orderedController.getOrder);
router.put('/orders/:id', orderedController.updateOrder);
router.delete('/orders/:id', orderedController.deleteOrder);

module.exports = router;
