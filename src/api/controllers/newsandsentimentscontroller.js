const axios = require("axios");
const fs = require("fs");
const path = require("path");

const apiUrl =
  "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=F4NKYN0O04SNXFUQ";

const dataFilePath = path.join(__dirname, "../cache/newsandsentiments.json");

// Make a GET request to the API
exports.getnewsandsentiments = async function (req, res) {
  try {
    // Check if data is cached in the JSON file
    let cachedData;
    if (fs.existsSync(dataFilePath)) {
      cachedData = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    }

    if (cachedData && cachedData[apiUrl]) {
      // If cached data is found, send it as response
      console.log("Data found in cache.");
      res.send(cachedData[apiUrl]);
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

      // Send response
      res.send(responseData);
    }
  } catch (error) {
    // Handle error
    console.error("Error:", error);
    res.status(500).send("Internal server error");
  }
};
