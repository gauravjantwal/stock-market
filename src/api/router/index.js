const dashboardcontroller = require("../controllers/dashboardcontroller");
const timeseriescontroller = require("../controllers/timeseriesdailycontroller");
const usercontroller = require("../controllers/usercontroller");
const newsandsentimentscontroller = require("../controllers/newsandsentimentscontroller");
const companyoverviewcontroller = require("../controllers/companyoverviewcontroller");

module.exports = function (router) {
  router.get("/dashboard", dashboardcontroller.getdashboard);
  router.get(
    "/timeseriesdaily/:stocksymbol",
    timeseriescontroller.gettimeseriesdaily
  );
  router.get(
    "/newsandsentiments",
    newsandsentimentscontroller.getnewsandsentiments
  );
  router.get(
    "/companyoverview/:stocksymbol",
    companyoverviewcontroller.getcompanyoverview
  );

  usercontroller(router); // Register user routes
};
