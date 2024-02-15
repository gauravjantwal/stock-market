const axios = require("axios");
const config = require("../config/config.json");

// Don't remove demo as apikey since this doesn't need premium apikey
const apiUrl = `${config.baseURL}/query?function=TOP_GAINERS_LOSERS&apikey=demo`;

// Make a GET request to the API
exports.getTopGainerLooserAndTraded = async () => {
  const response = await axios.get(apiUrl);
  const responseData = response.data;
  return responseData;
};