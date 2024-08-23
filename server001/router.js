const express = require("express");
const router = express.Router();
const customer = require("./routes/customer.js");
const auth = require("authentication_middlware");

router.use(auth);
router.use("/customer", customer);
// router.use("/", );
module.exports = router;
