const { validationResult } = require('express-validator');
const newsAndSentimentsService = require("../services/newsandsentimentsservice");

exports.getNewsAndSentiments = async (req, res) => {
  const responseData = await newsAndSentimentsService.getNewsAndSentimentForSymbol();
  res.send(responseData);
};

exports.getNewsAndSentimentForSymbol = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ validationErrors: errors.array() });
  }
  
  const stockSymbol = req.params.stocksymbol;
  const responseData = await newsAndSentimentsService.getNewsAndSentimentForSymbol(stockSymbol);
  res.send(responseData);
};