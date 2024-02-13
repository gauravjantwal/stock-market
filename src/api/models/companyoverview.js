const mongoose = require("mongoose");

const companyOverviewSchema = new mongoose.Schema({
  symbol: String,
  data: Object,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const CompanyOverview = mongoose.model(
  "CompanyOverview",
  companyOverviewSchema
);

module.exports = CompanyOverview;
