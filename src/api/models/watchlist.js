const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const watchlistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlenght: 200,
            trim: true
        },
        userid: {
            type: String,
            required: true,
            maxlenght: 25,
            trim: true
        },
        bookmarks: [{
            type: String
        }]
            
        
        
    }
);


module.exports = mongoose.model('Watchlist', watchlistSchema);