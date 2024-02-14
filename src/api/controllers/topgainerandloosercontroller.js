const topgainerandlooserservice = require("../services/topgainerandlooserservice");

module.exports = function (router) {
    router.get('/TopGainersLoosersTraded', topgainerandlooserservice.gettopgainerandlooser);
};


    
    


