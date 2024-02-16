const mongoose = require('mongoose');

const TickerSchema = new mongoose.Schema({
  _id: String,
  assetType: String,
  exchange: String,
  ipoDate: String,
  StockName: String,
  StockSymbol: String,
  SymbolWithName: String,
  });

  module.exports = mongoose.model('Ticker', TickerSchema);