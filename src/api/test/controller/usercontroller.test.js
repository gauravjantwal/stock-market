const { BadRequestError } = require('../../models/errors');
const httpMocks = require('node-mocks-http');
const { check } = require('express-validator');
const { testExpressValidatorMiddleware } = require('../utils/test.helper');
const db = require('../utils/db.mock');
const User = require('../../models/user');
const {
    postUserSignUp,
    // postUserSignIn,
    // getUserSignOut
} = require("../../controllers/usercontroller");

beforeAll(async () => await db.ConnectDatabase());
afterAll(async () => await db.DisconnectDatabase());

describe("User Controller", () => {
    describe("POST /user/signup", () => {
        it("should return HTTP 201 with valid inputs.", async () => {
            // Arrange
            let request = httpMocks.createRequest({
                body: {
                    name: 'Test User',
                    email: 'test@user.com',
                    password: 'someR@nd0mPa55'
                }
            });
            let response = httpMocks.createResponse();
            let sendSpy = jest.spyOn(response, 'send')

            // Act
            await postUserSignUp(request, response);

            // Assert
            expect(response.statusCode).toBe(201);
            expect(sendSpy).toBeCalled();
        });

        it("should throw `BadRequestError` when email already exists.", async () => {
            // Arrange

            let request = httpMocks.createRequest({
                body: {
                    name: 'Test User 2',
                    email: 'test@user2.com',
                    password: 'someR@nd0mPa552'
                }
            });
            let response = httpMocks.createResponse();
            // Save a user in db.
            const user = new User(request.body);
            await user.save();

            // Act
            const createUser = async () => await postUserSignUp(request, response);

            // Assert
            await expect(createUser()).rejects.toEqual(expect.any(BadRequestError));
            await expect(createUser()).rejects.toThrow('User already registered with email [test@user2.com].');
        });

        it.each([
            { name: null, email: 'test@user.com', password: 'someR@nd0mPa55' },
            { name: 'ab', email: 'test@user.com', password: 'someR@nd0mPa55' },
            { name: 'ababababababababababababababababababababababababab1', email: 'test@user.com', password: 'someR@nd0mPa55' },
            { name: 'Some Name', email: null, password: 'someR@nd0mPa55' },
            { name: 'Some Name', email: 'noemail', password: 'someR@nd0mPa55' },
            { name: 'Some Name', email: 'test@user.com', password: null },
            { name: 'Some Name', email: 'test@user.com', password: '12345' },
            { name: 'Some Name', email: 'test@user.com', password: '123451234512345123451' }
        ])(`should throw 'BadRequestError' with {name: $name, email: '$email', password: '$password'}.`, async ({ name, email, password }) => {
            // Arrange
            let request = httpMocks.createRequest({ body: { name: name, email: email, password: password } });
            let response = httpMocks.createResponse();

            await testExpressValidatorMiddleware(request, response, [
                check("name", "Name should be atleast 3 characters and maximum of 50.").isLength({ min: 3, max: 50 }),
                check("email", "Please enter a valid email.").isEmail(),
                check("password", "Password should be atleast 6 characters in length and maximum of 20.").isLength({ min: 6, max: 20 })
            ]);

            // Act
            await postUserSignUp(request, response);

            // Assert
            expect(response.statusCode).toBe(400);
        });
    });
});