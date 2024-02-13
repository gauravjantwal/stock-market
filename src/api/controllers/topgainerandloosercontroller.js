
const axios = require('axios');

// Define the URL of the third-party API
const apiUrl = 'https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo';

// Make a GET request to the API
exports.gettopgainerandlooser = function(req,res){
    axios.get(apiUrl)
      .then(response => {
        // Handle successful response       
        res.send(response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
      });
    };


    
    


