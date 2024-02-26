const { BadRequestError } = require('../../models/errors');
// const httpMocks = require('node-mocks-http');
// const { check, param } = require('express-validator');
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
            const request = {
                body: {
                    name: 'Test User',
                    email: 'test@user.com',
                    password: 'someR@nd0mPa55'
                }
            };
            let response = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };

            // Act
            await postUserSignUp(request, response);
            // Assert
            expect(response.status).toBeCalledWith(201);
            expect(response.send).toBeCalled();
        });

        it("should throw `BadRequestError` when email already exists.", async () => {
            // Arrange
            const request = {
                body: {
                    name: 'Test User 2',
                    email: 'test@user2.com',
                    password: 'someR@nd0mPa552'
                }
            };
            let response = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };
            // Save a user in db.
            const user = new User(request.body);
            await user.save();

            // Act
            const createUser = async () => await postUserSignUp(request, response);
            // Assert
            await expect(createUser()).rejects.toEqual(expect.any(BadRequestError));
            await expect(createUser()).rejects.toThrow('User already registered with email [test@user2.com].');
        });

        // it.each([
        //     { name: null, email: 'test@user.com', password: 'someR@nd0mPa55' }
        // ])(`should throw 'BadRequestError' with {name: $name, email: '$email', password: '$password'}.`, async ({ n, e, p }) => {
        //     // Arrange
        //     const request = httpMocks.createRequest({ body: { name: n, email: e, password: p } });
        //     let response = {
        //         status: jest.fn().mockReturnThis(),
        //         send: jest.fn(),
        //         json: jest.fn()
        //     };

        //     [
        //         check("name", "Name should be atleast 3 characters and maximum of 50.").isLength({ min: 3, max: 50 }),
        //         check("email", "Please enter a valid email.").isEmail(),
        //         check("password", "Password should be atleast 6 characters in length and maximum of 20.").isLength({ min: 6, max: 20 })
        //     ].map(middleware => middleware(request, response, () => undefined));

        //     // Act
        //     await postUserSignUp(request, response);
        //     // Assert
        //     expect(response.status).toBeCalledWith(400);
        // });
    });
});