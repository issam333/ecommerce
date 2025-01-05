const express = require("express");
const User = require("../model/userSchema");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const checkEmail = await User.findOne({ email: req.body.email });
    if (!checkEmail) {
      return res.status(404).json({ message: "User not found" });
    }
    const checkPassword = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!checkPassword) {
      return res.status(400).json({ message: "Incorrect password!" });
    }
    res.json({ message: "Logged in successfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
