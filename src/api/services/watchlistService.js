const { BadRequestError,ForbiddenError} = require('../models/errors');
const db = require('../utils/db');
const Watchlists = db.WatchList;

exports.createWatchlist = async (name,userid) => {

// Check if a watchlist with the same name and userid already exists
    const existingWatchlist = await Watchlists.findOne({ name, userid });
    if (existingWatchlist) {
        throw new BadRequestError('Watchlist with the same name already exists for this user');
    }
    const watchlist = new Watchlists({ name,userid });
    await watchlist.save(watchlist);
}


exports.getWatchlists = async (userid) => {   
        // Retrieve all watchlists 
        const allWatchlists = await Watchlists.find({userid : userid});
        console.log("allWatchlists",allWatchlists);
        if (!allWatchlists) {
            throw new BadRequestError('Watchlist not found');
        }
        return allWatchlists;
    
};

exports.getWatchlistById = async (watchlistId,userid) => {   
        // Retrieve watchlist by ID
        const watchlist = await Watchlists.findById(watchlistId);        
        // Check if watchlist exists
        if (!watchlist) {
            throw new BadRequestError('Watchlist not found');
        }
        // Check if the watchlist belongs to the specified user
        if (watchlist.userid.toString() !== userid.toString()) {
            throw new BadRequestError('Access denied. The watchlist does not belong to the user.');
        }
        return watchlist;
    
};

exports.updateWatchlistById = async (watchlistId,userid,updatedData) => {
   
    // Find the watchlist by ID
    const watchlist = await Watchlists.findById(watchlistId);
    // Check if the watchlist exists
    if (!watchlist) {
        throw new BadRequestError('Watchlist not found');
    }
     // Check if the watchlist belongs to the specified user
     if (watchlist.userid.toString() !== userid.toString()) {
        throw new BadRequestError('Access denied. The watchlist does not belong to the user.');
    }
    // Update watchlist data
    watchlist.set(updatedData);
    await watchlist.save();
    return watchlist; // You can return the updated watchlist if needed

};

exports.deleteWatchlistById = async (watchlistId,userid) => {
   
        // Find the watchlist by ID
        const watchlist = await Watchlists.findById(watchlistId);
        console.log("watchlist1",watchlist);
        // Check if the watchlist exists
        if (watchlist == null) {
            throw new BadRequestError('Watchlist not found');
        }
         // Check if the watchlist belongs to the specified user
         if (watchlist.userid.toString() !== userid.toString()) {
            throw new BadRequestError('Access denied. The watchlist does not belong to the user.');
        }
        await Watchlists.deleteOne({ _id: watchlistId });       
        
   
};


exports.createWatchlistBookmarks = async (watchlistId,userid,symbol) => {
   
    // Find the watchlist by ID
    const watchlist = await Watchlists.findById(watchlistId);
    // Check if the watchlist exists
    if (!watchlist) {
        throw new BadRequestError('Watchlist not found');
    }
     // Check if the watchlist belongs to the specified user
     if (watchlist.userid.toString() !== userid.toString()) {
        throw new BadRequestError('Access denied. The watchlist does not belong to the user.');
    }
    // Check if the value already exists in the bookmarks array
        if(watchlist.bookmarks.includes(symbol))
        {
            throw new BadRequestError('This symbol value already exists in the bookmark.');
        }

    // Update watchlist bookmarks data
    watchlist.bookmarks.push(symbol)
    //watchlist.set(updatedData);
    await watchlist.save();
    return watchlist; // You can return the updated watchlist if needed

};


exports.getWatchlistBookmarks = async (watchlistId,userid) => {   
    // Retrieve watchlist by ID
    const watchlist = await Watchlists.findById(watchlistId);        
    // Check if watchlist exists
    if (!watchlist) {
        throw new BadRequestError('Watchlist not found');
    }
    // Check if the watchlist belongs to the specified user
    if (watchlist.userid.toString() !== userid.toString()) {
        throw new BadRequestError('Access denied. The watchlist does not belong to the user.');
    }

    // Check whether watchlist have bookmarks
    if (watchlist.bookmarks.length === 0) {
        throw new BadRequestError('Watchlist bookmarks not found.');
    }
    return watchlist;

};


exports.deleteWatchlistBookmarks = async (watchlistId,userid,symbol) => {
   
    // Find the watchlist by ID
    const watchlist = await Watchlists.findById(watchlistId);
    
    // Check if the watchlist exists
    if (watchlist == null) {
        throw new BadRequestError('Watchlist bookmarks not found');
    }
     // Check if the watchlist belongs to the specified user
     if (watchlist.userid.toString() !== userid.toString()) {
        throw new BadRequestError('Access denied. The watchlist does not belong to the user.');
    }

     // Check if the value exists in the bookmarks array
     const indexToDelete = watchlist.bookmarks.indexOf(symbol);

     if(indexToDelete === -1)
     {
         throw new BadRequestError('This symbol value does not exists in the bookmark.');
     }
     //await Watchlists.bookmarks.splice(indexToDelete, 1);
     await Watchlists.findByIdAndUpdate({ _id: watchlistId }, { $pull: { bookmarks: symbol } });
    //await Watchlists.deleteOne({ _id: watchlistId });

};
