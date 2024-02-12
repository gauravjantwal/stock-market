const usercontroller = require('../controllers/usercontroller');
const dashboardcontroller = require('../controllers/dashboardcontroller');
const timeseriescontroller = require('../controllers/timeseriesdailycontroller');



module.exports = function (router) {
    router.get('/dashboard', dashboardcontroller.getdashboard);
    router.get('/timeseriesdaily', timeseriescontroller.gettimeseriesdaily);
    router.post('/user/signup', RateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 5, // max 100 requests per windowMs
        headers: true,
        message: 'You have exceeded your 3 requests per 15 minute limit.'
      }), usercontroller.signup);
};
