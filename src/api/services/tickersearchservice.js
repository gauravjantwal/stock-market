const database = require("../utils/cloudDB");

exports.getTickerSearch = async function searchByStockName(req,res) {
    try {
        // Connect to the database
        await database.connectToDatabase();

        //Specify the dbname, collection name and query
        const dbname = "Stocks";
        const collectionName = 'StocksSymbolAlphavantage';
        const query = { "SymbolWithName": { $regex: req.query.StockName, $options: 'i' } };

        // Execute the query
       res.send(await database.executeQuery(dbname, collectionName, query));

    } catch (error) {
        console.error("Error in getstocksearch script:", error.message);
    } finally {
        // Disconnect from the database
        await database.disconnectFromDatabase();
    }
}

// //Need to implement using mongoose
// //Schema based
// const { BadRequestError } = require('../models/errors');
// const db = require('../utils/db');
// //const TickerSearch = db.TickerSearch;
// const TickerSearch = require("../models/tickerseach");

// const searchByStockName = async (req, res) => {
//   try {
//     const query = { "SymbolWithName": { $regex: "A", $options: 'i' } };

//     // Use async/await to wait for the MongoDB query to complete
//     //const result = await TickerSearch.find(query);
//     const result = await TickerSearch.findOne({ StockSymbol: "A" });
//     //const result = await TickerSearch.find({});
// console.log(result);
//     // Send the result as a JSON response
//     res.json(result.data);
// } catch (error) {
//     console.error("Error in getstocksearch script:", error.message);
// } 
// }

// exports.getTickerSearch = searchByStockName;

