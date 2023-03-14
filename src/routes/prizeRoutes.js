const express = require("express");
const router = express.Router();
const prizeController = require("../controller/prizeControler");

router.post("/", prizeController.create);
router.get("/", prizeController.findAll)

module.exports = router;
