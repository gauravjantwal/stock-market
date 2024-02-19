const axios = require("axios");
const config = require("../config/config.json");

exports.get = async (apiRoute) => {
    console.log(`Calling api: ${apiRoute}`);
    const containsRootSlash = apiRoute.startsWith("/");
    var apiUrl = `${config.baseURL}${(containsRootSlash ? '' : '/')}${apiRoute}`;
    if (!apiUrl.includes('&apikey=')) {
        apiUrl = `${apiUrl}&apikey=F4NKYN0O04SNXFUQ`;
    }
    const response = await axios.get(apiUrl);
    return response;
};