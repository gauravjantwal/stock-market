const usercontroller=require('../controllers/usercontroller');
const dashboardcontroller=require('../controllers/dashboardcontroller');
const timeseriescontroller=require('../controllers/timeseriesdailycontroller');

module.exports=function(router){
    router.get('/user',usercontroller.getdefault);
    router.get('/dashboard',dashboardcontroller.getdashboard); 
    router.get('/timeseriesdaily',timeseriescontroller.gettimeseriesdaily);     
};
