const aAService = require("./alphaAdvantageService");
const { BadRequestError } = require("../models/errors");
const db = require("../utils/db");
const apiUrl = "query?function=NEWS_SENTIMENT";

exports.getNewsAndSentiments = async () => {
  const response = await aAService.get(apiUrl);
  const responseData = response.data;

  if (!responseData) {
    throw new BadRequestError("Data not found");
  }

  return responseData;
};
