const timeseriesdailyService = require("../services/timeseriesdailyservice");

module.exports = function (router) {
  router.get("/timeseries/:stocksymbol/daily", async function (req, res) {
    try {
      const stockSymbol = req.params.stocksymbol;
      const responseData = await timeseriesdailyService.getTimeSeriesDaily(
        stockSymbol
      );
      res.send(responseData);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal server error");
    }
  });
};
