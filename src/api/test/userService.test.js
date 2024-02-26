const { BadRequestError } = require('../models/errors');
const db = require('./utils/db.mock');
const User = require('../models/user');
const {
  userSignUp
} = require("../services/userService");

beforeAll(async () => await db.ConnectDatabase());
afterAll(async () => await db.DisconnectDatabase());

//SignUp Testcases

describe("User Service -> Signup", () => {
  it("should create a user successfully.", async () => {

    // Arrange
    const request = {
      name: 'Test User',
      email: 'test@user.com',
      password: 'someR@nd0mPa55'
    };

    // Act
    const response = await userSignUp(request.name, request.email, request.password);

    // Assert
    expect(response).toBeDefined();
    expect(response._id).toBeDefined();
    expect(response.salt).toBeDefined();
    expect(response.encry_password).toBeDefined();
    expect(response.name).toStrictEqual(request.name);
    expect(response.email).toStrictEqual(request.email);
  });
});