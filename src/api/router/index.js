const dashboardcontroller = require("../controllers/dashboardcontroller");
const timeseriescontroller = require("../controllers/timeseriesdailycontroller");
const usercontroller = require("../controllers/usercontroller");
const newsandsentimentscontroller = require("../controllers/newsandsentimentscontroller");
const companyoverviewcontroller = require("../controllers/companyoverviewcontroller");
const topgainerandloosercontroller = require("../controllers/topgainerandloosercontroller");
const tickersearchcontroller = require("../controllers/tickersearchcontroller");

module.exports = function (router) {
  router.get("/dashboard", dashboardcontroller.getdashboard);
  router.get(
    "/timeseriesdaily/:stocksymbol",
    timeseriescontroller.gettimeseriesdaily
  );
  newsandsentimentscontroller(router);
  companyoverviewcontroller(router);
  usercontroller(router);
  tickersearchcontroller(router);
  topgainerandloosercontroller(router);
};
