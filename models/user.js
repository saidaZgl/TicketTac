const mongoose = require("mongoose");

// All tickets
const historyTickets = mongoose.Schema({
  departure: String,
  arrival: String,
  date: Date,
  departureTime: String,
  price: Number,
});

// User
const userSchema = mongoose.Schema({
  name: String,
  firstName: String,
  email: String,
  password: String,
  historyTickets: [historyTickets],
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
