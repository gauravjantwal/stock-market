const axios = require("axios");

// Define the URL of the third-party API
const apiUrl =
  "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo";

// Make a GET request to the API
exports.getdashboard = function (req, res) {
  axios
    .get(apiUrl)
    .then((response) => {
      // Handle successful response
      //console.log('Response:', response.data);
      res.send(response.data);
    })
    .catch((error) => {
      // Handle error
      console.error("Error:", error);
    });
};
