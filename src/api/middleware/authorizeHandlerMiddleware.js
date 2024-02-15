module.exports = (req, res) => {
  //get authcookie from request
  const authcookie = req.cookies.authcookie

  //verify token which is in cookie value
  jwt.verify(authcookie, process.env.jwtSecret || config.jwtSecret, (err, data) => {
    if (err) {
      res.sendStatus(401)
    }
    else if (data.user) {
      req.user = data.user
      next()
    }
  });
};