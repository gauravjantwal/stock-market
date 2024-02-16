const mongoose = require("mongoose");

const balanceSheetSchema = new mongoose.Schema({
  symbol: String,
  data: Object,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const BalanceSheet = mongoose.model(
  "BalanceSheet",
  balanceSheetSchema
);

module.exports = BalanceSheet;