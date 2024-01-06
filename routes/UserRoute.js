const express = require("express");
const {
  registerUser,
  loginUser,
  getUserDetails,
  getAllUser,
  getSingleUser,
} = require("../controllers/userController");

const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router
  .route("/users")
  .get(getAllUser);
router
  .route("/user/:id")
  .get(isAuthenticatedUser, getSingleUser);
module.exports = router;
