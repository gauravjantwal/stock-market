const axios = require("axios");
const config = require("../config/config.json");
const MarketStatus = require("../models/globalmarketstatus");
const { BadRequestError } = require("../models/errors");
const errorHandler = require("../middleware/errorHandlerMiddleware");

const apiUrl = `${config.baseURL}/query?function=MARKET_STATUS&apikey=demo`;

class MarketStatusService {
  async getMarketStatus() {
    try {
      // Check if data exists in MongoDB
      const cachedData = await MarketStatus.findOne({ key: apiUrl });

      if (cachedData) {
        // If cached data is found in MongoDB, return it
        console.log("Data found in MongoDB cache.");
        return cachedData.data;
      } else {
        console.log("If no cached data found, fetch from API");
        // If no cached data found in MongoDB, fetch from API
        const response = await axios.get(apiUrl);
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
    } catch (error) {
      // Pass error to error handler middleware
      errorHandler(error);
    }
  }
}

module.exports = new MarketStatusService();
