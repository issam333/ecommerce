const express = require("express");
const User = require("../model/userSchema");

const router = express.Router();

// استرجاع جميع المستخدمين


// تسجيل مستخدم جديد
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // التحقق من الحقول
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(401).json({ error: "User already exists" });
      
    }

    const user = await User.create({ name, email, password });
    res.status(201).json({ message: "User registered successfully", data: user });
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
