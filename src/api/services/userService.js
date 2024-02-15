const jwt = require("jsonwebtoken");
const { BadRequestError, AuthorizationError } = require("../models/errors");
const config = require("../config/config.json");
const db = require("../utils/db");
const User = db.User;

exports.userSignUp = async (name, email, password) => {
  let user = await User.findOne({ email: { $eq: email } });

  if (user) {
    throw new BadRequestError(
      "User already registered with email [" + email + "].",
      409
    );
  }

  user = new User({ name, email, password });
  await user.save(user);
};

exports.userSignIn = async (email, password) => {
  let user = await User.findOne({ email: { $eq: email } });

  if (!user) {
    throw new AuthorizationError("Invalid username or password.");
  }

  //Authenticate the User
  if (!user.authenticate(password)) {
    throw new AuthorizationError("Invalid username or password.");
  }

  //Creating token
  const token = jwt.sign(
    { id: user._id, email },
    process.env.jwtSecret || config.jwtSecret
  );

  // Read name from user object
  const { name } = user;

  //Send response
  return {
    name,
    token,
  };
};
