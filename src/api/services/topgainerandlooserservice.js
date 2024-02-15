const axios = require("axios");
const config = require("../config/config.json");
const CompanyOverview = require("../models/companyoverview");
const { BadRequestError } = require('../models/errors');

// Don't remove demo as apikey since this doesn't need premium apikey
const apiUrl = `${config.baseURL}/query?function=TOP_GAINERS_LOSERS&apikey=demo`;

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
        throw new BadRequestError('Requested data Not found.', 404);
      });
    };