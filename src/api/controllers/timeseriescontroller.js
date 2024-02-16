const { validationResult } = require('express-validator');
const timeseriesdailyService = require("../services/timeseriesdailyservice");

exports.getDailyTimeSeries = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ validationErrors: errors.array() });
  }

  const stockSymbol = req.params.stocksymbol;
  const responseData = await timeseriesdailyService.getDailyTimeSeries(stockSymbol);
  res.send(responseData);
};

exports.getIntradayTimeSeries = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ validationErrors: errors.array() });
    }
    
  const stockSymbol = req.params.stocksymbol;
  const responseData = await timeseriesdailyService.getIntradayTimeSeries(stockSymbol);
  res.send(responseData);
}