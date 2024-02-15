const dashboardcontroller = require("../controllers/dashboardcontroller");
const timeseriesdailycontroller = require("../controllers/timeseriesdailycontroller");
const usercontroller = require("../controllers/usercontroller");
const newsandsentimentscontroller = require("../controllers/newsandsentimentscontroller");
const companyoverviewcontroller = require("../controllers/companyoverviewcontroller");
const topgainerandloosercontroller = require("../controllers/topgainerandloosercontroller");
const tickersearchcontroller = require("../controllers/tickersearchcontroller");
const incomestatementcontroller = require("../controllers/incomestatementcontroller");

module.exports = function (router) {
  router.get("/dashboard", dashboardcontroller.getdashboard);
  newsandsentimentscontroller(router);
  tickersearchcontroller(router);
  topgainerandloosercontroller(router);
  newsandsentimentscontroller(router);
  companyoverviewcontroller(router);
  usercontroller(router);
  timeseriesdailycontroller(router);
  incomestatementcontroller(router);
};
