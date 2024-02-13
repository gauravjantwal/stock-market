const axios = require("axios");
const config = require("../config/config.json");
const NewsAndSentiments = require("../models/newsandsentiments");

const apiUrl = `${config.baseURL}/query?function=NEWS_SENTIMENT&apikey=F4NKYN0O04SNXFUQ`;

class NewsAndSentimentsService {
  async getNewsAndSentiments() {
    try {
      // Check if data exists in MongoDB
      const cachedData = await NewsAndSentiments.findOne({ key: apiUrl });

      if (cachedData) {
        // If cached data is found in MongoDB, return it
        console.log("Data found in MongoDB cache.");
        return cachedData.data;
      } else {
        console.log("If no cached data found, fetch from API");
        // If no cached data found in MongoDB, fetch from API
        const response = await axios.get(apiUrl);
        const responseData = response.data;

        // Save response data to MongoDB with the API URL as key
        await NewsAndSentiments.findOneAndUpdate(
          { key: apiUrl },
          { key: apiUrl, data: responseData },
          { upsert: true }
        );

        console.log("Data saved to MongoDB cache.");

        // Return response
        return responseData;
      }
    } catch (error) {
      // Handle error
      console.error("Error:", error);
      throw new Error("Internal server error");
    }
  }
}

module.exports = new NewsAndSentimentsService();