const { BadRequestError } = require("../models/errors");
const db = require("../utils/db");
const Ticker = db.Ticker;

exports.searchTicker = async (stockSymbol) => {
  const query = { SymbolWithName: { $regex: stockSymbol, $options: "i" } };

  const result = await Ticker.find(query);

  if (result.length == 0) {
    throw new BadRequestError("Symbol '" + stockSymbol + "' not found.", 404);
  }

  return result;
};
