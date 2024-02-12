const { BadRequestError } = require('../models/errors');
const User = require('../models/user');
const sqlString = require('sqlstring');

const signUp = async (req, res) => {
    const userEmail = sqlString.escape(req.body.email);
    let user = await User.find({ email: userEmail });
    if (user) {
        throw new BadRequestError('User already registered with email ' + userEmail + '.', 409);
    }
    user = new User(req.body);
    await user.save(user);
    res.json(user);
}

exports.userSignUp = signUp;