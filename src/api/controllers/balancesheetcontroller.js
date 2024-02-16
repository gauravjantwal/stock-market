const { validationResult } = require('express-validator');
const balancesheetService = require("../services/balancesheetservice");

exports.getCompanyBalancesheet = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ validationErrors: errors.array() });
  }

  const stockSymbol = req.params.stocksymbol;
  const responseData = await balancesheetService.getBalanceSheet(stockSymbol);
  res.send(responseData);
};