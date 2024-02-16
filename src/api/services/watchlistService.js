const { BadRequestError } = require('../models/errors');
const db = require('../utils/db');
const Watchlists = db.WatchList;
const watchlistProjection = { name: 1, _id: 1 };

exports.createWatchlist = async (userid, name) => {

    const watchlist = new Watchlists({ name });

    await Watchlists.save(watchlist);
}

const getWatchlists = async () => {

    const allWatchlists = await Watchlists.find().select(watchlistProjection);

    return allWatchlists;
};

const getWatchlistById = async (watchlistId) => {

    const watchlist = await Watchlists.findById(watchlistId,).select(watchlistProjection);

    return watchlist;
};



const deleteWatchlistById = async (watchlistId) => {
    // Find the watchlist by ID
    const watchlist = await Watchlists.findById(watchlistId);

    // Check if the watchlist exists
    if (!watchlist) {
        throw new BadRequestError('Watchlist not found');
    }

    // Delete the watchlist using deleteOne
    await Watchlists.deleteOne({ _id: watchlistId });

    return watchlist;
};


const updateWatchlistById = async (watchlistId, updatedData) => {
    // Find the watchlist by ID
    const watchlist = await Watchlists.findById(watchlistId);

    // Check if the watchlist exists
    if (!watchlist) {
        throw new BadRequestError('Watchlist not found');
    }

    // Update watchlist data
    Watchlists.set(updatedData);
    await watchlist.save();

    return watchlist;
};


exports.getWatchlists = getWatchlists;
exports.getWatchlistById = getWatchlistById;
exports.deleteWatchlistById = deleteWatchlistById;
exports.updateWatchlistById = updateWatchlistById;

