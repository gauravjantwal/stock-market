//const sqlString = require('sqlstring');
const { BadRequestError, AuthorizationError } = require('../models/errors');
const db = require('../utils/db');
const User = db.User;
const config = require("../config/config.json");
const jwt = require('jsonwebtoken');

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

const signIn = async (req, res) => {
    const { email, password } = req.body
    let user = await User.findOne({ email });
    if (!user) {
        throw new AuthorizationError('Invalid User or Passoword');
    }

    //Authenticate the User
    if (!user.authenticate(password)) {
        throw new AuthorizationError('Invalid User or Passoword');

    }

    //Creating token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET || config.SECRET);

    //Pass token into cookie
    res.cookie('token', token, { expire: new Date() + 1 });

    //Send response to Front End
    const { _id, name } = user
    return res.json({
        user: {
            _id,
            name,
            email
        }
    });

};

exports.userSignUp = signUp;
exports.userSignIn = signIn;
