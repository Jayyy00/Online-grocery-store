const express= require("express");
const router = express.Router();
const Register = require("../model/Register");
const registerController = require("../controller/registers-controller")

//CRUD
router.get("/",registerController.getAllRegisters);
router.post("/",registerController.addRegisters);
router.get("/:id",registerController.getById);
module.exports = router;