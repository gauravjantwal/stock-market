const rateLimit = require('express-rate-limit');
const { check, param } = require('express-validator');
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

  router.get("/company/:stocksymbol/balancesheet", [
    param("stocksymbol", "Symbol should be of atlest 3 characters and maximum 10.").isLength({ min: 3, max: 10 })
  ], companyBalancesheetController.getCompanyBalancesheet);

  router.get("/company/:stocksymbol/overview", [
    param("stocksymbol", "Symbol should be of atlest 3 characters and maximum 10.").isLength({ min: 3, max: 10 })
  ], companyOverviewController.getCompanyOverview);

  router.get("/company/:stocksymbol/incomestatement", [
    param("stocksymbol", "Symbol should be of atlest 3 characters and maximum 10.").isLength({ min: 3, max: 10 })
  ], incomeStatementController.getCompanyIncomeStatement);

  router.get("/globalmarket/status", globalMarketStatusController.getGlobalMarketStatus);
  router.get("/news/sentiments", newsAndSentimentsController.getNewsAndSentiments);

  router.get("/ticker/:stocksymbol/search", [
    param("stocksymbol", "Symbol should be of atlest 3 characters and maximum of 10.").isLength({ min: 3, max: 10 })
  ], tickerSearchController.getTickerSearch);

  router.get("/timeseries/:stocksymbol/daily", [
    param("stocksymbol", "Symbol should be of atlest 3 characters and maximum 10.").isLength({ min: 3, max: 10 })
  ], timeSeriesController.getDailyTimeSeries);

  router.get("/timeseries/:stocksymbol/intraday", [
    param("stocksymbol", "Symbol should be of atlest 3 characters and maximum 10.").isLength({ min: 3, max: 10 })
  ], timeSeriesController.getIntradayTimeSeries);

  router.get("/top/gainers/loosers/traded", topGainerAndLooserController.getTopGainerLooserAndTraded);

  router.post("/user/signup", limitApiRate(5, 15), [
    check("name", "Name should be atleast 3 characters and maximum of 50.").isLength({ min: 3, max: 50 }),
    check("email", "Please enter a valid email.").isEmail(),
    check("password", "Password should be atleast 6 characters in length and maximum of 20.").isLength({ min: 6, max: 20 })
  ], userController.postUserSignUp);

  router.post("/user/signin", [
    check("email", "Please enter a valid email.").isEmail(),
    check("password", "Password should be atleast 6 characters in length and maximum of 20.").isLength({ min: 6, max: 20 })
  ], limitApiRate(5, 15), userController.postUserSignIn);

  router.get("/user/signout", userController.getUserSignOut);

  router.get("/watchlist", authorize, limitApiRate(5, 15), watchlistController.getWatchlists);

  router.get("/watchlist/:id", authorize, [
    param("id", "Id should be of 24 characters.").isLength(24)
  ], watchlistController.getWatchlist);

  router.post("/watchlist", authorize, limitApiRate(5, 15), authorize, watchlistController.postWatchlist);

  router.put("/watchlist/:id", authorize, limitApiRate(5, 15), authorize, [
    param("id", "Id should be of 24 characters.").isLength({ min: 24, max: 24 })
  ], watchlistController.putWatchlist);

  router.delete("/watchlist/:id", authorize, limitApiRate(5, 15), authorize, [
    param("id", "Id should be of 24 characters.").isLength(24)
  ], watchlistController.deleteWatchlist);

};
