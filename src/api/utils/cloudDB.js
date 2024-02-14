const { MongoClient } = require('mongodb');
const config = require('../config/config.json');

const client = new MongoClient(config.cloudConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

async function disconnectFromDatabase() {
    try {
        await client.close();
        console.log("Disconnected from MongoDB");
    } catch (error) {
        console.error("Error disconnecting from MongoDB:", error.message);
    }
}

async function executeQuery(dbname ,collectionName, query) {
    try {
        const database = client.db(dbname);
        const collection = database.collection(collectionName);

        console.log("Query sent:", query);
        const result = await collection.find(query).toArray();

        console.log("Query result:", result);
        return result;
    } catch (error) {
        console.error("Error executing query:", error.message);
        throw error;
    }
}

module.exports = {
    connectToDatabase,
    disconnectFromDatabase,
    executeQuery,
};
