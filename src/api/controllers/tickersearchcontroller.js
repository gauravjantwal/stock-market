const tickersearchservice = require("../services/tickersearchservice");

module.exports = function (router) {
    router.get('/tickersearch', tickersearchservice.getTickerSearch);
};
