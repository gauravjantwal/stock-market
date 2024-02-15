const mongoose = require("mongoose");

const companyIncomeStatementSchema = new mongoose.Schema({
  symbol: String,
  data: Object,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const CompanyIncomeStatement = mongoose.model(
  "CompanyIncomeStatement",
  companyIncomeStatementSchema
);

module.exports = CompanyIncomeStatement;
