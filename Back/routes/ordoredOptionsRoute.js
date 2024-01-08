const express = require("express");
const router = express.Router();
const orderedOptionsController = require("../controllers/orderedOptionsController");

router.post("/create", orderedOptionsController.createOrderedOption);
router.get("/getAll", orderedOptionsController.getAllOrderedOptions);
router.get("/:id", orderedOptionsController.getOrderedOptionById);
router.put("/:id", orderedOptionsController.updateOrderedOption);
router.delete("/:id", orderedOptionsController.deleteOrderedOption);

module.exports = router;
