const rateLimit = require('express-rate-limit');
const watchlistService = require('../services/watchlistService');
module.exports = function (router) {
    router.post('/watchlist/create', rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 5, // max 5 requests per windowMs
        headers: true,
        message: 'You have exceeded your 3 requests per 15 minute limit.'
    }), watchlistService.watchlist);

    

    router.get('/watchlist/getWatchlists', async (_, res) => {
        try {
            // Call the getAllWatchlists function from watchlistService
            const allWatchlists = await watchlistService.getWatchlists();
    
            // Send the retrieved watchlists in the response
            res.json(allWatchlists);
        } catch (error) {
            console.error('Error retrieving all watchlists:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });


    // Route to get a single watchlist by ID
router.get('/watchlist/getWatchlistById/:id', async (req, res) => {
    try {
        const watchlistId = req.params.id;

        // Call the getWatchlistById function from watchlistService
        const watchlist = await watchlistService.getWatchlistById(watchlistId);

        // Check if a watchlist was found
        if (!watchlist) {
            return res.status(404).json({ error: 'Watchlist not found' });
        }

        // Send the retrieved watchlist in the response
        res.json(watchlist);
    } catch (error) {
        console.error('Error retrieving watchlist by ID:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Route to delete a watchlist by ID
router.delete('/watchlist/deletewatchlistById/:id', async (req, res) => {
    try {
        const watchlistId = req.params.id;
        console.log(watchlistId);

        // Call the deleteWatchlistById function from watchlistService
        const deletedWatchlist = await watchlistService.deleteWatchlistById(watchlistId);

        if (!deletedWatchlist) {
            return res.status(404).json({ error: 'Watchlist not found' });
        }

        res.json({ message: 'Watchlist deleted successfully' });
    } catch (error) {
        console.error('Error deleting watchlist by ID:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Route to update a watchlist by ID
router.put('/watchlist/updatewatchlistById/:id', async (req, res) => {
    try {
        const watchlistId = req.params.id;
        const updatedWatchlist = await watchlistService.updateWatchlistById(watchlistId, req.body);

        if (!updatedWatchlist) {
            return res.status(404).json({ error: 'Watchlist not found' });
        }

        res.json({ message: 'Watchlist updated successfully', updatedWatchlist });
    } catch (error) {
        console.error('Error updating watchlist by ID:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

};