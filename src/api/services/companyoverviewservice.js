const aAService = require("./alphaAdvantageService");
const { NotFoundError } = require("../models/errors");
const { project } = require('../utils/objectHelper');
const db = require("../utils/db");
const CompanyOverview = db.CompanyOverview;

const apiUrl = '/query?function=OVERVIEW&symbol=[symbol]';
//const projection = { data: { Symbol: 1, Name: 1, Description: 1, Exchange: 1, Currency: 1, Country: 1, Sector: 1, Industry: 1, MarketCapitalization: 1 } }

exports.getCompanyOverview = async (stockSymbol) => {

  const replacedApiUrl = apiUrl.replace("[symbol]", stockSymbol);

  // Check if data exists in MongoDB
  const cachedData = await CompanyOverview.findOne({ symbol: stockSymbol });//.select(projection);

  if (cachedData) {
    // If cached data is found in MongoDB, return it
    console.log("Data found in MongoDB cache.");
    return cachedData.data;
  } else {
    console.log("If no cached data found, fetch from API");
    // If no cached data found in MongoDB, fetch from API
    const response = await aAService.get(replacedApiUrl);
    const responseData = response.data;

    if (!responseData) {
      throw new NotFoundError(`Symbol [${stockSymbol}] not found.`);
    }

    // Save response data to MongoDB
    await CompanyOverview.findOneAndUpdate(
      { symbol: stockSymbol },
      { symbol: stockSymbol, data: responseData },
      { upsert: true }
    );

    console.log("Data saved to MongoDB cache.");

    // Return response
    //return project(responseData, projection.data);
    return responseData;
  }
}
