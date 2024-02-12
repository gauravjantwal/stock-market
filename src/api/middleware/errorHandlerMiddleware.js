require('express-async-errors');

const { AuthorizationError, BadRequestError } = require('../models/errors');

const getStatusCodeByError = (error) => {
    if (error instanceof BadRequestError) {
        return error.statusCode ?? 400;
    } else if (error instanceof AuthorizationError) {
        return error.statusCode ?? 401;
    }
    return 500;
};

const getErrorTitleByErrorCode = (error, errorCode) => ({
    400: error.message ?? 'Bad request',
    401: error.message ?? 'Unauthorize',
    409: error.message ?? 'Conflict'
})[errorCode] ?? 'Unexpected error';

module.exports = function (error, req, res, next) {
    if (error) {
        console.log(error.message);
        res.statusCode = getStatusCodeByError(error);
        res.status(res.statusCode);
        res.json({
            message: getErrorTitleByErrorCode(error, res.statusCode)
        });
    }
    return next();
}