exports.testExpressValidatorMiddleware = async (req, res, middlewares) => {
    await Promise.all(middlewares.map(async (middleware) => {
        await middleware(req, res, () => undefined);
    }));
};