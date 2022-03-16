const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobile: Number,
  role: String,
  isAdmin: Boolean,
});

module.exports = mongoose.model("User", UserSchema);
