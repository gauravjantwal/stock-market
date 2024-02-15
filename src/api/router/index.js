const dashboardcontroller = require("../controllers/dashboardcontroller");
const timeseriescontroller = require("../controllers/timeseriesdailycontroller");
const usercontroller = require("../controllers/usercontroller");
const newsandsentimentscontroller = require("../controllers/newsandsentimentscontroller");
const companyoverviewcontroller = require("../controllers/companyoverviewcontroller");
const topgainerandloosercontroller = require("../controllers/topgainerandloosercontroller");
const stocksearchcontroller = require("../controllers/stocksearchcontroller");
const watchlistcontroller = require("../controllers/watchlistcontroller");

module.exports = function (router) {
  router.get("/dashboard", dashboardcontroller.getdashboard);
  router.get(
    "/timeseriesdaily/:stocksymbol",
    timeseriescontroller.gettimeseriesdaily
  );
  router.get(
    "/topgainerandlooser",
    topgainerandloosercontroller.gettopgainerandlooser
  );
  router.get("/stocksearch", stocksearchcontroller.getstocksearch);

  newsandsentimentscontroller(router);
  companyoverviewcontroller(router);
  usercontroller(router);
  watchlistcontroller(router);
};
