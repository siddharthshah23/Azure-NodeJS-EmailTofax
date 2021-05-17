const express = require("express");
const router = express.Router();

const { sendFax } = require("./sendfax");

router.post("/fax", sendFax);

module.exports = router;
