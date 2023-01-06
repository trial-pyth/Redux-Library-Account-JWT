const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const authController = require("../controllers/authController");
const { checkUser } = require("../middleware/authMiddleware");

router.get("/api/signup", authController.signup_get);
router.post("/api/signup", authController.signup_post);
router.get("/api/login", authController.login_get);
router.post("/api/login", checkUser, authController.login_post);
router.get("/api/logout", authController.logout_get);

module.exports = router;
