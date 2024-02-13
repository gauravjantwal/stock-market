const express = require('express');
const errorHandler = require('./middleware/errorHandlerMiddleware');
const appRoutes = require('./router/index');
const port = 8001;
const app = express();


const bodyparse = require("body-parser")
const cookieparser = require("cookie-parser")
const cors = require("cors")

require("dotenv").config();

//use parsing Middleware
app.use(bodyparse.json())
app.use(cookieparser())
app.use(cors())

const router = express.Router();
appRoutes(router); // Register all application routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);
app.use(errorHandler); // global error handler
app.listen(port, () => console.log("Listening " + port));