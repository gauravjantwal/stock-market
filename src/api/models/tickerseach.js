const mongoose = require('mongoose');

const TickerSearchSchema = new mongoose.Schema({
  _id: {String, Boolean},
    StockSymbol: {String, Boolean},
    StockName: String,
    SymbolWithName: String,
    exchange: String,
    assetType: String,
    ipoDate: String,
  });

  const TickerSearch = mongoose.model('StockSymbolAlphavantage', TickerSearchSchema);
  module.exports = TickerSearch;