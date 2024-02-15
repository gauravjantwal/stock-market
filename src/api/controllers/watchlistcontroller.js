const { NotFoundException } = require('../models/errors');
const watchlistService = require('../services/watchlistService');

exports.postWatchlist = async (req, res) => {
    const { name } = req.body;
    const userId = req.user.id;
    await watchlistService.createWatchlist(userId, name);

    res.status(201);
    res.send();
};

exports.getWatchlists = async (req, res) => {

    const allWatchlists = await watchlistService.getWatchlists();

    res.json(allWatchlists);
};

exports.getWatchlist = async (req, res) => {

    const watchlistId = req.params.id;

    // Call the getWatchlistById function from watchlistService
    const watchlist = await watchlistService.getWatchlistById(watchlistId);

    // Check if a watchlist was found
    if (!watchlist) {
        throw new NotFoundException('Watchlist not found');
    }

    // Send the retrieved watchlist in the response
    res.json(watchlist);
};

exports.putWatchlist = async (req, res) => {

    const watchlistId = req.params.id;
    const updatedWatchlist = await watchlistService.updateWatchlistById(watchlistId, req.body);

    if (!updatedWatchlist) {
        throw new NotFoundException('Watchlist not found');
    }

    res.status(202); // Accepted
    res.send();
};


exports.deleteWatchlist = async (req, res) => {

    const watchlistId = req.params.id;
    console.log(watchlistId);

    // Call the deleteWatchlistById function from watchlistService
    const deletedWatchlist = await watchlistService.deleteWatchlistById(watchlistId);

    if (!deletedWatchlist) {
        throw new NotFoundException('Watchlist not found');
    }

    res.status(202); // Accepted
    res.send();
};