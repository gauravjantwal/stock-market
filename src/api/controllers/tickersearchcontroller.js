const { validationResult } = require('express-validator');

const tickersearchservice = require("../services/tickersearchservice");

exports.getTickerSearch = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ validationErrors: errors.array() });
    }

    const stockSymbol = req.params.stocksymbol;
    const response = await tickersearchservice.searchTicker(stockSymbol);
    res.send(response);

};
