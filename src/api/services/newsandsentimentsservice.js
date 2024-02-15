const aAService = require("./alphaAdvantageService");
const { BadRequestError } = require("../models/errors");
const db = require("../utils/db");
const NewsAndSentiments = db.NewsAndSentiments;

const apiUrl = 'query?function=NEWS_SENTIMENT';

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
    const response = await aAService.get(apiUrl);
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