const axios = require("axios");
const config = require("../config/config.json");
const { BadRequestError } = require("../models/errors");
const db = require("../utils/db");
const NewsAndSentiments = db.NewsAndSentiments;

const apiUrl = `${config.baseURL}/query?function=NEWS_SENTIMENT&apikey=F4NKYN0O04SNXFUQ`;

exports.getNewsAndSentiments = async () => {
  
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

    if (!responseData) {
      throw new BadRequestError("Data not found");
    }

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
}