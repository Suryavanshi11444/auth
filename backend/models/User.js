// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({

// name: String,

// email: { type: String, unique: true },

// password: String,

// });

// module.exports = mongoose.model("User", userSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("User", userSchema);
export default User;
