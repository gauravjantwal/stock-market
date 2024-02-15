const balancesheetService = require("../services/balancesheetservice");

exports.getCompanyBalancesheet = async (req, res) => {
  const stockSymbol = req.params.stocksymbol;
  const responseData = await balancesheetService.getBalanceSheet(stockSymbol);
  res.send(responseData);
};