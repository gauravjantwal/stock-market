const { validationResult } = require('express-validator');
const { NotFoundError } = require('../models/errors');
const watchlistService = require('../services/watchlistService');

exports.postWatchlist = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ validationErrors: errors.array() });
    }

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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ validationErrors: errors.array() });
    }

    const watchlistId = req.params.id;

    // Call the getWatchlistById function from watchlistService
    const watchlist = await watchlistService.getWatchlistById(watchlistId);

    // Check if a watchlist was found
    if (!watchlist) {
        throw new NotFoundError('Watchlist not found');
    }

    // Send the retrieved watchlist in the response
    res.json(watchlist);
};

exports.putWatchlist = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ validationErrors: errors.array() });
    }

    const watchlistId = req.params.id;
    const updatedWatchlist = await watchlistService.updateWatchlistById(watchlistId, req.body);

    if (!updatedWatchlist) {
        throw new NotFoundError('Watchlist not found');
    }

    res.status(202); // Accepted
    res.send();
};


exports.deleteWatchlist = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ validationErrors: errors.array() });
    }

    const watchlistId = req.params.id;
    console.log(watchlistId);

    // Call the deleteWatchlistById function from watchlistService
    const deletedWatchlist = await watchlistService.deleteWatchlistById(watchlistId);

    if (!deletedWatchlist) {
        throw new NotFoundError('Watchlist not found');
    }

    res.status(202); // Accepted
    res.send();
};