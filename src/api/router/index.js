const rateLimit = require('express-rate-limit');
const authorize = require('../middleware/authorizeHandlerMiddleware');

const dashboardcontroller = require("../controllers/dashboardcontroller");
const companyBalancesheetController = require("../controllers/balancesheetcontroller");
const companyOverviewController = require("../controllers/companyoverviewcontroller");
const globalMarketStatusController = require("../controllers/globalmarketstatuscontroller");
const incomeStatementController = require("../controllers/incomestatementcontroller");
const newsAndSentimentsController = require("../controllers/newsandsentimentscontroller");
const tickerSearchController = require("../controllers/tickersearchcontroller");
const timeSeriesController = require("../controllers/timeseriescontroller");
const topGainerAndLooserController = require("../controllers/topgainerandloosercontroller");
const userController = require("../controllers/usercontroller");
const watchlistController = require("../controllers/watchlistcontroller");

module.exports = (router) => {

  const limitApiRate = (requests, durationInMinutes) => rateLimit({
    windowMs: durationInMinutes * 60 * 1000,
    max: requests, // max requests per windowMs
    headers: true,
    message: `You have exceeded your ${requests} requests per ${durationInMinutes} minute limit.`
  });

  router.get("/company/:stocksymbol/balancesheet", companyBalancesheetController.getCompanyBalancesheet);
  router.get("/company/:stocksymbol/overview", companyOverviewController.getCompanyOverview);
  router.get("/company/:stocksymbol/incomestatement", incomeStatementController.getCompanyIncomeStatement);
  router.get("/globalmarket/status", globalMarketStatusController.getGlobalMarketStatus);
  router.get("/news/sentiments", newsAndSentimentsController.getNewsAndSentiments);
  router.get("/ticker/:stocksymbol/search", tickerSearchController.getTickerSearch);
  router.get("/timeseries/:stocksymbol/daily", timeSeriesController.getDailyTimeSeries);
  router.get("/timeseries/:stocksymbol/intraday", timeSeriesController.getIntradayTimeSeries);
  router.get("/top/gainers/loosers/traded", topGainerAndLooserController.getTopGainerLooserAndTraded);
  router.post("/user/signup", limitApiRate(5, 15), userController.postUserSignUp);
  router.post("/user/signin", limitApiRate(5, 15), userController.postUserSignIn);
  router.get("/user/signout", userController.getUserSignOut);

  router.get("/watchlist", limitApiRate(5, 15), authorize, watchlistController.getWatchlists);
  router.get("/watchlist/:id", authorize, watchlistController.getWatchlist);
  router.post("/watchlist", limitApiRate(5, 15), authorize, watchlistController.postWatchlist);
  router.put("/watchlist/:id", limitApiRate(5, 15), authorize, watchlistController.putWatchlist);
  router.delete("/watchlist/:id", limitApiRate(5, 15), authorize, watchlistController.deleteWatchlist);
};
