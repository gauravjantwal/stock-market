const { NotFoundException ,BadRequestError} = require('../models/errors');
const watchlistService = require('../services/watchlistService');

exports.postWatchlist = async (req, res) => {
    const { name } = req.body;   
    const  userid  = req.user.id;
    await watchlistService.createWatchlist(name,userid);
    res.status(201);
    res.send();
};

exports.getWatchlists = async (req, res) => {
    const userid  = req.user.id;
    const allWatchlists = await watchlistService.getWatchlists(userid);
    res.json(allWatchlists);
};

exports.getWatchlist = async (req, res) => {
    const userid  = req.user.id;
    const watchlistId = req.params.id;
    const watchlist = await watchlistService.getWatchlistById(watchlistId,userid);
    if (watchlist == null) {
        throw new BadRequestError('Watchlist not found');
    }
    res.json(watchlist);
};

exports.putWatchlist = async (req, res) => {
    const  userid  = req.user.id;
    const watchlistId = req.params.id;
    const updatedWatchlist = await watchlistService.updateWatchlistById(watchlistId, userid,req.body);
    if (!updatedWatchlist) {
        throw new BadRequestError('Watchlist not found');
    }
    res.status(202); // Accepted
    res.send();
};


exports.deleteWatchlist = async (req, res) => {
    const  userid  = req.user.id;
    const watchlistId = req.params.id;
    await watchlistService.deleteWatchlistById(watchlistId,userid);    
    res.status(202); // Accepted
    res.send();
};



exports.postWatchlistBookmarks = async (req, res) => {
    const symbol = req.body.symbol;
    const userid  = req.user.id;
    const watchlistId = req.params.id;
    const updatedWatchlist = await watchlistService.createWatchlistBookmarks(watchlistId, userid,symbol);
    if (!updatedWatchlist) {
        throw new BadRequestError('Watchlist not found');
    }
    res.status(201); // Accepted
    res.send();
};



exports.getWatchlistBookmarks = async (req, res) => {
    const userid  = req.user.id;
    const watchlistId = req.params.id;
    const watchlist = await watchlistService.getWatchlistBookmarks(watchlistId,userid);
    if (watchlist === null) {
        throw new BadRequestError('Watchlist bookmarks not found');
    }
    res.json(watchlist);
};

exports.deleteWatchlistBookmark = async (req, res) => {
    const  userid  = req.user.id;
    const watchlistId = req.params.id;
    const symbol = req.params.symbol;
    await watchlistService.deleteWatchlistBookmarks(watchlistId,userid,symbol);    
    res.status(202); // Accepted
    res.send();
};