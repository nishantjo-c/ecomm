const express = require("express");
const customerRouter = express.Router();
const customerController = require("../controllers/customer.js");

customerRouter.post("/addCustomer", customerController.addCustomer);
customerRouter.get("/", customerController.findAll);
customerRouter.get("/:id", customerController.getCustomer);

module.exports = customerRouter;
