const topgainerandlooserservice = require("../services/topgainerandlooserservice");

exports.getTopGainerLooserAndTraded = async (req, res) => {
    var response = await topgainerandlooserservice.getTopGainerLooserAndTraded();
    res.send(response);
};