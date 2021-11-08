const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
  Type: String,
  EventName: String,
  Count: Number,
  Description: String,
  Picture: String,
  StartDate: Date,
  EndDate: Date,
});

const Events = mongoose.model("Events", eventsSchema);
module.exports = Events;
