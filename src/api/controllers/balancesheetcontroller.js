const balancesheetService = require("../services/balancesheetservice");

module.exports = function (router) {
  router.get("/balancesheet/:stocksymbol", async function (req, res) {
    try {
      const stockSymbol = req.params.stocksymbol;
      const responseData = await balancesheetService.getBalanceSheet(
        stockSymbol
      );
      res.send(responseData);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal server error");
    }
  });
};