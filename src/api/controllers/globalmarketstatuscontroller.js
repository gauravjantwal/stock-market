const errorHandler = require("../middleware/errorHandlerMiddleware");
const marketStatusService = require("../services/globalmarketstatusservice");

module.exports = function (router) {
  router.get("/globalmarketstatus", async (req, res) => {
    try {
      const marketStatus = await marketStatusService.getMarketStatus();
      res.json(marketStatus);
    } catch (error) {
      errorHandler(error);
    }
  });
};
