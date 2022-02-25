const express = require("express");

const router = express.Router();

const {
  userpost,
  getalluser,
  textuser,
  deleteuser,
} = require("../controller/user.controller");

router.post("/", userpost);
router.post("/user", textuser);
router.get("/delete/:id", deleteuser);
router.get("/", getalluser);

module.exports = router;
