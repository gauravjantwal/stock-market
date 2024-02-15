const axios = require("axios");
const config = require("../config/config.json");
const db = require("../utils/db");
const BalanceSheet = db.BalanceSheet;

const apiUrl = `${config.baseURL}/query?function=BALANCE_SHEET&symbol=[symbol]&apikey=F4NKYN0O04SNXFUQ`;

exports.getBalanceSheet = async (stockSymbol) => {
  const replacedApiUrl = apiUrl.replace("[symbol]", stockSymbol);

  // Check if data exists in MongoDB
  const cachedData = await BalanceSheet.findOne({ symbol: stockSymbol });

  if (cachedData) {
    // If cached data is found in MongoDB, return it
    console.log("Data found in MongoDB cache.");
    return cachedData.data;
  } else {
    console.log("If no cached data found, fetch from API");
    // If no cached data found in MongoDB, fetch from API
    const response = await axios.get(replacedApiUrl);
    const responseData = response.data;

    // Save response data to MongoDB
    await BalanceSheet.findOneAndUpdate(
      { symbol: stockSymbol },
      { symbol: stockSymbol, data: responseData },
      { upsert: true }
    );

    console.log("Data saved to MongoDB cache.");

    // Return response
    return responseData;
  }
} 