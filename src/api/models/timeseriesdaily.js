const mongoose = require("mongoose");

const timeSeriesDailySchema = new mongoose.Schema({
  symbol: String,
  data: Object,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const TimeSeriesDaily = mongoose.model(
  "TimeSeriesDaily",
  timeSeriesDailySchema
);

module.exports = TimeSeriesDaily;