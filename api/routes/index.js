const ctrlAuth = require("../controllers/authenication");
const ctrlProfile = require("../controllers/profile");

const express = require("express");
const router = express.Router();

const jwt = require("express-jwt");

const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: "payload",
  algorithms: ["HS256"],
});

// profile
router.get("/profile", auth, ctrlProfile.profileRead);

// authentication
router.post("/register", ctrlAuth.register);
router.post("/login", ctrlAuth.login);

module.exports = router;
