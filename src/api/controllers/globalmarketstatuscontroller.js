const marketStatusService = require("../services/globalmarketstatusservice");

exports.getGlobalMarketStatus = async (req, res) => {
  const marketStatus = await marketStatusService.getMarketStatus();
  res.json(marketStatus);
};
