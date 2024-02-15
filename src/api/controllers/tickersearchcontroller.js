const tickersearchservice = require("../services/tickersearchservice");

module.exports = function (router) {
  router.get(
    "/ticker/:symbolOrName/search",
    tickersearchservice.getTickerSearch
  );
};
