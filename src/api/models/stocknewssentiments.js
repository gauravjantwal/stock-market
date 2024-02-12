const mongoose = require("mongoose");

const topicSchema = mongoose.Schema({
  topic: String,
  relevance_score: Number,
});

const tickerSentimentSchema = mongoose.Schema({
  ticker: String,
  relevance_score: Number,
  ticker_sentiment_score: Number,
  ticker_sentiment_label: String,
});

const feedItemSchema = mongoose.Schema({
  title: String,
  url: String,
  time_published: Date,
  authors: [String],
  summary: String,
  banner_image: String,
  source: String,
  category_within_source: String,
  source_domain: String,
  topics: [topicSchema],
  overall_sentiment_score: Number,
  overall_sentiment_label: String,
  ticker_sentiment: [tickerSentimentSchema],
});

const stocksNewsSchema = mongoose.Schema(
  {
    items: Number,
    sentiment_score_definition: String,
    relevance_score_definition: String,
    feed: [feedItemSchema],
  },
  { collection: "Stocks" }
);

module.exports = mongoose.model("StocksNews", stocksNewsSchema);
