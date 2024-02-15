const newsAndSentimentsService = require("../services/newsandsentimentsservice");
const errorHandler = require("../middleware/errorHandlerMiddleware");

module.exports = function (router) {
  router.get("/news/sentiments", async function (req, res) {
    try {
      const responseData =
        await newsAndSentimentsService.getNewsAndSentiments();
      res.send(responseData);
    } catch (error) {
      errorHandler(error);
    }
  });
};
