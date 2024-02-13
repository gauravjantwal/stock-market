const mongoose = require("mongoose");

const newsAndSentimentsSchema = new mongoose.Schema({
  key: String,
  data: Object,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const NewsAndSentiments = mongoose.model(
  "NewsAndSentiments",
  newsAndSentimentsSchema
);

module.exports = NewsAndSentiments;
