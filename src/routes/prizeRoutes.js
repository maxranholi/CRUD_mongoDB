const express = require("express");
const router = express.Router();
const personControler = require("../controller/personControler");

router.post("/", personControler.create);
router.get("/", personControler.findAll)
router.get("/:id", personControler.findUser)
router.patch("/:id", personControler.updatUser)
router.delete("/:id", personControler.deleteUser)

module.exports = router;
