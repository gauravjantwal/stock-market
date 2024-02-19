const { validationResult } = require('express-validator');
const incomeStatementService = require("../services/incomestatementservice");

exports.getCompanyIncomeStatement = async function (req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ validationErrors: errors.array() });
  }
  
  const stockSymbol = req.params.stocksymbol;
  const responseData = await incomeStatementService.getCompanyIncomeStatement(stockSymbol);
  res.send(responseData);
};