const express = require("express");
const router = express.Router();
const kullanicikontrol = require("../middleware/authMiddleware");
const {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.get("/profile",kullanicikontrol, getUserProfile);
router.put("/profile",kullanicikontrol, updateUserProfile);

module.exports = router;
