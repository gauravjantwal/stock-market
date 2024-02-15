const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const watchlistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlenght: 200,
            trim: true
        }
        
    }
);


module.exports = mongoose.model('Watchlist', watchlistSchema);