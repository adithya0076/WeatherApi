const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  _id: Number,
  district: String,
  humidity: Number,
  temperature: Number,
  pressure: Number,
  weatherCondition: String,
});

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;

