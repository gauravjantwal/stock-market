const usercontroller=require('../controllers/usercontroller');
const dashboardcontroller=require('../controllers/dashboardcontroller');

module.exports=function(router){
    router.get('/user',usercontroller.getdefault);
    router.get('/dashboard',dashboardcontroller.getdashboard);   
};
