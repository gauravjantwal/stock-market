const rateLimit = require('express-rate-limit');

const dashboardcontroller = require("../controllers/dashboardcontroller");
const companyBalancesheetController = require("../controllers/balancesheetcontroller");
const companyOverviewController = require("../controllers/companyoverviewcontroller");
const globalMarketStatusController = require("../controllers/globalmarketstatuscontroller");
const newsAndSentimentsController = require("../controllers/newsandsentimentscontroller");
const tickerSearchController = require("../controllers/tickersearchcontroller");
const timeSeriesController = require("../controllers/timeseriescontroller");
const topGainerAndLooserController = require("../controllers/topgainerandloosercontroller");
const userController = require("../controllers/usercontroller");

module.exports = (router) => {

  const limitApiRate = (requests, durationInMinutes) => rateLimit({
    windowMs: durationInMinutes * 60 * 1000,
    max: requests, // max requests per windowMs
    headers: true,
    message: 'You have exceeded your 3 requests per 15 minute limit.'
  });

  router.get("/dashboard", dashboardcontroller.getdashboard);
  router.get("/company/:stocksymbol/balancesheet", companyBalancesheetController.getCompanyBalancesheet);
  router.get("/company/:stocksymbol/overview", companyOverviewController.getCompanyOverview);
  router.get("/globalmarket/status", globalMarketStatusController.getGlobalMarketStatus);
  router.get("/news/sentiments", newsAndSentimentsController.getNewsAndSentiments);
  router.get("/ticker/:stocksymbol/search", tickerSearchController.getTickerSearch);
  router.get("/timeseries/:stocksymbol/daily", timeSeriesController.getDailyTimeSeries);
  router.get("/timeseries/:stocksymbol/intraday", timeSeriesController.getIntradayTimeSeries);
  router.get("/top/gainers/loosers/traded", topGainerAndLooserController.getTopGainerLooserAndTraded);
  router.post("/user/signup", limitApiRate(5, 15), userController.postUserSignUp);
  router.post("/user/signin", limitApiRate(5, 15), userController.postUserSignIn);
};
