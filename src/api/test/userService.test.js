const { AuthorizationError, BadRequestError } = require('../models/errors');
const db = require('./utils/db.mock');
const User = require('../models/user');
const {
  userSignUp,
  userSignIn
} = require("../services/userService");

beforeAll(async () => await db.ConnectDatabase());
afterAll(async () => await db.DisconnectDatabase());

//SignUp Testcases

describe("User Service", () => {
  describe("Sign-up", () => {
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

    it("should throw BadRequestError if user already exists.", async () => {
      // Arrange
      const request = {
        name: 'Test User 2',
        email: 'test@user2.com',
        password: 'someR@nd0mPa552'
      };
      const user = new User(request);
      await user.save();

      // Act
      const createUser = async () => await userSignUp(request.name, request.email, request.password);

      // Assert
      await expect(createUser()).rejects.toEqual(expect.any(BadRequestError));
      await expect(createUser()).rejects.toThrow('User already registered with email [test@user2.com].');
    });
  });

  describe("Sign-in", () => {
    it("should allow valid user to sign-in.", async () => {
      // Arrange
      const request = {
        name: 'Test User 3',
        email: 'test@user3.com',
        password: 'someR@nd0mPa553'
      };
      const user = new User(request);
      await user.save();

      // Act
      const response = await userSignIn(request.email, request.password);
      // Assert
      expect(response).toBeDefined();
      expect(response.name).toBeDefined();
      expect(response.name).toEqual(request.name);
      expect(response.token).toBeDefined();
    });

    it("should throw AuthorizationError when password does not match.", async () => {
      // Arrange
      const request = {
        name: 'Test User 4',
        email: 'test@user4.com',
        password: 'someR@nd0mPa554'
      };
      const user = new User(request);
      await user.save();

      // Act
      const loginUser = async () => await userSignIn(request.email, 'someInvalidPassword');

      // Assert
      await expect(loginUser()).rejects.toEqual(expect.any(AuthorizationError));
      await expect(loginUser()).rejects.toThrow('Invalid username or password.');
    });

    it("should throw AuthorizationError when user is not found.", async () => {
      // Arrange

      // Act
      const loginUser = async () => await userSignIn('someEmail@domain.com', 'somePassword');

      // Assert
      await expect(loginUser()).rejects.toEqual(expect.any(AuthorizationError));
      await expect(loginUser()).rejects.toThrow('Invalid username or password.');
    });
  });
});