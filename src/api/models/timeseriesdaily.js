const mongoose = require("mongoose");

const timeSeriesDailySchema = new mongoose.Schema({
  symbol: String,
  data: Object,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TimeSeriesDaily", timeSeriesDailySchema);