const aAService = require("./alphaAdvantageService");
// Don't remove demo as apikey since this doesn't need premium apikey
const apiUrl = '/query?function=TOP_GAINERS_LOSERS&apikey=demo';

// Make a GET request to the API

exports.getTopGainerLooserAndTraded = async () => {
  const response = await aAService.get(apiUrl);
  const responseData = response.data;
  return responseData;
};

