//  this is my schema for my databse

const mongoose = require("mongoose");

const journeySchema = mongoose.Schema({
  departure: String,
  arrival: String,
  date: Date,
  departureTime: String,
  price: Number,
});

const journeyModel = mongoose.model("journey", journeySchema);

module.exports = journeyModel;
