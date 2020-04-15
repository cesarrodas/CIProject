const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  id: String,
  passwordHash: String
});

export const User = mongoose.model('User', userSchema);