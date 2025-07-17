// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // Register
// router.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;
//   const hashed = await bcrypt.hash(password, 10);

//   try {
//     const user = new User({ name, email, password: hashed });
//     await user.save();
//     res.status(201).json({ message: "User registered" });
//   } catch (e) {
//     if (e.code === 11000) {
//       return res.status(400).json({ error: "Email already exists" });
//     }
//     console.error("Registration Error:", e);
//     res.status(500).json({ error: "Server error during registration" });
//   }
// });

// // Login
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) return res.status(400).json({ error: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) return res.status(400).json({ error: "Invalid password" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.json({ message: "Login successful", token });
//   } catch (e) {
//     console.error("Login Error:", e);
//     res.status(500).json({ error: "Server error during login" });
//   }
// });

// module.exports = router;

import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
