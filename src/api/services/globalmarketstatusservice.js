const aAService = require("./alphaAdvantageService");
const { BadRequestError } = require("../models/errors");
const db = require("../utils/db");

// Make a GET request to the API
exports.getMarketStatus = async () => {
  const response = await aAService.get(apiUrl);
  const responseData = response.data;

  if (!responseData) {
    throw new BadRequestError("Data not found");
  }

  return responseData;
};
