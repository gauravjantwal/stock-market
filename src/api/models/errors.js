class ApplicationBaseError extends Error {
    statusCode;

    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
    }
}

class ApplicationError extends ApplicationBaseError {
    statusCode;

    constructor(message, statusCode = 500) {
        super(message);

        this.statusCode = statusCode;
    }
}

class AuthorizationError extends ApplicationBaseError {
    constructor(message, statusCode = 401) {
        super(message, statusCode);
    }
}

class BadRequestError extends ApplicationBaseError {
    constructor(message, statusCode = 400) {
        super(message, statusCode);
    }
}

class ExternalApiError extends ApplicationError {
    constructor(message, statusCode = 503) {
        super(message, statusCode);
    }
}

class NotFoundError extends ApplicationBaseError {
    constructor(message, statusCode = 404) {
        super(message, statusCode);
    }
}

module.exports = {
    ApplicationError,
    AuthorizationError,
    BadRequestError,
    ExternalApiError,
    NotFoundError
};