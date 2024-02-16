const aAService = require("./alphaAdvantageService");
const db = require('../utils/db');
const TimeSeriesDaily = db.TimeSeriesDaily;

const apiUrl = '/query?function=TIME_SERIES_DAILY&symbol=[symbol]';

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
  return stockSymbol;
}