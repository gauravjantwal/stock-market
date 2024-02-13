// //#region json
// const fs = require('fs');
// const path = require('path');

// // Specify the path to your JSON file
// const jsonFilePath = "./cache/stocksymbols.json";

// // Read data from the JSON file
// const jsonData = readDataFromFile(jsonFilePath);

// // Function to read data from a JSON file
// function readDataFromFile(filePath) {
//     try {
//         // Read the content of the JSON file
//         const data = fs.readFileSync(filePath, 'utf8');
        
//         // Parse the JSON data
//         const jsonData = JSON.parse(data);

//         return jsonData;
//     } catch (error) {
//         console.error('Error reading data from file:', error.message);
//         return null;
//     }
// }
// //#endregion

// const { MongoClient } = require('mongodb');

// // Connection URI. Replace <username>, <password>, and <your-cluster-url> with your MongoDB Atlas credentials.
// const uri = "mongodb+srv://admin:admin@cluster0.n0lbewp.mongodb.net/?retryWrites=true&w=majority";

// // Create a new MongoClient
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // Function to search by stock symbol
// exports.getstocksearch = async function searchByStockSymbol(req,res) {

//     try {
//         // Connect to the MongoDB server
//         await client.connect();

//         console.log("Connected to MongoDB");
        
//         // Check MongoDB server status
//         const adminDb = client.db('Stocks');

//         const serverStatus = await adminDb.command({ serverStatus: 1 });
//         console.log(`MongoDB server version: ${serverStatus.version}`);
//         console.log(`Uptime: ${serverStatus.uptime}`);


//         const collection = adminDb.collection('StocksSymbol');
//         // Fetch data from the collection
//         //const query = {StockSymbol: "HDFC"}; // You can specify a query here if needed
//         const query = { "StockName": { $regex: req.query.StockName, $options: 'i' } };
//         const result = await collection.find(query).toArray();

//         res.send(result);

//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error.message);
//     } finally {
//         // Close the MongoDB client
//         await client.close();
//         console.log("Disconnected from MongoDB");
//     }
    
//     //Local Json file
//     // if (jsonData)
//     // {
//     //     // Use the filter method to find all items matching the search term
//     // const matchingData = jsonData.filter(item =>
//     //     Object.values(item).some(value =>
//     //         value.toString().toLowerCase().includes(req.query.StockName.toLowerCase())
//     //     )
//     // );

//     // res.send(matchingData);
//     // }
// }

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

// Call the function to run the example query
//exampleQuery();


    
    


