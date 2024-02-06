const usercontroller=require('../controllers/usercontroller');
const dashboardcontroller=require('../controllers/dashboardcontroller');

module.exports=function(router){
    router.get('/',usercontroller.getdefault);  
};

module.exports=function(router){
    router.get('/',dashboardcontroller.getdashboard);  
};