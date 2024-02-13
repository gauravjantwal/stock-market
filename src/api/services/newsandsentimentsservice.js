const axios = require("axios");
const fs = require("fs");
const path = require("path");

const apiUrl =
  "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=F4NKYN0O04SNXFUQ";

const dataFilePath = path.join(__dirname, "../cache/newsandsentiments.json");

class NewsAndSentimentsService {
  async getNewsAndSentiments() {
    try {
      let cachedData;

      // Check if data is cached in the JSON file
      if (fs.existsSync(dataFilePath)) {
        cachedData = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
      }

      if (cachedData && cachedData[apiUrl]) {
        // If cached data is found, return it
        console.log("Data found in cache.");
        return cachedData[apiUrl];
      } else {
        console.log("If no cached data found, fetch from API");
        // If no cached data found, fetch from API
        const response = await axios.get(apiUrl);
        const responseData = response.data;

        // Update or create cache in JSON file
        let newData;
        if (cachedData) {
          newData = { ...cachedData, [apiUrl]: responseData };
        } else {
          newData = { [apiUrl]: responseData };
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

module.exports = new NewsAndSentimentsService();
