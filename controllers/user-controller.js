const express = require("express");
const router = express.Router();

const addUserController = require("../services/addUser-service");
const register = require("../services/User/registerUser")

module.exports = function () {
  router.post("/create", addUserController.addUser);
  router.post("/register", register.registration);
  return router;
};
