const rateLimit = require('express-rate-limit');
const userService = require('../services/userService');
const { check } = require('express-validator');


module.exports = function (router) {

    const rateLimiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 5, // max 5 requests per windowMs
        headers: true,
        message: 'You have exceeded your 3 requests per 15 minute limit.'
    });

    router.post('/user/signup', rateLimiter, [
        check("name", "Name should be atleast 3 characters").isLength({ min: 3 }),
        check("email", "Email should be valid").isEmail(),
        check("password", "password should be atleast 6 characters").isLength({ min: 6 })
    ],
        userService.userSignUp);

    router.post('/user/signin', rateLimiter, userService.userSignIn)
};

