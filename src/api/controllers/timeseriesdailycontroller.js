
const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Define the URL of the third-party API
const apiUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=[symbol]&apikey=F4NKYN0O04SNXFUQ";

// Make a GET request to the API
exports.gettimeseriesdaily = async function (req, res) {
  try {
    let stockSymbol = req.params.stocksymbol;
    const replacedApiUrl = apiUrl.replace("[symbol]", stockSymbol);         
      const response = await axios.get(replacedApiUrl);
      const responseData = response.data;  
      // Send response
      res.send(responseData);
  } catch (error) {
    // Handle error
    console.error("Error:", error);
    res.status(500).send("Internal server error");
  }
};

    
    


