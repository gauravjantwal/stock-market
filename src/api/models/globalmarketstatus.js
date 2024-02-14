const mongoose = require("mongoose");

const marketStatusSchema = new mongoose.Schema({
  key: String,
  data: Object,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const MarketStatus = mongoose.model("GlobalMarketStatus", marketStatusSchema);

module.exports = MarketStatus;
