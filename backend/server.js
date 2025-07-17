// const express = require("express");

// const mongoose = require("mongoose");

// const dotenv = require("dotenv");

// const cors = require("cors");

// dotenv.config();

// const app = express();

// app.use(cors());

// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI,

// { useNewUrlParser: true, useUnifiedTopology: true })

// .then(() => console.log("MongoDB Connected"))

// .catch(err => console.log(err));

// app.use("/api/auth", require("./routes/auth"));

// app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
