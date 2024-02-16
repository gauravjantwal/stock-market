const aAService = require("./alphaAdvantageService");
const { BadRequestError } = require("../models/errors");
const db = require("../utils/db");
const MarketStatus = db.MarketStatus;

const apiUrl = 'query?function=MARKET_STATUS&apikey=demo';

exports.getMarketStatus = async () => {
  
  // Check if data exists in MongoDB
  const cachedData = await MarketStatus.findOne({ key: apiUrl });

  if (cachedData) {
    // If cached data is found in MongoDB, return it
    console.log("Data found in MongoDB cache.");
    return cachedData.data;
  } else {
    console.log("If no cached data found, fetch from API");
    // If no cached data found in MongoDB, fetch from API
    const response = await aAService.get(apiUrl);
    const responseData = response.data;

    if (!responseData) {
      throw new BadRequestError("Data not found");
    }

    // Save response data to MongoDB
    await MarketStatus.findOneAndUpdate(
      { key: apiUrl },
      { key: apiUrl, data: responseData },
      { upsert: true }
    );

    console.log("Data saved to MongoDB cache.");

    // Return response
    return responseData;
  }
}