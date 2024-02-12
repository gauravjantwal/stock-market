const rateLimit = require('express-rate-limit');
const userService = require('../services/userService');

module.exports = function (router) {
    router.post('/user/signup', rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 5, // max 5 requests per windowMs
        headers: true,
        message: 'You have exceeded your 3 requests per 15 minute limit.'
    }), userService.userSignUp);
};