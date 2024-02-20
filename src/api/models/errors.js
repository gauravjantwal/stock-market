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

class NotFoundError extends Error {
    constructor(message, statusCode = 404) {
        super(message, statusCode);
    }
}

module.exports = {
    ApplicationError,
    AuthorizationError,
    BadRequestError,
    NotFoundError
};