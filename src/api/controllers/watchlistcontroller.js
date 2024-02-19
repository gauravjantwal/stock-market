const { validationResult } = require('express-validator');
const { NotFoundError } = require('../models/errors');
const watchlistService = require('../services/watchlistService');

exports.getWatchlists = async (req, res) => {

    const userId = req.user.id;

    const allWatchlists = await watchlistService.getAllWatchlists(userId);

    res.json(allWatchlists);
};

exports.getWatchlist = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ validationErrors: errors.array() });
    }

    const watchlistId = req.params.id;
    const userId = req.user.id;

    // Call the getWatchlistById function from watchlistService
    const watchlist = await watchlistService.getWatchlistById(userId, watchlistId);

    // Send the retrieved watchlist in the response
    res.json(watchlist);
};

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

exports.putWatchlist = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ validationErrors: errors.array() });
    }

    const watchlistId = req.params.id;
    const { name } = req.body;
    const userId = req.user.id;
    await watchlistService.updateWatchlistById(userId, watchlistId, name);

    res.status(202); // Accepted
    res.send();
};

exports.deleteWatchlist = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ validationErrors: errors.array() });
    }

    const watchlistId = req.params.id;
    const userId = req.user.id;

    // Call the deleteWatchlistById function from watchlistService
    await watchlistService.deleteWatchlistById(userId, watchlistId);

    res.status(202); // Accepted
    res.send();
};

exports.getWatchlistBookmarks = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ validationErrors: errors.array() });
    }

    const watchlistId = req.params.id;
    const userId = req.user.id;

    const allBookmarks = await watchlistService.getAllBookmarkByWatchlistId(userId, watchlistId);

    res.json(allBookmarks);
};

exports.postWatchlistBookmark = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ validationErrors: errors.array() });
    }

    const watchlistId = req.params.id;
    const { stocksymbol } = req.body;
    const userId = req.user.id;

    await watchlistService.createBookmarkByWatchlistId(userId, watchlistId, stocksymbol);

    res.status(201);
    res.send();
};

exports.deleteWatchlistBookmark = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ validationErrors: errors.array() });
    }

    const { id, stocksymbol } = req.params;
    const userId = req.user.id;

    // Call the deleteWatchlistById function from watchlistService
    await watchlistService.deleteBookmarkByWatchlistId(userId, id, stocksymbol);

    res.status(202); // Accepted
    res.send();
};