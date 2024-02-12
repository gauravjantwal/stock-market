const axios = require("axios");
const fs = require("fs");
const path = require("path");

const apiUrl =
  "https://www.alphavantage.co/query?function=OVERVIEW&symbol=[symbol]&apikey=F4NKYN0O04SNXFUQ";

const dataFilePath = path.join(__dirname, "../cache/companyoverview.json");

// Make a GET request to the API
exports.getcompanyoverview = async function (req, res) {
  try {
    let stockSymbol = req.params.stocksymbol;
    const replacedApiUrl = apiUrl.replace("[symbol]", stockSymbol);
    // Check if data is cached in the JSON file
    let cachedData;
    if (fs.existsSync(dataFilePath)) {
      cachedData = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    }

    if (cachedData && cachedData[stockSymbol]) {
      // If cached data is found, send it as response
      console.log("Data found in cache.");
      res.send(cachedData[stockSymbol]);
    } else {
      console.log("If no cached data found, fetch from API");
      // If no cached data found, fetch from API
      const response = await axios.get(replacedApiUrl);
      const responseData = response.data;

      // Update or create cache in JSON file
      let newData;
      if (cachedData) {
        newData = { ...cachedData, [stockSymbol]: responseData };
      } else {
        newData = { [stockSymbol]: responseData };
      }
      fs.writeFileSync(dataFilePath, JSON.stringify(newData));

      console.log("Data saved to JSON file.");

      // Send response
      res.send(responseData);
    }
  } catch (error) {
    // Handle error
    console.error("Error:", error);
    res.status(500).send("Internal server error");
  }
};
