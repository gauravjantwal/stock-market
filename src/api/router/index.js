const dashboardcontroller = require('../controllers/dashboardcontroller');
const timeseriescontroller = require('../controllers/timeseriesdailycontroller');
const usercontroller = require('../controllers/usercontroller');

module.exports = function (router) {

    router.get('/dashboard', dashboardcontroller.getdashboard);
    router.get('/timeseriesdaily', timeseriescontroller.gettimeseriesdaily);

    usercontroller(router); // Register user routes
}
