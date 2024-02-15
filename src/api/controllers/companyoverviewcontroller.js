const companyOverviewService = require("../services/companyoverviewservice");

exports.getCompanyOverview = async (req, res) => {
  const stockSymbol = req.params.stocksymbol;
  const responseData = await companyOverviewService.getCompanyOverview(stockSymbol);
  res.send(responseData);
};
