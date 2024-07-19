const express = require("express");
const {
  createUser,
  getUser,
  updateUserById,
  deleteUser,
} = require("../controllers/authController");
const router = express.Router();

router.route("/register").post(createUser);
router.route("/user").get(getUser);
router.route("/update/:id").put(updateUserById);
router.route("/delete/:id").delete(deleteUser);

module.exports = router;
