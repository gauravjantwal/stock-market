
const database = require("../models/searchdatabase");

exports.getstocksearch = async function searchByStockSymbol(req,res) {
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



    
    


