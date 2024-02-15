const timeseriesdailyService = require("../services/timeseriesdailyservice");

exports.getDailyTimeSeries = async (req, res) => {
  const stockSymbol = req.params.stocksymbol;
  const responseData = await timeseriesdailyService.getDailyTimeSeries(stockSymbol);
  res.send(responseData);
};

exports.getIntradayTimeSeries = async (req, res) => {
  const stockSymbol = req.params.stocksymbol;
  const responseData = await timeseriesdailyService.getIntradayTimeSeries(stockSymbol);
  res.send(responseData);
}