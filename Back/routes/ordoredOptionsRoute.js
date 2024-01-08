const express = require("express");
const router = express.Router();
const orderedOptionsController = require("../controllers/orderedOptionsController");
const { isAuthenticated, hasRole } = require('../middleware/middleware');

router.post("/create", orderedOptionsController.createOrderedOption);
router.get("/getAll", isAuthenticated, hasRole(['admin']), orderedOptionsController.getAllOrderedOptions);
router.get("/:id", isAuthenticated, hasRole(['admin']), orderedOptionsController.getOrderedOptionById);
router.put("/:id", isAuthenticated, hasRole(['admin']), orderedOptionsController.updateOrderedOption);
router.delete("/:id", isAuthenticated, hasRole(['admin']), orderedOptionsController.deleteOrderedOption);

module.exports = router;
