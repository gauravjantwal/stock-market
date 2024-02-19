const aAService = require("./alphaAdvantageService");
const db = require('../utils/db');
const TimeSeriesDaily = db.TimeSeriesDaily;
const TimeSeriesIntraDay = db.TimeSeriesIntraDay;

const apiUrl = '/query?function=TIME_SERIES_DAILY&symbol=[symbol]';

const apiUrlIntra = '/query?function=TIME_SERIES_INTRADAY&symbol=[symbol]&interval=1min';

exports.getDailyTimeSeries = async (stockSymbol) => {

  const replacedApiUrl = apiUrl.replace("[symbol]", stockSymbol);

  // Check if data exists in MongoDB
  const cachedData = await TimeSeriesDaily.findOne({ symbol: stockSymbol });

  if (cachedData) {
    // If cached data is found in MongoDB, return it
    console.log("Data found in MongoDB cache.");
    return cachedData.data;
  } else {
    console.log("If no cached data found, fetch from API");
    // If no cached data found in MongoDB, fetch from API
    const response = await aAService.get(replacedApiUrl);
    const responseData = response.data;

    // Save response data to MongoDB
    await TimeSeriesDaily.findOneAndUpdate(
      { symbol: stockSymbol },
      { symbol: stockSymbol, data: responseData },
      { upsert: true }
    );

    console.log("Data saved to MongoDB cache.");

    // Return response
    return responseData;
  }
};

exports.getIntradayTimeSeries = async (stockSymbol) => {
  const replacedApiUrl1 = apiUrlIntra.replace("[symbol]", stockSymbol);

  // Check if data exists in MongoDB
  const cachedData = await TimeSeriesIntraDay.findOne({ symbol: stockSymbol });

  if (cachedData) {
    // If cached data is found in MongoDB, return it
    console.log("Data found in MongoDB cache.");
    return cachedData.data;
  } else {
    console.log("If no cached data found, fetch from API");
    // If no cached data found in MongoDB, fetch from API
    const response = await aAService.get(replacedApiUrl1);
    const responseData = response.data;

    // Save response data to MongoDB
    await TimeSeriesIntraDay.findOneAndUpdate(
      { symbol: stockSymbol },
      { symbol: stockSymbol, data: responseData },
      { upsert: true }
    );

    console.log("Data saved to MongoDB cache.");

    // Return response
    return responseData;
  }
}

exports.intradayStocksUpdate = async (stockSymbols) => {
  var apiResponse = [];

  var cachedData = await TimeSeriesIntraDay.find({ symbol: { $in: stockSymbols } });

  const cachedSymbols = cachedData.map(item => { return item["symbol"]; });
  const nonCachedSymbols = stockSymbols.filter(x => { return cachedSymbols.indexOf(x) < 0; })

  for (var i = 0; i < nonCachedSymbols.length; i++) {
    var symbol = nonCachedSymbols[i];
    var response = await aAService.get(apiUrlIntra.replace("[symbol]", symbol));
    var responseData = response.data;

    // Save response data to MongoDB
    await TimeSeriesIntraDay.findOneAndUpdate(
      { symbol: symbol },
      { symbol: symbol, data: responseData },
      { upsert: true }
    );
    cachedData.push({ symbol: symbol, data: responseData });
  }

  return cachedData;
}