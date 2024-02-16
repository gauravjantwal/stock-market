const { validationResult } = require('express-validator');
const companyOverviewService = require("../services/companyoverviewservice");

exports.getCompanyOverview = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ validationErrors: errors.array() });
  }
  
  const stockSymbol = req.params.stocksymbol;
  const responseData = await companyOverviewService.getCompanyOverview(stockSymbol);
  res.send(responseData);
};
