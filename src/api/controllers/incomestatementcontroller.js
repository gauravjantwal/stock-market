const incomeStatementService = require("../services/incomestatementservice");

exports.getCompanyIncomeStatement = async function (req, res) {
  const stockSymbol = req.params.stocksymbol;
  const responseData = await incomeStatementService.getCompanyIncomeStatement(stockSymbol);
  res.send(responseData);
};