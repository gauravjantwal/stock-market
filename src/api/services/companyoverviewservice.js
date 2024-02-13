const axios = require("axios");
const fs = require("fs");
const path = require("path");

const apiUrl =
  "https://www.alphavantage.co/query?function=OVERVIEW&symbol=[symbol]&apikey=F4NKYN0O04SNXFUQ";

const dataFilePath = path.join(__dirname, "../cache/companyoverview.json");

class CompanyOverviewService {
  async getCompanyOverview(stockSymbol) {
    try {
      const replacedApiUrl = apiUrl.replace("[symbol]", stockSymbol);
      let cachedData;

      // Check if data is cached in the JSON file
      if (fs.existsSync(dataFilePath)) {
        cachedData = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
      }

      if (cachedData && cachedData[replacedApiUrl]) {
        // If cached data is found, return it
        console.log("Data found in cache.");
        return cachedData[replacedApiUrl];
      } else {
        console.log("If no cached data found, fetch from API");
        // If no cached data found, fetch from API
        const response = await axios.get(replacedApiUrl);
        const responseData = response.data;

        // Update or create cache in JSON file
        let newData;
        if (cachedData) {
          newData = { ...cachedData, [replacedApiUrl]: responseData };
        } else {
          newData = { [replacedApiUrl]: responseData };
        }
        fs.writeFileSync(dataFilePath, JSON.stringify(newData));

        console.log("Data saved to JSON file.");

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
