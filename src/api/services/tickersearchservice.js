const { BadRequestError } = require('../models/errors');
const db = require('../utils/db');
const TickerSearch = require("../models/tickerseach");

const searchByStockName = async (req, res) => {
  
    const query = { "SymbolWithName": { $regex: req.query.StockName, $options: 'i' } };

    const result = await TickerSearch.find(query);
    if (result.length == 0) {
        throw new BadRequestError('Data Not found.', 404);
    }
    res.send(result);
}

exports.getTickerSearch = searchByStockName;

