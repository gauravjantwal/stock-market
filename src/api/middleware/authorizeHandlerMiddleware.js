const jwt = require('jsonwebtoken');
const config = require("../config/config.json");

module.exports = (req, res, next) => {
  //get authcookie from request
  const authcookie = req.cookies['token'];

  //verify token which is in cookie value
  jwt.verify(authcookie, process.env.jwtSecret || config.jwtSecret, (err, data) => {
    if (err) {
      res.clearCookie("token");
      res.sendStatus(401);
    }
    else if (data.id && data.email) {
      const { id } = data
      req.user = { id };
      next();
    }
  });
};