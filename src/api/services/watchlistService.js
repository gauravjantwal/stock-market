const { NotFoundError } = require('../models/errors');
const db = require('../utils/db');
const Watchlists = db.WatchList;
const watchlistProjection = { name: 1, _id: 1 };
const watchlistBookmarkProjection = { bookmarks: 1, _id: 0 };

exports.getAllWatchlists = async (userid) => {

    const allWatchlists = await Watchlists.find({ userid }).select(watchlistProjection);

    return allWatchlists;
};
exports.getWatchlistById = async (userid, watchlistId) => {

    const watchlist = await Watchlists.findOne({ _id: watchlistId, userid: userid }).select(watchlistProjection);

    // Check if the watchlist exists
    if (!watchlist) {
        throw new NotFoundError('Watchlist not found');
    }

    return watchlist;
};
exports.createWatchlist = async (userid, name) => {
    const watchlist = new Watchlists({ userid, name });

    await watchlist.save(watchlist);
}
exports.updateWatchlistById = async (userid, watchlistId, watchlistName) => {
    // Find the watchlist by ID
    const watchlist = await Watchlists.findOne({ _id: watchlistId, userid: userid });

    // Check if the watchlist exists
    if (!watchlist) {
        throw new NotFoundError('Watchlist not found');
    }

    // Update watchlist data
    await Watchlists.updateOne({ _id: watchlistId, userid: userid }, { name: watchlistName });

    return watchlist;
};
exports.deleteWatchlistById = async (userid, watchlistId) => {
    // Find the watchlist by ID
    const watchlist = await Watchlists.findOne({ _id: watchlistId, userid: userid });

    // Check if the watchlist exists
    if (!watchlist) {
        throw new NotFoundError('Watchlist not found');
    }

    // Delete the watchlist using deleteOne
    await Watchlists.deleteOne({ _id: watchlistId });

    return watchlist;
};

exports.getAllBookmarkByWatchlistId = async (userid, watchlistId) => {
    const watchlist = await Watchlists.findOne({ _id: watchlistId, userid: userid }).select(watchlistBookmarkProjection);

    if (!watchlist) {
        throw new NotFoundError('Watchlist not found');
    }
    return watchlist.bookmarks;
}
exports.createBookmarkByWatchlistId = async (userid, watchlistId, symbol) => {
    await Watchlists.findOneAndUpdate({ _id: watchlistId, userid: userid }, { $addToSet: { bookmarks: symbol } });
    return symbol;
}
exports.deleteBookmarkByWatchlistId = async (userid, watchlistId, symbol) => {
    await Watchlists.findOneAndUpdate({ _id: watchlistId, userid: userid }, { $pull: { bookmarks: symbol } });
    return symbol;
}