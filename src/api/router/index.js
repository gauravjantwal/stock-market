const dashboardcontroller = require("../controllers/dashboardcontroller");
const timeseriesdailycontroller = require("../controllers/timeseriesdailycontroller");
const usercontroller = require("../controllers/usercontroller");
const newsandsentimentscontroller = require("../controllers/newsandsentimentscontroller");
const companyoverviewcontroller = require("../controllers/companyoverviewcontroller");
const topgainerandloosercontroller = require("../controllers/topgainerandloosercontroller");
const stocksearchcontroller = require("../controllers/stocksearchcontroller");
const balancesheetcontroller = require("../controllers/balancesheetcontroller");


module.exports = function (router) {
  router.get("/dashboard", dashboardcontroller.getdashboard);
  router.get(
    "/topgainerandlooser",
    topgainerandloosercontroller.gettopgainerandlooser
  );
  router.get("/stocksearch", stocksearchcontroller.getstocksearch);

  newsandsentimentscontroller(router);
  companyoverviewcontroller(router);
  usercontroller(router);
  timeseriesdailycontroller(router);
  balancesheetcontroller(router);
};

