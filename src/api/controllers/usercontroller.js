const { validationResult } = require('express-validator');
const userService = require('../services/userService');


exports.postUserSignUp = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ validationErrors: errors.array() });
    }

    const { name, email, password } = req.body;

    await userService.userSignUp(name, email, password);

    res.status(201);
    res.send();
};

exports.postUserSignIn = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ validationErrors: errors.array() });
    }
    
    const { email, password } = req.body;

    var response = await userService.userSignIn(email, password);

    const { name, token } = response;

    //Pass token into cookie
    res.cookie('token', token, {
        maxAge: 60 * 60 * 1000, // One hour only.
        httpOnly: true
    });

    req.session['user'] = { name, email }

    return res.json({
        user: { name, email }
    });
};


exports.getUserSignOut = async (req, res) => {
    res.clearCookie("token");
    res.clearCookie('connect.sid');
    req.session?.destroy();
    res.status(204);
    res.send();
};