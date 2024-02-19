const aAService = require("./alphaAdvantageService");
const { BadRequestError, NotFoundError } = require("../models/errors");
const db = require("../utils/db");
const NewsAndSentiments = db.NewsAndSentiments;

const getAllNewsAndSentimentsApiUrl = 'query?function=NEWS_SENTIMENT';
const getNewsAndSentimentForSymbolApiUrl = 'query?function=NEWS_SENTIMENT&tickers=[symbol]';

exports.getNewsAndSentimentForSymbol = async (stockSymbol) => {

  var replacedApiUrl = '';
  if (stockSymbol) {
    replacedApiUrl = getNewsAndSentimentForSymbolApiUrl.replace("[symbol]", stockSymbol);
  } else {
    replacedApiUrl = getAllNewsAndSentimentsApiUrl;
  }

  // Check if data exists in MongoDB
  const cachedData = await NewsAndSentiments.findOne({ key: replacedApiUrl });

  if (cachedData) {
    // If cached data is found in MongoDB, return it
    return cachedData.data;
  } else {
    // If no cached data found in MongoDB, fetch from API
    const response = await aAService.get(replacedApiUrl);
    const responseData = response.data;

    if (!responseData) {
      throw new NotFoundError("News not found.");
    }

    // Save response data to MongoDB with the API URL as key
    await NewsAndSentiments.findOneAndUpdate(
      { key: replacedApiUrl },
      { key: replacedApiUrl, data: responseData },
      { upsert: true }
    );

    // Return response
    return responseData;
  }
}