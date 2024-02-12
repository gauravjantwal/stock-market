const User = require('../models/user');
const sqlString = require('sqlstring');

exports.signup = async (req, res) => {
    let user = await User.findOne({ email:  sqlString.escape(req.body.email) });
    if (user) {
        throw new Error("User already registered with requested email.");
    }
    user = new User(req.body);
    console.log(user);
    await user.save(user);
    res.json(user);
}