const usercontroller = require("../controllers/usercontroller");
const dashboardcontroller = require("../controllers/dashboardcontroller");
const timeseriescontroller = require("../controllers/timeseriesdailycontroller");
const newsandsentimentscontroller = require("../controllers/newsandsentimentscontroller");
const companyoverviewcontroller = require("../controllers/companyoverviewcontroller");

module.exports = function (router) {
  router.get("/user", usercontroller.getdefault);
  router.get("/dashboard", dashboardcontroller.getdashboard);
  router.get("/timeseriesdaily", timeseriescontroller.gettimeseriesdaily);
  router.get(
    "/newsandsentiments",
    newsandsentimentscontroller.getnewsandsentiments
  );
  router.get(
    "/companyoverview/:stocksymbol",
    companyoverviewcontroller.getcompanyoverview
  );
};
