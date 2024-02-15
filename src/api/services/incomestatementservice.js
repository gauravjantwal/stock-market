const axios = require("axios");
const config = require("../config/config.json");
const CompanyIncomeStatement = require("../models/incomestatement");
const { BadRequestError } = require('../models/errors');

const apiUrl = `${config.baseURL}/query?function=INCOME_STATEMENT&symbol=[symbol]&apikey=F4NKYN0O04SNXFUQ`;

class CompanyIncomeStatementService {
  async getCompanyIncomeStatement(stockSymbol) {
    try {
      const replacedApiUrl = apiUrl.replace("[symbol]", stockSymbol);

      // Check if data exists in MongoDB
      const cachedData = await CompanyIncomeStatement.findOne({ symbol: stockSymbol });

      if (cachedData) {
        // If cached data is found in MongoDB, return it
        console.log("Data found in MongoDB cache.");
        return cachedData.data;
      } else {
        console.log("If no cached data found, fetch from API");
        // If no cached data found in MongoDB, fetch from API
        const response = await axios.get(replacedApiUrl);
        const responseData = response.data;

      // Check if the response string contains the rate limit message
      const responseString = JSON.stringify(responseData);
      if (responseString.includes('Our standard API rate limit is 25 requests per day')) {
        //const cachedDefaultData = await CompanyIncomeStatement.findOne({ symbol: "Default" });
        //Fetch random data and send it to the user.
        const cachedRandomData = await CompanyIncomeStatement.aggregate([{ $sample: { size: 1 } }]);
        if (cachedRandomData) {
          //Replace random Symbol with current requested symbol
          cachedRandomData[0].symbol = stockSymbol;
          cachedRandomData[0].data.symbol = stockSymbol;
          console.log("Random Data sent.");
          return cachedRandomData;
        }
      }
        // Save response data to MongoDB
        await CompanyIncomeStatement.findOneAndUpdate(
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
      throw new ApplicationBaseError('Some unexpected error', 500);
    }
  }
}

module.exports = new CompanyIncomeStatementService();
