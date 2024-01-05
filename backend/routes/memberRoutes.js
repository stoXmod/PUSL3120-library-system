const express = require("express");
const {
  getMember,
  loginMember,
  addMember,
  updateMember,
} = require("../controllers/memberController");

const router = express.Router();

// GET single member
router.get("/:id", getMember);

//login
router.post("/login", loginMember);

// POST members // Signup
router.post("/", addMember);

// UPDATE member
router.patch("/:id", updateMember);

module.exports = router;