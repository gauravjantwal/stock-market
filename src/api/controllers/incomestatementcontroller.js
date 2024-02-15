const incomeStatementService = require("../services/incomestatementservice");

module.exports = function (router) {
  router.get("/company/:stocksymbol/incomestatement", async function (req, res) {
    try {
      const stockSymbol = req.params.stocksymbol;
      const responseData = await incomeStatementService.getCompanyIncomeStatement(
        stockSymbol
      );
      res.send(responseData);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal server error");
    }
  });
};
