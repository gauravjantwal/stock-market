const mongoose = require("mongoose");

const timeSeriesIntraDaySchema = new mongoose.Schema({
  symbol: String,
  data: Object,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TimeSeriesIntraDay", timeSeriesIntraDaySchema);