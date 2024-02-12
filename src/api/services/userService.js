//const sqlString = require('sqlstring');
const { BadRequestError } = require('../models/errors');
const db = require('../utils/db');
const User = db.User;

const signUp = async (req, res) => {
    //const userEmail = sqlString.escape(req.body.email);
    const userEmail = req.body.email;
    let user = await User.findOne({ email: userEmail });
    if (user) {
        throw new BadRequestError('User already registered with email "' + userEmail + '".', 409);
    }
    user = new User(req.body);
    await user.save(user);
    res.json(user);
}

exports.userSignUp = signUp;