const { BadRequestError, AuthorizationError } = require('../models/errors');
const db = require('../utils/db');
const User = db.User;
const config = require("../config/config.json");
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    const userEmail = req.body.email;
    let user = await User.findOne({ email: { $eq: userEmail } });
    if (user) {
        throw new BadRequestError('User already registered with email "' + userEmail + '".', 409);
    }
    user = new User(req.body);
    await user.save(user);
    res.status(201);
    res.send();
}

const signIn = async (req, res) => {
    const { email, password } = req.body;

    let user = await User.findOne({ email: { $eq: email } });

    if (!user) {
        throw new AuthorizationError('Invalid User or Passoword');
    }

    //Authenticate the User
    if (!user.authenticate(password)) {
        throw new AuthorizationError('Invalid User or Passoword');
    }

    //Creating token
    const token = jwt.sign({ _id: user._id }, process.env.jwtSecret || config.jwtSecret);

    //Pass token into cookie
    res.cookie('token', token, { expire: new Date() + 1 });

    // Read name from user object
    const { name } = user

    //Send response
    return res.json({
        user: {
            name,
            email
        }
    });

};

const signOut = (req, res) => {
    res.clearCookie("token")
    return res.json({
        message: "User signed out successfully"
    })
}

exports.userSignUp = signUp;
exports.userSignIn = signIn;
exports.userSignOut = signOut;
