class ApplicationBaseError extends Error {
    statusCode;

    constructor(message, statusCode = 400) {
        super(message);

        this.statusCode = statusCode;
    }
}

class BadRequestError extends ApplicationBaseError {
    constructor(message, statusCode = 400) {
        super(message, statusCode);
    }
}

class AuthorizationError extends Error {
    constructor(message, statusCode = 401) {
        super(message, statusCode);
    }
}
module.exports = {
    AuthorizationError,
    BadRequestError
};