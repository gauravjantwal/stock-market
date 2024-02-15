const { BadRequestError } = require('../models/errors');
const db = require('../utils/db');
const Watchlists = db.WatchList;

exports.createWatchlist = async (userid, name) => {
    const watchlist = new Watchlist({ name });
    await Watchlists.save(watchlist);
}


const getWatchlists = async () => {
    try {
        // Retrieve all watchlists
        const allWatchlists = await Watchlist.find();
        return allWatchlists;
    } catch (error) {
        console.error('Error retrieving all watchlists:', error.message);
        throw new BadRequestError('Error retrieving watchlists');
    }
};

const getWatchlistById = async (watchlistId) => {
    try {
        // Retrieve watchlist by ID
        const watchlist = await Watchlist.findById(watchlistId);
        return watchlist;
    } catch (error) {
        console.error('Error retrieving watchlist by ID:', error.message);
        throw new BadRequestError('Invalid watchlist ID');
    }
};



const deleteWatchlistById = async (watchlistId) => {
    try {
        // Find the watchlist by ID
        const watchlist = await Watchlist.findById(watchlistId);

        // Check if the watchlist exists
        if (!watchlist) {
            throw new BadRequestError('Watchlist not found');
        }

        // Delete the watchlist using deleteOne
        await Watchlist.deleteOne({ _id: watchlistId });

        return watchlist; // You can return the deleted watchlist if needed
    } catch (error) {
        console.error('Error deleting watchlist by ID:', error.message);
        throw new BadRequestError('Error deleting watchlist');
    }
};


const updateWatchlistById = async (watchlistId, updatedData) => {
    try {
        // Find the watchlist by ID
        const watchlist = await Watchlist.findById(watchlistId);

        // Check if the watchlist exists
        if (!watchlist) {
            throw new BadRequestError('Watchlist not found');
        }

        // Update watchlist data
        watchlist.set(updatedData);
        await watchlist.save();

        return watchlist; // You can return the updated watchlist if needed
    } catch (error) {
        console.error('Error updating watchlist by ID:', error.message);
        throw new BadRequestError('Error updating watchlist');
    }
};


exports.getWatchlists = getWatchlists;
exports.getWatchlistById = getWatchlistById;
exports.deleteWatchlistById = deleteWatchlistById;
exports.updateWatchlistById = updateWatchlistById;

