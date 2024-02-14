const mongoose = require('mongoose');

const TickerSearchSchema = new mongoose.Schema({
  _id: String,
  assetType: String,
  exchange: String,
  ipoDate: String,
  StockName: String,
  StockSymbol: String,
  SymbolWithName: String,
  });

  const TickerSearch = mongoose.model('stockssymbol', TickerSearchSchema);
  module.exports = TickerSearch;