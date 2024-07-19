const express = require("express");
const {
  createUser,
  getUser,
  updateUserById,
} = require("../controllers/authController");
const router = express.Router();

router.route("/register").post(createUser);
router.route("/user").get(getUser);
router.route("/update/:id").put(updateUserById);

module.exports = router;
