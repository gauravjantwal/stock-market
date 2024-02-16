const express = require('express');
const errorHandler = require('./middleware/errorHandlerMiddleware');
const appRoutes = require('./router/index');
const config = require("./config/config.json");
const app = express();
const port = process.env.port || config.port;
const session = require('express-session');
const monogoDBSession = require('connect-mongodb-session')(session);


const bodyparse = require("body-parser")
const cookieparser = require("cookie-parser")
const cors = require("cors")

require("dotenv").config();

//use parsing Middleware
app.use(bodyparse.json())
app.use(cookieparser())
app.use(cors())

//Connecting to MongoDB to store session
const store = new monogoDBSession({
    uri: config.connectionString,
    collection: 'usersessions',
});

//store session in database
app.use(session({
    secret: process.env.jwtSecret || config.jwtSecret,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, // Session valid for 24 hours
    store: store
}));

// This is not required, as logout controller taking care of this.
// We can use this middleware to delete the expired session.
// app.use((req, res, next) => {
//     if (req.cookies['connect.sid'] && !req.session.user) {
//         res.clearCookie('connect.sid');
//     }
//     next();
// });

const router = express.Router();
appRoutes(router); // Register all application routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);
app.use(errorHandler); // global error handler
app.listen(port, () => console.log("Listening " + port));