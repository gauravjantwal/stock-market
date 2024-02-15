const newsAndSentimentsService = require("../services/newsandsentimentsservice");

module.exports = function (router) {
  router.get("/news/sentiments", async function (req, res) {
    try {
      const responseData =
        await newsAndSentimentsService.getNewsAndSentiments();
      res.send(responseData);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal server error");
    }
  });
};
