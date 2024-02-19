const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema(
    {
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "users"
        },
        name: {
            type: String,
            required: true,
            maxlenght: 50,
            trim: true
        },
        bookmarks: [{
            type: String
        }]

    }
);


module.exports = mongoose.model('Watchlist', watchlistSchema);