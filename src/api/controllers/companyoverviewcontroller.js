const companyOverviewService = require("../services/companyoverviewservice");

module.exports = function (router) {
  router.get("/company/:stocksymbol/overview", async function (req, res) {
    try {
      const stockSymbol = req.params.stocksymbol;
      const responseData = await companyOverviewService.getCompanyOverview(
        stockSymbol
      );
      res.send(responseData);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal server error");
    }
  });
};
