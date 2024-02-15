const config = require("../config/config.json");
const mongoose = require("mongoose");
const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(
    process.env.MONGODB_URI || config.connectionString,
    connectionOptions
  )
  .then(() => {
    console.log("DB is Connected");
  })
  .catch((err) => {
    console.log("Unable to connect to DB");
    console.log(err);
  });
mongoose.Promise = global.Promise;

module.exports = {
  User: require("../models/user"),
  CompanyOverview: require("../models/companyoverview"),
  NewsAndSentiments: require("../models/newsandsentiments"),
  CompanyIncomeStatement: require("../models/incomestatement"),
  Ticker: require("../models/ticker"),
  TimeSeriesDaily: require("../models/timeseriesdaily"),
  BalanceSheet: require("../models/balancesheet")
};
