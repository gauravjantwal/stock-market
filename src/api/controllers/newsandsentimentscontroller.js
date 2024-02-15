const newsAndSentimentsService = require("../services/newsandsentimentsservice");

exports.getNewsAndSentiments = async (req, res) => {
  const responseData = await newsAndSentimentsService.getNewsAndSentiments();
  res.send(responseData);
};
