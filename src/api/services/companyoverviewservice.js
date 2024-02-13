const axios = require("axios");
const config = require("../config/config.json");
const CompanyOverview = require("../models/companyoverview");

const apiUrl = `${config.baseURL}/query?function=OVERVIEW&symbol=[symbol]&apikey=F4NKYN0O04SNXFUQ`;

class CompanyOverviewService {
  async getCompanyOverview(stockSymbol) {
    try {
      const replacedApiUrl = apiUrl.replace("[symbol]", stockSymbol);

      // Check if data exists in MongoDB
      const cachedData = await CompanyOverview.findOne({ symbol: stockSymbol });

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
        await CompanyOverview.findOneAndUpdate(
          { symbol: stockSymbol },
          { symbol: stockSymbol, data: responseData },
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

module.exports = new CompanyOverviewService();
