const axios = require("axios");
const config = require("../config/config.json");
const { ApplicationError } = require('../models/errors');

exports.get = async (apiRoute) => {
    console.log(`Calling api: ${apiRoute}`);
    const containsRootSlash = apiRoute.startsWith("/");
    var apiUrl = `${config.baseURL}${(containsRootSlash ? '' : '/')}${apiRoute}`;
    if (!apiUrl.includes('&apikey=')) {
        apiUrl = `${apiUrl}&apikey=F4NKYN0O04SNXFUQ`;
    }
    const response = await axios.get(apiUrl);
    if (!response || !response.data ||
        (response.data['Error Message'] && (
            response.data['Error Message'].includes('Invalid API call.')
        ))) {
        throw new ApplicationError(response.data['Error Message']);
    }
    return response;
};