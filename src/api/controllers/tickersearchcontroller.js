const tickersearchservice = require("../services/tickersearchservice");

exports.getTickerSearch = async (req, res) => {
    const stockSymbol = req.params.stocksymbol;
    const response = tickersearchservice.searchTicker(stockSymbol);
    res.send(response);
};
