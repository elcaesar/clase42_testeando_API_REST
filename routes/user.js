const express = require("express");

const usersController = require("../controllers/user");

const router = express.Router();

router.get("/", usersController.getUsers);  // list users
router.post("/", usersController.saveUser); // add user

module.exports = router;
